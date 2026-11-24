# Changed — Bundle Modifications Report (Part 008 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `8 / 69` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (849 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 771. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37949-L37973` → after: `L18736-L18760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18736-L18760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18736-L18760) · [Before (L37949-L37973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37949-L37973)

```diff
-       qC = {
-         Mq: 2.5,
-         fluidDrag: 1,
-         fluidDragHorizontal: 1,
-         fluidDragVertical: 0,
-         gravityMultiplier: 3,
-         width: .25,
-         height: 1.1,
-         canRun: !1,
-         jumpMultiplier: 2.25,
-         canAutoStep: !0,
-         riderOffset: [0, .25, -.5],
-         pose: "driving",
-         effect: {
-           name: "Driving",
-           icon: "Red Kart"
- ... (9 more removed lines; see GitHub link above)
+       TS = function(pp, ip, cp, Op, op) {
+         var Ip = ip.props.children,
+           Sp = (0, uS.h)(Ip, dS.b).filter((function(pp) {
+             return function(pp, ip, cp) {
+               return !!CI()(ip) || ("horizontal" === pp ? "yAxis" === ip : "vertical" === pp || "x" === cp ? "xAxis" === ip : "y" !== cp || "yAxis" === ip)
+             }(Op, op, pp.props.direction)
+           }));
+         if (Sp && Sp.length) {
+           var xp = Sp.map((function(pp) {
+             return pp.props.dataKey
+           }));
+           return pp.reduce((function(pp, ip) {
+             var Op = ES(ip, cp);
+             if (CI()(Op)) return pp;
+             var op = Array.isArray(Op) ? [qI()(Op), mI()(Op)] : [Op, Op],
+               Ip = xp.reduce((function(pp, cp) {
+ ... (9 more added lines; see GitHub link above)
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37975-L37978` → after: `L18762-L18784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18762-L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18762-L18784) · [Before (L37975-L37978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37975-L37978)

```diff
-       FC = {
-         ...oC,
-         gripStrength: 5,
-         turnRate: 2.2
+       fS = function(pp, ip, cp, Op, op) {
+         var Ip = ip.map((function(ip) {
+           return TS(pp, ip, cp, op, Op)
+         })).filter((function(pp) {
+           return !CI()(pp)
+         }));
+         return Ip && Ip.length ? Ip.reduce((function(pp, ip) {
+           return [Math.min(pp[0], ip[0]), Math.max(pp[1], ip[1])]
+         }), [1 / 0, -1 / 0]) : null
+       },
+       bS = function(pp, ip, cp, Op, op) {
+         var Ip = ip.map((function(ip) {
+           var Ip = ip.props.dataKey;
+           return "number" === cp && Ip && TS(pp, ip, Ip, Op) || XS(pp, Ip, cp, op)
+         }));
+         if ("number" === cp) return Ip.reduce((function(pp, ip) {
+ ... (7 more added lines; see GitHub link above)
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37980-L37999` → after: `L18786-L18874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18786-L18874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18786-L18874) · [Before (L37980-L37999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37980-L37999)

```diff
-       WC = {
-         Mq: 3,
-         gravityMultiplier: 4,
-         jumpMultiplier: 3,
-         speedMultiplier: 10,
-         fluidSpeedMultiplier: .04,
-         riderOffset: [0, .25, -.2],
-         effect: {
-           name: "Driving",
-           icon: "Off Roader"
-         },
-         horizontalBounciness: .3,
-         verticalBounciness: .4,
-         steering: FC,
-         minVerticalSpeedToBounce: 2,
-         verticalImpactCameraShake: {
- ... (4 more removed lines; see GitHub link above)
+       hS = function(pp, ip) {
+         return "horizontal" === pp && "xAxis" === ip || "vertical" === pp && "yAxis" === ip || "centric" === pp && "angleAxis" === ip || "radial" === pp && "radiusAxis" === ip
+       },
+       aS = function(pp, ip, cp, Op) {
+         if (Op) return pp.map((function(pp) {
+           return pp.coordinate
+         }));
+         var op, Ip, Sp = pp.map((function(pp) {
+           return pp.coordinate === ip && (op = !0), pp.coordinate === cp && (Ip = !0), pp.coordinate
+         }));
+         return op || Sp.push(ip), Ip || Sp.push(cp), Sp
+       },
+       nS = function(pp, ip, cp) {
+         if (!pp) return null;
+         var Op = pp.scale,
+           op = pp.duplicateDomain,
+ ... (73 more added lines; see GitHub link above)
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38001-L38015` → after: `L18876-L18880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18876-L18880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18876-L18880) · [Before (L38001-L38015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38001-L38015)

```diff
-       };
- 
-     function NC(CC, zC) {
-       return {
-         ...WC,
-         speedMultiplier: zC,
-         fluidSpeedMultiplier: .02,
-         effect: {
-           name: "Driving",
-           icon: CC
-         },
-         horizontalBounciness: 0,
-         steering: {
-           ...FC,
-           turnRate: 1.65
+         return XI()(Ip) ? {
+           scale: Ip
+         } : {
+           scale: op.d(),
+           realScaleType: "point"
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38048-L38110` → after: `L18883-L18907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18883-L18907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18883-L18907) · [Before (L38048-L38110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38048-L38110)

```diff
-       [QC.g.GOLD_MINING_DRILL]: NC("Gold Mining Drill", 5),
-       [QC.g.IRON_MINING_DRILL]: NC("Iron Mining Drill", 4),
-       [QC.g.DIAMOND_MINING_DRILL]: NC("Diamond Mining Drill", 6),
-       [QC.g.MOONSTONE_MINING_DRILL]: NC("Moonstone Mining Drill", 7),
-       [QC.g.ARMORED_CAR]: {
-         Mq: 4.5,
-         gravityMultiplier: 4,
-         jumpMultiplier: 2.5,
-         speedMultiplier: 9,
-         fluidSpeedMultiplier: .4 / 9,
-         riderOffset: [0, .25, -.2],
-         effect: {
-           name: "Driving",
-           icon: "Armored Car"
-         },
-         standingFriction: 1.6,
- ... (47 more removed lines; see GitHub link above)
+       rS = 1e-4,
+       ZS = function(pp) {
+         var ip = pp.domain();
+         if (ip && !(ip.length <= 2)) {
+           var cp = ip.length,
+             Op = pp.range(),
+             op = Math.min(Op[0], Op[1]) - rS,
+             Ip = Math.max(Op[0], Op[1]) + rS,
+             Sp = pp(ip[0]),
+             xp = pp(ip[cp - 1]);
+           (Sp < op || Sp > Ip || xp < op || xp > Ip) && pp.domain([ip[0], ip[cp - 1]])
+         }
+       },
+       zS = function(pp, ip) {
+         if (!pp) return null;
+         for (var cp = 0, Op = pp.length; cp < Op; cp++)
+ ... (9 more added lines; see GitHub link above)
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38113-L38115` → after: `L18910-L18917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18910-L18917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18910-L18917) · [Before (L38113-L38115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38113-L38115)

```diff
-         [QC.k.WOOD]: {},
-         [QC.k.IRON]: {
-           airborneMovement: gC(17)
+         sign: function(pp) {
+           var ip = pp.length;
+           if (!(ip <= 0))
+             for (var cp = 0, Op = pp[0].length; cp < Op; ++cp)
+               for (var op = 0, Ip = 0, Sp = 0; Sp < ip; ++Sp) {
+                 var xp = bI()(pp[Sp][cp][1]) ? pp[Sp][cp][0] : pp[Sp][cp][1];
+                 xp >= 0 ? (pp[Sp][cp][0] = op, pp[Sp][cp][1] = op + xp, op = pp[Sp][cp][1]) : (pp[Sp][cp][0] = Ip, pp[Sp][cp][1] = Ip + xp, Ip = pp[Sp][cp][1])
+               }
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38117-L38118` → after: `L18919-L18927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18919-L18927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18919-L18927) · [Before (L38117-L38118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38117-L38118)

```diff
-         [QC.k.GOLD]: {
-           airborneMovement: gC(21)
+         expand: function(pp, ip) {
+           if ((Op = pp.length) > 0) {
+             for (var cp, Op, op, Ip = 0, Sp = pp[0].length; Ip < Sp; ++Ip) {
+               for (op = cp = 0; cp < Op; ++cp) op += pp[cp][Ip][1] || 0;
+               if (op)
+                 for (cp = 0; cp < Op; ++cp) pp[cp][Ip][1] /= op
+             }
+             tI(pp, ip)
+           }
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38120-L38131` → after: `L18929-L18937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18929-L18937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18929-L18937) · [Before (L38120-L38131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38120-L38131)

```diff
-         [QC.k.DIAMOND]: {
-           airborneMovement: gC(25)
-         }
-       },
-       PC = {
-         gravityMultiplier: 0,
-         upwardImpulseOnUse: 20,
-         ...RC("Red"),
-         airborneMode: {
-           activeMovementType: QC.o.FLOATING,
-           durationMs: 16e3,
-           exitsVehicleOnEnd: !0
+         none: tI,
+         silhouette: function(pp, ip) {
+           if ((cp = pp.length) > 0) {
+             for (var cp, Op = 0, op = pp[ip[0]], Ip = op.length; Op < Ip; ++Op) {
+               for (var Sp = 0, xp = 0; Sp < cp; ++Sp) xp += pp[Sp][Op][1] || 0;
+               op[Op][1] += op[Op][0] = -xp / 2
+             }
+             tI(pp, ip)
+           }
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38133-L38134` → after: `L18939-L18952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18939-L18952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18939-L18952) · [Before (L38133-L38134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38133-L38134)

```diff
-         airborneMovement: {
-           model: "heading"
+         wiggle: function(pp, ip) {
+           if ((op = pp.length) > 0 && (Op = (cp = pp[ip[0]]).length) > 0) {
+             for (var cp, Op, op, Ip = 0, Sp = 1; Sp < Op; ++Sp) {
+               for (var xp = 0, Lp = 0, Yp = 0; xp < op; ++xp) {
+                 for (var Dp = pp[ip[xp]], Ap = Dp[Sp][1] || 0, Pp = (Ap - (Dp[Sp - 1][1] || 0)) / 2, Wp = 0; Wp < xp; ++Wp) {
+                   var yp = pp[ip[Wp]];
+                   Pp += (yp[Sp][1] || 0) - (yp[Sp - 1][1] || 0)
+                 }
+                 Lp += Ap, Yp += Pp * Ap
+               }
+               cp[Sp - 1][1] += cp[Sp - 1][0] = Ip, Lp && (Ip -= Yp / Lp)
+             }
+             cp[Sp - 1][1] += cp[Sp - 1][0] = Ip, tI(pp, ip)
+           }
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38136-L38139` → after: `L18954-L18961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18954-L18961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18954-L18961) · [Before (L38136-L38139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38136-L38139)

```diff
-         airborneFallSpeedLimit: {
-           maxFallSpeed: 3,
-           slowDownSeconds: .15,
-           compensateGravity: !0
+         positive: function(pp) {
+           var ip = pp.length;
+           if (!(ip <= 0))
+             for (var cp = 0, Op = pp[0].length; cp < Op; ++cp)
+               for (var op = 0, Ip = 0; Ip < ip; ++Ip) {
+                 var Sp = bI()(pp[Ip][cp][1]) ? pp[Ip][cp][0] : pp[Ip][cp][1];
+                 Sp >= 0 ? (pp[Ip][cp][0] = op, pp[Ip][cp][1] = op + Sp, op = pp[Ip][cp][1]) : (pp[Ip][cp][0] = 0, pp[Ip][cp][1] = 0)
+               }
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38142-L38158` → after: `L18964-L19061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18964-L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18964-L19061) · [Before (L38142-L38158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38142-L38158)

```diff
-       GC = {
-         [QC.c.YELLOW]: RC("Yellow"),
-         [QC.c.WHITE]: RC("White"),
-         [QC.c.RED]: RC("Red"),
-         [QC.c.PURPLE]: RC("Purple"),
-         [QC.c.PINK]: RC("Pink"),
-         [QC.c.ORANGE]: RC("Orange"),
-         [QC.c.MAGENTA]: RC("Magenta"),
-         [QC.c.LIME]: RC("Lime"),
-         [QC.c.LIGHT_GRAY]: RC("Light Gray"),
-         [QC.c.LIGHT_BLUE]: RC("Light Blue"),
-         [QC.c.GREEN]: RC("Green"),
-         [QC.c.GRAY]: RC("Gray"),
-         [QC.c.CYAN]: RC("Cyan"),
-         [QC.c.BROWN]: RC("Brown"),
-         [QC.c.BLUE]: RC("Blue"),
- ... (1 more removed lines; see GitHub link above)
+       VS = function(pp, ip, cp) {
+         var Op = ip.map((function(pp) {
+             return pp.props.dataKey
+           })),
+           op = KS[cp],
+           Ip = function() {
+             var pp = (0, dI.c)([]),
+               ip = eI,
+               cp = tI,
+               Op = uI;
+ 
+             function op(op) {
+               var Ip, Sp, xp = Array.from(pp.apply(this, arguments), jI),
+                 Lp = xp.length,
+                 Yp = -1;
+               for (const pp of op)
+ ... (82 more added lines; see GitHub link above)
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38162-L38166` → after: `L19065-L19074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19065-L19074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19065-L19074) · [Before (L38162-L38166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38162-L38166)

```diff
-       return {
-         effect: {
-           name: "Floating",
-           icon: `${CC} Balloon`,
-           duration: 16e3
+       var ip = pp.axis,
+         cp = pp.ticks,
+         Op = pp.bandSize,
+         op = pp.entry,
+         Ip = pp.index,
+         Sp = pp.dataKey;
+       if ("category" === ip.type) {
+         if (!ip.allowDuplicatedCategory && ip.dataKey && !CI()(op[ip.dataKey])) {
+           var xp = (0, eS.h)(cp, "value", op[ip.dataKey]);
+           if (xp) return xp.coordinate + Op / 2
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38170-L38178` → after: `L19081-L19090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19081-L19090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19081-L19090) · [Before (L38170-L38178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38170-L38178)

```diff
-     const AC = {
-       [QC.t.ROTATION_1]: {
-         fixedHeading: 0
-       },
-       [QC.t.ROTATION_2]: {
-         fixedHeading: Math.PI / 2
-       },
-       [QC.t.ROTATION_3]: {
-         fixedHeading: Math.PI
+     var Ox = function(pp) {
+         var ip = pp.axis,
+           cp = pp.ticks,
+           Op = pp.offset,
+           op = pp.bandSize,
+           Ip = pp.entry,
+           Sp = pp.index;
+         if ("category" === ip.type) return cp[Sp] ? cp[Sp].coordinate + Op : null;
+         var xp = ES(Ip, ip.dataKey, ip.domain[Sp]);
+         return CI()(xp) ? null : ip.scale(xp) - op / 2 + Op
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38186-L38234` → after: `L19093-L19108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19093-L19108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19093-L19108) · [Before (L38186-L38234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38186-L38234)

```diff
-         return CC[CC.Unset = 0] = "Unset", CC[CC.Off = 1] = "Off", CC[CC.On = 2] = "On", CC
-       }(JC || {});
-     class IC {
-       constructor(CC, zC) {
-         this.baseSettings = void 0, this.tierSettings = void 0, this.minSettings = void 0, this.maxSettings = void 0, this.baseBlockLookups = void 0, this.tierBlockLookups = void 0, this.baseSettings = {
-           ...wC.f,
-           ...CC
-         };
-         const ZC = {};
-         for (const wC in zC) {
-           const CC = Number(wC);
-           ZC[CC] = {
-             ...this.baseSettings,
-             ...zC[CC]
-           }
-         }
- ... (33 more removed lines; see GitHub link above)
+         var ip = pp.numericAxis,
+           cp = ip.scale.domain();
+         if ("number" === ip.type) {
+           var Op = Math.min(cp[0], cp[1]),
+             op = Math.max(cp[0], cp[1]);
+           return Op <= 0 && op >= 0 ? 0 : op < 0 ? op : Op
+         }
+         return cp[0]
+       },
+       Ix = function(pp, ip) {
+         var cp, Op = (null !== (cp = pp.type) && void 0 !== cp && cp.defaultProps ? MS(MS({}, pp.type.defaultProps), pp.props) : pp.props).stackId;
+         if ((0, eS.B)(Op)) {
+           var op = ip[Op];
+           if (op) {
+             var Ip = op.items.indexOf(pp);
+             return Ip >= 0 ? op.stackedData[Ip] : null
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38237-L38262` → after: `L19111-L19147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19111-L19147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19111-L19147) · [Before (L38237-L38262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38237-L38262)

```diff
-         this.tierBlockLookups = oC
-       }
-       getAllSettingsForTier(CC) {
-         return null === CC ? this.baseSettings : this.tierSettings[CC]
-       }
-       getBlockLookupsForTier(CC) {
-         return null === CC ? this.baseBlockLookups : this.tierBlockLookups[CC]
-       }
-       getMinSetting(CC) {
-         return this.minSettings[CC]
-       }
-       getMaxSetting(CC) {
-         return this.maxSettings[CC]
-       }
-       buildTierLookups(CC, zC) {
-         const ZC = CC(this.baseSettings),
- ... (10 more removed lines; see GitHub link above)
+         return null
+       },
+       Sx = function(pp, ip, cp) {
+         return Object.keys(pp).reduce((function(Op, op) {
+           var Ip = pp[op].stackedData.reduce((function(pp, Op) {
+             var op = Op.slice(ip, cp + 1).reduce((function(pp, ip) {
+               return [qI()(ip.concat([pp[0]]).filter(eS.D)), mI()(ip.concat([pp[1]]).filter(eS.D))]
+             }), [1 / 0, -1 / 0]);
+             return [Math.min(pp[0], op[0]), Math.max(pp[1], op[1])]
+           }), [1 / 0, -1 / 0]);
+           return [Math.min(Ip[0], Op[0]), Math.max(Ip[1], Op[1])]
+         }), [1 / 0, -1 / 0]).map((function(pp) {
+           return pp === 1 / 0 || pp === -1 / 0 ? 0 : pp
+         }))
+       },
+       xx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
+ ... (21 more added lines; see GitHub link above)
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38265-L38272` → after: `L19186-L19192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19186-L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19186-L19192) · [Before (L38265-L38272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38265-L38272)

```diff
-     }
- 
-     function iC(CC) {
-       return (0, bC.lc)(CC) ? null : (0, bC.T)(xC.n, (zC => {
-         var ZC;
-         return null !== (ZC = CC[(0, xC.e)(zC)]) && void 0 !== ZC ? ZC : 1
-       }), Float64Array)
-     }
+   },
+   6264: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Pp,
+       g: () => Ap
+     });
+     var Op = cp(6115);
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38275-L38278` → after: `L19195-L19199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19195-L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19195-L19199) · [Before (L38275-L38278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38275-L38278)

```diff
-       return (0, bC.lc)(CC) ? null : (0, bC.T)(xC.n, (zC => {
-         const ZC = CC[(0, xC.e)(zC)];
-         return void 0 === ZC ? JC.Unset : ZC ? JC.On : JC.Off
-       }), Uint8Array)
+       return op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, op(pp)
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38281-L38289` → after: `L19202-L19208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19202-L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19202-L19208) · [Before (L38281-L38289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38281-L38289)

```diff
-     function eC(CC, zC, ZC) {
-       if (CC) {
-         let ZC = !1;
-         for (let QC = 0; QC < zC.length; QC++) {
-           const wC = CC[zC[QC]];
-           if (wC === JC.On) return !0;
-           wC === JC.Off && (ZC = !0)
-         }
-         if (ZC) return !1
+     function Ip(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38353-L38363` → after: `L19214-L19220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19214-L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19214-L19220) · [Before (L38353-L38363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38353-L38363)

```diff
-       return hC[CC]
-     }
- 
-     function YC(CC, zC) {
-       return hC[CC].getAllSettingsForTier(zC)
-     }
- 
-     function* dC() {
-       for (const CC in hC) {
-         const zC = Number(CC);
-         yield zC
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ip(Object(cp), !0).forEach((function(ip) {
+           xp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ip(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38368-L38369` → after: `L19226-L19243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19226-L19243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19226-L19243) · [Before (L38368-L38369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38368-L38369)

```diff
-       const QC = zC ? CC.fluidSpeedMultiplier : ZC ? CC.landSpeedMultiplier : CC.airSpeedMultiplier;
-       return CC.speedMultiplier * QC
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != op(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != op(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == op(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38373` → after: `L19379-L19381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19379-L19381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19379-L19381) · [Before (L38373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38373)

```diff
-       return null !== CC.fixedHeading ? CC.fixedHeading : CC.steering ? zC : ZC
+       return pp && pp.length ? pp.find((function(pp) {
+         return pp && ("function" === typeof ip ? ip(pp) : Lp()(pp, ip)) === cp
+       })) : null
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38376` → after: `L19398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19398) · [Before (L38376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38376)

```diff
-   6480: (CC, zC, ZC) => {
+   6115: (pp, ip, cp) => {
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38378-L38380` → after: `L19400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19400) · [Before (L38378-L38380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38378-L38380)

```diff
-       e: () => WC,
-       f: () => wC,
-       i: () => NC
+       e: () => Op
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38382-L38398` → after: `L19402-L19414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19402-L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19402-L19414) · [Before (L38382-L38398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38382-L38398)

```diff
-     var QC = ZC(6484);
- 
-     function wC(CC, zC) {
-       return CC && zC === QC.r.DEFAULT
-     }
-     const bC = 150,
-       nC = 1.6,
-       fC = 65,
-       oC = 500,
-       qC = .6,
-       FC = .5;
-     class WC {
-       constructor() {
-         this.Mw = 0, this.gw = 0, this.yVelocity = 0
-       }
-       reset() {
- ... (1 more removed lines; see GitHub link above)
+     var Op = {
+       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
+       get: function(pp) {
+         return Op[pp]
+       },
+       set: function(pp, ip) {
+         if ("string" === typeof pp) Op[pp] = ip;
+         else {
+           var cp = Object.keys(pp);
+           cp && cp.length && cp.forEach((function(ip) {
+             Op[ip] = pp[ip]
+           }))
+         }
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38401-L38407` → after: `L19417-L19425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19417-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19417-L19425) · [Before (L38401-L38407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38401-L38407)

```diff
- 
-     function NC(CC, zC, ZC, QC) {
-       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
-       CC.Mw = zC ? Math.min(CC.Mw + nC / bC * wC, nC) : 0, 0 === ZC ? CC.gw = 0 : QC ? CC.gw = wC : CC.gw += wC;
-       const WC = Math.min(CC.gw, bC) / bC,
-         NC = (fC + WC * oC) * ZC;
-       return CC.yVelocity *= Math.pow(qC, wC), Math.abs(CC.yVelocity) < FC && (CC.yVelocity = 0), NC
+   },
+   6360: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
+     });
+     var Op = function(pp, ip) {
+       var cp = pp.alwaysShow,
+         Op = pp.ifOverflow;
+       return cp && (Op = "extendDomain"), Op === ip
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38410` → after: `L19428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19428) · [Before (L38410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38410)

```diff
-   38312: (CC, zC, ZC) => {
+   5582: (pp, ip, cp) => {
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38412-L38413` → after: `L19430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19430) · [Before (L38412-L38413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38412-L38413)

```diff
-       e: () => wC,
-       i: () => QC
+       d: () => Op
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38415-L38417` → after: `L19432-L19434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19432-L19434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19432-L19434) · [Before (L38415-L38417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38415-L38417)

```diff
-     const QC = 25,
-       wC = 90;
-     Math.min(QC, wC)
+     var Op = function(pp, ip) {
+       for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op]
+     }
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38419` → after: `L19436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19436) · [Before (L38419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38419)

```diff
-   37490: (CC, zC, ZC) => {
+   6357: (pp, ip, cp) => {
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38422-L38423` → after: `L19439-L19440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19439-L19440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19439-L19440) · [Before (L38422-L38423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38422-L38423)

```diff
-       d: () => nC,
-       e: () => fC
+       f: () => Pp,
+       i: () => Yp
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38425-L38430` → after: `L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19442) · [Before (L38425-L38430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38425-L38430)

```diff
-     var QC = ZC(338),
-       wC = ZC.n(QC),
-       bC = ZC(326);
-     let nC, fC, oC;
-     var qC, FC, WC, NC, MC, gC, SC, pC, PC;
-     const GC = [3, 0, 1, "i", 68, 188, "j", 7, "f", 6, "e", 8, 255, "length", 152, 2, "d", 81, 87, "undefined", void 0, "c", 75, "a", 63, "fromCodePoint", 12, "push", 108, "b", "h", 64, 164, 104, 91, 227, 8191, 88, 13, 14, 4, 132, 243, 5, 1023, 65536, 10, 55296, 56320, 128, 31, 1 … [truncated]
+     cp(5575), cp(62), cp(5405);
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38433-L38444` → after: `L19445-L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19445-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19445-L19449) · [Before (L38433-L38444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38433-L38444)

```diff
-       return typeof qC[CC] === GC[19] ? qC[CC] = function(...CC) {
-         for (eC(CC[GC[13]] = GC[2], CC[GC[5]] = 'amZNAeJPgHMTpqtsXISBnRWQoCkrEOfKixY([@{uhD,L1`F7Gcv=&y/dl?2jUV|^zw4_68#}$)9+.!350%;*]<:b">~', CC[GC[0]] = "" + (CC[GC[1]] || ""), CC[GC[4]] = CC[GC[0]].length, CC[GC[10]] = [], CC[GC[8]] = GC[1], CC[GC[9]] = GC[1], CC[GC[7]] = -GC[ … [truncated]
-           if (CC[GC[6]] = CC[GC[5]].indexOf(CC[GC[0]][CC[GC[3]]]), CC[GC[6]] !== -GC[2])
-             if (CC[GC[7]] < GC[1]) CC[GC[7]] = CC[GC[6]];
-             else {
-               eC(CC[GC[7]] += CC[GC[6]] * GC[34], CC[GC[8]] |= CC[GC[7]] << CC[GC[9]], CC[GC[9]] += (CC[GC[7]] & GC[36]) > GC[37] ? GC[38] : GC[39]);
-               do {
-                 eC(CC[GC[10]].push(CC[GC[8]] & GC[12]), CC[GC[8]] >>= GC[11], CC[GC[9]] -= GC[11])
-               } while (CC[GC[9]] > GC[7]);
-               CC[GC[7]] = -GC[2]
-             } return CC[GC[7]] > -GC[2] && CC[GC[10]].push((CC[GC[8]] | CC[GC[7]] << CC[GC[9]]) & GC[12]), AC(CC[GC[10]])
-       }(FC[CC]) : qC[CC]
+       return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Op(pp)
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38447-L38448` → after: `L19452-L19460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19452-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19452-L19460) · [Before (L38447-L38448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38447-L38448)

```diff
-     function AC(CC) {
-       return typeof NC !== GC[19] && NC ? (new NC).decode(new MC(CC)) : typeof gC !== GC[19] && gC ? gC.from(CC).toString("utf-8") : PC(CC)
+     function op(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38451-L38689` → after: `L19463-L19470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19463-L19470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19463-L19470) · [Before (L38451-L38689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38451-L38689)

```diff
-     function xC() {}
-     eC(qC = {}, FC = ["hIs.<.nzbqrN1}uBhG2=_YpS^UM;QvdO!wOAJ94oKR7Ih7HBDkJKLc6fP", "h@Srx/w=Ks2csk!um9RPU!7qGU2i28DuOF3)2F9o)|]eH$&Y`=*Oq.@7bqaQm", ">IuEmdH^7R7P*Z_Sm/19V5yQn?x", '%n6k4]<(,T"B*kt', 'MAcrb8CO3j3srZwfdN;i"}bQLgR.$*mo[9g/k', 'L?#Ag|PP0^{|2C}C_6.K"*I(^y>i"*1kvK6!z$e% … [truncated]
-       eC(CC[GC[13]] = GC[1], CC[GC[17]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], CC[GC[14]] = GC[20], CC[GC[15]] = []);
-       try {
-         eC(CC[GC[14]] = Object, CC[GC[15]][GC[27]]("".__proto__.constructor.name))
-       } catch (FC) {}
-       CC: for (CC[GC[16]] = GC[1]; CC[GC[16]] < CC[GC[17]][GC[13]]; CC[GC[16]]++) try {
-         for (CC[GC[14]] = CC[GC[17]][CC[GC[16]]](), CC[-GC[18]] = GC[1]; CC[-GC[18]] < CC[GC[15]][GC[13]]; CC[-GC[18]]++)
- ... (223 more removed lines; see GitHub link above)
+     function Ip(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? op(Object(cp), !0).forEach((function(ip) {
+           Sp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : op(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38691-L38707` → after: `L19472-L19473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19472-L19473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19472-L19473) · [Before (L38691-L38707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38691-L38707)

```diff
-       if (eC(CC[GC[2]][zC(GC[61]) + zC(GC[72]) + zC(GC[49]) + zC(GC[75])] = GC[91], CC[GC[2]][zC(GC[76]) + zC(135) + zC(136)] = CC[GC[2]][zC(GC[80]) + zC(GC[81]) + zC(GC[82])], CC[GC[73]] = CC[GC[40]]), CC[GC[40]] === GC[1] && CC[GC[43]] !== GC[1]) {
-         function PC(...CC) {
-           for (eC(CC[GC[13]] = GC[2], CC[GC[23]] = 'u#3=)^>4ezvA5]B9(C<J`7cT"l+t;wVhiDH!.LOmRg/KEMp%a*PyI0FsZo[_nXq,{QkUSr2?}b6f1:x8$Wj|GdY&~@N', CC[-GC[4]] = "" + (CC[GC[1]] || ""), CC[GC[21]] = CC[-GC[4]].length, CC[GC[40]] = [], CC[-GC[17]] = GC[1], CC[GC[78]] = GC[1], CC[GC[7 … [truncated]
-             if (CC[-GC[76]] = CC[GC[23]].indexOf(CC[-GC[4]][CC[GC[11]]]), CC[-GC[76]] !== -GC[2])
-               if (CC[GC[77]] < GC[1]) CC[GC[77]] = CC[-GC[76]];
-               else {
-                 eC(CC[GC[77]] += CC[-GC[76]] * GC[34], CC[-GC[17]] |= CC[GC[77]] << CC[GC[78]], CC[GC[78]] += (CC[GC[77]] & GC[36]) > GC[37] ? GC[38] : GC[39]);
-                 do {
-                   eC(CC[GC[40]].push(CC[-GC[17]] & GC[12]), CC[-GC[17]] >>= GC[11], CC[GC[78]] -= GC[11])
-                 } while (CC[GC[78]] > GC[7]);
-                 CC[GC[77]] = -GC[2]
-               } return CC[GC[77]] > -GC[2] && CC[GC[40]].push((CC[-GC[17]] | CC[GC[77]] << CC[GC[78]]) & GC[12]), AC(CC[GC[40]])
-         }
- 
-         function JC(...CC) {
-           return CC[GC[13]] = GC[2], typeof qC[CC[GC[1]]] === GC[19] ? qC[CC[GC[1]]] = PC(FC[CC[GC[1]]]) : qC[CC[GC[1]]]
- ... (1 more removed lines; see GitHub link above)
+       return pp
+     }
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38709-L38714` → after: `L19475-L19562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19475-L19562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19475-L19562) · [Before (L38709-L38714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38709-L38714)

```diff
-         function IC() {
-           var CC;
-           eC(CC = function(...zC) {
-             if (eC(zC[GC[13]] = GC[9], zC[GC[55]] = null), !(zC[GC[43]] < GC[1])) {
-               if (zC[GC[43]] === GC[1]) return zC[GC[1]].push(zC[GC[2]]);
-               for (zC[GC[29]] = zC[GC[15]]; zC[GC[29]] < zC[GC[0]] && !(zC[GC[40]][zC[GC[29]]] > zC[GC[43]]); zC[GC[29]]++) zC[GC[29]] > zC[GC[15]] && zC[GC[40]][zC[GC[29]]] === zC[GC[40]][zC[GC[29]] - GC[2]] || eC(zC[GC[55]] = Array.from(zC[GC[2]]), zC[GC[55]].push(zC[GC[40]][zC … [truncated]
+     function Sp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Op(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var op = cp.call(pp, ip || "default");
+             if ("object" != Op(op)) return op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Op(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (72 more added lines; see GitHub link above)
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38716-L38719` → after: `L19564-L19575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19564-L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19564-L19575) · [Before (L38716-L38719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38716-L38719)

```diff
-           }, console.log((function(zC, ZC) {
-             var QC, wC = [];
-             return eC(QC = zC.length, zC.sort(((CC, zC) => CC - zC)), CC(wC, [], GC[1], QC, zC, ZC)), wC
-           })))
+           }(ip),
+           yp = Wp.startAngle,
+           Up = Wp.endAngle,
+           wp = xp;
+         if (yp <= Up) {
+           for (; wp > Up;) wp -= 360;
+           for (; wp < yp;) wp += 360;
+           Pp = wp >= yp && wp <= Up
+         } else {
+           for (; wp > yp;) wp -= 360;
+           for (; wp < Up;) wp += 360;
+           Pp = wp >= Up && wp <= yp
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38721-L38810` → after: `L19577-L19581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19577-L19581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19577-L19581) · [Before (L38721-L38810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38721-L38810)

```diff
-         JC(140) in xC && IC(), CC[GC[73]] = GC[2]
-       }
-       const ZC = CC[GC[73]] < GC[1] ? -CC[GC[43]] : CC[GC[43]],
-         QC = CC[GC[40]] !== GC[1] ? Math[GC[79]] / GC[40] : Math[GC[79]] / GC[15],
-         wC = CC[GC[7]] + ZC * QC,
-         nC = bC[GC[21]][zC(141)](CC[GC[2]][zC(GC[80]) + zC(GC[81]) + zC(GC[82])], wC),
-         fC = CC[GC[11]] / GC[97],
-         oC = nC * (GC[2] - Math[zC(142)](-vC * fC)),
-         WC = CC[GC[0]][zC(143) + "te"] * fC,
-         NC = bC[GC[21]][zC(GC[83])](oC, -WC, WC);
-       CC[GC[2]][zC(GC[80]) + zC(GC[81]) + zC(GC[82])] = (CC[GC[2]][zC(GC[80]) + zC(GC[81]) + zC(GC[82])] + NC) % (Math[GC[79]] * GC[15]);
-       const MC = bC[GC[21]][zC(GC[83])](Math[zC(GC[85])](nC) / (Math[GC[79]] / GC[15]), GC[1], GC[2]);
-       CC[GC[73]] !== GC[1] ? eC(CC[GC[15]].heading = CC[GC[73]] > GC[1] ? CC[GC[2]][zC(GC[80]) + zC(GC[81]) + zC(GC[82])] : CC[GC[2]][zC(GC[80]) + zC(GC[81]) + zC(GC[82])] + Math[GC[79]], CC[GC[15]][GC[84]] = CC[GC[9]] * Math[zC(GC[85])](CC[GC[73]]) * (GC[2] - CC[GC[0]][zC(146) + … [truncated]
-     }, fC = (...CC) => {
-       function zC(...CC) {
-         return CC[GC[13]] = GC[2], typeof qC[CC[GC[1]]] === GC[19] ? qC[CC[GC[1]]] = function(...CC) {
- ... (74 more removed lines; see GitHub link above)
+         return Pp ? Ip(Ip({}, ip), {}, {
+           radius: Sp,
+           angle: Ap(wp, ip)
+         }) : null
+       }
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38812` → after: `L19583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19583) · [Before (L38812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38812)

```diff
-   38035: (CC, zC, ZC) => {
+   5588: (pp, ip, cp) => {
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38814-L38816` → after: `L19585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19585) · [Before (L38814-L38816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38814-L38816)

```diff
-       b: () => PC,
-       f: () => AC,
-       g: () => IC,
+       d: () => Jp,
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38818` → after: `L19587-L19590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19587-L19590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19587-L19590) · [Before (L38818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38818)

```diff
-       l: () => gC,
+       i: () => Cp,
+       k: () => kp,
+       m: () => fp,
+       n: () => Qp,
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38821-L38822` → after: `L19593-L19594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19593-L19594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19593-L19594) · [Before (L38821-L38822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38821-L38822)

```diff
-       t: () => vC,
-       w: () => NC
+       u: () => Tp,
+       y: () => Ep
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38824-L38846` → after: `L19596-L19653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19596-L19653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19596-L19653) · [Before (L38824-L38846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38824-L38846)

```diff
-     var QC = ZC(6484),
-       wC = ZC(36926),
-       bC = ZC(9194);
-     const nC = (0, bC.k)("Water"),
-       fC = (0, bC.k)("Lava"),
-       oC = (0, bC.k)("Air"),
-       qC = {
-         physicsState: {
-           type: QC.r.CAR,
-           tier: QC.g.KART
-         },
-         validBlockIds: "solidBlocks",
-         meshSize: 4,
-         placeSound: null
-       },
-       FC = {
- ... (7 more removed lines; see GitHub link above)
+     var Op = cp(5326),
+       op = cp.n(Op),
+       Ip = cp(5575),
+       Sp = cp.n(Ip),
+       xp = cp(5301),
+       Lp = cp.n(xp),
+       Yp = cp(5405),
+       Dp = cp.n(Yp),
+       Ap = cp(5214),
+       Pp = cp.n(Ap),
+       Wp = cp(62),
+       yp = cp(5596),
+       Up = cp(5299),
+       wp = cp(5610),
+       vp = cp(5619),
+       tp = ["children"],
+ ... (42 more added lines; see GitHub link above)
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L38848-L39028` → after: `L19655-L19656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19655-L19656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19655-L19656) · [Before (L38848-L39028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L38848-L39028)

```diff
-       WC = {
-         Boat: {
-           meshItemName: "INTERNAL_MESH_Boat",
-           physicsState: {
-             type: QC.r.BOAT,
-             tier: QC.e.WOOD
-           },
-           validBlockIds: [nC, fC],
-           meshSize: 1.2,
-           placeSound: "splash1"
-         },
-         "Obsidian Boat": {
-           meshItemName: "INTERNAL_MESH_Obsidian Boat",
-           physicsState: {
-             type: QC.r.BOAT,
-             tier: QC.e.OBSIDIAN
- ... (165 more removed lines; see GitHub link above)
+       kp = function(pp) {
+         return "string" === typeof pp ? pp : pp ? pp.displayName || pp.name || "Component" : ""
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39030` → after: `L19658-L19666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19658-L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19658-L19666) · [Before (L39030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39030)

```diff
-       NC = Object.values(WC).map((CC => CC.meshItemName));
+       mp = null,
+       Rp = null,
+       qp = function pp(ip) {
+         if (ip === mp && Array.isArray(Rp)) return Rp;
+         var cp = [];
+         return Wp.Children.forEach(ip, (function(ip) {
+           Sp()(ip) || ((0, yp.isFragment)(ip) ? cp = cp.concat(pp(ip.props.children)) : cp.push(ip))
+         })), Rp = cp, mp = ip, cp
+       };
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39032-L39035` → after: `L19668-L19675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19668-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19668-L19675) · [Before (L39032-L39035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39032-L39035)

```diff
-     function MC(CC) {
-       for (const zC of wC.e)
-         if (WC[zC].meshItemName === CC) return zC;
-       return null
+     function Mp(pp, ip) {
+       var cp = [],
+         Op = [];
+       return Op = Array.isArray(ip) ? ip.map((function(pp) {
+         return kp(pp)
+       })) : [kp(ip)], qp(pp).forEach((function(pp) {
+         var ip = op()(pp, "type.displayName") || op()(pp, "type.name"); - 1 !== Op.indexOf(ip) && cp.push(pp)
+       })), cp
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39039-L39044` → after: `L19679-L19680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19679-L19680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19679-L19680) · [Before (L39039-L39044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39039-L39044)

```diff
-       const ZC = CC.validBlockIds;
-       if (Array.isArray(ZC)) return ZC.includes(zC);
-       if (zC === oC) return !1;
-       if ("solidBlocks" === ZC) return !0 !== bC.g[zC].NM;
-       if ("solidBlocksOrFluid" === ZC) return !0;
-       throw new Error(`Unsupported validBlockIds for ${zC}: ${JSON.stringify(ZC)}`)
+       var cp = Mp(pp, ip);
+       return cp && cp[0]
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39046-L39051` → after: `L19682-L19687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19682-L19687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19682-L19687) · [Before (L39046-L39051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39046-L39051)

```diff
-     const SC = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
+     var Ep = function(pp) {
+         if (!pp || !pp.props) return !1;
+         var ip = pp.props,
+           cp = ip.width,
+           Op = ip.height;
+         return !(!(0, Up.D)(cp) || cp <= 0 || !(0, Up.D)(Op) || Op <= 0)
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39053-L39164` → after: `L19689-L19720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19689-L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19689-L19720) · [Before (L39053-L39164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39053-L39164)

```diff
-       pC = {
-         "Yellow Balloon": {
-           ...SC,
-           physicsState: {
-             type: QC.r.BALLOON,
-             tier: QC.c.YELLOW
-           }
-         },
-         "White Balloon": {
-           ...SC,
-           physicsState: {
-             type: QC.r.BALLOON,
-             tier: QC.c.WHITE
-           }
-         },
-         "Red Balloon": {
- ... (96 more removed lines; see GitHub link above)
+       Xp = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
+       lp = function(pp) {
+         return pp && pp.type && Lp()(pp.type) && Xp.indexOf(pp.type) >= 0
+       },
+       Qp = function(pp) {
+         return pp && "object" === ep(pp) && "clipDot" in pp
+       },
+       Jp = function(pp, ip, cp) {
+         if (!pp || "function" === typeof pp || "boolean" === typeof pp) return null;
+         var Op = pp;
+         if ((0, Wp.isValidElement)(pp) && (Op = pp.props), !Pp()(Op)) return null;
+         var op = {};
+         return Object.keys(Op).forEach((function(pp) {
+           var Ip;
+           (function(pp, ip, cp, Op) {
+             var op, Ip = null !== (op = null === vp.e || void 0 === vp.e ? void 0 : vp.e[Op]) && void 0 !== op ? op : [];
+ ... (16 more added lines; see GitHub link above)
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39166-L39176` → after: `L19722-L19733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19722-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19722-L19733) · [Before (L39166-L39176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39166-L39176)

```diff
-       };
- 
-     function PC(CC) {
-       var zC;
-       return null === CC || void 0 === CC ? null : null !== (zC = pC[CC]) && void 0 !== zC ? zC : null
-     }
-     const GC = {
-         meshAttachment: {
-           size: 3,
-           offset: [0, .72, .3],
-           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+         return !0
+       },
+       Np = function(pp, ip) {
+         if (Sp()(pp) && Sp()(ip)) return !0;
+         if (!Sp()(pp) && !Sp()(ip)) {
+           var cp = pp.props || {},
+             Op = cp.children,
+             op = dp(cp, tp),
+             Ip = ip.props || {},
+             xp = Ip.children,
+             Lp = dp(Ip, Hp);
+           return Op && xp ? (0, wp.b)(op, Lp) && Bp(Op, xp) : !Op && !xp && (0, wp.b)(op, Lp)
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39179-L39205` → after: `L19737-L19750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19737-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19737-L19750) · [Before (L39179-L39205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39179-L39205)

```diff
-       RC = {
-         "Wood Hang Glider": {
-           ...GC,
-           physicsState: {
-             type: QC.r.GLIDER,
-             tier: QC.k.WOOD
-           }
-         },
-         "Iron Hang Glider": {
-           ...GC,
-           physicsState: {
-             type: QC.r.GLIDER,
-             tier: QC.k.IRON
-           }
-         },
-         "Gold Hang Glider": {
- ... (11 more removed lines; see GitHub link above)
+       Tp = function(pp, ip) {
+         var cp = [],
+           Op = {};
+         return qp(pp).forEach((function(pp, op) {
+           if (lp(pp)) cp.push(pp);
+           else if (pp) {
+             var Ip = kp(pp.type),
+               Sp = ip[Ip] || {},
+               xp = Sp.handler,
+               Lp = Sp.once;
+             if (xp && (!Lp || !Op[Ip])) {
+               var Yp = xp(pp, Ip, op);
+               cp.push(Yp), Op[Ip] = !0
+             }
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39207-L39208` → after: `L19752-L19780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19752-L19780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19752-L19780) · [Before (L39207-L39208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39207-L39208)

```diff
-         }
-       };
+         })), cp
+       },
+       fp = function(pp) {
+         var ip = pp && pp.type;
+         return ip && jp[ip] ? jp[ip] : null
+       },
+       bp = function(pp, ip) {
+         return qp(ip).indexOf(pp)
+       }
+   },
+   5610: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       for (var cp in pp)
+         if ({}.hasOwnProperty.call(pp, cp) && (!{}.hasOwnProperty.call(ip, cp) || pp[cp] !== ip[cp])) return !1;
+       for (var Op in ip)
+         if ({}.hasOwnProperty.call(ip, Op) && !{}.hasOwnProperty.call(pp, Op)) return !1;
+ ... (13 more added lines; see GitHub link above)
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39211-L39212` → after: `L19783-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19783-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19783-L19787) · [Before (L39211-L39212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39211-L39212)

```diff
-       var zC;
-       return null === CC || void 0 === CC ? null : null !== (zC = RC[CC]) && void 0 !== zC ? zC : null
+       return Sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Sp(pp)
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39217-L39218` → after: `L19790-L19798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19790-L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19790-L19798) · [Before (L39217-L39218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39217-L39218)

```diff
-     function IC(CC) {
-       return xC.has(CC)
+     function xp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39222` → after: `L19802-L19810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19802-L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19802-L19810) · [Before (L39222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39222)

```diff
-       return JC.has(CC)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? xp(Object(cp), !0).forEach((function(ip) {
+           Yp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : xp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39225-L39228` → after: `L19813-L19872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19813-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19813-L19872) · [Before (L39225-L39228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39225-L39228)

```diff
-     function vC(CC) {
-       return CC === QC.r.DEFAULT || function(CC) {
-         return xC.has(CC) || JC.has(CC)
-       }(CC)
+     function Yp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Sp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Sp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Sp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (44 more added lines; see GitHub link above)
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39231` → after: `L19875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19875) · [Before (L39231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39231)

```diff
-   37014: (CC, zC, ZC) => {
+   6121: (pp, ip, cp) => {
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39233-L39236` → after: `L19877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19877) · [Before (L39233-L39236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39233-L39236)

```diff
-       b: () => nC,
-       d: () => bC,
-       f: () => QC,
-       g: () => wC
+       e: () => xp
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39238-L39249` → after: `L19879-L19886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19879-L19886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19879-L19886) · [Before (L39238-L39249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39238-L39249)

```diff
-     let QC = function(CC) {
-         return CC[CC.Linear = 0] = "Linear", CC[CC.CatmullRomSpline = 1] = "CatmullRomSpline", CC
-       }({}),
-       wC = function(CC) {
-         return CC[CC.NoLoop = 0] = "NoLoop", CC[CC.LoopOnLastFrame = 1] = "LoopOnLastFrame", CC[CC.HoldOnLastFrame = 2] = "HoldOnLastFrame", CC
-       }({}),
-       bC = function(CC) {
-         return CC[CC.Movement = 0] = "Movement", CC[CC.Action = 1] = "Action", CC[CC.Emote = 2] = "Emote", CC[CC.Custom = 3] = "Custom", CC
-       }({}),
-       nC = function(CC) {
-         return CC[CC.Start = 0] = "Start", CC[CC.Stop = 1] = "Stop", CC
-       }({})
+     var Op = cp(6123),
+       op = cp.n(Op),
+       Ip = cp(5405),
+       Sp = cp.n(Ip);
+ 
+     function xp(pp, ip, cp) {
+       return !0 === ip ? op()(pp, cp) : Sp()(ip) ? op()(pp, ip) : pp
+     }
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39251` → after: `L19888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19888) · [Before (L39251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39251)

```diff
-   38225: (CC, zC, ZC) => {
+   5619: (pp, ip, cp) => {
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39254` → after: `L19891-L19894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19891-L19894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19891-L19894) · [Before (L39254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39254)

```diff
-       f: () => FC
+       e: () => Yp,
+       g: () => xp,
+       h: () => Ap,
+       i: () => Pp
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39256-L39258` → after: `L19896-L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19896-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19896-L19898) · [Before (L39256-L39258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39256-L39258)

```diff
-     const QC = .001,
-       wC = .001,
-       bC = [0, 0, 0, 1, 1, 1];
+     var Op = cp(62),
+       op = cp(5214),
+       Ip = cp.n(op);
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39260-L39271` → after: `L19900-L19981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR19900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L19900-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L19900-L19981) · [Before (L39260-L39271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39260-L39271)

```diff
-     function nC(CC, zC, ZC) {
-       const QC = Math.floor(zC.base[0] + wC),
-         nC = Math.floor(zC.max[0] - wC),
-         fC = Math.floor(zC.base[2] + wC),
-         oC = Math.floor(zC.max[2] - wC);
-       let qC = -1 / 0;
-       for (let FC = QC; FC <= nC; FC++)
-         for (let QC = fC; QC <= oC; QC++) {
-           const nC = CC(FC, ZC, QC);
-           if (!nC) continue;
-           const fC = Array.isArray(nC) ? nC : bC;
-           for (let CC = 0; CC < fC.length; CC += 6) zC.base[0] < FC + fC[CC + 3] - wC && zC.max[0] > FC + fC[CC] + wC && zC.base[1] < ZC + fC[CC + 4] - wC && zC.max[1] > ZC + fC[CC + 1] + wC && zC.base[2] < QC + fC[CC + 5] - wC && zC.max[2] > QC + fC[CC + 2] + wC && ZC + fC[CC +  … [truncated]
+     function Sp(pp) {
+       return Sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Sp(pp)
+     }
+     var xp = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "a … [truncated]
+       Lp = ["points", "pathLength"],
+       Yp = {
+         svg: ["viewBox", "children"],
+         polygon: Lp,
+         polyline: Lp
+       },
+       Dp = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus" … [truncated]
+       Ap = function(pp, ip) {
+ ... (66 more added lines; see GitHub link above)
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39276-L39284` → after: `L20020-L20068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20020-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20020-L20068) · [Before (L39276-L39284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39276-L39284)

```diff
-     function fC(CC, zC, ZC) {
-       const QC = Math.floor(zC.base[0] + wC),
-         bC = Math.floor(zC.max[0] - wC),
-         nC = Math.floor(zC.base[2] + wC),
-         fC = Math.floor(zC.max[2] - wC);
-       for (let wC = QC; wC <= bC; wC++)
-         for (let zC = nC; zC <= fC; zC++)
-           if (CC(wC, ZC, zC)) return !0;
-       return !1
+     function Ip() {
+       var pp, ip, cp = (0, op.b)().unknown(void 0),
+         Sp = cp.domain,
+         xp = cp.range,
+         Lp = 0,
+         Yp = 1,
+         Dp = !1,
+         Ap = 0,
+         Pp = 0,
+         Wp = .5;
+ 
+       function yp() {
+         var cp = Sp().length,
+           Op = Yp < Lp,
+           op = Op ? Yp : Lp,
+           Ip = Op ? Lp : Yp;
+ ... (33 more added lines; see GitHub link above)
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39288` → after: `L20072-L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20072-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20072-L20075) · [Before (L39288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39288)

```diff
-       return CC.ku && CC.Mq > 0 && CC.depenetrate && null === CC.Qr
+       var ip = pp.copy;
+       return pp.padding = pp.paddingOuter, delete pp.paddingInner, delete pp.paddingOuter, pp.copy = function() {
+         return Sp(ip())
+       }, pp
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39295-L39308` → after: `L20078-L20106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20078-L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20078-L20106) · [Before (L39295-L39308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39295-L39308)

```diff
-     function FC(CC, zC, ZC) {
-       const bC = ZC.base[1],
-         oC = Math.floor(bC),
-         FC = nC(CC, ZC, oC),
-         WC = FC - bC;
-       if (!(WC >= QC)) return 0;
-       if (fC(zC, ZC, oC)) return 0;
-       const NC = qC;
-       for (let QC = 0; QC < 3; QC++) NC.base[QC] = ZC.base[QC], NC.max[QC] = ZC.max[QC];
-       NC.base[1] += WC, NC.max[1] += WC;
-       const MC = Math.floor(NC.max[1] - wC);
-       for (let QC = Math.floor(FC); QC <= MC; QC++)
-         if (fC(zC, NC, QC) || nC(CC, NC, QC) !== -1 / 0) return 0;
-       return WC
+     function xp() {
+       return Sp(Ip.apply(null, arguments).paddingInner(1))
+     }
+   },
+   6280: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           this.range(pp);
+           break;
+         default:
+           this.range(ip).domain(pp)
+       }
+       return this
+ ... (13 more added lines; see GitHub link above)
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39311` → after: `L20113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20113) · [Before (L39311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39311)

```diff
-   37475: (CC, zC, ZC) => {
+   6288: (pp, ip, cp) => {
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39313` → after: `L20115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20115) · [Before (L39313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39313)

```diff
-       d: () => wC,
+       b: () => Dp,
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39316-L39317` → after: `L20118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20118) · [Before (L39316-L39317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39316-L39317)

```diff
-     var QC = ZC(622);
-     class wC {
+     class Op extends Map {
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39319-L39323` → after: `L20120-L20129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20120-L20129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20120-L20129) · [Before (L39319-L39323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39319-L39323)

```diff
-         this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(CC).map((CC => {
-           let [zC, ZC] = CC;
-           const QC = ZC.name;
-           return void 0 !== bC[QC] ? [zC, QC] : [zC, QC.split(" ").at(-1)]
-         })))
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xp;
+         if (super(), Object.defineProperties(this, {
+             _intern: {
+               value: new Map
+             },
+             _key: {
+               value: ip
+             }
+           }), null != pp)
+           for (const [cp, Op] of pp) this.set(cp, Op)
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39325-L39327` → after: `L20131-L20132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20131-L20132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20131-L20132) · [Before (L39325-L39327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39325-L39327)

```diff
-       getPossibleEnchantmentsForItem(CC) {
-         var zC;
-         return null !== (zC = bC[this.suffixMapping[CC]]) && void 0 !== zC ? zC : []
+       get(pp) {
+         return super.get(op(this, pp))
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39329-L39346` → after: `L20134-L20189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20134-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20134-L20189) · [Before (L39329-L39346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39329-L39346)

```diff
-       chooseRandomEnchantmentAttributes(CC, zC, ZC) {
-         const wC = [...ZC],
-           bC = {
-             enchantments: {},
-             enchantmentTier: zC,
-             id: (0, QC.c)()
-           },
-           nC = fC[zC];
-         for (let QC = 0; QC < nC; QC++) {
-           var qC;
-           if (0 === wC.length) {
-             console.warn("Ran out of enchantments to choose from");
-             break
-           }
-           const {
-             enchantments: zC
- ... (2 more removed lines; see GitHub link above)
+       has(pp) {
+         return super.has(op(this, pp))
+       }
+       set(pp, ip) {
+         return super.set(Ip(this, pp), ip)
+       }
+       delete(pp) {
+         return super.delete(Sp(this, pp))
+       }
+     }
+     Set;
+ 
+     function op(pp, ip) {
+       let {
+         _intern: cp,
+         _key: Op
+ ... (40 more added lines; see GitHub link above)
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39348` → after: `L20191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20191) · [Before (L39348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39348)

```diff
-         return bC
+         return cp[Ip % cp.length]
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39385-L39388` → after: `L20207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20207) · [Before (L39385-L39388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39385-L39388)

```diff
-   37909: CC => {
-     CC.exports = "data:font/ttf;base64,AAEAAAAPAIAAAwBwR0RFRvJw+uoAA0KIAAACPE9TLzITxQuEAAABeAAAAGBjbWFwwhPxPQAAGngAAEKmY3Z0ICkQEMoAAGwEAAAAqGZwZ21iLwN/AABdIAAADgxnYXNwAAAAEAADQoAAAAAIZ2x5ZnEZfskAAIWYAAJ5xmhlYWQdrwaIAAAA/AAAADZoaGVhAnQGnQAAATQAAAAkaG10eK3Lsr4AAAHYAAAYnmxvY2EG+iY0A … [truncated]
-   },
-   37788: (CC, zC, ZC) => {
+   6344: (pp, ip, cp) => {
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39390-L39394` → after: `L20209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20209) · [Before (L39390-L39394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39390-L39394)

```diff
-       c: () => QC,
-       f: () => bC,
-       i: () => wC,
-       l: () => fC,
-       p: () => nC
+       d: () => Op
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39396-L39428` → after: `L20211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20211) · [Before (L39396-L39428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39396-L39428)

```diff
-     const QC = {
-         opaque: 1,
-         emissive: 2,
-         vegetation: 4,
-         dirt: 8,
-         sand: 16,
-         rock: 32,
-         slab: 64,
-         stairs: 128,
-         flat: 256,
-         vq: 512,
-         dropped: 1024,
-         thrown: 2048,
-         placed: 4096,
-         lifeform: 65536
-       },
- ... (17 more removed lines; see GitHub link above)
+     Array.prototype.slice;
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39430-L39431` → after: `L20213-L20214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20213-L20214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20213-L20214) · [Before (L39430-L39431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39430-L39431)

```diff
-     function nC(CC, zC) {
-       return CC + 65536 * zC
+     function Op(pp) {
+       return "object" === typeof pp && "length" in pp ? pp : Array.from(pp)
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39433-L39435` → after: `L20216-L20221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20216-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20216-L20221) · [Before (L39433-L39435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39433-L39435)

```diff
- 
-     function fC(CC, zC) {
-       return oC(CC) + 4 * oC(zC)
+   },
+   6229: (pp, ip, cp) => {
+     function Op(pp) {
+       return function() {
+         return pp
+       }
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L39439` → after: `L20237-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR20237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L20237-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L20237-L20339) · [Before (L39439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L39439)

```diff
-       return (Math.round(CC / (Math.PI / 2)) % 4 + 4) % 4
+       this._ += pp[0];
+       for (let ip = 1, cp = pp.length; ip < cp; ++ip) this._ += arguments[ip] + pp[ip]
+     }
+     class Lp {
+       constructor(pp) {
+         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == pp ? xp : function(pp) {
+           let ip = Math.floor(pp);
+           if (!(ip >= 0)) throw new Error(`invalid digits: ${pp}`);
+           if (ip > 15) return xp;
+           const cp = 10 ** ip;
+           return function(pp) {
+             this._ += pp[0];
+             for (let ip = 1, Op = pp.length; ip < Op; ++ip) this._ += Math.round(arguments[ip] * cp) / cp + pp[ip]
+           }
+         }(pp)
+       }
+ ... (87 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L4-L7` → after: `L5-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L5-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L5-L13) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L4-L7)

```diff
-   36496: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => SC,
-       c: () => JC
+   6564: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       Graph: () => hp,
+       debug: () => lc,
+       default: () => Jc,
+       graphlib: () => Ip,
+       layout: () => wc,
+       util: () => Qc,
+       version: () => xi
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L9-L73` → after: `L15-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L15-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L15-L37) · [Before (L9-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L9-L73)

```diff
-     ZC(34125);
-     var QC = ZC(48),
-       wC = ZC(1383),
-       bC = ZC(1840),
-       nC = ZC(1877),
-       fC = ZC(20),
-       oC = ZC(2369),
-       qC = ZC(36502),
-       FC = ZC(36508),
-       WC = ZC(34107),
-       NC = ZC(34118),
-       MC = ZC(34141),
-       gC = ZC(1056);
-     const SC = (0, QC.memo)((function() {
-       var CC;
-       const {
- ... (49 more removed lines; see GitHub link above)
+     var Op = Object.defineProperty,
+       op = (pp, ip, cp) => ((pp, ip, cp) => ip in pp ? Op(pp, ip, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: cp
+       }) : pp[ip] = cp)(pp, "symbol" != typeof ip ? ip + "" : ip, cp),
+       Ip = {};
+     ((pp, ip) => {
+       for (var cp in ip) Op(pp, cp, {
+         get: ip[cp],
+         enumerable: !0
+       })
+     })(Ip, {
+       Graph: () => hp,
+       alg: () => vp
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L75-L76` → after: `L39-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L39-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L39-L241) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L75-L76)

```diff
-       RC = {
-         current: null
+       Lp = class {
+         constructor(pp) {
+           this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () … [truncated]
+         }
+         isDirected() {
+           return this._isDirected
+         }
+         isMultigraph() {
+           return this._isMultigraph
+         }
+         isCompound() {
+           return this._isCompound
+         }
+         setGraph(pp) {
+           return this._label = pp, this
+         }
+ ... (187 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L78-L79` → after: `L243-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L243-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L243-L264) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L78-L79)

```diff
-     let AC = 0,
-       xC = 0;
+ 
+     function Yp(pp, ip) {
+       pp[ip] ? pp[ip]++ : pp[ip] = 1
+     }
+ 
+     function Dp(pp, ip) {
+       void 0 !== pp[ip] && !--pp[ip] && delete pp[ip]
+     }
+ 
+     function Ap(pp, ip, cp, Op) {
+       let op = "" + ip,
+         Ip = "" + cp;
+       if (!pp && op > Ip) {
+         let pp = op;
+         op = Ip, Ip = pp
+       }
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L82` → after: `L267-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L267-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L267-L277) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L82)

```diff
-       xC = CC, PC[0].current || GC.current || RC.current ? iC(CC) : AC = CC
+       let ip = {
+           options: {
+             directed: pp.isDirected(),
+             multigraph: pp.isMultigraph(),
+             compound: pp.isCompound()
+           },
+           nodes: yp(pp),
+           edges: Up(pp)
+         },
+         cp = pp.graph();
+       return void 0 !== cp && (ip.value = structuredClone(cp)), ip
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L86` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L281-L288) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L86)

```diff
-       return ((0, qC.e)(CC) - (0, qC.e)(0)) * window.innerHeight / 100
+       return pp.nodes().map((ip => {
+         let cp = pp.node(ip),
+           Op = pp.parent(ip),
+           op = {
+             v: ip
+           };
+         return void 0 !== cp && (op.value = cp), void 0 !== Op && (op.parent = Op), op
+       }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L90-L95` → after: `L292-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L292-L299) · [Before (L90-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L90-L95)

```diff
-       var zC;
-       if (null === (zC = RC.current) || void 0 === zC || zC.call(RC, IC(CC)), PC[0].current) {
-         const zC = `${(0,qC.e)(CC)}vh`;
-         PC[0].current.style.transform = `translateX(calc(0px - ${zC}))`, PC[1].current.style.transform = `translateX(calc(0px + ${zC}))`, PC[2].current.style.transform = `translateY(calc(0px - ${zC}))`, PC[3].current.style.transform = `translateY(calc(0px + ${zC}))`
-       }
-       GC.current && (GC.current.style.filter = `blur(${Math.round(CC/10)}px)`)
+       return pp.edges().map((ip => {
+         let cp = pp.edge(ip),
+           Op = {
+             v: ip.v,
+             w: ip.w
+           };
+         return void 0 !== ip.name && (Op.name = ip.name), void 0 !== cp && (Op.value = cp), Op
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L99-L176` → after: `L303-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L303-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L303-L312) · [Before (L99-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L99-L176)

```diff
-       let {
-         custom: zC,
-         touch: ZC
-       } = CC;
-       const bC = (0, wC.f)("aimingOverlay", "none"),
-         nC = "1.2vh",
-         fC = "0.3vh";
-       (0, QC.useEffect)((() => {
-         AC && iC(AC)
-       }), []);
-       const oC = (0, QC.useRef)(null !== zC);
-       return (0, QC.useLayoutEffect)((() => {
-         var CC;
-         zC ? null === (CC = RC.current) || void 0 === CC || CC.call(RC, IC(xC)) : oC.current && iC(xC);
-         oC.current = null !== zC
-       }), [zC]), (0, gC.jsxs)(gC.Fragment, {
- ... (62 more removed lines; see GitHub link above)
+       let ip = new Lp(pp.options);
+       return void 0 !== pp.value && ip.setGraph(pp.value), pp.nodes.forEach((pp => {
+         ip.setNode(pp.v, pp.value), pp.parent && ip.setParent(pp.v, pp.parent)
+       })), pp.edges.forEach((pp => {
+         ip.setEdge({
+           v: pp.v,
+           w: pp.w,
+           name: pp.name
+         }, pp.value)
+       })), ip
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L178-L182` → after: `L314-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L314-L316) · [Before (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L178-L182)

```diff
-   },
-   34118: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => SC,
-       g: () => gC
+     xp({}, {
+       read: () => wp,
+       write: () => Wp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L184-L188` → after: `L318-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L318-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L318-L335) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L184-L188)

```diff
-     ZC(34125);
-     var QC = ZC(1002),
-       wC = ZC.n(QC),
-       bC = ZC(48),
-       nC = ZC(34116);
+     var vp = {};
+     xp(vp, {
+       CycleException: () => Ep,
+       bellmanFord: () => Hp,
+       components: () => dp,
+       dijkstra: () => kp,
+       dijkstraAll: () => mp,
+       findCycles: () => qp,
+       floydWarshall: () => Cp,
+       isAcyclic: () => lp,
+       postorder: () => Np,
+       preorder: () => Tp,
+       prim: () => fp,
+       shortestPaths: () => bp,
+       tarjan: () => Rp,
+       topsort: () => Xp
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L190-L191` → after: `L337-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L337-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L337-L378) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L190-L191)

```diff
-     function fC(CC, zC) {
-       return Math.max(1, Math.round(CC * zC))
+     function Hp(pp, ip, cp, Op) {
+       return function(pp, ip, cp, Op) {
+         let op, Ip = {},
+           Sp = 0,
+           xp = pp.nodes(),
+           Lp = function(pp) {
+             let ip = Ip[pp.v],
+               Op = Ip[pp.w];
+             if (!ip || !Op) return;
+             let Sp = cp(pp);
+             ip.distance + Sp < Op.distance && (Ip[pp.w] = {
+               distance: ip.distance + Sp,
+               predecessor: pp.v
+             }, op = !0)
+           },
+           Yp = function() {
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L194-L204` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L381-L382) · [Before (L194-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L194-L204)

```diff
-     function oC(CC, zC) {
-       const ZC = zC * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         QC = function(CC, zC) {
-           if (CC.lines) return fC(CC.lineThickness, zC) % 2;
-           if (CC.dot) return fC(CC.dotSize, zC) % 2;
-           return qC(CC, zC) % 2
-         }(CC, zC),
-         wC = FC(CC.lineThickness * ZC, QC),
-         bC = fC(CC.lineLength, ZC),
-         nC = Math.round(CC.gap * ZC),
-         oC = CC.outline > 0 ? fC(CC.outline, ZC) : 0,
+     function dp(pp) {
+       let ip, cp = {},
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L206-L268` → after: `L384-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L384-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L384-L387) · [Before (L206-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L206-L268)

```diff
-       if (CC.lines && (NC.push({
-           x: wC + nC,
-           y: 0,
-           w: bC,
-           h: wC,
-           arm: "right"
-         }), NC.push({
-           x: -nC - bC,
-           y: 0,
-           w: bC,
-           h: wC,
-           arm: "left"
-         }), NC.push({
-           x: 0,
-           y: wC + nC,
-           w: wC,
- ... (47 more removed lines; see GitHub link above)
+ 
+       function op(Op) {
+         var Ip, Sp;
+         Op in cp || (cp[Op] = !0, ip.push(Op), null == (Ip = pp.successors(Op)) || Ip.forEach(op), null == (Sp = pp.predecessors(Op)) || Sp.forEach(op))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L272-L273` → after: `L462-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L462-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L462-L491) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L272-L273)

```diff
-     function qC(CC, zC) {
-       return Math.round(CC.circleRadius * zC * 2 + fC(CC.circleThickness, zC))
+     function kp(pp, ip, cp, Op) {
+       return function(pp, ip, cp, Op) {
+         let op, Ip, Sp = {},
+           xp = new ep,
+           Lp = function(pp) {
+             let ip = pp.v !== op ? pp.v : pp.w,
+               Op = Sp[ip];
+             if (!Op) return;
+             let Lp = cp(pp),
+               Yp = Ip.distance + Lp;
+             if (Lp < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + pp + " Weight: " + Lp);
+             Yp < Op.distance && (Op.distance = Yp, Op.predecessor = op, xp.decrease(ip, Yp))
+           };
+         for (pp.nodes().forEach((function(pp) {
+             let cp = pp === ip ? 0 : Number.POSITIVE_INFINITY;
+             Sp[pp] = {
+ ... (14 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L276-L277` → after: `L494-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L494-L497) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L276-L277)

```diff
-     function FC(CC, zC) {
-       return Math.max(2 - zC, 2 * Math.round((CC - zC) / 2) + zC)
+     function mp(pp, ip, cp) {
+       return pp.nodes().reduce((function(Op, op) {
+         return Op[op] = kp(pp, op, ip, cp), Op
+       }), {})
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L280-L287` → after: `L500-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L500-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L500-L530) · [Before (L280-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L280-L287)

```diff
-     function WC(CC, zC, ZC) {
-       const QC = 2 * ZC >= zC - 1;
-       return {
-         x: CC,
-         y: CC,
-         size: zC,
-         border: Math.min(ZC, Math.floor(zC / 2)),
-         filled: QC
+     function Rp(pp) {
+       let ip = 0,
+         cp = [],
+         Op = {},
+         op = [];
+ 
+       function Ip(Sp) {
+         var xp;
+         let Lp = Op[Sp] = {
+           onStack: !0,
+           lowlink: ip,
+           index: ip++
+         };
+         if (cp.push(Sp), null == (xp = pp.successors(Sp)) || xp.forEach((function(pp) {
+             if (pp in Op) {
+               let ip = Op[pp];
+ ... (15 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L293-L294` → after: `L537-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L537-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L537-L542) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L293-L294)

```diff
-     function gC(CC, zC) {
-       return CC && zC ? `scale(${MC})` : "scale(1)"
+     function qp(pp) {
+       return Rp(pp).filter((function(ip) {
+         var cp;
+         let Op = ip[0];
+         return !!Op && (ip.length > 1 || 1 === ip.length && (null != (cp = pp.outEdges(Op, Op)) ? cp : []).length > 0)
+       }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L297-L301` → after: `L546-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L546-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L546-L585) · [Before (L297-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L297-L301)

```diff
-     function SC(CC) {
-       return "classic" === CC.settings.style ? (0, NC.jsx)(GC, {
-         ...CC
-       }) : (0, NC.jsx)(vC, {
-         ...CC
+     function Cp(pp, ip, cp) {
+       return function(pp, ip, cp) {
+         let Op = {},
+           op = pp.nodes();
+         return op.forEach((function(pp) {
+           let Ip = {};
+           Op[pp] = Ip, Ip[pp] = {
+             distance: 0,
+             predecessor: ""
+           }, op.forEach((function(ip) {
+             pp !== ip && (Ip[ip] = {
+               distance: Number.POSITIVE_INFINITY,
+               predecessor: ""
+             })
+           })), cp(pp).forEach((function(cp) {
+             let Op = cp.v === pp ? cp.w : cp.v,
+ ... (24 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L304-L315` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L588-L590) · [Before (L304-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L304-L315)

```diff
-     const pC = .125;
- 
-     function PC(CC, zC) {
-       const ZC = {};
-       if (CC.color !== nC.f.color && (ZC.color = (0, nC.i)(CC.color)), CC.opacity !== nC.f.opacity && (ZC.opacity = CC.opacity / 100), CC.outline !== nC.f.outline || CC.outlineColor !== nC.f.outlineColor) {
-         const zC = CC.outline,
-           QC = (0, nC.i)(CC.outlineColor);
-         ZC.textShadow = zC > 0 ? `-${zC}px 0 ${QC}, 0 ${zC}px ${QC}, ${zC}px 0 ${QC}, 0 -${zC}px ${QC}` : "none"
-       }
-       if (CC.size !== nC.f.size) {
-         const QC = CC.size / 100;
-         ZC.fontSize = zC ? `calc(max(1.3rem, 18px) * ${QC})` : `calc(1.3rem * ${QC})`, ZC.marginTop = `-${pC}em`, ZC.transformOrigin = `50% calc(50% + ${pC}em)`
+     var Ep = class extends Error {
+       constructor(pp) {
+         super(pp), this.name = "CycleException"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L321-L341` → after: `L607-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L607-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L607-L613) · [Before (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L321-L341)

```diff
-       let {
-         settings: zC,
-         touch: ZC,
-         inPreview: QC,
-         inEditor: bC,
-         pressed: nC = !1,
-         pressRef: fC
-       } = CC;
-       return (0, NC.jsx)("div", {
-         className: wC()("Crosshair", {
-           Touch: ZC,
-           CrosshairInPreview: QC,
-           CrosshairInEditor: bC || QC
-         }),
-         ref: fC,
-         style: {
- ... (5 more removed lines; see GitHub link above)
+       try {
+         Xp(pp)
+       } catch (ip) {
+         if (ip instanceof Ep) return !1;
+         throw ip
+       }
+       return !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L344-L345` → after: `L616-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L616-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L616-L626) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L344-L345)

```diff
-     function RC(CC, zC) {
-       return CC / zC + "px"
+     function Qp(pp, ip, cp, Op, op) {
+       Array.isArray(ip) || (ip = [ip]);
+       let Ip = ip => {
+           var cp;
+           return null != (cp = pp.isDirected() ? pp.successors(ip) : pp.neighbors(ip)) ? cp : []
+         },
+         Sp = {};
+       return ip.forEach((function(ip) {
+         if (!pp.hasNode(ip)) throw new Error("Graph does not have node: " + ip);
+         op = Jp(pp, ip, "post" === cp, Sp, Ip, Op, op)
+       })), op
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L348-L354` → after: `L629-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L629-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L629-L632) · [Before (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L348-L354)

```diff
-     function AC(CC, zC, ZC, QC) {
-       return {
-         ...IC(CC, zC, ZC),
-         width: RC(CC.w, ZC),
-         height: RC(CC.h, ZC),
-         background: QC
-       }
+     function Jp(pp, ip, cp, Op, op, Ip, Sp) {
+       return ip in Op || (Op[ip] = !0, cp || (Sp = Ip(Sp, ip)), op(ip).forEach((function(ip) {
+         Sp = Jp(pp, ip, cp, Op, op, Ip, Sp)
+       })), cp && (Sp = Ip(Sp, ip))), Sp
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L358-L366` → after: `L636-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L636-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L636-L638) · [Before (L358-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L358-L366)

```diff
-       return {
-         left: RC(CC.x, zC),
-         top: RC(CC.y, zC),
-         width: RC(CC.size, zC),
-         height: RC(CC.size, zC),
-         borderWidth: RC(CC.border, zC),
-         borderColor: ZC,
-         background: CC.filled ? ZC : void 0
-       }
+       return Qp(pp, ip, cp, (function(pp, ip) {
+         return pp.push(ip), pp
+       }), [])
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L375-L380` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L641-L642) · [Before (L375-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L375-L380)

```diff
-     function IC(CC, zC, ZC) {
-       const [QC, wC] = CC.arm ? JC[CC.arm] : [0, 0], bC = Math.round(zC * ZC);
-       return {
-         left: RC(CC.x + QC * bC, ZC),
-         top: RC(CC.y + wC * bC, ZC)
-       }
+     function Np(pp, ip) {
+       return Bp(pp, ip, "post")
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L383-L388` → after: `L645-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L645-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L645-L646) · [Before (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L383-L388)

```diff
-     function iC(CC) {
-       return CC.arm ? {
-         "data-arm": CC.arm,
-         "data-x": CC.x,
-         "data-y": CC.y
-       } : {}
+     function Tp(pp, ip) {
+       return Bp(pp, ip, "pre")
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L391-L445` → after: `L649-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L649-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L649-L697) · [Before (L391-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L391-L445)

```diff
-     function vC(CC) {
-       let {
-         settings: zC,
-         inPreview: ZC,
-         inEditor: QC,
-         pressed: fC = !1,
-         spread: qC,
-         spreadRef: FC
-       } = CC;
-       const WC = (0, bC.useRef)(null),
-         {
-           box: gC,
-           dpr: SC
-         } = function(CC) {
-           const [zC, ZC] = (0, bC.useState)({
-             box: {
- ... (39 more removed lines; see GitHub link above)
+     function fp(pp, ip) {
+       var cp;
+       let Op, op = new Lp,
+         Ip = {},
+         Sp = new ep;
+ 
+       function xp(pp) {
+         let cp = pp.v === Op ? pp.w : pp.v,
+           op = Sp.priority(cp);
+         if (void 0 !== op) {
+           let xp = ip(pp);
+           xp < op && (Ip[cp] = Op, Sp.decrease(cp, xp))
+         }
+       }
+       if (0 === pp.nodeCount()) return op;
+       pp.nodes().forEach((function(pp) {
+ ... (33 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L447-L500` → after: `L699-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L699-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L699-L704) · [Before (L447-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L447-L500)

```diff
-         }(gC, PC.cell, SC),
-         RC = (0, nC.i)(zC.color),
-         JC = (0, nC.i)(zC.outlineColor),
-         vC = (0, bC.useRef)(0);
-       (0, bC.useLayoutEffect)((() => {
-         if (FC) return FC.current = CC => {
-           var zC;
-           vC.current = CC, null === (zC = WC.current) || void 0 === zC || zC.querySelectorAll("[data-arm]").forEach((zC => {
-             Object.assign(zC.style, IC(function(CC) {
-               return {
-                 x: Number(CC.dataset.x),
-                 y: Number(CC.dataset.y),
-                 arm: CC.dataset.arm
-               }
-             }(zC), CC, pC.current))
-           }))
- ... (38 more removed lines; see GitHub link above)
+           if (op) return Hp(pp, ip, cp, Op)
+         }
+         return kp(pp, ip, cp, Op)
+       }(pp, ip, cp, null != Op ? Op : ip => {
+         var cp;
+         return null != (cp = pp.outEdges(ip)) ? cp : []
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L503-L517` → after: `L707-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L707-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L707-L713) · [Before (L503-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L503-L517)

```diff
-   },
-   34134: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => FC,
-       c: () => pC,
-       g: () => SC
-     });
-     var QC = ZC(34116);
-     const wC = "XH1-",
-       bC = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       nC = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       fC = ["color", "outlineColor"],
-       oC = 1 + 3 * fC.length + nC.length + 1,
-       qC = Math.ceil(8 * oC / Math.log2(62)),
-       FC = wC.length + qC;
+     var hp = Lp;
+ 
+     function ap(pp, ip, cp, Op) {
+       let op = Op;
+       for (; pp.hasNode(op);) op = ii(Op);
+       return cp.dummy = ip, pp.setNode(op, cp), op
+     }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L520-L522` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L716-L723) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L520-L522)

```diff
-       let zC = 90;
-       for (const ZC of CC) zC = 31 * zC + ZC & 255;
-       return zC
+       let ip = new hp({
+         multigraph: pp.isMultigraph()
+       }).setGraph(pp.graph());
+       return pp.nodes().forEach((cp => {
+         pp.children(cp).length || ip.setNode(cp, pp.node(cp))
+       })), pp.edges().forEach((cp => {
+         ip.setEdge(cp, pp.edge(cp))
+       })), ip
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L528-L532` → after: `L727-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L727-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L727-L736) · [Before (L528-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L528-L532)

```diff
-       let ZC = 0n;
-       for (const wC of CC) {
-         const CC = NC.indexOf(wC);
-         if (CC < 0) return null;
-         ZC = ZC * MC + BigInt(CC)
+       let cp, Op, op = pp.x,
+         Ip = pp.y,
+         Sp = ip.x - op,
+         xp = ip.y - Ip,
+         Lp = pp.width / 2,
+         Yp = pp.height / 2;
+       if (!Sp && !xp) throw new Error("Not possible to find intersection inside of the rectangle");
+       return Math.abs(xp) * Lp > Math.abs(Sp) * Yp ? (xp < 0 && (Yp = -Yp), cp = Yp * Sp / xp, Op = Yp) : (Sp < 0 && (Lp = -Lp), cp = Lp, Op = Lp * xp / Sp), {
+         x: op + cp,
+         y: Ip + Op
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L541-L563` → after: `L741-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L741-L746) · [Before (L541-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L541-L563)

```diff
-       let zC = "shapes" === CC.style ? 1 : 0;
-       bC.forEach(((ZC, QC) => {
-         CC[ZC] && (zC |= 1 << QC + 1)
-       }));
-       const ZC = [zC];
-       for (const wC of fC) {
-         const zC = (0, QC.g)(wC, CC[wC]);
-         ZC.push(zC >> 16 & 255, zC >> 8 & 255, 255 & zC)
-       }
-       for (const wC of nC) {
-         const {
-           min: zC,
-           step: bC
-         } = QC.c[wC];
-         ZC.push(Math.round(((0, QC.g)(wC, CC[wC]) - zC) / bC))
-       }
- ... (7 more removed lines; see GitHub link above)
+       let ip = ci(zp(pp) + 1).map((() => []));
+       return pp.nodes().forEach((cp => {
+         let Op = pp.node(cp),
+           op = Op.rank;
+         void 0 !== op && (ip[op] || (ip[op] = []), ip[op][Op.order] = cp)
+       })), ip
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L566-L569` → after: `L749-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L749-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L749-L769) · [Before (L566-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L566-L569)

```diff
-     function pC(CC) {
-       for (const zC of CC.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${qC}})`, "gi"))) {
-         const CC = PC(gC(zC[1], oC));
-         if (CC) return CC
+     function Gp(pp, ip, cp, Op) {
+       let op = {
+         width: 0,
+         height: 0
+       };
+       return arguments.length >= 4 && (op.rank = cp, op.order = Op), ap(pp, "border", op, ip)
+     }
+     var rp = 65535;
+ 
+     function Zp(pp, ip) {
+       if (ip.length > rp) {
+         let cp = function(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rp,
+             cp = [];
+           for (let Op = 0; Op < pp.length; Op += ip) {
+             let op = pp.slice(Op, Op + ip);
+ ... (5 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L571` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L771) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L571)

```diff
-       return null
+       return pp(...ip)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L575-L582` → after: `L775-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L775-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L775-L777) · [Before (L575-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L575-L582)

```diff
-       if (!CC || CC.length !== oC || WC(CC.slice(0, -1)) !== CC[CC.length - 1]) return null;
-       const zC = CC[0],
-         ZC = {
-           ...QC.f,
-           style: 1 & zC ? "shapes" : "classic"
-         };
-       bC.forEach(((CC, QC) => {
-         ZC[CC] = 0 !== (zC & 1 << QC + 1)
+       let ip = pp.nodes().map((ip => {
+         let cp = pp.node(ip).rank;
+         return void 0 === cp ? Number.MIN_VALUE : cp
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L584-L593` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L779) · [Before (L584-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L584-L593)

```diff
-       let wC = 1;
-       for (const QC of fC) ZC[QC] = CC[wC] << 16 | CC[wC + 1] << 8 | CC[wC + 2], wC += 3;
-       for (const bC of nC) {
-         const {
-           min: zC,
-           step: nC
-         } = QC.c[bC];
-         ZC[bC] = (0, QC.g)(bC, zC + CC[wC] * nC), wC++
-       }
-       return ZC
+       return Zp(Math.max, ip)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L686-L702` → after: `L783-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L783-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L783-L787) · [Before (L686-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L686-L702)

```diff
-       var ZC;
-       const {
-         min: bC,
-         max: nC,
-         step: fC
-       } = QC[CC];
-       if (!Number.isFinite(zC)) return wC[CC];
-       const oC = (null !== (ZC = String(fC).split(".")[1]) && void 0 !== ZC ? ZC : "").length,
-         qC = Number((Math.round(zC / fC) * fC).toFixed(oC));
-       return Math.min(nC, Math.max(bC, qC))
-     }
- 
-     function nC(CC, zC, ZC) {
-       const QC = "number" === typeof ZC ? bC(zC, ZC) : ZC;
-       return {
-         ...CC,
- ... (1 more removed lines; see GitHub link above)
+       let cp = Date.now();
+       try {
+         return ip()
+       } finally {
+         console.log(pp + " time: " + (Date.now() - cp) + "ms")
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L707-L708` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L792) · [Before (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L707-L708)

```diff
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(wC).every((QC => ZC.includes(QC) || CC[QC] === zC[QC]))
+       return ip()
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L712` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L797) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L712)

```diff
-       return fC(CC, wC)
+       return pp + "" + ++Vp
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L715-L716` → after: `L800-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L800-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L800-L807) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L715-L716)

```diff
-     function qC(CC) {
-       return `#${CC.toString(16).padStart(6,"0")}`
+     function ci(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       null == ip && (ip = pp, pp = 0);
+       let Op = pp => pp < ip;
+       cp < 0 && (Op = pp => ip < pp);
+       let op = [];
+       for (let Ip = pp; Op(Ip); Ip += cp) op.push(Ip);
+       return op
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L719-L742` → after: `L810-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L810-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L810-L812) · [Before (L719-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L719-L742)

```diff
-     function FC(CC) {
-       const zC = /^#?([0-9a-f]{6})$/i.exec(CC.trim());
-       return zC ? parseInt(zC[1], 16) : null
-     }
-   },
-   34141: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => WC,
-       f: () => NC
-     });
-     var QC = ZC(48),
-       wC = ZC(38),
-       bC = ZC(34134),
-       nC = ZC(34116);
-     const fC = "crosshairCode";
-     let oC = null;
- ... (8 more removed lines; see GitHub link above)
+     function Oi(pp, ip) {
+       let cp = {};
+       for (let Op of ip) void 0 !== pp[Op] && (cp[Op] = pp[Op]);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L746-L748` → after: `L816-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L816-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L816-L821) · [Before (L746-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L746-L748)

```diff
-     function WC(CC) {
-       oC = CC, (0, nC.m)(CC) ? wC.i.removeItem(fC) : wC.i.setItem(fC, (0, bC.g)(CC));
-       for (const zC of qC) zC()
+     function oi(pp, ip) {
+       let cp;
+       return cp = "string" == typeof ip ? pp => pp[ip] : ip, Object.entries(pp).reduce(((pp, ip) => {
+         let [Op, op] = ip;
+         return pp[Op] = cp(op, Op), pp
+       }), {})
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L751-L774` → after: `L825-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L825-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L825-L842) · [Before (L751-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L751-L774)

```diff
-     function NC() {
-       const [CC, zC] = (0, QC.useState)(FC);
-       return (0, QC.useEffect)((() => {
-         const CC = () => {
-           zC(FC())
-         };
-         return CC(), ZC = CC, qC.add(ZC), () => {
-           qC.delete(ZC)
-         };
-         var ZC
-       }), []), CC
-     }
-   },
-   36647: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => bC,
- ... (8 more removed lines; see GitHub link above)
+     function Si(pp, ip, cp) {
+       var Op, op, Ip, Sp, xp, Lp;
+       if (!(pp && ip && cp && "edge" === ip.dummy && "edge" === cp.dummy && ip.edgeObj && cp.edgeObj && pp[ip.edgeObj.v] && pp[cp.edgeObj.v] && pp[ip.edgeObj.w] && pp[cp.edgeObj.w])) return 0;
+       let Yp = !0;
+       ip.edgeObj.w === cp.edgeObj.w && (Yp = !1);
+       let Dp = Yp ? null != (op = null == (Op = pp[ip.edgeObj.v]) ? void 0 : Op.rank) ? op : NaN : null != (Sp = null == (Ip = pp[ip.edgeObj.w]) ? void 0 : Ip.rank) ? Sp : NaN,
+         Ap = Object.entries(pp).find((pp => {
+           var cp, Op;
+           return (null == (cp = pp[1].edgeObj) ? void 0 : cp.v) === ip.edgeObj.v && (null == (Op = pp[1].edgeObj) ? void 0 : Op.w) === ip.edgeObj.w && pp[1].rank === Dp
+         })),
+         Pp = Object.entries(pp).find((pp => {
+           var ip, Op;
+           return (null == (ip = pp[1].edgeObj) ? void 0 : ip.v) === cp.edgeObj.v && (null == (Op = pp[1].edgeObj) ? void 0 : Op.w) === cp.edgeObj.w && pp[1].rank === Dp
+         }));
+       if (!Ap || !Pp) return 0;
+       let Wp = null != (xp = Ap[1].order) ? xp : NaN,
+ ... (2 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L778` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L847) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L778)

```diff
-       return !(0, QC.H)(CC) && bC(CC) === (0, wC.e)().qE
+       pp._prev._next = pp._next, pp._next._prev = pp._prev, delete pp._next, delete pp._prev
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L782-L783` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L850-L851) · [Before (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L782-L783)

```diff
-     function oC() {
-       return (0, wC.e)().physics[fC][1]
+     function Yi(pp, ip) {
+       if ("_next" !== pp && "_prev" !== pp) return ip
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L785-L901` → after: `L853-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L853-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L853-L927) · [Before (L785-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L785-L901)

```diff
-   },
-   36637: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => IC
-     });
-     var QC = ZC(36641),
-       wC = ZC(184),
-       bC = ZC(4797),
-       nC = ZC(36643),
-       fC = ZC(36318),
-       oC = ZC(36673),
-       qC = ZC(36647),
-       FC = ZC(338),
-       WC = ZC.n(FC),
-       NC = ZC(1149),
-       MC = ZC(2753),
- ... (101 more removed lines; see GitHub link above)
+     var Di = class {
+         constructor() {
+           op(this, "_sentinel");
+           let pp = {};
+           pp._next = pp._prev = pp, this._sentinel = pp
+         }
+         dequeue() {
+           let pp = this._sentinel,
+             ip = pp._prev;
+           if (ip !== pp) return Li(ip), ip
+         }
+         enqueue(pp) {
+           let ip = this._sentinel;
+           pp._prev && pp._next && Li(pp), pp._next = ip._next, ip._next._prev = pp, ip._next = pp, pp._prev = ip
+         }
+         toString() {
+ ... (59 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L904-L908` → after: `L1192-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1192-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1192-L1501) · [Before (L904-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L904-L908)

```diff
-       liveHowl() {
-         return this._unloaded ? null : this._howl
-       }
-       loaded() {
-         return "loaded" === this._howl.state()
+     };
+     var Ni = vi;
+ 
+     function Ti(pp) {
+       mi(pp)
+     }
+     var fi = function(pp) {
+       let ip = function(pp) {
+           let ip = {},
+             cp = 0;
+ 
+           function Op(op) {
+             let Ip = cp;
+             pp.children(op).forEach(Op), ip[op] = {
+               low: Ip,
+               lim: cp++
+ ... (294 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L910-L912` → after: `L1503-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1503-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1503-L1568) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L910-L912)

```diff
-       unloadOnceIdle() {
-         (0, nC.b)(this._howl, (() => {
-           this._unloaded = !0
+       Up = cc(Pp, Ap, Up), Dp.forEach((pp => {
+         Up += pp.vs.length, Pp.push(pp.vs), Wp += pp.barycenter * pp.weight, yp += pp.weight, Up = cc(Pp, Ap, Up)
+       }));
+       let wp = {
+         vs: Pp.flat(1)
+       };
+       return yp && (wp.barycenter = Wp / yp, wp.weight = yp), wp
+     }
+ 
+     function cc(pp, ip, cp) {
+       let Op;
+       for (; ip.length && (Op = ip[ip.length - 1]).i <= cp;) ip.pop(), pp.push(Op.vs), cp++;
+       return cp
+     }
+ 
+     function Oc(pp, ip, cp, Op, op) {
+ ... (50 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L915-L916` → after: `L1598-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1598-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1598-L1658) · [Before (L915-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L915-L916)

```diff
-       setGlobalVolume(CC) {
-         this._volumeMultiplier.setMultiplierType("globalVolume", CC), this._howl.volume(CC)
+       return Object.defineProperty(Mp, "result", {
+         value: Mp,
+         enumerable: !1,
+         configurable: !0,
+         writable: !0
+       }), Object.defineProperty(Mp, "usedBias", {
+         value: qp,
+         enumerable: !1,
+         configurable: !0,
+         writable: !0
+       }), Mp
+     }
+ 
+     function oc(pp, ip, cp, Op) {
+       Op || (Op = pp.nodes());
+       let op = function(pp) {
+ ... (45 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L918-L943` → after: `L1660-L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1660-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1660-L1666) · [Before (L918-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L918-L943)

```diff
-       _setPannerAttr(CC) {
-         let {
-           id: zC,
-           coneInnerAngle: ZC = 360,
-           coneOuterAngle: QC = 360,
-           coneOuterGain: wC = 0,
-           distanceModel: bC = "inverse",
-           maxDistance: nC = 1e3,
-           panningModel: fC = "HRTF",
-           refDistance: oC = gC.j,
-           rolloffFactor: qC = 1
-         } = CC;
-         const FC = this.liveHowl();
-         if (null === FC) return;
-         FC.pannerAttr({
-           coneOuterAngle: QC
- ... (10 more removed lines; see GitHub link above)
+       Lc(pp, xp)
+     }
+ 
+     function Sc(pp, ip, cp) {
+       let Op = new Map,
+         op = (pp, ip) => {
+           Op.has(pp) || Op.set(pp, []), Op.get(pp).push(ip)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L945` → after: `L1668-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1668-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1668-L1671) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L945)

```diff
-         FC.pannerAttr(WC, zC)
+       for (let Ip of pp.nodes()) {
+         let ip = pp.node(Ip);
+         if ("number" == typeof ip.rank && op(ip.rank, Ip), "number" == typeof ip.minRank && "number" == typeof ip.maxRank)
+           for (let pp = ip.minRank; pp <= ip.maxRank; pp++) pp !== ip.rank && op(pp, Ip)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L948-L953` → after: `L1677-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1677-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1677-L1709) · [Before (L948-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L948-L953)

```diff
-     const IC = new class {
-       constructor() {
-         this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new PC.c, SC.o.subscribe("appManagerUpdated|soundVolume", (CC => {
-           const zC = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
-           for (const ZC of zC) ZC.setGlobalVolume(CC)
-         }))
+ 
+     function xc(pp, ip, cp, Op) {
+       let op = !0,
+         Ip = new hp;
+       pp.forEach((function(pp) {
+         cp.forEach((pp => Ip.setEdge(pp.left, pp.right)));
+         let Sp = pp.graph().root,
+           {
+             result: xp,
+             usedBias: Lp
+           } = Oc(pp, Sp, Ip, Op, op);
+         ip && Lp && (op = !op), xp.vs.forEach(((ip, cp) => pp.node(ip).order = cp)),
+           function(pp, ip, cp) {
+             let Op, op = {};
+             cp.forEach((cp => {
+               let Ip, Sp, xp = pp.parent(cp);
+ ... (17 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L955-L993` → after: `L1711-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1711-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1711-L1764) · [Before (L955-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L955-L993)

```diff
-       play(CC, zC) {
-         var ZC;
-         let bC, nC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ZC = (0, MC.e)()) || void 0 === ZC ? void 0 : ZC.qE,
-           fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gC.g,
-           oC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : gC.j,
-           FC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         var NC;
-         (0, MC.e)() ? bC = !!Array.isArray(nC) || (0, qC.c)(nC) !== (null === (NC = (0, MC.e)()) || void 0 === NC ? void 0 : NC.qE): bC = !1;
-         const SC = (0, QC.k)(CC),
-           pC = this.loadSheet(bC ? this.spatialSheets : this.stereoSheets, SC);
-         if (!bC) {
-           const ZC = pC.play(CC, FC);
-           return ZC.setRelativeVolume(zC), ZC
-         }
-         const GC = (0, MC.e)(),
-           RC = Array.isArray(nC) ? nC : GC.JR.yG(nC),
- ... (23 more removed lines; see GitHub link above)
+       let Op = pp[ip];
+       Op || (pp[ip] = Op = {}), Op[cp] = !0
+     }
+ 
+     function Dc(pp, ip, cp) {
+       if (ip > cp) {
+         let pp = ip;
+         ip = cp, cp = pp
+       }
+       let Op = pp[ip];
+       return void 0 !== Op && Object.hasOwn(Op, cp)
+     }
+ 
+     function Ac(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Ip = {},
+ ... (38 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L995` → after: `L1766-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1766-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1766-L1781) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L995)

```diff
-             })) return xC
+             }))
+           })), op
+         }(pp, ip, cp, op),
+         xp = op ? "borderLeft" : "borderRight";
+ 
+       function Lp(pp, ip) {
+         let cp = Sp.nodes().slice(),
+           Op = {},
+           op = cp.pop();
+         for (; op;) {
+           if (Op[op]) pp(op);
+           else {
+             Op[op] = !0, cp.push(op);
+             for (let pp of ip(op)) cp.push(pp)
+           }
+           op = cp.pop()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1004` → after: `L1784-L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1784-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1784-L1807) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1004)

```diff
-       loadSheet(CC, zC) {
+       return Lp((function(pp) {
+         let ip = Sp.inEdges(pp);
+         Ip[pp] = ip ? ip.reduce(((pp, ip) => {
+           var cp;
+           let Op = null != (cp = Ip[ip.v]) ? cp : 0,
+             op = Sp.edge(ip);
+           return Math.max(pp, Op + (void 0 !== op ? op : 0))
+         }), 0) : 0
+       }), (function(pp) {
+         return Sp.predecessors(pp) || []
+       })), Lp((function(ip) {
+         let cp = Sp.outEdges(ip),
+           Op = Number.POSITIVE_INFINITY;
+         cp && (Op = cp.reduce(((pp, ip) => {
+           let cp = Ip[ip.w],
+             Op = Sp.edge(ip);
+ ... (8 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1006-L1010` → after: `L1809-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L1809-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L1809-L2014) · [Before (L1006-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1006-L1010)

```diff
-         return ZC || ((0, RC.d)(zC), ZC = new JC({
-           src: zC,
-           isSoundSprite: !0,
-           volumeScalar: 1
-         }), ZC.setGlobalVolume(pC.b.get("soundVolume")), CC[zC] = ZC), ZC
+         void 0 !== Op && (Ip[pp] = null != (ip = Ip[Op]) ? ip : 0)
+       })), Ip
+     }
+ 
+     function Pc(pp, ip) {
+       let cp, Op = gp(pp),
+         op = Object.assign(function(pp, ip) {
+           let cp = {};
+           return ip.length && ip.reduce((function(ip, Op) {
+             let op = 0,
+               Ip = 0,
+               Sp = ip.length,
+               xp = Op[Op.length - 1];
+             return Op.forEach(((ip, Lp) => {
+               let Yp = function(pp, ip) {
+                   if (pp.node(ip).dummy) {
+ ... (190 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1012-L1014` → after: `L2016-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2016-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L2016-L2493) · [Before (L1012-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1012-L1014)

```diff
-       freeSheetsAfterGame() {
-         for (const CC of [this.stereoSheets, this.spatialSheets])
-           for (const [zC, ZC] of Object.entries(CC)) !GC.c.has(zC) && ZC.loaded() && (ZC.unloadOnceIdle(), delete CC[zC])
+     }
+ 
+     function tc(pp, ip, cp) {
+       var Op;
+       let op = pp.nodes().filter((ip => pp.children(ip).length)),
+         Ip = {};
+       op.forEach((Op => {
+         let op = pp.node(Op);
+         if (op && op.rankdir) {
+           let Sp = new hp({
+             multigraph: !0,
+             compound: !0
+           });
+           Sp.setGraph({
+             rankdir: op.rankdir
+           });
+ ... (462 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1017-L1018` → after: `L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L2496) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1017-L1018)

```diff
-   },
-   36708: (CC, zC, ZC) => {
+ 
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1020-L1029` → after: `L2498-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2498-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L2498-L2506) · [Before (L1020-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1020-L1029)

```diff
-       var ZC, QC, wC, bC, nC, fC, oC, qC;
-       return CC.name === zC.name && ((null === (ZC = CC.attributes) || void 0 === ZC || null === (QC = ZC.customAttributes) || void 0 === QC ? void 0 : QC.stackKey) === (null === (wC = zC.attributes) || void 0 === wC || null === (bC = wC.customAttributes) || void 0 === bC ? void  … [truncated]
-     }
-     ZC.d(zC, {
-       b: () => QC
-     })
-   },
-   36796: (CC, zC, ZC) => {
-     function QC(CC) {
-       return CC.includes("Leaf Bed")
+       pp.nodes().forEach((cp => {
+         let Op = pp.node(cp),
+           op = ip.node(cp);
+         Op && (Op.x = op.x, Op.y = op.y, Op.order = op.order, Op.rank = op.rank, ip.children(cp).length && (Op.width = op.width, Op.height = op.height))
+       })), pp.edges().forEach((cp => {
+         let Op = pp.edge(cp),
+           op = ip.edge(cp);
+         Op.points = op.points, Object.hasOwn(op, "x") && (Op.x = op.x, Op.y = op.y)
+       })), pp.graph().width = ip.graph().width, pp.graph().height = ip.graph().height
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1033` → after: `L2534-L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2534-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L2534-L2553) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1033)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
+       let ip = new hp({
+           multigraph: !0,
+           compound: !0
+         }),
+         cp = Xc(pp.graph());
+       return ip.setGraph(Object.assign({}, uc, Ec(cp, ec), Oi(cp, jc))), pp.nodes().forEach((cp => {
+         let Op = Ec(Xc(pp.node(cp)), kc);
+         Object.keys(mc).forEach((pp => {
+           void 0 === Op[pp] && (Op[pp] = mc[pp])
+         })), ip.setNode(cp, Op);
+         let op = pp.parent(cp);
+         void 0 !== op && ip.setParent(cp, op)
+       })), pp.edges().forEach((cp => {
+         let Op = Xc(pp.edge(cp));
+         ip.setEdge(cp, Object.assign({}, qc, Ec(Op, Rc), Oi(Op, Mc)))
+       })), ip
+ ... (4 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1037` → after: `L2557-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L2557-L2561) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1037)

```diff
-       return CC.includes(" Strongbed")
+       let ip = {};
+       return pp && Object.entries(pp).forEach((pp => {
+         let [cp, Op] = pp;
+         "string" == typeof cp && (cp = cp.toLowerCase()), ip[cp] = Op
+       })), ip
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L1041-L1103` → after: `L2565-L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2565-L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/120.js#L2565-L2597) · [Before (L1041-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/120.js#L1041-L1103)

```diff
-       return QC(CC) || wC(CC) || bC(CC)
-     }
-     ZC.d(zC, {
-       d: () => nC,
-       g: () => QC,
-       i: () => bC,
-       l: () => wC
-     })
-   },
-   36794: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => qC
-     });
-     var QC = ZC(36796),
-       wC = ZC(9194);
-     const bC = [],
- ... (47 more removed lines; see GitHub link above)
+       let ip = gp(pp),
+         cp = new hp({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return pp.nodes().forEach((ip => {
+         cp.setNode(ip, {
+           label: ip
+         }), cp.setParent(ip, "layer" + pp.node(ip).rank)
+       })), pp.edges().forEach((pp => cp.setEdge(pp.v, pp.w, {}, pp.name))), ip.forEach(((pp, ip) => {
+         let Op = "layer" + ip;
+         cp.setNode(Op, {
+           rank: "same"
+         }), pp.reduce(((pp, ip) => (cp.setEdge(pp, ip, {
+           style: "invis"
+         }), ip)))
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L4` → after: `L4-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L4-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L786) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/121.js#L4)

```diff
-   6490: (CC, zC, ZC) => {
+   36812: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Up,
+       h: () => jp
+     });
+     cp(34402);
+     var Op = cp(62),
+       op = cp(1476),
+       Ip = cp(1956),
+       Sp = cp(2004),
+       xp = cp(25),
+       Lp = cp(2492),
+       Yp = cp(36819),
+       Dp = cp(36828),
+       Ap = cp(34386),
+       Pp = cp(34397),
+ ... (767 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L9-L45` → after: `L809-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L809-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/121.js#L809-L967) · [Before (L9-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/121.js#L9-L45)

```diff
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
-       musicVolumeLevel: .6,
- ... (21 more removed lines; see GitHub link above)
+       stop: () => ep,
+       fade: () => ep,
+       rate: () => ep,
+       stopsAtOnce: () => !1,
+       isAlive: () => !1,
+       getDurationMs: () => 0,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => ep,
+       setPannerAttr: () => ep,
+       setPosition: () => ep
+     };
+     class jp {
+       constructor(pp) {
+         let ip, {
+           src: cp,
+ ... (143 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L47-L168` → after: `L969-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L969-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/121.js#L969-L1103) · [Before (L47-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/121.js#L47-L168)

```diff
-       },
-       canCustomiseChar: !0,
-       defaultBlock: "Block of Gold",
-       cantChangeError: "You cannot modify this block",
-       cantBreakError: null,
-       cantBuildError: null,
-       touchscreenActionButton: null,
-       strictFluidBuckets: !0,
-       preserveProtectedFluidSources: !1,
-       fillBrokenBlocksWithWater: !1,
-       canUseZoomKey: !0,
-       canAltAction: !0,
-       canSeeNametagsThroughWalls: !0,
-       showBasicMovementControls: !0,
-       middleTextTop: "",
-       middleTextUpper: "",
- ... (106 more removed lines; see GitHub link above)
+         const tp = (0, Wp.g)(),
+           Hp = Array.isArray(Sp) ? Sp : tp.Yk.sH(Sp),
+           jp = tp.Yk.sH(tp.NJ);
+         if (!Hp || Ap().sqrDist(Hp, jp) > xp * xp) return ep;
+         let kp;
+         if (!Dp) {
+           if (!this.spatialVoices.admit({
+               group: dp.has(Up) ? null : (0, vp.f)(pp),
+               loudness: (0, vp.c)(ip, Ap().Yx(Hp, jp), Lp),
+               startMs: performance.now(),
+               getDurationMs: () => {
+                 var pp, ip;
+                 return null !== (pp = null === (ip = kp) || void 0 === ip ? void 0 : ip.getDurationMs()) && void 0 !== pp ? pp : 0
+               },
+               isAlive: () => {
+                 var pp, ip;
+ ... (119 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/122.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/122.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994)

#### 1. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122, 396];
+ export const ids = [122];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L1573` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/122.js#L4) · [Before (L4-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L1573)

```diff
-   36221: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => lz
-     });
-     var QC = ZC(310),
-       wC = ZC(3464),
-       bC = ZC(3498),
-       nC = ZC(3490),
-       fC = ZC(3487),
-       oC = ZC(1143),
-       qC = ZC(38),
-       FC = ZC(1645),
-       WC = ZC(1321),
-       NC = ZC(1388),
-       MC = ZC(1002),
-       gC = ZC.n(MC),
- ... (1554 more removed lines; see GitHub link above)
+   6613: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1577-L1593` → after: `L8-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/122.js#L8-L45) · [Before (L1577-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/122.js#L1577-L1593)

```diff
-     var QC = ZC(1284),
-       wC = ZC(1169),
-       bC = ZC(600);
- 
-     function nC(CC) {
-       return CC = function(CC, zC) {
-         var ZC;
-         const QC = new URLSearchParams(zC),
-           wC = QC.get("lobby"),
-           bC = QC.get("vm"),
-           nC = null !== (ZC = wC) && void 0 !== ZC ? ZC : CC.lobbyName,
-           fC = null !== bC && void 0 !== bC ? bC : CC.directJoinVmUrl;
-         if (nC === CC.lobbyName && fC === CC.directJoinVmUrl) return CC;
-         return {
-           ...CC,
-           lobbyName: nC,
- ... (1 more removed lines; see GitHub link above)
+     const Op = {
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1595-L1603` → after: `L47-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L47-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/122.js#L47-L166) · [Before (L1595-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/122.js#L1595-L1603)

```diff
-       }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), CC = function(CC) {
-         if ((0, bC.H)(CC.directJoinVmUrl)) return CC;
-         const zC = (0, wC.hb)(CC.directJoinVmUrl);
-         null === zC && (CC.directJoinVmUrl = void 0);
-         return CC
-       }(CC = function(CC) {
-         if ((0, bC.H)(CC.gameNameWithVariation)) return CC;
-         return CC.gameNameWithVariation = (0, QC.k)(CC.gameNameWithVariation), CC
-       }(CC))
+       },
+       canCustomiseChar: !0,
+       defaultBlock: "Block of Gold",
+       cantChangeError: "You cannot modify this block",
+       cantBreakError: null,
+       cantBuildError: null,
+       touchscreenActionButton: null,
+       strictFluidBuckets: !0,
+       preserveProtectedFluidSources: !1,
+       fillBrokenBlocksWithWater: !1,
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       middleTextTop: "",
+       middleTextUpper: "",
+ ... (104 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/123.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/123.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123];
+ export const ids = [123, 401];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L4)

```diff
-   6529: (CC, zC, ZC) => {
+   36533: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L8-L17` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L8-L40) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L8-L17)

```diff
-     var QC = ZC(1143),
-       wC = ZC(113),
-       bC = ZC(216),
-       nC = ZC(1388),
-       fC = ZC(1263),
-       oC = ZC(20),
-       qC = ZC(1609),
-       FC = ZC(3389),
-       WC = ZC(3110),
-       NC = ZC(1056);
+     var Op = cp(322),
+       op = cp(3607),
+       Ip = cp(3641),
+       Sp = cp(3635),
+       xp = cp(3628),
+       Lp = cp(1201),
+       Yp = cp(44),
+       Dp = cp(1765),
+       Ap = cp(1387),
+       Pp = cp(1480),
+       Wp = cp(1049),
+       yp = cp.n(Wp),
+       Up = cp(1692),
+       wp = cp(62),
+       vp = cp(82),
+       tp = cp(2420),
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L19` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L42-L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L19)

```diff
-     function MC() {
+     function Tp(pp) {
+       var ip;
+       let {
+         eventName: cp
+       } = pp;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L22-L652` → after: `L49-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L49-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L49-L171) · [Before (L22-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L22-L652)

```diff
-       } = (0, QC.y)(), zC = !(0, bC.shouldUseUkPrivacyPolicy)();
-       return (0, NC.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, NC.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: CC("homePage:privacyPolicy")
-         }), (0, NC.jsx)("p", {
-           children: (0, NC.jsxs)("em", {
-             children: ["Last updated: ", FC.k.toLocaleDateString()]
-           })
-         }), (0, NC.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, NC.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, NC.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
- ... (615 more removed lines; see GitHub link above)
+       } = (0, Lp.H)(), op = Mp.e[cp], [Ip, Sp] = (0, wp.useState)((() => Date.now() >= op.endsAt.getTime())), [xp, Yp] = (0, wp.useState)("overall"), Dp = function(pp, ip) {
+         const {
+           userContext: cp,
+           isUserContextUpdating: Op
+         } = (0, ep.b)(), op = `${pp}:${ip}`, [Ip, Sp] = (0, wp.useState)({
+           requestKey: op,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, wp.useEffect)((() => {
+           if (Op) return;
+           let Ip, xp = !1;
+           const Lp = async () => {
+             if ("visible" === document.visibilityState) try {
+               const Op = await Cp.b.getGameEventLeaderboard(cp, {
+ ... (107 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L654-L669` → after: `L173-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L173-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L173-L241) · [Before (L654-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L654-L669)

```diff
-           }), (0, NC.jsxs)("tr", {
-             children: [(0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: (0, NC.jsx)("a", {
-                   href: "https://docs.bytebrew.io/BBSettings/privacypolicy",
-                   children: "ByteBrew"
-                 })
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Usage data, device data, interactions on the site"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Analyzes website usage to help us understand how the site is used and improve user experience."
-               })
+           }), (0, Jp.jsxs)("div", {
+             className: "GameEventPanelLeaderboard",
+             children: [(0, Jp.jsxs)("div", {
+               className: "GameEventPanelLeaderboardHeader",
+               children: [(0, Jp.jsx)("h3", {
+                 className: "GameEventPanelLeaderboardTitle",
+                 children: Op(op.leaderboard.titleKey)
+               }), (0, Jp.jsx)(Qp.b, {
+                 ariaLabel: Op("gameEvents:leaderboardScope"),
+                 options: Mp.b.map((pp => ({
+                   value: pp,
+                   label: Op(`gameEvents:${pp}Scope`)
+                 }))),
+                 value: xp,
+                 onChange: Yp
+               })]
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L672-L687` → after: `L244-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L244-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L244-L345) · [Before (L672-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L672-L687)

```diff
-         }), (0, NC.jsx)("h4", {
-           children: "Content Moderation"
-         }), (0, NC.jsxs)("table", {
-           children: [(0, NC.jsxs)("tr", {
-             children: [(0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "What They Do"
-               })
+         })
+       })
+     }
+ 
+     function fp(pp) {
+       let {
+         event: ip,
+         progress: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Lp.H)(), op = null !== cp && ip.prizeGoals.some(((pp, ip) => cp[ip] >= pp.target));
+       return (0, Jp.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, Jp.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+ ... (86 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L689-L704` → after: `L347-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L347-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L347-L354) · [Before (L689-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L689-L704)

```diff
-           }), (0, NC.jsxs)("tr", {
-             children: [(0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: (0, NC.jsx)("a", {
-                   href: "https://www.lassomoderation.com/privacy-policy/",
-                   children: "Lasso Moderation"
-                 })
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Anonymized IP addresses, chat logs, usernames, reports, custom lobby metadata, custom game metadata, thumbnail uploads"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Provides automated and manual moderation services to ensure chat safety and compliance with guidelines."
-               })
+           }), (0, Jp.jsxs)("aside", {
+             className: "GamePageContentSection",
+             children: [(0, Jp.jsx)("h2", {
+               children: Ip.tips
+             }), (0, Jp.jsx)("ul", {
+               children: Op.tips.map((pp => (0, Jp.jsx)("li", {
+                 children: pp
+               }, pp)))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L706-L711` → after: `L356-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L356-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L356-L388) · [Before (L706-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L706-L711)

```diff
-           }), (0, NC.jsxs)("tr", {
-             children: [(0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: (0, NC.jsx)("a", {
-                   href: "https://www.purgomalum.com/",
-                   children: "PurgoMalum"
+           }), (0, Jp.jsxs)("section", {
+             className: "GamePageContentSection GamePageContentFaq",
+             children: [(0, Jp.jsx)("h2", {
+               children: Ip.faq
+             }), Op.faq.map((pp => {
+               let {
+                 question: ip,
+                 answer: cp
+               } = pp;
+               return (0, Jp.jsxs)("div", {
+                 className: "GamePageContentFaqItem",
+                 children: [(0, Jp.jsx)("h3", {
+                   children: ip
+                 }), (0, Jp.jsx)("p", {
+                   children: cp
+                 })]
+ ... (17 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L713-L721` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L390) · [Before (L713-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L713-L721)

```diff
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Chat logs"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Provides profanity filtering for moderating chat messages."
-               })
+               }, pp)))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L724-L757` → after: `L393-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L393-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L393-L548) · [Before (L724-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L724-L757)

```diff
-         }), (0, NC.jsx)("h4", {
-           children: "Payment Providers"
-         }), (0, NC.jsxs)("table", {
-           children: [(0, NC.jsxs)("tr", {
-             children: [(0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (18 more removed lines; see GitHub link above)
+         })
+       })
+     }
+     var Gp = cp(1060),
+       rp = cp(104),
+       Zp = cp(1149),
+       zp = cp(34470),
+       sp = cp(1666),
+       Kp = cp(1543),
+       Vp = cp(1538),
+       ii = cp(1623),
+       ci = cp(1490),
+       Oi = cp(1372),
+       oi = cp(36539),
+       Ii = cp(1244),
+       Si = cp(1014),
+ ... (140 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L759-L790` → after: `L550-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L550-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L550-L1264) · [Before (L759-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L759-L790)

```diff
-         }), (0, NC.jsx)("h4", {
-           children: "Platform Integrations"
-         }), (0, NC.jsxs)("table", {
-           children: [(0, NC.jsxs)("tr", {
-             children: [(0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "Information Processed"
-               })
-             }), (0, NC.jsx)("td", {
-               children: (0, NC.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (16 more removed lines; see GitHub link above)
+         })]
+       })
+     }
+     var Hi = cp(4766),
+       di = cp(4685),
+       ei = cp(3546);
+     const ui = 8,
+       ji = 12;
+ 
+     function ki(pp) {
+       let {
+         customLobbies: ip,
+         favouriteLobbies: cp,
+         toggleLikeLobby: Op,
+         showReport: op
+       } = pp;
+ ... (699 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L794-L886` → after: `L1339-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1339-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L1339-L1464) · [Before (L794-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L794-L886)

```diff
-         }), (0, NC.jsx)("h3", {
-           children: "3.4 YouTube API Services"
-         }), (0, NC.jsxs)("p", {
-           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
-             href: "https://www.youtube.com/t/terms",
-             children: "YouTube Terms of Service"
-           }), "."]
-         }), (0, NC.jsxs)("p", {
-           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, NC.jsx)("a", {
-             href: "http://www.google.com/policies/privacy",
-             children: "http://www.google.com/policies/privacy"
-           }), "."]
-         }), (0, NC.jsx)("p", {
-           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
-         }), (0, NC.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
- ... (77 more removed lines; see GitHub link above)
+         }), ip.rows.length > 0 && (0, yp.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: ip.rows.map((pp => {
+             const {
+               label: ip,
+               value: cp
+             } = op(pp);
+             return (0, yp.jsxs)("div", {
+               className: Pp()("GameApprovalInfoRow", pp.passed ? "Passed" : "Failed"),
+               children: [(0, yp.jsx)(Dp.d, {
+                 name: pp.passed ? "check" : "xmark"
+               }), (0, yp.jsxs)("div", {
+                 className: "GameApprovalInfoRowText",
+                 children: [(0, yp.jsx)("div", {
+                   className: "GameApprovalInfoRowLabel",
+                   children: ip
+ ... (110 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1064-L1074` → after: `L1490-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1490-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L1490-L1506) · [Before (L1064-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L1064-L1074)

```diff
-         adMobPrivacyOptionsRequired: CC
-       } = (0, oC.k)(["adMobPrivacyOptionsRequired"]);
-       if (!CC) return null;
-       return (0, NC.jsx)(nC.g, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await qC.d.request("ads.showPrivacyOptions", {})
-             } catch (CC) {
-               console.error("Failed to open AdMob privacy options:", CC)
+         t: pp,
+         selectedLanguage: ip
+       } = (0, op.H)();
+       return {
+         statusText: ip => pp(Ip[ip]),
+         rowText: cp => {
+           const Ip = (pp, cp) => (0, Op.cb)((0, op.p)(ip.code, pp), 0, cp);
+           switch (cp.kind) {
+             case "ownerAccountAge": {
+               const ip = cp.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: pp("studio:approvalAccountAgeLabel"),
+                 value: pp(ip, {
+                   age: Ip(ip, cp.accountAgeMs),
+                   days: cp.minAccountAgeDays
+                 })
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1076-L1079` → after: `L1508-L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1508-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L1508-L1547) · [Before (L1076-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L1076-L1079)

```diff
-           })()
-         },
-         children: "Manage Privacy Choices"
-       })
+             case "sinceUnbannedOrUnmuted":
+               return {
+                 label: pp("studio:approvalSinceUnbannedLabel"), value: pp("studio:approvalSinceUnbannedValue", {
+                   time: Ip("studio:approvalSinceUnbannedValue", cp.sinceMs),
+                   days: cp.minDays
+                 })
+               };
+             case "reportHold": {
+               const {
+                 detail: ip
+               } = cp;
+               if (null === ip) return {
+                 label: pp("studio:approvalUnderInvestigation"),
+                 value: null
+               };
+               const Op = ip.weightedReporters.toFixed(1),
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1083-L1095` → after: `L1562-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L1562-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/123.js#L1562-L1570) · [Before (L1083-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/123.js#L1083-L1095)

```diff
-       return (0, NC.jsxs)(NC.Fragment, {
-         children: [(0, wC.e)() && (0, NC.jsx)(NC.Fragment, {
-           children: (0, NC.jsx)(nC.g, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, fC.n)()
-             },
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, NC.jsx)(gC, {}), (0, NC.jsx)(WC.d, {
-           className: "PrivacyPolicyLinks"
-         }), (0, NC.jsx)(MC, {})]
-       })
+       const [pp, ip] = (0, Op.useState)(!1);
+       return (0, Op.useLayoutEffect)((() => {
+         let pp = !0;
+         return (0, op.h)().then((() => {
+           pp && ip(!0)
+         })), () => {
+           pp = !1
+         }
+       }), []), pp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/124.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/124.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851)

#### 1. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L2)

```diff
- export const ids = [124];
+ export const ids = [124, 125];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L4` → after: `L4-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L4-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L4-L69) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L4)

```diff
-   6533: (CC, zC, ZC) => {
+   6666: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(1112);
+ 
+     function op(pp) {
+       let {
+         href: ip,
+         children: cp
+       } = pp;
+       return (0, Op.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: ip,
+         target: "_blank",
+         rel: "noreferrer noopener",
+ ... (50 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L8-L9` → after: `L73-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L73-L83) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L8-L9)

```diff
-     var QC = ZC(1143),
-       wC = ZC(1056);
+     var Op = cp(1201),
+       op = cp(131),
+       Ip = cp(226),
+       Sp = cp(1480),
+       xp = cp(1334),
+       Lp = cp(25),
+       Yp = cp(1705),
+       Dp = cp(3505),
+       Ap = cp(3221),
+       Pp = cp(6660),
+       Wp = cp(1112);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L14` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L88) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L14)

```diff
-       } = (0, QC.y)();
+       } = (0, Op.H)(), ip = !(0, Ip.shouldUseUkPrivacyPolicy)();
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L19` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L93) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L19)

```diff
-           children: CC("homePage:termsOfService")
+           children: pp("homePage:privacyPolicy")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L21-L22` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L95-L96) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L21-L22)

```diff
-           children: (0, wC.jsx)("em", {
-             children: "Last updated: July 15, 2025"
+           children: (0, Wp.jsxs)("em", {
+             children: ["Last updated: ", Dp.h.toLocaleDateString()]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L25-L27` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L99-L101) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L25-L27)

```diff
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, wC.jsx)("h3", {
-           children: "1. General Information"
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, Wp.jsx)("h2", {
+           children: "1. Who We Are"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L29-L31` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L103) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L29-L31)

```diff
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
-         }), (0, wC.jsx)("h3", {
-           children: "2. Definitions"
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L33-L45` → after: `L105-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L105-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L105-L127) · [Before (L33-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L33-L45)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, wC.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, wC.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
-             }), (0, wC.jsx)("li", {
-               children: '"User", "you", or "your" refers to anyone using the Services.'
-             }), (0, wC.jsx)("li", {
-               children: '"Content" means all text, graphics, logos, images, software, and other material found on Bloxd.io.'
-             }), (0, wC.jsx)("li", {
-               children: '"Virtual Goods" refers to virtual items available for purchase within Bloxd.io, such as game items and in-game currency.'
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+         }), (0, Wp.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, Wp.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, Wp.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, Wp.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L47` → after: `L129-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L129-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L129-L187) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L47)

```diff
-           })
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Technical Info"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "IP address, browser type, device type, screen resolution, language selection"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "To ensure the website functions correctly and displays in your preferred language."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (43 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L49` → after: `L189-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L189-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L189-L199) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L49)

```diff
-           children: "3. Age Requirements"
+           children: "2.2 Chat Rooms"
+         }), (0, Wp.jsx)("p", {
+           children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
+           }), (0, Wp.jsx)("li", {
+             children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
+           }), (0, Wp.jsx)("li", {
+             children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
+           })]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L51` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L201) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L51)

```diff
-           children: "To use Bloxd.io, you must be at least 13 years old. If you are under 13, you need permission from a parent or guardian. By using our Services, you confirm that you meet this age or permission requirement."
+           children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L53` → after: `L203-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L203-L212) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L53)

```diff
-           children: "4. Account Creation and Security"
+           children: "2.3 Registered players"
+         }), (0, Wp.jsx)("h4", {
+           children: "2.3.1 Age Requirements and Parental Consent"
+         }), (0, Wp.jsxs)("p", {
+           children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer t … [truncated]
+             href: "https://families.google.com/familylink/privacy/child-policy",
+             children: "Google\u2019s Child Privacy Policy"
+           }), "."]
+         }), (0, Wp.jsx)("h4", {
+           children: "2.3.2 Data Collection for Registered Players"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L55-L59` → after: `L214-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L214-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L214-L228) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L55-L59)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Account Information: You agree to provide accurate and complete information when creating your account. You are responsible for keeping your account information secure and confidential."
-             }), (0, wC.jsx)("li", {
-               children: "Account Security: Notify us immediately if you suspect unauthorized access to your account. We are not liable for any loss or damage arising from your failure to secure your account."
+           children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L61-L63` → after: `L230-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L230-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L230-L286) · [Before (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L61-L63)

```diff
-           })
-         }), (0, wC.jsx)("h3", {
-           children: "5. User Conduct and Community Guidelines"
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Account Info"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Username, email address"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "To create and manage user accounts."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (41 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L65-L67` → after: `L288-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L288-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L288-L290) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L65-L67)

```diff
-           children: "We are committed to creating a fun, safe, and inclusive environment for everyone. By using Bloxd.io, you agree to follow our Community Conduct Guidelines and adhere to the following rules:"
-         }), (0, wC.jsx)("h4", {
-           children: "Expected Behavior"
+           children: "Data Retention: Data related to registered players is retained for as long as the account is active, 14 months after your last play session or If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after th … [truncated]
+         }), (0, Wp.jsx)("h3", {
+           children: "2.3.3 Data Collection for Store Purchases"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L69-L75` → after: `L292-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L292-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L292-L306) · [Before (L69-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L69-L75)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Show Respect: Treat others with kindness and consideration in all interactions."
-             }), (0, wC.jsx)("li", {
-               children: "Promote Positivity: Engage in activities that contribute to a positive community experience."
-             }), (0, wC.jsx)("li", {
-               children: "Play Fairly: Participate honestly and with integrity, respecting the rules and spirit of the game."
+           children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L77-L95` → after: `L308-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L308-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L308-L376) · [Before (L77-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L77-L95)

```diff
-           })
-         }), (0, wC.jsx)("h4", {
-           children: "Prohibited Behavior"
-         }), (0, wC.jsxs)("p", {
-           children: ["To maintain a safe and welcoming environment, the following actions are strictly prohibited:", (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Harassment and Threats: Any form of bullying, stalking, or harassment, including making threats or inciting violence."
-             }), (0, wC.jsx)("li", {
-               children: "Discrimination and Hate Speech: Discriminating against or mocking others based on age, race, ethnicity, gender, sexual orientation, religion, disability, or any other protected characteristic."
-             }), (0, wC.jsx)("li", {
-               children: "Inappropriate Content and Behavior: Sharing or promoting content that is sexually explicit, violent, or otherwise inappropriate."
-             }), (0, wC.jsx)("li", {
-               children: "Impersonation: Impersonating other players, staff, or developers with the intent to deceive or harm."
-             }), (0, wC.jsx)("li", {
-               children: "Account Security and Privacy: Sharing, selling, or trading accounts, or using someone else's account without permission."
-             }), (0, wC.jsx)("li", {
- ... (3 more removed lines; see GitHub link above)
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Account Info"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "User ID, email address"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "To attach any purchase made to your account."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (53 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L98-L111` → after: `L379-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L379-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L379-L442) · [Before (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L98-L111)

```diff
-         }), (0, wC.jsx)("h4", {
-           children: "Cheating and Unfair Play"
-         }), (0, wC.jsxs)("p", {
-           children: ["You may not make, use, share, or promote any cheats, hacks, bots, scripts, or other tools that change how the game works or give players an unfair advantage.", (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "This includes trying to bypass any form of security - including, but not limited to, protections related to client integrity or gameplay action security."
-             }), (0, wC.jsx)("li", {
-               children: "It also includes trying to reverse engineer our game's code in any way, or trying to gain unauthorised access to our systems."
-             }), (0, wC.jsx)("li", {
-               children: "If you do any of these things, we may suspend or ban your account, and we reserve the right to take civil and/or criminal legal action for your actions harming our game, our players, and our business."
-             }), (0, wC.jsx)("li", {
-               children: "If you break these rules - like hacking, cheating, or trying to mess with our game or servers - you agree to pay us \xa325,000 for each violation. This is because it's hard to measure exactly how much damage those actions cause, and this amount is a fair  … [truncated]
-             }), (0, wC.jsx)("li", {
-               children: "These rules apply to everyone, whether or not you have a game account, and even if you used a bot or other automated tool to do it."
+         }), (0, Wp.jsx)("p", {
+           children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
+         }), (0, Wp.jsx)("p", {
+           children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
+         }), (0, Wp.jsx)("h3", {
+           children: "2.4 When You Contact Us"
+         }), (0, Wp.jsx)("p", {
+           children: "When you reach out to us, we collect information to help us respond to you effectively:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+ ... (48 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L115` → after: `L448-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L448-L450) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L115)

```diff
-           children: "6. Software License and IP Restrictions"
+           children: "2.5 The AI Helper in the Code Editor"
+         }), (0, Wp.jsx)("p", {
+           children: "The Code Editor\u2019s AI Helper answers questions about the code of games made in Bloxd.io. To answer, the AI is sent your question, your game\u2019s code, the recent messages in that chat, errors your game showed and the AI notes you kept. When the AI looks … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L118` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L453) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L118)

```diff
-             children: "License Grant: We grant you a limited, non-exclusive, non-transferable right to download and run the Bloxd game client solely to access and play our Services."
+             children: "Bot.xd: your browser sends them to OVHcloud, a company in France, whose AI models answer."
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L120` → after: `L455-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L455-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L455-L463) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L120)

```diff
-             children: "What You Can't Do: You may not copy, modify, distribute, or create derivative works of the game client, or attempt to reverse-engineer, decompile, disassemble, hack, bypass security, inject cheats, bots, scripts, or any unauthorized tools. Any such action a … [truncated]
+             children: "Super Bot.xd: our game servers send them to DeepSeek, a company in China, or to OVHcloud when Super Bot.xd runs on its models. We ask for your consent before you first use DeepSeek."
+           }), (0, Wp.jsxs)("li", {
+             children: ["ChatGPT: when Bot.xd isn\u2019t working on our website, you can ask ChatGPT instead. We open it in a new tab that sends OpenAI, a company in the United States, your question, the code of the file you have open, the names and line counts of your other files … [truncated]
+               href: Pp.i,
+               children: "terms"
+             }), " and ", (0, Wp.jsx)("a", {
+               href: Pp.f,
+               children: "privacy policy"
+             }), " apply. If you paste its answer back, the code it puts in your files goes with your later questions as part of your files; its words don\u2019t, except to your own keys while their safety check is off. We count how many answers are pasted."]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L122` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L465) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L122)

```diff
-             children: "Our Ownership: All intellectual property rights in the game client and Services stay with Bloxd LTD. You get no ownership or other rights here beyond this limited license."
+             children: "Your own API key: if you add a key from another AI company, your browser sends your questions straight to that company, and its terms and privacy policy apply. Your key is kept only in your browser."
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L125` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L476-L478) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L125)

```diff
-           children: "7. Virtual Goods and In-Game Purchases"
+           children: "3.1 Scope of This Privacy Policy"
+         }), (0, Wp.jsxs)("p", {
+           children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L127-L135` → after: `L480-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L480-L482) · [Before (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L127-L135)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Purchases: Virtual Goods can be purchased within the Services. All purchases are final and non-refundable unless required by law."
-             }), (0, wC.jsx)("li", {
-               children: "License: When you purchase Virtual Goods, you receive a limited, non-transferable license to use them within the Services."
-             }), (0, wC.jsx)("li", {
-               children: "Termination: We may terminate your access to Virtual Goods if you violate these Terms or our Community Conduct Guidelines."
-             })]
-           })
+           children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging w … [truncated]
+         }), (0, Wp.jsx)("p", {
+           children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L137` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L484) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L137)

```diff
-           children: "8. Modifications and Updates"
+           children: "3.2 Advertisers"
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L139-L145` → after: `L486-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L486-L492) · [Before (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L139-L145)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Service Changes: We may update or modify the Services at any time without prior notice. We are not liable for any changes, suspensions, or discontinuations of the Services."
-             }), (0, wC.jsx)("li", {
-               children: "Terms Updates: These Terms may be updated periodically. We will notify you of significant changes, and your continued use of the Services constitutes your acceptance of the new Terms."
-             })]
-           })
+           children: "Bloxd.io displays ads from selected partners. On our website, ads are managed and delivered by our web advertising partners; within our mobile apps (available on iOS and Android), ads are delivered through Google AdMob."
+         }), ip && (0, Wp.jsx)("p", {
+           children: "With your consent, we may display personalized ads tailored to your interests based on information such as your browsing history, device information, your device\u2019s advertising identifier, and your interactions with our site and apps. Where you do not pro … [truncated]
+         }), !ip && (0, Wp.jsx)("p", {
+           children: "These ads are non-personalized, meaning they are not based on your personal data or browsing behavior, but rather on general context. We do not collect personal data from children under 13 for advertising purposes."
+         }), (0, Wp.jsx)("p", {
+           children: "Where the EU or UK General Data Protection Regulation (GDPR) applies, our website asks for your advertising and cookie choices through a consent prompt registered with the IAB Transparency and Consent Framework when you first visit. You can review, change or  … [truncated]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L147` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L494) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L147)

```diff
-           children: "9. Termination"
+           children: "3.3 Service Providers"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L149-L153` → after: `L496-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L496-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L496-L512) · [Before (L149-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L149-L153)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Termination by You: You can terminate your account at any time by contacting us."
-             }), (0, wC.jsx)("li", {
-               children: "Termination by Us: We reserve the right to terminate or suspend your account if you violate these Terms, the Community Conduct Guidelines, or engage in harmful behavior."
+           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
+         }), (0, Wp.jsx)("h4", {
+           children: "Hosting and Data Storage"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "What They Do"
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L155` → after: `L514-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L514-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L514-L934) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L155)

```diff
-           })
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "AWS Cloud"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Data storage and processing"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Hosts our servers and stores backup, data securely."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (405 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L157` → after: `L936-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L936-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L936-L946) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L157)

```diff
-           children: "10. Reporting and Consequences"
+           children: "3.4 YouTube API Services"
+         }), (0, Wp.jsxs)("p", {
+           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
+             href: "https://www.youtube.com/t/terms",
+             children: "YouTube Terms of Service"
+           }), "."]
+         }), (0, Wp.jsxs)("p", {
+           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, Wp.jsx)("a", {
+             href: "http://www.google.com/policies/privacy",
+             children: "http://www.google.com/policies/privacy"
+           }), "."]
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L159-L165` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L948-L950) · [Before (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L159-L165)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Reporting Violations: If you encounter behavior that violates these Terms or the Community Conduct Guidelines, report it using the in-game tools. Your reports help us maintain a high-quality, enjoyable experience for everyone."
-             }), (0, wC.jsx)("li", {
-               children: "Consequences for Violations: Breaking these guidelines can result in penalties ranging from temporary suspensions to permanent bans. Players who demonstrate positive behavior over time may see a reduction in penalties."
-             })]
-           })
+           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
+         }), (0, Wp.jsx)("h2", {
+           children: "4. Cookies and Tracking Technologies"
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L167` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L952) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L167)

```diff
-           children: "11. Disclaimer of Warranties"
+           children: "4.1 What Are Cookies?"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L169-L175` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L954) · [Before (L169-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L169-L175)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: 'As-Is Basis: The Services are provided "as is" and "as available", without any warranties, either express or implied.'
-             }), (0, wC.jsx)("li", {
-               children: "No Warranty: We do not guarantee that the Services will be uninterrupted or error-free."
-             })]
-           })
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L177` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L956) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L177)

```diff
-           children: "12. Limitation of Liability"
+           children: "4.2 Types of Cookies We Use"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L179-L183` → after: `L958-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L958-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L958-L972) · [Before (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L179-L183)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "No Liability: To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Services."
-             }), (0, wC.jsx)("li", {
-               children: "Total Liability: Our total liability to you for any claims related to the Services is limited to the amount you paid us in the past 12 months."
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+         }), (0, Wp.jsxs)("table", {
+           children: [(0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Type of Cookie"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Purpose"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Example"
+               })
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L185` → after: `L974-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L974-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L974-L1030) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L185)

```diff
-           })
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Functional Cookies"
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Ensure the website works properly by enabling basic functions like navigation and settings."
+               })
+             }), (0, Wp.jsx)("td", {
+               children: (0, Wp.jsx)("p", {
+                 children: "Remembering your game settings, progress or language preferences."
+               })
+             })]
+           }), (0, Wp.jsxs)("tr", {
+             children: [(0, Wp.jsx)("td", {
+ ... (41 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L187` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1032) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L187)

```diff
-           children: "13. Governing Law and Dispute Resolution"
+           children: "4.3 Managing Cookies"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L189-L201` → after: `L1034-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1034-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1034-L1058) · [Before (L189-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L189-L201)

```diff
-           children: (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Governing Law: These Terms are governed by the laws of England and Wales."
-             }), (0, wC.jsx)("li", {
-               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
-             }), (0, wC.jsx)("li", {
-               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
-             }), (0, wC.jsx)("li", {
-               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
-             }), (0, wC.jsx)("li", {
-               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
-             })]
-           })
+           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
+           }), (0, Wp.jsx)("li", {
+             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
+           }), (0, Wp.jsx)("li", {
+             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
+           }), (0, Wp.jsx)("li", {
+             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
+           })]
+         }), (0, Wp.jsx)("h2", {
+           children: "5. Security Measures"
+         }), (0, Wp.jsx)("p", {
+           children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
+         }), (0, Wp.jsx)("h3", {
+ ... (9 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L203` → after: `L1060-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1060-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1060-L1088) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L203)

```diff
-           children: "14. Severability"
+           children: "5.2 Staff Training and Compliance"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
+           }), (0, Wp.jsx)("li", {
+             children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
+           })]
+         }), (0, Wp.jsx)("h3", {
+           children: "5.3 Data Breach Notification"
+         }), (0, Wp.jsx)("p", {
+           children: "In the unlikely event of a data breach that affects your personal information:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "We will promptly notify\xa0affected users, as required by law."
+           }), (0, Wp.jsx)("li", {
+             children: "The notification will include:"
+ ... (13 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L205` → after: `L1090-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1090-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1090-L1148) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L205)

```diff
-           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
+           children: "Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded. The AI Helper sends data to France and China, and ChatGPT to the United St … [truncated]
+         }), (0, Wp.jsx)("h2", {
+           children: "7. Data Retention"
+         }), (0, Wp.jsx)("p", {
+           children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
+           }), (0, Wp.jsx)("li", {
+             children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
+           }), (0, Wp.jsx)("li", {
+             children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
+           }), (0, Wp.jsx)("li", {
+             children: "Cookies:\xa0Cookies are retained for varying periods, depending on their purpose. Functional cookies are typically retained for as long as they are needed to operate the site, while analytical cookies may be retained for a shorter period to analyze site per … [truncated]
+           }), (0, Wp.jsx)("li", {
+             children: "YouTube API Data:\xa0Public video metadata retrieved from YouTube API Services is refreshed every hour and is never kept for more than 24 hours. Creator-linked YouTube handles and channel IDs are retained while the link remains on the account and deleted as … [truncated]
+ ... (43 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L207` → after: `L1150-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1150-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1150-L1178) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L207)

```diff
-           children: "15. Contact Information"
+           children: "8.4 Your California Privacy Rights"
+         }), (0, Wp.jsx)("p", {
+           children: "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the \u201cCCPA\u201d), gives you the rights below. This section supplements the rest of this Privacy Policy."
+         }), (0, Wp.jsx)("p", {
+           children: "Personal Information We Collect: In the past 12 months we have collected the following categories of personal information, from you, from your device, and from the service providers listed in section 3.3, for the purposes described in sections 2 and 3:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsx)("li", {
+             children: "Identifiers, such as your username, email address, user ID, IP address and device advertising identifiers."
+           }), (0, Wp.jsx)("li", {
+             children: "Internet or other electronic network activity information, such as pages visited, interactions with our website and ad interactions."
+           }), (0, Wp.jsx)("li", {
+             children: "Commercial information, such as your purchase history."
+           })]
+         }), (0, Wp.jsx)("p", {
+           children: "Sale and Sharing of Personal Information: Our advertising partners listed in section 3.3 may collect identifiers and internet or other electronic network activity information through cookies and similar technologies on our website to deliver and measure ads.  … [truncated]
+         }), (0, Wp.jsx)("p", {
+ ... (13 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L209-L213` → after: `L1180-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1180-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1180-L1192) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L209-L213)

```diff
-           children: ["If you have any questions about these Terms, please contact us at:", (0, wC.jsxs)("ul", {
-             children: [(0, wC.jsx)("li", {
-               children: "Email: privacy@bloxd.io"
-             }), (0, wC.jsx)("li", {
-               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
+           children: ["To opt out of the sale or sharing of your personal information, use the \u201cDo Not Sell My Personal Information\u201d link shown to California visitors in the footer of our home page and at the top of this Privacy Policy, or email us at", " ", (0, Wp.jsx)( … [truncated]
+             href: "mailto:privacy@bloxd.io",
+             children: "privacy@bloxd.io"
+           }), ". To exercise your other rights, contact us as described in section 8.3. You may also ask an authorized agent to make a request on your behalf; we may ask the agent for proof of your permission and ask you to verify your identity with us."]
+         }), (0, Wp.jsx)("h2", {
+           children: "9. Contact Us"
+         }), (0, Wp.jsx)("p", {
+           children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
+         }), (0, Wp.jsxs)("ul", {
+           children: [(0, Wp.jsxs)("li", {
+             children: ["Email: ", (0, Wp.jsx)("a", {
+               href: "mailto:privacy@bloxd.io",
+               children: "privacy@bloxd.io"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L216-L217` → after: `L1197-L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1197-L1198) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L216-L217)

```diff
-         }), (0, wC.jsx)("h3", {
-           children: "16. Entire Agreement"
+         }), (0, Wp.jsx)("h2", {
+           children: "10. Updates to This Policy"
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L219` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/124.js#L1200) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/124.js#L219)

```diff
-           children: "These Terms, together with our Privacy Policy and Community Conduct Guidelines, constitute the entire agreement between you and Bloxd LTD regarding your use of the Services. They supersede any prior agreements or communications."
+           children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/125.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/125.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L6)

```diff
-   6539: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => gC
+   6660: (pp, ip, cp) => {
+     cp.d(ip, {
+       WorldCodeAiChatGptNotice: () => Dp,
+       WorldCodeAiDeepSeekNotice: () => Yp,
+       c: () => Sp,
+       f: () => Lp,
+       i: () => xp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L18` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/125.js#L12-L17) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/125.js#L8-L18)

```diff
-     var QC = ZC(1463),
-       wC = ZC(1493),
-       bC = ZC(2991),
-       nC = ZC(2213),
-       fC = ZC(1388),
-       oC = ZC(1453),
-       qC = ZC(1076),
-       FC = ZC(1004),
-       WC = ZC(1143),
-       NC = ZC(1013),
-       MC = ZC(1056);
+     var Op = cp(1201),
+       op = cp(6666),
+       Ip = cp(1112);
+     const Sp = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       xp = "https://openai.com/policies/terms-of-use/",
+       Lp = "https://openai.com/policies/privacy-policy/";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L24-L68` → after: `L22-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/125.js#L22-L41) · [Before (L24-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/125.js#L24-L68)

```diff
-       } = (0, WC.y)(), {
-         pack: ZC
-       } = (0, QC.C)(), {
-         userContext: gC
-       } = (0, qC.e)();
-       if (ZC) {
-         const CC = wC.d[ZC];
-         if (null === CC || void 0 === CC || !CC.purchasable) return (0, MC.jsx)(oC.NavigatePreserveSearch, {
-           to: "/"
-         })
-       }
-       const SC = ZC ? wC.d[ZC] : null,
-         pC = ZC ? bC.g[(0, nC.i)(ZC)] : null,
-         PC = void 0 !== (null === SC || void 0 === SC ? void 0 : SC.characterSet) || null !== SC && void 0 !== SC && SC.singleItem ? SC.displayName : `${null!==(CC=null===SC||void 0===SC?void 0:SC.displayName)&&void 0!==CC?CC:ZC} Pack`,
-         GC = SC ? `Your ${PC} is Ready!` : "Welcome To Super Rank!",
-         RC = SC ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
- ... (29 more removed lines; see GitHub link above)
+       } = (0, Op.H)();
+       return (0, Ip.jsxs)(Ip.Fragment, {
+         children: [pp("superBotXd:deepSeekNotice"), " ", (0, Ip.jsx)(op.c, {
+           href: Sp,
+           children: pp("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
+     }
+ 
+     function Dp() {
+       const {
+         t: pp
+       } = (0, Op.H)();
+       return (0, Ip.jsxs)(Ip.Fragment, {
+         children: [pp("aiHelperChatGpt:notice"), " ", (0, Ip.jsx)(op.c, {
+           href: xp,
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/126.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/126.js#L4)

```diff
-   6547: (CC, zC, ZC) => {
+   6672: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L8-L16` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/126.js#L8-L9) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/126.js#L8-L16)

```diff
-     var QC = ZC(1295),
-       wC = ZC(48),
-       bC = ZC(88),
-       nC = ZC(1463),
-       fC = ZC(1171),
-       oC = ZC(310),
-       qC = ZC(615);
-     const FC = new URL(fC.k[oC.c.PRODUCTION]).origin;
-     var WC = ZC(1056);
+     var Op = cp(1201),
+       op = cp(1112);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L19-L40` → after: `L12-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L12-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/126.js#L12-L220) · [Before (L19-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/126.js#L19-L40)

```diff
-       const CC = (0, nC.C)();
-       return (0, wC.useEffect)((() => {
-         const zC = bC.currentUrl.getSearchParam("code");
-         bC.currentUrl.removeSearchParam("code"), null === zC && (console.error("No authorization code found in the URL"), window.close());
-         const ZC = {
-           type: `oauth_authentication_${CC.providerName}`,
-           code: zC
-         };
-         for (const CC of (wC = window.location.origin) === FC ? [wC, `https://${qC.e}`] : [wC]) {
-           var QC;
-           null === (QC = window.opener) || void 0 === QC || QC.postMessage(ZC, CC)
-         }
-         var wC;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
- ... (6 more removed lines; see GitHub link above)
+       const {
+         t: pp
+       } = (0, Op.H)();
+       return (0, op.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, op.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: pp("homePage:termsOfService")
+         }), (0, op.jsx)("p", {
+           children: (0, op.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, op.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, op.jsx)("h3", {
+           children: "1. General Information"
+ ... (193 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/127.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/127.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596)

#### 1. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L4)

```diff
-   6553: (CC, zC, ZC) => {
+   6679: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L8-L32` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L8-L18) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L8-L32)

```diff
-     var QC = ZC(48),
-       wC = ZC(1463),
-       bC = ZC(1002),
-       nC = ZC.n(bC),
-       fC = ZC(310),
-       oC = ZC(6560),
-       qC = ZC(1013),
-       FC = ZC(1453),
-       WC = ZC(4496),
-       NC = ZC(1388),
-       MC = ZC(3113),
-       gC = ZC(4503),
-       SC = ZC(1593),
-       pC = ZC(4491),
-       PC = ZC(1076),
-       GC = ZC(20),
- ... (9 more removed lines; see GitHub link above)
+     var Op = cp(1543),
+       op = cp(1577),
+       Ip = cp(3098),
+       Sp = cp(2334),
+       xp = cp(1480),
+       Lp = cp(1538),
+       Yp = cp(1141),
+       Dp = cp(1055),
+       Ap = cp(1201),
+       Pp = cp(1060),
+       Wp = cp(1112);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L34-L107` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L20-L21) · [Before (L34-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L34-L107)

```diff
-     function KC(CC) {
-       let {
-         pack: zC,
-         view: ZC,
-         favourite: QC,
-         notice: wC
-       } = CC;
-       const {
-         width: bC,
-         height: fC
-       } = oC.s.thumb, {
-         live: WC
-       } = zC;
-       return (0, hC.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, hC.jsxs)("div", {
- ... (58 more removed lines; see GitHub link above)
+     function yp() {
+       var pp;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L110` → after: `L24-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L24-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L24-L41) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L110)

```diff
-       } = (0, JC.y)(), qC = (0, YC.j)(), FC = Date.now(), WC = null === zC ? 0 : "owned" === zC.kind ? zC.packs.length : zC.page.results.length;
+       } = (0, Ap.H)(), {
+         pack: cp
+       } = (0, Op.A)(), {
+         userContext: yp
+       } = (0, Yp.b)();
+       if (cp) {
+         const pp = op.e[cp];
+         if (null === pp || void 0 === pp || !pp.purchasable) return (0, Wp.jsx)(Lp.NavigatePreserveSearch, {
+           to: "/"
+         })
+       }
+       const Up = cp ? op.e[cp] : null,
+         wp = cp ? Ip.i[(0, Sp.g)(cp)] : null,
+         vp = void 0 !== (null === Up || void 0 === Up ? void 0 : Up.characterSet) || null !== Up && void 0 !== Up && Up.singleItem ? Up.displayName : `${null!==(pp=null===Up||void 0===Up?void 0:Up.displayName)&&void 0!==pp?pp:cp} Pack`,
+         tp = Up ? `Your ${vp} is Ready!` : "Welcome To Super Rank!",
+         Hp = Up ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L112-L117` → after: `L43-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L43-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L43-L55) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L112-L117)

```diff
-         className: nC()("ShaderPackBrowseResults", {
-           Loading: ZC && null !== zC
-         }),
-         children: [ZC && null === zC && (0, hC.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: (0, hC.jsx)(IC.d, {})
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [wp && (0, Wp.jsx)(wp, {}), !Up && (0, Wp.jsx)(Dp.b, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+           customClass: "SuperRankWelcomeIconShower"
+         }), (0, Wp.jsx)("div", {
+           className: "PurchaseWelcomeTitle FullyFancyText",
+           children: tp
+         }), (0, Wp.jsx)("div", {
+           className: "PurchaseWelcomeText",
+           children: Hp
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L119-L122` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L57-L61) · [Before (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L119-L122)

```diff
-           className: "ShaderPackBrowseMessage",
-           children: [oC("shaderPackListing:loadFailed"), (0, hC.jsx)(NC.g, {
-             onClick: wC,
-             children: oC("general:tryAgain")
+           className: "PurchaseWelcomeWarning",
+           children: [(0, Wp.jsx)(Pp.d, {
+             name: "circle-info"
+           }), (0, Wp.jsx)("div", {
+             children: ep
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L124-L194` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/127.js#L63-L67) · [Before (L124-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/127.js#L124-L194)

```diff
-         }), "listing" === (null === zC || void 0 === zC ? void 0 : zC.kind) && WC > 0 && (0, hC.jsx)("div", {
-           className: "ShaderPackBrowseGrid",
-           children: zC.page.results.map((CC => (0, hC.jsx)(KC, {
-             pack: {
-               packId: CC.packId,
-               name: CC.name,
-               live: CC
-             },
-             view: fC,
-             favourite: {
-               isFavourite: qC.isFavourite(CC.packId),
-               onToggle: () => {
-                 qC.toggle(CC.packId)
-               }
-             }
-           }, CC.packId)))
- ... (55 more removed lines; see GitHub link above)
+         }), (0, Wp.jsx)(Lp.LinkPreserveSearch, {
+           to: "/",
+           children: (0, Wp.jsx)(xp.o, {
+             className: "PurchaseWelcomeContinue",
+             children: ip("general:continue")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/128.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/128.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/128.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/128.js#L4-L6)

```diff
-   6562: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => fC
+   6687: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Pp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L8-L90` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/128.js#L8-L16) · [Before (L8-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/128.js#L8-L90)

```diff
-     var QC = ZC(1002),
-       wC = ZC.n(QC),
-       bC = ZC(1143),
-       nC = ZC(1056);
- 
-     function fC(CC) {
-       let {
-         item: zC,
-         className: ZC
-       } = CC;
-       const {
-         t: QC
-       } = (0, bC.y)();
-       return null === zC.renderId || zC.previewsOutdated ? (0, nC.jsx)("div", {
-         className: wC()("ShaderPackPreviewsNotice", ZC),
-         children: (0, nC.jsx)("span", {
- ... (67 more removed lines; see GitHub link above)
+     var Op = cp(1361),
+       op = cp(62),
+       Ip = cp(108),
+       Sp = cp(1543),
+       xp = cp(1236),
+       Lp = cp(322),
+       Yp = cp(657);
+     const Dp = new URL(xp.l[Lp.b.PRODUCTION]).origin;
+     var Ap = cp(1112);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L93-L119` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/128.js#L19) · [Before (L93-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/128.js#L93-L119)

```diff
-       var CC;
-       const [zC, ZC] = (0, fC.d)(qC, wC.B[0]);
-       return [null !== (CC = wC.B.find((CC => CC === zC))) && void 0 !== CC ? CC : wC.B[0], ZC]
-     }
- 
-     function NC() {
-       (0, QC.useEffect)((() => () => {
-         window.location.pathname.startsWith(nC.W) || (0, nC.m)()
-       }), [])
-     }
- 
-     function MC() {
-       return (0, fC.d)(FC, !1)
-     }
- 
-     function gC() {
- ... (11 more removed lines; see GitHub link above)
+       const pp = (0, Sp.A)();
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L121-L128` → after: `L21-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L21-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/128.js#L21-L29) · [Before (L121-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/128.js#L121-L128)

```diff
-         if (zC) return;
-         let ZC = !1;
-         return bC.d.getFavouriteShaderPacks(CC).then((CC => {
-           ZC || wC(new Set(CC))
-         })).catch((CC => {
-           console.error("Failed to get favourite shader packs", CC), ZC || wC(new Set)
-         })), () => {
-           ZC = !0
+         const ip = Ip.currentUrl.getSearchParam("code");
+         Ip.currentUrl.removeSearchParam("code"), null === ip && (console.error("No authorization code found in the URL"), window.close());
+         const cp = {
+           type: `oauth_authentication_${pp.providerName}`,
+           code: ip
+         };
+         for (const pp of (op = window.location.origin) === Dp ? [op, `https://${Yp.e}`] : [op]) {
+           var Op;
+           null === (Op = window.opener) || void 0 === Op || Op.postMessage(cp, pp)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L130-L330` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/128.js#L31-L39) · [Before (L130-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/128.js#L130-L330)

```diff
-       }), [CC, zC]), {
-         isFavourite: CC => null === ZC ? null : ZC.has(CC),
-         toggle: function(zC) {
-           if (null === ZC || nC.current.has(zC)) return;
-           nC.current.add(zC);
-           const QC = !ZC.has(zC);
-           fC(zC, QC), (QC ? bC.d.favouriteShaderPack(CC, zC) : bC.d.unfavouriteShaderPack(CC, zC)).catch((CC => {
-             console.error("Failed to change a favourite shader pack", CC), fC(zC, !QC)
-           })).finally((() => {
-             nC.current.delete(zC)
-           }))
-         }
-       }
-     }
-   },
-   6556: (CC, zC, ZC) => {
- ... (185 more removed lines; see GitHub link above)
+         var op;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+       })), (0, Ap.jsx)("div", {
+         className: "AuthCallback",
+         children: (0, Ap.jsx)(Op.c, {
+           showFace: !0,
+           loading: !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L332-L439` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/128.js#L41) · [Before (L332-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/128.js#L332-L439)

```diff
-       }
-       return CC.listed || bC.push({
-         tone: "info",
-         text: wC("shaderPackListing:ownerUnlisted"),
-         detail: null
-       }), bC
-     }
- 
-     function uC(CC) {
-       return Math.max(1, Math.round(CC / 1024))
-     }
- 
-     function rC(CC, zC, ZC) {
-       return CC instanceof wC.d && CC.errorMessageForUser ? CC.errorMessageForUser : zC(ZC)
-     }
-   },
- ... (92 more removed lines; see GitHub link above)
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L4)

```diff
-   40908: (CC, zC, ZC) => {
+   6690: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L6)

```diff
-       ShaderPackCategory: () => mC
+       default: () => Np
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L8-L31` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L8-L10) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L8-L31)

```diff
-     var QC = ZC(48),
-       wC = ZC(1463),
-       bC = ZC(1388),
-       nC = ZC(1453),
-       fC = ZC(1143),
-       oC = ZC(77),
-       qC = ZC(20),
-       FC = ZC(1557),
-       WC = ZC(6609),
-       NC = ZC(296),
-       MC = ZC(6658),
-       gC = ZC(6651),
-       SC = ZC(6660),
-       pC = ZC(6556),
-       PC = ZC(4942),
-       GC = ZC(4992),
- ... (8 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(1049),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L33-L52` → after: `L12-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L12-L32) · [Before (L33-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L33-L52)

```diff
-       iC = ZC(4998),
-       vC = ZC(1013),
-       eC = ZC(6596),
-       hC = ZC(1056);
-     const KC = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
-       wrongApiVersion: "shaderPack:statusWrongApiVersion",
-       checking: "shaderPack:statusChecking",
-       unchecked: "shaderPack:statusUnchecked",
-       noCompiler: "shaderPack:statusNoCompiler"
-     };
- ... (4 more removed lines; see GitHub link above)
+       xp = cp(322),
+       Lp = cp(6704),
+       Yp = cp(1060),
+       Dp = cp(1538),
+       Ap = cp(4653),
+       Pp = cp(1480),
+       Wp = cp(3224),
+       yp = cp(4656),
+       Up = cp(1692),
+       wp = cp(4648),
+       vp = cp(1141),
+       tp = cp(25),
+       Hp = cp(1520),
+       dp = cp(1211),
+       ep = cp(104),
+       jp = cp(1201),
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L56-L60` → after: `L36-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L36-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L36-L108) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L56-L60)

```diff
-         stored: zC,
-         checking: ZC,
-         webGpuUsable: QC,
-         changePending: wC,
-         compiler: bC,
+         pack: ip,
+         view: cp,
+         favourite: Op,
+         notice: op
+       } = pp;
+       const {
+         width: Ip,
+         height: xp
+       } = Lp.u.thumb, {
+         live: Ap
+       } = ip;
+       return (0, Mp.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, Mp.jsxs)("div", {
+           className: "ShaderPackCardTile",
+           children: [(0, Mp.jsxs)(Dp.LinkPreserveSearch, {
+ ... (57 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L62-L82` → after: `L110-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L110-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L110-L122) · [Before (L62-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L62-L82)

```diff
-       } = CC;
-       const fC = function(CC, zC, ZC, QC, wC) {
-           const bC = (0, MC.storedPackOutcome)(CC, wC);
-           return "none" === bC.kind ? "noCompiler" === bC.reason ? zC ? "checking" : "noCompiler" : "otherApiVersion" === bC.reason ? "wrongApiVersion" : "failed" : (0, AC.f)() ? "harnessBuild" : "blocked" === bC.kind ? (0, MC.shaderPackNeedsCheck)(CC, wC) ? zC ? "checking" : !1  … [truncated]
-         }(zC, ZC, QC, wC, bC),
-         oC = "failed" === fC || "failedRecheck" === fC,
-         qC = oC || "wrongApiVersion" === fC || "noCompiler" === fC,
-         FC = "ready" === fC || "readyAfterReload" === fC ? zC.validation.offInStrict : [];
-       return (0, hC.jsxs)(hC.Fragment, {
-         children: [(0, hC.jsxs)("div", {
-           className: IC()("ShaderPackStatus", {
-             Ready: "ready" === fC,
-             Failed: qC
-           }),
-           children: ["ready" === fC && (0, hC.jsx)(vC.c, {
-             name: "circle-check"
- ... (5 more removed lines; see GitHub link above)
+       } = (0, jp.H)(), Yp = (0, Ep.i)(), Dp = Date.now(), Ap = null === ip ? 0 : "owned" === ip.kind ? ip.packs.length : ip.page.results.length;
+       return (0, Mp.jsxs)("div", {
+         className: Sp()("ShaderPackBrowseResults", {
+           Loading: cp && null !== ip
+         }),
+         children: [cp && null === ip && (0, Mp.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: (0, Mp.jsx)(kp.c, {})
+         }), Op && (0, Mp.jsxs)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: [Lp("shaderPackListing:loadFailed"), (0, Mp.jsx)(Pp.f, {
+             onClick: op,
+             children: Lp("general:tryAgain")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L84-L97` → after: `L124-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L124-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L124-L152) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L84-L97)

```diff
-         }), oC && (0, hC.jsx)(eC.d, {
-           diagnostics: zC.validation.errors,
-           more: zC.validation.moreErrors,
-           t: nC
-         }), FC.length > 0 && (0, hC.jsxs)(hC.Fragment, {
-           children: [(0, hC.jsxs)("div", {
-             className: "ShaderPackStatus OffInStrict",
-             children: [(0, hC.jsx)(vC.c, {
-               name: "triangle-exclamation"
-             }), nC("shaderPack:offInStrict")]
-           }), (0, hC.jsx)(eC.d, {
-             diagnostics: FC,
-             t: nC
-           })]
+         }), "listing" === (null === ip || void 0 === ip ? void 0 : ip.kind) && Ap > 0 && (0, Mp.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+           children: ip.page.results.map((pp => (0, Mp.jsx)(Cp, {
+             pack: {
+               packId: pp.packId,
+               name: pp.name,
+               live: pp
+             },
+             view: xp,
+             favourite: {
+               isFavourite: Yp.isFavourite(pp.packId),
+               onToggle: () => {
+                 Yp.toggle(pp.packId)
+               }
+             }
+           }, pp.packId)))
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L103-L105` → after: `L158-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L158-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L158-L168) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L103-L105)

```diff
-       let {
-         setApplySettingsCallback: zC
-       } = CC;
+       return "mine" === pp.section ? "shaderPackListing:noOwnPacks" : (0, Rp.r)(pp) ? "general:noResults" : "favourites" === pp.section ? "shaderPackListing:noFavourites" : "general:noResults"
+     }
+     var Qp = cp(6733);
+     const Jp = 24,
+       Bp = {
+         favourites: "general:favourites",
+         mine: "shaderPackListing:mine"
+       };
+ 
+     function Np() {
+       var pp, ip, cp, Ip;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L108-L124` → after: `L171-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L171-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L171-L186) · [Before (L108-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L108-L124)

```diff
-       } = (0, fC.y)(), [wC, nC] = (0, QC.useState)(null), [qC, FC] = (0, QC.useState)(null), [AC, JC] = (0, QC.useState)(null), [IC] = (0, QC.useState)(NC.k), [iC, vC] = (0, QC.useState)(!0), [eC, KC] = (0, QC.useState)(!1), {
-         loading: YC,
-         error: mC,
-         setError: EC,
-         onFiles: lC
-       } = (0, RC.i)((async CC => {
-         const zC = await (0, WC.loadPageShaderPackCompiler)();
-         if (!zC) return void EC(ZC("shaderPack:compilerUnavailable"));
-         FC(zC);
-         const QC = (0, MC.toStoredShaderPack)(CC, await (0, gC.c)(zC, CC.files));
-         await (0, MC.saveShaderPack)(QC, zC) ? (nC(QC), XC(wC, QC, zC)) : EC(ZC("shaderPack:saveFailed"))
-       }));
- 
-       function XC(CC, ZC, QC) {
-         (function(CC, zC, ZC, QC) {
-           return ZC || xC(CC, QC) || xC(zC, QC)
- ... (1 more removed lines; see GitHub link above)
+       } = (0, jp.H)(), mp = (0, Dp.useNavigatePreserveSearch)(), qp = (0, op.r)(), {
+         userContext: Cp,
+         isUserContextUpdating: lp
+       } = (0, vp.b)(), [Np, Tp] = (0, Ep.h)(), [fp, bp] = (0, Ep.d)(), hp = (0, Op.useRef)(!1), [ap, np] = (0, Ap.o)(), Fp = (0, Rp.C)(ap), [gp, Gp] = (0, Op.useState)(null !== (pp = Fp.searchQuery) && void 0 !== pp ? pp : ""), rp = (0, Op.useRef)(null), {
+         searchQuery: Zp
+       } = Fp;
+       (0, Op.useEffect)((() => {
+         Gp(null !== Zp && void 0 !== Zp ? Zp : ""), rp.current && (rp.current.value = null !== Zp && void 0 !== Zp ? Zp : "")
+       }), [Zp]);
+       const [zp, sp] = (0, Op.useState)(null), [Kp, Vp] = (0, Op.useState)(!1), [ii, ci] = (0, Op.useState)(!1), [Oi, oi] = (0, Op.useState)(0), Ii = (0, Op.useRef)(0), Si = JSON.stringify(Fp), xi = (0, Rp.k)();
+ 
+       function Li() {
+         null !== xi ? (mp(xi), tp.c.set({
+           openEverythingMenuName: xp.n.SETTINGS,
+           openSettingsCategory: "Dy"
+         })) : mp("/")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L126-L140` → after: `L188-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L188-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L188-L205) · [Before (L126-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L126-L140)

```diff
-       return (0, QC.useEffect)((() => {
-         let CC = !1;
-         return async function() {
-           const zC = (0, oC.hasUsableWebGpuAdapter)(),
-             ZC = await (0, SC.e)();
-           if (CC) return;
-           nC(ZC), KC(!0), vC(!1);
-           const QC = null !== ZC ? (0, WC.loadPageShaderPackCompiler)() : null,
-             wC = await zC;
-           if (CC) return;
-           JC(wC);
-           const bC = await QC;
-           if (!CC && (FC(bC), null !== ZC && wC && null !== bC && (0, MC.shaderPackNeedsCheck)(ZC, bC))) {
-             const zC = await (0, gC.b)(ZC, bC);
-             CC || nC((CC => CC === ZC ? zC : CC))
+ 
+       function Yi(pp) {
+         np((ip => {
+           (0, Rp.eb)(ip, {
+             ...Fp,
+             pageNumber: 1,
+             ...pp
+           })
+         }))
+       }
+ 
+       function Di() {
+         const pp = gp.trim() || null;
+         Yi({
+           searchQuery: pp,
+           ...null !== pp && !hp.current && (0, Rp.l)(Fp) && {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L142-L143` → after: `L207-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L207-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L207-L236) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L142-L143)

```diff
-         }().catch((zC => {
-           console.error("Failed to load the stored shader pack", zC), CC || EC(ZC("shaderPack:unexpectedError"))
+         })
+       }(0, wp.e)(Li), (0, Ep.b)(), (0, Op.useEffect)((() => {
+         if (lp) return;
+         const pp = ++Ii.current,
+           ip = JSON.parse(Si);
+         Vp(!0), ci(!1), async function(pp) {
+           if ("mine" === pp.section) return {
+             kind: "owned",
+             packs: await Hp.b.getOwnedShaderPacks(Cp)
+           };
+           const ip = "favourites" === pp.section,
+             cp = ip && (0, Rp.l)(pp),
+             Op = await Hp.b.getShaderPacks(Cp, {
+               sort: ip ? Rp.d : pp.sort,
+               features: cp ? [] : pp.withFeatures,
+               withoutFeatures: cp ? [] : pp.withoutFeatures,
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L145-L153` → after: `L238-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L238-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L238-L401) · [Before (L145-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L145-L153)

```diff
-           CC || (vC(!1), KC(!1))
-         })), () => {
-           CC = !0
-         }
-       }), []), (0, hC.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, hC.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: ZC("shaderPack:intro")
+           Ii.current === pp && Vp(!1)
+         }))
+       }), [Si, Cp, lp, Oi]);
+       const [Ai, Pi] = (0, Op.useState)(null), Wi = null !== (cp = null === (Ip = ("listing" === (null === zp || void 0 === zp ? void 0 : zp.kind) ? zp.page.results : (null !== (ip = null === zp || void 0 === zp ? void 0 : zp.packs) && void 0 !== ip ? ip : []).flatMap((pp => pp.l … [truncated]
+       (0, Op.useEffect)((() => {
+         null !== Wi && Pi(Wi)
+       }), [Wi]);
+       const yi = "mine" === Fp.section,
+         Ui = (0, Rp.n)(Cp),
+         wi = pp => {
+           "explore" !== Fp.section && (pp.stopPropagation(), pp.preventDefault(), Yi({
+             section: "explore"
+           }))
+         };
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+ ... (148 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L155-L209` → after: `L403-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L403-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/129.js#L403-L425) · [Before (L155-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/129.js#L155-L209)

```diff
-           to: pC.W,
-           className: "ShaderPackBrowseLink",
-           children: (0, hC.jsx)(bC.o, {
-             className: "ShaderPackBrowseButton",
-             children: ZC("shaderPackListing:browse")
-           })
-         }), !1 === AC && (0, hC.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: ZC(IC ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== mC && (0, hC.jsxs)("div", {
-           className: "ShaderPackCategoryError",
-           children: [ZC("general:error"), ": ", mC]
-         }), wC && (0, hC.jsxs)("div", {
-           className: "SettingBox ShaderPackSummary",
-           children: [(0, hC.jsxs)("div", {
-             className: "ShaderPackSummaryHeader",
- ... (39 more removed lines; see GitHub link above)
+           results: zp,
+           loading: Kp,
+           failed: ii,
+           onRetry: () => {
+             oi((pp => pp + 1))
+           },
+           view: Fp,
+           previewView: Np
+         }), "listing" === (null === zp || void 0 === zp ? void 0 : zp.kind) && (0, Mp.jsx)(yp.d, {
+           className: "ShaderPackBrowsePagination",
+           page: zp.page.pageNumber,
+           totalPages: zp.page.totalPages,
+           onSetPage: pp => {
+             np((ip => {
+               (0, Ap.k)(ip, pp)
+             }))
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 136, 137];
+ export const ids = [130];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L4-L20` → after: `L4-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L4-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L4-L205) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L4-L20)

```diff
-   40318: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => WC,
-       installListedShaderPack: () => FC
-     });
-     var QC = ZC(6560),
-       wC = ZC(5002),
-       bC = ZC(1149),
-       nC = ZC(6609),
-       fC = ZC(4998),
-       oC = ZC(6658),
-       qC = ZC(6651);
-     async function FC(CC) {
-       const zC = await (0, nC.loadPageShaderPackCompiler)();
-       if (null === zC) return {
-         kind: "failed",
- ... (1 more removed lines; see GitHub link above)
+   6712: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => xp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(1201),
+       Sp = cp(1112);
+ 
+     function xp(pp) {
+       let {
+         item: ip,
+         className: cp
+       } = pp;
+       const {
+         t: Op
+ ... (186 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L22-L25` → after: `L207-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L207-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L207-L225) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L22-L25)

```diff
-       const ZC = await WC(CC, zC);
-       return "failed" === ZC.kind ? ZC : await (0, oC.saveShaderPack)(ZC.stored, zC) ? ((0, oC.markShaderPackChangePending)(), ZC) : {
-         kind: "failed",
-         reason: "save"
+ 
+     function wp(pp, ip) {
+       return pp.withFeatures.includes(ip) ? "with" : pp.withoutFeatures.includes(ip) ? "without" : null
+     }
+ 
+     function vp(pp) {
+       return null === pp ? "with" : "with" === pp ? "without" : null
+     }
+ 
+     function tp(pp) {
+       return "with" === pp ? "only" : null === pp ? "include" : void 0
+     }
+ 
+     function Hp(pp, ip) {
+       const cp = wp(pp, ip),
+         Op = pp => pp.filter((pp => pp !== ip));
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L28-L38` → after: `L228-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L228-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L228-L325) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L28-L38)

```diff
-     async function WC(CC, zC) {
-       const ZC = await async function(CC) {
-         let {
-           packId: zC,
-           sourceHash: ZC
-         } = CC;
-         try {
-           const CC = await fetch(`${bC.clientSideServerUrls.s3Url}/${(0,QC.J)(zC,ZC)}`, {
-             headers: {
-               Accept: "application/json"
-             }
+     const dp = "section",
+       ep = "sort",
+       jp = "filters",
+       kp = "q",
+       mp = "banned",
+       Rp = "popular",
+       qp = "strict";
+ 
+     function Mp(pp) {
+       var ip, cp, op;
+       const Sp = pp.get(dp),
+         xp = (null !== (ip = pp.get(jp)) && void 0 !== ip ? ip : qp).split(","),
+         Lp = pp.get(mp);
+       return {
+         section: "favourites" === Sp || "mine" === Sp ? Sp : "explore",
+         sort: null !== (cp = Op.A.find((ip => ip === pp.get(ep)))) && void 0 !== cp ? cp : Rp,
+ ... (82 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L40-L79` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L327-L330) · [Before (L40-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L40-L79)

```diff
-           if (!CC.ok) return console.error(`Failed to download shader pack ${zC} (${CC.status})`), null;
-           const wC = await CC.json();
-           return "object" !== typeof wC || null === wC ? (console.error(`Shader pack ${zC}'s source isn't an object`), null) : wC
-         } catch (wC) {
-           return console.error(`Failed to download shader pack ${zC}`, wC), null
-         }
-       }(CC);
-       if (null === ZC) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, fC.i)(ZC.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const nC = (0, wC.s)(ZC.files);
- ... (24 more removed lines; see GitHub link above)
+         Ip.push({
+           tone: "info",
+           text: xp,
+           detail: null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L84-L177` → after: `L348-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L348-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L348-L360) · [Before (L84-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L84-L177)

```diff
-   41111: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       followListingUpdates: () => NC
-     });
-     var QC = ZC(191),
-       wC = ZC(20),
-       bC = ZC(1439),
-       nC = ZC(1078),
-       fC = ZC(6609),
-       oC = ZC(4998),
-       qC = ZC(40318),
-       FC = ZC(6658);
-     const WC = ["apiVersion", "invalid", "errors"];
-     async function NC(CC, zC) {
-       const ZC = await nC.userContextManager.getCurrentUserContext(),
-         NC = await bC.d.getShaderPackVersions(ZC, [zC.packId]),
- ... (78 more removed lines; see GitHub link above)
+   6724: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
+     });
+     var Op = cp(62),
+       op = cp(44);
+ 
+     function Ip(pp, ip) {
+       var cp;
+       const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
+       return [Ip, ip => {
+         op.h.setItem(pp, ip), Sp(ip)
+       }]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L180-L421` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L363) · [Before (L180-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L180-L421)

```diff
-   6658: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       forgetShaderPackActiveHint: () => KC,
-       isOtherApiVersion: () => iC,
-       isShaderPackActive: () => AC,
-       isShaderPackChangePending: () => IC,
-       markShaderPackChangePending: () => JC,
-       pageShaderPackValidationVersion: () => vC,
-       reconcileStoredShaderPackHint: () => hC,
-       removeShaderPack: () => RC,
-       replaceShaderPack: () => pC,
-       saveShaderPack: () => SC,
-       shaderPackNeedsCheck: () => eC,
-       storedPackOutcome: () => xC,
-       storedShaderPackFiles: () => NC,
-       toStoredShaderPack: () => WC
- ... (226 more removed lines; see GitHub link above)
+   6704: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L424-L425` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L366) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L424-L425)

```diff
-       B: () => QC,
-       E: () => NC,
+       D: () => xp,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L428` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L369) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L428)

```diff
-       L: () => WC,
+       M: () => Pp,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L430-L432` → after: `L371-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L371-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L371-L374) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L430-L432)

```diff
-       b: () => gC,
-       e: () => pC,
-       f: () => SC,
+       S: () => dp,
+       V: () => Ap,
+       W: () => Yp,
+       d: () => yp,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L434-L440` → after: `L376-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L376-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L376-L382) · [Before (L434-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L434-L440)

```diff
-       i: () => RC,
-       m: () => JC,
-       o: () => oC,
-       s: () => wC,
-       w: () => xC,
-       x: () => bC,
-       y: () => fC
+       j: () => Up,
+       l: () => Wp,
+       n: () => Hp,
+       r: () => jp,
+       t: () => Lp,
+       u: () => op,
+       x: () => ep
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L478` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L420) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L478)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(CC)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L489` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L431) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L489)

```diff
-       return `shaderPacks/${CC}/${zC}.json`
+       return `shaderPacks/${pp}/${ip}.json`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L493` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L435) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L493)

```diff
-       return null === zC.renderId ? JC(CC, zC.baselineVersion, ZC, QC) : `${CC}/${function(CC,zC,ZC,QC){return`shaderPacks/${CC}/${zC}/${ZC}-${QC}.webp`}(zC.packId,zC.renderId,ZC,QC)}`
+       return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L497` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/130.js#L439) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/130.js#L497)

```diff
-       return `${CC}/${function(CC,zC,ZC){return`shaderPacks/baseline/${CC}/${zC}-${ZC}.webp`}(zC,ZC,QC)}`
+       return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/131.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/131.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L4` → after: `L4-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L4-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L4-L237) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L4)

```diff
-   41571: (CC, zC, ZC) => {
+   41287: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       ShaderPackCategory: () => lp
+     });
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(1480),
+       Sp = cp(1538),
+       xp = cp(1201),
+       Lp = cp(104),
+       Yp = cp(25),
+       Dp = cp(1650),
+       Ap = cp(6758),
+       Pp = cp(314),
+       Wp = cp(6798),
+       yp = cp(6792),
+ ... (218 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L6` → after: `L239-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L239-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L239-L263) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L6)

```diff
-       startHarnessShaderPack: () => WC
+       C: () => Mp,
+       E: () => Dp,
+       H: () => Ep,
+       L: () => Up,
+       O: () => fp,
+       P: () => Np,
+       R: () => Sp,
+       S: () => Tp,
+       V: () => Lp,
+       X: () => xp,
+       Z: () => Jp,
+       ab: () => Bp,
+       b: () => tp,
+       bb: () => Hp,
+       d: () => Rp,
+       e: () => wp,
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L8-L16` → after: `L265-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L265-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L265-L400) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L8-L16)

```diff
-     var QC = ZC(6560),
-       wC = ZC(5002),
-       bC = ZC(6646),
-       nC = ZC(6609),
-       fC = ZC(4998),
-       oC = ZC(39051),
-       qC = ZC(6630),
-       FC = ZC(6651);
-     async function WC(CC, zC) {
+     var Op = cp(6704),
+       op = cp(156),
+       Ip = cp(4653);
+     const Sp = "/shader-packs",
+       xp = `${Sp}/publish`;
+ 
+     function Lp(pp) {
+       return `${Sp}/${encodeURIComponent(pp)}`
+     }
+     let Yp = null;
+ 
+     function Dp(pp) {
+       Yp = pp
+     }
+ 
+     function Ap() {
+ ... (120 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L18-L78` → after: `L402-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L402-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L402-L423) · [Before (L18-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L18-L78)

```diff
-         stored: ZC,
-         info: WC
-       } = await async function(CC, zC) {
-         const ZC = await async function(CC) {
-           const zC = await fetch(CC);
-           if (!zC.ok) throw new Error(`Couldn't fetch the shader pack at ${CC}: HTTP ${zC.status}`);
-           const ZC = await zC.json();
-           if (!(0, QC.g)(ZC)) throw new Error(`The shader pack at ${CC} isn't a shader pack listing source`);
-           return ZC
-         }(CC);
-         if (!(0, fC.i)(ZC.apiVersion)) throw new Error(`The pack is for shader pack API version ${ZC.apiVersion}; this build runs version ${fC.b}`);
-         const oC = {
-             manifest: {
-               apiVersion: ZC.apiVersion,
-               name: ZC.name,
-               author: ZC.author,
- ... (45 more removed lines; see GitHub link above)
+         pending: Sp
+       } = pp;
+       if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
+           tone: "warning",
+           text: op("shaderPackListing:ownerBroken"),
+           detail: pp.brokenError
+         }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
+         tone: "warning",
+         text: op(ip ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, Op.n)(Sp.error) ? null : Sp.error
+       });
+       else if (Sp) {
+         const pp = null === Sp.renderNotBefore ? 0 : Sp.renderNotBefore - cp,
+           Op = String(Math.ceil(pp / 6e4)),
+           xp = op(ip ? pp > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : pp > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: Op
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L80-L86` → after: `L425-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L425-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L425-L437) · [Before (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L80-L86)

```diff
-       return WC.runsInMode ? ((0, oC.setHarnessUrlShaderPack)(ZC, zC), {
-         info: WC,
-         problem: null
-       }) : {
-         info: WC,
-         problem: `The shader pack runs nothing in ${zC} mode`
-       }
+       return pp.listed || Ip.push({
+         tone: "info",
+         text: op("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), Ip
+     }
+ 
+     function fp(pp) {
+       return Math.max(1, Math.round(pp / 1024))
+     }
+ 
+     function bp(pp, ip, cp) {
+       return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L89-L305` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L440) · [Before (L89-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L89-L305)

```diff
-   6658: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       forgetShaderPackActiveHint: () => KC,
-       isOtherApiVersion: () => iC,
-       isShaderPackActive: () => AC,
-       isShaderPackChangePending: () => IC,
-       markShaderPackChangePending: () => JC,
-       pageShaderPackValidationVersion: () => vC,
-       reconcileStoredShaderPackHint: () => hC,
-       removeShaderPack: () => RC,
-       replaceShaderPack: () => pC,
-       saveShaderPack: () => SC,
-       shaderPackNeedsCheck: () => eC,
-       storedPackOutcome: () => xC,
-       storedShaderPackFiles: () => NC,
-       toStoredShaderPack: () => WC
- ... (201 more removed lines; see GitHub link above)
+   6704: (pp, ip, cp) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L308-L309` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L443) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L308-L309)

```diff
-       B: () => QC,
-       E: () => NC,
+       D: () => xp,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L312` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L446) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L312)

```diff
-       L: () => WC,
+       M: () => Pp,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L314-L316` → after: `L448-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L448-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L448-L451) · [Before (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L314-L316)

```diff
-       b: () => gC,
-       e: () => pC,
-       f: () => SC,
+       S: () => dp,
+       V: () => Ap,
+       W: () => Yp,
+       d: () => yp,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L318-L324` → after: `L453-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L453-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L453-L459) · [Before (L318-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L318-L324)

```diff
-       i: () => RC,
-       m: () => JC,
-       o: () => oC,
-       s: () => wC,
-       w: () => xC,
-       x: () => bC,
-       y: () => fC
+       j: () => Up,
+       l: () => Wp,
+       n: () => Hp,
+       r: () => jp,
+       t: () => Lp,
+       u: () => op,
+       x: () => ep
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L362` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L497) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L362)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(CC)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L373` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L508) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L373)

```diff
-       return `shaderPacks/${CC}/${zC}.json`
+       return `shaderPacks/${pp}/${ip}.json`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L377` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L512) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L377)

```diff
-       return null === zC.renderId ? JC(CC, zC.baselineVersion, ZC, QC) : `${CC}/${function(CC,zC,ZC,QC){return`shaderPacks/${CC}/${zC}/${ZC}-${QC}.webp`}(zC.packId,zC.renderId,ZC,QC)}`
+       return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L381` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/131.js#L516) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/131.js#L381)

```diff
-       return `${CC}/${function(CC,zC,ZC){return`shaderPacks/baseline/${CC}/${zC}-${ZC}.webp`}(zC,ZC,QC)}`
+       return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/132.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/132.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L2)

```diff
- export const ids = [132, 136, 137];
+ export const ids = [132, 138, 139];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L4-L52` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L4) · [Before (L4-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L4-L52)

```diff
-   6596: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
-     });
-     var QC = ZC(4992),
-       wC = ZC(1056);
-     const bC = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
- 
-     function nC(CC) {
-       let {
- ... (33 more removed lines; see GitHub link above)
+   40674: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L55` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L7) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L55)

```diff
-       i: () => IC
+       installListedShaderPack: () => Dp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L57-L69` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L9-L15) · [Before (L57-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L57-L69)

```diff
-     var QC = ZC(48),
-       wC = ZC(1002),
-       bC = ZC.n(wC),
-       nC = ZC(4895),
-       fC = ZC(1295),
-       oC = ZC(1013),
-       qC = ZC(1143),
-       FC = ZC(5002),
-       WC = ZC(4998),
-       NC = ZC(3142);
-     const MC = 33554432,
-       gC = 1024,
-       SC = 65536;
+     var Op = cp(6704),
+       op = cp(5167),
+       Ip = cp(1211),
+       Sp = cp(6758),
+       xp = cp(5159),
+       Lp = cp(6798),
+       Yp = cp(6792);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L71-L81` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L17-L25) · [Before (L71-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L71-L81)

```diff
-       const zC = (0, NC.t)(CC);
-       if (zC) {
-         if (zC.size > MC) throw new NC.d("shaderPack:loadZipTooBig", {
-           megabytes: String(MC / 1048576)
-         });
-         return async function(CC) {
-           return PC((0, NC.k)(CC, gC).map((zC => ({
-             path: zC.path,
-             read: ZC => (0, NC.s)(CC, zC, ZC)
-           }))))
-         }(new Uint8Array(await zC.arrayBuffer()))
+       const ip = await (0, Sp.loadPageShaderPackCompiler)();
+       if (null === ip) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const cp = await Ap(pp, ip);
+       return "failed" === cp.kind ? cp : await (0, Lp.saveShaderPack)(cp.stored, ip) ? ((0, Lp.markShaderPackChangePending)(), cp) : {
+         kind: "failed",
+         reason: "save"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L83-L129` → after: `L27-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L27-L38) · [Before (L83-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L83-L129)

```diff
-       return PC(CC.map((CC => ({
-         path: (0, NC.o)(CC),
-         read: zC => async function(CC, zC) {
-           return CC.size > zC ? null : new Uint8Array(await CC.arrayBuffer())
-         }(CC, zC)
-       }))))
-     }
-     async function PC(CC) {
-       const zC = function(CC) {
-           const zC = CC.length > 0 ? CC[0].path.indexOf("/") : -1;
-           if (-1 === zC) return CC;
-           const ZC = CC[0].path.slice(0, zC + 1);
-           if (!CC.every((CC => CC.path.startsWith(ZC)))) return CC;
-           return CC.map((CC => ({
-             ...CC,
-             path: CC.path.slice(ZC.length)
- ... (31 more removed lines; see GitHub link above)
+     }
+     async function Ap(pp, ip) {
+       const cp = await async function(pp) {
+         let {
+           packId: ip,
+           sourceHash: cp
+         } = pp;
+         try {
+           const pp = await fetch(`${Ip.clientSideServerUrls.s3Url}/${(0,Op.S)(ip,cp)}`, {
+             headers: {
+               Accept: "application/json"
+             }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L131-L165` → after: `L40-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L40-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L40-L79) · [Before (L131-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L131-L165)

```diff
-           if (!(0, WC.i)(ZC)) throw new NC.d("shaderPack:loadWrongApiVersion", {
-             packVersion: JSON.stringify(ZC),
-             version: String(WC.b)
-           });
-           if ("string" !== typeof QC || "" === QC.trim()) throw new NC.d("shaderPack:loadNoName");
-           if (void 0 !== wC && null !== wC && "string" !== typeof wC) throw new NC.d("shaderPack:loadAuthorNotString");
-           if (void 0 !== bC && null !== bC && "string" !== typeof bC) throw new NC.d("shaderPack:loadDescriptionNotString");
-           if (void 0 !== nC && "boolean" !== typeof nC) throw new NC.d("shaderPack:loadKeepCircleShadowsNotBoolean");
-           return {
-             apiVersion: ZC,
-             name: QC,
-             author: "string" === typeof wC ? wC : null,
-             description: "string" === typeof bC && "" !== bC.trim() ? bC : null,
-             keepCircleShadows: !0 === nC
-           }
-         }(GC(wC, QC.path)),
- ... (19 more removed lines; see GitHub link above)
+           if (!pp.ok) return console.error(`Failed to download shader pack ${ip} (${pp.status})`), null;
+           const op = await pp.json();
+           return "object" !== typeof op || null === op ? (console.error(`Shader pack ${ip}'s source isn't an object`), null) : op
+         } catch (op) {
+           return console.error(`Failed to download shader pack ${ip}`, op), null
+         }
+       }(pp);
+       if (null === cp) return {
+         kind: "failed",
+         reason: "download"
+       };
+       if (!(0, xp.k)(cp.apiVersion)) return {
+         kind: "failed",
+         reason: "apiVersion"
+       };
+       const Sp = (0, op.s)(cp.files);
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L168-L257` → after: `L82-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L82-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L82-L173) · [Before (L168-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L168-L257)

```diff
-       return {
-         manifest: bC,
-         files: oC
-       }
-     }
- 
-     function GC(CC, zC) {
-       try {
-         return new TextDecoder("utf-8", {
-           fatal: !0
-         }).decode(CC)
-       } catch (ZC) {
-         throw new NC.d("shaderPack:loadNotUtf8", {
-           path: zC
-         }, {
-           cause: ZC
- ... (74 more removed lines; see GitHub link above)
+     }
+   },
+   41532: (pp, ip, cp) => {
+     cp.d(ip, {
+       followListingUpdates: () => Pp
+     });
+     var Op = cp(209),
+       op = cp(25),
+       Ip = cp(1520),
+       Sp = cp(1149),
+       xp = cp(6758),
+       Lp = cp(5159),
+       Yp = cp(40674),
+       Dp = cp(6798);
+     const Ap = ["apiVersion", "invalid", "errors"];
+     async function Pp(pp, ip) {
+ ... (76 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L260` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L176-L177) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L260)

```diff
-       }
+       }(pp, ip, Wp, Up);
+       return void 0 === wp || (await (0, Dp.replaceShaderPack)(pp, wp, Up) ? (null !== wp && wp.files === pp.files || (0, Dp.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L263` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L180) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L263)

```diff
-   6658: (CC, zC, ZC) => {
+   6798: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L280-L285` → after: `L197-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L197-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L197-L202) · [Before (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L280-L285)

```diff
-     var QC = ZC(5002),
-       wC = ZC(4998),
-       bC = ZC(38),
-       nC = ZC(3432),
-       fC = ZC(6660),
-       oC = ZC(6630);
+     var Op = cp(5167),
+       op = cp(5159),
+       Ip = cp(44),
+       Sp = cp(3564),
+       xp = cp(6804),
+       Lp = cp(6772);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L292` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L209) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L292)

```diff
-         files: (0, QC.w)(CC.files),
+         files: (0, Op.v)(pp.files),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L318` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L235) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L318)

```diff
-       return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
+       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L321` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L238) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L321)

```diff
-       const ZC = await bC.g.setItem(fC.c, CC);
+       const cp = await Ip.g.setItem(xp.e, pp);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L325` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L242) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L325)

```diff
-       await bC.g.removeItem(fC.c), bC.i.removeItem(nC.b)
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L362` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L279) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L362)

```diff
-       bC.k.setItem(qC, performance.timeOrigin)
+       Ip.l.setItem(Yp, performance.timeOrigin)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L366-L374` → after: `L283-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L283-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L283-L291) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L366-L374)

```diff
-       return bC.k.getItem(qC) === performance.timeOrigin
-     }
- 
-     function iC(CC) {
-       return !(0, wC.i)(CC.manifest.apiVersion)
-     }
- 
-     function vC(CC) {
-       return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
+       return Ip.l.getItem(Yp) === performance.timeOrigin
+     }
+ 
+     function mp(pp) {
+       return !(0, op.k)(pp.manifest.apiVersion)
+     }
+ 
+     function Rp(pp) {
+       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L384` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L301) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L384)

```diff
-         YC(await (0, fC.e)(!0), CC)
+         Ep(await (0, xp.f)(!0), pp)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L390` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L307) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L390)

```diff
-         bC.i.removeItem(nC.b)
+         Ip.h.removeItem(Sp.d)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L395` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/132.js#L312) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/132.js#L395)

```diff
-       AC(CC, zC) ? bC.i.setItem(nC.b, !0) : bC.i.removeItem(nC.b)
+       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
```
