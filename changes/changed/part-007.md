# Changed — Bundle Modifications Report (Part 007 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `7 / 65` (**306** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (834 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31630-L31633` → after: `L14394-L14480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14394-L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14394-L14480) · [Before (L31630-L31633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31630-L31633)

```diff
-     function AD(DD, zD, wD, pD) {
-       var sD, KD, rD;
-       const LD = RD[DD];
-       return null !== (sD = null === LD || void 0 === LD || null === (KD = LD.isDisabled) || void 0 === KD ? void 0 : KD.call(LD, zD)) && void 0 !== sD && sD || !wD || !pD && null !== (rD = null === LD || void 0 === LD ? void 0 : LD.devOnly) && void 0 !== rD && rD
+     function xp() {
+       return xp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, xp.apply(this, arguments)
+     }
+     var Lp = function(pp) {
+       var ip = pp.cx,
+         cp = pp.cy,
+         Lp = pp.r,
+         Yp = pp.className,
+         Dp = (0, op.d)("recharts-dot", Yp);
+       return ip === +ip && cp === +cp && Lp === +Lp ? Op.createElement("circle", xp({}, (0, Sp.d)(pp, !1), (0, Ip.h)(pp), {
+ ... (71 more added lines; see GitHub link above)
```

#### 550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31640-L31641` → after: `L14483-L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14483-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14483-L14486) · [Before (L31640-L31641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31640-L31641)

```diff
-     function UD() {
-       return Object.fromEntries(KD.v.map((DD => [(0, rD.Yb)(DD), ID(DD, [`Mob ${DD} Spawn Egg`])])))
+     function Dp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31644-L31645` → after: `L14489-L14497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14489-L14497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14489-L14497) · [Before (L31644-L31645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31644-L31645)

```diff
-     function fD() {
-       return Object.fromEntries(KD.v.map((DD => [(0, rD.ac)(DD), ID(DD, [`${DD} Mob Spawner Block`])])))
+     function Ap(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31648-L31653` → after: `L14500-L14507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14500-L14507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14500-L14507) · [Before (L31648-L31653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31648-L31653)

```diff
-     function ID(DD, zD) {
-       const wD = KD.j.includes(DD);
-       return {
-         altNames: zD,
-         showOnlyInSearch: wD,
-         isDisabled: wD ? gD : void 0
+     function Pp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ap(Object(cp), !0).forEach((function(ip) {
+           Wp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ap(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31657` → after: `L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14642) · [Before (L31657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31657)

```diff
-   37976: (DD, zD, wD) => {
+   6448: (pp, ip, cp) => {
```

#### 554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31659-L31662` → after: `L14644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14644) · [Before (L31659-L31662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31659-L31662)

```diff
-       d: () => nD,
-       e: () => GD,
-       i: () => hD,
-       k: () => MD
+       c: () => wp
```

#### 555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31664-L31740` → after: `L14646-L14650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14646-L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14646-L14650) · [Before (L31664-L31740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31664-L31740)

```diff
-     var pD = wD(608),
-       sD = wD(619);
-     const KD = {
-       "Sun Panel": "Solar Panel",
-       "Shaft Hopper": "Forge Hopper"
-     };
-     const rD = {
-         ...KD,
-         Cobblestone: "Messy Stone",
-         "Oak Log": "Maple Log",
-         "Oak Wood Planks": "Maple Wood Planks",
-         "Barkless Oak Log": "Barkless Maple Log",
-         "Oak Leaves": "Maple Leaves",
-         "Oak Sapling": "Maple Sapling",
-         "Oak Door": "Maple Door",
-         "Oak Trapdoor": "Maple Trapdoor",
- ... (61 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(5203),
+       Ip = cp(5588),
+       Sp = cp(6357),
+       xp = cp(5299);
```

#### 556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31742-L31743` → after: `L14652-L14657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14652-L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14652-L14657) · [Before (L31742-L31743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31742-L31743)

```diff
-     function cD(DD, zD) {
-       return DD in LD ? LD[DD] : gD(DD, zD)
+     function Lp(pp) {
+       return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Lp(pp)
```

#### 557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31746-L31754` → after: `L14660-L14664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14660-L14664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14660-L14664) · [Before (L31746-L31754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31746-L31754)

```diff
-     function gD(DD, zD) {
-       if (DD in rD) return rD[DD];
-       const wD = DD.indexOf("|");
-       if (-1 !== wD) {
-         var pD;
-         const sD = null !== (pD = null === zD || void 0 === zD ? void 0 : zD.rootName) && void 0 !== pD ? pD : DD.substring(0, wD);
-         if (sD in rD) {
-           const pD = zD ? zD.metaStr ? `|${zD.metaStr}` : "" : DD.substring(wD);
-           return `${rD[sD]}${pD}`
+     function Yp() {
+       return Yp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31756-L31757` → after: `L14666-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14666-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14666-L14667) · [Before (L31756-L31757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31756-L31757)

```diff
-       }
-       return DD
+         return pp
+       }, Yp.apply(this, arguments)
```

#### 559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31761-L31772` → after: `L14671-L14679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14671-L14679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14671-L14679) · [Before (L31761-L31772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31761-L31772)

```diff
-       if (!zD) return void(DD.amount = null);
-       const wD = DD.amount;
-       null === wD || void 0 === wD ? DD.amount = 1 : Number.isInteger(wD) || (DD.amount = function(DD) {
-         const zD = "number" === typeof DD || "string" === typeof DD || "boolean" === typeof DD ? Number(DD) : NaN;
-         return zD > 0 && zD !== 1 / 0 ? Math.max(1, Math.floor(zD)) : 0
-       }(wD))
-     }
-     var AD = wD(37015),
-       UD = wD(37978),
-       fD = wD(36804),
-       ID = wD(197),
-       BD = wD(37791);
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

#### 560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31775` → after: `L14682-L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14682-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14682-L14690) · [Before (L31775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31775)

```diff
-       return DD && JSON.parse(JSON.stringify(DD))
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Dp(Object(cp), !0).forEach((function(ip) {
+           Pp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Dp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31778-L31779` → after: `L14693-L14711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14693-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14693-L14711) · [Before (L31778-L31779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31778-L31779)

```diff
-     function hD(DD, zD) {
-       return (0, UD.b)(AD.m[DD], zD)
+     function Pp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Lp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Lp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Lp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31781-L31832` → after: `L14713-L14730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14713-L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14713-L14730) · [Before (L31781-L31832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31781-L31832)

```diff
-     class nD {
-       constructor(DD, zD, wD) {
-         this.AU = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.AU = DD, this.state = zD, this.numSlots = wD, this.items = new Array(this.numSlots) … [truncated]
-       }
-       stringify() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length;
-         const wD = [];
-         for (let sD = DD; sD < zD; sD++)
-           if (this.items[sD]) {
-             var pD;
-             const {
-               name: DD,
-               amount: zD,
-               attributes: KD
-             } = this.items[sD];
- ... (36 more removed lines; see GitHub link above)
+     var Wp = function(pp) {
+         var ip = pp.cx,
+           cp = pp.cy,
+           Op = pp.radius,
+           op = pp.angle,
+           Ip = pp.sign,
+           xp = pp.isExternal,
+           Lp = pp.cornerRadius,
+           Yp = pp.cornerIsExternal,
+           Dp = Lp * (xp ? 1 : -1) + Op,
+           Ap = Math.asin(Lp / Dp) / Sp.c,
+           Pp = Yp ? op : op + Ip * Ap,
+           Wp = Yp ? op - Ip * Ap : op;
+         return {
+           center: (0, Sp.i)(ip, cp, Dp, Pp),
+           circleTangency: (0, Sp.i)(ip, cp, Op, Pp),
+ ... (2 more added lines; see GitHub link above)
```

#### 563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31834-L31912` → after: `L14732-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14732-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14732-L14878) · [Before (L31834-L31912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31834-L31912)

```diff
-         this.update(!0, zD)
-       }
-       cloneZeroAlloc() {
-         const {
-           inventory: DD,
-           items: zD
-         } = this.temporaryClone ??= {
-           inventory: new nD(this.AU, OD(this.state.cW, null), 0),
-           items: []
-         };
-         DD.AU = this.AU, DD.state.cW = this.state.cW, DD.numSlots = this.numSlots, DD._selectedSlotI = this._selectedSlotI, DD.items.length = this.items.length, zD.length > this.items.length && (zD.length = this.items.length);
-         for (let wD = 0; wD < this.items.length; wD++)
-           if (zD.length <= wD && zD.push({
-               name: void 0,
-               amount: void 0,
-               attributes: void 0,
- ... (63 more removed lines; see GitHub link above)
+       },
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
+ ... (131 more added lines; see GitHub link above)
```

#### 564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31914-L31931` → after: `L14880-L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14880-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14880-L14897) · [Before (L31914-L31931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31914-L31931)

```diff
-       removeItem(DD, zD) {
-         return null !== this.items[DD] && (null === this.items[DD].amount ? this.items[DD] = null : (this.items[DD].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[DD].name} ${this.items[DD].amount}`)), this.items[DD].amount  … [truncated]
-       }
-       removeItemName(DD, zD) {
-         const wD = zD;
-         for (let pD = 0; pD < this.items.length; pD++) {
-           const sD = this.items[pD];
-           if ((null === sD || void 0 === sD ? void 0 : sD.name) === DD) {
-             if (null === sD.amount) {
-               if (this.items[pD] = null, --zD > 0) continue;
-               return this.update(!0), wD
-             }
-             if (sD.amount <= 0) this.items[pD] = null;
-             else {
-               if (sD.amount >= zD) return sD.amount -= zD, 0 === sD.amount && (this.items[pD] = null), this.update(!0), wD;
-               zD -= sD.amount, this.items[pD] = null
- ... (2 more removed lines; see GitHub link above)
+   },
+   6190: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => np
+     });
+     var Op = cp(62),
+       op = cp(6192),
+       Ip = cp.n(op);
+     Math.abs, Math.atan2;
+     const Sp = Math.cos,
+       xp = (Math.max, Math.min, Math.sin),
+       Lp = Math.sqrt,
+       Yp = Math.PI,
+       Dp = 2 * Yp;
+     const Ap = {
+         draw(pp, ip) {
+ ... (2 more added lines; see GitHub link above)
```

#### 565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31933-L31938` → after: `L14899-L14903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14899-L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14899-L14903) · [Before (L31933-L31938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31933-L31938)

```diff
-         return this.update(!0), wD - zD
-       }
-       findItem(DD) {
-         for (let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; zD < this.items.length; zD++) {
-           const wD = this.items[zD];
-           if ((null === wD || void 0 === wD ? void 0 : wD.name) === DD) return zD
+       },
+       Pp = {
+         draw(pp, ip) {
+           const cp = Lp(ip / 5) / 2;
+           pp.moveTo(-3 * cp, -cp), pp.lineTo(-cp, -cp), pp.lineTo(-cp, -3 * cp), pp.lineTo(cp, -3 * cp), pp.lineTo(cp, -cp), pp.lineTo(3 * cp, -cp), pp.lineTo(3 * cp, cp), pp.lineTo(cp, cp), pp.lineTo(cp, 3 * cp), pp.lineTo(-cp, 3 * cp), pp.lineTo(-cp, cp), pp.lineTo(-3 * cp, cp) … [truncated]
```

#### 566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31940-L31950` → after: `L14905-L14935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14905-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14905-L14935) · [Before (L31940-L31950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31940-L31950)

```diff
-         return null
-       }
-       setItemSlot(DD, zD, wD, pD) {
-         if (this.items[DD] = null, "Air" !== zD) {
-           const sD = this.AU.bloxd.getItemTypeObj(zD);
-           if (sD.stackable || null === wD || (wD = null), sD.stackable && (wD <= 0 || null === wD)) return void this.update(!0);
-           pD = hD(zD, pD), this.items[DD] = {
-             name: zD,
-             amount: wD,
-             typeObj: sD,
-             attributes: pD
+       },
+       Wp = Lp(1 / 3),
+       yp = 2 * Wp,
+       Up = {
+         draw(pp, ip) {
+           const cp = Lp(ip / yp),
+             Op = cp * Wp;
+           pp.moveTo(0, -cp), pp.lineTo(Op, 0), pp.lineTo(0, cp), pp.lineTo(-Op, 0), pp.closePath()
+         }
+       },
+       wp = {
+         draw(pp, ip) {
+           const cp = Lp(ip),
+             Op = -cp / 2;
+           pp.rect(Op, Op, cp, cp)
+         }
+ ... (15 more added lines; see GitHub link above)
```

#### 567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31953-L32025` → after: `L14939-L14982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14939-L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14939-L14982) · [Before (L31953-L32025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L31953-L32025)

```diff
-         this.update(!0)
-       }
-       getFreeInventoryPosition() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pD.e.length;
-         return this.getFreeSlotBoundIdxs(0, this.items.length - DD)
-       }
-       getNumFreeSlots() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pD.e.length,
-           zD = 0;
-         for (let wD = 0; wD < this.items.length - DD; wD++) null === this.items[wD] && zD++;
-         return zD
-       }
-       getFreeSlotBoundIdxs(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length - pD.e.length;
-         for (let wD = DD; wD < Math.min(zD, this.items.length); wD++)
-           if (null === this.items[wD]) return wD;
- ... (57 more removed lines; see GitHub link above)
+       },
+       ep = Lp(3),
+       jp = {
+         draw(pp, ip) {
+           const cp = -Lp(ip / (3 * ep));
+           pp.moveTo(0, 2 * cp), pp.lineTo(-ep * cp, -cp), pp.lineTo(ep * cp, -cp), pp.closePath()
+         }
+       },
+       kp = -.5,
+       mp = Lp(3) / 2,
+       Rp = 1 / Lp(12),
+       qp = 3 * (Rp / 2 + 1),
+       Mp = {
+         draw(pp, ip) {
+           const cp = Lp(ip / qp),
+             Op = cp / 2,
+ ... (28 more added lines; see GitHub link above)
```

#### 568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32029-L32033` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L14996) · [Before (L32029-L32033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32029-L32033)

```diff
-       checkItem(DD) {
-         if (!this.AU.bloxd.Lf.metadatas[DD.name]) return console.warn(new Error(`Checked item with unknown/outdated name ${DD.name}`).stack), !1;
-         const zD = this.AU.bloxd.getItemTypeObj(DD.name);
-         return zD.stackable && null === DD.amount ? (console.error(new Error(`Checked stackable item ${DD.name} with null amount`).stack), !1) : zD.stackable || null === DD.amount ? zD.stackable && DD.amount <= 0 ? (console.error(new Error(`Checked stackable item ${DD.name} with  … [truncated]
-       }
+       return cp
```

#### 569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32037-L32042` → after: `L15000-L15008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15000-L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15000-L15008) · [Before (L32037-L32042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32037-L32042)

```diff
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sD.g;
-       return new nD(DD, OD(zD, (DD => {
-         null === wD || void 0 === wD || wD(DD)
-       })), pD)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Np(Object(cp), !0).forEach((function(ip) {
+           fp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Np(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32045-L32051` → after: `L15011-L15045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15011-L15045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15011-L15045) · [Before (L32045-L32051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32045-L32051)

```diff
-     function OD(DD, zD) {
-       return {
-         cW: DD,
-         selectedItem: null,
-         inventory: null,
-         opWrapper: null,
-         onInventoryUpdate: zD
+     function fp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Qp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Qp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Qp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (19 more added lines; see GitHub link above)
```

#### 571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32055` → after: `L15126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15126) · [Before (L32055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32055)

```diff
-   38172: (DD, zD, wD) => {
+   6425: (pp, ip, cp) => {
```

#### 572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32057` → after: `L15128-L15132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15128-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15128-L15132) · [Before (L32057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32057)

```diff
-       e: () => RD
+       d: () => fp,
+       f: () => Gp,
+       h: () => bp,
+       i: () => hp,
+       l: () => ap
```

#### 573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32059-L32165` → after: `L15134-L15160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15134-L15160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15134-L15160) · [Before (L32059-L32165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32059-L32165)

```diff
-     var pD = wD(608),
-       sD = wD(197),
-       KD = wD(38176),
-       rD = wD(619),
-       LD = wD(37976),
-       cD = wD(36804),
-       gD = wD(351);
-     class RD {
-       constructor(DD, zD, wD) {
-         this.callbacks = wD, this.AU = void 0, this.playerInventory = void 0, this.Lp = null, this.cp = null, this.Rp = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.AU = DD, this.playerInventory = zD
-       }
-       chestOpened(DD, zD, wD, pD) {
-         let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rD.g;
-         this.loadOpenChestFromStr(DD, sD), this.chestOpenedWithExistingInventory(this.Lp, zD, wD, pD)
-       }
-       chestOpenedWithExistingInventory(DD, zD, wD, pD) {
- ... (91 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(5405),
+       Ip = cp.n(op),
+       Sp = cp(6434),
+       xp = cp.n(Sp),
+       Lp = cp(6443),
+       Yp = cp.n(Lp),
+       Dp = cp(6322),
+       Ap = cp.n(Dp),
+       Pp = cp(6247),
+       Wp = cp(5203),
+       yp = cp(6256),
+       Up = cp(5588);
+ 
+     function wp(pp) {
+       return wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+ ... (11 more added lines; see GitHub link above)
```

#### 574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32167-L32207` → after: `L15162-L15187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15162-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15162-L15187) · [Before (L32167-L32207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32167-L32207)

```diff
-       }
-       getFreeSlotBoundIdxs(DD, zD) {
-         const wD = this.playerInventory.numSlots + (this.Lp ? this.Lp.numSlots : 0);
-         for (let pD = DD; pD < Math.min(zD, wD); pD++)
-           if (null === this.getItemAtIdx(pD)) return pD;
-         return null
-       }
-       setItemSlot(DD, zD, wD, sD) {
-         if (DD >= this.playerInventory.numSlots) {
-           if (this.Lp) this.Lp.setItemSlot(DD - this.playerInventory.numSlots, zD, wD, sD);
-           else if (!this.inCreative) throw new Error("Attempting to setItemSlot in high idx when not in chest or creative")
-         } else if (DD >= this.playerInventory.numSlots - pD.e.length) {
-           const KD = DD - this.playerInventory.numSlots + pD.e.length;
-           if ("Air" !== zD && (0, gD.Db)(zD) !== pD.e[KD]) throw new Error(`Attempting to put invalid item ${zD} ${wD} ${sD} \t\t\t\t\tinto armour inven slot idx ${DD}`);
-           this.playerInventory.setItemSlot(DD, zD, wD, sD)
-         } else this.playerInventory.setItemSlot(DD, zD, wD, sD);
- ... (25 more removed lines; see GitHub link above)
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
+             Lp = !0,
+             Yp = !1;
+           try {
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+ ... (10 more added lines; see GitHub link above)
```

#### 575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32210-L32241` → after: `L15190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15190) · [Before (L32210-L32241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32210-L32241)

```diff
-           return this.AU.PB(`Attempting to get item in high idx ${DD} when not in chest or creative`, new Error(`Attempting to get item in high idx ${DD} when not in chest or creative`)), null
-         }
-         return this.playerInventory.items[DD]
-       }
-       static getSlotArmourType(DD) {
-         const zD = DD - rD.m + pD.e.length;
-         return zD < 0 || zD >= pD.e.length ? null : pD.e[zD]
-       }
-       update() {
-         var DD;
-         this.playerInventory.update(!0), null === (DD = this.Lp) || void 0 === DD || DD.update(!0)
-       }
-       withUpdatesHeld(DD) {
-         const zD = new Set;
-         this.chestsWithUpdatesHeld = zD, this.playerInventory.holdUpdates(), this.holdChestUpdates();
-         try {
- ... (16 more removed lines; see GitHub link above)
+           return xp
```

#### 576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32244-L32259` → after: `L15218-L15228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15218-L15228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15218-L15228) · [Before (L32244-L32259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32244-L32259)

```diff
-       loadFromString(DD) {
-         const {
-           rp: zD,
-           Lp: wD,
-           cp: pD,
-           Rp: sD,
-           Ap: KD
-         } = DD;
-         this.playerInventory.loadFromString(zD), wD ? (this.loadOpenChestFromStr(wD, null !== KD && void 0 !== KD ? KD : rD.g), this.cp = pD || null, this.Rp = JSON.parse(sD) || null) : (this.Lp = null, this.cp = null, this.Rp = null)
-       }
-       loadOpenChestFromStr(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD.g;
-         return this.Lp = (0, LD.k)(this.AU, this.playerInventory.state.cW, (DD => {
-           var zD, wD;
-           null === (zD = (wD = this.callbacks).onChestUpdate) || void 0 === zD || zD.call(wD, DD)
-         }), zD), this.holdChestUpdates(), this.Lp.loadFromString(DD), this.Lp
+       return cp
+     }
+ 
+     function ep(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? dp(Object(cp), !0).forEach((function(ip) {
+           jp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : dp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32262-L32293` → after: `L15232-L15255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15232-L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15232-L15255) · [Before (L32262-L32293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32262-L32293)

```diff
-   },
-   38445: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => GD,
-       g: () => ID,
-       i: () => fD,
-       j: () => RD,
-       n: () => UD,
-       r: () => AD,
-       t: () => rD
-     });
-     var pD = wD(1886),
-       sD = wD(3175),
-       KD = wD(2197);
-     const rD = 430,
-       LD = .5,
- ... (16 more removed lines; see GitHub link above)
+ 
+     function jp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != wp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != wp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == wp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+ ... (8 more added lines; see GitHub link above)
```

#### 578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32296-L32438` → after: `L15258-L15299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15258-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15258-L15299) · [Before (L32296-L32438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32296-L32438)

```diff
-         Player: {
-           handler: "Lifeform",
-           meshMetadata: {
-             type: "humanoidMesh",
-             isClientAuth: !0,
-             walkingLegSwingDuration: rD,
-             defaultRotationsPerSecond: .5,
-             childrenNodeParams: [{
-               nodeName: "HeadMesh",
-               softTolerance: RD,
-               hardTolerance: RD,
-               rotationsPerSecond: 1e3
-             }],
-             meshNamesWithVisibleBackFaces: ["HairMesh"],
-             meshNamesWithHairLayer: ["HeadMesh"]
-           },
- ... (127 more removed lines; see GitHub link above)
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
+ ... (26 more added lines; see GitHub link above)
```

#### 579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32440-L32542` → after: `L15301-L15306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15301-L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15301-L15306) · [Before (L32440-L32542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32440-L32542)

```diff
-           armour: {
-             atlasTexture: "Gold Watermelon Stag_Armour",
-             numTexturesInAtlas: 1,
-             textureOffsets: {
-               "BackLeftLeg|Armour": 1,
-               "BackRightLeg|Armour": 1,
-               "FrontLeftLeg|Armour": 1,
-               "FrontRightLeg|Armour": 1,
-               "Body|Armour": 0,
-               "Helmet|Armour": 0
-             },
-             isArmourVisibleByDefault: !0
-           }
-         },
-         Gorilla: XD(),
-         Wildcat: {
- ... (87 more removed lines; see GitHub link above)
+           to: {
+             upperWidth: Yp,
+             lowerWidth: Dp,
+             height: Ap,
+             x: xp,
+             y: Lp
```

#### 580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32544-L32796` → after: `L15308-L15338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15308-L15338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15308-L15338) · [Before (L32544-L32796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32544-L32796)

```diff
-           armour: BD
-         },
-         67: {
-           handler: "Mob",
-           meshMetadata: {
-             type: "humanoidMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 400,
-             defaultRotationsPerSecond: LD,
-             childrenNodeParams: [{
-               nodeName: "HeadMesh",
-               softTolerance: cD,
-               hardTolerance: cD
-             }]
-           }
-         },
- ... (237 more removed lines; see GitHub link above)
+           duration: Hp,
+           animationEasing: wp,
+           isActive: jp
+         }, (function(pp) {
+           var op = pp.upperWidth,
+             Sp = pp.lowerWidth,
+             xp = pp.height,
+             Lp = pp.x,
+             Yp = pp.y;
+           return Op.createElement(yp.c, {
+             canBegin: Ip > 0,
+             from: "0px ".concat(-1 === Ip ? 1 : Ip, "px"),
+             to: "".concat(Ip, "px 0px"),
+             attributeName: "strokeDasharray",
+             mW: dp,
+             duration: Hp,
+ ... (15 more added lines; see GitHub link above)
```

#### 581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32799-L32813` → after: `L15341-L15372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15341-L15372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15341-L15372) · [Before (L32799-L32813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32799-L32813)

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
-             softTolerance: RD,
-             hardTolerance: null,
-             rotationsPerSecond: LD
-           }],
-           lifeformTypeForModelOverride: DD
-         }
+       return Xp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Xp(pp)
+     }
+ 
+     function lp(pp, ip) {
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+ ... (16 more added lines; see GitHub link above)
```

#### 582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32818-L32837` → after: `L15378-L15384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15378-L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15378-L15384) · [Before (L32818-L32837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32818-L32837)

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
-             softTolerance: (0, pD.l)(60),
-             hardTolerance: null,
-             rotationsPerSecond: LD
-           }, {
-             nodeName: "LowerBody",
-             softTolerance: (0, pD.l)(60),
-             hardTolerance: null,
- ... (4 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Qp(Object(cp), !0).forEach((function(ip) {
+           Bp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Qp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32842-L32856` → after: `L15415-L15430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15415-L15430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15415-L15430) · [Before (L32842-L32856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32842-L32856)

```diff
-       return {
-         handler: "Mob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 490,
-           defaultRotationsPerSecond: LD,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: RD,
-             hardTolerance: null
-           }],
-           meshNamesWithVisibleBackFaces: ["BodyMesh"],
-           lifeformTypeForModelOverride: DD
-         }
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
+         default:
+           return null
```

#### 584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32861-L32875` → after: `L15435-L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15435-L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15435-L15458) · [Before (L32861-L32875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32861-L32875)

```diff
-       return {
-         handler: "Mob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 490,
-           defaultRotationsPerSecond: LD,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: RD,
-             hardTolerance: null
-           }],
-           meshNamesWithVisibleBackFaces: ["BodyMesh"],
-           lifeformTypeForModelOverride: DD
-         }
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
+ ... (8 more added lines; see GitHub link above)
```

#### 585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32880-L32897` → after: `L15497-L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15497-L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15497-L15551) · [Before (L32880-L32897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32880-L32897)

```diff
-       return {
-         handler: "CollaredMob",
-         meshMetadata: {
-           type: "fourLeggedMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 350,
-           defaultRotationsPerSecond: LD,
-           childrenNodeParams: gD,
-           meshGroupsWithDifferentAtlases: {
-             Collar: {
-               numTexturesInAtlas: "default"
-             }
-           },
-           lifeformTypeForModelOverride: DD,
-           heldItemPositionParams: {
-             itemOffset: [0, -.1, 0]
- ... (2 more removed lines; see GitHub link above)
+       var ip = pp.activeTooltipItem,
+         cp = pp.graphicalItem,
+         Op = pp.itemData,
+         op = function(pp, ip) {
+           var cp;
+           return bp(pp, ip) ? cp = "trapezoids" : hp(pp, ip) ? cp = "sectors" : ap(pp, ip) && (cp = "points"), cp
+         }(cp, ip),
+         Ip = function(pp, ip) {
+           var cp, Op;
+           return bp(pp, ip) ? null === (cp = ip.tooltipPayload) || void 0 === cp || null === (cp = cp[0]) || void 0 === cp || null === (cp = cp.payload) || void 0 === cp ? void 0 : cp.payload : hp(pp, ip) ? null === (Op = ip.tooltipPayload) || void 0 === Op || null === (Op = Op[0 … [truncated]
+         }(cp, ip),
+         Sp = Op.filter((function(pp, Op) {
+           var Sp = Ap()(Ip, pp),
+             xp = cp.props[op].filter((function(pp) {
+               var Op = function(pp, ip) {
+                 var cp;
+ ... (39 more added lines; see GitHub link above)
```

#### 586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32902-L32919` → after: `L15567-L15573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15567-L15573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15567-L15573) · [Before (L32902-L32919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32902-L32919)

```diff
-       return {
-         handler: "SaddledMob",
-         meshMetadata: {
-           type: "fourLeggedMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 350,
-           defaultRotationsPerSecond: LD,
-           childrenNodeParams: gD,
-           lifeformTypeForModelOverride: DD,
-           meshGroupsWithDifferentAtlases: {
-             Saddle: {
-               numTexturesInAtlas: 1
-             }
-           },
-           heldItemPositionParams: {
-             rotation: [0, Math.PI, 0]
- ... (2 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Wp(Object(cp), !0).forEach((function(ip) {
+           Up(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Wp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32924-L32935` → after: `L15588-L15639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15588-L15639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15588-L15639) · [Before (L32924-L32935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32924-L32935)

```diff
-       return {
-         handler: "SaddledMob",
-         meshMetadata: {
-           type: "fourLeggedMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 350,
-           defaultRotationsPerSecond: LD,
-           childrenNodeParams: gD,
-           lifeformTypeForModelOverride: DD,
-           meshGroupsWithDifferentAtlases: {
-             Saddle: {
-               numTexturesInAtlas: 1
+       var ip = function(pp, ip) {
+         if ("object" != Ap(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Ap(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Ap(ip) ? ip : ip + ""
+     }
+     var vp = function(pp, ip, cp, Op, op) {
+         var Ip = pp.width,
+           Sp = pp.height,
+           Ap = pp.layout,
+ ... (36 more added lines; see GitHub link above)
```

#### 588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32939-L32961` → after: `L15673-L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15673-L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15673-L15740) · [Before (L32939-L32961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32939-L32961)

```diff
-       }
-     }
- 
-     function XD(DD) {
-       return {
-         handler: "SaddledMob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 390,
-           defaultRotationsPerSecond: LD,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: RD,
-             hardTolerance: null
-           }],
- ... (7 more removed lines; see GitHub link above)
+       },
+       Hp = function(pp) {
+         var ip = pp.x1,
+           cp = pp.y1,
+           Op = pp.x2,
+           op = pp.y2;
+         return tp({
+           x: ip,
+           y: cp
+         }, {
+           x: Op,
+           y: op
+         })
+       },
+       dp = function() {
+         function pp(ip) {
+ ... (52 more added lines; see GitHub link above)
```

#### 589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32965` → after: `L15783-L15794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15783-L15794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15783-L15794) · [Before (L32965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32965)

```diff
-       }
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
```

#### 590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32968` → after: `L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15797) · [Before (L32968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32968)

```diff
-   37169: (DD, zD, wD) => {
+   6266: (pp, ip, cp) => {
```

#### 591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32970` → after: `L15799-L15826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15799-L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15799-L15826) · [Before (L32970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32970)

```diff
-       b: () => sD
+       d: () => NS,
+       g: () => lS,
+       k: () => ZS,
+       l: () => gS,
+       p: () => zS,
+       r: () => Dx,
+       t: () => BS,
+       x: () => JS,
+       A: () => ox,
+       E: () => Ox,
+       F: () => cx,
+       J: () => aS,
+       M: () => XS,
+       Q: () => bS,
+       R: () => Sx,
+       T: () => QS,
+ ... (12 more added lines; see GitHub link above)
```

#### 592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32972-L32990` → after: `L15828-L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15828-L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15828-L15862) · [Before (L32972-L32990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32972-L32990)

```diff
-     const pD = [{
-       nodeName: "TorsoNode",
-       children: ["BodyMesh", {
-         nodeName: "Head",
-         collapsesTo: "HeadMesh"
-       }, {
-         nodeName: "LeftArm",
-         collapsesTo: "ArmLeftMesh"
-       }, {
-         nodeName: "RightArm",
-         collapsesTo: "ArmRightMesh"
-       }]
-     }, {
-       nodeName: "LeftLeg",
-       collapsesTo: "LegLeftMesh"
-     }, {
- ... (3 more removed lines; see GitHub link above)
+     var Op = {};
+     cp.r(Op), cp.d(Op, {
+       scaleBand: () => op.b,
+       scaleDiverging: () => WI,
+       scaleDivergingLog: () => yI,
+       scaleDivergingPow: () => wI,
+       scaleDivergingSqrt: () => vI,
+       scaleDivergingSymlog: () => UI,
+       scaleIdentity: () => Ki,
+       scaleImplicit: () => Pc.f,
+       scaleLinear: () => si,
+       scaleLog: () => xc,
+       scaleOrdinal: () => Pc.b,
+       scalePoint: () => op.d,
+       scalePow: () => vc,
+       scaleQuantile: () => Cc,
+ ... (19 more added lines; see GitHub link above)
```

#### 593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L32992-L32994` → after: `L15864-L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15864-L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15864-L15870) · [Before (L32992-L32994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L32992-L32994)

```diff
-     function sD(DD) {
-       var zD;
-       return null !== (zD = rD[DD]) && void 0 !== zD ? zD : null
+     function Lp(pp, ip, cp) {
+       const Op = (ip - pp) / Math.max(0, cp),
+         op = Math.floor(Math.log10(Op)),
+         Yp = Op / Math.pow(10, op),
+         Dp = Yp >= Ip ? 10 : Yp >= Sp ? 5 : Yp >= xp ? 2 : 1;
+       let Ap, Pp, Wp;
+       return op < 0 ? (Wp = Math.pow(10, -op) / Dp, Ap = Math.round(pp * Wp), Pp = Math.round(ip * Wp), Ap / Wp < pp && ++Ap, Pp / Wp > ip && --Pp, Wp = -Wp) : (Wp = Math.pow(10, op) * Dp, Ap = Math.round(pp / Wp), Pp = Math.round(ip / Wp), Ap * Wp < pp && ++Ap, Pp * Wp > ip && - … [truncated]
```

#### 594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33048-L33050` → after: `L15873-L15889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15873-L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15873-L15889) · [Before (L33048-L33050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33048-L33050)

```diff
-     function LD(DD) {
-       const zD = {};
-       for (const wD of DD) cD(wD, zD);
+     function Yp(pp, ip, cp) {
+       if (!((cp = +cp) > 0)) return [];
+       if ((pp = +pp) === (ip = +ip)) return [pp];
+       const Op = ip < pp,
+         [op, Ip, Sp] = Op ? Lp(ip, pp, cp) : Lp(pp, ip, cp);
+       if (!(Ip >= op)) return [];
+       const xp = Ip - op + 1,
+         Yp = new Array(xp);
+       if (Op)
+         if (Sp < 0)
+           for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (Ip - Lp) / -Sp;
+         else
+           for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (Ip - Lp) * Sp;
+       else if (Sp < 0)
+         for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (op + Lp) / -Sp;
+       else
+ ... (1 more added lines; see GitHub link above)
```

#### 595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33054-L33063` → after: `L15893-L15894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15893-L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15893-L15894) · [Before (L33054-L33063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33054-L33063)

```diff
-     function cD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       if ("string" === typeof DD) return;
-       const {
-         nodeName: wD,
-         collapsesTo: pD,
-         children: sD
-       } = DD;
-       if (pD && (zD[wD] = pD), sD)
-         for (const KD of sD) cD(KD, zD)
+     function Dp(pp, ip, cp) {
+       return Lp(pp = +pp, ip = +ip, cp = +cp)[2]
```

#### 596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33065-L33646` → after: `L15896-L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15896-L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15896-L15923) · [Before (L33065-L33646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33065-L33646)

```diff
-   },
-   38436: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sD
-     });
-     const pD = {
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
- ... (566 more removed lines; see GitHub link above)
+ 
+     function Ap(pp, ip, cp) {
+       cp = +cp;
+       const Op = (ip = +ip) < (pp = +pp),
+         op = Op ? Dp(ip, pp, cp) : Dp(pp, ip, cp);
+       return (Op ? -1 : 1) * (op < 0 ? 1 / -op : op)
+     }
+ 
+     function Pp(pp, ip) {
+       return null == pp || null == ip ? NaN : pp < ip ? -1 : pp > ip ? 1 : pp >= ip ? 0 : NaN
+     }
+ 
+     function Wp(pp, ip) {
+       return null == pp || null == ip ? NaN : ip < pp ? -1 : ip > pp ? 1 : ip >= pp ? 0 : NaN
+     }
+ 
+ ... (12 more added lines; see GitHub link above)
```

#### 597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33648-L33668` → after: `L15925-L15944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15925-L15944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L15925-L15944) · [Before (L33648-L33668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33648-L33668)

```diff
-       },
-       Stalker: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         },
-         crimson: {
-           atlasIdx1: 1,
-           atlasIdx2: 1,
-           atlasIdx3: 1
-         },
-         frost: {
-           atlasIdx1: 2,
-           atlasIdx2: 2,
-           atlasIdx3: 2
- ... (5 more removed lines; see GitHub link above)
+         return op
+       }
+       return 2 !== pp.length ? (ip = Pp, cp = (ip, cp) => Pp(pp(ip), cp), Op = (ip, cp) => pp(ip) - cp) : (ip = pp === Pp || pp === Wp ? pp : Up, cp = pp, Op = pp), {
+         left: op,
+         center: function(pp, ip) {
+           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+           const Ip = op(pp, ip, cp, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length) - 1);
+           return Ip > cp && Op(pp[Ip - 1], ip) > -Op(pp[Ip], ip) ? Ip - 1 : Ip
+         },
+         right: function(pp, Op) {
+           let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+             Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
+           if (op < Ip) {
+             if (0 !== ip(Op, Op)) return Ip;
+             do {
+               const ip = op + Ip >>> 1;
+ ... (4 more added lines; see GitHub link above)
```

#### 598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33671-L33676` → after: `L16229-L16230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16229-L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16229-L16230) · [Before (L33671-L33676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33671-L33676)

```diff
-       Crone: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       displayable() {
+         return this.rgb().displayable()
```

#### 599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33678-L33683` → after: `L16232-L16235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16232-L16235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16232-L16235) · [Before (L33678-L33683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33678-L33683)

```diff
-       "Iron Guardian": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       hex: Tp,
+       formatHex: Tp,
+       formatHex8: function() {
+         return this.rgb().formatHex8()
```

#### 600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33685-L33690` → after: `L16237-L16238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16237-L16238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16237-L16238) · [Before (L33685-L33690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33685-L33690)

```diff
-       "Gold Guardian": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       formatHsl: function() {
+         return Kp(this).formatHsl()
```

#### 601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33692-L33697` → after: `L16240-L16244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16240-L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16240-L16244) · [Before (L33692-L33697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33692-L33697)

```diff
-       "Diamond Guardian": {
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

#### 602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33699-L33704` → after: `L16246-L16247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16246-L16247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16246-L16247) · [Before (L33699-L33704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33699-L33704)

```diff
-       "Moonstone Guardian": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       darker(pp) {
+         return pp = null == pp ? kp : Math.pow(kp, pp), new Fp(this.r * pp, this.g * pp, this.b * pp, this.opacity)
```

#### 603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33706-L33726` → after: `L16249-L16250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16249-L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16249-L16250) · [Before (L33706-L33726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33706-L33726)

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
+       rgb() {
+         return this
```

#### 604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33728-L33734` → after: `L16252-L16253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16252-L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16252-L16253) · [Before (L33728-L33734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33728-L33734)

```diff
-       NPC: null,
-       67: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       clamp() {
+         return new Fp(Zp(this.r), Zp(this.g), Zp(this.b), rp(this.opacity))
```

#### 605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33736-L33741` → after: `L16255-L16256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16255-L16256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16255-L16256) · [Before (L33736-L33741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33736-L33741)

```diff
-       "Bobino Musculino": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       displayable() {
+         return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
```

#### 606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33743-L33748` → after: `L16258-L16261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16258-L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16258-L16261) · [Before (L33743-L33748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33743-L33748)

```diff
-       "Capitano Explovissimo": {
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

#### 607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33750-L33755` → after: `L16263-L16269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16263-L16269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16263-L16269) · [Before (L33750-L33755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33750-L33755)

```diff
-       "Desert Fennec": {
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

#### 608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33757-L33762` → after: `L16271-L16272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16271-L16272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16271-L16272) · [Before (L33757-L33762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33757-L33762)

```diff
-       "Armour Collector": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       darker(pp) {
+         return pp = null == pp ? kp : Math.pow(kp, pp), new Vp(this.h, this.s, this.l * pp, this.opacity)
```

#### 609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33764-L33769` → after: `L16274-L16280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16274-L16280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16274-L16280) · [Before (L33764-L33769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33764-L33769)

```diff
-       "Furnace Knight": {
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

#### 610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33771-L33776` → after: `L16282-L16283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16282-L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16282-L16283) · [Before (L33771-L33776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33771-L33776)

```diff
-       "Lil Knight": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       clamp() {
+         return new Vp(ii(this.h), ci(this.s), ci(this.l), rp(this.opacity))
```

#### 611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33778-L33783` → after: `L16285-L16286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16285-L16286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16285-L16286) · [Before (L33778-L33783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33778-L33783)

```diff
-       "Glass Gremlin": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       displayable() {
+         return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
```

#### 612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33785-L33789` → after: `L16288-L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16288-L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16288-L16325) · [Before (L33785-L33789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33785-L33789)

```diff
-       "Glass Bro": {
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

#### 613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33791-L33796` → after: `L16327-L16383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16327-L16383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16327-L16383) · [Before (L33791-L33796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33791-L33796)

```diff
-       },
-       "Lord Vulcan": {
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

#### 614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33798-L33803` → after: `L16385-L16390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16385-L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16385-L16390) · [Before (L33798-L33803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33798-L33803)

```diff
-       },
-       Zombie: {
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

#### 615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33805-L33810` → after: `L16392-L16418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16392-L16418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16392-L16418) · [Before (L33805-L33810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33805-L33810)

```diff
-       },
-       Skeleton: {
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

#### 616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33812-L33817` → after: `L16420-L16422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16420-L16422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16420-L16422) · [Before (L33812-L33817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33812-L33817)

```diff
-       },
-       Mummy: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+       }(Lp[0].x) : function(pp) {
+         return function() {
+           return pp
```

#### 617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33819-L33824` → after: `L16424-L16448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16424-L16448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16424-L16448) · [Before (L33819-L33824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33819-L33824)

```diff
-       },
-       Scorpion: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+       }(ip) : (ip = Lp.length, function(pp) {
+         for (var cp, Op = 0; Op < ip; ++Op) xp[(cp = Lp[Op]).i] = cp.x(pp);
+         return xp.join("")
+       })
+     }
+ 
+     function ti(pp, ip) {
+       ip || (ip = []);
+       var cp, Op = pp ? Math.min(ip.length, pp.length) : 0,
+         op = ip.slice();
+       return function(Ip) {
+         for (cp = 0; cp < Op; ++cp) op[cp] = pp[cp] * (1 - Ip) + ip[cp] * Ip;
+         return op
+       }
+     }
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33826-L33831` → after: `L16450-L16477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16450-L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16450-L16477) · [Before (L33826-L33831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33826-L33831)

```diff
-       },
-       Vulcanite: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+     }
+ 
+     function ei(pp) {
+       return +pp
+     }
+     var ui = [0, 1];
+ 
+     function ji(pp) {
+       return pp
+     }
+ 
+     function ki(pp, ip) {
+       return (ip -= pp = +pp) ? function(cp) {
+         return (cp - pp) / ip
+       } : (cp = isNaN(ip) ? NaN : .5, function() {
+         return cp
+ ... (12 more added lines; see GitHub link above)
```

#### 619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33833-L33838` → after: `L16479-L16533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16479-L16533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16479-L16533) · [Before (L33833-L33838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33833-L33838)

```diff
-       },
-       "Evil Tome": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+     }
+ 
+     function Ri(pp, ip, cp) {
+       var Op = Math.min(pp.length, ip.length) - 1,
+         op = new Array(Op),
+         Ip = new Array(Op),
+         Sp = -1;
+       for (pp[Op] < pp[0] && (pp = pp.slice().reverse(), ip = ip.slice().reverse()); ++Sp < Op;) op[Sp] = ki(pp[Sp], pp[Sp + 1]), Ip[Sp] = cp(ip[Sp], ip[Sp + 1]);
+       return function(ip) {
+         var cp = Hp(pp, ip, 1, Op) - 1;
+         return Ip[cp](op[cp](ip))
+       }
+     }
+ 
+     function qi(pp, ip) {
+       return ip.domain(pp.domain()).range(pp.range()).interpolate(pp.interpolate()).clamp(pp.clamp()).unknown(pp.unknown())
+ ... (39 more added lines; see GitHub link above)
```

#### 620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33841-L33845` → after: `L16607-L16711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16607-L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16607-L16711) · [Before (L33841-L33845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33841-L33845)

```diff
-       "Magma Toad": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+       X: pp => Math.round(pp).toString(16).toUpperCase(),
+       x: pp => Math.round(pp).toString(16)
+     };
+ 
+     function bi(pp) {
+       return pp
+     }
+     var ai, ni, Fi, gi = Array.prototype.map,
+       Gi = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
+ 
+     function ri(pp) {
+       var ip, cp, Op = void 0 === pp.grouping || void 0 === pp.thousands ? bi : (ip = gi.call(pp.grouping, Number), cp = pp.thousands + "", function(pp, Op) {
+           for (var op = pp.length, Ip = [], Sp = 0, xp = ip[0], Lp = 0; op > 0 && xp > 0 && (Lp + xp + 1 > Op && (xp = Math.max(1, Op - Lp)), Ip.push(pp.substring(op -= xp, op + xp)), !((Lp += xp + 1) > Op));) xp = ip[Sp = (Sp + 1) % ip.length];
+           return Ip.reverse().join(cp)
+         }),
+         op = void 0 === pp.currency ? "" : pp.currency[0] + "",
+ ... (89 more added lines; see GitHub link above)
```

#### 621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33848` → after: `L16714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16714) · [Before (L33848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33848)

```diff
-     };
+     }
```

#### 622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33850-L33851` → after: `L16716-L16739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16716-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16716-L16739) · [Before (L33850-L33851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33850-L33851)

```diff
-     function sD(DD, zD) {
-       return pD[DD][zD]
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
+           null != Op.precision || isNaN(op = function(pp, ip) {
+             return pp = Math.abs(pp), ip = Math.abs(ip) - pp, Math.max(0, Ni(ip) - Ni(pp)) + 1
+           }(Ip, Math.max(Math.abs(pp), Math.abs(ip)))) || (Op.precision = op - ("e" === Op.type));
+ ... (8 more added lines; see GitHub link above)
```

#### 623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33872-L33881` → after: `L16742-L16763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16742-L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16742-L16763) · [Before (L33872-L33881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33872-L33881)

```diff
-     function cD(DD, zD) {
-       const wD = [0, 0, 0];
-       return (0, rD.e)((pD => {
-         const sD = zD(),
-           KD = DD();
-         return pD === KD.yJ.Vk(KD.vW) ? function(DD, zD) {
-           const wD = mD(DD, zD);
-           for (let pD = 0; pD < wD.length; pD++) {
-             const zD = wD[pD];
-             if (!DD.XF(zD[0], zD[1], zD[2])) return !0
+     function zi(pp) {
+       var ip = pp.domain;
+       return pp.ticks = function(pp) {
+         var cp = ip();
+         return Yp(cp[0], cp[cp.length - 1], null == pp ? 10 : pp)
+       }, pp.tickFormat = function(pp, cp) {
+         var Op = ip();
+         return Zi(Op[0], Op[Op.length - 1], null == pp ? 10 : pp, cp)
+       }, pp.nice = function(cp) {
+         null == cp && (cp = 10);
+         var Op, op, Ip = ip(),
+           Sp = 0,
+           xp = Ip.length - 1,
+           Lp = Ip[Sp],
+           Yp = Ip[xp],
+           Ap = 10;
+ ... (6 more added lines; see GitHub link above)
```

#### 624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33883-L33918` → after: `L16765-L16778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16765-L16778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16765-L16778) · [Before (L33883-L33918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33883-L33918)

```diff
-           return !1
-         }(sD, pD) : (wD[0] = Math.floor((pD.wU.base[0] + pD.wU.max[0]) / 2), wD[1] = Math.floor(pD.wU.base[1]), wD[2] = Math.floor((pD.wU.base[2] + pD.wU.max[2]) / 2), sD.xH(wD, wD), !sD.XF(wD[0], wD[1], wD[2]))
-       }), "client")
-     }
-     const gD = .05,
-       RD = .2,
-       AD = [...LD.Jc.map((DD => sD.l[DD].id)), sD.l.Vines.id, sD.l["Maple Trapdoor"].id, sD.l["Pine Trapdoor"].id, sD.l["Plum Trapdoor"].id, sD.l["Cedar Trapdoor"].id, sD.l["Aspen Trapdoor"].id, sD.l["Jungle Trapdoor"].id, sD.l["Palm Trapdoor"].id, sD.l["Pear Trapdoor"].id, sD.l[ … [truncated]
-       UD = [sD.l.Cobweb.id, sD.l.Net.id],
-       fD = [sD.l["Fat Brown Mushroom"].id, sD.l["Fat Red Mushroom"].id],
-       ID = Object.keys(sD.l).filter((DD => sD.l[DD].Af)).map((DD => sD.l[DD].id)),
-       BD = [],
-       GD = {};
-     for (const [wz, pz] of Object.entries(KD.Zb)) {
-       const DD = sD.l[wz];
-       if (!DD) throw new Error(`Jump pad "${wz}" not found in blockMetadata`);
-       BD.push(DD.id), GD[DD.id] = pz
- ... (20 more removed lines; see GitHub link above)
+           Op = op
+         }
+         return pp
+       }, pp
+     }
+ 
+     function si() {
+       var pp = Ci();
+       return pp.copy = function() {
+         return qi(pp, si())
+       }, Xi.d.apply(pp, arguments), zi(pp)
+     }
+ 
+     function Ki(pp) {
```

#### 625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33920-L33931` → after: `L16780-L16799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16780-L16799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16780-L16799) · [Before (L33920-L33931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33920-L33931)

```diff
-       let wD = 0;
-       return fD.includes(DD) && (wD |= QD.bounceable), AD.includes(DD) && (wD |= QD.wallClimbable), null !== (zD = sD.l[DD]) && void 0 !== zD && zD.climbableInside && (wD |= QD.ceilingClimbable), UD.includes(DD) && (wD |= QD.cobweb), ID.includes(DD) && (wD |= QD.Af), BD.includes( … [truncated]
-     }), Uint8Array);
-     let VD = null,
-       PD = new Uint8Array(0),
-       CD = new Int32Array(0),
-       xD = new Int8Array(0),
-       TD = new Uint8Array(0);
-     const bD = (0, LD.bb)(sD.l, (DD => {
-       const zD = sD.l[DD];
-       return void 0 === zD ? 0 : "trapdoor" === zD.model ? 1 : 2
-     }), Uint8Array);
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
+     }
+ 
+     function Vi(pp, ip) {
+       var cp, Op = 0,
+         op = (pp = pp.slice()).length - 1,
+ ... (4 more added lines; see GitHub link above)
```

#### 626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33934-L33935` → after: `L16802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16802) · [Before (L33934-L33935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33934-L33935)

```diff
-       const zD = bD[DD];
-       return 1 === zD || 2 === zD ? 1 === zD : "trapdoor" === sD.l[DD].model
+       return Math.log(pp)
```

#### 627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33939-L33967` → after: `L16806-L16807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16806-L16807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16806-L16807) · [Before (L33939-L33967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33939-L33967)

```diff
-       const zD = DD.Lf;
-       VD = zD;
-       const wD = XD.length;
-       PD = new Uint8Array(wD), CD = new Int32Array(wD), xD = new Int8Array(wD), TD = new Uint8Array(wD);
-       for (let pD = 0; pD < wD; pD++) {
-         if (0 !== pD && void 0 === zD.metadatas[pD]) continue;
-         const wD = DD.getMetaInfo(pD),
-           sD = null === wD || void 0 === wD ? void 0 : wD.rot;
-         wD && Number.isInteger(wD.rootId) && !(Math.abs(wD.rootId) > 2147483647) && (null == sD || Number.isInteger(sD) && sD >= 0 && sD <= 127) && (PD[pD] = 1, CD[pD] = wD.rootId, xD[pD] = null !== sD && void 0 !== sD ? sD : 0, TD[pD] = wD.open ? 1 : 0)
-       }
-     }
-     const SD = [!1, !1, !1],
-       iD = [0, 0, 0],
-       lD = [0, 0, 0],
-       WD = [0, 0, 0],
-       ND = [0, 0, 0],
- ... (13 more removed lines; see GitHub link above)
+       return Math.exp(pp)
+     }
```

#### 628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33969-L33995` → after: `L16809-L16958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16809-L16958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16809-L16958) · [Before (L33969-L33995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33969-L33995)

```diff
-     function yD(DD, zD, wD) {
-       DD.Lf !== VD && dD(DD);
-       const sD = DD.AU.yJ.AY(zD).LzD,
-         KD = DD.getPlayerReader(zD),
-         rD = mD(DD, wD, RD, gD),
-         LD = DD.xH(sD, WD),
-         cD = LD[0],
-         AD = LD[1],
-         UD = LD[2],
-         fD = AD + pD.f.eG,
-         ID = .5 * (wD.wU.max[0] - wD.wU.base[0]),
-         BD = 1e-4,
-         nD = ID - BD,
-         bD = ID + .25,
-         yD = ID + RD;
-       let kD = 0,
- ... (11 more removed lines; see GitHub link above)
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
+ 
+     function Ic(pp) {
+       return (ip, cp) => -pp(-ip, cp)
+     }
+ 
+ ... (134 more added lines; see GitHub link above)
```

#### 629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L33997-L34017` → after: `L16960-L17034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16960-L17034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L16960-L17034) · [Before (L33997-L34017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L33997-L34017)

```diff
-       for (let pD = 0; pD < rD.length; pD++) {
-         const sD = rD[pD],
-           gD = sD[0],
-           RD = sD[1],
-           MD = sD[2],
-           OD = DD.getClientPredictedBlockWith(KD, zD, gD, RD, MD),
-           VD = XD[OD],
-           dD = !(AD >= RD + 1 - BD || fD <= RD + BD),
-           iD = (cD - nD > gD + 1 || cD + nD < gD) && dD,
-           WD = (UD - nD > MD + 1 || UD + nD < MD) && dD,
-           ND = !dD;
-         if (iD || ND || WD) {
-           DD.getBlockSolidityWith(KD, zD, gD, RD, MD, OD) && (iD && (SD[0] = !0, VD & QD.bounceable && (kD = OD)), ND && (SD[1] = !0, VD & QD.bounceable && (eD = OD)), WD && (SD[2] = !0, VD & QD.bounceable && (oD = OD)))
-         }
-         if (VD & QD.jumpPad) {
-           YD = !0;
- ... (5 more removed lines; see GitHub link above)
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
+         return arguments.length ? (ip.range((cp = Array.from(pp, ei)).map(Hc)), op) : cp.slice()
+       }, op.rangeRound = function(pp) {
+         return op.range(pp).round(!0)
+       }, op.round = function(pp) {
+ ... (59 more added lines; see GitHub link above)
```

#### 630. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34019-L34020` → after: `L17036-L17041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17036-L17041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17036-L17041) · [Before (L34019-L34020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34019-L34020)

```diff
-         if (VD & QD.conveyor && !Dz) {
-           Math.abs(AD - (RD + JD[OD])) < ED && !(cD - nD > gD + 1 || cD + nD < gD || UD - nD > MD + 1 || UD + nD < MD) && (qD = OD, Dz = Math.floor(cD) === gD && Math.floor(UD) === MD)
+         const Ip = pp[ip];
+         let Sp = cp,
+           xp = Op;
+         for (Rc(pp, cp, ip), op(pp[Op], Ip) > 0 && Rc(pp, cp, Op); Sp < xp;) {
+           for (Rc(pp, Sp, xp), ++Sp, --xp; op(pp[Sp], Ip) < 0;) ++Sp;
+           for (; op(pp[xp], Ip) > 0;) --xp
```

#### 631. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34022-L34024` → after: `L17043-L17056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17043-L17056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17043-L17056) · [Before (L34022-L34024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34022-L34024)

```diff
-         if (dD) {
-           let zD, pD, sD;
-           if (1 === PD[OD]) zD = CD[OD], pD = xD[OD], sD = 1 === TD[OD];
+         0 === op(pp[cp], Ip) ? Rc(pp, cp, xp) : (++xp, Rc(pp, xp, Op)), xp <= ip && (cp = xp + 1), ip <= xp && (Op = xp - 1)
+       }
+       return pp
+     }
+ 
+     function Rc(pp, ip, cp) {
+       const Op = pp[ip];
+       pp[ip] = pp[cp], pp[cp] = Op
+     }
+ 
+     function qc(pp, ip, cp) {
+       if (pp = Float64Array.from(function*(pp, ip) {
+           if (void 0 === ip)
+             for (let cp of pp) null != cp && (cp = +cp) >= cp && (yield cp);
```

#### 632. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34026-L34041` → after: `L17058-L17059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17058-L17059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17058-L17059) · [Before (L34026-L34041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34026-L34041)

```diff
-             const wD = DD.getMetaInfo(OD);
-             zD = wD.rootId, pD = wD.rot, sD = !!wD.open
-           }
-           const KD = XD[zD];
-           if (VD & QD.ceilingClimbable || KD & QD.ceilingClimbable) {
-             const DD = Math.abs(cD - (gD + .5)),
-               wD = Math.abs(AD - (RD + .5)),
-               pD = Math.abs(UD - (MD + .5));
-             DD < bD && pD < bD && (null === vD || wD < vD) && (uD = zD, vD = wD)
-           }
-           if ((VD & QD.wallClimbable || KD & QD.wallClimbable) && (!jD(zD) || sD)) {
-             let DD, sD, KD, rD;
-             1 === pD || 3 === pD ? (DD = 2, KD = 0, rD = gD + .5, sD = 1 === pD ? MD : MD + 1) : (DD = 0, KD = 2, rD = MD + .5, sD = 2 === pD ? gD : gD + 1), Math.abs(LD[DD] - sD) < yD && Math.abs(LD[KD] - rD) - .499 < ID && (aD = !0, 0 !== wD.resting[DD] && (lD[DD] = zD))
-           }
-           if (!tD || !FD) {
-             !(cD - nD > gD + 1 || cD + nD < gD || UD - nD > MD + 1 || UD + nD < MD) && (tD || (tD = !!(VD & QD.cobweb)), FD || (FD = !!(VD & QD.Af)))
+             let cp = -1;
+             for (let Op of pp) null != (Op = ip(Op, ++cp, pp)) && (Op = +Op) >= Op && (yield Op)
```

#### 633. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34043` → after: `L17061-L17350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17061-L17350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17061-L17350) · [Before (L34043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34043)

```diff
-         }
+         }(pp, cp)), (Op = pp.length) && !isNaN(ip = +ip)) {
+         if (ip <= 0 || Op < 2) return uc(pp);
+         if (ip >= 1) return ec(pp);
+         var Op, op = (Op - 1) * ip,
+           Ip = Math.floor(op),
+           Sp = ec(mc(pp, Ip).subarray(0, Ip + 1));
+         return Sp + (uc(pp.subarray(Ip + 1)) - Sp) * (op - Ip)
+       }
+     }
+ 
+     function Mc(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wp;
+       if ((Op = pp.length) && !isNaN(ip = +ip)) {
+         if (ip <= 0 || Op < 2) return +cp(pp[0], 0, pp);
+         if (ip >= 1) return +cp(pp[Op - 1], Op - 1, pp);
+         var Op, op = (Op - 1) * ip,
+ ... (274 more added lines; see GitHub link above)
```

#### 634. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34045` → after: `L17352-L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17352-L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17352-L17358) · [Before (L34045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34045)

```diff
-       return iD[0] = kD, iD[1] = eD, iD[2] = oD, ZD.onLadder = aD, ZD.currentCeilingClimbable = uD, ZD.inCobweb = tD, ZD.inFluid = FD, ZD.inJumpPad = YD, ZD.jumpPadLaunchVelocity = HD, ZD.onConveyor = 0 !== qD, ND[0] = 0 !== qD ? MD[qD] : 0, ND[2] = 0 !== qD ? OD[qD] : 0, ZD
+       return [function(pp, ip, cp) {
+         const Op = ip < pp;
+         Op && ([pp, ip] = [ip, pp]);
+         const op = cp && "function" === typeof cp.range ? cp : xp(pp, ip, cp),
+           Ip = op ? op.range(pp, +ip + 1) : [];
+         return Op ? Ip.reverse() : Ip
+       }, xp]
```

#### 635. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34047` → after: `L17360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17360) · [Before (L34047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34047)

```diff
-     const kD = [0, 0, 0, 0, 0, 0];
+     const [dO, eO] = HO(tO, wO, LO, Kc, Zc, Gc), [uO, jO] = HO(vO, UO, pO, zc, rc, gc);
```

#### 636. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34049-L34055` → after: `L17362-L17367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17362-L17367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17362-L17367) · [Before (L34049-L34055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34049-L34055)

```diff
-     function mD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const sD = zD.wU.base,
-         KD = zD.wU.max,
-         rD = kD;
-       return rD[0] = sD[0] - wD, rD[1] = sD[1] - pD, rD[2] = sD[2] - wD, rD[3] = KD[0] + wD, rD[4] = KD[1] + pD, rD[5] = KD[2] + wD, vD(DD.AU, rD)
+     function kO(pp) {
+       if (0 <= pp.y && pp.y < 100) {
+         var ip = new Date(-1, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L);
+         return ip.setFullYear(pp.y), ip
+       }
+       return new Date(pp.y, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L)
```

#### 637. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34062-L34082` → after: `L17370-L17373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17370-L17373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17370-L17373) · [Before (L34062-L34082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34062-L34082)

```diff
-     function vD(DD, zD) {
-       const wD = DD.CU;
-       let pD = 0;
-       const sD = zz(zD),
-         KD = wD[0],
-         rD = wD[1],
-         LD = wD[2],
-         cD = Math.floor(zD[1] + rD),
-         gD = Math.floor(zD[4] + rD),
-         RD = Math.floor(zD[1] + .5 * (zD[4] - zD[1]) + rD),
-         AD = RD !== cD && RD !== gD;
-       for (let UD = 0; UD < 4; UD++) {
-         const DD = sD[UD],
-           zD = DD[0],
-           wD = DD[1],
-           rD = eD[UD],
- ... (5 more removed lines; see GitHub link above)
+     function mO(pp) {
+       if (0 <= pp.y && pp.y < 100) {
+         var ip = new Date(Date.UTC(-1, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L));
+         return ip.setUTCFullYear(pp.y), ip
```

#### 638. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34084` → after: `L17375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17375) · [Before (L34084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34084)

```diff
-       return uD.length = pD, uD
+       return new Date(Date.UTC(pp.y, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L))
```

#### 639. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34089-L34128` → after: `L17379-L17402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17379-L17402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17379-L17402) · [Before (L34089-L34128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34089-L34128)

```diff
-       const pD = wD ? [] : tD;
-       return function(DD, zD, wD, pD) {
-         var sD;
-         const KD = DD.yJ.AY(zD),
-           rD = DD.yJ.Vk(zD);
-         if (!rD || rD.resting[1] >= 0) return pD && (pD.length = 0), wD ? [] : (HD.length = 0, HD);
-         const LD = KD.ewD,
-           cD = null !== (sD = KD.CU) && void 0 !== sD ? sD : DD.CU,
-           gD = wD ? [] : HD;
-         let RD = 0;
-         const AD = zz(LD);
-         for (let ID = 0; ID < 4; ID++) {
-           const zD = wD ? [] : YD[ID],
-             sD = AD[ID],
-             rD = sD[0],
-             LD = sD[1];
- ... (24 more removed lines; see GitHub link above)
+       return {
+         y: pp,
+         m: ip,
+         d: cp,
+         H: 0,
+         M: 0,
+         S: 0,
+         L: 0
+       }
+     }
+     var qO, MO, CO, EO = {
+         "-": "",
+         _: " ",
+         0: "0"
+       },
+       XO = /^\s*\d+/,
+ ... (8 more added lines; see GitHub link above)
```

#### 640. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34141` → after: `L17406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17406) · [Before (L34141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34141)

```diff
-       return Dz[0][0] = DD[3], Dz[0][1] = DD[2], Dz[1][0] = DD[0], Dz[1][1] = DD[2], Dz[2][0] = DD[3], Dz[2][1] = DD[5], Dz[3][0] = DD[0], Dz[3][1] = DD[5], Dz
+       return pp.replace(QO, "\\$&")
```

#### 641. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34151-L34168` → after: `L17409-L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17409-L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17409-L17410) · [Before (L34151-L34168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34151-L34168)

```diff
-     function sD(DD, zD) {
-       const wD = {
-           rock: "stone",
-           wood: "wood",
-           granule: "gravel",
-           cuttable: "grass",
-           none1: "glass",
-           none2: "sand",
-           none3: "snow",
-           none4: "cloth"
-         },
-         sD = pD.l[DD].soundType,
-         KD = zD ? "break" : "place";
-       if (void 0 !== (null === sD || void 0 === sD ? void 0 : sD[KD])) return sD[KD];
-       {
-         const sD = pD.l[DD].harvestType;
- ... (2 more removed lines; see GitHub link above)
+     function NO(pp) {
+       return new RegExp("^(?:" + pp.map(BO).join("|") + ")", "i")
```

#### 642. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34170-L34175` → after: `L17412-L17414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17412-L17414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17412-L17414) · [Before (L34170-L34175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34170-L34175)

```diff
-     const KD = {
-       gunHeadshot: .96,
-       bulletShellBounce: .18,
-       firstPersonReload: .24,
-       thirdPersonReload: .08,
-       gunShot: .4
+ 
+     function TO(pp) {
+       return new Map(pp.map(((pp, ip) => [pp.toLowerCase(), ip])))
```

#### 643. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34177-L34232` → after: `L17416-L17419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17416-L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17416-L17419) · [Before (L34177-L34232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34177-L34232)

```diff
-   },
-   37342: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD,
-       g: () => sD,
-       j: () => cD,
-       m: () => LD,
-       n: () => rD,
-       p: () => KD
-     });
-     const pD = "bloxd.animation.binding.1",
-       sD = "*",
-       KD = "attack",
-       rD = "hurt",
-       LD = new Set([KD, rD]);
-     let cD = function(DD) {
- ... (40 more removed lines; see GitHub link above)
+ 
+     function fO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 1));
+       return Op ? (pp.w = +Op[0], cp + Op[0].length) : -1
```

#### 644. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34235-L34240` → after: `L17422-L17424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17422-L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17422-L17424) · [Before (L34235-L34240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34235-L34240)

```diff
-     function rD(DD, zD) {
-       return {
-         still: LD(DD),
-         timeless: cD(DD),
-         standsAfterSeconds: gD(DD, zD)
-       }
+     function bO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 1));
+       return Op ? (pp.u = +Op[0], cp + Op[0].length) : -1
```

#### 645. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34243-L34244` → after: `L17427-L17429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17427-L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17427-L17429) · [Before (L34243-L34244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34243-L34244)

```diff
-     function LD(DD) {
-       return 0 === DD.startDelaySeconds && null === DD.animTimeUpdate && null !== UD(DD.blendWeight) && DD.bones.every((DD => AD(DD.rotation) && AD(DD.position) && AD(DD.scale)))
+     function hO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.U = +Op[0], cp + Op[0].length) : -1
```

#### 646. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34247-L34248` → after: `L17432-L17434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17432-L17434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17432-L17434) · [Before (L34247-L34248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34247-L34248)

```diff
-     function cD(DD) {
-       return !RD(DD, (DD => DD.readsClock))
+     function aO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.V = +Op[0], cp + Op[0].length) : -1
```

#### 647. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34251-L34255` → after: `L17437-L17439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17437-L17439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17437-L17439) · [Before (L34251-L34255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34251-L34255)

```diff
-     function gD(DD, zD) {
-       if (DD.loop === pD.h.Loop || null !== DD.animTimeUpdate) return 1 / 0;
-       if (DD.loop === pD.h.Hold && DD.lengthSeconds > 0) return DD.startDelaySeconds + DD.lengthSeconds;
-       const wD = RD(DD, (DD => DD.readsAnimTime));
-       return wD ? 1 / 0 : DD.startDelaySeconds + zD + 2 * pD.i
+     function nO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.W = +Op[0], cp + Op[0].length) : -1
```

#### 648. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34258-L34260` → after: `L17442-L17444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17442-L17444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17442-L17444) · [Before (L34258-L34260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34258-L34260)

```diff
-     function RD(DD, zD) {
-       const wD = DD => "number" !== typeof DD && zD(DD);
-       return wD(DD.blendWeight) || DD.bones.some((DD => [DD.rotation, DD.position, DD.scale].some((DD => null !== DD && DD.keyframes.some((DD => [0, 1, 2].some((zD => wD(DD.pre[zD]) || wD(DD.post[zD])))))))))
+     function FO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 4));
+       return Op ? (pp.y = +Op[0], cp + Op[0].length) : -1
```

#### 649. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34263-L34273` → after: `L17447-L17449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17447-L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17447-L17449) · [Before (L34263-L34273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34263-L34273)

```diff
-     function AD(DD) {
-       var zD;
-       if (null === DD) return !0;
-       const wD = null === (zD = DD.keyframes[0]) || void 0 === zD ? void 0 : zD.pre;
-       return DD.keyframes.every((DD => {
-         for (let zD = 0; zD < 3; zD++) {
-           const pD = UD(wD[zD]);
-           if (null === pD || UD(DD.pre[zD]) !== pD || UD(DD.post[zD]) !== pD) return !1
-         }
-         return !0
-       }))
+     function gO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.y = +Op[0] + (+Op[0] > 68 ? 1900 : 2e3), cp + Op[0].length) : -1
```

#### 650. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34276-L34292` → after: `L17452-L17455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17452-L17455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17452-L17455) · [Before (L34276-L34292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34276-L34292)

```diff
-     function UD(DD) {
-       return "number" === typeof DD ? DD : DD.constant
-     }
-     var fD = wD(37365),
-       ID = wD(37347),
-       BD = wD(37358);
-     const GD = ["1.8.0", "1.10.0"],
-       hD = 524288,
-       nD = 1e6,
-       MD = 128,
-       OD = new Map([
-         ["rotation", pD.e.Rotation],
-         ["position", pD.e.Position],
-         ["scale", pD.e.Scale]
-       ]),
-       JD = new Set(["sound_effects", "particle_effects", "timeline"]),
- ... (1 more removed lines; see GitHub link above)
+     function GO(pp, ip, cp) {
+       var Op = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(ip.slice(cp, cp + 6));
+       return Op ? (pp.Z = Op[1] ? 0 : -(Op[2] + (Op[3] || "00")), cp + Op[0].length) : -1
+     }
```

#### 651. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34295-L34306` → after: `L17458-L17459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17458-L17459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17458-L17459) · [Before (L34295-L34306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34295-L34306)

```diff
-       if (DD.length > hD) return XD(zD, `file is ${DD.length} characters, over the 524288 limit`);
-       let pD;
-       try {
-         pD = JSON.parse(DD)
-       } catch (sD) {
-         return XD(zD, `invalid JSON: ${sD.message}`)
-       }
-       try {
-         return new VD(zD, wD).compile(pD)
-       } catch (sD) {
-         return XD(zD, `could not be loaded: ${sD.message}`)
-       }
+       var Op = XO.exec(ip.slice(cp, cp + 1));
+       return Op ? (pp.q = 3 * Op[0] - 3, cp + Op[0].length) : -1
```

#### 652. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34309-L34317` → after: `L17462-L17464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17462-L17464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17462-L17464) · [Before (L34309-L34317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34309-L34317)

```diff
-     function XD(DD, zD) {
-       return {
-         clips: [],
-         diagnostics: [{
-           severity: pD.b.Error,
-           source: DD,
-           message: zD
-         }]
-       }
+     function ZO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.m = Op[0] - 1, cp + Op[0].length) : -1
```

#### 653. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34319-L34506` → after: `L17466-L17469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17466-L17469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17466-L17469) · [Before (L34319-L34506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34319-L34506)

```diff
-     class VD {
-       constructor(DD, zD) {
-         this.source = DD, this.variables = zD, this.diagnostics = [], this.suppressedDiagnostics = 0, this.keyframeCount = 0, this.molangChars = 0
-       }
-       compile(DD) {
-         if (!(0, ID.k)(DD)) return XD(this.source, "the file is not a JSON object");
-         const zD = DD.format_version;
-         if ("string" !== typeof zD || !GD.includes(zD)) return XD(this.source, `unsupported format_version ${JSON.stringify(zD)}; expected one of ${GD.join(", ")}`);
-         const wD = DD.animations;
-         if (!(0, ID.k)(wD)) return XD(this.source, 'missing "animations" object');
-         const sD = Object.keys(wD);
-         if (sD.length > 128) return XD(this.source, `${sD.length} animations, over the 128 limit`);
-         const KD = [];
-         for (const LD of sD) try {
-           KD.push(this.variables.compileClip((() => this.compileClip(LD, wD[LD]))))
-         } catch (rD) {
- ... (172 more removed lines; see GitHub link above)
+ 
+     function zO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.d = +Op[0], cp + Op[0].length) : -1
```

#### 654. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34509-L34511` → after: `L17472-L17474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17472-L17474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17472-L17474) · [Before (L34509-L34511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34509-L34511)

```diff
-     function PD(DD, zD) {
-       if (!Number.isFinite(DD) || Math.abs(DD) > nD) throw new ID.b(`${zD}: ${DD} is not a finite number within \xb11000000`);
-       return DD
+     function sO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 3));
+       return Op ? (pp.m = 0, pp.d = +Op[0], cp + Op[0].length) : -1
```

#### 655. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34514-L34518` → after: `L17477-L17479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17477-L17479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17477-L17479) · [Before (L34514-L34518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34514-L34518)

```diff
-     function CD(DD) {
-       if (void 0 === DD || !1 === DD) return pD.h.Once;
-       if (!0 === DD) return pD.h.Loop;
-       if ("hold_on_last_frame" === DD) return pD.h.Hold;
-       throw new ID.b(`loop ${JSON.stringify(DD)} is not supported (true, false or "hold_on_last_frame")`)
+     function KO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.H = +Op[0], cp + Op[0].length) : -1
```

#### 656. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34520-L34550` → after: `L17481-L17484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17481-L17484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17481-L17484) · [Before (L34520-L34550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34520-L34550)

```diff
-     class xD {
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !1;
-         this.byId = new Map, this.fileById = new Map, this.byShortName = new Map, this.variables = new KD, this.diagnostics = [];
-         for (const wD of DD) {
-           const DD = QD(wD.text, wD.name, this.variables);
-           this.diagnostics.push(...DD.diagnostics);
-           for (const sD of DD.clips) {
-             const DD = this.fileById.get(sD.id);
-             if (void 0 !== DD && zD(wD.name) && zD(DD)) continue;
-             if (void 0 !== DD) {
-               this.diagnostics.push({
-                 severity: pD.b.Error,
-                 source: wD.name,
-                 message: `${sD.id} is already defined by another file; the first definition is kept`
-               });
- ... (15 more removed lines; see GitHub link above)
+ 
+     function VO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.M = +Op[0], cp + Op[0].length) : -1
```

#### 657. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34553-L34562` → after: `L17487-L17489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17487-L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17487-L17489) · [Before (L34553-L34562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34553-L34562)

```diff
-     function TD(DD, zD) {
-       for (let wD = 0; wD < DD.length; wD++) {
-         const pD = DD[wD].find(zD);
-         if (null !== pD) return {
-           clip: pD,
-           pool: wD
-         };
-         if (DD[wD].isAmbiguousShortName(zD)) return "ambiguous"
-       }
-       return "noClip"
+     function po(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.S = +Op[0], cp + Op[0].length) : -1
```

#### 658. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34565-L34566` → after: `L17492-L17514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17492-L17514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17492-L17514) · [Before (L34565-L34566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34565-L34566)

```diff
-     function bD(DD) {
-       return DD.slice(DD.lastIndexOf(".") + 1)
+     function io(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 3));
+       return Op ? (pp.L = +Op[0], cp + Op[0].length) : -1
+     }
+ 
+     function co(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 6));
+       return Op ? (pp.L = Math.floor(Op[0] / 1e3), cp + Op[0].length) : -1
+     }
+ 
+     function Oo(pp, ip, cp) {
+       var Op = lO.exec(ip.slice(cp, cp + 1));
+       return Op ? cp + Op[0].length : -1
+     }
+ 
+     function oo(pp, ip, cp) {
+ ... (7 more added lines; see GitHub link above)
```

#### 659. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34579-L34592` → after: `L17518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17518) · [Before (L34579-L34592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34579-L34592)

```diff
-       const wD = zD - DD.startDelaySeconds;
-       if (wD < 0) return NaN;
-       const KD = DD.lengthSeconds;
-       if (KD <= 0) return wD;
-       switch (DD.loop) {
-         case pD.h.Once:
-           return wD;
-         case pD.h.Hold:
-           return Math.min(wD, KD);
-         case pD.h.Loop: {
-           const zD = KD + DD.loopDelaySeconds;
-           return Math.min((wD - sD) % zD + sD, KD)
-         }
-       }
+       return JO(pp.getDate(), ip, 2)
```

#### 660. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34595-L34643` → after: `L17521-L17522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17521-L17522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17521-L17522) · [Before (L34595-L34643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34595-L34643)

```diff
-     function rD(DD, zD, wD, sD, KD) {
-       const rD = DD.keyframes;
-       if (1 === rD.length) return void gD(rD[0], zD, sD, KD);
-       const LD = function(DD, zD) {
-           let wD = 0,
-             pD = DD.length;
-           for (; wD < pD;) {
-             const sD = wD + pD >>> 1;
-             DD[sD].time < zD ? wD = sD + 1 : pD = sD
-           }
-           return wD - 1
-         }(rD, zD),
-         AD = LD + 1 < rD.length ? LD + 1 : -1,
-         UD = LD >= 0 ? rD[LD] : null,
-         fD = AD >= 0 ? rD[AD] : null;
-       let ID = null;
- ... (33 more removed lines; see GitHub link above)
+     function xo(pp, ip) {
+       return JO(pp.getHours(), ip, 2)
```

#### 661. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34646-L34649` → after: `L17525-L17526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17525-L17526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17525-L17526) · [Before (L34646-L34649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34646-L34649)

```diff
-     function gD(DD, zD, wD, sD) {
-       ! function(DD, zD, wD) {
-         wD[0] = RD(DD[0], zD), wD[1] = RD(DD[1], zD), wD[2] = RD(DD[2], zD)
-       }(DD.time > zD || Math.abs(DD.time - zD) < pD.i ? DD.pre : DD.post, wD, sD)
+     function Lo(pp, ip) {
+       return JO(pp.getHours() % 12 || 12, ip, 2)
```

#### 662. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34653` → after: `L17530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17530) · [Before (L34653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34653)

```diff
-       return "number" === typeof DD ? DD : DD.evaluate(zD)
+       return JO(1 + zc.count(vO(pp), pp), ip, 3)
```

#### 663. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34690-L34699` → after: `L17533-L17534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17533-L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17533-L17534) · [Before (L34690-L34699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34690-L34699)

```diff
-     function AD(DD) {
-       let zD = RD.get(DD);
-       if (void 0 === zD) {
-         var wD, pD;
-         zD = ID(DD.blendWeight) + (null !== (wD = null === (pD = DD.animTimeUpdate) || void 0 === pD ? void 0 : pD.cost) && void 0 !== wD ? wD : 0);
-         for (const wD of DD.bones)
-           for (const DD of [wD.rotation, wD.position, wD.scale]) null !== DD && (zD += UD(DD));
-         RD.set(DD, zD)
-       }
-       return zD
+     function Do(pp, ip) {
+       return JO(pp.getMilliseconds(), ip, 3)
```

#### 664. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34702-L34708` → after: `L17537-L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17537-L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17537-L17538) · [Before (L34702-L34708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34702-L34708)

```diff
-     function UD(DD) {
-       let zD = 0,
-         wD = !1;
-       for (const KD of DD.keyframes) zD = Math.max(zD, fD(KD.pre) + (KD.hasPrePost ? fD(KD.post) : 0)), wD ||= KD.catmullRom;
-       const pD = DD.keyframes.length,
-         sD = Math.ceil(Math.log2(pD));
-       return wD && pD > 1 ? rD + sD + (pD >= 3 ? cD : pD) * zD : KD + sD + Math.min(LD, pD) * zD
+     function Ao(pp, ip) {
+       return Do(pp, ip) + "000"
```

#### 665. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34711-L34712` → after: `L17541-L17542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17541-L17542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17541-L17542) · [Before (L34711-L34712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34711-L34712)

```diff
-     function fD(DD) {
-       return ID(DD[0]) + ID(DD[1]) + ID(DD[2])
+     function Po(pp, ip) {
+       return JO(pp.getMonth() + 1, ip, 2)
```

#### 666. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34715-L34716` → after: `L17545-L17546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17545-L17546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17545-L17546) · [Before (L34715-L34716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34715-L34716)

```diff
-     function ID(DD) {
-       return "number" === typeof DD ? 0 : DD.cost
+     function Wo(pp, ip) {
+       return JO(pp.getMinutes(), ip, 2)
```

#### 667. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34719-L34726` → after: `L17549-L17550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17549-L17550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17549-L17550) · [Before (L34719-L34726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34719-L34726)

```diff
-     function BD(DD) {
-       let zD = 0;
-       for (const wD of DD.layers) {
-         let DD = null === wD.fallback ? 0 : GD(wD.fallback);
-         for (const zD of wD.states.values()) DD = Math.max(DD, GD(zD));
-         zD += DD
-       }
-       return zD
+     function yo(pp, ip) {
+       return JO(pp.getSeconds(), ip, 2)
```

#### 668. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34730-L34736` → after: `L17554-L17555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17554-L17555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17554-L17555) · [Before (L34730-L34736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34730-L34736)

```diff
-       let zD = 0,
-         wD = 0;
-       for (const pD of DD.children) {
-         const DD = AD(pD.clip.clip);
-         DD > zD ? (wD = zD, zD = DD) : DD > wD && (wD = DD)
-       }
-       return zD + wD + gD * DD.children.length
+       var ip = pp.getDay();
+       return 0 === ip ? 7 : ip
```

#### 669. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34767-L34769` → after: `L17558-L17564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17558-L17564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17558-L17564) · [Before (L34767-L34769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34767-L34769)

```diff
-     function cD(DD, zD, wD, KD, rD) {
-       const cD = DD.queries;
-       cD[pD.d.LifeTime] = wD, cD[pD.d.DeltaTime] = KD, cD[pD.d.GroundSpeed] = zD[sD.GroundSpeed], cD[pD.d.ModifiedMoveSpeed] = zD[sD.GroundSpeed], cD[pD.d.ModifiedDistanceMoved] = rD, cD[pD.d.VerticalSpeed] = zD[sD.VerticalSpeed], cD[pD.d.IsOnGround] = zD[sD.OnGround], cD[pD.d.Is … [truncated]
+     function wo(pp, ip) {
+       return JO(pO.count(vO(pp) - 1, pp), ip, 2)
+     }
+ 
+     function vo(pp) {
+       var ip = pp.getDay();
+       return ip >= 4 || 0 === ip ? oO(pp) : oO.ceil(pp)
```

#### 670. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34773-L34775` → after: `L17568-L17572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17568-L17572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17568-L17572) · [Before (L34773-L34775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34773-L34775)

```diff
-       const wD = DD.gate < 0 ? 1 : zD[DD.gate],
-         pD = (zD[DD.from] * DD.scale + DD.offset) * wD;
-       return Math.min(DD.max, Math.max(DD.min, pD))
+       return pp = vo(pp), JO(oO.count(vO(pp), pp) + (4 === vO(pp).getDay()), ip, 2)
+     }
+ 
+     function Ho(pp) {
+       return pp.getDay()
```

#### 671. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34790-L34794` → after: `L17575-L17576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17575-L17576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17575-L17576) · [Before (L34790-L34794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34790-L34794)

```diff
-     function KD(DD, zD, wD, sD) {
-       const KD = DD * pD * .5,
-         rD = zD * pD * .5,
-         cD = wD * pD * .5;
-       LD(Math.cos(KD), Math.sin(KD), Math.cos(rD), Math.sin(rD), Math.cos(cD), Math.sin(cD), sD)
+     function eo(pp, ip) {
+       return JO(iO.count(vO(pp) - 1, pp), ip, 2)
```

#### 672. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34797-L34798` → after: `L17579-L17580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17579-L17580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17579-L17580) · [Before (L34797-L34798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34797-L34798)

```diff
-     function rD(DD, zD, wD, pD, sD) {
-       cD(pD, 0, DD), cD(pD, 3, zD), cD(pD, 6, wD), LD(pD[1], pD[2], pD[4], pD[5], pD[7], pD[8], sD)
+     function uo(pp, ip) {
+       return JO(pp.getFullYear() % 100, ip, 2)
```

#### 673. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34801-L34802` → after: `L17583-L17584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17583-L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17583-L17584) · [Before (L34801-L34802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34801-L34802)

```diff
-     function LD(DD, zD, wD, pD, sD, KD, rD) {
-       rD[0] = zD * wD * sD - DD * pD * KD, rD[1] = DD * pD * sD + zD * wD * KD, rD[2] = DD * wD * KD - zD * pD * sD, rD[3] = DD * wD * sD + zD * pD * KD
+     function jo(pp, ip) {
+       return JO((pp = vo(pp)).getFullYear() % 100, ip, 2)
```

#### 674. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34805-L34809` → after: `L17587-L17588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17587-L17588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17587-L17588) · [Before (L34805-L34809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34805-L34809)

```diff
-     function cD(DD, zD, wD) {
-       if (DD[zD] !== wD) {
-         const sD = wD * pD * .5;
-         DD[zD] = wD, DD[zD + 1] = Math.cos(sD), DD[zD + 2] = Math.sin(sD)
-       }
+     function ko(pp, ip) {
+       return JO(pp.getFullYear() % 1e4, ip, 4)
```

#### 675. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34812-L34820` → after: `L17591-L17593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17591-L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17591-L17593) · [Before (L34812-L34820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34812-L34820)

```diff
-     function gD(DD, zD, wD, pD, KD) {
-       const rD = 1 - 2 * (zD * zD + wD * wD),
-         LD = 2 * (DD * zD - pD * wD),
-         cD = 2 * (DD * zD + pD * wD),
-         gD = 1 - 2 * (DD * DD + wD * wD),
-         RD = 2 * (DD * wD - pD * zD),
-         AD = 2 * (zD * wD + pD * DD),
-         UD = 1 - 2 * (DD * DD + zD * zD);
-       KD[1] = Math.asin(-Math.min(1, Math.max(-1, RD))) * sD, Math.abs(RD) < .9999999 ? (KD[0] = Math.atan2(AD, UD) * sD, KD[2] = Math.atan2(cD, rD) * sD) : (KD[0] = 0, KD[2] = Math.atan2(-LD, gD) * sD)
+     function mo(pp, ip) {
+       var cp = pp.getDay();
+       return JO((pp = cp >= 4 || 0 === cp ? oO(pp) : oO.ceil(pp)).getFullYear() % 1e4, ip, 4)
```

#### 676. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34823-L34832` → after: `L17596-L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17596-L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17596-L17598) · [Before (L34823-L34832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34823-L34832)

```diff
-     function RD(DD, zD, wD) {
-       const pD = DD[0],
-         sD = DD[1],
-         KD = DD[2],
-         rD = DD[3],
-         LD = zD[0],
-         cD = zD[1],
-         gD = zD[2],
-         RD = zD[3];
-       wD[0] = rD * LD + pD * RD + sD * gD - KD * cD, wD[1] = rD * cD - pD * gD + sD * RD + KD * LD, wD[2] = rD * gD + pD * cD - sD * LD + KD * RD, wD[3] = rD * RD - pD * LD - sD * cD - KD * gD
+     function Ro(pp) {
+       var ip = pp.getTimezoneOffset();
+       return (ip > 0 ? "-" : (ip *= -1, "+")) + JO(ip / 60 | 0, "0", 2) + JO(ip % 60, "0", 2)
```

#### 677. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34836` → after: `L17602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17602) · [Before (L34836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34836)

```diff
-       return DD <= 0 ? 1 : 1 - Math.exp(-DD * zD)
+       return JO(pp.getUTCDate(), ip, 2)
```

#### 678. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34857-L34861` → after: `L17605-L17606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17605-L17606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17605-L17606) · [Before (L34857-L34861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34857-L34861)

```diff
-     function gD(DD) {
-       return {
-         constant: DD,
-         input: -1
-       }
+     function Mo(pp, ip) {
+       return JO(pp.getUTCHours(), ip, 2)
```

#### 679. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34865` → after: `L17610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17610) · [Before (L34865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34865)

```diff
-       return void 0 === DD ? 0 : fD(DD, 0, .001, 1e3, zD)
+       return JO(pp.getUTCHours() % 12 || 12, ip, 2)
```

#### 680. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34869-L34871` → after: `L17614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17614) · [Before (L34869-L34871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34869-L34871)

```diff
-       if (void 0 === DD || "add" === DD) return rD.j.Add;
-       if ("override" === DD) return rD.j.Override;
-       throw new cD(`${zD} must be "add" or "override"`)
+       return JO(1 + sc.count(tO(pp), pp), ip, 3)
```

#### 681. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34875-L34879` → after: `L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17618) · [Before (L34875-L34879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34875-L34879)

```diff
-       if (void 0 === DD) return null;
-       if (!Array.isArray(DD) || 0 === DD.length || DD.length > 128) throw new cD(`${zD} must list 1-128 bone names`);
-       for (const wD of DD)
-         if ("string" !== typeof wD || 0 === wD.length || wD.length > 128) throw new cD(`${zD} must list bone names`);
-       return DD
+       return JO(pp.getUTCMilliseconds(), ip, 3)
```

#### 682. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34882-L34885` → after: `L17621-L17622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17621-L17622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17621-L17622) · [Before (L34882-L34885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34882-L34885)

```diff
-     function fD(DD, zD, wD, pD, sD) {
-       if (void 0 === DD) return zD;
-       if ("number" !== typeof DD || !Number.isFinite(DD) || DD < wD || DD > pD) throw new cD(`${sD} must be a number from ${wD} to ${pD}`);
-       return DD
+     function Qo(pp, ip) {
+       return Xo(pp, ip) + "000"
```

#### 683. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34889-L34890` → after: `L17626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17626) · [Before (L34889-L34890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34889-L34890)

```diff
-       if (!(0, LD.k)(DD)) throw new cD(`${zD} must be an object`);
-       return DD
+       return JO(pp.getUTCMonth() + 1, ip, 2)
```

#### 684. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34893-L34904` → after: `L17629-L17631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17629-L17631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17629-L17631) · [Before (L34893-L34904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34893-L34904)

```diff
-     function BD(DD, zD, wD) {
-       for (const pD of Object.keys(DD))
-         if (!zD.includes(pD)) throw new cD(`${wD}: unknown key "${pD}"`)
-     }
-     var GD = wD(37363),
-       hD = wD(37365),
-       nD = wD(37351),
-       MD = wD(37369);
-     const OD = 65536,
-       JD = 1e6,
-       ED = ["clip", "blend", "rate", "stride", "rest"],
-       QD = /^[A-Za-z_][A-Za-z0-9_]{0,63}$/;
+     function Bo(pp, ip) {
+       return JO(pp.getUTCMinutes(), ip, 2)
+     }
```

#### 685. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34906-L34930` → after: `L17633-L17634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17633-L17634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17633-L17634) · [Before (L34906-L34930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34906-L34930)

```diff
-     function XD(DD, zD, wD) {
-       const pD = DD => ({
-         binding: null,
-         diagnostics: [{
-           severity: nD.b.Error,
-           source: zD,
-           message: DD
-         }]
-       });
-       if (DD.length > OD) return pD(`file is ${DD.length} characters, over the ${OD} limit`);
-       let sD;
-       try {
-         sD = JSON.parse(DD)
-       } catch (KD) {
-         return pD(`invalid JSON: ${KD.message}`)
-       }
- ... (9 more removed lines; see GitHub link above)
+     function No(pp, ip) {
+       return JO(pp.getUTCSeconds(), ip, 2)
```

#### 686. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34934-L35190` → after: `L17638-L17639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17638-L17639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17638-L17639) · [Before (L34934-L35190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L34934-L35190)

```diff
-       if (DD.length > OD) return null;
-       try {
-         const zD = JSON.parse(DD);
-         return (0, LD.k)(zD) && "string" === typeof zD.target ? zD.target : null
-       } catch {
-         return null
-       }
-     }
-     class PD {
-       constructor(DD, zD) {
-         this.source = DD, this.options = zD, this.inputIndexByName = new Map;
-         for (const [wD, pD] of MD.g) this.inputIndexByName.set(wD, pD)
-       }
-       compile(DD) {
-         const zD = ID(DD, "the file");
-         if (BD(zD, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), zD.format_version !== rD.e) throw new cD(`format_version must be "${rD.e}"`);
- ... (241 more removed lines; see GitHub link above)
+       var ip = pp.getUTCDay();
+       return 0 === ip ? 7 : ip
```

#### 687. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35194-L35209` → after: `L17643-L17644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17643-L17644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17643-L17644) · [Before (L35194-L35209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35194-L35209)

```diff
-       return void 0 === DD[zD] ? {} : DD[zD]
-     }
-     var xD = wD(37373);
-     const TD = 64,
-       bD = 2097152,
-       jD = /^[A-Za-z0-9][A-Za-z0-9 _.-]{0,95}\.(animation|binding)\.json$/,
-       dD = ".animation.json",
-       SD = new Set(["Player", "NPC", "Person"]),
-       iD = "crouching",
-       lD = new Set([...pD.l, ...sD.p, iD]),
-       WD = "parked",
-       ND = "occupied",
-       ZD = new Set([WD, ND]),
-       yD = new Set(KD.d),
-       kD = new Set([...pD.n.filter((DD => !SD.has(DD))), ...yD]),
-       mD = new Set([...kD, ...SD]);
+       return JO(LO.count(tO(pp) - 1, pp), ip, 2)
+     }
```

#### 688. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35212` → after: `L17647-L17652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17647-L17652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17647-L17652) · [Before (L35212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35212)

```diff
-       return yD.has(DD)
+       var ip = pp.getUTCDay();
+       return ip >= 4 || 0 === ip ? PO(pp) : PO.ceil(pp)
+     }
+ 
+     function ho(pp, ip) {
+       return pp = bo(pp), JO(PO.count(tO(pp), pp) + (4 === tO(pp).getUTCDay()), ip, 2)
```

#### 689. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35216` → after: `L17656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17656) · [Before (L35216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35216)

```diff
-       return eD(DD) ? ZD : lD
+       return pp.getUTCDay()
```

#### 690. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35221-L35284` → after: `L17660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17660) · [Before (L35221-L35284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35221-L35284)

```diff
-       const wD = "builtIn" === zD,
-         pD = wD ? mD : kD,
-         sD = [],
-         KD = (DD, zD) => {
-           sD.push({
-             severity: nD.b.Error,
-             source: DD,
-             message: zD
-           })
-         },
-         rD = Object.keys(DD);
-       let LD = 0;
-       for (const BD of rD) LD += BD.length + ("string" === typeof DD[BD] ? DD[BD].length : 0);
-       if (!wD && (rD.length > TD || LD > bD)) return KD("animations", `${rD.length} files and ${LD} characters, over the ${TD} file or ${bD} character limit`), {
-         pool: new GD.e([]),
-         bindings: new Map,
- ... (48 more removed lines; see GitHub link above)
+       return JO(YO.count(tO(pp) - 1, pp), ip, 2)
```

#### 691. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35287-L35295` → after: `L17663-L17664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17663-L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17663-L17664) · [Before (L35287-L35295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35287-L35295)

```diff
-     function vD(DD, zD, wD) {
-       const pD = DD.bindings.get(zD);
-       return void 0 === pD ? {
-         binding: null,
-         diagnostics: []
-       } : XD(pD.text, pD.name, {
-         stateNames: oD(zD),
-         pools: [DD.pool, ...wD]
-       })
+     function Fo(pp, ip) {
+       return JO(pp.getUTCFullYear() % 100, ip, 2)
```

#### 692. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35299-L35342` → after: `L17667-L17668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17667-L17668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17667-L17668) · [Before (L35299-L35342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35299-L35342)

```diff
-     function FD(DD, zD, wD) {
-       const pD = oD(wD),
-         sD = DD.targetClips.get(wD),
-         KD = DD.bindings.get(wD);
-       if (void 0 !== KD) {
-         const wD = void 0 === sD ? [DD.pool, zD.pool] : [sD.pool, DD.pool, zD.pool];
-         return XD(KD.text, KD.name, {
-           stateNames: pD,
-           pools: wD
-         })
-       }
-       if (void 0 === sD) return {
-         binding: null,
-         diagnostics: []
-       };
-       const rD = zD.bindings.get(wD);
- ... (28 more removed lines; see GitHub link above)
+     function go(pp, ip) {
+       return JO((pp = bo(pp)).getUTCFullYear() % 100, ip, 2)
```

#### 693. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35346-L35350` → after: `L17672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17672) · [Before (L35346-L35350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35346-L35350)

```diff
-       return {
-         severity: nD.b.Warning,
-         source: DD,
-         message: zD
-       }
+       return JO(pp.getUTCFullYear() % 1e4, ip, 4)
```

#### 694. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35352-L35401` → after: `L17674-L17677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17674-L17677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17674-L17677) · [Before (L35352-L35401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35352-L35401)

```diff
-   },
-   37373: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => sD,
-       f: () => rD,
-       i: () => KD
-     });
-     var pD = wD(37351);
-     class sD {
-       constructor(DD, zD) {
-         this.binding = DD, this.rig = zD, this.boneIndicesByClip = new Map, this.layerMasks = void 0, this.actionMasks = void 0, this.diagnostics = [], this.missing = new Set, this.animatesRig = !1, this.layerMasks = DD.layers.map((DD => {
-           for (const zD of LD(DD)) this.boneIndices(zD);
-           return this.mask(DD.bones, `layer "${DD.name}"`)
-         }));
-         const wD = new Map;
-         for (const pD of DD.actions.values()) this.boneIndices(pD.clip.clip), wD.set(pD.name, this.mask(pD.bones, `action "${pD.name}"`));
- ... (34 more removed lines; see GitHub link above)
+ 
+     function ro(pp, ip) {
+       var cp = pp.getUTCDay();
+       return JO((pp = cp >= 4 || 0 === cp ? PO(pp) : PO.ceil(pp)).getUTCFullYear() % 1e4, ip, 4)
```

#### 695. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35404-L35416` → after: `L17680-L17681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17680-L17681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17680-L17681) · [Before (L35404-L35416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35404-L35416)

```diff
-     function KD(DD) {
-       const zD = new Set,
-         wD = (DD, wD) => {
-           const pD = null === wD ? null : new Set(wD.map((DD => DD.toLowerCase())));
-           for (const sD of DD.bones) {
-             const DD = sD.name.toLowerCase();
-             (null === pD || pD.has(DD)) && zD.add(DD)
-           }
-         };
-       for (const pD of DD.layers)
-         for (const DD of LD(pD)) wD(DD, pD.bones);
-       for (const pD of DD.actions.values()) wD(pD.clip.clip, pD.bones);
-       return zD
+     function Zo() {
+       return "+0000"
```

#### 696. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35419-L35421` → after: `L17684-L17685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17684-L17685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17684-L17685) · [Before (L35419-L35421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35419-L35421)

```diff
-     function* rD(DD) {
-       for (const zD of DD.layers) yield* cD(zD);
-       for (const zD of DD.actions.values()) yield zD.clip
+     function zo() {
+       return "%"
```

#### 697. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35424-L35425` → after: `L17688-L17689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17688-L17689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17688-L17689) · [Before (L35424-L35425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35424-L35425)

```diff
-     function* LD(DD) {
-       for (const zD of cD(DD)) yield zD.clip
+     function so(pp) {
+       return +pp
```

#### 698. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35428-L35433` → after: `L17692-L17693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17692-L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17692-L17693) · [Before (L35428-L35433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35428-L35433)

```diff
-     function* cD(DD) {
-       for (const wD of [...DD.states.values(), DD.fallback])
-         for (const DD of null !== (zD = null === wD || void 0 === wD ? void 0 : wD.children) && void 0 !== zD ? zD : []) {
-           var zD;
-           yield DD.clip
-         }
+     function Ko(pp) {
+       return Math.floor(+pp / 1e3)
```

#### 699. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35453-L35478` → after: `L17697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17697) · [Before (L35453-L35478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35453-L35478)

```diff
-       return "" === DD || "0" === DD || DD.length > sD.c ? DD : KD.test(DD) ? (-parseFloat(DD)).toString() : function(DD, zD) {
-         if (DD.includes("return ")) return function(DD, zD) {
-           let wD = "",
-             pD = 0,
-             sD = 0;
-           for (;;) {
-             const KD = DD.indexOf("return ", sD);
-             if (-1 === KD) break;
-             const rD = KD + 7,
-               LD = RD(DD, rD);
-             if (-1 !== LD) {
-               if (wD += DD.substring(pD, rD) + zD(DD.substring(rD, LD)), pD = LD, LD === DD.length) break;
-               sD = LD + 1
-             } else sD = AD(DD, rD) + 1
-           }
-           return wD + DD.substring(pD)
- ... (10 more removed lines; see GitHub link above)
+       return new Date(pp)
```

#### 700. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35482-L35500` → after: `L17701-L17758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17701-L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17701-L17758) · [Before (L35482-L35500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35482-L35500)

```diff
-       let zD, wD = !0,
-         pD = 0,
-         sD = "";
-       for (const KD of DD) {
-         if (0 === pD) {
-           let DD, pD = !0;
-           if ("-" === KD && "*" !== zD && "/" !== zD) {
-             wD || zD || (sD += "+"), wD = !1;
-             continue
-           }
-           if (" " === KD || "\n" === KD) pD = !1;
-           else {
-             if ("+" === KD && "*" !== zD && "/" !== zD) {
-               sD += "-", wD = !1;
-               continue
-             }
- ... (3 more removed lines; see GitHub link above)
+       return pp instanceof Date ? +pp : +new Date(+pp)
+     }
+ 
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
+ ... (42 more added lines; see GitHub link above)
```

#### 701. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35504` → after: `L17761-L17772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17761-L17772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17761-L17772) · [Before (L35504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35504)

```diff
-       return sD
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
+         }
```

#### 702. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35508-L35513` → after: `L17776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17776) · [Before (L35508-L35513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35508-L35513)

```diff
-       if (zD >= DD.length || UD(DD[zD])) return -1;
-       for (let wD = zD + 1; wD < DD.length; wD++) {
-         if (";" === DD[wD]) return wD;
-         if (UD(DD[wD])) return -1
-       }
-       return DD.length
+       return ip.domain(pp.domain()).interpolator(pp.interpolator()).clamp(pp.clamp()).unknown(pp.unknown())
```

#### 703. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35516-L35519` → after: `L17779-L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17779-L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17779-L17783) · [Before (L35516-L35519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35516-L35519)

```diff
-     function AD(DD, zD) {
-       for (let wD = zD; wD < DD.length; wD++)
-         if (UD(DD[wD])) return wD;
-       return DD.length
+     function SI() {
+       var pp = zi(oI()(ji));
+       return pp.copy = function() {
+         return II(pp, SI())
+       }, Xi.b.apply(pp, arguments)
```

#### 704. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35522-L35523` → after: `L17786-L17790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17786-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17786-L17790) · [Before (L35522-L35523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35522-L35523)

```diff
-     function UD(DD) {
-       return "\n" === DD || "\r" === DD || "\u2028" === DD || "\u2029" === DD
+     function xI() {
+       var pp = Sc(oI()).domain([1, 10]);
+       return pp.copy = function() {
+         return II(pp, xI()).base(pp.base())
+       }, Xi.b.apply(pp, arguments)
```

#### 705. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35529-L35532` → after: `L17793-L17797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17793-L17797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17793-L17797) · [Before (L35529-L35532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35529-L35532)

```diff
-     function GD(DD, zD) {
-       const wD = BD.test(DD) ? Number(DD) : NaN;
-       if (!(wD >= 0 && wD <= ID)) throw new fD(`${zD}: keyframe time "${DD}" must be a number of seconds from 0 to ${ID}`);
-       return wD
+     function LI() {
+       var pp = Dc(oI());
+       return pp.copy = function() {
+         return II(pp, LI()).constant(pp.constant())
+       }, Xi.b.apply(pp, arguments)
```

#### 706. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35535-L35539` → after: `L17800-L17804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17800-L17804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17800-L17804) · [Before (L35535-L35539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35535-L35539)

```diff
-     function hD(DD, zD) {
-       const wD = DD.lerp_mode;
-       if (void 0 === wD || "linear" === wD) return !1;
-       if ("catmullrom" === wD) return !0;
-       throw new fD(`${zD}: lerp_mode ${JSON.stringify(wD)} is not supported (linear or catmullrom)`)
+     function YI() {
+       var pp = wc(oI());
+       return pp.copy = function() {
+         return II(pp, YI()).exponent(pp.exponent())
+       }, Xi.b.apply(pp, arguments)
```

#### 707. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35542-L35550` → after: `L17807-L17816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17807-L17816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17807-L17816) · [Before (L35542-L35550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35542-L35550)

```diff
-     function nD(DD, zD, wD) {
-       if (QD(DD)) {
-         const pD = DD.pre,
-           sD = DD.post,
-           KD = [];
-         pD && KD.push(MD(pD, zD, wD));
-         const rD = Array.isArray(pD) && Array.isArray(sD) && pD.length === sD.length && pD.every(((DD, zD) => DD === sD[zD]));
-         if (sD && !rD && KD.push(MD(sD, zD, wD)), 0 === KD.length) throw new fD(`${wD}: a keyframe needs "post" and optionally "pre"`);
-         return KD
+     function DI() {
+       return YI.apply(null, arguments).exponent(.5)
+     }
+ 
+     function AI() {
+       var pp = [],
+         ip = ji;
+ 
+       function cp(cp) {
+         if (null != cp && !isNaN(cp = +cp)) return ip((Hp(pp, cp, 1) - 1) / (pp.length - 1))
```

#### 708. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35552` → after: `L17818-L17833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17818-L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17818-L17833) · [Before (L35552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35552)

```diff
-       return [MD(DD, zD, wD)]
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
```

#### 709. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35555-L35564` → after: `L17836-L17858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17836-L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17836-L17858) · [Before (L35555-L35564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35555-L35564)

```diff
-     function MD(DD, zD, wD) {
-       if ("number" === typeof DD || "string" === typeof DD) return [DD, DD, DD];
-       if (Array.isArray(DD)) return function(DD, zD) {
-         switch (zD) {
-           case pD.e.Position:
-             return [OD(DD[0]), DD[1], DD[2]];
-           case pD.e.Rotation:
-             return [OD(DD[0]), OD(DD[1]), DD[2]];
-           case pD.e.Scale:
-             return DD
+     function PI() {
+       var pp, ip, cp, Op, op, Ip, Sp, xp = 0,
+         Lp = .5,
+         Yp = 1,
+         Dp = 1,
+         Ap = ji,
+         Pp = !1;
+ 
+       function Wp(pp) {
+         return isNaN(pp = +pp) ? Sp : (pp = .5 + ((pp = +Ip(pp)) - ip) * (Dp * pp < Dp * ip ? Op : op), Ap(Pp ? Math.max(0, Math.min(1, pp)) : pp))
+       }
+ 
+       function yp(pp) {
+         return function(ip) {
+           var cp, Op, op;
+           return arguments.length ? ([cp, Op, op] = ip, Ap = function(pp, ip) {
+ ... (7 more added lines; see GitHub link above)
```

#### 710. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35566-L35571` → after: `L17860-L17871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17860-L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17860-L17871) · [Before (L35566-L35571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35566-L35571)

```diff
-       }(function(DD, zD) {
-         for (const wD of DD)
-           if ("number" !== typeof wD && "string" !== typeof wD) throw new fD(`${zD}: vector elements must be numbers or Molang strings`);
-         if (1 === DD.length) {
-           const zD = DD[0];
-           return [zD, zD, zD]
+       }
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

#### 711. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35579-L35580` → after: `L17875-L17879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17875-L17879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17875-L17879) · [Before (L35579-L35580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35579-L35580)

```diff
-     function OD(DD) {
-       return "number" === typeof DD ? 0 === DD ? 0 : -DD : cD(DD)
+     function WI() {
+       var pp = zi(PI()(ji));
+       return pp.copy = function() {
+         return II(pp, WI())
+       }, Xi.b.apply(pp, arguments)
```

#### 712. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35583-L35590` → after: `L17882-L17886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17882-L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17882-L17886) · [Before (L35583-L35590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35583-L35590)

```diff
-     function JD(DD) {
-       let zD = !1;
-       for (let sD = 0; sD < DD.length; sD++) {
-         const KD = DD[sD],
-           rD = DD[sD + 1];
-         void 0 !== rD && 2 === rD.dataPoints.length && (wD = KD.dataPoints[KD.dataPoints.length - 1], pD = rD.dataPoints[0], String(wD[0]) === String(pD[0]) && String(wD[1]) === String(pD[1]) && String(wD[2]) === String(pD[2])) ? (rD.dataPoints.splice(0, 1), ED(KD), zD = !0) : vo … [truncated]
-       }
-       var wD, pD
+     function yI() {
+       var pp = Sc(PI()).domain([.1, 1, 10]);
+       return pp.copy = function() {
+         return II(pp, yI()).base(pp.base())
+       }, Xi.b.apply(pp, arguments)
```

#### 713. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35593-L35594` → after: `L17889-L17893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17889-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17889-L17893) · [Before (L35593-L35594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35593-L35594)

```diff
-     function ED(DD) {
-       DD.step = !0, DD.catmullRom = !1
+     function UI() {
+       var pp = Dc(PI());
+       return pp.copy = function() {
+         return II(pp, UI()).constant(pp.constant())
+       }, Xi.b.apply(pp, arguments)
```

#### 714. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35597-L35598` → after: `L17896-L17900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17896-L17900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17896-L17900) · [Before (L35597-L35598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35597-L35598)

```diff
-     function QD(DD) {
-       return "object" === typeof DD && null !== DD && !Array.isArray(DD)
+     function wI() {
+       var pp = wc(PI());
+       return pp.copy = function() {
+         return II(pp, wI()).exponent(pp.exponent())
+       }, Xi.b.apply(pp, arguments)
```

#### 715. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35803` → after: `L17904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17904) · [Before (L35803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35803)

```diff
-       return Yz ??= (0, tz.p)(Fz, "builtIn"), Yz
+       return wI.apply(null, arguments).exponent(.5)
```

#### 716. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35805-L35820` → after: `L17906-L18086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17906-L18086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L17906-L18086) · [Before (L35805-L35820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35805-L35820)

```diff
-   },
-   37358: (DD, zD, wD) => {
-     function pD(DD, zD, wD) {
-       if ("+" !== DD && "-" !== DD && "*" !== DD && "/" !== DD) return null;
-       const pD = zD.evaluate,
-         sD = wD.evaluate,
-         KD = wD.constant;
-       if (null !== KD) {
-         if ("/" === DD) return 0 === KD ? () => 0 : DD => pD(DD) / KD;
-         if (void 0 !== zD.query) {
-           const wD = zD.query;
-           switch (DD) {
-             case "+":
-               return DD => DD.queries[wD] + KD;
-             case "-":
-               return DD => DD.queries[wD] - KD
+ 
+     function tI(pp, ip) {
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
+ ... (165 more added lines; see GitHub link above)
```

#### 717. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35824-L35830` → after: `L18089-L18100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18089-L18100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18089-L18100) · [Before (L35824-L35830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L35824-L35830)

```diff
-         if (void 0 !== zD.variable) {
-           const wD = zD.variable;
-           switch (DD) {
-             case "+":
-               return DD => DD.variables[wD] + KD;
-             case "-":
-               return DD => DD.variables[wD] - KD
+ 
+         function kp(pp, ip) {
+           return function(cp) {
+             var Op, op, Ip = RO(1900, void 0, 1);
+             if (mp(Ip, pp, cp += "", 0) != cp.length) return null;
+             if ("Q" in Ip) return new Date(Ip.Q);
+             if ("s" in Ip) return new Date(1e3 * Ip.s + ("L" in Ip ? Ip.L : 0));
+             if (ip && !("Z" in Ip) && (Ip.Z = 0), "p" in Ip && (Ip.H = Ip.H % 12 + 12 * Ip.p), void 0 === Ip.m && (Ip.m = "q" in Ip ? Ip.q : 0), "V" in Ip) {
+               if (Ip.V < 1 || Ip.V > 53) return null;
+               "w" in Ip || (Ip.w = 1), "Z" in Ip ? (op = (Op = mO(RO(Ip.y, 0, 1))).getUTCDay(), Op = op > 4 || 0 === op ? YO.ceil(Op) : YO(Op), Op = sc.offset(Op, 7 * (Ip.V - 1)), Ip.y = Op.getUTCFullYear(), Ip.m = Op.getUTCMonth(), Ip.d = Op.getUTCDate() + (Ip.w + 6) % 7) : (op  … [truncated]
+             } else("W" in Ip || "U" in Ip) && ("w" in Ip || (Ip.w = "u" in Ip ? Ip.u % 7 : "W" in Ip ? 1 : 0), op = "Z" in Ip ? mO(RO(Ip.y, 0, 1)).getUTCDay() : kO(RO(Ip.y, 0, 1)).getDay(), Ip.m = 0, Ip.d = "W" in Ip ? (Ip.w + 6) % 7 + 7 * Ip.W - (op + 5) % 7 : Ip.w + 7 * Ip.U -  … [truncated]
+             return "Z" in Ip ? (Ip.H += Ip.Z / 100 | 0, Ip.M += Ip.Z % 100, mO(Ip)) : kO(Ip)
```

#### 718. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36053-L36125` → after: `L18103-L18109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18103-L18109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18103-L18109) · [Before (L36053-L36125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36053-L36125)

```diff
-       },
-       ED = new Set(["&&", "||", "==", "!=", "<=", ">=", "<", ">", "!", "+", "-", "*", "/", "?", ":", "(", ")", ",", ";"]),
-       QD = new Map([
-         ["??", "the null-coalescing operator '??' is not supported"],
-         ["->", "the arrow operator '->' is not supported"],
-         ["=", "assignment is not supported"],
-         ["{", "statement blocks are not supported"],
-         ["}", "statement blocks are not supported"],
-         ["[", "arrays are not supported"],
-         ["]", "arrays are not supported"],
-         ["'", "strings are not supported"],
-         ['"', "strings are not supported"],
-         ["%", "the '%' operator is not supported; use math.mod"]
-       ]),
-       XD = new Map([
-         ["this", "'this' is not supported"],
- ... (57 more removed lines; see GitHub link above)
+ 
+         function mp(pp, ip, cp, Op) {
+           for (var op, Ip, Sp = 0, xp = ip.length, Lp = cp.length; Sp < xp;) {
+             if (Op >= Lp) return -1;
+             if (37 === (op = ip.charCodeAt(Sp++))) {
+               if (op = ip.charAt(Sp++), !(Ip = ep[op in EO ? ip.charAt(Sp++) : op]) || (Op = Ip(pp, cp, Op)) < 0) return -1
+             } else if (op != cp.charCodeAt(Op++)) return -1
```

#### 719. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36127-L36135` → after: `L18111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18111) · [Before (L36127-L36135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36127-L36135)

```diff
-           const rD = [DD.slice(wD, wD + 2), pD].find((DD => ED.has(DD) || QD.has(DD)));
-           if (void 0 === rD) throw new jD(`unexpected character '${pD}'`, wD);
-           const LD = QD.get(rD);
-           if (void 0 !== LD) throw new jD(LD, wD);
-           zD.push({
-             kind: bD.Operator,
-             text: rD,
-             offset: wD
-           }), wD += rD.length
+           return Op
```

#### 720. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36137-L36163` → after: `L18113-L18151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18113-L18151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18113-L18151) · [Before (L36137-L36163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36137-L36163)

```diff
-         return zD.push({
-           kind: bD.End,
-           text: "",
-           offset: DD.length
-         }), zD
-       },
-       iD = DD => DD.kind === bD.End ? "end of expression" : `'${DD.text}'`;
-     let lD = function(DD) {
-       return DD[DD.AnimTime = 0] = "AnimTime", DD[DD.LifeTime = 1] = "LifeTime", DD[DD.DeltaTime = 2] = "DeltaTime", DD[DD.GroundSpeed = 3] = "GroundSpeed", DD[DD.ModifiedDistanceMoved = 4] = "ModifiedDistanceMoved", DD[DD.ModifiedMoveSpeed = 5] = "ModifiedMoveSpeed", DD[DD.Verti … [truncated]
-     }({});
-     const WD = 1024,
-       ND = new Map([
-         ["anim_time", lD.AnimTime],
-         ["life_time", lD.LifeTime],
-         ["delta_time", lD.DeltaTime],
-         ["ground_speed", lD.GroundSpeed],
- ... (11 more removed lines; see GitHub link above)
+         return Hp.x = jp(cp, Hp), Hp.X = jp(Op, Hp), Hp.c = jp(ip, Hp), dp.x = jp(cp, dp), dp.X = jp(Op, dp), dp.c = jp(ip, dp), {
+           format: function(pp) {
+             var ip = jp(pp += "", Hp);
+             return ip.toString = function() {
+               return pp
+             }, ip
+           },
+           parse: function(pp) {
+             var ip = kp(pp += "", !1);
+             return ip.toString = function() {
+               return pp
+             }, ip
+           },
+           utcFormat: function(pp) {
+             var ip = jp(pp += "", dp);
+             return ip.toString = function() {
+ ... (23 more added lines; see GitHub link above)
```

#### 721. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36166-L36336` → after: `L18154-L18155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18154-L18155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18154-L18155) · [Before (L36166-L36336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36166-L36336)

```diff
-       return {
-         constant: DD,
-         readsClock: !1,
-         readsAnimTime: !1,
-         cost: 0,
-         evaluate: () => DD
-       }
-     }
-     class kD {
-       constructor(DD, zD) {
-         this.tokens = DD, this.variableSlots = zD, this.index = 0, this.depth = 0, this.nodeCount = 0, this.readsClock = !1, this.readsAnimTime = !1
-       }
-       get nodes() {
-         return this.nodeCount
-       }
-       parseProgram() {
- ... (155 more removed lines; see GitHub link above)
+       for (var ip = pp.length, cp = new Array(ip); --ip >= 0;) cp[ip] = ip;
+       return cp
```

#### 722. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36340-L36358` → after: `L18159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18159) · [Before (L36340-L36358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36340-L36358)

```diff
-       try {
-         if (DD.length > WD) throw new jD(`expression is longer than ${WD} characters`, WD);
-         if ("" === DD.trim()) return {
-           ok: !0,
-           value: yD(0)
-         };
-         const wD = new kD(SD(DD), zD.variableSlots),
-           pD = wD.parseProgram();
-         return {
-           ok: !0,
-           value: null === pD.constant ? new eD(pD.evaluate, wD.readsClock, wD.readsAnimTime, wD.nodes) : yD(mD(pD.constant))
-         }
-       } catch (wD) {
-         if (wD instanceof jD) return {
-           ok: !1,
-           error: `${wD.message} at offset ${wD.offset}`
- ... (3 more removed lines; see GitHub link above)
+       return pp[ip]
```

#### 723. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36371-L36372` → after: `L18163-L18164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18163-L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18163-L18164) · [Before (L36371-L36372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36371-L36372)

```diff
-       if ("nK" in DD) return ED.createAnimationScript(DD);
-       return new gD(DD).createAnimationScript()
+       const ip = [];
+       return ip.key = pp, ip
```

#### 724. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36375-L36377` → after: `L18191-L18205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18191-L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18191-L18205) · [Before (L36375-L36377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36375-L36377)

```diff
-     function LD(DD, zD, wD, sD) {
-       const KD = DD.nK <= 0 ? 1 : zD + wD * Math.max(0, sD) / DD.nK;
-       return DD.MK === pD.h.LoopOnLastFrame ? KD % 1 : DD.MK === pD.h.NoLoop && KD >= 1 ? null : Math.min(1, KD)
+     function zI(pp) {
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

#### 725. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36379-L36461` → after: `L18207-L18211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18207-L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18207-L18211) · [Before (L36379-L36461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36379-L36461)

```diff
-     class cD {
-       createAnimationScript(DD) {
-         const {
-           nK: zD,
-           loop: wD,
-           JK: pD
-         } = DD;
-         return {
-           nK: Math.round(zD),
-           MK: this.createLoopMode(null !== wD && void 0 !== wD && wD),
-           JK: this.createNodeSkeletonAnimationScript(null !== pD && void 0 !== pD ? pD : null)
-         }
-       }
-       createLoopMode(DD) {
-         switch (DD) {
-           case !1:
- ... (67 more removed lines; see GitHub link above)
+ 
+     function sI(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 726. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36463-L36549` → after: `L18213-L18224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18213-L18224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18213-L18224) · [Before (L36463-L36549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36463-L36549)

```diff
-     cD.LERP_MODE_SCHEMA_MAPPING = {
-       linear: pD.e.Linear,
-       "catmull-rom-spline": pD.e.CatmullRomSpline
-     };
-     class gD {
-       constructor(DD) {
-         this.animationSchema = DD
-       }
-       createAnimationScript() {
-         const {
-           animation_length: DD,
-           loop: zD,
-           bones: wD
-         } = this.animationSchema;
-         return {
-           nK: Math.round(1e3 * DD),
- ... (71 more removed lines; see GitHub link above)
+     var KI = function(pp) {
+         return pp
+       },
+       VI = {
+         "@@functional/placeholder": !0
+       },
+       pS = function(pp) {
+         return pp === VI
+       },
+       iS = function(pp) {
+         return function ip() {
+           return 0 === arguments.length || 1 === arguments.length && pS(arguments.length <= 0 ? void 0 : arguments[0]) ? ip : pp.apply(void 0, arguments)
```

#### 727. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36552-L36560` → after: `L18248-L18263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18248-L18263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18248-L18263) · [Before (L36552-L36560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36552-L36560)

```diff
-       }
-       createAnimationFrameWithoutPrecomputes(DD, zD, wD) {
-         let pD, sD, KD = null;
-         if ("object" === typeof zD && "post" in zD) {
-           var rD;
-           KD = null !== (rD = zD.lerp_mode) && void 0 !== rD ? rD : null, sD = BD(zD.post, wD), pD = zD.pre ? BD(zD.pre, wD) : sD
-         } else {
-           const DD = BD(zD, wD);
-           sD = DD, pD = DD
+       },
+       IS = OS((function(pp, ip) {
+         return Array.isArray(ip) ? ip.map(pp) : Object.keys(ip).map((function(pp) {
+           return ip[pp]
+         })).map(pp)
+       })),
+       SS = function() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         if (!ip.length) return KI;
+         var Op = ip.reverse(),
+           op = Op[0],
+           Ip = Op.slice(1);
+         return function() {
+           return Ip.reduce((function(pp, ip) {
+             return ip(pp)
+           }), op.apply(void 0, arguments))
```

#### 728. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36562-L36566` → after: `L18265-L18276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18265-L18276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18265-L18276) · [Before (L36562-L36566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36562-L36566)

```diff
-         return {
-           timeFraction: DD,
-           XK: this.createLerpMode(KD),
-           pre: pD,
-           post: sD
+       },
+       xS = function(pp) {
+         return Array.isArray(pp) ? pp.reverse() : pp.split("").reverse.join("")
+       },
+       LS = function(pp) {
+         var ip = null,
+           cp = null;
+         return function() {
+           for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
+           return ip && op.every((function(pp, cp) {
+             return pp === ip[cp]
+           })) ? cp : (ip = op, cp = pp.apply(void 0, op))
```

#### 729. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36568-L36572` → after: `L18278-L18299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18278-L18299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18278-L18299) · [Before (L36568-L36572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36568-L36572)

```diff
-       }
-       createLerpMode(DD) {
-         return null === DD ? pD.e.Linear : gD.LERP_MODE_SCHEMA_MAPPING[DD]
-       }
-     }
+       };
+     const YS = {
+       rangeStep: function(pp, ip, cp) {
+         for (var Op = new(ZI())(pp), op = 0, Ip = []; Op.lt(ip) && op < 1e5;) Ip.push(Op.toNumber()), Op = Op.add(cp), op++;
+         return Ip
+       },
+       getDigitCount: function(pp) {
+         return 0 === pp ? 1 : Math.floor(new(ZI())(pp).abs().log(10).toNumber()) + 1
+       },
+       interpolateNumber: OS((function(pp, ip, cp) {
+         var Op = +pp;
+         return Op + cp * (+ip - Op)
+       })),
+       uninterpolateNumber: OS((function(pp, ip, cp) {
+         var Op = ip - +pp;
+         return (cp - pp) / (Op = Op || 1 / 0)
+ ... (6 more added lines; see GitHub link above)
```

#### 730. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36575` → after: `L18302-L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18302-L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18302-L18308) · [Before (L36575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36575)

```diff
-       return Number.isFinite(DD.timeFraction) && AD(DD.pre) && AD(DD.post)
+       return function(pp) {
+         if (Array.isArray(pp)) return WS(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(pp)) return Array.from(pp)
+       }(pp) || PS(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 731. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36578-L36579` → after: `L18311-L18334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18311-L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18311-L18334) · [Before (L36578-L36579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36578-L36579)

```diff
-     function AD(DD) {
-       return Number.isFinite(DD[0]) && Number.isFinite(DD[1]) && Number.isFinite(DD[2])
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

#### 732. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36582-L36590` → after: `L18337-L18341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18337-L18341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18337-L18341) · [Before (L36582-L36590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36582-L36590)

```diff
-     function UD(DD, zD, wD, pD, sD, KD, rD, LD) {
-       const cD = KD - zD,
-         gD = KD - pD,
-         RD = LD - pD,
-         AD = [null, null, null];
-       for (let UD = 0; UD < AD.length; UD++) AD[UD] = fD(DD[UD], wD[UD], sD[UD], rD[UD], cD, RD);
-       return {
-         VK: gD,
-         PK: AD
+     function PS(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return WS(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? WS(pp, ip) : void 0
```

#### 733. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36594-L36599` → after: `L18345-L18348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18345-L18348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18345-L18348) · [Before (L36594-L36599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36594-L36599)

```diff
-     function fD(DD, zD, wD, pD, KD, rD) {
-       return {
-         xK: sD.c.computeShortestRotation(DD, wD) / KD,
-         TK: sD.c.computeShortestRotation(zD, pD) / rD,
-         delta: sD.c.computeShortestRotation(zD, wD)
-       }
+     function WS(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 734. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36602-L36615` → after: `L18351-L18357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18351-L18357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18351-L18357) · [Before (L36602-L36615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36602-L36615)

```diff
-     function ID(DD, zD, wD, pD, sD, KD, rD, LD) {
-       const cD = KD - zD,
-         gD = KD - pD,
-         RD = LD - pD,
-         AD = [null, null, null];
-       for (let UD = 0; UD < AD.length; UD++) AD[UD] = {
-         xK: (sD[UD] - DD[UD]) / cD,
-         TK: (rD[UD] - wD[UD]) / RD,
-         delta: sD[UD] - wD[UD]
-       };
-       return {
-         VK: gD,
-         PK: AD
-       }
+     function yS(pp) {
+       var ip = AS(pp, 2),
+         cp = ip[0],
+         Op = ip[1],
+         op = cp,
+         Ip = Op;
+       return cp > Op && (op = Op, Ip = cp), [op, Ip]
```

#### 735. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36618-L36619` → after: `L18360-L18367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18360-L18367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18360-L18367) · [Before (L36618-L36619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36618-L36619)

```diff
-     function BD(DD, zD) {
-       return null === zD ? DD : zD(DD)
+     function US(pp, ip, cp) {
+       if (pp.lte(0)) return new(ZI())(0);
+       var Op = YS.getDigitCount(pp.toNumber()),
+         op = new(ZI())(10).pow(Op),
+         Ip = pp.div(op),
+         Sp = 1 !== Op ? .05 : .1,
+         xp = new(ZI())(Math.ceil(Ip.div(Sp).toNumber())).add(cp).mul(Sp).mul(op);
+       return ip ? xp : new(ZI())(Math.ceil(xp))
```

#### 736. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36622-L36624` → after: `L18370-L18380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18370-L18380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18370-L18380) · [Before (L36622-L36624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36622-L36624)

```diff
-     function GD(DD) {
-       const [zD, wD, pD] = DD, rD = -(0, KD.l)(zD), LD = -(0, KD.l)(wD), cD = (0, KD.l)(pD), gD = sD.c.quaternionFromEulerZYX(rD, LD, cD);
-       return sD.c.eulerYXZFromQuaternion(gD)
+     function wS(pp, ip, cp) {
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

#### 737. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36632-L36633` → after: `L18383-L18399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18383-L18399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18383-L18399) · [Before (L36632-L36633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36632-L36633)

```diff
-     function nD(DD) {
-       return [-DD[0] * hD, DD[1] * hD, DD[2] * hD]
+     function vS(pp, ip, cp, Op) {
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
+ ... (1 more added lines; see GitHub link above)
```

#### 738. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36637-L36638` → after: `L18467-L18471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18467-L18471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18467-L18471) · [Before (L36637-L36638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36637-L36638)

```diff
-       const [zD, wD, pD] = DD;
-       return [zD >= 0 ? Math.PI - zD : -Math.PI - zD, OD(wD + Math.PI), OD(pD + Math.PI)]
+       return kS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, kS(pp)
```

#### 739. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36642` → after: `L18475-L18488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18475-L18488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18475-L18488) · [Before (L36642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36642)

```diff
-       return sD.c.mod(DD + Math.PI, 2 * Math.PI) - Math.PI
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

#### 740. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36646` → after: `L18492-L18494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18492-L18494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18492-L18494) · [Before (L36646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36646)

```diff
-       return Math.abs(sD.c.computeShortestRotation(DD[0], zD[0])) + Math.abs(sD.c.computeShortestRotation(DD[1], zD[1])) + Math.abs(sD.c.computeShortestRotation(DD[2], zD[2]))
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 741. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36660-L36677` → after: `L18497-L18503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18497-L18503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18497-L18503) · [Before (L36660-L36677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36660-L36677)

```diff
-     function LD(DD) {
-       return {
-         name: "collideEntitiesProjectile",
-         order: 70,
-         state: {
-           callback: null,
-           _lastPos: null
-         },
-         ZJ: function(DD, zD) {},
-         hT: null,
-         system: function(zD, wD) {
-           ! function(DD) {
-             const zD = DD.yJ.rW("collideEntitiesProjectile");
-             if (0 === zD.length) return;
-             const wD = UD(DD);
-             for (const pD of zD) pD && AD(DD, pD, wD)
- ... (2 more removed lines; see GitHub link above)
+     function qS(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 742. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36681-L36687` → after: `L18508-L18517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18508-L18517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18508-L18517) · [Before (L36681-L36687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36681-L36687)

```diff
-     function cD(DD, zD) {
-       var wD;
-       const pD = UD(DD),
-         KD = DD.yJ.Vk(zD),
-         rD = DD.yJ.AY(zD),
-         LD = [KD.wU.base[0] + rD.width / 2, KD.wU.base[1] + rD.height / 2, KD.wU.base[2] + rD.width / 2];
-       sD().add(LD, LD, null !== (wD = rD.CU) && void 0 !== wD ? wD : DD.CU), AD(DD, DD.yJ.getState(zD, "collideEntitiesProjectile"), pD, LD)
+     function MS(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? qS(Object(cp), !0).forEach((function(ip) {
+           CS(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qS(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 743. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36693-L36706` → after: `L18521-L18538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18521-L18538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18521-L18538) · [Before (L36693-L36706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36693-L36706)

```diff
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.yJ.PJ(zD.cW);
-       if (null === zD._lastPos) return void(zD._lastPos = sD().clone(pD));
-       sD().sub(gD, pD, zD._lastPos);
-       const KD = sD().length(gD);
-       0 === KD && (gD[0] = 1e-4);
-       for (let sD = 0; sD < RD.length; sD++) {
-         const pD = wD[sD];
-         if (!DD.yJ.aDD(pD.cW, "collideEntities")) continue;
-         if (!pD.cpD) continue;
-         const AD = rD().distance(zD._lastPos, gD, RD[sD]);
-         if (LD = zD._lastPos, cD = RD[sD], (LD[0] >= cD[0][0] && LD[0] <= cD[1][0] && LD[1] >= cD[0][1] && LD[1] <= cD[1][1] && LD[2] >= cD[0][2] && LD[2] <= cD[1][2] || Math.abs(AD) <= KD) && (zD.callback(pD.cW), !DD.yJ.aDD(zD.cW, "collideEntitiesProjectile"))) break
-       }
-       var LD, cD;
-       sD().copy(zD._lastPos, pD)
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

#### 744. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36709-L36763` → after: `L18541-L18542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18541-L18542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18541-L18542) · [Before (L36709-L36763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36709-L36763)

```diff
-     function UD(DD) {
-       const zD = DD.yJ.rW("collideEntities");
-       for (let KD = 0; KD < zD.length; KD++) {
-         var wD, pD;
-         const rD = DD.yJ.AY(zD[KD].cW),
-           LD = zD[KD].rpD / 2,
-           cD = zD[KD].LpD / 2;
-         RD[KD] = [
-           [rD.ewD[0] - LD, rD.ewD[1] - cD, rD.ewD[2] - LD],
-           [rD.ewD[3] + LD, rD.ewD[4] + cD, rD.ewD[5] + LD]
-         ], sD().add(RD[KD][0], RD[KD][0], null !== (wD = rD.CU) && void 0 !== wD ? wD : DD.CU), sD().add(RD[KD][1], RD[KD][1], null !== (pD = rD.CU) && void 0 !== pD ? pD : DD.CU)
-       }
-       return RD.length = zD.length, zD.slice()
-     }
-   },
-   37661: (DD, zD, wD) => {
- ... (39 more removed lines; see GitHub link above)
+     function ES(pp, ip, cp) {
+       return CI()(pp) || CI()(ip) ? cp : (0, eS.B)(ip) ? BI()(pp, ip, cp) : XI()(ip) ? ip(pp) : cp
```

#### 745. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36767-L36769` → after: `L18545-L18559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18545-L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18545-L18559) · [Before (L36767-L36769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36767-L36769)

```diff
-     function gD(DD) {
-       const zD = DD.yJ.gzD(DD.vW);
-       return LD && cD && (zD.isInCobweb !== LD || zD.isInFluid !== cD)
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

#### 746. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36771-L36778` → after: `L18561-L18937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18561-L18937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18561-L18937) · [Before (L36771-L36778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36771-L36778)

```diff
- 
-     function RD(DD) {
-       return {
-         name: "movement",
-         order: 30,
-         stateConstructor: rD,
-         ZJ: (zD, wD) => {
-           wD.AU = DD, LD = wD.isInCobweb, cD = wD.isInFluid
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
+ ... (361 more added lines; see GitHub link above)
```

#### 747. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36780-L36852` → after: `L18939-L18961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18939-L18961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18939-L18961) · [Before (L36780-L36852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36780-L36852)

```diff
-         hT: null,
-         system: function(DD, zD) {}
-       }
-     }
-   },
-   37245: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD
-     });
-     const pD = {
-       opacity: 1,
-       zIndex: 0,
-       overlayColour: null,
-       canAttack: !1,
-       canSee: !0,
-       interactable: !1,
- ... (57 more removed lines; see GitHub link above)
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
+         },
+         positive: function(pp) {
+ ... (7 more added lines; see GitHub link above)
```

#### 748. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36854-L36903` → after: `L18963-L18973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18963-L18973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18963-L18973) · [Before (L36854-L36903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36854-L36903)

```diff
-         if (DD(zD + KD, wD + rD, pD + cD)) return !0
-       }
-       return !1
-     }
-     const gD = .15,
-       RD = .95,
-       AD = .35;
- 
-     function UD(DD) {
-       const zD = sD.l[DD];
-       return !!zD && (!(DD in KD.g) && (zD.model ? "Slab" === zD.model : !zD.twoDBlockItem))
-     }
- 
-     function fD(DD, zD, wD) {
-       const pD = zD - DD;
-       if (pD <= 0) return RD;
- ... (34 more removed lines; see GitHub link above)
+       },
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
```

#### 749. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36905-L36909` → after: `L18975-L19062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18975-L19062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L18975-L19062) · [Before (L36905-L36909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36905-L36909)

```diff
-     function LD(DD) {
-       for (let zD = 0; zD < KD.k; zD++)
-         if (rD(DD.getItemAtIdx(zD))) return zD;
-       return null
-     }
+             function op(op) {
+               var Ip, Sp, xp = Array.from(pp.apply(this, arguments), jI),
+                 Lp = xp.length,
+                 Yp = -1;
+               for (const pp of op)
+                 for (Ip = 0, ++Yp; Ip < Lp; ++Ip)(xp[Ip][Yp] = [0, +Op(pp, xp[Ip].key, Yp, op)]).data = pp;
+               for (Ip = 0, Sp = (0, HI.d)(ip(xp)); Ip < Lp; ++Ip) xp[Sp[Ip]].index = Ip;
+               return cp(xp, Sp), xp
+             }
+             return op.keys = function(ip) {
+               return arguments.length ? (pp = "function" === typeof ip ? ip : (0, dI.c)(Array.from(ip)), op) : pp
+             }, op.value = function(pp) {
+               return arguments.length ? (Op = "function" === typeof pp ? pp : (0, dI.c)(+pp), op) : Op
+             }, op.order = function(pp) {
+               return arguments.length ? (ip = null == pp ? eI : "function" === typeof pp ? pp : (0, dI.c)(Array.from(pp)), op) : ip
+             }, op.offset = function(pp) {
+ ... (72 more added lines; see GitHub link above)
```

#### 750. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36912-L36916` → after: `L19065-L19076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19065-L19076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19065-L19076) · [Before (L36912-L36916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36912-L36916)

```diff
-       let zD = 0;
-       for (let pD = 0; pD < KD.k; pD++) {
-         const sD = DD.getItemAtIdx(pD);
-         var wD;
-         if (rD(sD)) zD += null !== (wD = sD.amount) && void 0 !== wD ? wD : 1
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
+         }
+         return cp[Ip] ? cp[Ip].coordinate + Op / 2 : null
```

#### 751. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36918` → after: `L19078-L19079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19078-L19079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19078-L19079) · [Before (L36918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36918)

```diff
-       return zD
+       var Lp = ES(op, CI()(Sp) ? ip.dataKey : Sp);
+       return CI()(Lp) ? null : ip.scale(Lp)
```

#### 752. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36920-L36927` → after: `L19081-L19184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19081-L19184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19081-L19184) · [Before (L36920-L36927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36920-L36927)

```diff
- 
-     function gD(DD, zD, wD, KD) {
-       if (wD !== pD.o.GLIDING && KD !== pD.o.GLIDING) return;
-       const rD = DD.yJ.gzD(zD);
-       if (rD.gliderFuelCooldownEnd = 0, wD === pD.o.GLIDING) {
-         var cD;
-         const wD = null === (cD = DD.yJ.bzD(zD)) || void 0 === cD ? void 0 : cD.inventory;
-         wD && null !== LD(wD) && DD.bloxd.startGliderFuelCooldown(zD, rD, sD.e.getFirecrackerCooldownMultiplier(wD.getItemAtSelectedSlot()))
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
+       },
+       ox = function(pp) {
+         var ip = pp.numericAxis,
+           cp = ip.scale.domain();
+         if ("number" === ip.type) {
+           var Op = Math.min(cp[0], cp[1]),
+ ... (88 more added lines; see GitHub link above)
```

#### 753. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36931` → after: `L19187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19187) · [Before (L36931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36931)

```diff
-   37982: (DD, zD, wD) => {
+   6264: (pp, ip, cp) => {
```

#### 754. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36933-L36939` → after: `L19189-L19190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19189-L19190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19189-L19190) · [Before (L36933-L36939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36933-L36939)

```diff
-       e: () => KD,
-       h: () => cD,
-       k: () => rD,
-       o: () => gD,
-       p: () => AD,
-       r: () => RD,
-       s: () => sD
+       c: () => Pp,
+       g: () => Ap
```

#### 755. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36941-L36946` → after: `L19192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19192) · [Before (L36941-L36946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36941-L36946)

```diff
-     var pD = wD(4263);
- 
-     function sD(DD) {
-       const zD = new pD.g(`blockBreakDrop|${DD}`);
-       return () => zD.next()
-     }
+     var Op = cp(6115);
```

#### 756. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36949` → after: `L19195-L19199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19195-L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19195-L19199) · [Before (L36949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36949)

```diff
-       DD.gravityMultiplier = 2, DD.friction = 4, DD.Ug = .02, DD.XU = 0, DD.fluidDrag = .2
+       return op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, op(pp)
```

#### 757. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36953-L36967` → after: `L19203-L19210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19203-L19210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19203-L19210) · [Before (L36953-L36967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36953-L36967)

```diff
-       return [DD[0] + .2 * zD() + .4, DD[1] + .5, DD[2] + .2 * zD() + .4]
-     }
-     const LD = .01;
- 
-     function cD(DD) {
-       return [LD - DD() * LD * 2, .05, LD - DD() * LD * 2]
-     }
- 
-     function gD(DD) {
-       const zD = Math.hypot(DD[0], DD[1], DD[2]);
-       return zD > 0 && Number.isFinite(zD) ? [DD[0] / zD, DD[1] / zD, DD[2] / zD] : null
-     }
- 
-     function RD(DD, zD) {
-       return [DD[0] + .5 * zD[0], DD[1] + .5 * zD[1], DD[2] + .5 * zD[2]]
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 758. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36971-L37003` → after: `L19214-L19220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19214-L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19214-L19220) · [Before (L36971-L37003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L36971-L37003)

```diff
-       return [3.5 / 30 * DD[0], 7 / 30 * DD[1], 3.5 / 30 * DD[2]]
-     }
-   },
-   38455: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => KD,
-       g: () => RD
-     });
-     var pD = wD(38448),
-       sD = wD(38463);
-     const KD = .6,
-       rD = .2,
-       LD = .5,
-       cD = .3,
-       gD = .6;
- 
- ... (17 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ip(Object(cp), !0).forEach((function(ip) {
+           xp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ip(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 759. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37018-L37028` → after: `L19226-L19243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19226-L19243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19226-L19243) · [Before (L37018-L37028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37018-L37028)

```diff
-       return `${DD}|${zD}|${wD}`
-     }
- 
-     function LD(DD) {
-       const [zD, wD, pD] = DD.split("|");
-       return [Number(zD), Number(wD), Number(pD)]
-     }
-     const cD = wD(197).f.CI;
- 
-     function gD(DD) {
-       return KD()(DD, [cD, cD, cD])
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

#### 760. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37030-L37071` → after: `L19245-L19247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19245-L19247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19245-L19247) · [Before (L37030-L37071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37030-L37071)

```diff
-     const RD = KD()(new Uint16Array(cD * cD * cD), [cD, cD, cD]);
-     pD.encode(RD.data)
-   },
-   37624: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => VD,
-       f: () => XD,
-       k: () => TD,
-       g: () => xD,
-       l: () => bD,
-       p: () => PD,
-       q: () => dD,
-       s: () => jD
-     });
-     var pD = wD(6520),
-       sD = wD(37628),
- ... (26 more removed lines; see GitHub link above)
+     var Lp = {
+         widthCache: {},
+         cacheCount: 0
```

#### 761. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37074-L37096` → after: `L19250-L19290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19250-L19290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19250-L19290) · [Before (L37074-L37096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37074-L37096)

```diff
-         [pD.i.WOOD]: {},
-         [pD.i.OBSIDIAN]: {
-           effect: {
-             name: "Boating",
-             icon: "Obsidian Boating"
-           }
-         },
-         [pD.i.SPEED]: {
-           fluidSpeedMultiplier: 60,
-           airSpeedMultiplier: 56,
-           movementForceMultiplier: .07,
-           steering: {
-             turnRate: 1.6,
-             corneringSpeedDamping: .2,
-             gripStrength: 4.5,
-             gripInFluid: !0
- ... (7 more removed lines; see GitHub link above)
+         position: "absolute",
+         top: "-20000px",
+         left: 0,
+         padding: 0,
+         margin: 0,
+         border: "none",
+         whiteSpace: "pre"
+       },
+       Dp = "recharts_measurement_span";
+     var Ap = function(pp) {
+         var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         if (void 0 === pp || null === pp || Op.e.isSsr) return {
+           width: 0,
+           height: 0
+         };
+         var cp = function(pp) {
+ ... (25 more added lines; see GitHub link above)
```

#### 762. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37100-L37172` → after: `L19294-L19297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19294-L19297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19294-L19297) · [Before (L37100-L37172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37100-L37172)

```diff
-       cD = {
-         turnRate: 3,
-         corneringSpeedDamping: .25,
-         gripStrength: 10,
-         gripInFluid: !1
-       },
-       gD = {
-         Ug: 2.5,
-         fluidDrag: 1,
-         fluidDragHorizontal: 1,
-         fluidDragVertical: 0,
-         gravityMultiplier: 3,
-         width: .25,
-         height: 1.1,
-         canRun: !1,
-         jumpMultiplier: 2.25,
- ... (57 more removed lines; see GitHub link above)
+       Pp = function(pp) {
+         return {
+           top: pp.top + window.scrollY - document.documentElement.clientTop,
+           left: pp.left + window.scrollX - document.documentElement.clientLeft
```

#### 763. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37175-L37203` → after: `L19300-L19328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19300-L19328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19300-L19328) · [Before (L37175-L37203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37175-L37203)

```diff
-     }
-     const fD = {
-       [pD.j.KART]: {},
-       [pD.j.OFF_ROADER]: AD,
-       [pD.j.CAR]: {
-         Ug: 2.75,
-         gravityMultiplier: 3.5,
-         jumpMultiplier: 2.625,
-         speedMultiplier: 11,
-         fluidSpeedMultiplier: .0367,
-         riderOffset: [0, 0, -.25],
-         effect: {
-           name: "Driving",
-           icon: "Light Blue Car"
-         },
-         horizontalBounciness: .45,
- ... (13 more removed lines; see GitHub link above)
+   },
+   5299: (pp, ip, cp) => {
+     cp.d(ip, {
+       B: () => vp,
+       D: () => Up,
+       F: () => yp,
+       I: () => Wp,
+       J: () => Hp,
+       e: () => qp,
+       h: () => mp,
+       k: () => ep,
+       n: () => Rp,
+       r: () => dp,
+       t: () => jp,
+       x: () => kp,
+       z: () => wp
+ ... (13 more added lines; see GitHub link above)
```

#### 764. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37205-L37267` → after: `L19330-L19331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19330-L19331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19330-L19331) · [Before (L37205-L37267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37205-L37267)

```diff
-       [pD.j.GOLD_MINING_DRILL]: UD("Gold Mining Drill", 5),
-       [pD.j.IRON_MINING_DRILL]: UD("Iron Mining Drill", 4),
-       [pD.j.DIAMOND_MINING_DRILL]: UD("Diamond Mining Drill", 6),
-       [pD.j.MOONSTONE_MINING_DRILL]: UD("Moonstone Mining Drill", 7),
-       [pD.j.ARMORED_CAR]: {
-         Ug: 4.5,
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
+       yp = function(pp) {
+         return op()(pp) && pp.indexOf("%") === pp.length - 1
```

#### 765. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37269-L37279` → after: `L19333-L19334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19333-L19334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19333-L19334) · [Before (L37269-L37279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37269-L37279)

```diff
-       GD = {
-         [pD.k.WOOD]: {},
-         [pD.k.IRON]: {
-           airborneMovement: ID(17)
-         },
-         [pD.k.GOLD]: {
-           airborneMovement: ID(21)
-         },
-         [pD.k.DIAMOND]: {
-           airborneMovement: ID(25)
-         }
+       Up = function(pp) {
+         return Dp()(pp) && !Sp()(pp)
```

#### 766. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37281-L37297` → after: `L19336-L19337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19336-L19337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19336-L19337) · [Before (L37281-L37297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37281-L37297)

```diff
-       hD = {
-         gravityMultiplier: 0,
-         upwardImpulseOnUse: 20,
-         ...MD("Red"),
-         airborneMode: {
-           activeMovementType: pD.o.FLOATING,
-           durationMs: 16e3,
-           exitsVehicleOnEnd: !0
-         },
-         airborneMovement: {
-           model: "heading"
-         },
-         airborneFallSpeedLimit: {
-           maxFallSpeed: 3,
-           slowDownSeconds: .15,
-           compensateGravity: !0
- ... (1 more removed lines; see GitHub link above)
+       wp = function(pp) {
+         return Pp()(pp)
```

#### 767. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37299-L37329` → after: `L19339-L19340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19339-L19340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19339-L19340) · [Before (L37299-L37329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37299-L37329)

```diff
-       nD = {
-         [pD.e.YELLOW]: MD("Yellow"),
-         [pD.e.WHITE]: MD("White"),
-         [pD.e.RED]: MD("Red"),
-         [pD.e.PURPLE]: MD("Purple"),
-         [pD.e.PINK]: MD("Pink"),
-         [pD.e.ORANGE]: MD("Orange"),
-         [pD.e.MAGENTA]: MD("Magenta"),
-         [pD.e.LIME]: MD("Lime"),
-         [pD.e.LIGHT_GRAY]: MD("Light Gray"),
-         [pD.e.LIGHT_BLUE]: MD("Light Blue"),
-         [pD.e.GREEN]: MD("Green"),
-         [pD.e.GRAY]: MD("Gray"),
-         [pD.e.CYAN]: MD("Cyan"),
-         [pD.e.BROWN]: MD("Brown"),
-         [pD.e.BLUE]: MD("Blue"),
- ... (15 more removed lines; see GitHub link above)
+       vp = function(pp) {
+         return Up(pp) || op()(pp)
```

#### 768. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37331-L37332` → after: `L19342-L19355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19342-L19355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19342-L19355) · [Before (L37331-L37332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37331-L37332)

```diff
-       [pD.t.ROTATION_2]: {
-         fixedHeading: Math.PI / 2
+       tp = 0,
+       Hp = function(pp) {
+         var ip = ++tp;
+         return "".concat(pp || "").concat(ip)
+       },
+       dp = function(pp, ip) {
+         var cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           Ip = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (!Up(pp) && !op()(pp)) return Op;
+         if (yp(pp)) {
+           var xp = pp.indexOf("%");
+           cp = ip * parseFloat(pp.slice(0, xp)) / 100
+         } else cp = +pp;
+         return Sp()(cp) && (cp = Op), Ip && cp > ip && (cp = ip), cp
```

#### 769. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37334-L37335` → after: `L19357-L19360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19357-L19360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19357-L19360) · [Before (L37334-L37335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37334-L37335)

```diff
-       [pD.t.ROTATION_3]: {
-         fixedHeading: Math.PI
+       ep = function(pp) {
+         if (!pp) return null;
+         var ip = Object.keys(pp);
+         return ip && ip.length ? pp[ip[0]] : null
```

#### 770. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37343-L37415` → after: `L19363-L19366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19363-L19366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19363-L19366) · [Before (L37343-L37415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37343-L37415)

```diff
-         return DD[DD.Unset = 0] = "Unset", DD[DD.Off = 1] = "Off", DD[DD.On = 2] = "On", DD
-       }(ED || {});
-     class QD {
-       constructor(DD, zD) {
-         this.baseSettings = void 0, this.tierSettings = void 0, this.minSettings = void 0, this.maxSettings = void 0, this.baseBlockLookups = void 0, this.tierBlockLookups = void 0, this.baseSettings = {
-           ...sD.f,
-           ...DD
-         };
-         const wD = {};
-         for (const sD in zD) {
-           const DD = Number(sD);
-           wD[DD] = {
-             ...this.baseSettings,
-             ...zD[DD]
-           }
-         }
- ... (57 more removed lines; see GitHub link above)
+         if (!Array.isArray(pp)) return !1;
+         for (var ip = pp.length, cp = {}, Op = 0; Op < ip; Op++) {
+           if (cp[pp[Op]]) return !0;
+           cp[pp[Op]] = !0
```

#### 771. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37417-L37419` → after: `L19368-L19374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19368-L19374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19368-L19374) · [Before (L37417-L37419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37417-L37419)

```diff
-         return {
-           base: pD,
-           tiers: sD
+         return !1
+       },
+       kp = function(pp, ip) {
+         return Up(pp) && Up(ip) ? function(cp) {
+           return pp + cp * (ip - pp)
+         } : function() {
+           return ip
```

#### 772. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37421-L37436` → after: `L19376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19376) · [Before (L37421-L37436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37421-L37436)

```diff
-       }
-     }
- 
-     function XD(DD) {
-       return (0, KD.Ac)(DD) ? null : (0, KD.bb)(JD.q, (zD => {
-         var wD;
-         return null !== (wD = DD[(0, JD.h)(zD)]) && void 0 !== wD ? wD : 1
-       }), Float64Array)
-     }
- 
-     function VD(DD) {
-       return (0, KD.Ac)(DD) ? null : (0, KD.bb)(JD.q, (zD => {
-         const wD = DD[(0, JD.h)(zD)];
-         return void 0 === wD ? ED.Unset : wD ? ED.On : ED.Off
-       }), Uint8Array)
-     }
+       };
```

#### 773. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37439-L37514` → after: `L19379-L19381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19379-L19381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19379-L19381) · [Before (L37439-L37514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37439-L37514)

```diff
-       if (DD) {
-         let wD = !1;
-         for (let pD = 0; pD < zD.length; pD++) {
-           const sD = DD[zD[pD]];
-           if (sD === ED.On) return !0;
-           sD === ED.Off && (wD = !0)
-         }
-         if (wD) return !1
-       }
-       return wD
-     }
-     const CD = {
-       [pD.q.DEFAULT]: new QD(sD.f, {}),
-       [pD.q.BOAT]: new QD(rD, LD),
-       [pD.q.GLIDER]: new QD(BD, GD),
-       [pD.q.BALLOON]: new QD(hD, nD),
- ... (60 more removed lines; see GitHub link above)
+       return pp && pp.length ? pp.find((function(pp) {
+         return pp && ("function" === typeof ip ? ip(pp) : Lp()(pp, ip)) === cp
+       })) : null
```

#### 774. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37516-L37520` → after: `L19383-L19395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19383-L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19383-L19395) · [Before (L37516-L37520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37516-L37520)

```diff
- 
-     function* bD() {
-       for (const DD in CD) {
-         const zD = Number(DD);
-         yield zD
+     var Rp = function(pp) {
+         if (!pp || !pp.length) return null;
+         for (var ip = pp.length, cp = 0, Op = 0, op = 0, Ip = 0, Sp = 1 / 0, xp = -1 / 0, Lp = 0, Yp = 0, Dp = 0; Dp < ip; Dp++) cp += Lp = pp[Dp].cx || 0, Op += Yp = pp[Dp].cy || 0, op += Lp * Yp, Ip += Lp * Lp, Sp = Math.min(Sp, Lp), xp = Math.max(xp, Lp);
+         var Ap = ip * Ip !== cp * cp ? (ip * op - cp * Op) / (ip * Ip - cp * cp) : 0;
+         return {
+           xmin: Sp,
+           xmax: xp,
+           a: Ap,
+           b: (Op - Ap * cp) / ip
+         }
+       },
+       qp = function(pp, ip) {
+         return Up(pp) && Up(ip) ? pp - ip : op()(pp) && op()(ip) ? pp.localeCompare(ip) : pp instanceof Date && ip instanceof Date ? pp.getTime() - ip.getTime() : String(pp).localeCompare(String(ip))
```

#### 775. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37533` → after: `L19398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19398) · [Before (L37533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37533)

```diff
-   6516: (DD, zD, wD) => {
+   6115: (pp, ip, cp) => {
```

#### 776. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37535-L37537` → after: `L19400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19400) · [Before (L37535-L37537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37535-L37537)

```diff
-       c: () => AD,
-       e: () => sD,
-       i: () => UD
+       e: () => Op
```

#### 777. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37539-L37555` → after: `L19402-L19414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19402-L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19402-L19414) · [Before (L37539-L37555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37539-L37555)

```diff
-     var pD = wD(6520);
- 
-     function sD(DD, zD) {
-       return DD && zD === pD.q.DEFAULT
-     }
-     const KD = 150,
-       rD = 1.6,
-       LD = 65,
-       cD = 500,
-       gD = .6,
-       RD = .5;
-     class AD {
-       constructor() {
-         this.Vs = 0, this.Ps = 0, this.yVelocity = 0
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

#### 778. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37558-L37564` → after: `L19417-L19425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19417-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19417-L19425) · [Before (L37558-L37564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37558-L37564)

```diff
- 
-     function UD(DD, zD, wD, pD) {
-       let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
-       DD.Vs = zD ? Math.min(DD.Vs + rD / KD * sD, rD) : 0, 0 === wD ? DD.Ps = 0 : pD ? DD.Ps = sD : DD.Ps += sD;
-       const AD = Math.min(DD.Ps, KD) / KD,
-         UD = (LD + AD * cD) * wD;
-       return DD.yVelocity *= Math.pow(gD, sD), Math.abs(DD.yVelocity) < RD && (DD.yVelocity = 0), UD
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

#### 779. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37567` → after: `L19428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19428) · [Before (L37567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37567)

```diff
-   38463: (DD, zD, wD) => {
+   5582: (pp, ip, cp) => {
```

#### 780. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37572-L37574` → after: `L19432-L19434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19432-L19434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19432-L19434) · [Before (L37572-L37574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37572-L37574)

```diff
-     const pD = 25,
-       sD = 90;
-     Math.min(pD, sD)
+     var Op = function(pp, ip) {
+       for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op]
+     }
```

#### 781. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37576` → after: `L19436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19436) · [Before (L37576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37576)

```diff
-   37620: (DD, zD, wD) => {
+   6357: (pp, ip, cp) => {
```

#### 782. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37578-L37579` → after: `L19438-L19439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19438-L19439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19438-L19439) · [Before (L37578-L37579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37578-L37579)

```diff
-       e: () => cD,
-       g: () => rD,
+       c: () => xp,
+       f: () => Pp,
```

#### 783. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37582-L37606` → after: `L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19442) · [Before (L37582-L37606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37582-L37606)

```diff
-     var pD = wD(358),
-       sD = wD.n(pD),
-       KD = wD(351);
-     let rD, LD, cD;
-     var gD, RD, AD, UD, fD, ID, BD, GD, hD;
-     const nD = [0, 1, 8, 255, "length", "b", 2, "d", 67, 48, "undefined", void 0, 32, 4, 69, 141, 63, 6, "fromCodePoint", 7, 12, "push", "a", 120, 191, "i", "g", 91, 5, 8191, 88, 13, 14, 3, "e", "f", null, 10, 101, "h", 119, 9, 81, 44, 110, 180, 175, 102, "PI", 115, 116, 117, "c" … [truncated]
- 
-     function MD(...DD) {
-       return DD[nD[4]] = nD[1], typeof gD[DD[nD[0]]] === nD[10] ? gD[DD[nD[0]]] = function(DD) {
-         var zD, wD, pD, sD, KD, rD, LD;
-         for (PD(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = nD[0], KD = nD[0], rD = -nD[1]), LD = nD[0]; LD < wD; LD++) {
-           var cD = '|Fw!%Gxf6~L3)=v*2m9s^ongQebJW{Yi_jAB[@a?5t#7T:X0NP+qU.$DylC>c,KHZ"I/h18VukdzE}(];`S4Mp&<ORr'.indexOf(zD[LD]);
-           if (cD !== -nD[1])
-             if (rD < nD[0]) rD = cD;
-             else {
-               PD(rD += cD * nD[27], sD |= rD << KD, KD += (rD & nD[29]) > nD[30] ? nD[31] : nD[32]);
- ... (9 more removed lines; see GitHub link above)
+     cp(5575), cp(62), cp(5405);
```

#### 784. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37609` → after: `L19445-L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19445-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19445-L19449) · [Before (L37609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37609)

```diff
-       return typeof UD !== nD[10] && UD ? (new UD).decode(new fD(DD)) : typeof ID !== nD[10] && ID ? ID.from(DD).toString("utf-8") : hD(DD)
+       return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Op(pp)
```

#### 785. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37612-L37674` → after: `L19452-L19461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19452-L19461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19452-L19461) · [Before (L37612-L37674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37612-L37674)

```diff
-     function JD() {}
-     PD(gD = {}, RD = ["W7G+b$$&D=AEDSKY#7T}*[FB(.o@>a#b0V9{h.YU9c%hYPcYK$w", 'S"b_0HyXE>nmDSH{8q(UPH?0)KYK6V|7?7Q$4(wYk^a1d88e+|', "J@nfFuLQj)L~qvRALb7uQ5V1dKz6)V&W2@hLbEO;uCO_h!", "vH#_W0bY;~qEm[UWgxC_[zNCRmCPeu|[&v_Ym", "kKzb&UiBE67D?Sh9^)6YSUP0T.b", '=P%+Uu"F', 'z"&f)&7BV^48Aw … [truncated]
-       PD(DD[nD[4]] = nD[0], DD[nD[8]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], DD[nD[5]] = nD[11], DD[nD[6]] = []);
-       try {
-         PD(DD[nD[5]] = Object, DD[nD[6]][nD[21]]("".__proto__.constructor.name))
-       } catch (RD) {}
-       DD: for (DD[nD[7]] = nD[0]; DD[nD[7]] < DD[nD[8]][nD[4]]; DD[nD[7]]++) try {
-         for (DD[nD[5]] = DD[nD[8]][DD[nD[7]]](), DD[-nD[9]] = nD[0]; DD[-nD[9]] < DD[nD[6]][nD[4]]; DD[-nD[9]]++)
- ... (47 more removed lines; see GitHub link above)
+     function op(pp, ip) {
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

#### 786. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37676-L37678` → after: `L19463-L19473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19463-L19473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19463-L19473) · [Before (L37676-L37678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37676-L37678)

```diff
-         function CD(DD) {
-           return typeof gD[DD] === nD[10] ? gD[DD] = XD(RD[DD]) : gD[DD]
-         }
+     function Ip(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? op(Object(cp), !0).forEach((function(ip) {
+           Sp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : op(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
```

#### 787. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37680-L37685` → after: `L19475-L19562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19475-L19562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19475-L19562) · [Before (L37680-L37685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37680-L37685)

```diff
-         function xD() {
-           var DD;
-           PD(DD = function(...zD) {
-             if (PD(zD[nD[4]] = nD[17], zD[nD[22]] = nD[36]), !(zD[nD[28]] < nD[0])) {
-               if (zD[nD[28]] === nD[0]) return zD[nD[0]].push(zD[nD[1]]);
-               for (zD[nD[19]] = zD[nD[6]]; zD[nD[19]] < zD[nD[33]] && !(zD[nD[13]][zD[nD[19]]] > zD[nD[28]]); zD[nD[19]]++) zD[nD[19]] > zD[nD[6]] && zD[nD[13]][zD[nD[19]]] === zD[nD[13]][zD[nD[19]] - nD[1]] || PD(zD[nD[22]] = Array.from(zD[nD[1]]), zD[nD[22]].push(zD[nD[13]][zD[ … [truncated]
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

#### 788. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37687-L37689` → after: `L19564-L19575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19564-L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19564-L19575) · [Before (L37687-L37689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37687-L37689)

```diff
-           }, console.log((function(...zD) {
-             return PD(zD[nD[4]] = nD[6], zD[nD[22]] = [], zD[nD[33]] = zD[nD[0]].length, zD[nD[0]].sort(((DD, zD) => DD - zD)), DD(zD[nD[22]], [], nD[0], zD[nD[33]], zD[nD[0]], zD[nD[1]])), zD[nD[22]]
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

#### 789. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37691-L37755` → after: `L19577-L19581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19577-L19581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19577-L19581) · [Before (L37691-L37755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37691-L37755)

```diff
-         CD(105) in JD && xD(), zD[CD(106) + CD(107) + CD(108)] = cD
-       }
-       PD(zD[UD(109) + UD(nD[44]) + UD(111) + UD(112)] = !0, zD[UD(nD[47]) + UD(113) + UD(114)] = zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])]);
-       let fD = sD;
-       sD === nD[0] && rD !== nD[0] && (fD = nD[1]);
-       const ID = cD + (fD < nD[0] ? -rD : rD) * (sD !== nD[0] ? Math[nD[48]] / nD[13] : Math[nD[48]] / nD[6]),
-         BD = KD[nD[52]][UD(118)](zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])], ID),
-         GD = AD / nD[65],
-         hD = BD * (nD[1] - Math[UD(nD[40])](-VD * GD)),
-         MD = pD[UD(nD[23]) + "te"] * GD,
-         ED = KD[nD[52]][UD(nD[53])](hD, -MD, MD);
-       zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] = (zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] + ED) % (Math[nD[48]] * nD[6]);
-       const QD = KD[nD[52]][UD(nD[53])](Math[UD(nD[55])](BD) / (Math[nD[48]] / nD[6]), nD[0], nD[1]);
-       fD !== nD[0] ? PD(wD.heading = fD > nD[0] ? zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] : zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] + Math[nD[48]], wD[nD[54]] = LD * Math[UD(nD[55])](fD) * (nD[1] - pD[UD(123) + UD(124) + UD(125) + UD(nD[51])] * QD)) : wD[nD[54]] = nD[0]
-     }, LD = (...DD) => {
-       function zD(...DD) {
- ... (49 more removed lines; see GitHub link above)
+         return Pp ? Ip(Ip({}, ip), {}, {
+           radius: Sp,
+           angle: Ap(wp, ip)
+         }) : null
+       }
```

#### 790. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37757` → after: `L19583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19583) · [Before (L37757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37757)

```diff
-   38178: (DD, zD, wD) => {
+   5588: (pp, ip, cp) => {
```

#### 791. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37759-L37760` → after: `L19585-L19586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19585-L19586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19585-L19586) · [Before (L37759-L37760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37759-L37760)

```diff
-       b: () => hD,
-       f: () => OD,
+       d: () => Jp,
+       h: () => Mp,
```

#### 792. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37763` → after: `L19589-L19590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19589-L19590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19589-L19590) · [Before (L37763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37763)

```diff
-       l: () => ID,
+       m: () => fp,
+       n: () => Qp,
```

#### 793. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37765` → after: `L19592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19592) · [Before (L37765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37765)

```diff
-       t: () => fD,
+       r: () => bp,
```

#### 794. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37767` → after: `L19594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19594) · [Before (L37767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37767)

```diff
-       v: () => UD
+       y: () => Ep
```

#### 795. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37769-L37980` → after: `L19596-L19629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19596-L19629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19596-L19629) · [Before (L37769-L37980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37769-L37980)

```diff
-     var pD = wD(6520),
-       sD = wD(37037),
-       KD = wD(9198);
-     const rD = (0, KD.p)("Water"),
-       LD = (0, KD.p)("Lava"),
-       cD = (0, KD.p)("Air"),
-       gD = {
-         physicsState: {
-           type: pD.q.CAR,
-           tier: pD.j.KART
-         },
-         validBlockIds: "solidBlocks",
-         meshSize: 4,
-         placeSound: null
-       },
-       RD = {
- ... (196 more removed lines; see GitHub link above)
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
+ ... (18 more added lines; see GitHub link above)
```

#### 796. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37983-L37989` → after: `L19632-L19637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19632-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19632-L19637) · [Before (L37983-L37989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37983-L37989)

```diff
-     function ID(DD, zD) {
-       const wD = DD.validBlockIds;
-       if (Array.isArray(wD)) return wD.includes(zD);
-       if (zD === cD) return !1;
-       if ("solidBlocks" === wD) return !0 !== KD.l[zD].Af;
-       if ("solidBlocksOrFluid" === wD) return !0;
-       throw new Error(`Unsupported validBlockIds for ${zD}: ${JSON.stringify(wD)}`)
+     function ep(pp) {
+       return ep = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, ep(pp)
```

#### 797. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37991-L37996` → after: `L19639-L19653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19639-L19653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19639-L19653) · [Before (L37991-L37996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37991-L37996)

```diff
-     const BD = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
+     var jp = {
+         click: "onClick",
+         mousedown: "onMouseDown",
+         mouseup: "onMouseUp",
+         mouseover: "onMouseOver",
+         mousemove: "onMouseMove",
+         mouseout: "onMouseOut",
+         mouseenter: "onMouseEnter",
+         mouseleave: "onMouseLeave",
+         touchcancel: "onTouchCancel",
+         touchend: "onTouchEnd",
+         touchmove: "onTouchMove",
+         touchstart: "onTouchStart",
+         contextmenu: "onContextMenu",
+         dblclick: "onDoubleClick"
```

#### 798. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37998-L38110` → after: `L19655-L19665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19655-L19665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19655-L19665) · [Before (L37998-L38110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L37998-L38110)

```diff
-       GD = {
-         "Yellow Balloon": {
-           ...BD,
-           physicsState: {
-             type: pD.q.BALLOON,
-             tier: pD.e.YELLOW
-           }
-         },
-         "White Balloon": {
-           ...BD,
-           physicsState: {
-             type: pD.q.BALLOON,
-             tier: pD.e.WHITE
-           }
-         },
-         "Red Balloon": {
- ... (97 more removed lines; see GitHub link above)
+       kp = function(pp) {
+         return "string" === typeof pp ? pp : pp ? pp.displayName || pp.name || "Component" : ""
+       },
+       mp = null,
+       Rp = null,
+       qp = function pp(ip) {
+         if (ip === mp && Array.isArray(Rp)) return Rp;
+         var cp = [];
+         return Wp.Children.forEach(ip, (function(ip) {
+           Sp()(ip) || ((0, yp.isFragment)(ip) ? cp = cp.concat(pp(ip.props.children)) : cp.push(ip))
+         })), Rp = cp, mp = ip, cp
```

#### 799. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38113-L38115` → after: `L19668-L19680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19668-L19680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19668-L19680) · [Before (L38113-L38115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38113-L38115)

```diff
-     function hD(DD) {
-       var zD;
-       return null === DD || void 0 === DD ? null : null !== (zD = GD[DD]) && void 0 !== zD ? zD : null
+     function Mp(pp, ip) {
+       var cp = [],
+         Op = [];
+       return Op = Array.isArray(ip) ? ip.map((function(pp) {
+         return kp(pp)
+       })) : [kp(ip)], qp(pp).forEach((function(pp) {
+         var ip = op()(pp, "type.displayName") || op()(pp, "type.name"); - 1 !== Op.indexOf(ip) && cp.push(pp)
+       })), cp
+     }
+ 
+     function Cp(pp, ip) {
+       var cp = Mp(pp, ip);
+       return cp && cp[0]
```

#### 800. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38117-L38121` → after: `L19682-L19720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19682-L19720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19682-L19720) · [Before (L38117-L38121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38117-L38121)

```diff
-     const nD = {
-         meshAttachment: {
-           size: 3,
-           offset: [0, .72, .3],
-           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+     var Ep = function(pp) {
+         if (!pp || !pp.props) return !1;
+         var ip = pp.props,
+           cp = ip.width,
+           Op = ip.height;
+         return !(!(0, Up.D)(cp) || cp <= 0 || !(0, Up.D)(Op) || Op <= 0)
+       },
+       Xp = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
+       lp = function(pp) {
+         return pp && pp.type && Lp()(pp.type) && Xp.indexOf(pp.type) >= 0
+       },
+       Qp = function(pp) {
+         return pp && "object" === ep(pp) && "clipDot" in pp
+       },
+       Jp = function(pp, ip, cp) {
+         if (!pp || "function" === typeof pp || "boolean" === typeof pp) return null;
+ ... (23 more added lines; see GitHub link above)
```

#### 801. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38124-L38151` → after: `L19724-L19733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19724-L19733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19724-L19733) · [Before (L38124-L38151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38124-L38151)

```diff
-       MD = {
-         "Wood Hang Glider": {
-           ...nD,
-           physicsState: {
-             type: pD.q.GLIDER,
-             tier: pD.k.WOOD
-           }
-         },
-         "Iron Hang Glider": {
-           ...nD,
-           physicsState: {
-             type: pD.q.GLIDER,
-             tier: pD.k.IRON
-           }
-         },
-         "Gold Hang Glider": {
- ... (12 more removed lines; see GitHub link above)
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

#### 802. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38153` → after: `L19735-L19780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19735-L19780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19735-L19780) · [Before (L38153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38153)

```diff
-       };
+         return !1
+       },
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
+ ... (30 more added lines; see GitHub link above)
```

#### 803. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38156-L38157` → after: `L19783-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19783-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19783-L19787) · [Before (L38156-L38157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38156-L38157)

```diff
-       var zD;
-       return null === DD || void 0 === DD ? null : null !== (zD = MD[DD]) && void 0 !== zD ? zD : null
+       return Sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Sp(pp)
```

#### 804. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38162-L38163` → after: `L19790-L19798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19790-L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19790-L19798) · [Before (L38162-L38163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38162-L38163)

```diff
-     function QD(DD) {
-       return JD.has(DD)
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

#### 805. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38167` → after: `L19802-L19810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19802-L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19802-L19810) · [Before (L38167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38167)

```diff
-       return ED.has(DD)
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

#### 806. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38170-L38173` → after: `L19813-L19872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19813-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19813-L19872) · [Before (L38170-L38173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38170-L38173)

```diff
-     function VD(DD) {
-       return DD === pD.q.DEFAULT || function(DD) {
-         return JD.has(DD) || ED.has(DD)
-       }(DD)
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

#### 807. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38176` → after: `L19875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19875) · [Before (L38176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38176)

```diff
-   37151: (DD, zD, wD) => {
+   6121: (pp, ip, cp) => {
```

#### 808. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38178-L38181` → after: `L19877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19877) · [Before (L38178-L38181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38178-L38181)

```diff
-       b: () => rD,
-       c: () => KD,
-       e: () => pD,
-       h: () => sD
+       e: () => xp
```

#### 809. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38183-L38194` → after: `L19879-L19886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19879-L19886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19879-L19886) · [Before (L38183-L38194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38183-L38194)

```diff
-     let pD = function(DD) {
-         return DD[DD.Linear = 0] = "Linear", DD[DD.CatmullRomSpline = 1] = "CatmullRomSpline", DD
-       }({}),
-       sD = function(DD) {
-         return DD[DD.NoLoop = 0] = "NoLoop", DD[DD.LoopOnLastFrame = 1] = "LoopOnLastFrame", DD[DD.HoldOnLastFrame = 2] = "HoldOnLastFrame", DD
-       }({}),
-       KD = function(DD) {
-         return DD[DD.Movement = 0] = "Movement", DD[DD.Action = 1] = "Action", DD[DD.Emote = 2] = "Emote", DD[DD.Custom = 3] = "Custom", DD
-       }({}),
-       rD = function(DD) {
-         return DD[DD.Start = 0] = "Start", DD[DD.Stop = 1] = "Stop", DD
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

#### 810. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38196` → after: `L19888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19888) · [Before (L38196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38196)

```diff
-   38375: (DD, zD, wD) => {
+   5619: (pp, ip, cp) => {
```

#### 811. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38199` → after: `L19891-L19894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19891-L19894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19891-L19894) · [Before (L38199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38199)

```diff
-       h: () => RD
+       e: () => Yp,
+       g: () => xp,
+       h: () => Ap,
+       i: () => Pp
```

#### 812. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38201-L38203` → after: `L19896-L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19896-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19896-L19898) · [Before (L38201-L38203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38201-L38203)

```diff
-     const pD = .001,
-       sD = .001,
-       KD = [0, 0, 0, 1, 1, 1];
+     var Op = cp(62),
+       op = cp(5214),
+       Ip = cp.n(op);
```

#### 813. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38205-L38216` → after: `L19900-L19981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19900-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L19900-L19981) · [Before (L38205-L38216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38205-L38216)

```diff
-     function rD(DD, zD, wD) {
-       const pD = Math.floor(zD.base[0] + sD),
-         rD = Math.floor(zD.max[0] - sD),
-         LD = Math.floor(zD.base[2] + sD),
-         cD = Math.floor(zD.max[2] - sD);
-       let gD = -1 / 0;
-       for (let RD = pD; RD <= rD; RD++)
-         for (let pD = LD; pD <= cD; pD++) {
-           const rD = DD(RD, wD, pD);
-           if (!rD) continue;
-           const LD = Array.isArray(rD) ? rD : KD;
-           for (let DD = 0; DD < LD.length; DD += 6) zD.base[0] < RD + LD[DD + 3] - sD && zD.max[0] > RD + LD[DD] + sD && zD.base[1] < wD + LD[DD + 4] - sD && zD.max[1] > wD + LD[DD + 1] + sD && zD.base[2] < pD + LD[DD + 5] - sD && zD.max[2] > pD + LD[DD + 2] + sD && wD + LD[DD +  … [truncated]
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

#### 814. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38221-L38229` → after: `L20020-L20068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20020-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20020-L20068) · [Before (L38221-L38229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38221-L38229)

```diff
-     function LD(DD, zD, wD) {
-       const pD = Math.floor(zD.base[0] + sD),
-         KD = Math.floor(zD.max[0] - sD),
-         rD = Math.floor(zD.base[2] + sD),
-         LD = Math.floor(zD.max[2] - sD);
-       for (let sD = pD; sD <= KD; sD++)
-         for (let zD = rD; zD <= LD; zD++)
-           if (DD(sD, wD, zD)) return !0;
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

#### 815. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38233` → after: `L20072-L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20072-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20072-L20075) · [Before (L38233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38233)

```diff
-       return DD.Uy && DD.Ug > 0 && DD.depenetrate && null === DD.Iy
+       var ip = pp.copy;
+       return pp.padding = pp.paddingOuter, delete pp.paddingInner, delete pp.paddingOuter, pp.copy = function() {
+         return Sp(ip())
+       }, pp
```

#### 816. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38240-L38253` → after: `L20078-L20106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20078-L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20078-L20106) · [Before (L38240-L38253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38240-L38253)

```diff
-     function RD(DD, zD, wD) {
-       const KD = wD.base[1],
-         cD = Math.floor(KD),
-         RD = rD(DD, wD, cD),
-         AD = RD - KD;
-       if (!(AD >= pD)) return 0;
-       if (LD(zD, wD, cD)) return 0;
-       const UD = gD;
-       for (let pD = 0; pD < 3; pD++) UD.base[pD] = wD.base[pD], UD.max[pD] = wD.max[pD];
-       UD.base[1] += AD, UD.max[1] += AD;
-       const fD = Math.floor(UD.max[1] - sD);
-       for (let pD = Math.floor(RD); pD <= fD; pD++)
-         if (LD(zD, UD, pD) || rD(DD, UD, pD) !== -1 / 0) return 0;
-       return AD
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

#### 817. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38256` → after: `L20113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20113) · [Before (L38256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38256)

```diff
-   37611: (DD, zD, wD) => {
+   6288: (pp, ip, cp) => {
```

#### 818. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38258` → after: `L20115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20115) · [Before (L38258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38258)

```diff
-       e: () => sD,
+       b: () => Dp,
```

#### 819. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38261-L38262` → after: `L20118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20118) · [Before (L38261-L38262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38261-L38262)

```diff
-     var pD = wD(648);
-     class sD {
+     class Op extends Map {
```

#### 820. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38264-L38268` → after: `L20120-L20129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20120-L20129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20120-L20129) · [Before (L38264-L38268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38264-L38268)

```diff
-         this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(DD).map((DD => {
-           let [zD, wD] = DD;
-           const pD = wD.name;
-           return void 0 !== KD[pD] ? [zD, pD] : [zD, pD.split(" ").at(-1)]
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

#### 821. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38270-L38272` → after: `L20131-L20132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20131-L20132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20131-L20132) · [Before (L38270-L38272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38270-L38272)

```diff
-       getPossibleEnchantmentsForItem(DD) {
-         var zD;
-         return null !== (zD = KD[this.suffixMapping[DD]]) && void 0 !== zD ? zD : []
+       get(pp) {
+         return super.get(op(this, pp))
```

#### 822. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38274-L38291` → after: `L20134-L20189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20134-L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20134-L20189) · [Before (L38274-L38291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38274-L38291)

```diff
-       chooseRandomEnchantmentAttributes(DD, zD, wD) {
-         const sD = [...wD],
-           KD = {
-             enchantments: {},
-             enchantmentTier: zD,
-             id: (0, pD.e)()
-           },
-           rD = LD[zD];
-         for (let pD = 0; pD < rD; pD++) {
-           var gD;
-           if (0 === sD.length) {
-             console.warn("Ran out of enchantments to choose from");
-             break
-           }
-           const {
-             enchantments: zD
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

#### 823. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38293` → after: `L20191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20191) · [Before (L38293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38293)

```diff
-         return KD
+         return cp[Ip % cp.length]
```

#### 824. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38330-L38784` → after: `L20207-L20211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20207-L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20207-L20211) · [Before (L38330-L38784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38330-L38784)

```diff
-   37242: (DD, zD, wD) => {
-     var pD = {
-       "./67/67_Atlas.png": 27041,
-       "./67/67_Model.glb": 33241,
-       "./67/67_Reconstructed.glb": 33245,
-       "./67/variations/0_67_default.png": 27044,
-       "./Armour Collector/Armour Collector_Atlas.png": 27046,
-       "./Armour Collector/Armour Collector_Model.glb": 33254,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 33256,
-       "./Armour Collector/variations/0_armour collector_default.png": 27050,
-       "./Bear/BearSaddle_Atlas.png": 27058,
-       "./Bear/Bear_Atlas.png": 27061,
-       "./Bear/Bear_Model.glb": 33261,
-       "./Bear/variations/0_bear_default.png": 27066,
-       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27068,
-       "./Bobino Musculino/Bobino Musculino_Model.glb": 33267,
- ... (439 more removed lines; see GitHub link above)
+   6344: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
+     });
+     Array.prototype.slice;
```

#### 825. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38787-L38788` → after: `L20214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20214) · [Before (L38787-L38788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38787-L38788)

```diff
-       var zD = KD(DD);
-       return wD(zD)
+       return "object" === typeof pp && "length" in pp ? pp : Array.from(pp)
```

#### 826. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38790` → after: `L20216-L20217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20216-L20217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20216-L20217) · [Before (L38790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38790)

```diff
- 
+   },
+   6229: (pp, ip, cp) => {
```

#### 827. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38792-L38794` → after: `L20219-L20220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20219-L20220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20219-L20220) · [Before (L38792-L38794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38792-L38794)

```diff
-       if (!wD.o(pD, DD)) {
-         var zD = new Error("Cannot find module '" + DD + "'");
-         throw zD.code = "MODULE_NOT_FOUND", zD
+       return function() {
+         return pp
```

#### 828. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38798-L38803` → after: `L20223-L20225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20223-L20225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20223-L20225) · [Before (L38798-L38803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38798-L38803)

```diff
-     sD.keys = function() {
-       return Object.keys(pD)
-     }, sD.resolve = KD, DD.exports = sD, sD.id = 37242
-   },
-   38047: DD => {
-     DD.exports = "data:font/ttf;base64,AAEAAAAPAIAAAwBwR0RFRvJw+uoAA0KIAAACPE9TLzITxQuEAAABeAAAAGBjbWFwwhPxPQAAGngAAEKmY3Z0ICkQEMoAAGwEAAAAqGZwZ21iLwN/AABdIAAADgxnYXNwAAAAEAADQoAAAAAIZ2x5ZnEZfskAAIWYAAJ5xmhlYWQdrwaIAAAA/AAAADZoaGVhAnQGnQAAATQAAAAkaG10eK3Lsr4AAAHYAAAYnmxvY2EG+iY0A … [truncated]
+     cp.d(ip, {
+       c: () => Op
+     })
```

#### 829. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38805` → after: `L20227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20227) · [Before (L38805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38805)

```diff
-   37934: (DD, zD, wD) => {
+   6231: (pp, ip, cp) => {
```

#### 830. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38807-L38811` → after: `L20229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20229) · [Before (L38807-L38811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38807-L38811)

```diff
-       b: () => pD,
-       e: () => KD,
-       g: () => sD,
-       k: () => LD,
-       n: () => rD
+       d: () => Yp
```

#### 831. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38813-L38845` → after: `L20231-L20234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20231-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20231-L20234) · [Before (L38813-L38845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38813-L38845)

```diff
-     const pD = {
-         opaque: 1,
-         emissive: 2,
-         vegetation: 4,
-         dirt: 8,
-         sand: 16,
-         rock: 32,
-         slab: 64,
-         stairs: 128,
-         flat: 256,
-         Qg: 512,
-         dropped: 1024,
-         thrown: 2048,
-         placed: 4096,
-         lifeform: 65536
-       },
- ... (17 more removed lines; see GitHub link above)
+     const Op = Math.PI,
+       op = 2 * Op,
+       Ip = 1e-6,
+       Sp = op - Ip;
```

#### 832. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38847-L38848` → after: `L20236-L20238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20236-L20238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20236-L20238) · [Before (L38847-L38848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38847-L38848)

```diff
-     function rD(DD, zD) {
-       return DD + 65536 * zD
+     function xp(pp) {
+       this._ += pp[0];
+       for (let ip = 1, cp = pp.length; ip < cp; ++ip) this._ += arguments[ip] + pp[ip]
```

#### 833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38850-L38852` → after: `L20240-L20322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20240-L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20240-L20322) · [Before (L38850-L38852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38850-L38852)

```diff
- 
-     function LD(DD, zD) {
-       return cD(DD) + 4 * cD(zD)
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
+       moveTo(pp, ip) {
+         this._append`M${this._x0=this._x1=+pp},${this._y0=this._y1=+ip}`
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38855-L38856` → after: `L20333-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R20333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L20333-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L20333-L20339) · [Before (L38855-L38856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L38855-L38856)

```diff
-     function cD(DD) {
-       return (Math.round(DD / (Math.PI / 2)) % 4 + 4) % 4
+     function Ip(pp, ip) {
+       if (!pp) {
+         if (Op) throw new Error(op);
+         var cp = "function" === typeof ip ? ip() : ip,
+           Ip = cp ? "".concat(op, ": ").concat(cp) : op;
+         throw new Error(Ip)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L4-L7` → after: `L5-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L5-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L5-L13) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L4-L7)

```diff
-   36588: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => BD,
-       h: () => ED
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

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L9-L73` → after: `L15-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L15-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L15-L37) · [Before (L9-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L9-L73)

```diff
-     wD(34191);
-     var pD = wD(58),
-       sD = wD(1442),
-       KD = wD(1925),
-       rD = wD(1973),
-       LD = wD(20),
-       cD = wD(2402),
-       gD = wD(36591),
-       RD = wD(36593),
-       AD = wD(34174),
-       UD = wD(34188),
-       fD = wD(34197),
-       ID = wD(1096);
-     const BD = (0, pD.memo)((function() {
-       var DD;
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

#### 3. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L75-L76` → after: `L39-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L39-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L39-L241) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L75-L76)

```diff
-       MD = {
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

#### 4. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L78-L79` → after: `L243-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L243-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L243-L264) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L78-L79)

```diff
-     let OD = 0,
-       JD = 0;
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

#### 5. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L82` → after: `L267-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L267-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L267-L277) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L82)

```diff
-       JD = DD, hD[0].current || nD.current || MD.current ? XD(DD) : OD = DD
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

#### 6. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L86` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L281-L288) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L86)

```diff
-       return ((0, gD.g)(DD) - (0, gD.g)(0)) * window.innerHeight / 100
+       return pp.nodes().map((ip => {
+         let cp = pp.node(ip),
+           Op = pp.parent(ip),
+           op = {
+             v: ip
+           };
+         return void 0 !== cp && (op.value = cp), void 0 !== Op && (op.parent = Op), op
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L90-L95` → after: `L292-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L292-L299) · [Before (L90-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L90-L95)

```diff
-       var zD;
-       if (null === (zD = MD.current) || void 0 === zD || zD.call(MD, QD(DD)), hD[0].current) {
-         const zD = `${(0,gD.g)(DD)}vh`;
-         hD[0].current.style.transform = `translateX(calc(0px - ${zD}))`, hD[1].current.style.transform = `translateX(calc(0px + ${zD}))`, hD[2].current.style.transform = `translateY(calc(0px - ${zD}))`, hD[3].current.style.transform = `translateY(calc(0px + ${zD}))`
-       }
-       nD.current && (nD.current.style.filter = `blur(${Math.round(DD/10)}px)`)
+       return pp.edges().map((ip => {
+         let cp = pp.edge(ip),
+           Op = {
+             v: ip.v,
+             w: ip.w
+           };
+         return void 0 !== ip.name && (Op.name = ip.name), void 0 !== cp && (Op.value = cp), Op
+       }))
```

#### 8. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L99-L176` → after: `L303-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L303-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L303-L312) · [Before (L99-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L99-L176)

```diff
-       let {
-         custom: zD,
-         touch: wD
-       } = DD;
-       const KD = (0, sD.k)("aimingOverlay", "none"),
-         rD = "1.2vh",
-         LD = "0.3vh";
-       (0, pD.useEffect)((() => {
-         OD && XD(OD)
-       }), []);
-       const cD = (0, pD.useRef)(null !== zD);
-       return (0, pD.useLayoutEffect)((() => {
-         var DD;
-         zD ? null === (DD = MD.current) || void 0 === DD || DD.call(MD, QD(JD)) : cD.current && XD(JD);
-         cD.current = null !== zD
-       }), [zD]), (0, ID.jsxs)(ID.Fragment, {
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

#### 9. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L178-L182` → after: `L314-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L314-L316) · [Before (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L178-L182)

```diff
-   },
-   34188: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => BD,
-       h: () => ID
+     xp({}, {
+       read: () => wp,
+       write: () => Wp
```

#### 10. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L184-L188` → after: `L318-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L318-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L318-L335) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L184-L188)

```diff
-     wD(34191);
-     var pD = wD(1044),
-       sD = wD.n(pD),
-       KD = wD(58),
-       rD = wD(34181);
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

#### 11. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L190-L191` → after: `L337-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L337-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L337-L378) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L190-L191)

```diff
-     function LD(DD, zD) {
-       return Math.max(1, Math.round(DD * zD))
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

#### 12. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L194-L204` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L381-L382) · [Before (L194-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L194-L204)

```diff
-     function cD(DD, zD) {
-       const wD = zD * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         pD = function(DD, zD) {
-           if (DD.lines) return LD(DD.lineThickness, zD) % 2;
-           if (DD.dot) return LD(DD.dotSize, zD) % 2;
-           return gD(DD, zD) % 2
-         }(DD, zD),
-         sD = RD(DD.lineThickness * wD, pD),
-         KD = LD(DD.lineLength, wD),
-         rD = Math.round(DD.gap * wD),
-         cD = DD.outline > 0 ? LD(DD.outline, wD) : 0,
+     function dp(pp) {
+       let ip, cp = {},
```

#### 13. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L206-L268` → after: `L384-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L384-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L384-L387) · [Before (L206-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L206-L268)

```diff
-       if (DD.lines && (UD.push({
-           x: sD + rD,
-           y: 0,
-           w: KD,
-           h: sD,
-           arm: "right"
-         }), UD.push({
-           x: -rD - KD,
-           y: 0,
-           w: KD,
-           h: sD,
-           arm: "left"
-         }), UD.push({
-           x: 0,
-           y: sD + rD,
-           w: sD,
- ... (47 more removed lines; see GitHub link above)
+ 
+       function op(Op) {
+         var Ip, Sp;
+         Op in cp || (cp[Op] = !0, ip.push(Op), null == (Ip = pp.successors(Op)) || Ip.forEach(op), null == (Sp = pp.predecessors(Op)) || Sp.forEach(op))
```

#### 14. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L272-L273` → after: `L462-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L462-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L462-L491) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L272-L273)

```diff
-     function gD(DD, zD) {
-       return Math.round(DD.circleRadius * zD * 2 + LD(DD.circleThickness, zD))
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

#### 15. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L276-L277` → after: `L494-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L494-L497) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L276-L277)

```diff
-     function RD(DD, zD) {
-       return Math.max(2 - zD, 2 * Math.round((DD - zD) / 2) + zD)
+     function mp(pp, ip, cp) {
+       return pp.nodes().reduce((function(Op, op) {
+         return Op[op] = kp(pp, op, ip, cp), Op
+       }), {})
```

#### 16. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L280-L287` → after: `L500-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L500-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L500-L530) · [Before (L280-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L280-L287)

```diff
-     function AD(DD, zD, wD) {
-       const pD = 2 * wD >= zD - 1;
-       return {
-         x: DD,
-         y: DD,
-         size: zD,
-         border: Math.min(wD, Math.floor(zD / 2)),
-         filled: pD
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

#### 17. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L293-L294` → after: `L537-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L537-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L537-L542) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L293-L294)

```diff
-     function ID(DD, zD) {
-       return DD && zD ? `scale(${fD})` : "scale(1)"
+     function qp(pp) {
+       return Rp(pp).filter((function(ip) {
+         var cp;
+         let Op = ip[0];
+         return !!Op && (ip.length > 1 || 1 === ip.length && (null != (cp = pp.outEdges(Op, Op)) ? cp : []).length > 0)
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L297-L301` → after: `L546-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L546-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L546-L585) · [Before (L297-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L297-L301)

```diff
-     function BD(DD) {
-       return "classic" === DD.settings.style ? (0, UD.jsx)(nD, {
-         ...DD
-       }) : (0, UD.jsx)(VD, {
-         ...DD
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

#### 19. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L304-L315` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L588-L590) · [Before (L304-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L304-L315)

```diff
-     const GD = .125;
- 
-     function hD(DD, zD) {
-       const wD = {};
-       if (DD.color !== rD.e.color && (wD.color = (0, rD.k)(DD.color)), DD.opacity !== rD.e.opacity && (wD.opacity = DD.opacity / 100), DD.outline !== rD.e.outline || DD.outlineColor !== rD.e.outlineColor) {
-         const zD = DD.outline,
-           pD = (0, rD.k)(DD.outlineColor);
-         wD.textShadow = zD > 0 ? `-${zD}px 0 ${pD}, 0 ${zD}px ${pD}, ${zD}px 0 ${pD}, 0 -${zD}px ${pD}` : "none"
-       }
-       if (DD.size !== rD.e.size) {
-         const pD = DD.size / 100;
-         wD.fontSize = zD ? `calc(max(1.3rem, 18px) * ${pD})` : `calc(1.3rem * ${pD})`, wD.marginTop = `-${GD}em`, wD.transformOrigin = `50% calc(50% + ${GD}em)`
+     var Ep = class extends Error {
+       constructor(pp) {
+         super(pp), this.name = "CycleException"
```

#### 20. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L321-L341` → after: `L607-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L607-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/120.js#L607-L613) · [Before (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/120.js#L321-L341)

```diff
-       let {
-         settings: zD,
-         touch: wD,
-         inPreview: pD,
-         inEditor: KD,
-         pressed: rD = !1,
-         pressRef: LD
-       } = DD;
-       return (0, UD.jsx)("div", {
-         className: sD()("Crosshair", {
-           Touch: wD,
-           CrosshairInPreview: pD,
-           CrosshairInEditor: KD || pD
-         }),
-         ref: LD,
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
