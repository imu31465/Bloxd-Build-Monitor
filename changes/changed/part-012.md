# Changed — Bundle Modifications Report (Part 012 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `12 / 65` (**292** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 54. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L569-L571` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L631-L632) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L569-L571)

```diff
-         xK: sD.c.computeShortestRotation(DD, wD) / KD,
-         TK: sD.c.computeShortestRotation(zD, pD) / rD,
-         delta: sD.c.computeShortestRotation(zD, wD)
+         numLines: Math.max(1, Math.floor(Sp / Ip * op.height)),
+         charsPerLine: Math.max(1, Math.floor(xp * op.width))
```

#### 55. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L575-L588` → after: `L636-L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L636-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L636-L655) · [Before (L575-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L575-L588)

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
+     function Dp(pp, ip, cp, Op) {
+       const {
+         numLines: op,
+         charsPerLine: Ip
+       } = Yp(cp, Op, ip);
+       return Hp(pp, op, Ip, !1)
+     }
+     const Ap = 32e3;
+ 
+     function Pp(pp) {
+       return pp.slice(0, Ap)
+     }
+     const Wp = 512e3,
+       yp = 64,
+       Up = Wp;
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L592` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L676-L680) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L592)

```diff
-       return null === zD ? DD : zD(DD)
+       const {
+         numLines: cp,
+         charsPerLine: Op
+       } = vp[ip];
+       return Hp(pp, cp, Op, !1)
```

#### 57. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L596-L597` → after: `L781-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L781-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L781-L784) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L596-L597)

```diff
-       const [zD, wD, pD] = DD, rD = -(0, KD.l)(zD), LD = -(0, KD.l)(wD), cD = (0, KD.l)(pD), gD = sD.c.quaternionFromEulerZYX(rD, LD, cD);
-       return sD.c.eulerYXZFromQuaternion(gD)
+       var ip;
+       return null !== (ip = Ip[pp]) && void 0 !== ip ? ip : {
+         translationKey: ""
+       }
```

#### 58. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L599-L601` → after: `L786-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L786-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L786-L836) · [Before (L599-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L599-L601)

```diff
-     gD.LERP_MODE_SCHEMA_MAPPING = {
-       linear: pD.e.Linear,
-       catmullrom: pD.e.CatmullRomSpline
+     const xp = {
+       "Wood Enchanting Table": [{
+         min: 1,
+         max: 2
+       }, {
+         min: 3,
+         max: 4
+       }, {
+         min: 5,
+         max: 6
+       }],
+       "Stone Enchanting Table": [{
+         min: 2,
+         max: 4
+       }, {
+         min: 5,
+ ... (35 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L606` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L840) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L606)

```diff
-       return [-DD[0] * hD, DD[1] * hD, DD[2] * hD]
+       return op.includes(pp)
```

#### 60. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L610-L611` → after: `L844-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L844-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L844-L852) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L610-L611)

```diff
-       const [zD, wD, pD] = DD;
-       return [zD >= 0 ? Math.PI - zD : -Math.PI - zD, OD(wD + Math.PI), OD(pD + Math.PI)]
+       var ip;
+       return !0 === (null === pp || void 0 === pp || null === (ip = pp.customAttributes) || void 0 === ip ? void 0 : ip.cannotEnchant)
+     }
+ 
+     function Dp(pp, ip) {
+       const {
+         max: cp
+       } = xp[pp].at(-1);
+       return ip <= cp
```

#### 61. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L615` → after: `L856-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L856-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L856-L882) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L615)

```diff
-       return sD.c.mod(DD + Math.PI, 2 * Math.PI) - Math.PI
+       const ip = Math.sin(pp / 80),
+         cp = pp => {
+           if (pp <= 0) return 0;
+           if (pp > 1) return 1;
+           let ip = 0;
+           const cp = [1, 7, 21, 35, 35, 21, 7, 1];
+           for (let Op = 0; Op < cp.length; Op++) {
+             ip += (Op % 2 === 0 ? 1 : -1) * cp[Op] * Math.pow(pp, 2 + Op) / (2 + Op)
+           }
+           return 72 * ip
+         },
+         Op = .3 - .78 * ip,
+         op = .5 - .78 * ip,
+         Ip = .6 - .7 * ip,
+         Sp = .8 - .6 * ip;
+       let xp = cp(Op),
+ ... (11 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L619` → after: `L886-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L886-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L886-L893) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L619)

```diff
-       return Math.abs(sD.c.computeShortestRotation(DD[0], zD[0])) + Math.abs(sD.c.computeShortestRotation(DD[1], zD[1])) + Math.abs(sD.c.computeShortestRotation(DD[2], zD[2]))
+       const {
+         min: cp,
+         max: op
+       } = xp[pp][ip], Ip = Op.d.sampleUniformIntDistribution(cp, op, "includeMax");
+       return {
+         ...Ap(Ip),
+         level: Ip
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/200.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/200.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f)

#### 1. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L4-L6)

```diff
-   41416: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       MobPreview: () => AD
+   39283: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       f: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L8-L43` → after: `L9-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L9-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L9-L102) · [Before (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L8-L43)

```diff
-     var pD = wD(58),
-       sD = wD(1044),
-       KD = wD.n(sD),
-       rD = wD(41421),
-       LD = wD(34233),
-       cD = wD(41423),
-       gD = wD(1096);
- 
-     function RD(DD) {
-       return LD.e.openMob(DD)
-     }
-     const AD = (0, pD.memo)((function(DD) {
-       let {
-         mobType: zD,
-         variation: wD = null,
-         animation: sD = cD.e,
- ... (20 more removed lines; see GitHub link above)
+     var Op = cp(4176);
+     let op = null;
+ 
+     function Ip(pp) {
+       return null !== op && pp === op
+     }
+ 
+     function Sp() {
+       this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
+     }
+     class xp {
+       constructor(pp, ip) {
+         this.version = "0.7.0";
+         var cp = Object.assign({}, new Sp, ip || {});
+         this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter … [truncated]
+           dx: 0,
+ ... (78 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L46-L54` → after: `L105-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L105-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L105-L188) · [Before (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L46-L54)

```diff
-       const KD = (0, pD.useRef)(null),
-         {
-           width: rD,
-           height: LD
-         } = (0, sD.d)(DD);
-       (0, pD.useEffect)((() => {
-         const wD = zD(DD.current);
-         return KD.current = wD, () => {
-           wD.close(), KD.current = null
+       if (!pp.ignoreEvent(cp)) try {
+         mp(pp, cp), ip && cp.isTrusted && !cp.repeat && pp._keyStates[cp.code] && Rp(pp, cp.code)
+       } finally {
+         qp(cp.code, ip, pp, cp)
+       }
+     }
+ 
+     function vp(pp, ip, cp) {
+       if (!pp.ignoreEvent(cp)) try {
+         mp(pp, cp)
+       } finally {
+         ! function(pp, ip, cp) {
+           if ("pointerId" in cp)
+             if (ip) {
+               if (null !== pp._touches.currID) return;
+               pp._touches.currID = cp.pointerId
+ ... (68 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L56-L63` → after: `L190-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L190-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L190-L240) · [Before (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L56-L63)

```diff
-       }), [DD, zD]), (0, pD.useEffect)((() => {
-         rD <= 0 || LD <= 0 || KD.current.resize(rD, LD)
-       }), [rD, LD]), (0, pD.useEffect)((() => {
-         KD.current.show(wD)
-       }), [wD])
-     }
-   },
-   41423: (DD, zD, wD) => {
+       }() && (clearTimeout(pp._blurRelease), pp._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var ip in pp._modifiersHeldThroughBlur = {}, pp._keyStates) pp._keyStates[ip] && !/^Mouse\d/.test(ip) && Rp(pp, ip)
+       }), 0))
+     }
+ 
+     function mp(pp, ip) {
+       var cp = pp._modifiersHeldThroughBlur;
+       if (cp && ip.isTrusted && document.hasFocus())
+         for (var Op in cp) delete cp[Op], pp._keyStates[Op] && Op !== ip.code && (jp(ip, Op) || Rp(pp, Op))
+     }
+ 
+     function Rp(pp, ip) {
+       const cp = {
+           code: ip,
+           preventDefault: () => {},
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L69-L78` → after: `L245-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L245-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L245-L306) · [Before (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L69-L78)

```diff
-     var pD = wD(37164),
-       sD = wD(38621);
- 
-     function KD(DD, zD) {
-       let [wD, pD, sD] = DD;
-       return [0, .5, 1].map((DD => ({
-         timeFraction: DD,
-         rotation: {
-           XK: "catmull-rom-spline",
-           point: [wD, pD, sD + (.5 === DD ? zD : 0)]
+     var Op = cp(62),
+       op = cp(1476),
+       Ip = cp(2004),
+       Sp = cp(36828),
+       xp = cp(640),
+       Lp = cp(1049),
+       Yp = cp.n(Lp),
+       Dp = cp(1112);
+     const Ap = [Pp()];
+ 
+     function Pp() {
+       return {
+         source: null,
+         direction: null,
+         oN: null,
+         timeout: void 0,
+ ... (46 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L80-L95` → after: `L308-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L308-L312) · [Before (L80-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L80-L95)

```diff
-       })))
-     }
- 
-     function rD(DD, zD, wD) {
-       return {
-         nK: 3200,
-         loop: !0,
-         JK: {
-           Root: {
-             timeline: [0, .5, 1].map((DD => ({
-               timeFraction: DD,
-               position: {
-                 XK: "catmull-rom-spline",
-                 point: [0, .5 === DD ? .18 : 0, 0]
-               }
-             })))
+       }), []), (0, Dp.jsx)("div", {
+         className: "DirectionalDamage",
+         children: Ap.map(((pp, ip) => (0, Dp.jsx)("div", {
+           ref: ip => {
+             pp.oN = ip
```

#### 7. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L97-L104` → after: `L314-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L314-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L314-L417) · [Before (L97-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L97-L104)

```diff
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((DD => ({
-               timeFraction: DD,
-               rotation: {
-                 XK: "catmull-rom-spline",
-                 point: [0, .25 === DD ? .12 : .75 === DD ? -.12 : 0, 0]
-               }
-             })))
+           className: Yp()("DamageIndicator", {
+             DamageIndicatorFullCircle: (0, xp.G)(pp.direction),
+             DamageIndicatorIdle: null === pp.source
+           })
+         }, ip)))
+       })
+     }));
+ 
+     function wp(pp) {
+       for (const ip of Ap) {
+         if (null === ip.source || (0, xp.G)(ip.direction)) continue;
+         const cp = ip.direction - pp;
+         cp !== ip.writtenAngle && (ip.writtenAngle = cp, ip.oN.style.rotate = `${cp}rad`)
+       }
+     }
+   },
+ ... (88 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L106-L110` → after: `L419-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L419-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L419-L422) · [Before (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L106-L110)

```diff
-           ArmLeftMesh: {
-             timeline: KD(DD, wD)
-           },
-           ArmRightMesh: {
-             timeline: KD(zD, -wD)
+           release: pp.release,
+           uninstall: () => {
+             const ip = (0, Dp.g)();
+             ip && pp.uninstall(ip)
```

#### 9. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L113-L123` → after: `L425-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L425-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L425-L615) · [Before (L113-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L113-L123)

```diff
-       }
-     }
-     const LD = rD([0, 0, 0], [0, 0, 0], .07),
-       cD = (0, sD.d)((0, pD.f)(LD), "mobIdle"),
-       gD = rD([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       RD = rD([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       AD = (0, sD.d)((0, pD.f)(gD), "gunReady"),
-       UD = (0, sD.d)((0, pD.f)(RD), "gunAimed")
-   },
-   34238: (DD, zD, wD) => {
-     wD.d(zD, {
+       };
+     var dp = cp(40758);
+     cp(37907), cp(8869);
+     cp(8883).d;
+     const ep = () => {
+       const pp = (0, dp.d)((() => {
+           const pp = {
+             x: 0,
+             y: 0,
+             magnitude: 0,
+             headingOffset: 0,
+             jumpHeld: !1,
+             jumpPressedSinceTick: !1,
+             crouchHeld: !1,
+             running: !1,
+             sprintHeld: !1
+ ... (175 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L126` → after: `L618-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L618-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L618-L622) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L126)

```diff
-       j: () => RD
+       l: () => vp,
+       o: () => Pp,
+       s: () => Yp,
+       t: () => Up,
+       x: () => Wp
```

#### 11. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L128-L149` → after: `L624-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L624-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L624-L638) · [Before (L128-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L128-L149)

```diff
-     var pD = wD(1570);
- 
-     function sD(DD) {
-       var zD;
-       return {
-         ...rD.store,
-         yaw: rD.store.yaw + (null !== (zD = pD.b[DD].previewYaw) && void 0 !== zD ? zD : 0)
-       }
-     }
-     const KD = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       rD = {
- ... (6 more removed lines; see GitHub link above)
+     var Op = cp(25),
+       op = cp(34),
+       Ip = cp(1308),
+       Sp = cp(36804);
+     const xp = "clientGameUiChanged";
+     let Lp = null;
+ 
+     function Yp() {
+       return Lp
+     }
+ 
+     function Dp(pp, ip) {
+       const cp = {
+         content: pp,
+         menu: ip
```

#### 12. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L151-L259` → after: `L640-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L640-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L640-L681) · [Before (L151-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L151-L259)

```diff
- 
-     function LD(DD, zD) {
-       DD instanceof Promise ? DD.then(zD).catch((DD => {
-         console.error("Couldn't open the preview", DD)
-       })) : zD(DD)
-     }
-     class cD {
-       constructor(DD) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, LD(DD, (DD => {
-           this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
-         }))
-       }
-       show(DD) {
-         var zD;
-         this.view = DD, null === (zD = this.opened) || void 0 === zD || zD.show(DD)
-       }
- ... (93 more removed lines; see GitHub link above)
+       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
+         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
+       }
+     }
+     let Ap = null;
+ 
+     function Pp() {
+       return Ap
+     }
+ 
+     function Wp(pp) {
+       return Ap = pp, () => {
+         Ap === pp && (Ap = null)
+       }
+     }
+     let yp = !1;
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L261-L289` → after: `L683-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L683-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/200.js#L683-L722) · [Before (L261-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/200.js#L261-L289)

```diff
-     var pD = wD(34238);
-     class sD {
-       constructor(DD) {
-         this.load = DD, this.loaded = null, this.loading = null
-       }
-       run(DD) {
-         return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
-           throw this.loading = null, DD
-         })), this.loading.then(DD))
-       }
-     }
-     class KD {
-       constructor() {
-         this.mobScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e … [truncated]
-       }
-       openMob(DD) {
- ... (13 more removed lines; see GitHub link above)
+     var Op = cp(322),
+       op = cp(25),
+       Ip = cp(36693),
+       Sp = cp(1650),
+       xp = cp(2012);
+ 
+     function Lp(pp, ip) {
+       var cp, Lp, Yp;
+       if (!op.c.get("isKeydownEnabled") || pp.repeat) return;
+       const Dp = pp.code;
+       "Escape" === pp.key ? (0, Sp.h)(pp) : null !== (cp = xp.t.OpenSettings) && void 0 !== cp && cp.includes(Dp) ? (0, Sp.q)(pp, Op.n.SETTINGS) : null !== (Lp = xp.t.OpenCharacterCustomization) && void 0 !== Lp && Lp.includes(Dp) ? (0, Ip.c)() || (0, Sp.q)(pp, Op.n.CUSTOMISATION … [truncated]
+         showDebugOverlay: !op.c.get("showDebugOverlay")
+       })
+     }
+   },
+   39169: (pp, ip, cp) => {
+ ... (24 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 1. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L7` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L4-L29) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L4-L7)

```diff
-   34265: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sD,
-       g: () => KD
+   34448: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       MAX_BLOCK_ID: () => Op,
+       armourReductionOf: () => ap,
+       clipSizeOf: () => hp,
+       creativeAltNames: () => Li,
+       creativeCategoryOf: () => Vp,
+       creativeItemCategories: () => xp,
+       creativeItemCategoryIcons: () => Lp,
+       creativeItemIds: () => Kp,
+       descriptionOf: () => Tp,
+       displayNameOf: () => Np,
+       dropsNothing: () => gp,
+       enchantmentPerksOf: () => zp,
+       gunTypeOf: () => Fp,
+       harvestsNullLevelOf: () => Gp,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L9` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L31-L51) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L9)

```diff
-     var pD = wD(3243);
+     const Op = 8558,
+       op = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       Ip = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       Sp = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       xp = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       Lp = {
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
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L11-L20` → after: `L53-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L53-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L53-L67) · [Before (L11-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L11-L20)

```diff
-     function sD() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const DD = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const zD = new BroadcastChannel(pD.m);
-         zD.postMessage({
-           stored: DD
-         }), zD.close()
-       } catch {
-         return null
+     function Pp(pp) {
+       let ip = null;
+       return cp => {
+         var Op;
+         return ip ??= (0, Dp.A)(pp, 10091), null !== (Op = ip[cp]) && void 0 !== Op ? Op : 0
+       }
+     }
+ 
+     function Wp(pp, ip, cp) {
+       const Op = Pp(pp);
+       let op = null,
+         Ip = [];
+       return pp => {
+         const Sp = Op(pp);
+         if (0 !== Sp) return null === op && (op = ip.split(Dp.p), Ip = new Array(op.length)), Ip[Sp - 1] ??= cp(op[Sp - 1])
```

#### 4. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L26-L27` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L76) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L26-L27)

```diff
-       const zD = "object" === typeof DD && null !== DD ? DD.stored : null;
-       return "string" === typeof zD ? zD : null
+       return pp === Dp.f ? null : (0, Dp.C)(pp)
```

#### 5. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L29-L47` → after: `L78-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L78-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L78-L108) · [Before (L29-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L29-L47)

```diff
-   },
-   34257: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD,
-       e: () => sD,
-       f: () => KD
-     });
-     var pD = wD(3243);
-     async function sD(DD, zD, wD) {
-       let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const KD = rD(await DD.getItem(pD.h, zD));
-       if (null === KD || sD()) return null;
-       const LD = await DD.getItem(pD.k, zD);
-       return sD() ? null : (await async function(DD) {
-         await Promise.all([DD.removeItem(pD.h), DD.removeItem(pD.k)])
-       }(DD).catch(wD), {
- ... (3 more removed lines; see GitHub link above)
+     const wp = Wp("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
+       vp = Wp("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,,#%$+##$#4+#+##$+ … [truncated]
+       tp = new Map,
+       Hp = new Map;
+     let dp = -1;
+ 
+     function ep(pp, ip, cp) {
+       dp !== (0, Yp.g)() && (dp = (0, Yp.g)(), tp.clear(), Hp.clear());
+       let Op = pp.get(ip);
+       return void 0 === Op && (Op = cp(), void 0 !== Op && pp.set(ip, Op)), Op
+     }
+     const jp = Wp("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       kp = Wp("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       mp = Wp(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       Rp = Wp("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       qp = Wp(">W]+#%#)$)%9$", "none|sniper", yp),
+ ... (15 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L51-L53` → after: `L112-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L112-L116) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L51-L53)

```diff
-       return (0, pD.t)() ? Promise.resolve(null) : sD(DD, !1, (DD => {
-         console.error("Error removing temporary texture pack: ", DD)
-       }), pD.t)
+       const ip = vp(pp);
+       return null !== ip ? ip : ep(Hp, pp, (() => {
+         var ip;
+         return null !== (ip = (0, Dp.D)(Np(pp))) && void 0 !== ip ? ip : void 0
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L57-L59` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L120) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L57-L59)

```diff
-       if ("object" !== typeof DD || null === DD) return null;
-       const zD = DD.metaData;
-       return "object" !== typeof zD || null === zD || "string" !== typeof zD.id ? null : DD
+       return jp(pp)
```

#### 8. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L61-L62` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L122) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L61-L62)

```diff
-   },
-   50802: (DD, zD, wD) => {
+ 
```

#### 9. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L64` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L124) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L64)

```diff
-       return null === DD.gameSource ? "player" : "customGame"
+       return kp(pp)
```

#### 10. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L75` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L128) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L75)

```diff
-       return "" === DD || "string" === typeof DD && sD.test(DD)
+       return mp(pp)
```

#### 11. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L79-L82` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L132) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L79-L82)

```diff
-       return "object" === typeof DD && null !== DD && ("earth" === DD.type || Object.entries(DD).every((DD => {
-         let [zD, wD] = DD;
-         return "type" === zD || KD(wD)
-       })))
+       return Rp(pp)
```

#### 12. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L92-L110` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L136) · [Before (L92-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L92-L110)

```diff
-       var zD, wD;
-       if (DD.includes("\\") || LD.test(DD)) return !0;
-       const pD = [...DD.matchAll(cD)];
-       return pD.length !== (null !== (zD = null === (wD = DD.match(gD)) || void 0 === wD ? void 0 : wD.length) && void 0 !== zD ? zD : 0) || !pD.every((DD => {
-         var zD, wD, pD;
-         let {
-           groups: sD
-         } = DD;
-         return function(DD) {
-           try {
-             return RD.every((zD => {
-               const wD = new URL(DD, zD);
-               return "data:" === wD.protocol || AD.has(wD.origin) || UD.has(wD.href)
-             }))
-           } catch {
-             return !1
- ... (3 more removed lines; see GitHub link above)
+       return qp(pp)
```

#### 13. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L114-L117` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L140) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L114-L117)

```diff
-       var zD, wD, pD, sD, LD, cD, gD;
-       const RD = [...Object.values(null !== (zD = DD.textureOverrides) && void 0 !== zD ? zD : {}), ...Object.values(null !== (wD = DD.modelOverrides) && void 0 !== wD ? wD : {})],
-         AD = [...Object.values(null !== (pD = null === (sD = DD.customCss) || void 0 === sD ? void 0 : sD.fontFaces) && void 0 !== pD ? pD : {}), ...Object.values(null !== (LD = null === (cD = DD.customCss) || void 0 === cD ? void 0 : cD.classStyles) && void 0 !== LD ? LD : {})]. … [truncated]
-       return !RD.every(KD) || !Object.values(null !== (gD = DD.skyBoxes) && void 0 !== gD ? gD : {}).every(rD) || AD.some((DD => "string" === typeof DD && fD(DD)))
+       return Mp(pp)
```

#### 14. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L120-L137` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L143-L144) · [Before (L120-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L120-L137)

```diff
-     function BD(DD, zD) {
-       if (null === DD || "player" === zD || !ID(DD)) return DD;
-       const wD = {
-         ...DD
-       };
-       return DD.textureOverrides && (wD.textureOverrides = hD(DD.textureOverrides, KD, "texture")), DD.modelOverrides && (wD.modelOverrides = hD(DD.modelOverrides, KD, "model")), DD.skyBoxes && (wD.skyBoxes = hD(DD.skyBoxes, rD, "sky")), DD.customCss && (wD.customCss = function(D … [truncated]
-         const zD = DD => hD(DD, (DD => "string" === typeof DD && !fD(DD)), "CSS"),
-           {
-             fontFaces: wD,
-             classStyles: pD
-           } = GD(DD) ? DD : {},
-           sD = {};
-         for (const [KD, rD] of Object.entries(GD(pD) ? pD : {})) sD[KD] = zD(rD);
-         return {
-           fontFaces: (Array.isArray(wD) ? wD : []).map(zD),
-           classStyles: sD
- ... (2 more removed lines; see GitHub link above)
+     function gp(pp) {
+       return 0 !== Ep(pp)
```

#### 15. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L141` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L148) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L141)

```diff
-       return "object" === typeof DD && null !== DD && !Array.isArray(DD)
+       return Xp(pp)
```

#### 16. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L144-L160` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L151-L152) · [Before (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L144-L160)

```diff
-     function hD(DD, zD, wD) {
-       const pD = Object.entries(GD(DD) ? DD : {}),
-         sD = pD.filter((DD => {
-           let [, wD] = DD;
-           return !zD(wD)
-         }));
-       if (sD.length > 0) {
-         const DD = sD.map((DD => {
-           let [zD] = DD;
-           return zD
-         }));
-         console.warn(`Ignoring a custom game texture pack's ${wD} files that name another site: ${DD.join(", ")}`)
-       }
-       return Object.fromEntries(pD.filter((DD => {
-         let [, wD] = DD;
-         return zD(wD)
- ... (1 more removed lines; see GitHub link above)
+     function rp(pp) {
+       return 0 !== Cp(pp)
```

#### 17. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L162-L396` → after: `L154-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L154-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L154-L159) · [Before (L162-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L162-L396)

```diff
-   },
-   50808: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => ID,
-       e: () => MD,
-       f: () => nD
-     });
-     var pD = wD(1008),
-       sD = wD(2130),
-       KD = wD(3227),
-       rD = wD(3243),
-       LD = wD(34265),
-       cD = wD(34257),
-       gD = wD(50802),
-       RD = wD(40907),
-       AD = wD(40883),
- ... (219 more removed lines; see GitHub link above)
+ 
+     function Zp(pp) {
+       const ip = lp(pp);
+       if (void 0 === ip || ip.startsWith(Dp.m)) return null === ip || void 0 === ip ? void 0 : ip.slice(Dp.m.length);
+       const cp = (0, Yp.d)(pp);
+       return void 0 === cp ? void 0 : `${cp}${Dp.p}${ip}`
```

#### 18. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L398-L410` → after: `L161-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L161-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L161-L174) · [Before (L398-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L398-L410)

```diff
-     async function BD(DD, zD, wD) {
-       const pD = (0, cD.b)(await wD.fetchPack(zD));
-       if (null !== pD) return {
-         pack: pD,
-         key: zD
-       };
-       const sD = await wD.packKey(DD);
-       if (null === sD) return null;
-       const KD = (0, cD.b)(await wD.fetchPack(sD));
-       if (null === KD) throw new Error(`no texture pack at ${sD}`);
-       return {
-         pack: KD,
-         key: sD
+ 
+     function zp(pp) {
+       var ip;
+       return null !== (ip = Qp(pp)) && void 0 !== ip ? ip : Ap
+     }
+     let sp = null;
+ 
+     function Kp() {
+       if (null === sp) {
+         const pp = [],
+           ip = new Dp.s(op);
+         let cp = 0;
+         for (; !ip.done;) cp += (0, Dp.K)(ip.next()), pp.push(cp);
+         sp = Object.freeze(pp)
```

#### 19. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L415` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L180-L185) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L415)

```diff
-       return null === DD || DD.metaData.id === sD.c
+       return Jp(pp)
+     }
+ 
+     function ii(pp, ip) {
+       var cp;
+       return 0 !== ((null !== (cp = Bp(pp)) && void 0 !== cp ? cp : 0) & ip)
```

#### 20. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L419-L420` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L189) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L419-L420)

```diff
-       const zD = (0, cD.b)(DD);
-       return GD(zD) ? null : zD
+       return ii(pp, Dp.b.OnlyInSearch)
```

#### 21. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L422-L428` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L191-L193) · [Before (L422-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L422-L428)

```diff
-     async function nD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KD.b;
-       if (null === DD.pack) return null;
-       const {
-         packAssets: pD
-       } = await Promise.all([wD.e(203), wD.e(44)]).then((() => wD(61258)));
-       return pD(DD, zD)
+ 
+     function Oi(pp) {
+       return ii(pp, Dp.b.OnlyInCategory)
```

#### 22. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L432-L437` → after: `L197-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L197-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/201.js#L197-L225) · [Before (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/201.js#L432-L437)

```diff
-       const zD = (0, rD.x)();
-       return null === zD ? () => {} : (zD.onmessage = zD => {
-         DD.readPlayerPack((0, LD.g)(zD.data))
-       }, () => {
-         zD.close()
-       })
+       return ii(pp, Dp.b.DevOnly)
+     }
+ 
+     function Ii(pp) {
+       return !ii(pp, Dp.b.HiddenByDefault) && void 0
+     }
+ 
+     function Si(pp, ip, cp, Op) {
+       var op;
+       const Ip = null !== (op = Bp(pp)) && void 0 !== op ? op : 0;
+       return 0 !== (Ip & Dp.b.DisabledInPublicLobbies) && ip || 0 !== (Ip & Dp.b.DisabledInProduction) && !0 || !cp || !Op && 0 !== (Ip & Dp.b.DevOnly)
+     }
+     let xi = null;
+ 
+     function Li() {
+       if (null === xi) {
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/202.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/202.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9)

#### 1. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L4-L36` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/202.js#L4-L76) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/202.js#L4-L36)

```diff
-   34269: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       packDisplayName: () => ID,
-       packModelMessage: () => BD,
-       packModelSummary: () => hD,
-       refusedPackModels: () => GD
-     });
-     var pD = wD(34278),
-       sD = wD(34287);
-     const KD = "DRACO",
-       rD = 0,
-       LD = 1,
-       cD = 0,
-       gD = 1,
-       RD = 32768;
- 
- ... (17 more removed lines; see GitHub link above)
+   41773: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(62),
+       op = cp(2835);
+ 
+     function Ip(pp, ip, cp) {
+       const Ip = (0, Op.useRef)(null),
+         {
+           width: Sp,
+           height: xp
+         } = (0, op.d)(pp);
+       (0, Op.useEffect)((() => {
+         const cp = ip(pp.current);
+         return Ip.current = cp, () => {
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L38-L116` → after: `L78-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L78-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/202.js#L78-L97) · [Before (L38-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/202.js#L38-L116)

```diff
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let DD = 0; DD < KD.length; DD++)
-           if (pD() !== KD.charCodeAt(DD)) return null;
-         const zD = pD(),
-           UD = pD(),
-           fD = pD(),
-           ID = pD(),
-           BD = pD() | pD() << 8;
-         if (2 !== zD) return null;
-         0 !== (BD & RD) && function(DD, zD, wD) {
-           const pD = () => {
-               zD(wD())
-             },
-             sD = () => {
- ... (63 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     const xp = Sp([0, 0, 0], [0, 0, 0], .07),
+       Lp = (0, op.b)((0, Op.d)(xp), "mobIdle"),
+       Yp = Sp([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       Dp = Sp([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       Ap = (0, op.b)((0, Op.d)(Yp), "gunReady"),
+       Pp = (0, op.b)((0, Op.d)(Dp), "gunAimed")
+   },
+   38856: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => op,
+       c: () => Ip
+     });
+     const Op = new WeakMap;
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L120-L127` → after: `L101-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L101-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/202.js#L101-L288) · [Before (L120-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/202.js#L120-L127)

```diff
-       return null !== (zD = DD.name) && void 0 !== zD ? zD : DD.fromFolderName || DD.id
-     }
- 
-     function BD(DD, zD, wD) {
-       return `Texture pack "${DD}": model "${zD}" was not loaded because it ${wD}. The default model is used instead.`
-     }
- 
-     function GD(DD, zD, wD) {
+       return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
+     }
+   },
+   34466: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp,
+       e: () => op,
+       i: () => Dp
+     });
+     var Op = cp(1579);
+ 
+     function op(pp) {
+       var ip;
+       return {
+         ...Sp.store,
+         yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
+ ... (172 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L129-L141` → after: `L290-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L290-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/202.js#L290-L304) · [Before (L129-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/202.js#L129-L141)

```diff
-         strictDraco: KD = !1
-       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const rD = {};
-       for (const [LD, cD] of Object.entries(zD)) {
-         let zD;
-         if (cD.startsWith("data:")) try {
-           const DD = new Uint8Array((0, sD.s)(cD));
-           if (zD = (0, pD.d)(DD), null === zD) {
-             const {
-               json: wD,
-               bin: pD
-             } = (0, sD.D)(DD);
-             zD = UD(wD, pD, KD)
+         players: ip,
+         className: cp
+       } = pp;
+       const op = (0, Op.useRef)(null),
+         Sp = (0, Op.useMemo)((() => ip.map((pp => {
+           let {
+             cosmetics: ip,
+             size: cp,
+             heldGun: Op
+           } = pp;
+           return {
+             cosmetics: ip,
+             size: cp,
+             qm: Op.name,
+             animation: Op.aimed ? xp.b : xp.e
```

#### 5. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L143-L157` → after: `L306-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L306-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/202.js#L306-L332) · [Before (L143-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/202.js#L143-L157)

```diff
-         } catch {
-           zD = "is not a binary glTF 2.0 file"
-         } else zD = "loads data from outside the file";
-         zD && (rD[LD] = zD, wD && console.warn(BD(DD, LD, zD)))
-       }
-       return rD
-     }
- 
-     function hD(DD, zD) {
-       const wD = Object.keys(zD);
-       if (0 === wD.length) return null;
-       if (1 === wD.length) return BD(DD, wD[0], zD[wD[0]]);
-       const pD = wD.map((DD => `"${DD}" ${zD[DD]}`)).join("; ");
-       return `Texture pack "${DD}": ${wD.length} models were not loaded (${pD}). The default models are used instead.`
-     }
+         }))), [ip]),
+         Ap = function(pp) {
+           const [ip, cp] = (0, Op.useState)([]);
+           return (0, Op.useEffect)((() => {
+             cp(pp.map((() => !1)));
+             const ip = pp.map(((pp, ip) => {
+               let {
+                 showAfterMs: Op
+               } = pp;
+               return window.setTimeout((() => {
+                 cp((pp => pp.map(((pp, cp) => pp || cp === ip))))
+               }), Op)
+             }));
+             return () => {
+               for (const pp of ip) window.clearTimeout(pp)
+             }
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 1. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L6` → after: `L4-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L4-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L4-L124) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L4-L6)

```diff
-   34278: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => jD,
+   41768: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       MobPreview: () => Ap
+     });
+     var Op = cp(62),
+       op = cp(1049),
+       Ip = cp.n(op),
+       Sp = cp(41773),
+       xp = cp(34462),
+       Lp = cp(41776),
+       Yp = cp(1112);
+ 
+     function Dp(pp) {
+       return xp.j.openMob(pp)
+     }
+     const Ap = (0, Op.memo)((function(pp) {
+ ... (105 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L10` → after: `L128-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L128-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L128-L136) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L10)

```diff
-     var pD = wD(34287);
+     var Op = cp(1579);
+ 
+     function op(pp) {
+       var ip;
+       return {
+         ...Sp.store,
+         yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
+       }
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L12-L21` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L138-L141) · [Before (L12-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L12-L21)

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
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
```

#### 4. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L24-L75` → after: `L144-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L144-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L144-L150) · [Before (L24-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L24-L75)

```diff
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
-         bounds: 16,
-         attributeMembers: 32
-       },
-       rD = 1048576,
-       LD = "is not a binary glTF 2.0 file",
-       cD = "loads data from outside the file",
-       gD = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
-       RD = {
-         POSITION: "VEC3",
-         NORMAL: "VEC3",
-         TEXCOORD_0: "VEC2",
-         COLOR_0: "VEC4"
- ... (36 more removed lines; see GitHub link above)
+         player: Ip,
+         store: {
+           ...Ip,
+           radius: 33,
+           target: [0, 3.9, 0]
+         }
+       };
```

#### 5. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L78-L412` → after: `L153-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L153-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L153-L157) · [Before (L78-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L78-L412)

```diff
-       return Number.isInteger(DD) && DD >= 0 && DD < (null !== zD && void 0 !== zD ? zD : 0)
-     }
- 
-     function MD(DD) {
-       return Number.isInteger(DD) && DD >= 0
-     }
- 
-     function OD(DD, zD) {
-       return void 0 !== DD && (!Array.isArray(DD) || DD.length > zD)
-     }
- 
-     function JD(DD, zD) {
-       return "object" === typeof DD && null !== DD && Object.keys(DD).length > zD
-     }
- 
-     function ED(DD) {
- ... (319 more removed lines; see GitHub link above)
+       pp instanceof Promise ? pp.then(ip).catch((pp => {
+         console.error("Couldn't open the preview", pp)
+       })) : ip(pp)
+     }
+     class Lp {
```

#### 6. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L414-L417` → after: `L159-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L159-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L159-L179) · [Before (L414-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L414-L417)

```diff
-         super(`GLB refused: it ${DD}`), this.reason = DD, this.name = "GlbRefused"
-       }
-     }
-     class KD extends Error {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, xp(pp, (pp => {
+           this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height), null !== this.view && pp.show(this.view))
+         }))
+       }
+       show(pp) {
+         var ip;
+         this.view = pp, null === (ip = this.opened) || void 0 === ip || ip.show(pp)
+       }
+       resize(pp, ip) {
+         var cp;
+         this.size = {
+           width: pp,
+           height: ip
+         }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
+       }
+       close() {
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L419-L552` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L181-L182) · [Before (L419-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L419-L552)

```diff
-         super(DD), this.name = "GlbError"
-       }
-     }
- 
-     function rD(DD) {
-       return Reflect.get(DD, "scene")
-     }
-     const LD = 5130562,
-       cD = "is not a binary glTF 2.0 file";
- 
-     function gD(DD) {
-       var zD;
-       const wD = DD instanceof Uint8Array ? DD : new Uint8Array(DD),
-         KD = (0, pD.d)(wD);
-       if (null === KD) throw new sD(cD);
-       const rD = KD.json,
- ... (118 more removed lines; see GitHub link above)
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(pp).then((pp => pp.ready)), xp(pp, (pp => {
+           this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height))
```

#### 8. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L554-L555` → after: `L184-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L184-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/203.js#L184-L289) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/203.js#L554-L555)

```diff
-       }))
-     }
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var pp, ip;
+         return null !== (pp = null === (ip = this.opened) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
+       }
+       setCosmetic(pp, ip) {
+         var cp;
+         null === (cp = this.opened) || void 0 === cp || cp.setCosmetic(pp, ip)
+       }
+       playEmote(pp) {
+         var ip;
+         null === (ip = this.opened) || void 0 === ip || ip.playEmote(pp)
+       }
+ ... (90 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/204.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/204.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1)

#### 1. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L4-L15` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/204.js#L4-L7) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/204.js#L4-L15)

```diff
-   34299: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       animatedBlockTextures: () => cD,
-       armourAtlasUrl: () => rD,
-       averageColors: () => gD,
-       blockAtlasUrls: () => KD,
-       blockAtlasWidth: () => pD,
-       buildHash: () => AD,
-       builtTextureIndexFingerprint: () => RD,
-       imagesPerAtlas: () => sD,
-       outputHash: () => UD,
-       rotatedBlockTextures: () => LD
+   34482: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => op,
+       f: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L17-L10900` → after: `L9-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L9-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/204.js#L9-L438) · [Before (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/204.js#L17-L10900)

```diff
-     const pD = 8,
-       sD = [256, 256, 256, 256, 256, 256, 114],
-       KD = [wD(34303), wD(34309), wD(34315), wD(34322), wD(34326), wD(34333), wD(34340)],
-       rD = wD(34349),
-       LD = {
-         "alloy_kiln_top[rot[1": wD(34353),
-         "alloy_kiln_top[rot[2": wD(34359),
-         "alloy_kiln_top[rot[3": wD(34367),
-         "alloy_kiln_top[rot[4": wD(34375),
-         "auto_bench_top[rot[1": wD(34380),
-         "auto_bench_top[rot[2": wD(34382),
-         "auto_bench_top[rot[3": wD(34384),
-         "auto_bench_top[rot[4": wD(34389),
-         "belt_tunnel_exit_top[rot[1": wD(34392),
-         "belt_tunnel_exit_top[rot[2": wD(34396),
-         "belt_tunnel_exit_top[rot[3": wD(34402),
- ... (10868 more removed lines; see GitHub link above)
+     var Op = cp(3352);
+ 
+     function op() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const pp = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const ip = new BroadcastChannel(Op.j);
+         ip.postMessage({
+           stored: pp
+         }), ip.close()
+       } catch {
+         return null
+       }
+       return pp
+     }
+ 
+ ... (414 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 1. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L4)

```diff
-   41394: (DD, zD, wD) => {
+   34484: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L6-L7)

```diff
-       loadGlbAsset: () => Mz,
-       loadGlbTree: () => nz
+       packDisplayName: () => yp,
+       packModelMessage: () => Up,
+       packModelSummary: () => vp,
+       refusedPackModels: () => wp
```

#### 3. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L9-L63` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L11-L18) · [Before (L9-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L9-L63)

```diff
-     var pD = wD(37891),
-       sD = wD(41401),
-       KD = wD(36232),
-       rD = wD.n(KD);
- 
-     function LD() {
-       return rD()('(()=>{class DD extends Error{}function zD(zD,wD){const pD=zD._malloc(wD);if(0===pD)throw new DD(`Draco: the decoder\'s heap refused ${wD} bytes`);return pD}function wD(DD){return{[DD.DT_FLOAT32]:[Float32Array,5126],[DD.DT_INT8]:[Int8Array,5120],[DD.DT_INT16]:[I … [truncated]
-     }
-     var cD = wD(103);
-     const gD = 1e3;
-     let RD = null,
-       AD = null;
-     const UD = [],
-       fD = [];
-     let ID = 0;
-     const BD = {
- ... (39 more removed lines; see GitHub link above)
+     var Op = cp(34493),
+       op = cp(34496);
+     const Ip = "DRACO",
+       Sp = 0,
+       xp = 1,
+       Lp = 0,
+       Yp = 1,
+       Dp = 32768;
```

#### 4. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L66-L92` → after: `L21-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L21-L36) · [Before (L66-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L66-L92)

```diff
-       const zD = UD.indexOf(DD); - 1 !== zD && UD.splice(zD, 1);
-       const wD = fD.shift();
-       wD && OD(wD)
-     }
- 
-     function MD(DD, zD) {
-       DD.busy = !0, DD.releaseTimer && (clearTimeout(DD.releaseTimer), DD.releaseTimer = null);
-       DD.worker.then((wD => {
-         const pD = ID++;
-         wD.onmessage = sD => {
-           let {
-             data: KD
-           } = sD;
-           if (("decoded" === KD.id || "decodeError" === KD.id) && KD.seq === pD) {
-             if (wD.onmessage = null, wD.onerror = null, "decoded" === KD.id) return BD.decodes++, zD.resolve({
-               indices: KD.indices,
- ... (11 more removed lines; see GitHub link above)
+       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
+       let cp = 0;
+       const Op = () => {
+           if (cp >= pp.byteLength) throw new RangeError("past the stream");
+           return pp[cp++]
+         },
+         op = () => {
+           if (cp + 4 > pp.byteLength) throw new RangeError("past the stream");
+           const Op = ip.getUint32(cp, !0);
+           return cp += 4, Op
+         },
+         Ap = () => {
+           let pp = 0;
+           for (let ip = 0; ip < 35; ip += 7) {
+             const cp = Op();
+             if (pp += (127 & cp) * 2 ** ip, 0 === (128 & cp)) return pp
```

#### 5. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L94-L102` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L38) · [Before (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L94-L102)

```diff
-         }, wD.onerror = pD => {
-           wD.onmessage = null, wD.onerror = null, wD.terminate(), zD.reject(new Error(`Draco: the decode worker failed: ${pD.message}`)), nD(DD)
-         };
-         const sD = {
-           id: "decode",
-           seq: pD,
-           data: zD.data,
-           attributeIds: zD.attributeIds,
-           expected: zD.expected
+           throw new RangeError("varint too long")
```

#### 6. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L158-L173` → after: `L41-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L41-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L41-L51) · [Before (L158-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L158-L173)

```diff
-         return function(DD, zD) {
-           var wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD;
-           const hD = new Map,
-             nD = wD => {
-               let pD = hD.get(wD);
-               if (!pD) {
-                 var sD;
-                 const KD = DD.bufferViews[wD],
-                   rD = null !== (sD = KD.byteOffset) && void 0 !== sD ? sD : 0;
-                 pD = {
-                   index: wD,
-                   bytes: zD.subarray(rD, rD + KD.byteLength),
-                   byteStride: KD.byteStride
-                 }, hD.set(wD, pD)
-               }
-               return pD
+         for (let pp = 0; pp < Ip.length; pp++)
+           if (Op() !== Ip.charCodeAt(pp)) return null;
+         const ip = Op(),
+           Pp = Op(),
+           Wp = Op(),
+           yp = Op(),
+           Up = Op() | Op() << 8;
+         if (2 !== ip) return null;
+         0 !== (Up & Dp) && function(pp, ip, cp) {
+           const Op = () => {
+               ip(cp())
```

#### 7. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L175-L192` → after: `L53-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L53-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L53-L60) · [Before (L175-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L175-L192)

```diff
-             MD = new Map,
-             OD = zD => {
-               let wD = MD.get(zD);
-               if (!wD) {
-                 var pD;
-                 const sD = DD.accessors[zD];
-                 wD = {
-                   index: zD,
-                   count: sD.count,
-                   type: sD.type,
-                   numComponents: XD.q[sD.type],
-                   componentType: sD.componentType,
-                   normalized: null !== (pD = sD.normalized) && void 0 !== pD && pD,
-                   byteOffset: sD.byteOffset,
-                   bufferView: void 0 === sD.bufferView ? null : nD(sD.bufferView),
-                   min: sD.min,
- ... (2 more removed lines; see GitHub link above)
+             op = () => {
+               let cp = 1,
+                 op = !0;
+               for (; cp > 0;) {
+                 cp--, op || Op(), op = !1;
+                 const Ip = pp();
+                 for (let cp = 0; cp < Ip; cp++) Op(), ip(pp());
+                 cp += pp()
```

#### 8. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L196-L400` → after: `L63-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L63-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L63-L76) · [Before (L196-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L196-L400)

```diff
-             JD = null !== (wD = null === (pD = DD.extensionsUsed) || void 0 === pD ? void 0 : pD.includes("KHR_draco_mesh_compression")) && void 0 !== wD && wD,
-             ED = (null !== (sD = DD.meshes) && void 0 !== sD ? sD : []).map(((zD, wD) => {
-               const pD = zD.primitives.map(((zD, wD) => {
-                 var pD, sD, KD;
-                 const rD = JD ? null === (pD = zD.extensions) || void 0 === pD ? void 0 : pD.KHR_draco_mesh_compression : void 0;
-                 let LD = null;
-                 const cD = [];
-                 if (rD) {
-                   const wD = {
-                     vertices: DD.accessors[zD.attributes.POSITION].count,
-                     indices: void 0 === zD.indices ? 0 : DD.accessors[zD.indices].count,
-                     components: {}
-                   };
-                   LD = {
-                     bufferView: nD(rD.bufferView),
-                     attributeIds: {},
- ... (189 more removed lines; see GitHub link above)
+             Ip = pp();
+           for (let Sp = 0; Sp < Ip; Sp++) pp(), op();
+           op()
+         }(Ap, (ip => {
+           if (cp + ip > pp.byteLength) throw new RangeError("past the stream");
+           cp += ip
+         }), Op);
+         const wp = Pp < 2 ? op : Ap;
+         if (Wp === Sp) return {
+           faces: 0,
+           vertices: op()
+         };
+         if (Wp !== xp) return null;
+         if (yp === Lp) {
```

#### 9. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L402-L408` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L78-L79) · [Before (L402-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L402-L408)

```diff
-             kind: pD,
-             data: KD.bytes,
-             offset: null !== (wD = sD.byteOffset) && void 0 !== wD ? wD : 0,
-             stride: LD,
-             components: rD,
-             glType: sD.componentType,
-             isNormalized: sD.normalized
+             faces: wp(),
+             vertices: wp()
```

#### 10. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L410-L427` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L81-L84) · [Before (L410-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L410-L427)

```diff
-         })),
-         wD = DD.indices,
-         pD = wD && bD(wD, jD),
-         sD = DD.position;
-       return new QD.g(zD, pD, sD.count, ...dD(sD, zD))
-     }
-     const iD = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
- 
-     function lD(DD, zD) {
-       const wD = zD.attributes.map((DD => {
-         let {
-           kind: zD,
-           data: wD,
-           size: pD,
-           byteOffset: sD,
-           byteStride: KD,
- ... (2 more removed lines; see GitHub link above)
+         }
+         if (yp !== Yp) return null;
+         Op(), Pp < 2 && Ap();
+         const vp = Ap();
```

#### 11. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L429-L435` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L86-L87) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L429-L435)

```diff
-           kind: zD,
-           data: wD,
-           offset: sD,
-           stride: KD,
-           components: pD,
-           glType: 5120 + iD.indexOf(wD.constructor),
-           isNormalized: rD
+           faces: Ap(),
+           vertices: vp
```

#### 12. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L437-L499` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L89-L90) · [Before (L437-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L437-L499)

```diff
-       }));
-       return new QD.g(wD, zD.indices, zD.totalVertices, ...dD(DD.position, wD))
-     }
- 
-     function WD(DD) {
-       const zD = DD.lastIndexOf("/");
-       return zD < 0 ? DD : DD.substring(zD + 1)
-     }
- 
-     function ND(DD) {
-       const zD = DD.lastIndexOf("/");
-       return zD < 0 ? "" : DD.substring(0, zD + 1)
-     }
- 
-     function ZD(DD) {
-       return DD.name || `node${DD.index}`
- ... (47 more removed lines; see GitHub link above)
+       } catch {
+         return null
```

#### 13. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L503-L592` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L94-L97) · [Before (L503-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L503-L592)

```diff
-     function tD(DD, zD) {
-       let {
-         translation: wD,
-         rotation: pD,
-         scale: sD
-       } = DD;
-       const KD = new Float32Array(16);
-       return (0, ED.b)(sD, 0, pD, 0, wD, 0, KD), zD && (0, ED.j)(KD, zD, 0, KD), KD
-     }
-     class FD {
-       constructor(DD, zD, wD, pD) {
-         this.model = DD, this.decode = zD, this.fileInfo = wD, this.uniqueRootUrl = pD, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const sD = new Set,
-           KD = (zD, wD) => {
-             const pD = DD.nodes[zD];
-             if (this.parents.has(pD)) throw new XD.m(`/nodes/${zD}: Invalid recursive node hierarchy`);
- ... (74 more removed lines; see GitHub link above)
+     function Pp(pp, ip, cp) {
+       var Op, op;
+       if (null === (Op = null === (op = pp.extensionsUsed) || void 0 === op ? void 0 : op.includes("KHR_draco_mesh_compression")) || void 0 === Op || !Op) return null;
+       for (const yp of null !== (Ip = pp.meshes) && void 0 !== Ip ? Ip : []) {
```

#### 14. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L594-L637` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L99-L111) · [Before (L594-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L594-L637)

```diff
-         let {
-           texture: pD,
-           transform: sD
-         } = DD;
-         const {
-           sampler: KD,
-           image: rD
-         } = this.model.textures[pD], {
-           bufferView: LD,
-           mimeType: cD,
-           name: gD
-         } = this.model.images[rD], RD = sD && {
-           ...sD.offset ? {
-             uOffset: sD.offset[0],
-             vOffset: sD.offset[1]
-           } : {},
- ... (28 more removed lines; see GitHub link above)
+         for (const Op of yp.primitives) {
+           var Sp, xp, Lp, Yp, Dp, Pp;
+           const op = null === (Sp = Op.extensions) || void 0 === Sp ? void 0 : Sp.KHR_draco_mesh_compression;
+           if ("object" !== typeof op || null === op) continue;
+           const Ip = null === (xp = pp.bufferViews) || void 0 === xp ? void 0 : xp[op.bufferView];
+           if (null === ip || void 0 === Ip) return Wp;
+           const yp = null !== (Lp = Ip.byteOffset) && void 0 !== Lp ? Lp : 0,
+             Up = Ap(ip.subarray(yp, yp + Ip.byteLength));
+           if (null === Up && !cp) continue;
+           const wp = null !== (Yp = pp.accessors) && void 0 !== Yp ? Yp : [],
+             vp = null === (Dp = wp[Op.attributes.POSITION]) || void 0 === Dp ? void 0 : Dp.count,
+             tp = void 0 === Op.indices ? 0 : null === (Pp = wp[Op.indices]) || void 0 === Pp ? void 0 : Pp.count;
+           if (null === Up || void 0 === vp || void 0 === tp || 3 * Up.faces !== tp || Up.vertices > vp) return Wp
```

#### 15. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L641-L695` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L116) · [Before (L641-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L641-L695)

```diff
-     async function YD(DD, zD, wD, pD, sD, KD) {
-       let rD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const LD = function(DD, zD, wD) {
-           return "string" !== typeof zD ? {
-             url: "",
-             rootUrl: DD,
-             name: wD()
-           } : zD ? zD.startsWith("data:") ? {
-             url: zD,
-             rootUrl: DD,
-             name: ""
-           } : DD ? {
-             url: DD + zD,
-             rootUrl: DD,
-             name: zD
-           } : {
- ... (39 more removed lines; see GitHub link above)
+     const Wp = "has a Draco stream whose counts don't match its accessors";
```

#### 16. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L698-L796` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L119-L120) · [Before (L698-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L698-L796)

```diff
-       (0, qD.f)(DD) || (DD.geometry && DD.geometry.useBoundingInfoFromGeometry ? DD._updateBoundingInfo() : DD.refreshBoundingInfo(!0, !0))
-     }
-     class pz {
-       constructor(DD, zD) {
-         this.oB = DD, this.decode = zD, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(DD) {
-         let zD = this.viewData.get(DD.index);
-         return zD || (zD = this.bufferData.then((() => DD.bytes)), this.viewData.set(DD.index, zD)), zD
-       }
-       viewBuffer(DD) {
-         let zD = this.viewBuffers.get(DD.index);
-         return zD || (zD = this.viewBytes(DD).then((DD => new((0, HD.e)().nI)(this.oB.iI(), DD, !1))), this.viewBuffers.set(DD.index, zD)), zD
-       }
-       vertexBuffer(DD, zD) {
-         const {
- ... (83 more removed lines; see GitHub link above)
+       var ip;
+       return null !== (ip = pp.name) && void 0 !== ip ? ip : pp.fromFolderName || pp.id
```

#### 17. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L799-L803` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L123-L124) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L799-L803)

```diff
-     function fz(DD, zD) {
-       if (zD && Object.keys(zD).length > 0) {
-         const wD = DD.metadata = DD.metadata || {};
-         (wD.kS = wD.kS || {}).extras = zD
-       }
+     function Up(pp, ip, cp) {
+       return `Texture pack "${pp}": model "${ip}" was not loaded because it ${cp}. The default model is used instead.`
```

#### 18. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L806-L868` → after: `L127-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L127-L132) · [Before (L806-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L806-L868)

```diff
-     function Iz(DD, zD) {
-       zD.position = DD.translation ? rz.WI.FromArray(DD.translation) : rz.WI.Zero(), zD.rotationQuaternion = DD.rotation ? rz.Quaternion.FromArray(DD.rotation) : rz.Quaternion.Identity(), zD.rc = DD.scale ? rz.WI.FromArray(DD.scale) : rz.WI.One()
-     }
-     class Bz {
-       constructor(DD, zD) {
-         if (this.oB = DD, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, zD) {
-           const zD = DD.iI(),
-             wD = DD.Bl.add((() => {
-               this.dispose()
-             })),
-             pD = zD.SI.add((() => {
-               for (const DD of [...this.geometries, ...this.meshes, ...this.textures]) DD._rebuild()
-             }));
-           this.release = () => {
-             DD.Bl.remove(wD), zD.SI.remove(pD)
-           }
- ... (47 more removed lines; see GitHub link above)
+     function wp(pp, ip, cp) {
+       let {
+         strictDraco: Ip = !1
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const Sp = {};
+       for (const [xp, Lp] of Object.entries(ip)) {
```

#### 19. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L870-L931` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L134-L141) · [Before (L870-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L870-L931)

```diff
-         zD && (zD.blockMaterialDirtyMechanism = !0);
-         try {
-           pD = this.loadScene()
-         } finally {
-           null === zD || void 0 === zD || zD._forceBlockMaterialDirtyMechanism(wD)
-         }
-         await pD;
-         const {
-           root: sD,
-           tree: KD
-         } = this;
-         sD && (sD.nC(!0), KD.meshes.push(sD), KD.rootNodes.push(sD));
-         for (const LD of this.asset.model.nodes) {
-           const DD = this.nodeObjects.get(LD.index);
-           DD && ["TransformNode", "LiteNode"].includes(DD.getClassName()) && KD.transformNodes.push(DD);
-           for (const zD of null !== (rD = this.nodePrimitives.get(LD.index)) && void 0 !== rD ? rD : []) {
- ... (46 more removed lines; see GitHub link above)
+         if (Lp.startsWith("data:")) try {
+           const pp = new Uint8Array((0, op.s)(Lp));
+           if (ip = (0, Op.b)(pp), null === ip) {
+             const {
+               json: cp,
+               bin: Op
+             } = (0, op.B)(pp);
+             ip = Pp(cp, Op, Ip)
```

#### 20. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L933-L1038` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L143-L146) · [Before (L933-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L933-L1038)

```diff
-           return this.nodeObjects.get(DD.index)
-         }))
-       }
-       loadMesh(DD, zD, wD, pD) {
-         const sD = [],
-           KD = ZD(zD);
-         if (1 === wD.primitives.length) {
-           const pD = wD.primitives[0];
-           sD.push(this.loadPrimitive(`${DD}/primitives/${pD.index}`, KD, pD, (DD => {
-             this.nodeObjects.set(zD.index, DD), this.nodePrimitives.set(zD.index, [DD])
-           })))
-         } else {
-           const pD = this.node(KD, !1);
-           this.nodeObjects.set(zD.index, pD);
-           const rD = [];
-           this.nodePrimitives.set(zD.index, rD);
- ... (90 more removed lines; see GitHub link above)
+         } catch {
+           ip = "is not a binary glTF 2.0 file"
+         } else ip = "loads data from outside the file";
+         ip && (Sp[xp] = ip, cp && console.warn(Up(pp, xp, ip)))
```

#### 21. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L1053-L1082` → after: `L151-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L151-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/205.js#L151-L156) · [Before (L1053-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/205.js#L1053-L1082)

```diff
-     function KD(DD) {
-       return (0, pD.d)() ? `https://${sD.b.discordDomain}/${DD.href}` : DD.href
-     }
-     const rD = {
-       scriptUrl: KD(new wD.U(wD(41405))),
-       wasmBinaryUrl: KD(new wD.U(wD(41409)))
-     }
-   },
-   36232: DD => {
-     DD.exports = function(DD, zD, wD, pD) {
-       var sD = self || window;
-       try {
-         try {
-           var KD;
-           try {
-             KD = new sD.Blob([DD])
- ... (14 more removed lines; see GitHub link above)
+     function vp(pp, ip) {
+       const cp = Object.keys(ip);
+       if (0 === cp.length) return null;
+       if (1 === cp.length) return Up(pp, cp[0], ip[cp[0]]);
+       const Op = cp.map((pp => `"${pp}" ${ip[pp]}`)).join("; ");
+       return `Texture pack "${pp}": ${cp.length} models were not loaded (${Op}). The default models are used instead.`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 1. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/206.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/206.js#L4-L6)

```diff
-   41411: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => KD
+   34493: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => lp,
+       e: () => Xp,
+       f: () => Ep
```

#### 2. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L8-L9` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/206.js#L10-L67) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/206.js#L8-L9)

```diff
-     var pD = wD(36232),
-       sD = wD.n(pD);
+     var Op = cp(34496);
+     const op = {
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
+       Ip = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L11-L12` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/206.js#L69-L70) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/206.js#L11-L12)

```diff
-     function KD() {
-       return sD()('/*! For license information please see tz47m9.procGen.worker.b7e85110.worker.js.LICENSE.txt */\n(()=>{var DD={61:DD=>{const zD="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,wD=()=>zD.now(),pD=DD=>DD===1/0||(DD= … [truncated]
+     function wp(pp) {
+       return pp.toLocaleString("en-US")
```

#### 4. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L14-L17` → after: `L72-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L72-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/206.js#L72-L385) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/206.js#L14-L17)

```diff
-   },
-   36232: DD => {
-     DD.exports = function(DD, zD, wD, pD) {
-       var sD = self || window;
+ 
+     function vp(pp, ip, cp) {
+       return pp > ip ? `has ${wp(pp)} ${cp} (the limit is ${wp(ip)})` : null
+     }
+ 
+     function tp(pp, ip) {
+       return Number.isInteger(pp) && pp >= 0 && pp < (null !== ip && void 0 !== ip ? ip : 0)
+     }
+ 
+     function Hp(pp) {
+       return Number.isInteger(pp) && pp >= 0
+     }
+ 
+     function dp(pp, ip) {
+       return void 0 !== pp && (!Array.isArray(pp) || pp.length > ip)
+     }
+ ... (298 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L19-L32` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/206.js#L387-L391) · [Before (L19-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/206.js#L19-L32)

```diff
-         try {
-           var KD;
-           try {
-             KD = new sD.Blob([DD])
-           } catch (gD) {
-             (KD = new(sD.BlobBuilder || sD.WebKitBlobBuilder || sD.MozBlobBuilder || sD.MSBlobBuilder)).append(DD), KD = KD.getBlob()
-           }
-           var rD = sD.URL || sD.webkitURL,
-             LD = rD.createObjectURL(KD),
-             cD = new sD[zD](LD, wD);
-           return rD.revokeObjectURL(LD), cD
-         } catch (gD) {
-           return new sD[zD]("data:application/javascript,".concat(encodeURIComponent(DD)), wD)
-         }
+         const {
+           json: ip,
+           bin: cp
+         } = (0, Op.B)(pp);
+         return Xp(ip, cp)
```

#### 6. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L34-L35` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/206.js#L393-L394) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/206.js#L34-L35)

```diff
-         if (!pD) throw Error("Inline worker is not supported");
-         return new sD[zD](pD, wD)
+         if (cp instanceof Op.o) return cp.reason;
+         throw cp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/207.js#L4)

```diff
-   41427: (DD, zD, wD) => {
+   34510: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/207.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/207.js#L6)

```diff
-       default: () => KD
+       animatedBlockTextures: () => Lp,
+       armourAtlasUrl: () => Sp,
+       averageColors: () => Yp,
+       blockAtlasUrls: () => Ip,
+       blockAtlasWidth: () => Op,
+       buildHash: () => Ap,
+       builtTextureIndexFingerprint: () => Dp,
+       imagesPerAtlas: () => op,
+       outputHash: () => Pp,
+       rotatedBlockTextures: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L8-L37` → after: `L17-L10902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L17-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/207.js#L17-L10902) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/207.js#L8-L37)

```diff
-     var pD = wD(36232),
-       sD = wD.n(pD);
- 
-     function KD() {
-       return sD()('(()=>{var DD={12:(DD,zD,wD)=>{DD.exports=wD.p+"static/media/zstdDecodeWorker.8b97796a464bf78b713d.js"},18:(DD,zD,wD)=>{DD.exports=wD.p+"static/media/bloxd_wasm_bg.a1e1cea62f727684ff7c.wasm"},22:(DD,zD,wD)=>{DD.exports=wD.p+"static/media/bloxd_wasm_textures_bg.3 … [truncated]
-     }
-   },
-   36232: DD => {
-     DD.exports = function(DD, zD, wD, pD) {
-       var sD = self || window;
-       try {
-         try {
-           var KD;
-           try {
-             KD = new sD.Blob([DD])
-           } catch (gD) {
- ... (14 more removed lines; see GitHub link above)
+     const Op = 8,
+       op = [256, 256, 256, 256, 256, 256, 114],
+       Ip = [cp(34515), cp(34524), cp(34531), cp(34533), cp(34539), cp(34547), cp(34554)],
+       Sp = cp(34558),
+       xp = {
+         "alloy_kiln_top[rot[1": cp(34560),
+         "alloy_kiln_top[rot[2": cp(34566),
+         "alloy_kiln_top[rot[3": cp(34569),
+         "alloy_kiln_top[rot[4": cp(34572),
+         "auto_bench_top[rot[1": cp(34575),
+         "auto_bench_top[rot[2": cp(34578),
+         "auto_bench_top[rot[3": cp(34584),
+         "auto_bench_top[rot[4": cp(34593),
+         "belt_tunnel_exit_top[rot[1": cp(34601),
+         "belt_tunnel_exit_top[rot[2": cp(34605),
+         "belt_tunnel_exit_top[rot[3": cp(34610),
+ ... (10870 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L2)

```diff
- export const ids = [208, 209];
+ export const ids = [208];
```

#### 2. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L4)

```diff
-   36240: (DD, zD, wD) => {
+   36453: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => KD,
-       reportCappedWasmFailure: () => cD,
-       reportUncappedWasmFailure: () => LD,
-       reportWasmCrash: () => sD,
-       reportWasmFailure: () => rD
+       WasmTextureWorker: () => tp
```

#### 4. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L12-L71` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L8-L11) · [Before (L12-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L12-L71)

```diff
-     var pD = wD(2925);
- 
-     function sD(DD) {
-       (0, pD.reportClientError)("wasm_load", DD.message, DD.code)
-     }
-     const KD = pD.c - 4;
- 
-     function rD(DD, zD, wD) {
-       (0, pD.reportClientError)(DD, zD, wD, !1)
-     }
- 
-     function LD(DD, zD, wD) {
-       (0, pD.reportClientError)(DD, zD, wD, !1, 1 / 0)
-     }
- 
-     function cD(DD, zD, wD) {
- ... (44 more removed lines; see GitHub link above)
+     var Op = cp(629),
+       op = cp(3296),
+       Ip = cp(36455),
+       Sp = cp.n(Ip);
```

#### 5. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L74-L109` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L14) · [Before (L74-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L74-L109)

```diff
-       OD() || (0, nD.c)((() => {
-         QD()
-       }))
-     }
- 
-     function VD() {
-       if (OD()) return async () => ((0, cD.i)("unsupported", 0), PD("unsupported", "This browser has no WebAssembly"), !1);
-       const DD = {
-         reloadFailedDownload: !0
-       };
-       return QD(DD), async () => {
-         var zD;
-         const wD = performance.now();
-         await QD(DD);
-         const pD = (performance.now() - wD) / 1e3;
-         if ((0, sD.P)()) return (0, cD.i)("ready", pD), GD || (GD = !0, (0, sD.W)((() => {
- ... (20 more removed lines; see GitHub link above)
+       return Sp()('(()=>{var pp={d:(ip,cp)=>{for(var Op in cp)pp.o(cp,Op)&&!pp.o(ip,Op)&&Object.defineProperty(ip,Op,{enumerable:!0,get:cp[Op]})},o:(pp,ip)=>Object.prototype.hasOwnProperty.call(pp,ip),r:pp=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(p … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L111-L125` → after: `L16-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L16-L20) · [Before (L111-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L111-L125)

```diff
- 
-     function PD(DD, zD) {
-       (0, RD.j)(MD, `Bloxd wasm ${DD}, so the game can't start: ${zD}`, zD, DD)
-     }
-   },
-   36254: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => LD,
-       h: () => gD,
-       j: () => rD,
-       m: () => AD
-     });
-     var pD = wD(36244),
-       sD = wD(9);
-     const KD = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+     var Lp = cp(36464),
+       Yp = cp(3322),
+       Dp = cp(3335),
+       Ap = cp(3333),
+       Pp = cp(3305);
```

#### 7. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L128-L130` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L23) · [Before (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L128-L130)

```diff
-       if (DD instanceof WebAssembly.RuntimeError) return !0;
-       const zD = DD instanceof Error ? DD.stack : void 0;
-       return "string" === typeof zD && KD.test(zD)
+       return "" === pp ? [] : pp.split("\0")
```

#### 8. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L145-L890` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L27-L28) · [Before (L145-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L145-L890)

```diff
-       var zD;
-       let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(DD instanceof Error) || !cD.test(DD.message)) return {};
-       if (!("detached" in wD)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, sD.W)(null === (zD = (0, sD.O)(wD, "detached")) || void 0 === zD ? void 0 : zD.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
-     }
-     const RD = 500;
- 
-     function AD(DD) {
-       let zD = "[object Object]";
-       try {
-         zD = String(DD)
- ... (730 more removed lines; see GitHub link above)
+       if ("" !== pp)
+         for (const ip of pp.split("\n")) console.error(ip)
```

#### 9. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L894-L914` → after: `L32-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L32-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L32-L76) · [Before (L894-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L894-L914)

```diff
-       let wD, pD;
-       try {
-         const sD = Lz(DD, Mz.WVOc),
-           KD = Oz,
-           rD = Az(zD, Mz.WVOc, Mz.WlAG),
-           LD = Oz,
-           cD = Mz.Djt9(sD, KD, rD, LD);
-         return wD = cD[0], pD = cD[1], YD(cD[0], cD[1])
-       } finally {
-         Mz.gQde(wD, pD, 1)
-       }
-     }
- 
-     function ID() {
-       const DD = Mz.Uwo2();
-       var zD = aD(DD[0], DD[1]).slice();
- ... (5 more removed lines; see GitHub link above)
+       return async function(pp, ip) {
+         const cp = Object.keys(pp),
+           Op = [],
+           op = new Map,
+           Ip = new Uint32Array(cp.length);
+         for (const [Sp, xp] of cp.entries()) {
+           const {
+             url: ip
+           } = pp[xp];
+           op.has(ip) || (op.set(ip, Op.length), Op.push(ip)), Ip[Sp] = op.get(ip)
+         }
+         return {
+           sources: await ip(Op),
+           names: cp.join("\0"),
+           sourceOfName: Ip
+         }
+ ... (29 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L918-L937` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L80-L81) · [Before (L918-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L918-L937)

```diff
-       const wD = Az(DD, Mz.WVOc, Mz.WlAG),
-         pD = Oz,
-         sD = Mz.F2Gh(wD, pD, zD);
-       if (sD[1]) throw Uz(sD[0])
-     }
- 
-     function hD() {
-       Mz.mTZR()
-     }
- 
-     function nD() {
-       return Mz.WrTh() >>> 0
-     }
- 
-     function MD(DD) {
-       return 0 !== Mz.pOxO(DD)
- ... (4 more removed lines; see GitHub link above)
+       const cp = Dp.l.from(pp, ip ? Dp.k.Optional : Dp.k.Error);
+       return cp.code !== Dp.k.Fetch && cp.code !== Dp.k.Error && (0, Yp.f)(cp.message), cp
```

#### 11. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L941` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L85) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L941)

```diff
-       Mz.CO6A(DD)
+       return pp.message ? new Error(`the texture worker failed: ${pp.message}`) : new Dp.l(Dp.k.Load, "the texture worker failed to start")
```

#### 12. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L943-L1017` → after: `L87-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L87-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L87-L198) · [Before (L943-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L943-L1017)

```diff
- 
-     function ED() {
-       return Mz.KNyv() >>> 0
-     }
- 
-     function QD() {
-       return Mz.z70A() >>> 0
-     }
- 
-     function XD() {
-       return 0 !== Mz.rCme()
-     }
- 
-     function VD() {
-       const DD = Mz.HMLY();
-       var zD = aD(DD[0], DD[1]).slice();
- ... (59 more removed lines; see GitHub link above)
+     class tp {
+       constructor(pp) {
+         this.worker = pp, this.failure = void 0, this.abandonStep = null, pp.addEventListener("error", (pp => {
+           pp.preventDefault(), this.failure ??= vp(pp)
+         }))
+       }
+       static async generateRequired(pp, ip, cp, Ip) {
+         let Sp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dp.d,
+           Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const Pp = (0, Lp.i)();
+         if (null !== Pp) throw wp(new Dp.l(Dp.k.Load, Pp), !1);
+         let Wp;
+         const vp = new AbortController;
+         try {
+           Wp = new tp(function() {
+             try {
+ ... (96 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1021-L1209` → after: `L205-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L205-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L205-L274) · [Before (L1021-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1021-L1209)

```diff
-     }
-     Symbol.dispose && (AD.prototype[Symbol.dispose] = AD.prototype.free);
-     const SD = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((DD => Mz.McbW(DD, 1))),
-       iD = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((DD => Mz.Xtez(DD, 1))),
-       lD = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((DD => Mz.yF0o(DD, 1))),
-       WD = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
- ... (173 more removed lines; see GitHub link above)
+       async generateOptional() {
+         let pp;
+         try {
+           pp = await this.request({
+             type: "optional"
+           }, [])
+         } catch (ip) {
+           throw wp(ip, !0)
+         } finally {
+           this.terminate()
+         }
+         return yp(pp.warnings),
+           function(pp) {
+             let {
+               blocks: ip,
+               counts: cp,
+ ... (54 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1211-L1220` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L276) · [Before (L1211-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1211-L1220)

```diff
-             if (! function(DD) {
-                 switch (DD) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
-               }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw wD;
-             console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wD)
+             Lp(), op(Yp)
```

#### 15. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1222-L1255` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L278-L279) · [Before (L1222-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1222-L1255)

```diff
-           const pD = await DD.arrayBuffer();
-           return await WebAssembly.instantiate(pD, zD)
-         } {
-           const wD = await WebAssembly.instantiate(DD, zD);
-           return wD instanceof WebAssembly.Instance ? {
-             instance: wD,
-             module: DD
-           } : wD
-         }
-       }(await DD, zD);
-       return Jz(wD, pD)
-     }
-   },
-   36280: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD,
- ... (18 more removed lines; see GitHub link above)
+         }))
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1264-L1266` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L283) · [Before (L1264-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1264-L1266)

```diff
-       return new Error(`${DD}: ${zD instanceof Error?`${zD.name}: ${zD.message}`:String(zD)}`, {
-         cause: zD
-       })
+       return ip > 0 ? `${pp}, its module's memory ${Math.round(ip/2**20)} MiB` : pp
```

#### 17. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1272` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L286) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1272)

```diff
-   36257: (DD, zD, wD) => {
+   36481: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1277-L1279` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L293-L294) · [Before (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1277-L1279)

```diff
-     var pD = wD(2868),
-       sD = wD(6653),
-       KD = wD(36264);
+     const Op = 1024,
+       op = 1024 * Op;
```

#### 19. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1281-L1282` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L296-L297) · [Before (L1281-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1281-L1282)

```diff
-     function rD() {
-       return new URL(new wD.U(wD(36273)).href, globalThis.location?.href).href
+     function Ip(pp) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, pp / op)))
```

#### 20. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1286-L1289` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L300-L301) · [Before (L1286-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1286-L1289)

```diff
-     function cD() {
-       return LD ??= (async () => (0, pD.B)(new URL(rD()), (0, sD.d)("bloxd_wasm_textures")))().catch((DD => {
-         throw (0, KD.e)((0, pD.G)(DD), DD)
-       })), LD
+     function Sp(pp) {
+       return (pp / op).toFixed(1)
```

#### 21. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1292-L1324` → after: `L304-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L304-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/208.js#L304-L324) · [Before (L1292-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/208.js#L1292-L1324)

```diff
-   36244: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD,
-       h: () => KD,
-       k: () => cD,
-       l: () => rD,
-       n: () => sD
-     });
-     const pD = /^alloc_failed (\d+) bytes$/;
- 
-     function sD(DD, zD) {
-       return KD(DD, zD) ? `trap=alloc_failed ${zD} bytes` : `trap=${DD}`
-     }
- 
-     function KD(DD, zD) {
-       return "unreachable" === DD && zD > 0
- ... (17 more removed lines; see GitHub link above)
+   36455: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       var op = self || window;
+       try {
+         try {
+           var Ip;
+           try {
+             Ip = new op.Blob([pp])
+           } catch (Yp) {
+             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
+           }
+           var Sp = op.URL || op.webkitURL,
+             xp = Sp.createObjectURL(Ip),
+             Lp = new op[ip](xp, cp);
+           return Sp.revokeObjectURL(xp), Lp
+         } catch (Yp) {
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/209.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/209.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9)

#### 1. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L4)

```diff
-   36240: (DD, zD, wD) => {
+   41741: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L10` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L6-L7) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => KD,
-       reportCappedWasmFailure: () => cD,
-       reportUncappedWasmFailure: () => LD,
-       reportWasmCrash: () => sD,
-       reportWasmFailure: () => rD
+       loadGlbAsset: () => ei,
+       loadGlbTree: () => di
```

#### 3. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L12` → after: `L9-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L9-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L9-L63) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L12)

```diff
-     var pD = wD(2925);
+     var Op = cp(38124),
+       op = cp(41745),
+       Ip = cp(36455),
+       Sp = cp.n(Ip);
+ 
+     function xp() {
+       return Sp()('(()=>{class pp extends Error{}function ip(ip,cp){const Op=ip._malloc(cp);if(0===Op)throw new pp(`Draco: the decoder\'s heap refused ${cp} bytes`);return Op}function cp(pp){return{[pp.DT_FLOAT32]:[Float32Array,5126],[pp.DT_INT8]:[Int8Array,5120],[pp.DT_INT16]:[I … [truncated]
+     }
+     var Lp = cp(104);
+     const Yp = 1e3;
+     let Dp = null,
+       Ap = null;
+     const Pp = [],
+       Wp = [];
+     let yp = 0;
+     const Up = {
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L15` → after: `L66-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L66-L68) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L15)

```diff
-       (0, pD.reportClientError)("wasm_load", DD.message, DD.code)
+       const ip = Pp.indexOf(pp); - 1 !== ip && Pp.splice(ip, 1);
+       const cp = Wp.shift();
+       cp && dp(cp)
```

#### 5. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L19-L20` → after: `L71-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L71-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L71-L107) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L19-L20)

```diff
-     function rD(DD, zD, wD) {
-       (0, pD.reportClientError)(DD, zD, wD, !1)
+     function Hp(pp, ip) {
+       pp.busy = !0, pp.releaseTimer && (clearTimeout(pp.releaseTimer), pp.releaseTimer = null);
+       pp.worker.then((cp => {
+         const Op = yp++;
+         cp.onmessage = op => {
+           let {
+             data: Ip
+           } = op;
+           if (("decoded" === Ip.id || "decodeError" === Ip.id) && Ip.seq === Op) {
+             if (cp.onmessage = null, cp.onerror = null, "decoded" === Ip.id) return Up.decodes++, ip.resolve({
+               indices: Ip.indices,
+               attributes: Ip.attributes,
+               totalVertices: Ip.totalVertices
+             }), void(() => {
+               const ip = Wp.shift();
+               ip ? Hp(pp, ip) : (pp.busy = !1, pp.releaseTimer = setTimeout((() => {
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L23-L24` → after: `L110-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L110-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L110-L123) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L23-L24)

```diff
-     function LD(DD, zD, wD) {
-       (0, pD.reportClientError)(DD, zD, wD, !1, 1 / 0)
+     function dp(pp) {
+       const ip = Pp.find((pp => !pp.busy));
+       if (ip) Hp(ip, pp);
+       else {
+         if (Pp.length < wp) {
+           const ip = {
+             worker: vp(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return Pp.push(ip), Up.mostWorkers = Math.max(Up.mostWorkers, Pp.length), void Hp(ip, pp)
+         }
+         Wp.push(pp)
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L28` → after: `L127-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L127-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/209.js#L127-L1082) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/209.js#L28)

```diff
-       (0, pD.reportClientError)(DD, zD, wD, !1, KD)
+       return new Promise(((Op, op) => {
+         dp({
+           data: new Int8Array(pp.buffer, pp.byteOffset, pp.byteLength).slice(),
+           attributeIds: ip,
+           expected: cp,
+           resolve: Op,
+           reject: op
+         })
+       }))
+     }
+     var jp = cp(37693),
+       kp = cp(37698),
+       mp = cp(34496),
+       Rp = cp(34493);
+     const qp = {
+       index: -1,
+ ... (940 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/210.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/210.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2)

#### 1. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L21` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L4-L6) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L4-L21)

```diff
-   40734: (DD, zD, wD) => {
-     function pD(DD, zD, wD) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(DD, zD).getContext("2d", wD);
-       const pD = document.createElement("canvas");
-       return pD.width = DD, pD.height = zD, pD.getContext("2d", wD)
-     }
- 
-     function sD(DD, zD) {
-       return DD.getContext("2d", zD)
-     }
-     wD.d(zD, {
-       b: () => sD,
-       d: () => pD
-     })
-   },
-   40694: (DD, zD, wD) => {
- ... (2 more removed lines; see GitHub link above)
+   41764: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L23-L26` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L8-L9) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L23-L26)

```diff
-     const pD = 1 << 20,
-       sD = 1 << 21,
-       KD = 1024,
-       rD = 2048;
+     var Op = cp(36455),
+       op = cp.n(Op);
```

#### 3. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L28-L32` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L11-L12) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L28-L32)

```diff
-     function LD(DD, zD, wD) {
-       const LD = DD + pD,
-         cD = zD + KD,
-         gD = wD + pD;
-       return LD < 0 || LD >= sD || gD < 0 || gD >= sD || cD < 0 || cD >= rD ? -1 : (LD * sD + gD) * rD + cD
+     function Ip() {
+       return op()('/*! For license information please see sn3sfj.procGen.worker.b125915b.worker.js.LICENSE.txt */\n(()=>{var pp={79:pp=>{const ip="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,cp=()=>ip.now(),Op=pp=>pp===1/0||(pp= … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L35-L337` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L15-L18) · [Before (L35-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L35-L337)

```diff
-   40689: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD,
-       d: () => rD,
-       g: () => sD,
-       j: () => KD,
-       k: () => RD,
-       n: () => gD,
-       o: () => cD,
-       s: () => LD
-     });
-     wD(3466);
-     wD(40694);
- 
-     function pD(DD) {}
- 
- ... (287 more removed lines; see GitHub link above)
+   36455: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       var op = self || window;
+       try {
```

#### 5. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L339-L414` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L20) · [Before (L339-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L339-L414)

```diff
-           const zD = (AD ? pD.$.Draws : 0) | (KD ? pD.$.NetAll : 0) | (VD ? pD.$.StopForSends : 0);
-           GD = (0, fD.e)((() => {
-             let wD = this.core.frame(DD, hD, LD.cursor, MD, zD, OD);
-             for (; wD === pD.pd && VD;) {
-               var sD;
-               if (JD ??= null === (sD = this.gameHost) || void 0 === sD ? void 0 : sD.takeFault(), void 0 === JD && !this.takeSends(VD)) return pD.J.Fatal;
-               wD = this.core.ZG()
-             }
-             return wD
-           }))
-         } catch (eD) {
-           ED = {
-             error: eD
-           }
-         }
-         JD ??= null === (wD = this.gameHost) || void 0 === wD ? void 0 : wD.takeFault();
- ... (60 more removed lines; see GitHub link above)
+           var Ip;
```

#### 6. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L416-L417` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L22) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L416-L417)

```diff
-             var wD, pD;
-             null === (wD = (pD = this.handlers).onEnvEvent) || void 0 === wD || wD.call(pD, KD)
+             Ip = new op.Blob([pp])
```

#### 7. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L419` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L24) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L419)

```diff
-             return this.crashOn(VD, sD), !1
+             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
```

#### 8. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L421-L451` → after: `L26-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L26-L29) · [Before (L421-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L421-L451)

```diff
-         }
-         return !this.stopped
-       }
-       setEventWalker(DD) {
-         this.eventWalker = DD
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: DD
-         } = this.rings;
-         try {
-           const zD = this.unsentUiPrefs;
-           zD && DD.writeRecord(pD.nb.UiPrefs, 0, zD.nametagCutDistance, 0, (0, pD.De)(zD)) && (this.unsentUiPrefs = null);
-           const wD = this.unsentEnvPrefs;
-           wD && DD.writeRecord(pD.nb.EnvPrefs, (0, pD.ie)(wD), wD.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
- ... (15 more removed lines; see GitHub link above)
+           var Sp = op.URL || op.webkitURL,
+             xp = Sp.createObjectURL(Ip),
+             Lp = new op[ip](xp, cp);
+           return Sp.revokeObjectURL(xp), Lp
```

#### 9. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L453-L472` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/210.js#L31) · [Before (L453-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/210.js#L453-L472)

```diff
-           return this.crash(hD, zD), !1
-         }
-         return !0
-       }
-       setHoldDraws(DD) {
-         this.drawsHeld = DD
-       }
-       setUiPrefs(DD) {
-         this.unsentUiPrefs = {
-           ...DD
-         }
-       }
-       setEnvPrefs(DD) {
-         this.unsentEnvPrefs = {
-           ...DD
-         }
- ... (4 more removed lines; see GitHub link above)
+           return new op[ip]("data:application/javascript,".concat(encodeURIComponent(pp)), cp)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/211.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/211.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56)

#### 1. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/211.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/211.js#L4-L8)

```diff
-   36486: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD,
-       c: () => sD,
-       g: () => KD
+   41785: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L10-L259` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/211.js#L8-L9) · [Before (L10-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/211.js#L10-L259)

```diff
-     var pD = wD(1797);
-     class sD extends Error {
-       constructor(DD) {
-         super("The game server didn't answer in time"), this.leg = DD, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const KD = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
- ... (234 more removed lines; see GitHub link above)
+     var Op = cp(36455),
+       op = cp.n(Op);
```

#### 3. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L262-L275` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/211.js#L12) · [Before (L262-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/211.js#L262-L275)

```diff
-       return XD ??= (0, RD.q)(JD(VD(), null, !1).chunkCap), XD
-     }
- 
-     function xD() {
-       return QD ??= PD(), QD
-     }
- 
-     function TD() {
-       var DD;
-       return (null !== (DD = QD) && void 0 !== DD ? DD : PD()).basis
-     }
- 
-     function bD(DD, zD) {
-       return DD.setChunkCap(zD.chunkCap)
+       return op()('(()=>{var pp={13:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/bloxd_wasm_bg.f1177b9ed1fe02dfded8.wasm"},21:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/bloxd_wasm_textures_bg.d7d41d4f0bb8769a2dc8.wasm"},6:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/zstdDecodeWorker. … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L278-L513` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/211.js#L15-L18) · [Before (L278-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/211.js#L278-L513)

```diff
-   36483: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => VD,
-       g: () => OD,
-       k: () => AD,
-       n: () => JD,
-       q: () => hD,
-       r: () => QD,
-       x: () => XD
-     });
-     var pD = wD(36248),
-       sD = wD(36476);
-     const KD = 64 * pD.d,
-       rD = 40 * pD.f,
-       LD = 36 * pD.f,
-       cD = 20 * pD.f,
- ... (220 more removed lines; see GitHub link above)
+   36455: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       var op = self || window;
+       try {
```

#### 5. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L515` → after: `L20-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/211.js#L20-L29) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/211.js#L515)

```diff
-           return DD()
+           var Ip;
+           try {
+             Ip = new op.Blob([pp])
+           } catch (Yp) {
+             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
+           }
+           var Sp = op.URL || op.webkitURL,
+             xp = Sp.createObjectURL(Ip),
+             Lp = new op[ip](xp, cp);
+           return Sp.revokeObjectURL(xp), Lp
```

#### 6. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L517` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/211.js#L31) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/211.js#L517)

```diff
-           return this.stop(), this.onError(wD), zD
+           return new op[ip]("data:application/javascript,".concat(encodeURIComponent(pp)), cp)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/212.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/212.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02)

#### 1. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/212.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/212.js#L2)

```diff
- export const ids = [212];
+ export const ids = [212, 213];
```

#### 2. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/212.js#L4)

```diff
-   36304: (DD, zD, wD) => {
+   36469: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L6-L16` → after: `L6-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L6-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/212.js#L6-L1331) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/212.js#L6-L16)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => LD,
-       ITEM_SPRITES: () => KD,
-       ITEM_SPRITES_WITHOUT_FILE: () => rD,
-       ITEM_SPRITE_RUNS: () => sD,
-       MAX_SPRITE_ITEM_ID: () => pD
-     });
-     const pD = 10090,
-       sD = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       KD = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       rD = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       LD = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+       CAPPED_COUNTS_VISIT_CAP: () => Ip,
+       reportCappedWasmFailure: () => Lp,
+       reportUncappedWasmFailure: () => xp,
+       reportWasmCrash: () => op,
+       reportWasmFailure: () => Sp
+     });
+     var Op = cp(3025);
+ 
+     function op(pp) {
+       (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
+     }
+     const Ip = Op.b - 4;
+ 
+     function Sp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1)
+     }
+ ... (1310 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 1. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L4)

```diff
-   36318: (DD, zD, wD) => {
+   36469: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L6)

```diff
-       CreateCustomLobby: () => TD
+       CAPPED_COUNTS_VISIT_CAP: () => Ip,
+       reportCappedWasmFailure: () => Lp,
+       reportUncappedWasmFailure: () => xp,
+       reportWasmCrash: () => op,
+       reportWasmFailure: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L8-L34` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L12) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L8-L34)

```diff
-     wD(36326);
-     var pD = wD(4657),
-       sD = wD(58),
-       KD = wD(1687),
-       rD = wD(1044),
-       LD = wD.n(rD),
-       cD = wD(3115),
-       gD = wD(1130),
-       RD = wD(1211),
-       AD = wD(4612),
-       UD = wD(1447),
-       fD = wD(36330),
-       ID = wD(1200),
-       BD = wD(1339),
-       GD = wD(1511),
-       hD = wD(20),
- ... (11 more removed lines; see GitHub link above)
+     var Op = cp(3025);
```

#### 4. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L37-L81` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L15-L17) · [Before (L37-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L37-L81)

```diff
-       var zD, wD, rD, TD;
-       let {
-         gameNameWithVariation: bD,
-         close: jD,
-         initialDefaultGamemode: dD
-       } = DD;
-       const {
-         t: SD
-       } = (0, ID.E)(), iD = (0, GD.useNavigatePreserveSearch)(), [lD, WD] = (0, sD.useState)("Enter"), [ND, ZD] = (0, sD.useState)(""), yD = sD.useRef(null), kD = null === (zD = JD.e[bD]) || void 0 === zD ? void 0 : zD.showWorldsInsteadOfCustomLobbies, mD = kD ? 1 : null === (wD  … [truncated]
-       dD || (dD = "classic_creative" === bD || "classic_creativeFlat" === bD ? "creative" : "classic" === bD ? "peaceful" : "survival");
-       const aD = {
-         baseOptions: {
-           gameNameWithVariation: kD ? "classic" : bD,
-           name: "",
-           visibility: "unlisted"
-         },
- ... (29 more removed lines; see GitHub link above)
+       (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
+     }
+     const Ip = Op.b - 4;
```

#### 5. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L83-L553` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L19-L20) · [Before (L83-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L83-L553)

```diff
-       function YD(DD, zD) {
-         vD({
-           ...uD,
-           baseOptions: {
-             ...uD.baseOptions,
-             [DD]: zD
-           }
-         })
-       }
- 
-       function HD(DD, zD) {
-         vD({
-           ...uD,
-           listedOptions: {
-             ...uD.listedOptions,
-             [DD]: zD
- ... (455 more removed lines; see GitHub link above)
+     function Sp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1)
```

#### 6. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L556-L595` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L23-L24) · [Before (L556-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L556-L595)

```diff
-     function AD(DD) {
-       let {
-         ownedSchematics: zD,
-         currentWorldSchematicId: wD,
-         onClose: sD
-       } = DD;
-       const {
-         t: rD
-       } = (0, KD.E)(), [LD, AD] = (0, pD.useState)(null);
-       return (0, gD.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === LD && (0, gD.jsxs)(gD.Fragment, {
-           children: [(0, gD.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: rD("worldBuilder:schematicList")
-           }), (0, gD.jsx)("h2", {
- ... (24 more removed lines; see GitHub link above)
+     function xp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1, 1 / 0)
```

#### 7. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L598-L613` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L27-L28) · [Before (L598-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L598-L613)

```diff
-     function UD(DD) {
-       let {
-         ownedSchematics: zD,
-         currentWorldSchematicId: wD,
-         onClose: pD
-       } = DD;
-       sD.NotificationProvider.showCustomPopup({
-         body: DD => (0, gD.jsx)(AD, {
-           ownedSchematics: zD,
-           currentWorldSchematicId: wD,
-           onClose: DD
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: pD,
-         unlockPointerKey: "schematicListPopup"
-       })
+     function Lp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1, Ip)
```

#### 8. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L615-L705` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/213.js#L30) · [Before (L615-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/213.js#L615-L705)

```diff
-   },
-   36338: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => gD,
-       d: () => RD
-     });
-     wD(58);
-     var pD = wD(1044),
-       sD = wD.n(pD),
-       KD = wD(4657),
-       rD = wD(338),
-       LD = wD(1200),
-       cD = wD(1096);
- 
-     function gD(DD) {
-       let {
- ... (75 more removed lines; see GitHub link above)
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L4)

```diff
-   36330: (DD, zD, wD) => {
+   41014: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(pp, ip).getContext("2d", cp);
+       const Op = document.createElement("canvas");
+       return Op.width = pp, Op.height = ip, Op.getContext("2d", cp)
+     }
+ 
+     function op(pp, ip) {
+       return pp.getContext("2d", ip)
+     }
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L7` → after: `L16-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L16-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L16-L21) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L7)

```diff
-       g: () => UD
+       e: () => Op
+     })
+   },
+   40978: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L9-L15` → after: `L23-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L23-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L23-L182) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L9-L15)

```diff
-     var pD = wD(58),
-       sD = wD(1355),
-       KD = wD(1200),
-       rD = wD(1346),
-       LD = wD(3473),
-       cD = wD(4948),
-       gD = wD(1096);
+     const Op = 1 << 20,
+       op = 1 << 21,
+       Ip = 1024,
+       Sp = 2048;
+ 
+     function xp(pp, ip, cp) {
+       const xp = pp + Op,
+         Lp = ip + Ip,
+         Yp = cp + Op;
+       return xp < 0 || xp >= op || Yp < 0 || Yp >= op || Lp < 0 || Lp >= Sp ? -1 : (xp * op + Yp) * Sp + Lp
+     }
+   },
+   40976: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op,
+       f: () => Sp,
+ ... (144 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L18-L51` → after: `L185-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L185-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L185-L212) · [Before (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L18-L51)

```diff
-       let {
-         loading: zD,
-         schematics: wD,
-         onSchematicPicked: pD,
-         selectedSchematicIdList: sD = [],
-         disableAutoExport: cD
-       } = DD;
-       const {
-         t: RD
-       } = (0, KD.E)();
-       return (0, gD.jsxs)("div", {
-         className: "SchematicList",
-         children: [zD && (0, gD.jsx)(rD.e, {}), !zD && 0 === wD.length && (0, gD.jsx)("div", {
-           className: "NoSchematicsText",
-           children: RD("worldBuilder:noSavedSchematic")
-         }), !zD && wD.map((DD => (0, gD.jsx)(LD.g, {
- ... (18 more removed lines; see GitHub link above)
+       if (0 === pp) return xp;
+       const ip = new Ip.c(Op.Yb);
+       for (let cp = 0; cp < Op.Yb; cp++) ip[cp] = pp >>> 8 * cp & 255;
+       return ip
+     }
+     class Yp {
+       constructor(pp, ip) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Sp(ip, {
+           ptr: () => pp.VA(),
+           TA: () => pp.eSp(),
+           reserve: ip => pp.lSp(ip)
+         }), this.net = new Sp(ip, {
+           ptr: () => pp.CSp(),
+           TA: () => pp.MSp(),
+           reserve: ip => pp.QSp(ip)
+         }), this.worker = new Sp(ip, {
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L55-L59` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L266-L275) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L55-L59)

```diff
-       let {
-         ownedSchematics: zD,
-         currentWorldSchematicId: wD,
-         onClose: sD
-       } = DD;
+       return Ep.has(pp.site) ? pp.error instanceof WebAssembly.RuntimeError || (0, op.g)(pp.error) : !Np.has(pp.site) && pp.error instanceof Error
+     }
+     const fp = "events",
+       bp = [],
+       hp = "debugLog",
+       ap = "terrainTextures",
+       np = "sunShadowTextures",
+       Fp = new TextDecoder;
+ 
+     function gp(pp, ip) {
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L61-L80` → after: `L277-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L277-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L277-L674) · [Before (L61-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L61-L80)

```diff
-         t: rD
-       } = (0, KD.E)(), [LD, AD] = (0, pD.useState)(null);
-       return (0, gD.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === LD && (0, gD.jsxs)(gD.Fragment, {
-           children: [(0, gD.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: rD("worldBuilder:schematicList")
-           }), (0, gD.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: rD("worldBuilder:clickSchematicForOptions")
-           }), (0, gD.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, gD.jsx)(RD, {
-               loading: !1,
-               schematics: zD,
- ... (4 more removed lines; see GitHub link above)
+         site: cp,
+         error: op,
+         header: Ip
+       } = pp, Sp = Ip ? (0, Op._d)(Ip.lastError) : "noFrame", xp = `CORE-${cp===Up?Sp:cp}`, Lp = null === op || void 0 === op ? "" : ` ${(0,Dp.h)(op)}`, Yp = {
+         site: cp,
+         wasmBuild: ip.wasm,
+         clientVersion: ip.client
+       };
+       return Ip && (Yp.status = String(Ip.status), Yp.lastError = Sp, Yp.lastErrorCode = String(Ip.lastError), Yp.lastErrorDetail = String(Ip.lastErrorDetail), Yp.errorCount = String(Ip.errorCount), Yp.frameIndex = String(Ip.frameIndex), Yp.tickIndex = String(Ip.tickIndex)), {
+         code: xp,
+         message: `core ${cp}, last error ${Sp};${Lp}`,
+         details: Yp
+       }
+     }
+     class Gp {
+       constructor(pp, ip, cp) {
+ ... (382 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L92-L93` → after: `L677-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L677-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L677-L788) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L92-L93)

```diff
-         })]
-       })
+           Dp = pp + (0, Op.ue)(Lp)
+         }
+         return Ip
+       }
+       takeSends(pp) {
+         this.atSendsStop = !0;
+         try {
+           pp()
+         } catch (ip) {
+           this.crashOn(Cp, ip)
+         } finally {
+           this.atSendsStop = !1
+         }
+         return !this.stopped
+       }
+       forEachNetOut(pp) {
+ ... (96 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L97-L111` → after: `L800-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L800-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L800-L814) · [Before (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L97-L111)

```diff
-       let {
-         ownedSchematics: zD,
-         currentWorldSchematicId: wD,
-         onClose: pD
-       } = DD;
-       sD.NotificationProvider.showCustomPopup({
-         body: DD => (0, gD.jsx)(AD, {
-           ownedSchematics: zD,
-           currentWorldSchematicId: wD,
-           onClose: DD
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: pD,
-         unlockPointerKey: "schematicListPopup"
-       })
+       op = {
+         scanned: !1
+       };
+       try {
+         return pp()
+       } finally {
+         op = null
+       }
+     }
+ 
+     function Sp() {
+       const pp = op;
+       if (null === pp) return (0, Op.f)();
+       const ip = (0, Op.f)(!pp.scanned);
+       return pp.scanned = !0, ip
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L114-L116` → after: `L817-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L817-L819) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L114-L116)

```diff
-   41641: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       runClientGameMessage: () => xD
+   41025: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L118-L131` → after: `L821-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L821-L830) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L118-L131)

```diff
-     var pD = wD(3750),
-       sD = wD(3757),
-       KD = wD(1332),
-       rD = wD(36330),
-       LD = wD(4974),
-       cD = wD(1044),
-       gD = wD.n(cD),
-       RD = wD(58),
-       AD = wD(1355),
-       UD = wD(1447),
-       fD = wD(351),
-       ID = wD(1200),
-       BD = wD(1057),
-       GD = wD(1096);
+     const Op = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+   },
+   41046: (pp, ip, cp) => {
+     function Op() {
+       return cp(41049)
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L133-L194` → after: `L832-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L832-L833) · [Before (L133-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L133-L194)

```diff
-     function hD(DD) {
-       let {
-         onFilePicked: zD
-       } = DD;
-       const {
-         t: wD
-       } = (0, ID.E)(), [pD, sD] = (0, RD.useState)(null), {
-         getRootProps: KD,
-         getInputProps: rD,
-         isDragActive: cD
-       } = (0, LD.c)({
-         onDrop: DD => {
-           DD.length > 0 && sD(DD[0])
-         },
-         useFsAccessApi: !1
-       }), AD = pD && pD.size > 1024 * fD.dd;
- ... (46 more removed lines; see GitHub link above)
+     function op() {
+       return cp(41055)
```

#### 12. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L198-L238` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L837) · [Before (L198-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L198-L238)

```diff
-       let {
-         ownedSchematics: zD,
-         onClose: wD,
-         onChosenPreset: pD,
-         onChosenFile: sD
-       } = DD;
-       const {
-         t: KD
-       } = (0, ID.E)();
-       return (0, GD.jsxs)(GD.Fragment, {
-         children: [(0, GD.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: KD("worldBuilder:loadSchematic")
-         }), (0, GD.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: KD("worldBuilder:chooseOneOfYourSchematics")
- ... (25 more removed lines; see GitHub link above)
+       return ["pl", "ru", "tr", "uk", "vi"].includes(pp)
```

#### 13. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L240-L243` → after: `L839-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L839-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L839-L854) · [Before (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L240-L243)

```diff
-     var MD = wD(4948),
-       OD = wD(1687),
-       JD = wD(4395),
-       ED = wD(1232);
+     cp.d(ip, {
+       e: () => Ip,
+       f: () => Op,
+       j: () => op
+     })
+   },
+   36484: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       d: () => Yp,
+       e: () => Sp,
+       h: () => Ap
+     });
+     var Op = cp(36472),
+       op = cp(10);
+     const Ip = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
```

#### 14. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L247-L305` → after: `L864-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L864-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L864-L869) · [Before (L247-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L247-L305)

```diff
-       let {
-         ownedSchematics: wD,
-         onClose: pD,
-         onChosenEdit: sD,
-         onChosenNew: KD,
-         onChosenDownload: LD
-       } = DD;
-       const {
-         t: cD
-       } = (0, ID.E)(), [gD, AD] = (0, RD.useState)("choose"), [fD, BD] = (0, RD.useState)(null), [hD, nD] = (0, RD.useState)(null);
-       return (0, GD.jsxs)(GD.Fragment, {
-         children: [(0, GD.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: cD("worldBuilder:saveSchematic")
-         }), "choose" === gD && (0, GD.jsxs)(GD.Fragment, {
-           children: [(0, GD.jsx)("h2", {
- ... (43 more removed lines; see GitHub link above)
+       const Sp = pp instanceof Error ? pp.name : "thrown",
+         xp = (pp instanceof Error && null !== (op = pp.stack) && void 0 !== op ? op : "").split("\n").filter((pp => Ip.test(pp))).slice(0, 8).map((pp => pp.trim())),
+         Lp = null === ip ? "wasm memory unknown" : `wasm memory ${Math.round(ip/2**20)} MB`,
+         Yp = null === cp.panic ? "" : `, panic: ${(0,Op.j)(cp.panic)}`,
+         Dp = `${Sp}: ${pp instanceof Error?pp.message:String(pp)}`;
+       return `${(0,Op.q)(cp.kind,cp.refusedBytes)} ${Dp} (${Lp})${Yp}${xp.length>0?` | ${xp.join(" < ")}`:""}`
```

#### 15. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L309-L323` → after: `L874-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L874-L878) · [Before (L309-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L309-L323)

```diff
-       let {
-         type: zD,
-         prepopName: wD,
-         ownedSchematics: pD,
-         onSubmit: sD,
-         onBack: KD
-       } = DD;
-       const {
-         t: rD
-       } = (0, ID.E)(), [LD, cD] = (0, RD.useState)(""), [AD, fD] = (0, RD.useState)(""), [BD, hD] = (0, RD.useState)(null), [nD, MD] = (0, RD.useState)(!0), QD = DD => {
-         var wD;
-         DD = null !== (wD = DD) && void 0 !== wD ? wD : LD;
-         const sD = "new" === zD ? (0, ED.x)(DD) : null,
-           KD = [...(0, ED.sb)(DD), ...sD ? [sD] : []];
-         return KD.length > 0 ? (hD(KD.join(", ")), !1) : "new" === zD && pD.find((zD => zD.name === DD)) ? (hD(rD("worldBuilder:schematicAlreadyExists")), !1) : (hD(null), !0)
+       var ip;
+       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(pp instanceof Error) || !Lp.test(pp.message)) return {};
+       if (!("detached" in cp)) return {
+         arrayBufferDetached: "absent"
```

#### 16. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L325-L390` → after: `L880-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L880-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L880-L897) · [Before (L325-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L325-L390)

```diff
-       return (0, GD.jsxs)("div", {
-         className: "SaveSchematicWindow",
-         children: [(0, GD.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: rD("general:name")
-         }), (0, GD.jsx)(OD.e, {
-           className: gD()("SaveSchematicName", {
-             Error: BD
-           }),
-           forcedText: wD,
-           onValueChange: DD => {
-             cD(DD), QD(DD)
-           },
-           placeholderText: rD("worldBuilder:schematicNamePlaceholder"),
-           maxLength: ED.jb
-         }), (0, GD.jsx)("h2", {
- ... (50 more removed lines; see GitHub link above)
+       return {
+         arrayBufferDetached: (0, op.V)(null === (ip = (0, op.N)(cp, "detached")) || void 0 === ip ? void 0 : ip.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
+     }
+     const Dp = 500;
+ 
+     function Ap(pp) {
+       let ip = "[object Object]";
+       try {
+         ip = String(pp)
+       } catch {}
+       if ("[object Object]" !== ip) return ip;
+       try {
+         var cp, Op;
+         return null !== (cp = null === (Op = JSON.stringify(pp)) || void 0 === Op ? void 0 : Op.slice(0, Dp)) && void 0 !== cp ? cp : ip
+       } catch {
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L392-L394` → after: `L899-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L899-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L899-L914) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L392-L394)

```diff
-     var VD = wD(1211),
-       PD = wD(1737),
-       CD = wD(1130);
+   },
+   41049: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+   41055: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   },
+   36472: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op,
+       h: () => Ip,
+       j: () => Lp,
+       n: () => Sp,
+       q: () => op
+     });
+     const Op = /^alloc_failed (\d+) bytes$/;
```

#### 18. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L397-L541` → after: `L917-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L917-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/214.js#L917-L938) · [Before (L397-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/214.js#L397-L541)

```diff
-       if ("devDownloadJson" !== DD) ! function(DD, zD) {
-         const wD = VD.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, KD.c)().websocketUrl);
-         let LD = !1;
-         const cD = async (DD, zD) => {
-           if (LD) return;
-           LD = !0;
-           const {
-             gameNameWithVariation: pD,
-             lobbyName: rD
-           } = (0, KD.c)(), cD = {
-             gameNameWithVariation: pD,
-             lobbyName: rD
-           };
-           return await (0, CD.postJsonWithMetricsCookiesAndJsonResponse)(`${wD}/schematic/${DD}`, sD.H[DD].toBuffer({
-             ...cD,
-             ...zD
- ... (129 more removed lines; see GitHub link above)
+       return Ip(pp, ip) ? `trap=alloc_failed ${ip} bytes` : `trap=${pp}`
+     }
+ 
+     function Ip(pp, ip) {
+       return "unreachable" === pp && ip > 0
+     }
+ 
+     function Sp(pp, ip, cp) {
+       const Op = function(pp) {
+         return pp instanceof WebAssembly.RuntimeError ? /unreachable/i.test(pp.message) ? "unreachable" : /out of bounds/i.test(pp.message) ? "out_of_bounds" : "runtime_error" : (pp instanceof RangeError || pp instanceof Error && "InternalError" === pp.name) && /call stack|recurs … [truncated]
+       }(pp);
+       if ("unreachable" !== Op) return {
+         kind: Op,
+         panic: null,
+         refusedBytes: 0
+       };
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L4-L6)

```diff
-   36360: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => XD
+   36689: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp,
+       f: () => op,
+       g: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L8-L26` → after: `L10-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L10-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L10-L195) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L8-L26)

```diff
-     var pD = wD(1044),
-       sD = wD.n(pD),
-       KD = wD(1523),
-       rD = wD(1041),
-       LD = wD(760),
-       cD = wD(1200),
-       gD = wD(1447),
-       RD = wD(1511),
-       AD = wD(3548),
-       UD = wD(1057),
-       fD = wD(3473),
-       ID = wD(2589),
-       BD = wD(1096);
-     const GD = 2;
- 
-     function hD(DD) {
- ... (3 more removed lines; see GitHub link above)
+     var Op = cp(1819);
+     class op extends Error {
+       constructor(pp) {
+         super("The game server didn't answer in time"), this.leg = pp, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const Ip = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+       get answered() {
+         return this.answers
+       }
+       answer() {
+         this.answers++
+       }
+ ... (170 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L28-L33` → after: `L197-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L197-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L197-L219) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L28-L33)

```diff
-         type: "preview",
-         preview: DD.preview
-       }
-     }
- 
-     function nD(DD) {
+         footprintBytes: Hp(Yp.k),
+         basis: "unreported",
+         namesLimit: !1
+       }
+     }
+ 
+     function Hp(pp) {
+       return Wp + pp * yp
+     }
+ 
+     function dp() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp(),
+         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ip.siteUsed;
+       if ("android" !== pp.os || "mobileAndroid" === ip) return !0;
+       const {
+         footprintBytes: cp,
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L35-L155` → after: `L221-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L221-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L221-L267) · [Before (L35-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L35-L155)

```diff
-         game: zD,
-         disabled: wD,
-         showPlaceholder: pD
-       } = DD;
-       return null !== zD ? (0, BD.jsx)(fD.g, {
-         source: hD(zD),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: wD,
-         entrySource: "customGamePlace"
-       }) : pD ? (0, BD.jsx)(fD.e, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
- 
- ... (105 more removed lines; see GitHub link above)
+         footprintBytes: Sp,
+         basis: xp,
+         namesLimit: Lp
+       } = tp(pp);
+       if (cp) {
+         const pp = Math.min(Sp, Hp(Yp.d));
+         Sp = Wp + Math.max(0, pp - Wp) / 2, xp += "+killed", Lp = !0
+       }
+       null !== ip && Hp(ip) < Sp && (Sp = Hp(ip), xp += "+learned", Lp = !0);
+       const Dp = function(pp) {
+           const ip = Math.floor((pp - Wp) / yp);
+           return Math.min(Yp.d, Math.max(Yp.i, ip))
+         }(Sp),
+         Ap = Lp && Dp < Yp.d ? Math.min(Dp, Yp.g) : Dp,
+         Pp = (0, Yp.o)(Ap);
+       return {
+ ... (31 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L159-L171` → after: `L271-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L271-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L271-L367) · [Before (L159-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L159-L171)

```diff
-       const {
-         t: zD
-       } = (0, cD.E)(), wD = (0, KD.C)(), pD = (0, QD.g)(), UD = (0, AD.b)({
-         refresh: !0
-       }), fD = wD.customGamePlace;
-       if (!(0, rD.i)(fD)) return (0, BD.jsx)(RD.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const ID = LD.e[fD],
-         GD = rD.c[fD],
-         hD = null !== (DD = null === UD || void 0 === UD ? void 0 : UD[fD]) && void 0 !== DD ? DD : null,
-         nD = [];
-       for (let sD = 0; sD < GD.length; sD++) {
+       return (null !== (pp = kp) && void 0 !== pp ? pp : qp()).basis
+     }
+ 
+     function Xp(pp, ip) {
+       return pp.setChunkCap(ip.chunkCap)
+     }
+   },
+   36686: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Rp,
+       j: () => dp,
+       k: () => Ap,
+       o: () => ep,
+       p: () => vp,
+       t: () => kp,
+       v: () => mp
+ ... (81 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L173-L182` → after: `L369-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L369-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L369-L428) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L173-L182)

```diff
-         const DD = JD[sD];
-         if (!DD) continue;
-         const wD = GD[sD];
-         nD.push({
-           id: wD.id,
-           category: wD.category,
-           title: zD(wD.displayTranslationKey),
-           tintColour: wD.tintColour,
-           layout: ED[DD],
-           games: null !== (XD = null === hD || void 0 === hD ? void 0 : hD[wD.id]) && void 0 !== XD ? XD : null
+         return kp(this.memory.memoryBytes(), pp, null !== (cp = this.ceilingBytes) && void 0 !== cp ? cp : ip)
+       }
+       reserveAtJoin(pp) {
+         let {
+           targetBytes: ip,
+           leastBytes: cp
+         } = pp;
+         const Op = this.memory.memoryBytes(),
+           op = Op + cp,
+           Ip = Math.max(ip + (this.ballastOn() ? Dp : 0), op),
+           Sp = this.call((() => this.memory.reserveUpFront(Ip) ? "target" : Ip > op && this.memory.reserveUpFront(op) ? "least" : "none"), "none");
+         if (this.stopped) return !1;
+         if ("target" !== Sp) {
+           const pp = "least" === Sp ? `took ${op} bytes instead` : "frames grow it in steps";
+           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Ip} bytes was refused at ${Op} bytes; ${pp}`)
+         }
+ ... (44 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L185-L190` → after: `L431-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L431-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L431-L460) · [Before (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L185-L190)

```diff
-       return (0, BD.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, BD.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${fD}/${ID.largePicture}.png)`
+       workerGone(pp) {
+         const ip = this.workers.get(pp);
+         ip && (ip.gone = !0)
+       }
+       details() {
+         var pp, ip;
+         const cp = {
+           wasmMemoryNow: `${(0,Op.g)(this.memory.memoryBytes())} MiB`
+         };
+         null !== this.joinReserveTaken && (cp.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (cp.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
+         const op = this.main;
+         if (op) {
+           cp.wasmMemoryMain = qp(op);
+           const pp = Math.max(0, op.peakLiveBytes - this.ballastPeakBytes),
+             ip = 0 === this.peakStoredChunks ? "-" : (pp / this.peakStoredChunks / Op.b).toFixed(1);
+           cp.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ip} KiB`
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L192-L213` → after: `L462-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L462-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/215.js#L462-L524) · [Before (L192-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/215.js#L192-L213)

```diff
-         }), (0, BD.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: zD(ID.title)
-         }), (0, BD.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, BD.jsx)(gD.d, {
-             onClick: () => (0, RD.navigatePreserveSearch)("/"),
-             children: zD("homePage:backToGames")
-           })
-         }), !pD && (0, BD.jsx)(OD, {
-           categories: nD
-         }), pD && (0, BD.jsx)("div", {
-           className: sD()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
-           children: nD.map((DD => (0, BD.jsx)(MD, {
-             category: DD.category,
-             title: DD.title,
- ... (6 more removed lines; see GitHub link above)
+           of this.workers.values()) Sp += Op.reservesRefused, xp += Op.allocationsRefused;
+         return {
+           wasmMainMiB: Number((0, Op.g)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, Op.g)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: Sp,
+           refusedAllocations: xp,
+           sheds: this.sheds,
+           ...null === (Ip = this.footprint) || void 0 === Ip ? void 0 : Ip.snapshot()
+         }
+       }
+       workersMemoryBytes() {
+         let pp = 0;
+         for (const {
+             stats: ip,
+             gone: cp
+ ... (47 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/216.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/216.js#L2)

```diff
- export const ids = [216, 291];
+ export const ids = [216];
```

#### 2. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/216.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/216.js#L4)

```diff
-   41187: (DD, zD, wD) => {
+   36527: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/216.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/216.js#L6)

```diff
-       CharacterCustomisationUI: () => wz
+       ITEM_FILES_WITHOUT_SPRITE: () => xp,
+       ITEM_SPRITES: () => Ip,
+       ITEM_SPRITES_WITHOUT_FILE: () => Sp,
+       ITEM_SPRITE_RUNS: () => op,
+       MAX_SPRITE_ITEM_ID: () => Op
```

#### 4. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L8-L1021` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/216.js#L12-L16) · [Before (L8-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/216.js#L8-L1021)

```diff
-     var pD = wD(58),
-       sD = wD(2998),
-       KD = wD(1127),
-       rD = wD(1044),
-       LD = wD.n(rD),
-       cD = wD(1245),
-       gD = wD(605),
-       RD = wD(1200),
-       AD = wD(2197),
-       UD = wD(1570),
-       fD = wD(2560);
-     const ID = cD.r.filter((DD => !UD.d.includes(DD)));
- 
-     function BD(DD, zD) {
-       return ID.includes(DD) && "string" === typeof zD && (0, fD.d)(DD, zD)
-     }
- ... (998 more removed lines; see GitHub link above)
+     const Op = 10090,
+       op = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       Ip = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       Sp = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       xp = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/217.js#L4-L478) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/217.js#L4)

```diff
-   36395: (DD, zD, wD) => {
+   36539: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CreateCustomLobby: () => Ep
+     });
+     cp(36543);
+     var Op = cp(4719),
+       op = cp(62),
+       Ip = cp(1692),
+       Sp = cp(1049),
+       xp = cp.n(Sp),
+       Lp = cp(3224),
+       Yp = cp(1149),
+       Dp = cp(1211),
+       Ap = cp(4677),
+       Pp = cp(1480),
+       Wp = cp(36549),
+ ... (459 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L6-L7` → after: `L480-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L480-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/217.js#L480-L618) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/217.js#L6-L7)

```diff
-       d: () => PD,
-       h: () => CD,
+       b: () => Lp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(62),
+       Sp = cp(4664),
+       xp = cp(1112);
+ 
+     function Lp(pp) {
+       let {
+         locked: ip,
+         children: cp
+       } = pp;
+       const Op = (0, Ip.useRef)(null),
+         Lp = (0, Sp.c)(Op, "y");
+       return (0, xp.jsx)("div", {
+ ... (123 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L10-L28` → after: `L621-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L621-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/217.js#L621-L627) · [Before (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/217.js#L10-L28)

```diff
-     var pD = wD(287),
-       sD = wD(103);
-     const KD = new(wD(36404).e)(new URL(wD.p + wD.u(3), wD.b), {
-       name: "blockIconWorker",
-       type: "module"
-     });
-     var rD = wD(1797),
-       LD = wD(2122);
-     const cD = 1e4,
-       gD = 3e4;
-     let RD = null,
-       AD = null,
-       UD = null,
-       fD = !1,
-       ID = 0;
-     const BD = new Map;
- ... (3 more removed lines; see GitHub link above)
+     cp(62);
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(4719),
+       Sp = cp(322),
+       xp = cp(1201),
+       Lp = cp(1112);
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L31-L39` → after: `L630-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L630-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/217.js#L630-L663) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/217.js#L31-L39)

```diff
-       const zD = new Promise(((zD, wD) => {
-         const pD = new Image;
-         pD.crossOrigin = "anonymous", pD.fetchPriority = "high", pD.onload = () => {
-           zD(pD)
-         }, pD.onerror = () => {
-           wD(new Error(`A block icon's texture did not load: ${DD.slice(0,100)}`))
-         }, pD.src = DD
-       }));
-       return (0, LD.e)(zD)
+       let {
+         value: ip,
+         onChange: cp,
+         showAll: Op,
+         disabled: Yp = !1
+       } = pp;
+       const {
+         t: Dp
+       } = (0, xp.H)();
+       return (0, Lp.jsxs)("div", {
+         className: op()("BloxdForm GamemodeForm", {
+           BasicOptions: !Op
+         }),
+         children: [(0, Lp.jsx)("div", {
+           className: "SectionTitle",
+           children: Dp("classic:defaultGamemode")
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L43-L172` → after: `L667-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L667-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/217.js#L667-L702) · [Before (L43-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/217.js#L43-L172)

```diff
-       var zD, wD;
-       fD || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${DD}`), fD = !0, null === (zD = RD) || void 0 === zD || zD.terminate(), RD = null, AD = null, hD.clear(), nD.clear();
-       for (const pD of BD.values()) pD(null);
-       BD.clear(), null === (wD = GD) || void 0 === wD || wD()
-     }
- 
-     function JD() {
-       return UD ??= async function() {
-         if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
-         if ("page" === pD.b.ios_icon_worker_v1 && (0, sD.isWebKit)()) return;
-         try {
-           RD = await async function() {
-             return await KD.ready(), KD.start()
-           }()
-         } catch (LD) {
-           return void OD(`did not start (${String(LD)})`)
- ... (114 more removed lines; see GitHub link above)
+       let {
+         mapTypes: ip,
+         value: cp,
+         onChange: Op,
+         showAll: Yp,
+         disabled: Dp = !1,
+         children: Ap
+       } = pp;
+       const {
+         t: Pp
+       } = (0, xp.H)();
+       return (0, Lp.jsxs)("div", {
+         className: op()("BloxdForm MapTypeForm", {
+           BasicOptions: !Yp
+         }),
+         children: [(0, Lp.jsx)("div", {
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L175-L365` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/217.js#L705) · [Before (L175-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/217.js#L175-L365)

```diff
-   36386: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD,
-       g: () => cD,
-       i: () => rD,
-       j: () => UD,
-       m: () => gD
-     });
-     const pD = {
-         across: Math.SQRT1_2,
-         down: Math.SQRT1_2 / 2,
-         up: Math.sqrt(3) / 2
-       },
-       sD = .6,
-       KD = {
-         width: 2 * pD.across,
- ... (175 more removed lines; see GitHub link above)
+   36543: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L76` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/218.js#L4) · [Before (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/218.js#L4-L76)

```diff
-   39055: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       h: () => rD
-     });
-     var pD = wD(25);
-     let sD = !1;
- 
-     function KD() {
-       return sD
-     }
- 
-     function rD(DD) {
-       sD !== DD && (sD = DD, pD.l.KG("replayViewer|videoExportChanged"))
-     }
-   },
- ... (57 more removed lines; see GitHub link above)
+   36549: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L79-L80` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/218.js#L7) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/218.js#L79-L80)

```diff
-       g: () => KD,
-       j: () => LD
+       g: () => Pp
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L82-L83` → after: `L9-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L9-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/218.js#L9-L394) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/218.js#L82-L83)

```diff
-     let pD = null,
-       sD = null;
+     var Op = cp(62),
+       op = cp(1372),
+       Ip = cp(1201),
+       Sp = cp(1361),
+       xp = cp(3581),
+       Lp = cp(5048),
+       Yp = cp(1112);
+ 
+     function Dp(pp) {
+       let {
+         loading: ip,
+         schematics: cp,
+         onSchematicPicked: Op,
+         selectedSchematicIdList: op = [],
+         disableAutoExport: Lp
+       } = pp;
+ ... (370 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L86-L87` → after: `L397-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L397-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/218.js#L397-L541) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/218.js#L86-L87)

```diff
-       return pD = DD, sD = null, LD(zD), () => {
-         pD === DD && (pD = null, sD = null)
+       if ("devDownloadJson" !== pp) ! function(pp, ip) {
+         const cp = Rp.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Ip.d)().websocketUrl);
+         let xp = !1;
+         const Lp = async (pp, ip) => {
+           if (xp) return;
+           xp = !0;
+           const {
+             gameNameWithVariation: Op,
+             lobbyName: Sp
+           } = (0, Ip.d)(), Lp = {
+             gameNameWithVariation: Op,
+             lobbyName: Sp
+           };
+           return await (0, Mp.postJsonWithMetricsCookiesAndJsonResponse)(`${cp}/schematic/${pp}`, op.y[pp].toBuffer({
+             ...Lp,
+             ...ip
+ ... (129 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L5-L77` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L4-L6) · [Before (L5-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L5-L77)

```diff
-   39525: (DD, zD, wD) => {
-     DD.exports = sD;
-     var pD = wD(358);
- 
-     function sD(DD, zD) {
-       if (!(this instanceof sD)) return new sD(DD, zD);
-       var wD = pD.create();
-       pD.add(wD, DD, zD), this.base = pD.min(pD.create(), DD, wD), this.vec = pD.clone(zD), this.max = pD.max(pD.create(), DD, wD), this.mag = pD.length(this.vec)
-     }
-     var KD = sD.prototype;
-     KD.width = function() {
-       return this.vec[0]
-     }, KD.height = function() {
-       return this.vec[1]
-     }, KD.depth = function() {
-       return this.vec[2]
- ... (57 more removed lines; see GitHub link above)
+   36575: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => mp
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L79-L80` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L8-L21) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L79-L80)

```diff
-     var pD = wD(4107);
-     let sD = null;
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(1543),
+       Sp = cp(1042),
+       xp = cp(768),
+       Lp = cp(1201),
+       Yp = cp(1480),
+       Dp = cp(1538),
+       Ap = cp(3654),
+       Pp = cp(1060),
+       Wp = cp(3581),
+       yp = cp(2661),
+       Up = cp(1112);
+     const wp = 2;
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L83-L133` → after: `L24-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L24-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L24-L29) · [Before (L83-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L83-L133)

```diff
-       return null !== sD && DD === sD
-     }
- 
-     function rD() {
-       this.Dv = !1, this.stopPropagation = !1, this.Av = !1, this.disabled = !1
-     }
-     class LD {
-       constructor(DD, zD) {
-         this.version = "0.7.0";
-         var wD = Object.assign({}, new rD, zD || {});
-         this.element = DD || document, this.Dv = !!wD.Dv, this.stopPropagation = !!wD.stopPropagation, this.Av = !!wD.Av, this.disabled = !!wD.disabled, this.filterEvents = (DD, zD) => !0, this.ignoreEvent = DD => !1, this.down = new pD.EventEmitter, this.up = new pD.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           IzD: 0,
-           BzD: 0,
-           GzD: 0
- ... (35 more removed lines; see GitHub link above)
+       return "firstPartyGame" === pp.type ? {
+         type: "game",
+         gameNameWithVariation: pp.gameNameWithVariation
+       } : {
+         type: "preview",
+         preview: pp.preview
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L138` → after: `L34-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L34-L48) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L138)

```diff
-       for (var zD in DD) DD[zD] = 0
+       let {
+         game: ip,
+         disabled: cp,
+         showPlaceholder: Op
+       } = pp;
+       return null !== ip ? (0, Up.jsx)(Wp.g, {
+         source: vp(ip),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: cp,
+         entrySource: "customGamePlace"
+       }) : Op ? (0, Up.jsx)(Wp.e, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L142-L144` → after: `L52-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L52-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L52-L64) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L142-L144)

```diff
-       window.addEventListener("keydown", GD.bind(null, DD, !0), !1), window.addEventListener("keyup", GD.bind(null, DD, !1), !1);
-       var zD = {
-         passive: !0
+       var ip;
+       let {
+         category: cp,
+         title: Op,
+         tintColour: op,
+         layout: Ip,
+         games: Sp,
+         landscape: xp = !1
+       } = pp;
+       const {
+         followsLeader: Lp
+       } = (0, yp.i)(), Yp = null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.slice(0, Ip.gameCount)) && void 0 !== ip ? ip : [], Ap = {
+         "--custom-game-place-tint": op
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L146-L155` → after: `L66-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L66-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L66-L96) · [Before (L146-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L146-L155)

```diff
-       DD.element.addEventListener("touchstart", fD.bind(void 0, DD), {
-         passive: !1
-       }), DD.element.addEventListener("touchend", BD.bind(void 0, DD), zD), DD.element.addEventListener("mousedown", hD.bind(null, DD, !0), zD), window.document.addEventListener("mouseup", hD.bind(null, DD, !1), zD), DD.element.addEventListener("touchmove", nD.bind(null, DD), zD) … [truncated]
-     }
-     var RD = 0,
-       AD = 0,
-       UD = null;
- 
-     function fD(DD, zD) {
-       zD.preventDefault(), ID(zD)
+       return (0, Up.jsxs)("div", {
+         className: "CustomGamePlacePanel AnimFadeIn",
+         style: Ap,
+         children: [(0, Up.jsx)("h2", {
+           className: "CustomGamePlacePanelHeading",
+           children: (0, Up.jsxs)(Dp.LinkPreserveSearch, {
+             to: `/custom-games/${encodeURIComponent(cp)}`,
+             className: "CustomGamePlacePanelTitle SmallTextBold",
+             children: [(0, Up.jsx)("span", {
+               children: Op
+             }), (0, Up.jsx)(Pp.d, {
+               name: "arrow-up"
+             })]
+           })
+         }), (0, Up.jsx)("div", {
+           className: "CustomGamePlacePanelGames",
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L159-L269` → after: `L100-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L100-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L100-L126) · [Before (L159-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L159-L269)

```diff
-       let zD = !1;
-       for (let wD = 0; wD < DD.touches.length; ++wD)
-         if (DD.touches[wD].identifier === UD) {
-           zD = !0;
-           break
-         } if (!zD) {
-         const zD = DD.changedTouches[0];
-         RD = zD.clientX, AD = zD.clientY, UD = zD.identifier
-       }
-     }
- 
-     function BD(DD, zD) {
-       for (var wD = zD.changedTouches, pD = 0; pD < wD.length; ++pD) wD[pD].identifier === UD && (UD = null)
-     }
- 
-     function GD(DD, zD, wD) {
- ... (95 more removed lines; see GitHub link above)
+       let {
+         categories: ip
+       } = pp;
+ 
+       function cp(pp) {
+         const cp = ip[pp];
+         return (0, Up.jsx)(Hp, {
+           ...cp,
+           landscape: !0
+         }, cp.id)
+       }
+       return (0, Up.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, Up.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, Up.jsxs)("div", {
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L271-L276` → after: `L128-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L128-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L128-L132) · [Before (L271-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L271-L276)

```diff
- 
-     function VD(DD, zD) {
-       const wD = {
-           code: zD,
-           preventDefault: () => {},
-           stopPropagation: () => {}
+     const ep = ["section1", "section2", "section3", "section4", "section5", "section6"],
+       jp = {
+         section1: {
+           gameCount: 4,
+           columnCount: 2
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L278-L397` → after: `L134-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L134-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L134-L153) · [Before (L278-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L278-L397)

```diff
-         pD = sD;
-       sD = wD;
-       try {
-         PD(zD, !1, DD, wD)
-       } finally {
-         sD = pD
-       }
-     }
- 
-     function PD(DD, zD, wD, pD) {
-       var sD = wD._keyBindmap[DD];
-       sD && (CD(wD._keyStates[DD], zD) && (wD._keyStates[DD] = zD, sD.forEach((DD => {
-         (!wD.filterEvents || wD.filterEvents(pD, DD)) && function(DD, zD, wD, pD) {
-           var sD = zD ? wD.pressCount : wD.releaseCount;
-           sD[DD] = (sD[DD] || 0) + 1;
-           var KD = wD._bindPressCount[DD] || 0;
- ... (104 more removed lines; see GitHub link above)
+         section2: {
+           gameCount: 6,
+           columnCount: 6
+         },
+         section3: {
+           gameCount: 8,
+           columnCount: 4
+         },
+         section4: {
+           gameCount: 6,
+           columnCount: 3
+         },
+         section5: {
+           gameCount: 3,
+           columnCount: 1
+         },
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L399-L482` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L155) · [Before (L399-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L399-L482)

```diff
-     for (KD = 97; KD < 123; KD++) pD[String.fromCharCode(KD)] = KD - 32;
-     for (var KD = 48; KD < 58; KD++) pD[KD - 48] = KD;
-     for (KD = 1; KD < 13; KD++) pD["f" + KD] = KD + 111;
-     for (KD = 0; KD < 10; KD++) pD["numpad " + KD] = KD + 96;
-     var rD = zD.names = zD.title = {};
-     for (KD in pD) rD[pD[KD]] = KD;
-     for (var LD in sD) pD[LD] = sD[LD]
-   },
-   39505: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     class pD {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
- ... (68 more removed lines; see GitHub link above)
+     var kp = cp(1133);
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L485-L965` → after: `L158-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L158-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L158-L183) · [Before (L485-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L485-L965)

```diff
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = DD, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
-     }
-     var KD = 3,
-       rD = 20;
- 
-     function LD(DD) {
-       for (var zD = DD._data, wD = 1e3 / DD.Rl, pD = zD.nowObject.now() + rD, sD = 0; zD.nowObject.now() >= zD.lastTickStarted + wD && zD.nowObject.now() < pD && ++sD <= KD;) DD.QJ(wD), zD.lastTickStarted += wD;
-       var LD = 5 * (wD + 5),
-         cD = zD.nowObject.now();
-       if (cD - zD.lastTickStarted > LD)
-         for (; cD >= zD.lastTickStarted + wD;) zD.lastTickStarted += wD
-     }
-   },
-   36667: (DD, zD, wD) => {
-     wD.d(zD, {
- ... (465 more removed lines; see GitHub link above)
+       var pp;
+       const {
+         t: ip
+       } = (0, Lp.H)(), cp = (0, Ip.A)(), Op = (0, kp.h)(), Pp = (0, Ap.b)({
+         refresh: !0
+       }), Wp = cp.customGamePlace;
+       if (!(0, Sp.k)(Wp)) return (0, Up.jsx)(Dp.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const yp = xp.c[Wp],
+         wp = Sp.b[Wp],
+         vp = null !== (pp = null === Pp || void 0 === Pp ? void 0 : Pp[Wp]) && void 0 !== pp ? pp : null,
+         tp = [];
+       for (let op = 0; op < wp.length; op++) {
+         var mp;
+         const pp = ep[op];
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L967-L1015` → after: `L185-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L185-L190) · [Before (L967-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L967-L1015)

```diff
-     }
-   },
-   38757: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => AD
-     });
-     const pD = .5 * (Math.sqrt(3) - 1),
-       sD = (3 - Math.sqrt(3)) / 6,
-       KD = 1 / 3,
-       rD = 1 / 6,
-       LD = (Math.sqrt(5) - 1) / 4,
-       cD = (5 - Math.sqrt(5)) / 20,
-       gD = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       RD = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const AD = class {
-       constructor() {
- ... (33 more removed lines; see GitHub link above)
+       return (0, Up.jsxs)("div", {
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, Up.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${Wp}/${yp.largePicture}.png)`
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1017-L1191` → after: `L192-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L192-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/219.js#L192-L213) · [Before (L1017-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/219.js#L1017-L1191)

```diff
-           return zD
-         }(zD), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
-         for (let wD = 0; wD < 512; wD++) this.perm[wD] = this.p[255 & wD], this.permMod12[wD] = this.perm[wD] % 12
-       }
-       noise2D(DD, zD) {
-         const wD = this.permMod12,
-           KD = this.perm;
-         let rD = 0,
-           LD = 0,
-           cD = 0;
-         const RD = (DD + zD) * pD,
-           AD = Math.floor(DD + RD),
-           UD = Math.floor(zD + RD),
-           fD = (AD + UD) * sD,
-           ID = DD - (AD - fD),
-           BD = zD - (UD - fD);
- ... (159 more removed lines; see GitHub link above)
+         }), (0, Up.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: ip(yp.title)
+         }), (0, Up.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, Up.jsx)(Yp.d, {
+             onClick: () => (0, Dp.navigatePreserveSearch)("/"),
+             children: ip("homePage:backToGames")
+           })
+         }), !Op && (0, Up.jsx)(dp, {
+           categories: tp
+         }), Op && (0, Up.jsx)("div", {
+           className: op()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: tp.map((pp => (0, Up.jsx)(Hp, {
+             category: pp.category,
+             title: pp.title,
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L2)

```diff
- export const ids = [220];
+ export const ids = [220, 296];
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   40995: (DD, zD, wD) => {
+   41517: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L6)

```diff
-       LobbyManageView: () => Ez
+       CharacterCustomisationUI: () => Si
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L8-L30` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L8-L11) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L8-L30)

```diff
-     var pD = wD(58),
-       sD = wD(1472),
-       KD = wD(36992),
-       rD = wD(2421),
-       LD = wD(2423),
-       cD = wD(2402),
-       gD = wD(36557);
- 
-     function RD() {
-       const [DD, zD] = (0, pD.useState)(new Map);
-       return {
-         get: zD => DD.get(zD),
-         hold: (0, pD.useCallback)(((DD, wD, pD) => {
-           zD((zD => new Map(zD).set(DD, wD))), pD.then((() => {
-             zD((zD => {
-               const wD = new Map(zD);
- ... (7 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(3107),
+       Ip = cp(1141),
+       Sp = cp(1049),
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L32-L46` → after: `L13-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L13-L19) · [Before (L32-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L32-L46)

```diff
-       fD = wD(1200),
-       ID = wD(1057),
-       BD = wD(1346),
-       GD = wD(2657),
-       hD = wD(5049),
-       nD = wD(3444);
-     var MD = wD(1973),
-       OD = wD(1447);
- 
-     function JD(DD, zD, wD) {
-       const pD = DD.filter((DD => DD.name !== zD)),
-         sD = pD.filter((DD => "none" === DD.role)).sort(((DD, zD) => zD.at - DD.at)),
-         KD = pD.filter((DD => "none" !== DD.role)).sort(((DD, zD) => wD.indexOf(DD.role) - wD.indexOf(zD.role) || zD.at - DD.at));
-       return [...DD.some((DD => DD.name === zD)) && null !== zD ? [zD] : [], ...[...sD, ...KD].map((DD => DD.name))]
-     }
+       Lp = cp(1251),
+       Yp = cp(620),
+       Dp = cp(1201),
+       Ap = cp(2276),
+       Pp = cp(1579),
+       Wp = cp(2638);
+     const yp = Lp.u.filter((pp => !Pp.f.includes(pp)));
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L49-L55` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L22) · [Before (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L49-L55)

```diff
-       const wD = DD.banned.map((DD => DD.name)),
-         pD = new Set(wD);
-       return {
-         here: JD(DD.here, zD, DD.roles.map((DD => DD.role))),
-         away: DD.away.filter((DD => !pD.has(DD.name))).map((DD => DD.name)),
-         banned: wD
-       }
+       return yp.includes(pp) && "string" === typeof ip && (0, Wp.f)(pp, ip)
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L58-L74` → after: `L25-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L25-L29) · [Before (L58-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L58-L74)

```diff
-     function QD(DD, zD) {
-       const wD = DD.here.find((DD => DD.name === zD));
-       if (wD) return {
-         section: "here",
-         player: wD
-       };
-       const pD = DD.banned.find((DD => DD.name === zD));
-       if (pD) return {
-         section: "banned",
-         bannedAt: pD.at
-       };
-       const sD = DD.away.find((DD => DD.name === zD));
-       return sD ? {
-         section: "away",
-         player: sD
-       } : {
- ... (1 more removed lines; see GitHub link above)
+     function wp(pp) {
+       const ip = {};
+       for (const cp of yp) {
+         const Op = pp[cp];
+         void 0 !== Op && Up(cp, Op) && (ip[cp] = Op)
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L109-L119` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L35) · [Before (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L109-L119)

```diff
-       let {
-         status: zD
-       } = DD;
-       return (0, iD.jsx)("span", {
-         className: UD()("LobbyManageStatus", {
-           LobbyManageStatusRefused: !zD.ok
-         }),
-         children: (0, iD.jsx)(dD.e, {
-           text: zD.text
-         })
-       })
+       return 0 === Object.keys(pp).length
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L122-L159` → after: `L38-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L38-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L38-L42) · [Before (L122-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L122-L159)

```diff
-     function WD(DD) {
-       let {
-         names: zD,
-         cap: wD,
-         filterFrom: sD,
-         moreLabel: KD,
-         reveal: rD = null,
-         renderRow: LD
-       } = DD;
-       const {
-         t: cD
-       } = (0, fD.E)(), [gD, RD] = (0, pD.useState)(!1), [AD, UD] = (0, pD.useState)(""), BD = gD || null !== rD && zD.indexOf(rD) >= wD, hD = (BD || zD.length <= wD) && null !== sD && zD.length > sD, nD = AD.trim().toLowerCase();
-       let MD = BD ? zD : zD.slice(0, wD);
-       return hD && "" !== nD && (MD = MD.filter((DD => DD.toLowerCase().includes(nD)))), (0, iD.jsxs)(iD.Fragment, {
-         children: [hD && (0, iD.jsx)(SD.e, {
-           className: "LobbyManageFilter",
- ... (22 more removed lines; see GitHub link above)
+     function tp(pp, ip) {
+       return Object.entries(pp).every((pp => {
+         let [cp, Op] = pp;
+         return ip[cp] === Op
+       }))
```

#### 10. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L161-L186` → after: `L44-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L44-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L44-L68) · [Before (L161-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L161-L186)

```diff
- 
-     function ND(DD) {
-       let {
-         value: zD,
-         placeholder: wD,
-         ariaLabel: sD,
-         maxLength: KD,
-         wide: rD = !1,
-         onSave: LD
-       } = DD;
-       const cD = (0, pD.useRef)(null),
-         [gD, RD] = (0, pD.useState)(0),
-         AD = (0, pD.useRef)(!0),
-         fD = (0, pD.useRef)(null),
-         ID = (0, pD.useRef)({
-           value: zD,
- ... (10 more removed lines; see GitHub link above)
+     var Hp = cp(2281),
+       dp = cp(3190),
+       ep = cp(2004),
+       jp = cp(1480),
+       kp = cp(2314),
+       mp = cp(25),
+       Rp = cp(2767),
+       qp = cp(1520),
+       Mp = cp(1149),
+       Cp = cp(1880);
+     class Ep {
+       constructor() {
+         this.slots = new Map, this.before = new Map, this.accountId = null
+       }
+       moveTo(pp) {
+         null !== pp && pp !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = pp)
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L188-L209` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L70) · [Before (L188-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L188-L209)

```diff
-       };
-       return (0, pD.useEffect)((() => {
-         null === fD.current && cD.current && (cD.current.value = zD)
-       }), [zD, gD]), (0, pD.useEffect)((() => () => {
-         AD.current = !1, BD()
-       }), []), (0, iD.jsx)("div", {
-         className: UD()("LobbyManageRuleInput", {
-           LobbyManageRuleInputWide: rD
-         }),
-         onBlur: BD,
-         children: (0, iD.jsx)(SD.e, {
-           domRef: cD,
-           defaultValue: zD,
-           placeholderText: wD,
-           ariaLabel: sD,
-           maxLength: KD,
- ... (6 more removed lines; see GitHub link above)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L211-L252` → after: `L72-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L72-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L72-L88) · [Before (L211-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L211-L252)

```diff
-     const ZD = ["mod", "coOwner"],
-       yD = {
-         coOwner: "lobbyManage:roleCanCoOwner",
-         mod: "lobbyManage:roleCanMod",
-         coder: "lobbyManage:roleCanCoder",
-         builder: "lobbyManage:roleCanBuilder"
-       };
- 
-     function kD(DD) {
-       var zD, wD, KD;
-       let {
-         name: rD,
-         place: LD,
-         openedIn: cD,
-         isYou: gD,
-         manage: AD,
- ... (26 more removed lines; see GitHub link above)
+     class Xp extends Rp.e {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ep;
+         super("saved outfits", (async ip => {
+           const cp = pp.isFor(ip.whamm),
+             Op = new Map(pp.slots),
+             op = await qp.b.getSavedOutfits(ip);
+           return cp ? pp.overlay(op, Op) : op
+         })), this.unsaved = pp, this.started = !1, this.sending = !1
+       }
+       ensureLoaded() {
+         if (this.started) {
+           if (!this.getState().failed) return
+         } else this.started = !0, this.watchAccount();
+         this.refresh()
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L254-L288` → after: `L90-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L90-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L90-L133) · [Before (L254-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L254-L288)

```diff
-         return null !== (zD = null === (wD = (DD => JD.roles.find((zD => zD.role === DD)))(DD)) || void 0 === wD ? void 0 : wD.label) && void 0 !== zD ? zD : DD
-       }, kD = DD => {
-         const zD = yD[DD];
-         return void 0 === zD ? void 0 : GD(zD)
-       }, mD = "here" === LD.section || "away" === LD.section ? LD.player : null, eD = "here" === LD.section ? LD.player.id : null, {
-         playerSocialPreview: oD,
-         isFriend: aD
-       } = null === eD ? {
-         playerSocialPreview: (0, CD.i)(rD, null),
-         isFriend: !1
-       } : (0, PD.d)(eD, rD), uD = function() {
-         AD.send(...arguments)
-       }, vD = (DD, zD) => {
-         SD.hold("role", DD, AD.send({
-           type: "setRole",
-           name: rD,
- ... (19 more removed lines; see GitHub link above)
+         (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(pp)) || this.unsaved.before.set(pp, null !== (cp = null === (Op = this.getState().data) || void 0 === Op ? void 0 : Op[pp]) && void 0 !== cp ? cp : {});
+         this.unsaved.slots.set(pp, ip), this.update((cp => cp.map(((cp, Op) => Op === pp ? ip : cp)))), this.sending || this.sendUnsaved()
+       }
+       clear(pp) {
+         this.save(pp, {})
+       }
+       async sendUnsaved() {
+         this.sending = !0;
+         let pp = !1;
+         for (; this.unsaved.slots.size > 0;) {
+           const cp = new Map(this.unsaved.slots);
+           let Op = this.getState().accountId;
+           try {
+             const pp = await Mp.userContextManager.getCurrentUserContext();
+             if (Op = pp.whamm, this.unsaved.moveTo(pp.whamm), 0 === this.unsaved.slots.size) {
+               this.refresh();
+ ... (28 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L290-L441` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L135-L136) · [Before (L290-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L290-L441)

```diff
-       } else "banned" === LD.section ? null !== LD.bannedAt && (tD = jD(GD, hD.code, "lobbyManage:bannedAgo", LD.bannedAt, WD)) : "banned" === cD && (tD = GD("lobbyManageEntry:unbanned"));
-       return (0, iD.jsx)("div", {
-         className: "LobbyManagePlayerRow",
-         "data-lobby-manage-row": rD,
-         children: (0, iD.jsxs)(VD.g, {
-           playerSocialPreview: oD,
-           isFriend: aD,
-           status: tD,
-           opensProfileCard: !gD && (0, PD.g)(!0, rD, UD),
-           zIndex: BD,
-           children: [null !== nD && (0, iD.jsxs)("div", {
-             className: "LobbyManageButtons",
-             children: ["ban" === nD.kind && (0, iD.jsxs)(OD.R, {
-               className: "LobbyManageIconButton SmallTextLight",
-               analyticsClick: {
-                 id: "lobby_manage.ban",
- ... (136 more removed lines; see GitHub link above)
+         this.sending = !1, pp && this.refresh()
+       }
```

#### 15. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L447-L449` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L157-L160) · [Before (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L447-L449)

```diff
-         manage: rD,
-         focusRequest: LD,
-         onFocused: cD
+         wornOutfit: ip,
+         onApply: cp,
+         onOverwrite: op,
+         onDelete: Sp
```

#### 16. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L453-L471` → after: `L164-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L164-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L164-L180) · [Before (L453-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L453-L471)

```diff
-       } = (0, fD.E)(), RD = (0, MD.i)("players"), AD = (0, MD.i)("hiddenPlayerNames"), UD = (0, pD.useRef)(null), {
-         state: BD
-       } = rD, hD = null === RD.localId ? null : null !== (zD = null === (wD = RD.byId[RD.localId]) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : null, [nD] = (0, pD.useState)((() => ED(BD, hD))), JD = function(DD, zD, wD) {
-         const pD = new Set([...DD.here, ...DD.away, ...DD.banned]),
-           sD = ED(zD, wD),
-           KD = zD => {
-             const wD = sD[zD].filter((DD => !pD.has(DD)));
-             for (const DD of wD) pD.add(DD);
-             return [...DD[zD], ...wD]
-           };
-         return {
-           here: KD("here"),
-           away: KD("away"),
-           banned: KD("banned")
-         }
-       }(nD, BD, hD), [XD, VD] = (0, pD.useState)(!1), PD = function(DD, zD) {
- ... (3 more removed lines; see GitHub link above)
+       } = (0, Dp.H)(), {
+         accountId: Yp,
+         data: Ap
+       } = (0, Rp.j)(lp, !1), {
+         userContext: Pp
+       } = (0, Ip.b)();
+       async function Wp(pp, ip) {
+         const cp = await gp.NotificationProvider.showPromptPopup({
+             title: "homePage:deleteOutfitConfirm",
+             confirmText: "general:delete",
+             cancelText: "general:cancel",
+             destructive: !0
+           }).getResult(),
+           {
+             accountId: Op,
+             data: op
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L473-L524` → after: `L182-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L182-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L182-L209) · [Before (L473-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L473-L524)

```diff
-         if (null === LD) return;
-         const wD = null === (DD = UD.current) || void 0 === DD ? void 0 : DD.querySelector(`[data-lobby-manage-row="${CSS.escape(LD.name)}"]`);
-         null === wD || void 0 === wD || wD.scrollIntoView({
-           block: "center"
-         }), null === wD || void 0 === wD || null === (zD = wD.querySelector(".ProfilePreview")) || void 0 === zD || zD.focus({
-           preventScroll: !0
-         }), cD(LD.seq)
-       }), [null === LD || void 0 === LD ? void 0 : LD.seq]);
-       const xD = DD => (zD, wD) => (0, iD.jsx)(kD, {
-         name: zD,
-         place: QD(BD, zD),
-         openedIn: DD,
-         isYou: zD === hD,
-         manage: rD,
-         hiddenNames: AD,
-         zIndex: wD
- ... (36 more removed lines; see GitHub link above)
+         !0 === cp && Op === Yp && null !== op && (tp(Ip = op[pp], xp = ip) && tp(xp, Ip)) && (lp.clear(pp), Sp(pp))
+       }
+       return (0, Op.useEffect)((() => {
+         lp.ensureLoaded()
+       }), []), null === Ap || Yp !== Pp.whamm ? null : (0, Gp.jsxs)("div", {
+         className: "CosmeticPackGroup SavedOutfits",
+         children: [(0, Gp.jsx)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: (0, Gp.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: Lp("homePage:myOutfits")
+           })
+         }), (0, Gp.jsx)("div", {
+           className: "CharacterPresetsGrid SavedOutfitsGrid",
+           children: Ap.map(((pp, Op) => {
+             const Ip = vp(pp);
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L526-L528` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L211) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L526-L528)

```diff
-                   VD(!1), rD.send({
-                     type: "kickAll"
-                   }, "kickAll")
+                   Ip ? lp.save(Op, ip) : cp(pp)
```

#### 19. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L530-L532` → after: `L213-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L213-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L213-L234) · [Before (L530-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L530-L532)

```diff
-                 children: gD("lobbyManage:kickAll")
-               }), (0, iD.jsx)(OD.g, {
-                 className: "LobbyManageIconButton SmallTextLight",
+                 children: [Ip && (0, Gp.jsxs)(Gp.Fragment, {
+                   children: [(0, Gp.jsx)(hp.d, {
+                     name: "plus"
+                   }), Lp("homePage:saveOutfit")]
+                 }), !Ip && (0, Gp.jsxs)(Gp.Fragment, {
+                   children: [(0, Gp.jsx)("div", {
+                     className: "SavedOutfitCardPicture",
+                     children: (0, Gp.jsx)(Fp.c, {
+                       cosmetics: pp
+                     })
+                   }), (0, Gp.jsx)(jp.S, {
+                     padSecondaryLabelKey: "homePage:saveOutfit",
+                     stopPropagation: !0,
+                     onClick: () => {
+                       tp(ip, pp) || (lp.save(Op, ip), op(Op, pp))
+                     },
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L534` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L236) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L534)

```diff
-                   VD(!1)
+                   Wp(Op, pp)
```

#### 21. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L536` → after: `L238-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L238-L240) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L536)

```diff
-                 children: gD("general:cancel")
+                 children: (0, Gp.jsx)(hp.d, {
+                   name: "trash-can"
+                 })
```

#### 22. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L538-L580` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L242-L243) · [Before (L538-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L538-L580)

```diff
-             })]
-           }), CD && (0, iD.jsx)("div", {
-             className: "LobbyManageBoxStatus",
-             children: (0, iD.jsx)(lD, {
-               status: CD
-             })
-           }), (0, iD.jsx)(WD, {
-             names: JD.here,
-             cap: JD.here.length,
-             filterFrom: 20,
-             moreLabel: "",
-             renderRow: xD("here")
-           })]
-         }), JD.away.length > 0 && (0, iD.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, iD.jsx)(GD.e, {
- ... (27 more removed lines; see GitHub link above)
+             }, Op)
+           }))
```

#### 23. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L584-L592` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L247-L249) · [Before (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L584-L592)

```diff
-     var eD = wD(4657),
-       oD = wD(1657),
-       aD = wD(36669),
-       uD = wD(36684),
-       vD = wD(36680),
-       tD = wD(36672),
-       FD = wD(36707),
-       YD = wD(36698),
-       HD = wD(36701);
+     var Zp = cp(36602),
+       zp = cp(2623),
+       sp = cp(2630);
```

#### 24. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L594-L597` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L251-L252) · [Before (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L594-L597)

```diff
-     function qD(DD) {
-       const zD = new Set;
-       for (const wD of DD) zD.add(wD.toLowerCase());
-       return zD
+     function Kp(pp, ip, cp) {
+       return null !== pp && !(0, zp.h)(sp.b, ip, cp, pp.collected, pp.ownedPacks)
```

#### 25. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L603-L609` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L257-L258) · [Before (L603-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L603-L609)

```diff
-         state: sD,
-         lobbyName: KD,
-         listed: rD,
-         isListed: LD,
-         QJ: cD,
-         ZJ: gD,
-         statusOf: RD
+         locked: ip,
+         children: cp
```

#### 26. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L611-L711` → after: `L260-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L260-L262) · [Before (L611-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L611-L711)

```diff
-       const {
-         t: AD,
-         selectedLanguage: UD
-       } = (0, fD.E)(), ID = (0, oD.o)(), BD = (0, MD.i)("players"), hD = null === BD.localId ? null : null !== (zD = null === (wD = BD.byId[BD.localId]) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : null, nD = (0, pD.useMemo)((() => (0, tD.h)(ID.friends, KD, sD.her … [truncated]
-         let {
-           refused: zD,
-           listed: wD,
-           here: pD,
-           friends: sD,
-           excluded: KD
-         } = DD;
-         const rD = qD(KD),
-           LD = DD => DD.filter((DD => {
-             const zD = DD.toLowerCase();
-             return !rD.has(zD) && (rD.add(zD), !0)
-           }));
- ... (85 more removed lines; see GitHub link above)
+       return ip ? (0, Gp.jsx)(ii, {
+         children: cp
+       }) : cp
```

#### 27. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L716-L717` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L268) · [Before (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L716-L717)

```diff
-         manage: zD,
-         listing: wD
+         children: cp
```

#### 28. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L721-L819` → after: `L272-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L272-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L272-L279) · [Before (L721-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L721-L819)

```diff
-       } = (0, fD.E)(), KD = (DD, wD) => ((0, sD.reportAnalyticsClick)({
-         id: "lobby_manage.set_listing",
-         value: DD
-       }), zD.send({
-         type: "setListing",
-         field: DD,
-         value: wD
-       }, `listing:${DD}`)), rD = DD => {
-         const wD = zD.statusOf(`listing:${DD}`);
-         return wD && !wD.ok && (0, iD.jsx)("div", {
-           className: "LobbyManageFieldError",
-           children: (0, iD.jsx)(lD, {
-             status: wD
-           })
-         })
-       };
- ... (83 more removed lines; see GitHub link above)
+       } = (0, Dp.H)(), {
+         userContext: op
+       } = (0, Ip.b)(), Sp = null !== (ip = op.dailyDrop) && void 0 !== ip && ip.hidden ? Op("dailyDrop:lockedFromHidden") : Op("dailyDrop:lockedFrom");
+       return (0, Gp.jsx)(np.f, {
+         tooltipInner: (0, Gp.jsx)(Gp.Fragment, {
+           children: Sp
+         }),
+         children: cp
```

#### 29. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L823-L838` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L283-L284) · [Before (L823-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L823-L838)

```diff
-     function pz(DD) {
-       let {
-         manage: zD
-       } = DD;
-       const {
-         lobbyName: wD,
-         shownLobbyName: pD
-       } = (0, MD.i)("connectedGame");
-       return zD.state.you.canSetVisibility && null !== wD ? (0, iD.jsx)(Kz, {
-         manage: zD,
-         lobbyName: wD,
-         worldCode: null !== pD && void 0 !== pD ? pD : wD
-       }, wD) : (0, iD.jsx)(rz, {
-         manage: zD,
-         lobbyName: null !== wD && void 0 !== wD ? wD : ""
-       })
+     function ci(pp, ip, cp) {
+       return (0, Ap.o)(pp, ip).purchasable && !(0, Np.w)(pp, ip, cp)
```

#### 30. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L841-L842` → after: `L287-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L287-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L287-L291) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L841-L842)

```diff
-     function sz(DD) {
-       return DD.map((DD => DD.toLowerCase())).sort().join(",")
+     function Oi(pp, ip) {
+       return Object.entries(pp).some((pp => {
+         let [cp, Op] = pp;
+         return ci(cp, Op, ip)
+       }))
```

#### 31. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L848-L850` → after: `L297-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L297-L300) · [Before (L848-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L848-L850)

```diff
-         manage: wD,
-         lobbyName: KD,
-         worldCode: rD
+         pack: cp,
+         ownedPacks: Op,
+         showStoreLink: op = !1,
+         children: Ip
```

#### 32. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L854-L908` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L304) · [Before (L854-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L854-L908)

```diff
-       } = (0, fD.E)(), {
-         settings: cD,
-         loading: gD,
-         change: RD,
-         retry: AD,
-         refresh: UD
-       } = (0, aD.h)(KD), ID = (0, oD.o)(), {
-         state: hD
-       } = wD, nD = (0, pD.useRef)(cD);
-       nD.current = cD;
-       const MD = sz(null !== (zD = hD.whitelist) && void 0 !== zD ? zD : []),
-         JD = null !== hD.whitelist;
-       (0, pD.useEffect)((() => {
-         const DD = nD.current;
-         null !== DD && (DD.visibility !== hD.visibility || JD && sz(DD.whitelist) !== MD) && UD()
-       }), [hD.visibility, MD, JD, UD]);
- ... (39 more removed lines; see GitHub link above)
+       } = (0, Dp.H)(), Lp = Bp.e[cp], Yp = Lp.purchasable && !Op.includes(cp) && Bp.x.includes(cp), Ap = Tp.i[cp];
```

#### 33. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L910-L972` → after: `L306-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L306-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L306-L318) · [Before (L910-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L910-L972)

```diff
-         className: "LobbyManagePage",
-         children: [(0, iD.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, iD.jsx)(GD.e, {
-             label: LD("worldSocial:whoCanJoin")
-           }), null === cD && gD && (0, iD.jsx)("div", {
-             className: "LobbyManageLoading",
-             children: (0, iD.jsx)(BD.e, {})
-           }), null === cD && !gD && (0, iD.jsx)(OD.g, {
-             className: "SmallTextLight",
-             onClick: AD,
-             children: LD("worldSocial:loadFailed")
-           }), null !== cD && (0, iD.jsx)(uD.b, {
-             visibility: cD.visibility,
-             onPick: DD => {
-               XD(DD)
- ... (47 more removed lines; see GitHub link above)
+         className: xp()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: Yp
+         }),
+         children: [Ap && (0, Gp.jsx)(Ap, {}), (0, Gp.jsxs)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: [(0, Gp.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: null !== (ip = Lp.displayName) && void 0 !== ip ? ip : cp
+           }), (Yp || op) && (0, Gp.jsxs)(jp.C, {
+             onClick: () => {
+               Yp ? (0, Tp.f)(cp) : (0, kp.r)({
+                 mode: "self",
+                 source: "characterCustomisation"
```

#### 34. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L974-L982` → after: `L320-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L320-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L320-L325) · [Before (L974-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L974-L982)

```diff
-             } : {
-               ok: !0
-             }
-           },
-           statusOf: DD => wD.statusOf(`whitelist:${DD.toLowerCase()}`)
-         }), "public" === (null === cD || void 0 === cD ? void 0 : cD.visibility) && null !== hD.listing && (0, iD.jsx)(zz, {
-           manage: wD,
-           listing: hD.listing
-         })]
+             },
+             children: [(0, Gp.jsx)(hp.d, {
+               name: "store"
+             }), " ", Sp("general:viewInShop")]
+           })]
+         }), Yp && "bee" === cp && (0, Gp.jsx)(Tp.b, {}), Ip]
```

#### 35. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L989-L990` → after: `L331-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L331-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L331-L336) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L989-L990)

```diff
-         manage: wD,
-         lobbyName: pD
+         equippedEmoteIds: ip,
+         ownedPacks: cp,
+         canBuy: Op,
+         onUpdateLoadout: op,
+         onEmoteSelected: Ip,
+         onEquipPreviewSkin: Sp
```

#### 36. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L994-L996` → after: `L340-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L340-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L340-L352) · [Before (L994-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L994-L996)

```diff
-       } = (0, fD.E)(), {
-         state: rD
-       } = wD, LD = RD(), cD = null !== (zD = rD.whitelist) && void 0 !== zD ? zD : [];
+       } = (0, Dp.H)(), Pp = new Set(ip), Wp = new Map, yp = Object.keys(Ap.h.emote).sort(((pp, ip) => {
+         var cp, Op, op, Ip;
+         return (null !== (cp = null === (Op = (0, Ap.m)("emote", pp)) || void 0 === Op ? void 0 : Op.clientIdx) && void 0 !== cp ? cp : 0) - (null !== (op = null === (Ip = (0, Ap.m)("emote", ip)) || void 0 === Ip ? void 0 : Ip.clientIdx) && void 0 !== op ? op : 0)
+       })).filter((pp => {
+         const ip = (0, Ap.o)("emote", pp),
+           op = (0, Np.w)("emote", pp, cp);
+         return !(ip.purchasable && !op && !Op) && (ip.clientSelectable || op)
+       }));
+       for (const xp of yp) {
+         const pp = (0, Ap.m)("emote", xp).cosmeticPack;
+         Wp.has(pp) || Wp.set(pp, []), Wp.get(pp).push(xp)
+       }
+       const Up = Array.from(Wp.keys());
```

#### 37. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L998-L1005` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L354-L365) · [Before (L998-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L998-L1005)

```diff
-         className: "LobbyManagePage",
-         children: [(0, iD.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, iD.jsx)(GD.e, {
-             label: KD("worldSocial:whoCanJoin")
-           }), (0, iD.jsx)("div", {
-             className: "LobbyManageModeText",
-             children: KD(`worldSocial:${rD.visibility}`)
+         className: "CharCustomisPartSelectorWrapper",
+         children: [!1, (0, Gp.jsxs)("div", {
+           className: "EmoteLoadoutSummary",
+           children: [(0, Gp.jsx)("span", {
+             className: "EmoteLoadoutSummaryText SmallTextBold",
+             children: Yp("emotes:equippedCount", {
+               count: ip.length,
+               max: Lp.n
+             })
+           }), (0, Gp.jsx)("span", {
+             className: "EmoteLoadoutSummaryHint SmallTextLight",
+             children: Yp("emotes:loadoutHint")
```

#### 38. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1007-L1053` → after: `L367-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L367-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L367-L436) · [Before (L1007-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1007-L1053)

```diff
-         }), "whitelist" === rD.visibility && rD.you.canEditWhitelist && (0, iD.jsx)(Dz, {
-           state: rD,
-           lobbyName: pD,
-           listed: cD,
-           isListed: DD => {
-             var zD;
-             return null !== (zD = LD.get(DD.toLowerCase())) && void 0 !== zD ? zD : (0, tD.l)(cD, DD)
-           },
-           QJ: (DD, zD) => {
-             (0, sD.reportAnalyticsClick)(zD ? {
-               id: "lobby_manage.whitelist_add",
-               value: "DU"
-             } : {
-               id: "lobby_manage.whitelist_remove"
-             });
-             const pD = DD.toLowerCase();
- ... (31 more removed lines; see GitHub link above)
+         }), Up.map((pp => {
+           const Op = Wp.get(pp);
+           return (0, Gp.jsx)(oi, {
+             pack: pp,
+             ownedPacks: cp,
+             children: (0, Gp.jsx)("div", {
+               className: "CosmeticPackGroupItems",
+               children: Op.map((pp => {
+                 var Op;
+                 const Sp = ip.indexOf(pp),
+                   Dp = -1 !== Sp,
+                   Ap = ip.length >= Lp.n,
+                   Wp = ci("emote", pp, cp),
+                   yp = Wp || !Dp && Ap,
+                   Up = (0, Hp.g)(pp);
+                 return (0, Gp.jsxs)("div", {
+ ... (54 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1062-L1068` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L441) · [Before (L1062-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1062-L1068)

```diff
-         rule: wD,
-         value: pD,
-         status: sD,
-         pending: KD,
-         hiddenNames: rD,
-         JV: LD,
-         onAction: cD
+         selectedTab: ip
```

#### 40. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1070-L1166` → after: `L443-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L443-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L443-L466) · [Before (L1070-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1070-L1166)

```diff
-       const {
-         t: gD
-       } = (0, fD.E)(), RD = DD => LD(wD, DD), AD = (DD, zD) => {
-         cD(wD, DD, zD)
-       }, UD = bD(gD, wD.label, rD), ID = wD.info ? bD(gD, wD.info, rD) : void 0, BD = wD.placeholder ? bD(gD, wD.placeholder, rD) : void 0, GD = (null !== (zD = wD.options) && void 0 !== zD ? zD : []).map((DD => ({
-         value: DD.value,
-         label: bD(gD, DD.label, rD)
-       }))), hD = Math.max(0, ...GD.map((DD => function(DD) {
-         let zD = 0;
-         for (const wD of DD) zD += gz.test(wD) ? 2 : 1;
-         return zD
-       }(DD.label)))), nD = sD && (0, iD.jsx)("div", {
-         className: "LobbyManageRuleStatus",
-         children: (0, iD.jsx)(lD, {
-           status: sD
-         })
- ... (81 more removed lines; see GitHub link above)
+       const cp = "characters" === ip ? "skin" : ip,
+         {
+           t: Sp
+         } = (0, Dp.H)(),
+         {
+           userContext: yp,
+           isUserContextUpdating: Up
+         } = (0, Ip.b)(),
+         vp = (0, op.c)(),
+         {
+           gameState: Hp
+         } = (0, mp.o)(["gameState"]),
+         [Rp, qp] = (0, Op.useState)({}),
+         [Mp, Cp] = (0, Op.useState)({}),
+         [Ep, Xp] = (0, Op.useState)(null),
+         {
+ ... (8 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1168-L1226` → after: `L468-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L468-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L468-L474) · [Before (L1168-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1168-L1226)

```diff
-     function Az(DD) {
-       let {
-         names: zD,
-         pending: wD,
-         onAction: sD
-       } = DD;
-       const {
-         t: KD
-       } = (0, fD.E)(), rD = (0, pD.useRef)(null), [LD, cD] = (0, pD.useState)(""), gD = () => {
-         const DD = LD.trim();
-         "" !== DD && (sD(DD, "add"), rD.current && (rD.current.value = ""), cD(""))
-       };
-       return (0, iD.jsxs)("div", {
-         className: "LobbyManageNames",
-         children: [zD.map((DD => (0, iD.jsxs)("div", {
-           className: "LobbyManageName",
- ... (43 more removed lines; see GitHub link above)
+       function Si() {
+         null !== sp.current && (clearTimeout(sp.current), sp.current = null);
+         const pp = ii.current;
+         null !== pp && (ii.current = null, (0, Zp.b)(yp, [
+           ["emote", pp]
+         ]))
+       }
```

#### 42. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1228-L1244` → after: `L476-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L476-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L476-L490) · [Before (L1228-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1228-L1244)

```diff
-     function fz(DD, zD) {
-       return Uz.map((wD => {
-         let {
-           group: pD,
-           title: sD
-         } = wD;
-         const KD = DD.filter((DD => DD.group === pD && void 0 === DD.parent)).map((wD => {
-           const pD = !0 === zD(wD) ? DD.filter((DD => DD.parent === wD.key)) : [];
-           return {
-             rule: wD,
-             children: pD
-           }
-         }));
-         return {
-           group: pD,
-           title: sD,
- ... (1 more removed lines; see GitHub link above)
+       function xi(pp, ip, cp) {
+         var Op, op, Ip;
+         Fp.current = {
+           ...Fp.current,
+           [pp]: ip
+         }, vp(), cp && ((0, Zp.b)(yp, [
+           [pp, ip]
+         ]), Xp(null));
+         const Sp = (0, Ap.m)(pp, ip);
+         if (null !== Sp && void 0 !== Sp && Sp.colourGroup && null !== (Op = Bp.e[Sp.cosmeticPack].colourGroups) && void 0 !== Op && null !== (op = Op[Sp.colourGroup]) && void 0 !== op && op.showSwatchSelector) {
+           const cp = (0, Ap.j)(ip);
+           cp && Cp((ip => ({
+             ...ip,
+             [`${Sp.cosmeticPack}_${pp}_${Sp.colourGroup}`]: parseInt(cp[1])
+           })))
```

#### 43. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1246-L1247` → after: `L492-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L492-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L492-L493) · [Before (L1246-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1246-L1247)

```diff
-       }))
-     }
+         null !== (Ip = zp.current) && void 0 !== Ip && Ip.isReady() && zp.current.updateCosmetic(pp, ip)
+       }
```

#### 44. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1249-L1259` → after: `L495-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L495-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L495-L500) · [Before (L1249-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1249-L1259)

```diff
-     function Iz(DD) {
-       return DD.flatMap((DD => {
-         let {
-           items: zD
-         } = DD;
-         return zD.flatMap((DD => {
-           let {
-             rule: zD,
-             children: wD
-           } = DD;
-           return [zD, ...wD]
+       function Li(pp) {
+         qp((ip => {
+           const cp = {
+             ...ip
+           };
+           return delete cp[pp], cp
```

#### 45. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1261-L1262` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L502) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1261-L1262)

```diff
-       }))
-     }
+       }
```

#### 46. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1264-L1365` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L504) · [Before (L1264-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1264-L1365)

```diff
-     function Bz(DD) {
-       let {
-         manage: zD,
-         rowsShown: wD
-       } = DD;
-       const {
-         t: KD
-       } = (0, fD.E)(), rD = (0, MD.i)("hiddenPlayerNames"), {
-         rules: LD
-       } = zD.state, cD = RD(), gD = DD => {
-         const zD = cD.get(DD.key);
-         return void 0 === zD ? DD.value : zD
-       }, AD = fz(LD, gD), [UD] = (0, pD.useState)((() => Iz(AD).map((DD => DD.key)))), ID = wD === 1 / 0 ? null : new Set(UD.slice(0, wD)), BD = DD => null === ID || ID.has(DD.key), {
-         hold: hD
-       } = cD, nD = (0, pD.useCallback)(((DD, wD) => {
-         (0, sD.reportAnalyticsClick)({
- ... (86 more removed lines; see GitHub link above)
+       function Yi(pp, ip) {
```

#### 47. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1367-L1372` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L506) · [Before (L1367-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1367-L1372)

```diff
-           page: zD,
-           manage: wD,
-           leaderboard: sD,
-           focusRequest: KD,
-           onFocused: rD,
-           ruleRowsShown: LD
+           undoable: cp
```

#### 48. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1374-L1487` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L508-L511) · [Before (L1374-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1374-L1487)

```diff
-         return "leaderboard" === zD ? (0, iD.jsx)(pD.Suspense, {
-           fallback: (0, iD.jsx)("div", {
-             className: "LobbyManageLoading",
-             children: (0, iD.jsx)(BD.e, {})
-           }),
-           children: sD
-         }) : "joining" === zD ? (0, iD.jsx)(pz, {
-           manage: wD
-         }) : "rules" === zD ? (0, iD.jsx)(Bz, {
-           manage: wD,
-           rowsShown: LD
-         }) : (0, iD.jsx)(mD, {
-           manage: wD,
-           focusRequest: KD,
-           onFocused: rD
-         })
- ... (98 more removed lines; see GitHub link above)
+         Object.keys(Rp).length > 0 && qp({});
+         const Op = Object.entries(pp).filter((pp => {
+           let [ip, cp] = pp;
+           return Fp.current[ip] !== cp && !ci(ip, cp, Di) && !Kp(Ai, ip, cp)
```

#### 49. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1489-L1490` → after: `L513-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L513-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L513-L528) · [Before (L1489-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1489-L1490)

```diff
-         return DD.observe(cD.current), DD.observe(gD.current), () => {
-           DD.disconnect()
+         cp ? Op.length > 0 && Xp({
+           kind: "worn",
+           outfit: wp(Fp.current)
+         }) : Xp(null);
+         for (const [op, Ip] of Op) xi(op, Ip, !1);
+         Op.length > 0 && (0, Zp.b)(yp, Op)
+       }(0, ep.b)("cosmeticsUpdated", (pp => {
+         let ip = !1;
+         for (const {
+             local: cp,
+             KI: Op,
+             VI: op
+           }
+           of pp) {
+           if (!cp) return;
+           ip = !0, gp.current || xi(Op, op, !1), vp()
```

#### 50. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1492-L1705` → after: `L530-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L530-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L530-L534) · [Before (L1492-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1492-L1705)

```diff
-       }), []), (0, pD.useLayoutEffect)((() => {
-         const DD = RD.current,
-           zD = null === DD || void 0 === DD ? void 0 : DD.querySelector(".SegmentedToggleOptionSelected");
-         zD && (DD.scrollLeft = Math.min(zD.offsetLeft, Math.max(DD.scrollLeft, zD.offsetLeft + zD.offsetWidth - DD.clientWidth)))
-       }), [QD]);
-       return (0, iD.jsxs)("div", {
-         ref: cD,
-         className: "MenuBody LobbyManageBody",
-         onScroll: () => {
-           null === MD.current ? yD() : Math.abs(cD.current.scrollTop - OD.current) > 1 && kD()
-         },
-         onClick: DD => {
-           var zD;
-           null !== (zD = RD.current) && void 0 !== zD && zD.contains(DD.target) || kD()
-         },
-         onFocus: DD => {
- ... (198 more removed lines; see GitHub link above)
+         ip && (gp.current = !0)
+       })), (0, Op.useEffect)((() => {
+         if (!Up) {
+           for (const [pp, ip] of Object.entries(yp.getPlayerCosmetics())) xi(pp, ip, !1);
+           vp()
```

#### 51. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1707` → after: `L536-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L536-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L536-L559) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1707)

```diff
-         return DD
+       }), [Up]), (0, Op.useEffect)((() => () => {
+         Si()
+       }), []);
+       const Di = yp.getOwnedCosmeticPacks(),
+         Ai = function(pp, ip) {
+           return null === pp ? null : {
+             collected: new Set(pp.collected),
+             ownedPacks: ip
+           }
+         }(yp.dailyDrop, Di),
+         Pi = (0, ap.usePurchasesAllowed)(),
+         Wi = Object.keys(Ap.h[cp]).filter((pp => {
+           const ip = (0, Ap.o)(cp, pp),
+             Op = (0, Np.w)(cp, pp, Di);
+           return !(ip.purchasable && !Op && !Pi) && (ip.clientSelectable || Op)
+         })).sort(((pp, ip) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1709-L1713` → after: `L561-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L561-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L561-L578) · [Before (L1709-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1709-L1713)

```diff
-       statusOf(DD, zD) {
-         const wD = this.statuses.get(DD);
-         return !wD || wD.until <= zD ? null : {
-           ok: wD.ok,
-           text: wD.text
+       const wi = function(pp, ip) {
+           const cp = new Set,
+             Op = new Set;
+           for (const [op, Ip] of Object.entries(Ap.h[pp])) {
+             if (void 0 === Ip.colourGroup) continue;
+             const Sp = `${Ip.cosmeticPack}_${Ip.colourGroup}`;
+             (ci(pp, op, ip) ? Op : cp).add(Sp)
+           }
+           return new Set([...cp].filter((pp => Op.has(pp))))
+         }(cp, Di),
+         vi = new Map;
+       for (const [Op, op] of yi) {
+         const pp = [],
+           ip = new Map;
+         for (const Op of op) {
+           var ti, Hi;
+ ... (2 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1715-L1754` → after: `L580-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L580-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L580-L595) · [Before (L1715-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1715-L1754)

```diff
-       }
-       isPending(DD) {
-         return this.pending.has(DD)
-       }
-     }
-   },
-   36546: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => gD,
-       g: () => cD
-     });
-     var pD = wD(605),
-       sD = wD(1925),
-       KD = wD(1657),
-       rD = wD(103),
-       LD = wD(1268);
- ... (24 more removed lines; see GitHub link above)
+         const Ip = pp.map((pp => {
+           var op;
+           const Ip = ip.get(pp),
+             Sp = pp ? null === (op = Bp.e[Op].colourGroups) || void 0 === op ? void 0 : op[pp] : void 0,
+             xp = !0 === (null === Sp || void 0 === Sp ? void 0 : Sp.showSwatchSelector) && !wi.has(`${Op}_${pp}`);
+           if (xp && Sp) {
+             var Lp;
+             const ip = null !== (Lp = Mp[`${Op}_${cp}_${pp}`]) && void 0 !== Lp ? Lp : (0, Bp.k)(Sp.colours);
+             return {
+               groupName: pp,
+               showSwatch: xp,
+               cosmetics: Ip.filter((pp => {
+                 const cp = (0, Ap.j)(pp);
+                 return !cp || ip.toString() === cp[1].toString()
+               }))
+             }
```

#### 54. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1756-L1757` → after: `L597-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L597-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L597-L603) · [Before (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1756-L1757)

```diff
-         },
-         isFriend: void 0 !== LD
+           return {
+             groupName: pp,
+             cosmetics: Ip,
+             showSwatch: xp
+           }
+         }));
+         vi.set(Op, Ip)
```

#### 55. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1759-L1799` → after: `L605-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L605-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L605-L613) · [Before (L1759-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1759-L1799)

```diff
-     }
-   },
-   36701: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => AD
-     });
-     var pD = wD(58),
-       sD = wD(1044),
-       KD = wD.n(sD),
-       rD = wD(1687),
-       LD = wD(1447),
-       cD = wD(1346),
-       gD = wD(1057),
-       RD = wD(1096);
- 
-     function AD(DD) {
- ... (25 more removed lines; see GitHub link above)
+       const di = Array.from(yi.keys()),
+         ei = new Map;
+       for (const [Op, op] of Object.entries(Pp.b)) {
+         const pp = Bp.e[op.cosmeticPack],
+           ip = !Oi(op.cosmetics, Di),
+           cp = Bp.p.some((pp => (0, Bp.i)(pp) === Op));
+         (pp.clientSelectable || cp || ip) && ((!pp.purchasable || ip || Pi) && (ei.has(op.cosmeticPack) || ei.set(op.cosmeticPack, []), ei.get(op.cosmeticPack).push([Op, op])))
+       }
+       const ui = Array.from(ei.keys());
```

#### 56. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1801-L1809` → after: `L615-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L615-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L615-L629) · [Before (L1801-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1801-L1809)

```diff
-         className: "PlayerNameField",
-         onKeyDown: DD => {
-           DD.target === UD.current && "Escape" !== DD.key && DD.stopPropagation()
-         },
-         children: [(0, RD.jsxs)("div", {
-           className: KD()("AddFriendBodyOverlay", `AddFriendBodyOverlay${BD}`),
-           children: ["Loading" === BD && (0, RD.jsx)(cD.e, {}), "Success" === BD && (0, RD.jsx)(gD.e, {
-             name: "check"
-           }), "Error" === BD && hD]
+         className: "CharCustomisationBody",
+         children: [("cape" === cp || "nameColour" === cp) && !yp.playerHasRank("super") && (0, Gp.jsxs)("div", {
+           className: "CharCustomisationBodyHeader",
+           children: [(0, Gp.jsx)(hp.d, {
+             name: "bolt"
+           }), Sp("homePage:unlockWithSuperRank"), Pi && (0, Gp.jsx)(jp.o, {
+             onClick: () => {
+               (0, kp.r)({
+                 mode: "self",
+                 source: "characterCustomisation",
+                 openItem: "superRank"
+               })
+             },
+             children: Sp("general:getItNow")
+           })]
```

#### 57. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1811-L1820` → after: `L631-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L631-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L631-L860) · [Before (L1811-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1811-L1820)

```diff
-           className: "PlayerSearch",
-           children: [(0, RD.jsx)(rD.e, {
-             className: "PlayerSearchInput",
-             domRef: UD,
-             maxLength: 32,
-             placeholderText: sD,
-             ariaLabel: sD,
-             stopPropagation: !1,
-             onValueChange: DD => {
-               ID(DD)
+           className: "CharCustomisationBodyInner",
+           children: ["characters" === ip && (0, Gp.jsxs)("div", {
+             className: "CharCustomisPartSelectorWrapper",
+             children: [!1, (0, Gp.jsx)(rp, {
+               wornOutfit: wp(Fp.current),
+               onApply: pp => {
+                 Yi(pp, {
+                   undoable: !0
+                 })
+               },
+               onOverwrite: (pp, ip) => {
+                 Xp({
+                   kind: "slot",
+                   slot: pp,
+                   outfit: ip
+                 })
+ ... (214 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1822-L1829` → after: `L862-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L862-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L862-L872) · [Before (L1822-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1822-L1829)

```diff
-             onEnter: MD
-           }), (0, RD.jsxs)(LD.f, {
-             className: "PlayerSearchInputButton SmallTextLight",
-             disabled: "Enter" !== BD || "" === fD.trim(),
-             onClick: MD,
-             children: [(0, RD.jsx)(gD.e, {
-               name: wD
-             }), " ", zD]
+             children: [(0, Gp.jsx)(hp.d, {
+               name: "rotate-left"
+             }), Sp("general:undo")]
+           }), (0, Gp.jsx)(Jp.CharacterPreview, {
+             ref: zp,
+             forcedCosmetics: Rp,
+             IL: Tp.id,
+             emotePlaySeq: Tp.seq,
+             onReady: () => {
+               for (const pp of Lp.u) xi(pp, Fp.current[pp], !1)
+             }
```

#### 59. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1833` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L876) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1833)

```diff
-     }
+     }))
```

#### 60. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1835-L1837` → after: `L878-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L878-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L878-L880) · [Before (L1835-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1835-L1837)

```diff
-   36684: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => AD
+   41524: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CharacterPreview: () => Ap
```

#### 61. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1839-L1879` → after: `L882-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L882-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L882-L929) · [Before (L1839-L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1839-L1879)

```diff
-     var pD = wD(58),
-       sD = wD(1044),
-       KD = wD.n(sD),
-       rD = wD(1200),
-       LD = wD(1057),
-       cD = wD(1096);
-     const gD = {
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
-       },
-       RD = ["unlisted", "public", "whitelist", "private"];
- 
-     function AD(DD) {
-       let {
- ... (25 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(2835),
+       Ip = cp(1251),
+       Sp = cp(2638),
+       xp = cp(34462),
+       Lp = cp(3731),
+       Yp = cp(1112);
+     const Dp = .6 * Math.PI,
+       Ap = (0, Op.memo)((0, Op.forwardRef)((function(pp, ip) {
+         let {
+           onReady: cp,
+           onDrawn: Ap,
+           owner: Pp = "other",
+           framing: Wp = "player",
+           forcedCosmetics: yp,
+           IL: Up,
+ ... (32 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1881-L1882` → after: `L931-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L931-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L931-L946) · [Before (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1881-L1882)

```diff
-                 0 !== wD && (DD.preventDefault(), null === (pD = AD.current[(zD + wD + RD.length) % RD.length]) || void 0 === pD || pD.focus())
-               })(DD, pD)
+                 ep.current !== pp || Cp.current !== ip || Ep.current || (Ep.current = !0, null === (cp = Mp.current) || void 0 === cp || cp.call(Mp))
+               }))
+             }))
+           }), []);
+         return (0, Op.useImperativeHandle)(ip, (() => {
+           const pp = (pp, ip) => {
+             var cp;
+             (jp.current[pp] = ip, null !== yp && void 0 !== yp && yp[pp]) || (null === (cp = ep.current) || void 0 === cp || cp.setCosmetic(pp, ip), lp())
+           };
+           return {
+             updateCosmetic: pp,
+             setAllCosmetics(ip) {
+               for (const Op of Ip.u) {
+                 var cp;
+                 pp(Op, null !== (cp = ip[Op]) && void 0 !== cp ? cp : (0, Sp.b)(Op))
+               }
```

#### 63. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1884-L1885` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L948-L950) · [Before (L1884-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1884-L1885)

```diff
-             onClick: () => {
-               wD(DD)
+             isReady() {
+               var pp, ip;
+               return null !== (pp = null === (ip = ep.current) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
```

#### 64. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1887-L1936` → after: `L952-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L952-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L952-L954) · [Before (L1887-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1887-L1936)

```diff
-             children: [(0, cD.jsx)("span", {
-               className: "WorldSocialTileIcon",
-               children: (0, cD.jsx)(LD.e, {
-                 name: gD[DD]
-               })
-             }), (0, cD.jsxs)("span", {
-               className: "WorldSocialTileText",
-               children: [(0, cD.jsx)("span", {
-                 className: "WorldSocialTileTitle",
-                 children: sD(`worldSocial:${DD}`)
-               }), (0, cD.jsx)("span", {
-                 className: "WorldSocialTileDescription",
-                 children: sD(`worldSocial:${DD}Description`)
-               })]
-             })]
-           }, DD)
- ... (34 more removed lines; see GitHub link above)
+             resetCamera() {
+               var pp;
+               null === (pp = ep.current) || void 0 === pp || pp.resetCamera()
```

#### 65. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1938-L1951` → after: `L956-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L956-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L956-L1024) · [Before (L1938-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1938-L1951)

```diff
-             children: [wD, (0, rD.jsx)("label", {
-               className: "WhitelistTickRowTick",
-               children: (0, rD.jsx)(KD.d, {
-                 checked: zD.on,
-                 disabled: !1,
-                 ariaLabel: cD("worldSocial:letJoin", {
-                   playerName: LD.playerSocialPreview.name
-                 }),
-                 onChange: DD => {
-                   zD.onChange(DD.target.checked)
-                 }
-               })
-             })]
-           })
+             setOrbit(pp) {
+               var ip;
+               null === (ip = ep.current) || void 0 === ip || ip.setOrbit(pp)
+             },
+             async ensureReadyForCapture(pp) {
+               var ip;
+               await (null === (ip = ep.current) || void 0 === ip ? void 0 : ip.untilDrawn(pp))
+             },
+             getDevTools() {
+               var pp;
+               return null !== (pp = ep.current) && void 0 !== pp && pp.isReady() ? ep.current.dev : null
+             }
+           }
+         }), [yp, lp]), (0, Op.useEffect)((() => {
+           const pp = Lp.c.register(Pp),
+             ip = xp.j.openCharacter(tp.current, Wp);
+ ... (53 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1953-L1954` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1026) · [Before (L1953-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1953-L1954)

```diff
-       })
-     }
+       })))
```

#### 67. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1956` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1028) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1956)

```diff
-   36680: (DD, zD, wD) => {
+   36602: (pp, ip, cp) => {
```

#### 68. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1960-L2058` → after: `L1032-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1032-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1032-L1036) · [Before (L1960-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L1960-L2058)

```diff
-     var pD = wD(58),
-       sD = wD(1200),
-       KD = wD(1847),
-       rD = wD(103),
-       LD = wD(20),
-       cD = wD(1472),
-       gD = wD(2684),
-       RD = wD(34118),
-       AD = wD(1447),
-       UD = wD(1057),
-       fD = wD(1096);
- 
-     function ID(DD) {
-       let {
-         worldCode: zD,
-         message: wD
- ... (83 more removed lines; see GitHub link above)
+     var Op = cp(1956),
+       op = cp(1520);
+     const Ip = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
```

#### 69. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2060-L2223` → after: `L1038-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1038-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1038-L1047) · [Before (L2060-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L2060-L2223)

```diff
-     }
- 
-     function UD(DD) {
-       let {
-         player: zD,
-         isFriend: wD = !1,
-         status: pD,
-         showLocation: cD = void 0 === pD,
-         DU: AD,
-         onSendFriendRequest: UD,
-         actions: fD,
-         zIndex: ID
-       } = DD;
-       const {
-         t: BD
-       } = (0, sD.E)();
- ... (148 more removed lines; see GitHub link above)
+       save(pp, ip) {
+         pp !== this.userContext && this.sendHeld(), this.userContext = pp;
+         for (const [Op, op] of ip) this.pending.set(Op, op);
+         if (null !== this.timer) return;
+         const cp = this.lastSentAt + 1100 - Date.now();
+         cp <= 0 ? this.send(pp) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), cp), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
```

#### 70. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2225-L2299` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1049-L1050) · [Before (L2225-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L2225-L2299)

```diff
-     }
-   },
-   36707: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD,
-       g: () => KD
-     });
-     var pD = wD(157);
-     const sD = new Map;
- 
-     function KD(DD, zD) {
-       var wD;
-       const pD = null !== (wD = sD.get(DD)) && void 0 !== wD ? wD : new Map;
-       pD.set(zD, Date.now()), sD.set(DD, pD)
-     }
- 
- ... (59 more removed lines; see GitHub link above)
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
```

#### 71. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2301-L2303` → after: `L1052-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1052-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1052-L1062) · [Before (L2301-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L2301-L2303)

```diff
-       return {
-         ...DD,
-         whitelist: DD.whitelist.filter((DD => !pD(zD, DD)))
+       send(pp) {
+         const ip = Array.from(this.pending, (pp => {
+           let [ip, cp] = pp;
+           return {
+             KI: ip,
+             VI: cp
+           }
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), op.b.updateCosmetics(pp, ip).catch((pp => {
+           console.error("Failed to update cosmetics", pp)
+         }))
```

#### 72. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2305` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1064) · [Before (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L2305)

```diff
-     }
+     };
```

#### 73. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2308-L2342` → after: `L1067-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1067-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/220.js#L1067-L1073) · [Before (L2308-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/220.js#L2308-L2342)

```diff
-       const wD = [];
-       for (let pD = 0; pD < DD.length; pD += zD) wD.push(DD.slice(pD, pD + zD));
-       return wD
-     }
-     wD.d(zD, {
-       d: () => LD,
-       e: () => KD,
-       h: () => sD,
-       l: () => pD,
-       p: () => gD,
-       s: () => rD,
-       w: () => cD
-     })
-   },
-   36992: (DD, zD, wD) => {
-     wD.d(zD, {
- ... (19 more removed lines; see GitHub link above)
+       for (const [cp, Op] of ip) pp.setPlayerCosmetics(cp, Op);
+       if (null === Op.gameBridge.latest("connectedGame").websocketUrl) Ip.save(pp, ip);
+       else
+         for (const [cp, op] of ip) Op.gameBridge.send("updateMyCosmetic", {
+           KI: cp,
+           VI: op
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L165` → after: `L4-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L4-L28) · [Before (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L4-L165)

```diff
-   36608: DD => {
-     DD.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (146 more removed lines; see GitHub link above)
+   36622: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => qp,
+       f: () => Mp,
+       h: () => Hp
+     });
+     var Op = cp(272),
+       op = cp(104);
+     const Ip = new(cp(36630).b)(new URL(cp.p + cp.u(3), cp.b), {
+       name: "blockIconWorker",
+       type: "module"
+     });
+     var Sp = cp(1819),
+       xp = cp(2179);
+     const Lp = 1e4,
+       Yp = 3e4;
+ ... (9 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L167-L168` → after: `L30-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L30-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L30-L39) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L167-L168)

```diff
-     function gD(DD, zD, wD) {
-       return Math.min(Math.max(zD, DD), wD)
+     function Hp(pp) {
+       const ip = new Promise(((ip, cp) => {
+         const Op = new Image;
+         Op.crossOrigin = "anonymous", Op.fetchPriority = "high", Op.onload = () => {
+           ip(Op)
+         }, Op.onerror = () => {
+           cp(new Error(`A block icon's texture did not load: ${pp.slice(0,100)}`))
+         }, Op.src = pp
+       }));
+       return (0, xp.g)(ip)
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L177-L197` → after: `L44-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L44-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L44-L58) · [Before (L177-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L177-L197)

```diff
-       switch (DD.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           zD = cD.get.hsl(DD), wD = "hsl";
-           break;
-         case "hwb":
-           zD = cD.get.hwb(DD), wD = "hwb";
-           break;
-         default:
-           zD = cD.get.rgb(DD), wD = "rgb"
-       }
-       return zD ? {
-         model: wD,
-         value: zD
-       } : null
-     }, cD.get.rgb = function(DD) {
-       if (!DD) return null;
- ... (5 more removed lines; see GitHub link above)
+       Wp || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${pp}`), Wp = !0, null === (ip = Dp) || void 0 === ip || ip.terminate(), Dp = null, Ap = null, vp.clear(), tp.clear();
+       for (const Op of Up.values()) Op(null);
+       Up.clear(), null === (cp = wp) || void 0 === cp || cp()
+     }
+ 
+     function ep() {
+       return Pp ??= async function() {
+         if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
+         if ("page" === Op.d.ios_icon_worker_v1 && (0, op.isWebKit)()) return;
+         try {
+           Dp = await async function() {
+             return await Ip.ready(), Ip.start()
+           }()
+         } catch (xp) {
+           return void dp(`did not start (${String(xp)})`)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L199-L249` → after: `L60-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L60-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L60-L94) · [Before (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L199-L249)

```diff
-         sD && (rD[3] = parseInt(sD, 16) / 255)
-       } else if (zD = DD.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (sD = (zD = zD[1])[3], wD = 0; wD < 3; wD++) rD[wD] = parseInt(zD[wD] + zD[wD], 16);
-         sD && (rD[3] = parseInt(sD + sD, 16) / 255)
-       } else if (zD = DD.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
-         for (wD = 0; wD < 3; wD++) rD[wD] = parseInt(zD[wD + 1], 0);
-         zD[4] && (zD[5] ? rD[3] = .01 * parseFloat(zD[4]) : rD[3] = parseFloat(zD[4]))
-       } else {
-         if (!(zD = DD.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (zD = DD.match(/^(\w+)$/)) ? "transparent" === zD[1] ? [0, 0, 0, 0] : KD.call(pD, zD[1]) ? ((rD = pD[zD[1]])[3] = 1, rD) :  … [truncated]
-         for (wD = 0; wD < 3; wD++) rD[wD] = Math.round(2.55 * parseFloat(zD[wD + 1]));
-         zD[4] && (zD[5] ? rD[3] = .01 * parseFloat(zD[4]) : rD[3] = parseFloat(zD[4]))
-       }
-       for (wD = 0; wD < 3; wD++) rD[wD] = gD(rD[wD], 0, 255);
-       return rD[3] = gD(rD[3], 0, 1), rD
-     }, cD.get.hsl = function(DD) {
-       if (!DD) return null;
- ... (35 more removed lines; see GitHub link above)
+         let pp = () => {};
+         const ip = new Promise((ip => {
+           pp = ip
+         }));
+         Dp.onmessage = ip => {
+           let {
+             data: cp
+           } = ip;
+           if ("started" === cp.type) Ap = Dp, pp();
+           else if ("failed" === cp.type) dp(`failed a draw (${cp.message})`);
+           else {
+             var Op, op;
+             null === (Op = Up.get(cp.id)) || void 0 === Op || Op(cp.url), Up.delete(cp.id), null === (op = wp) || void 0 === op || op()
+           }
+         }, Dp.onerror = ip => {
+           ip.preventDefault(), dp(`stopped (${ip.message||"its script did not load or run"})`), pp()
+ ... (19 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L261-L293` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L98-L99) · [Before (L261-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L261-L293)

```diff
-       if (!(this instanceof cD)) return new cD(DD, zD);
-       if (zD && zD in KD && (zD = null), zD && !(zD in sD)) throw new Error("Unknown model: " + zD);
-       let wD, gD;
-       if (null == DD) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (DD instanceof cD) this.model = DD.model, this.color = [...DD.color], this.valpha = DD.valpha;
-       else if ("string" === typeof DD) {
-         const zD = pD.get(DD);
-         if (null === zD) throw new Error("Unable to parse color from string: " + DD);
-         this.model = zD.model, gD = sD[this.model].channels, this.color = zD.value.slice(0, gD), this.valpha = "number" === typeof zD.value[gD] ? zD.value[gD] : 1
-       } else if (DD.length > 0) {
-         this.model = zD || "rgb", gD = sD[this.model].channels;
-         const wD = Array.prototype.slice.call(DD, 0, gD);
-         this.color = UD(wD, gD), this.valpha = "number" === typeof DD[gD] ? DD[gD] : 1
-       } else if ("number" === typeof DD) this.model = "rgb", this.color = [DD >> 16 & 255, DD >> 8 & 255, 255 & DD], this.valpha = 1;
-       else {
-         this.valpha = 1;
- ... (17 more removed lines; see GitHub link above)
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       pp.postMessage(ip, cp)
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L295-L384` → after: `L101-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L101-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L101-L113) · [Before (L295-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L295-L384)

```diff
-     cD.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(DD) {
-         let zD = this.model in pD.to ? this : this.rgb();
-         zD = zD.round("number" === typeof DD ? DD : 1);
-         const wD = 1 === zD.valpha ? zD.color : [...zD.color, this.valpha];
-         return pD.to[zD.model](wD)
-       },
-       percentString(DD) {
-         const zD = this.rgb().round("number" === typeof DD ? DD : 1),
-           wD = 1 === zD.valpha ? zD.color : [...zD.color, this.valpha];
- ... (74 more removed lines; see GitHub link above)
+ 
+     function mp(pp, ip, cp, Op) {
+       let op = ip.get(cp);
+       return void 0 === op && (op = Op().then((async ip => {
+         let {
+           image: cp,
+           request: Op
+         } = ip;
+         try {
+           const ip = await createImageBitmap(cp);
+           kp(pp, Op(ip), [ip])
+         } catch (op) {
+           dp(`could not take an image (${String(op)})`)
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L386-L475` → after: `L115-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L115-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L115-L117) · [Before (L386-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L386-L475)

```diff
-         return .2126 * zD[0] + .7152 * zD[1] + .0722 * zD[2]
-       },
-       contrast(DD) {
-         const zD = this.luminosity(),
-           wD = DD.luminosity();
-         return zD > wD ? (zD + .05) / (wD + .05) : (wD + .05) / (zD + .05)
-       },
-       level(DD) {
-         const zD = this.contrast(DD);
-         return zD >= 7 ? "AAA" : zD >= 4.5 ? "AA" : ""
-       },
-       isDark() {
-         const DD = this.rgb().color;
-         return (2126 * DD[0] + 7152 * DD[1] + 722 * DD[2]) / 1e4 < 128
-       },
-       isLight() {
- ... (74 more removed lines; see GitHub link above)
+       })), op.catch((() => {
+         ip.get(cp) === op && ip.delete(cp)
+       })), ip.set(cp, op)), op
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L477-L483` → after: `L119-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L119-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L119-L127) · [Before (L477-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L477-L483)

```diff
- 
-     function gD(DD) {
-       return function(zD) {
-         return function(DD, zD) {
-           return Number(DD.toFixed(zD))
-         }(zD, DD)
-       }
+     async function Rp(pp, ip) {
+       ep();
+       const cp = Ap;
+       if (null === cp) return null;
+       if (await pp(cp), Ap !== cp) return null;
+       const Op = ++yp;
+       return new Promise((pp => {
+         Up.set(Op, pp), kp(cp, ip(Op)), jp()
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L487-L493` → after: `L131-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L131-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L131-L146) · [Before (L487-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L487-L493)

```diff
-       DD = Array.isArray(DD) ? DD : [DD];
-       for (const pD of DD)(LD[pD] || (LD[pD] = []))[zD] = wD;
-       return DD = DD[0],
-         function(pD) {
-           let sD;
-           return void 0 !== pD ? (wD && (pD = wD(pD)), sD = this[DD](), sD.color[zD] = pD, sD) : (sD = this[DD]().color[zD], wD && (sD = wD(sD)), sD)
-         }
+       return Rp((ip => Promise.all([pp.top, pp.left, pp.right].map((pp => function(pp, ip) {
+         return mp(pp, vp, ip, (async () => ({
+           image: await Hp(ip),
+           request: pp => ({
+             type: "texture",
+             url: ip,
+             bitmap: pp
+           })
+         })))
+       }(ip, pp))))), (Op => ({
+         type: "draw",
+         id: Op,
+         ...pp,
+         size: ip,
+         outlineWidth: cp
+       })))
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L496-L499` → after: `L149-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L149-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L149-L172) · [Before (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L496-L499)

```diff
-     function AD(DD) {
-       return function(zD) {
-         return Math.max(0, Math.min(DD, zD))
-       }
+     function Mp(pp, ip, cp, Op) {
+       return Rp((cp => function(pp, ip, cp) {
+         return mp(pp, tp, ip, (async () => {
+           const {
+             texture: pp,
+             ...Op
+           } = await cp();
+           return {
+             image: await Hp(pp),
+             request: pp => ({
+               type: "model",
+               name: ip,
+               bitmap: pp,
+               geometry: Op
+             })
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L503-L504` → after: `L195-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L195-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L195-L284) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L503-L504)

```diff
-       for (let wD = 0; wD < zD; wD++) "number" !== typeof DD[wD] && (DD[wD] = 0);
-       return DD
+       const cp = ip > 0 ? ip + 1 : 0,
+         Sp = pp * op - ip / Op.across;
+       return Math.max(0, Math.min(Sp, (pp - 2 * cp) / Ip.height))
+     }
+     const xp = [15, 15, 15],
+       Lp = {
+         top: 1,
+         left: .85,
+         right: .7
+       };
+ 
+     function Yp(pp, ip, cp, Op) {
+       const {
+         vertices: op,
+         uvs: xp,
+         indices: Lp,
+ ... (74 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L508-L511` → after: `L287-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L287-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L287-L290) · [Before (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L508-L511)

```diff
-   36629: (DD, zD, wD) => {
-     const pD = wD(36634),
-       sD = {};
-     for (const rD of Object.keys(pD)) sD[pD[rD]] = rD;
+   36630: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => op
+     });
```

#### 13. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L513-L523` → after: `L292-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L292-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L292-L295) · [Before (L513-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L513-L523)

```diff
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
-         channels: 3,
-         labels: "hsv"
+       wait: function(pp) {
+         return new Promise((ip => {
+           setTimeout(ip, pp)
+         }))
```

#### 14. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L525-L572` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L297) · [Before (L525-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L525-L572)

```diff
-       hwb: {
-         channels: 3,
-         labels: "hwb"
-       },
-       cmyk: {
-         channels: 4,
-         labels: "cmyk"
-       },
-       xyz: {
-         channels: 3,
-         labels: "xyz"
-       },
-       lab: {
-         channels: 3,
-         labels: "lab"
-       },
- ... (32 more removed lines; see GitHub link above)
+       stallMs: 2e4
```

#### 15. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L574-L631` → after: `L299-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L299-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L299-L303) · [Before (L574-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L574-L631)

```diff
-     DD.exports = KD;
-     for (const rD of Object.keys(KD)) {
-       if (!("channels" in KD[rD])) throw new Error("missing channels property: " + rD);
-       if (!("labels" in KD[rD])) throw new Error("missing channel labels property: " + rD);
-       if (KD[rD].labels.length !== KD[rD].channels) throw new Error("channel and label counts mismatch: " + rD);
-       const {
-         channels: DD,
-         labels: zD
-       } = KD[rD];
-       delete KD[rD].channels, delete KD[rD].labels, Object.defineProperty(KD[rD], "channels", {
-         value: DD
-       }), Object.defineProperty(KD[rD], "labels", {
-         value: zD
-       })
-     }
-     KD.rgb.hsl = function(DD) {
- ... (42 more removed lines; see GitHub link above)
+     class op {
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Op;
+         this.url = pp, this.options = ip, this.timing = cp, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = pp
```

#### 16. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L633-L690` → after: `L305-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L305-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L305-L310) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L633-L690)

```diff
-       var rD, LD;
-       return wD
-     }, KD.keyword.rgb = function(DD) {
-       return pD[DD]
-     }, KD.rgb.xyz = function(DD) {
-       let zD = DD[0] / 255,
-         wD = DD[1] / 255,
-         pD = DD[2] / 255;
-       zD = zD > .04045 ? ((zD + .055) / 1.055) ** 2.4 : zD / 12.92, wD = wD > .04045 ? ((wD + .055) / 1.055) ** 2.4 : wD / 12.92, pD = pD > .04045 ? ((pD + .055) / 1.055) ** 2.4 : pD / 12.92;
-       return [100 * (.4124 * zD + .3576 * wD + .1805 * pD), 100 * (.2126 * zD + .7152 * wD + .0722 * pD), 100 * (.0193 * zD + .1192 * wD + .9505 * pD)]
-     }, KD.rgb.lab = function(DD) {
-       const zD = KD.rgb.xyz(DD);
-       let wD = zD[0],
-         pD = zD[1],
-         sD = zD[2];
-       wD /= 95.047, pD /= 100, sD /= 108.883, wD = wD > .008856 ? wD ** (1 / 3) : 7.787 * wD + 16 / 116, pD = pD > .008856 ? pD ** (1 / 3) : 7.787 * pD + 16 / 116, sD = sD > .008856 ? sD ** (1 / 3) : 7.787 * sD + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+       ready() {
+         if (null === this.fetched) {
+           const pp = new AbortController;
+           this.fetchAbort = pp, this.fetched = this.fetchWithRetries(pp.signal).then((ip => (this.fetchAbort === pp && (this.fetchAbort = null), ip)))
+         }
+         return this.fetched
```

#### 17. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L692-L732` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L312-L313) · [Before (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L692-L732)

```diff
-     }, KD.hsv.hsl = function(DD) {
-       const zD = DD[0],
-         wD = DD[1] / 100,
-         pD = DD[2] / 100,
-         sD = Math.max(pD, .01);
-       let KD, rD;
-       rD = (2 - wD) * pD;
-       const LD = (2 - wD) * sD;
-       return KD = wD * sD, KD /= LD <= 1 ? LD : 2 - LD, KD = KD || 0, rD /= 2, [zD, 100 * KD, 100 * rD]
-     }, KD.hwb.rgb = function(DD) {
-       const zD = DD[0] / 360;
-       let wD = DD[1] / 100,
-         pD = DD[2] / 100;
-       const sD = wD + pD;
-       let KD;
-       sD > 1 && (wD /= sD, pD /= sD);
- ... (25 more removed lines; see GitHub link above)
+       cancel() {
+         null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
```

#### 18. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L734-L795` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L315-L316) · [Before (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L734-L795)

```diff
-       return [255 * gD, 255 * RD, 255 * AD]
-     }, KD.cmyk.rgb = function(DD) {
-       const zD = DD[0] / 100,
-         wD = DD[1] / 100,
-         pD = DD[2] / 100,
-         sD = DD[3] / 100;
-       return [255 * (1 - Math.min(1, zD * (1 - sD) + sD)), 255 * (1 - Math.min(1, wD * (1 - sD) + sD)), 255 * (1 - Math.min(1, pD * (1 - sD) + sD))]
-     }, KD.xyz.rgb = function(DD) {
-       const zD = DD[0] / 100,
-         wD = DD[1] / 100,
-         pD = DD[2] / 100;
-       let sD, KD, rD;
-       return sD = 3.2406 * zD + -1.5372 * wD + -.4986 * pD, KD = -.9689 * zD + 1.8758 * wD + .0415 * pD, rD = .0557 * zD + -.204 * wD + 1.057 * pD, sD = sD > .0031308 ? 1.055 * sD ** (1 / 2.4) - .055 : 12.92 * sD, KD = KD > .0031308 ? 1.055 * KD ** (1 / 2.4) - .055 : 12.92 * KD,  … [truncated]
-     }, KD.xyz.lab = function(DD) {
-       let zD = DD[0],
-         wD = DD[1],
- ... (46 more removed lines; see GitHub link above)
+       forgetFailedFetch() {
+         this.fetched = null
```

#### 19. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L797-L858` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L318-L319) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L797-L858)

```diff
-       let zD;
-       DD -= 16;
-       return [Math.floor(DD / 36) / 5 * 255, Math.floor((zD = DD % 36) / 6) / 5 * 255, zD % 6 / 5 * 255]
-     }, KD.rgb.hex = function(DD) {
-       const zD = (((255 & Math.round(DD[0])) << 16) + ((255 & Math.round(DD[1])) << 8) + (255 & Math.round(DD[2]))).toString(16).toUpperCase();
-       return "000000".substring(zD.length) + zD
-     }, KD.hex.rgb = function(DD) {
-       const zD = DD.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!zD) return [0, 0, 0];
-       let wD = zD[0];
-       3 === zD[0].length && (wD = wD.split("").map((DD => DD + DD)).join(""));
-       const pD = parseInt(wD, 16);
-       return [pD >> 16 & 255, pD >> 8 & 255, 255 & pD]
-     }, KD.rgb.hcg = function(DD) {
-       const zD = DD[0] / 255,
-         wD = DD[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+       start() {
+         return new Worker(this.scriptUrl, this.options)
```

#### 20. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L860-L958` → after: `L321-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L321-L326) · [Before (L860-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L860-L958)

```diff
-       return cD = (1 - wD) * pD, [255 * (wD * sD[0] + cD), 255 * (wD * sD[1] + cD), 255 * (wD * sD[2] + cD)]
-     }, KD.hcg.hsv = function(DD) {
-       const zD = DD[1] / 100,
-         wD = zD + DD[2] / 100 * (1 - zD);
-       let pD = 0;
-       return wD > 0 && (pD = zD / wD), [DD[0], 100 * pD, 100 * wD]
-     }, KD.hcg.hsl = function(DD) {
-       const zD = DD[1] / 100,
-         wD = DD[2] / 100 * (1 - zD) + .5 * zD;
-       let pD = 0;
-       return wD > 0 && wD < .5 ? pD = zD / (2 * wD) : wD >= .5 && wD < 1 && (pD = zD / (2 * (1 - wD))), [DD[0], 100 * pD, 100 * wD]
-     }, KD.hcg.hwb = function(DD) {
-       const zD = DD[1] / 100,
-         wD = zD + DD[2] / 100 * (1 - zD);
-       return [DD[0], 100 * (wD - zD), 100 * (1 - wD)]
-     }, KD.hwb.hcg = function(DD) {
- ... (83 more removed lines; see GitHub link above)
+       async fetchWithRetries(pp) {
+         for (let ip = 0;; ip++) {
+           const cp = new URL(this.url);
+           if (ip > 0 && cp.searchParams.set("cache-bust", `${Date.now()}-${ip}`), await this.fetchWhole(cp, pp)) return this.scriptUrl = cp, !0;
+           if (ip >= 3 || pp.aborted) return !1;
+           if (await this.timing.wait(500 * 2 ** ip), pp.aborted) return !1
```

#### 21. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L961-L1147` → after: `L329-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L329-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/221.js#L329-L361) · [Before (L961-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/221.js#L961-L1147)

```diff
-       return zD
-     }
- 
-     function KD(DD, zD) {
-       return function(wD) {
-         return zD(DD(wD))
-       }
-     }
- 
-     function rD(DD, zD) {
-       const wD = [zD[DD].parent, DD];
-       let sD = pD[zD[DD].parent][DD],
-         rD = zD[DD].parent;
-       for (; zD[rD].parent;) wD.unshift(zD[rD].parent), sD = KD(pD[zD[rD].parent][rD], sD), rD = zD[rD].parent;
-       return sD.conversion = wD, sD
-     }
- ... (171 more removed lines; see GitHub link above)
+       async fetchWhole(pp, ip) {
+         const cp = new AbortController;
+         let Op;
+         const op = () => {
+             clearTimeout(Op), Op = setTimeout((() => {
+               cp.abort()
+             }), this.timing.stallMs)
+           },
+           Ip = () => {
+             cp.abort()
+           };
+         ip.addEventListener("abort", Ip, {
+           once: !0
+         }), op();
+         try {
+           var Sp;
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L5-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L5-L74) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L4)

```diff
-   36719: (DD, zD, wD) => {
+   39775: (pp, ip, cp) => {
+     pp.exports = op;
+     var Op = cp(343);
+ 
+     function op(pp, ip) {
+       if (!(this instanceof op)) return new op(pp, ip);
+       var cp = Op.create();
+       Op.add(cp, pp, ip), this.base = Op.min(Op.create(), pp, cp), this.vec = Op.clone(ip), this.max = Op.max(Op.create(), pp, cp), this.mag = Op.length(this.vec)
+     }
+     var Ip = op.prototype;
+     Ip.width = function() {
+       return this.vec[0]
+     }, Ip.height = function() {
+       return this.vec[1]
+     }, Ip.depth = function() {
+       return this.vec[2]
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L6-L10` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L76-L77) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L6-L10)

```diff
-       d: () => Kz,
-       g: () => cz,
-       i: () => Az,
-       l: () => gz,
-       p: () => Rz
+       c: () => xp,
+       f: () => Ip
```
