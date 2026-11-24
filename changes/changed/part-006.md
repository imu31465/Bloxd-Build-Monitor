# Changed — Bundle Modifications Report (Part 006 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `6 / 69` (**238** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (849 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 233. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7077-L7092` → after: `L6432-L6445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6432-L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6432-L6445) · [Before (L7077-L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7077-L7092)

```diff
-     class mC {
-       constructor(CC, zC) {
-         this.pSystem = CC, this.maxLifetimeSecs = zC, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.Sg = !1, CC.manualEmitCount = 0
-       }
-       emitAmount(CC) {
-         this.Sg || (this.pSystem.manualEmitCount = CC, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
-       }
-       dispose() {
-         this.Sg = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
-       }
-       scheduleStop(CC) {
-         this.stopTimeout = setTimeout((() => {
-           this.stopTimeout = null;
-           const CC = this.stopAt - performance.now();
-           CC > 0 ? this.scheduleStop(CC) : (this.pSystem.stop(), this.started = !1)
-         }), CC)
+ 
+     function jp(pp, ip) {
+       return jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, jp(pp, ip)
+     }
+ 
+     function kp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7096-L7097` → after: `L6450-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6450-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6450-L6459) · [Before (L7096-L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7096-L7097)

```diff
-     function HC(CC, zC, ZC, QC) {
-       (0, NC.t)(CC, zC.pSystem), (0, NC.s)(zC.pSystem, ZC), zC.emitAmount(QC)
+     function mp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? kp(Object(cp), !0).forEach((function(ip) {
+           Rp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : kp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7102-L7103` → after: `L6463-L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6463-L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6463-L6468) · [Before (L7102-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7102-L7103)

```diff
-       if (!zC) return;
-       XC(CC, zC === EC ? nC.h.BounceBrownMushroom : nC.h.BounceRedMushroom, ZC)
+       return (ip = qp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7106-L7138` → after: `L6471-L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6471-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6471-L6482) · [Before (L7106-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7106-L7138)

```diff
-     function XC(CC, zC, ZC) {
-       const QC = zC === nC.h.Bunnyhop || zC === nC.h.JumpPad;
-       let wC, fC;
-       zC === nC.h.Bunnyhop ? (wC = [213, 237, 255], fC = [109, 170, 238]) : zC === nC.h.BounceRedMushroom ? (wC = [196, 63, 63], fC = [148, 53, 53]) : zC === nC.h.BounceBrownMushroom ? (wC = [186, 132, 91], fC = [153, 107, 72]) : zC === nC.h.BunnyhopBounce ? (wC = [217, 170, 2],  … [truncated]
-       const oC = CC.JR.yG(CC.qE);
-       let qC, FC;
-       if (0 !== ZC[1]) {
-         const CC = 1 === ZC[1] ? bC.f.Dp - .4 : 0;
-         qC = [oC[0] - 1, oC[1] + CC, oC[2] - 1], FC = [oC[0] + 1, oC[1] + .4 + CC, oC[2] + 1]
-       } else {
-         const CC = 0 !== ZC[0] ? 2 : 0,
-           zC = 0 !== ZC[0] ? 0 : 2,
-           QC = 1 === ZC[0] || 1 === ZC[2] ? .2 : -.2;
-         qC = [oC[0], oC[1] + .4, oC[2]], FC = [oC[0], oC[1] + 1.4, oC[2]], qC[CC] -= .5, FC[CC] += .5, qC[zC] += QC, FC[zC] += QC
-       }
-       const WC = QC ? KC : YC;
- ... (17 more removed lines; see GitHub link above)
+     function qp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != vp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != vp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == vp(ip) ? ip : ip + ""
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7140-L7184` → after: `L6484-L6507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6484-L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6484-L6507) · [Before (L7140-L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7140-L7184)

```diff
-     class cC {
-       constructor(CC, zC, ZC) {
-         this.MN = CC, this.cfg = ZC, this.pool = [], this.currentIndex = 0;
-         for (let QC = 0; QC < zC; QC++) this.pool.push({
-           pSystem: null,
-           wrapper: null
-         })
-       }
-       emit(CC, zC) {
-         var ZC, QC, wC, bC, nC, fC, oC, qC;
-         const WC = "pos1" in zC ? zC.pos1 : this.cfg.pos1,
-           MC = "pos2" in zC ? zC.pos2 : this.cfg.pos2;
-         for (let FC = 0; FC < 3; FC++) GC[FC] = Math.min(WC[FC], MC[FC]), RC[FC] = Math.max(WC[FC], MC[FC]);
-         const gC = this.MN.camera.yG();
-         for (let FC = 0; FC < 3; FC++) PC[FC] = Math.max(GC[FC], Math.min(gC[FC], RC[FC]));
-         const SC = null !== (ZC = zC.hideDist) && void 0 !== ZC ? ZC : this.cfg.hideDist;
- ... (29 more removed lines; see GitHub link above)
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
+ ... (8 more added lines; see GitHub link above)
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7186` → after: `L6509-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6509-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6509-L6520) · [Before (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7186)

```diff
-       }
+           return xp
+         }
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

#### 239. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7190-L7197` → after: `L6524-L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6524-L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6524-L6526) · [Before (L7190-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7190-L7197)

```diff
-       if (!(0, SC.H)(zC.hideDist)) {
-         const ZC = [];
-         for (let CC = 0; CC < 3; CC++) ZC.push((0, fC.s)(zC.pos1[CC], zC.pos2[CC], .5));
-         const QC = CC.JR.yG(CC.qE),
-           wC = zC.hideDist * zC.hideDist;
-         if (FC().sqrDist(QC, ZC) > wC) return
-       }
-       CC.bloxd.client.meshCreator.newSingleBurstParticleSystem(zC)
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7199-L7297` → after: `L6528-L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6528-L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6528-L6533) · [Before (L7199-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7199-L7297)

```diff
-   },
-   37617: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => PC
-     });
-     var QC = ZC(37063),
-       wC = ZC(37645),
-       bC = ZC(37673),
-       nC = ZC(37285),
-       fC = ZC(37660),
-       oC = ZC(37677),
-       qC = ZC(3137),
-       FC = ZC(37633),
-       WC = ZC(37626),
-       NC = ZC(37040),
-       MC = ZC(37167),
- ... (83 more removed lines; see GitHub link above)
+ 
+     function Ep() {
+       return Ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7299-L7305` → after: `L6535-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6535-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6535-L6637) · [Before (L7299-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7299-L7305)

```diff
-         return (0, gC.q)(iC), CC[JC] = iC, iC
-       }
-       setUseWebGL2(CC) {
-         this.useWebGL2 = CC
-       }
-       nS() {
-         return this.useWebGL2
+         return pp
+       }, Ep.apply(this, arguments)
+     }
+ 
+     function Xp(pp) {
+       var ip = pp.x,
+         cp = pp.y,
+         op = pp.segment,
+         Sp = pp.xAxisId,
+         vp = pp.yAxisId,
+         tp = pp.shape,
+         Hp = pp.className,
+         dp = pp.alwaysShow,
+         ep = (0, wp.m)(),
+         jp = (0, wp.x)(Sp),
+         kp = (0, wp.y)(vp),
+ ... (87 more added lines; see GitHub link above)
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7307-L7309` → after: `L6639-L6670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6639-L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6639-L6670) · [Before (L7307-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7307-L7309)

```diff
-     };
-     (0, oC.f)(pC);
-     const PC = pC
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
+ ... (16 more added lines; see GitHub link above)
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7311` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6672) · [Before (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7311)

```diff
-   37917: (CC, zC, ZC) => {
+   6512: (pp, ip, cp) => {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7316-L7317` → after: `L6676-L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6676-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6676-L6680) · [Before (L7316-L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7316-L7317)

```diff
-     var QC = ZC(37246);
-     const wC = new WeakMap;
+     var Op = cp(62),
+       op = cp(5203),
+       Ip = cp(6470),
+       Sp = cp(6517),
+       xp = cp(6266);
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7320-L7335` → after: `L6683-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6683-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6683-L6687) · [Before (L7320-L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7320-L7335)

```diff
-       let zC = wC.get(CC);
-       return void 0 === zC && (zC = function(CC) {
-         var zC;
-         const ZC = CC.bones.find((CC => "root" === CC.name.toLowerCase())),
-           QC = null === ZC || void 0 === ZC || null === (zC = ZC.position) || void 0 === zC ? void 0 : zC.keyframes;
-         if (void 0 === QC || CC.lengthSeconds <= 0) return 0;
-         let wC = 1 / 0,
-           bC = 0;
-         for (const fC of QC) {
-           const CC = fC.post[1];
-           if ("number" !== typeof CC) return 0;
-           CC < wC && (wC = CC, bC = fC.time)
-         }
-         const nC = bC / CC.lengthSeconds;
-         return nC - Math.floor(2 * nC) / 2
-       }(CC), wC.set(CC, zC)), zC
+       return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Lp(pp)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7337-L7399` → after: `L6689-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6689-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6689-L6693) · [Before (L7337-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7337-L7399)

```diff
-     var nC = ZC(37009);
-     const fC = 1e-4;
-     class oC {
-       constructor(CC) {
-         this.state = CC, this.weight = 0, this.gaitPhase = 0, this.footfallShift = Number.NaN, this.elapsed = void 0, this.childWeights = void 0, this.childTimes = void 0, this.hasGait = void 0, this.footfallOffsets = void 0, this.elapsed = new Float64Array(CC.children.length), t … [truncated]
-       }
-       updateBlendWeights(CC) {
-         const zC = this.state.children,
-           ZC = this.childWeights;
-         if (ZC.fill(0), this.state.blendInput < 0 || 1 === zC.length) return void(ZC[0] = 1);
-         const QC = CC[this.state.blendInput];
-         if (QC <= zC[0].at) ZC[0] = 1;
-         else {
-           for (let CC = 1; CC < zC.length; CC++)
-             if (QC < zC[CC].at) {
-               const wC = (QC - zC[CC - 1].at) / (zC[CC].at - zC[CC - 1].at);
- ... (47 more removed lines; see GitHub link above)
+ 
+     function Yp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7402-L7463` → after: `L6696-L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6696-L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6696-L6706) · [Before (L7402-L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7402-L7463)

```diff
-     class qC {
-       constructor(CC, zC) {
-         this.layer = CC, this.mask = zC, this.instances = [], this.current = null, this.weight = 0
-       }
-       update(CC, zC, ZC) {
-         var QC, wC;
-         let bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
-         const nC = this.resolveState(CC);
-         nC !== (null !== (QC = null === (wC = this.current) || void 0 === wC ? void 0 : wC.state) && void 0 !== QC ? QC : null) && (this.current = null === nC ? null : this.enter(nC, bC)), this.updateWeights(zC, ZC)
-       }
-       resolveState(CC) {
-         for (const zC of CC) {
-           const CC = this.layer.states.get(zC);
-           if (void 0 !== CC) return CC
-         }
-         return this.layer.fallback
- ... (46 more removed lines; see GitHub link above)
+ 
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

#### 248. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7466-L7480` → after: `L6709-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6709-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6709-L6715) · [Before (L7466-L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7466-L7480)

```diff
-     function NC(CC, zC) {
-       const {
-         instances: ZC,
-         current: QC
-       } = CC;
-       if (0 === ZC.length) return !0;
-       if (null === QC || ZC.length > 1 || ZC[0] !== QC || QC.weight < 1) return !1;
-       if (CC.weight <= fC) return !0;
-       if (Math.abs(QC.restGap()) > 1e-6) return !1;
-       const wC = QC.state.children;
-       for (let bC = 0; bC < wC.length; bC++) {
-         const CC = wC[bC].clip.clip;
-         if (QC.childWeights[bC] > fC && !CC.still && (!CC.timeless || !MC(wC[bC].strideBlocks, zC, CC, QC.elapsed[bC]))) return !1
-       }
-       return !0
+     function Ap() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Ap = function() {
+         return !!pp
+       })()
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7483-L7484` → after: `L6718-L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6718-L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6718-L6721) · [Before (L7483-L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7483-L7484)

```diff
-     function MC(CC, zC, ZC, QC) {
-       return CC > 0 || null === ZC.animTimeUpdate && (zC <= 1e-6 || QC >= ZC.standsAfterSeconds)
+     function Pp(pp) {
+       return Pp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Pp(pp)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7488` → after: `L6725-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6725-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6725-L6727) · [Before (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7488)

```diff
-       for (const ZC of CC.instances) ZC.advanceGait(zC), ZC.gaitPhase = (ZC.gaitPhase + ZC.restGap()) % 1
+       return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Wp(pp, ip)
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7492-L7629` → after: `L6731-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6731-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6731-L6736) · [Before (L7492-L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7492-L7629)

```diff
-       const QC = CC.state.children;
-       for (let wC = 0; wC < QC.length; wC++) QC[wC].strideBlocks <= 0 && (CC.elapsed[wC] += zC * ZC)
-     }
-     var pC = ZC(37209),
-       PC = ZC(37252);
-     const GC = "root";
-     class RC {
-       constructor(CC, zC) {
-         this.id = CC, this.boneNames = zC, this.indexByLowerName = new Map, this.impliedRoot = !1, zC.forEach(((CC, zC) => {
-           const ZC = CC.toLowerCase();
-           "" === ZC || this.indexByLowerName.has(ZC) || this.indexByLowerName.set(ZC, zC)
-         })), zC.length > 0 && !this.indexByLowerName.has(GC) && (this.indexByLowerName.set(GC, 0), this.impliedRoot = !0)
-       }
-       get boneCount() {
-         return this.boneNames.length
-       }
- ... (122 more removed lines; see GitHub link above)
+       return (ip = Up(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7632-L7919` → after: `L6739-L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6739-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6739-L6746) · [Before (L7632-L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7632-L7919)

```diff
-     function dC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       return Number.isNaN(CC) ? ZC : Math.min(zC, Math.max(-zC, CC))
-     }
-     var mC = ZC(37227);
-     const HC = "clip:";
-     class EC {
-       constructor(CC) {
-         this.rigged = CC, this.pose = void 0, this.inputs = void 0, this.accumulator = void 0, this.layers = void 0, this.runtimes = void 0, this.variableSlots = void 0, this.heldVariableSlots = void 0, this.sample = new Float64Array(3), this.actions = new IC, this.stateCandidate … [truncated]
-         const zC = CC.binding,
-           ZC = CC.rig.boneCount;
-         this.pose = new KC(ZC), this.accumulator = new YC(ZC), this.inputs = new Float64Array(QC.k.Count + zC.filters.length), this.layers = zC.layers.map(((zC, ZC) => new qC(zC, CC.layerMasks[ZC]))), this.runtimes = zC.pools.map((CC => ({
-           queries: new Float64Array(mC.d.Count),
-           variables: CC.variables.createValues()
-         }))), this.variableSlots = zC.pools.map((CC => Int32Array.from(zC.variables, (zC => {
-           var ZC;
- ... (272 more removed lines; see GitHub link above)
+     function Up(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Lp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Lp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7921` → after: `L6748-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6748-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6748-L6750) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7921)

```diff
-       }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Lp(ip) ? ip : ip + ""
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7924-L7929` → after: `L6753-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6753-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6753-L6760) · [Before (L7924-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7924-L7929)

```diff
-     function lC(CC, zC, ZC, QC) {
-       if (null === CC.animTimeUpdate) return zC + ZC;
-       const wC = QC.queries[mC.d.DeltaTime];
-       QC.queries[mC.d.AnimTime] = zC, QC.queries[mC.d.DeltaTime] = ZC;
-       const bC = CC.animTimeUpdate.evaluate(QC);
-       return QC.queries[mC.d.DeltaTime] = wC, bC
+     function wp() {
+       return wp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, wp.apply(this, arguments)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7933-L7935` → after: `L6763-L6779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6763-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6763-L6779) · [Before (L7933-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7933-L7935)

```diff
-     function cC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zC;
-       return Number.isNaN(CC) ? QC : Math.min(ZC, Math.max(zC, CC))
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
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7937-L7944` → after: `L6781-L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6781-L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6781-L6785) · [Before (L7937-L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7937-L7944)

```diff
-     var uC = ZC(37211),
-       rC = ZC(3261);
-     let sC = !0;
-     const TC = "Player";
- 
-     function aC(CC, zC) {
-       for (const ZC of zC) {
-         (ZC.severity === xC.b.Error ? console.error : console.warn)(`Animation for ${CC}: ${ZC.source}: ${ZC.message}`)
+     var tp = function(pp) {
+       function ip() {
+         return function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), Dp(this, ip, arguments)
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L7946-L8051` → after: `L6787-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6787-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6787-L6826) · [Before (L7946-L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L7946-L8051)

```diff
-     }
-     const tC = new class {
-         constructor() {
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.Gs = 0
-         }
-         get version() {
-           return this.Gs
-         }
-         bumpVersion() {
-           this.Gs++
-         }
-         get enabled() {
-           return sC
-         }
-         forgetCompiled() {
-           this.bindings.clear(), this.rigged = new WeakMap, this.pack = null, this.bumpVersion()
- ... (90 more removed lines; see GitHub link above)
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
+         }), ip && Wp(pp, ip)
+       }(ip, pp), cp = ip, (op = [{
+         key: "render",
+         value: function() {
+           return Op.createElement(vp, this.props)
+         }
+ ... (24 more added lines; see GitHub link above)
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8053` → after: `L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6828) · [Before (L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8053)

```diff
-   37201: (CC, zC, ZC) => {
+   6524: (pp, ip, cp) => {
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8055-L8056` → after: `L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6830) · [Before (L8055-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8055-L8056)

```diff
-       b: () => FC,
-       d: () => qC
+       b: () => tp
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8058-L8107` → after: `L6832-L6843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6832-L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6832-L6843) · [Before (L8058-L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8058-L8107)

```diff
-     var QC = ZC(37209),
-       wC = ZC(37257),
-       bC = ZC(37222),
-       nC = ZC(37009),
-       fC = ZC(37227);
-     class oC {
-       constructor(CC, zC, ZC) {
-         this.clip = CC, this.boneNames = void 0, this.rotations = void 0, this.channels = void 0, this.restEuler = void 0, this.trigs = void 0, this.runtime = void 0, this.sample = new Float64Array(3), this.rotation = new Float64Array(4), this.posedAt = Number.NaN;
-         const QC = [],
-           wC = [],
-           bC = [];
-         for (const nC of CC.bones) {
-           if (null === nC.rotation) continue;
-           const zC = ZC(nC.name);
-           null !== zC ? (QC.push(nC.name), wC.push(nC.rotation), bC.push(zC)) : console.warn(`${CC.id} animates ${nC.name}, which the attachment has no node for`)
-         }
- ... (34 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(5203),
+       Ip = cp(6470),
+       Sp = cp(6517),
+       xp = cp(6266);
+ 
+     function Lp(pp) {
+       return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Lp(pp)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8111-L8137` → after: `L6847-L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6847-L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6847-L6849) · [Before (L8111-L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8111-L8137)

```diff
-       const {
-         pool: ZC
-       } = (0, QC.c)(), wC = ZC.find(CC);
-       return null === wC ? (console.warn(`Cosmetic attachment clip ${CC} is not a built-in clip`), null) : new oC(wC, ZC.variables.createValues(), zC)
-     }
-     class FC {
-       constructor(CC, zC, ZC) {
-         this.pose = CC, this.nodeIndices = void 0, this.nodeIndices = Uint32Array.from(CC.boneNames, (CC => zC.getNamedNode(ZC, CC)))
-       }
-       static fromRestInstance(CC, zC, ZC) {
-         const QC = qC(ZC, (ZC => {
-           const QC = CC.getNamedNodeOrNull(zC, ZC);
-           return null === QC ? null : CC.getNodeRotationQuat(zC, QC)
-         }));
-         return null === QC ? null : new FC(QC, CC, zC)
-       }
- ... (11 more removed lines; see GitHub link above)
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8152-L8163` → after: `L6854-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6854-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6854-L6862) · [Before (L8152-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8152-L8163)

```diff
-       var oC;
-       const qC = CC.JR.getState(zC, "animator");
-       if (!qC) return;
-       const {
-         thinInstMgr: FC,
-         WH: WC
-       } = qC;
-       if ((0, wC.pausesOutOfView)(CC, zC, WC)) return;
-       const NC = null !== (oC = qC.getDrawnNode(bC)) && void 0 !== oC ? oC : qC.getDrawnNode(nC);
-       if (null === NC || 0 === NC.currentPosX && 0 === NC.currentPosY && 0 === NC.currentPosZ) return;
-       const MC = FC.getNodeParent(WC, NC.thinNodeIndex);
-       null !== MC && (QC.Eg.TransformNormalFromFloatsToRef(NC.currentPosX, NC.currentPosY, NC.currentPosZ, FC.getNodeWorldMatrix(WC, MC), fC), ZC[0] += fC.x, ZC[1] += fC.y, ZC[2] += fC.z)
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

#### 263. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8177-L8182` → after: `L6866-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6866-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6866-L6871) · [Before (L8177-L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8177-L8182)

```diff
-       return QC.c.getImagesPerAtlas().length > 1 && wC.d.nS()
-     }
- 
-     function fC(CC, zC, ZC) {
-       const wC = bC + zC * (1 - 2 * bC);
-       return ZC ? wC : (CC + wC) / QC.c.getImagesPerAtlas()[0]
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Ap = function() {
+         return !!pp
+       })()
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8216-L8265` → after: `L6875-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6875-L6877) · [Before (L8216-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8216-L8265)

```diff
-       try {
-         return function(CC) {
-           var zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC;
-           let {
-             json: WC,
-             bin: NC
-           } = CC;
-           if (function(CC) {
-               var zC, ZC;
-               const QC = [...null !== (zC = CC.extensionsUsed) && void 0 !== zC ? zC : [], ...null !== (ZC = CC.extensionsRequired) && void 0 !== ZC ? ZC : []];
-               return QC.some((CC => !IC.has(CC))) || vC(CC)
-             }(WC)) return null;
-           const MC = null !== (zC = WC.materials) && void 0 !== zC ? zC : [],
-             gC = null !== (ZC = WC.meshes) && void 0 !== ZC ? ZC : [];
-           if (1 !== MC.length || 1 !== gC.length) return null;
-           const SC = null !== (QC = gC[0].primitives) && void 0 !== QC ? QC : [];
- ... (34 more removed lines; see GitHub link above)
+       return Pp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Pp(pp)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8268-L8274` → after: `L6880-L6883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6880-L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6880-L6883) · [Before (L8268-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8268-L8274)

```diff
-     function vC(CC) {
-       if (null === CC || "object" !== typeof CC) return !1;
-       if (Array.isArray(CC)) return CC.some((CC => vC(CC)));
-       for (const [zC, ZC] of Object.entries(CC)) {
-         if ("extensions" === zC && Object.keys(null !== ZC && void 0 !== ZC ? ZC : {}).some((CC => !IC.has(CC))) || vC(ZC)) return !0
-       }
-       return !1
+     function Wp(pp, ip) {
+       return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Wp(pp, ip)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8278-L8290` → after: `L6887-L6892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6887-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6887-L6892) · [Before (L8278-L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8278-L8290)

```diff
-       var QC, wC, bC, nC, fC, oC, qC, FC, WC;
-       if (!ZC) return "none";
-       const NC = null === (QC = CC.textures) || void 0 === QC ? void 0 : QC[ZC.index],
-         MC = null === (wC = CC.images) || void 0 === wC ? void 0 : wC[null === NC || void 0 === NC ? void 0 : NC.source],
-         gC = null === (bC = CC.bufferViews) || void 0 === bC ? void 0 : bC[null === MC || void 0 === MC ? void 0 : MC.bufferView];
-       if (!NC || !MC || void 0 !== MC.uri || !gC || 0 !== gC.buffer || !zC) return null;
-       const SC = null !== (nC = gC.byteOffset) && void 0 !== nC ? nC : 0,
-         pC = gC.byteLength;
-       if (!Number.isInteger(SC) || !Number.isInteger(pC) || SC < 0 || pC < 0 || SC + pC > zC.byteLength) return null;
-       let PC = {};
-       var GC, RC;
-       if (void 0 !== NC.sampler && (PC = null === (GC = CC.samplers) || void 0 === GC ? void 0 : GC[NC.sampler], !PC)) return null;
-       return [(RC = zC.subarray(SC, SC + pC), `${hC(RC,2166136261).toString(16)}-${hC(RC,1867293075).toString(16)}-${RC.length}`), MC.mimeType, null !== (fC = ZC.texCoord) && void 0 !== fC ? fC : 0, null !== (oC = PC.wrapS) && void 0 !== oC ? oC : xC, null !== (qC = PC.wrapT) &&  … [truncated]
+       return (ip = Up(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8293-L8296` → after: `L6895-L6906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6895-L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6895-L6906) · [Before (L8293-L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8293-L8296)

```diff
-     function hC(CC, zC) {
-       let ZC = zC >>> 0;
-       for (let QC = 0; QC < CC.length; QC++) ZC ^= CC[QC], ZC = Math.imul(ZC, 16777619) >>> 0;
-       return ZC
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

#### 268. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8304-L8306` → after: `L6909-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6909-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6909-L6916) · [Before (L8304-L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8304-L8306)

```diff
-     function EC(CC) {
-       var zC;
-       return HC * (null !== (zC = CC.modelScale) && void 0 !== zC ? zC : 1)
+     function wp() {
+       return wp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, wp.apply(this, arguments)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8309-L8320` → after: `L6994-L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6994-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L6994-L6999) · [Before (L8309-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8309-L8320)

```diff
-     function lC(CC) {
-       var zC, ZC, QC;
-       const {
-         yOffset: bC = 0,
-         yRotOffset: nC = 0,
-         xRotOffset: fC = 0
-       } = null !== (zC = CC.customModelInfo) && void 0 !== zC ? zC : {}, oC = null !== (ZC = null === (QC = CC.model) || void 0 === QC ? void 0 : QC.split("|")) && void 0 !== ZC ? ZC : [], qC = oC.includes("rotatable") && wC.f.includes(oC[0]), FC = qC || "CustomModel" === oC[0];
-       return {
-         scale: EC(CC),
-         yOffset: FC ? bC : 0,
-         yRotation: qC ? nC : 0,
-         xRotation: qC ? fC : 0
+     function Yp(pp, ip, cp) {
+       if (ip < 1) return [];
+       if (1 === ip && void 0 === cp) return pp;
+       for (var Op = [], op = 0; op < pp.length; op += ip) {
+         if (void 0 !== cp && !0 !== cp(pp[op])) return;
+         Op.push(pp[op])
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8324-L8326` → after: `L7004-L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7004-L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7004-L7007) · [Before (L8324-L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8324-L8326)

```diff
-     function XC(CC) {
-       const zC = bC.g[CC.meta.rootName];
-       return (0, nC.H)(CC.blockModel) || CC.blockModel === zC.blockModel ? zC : CC
+     function Dp(pp, ip, cp, Op, op) {
+       if (pp * ip < pp * Op || pp * ip > pp * op) return !1;
+       var Ip = cp();
+       return pp * (ip - pp * Ip / 2 - Op) >= 0 && pp * (ip + pp * Ip / 2 - op) <= 0
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8333-L8345` → after: `L7011-L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7011-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7011-L7015) · [Before (L8333-L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8333-L8345)

```diff
-       let {
-         scale: zC,
-         yOffset: ZC,
-         yRotation: QC,
-         xRotation: wC
-       } = CC;
-       const bC = {
-         scale: zC,
-         yOffset: ZC,
-         yRotation: QC,
-         xRotation: wC
-       };
-       return Object.values(bC).join(",")
+       return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Ap(pp)
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8348-L8356` → after: `L7018-L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7018-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7018-L7026) · [Before (L8348-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8348-L8356)

```diff
-     function TC(CC) {
-       var zC, ZC;
-       const QC = {
-         unlit: CC.unlit ? 1 : 0,
-         backFaceCulling: CC.backFaceCulling ? 1 : 0,
-         emissiveColor: null !== (zC = null === (ZC = CC.emissiveColor) || void 0 === ZC ? void 0 : ZC.join(",")) && void 0 !== zC ? zC : "",
-         textureAnimation: CC.textureAnimation ? `${CC.textureAnimation.frames}x${CC.textureAnimation.animationInterval}` : ""
-       };
-       return Object.values(QC).join("|")
+     function Pp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8361-L8378` → after: `L7030-L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7030-L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7030-L7038) · [Before (L8361-L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8361-L8378)

```diff
-       let {
-         blockModel: zC,
-         variant: ZC
-       } = CC;
-       if (pC.c.getModelOverride(zC)) return null;
-       const QC = function(CC) {
-         const zC = aC.get(CC);
-         if (void 0 !== zC) return zC;
-         const ZC = (0, MC.e)(pC.c.getModel(CC, PC.g.BLOCK).url);
-         let QC = null;
-         if (ZC) try {
-           QC = iC((0, MC.c)(ZC.base64))
-         } catch {
-           QC = null
-         }
-         return aC.set(CC, QC), QC
- ... (2 more removed lines; see GitHub link above)
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

#### 274. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8381-L8393` → after: `L7041-L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7041-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7041-L7113) · [Before (L8381-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8381-L8393)

```diff
-     function DC(CC, zC) {
-       if ((0, gC.d)(CC), !zC.blockModel) throw new Error(`"${zC.name}" has a GLB model type ("${zC.model}") but no blockModel`);
-       const ZC = function(CC) {
-           const zC = CC.customModelInfo;
-           return {
-             blockModel: CC.blockModel,
-             bake: lC(CC),
-             variant: {
-               unlit: null === zC || void 0 === zC ? void 0 : zC.unlit,
-               backFaceCulling: null === zC || void 0 === zC ? void 0 : zC.backFaceCulling,
-               emissiveColor: null === zC || void 0 === zC ? void 0 : zC.emissiveColor,
-               textureAnimation: null === zC || void 0 === zC ? void 0 : zC.textureAnimation
-             }
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
+ ... (57 more added lines; see GitHub link above)
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8497-L8511` → after: `L7116-L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7116-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7116-L7188) · [Before (L8497-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8497-L8511)

```diff
-       cC.set(wC, GC);
-       const RC = null !== nC && !MC;
-       if (RC) {
-         const CC = GC.then((CC => CC.material));
-         CC.catch((() => {})), uC.set(nC, CC)
-       }
-       return GC.catch((() => {
-         cC.delete(wC), rC.delete(wC), RC && uC.delete(nC)
-       })), GC
-     }
-     const jC = {
-       ambient: 1,
-       diffuse: 1,
-       keepGlbAlphaCutOff: !1,
-       keepGlbTwoSidedLighting: !1
+       return "equidistantPreserveStart" === wp ? function(pp, ip, cp, Op, op) {
+         for (var Ip, Sp = (Op || []).slice(), xp = ip.start, Lp = ip.end, Ap = 0, Pp = 1, Wp = xp, yp = function() {
+             var ip = null === Op || void 0 === Op ? void 0 : Op[Ap];
+             if (void 0 === ip) return {
+               v: Yp(Op, Pp)
+             };
+             var Ip, Sp = Ap,
+               yp = function() {
+                 return void 0 === Ip && (Ip = cp(ip, Sp)), Ip
+               },
+               Up = ip.coordinate,
+               wp = 0 === Ap || Dp(pp, Up, yp, Wp, Lp);
+             wp || (Ap = 0, Wp = xp, Pp += 1), wp && (Wp = Up + pp * (yp() / 2 + op), Ap += Pp)
+           }; Pp <= Sp.length;)
+           if (Ip = yp()) return Ip.v;
+         return []
+ ... (57 more added lines; see GitHub link above)
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8514` → after: `L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7191) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8514)

```diff
-   37714: (CC, zC, ZC) => {
+   6537: (pp, ip, cp) => {
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8516` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7193) · [Before (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8516)

```diff
-       d: () => QC
+       c: () => Lp
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8518-L8519` → after: `L7195-L7213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7195-L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7195-L7213) · [Before (L8518-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8518-L8519)

```diff
- 
-     function QC(CC) {}
+     var Op = cp(5633),
+       op = cp(6402),
+       Ip = cp(6512),
+       Sp = cp(6524),
+       xp = cp(6368),
+       Lp = (0, Op.c)({
+         chartName: "BarChart",
+         GraphicalChild: op.d,
+         defaultTooltipEventType: "axis",
+         validateTooltipEventTypes: ["axis", "item"],
+         axisComponents: [{
+           axisType: "xAxis",
+           AxisComp: Ip.c
+         }, {
+           axisType: "yAxis",
+           AxisComp: Sp.b
+ ... (3 more added lines; see GitHub link above)
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8521` → after: `L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7215) · [Before (L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8521)

```diff
-   37751: (CC, zC, ZC) => {
+   5624: (pp, ip, cp) => {
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8523` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7217) · [Before (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8523)

```diff
-       c: () => wC
+       b: () => Si
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8525` → after: `L7219-L7235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7219-L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7219-L7235) · [Before (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8525)

```diff
-     var QC = ZC(37356);
+     var Op = cp(5633),
+       op = cp(6497),
+       Ip = cp(6402),
+       Sp = cp(6504),
+       xp = cp(62),
+       Lp = cp(6256),
+       Yp = cp(5575),
+       Dp = cp.n(Yp),
+       Ap = cp(6322),
+       Pp = cp.n(Ap),
+       Wp = cp(5405),
+       yp = cp.n(Wp),
+       Up = cp(5203),
+       wp = cp(6103),
+       vp = cp(6414),
+       tp = cp(5588),
+ ... (1 more added lines; see GitHub link above)
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8527-L8538` → after: `L7237-L7248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7237-L7248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7237-L7248) · [Before (L8527-L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8527-L8538)

```diff
-     function wC(CC, zC, ZC, wC) {
-       const bC = [0, 0, 0],
-         nC = [0, 0, 0],
-         fC = (0, QC.f)(zC);
-       for (let QC = 0; QC < 3; QC++) {
-         const zC = fC[QC],
-           oC = fC[QC + 3];
-         bC[QC] = CC[QC] + zC + (oC - zC) * ZC, nC[QC] = CC[QC] + zC + (oC - zC) * wC
-       }
-       return {
-         pos1: bC,
-         pos2: nC
+     function dp(pp) {
+       return dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, dp(pp)
+     }
+ 
+     function ep(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Mp(Op.key), Op)
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8553-L8572` → after: `L7253-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7253-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7253-L7261) · [Before (L8553-L8572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8553-L8572)

```diff
-       const fC = CC.Vg.vfC[ZC];
-       fC.IK(!0);
-       const oC = CC.qM.Xs(CC.rG(zC)),
-         qC = (0, QC.f)(oC),
-         FC = zC.map(((zC, ZC) => zC + (qC[ZC] + qC[ZC + 3]) / 2 - CC.YN[ZC]));
-       fC.sq.set(qC[3] - qC[0], qC[4] - qC[1], qC[5] - qC[2]);
-       let WC = nC.get(fC);
-       WC || (WC = Array.from(fC.getVerticesData("uv")), nC.set(fC, WC));
-       const NC = fC.getVerticesData("normal"),
-         MC = WC.map(((CC, zC) => {
-           const ZC = Math.floor(zC / 2),
-             QC = Math.abs(NC[3 * ZC]) > .5,
-             wC = Math.abs(NC[3 * ZC + 1]) > .5,
-             bC = QC ? fC.sq.y : wC ? fC.sq.z : fC.sq.x,
-             nC = QC ? fC.sq.z : wC ? fC.sq.x : fC.sq.y;
-           return .5 + (CC - .5) * (zC % 2 === 0 ? bC : nC)
- ... (4 more removed lines; see GitHub link above)
+       return ip = mp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === dp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, kp() ? Reflect.construct(ip, cp || [], mp(pp).constructor) : ip.apply(pp, cp))
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8575-L8590` → after: `L7264-L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7264-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7264-L7270) · [Before (L8575-L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8575-L8590)

```diff
-     function oC(CC, zC, ZC, QC, bC, nC) {
-       const fC = 2 * bC;
-       for (let oC = 0; oC < 2; oC++) {
-         const {
-           position: CC,
-           sq: ZC
-         } = zC[oC];
-         zC[oC].sq.set(ZC.x, 1 / QC, ZC.z), (0, wC.p)(zC[oC], CC.x, (0 === oC ? 1 : -1) * (bC - nC / (2 * QC)), CC.z)
-       }
-       for (let oC = 2; oC < 4; oC++) {
-         const {
-           position: CC,
-           sq: qC
-         } = zC[oC];
-         zC[oC].sq.set(1 / ZC, (fC * QC - 2 * nC) / ((fC - 2 * nC) * QC), qC.z), (0, wC.p)(zC[oC], (2 === oC ? -1 : 1) * (bC - nC / (2 * ZC)), CC.y, CC.z)
-       }
+     function kp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (kp = function() {
+         return !!pp
+       })()
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8592-L8623` → after: `L7272-L7276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7272-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7272-L7276) · [Before (L8592-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8592-L8623)

```diff
-   },
-   36952: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       AnimatorState: () => AC,
-       ROOT_NODE_NAME: () => hC,
-       default: () => IC,
-       lerpSpeed: () => iC,
-       pausesOutOfView: () => RC
-     });
-     var QC = ZC(326),
-       wC = ZC(1806),
-       bC = ZC(37014),
-       nC = ZC(37032),
-       fC = ZC(36961),
-       oC = ZC(37009);
-     const qC = 1 / 16,
- ... (16 more removed lines; see GitHub link above)
+ 
+     function mp(pp) {
+       return mp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, mp(pp)
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8625-L8653` → after: `L7278-L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7278-L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7278-L7301) · [Before (L8625-L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8625-L8653)

```diff
-     class pC {
-       constructor(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
-         this.controller = CC, this.onRelease = ZC, this.bones = void 0, this.bones = CC.rigged.rig.boneNames.map(((CC, ZC) => {
-           const QC = zC(CC, ZC);
-           return null === QC ? null : new SC(QC)
-         }))
-       }
-       apply(CC, zC, ZC, QC, wC) {
-         const nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5] || this.controller.update(CC);
-         let fC = !nC;
-         const {
-           touched: oC
-         } = this.controller.pose;
-         for (let qC = 0; qC < this.bones.length; qC++) {
-           const FC = this.bones[qC];
- ... (13 more removed lines; see GitHub link above)
+ 
+     function Rp(pp, ip) {
+       return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Rp(pp, ip)
+     }
+ 
+     function qp(pp, ip, cp) {
+       return (ip = Mp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8655-L8658` → after: `L7303-L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7303-L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7303-L7311) · [Before (L8655-L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8655-L8658)

```diff
-         return fC
-       }
-       releaseAll(CC, zC) {
-         for (const ZC of this.bones) null !== ZC && void 0 !== ZC && ZC.owned ? this.release(ZC, CC, zC, !1) : null !== ZC && void 0 !== ZC && ZC.heldForClip && this.releaseToRest(ZC)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == dp(ip) ? ip : ip + ""
+     }
+     var Cp = function(pp) {
+       function ip() {
+         return function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), jp(this, ip, arguments)
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8660-L8698` → after: `L7313-L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7313-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7313-L7327) · [Before (L8660-L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8660-L8698)

```diff
-       writeBone(CC, zC, ZC, QC, wC) {
-         const {
-           node: bC,
-           restEuler: nC,
-           restQuat: fC
-         } = CC, WC = this.controller.pose, gC = 3 * zC, SC = this.updateBaseTurn(CC), pC = CC.baseTurn, GC = WC.rotation[gC], RC = WC.rotation[gC + 1], AC = WC.rotation[gC + 2], {
-           writtenEuler: xC
-         } = CC, JC = !SC && 1 === CC.takeover && xC[0] === GC && xC[1] === RC && xC[2] === AC;
-         JC || (0, oC.n)(nC[0] + GC, nC[1] + RC, nC[2] + AC, CC.eulerTrig, NC);
-         let IC = WC.position[gC] * qC,
-           iC = WC.position[gC + 1] * qC,
-           vC = WC.position[gC + 2] * qC;
-         if (CC.takeover < 1) {
-           if (0 === CC.takeover) {
-             const zC = bC.thinNode.rotationQuat;
-             MC[0] = -pC[0], MC[1] = -pC[1], MC[2] = -pC[2], MC[3] = pC[3], CC.takeoverRotation.set([zC.x, zC.y, zC.z, zC.w]), (0, oC.k)(MC, CC.takeoverRotation, CC.takeoverRotation), CC.takeoverPosition.set([bC.currentPosX, bC.currentPosY, bC.currentPosZ]);
- ... (23 more removed lines; see GitHub link above)
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
+         }), ip && Rp(pp, ip)
+       }(ip, pp), cp = ip, (Op = [{
+         key: "render",
+         value: function() {
+           return null
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8700-L8706` → after: `L7329-L7354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7329-L7354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7329-L7354) · [Before (L8700-L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8700-L8706)

```diff
-         var eC, hC;
-         if (!JC) {
-           (0, oC.k)(pC, NC, NC);
-           const {
-             written: zC
-           } = CC;
-           (Math.abs(zC[0] - NC[0]) > FC || Math.abs(zC[1] - NC[1]) > FC || Math.abs(zC[2] - NC[2]) > FC || Math.abs(zC[3] - NC[3]) > FC) && (zC.set(NC), ZC.setNodeRotation(QC, bC.thinNodeIndex, NC[0], NC[1], NC[2], NC[3])), xC[0] = GC, xC[1] = RC, xC[2] = AC
+       }]) && ep(cp.prototype, Op), op && ep(cp, op), Object.defineProperty(cp, "prototype", {
+         writable: !1
+       }), cp;
+       var cp, Op, op
+     }(xp.Component);
+     qp(Cp, "displayName", "ZAxis"), qp(Cp, "defaultProps", {
+       zAxisId: 0,
+       range: [64, 64],
+       scale: "auto",
+       type: "number"
+     });
+     var Ep = cp(6493),
+       Xp = cp(6332),
+       lp = cp(6410),
+       Qp = cp(5299),
+       Jp = cp(6266),
+ ... (10 more added lines; see GitHub link above)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8708-L8719` → after: `L7356-L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7356-L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7356-L7373) · [Before (L8708-L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8708-L8719)

```diff
-         this.writeScale(CC, WC.scale[gC], WC.scale[gC + 1], WC.scale[gC + 2], ZC, QC);
-         const KC = Math.abs(bC.currentPosX - IC) > FC || Math.abs(bC.currentPosY - iC) > FC || Math.abs(bC.currentPosZ - vC) > FC;
-         return bC.currentPosX = IC, bC.currentPosY = iC, bC.currentPosZ = vC, KC
-       }
-       updateBaseTurn(CC) {
-         const {
-           node: zC,
-           baseTurn: ZC,
-           baseTurnFor: QC,
-           restQuat: wC
-         } = CC;
-         return (QC[0] !== zC.baseRotX || QC[1] !== zC.baseRotY || QC[2] !== zC.baseRotZ) && (QC[0] = zC.baseRotX, QC[1] = zC.baseRotY, QC[2] = zC.baseRotZ, fC.Quaternion.RotationYawPitchRollToRef(zC.baseRotY, zC.baseRotX, zC.baseRotZ, gC), ZC[0] = gC.x, ZC[1] = gC.y, ZC[2] = gC.z … [truncated]
+         return pp
+       }, bp.apply(this, arguments)
+     }
+ 
+     function hp(pp, ip) {
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
+ ... (2 more added lines; see GitHub link above)
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8721-L8731` → after: `L7375-L7407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7375-L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7375-L7407) · [Before (L8721-L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8721-L8731)

```diff
-       writeScale(CC, zC, ZC, QC, wC, bC) {
-         const {
-           node: nC
-         } = CC, fC = Math.abs(zC - 1) <= FC && Math.abs(ZC - 1) <= FC && Math.abs(QC - 1) <= FC;
-         let oC = CC.scaleBase;
-         if (null === oC) {
-           if (fC) return;
-           const {
-             scale: zC
-           } = nC.thinNode;
-           oC = Float64Array.of(zC.x, zC.y, zC.z), CC.scaleBase = oC, CC.writtenScale.fill(1)
+       return op
+     }
+ 
+     function ap(pp) {
+       var ip = pp.option,
+         cp = pp.isActive,
+         Op = hp(pp, fp);
+       return "string" === typeof ip ? xp.createElement(Tp.d, bp({
+         option: xp.createElement(Np.c, bp({
+           type: ip
+         }, Op)),
+         isActive: cp,
+         shapeType: "symbols"
+       }, Op)) : xp.createElement(Tp.d, bp({
+         option: ip,
+         isActive: cp,
+ ... (17 more added lines; see GitHub link above)
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8733-L8736` → after: `L7409-L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7409-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7409-L7419) · [Before (L8733-L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8733-L8736)

```diff
-         const {
-           writtenScale: qC
-         } = CC;
-         (Math.abs(qC[0] - zC) > FC || Math.abs(qC[1] - ZC) > FC || Math.abs(qC[2] - QC) > FC) && (qC[0] = zC, qC[1] = ZC, qC[2] = QC, wC.setNodeScale(bC, nC.thinNodeIndex, oC[0] * zC, oC[1] * ZC, oC[2] * QC)), fC && (CC.scaleBase = null)
+         return pp
+       }, Fp.apply(this, arguments)
+     }
+ 
+     function gp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8738-L8754` → after: `L7421-L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7421-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7421-L7439) · [Before (L8738-L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8738-L8754)

```diff
-       release(CC, zC, ZC, wC) {
-         CC.owned = !1, CC.written.fill(0);
-         const {
-           node: bC
-         } = CC;
-         bC.rigFrame = -1;
-         const [nC, fC, oC] = QC.c.eulerYXZFromQuaternion(bC.thinNode.rotationQuat);
-         bC.currentRotX = QC.c.computeShortestRotation(bC.baseRotX, nC), bC.currentRotY = QC.c.computeShortestRotation(bC.baseRotY, fC), bC.currentRotZ = QC.c.computeShortestRotation(bC.baseRotZ, oC), wC ? (CC.heldForClip = !0, bC.rotX = bC.currentRotX, bC.rotY = bC.currentRotY, b … [truncated]
-         const qC = CC.scaleBase;
-         null !== qC && (CC.scaleBase = null, zC.setNodeScale(ZC, bC.thinNodeIndex, qC[0], qC[1], qC[2]))
-       }
-       releaseToRest(CC) {
-         CC.heldForClip = !1;
-         const {
-           node: zC
-         } = CC;
- ... (1 more removed lines; see GitHub link above)
+       return cp
+     }
+ 
+     function Gp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? gp(Object(cp), !0).forEach((function(ip) {
+           Vp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : gp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
+ 
+     function rp(pp, ip) {
+ ... (3 more added lines; see GitHub link above)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8759` → after: `L7444-L7473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7444-L7473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7444-L7473) · [Before (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8759)

```diff
-       return CC + (zC - CC) * ZC
+       return ip = sp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === np(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, zp() ? Reflect.construct(ip, cp || [], sp(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function zp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (zp = function() {
+ ... (14 more added lines; see GitHub link above)
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8764-L8769` → after: `L7477-L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7477-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7477-L7482) · [Before (L8764-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8764-L8769)

```diff
-       var QC, wC;
-       const bC = CC.Vg.nH,
-         {
-           qE: nC
-         } = CC;
-       return bC.has(ZC) && bC.getCulledForEntity(ZC, zC) && zC !== nC && (null === (QC = CC.JR.BzC(zC)) || void 0 === QC ? void 0 : QC.og) !== nC && (null === (wC = CC.JR.BzC(nC)) || void 0 === wC ? void 0 : wC.og) !== zC
+       return (ip = ii(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8771-L8812` → after: `L7484-L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7484-L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7484-L7499) · [Before (L8771-L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8771-L8812)

```diff
-     class AC {
-       constructor() {
-         this.mH = void 0, this.MN = void 0, this.thinInstMgr = void 0, this.WH = null, this.AZC = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = CC => {
-           this.writeNodePosition(CC)
-         }, this.modelLifeformType = null, this.nodeNameAliases = null, this.nodeTransforms = {}, this.nodeTransformList = [], this.rigOnlyNodeKeys = new Set, this.animationTypeToProgressTracker = [new JC, new JC, new JC, new JC]
-       }
-       startAnimation(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         QC = Math.max(QC, 0), this.idle = !1, this.stopAnimation(zC);
-         this.animationTypeToProgressTracker[zC].startTrackingAnimationProgress(CC, ZC, QC);
-         const {
-           Zb: wC
-         } = CC;
-         wC && this.updateNodeAnimations(wC, zC, bC.b.Start)
-       }
- ... (26 more removed lines; see GitHub link above)
+ 
+     function ii(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != np(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != np(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == np(ip) ? ip : ip + ""
+     }
+     var ci = function(pp) {
+       function ip() {
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8814-L8839` → after: `L7501-L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7501-L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7501-L7515) · [Before (L8814-L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8814-L8839)

```diff
-         return null !== (zC = this.nodeTransforms[this.getAliasedNodeName(CC)]) && void 0 !== zC ? zC : null
-       }
-       getRigNodeTransform(CC, zC) {
-         if (zC !== KC && CC === hC) {
-           if (this.thinInstMgr.getNamedNodeOrNull(this.WH, hC) !== zC) return null;
-           const CC = `${hC}#${zC}`;
-           return this.rigOnlyNodeKeys.add(CC), this.getOrCreateTransform(CC, zC, !1, null)
-         }
-         const ZC = this.getOrCreateTransformIfNodeExists(zC === KC ? hC : CC);
-         return (null === ZC || void 0 === ZC ? void 0 : ZC.thinNodeIndex) === zC ? ZC : null
-       }
-       restoreNodesToRestPose() {
-         if (this.thinInstMgr.has(this.WH))
-           for (const CC of this.nodeTransformList) {
-             const {
-               thinNodeIndex: zC,
- ... (10 more removed lines; see GitHub link above)
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return Vp(pp = Zp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !1
+         }), Vp(pp, "handleAnimationEnd", (function() {
+           pp.setState({
+             isAnimationFinished: !0
+           })
+         })), Vp(pp, "handleAnimationStart", (function() {
+           pp.setState({
+             isAnimationFinished: !1
+           })
+         })), Vp(pp, "id", (0, Qp.J)("recharts-scatter-")), pp
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8841-L8875` → after: `L7517-L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7517-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7517-L7551) · [Before (L8841-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8841-L8875)

```diff
-       updateNodeBaseRotation(CC, zC, ZC, QC) {
-         const wC = this.getOrCreateTransformIfNodeExists(CC);
-         null !== wC && (null !== zC && wC.baseRotX !== zC && (wC.baseRotX = zC, wC.isRotDirty = !0), null !== ZC && wC.baseRotY !== ZC && (wC.baseRotY = ZC, wC.isRotDirty = !0), null !== QC && wC.baseRotZ !== QC && (wC.baseRotZ = QC, wC.isRotDirty = !0), wC.isRotDirty && (this.id … [truncated]
-       }
-       updateNodeRotation(CC, zC, ZC, QC) {
-         const wC = this.getOrCreateTransformIfNodeExists(CC);
-         null !== wC && (null !== zC && wC.rotX !== zC && (wC.rotX = zC, wC.isRotDirty = !0, this.manualRotationEpoch++), null !== ZC && wC.rotY !== ZC && (wC.rotY = ZC, wC.isRotDirty = !0, this.manualRotationEpoch++), null !== QC && wC.rotZ !== QC && (wC.rotZ = QC, wC.isRotDirty  … [truncated]
-       }
-       updateNodePosition(CC, zC, ZC, QC) {
-         const wC = this.getOrCreateTransformIfNodeExists(CC);
-         null !== wC && (null !== zC && wC.posX !== zC && (wC.posX = zC, wC.isPosDirty = !0), null !== ZC && wC.posY !== ZC && (wC.posY = ZC, wC.isPosDirty = !0), null !== QC && wC.posZ !== QC && (wC.posZ = QC, wC.isPosDirty = !0), wC.isPosDirty && (this.idle = !1))
-       }
-       render(CC) {
-         let zC = !1;
-         if (this.idle) {
-           if (!this.AZC.xZC) return;
- ... (19 more removed lines; see GitHub link above)
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
+         }), ip && Kp(pp, ip)
+       }(ip, pp), cp = ip, Op = [{
+         key: "renderSymbolsStatically",
+         value: function(pp) {
+           var ip = this,
+             cp = this.props,
+ ... (19 more added lines; see GitHub link above)
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8877-L8894` → after: `L7553-L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7553-L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7553-L7599) · [Before (L8877-L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8877-L8894)

```diff
-         this.idle = fC
-       }
-       renderPaused(CC) {
-         this.idle || this.tickAnimationProgress(CC), this.paused = !0, this.pausedDt += CC
-       }
-       catchUp() {
-         this.paused && this.render(0)
-       }
-       tickAnimationProgress(CC) {
-         let zC = !1;
-         for (let ZC = 0; ZC < this.animationTypeToProgressTracker.length; ZC++) {
-           const QC = this.animationTypeToProgressTracker[ZC];
-           if (QC.ZN(CC), !QC.hasCurrentAnimationFinished()) {
-             null !== QC.getCurrentAnimationScript() && (zC = !0);
-             continue
-           }
- ... (2 more removed lines; see GitHub link above)
+       }, {
+         key: "renderSymbolsWithAnimation",
+         value: function() {
+           var pp = this,
+             ip = this.props,
+             cp = ip.points,
+             Op = ip.isAnimationActive,
+             op = ip.animationBegin,
+             Ip = ip.animationDuration,
+             Sp = ip.animationEasing,
+             Yp = ip.animationId,
+             Dp = this.state.prevPoints;
+           return xp.createElement(Lp.c, {
+             mW: op,
+             duration: Ip,
+             isActive: Op,
+ ... (31 more added lines; see GitHub link above)
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8896-L8993` → after: `L7601-L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7601-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7601-L7608) · [Before (L8896-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8896-L8993)

```diff
-         return zC
-       }
-       rewindNodeAnimationTimelines(CC, zC) {
-         const {
-           Zb: ZC
-         } = CC;
-         if (null !== ZC)
-           for (const QC in ZC) {
-             const CC = this.getOrCreateTransformIfNodeExists(QC);
-             null !== CC && CC.currentAnimationType === zC && (CC.rotAnimationIndex = 0, CC.posAnimationIndex = 0)
-           }
-       }
-       snapNodesToFinalKeyframes(CC, zC) {
-         const {
-           Zb: ZC
-         } = CC;
- ... (82 more removed lines; see GitHub link above)
+       }, {
+         key: "renderSymbols",
+         value: function() {
+           var pp = this.props,
+             ip = pp.points,
+             cp = pp.isAnimationActive,
+             Op = this.state.prevPoints;
+           return !(cp && ip && ip.length) || Op && Pp()(Op, ip) ? this.renderSymbolsStatically(ip) : this.renderSymbolsWithAnimation()
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8995-L9059` → after: `L7610-L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7610-L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7610-L7636) · [Before (L8995-L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L8995-L9059)

```diff
-       }
-       updateCurrentNodeAnimation(CC) {
-         const zC = CC.currentAnimationType,
-           ZC = CC.currentAnimation;
-         CC.currentAnimation = null, CC.currentAnimationType = null;
-         const {
-           animationByType: QC
-         } = CC;
-         for (let wC = 0; wC < this.animationTypeToProgressTracker.length; wC++) {
-           const zC = QC[wC];
-           null !== zC && (CC.currentAnimation = zC, CC.currentAnimationType = wC)
-         }
-         null === CC.currentAnimationType ? (CC.rotAnimationIndex = 0, CC.posAnimationIndex = 0, null !== zC && (0 !== ZC.rotation.length && (CC.rotX = 0, CC.rotY = 0, CC.rotZ = 0, CC.isRotDirty = !0, this.manualRotationEpoch++), 0 !== ZC.position.length && (CC.posX = 0, CC.posY = … [truncated]
-       }
-       renderNodeAnimatedRotation(CC, zC) {
-         const ZC = this.computeAnimatedChannelPoint(CC, "rotation");
- ... (49 more removed lines; see GitHub link above)
+       }, {
+         key: "renderErrorBar",
+         value: function() {
+           if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
+           var pp = this.props,
+             ip = pp.points,
+             cp = pp.xAxis,
+             Op = pp.yAxis,
+             op = pp.children,
+             Ip = (0, tp.h)(op, Xp.b);
+           return Ip ? Ip.map((function(pp, op) {
+             var Ip = pp.props,
+               Sp = Ip.direction,
+               Lp = Ip.dataKey;
+             return xp.cloneElement(pp, {
+               key: "".concat(Sp, "-").concat(Lp, "-").concat(ip[op]),
+ ... (11 more added lines; see GitHub link above)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9061-L9065` → after: `L7638-L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7638-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7638-L7654) · [Before (L9061-L9065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9061-L9065)

```diff
-               break
-             }
-             default: {
-               const CC = oC.nb;
-               throw new Error(`Unimplemented lerp mode: ${CC}`)
+             })
+           })) : null
+         }
+       }, {
+         key: "renderLine",
+         value: function() {
+           var pp, ip, cp = this.props,
+             Op = cp.points,
+             op = cp.line,
+             Ip = cp.lineType,
+             Sp = cp.lineJointType,
+             Lp = (0, tp.d)(this.props, !1),
+             Yp = (0, tp.d)(op, !1);
+           if ("joint" === Ip) pp = Op.map((function(pp) {
+             return {
+               x: pp.cx,
+ ... (1 more added lines; see GitHub link above)
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9069-L9073` → after: `L7687-L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7687-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7687-L7733) · [Before (L9069-L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9069-L9073)

```diff
-         return FC
-       }
-       findFloorAnimationIndex(CC, zC, ZC) {
-         for (let QC = CC; QC < ZC.length - 1; QC++) {
-           if (zC < ZC[QC + 1].timeFraction) return QC
+       }, {
+         key: "render",
+         value: function() {
+           var pp = this.props,
+             ip = pp.hide,
+             cp = pp.points,
+             Op = pp.line,
+             op = pp.className,
+             Ip = pp.xAxis,
+             Sp = pp.yAxis,
+             Lp = pp.left,
+             Yp = pp.top,
+             Ap = pp.width,
+             Pp = pp.height,
+             Wp = pp.id,
+             yp = pp.isAnimationActive;
+ ... (31 more added lines; see GitHub link above)
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9075-L9144` → after: `L7735-L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7735-L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7735-L7909) · [Before (L9075-L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9075-L9144)

```diff
-         return ZC.length - 1
-       }
-       flushNodeRotation(CC, zC) {
-         const {
-           rotX: ZC,
-           rotY: QC,
-           rotZ: wC
-         } = CC;
-         this.stepRotationTowards(CC, ZC, QC, wC, zC) && (CC.isRotDirty = !1), this.writeNodeRotation(CC)
-       }
-       flushNodePosition(CC, zC) {
-         const {
-           posX: ZC,
-           posY: QC,
-           posZ: wC
-         } = CC;
- ... (54 more removed lines; see GitHub link above)
+       }], Op && rp(cp.prototype, Op), op && rp(cp, op), Object.defineProperty(cp, "prototype", {
+         writable: !1
+       }), cp;
+       var cp, Op, op
+     }(xp.PureComponent);
+     Vp(ci, "displayName", "Scatter"), Vp(ci, "defaultProps", {
+       xAxisId: 0,
+       yAxisId: 0,
+       zAxisId: 0,
+       legendType: "circle",
+       lineType: "joint",
+       lineJointType: "linear",
+       data: [],
+       shape: "circle",
+       hide: !1,
+       isAnimationActive: !Hp.e.isSsr,
+ ... (159 more added lines; see GitHub link above)
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9149-L9186` → after: `L7915-L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7915-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7915-L7921) · [Before (L9149-L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9149-L9186)

```diff
-       return null !== CC.currentAnimation || CC.isRotDirty || CC.isPosDirty
-     }
-     class JC {
-       constructor() {
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.Bw = 1
-       }
-       startTrackingAnimationProgress(CC, zC, ZC) {
-         this.currentAnimationScript = CC, this.elapsedAnimationTimeMs = zC * CC.Cb, this.elapsedAnimationTimeFraction = zC, this.Bw = ZC
-       }
-       reset() {
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.Bw = 1
-       }
-       getCurrentAnimationScript() {
-         return this.currentAnimationScript
-       }
-       getElapsedAnimationTimeFraction() {
- ... (22 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Xp(Object(cp), !0).forEach((function(ip) {
+           Qp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Xp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9190-L9208` → after: `L7926-L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7926-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7926-L7934) · [Before (L9190-L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9190-L9208)

```diff
-     function IC(CC) {
-       return {
-         name: "animator",
-         order: 110,
-         stateConstructor: AC,
-         xR: function(zC, ZC) {
-           var QC, wC;
-           ZC.MN = CC, ZC.thinInstMgr = CC.Vg.nH, ZC.nodeNameAliases = null !== (QC = null === (wC = (0, nC.b)(ZC.modelLifeformType)) || void 0 === wC ? void 0 : wC.nodeNameAliases) && void 0 !== QC ? QC : null, (0, GC.c)(CC).animations.restore(zC, ZC)
-         },
-         lY: function(CC, zC) {
-           zC.restoreNodesToRestPose()
-         },
-         vR: function(zC, ZC) {
-           for (const wC of ZC) {
-             var QC;
-             const {
- ... (3 more removed lines; see GitHub link above)
+     function Qp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Ep(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Ep(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9213-L9223` → after: `L7976-L7984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7976-L7984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7976-L7984) · [Before (L9213-L9223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9213-L9223)

```diff
-     const iC = .06,
-       vC = .01,
-       eC = .001,
-       hC = "Root",
-       KC = 0,
-       YC = [0, 0, 0],
-       dC = [0, 0, 0],
-       mC = {
-         h01: 0,
-         h10: 0,
-         h11: 0
+ 
+     function fp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Tp(Object(cp), !0).forEach((function(ip) {
+           gp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Tp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9225-L9245` → after: `L7986-L7987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7986-L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7986-L7987) · [Before (L9225-L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9225-L9245)

```diff
-   },
-   38217: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       GLOWING_EFFECT_EMISSION: () => MC,
-       GenericLifeform: () => PC,
-       applyHeldLightTint: () => SC,
-       catchUpLifeformTransform: () => GC,
-       computeHeldLightTintFloor: () => gC,
-       default: () => RC
-     });
-     var QC = ZC(338),
-       wC = ZC.n(QC),
-       bC = ZC(37934),
-       nC = ZC(37138),
-       fC = ZC(37279),
-       oC = ZC(38193),
- ... (5 more removed lines; see GitHub link above)
+       return pp
+     }
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9247-L9250` → after: `L7989-L7993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7989-L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7989-L7993) · [Before (L9247-L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9247-L9250)

```diff
-     function gC(CC, zC, ZC, QC) {
-       if (!zC && !ZC && !QC) return null;
-       const bC = null !== CC && void 0 !== CC ? CC : wC().create();
-       return wC().max(bC, null !== zC && void 0 !== zC ? zC : wC().ZERO, null !== ZC && void 0 !== ZC ? ZC : wC().ZERO), wC().max(bC, bC, null !== QC && void 0 !== QC ? QC : wC().ZERO), wC().scale(bC, bC, NC), bC
+     function bp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Gp(Op.key), Op)
+       }
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9253-L9256` → after: `L7996-L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR7996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L7996-L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L7996-L8005) · [Before (L9253-L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9253-L9256)

```diff
-     function SC(CC, zC, ZC, QC) {
-       var wC;
-       const bC = null === (wC = CC.JR.lzC(zC)) || void 0 === wC ? void 0 : wC._heldLightTintFloor;
-       return bC ? (QC[0] = Math.max(ZC[0], bC[0]), QC[1] = Math.max(ZC[1], bC[1]), QC[2] = Math.max(ZC[2], bC[2]), QC[3] = ZC[3], QC) : ZC
+     function hp(pp, ip, cp) {
+       return ip = np(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Bp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, ap() ? Reflect.construct(ip, cp || [], np(pp).constructor) : ip.apply(pp, cp))
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9258-L9265` → after: `L8007-L8014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8007-L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8007-L8014) · [Before (L9258-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9258-L9265)

```diff
-     const pC = new Float32Array(4);
-     class PC {
-       constructor() {
-         this.lifeformType = null, this.WH = null, this.AZC = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = WC, this._lightLevels = fC.c.slice(), this._transformPaused = ! … [truncated]
-       }
-       followLimbs(CC) {
-         this.AZC.xZC && (this._transformPaused = CC, CC || bC.b[this.lifeformType].meshApi.updateTransform(this.mH, this.WH))
-       }
+ 
+     function ap() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (ap = function() {
+         return !!pp
+       })()
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9269` → after: `L8018-L8035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8018-L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8018-L8035) · [Before (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9269)

```diff
-       CC._transformPaused && CC.followLimbs(!1)
+       return np = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, np(pp)
+     }
+ 
+     function Fp(pp, ip) {
+       return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Fp(pp, ip)
+     }
+ 
+     function gp(pp, ip, cp) {
+       return (ip = Gp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9273-L9290` → after: `L8039-L8105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8039-L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8039-L8105) · [Before (L9273-L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9273-L9290)

```diff
-       return {
-         name: "genericLifeform",
-         order: 100,
-         stateConstructor: PC,
-         vR: function(zC, ZC) {
-           const QC = CC.nCC - 300;
-           for (const nC of ZC) {
-             const {
-               WH: zC,
-               AZC: ZC
-             } = nC, fC = ZC.xZC;
-             if (!fC && nC.mH !== CC.qE && !nC.isReplayLocalPlayer) continue;
-             const NC = bC.b[nC.lifeformType].meshApi;
-             if (fC) {
-               var wC;
-               const CC = nC.lastHurtTime > QC,
- ... (2 more removed lines; see GitHub link above)
+       var ip = function(pp, ip) {
+         if ("object" != Bp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Bp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Bp(ip) ? ip : ip + ""
+     }
+     var rp = function(pp) {
+         return pp.changedTouches && !!pp.changedTouches.length
+       },
+       Zp = function(pp) {
+ ... (51 more added lines; see GitHub link above)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9292-L9296` → after: `L8107-L8130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8107-L8130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8107-L8130) · [Before (L9292-L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9292-L9296)

```diff
-             if (CC.Vg.lS) {
-               const ZC = nC._lightLevels,
-                 QC = (0, oC.i)(CC, nC.mH),
-                 wC = SC(CC, nC.mH, QC, pC);
-               (0, qC._)(ZC[0], ZC[1], ZC[2], ZC[3], wC) && (ZC.set(wC), NC.updateMeshLightLevels(zC, ZC))
+           }), Object.defineProperty(pp, "prototype", {
+             writable: !1
+           }), ip && Fp(pp, ip)
+         }(ip, pp), cp = ip, op = [{
+           key: "componentWillUnmount",
+           value: function() {
+             this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
+           }
+         }, {
+           key: "getIndex",
+           value: function(pp) {
+             var cp = pp.startX,
+               Op = pp.endX,
+               op = this.state.scaleValues,
+               Ip = this.props,
+               Sp = Ip.gap,
+ ... (8 more added lines; see GitHub link above)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9338-L9340` → after: `L8134-L8142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8134-L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8134-L8142) · [Before (L9338-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9338-L9340)

```diff
-           zoom: 1.2,
-           x: 0,
-           y: 0
+           key: "getTextOfTick",
+           value: function(pp) {
+             var ip = this.props,
+               cp = ip.data,
+               Op = ip.tickFormatter,
+               op = ip.dataKey,
+               Ip = (0, Mp.fb)(cp[pp], op, pp);
+             return xp()(Op) ? Op(Ip, pp) : Ip
+           }
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9342-L9344` → after: `L8144-L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8144-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8144-L8147) · [Before (L9342-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9342-L9344)

```diff
-           zoom: 2,
-           x: .5,
-           y: .55
+           key: "attachDragEndListener",
+           value: function() {
+             window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
+           }
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9346-L9348` → after: `L8149-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8149-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8149-L8152) · [Before (L9346-L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9346-L9348)

```diff
-           zoom: 3,
-           x: .7,
-           y: 1
+           key: "detachDragEndListener",
+           value: function() {
+             window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
+           }
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9350-L9352` → after: `L8154-L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8154-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8154-L8178) · [Before (L9350-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9350-L9352)

```diff
-           zoom: 4,
-           x: .8,
-           y: 1.1
+           key: "handleSlideDrag",
+           value: function(pp) {
+             var ip = this.state,
+               cp = ip.slideMoveStartX,
+               Op = ip.startX,
+               op = ip.endX,
+               Ip = this.props,
+               Sp = Ip.x,
+               xp = Ip.width,
+               Lp = Ip.travellerWidth,
+               Yp = Ip.startIndex,
+               Dp = Ip.endIndex,
+               Ap = Ip.onChange,
+               Pp = pp.pageX - cp;
+             Pp > 0 ? Pp = Math.min(Pp, Sp + xp - Lp - op, Sp + xp - Lp - Op) : Pp < 0 && (Pp = Math.max(Pp, Sp - Op, Sp - op));
+             var Wp = this.getIndex({
+ ... (9 more added lines; see GitHub link above)
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9354-L9435` → after: `L8180-L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8180-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8180-L8188) · [Before (L9354-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9354-L9435)

```diff
-           zoom: 99999,
-           x: .9,
-           y: 1.3
-         }]
-       }
-       renderTick() {
-         this._adjustCameraXYOffset()
-       }
-       _adjustCameraXYOffset() {
-         for (const CC of this.camZoomToOffsets)
-           if (CC.zoom >= this.MN.camera.cL) return void this._adjustTowardsZoomLevel(CC)
-       }
-       _adjustTowardsZoomLevel(CC) {
-         let {
-           x: zC,
-           y: ZC
- ... (66 more removed lines; see GitHub link above)
+           key: "handleTravellerDragStart",
+           value: function(pp, ip) {
+             var cp = rp(ip) ? ip.changedTouches[0] : ip;
+             this.setState({
+               isSlideMoving: !1,
+               isTravellerMoving: !0,
+               movingTravellerId: pp,
+               brushMoveStartX: cp.pageX
+             }), this.attachDragEndListener()
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9437-L9489` → after: `L8190-L8220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8190-L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8190-L8220) · [Before (L9437-L9489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9437-L9489)

```diff
-           this.setFirstPersonMeshPosition(zC)
-         }
-         this._updateHeldMeshLighting()
-       }
-       setFirstPersonMeshPosition(CC) {
-         const zC = new pC.Eg(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
-           ZC = new pC.Eg(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
-         (0, nC.b)(this.typeObj.type) && (ZC.z = 0, ZC.y -= Math.PI / 2);
-         let QC = null;
-         const wC = this.typeObj.firstPersonHeldRotationOffset;
-         if (wC && (QC = (0, GC.f)(ZC, wC, KC), ZC.Q_(0)), CC - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
-           const wC = this.heldItemState.swingDuration,
-             bC = (wC / 2 - Math.abs(wC / 2 - (CC - this.heldItemState._lastSwingStart))) / (wC / 2),
-             nC = .2,
-             fC = -.4,
-             oC = .5;
- ... (37 more removed lines; see GitHub link above)
+         }, {
+           key: "handleTravellerMove",
+           value: function(pp) {
+             var ip = this.state,
+               cp = ip.brushMoveStartX,
+               Op = ip.movingTravellerId,
+               op = ip.endX,
+               Ip = ip.startX,
+               Sp = this.state[Op],
+               xp = this.props,
+               Lp = xp.x,
+               Yp = xp.width,
+               Dp = xp.travellerWidth,
+               Ap = xp.onChange,
+               Pp = xp.gap,
+               Wp = xp.data,
+ ... (15 more added lines; see GitHub link above)
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9491-L9589` → after: `L8222-L8243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8222-L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8222-L8243) · [Before (L9491-L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9491-L9589)

```diff
-         } else {
-           var QC, wC;
-           const [CC, ZC, bC] = null !== (QC = zC.itemOffset) && void 0 !== QC ? QC : [0, 0, 0], [nC, fC, oC] = null !== (wC = zC.rotation) && void 0 !== wC ? wC : [0, 0, 0];
-           this.buildHeadPose(CC, ZC, bC, nC, fC, oC)
-         }
-         var bC, nC, fC, oC, qC;
-         this.ensureThirdPersonThinObject(CC)
-       }
-       buildHeadPose(CC, zC, ZC, QC, wC, bC) {
-         const {
-           position: fC,
-           rotation: oC,
-           sq: qC
-         } = this.thirdPersonPose;
-         this.thirdPersonPose.usesQuaternion = !1;
-         const FC = (0, nC.b)(this.typeObj.type),
- ... (83 more removed lines; see GitHub link above)
+         }, {
+           key: "handleTravellerMoveKeyboard",
+           value: function(pp, ip) {
+             var cp = this,
+               Op = this.state,
+               op = Op.scaleValues,
+               Ip = Op.startX,
+               Sp = Op.endX,
+               xp = this.state[ip],
+               Lp = op.indexOf(xp);
+             if (-1 !== Lp) {
+               var Yp = Lp + pp;
+               if (!(-1 === Yp || Yp >= op.length)) {
+                 var Dp = op[Yp];
+                 "startX" === ip && Dp >= Sp || "endX" === ip && Dp <= Ip || this.setState(gp({}, ip, Dp), (function() {
+                   cp.props.onChange(cp.getIndex({
+ ... (6 more added lines; see GitHub link above)
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9591-L9799` → after: `L8245-L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8245-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8245-L8331) · [Before (L9591-L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9591-L9799)

```diff
-         }
-         isEnabled() {
-           var CC;
-           return !(null === (CC = (0, MC.e)().pR) || void 0 === CC || !CC.ezBridging) && UC.b.get("clientEscMenuOptions").ezBridging
-         }
-         computeTarget(CC) {
-           var zC, ZC;
-           if (!this.isEnabled()) return null;
-           const QC = (0, MC.e)();
-           if (QC.pCC) return null;
-           if (QC.PCC) return null;
-           const wC = QC.JR.yG(QC.qE),
-             bC = Math.floor(wC[1]),
-             nC = UC.b.get("isTouchScreen") || (0, BC.h)() ? void 0 : wC,
-             fC = Cz;
-           QC.lB(null !== (zC = QC.HCC) && void 0 !== zC ? zC : QC.camera.zB(), fC);
- ... (193 more removed lines; see GitHub link above)
+         }, {
+           key: "renderBackground",
+           value: function() {
+             var pp = this.props,
+               ip = pp.x,
+               cp = pp.y,
+               op = pp.width,
+               Ip = pp.height,
+               Sp = pp.fill,
+               xp = pp.stroke;
+             return Op.createElement("rect", {
+               stroke: xp,
+               fill: Sp,
+               x: ip,
+               y: cp,
+               width: op,
+ ... (71 more added lines; see GitHub link above)
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9801-L9806` → after: `L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8333) · [Before (L9801-L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9801-L9806)

```diff
-               nC || ("Board" === this.bloxd.getMetaInfo(CC).rootName && NC.o.bp("EditBoard", {
-                 pos: qC
-               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(CC).rootName && NC.o.bp("EditCustomLobbyBlock", {
-                 pos: qC
-               }))
-             }
+             }, ip.renderTraveller(Ap, vp))
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9808-L9900` → after: `L8335-L8533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8335-L8533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8335-L8533) · [Before (L9808-L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9808-L9900)

```diff
-         } else SC || !this.MN.pR.canChange && !this.MN.pR.cantChangeError && "You cannot modify this block" === this.MN.pR.cantChangeError || NC.o.bp("showBottomMessage", {
-           message: this.MN.pR.cantBuildError || this.MN.pR.cantChangeError,
-           type: "Error"
-         })
-       }
-       getPlaceBlockRotatedId(CC, zC) {
-         let {
-           pn: ZC,
-           normal: QC,
-           Yu: wC,
-           targetId: bC
-         } = zC;
-         const nC = XC.g[CC].meta.rootName,
-           fC = XC.g[nC].id;
-         if ("Stairs" === XC.g[fC].model) {
-           const CC = 0 === QC[1] && null !== wC && wC[1] - Math.floor(wC[1]) > .5,
- ... (77 more removed lines; see GitHub link above)
+         }, {
+           key: "renderSlide",
+           value: function(pp, ip) {
+             var cp = this.props,
+               op = cp.y,
+               Ip = cp.height,
+               Sp = cp.stroke,
+               xp = cp.travellerWidth,
+               Lp = Math.min(pp, ip) + xp,
+               Yp = Math.max(Math.abs(ip - pp) - xp, 0);
+             return Op.createElement("rect", {
+               className: "recharts-brush-slide",
+               onMouseEnter: this.handleEnterSlideOrTraveller,
+               onMouseLeave: this.handleLeaveSlideOrTraveller,
+               onMouseDown: this.handleSlideDragStart,
+               onTouchStart: this.handleSlideDragStart,
+ ... (183 more added lines; see GitHub link above)
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9906-L9914` → after: `L8538-L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8538-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8538-L8578) · [Before (L9906-L9914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9906-L9914)

```diff
-           this.typeObj.chargeSound && zC - this.lastChargeSoundTime > 200 && (Fz.e.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = zC)
-         } else this.isCharging || this.typeObj.id === this.typeObj.meta.rootId || (this.updateItemToStage(1), this.lastChargeSoundTime = 0)
-       }
-       renderTickLocalPlayer(CC, zC) {
-         if (this.isCharging) {
-           const CC = this.heldItemState.mH === this.MN.qE ? this.typeObj.chargeTime * WC.d.getQuickChargeMultiplier(this.bloxd.SzC(this.MN.qE).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
-             ZC = (zC - this.chargingStart) / CC,
-             QC = Math.min(ZC, .25) / .25;
-           this.firstPersonPosOffset.x = -.05 * QC, this.firstPersonPosOffset.y = .13 * QC, this.firstPersonPosOffset.z = -.05 * QC, ZC > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (ZC - .25) * Math.min(ZC, .8)) * Math.min(ZC, .8)), gz.includes(this.typeObj.meta. … [truncated]
+         }, {
+           key: "getIndexInRange",
+           value: function(pp, ip) {
+             for (var cp = 0, Op = pp.length - 1; Op - cp > 1;) {
+               var op = Math.floor((cp + Op) / 2);
+               pp[op] > ip ? Op = op : cp = op
+             }
+             return ip >= pp[Op] ? Op : cp
+           }
+         }], op && bp(cp.prototype, op), Ip && bp(cp, Ip), Object.defineProperty(cp, "prototype", {
+           writable: !1
+         }), cp;
+         var cp, op, Ip
+       }(Op.PureComponent);
+     gp(Zp, "displayName", "Brush"), gp(Zp, "defaultProps", {
+       height: 40,
+ ... (25 more added lines; see GitHub link above)
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9916` → after: `L8580-L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8580-L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8580-L8598) · [Before (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9916)

```diff
-         super.renderTickLocalPlayer(CC, zC)
+         return pp
+       }, Oi.apply(this, arguments)
+     }
+ 
+     function oi(pp) {
+       return oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, oi(pp)
+     }
+ 
+     function Ii(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+ ... (3 more added lines; see GitHub link above)
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9918-L9919` → after: `L8600-L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8600-L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8600-L8610) · [Before (L9918-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9918-L9919)

```diff
-       getIsCharging() {
-         return this.isCharging
+       return cp
+     }
+ 
+     function Si(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ii(Object(cp), !0).forEach((function(ip) {
+           Pi(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ii(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9921-L9922` → after: `L8612-L8618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8612-L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8612-L8618) · [Before (L9921-L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9921-L9922)

```diff
-       startChargingPose(CC) {
-         this.isCharging = !0, this.chargingStart = CC
+       return pp
+     }
+ 
+     function xi(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Wi(Op.key), Op)
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9924-L9955` → after: `L8620-L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8620-L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8620-L8671) · [Before (L9924-L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9924-L9955)

```diff
-       clearChargingPose() {
-         var CC;
-         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (CC = this.MN.JR.getState(this.MN.qE, "playerCameraAdjustment")) || void 0 === CC || CC.fovMultiplier.removeMultiplier … [truncated]
-       }
-       reset() {
-         super.reset(), this.heldItemState.mH === this.MN.qE ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
-       }
-       startCharging(CC) {
-         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.MN.qE, this.inInvenIdx)) return;
-         this.isCharging = !0, this.chargingStart = CC, this.MN.JR.TzC().canRunCombinator.setBooleanType("charging", !1);
-         const zC = this.bloxd.SzC(this.MN.qE),
-           ZC = this.typeObj.chargeTime * WC.d.getQuickChargeMultiplier(zC.getItemAtIdx(this.inInvenIdx)),
-           QC = this.typeObj.requiresArrow ? 3 : 0;
-         NC.o.bp("middleScreenBarInitiate", {
-           duration: ZC,
-           sQ: !1,
- ... (16 more removed lines; see GitHub link above)
+     }
+ 
+     function Li(pp, ip, cp) {
+       return ip = Di(ip),
+         function(pp, ip) {
+           if (ip && ("object" === oi(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Yi() ? Reflect.construct(ip, cp || [], Di(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function Yi() {
+       try {
+ ... (36 more added lines; see GitHub link above)
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9958-L9982` → after: `L8683-L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8683-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8683-L8742) · [Before (L9958-L9982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9958-L9982)

```diff
-       sendFinishCharging(CC, zC, ZC) {
-         const QC = this.bloxd.client.inventoryPrediction.predict(ZC);
-         (0, fC.sendColyMessage)(yC.mh, {
-           Zn: CC,
-           Qn: zC,
-           bn: QC
-         })
-       }
-       sendEaten(CC) {
-         this.sendFinishCharging(!0, CC, fz.c.eat(this.MN.qE, this.inInvenIdx, this.typeObj.name)), Fz.e.play("burp", 1).rate(.9 + .2 * Math.random())
-       }
-       getHeldName() {
-         var CC;
-         const zC = this.bloxd.SzC(this.MN.qE);
-         if (!zC) return null;
-         const ZC = null === (CC = zC.getItemAtIdx(this.inInvenIdx)) || void 0 === CC ? void 0 : CC.name;
- ... (9 more removed lines; see GitHub link above)
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
+         }), ip && Ai(pp, ip)
+       }(ip, pp), cp = ip, (op = [{
+         key: "render",
+         value: function() {
+           var pp = this.props,
+             cp = pp.x,
+ ... (44 more added lines; see GitHub link above)
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9984` → after: `L8744-L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8744-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8744-L8783) · [Before (L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9984)

```diff
-       }
+       }]) && xi(cp.prototype, op), Ip && xi(cp, Ip), Object.defineProperty(cp, "prototype", {
+         writable: !1
+       }), cp;
+       var cp, op, Ip
+     }(Op.Component);
+     Pi(yi, "displayName", "ReferenceDot"), Pi(yi, "defaultProps", {
+       isFront: !1,
+       ifOverflow: "discard",
+       xAxisId: 0,
+       yAxisId: 0,
+       r: 10,
+       fill: "#fff",
+       stroke: "#ccc",
+       fillOpacity: 1,
+       strokeWidth: 1
+     }), Pi(yi, "renderDot", (function(pp, ip) {
+ ... (24 more added lines; see GitHub link above)
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9986-L9988` → after: `L8785-L8792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8785-L8792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8785-L8792) · [Before (L9986-L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9986-L9988)

```diff
-     class pz extends mC {
-       constructor(CC, zC, ZC, QC, wC) {
-         super(CC, zC, ZC, QC, wC), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.Nn = void 0, this.firstPersonPosOffset = new pC.Eg(.1, 0, .15), this.firstPersonRotation = new pC.Eg(0, -Math.PI / 2, Math.PI / 7)
+ 
+     function ti(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9990-L9991` → after: `L8794-L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8794-L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8794-L8804) · [Before (L9990-L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9990-L9991)

```diff
-       selected(CC) {
-         super.selected(CC), this.heldItemState.mH === this.MN.qE && (this.inInvenIdx = this.bloxd.SzC(this.MN.qE).getSelectedSlotIndex(), this.inUse = !0)
+       return cp
+     }
+ 
+     function Hi(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? ti(Object(cp), !0).forEach((function(ip) {
+           mi(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : ti(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L9993-L10018` → after: `L8806-L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8806-L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8806-L8812) · [Before (L9993-L10018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L9993-L10018)

```diff
-       ZN(CC, zC) {
-         if (super.ZN(CC, zC), this.heldItemState.mH === this.MN.qE && (this.inInvenIdx = this.bloxd.SzC(this.MN.qE).getSelectedSlotIndex(), this.inUse)) {
-           var ZC, QC;
-           let CC = null !== (ZC = this.MN.JR.SzC(this.MN.qE).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== ZC ? ZC : this.MN.pR.compassTarget;
-           if (!Array.isArray(CC)) {
-             if (!this.MN.JR.EzC(CC)) return;
-             CC = this.MN.JR.yG(CC)
-           }
-           const zC = this.MN.JR.oB(this.heldItemState.mH),
-             bC = [],
-             nC = null !== (QC = this.MN.ECC) && void 0 !== QC ? QC : this.MN.camera.yB();
-           this.MN.lB(zC, bC);
-           const fC = [];
-           wC().subtract(fC, CC, bC), wC().normalize(fC, fC);
-           let oC = ((0, WC.lb)(fC) - (0, WC.lb)(nC)) * (180 / Math.PI) - 15;
-           oC = oC < 0 ? 360 + oC : oC, this.dir = Math.abs(Math.round(oC / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
- ... (10 more removed lines; see GitHub link above)
+       return pp
+     }
+ 
+     function di(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Ri(Op.key), Op)
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10021-L10022` → after: `L8815-L8835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8815-L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8815-L8835) · [Before (L10021-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10021-L10022)

```diff
-     var Pz = ZC(37167),
-       Gz = ZC(184);
+ 
+     function ei(pp, ip, cp) {
+       return ip = ji(ip),
+         function(pp, ip) {
+           if (ip && ("object" === vi(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, ui() ? Reflect.construct(ip, cp || [], ji(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function ui() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+ ... (5 more added lines; see GitHub link above)
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10025` → after: `L8838-L8840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8838-L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8838-L8840) · [Before (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10025)

```diff
-       return void 0 !== CC && null !== CC && CC > 0 ? CC : void 0
+       return ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, ji(pp)
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10029` → after: `L8844-L8846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8844-L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8844-L8846) · [Before (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10029)

```diff
-       return zC ? CC.touchMs : CC.mouseMs
+       return ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, ki(pp, ip)
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10031-L10043` → after: `L8848-L8872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8848-L8872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8848-L8872) · [Before (L10031-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10031-L10043)

```diff
-     const xz = 1e3 / Gz.f.clientTicksPerSecond / 2,
-       Jz = 70;
-     class Iz {
-       constructor(CC) {
-         this.catchUpMs = CC, this.next = 0, this.restart = !0
-       }
-       arm(CC) {
-         this.next = CC, this.restart = !0
-       }
-       nextDue() {
-         return this.next
-       }
-       due(CC) {
+ 
+     function mi(pp, ip, cp) {
+       return (ip = Ri(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
+ 
+     function Ri(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != vi(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+ ... (9 more added lines; see GitHub link above)
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10045-L10067` → after: `L8874-L8875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8874-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8874-L8875) · [Before (L10045-L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10045-L10067)

```diff
-           return zC > CC - xz
-         }(this.next, CC)
-       }
-       fired(CC, zC, ZC) {
-         const QC = this.restart ? CC : function(CC, zC, ZC, QC, wC) {
-           return !wC || zC - CC > Math.max(ZC, QC) ? Math.max(CC, zC) : Math.max(CC, zC - (QC - xz))
-         }(this.next, CC, zC, this.catchUpMs, ZC);
-         return this.follow(QC, zC), QC
-       }
-       follow(CC, zC) {
-         this.next = CC + zC, this.restart = !1
-       }
-     }
-     var iz = ZC(4179),
-       vz = ZC(37821),
-       ez = ZC(37857),
- ... (7 more removed lines; see GitHub link above)
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), ei(this, ip, arguments)
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10069-L10076` → after: `L8877-L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8877-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L8877-L9011) · [Before (L10069-L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10069-L10076)

```diff
-       getOverrideBundleValue(CC) {
-         var zC;
-         if (this.yw !== this.MN.qE) return;
-         const ZC = null === (zC = (0, MC.e)().JR.SzC(this.yw)) || void 0 === zC ? void 0 : zC.getItemAtSelectedSlot();
-         if ((null === ZC || void 0 === ZC ? void 0 : ZC.name) === this.gunTypeObj.name) {
-           var QC;
-           const zC = null === (QC = ZC.attributes.customAttributes) || void 0 === QC ? void 0 : QC.gunStats;
-           if (!(0, dz.H)(null === zC || void 0 === zC ? void 0 : zC[CC])) return zC[CC]
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
+         }), ip && ki(pp, ip)
+       }(ip, pp), cp = ip, (op = [{
+         key: "render",
+         value: function() {
+           var pp = this.props,
+             cp = pp.x1,
+ ... (119 more added lines; see GitHub link above)
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10078-L10081` → after: `L9013-L9035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9013-L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9013-L9035) · [Before (L10078-L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10078-L10081)

```diff
-         const {
-           rootName: wC
-         } = (0, MC.c)().getMetaInfo(this.gunTypeObj.name), bC = (0, MC.c)().getItemStat(this.yw, wC, "gunStats");
-         return null === bC || void 0 === bC ? void 0 : bC[CC]
+         return op && op.length && (Ap = op.reduce((function(pp, ip) {
+           return (0, Cp.D)(ip) ? [Math.min(pp[0], ip), Math.max(pp[1], ip)] : pp
+         }), Ap)), Ap
+       },
+       Xi = cp(6357),
+       li = cp(5610),
+       Qi = cp(42),
+       Ji = new(cp.n(Qi)()),
+       Bi = "recharts.syncMouseEvents",
+       Ni = cp(5619);
+ 
+     function Ti(pp) {
+       return Ti = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+ ... (7 more added lines; see GitHub link above)
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10083-L10086` → after: `L9037-L9079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9037-L9079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9037-L9079) · [Before (L10083-L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10083-L10086)

```diff
-       getStat(CC) {
-         if (this.yw === this.MN.qE) {
-           const zC = this.getOverrideBundleValue(CC);
-           return null !== zC && void 0 !== zC ? zC : (0, MC.c)().getItemStat(this.yw, this.gunTypeObj.name, CC)
+     }
+ 
+     function bi(pp, ip, cp) {
+       return (ip = ai(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
+ 
+     function ai(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Ti(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+ ... (27 more added lines; see GitHub link above)
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10088-L10091` → after: `L9081-L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9081-L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9081-L9106) · [Before (L10088-L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10088-L10091)

```diff
-         return this.gunTypeObj[CC]
-       }
-       getTimings() {
-         return function(CC, zC) {
+       }, {
+         key: "focus",
+         value: function() {
+           this.spoofMouse()
+         }
+       }, {
+         key: "keyboardEvent",
+         value: function(pp) {
+           if (0 !== this.coordinateList.length) switch (pp.key) {
+             case "ArrowRight":
+               if ("horizontal" !== this.layout) return;
+               this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
+               break;
+             case "ArrowLeft":
+               if ("horizontal" !== this.layout) return;
+               this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse()
+ ... (10 more added lines; see GitHub link above)
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10093-L10109` → after: `L9108-L9121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9108-L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9108-L9121) · [Before (L10093-L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10093-L10109)

```diff
-           const wC = CC.msPerRound,
-             bC = Rz(zC.fireRate),
-             nC = void 0 === bC ? void 0 : 60 / bC * 1e3,
-             fC = null !== nC && void 0 !== nC ? nC : wC,
-             oC = Rz(zC.fireRateWithHeldTouch),
-             qC = void 0 === oC ? fC : 60 / oC * 1e3,
-             FC = Rz(zC.cadenceMs),
-             WC = null !== (ZC = null !== (QC = null !== FC && void 0 !== FC ? FC : nC) && void 0 !== QC ? QC : CC.cadenceMs) && void 0 !== ZC ? ZC : wC,
-             NC = void 0 !== (MC = zC.equipDelay) && null !== MC && MC >= 0 ? MC : void 0;
-           var MC;
-           const gC = zC => null !== NC && void 0 !== NC ? NC : zC || void 0 !== FC ? void 0 : CC.equipDelay;
-           return {
-             mouseMs: fC,
-             touchMs: qC,
-             cadenceMs: WC,
-             mouseEquipDelay: gC(void 0 !== bC),
- ... (1 more removed lines; see GitHub link above)
+           if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
+             var cp = this.container.getBoundingClientRect(),
+               Op = cp.x,
+               op = cp.y,
+               Ip = cp.height,
+               Sp = this.coordinateList[this.activeIndex].coordinate,
+               xp = (null === (pp = window) || void 0 === pp ? void 0 : pp.scrollX) || 0,
+               Lp = (null === (ip = window) || void 0 === ip ? void 0 : ip.scrollY) || 0,
+               Yp = Op + Sp + xp,
+               Dp = op + this.offset.top + Ip / 2 + Lp;
+             this.mouseHandlerCallback({
+               pageX: Yp,
+               pageY: Dp
+             })
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10452-L10456` → after: `L9124-L9145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9124-L9145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9124-L9145) · [Before (L10452-L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10452-L10456)

```diff
-         this.MN.Vg.tfC(this.mesh, !1);
-         const CC = this.getHeldItemAttachment();
-         if (!CC) {
-           const CC = this.liveThirdPersonThinObjectId();
-           return void(null !== CC && this.MN.Vg.nH.setVisibility(CC, !1))
+       }]) && fi(pp.prototype, ip), cp && fi(pp, cp), Object.defineProperty(pp, "prototype", {
+         writable: !1
+       }), pp;
+       var pp, ip, cp
+     }();
+     var Fi = cp(6425),
+       gi = cp(6493);
+ 
+     function Gi(pp) {
+       return Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Gi(pp)
+     }
+     var ri = ["x", "y", "top", "left", "width", "height", "className"];
+ ... (6 more added lines; see GitHub link above)
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10458-L10501` → after: `L9147-L9157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9147-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9147-L9157) · [Before (L10458-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10458-L10501)

```diff
-         const {
-           kind: zC,
-           heldItemPositionParams: ZC
-         } = CC;
-         this.buildThirdPersonPose(zC, ZC), this.ensureThirdPersonThinObject(CC), this.attachMuzzleEmitterToThinGun()
-       }
-       buildThirdPersonPose(CC, zC) {
-         var ZC, QC, wC;
-         if ("arm" === CC) return void(0, GC.d)(this.typeObj, zC.itemOffset, this.thirdPersonPose);
-         const {
-           position: bC,
-           rotation: nC,
-           sq: fC
-         } = this.thirdPersonPose;
-         this.thirdPersonPose.usesQuaternion = !1, fC.Av(jz);
-         const oC = zC.gunOffset,
- ... (28 more removed lines; see GitHub link above)
+         return pp
+       }, Zi.apply(this, arguments)
+     }
+ 
+     function zi(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10503-L10504` → after: `L9159-L9196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9159-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9159-L9196) · [Before (L10503-L10504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10503-L10504)

```diff
-       onThirdPersonThinObjectReady() {
-         this.attachMuzzleEmitterToThinGun()
+       return cp
+     }
+ 
+     function si(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Gi(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Gi(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Gi(ip) ? ip : ip + ""
+ ... (22 more added lines; see GitHub link above)
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10506-L10567` → after: `L9198-L9224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9198-L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9198-L9224) · [Before (L10506-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10506-L10567)

```diff
-       fireBulletLocal(CC) {
-         var zC;
-         if (console.assert(this.heldItemState.mH === this.MN.qE, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
-         if (0 === this.getShotsLeftCount()) return this.wasFiringLastTick || this.reload(CC), !1;
-         const ZC = this.MN.JR.SzC(this.MN.qE),
-           QC = ZC.getItemAtSelectedSlot(),
-           wC = (0, MC.c)().client.inventoryPrediction.predict(fz.c.shoot(ZC.getSelectedSlotIndex(), QC.name)),
-           bC = null !== (zC = this.gunStats.getStat("shotPelletCount")) && void 0 !== zC ? zC : 1;
-         this.spawnBulletCasing(), this.bulletsFired(CC);
-         const nC = [],
-           oC = [];
-         let qC, FC, gC = !1,
-           SC = !1;
-         const pC = this.getGunshotOrigin();
-         for (let fC = 0; fC < bC; fC++) {
-           var PC, GC, RC;
- ... (46 more removed lines; see GitHub link above)
+       return op
+     }
+     var Vi = function(pp, ip, cp, Op, op, Ip) {
+         return "M".concat(pp, ",").concat(op, "v").concat(Op, "M").concat(Ip, ",").concat(ip, "h").concat(cp)
+       },
+       pc = function(pp) {
+         var ip = pp.x,
+           cp = void 0 === ip ? 0 : ip,
+           op = pp.y,
+           Ip = void 0 === op ? 0 : op,
+           Sp = pp.top,
+           xp = void 0 === Sp ? 0 : Sp,
+           Lp = pp.left,
+           Yp = void 0 === Lp ? 0 : Lp,
+           Dp = pp.width,
+           Ap = void 0 === Dp ? 0 : Dp,
+ ... (11 more added lines; see GitHub link above)
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10569-L10818` → after: `L9226-L9253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9226-L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9226-L9253) · [Before (L10569-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10569-L10818)

```diff
-             of nC) {
-             if (null === QC) continue;
-             const ZC = this.MN.QE[this.MN.qE][QC];
-             if (!ZC) continue;
-             let nC;
-             nC = "LegLeft" === FC || "LegRight" === FC ? CC.dealingDamageLegMultiplier : "Head" === FC ? CC.dealingDamageHeadMultiplier : CC.dealingDamageDefaultMultiplier;
-             let MC = this.gunStats.getStat("damage") * nC;
-             MC = (0, WC.l)(MC, wC, bC, fC), "Head" === FC && oC > 0 && (MC *= 1 + .08 * oC);
-             const gC = Math.ceil(MC),
-               SC = (0, WC.L)(ZC._armourReductionSum, ZC._protectionEnchantSum, zC.getEffectLevel(QC, "Damage Reduction"), zC.getEffectLevel(QC, "Weakness"), ZC._receivingDamageMultiplier),
-               pC = Math.ceil(gC * SC * CC.dealingDamageMultiplier);
-             NC.o.bp("shotPlayer", {
-               playerId: QC,
-               damage: pC,
-               wasCrit: "Head" === FC,
-               distance: qC
- ... (234 more removed lines; see GitHub link above)
+             return pp
+           }({
+             x: cp,
+             y: Ip,
+             top: xp,
+             left: Yp,
+             width: Ap,
+             height: Wp
+           }, Ki(pp, ri));
+         return (0, Cp.D)(cp) && (0, Cp.D)(Ip) && (0, Cp.D)(Ap) && (0, Cp.D)(Wp) && (0, Cp.D)(xp) && (0, Cp.D)(Yp) ? Op.createElement("path", Zi({}, (0, mp.d)(Up, !0), {
+           className: (0, wp.d)("recharts-cross", yp),
+           d: Vi(cp, Ip, Ap, Wp, xp, Yp)
+         })) : null
+       };
+ 
+     function ic(pp) {
+ ... (12 more added lines; see GitHub link above)
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10821-L10910` → after: `L9256-L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9256-L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9256-L9271) · [Before (L10821-L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10821-L10910)

```diff
-     var Lz = ZC(38055),
-       Uz = ZC(38277),
-       Bz = ZC(37260);
-     class Oz extends mC {
-       constructor(CC, zC, ZC, QC, wC) {
-         super(CC, zC, ZC, QC, wC), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new Iz(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new p … [truncated]
-       }
-       fire(CC, zC) {
-         var ZC;
-         if (zC ? !this.schedule.due(CC) : CC < this.schedule.nextDue()) return {
-           tookAction: !1,
-           preventAttack: !1
-         };
-         const QC = this.getFireInterval();
-         zC ? this.schedule.fired(CC, QC, !0) : this.schedule.arm(CC + QC), NC.o.bp("middleScreenBarInitiate", {
-           duration: QC,
- ... (74 more removed lines; see GitHub link above)
+     var cc = cp(6448);
+ 
+     function Oc(pp, ip, cp) {
+       var Op, op, Ip, Sp;
+       if ("horizontal" === pp) Ip = Op = ip.x, op = cp.top, Sp = cp.top + cp.height;
+       else if ("vertical" === pp) Sp = op = ip.y, Op = cp.left, Ip = cp.left + cp.width;
+       else if (null != ip.cx && null != ip.cy) {
+         if ("centric" !== pp) return ic(ip);
+         var xp = ip.cx,
+           Lp = ip.cy,
+           Yp = ip.innerRadius,
+           Dp = ip.outerRadius,
+           Ap = ip.angle,
+           Pp = (0, Xi.i)(xp, Lp, Yp, Ap),
+           Wp = (0, Xi.i)(xp, Lp, Dp, Ap);
+         Op = Pp.x, op = Pp.y, Ip = Wp.x, Sp = Wp.y
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10912-L10914` → after: `L9273-L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9273-L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9273-L9296) · [Before (L10912-L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10912-L10914)

```diff
-       renderTickLocalPlayer(CC, zC) {
-         const ZC = Math.pow(2 * Math.pow(this.getReadyToFireFrac(zC), 7 / 16) - 1, 2);
-         this.firstPersonPosOffset = pC.Eg.Lerp(this.firingOffset, this.readyOffset, ZC), super.renderTickLocalPlayer(CC, zC)
+       return [{
+         x: Op,
+         y: op
+       }, {
+         x: Ip,
+         y: Sp
+       }]
+     }
+ 
+     function oc(pp) {
+       return oc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, oc(pp)
+     }
+ ... (8 more added lines; see GitHub link above)
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10916-L10917` → after: `L9298-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9298-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9298-L9308) · [Before (L10916-L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10916-L10917)

```diff
-       getReadyToFireFrac(CC) {
-         return this.getFireInterval() ? 1 - Math.min(1, Math.max(0, (this.schedule.nextDue() - CC) / this.fireInterval)) : 1
+       return cp
+     }
+ 
+     function Sc(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ic(Object(cp), !0).forEach((function(ip) {
+           xc(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ic(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10922-L10925` → after: `L9313-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9313-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9313-L9384) · [Before (L10922-L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10922-L10925)

```diff
-     function Vz() {
-       const CC = (0, MC.e)(),
-         zC = CC.JR.lzC(CC.qE);
-       (0, MC.c)().updateHeldVehicleStatus(), bZ(CC, zC)
+     function xc(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != oc(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != oc(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == oc(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (56 more added lines; see GitHub link above)
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10927-L10929` → after: `L9386-L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9386-L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9386-L9388) · [Before (L10927-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10927-L10929)

```diff
-     const CZ = new Set(["press to get", "press to tp", "press to lobby", "press to buy", "press to sell", "press to execute", "press to message", "press to mode", "press to damage", "press to code", "press to equip"]),
-       zZ = ["TwoDItem", "TwoDTool", "TwoDArmour", "GrayscaleTwoDArmour"],
-       ZZ = .6;
+     var Yc = cp(6470),
+       Dc = ["item"],
+       Ac = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10932` → after: `L9391-L9395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9391-L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9391-L9395) · [Before (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10932)

```diff
-       return Math.cos(CC / 2 * (Math.PI / 180))
+       return Pc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Pc(pp)
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10935-L10988` → after: `L9398-L9402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9398-L9402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9398-L9402) · [Before (L10935-L10988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10935-L10988)

```diff
-     function wZ(CC) {
-       return NC.o.subscribe("updatedInventory", (() => {
-         Vz()
-       })), {
-         name: "Hx",
-         order: 1001,
-         state: {
-           Hx: null,
-           fistItem: null,
-           swingDuration: 200,
-           heldItemName: null,
-           heldType: null,
-           heldItemEnchantmentTier: null,
-           networkedHeldItemName: null,
-           networkedHeldItemEnchantmentTier: null,
-           _visible: !0,
- ... (38 more removed lines; see GitHub link above)
+     function Wc() {
+       return Wc = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10990` → after: `L9404-L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9404-L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9404-L9405) · [Before (L10990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10990)

```diff
-       }
+         return pp
+       }, Wc.apply(this, arguments)
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10994-L11038` → after: `L9409-L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9409-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9409-L9429) · [Before (L10994-L11038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L10994-L11038)

```diff
-       var ZC, QC, fC, oC, qC, FC, MC, gC;
-       let SC, pC = null;
-       const PC = CC.JR.EzC(zC.mH),
-         GC = CC.JR.PzC(zC.mH),
-         RC = PC.isAlive && PC.isLifeformMeshEnabled;
-       if (RC)
-         if (GC) {
-           var AC, xC, JC;
-           const ZC = CC.JR.gzC(zC.mH).selectedItem;
-           SC = null === ZC || void 0 === ZC ? void 0 : ZC.typeObj, pC = null !== (AC = null === ZC || void 0 === ZC || null === (xC = ZC.attributes) || void 0 === xC || null === (JC = xC.customAttributes) || void 0 === JC ? void 0 : JC.enchantmentTier) && void 0 !== AC ? AC : nul … [truncated]
-         } else zC.networkedHeldItemName && (SC = bC.x[zC.networkedHeldItemName], pC = zC.networkedHeldItemEnchantmentTier);
-       else SC = void 0;
-       const IC = GC && CC.JR.SzC(zC.mH).getSelectedSlotIndex() !== zC._lastInvenIdx,
-         iC = zC.heldItemEnchantmentTier !== pC;
-       var vC, eC, hC, KC, YC, dC, mC;
-       (((null === (ZC = SC) || void 0 === ZC ? void 0 : ZC.name) || null) !== zC.heldItemName || IC || iC) && (zC.Hx !== zC.fistItem && ((null === (vC = SC) || void 0 === vC ? void 0 : vC.meta.rootId) !== CC.bloxd.getMetaInfo(zC.heldItemName).rootId || IC || iC) && zC.Hx.reset(), … [truncated]
- ... (29 more removed lines; see GitHub link above)
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
+ ... (5 more added lines; see GitHub link above)
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11040-L11047` → after: `L9431-L9432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9431-L9432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9431-L9432) · [Before (L11040-L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11040-L11047)

```diff
-           }(zC.mH, SC) : null;
-         if (NC ? (CC.Vg.KfC = null !== qC && void 0 !== qC ? qC : NC.range, CC.Vg.efC = null !== FC ? QZ(FC) : NC.coneCos) : (CC.Vg.KfC = null !== qC && void 0 !== qC ? qC : 0, CC.Vg.efC = 0), oC) wC().scale(ZC, (0, WC.N)(oC), 15);
-         else if (NC) wC().copy(ZC, NC.colour);
-         else {
-           const {
-             hfC: zC
-           } = CC.Vg;
-           lC ? wC().max(ZC, lC, zC) : wC().copy(ZC, zC)
+           }
+           return xp
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11049` → after: `L9434-L9436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9434-L9436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9434-L9436) · [Before (L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11049)

```diff
-       }
+       }(pp, ip) || uc(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11053-L11059` → after: `L9439-L9452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9439-L9452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9439-L9452) · [Before (L11053-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11053-L11059)

```diff
-     function fZ(CC) {
-       if (!CC || void 0 === CC.spotlightRange || !CC.ig) return null;
-       const zC = void 0 !== CC.spotlightConeAngle ? QZ(CC.spotlightConeAngle) : ZZ;
-       return {
-         colour: CC.ig,
-         range: CC.spotlightRange,
-         coneCos: zC
+     function Uc(pp, ip) {
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

#### 362. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11090` → after: `L9457-L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9457-L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9457-L9462) · [Before (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11090)

```diff
-     function iC() {}
+     function wc(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, qc(Op.key), Op)
+       }
+     }
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11092-L11642` → after: `L9464-L9473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9464-L9473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9464-L9473) · [Before (L11092-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11092-L11642)

```diff
-     function vC() {
-       vC = function() {}
-     }
-     JC = (...CC) => {
-       CC[IC[0]] = 4, "scpiW1T" in iC && function(...CC) {
-         vC(CC[IC[0]] = IC[1], CC[IC[3]] = function(CC) {
-           var zC, ZC, QC, wC, bC = CC.length;
-           for (vC(zC = [], ZC = IC[1], QC = IC[1], CC.sort(((CC, zC) => CC - zC))), wC = IC[1]; wC < bC; wC++)
-             if (!(wC > IC[1] && CC[wC] === CC[wC - IC[2]]))
-               for (vC(ZC = wC + IC[2], QC = bC - IC[2]); ZC < QC;)
-                 if (CC[wC] + CC[ZC] + CC[QC] < IC[1]) ZC++;
-                 else if (CC[wC] + CC[ZC] + CC[QC] > IC[1]) QC--;
-           else {
-             for (zC.push([CC[wC], CC[ZC], CC[QC]]); ZC < QC && CC[ZC] === CC[ZC + IC[2]];) ZC++;
-             for (; ZC < QC && CC[QC] === CC[QC - IC[2]];) QC--;
-             vC(ZC++, QC--)
- ... (535 more removed lines; see GitHub link above)
+     function vc(pp, ip, cp) {
+       return ip = Hc(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Pc(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, tc() ? Reflect.construct(ip, cp || [], Hc(pp).constructor) : ip.apply(pp, cp))
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11657-L11663` → after: `L9477-L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9477-L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9477-L9482) · [Before (L11657-L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11657-L11663)

```diff
-       return {
-         position: new QC.Eg,
-         rotation: new QC.Eg,
-         sq: new QC.Eg,
-         quaternion: new QC.Quaternion,
-         usesQuaternion: !1
-       }
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (tc = function() {
+         return !!pp
+       })()
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11672-L11673` → after: `L9485-L9488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9485-L9488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9485-L9488) · [Before (L11672-L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11672-L11673)

```diff
-     function MC(CC, zC, ZC) {
-       return QC.Matrix.RotationYawPitchRollToRef(CC.y, CC.x, CC.z, FC), QC.Matrix.RotationYawPitchRollToRef(zC[1], zC[0], zC[2], WC), wC.e.matMulToRef(WC, FC, NC), QC.Quaternion.FromRotationMatrixToRef(NC, ZC)
+     function Hc(pp) {
+       return Hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Hc(pp)
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11677-L11866` → after: `L9492-L9494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9492-L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9492-L9494) · [Before (L11677-L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11677-L11866)

```diff
-       const ZC = CC.thirdPersonHeldRotationOffset;
-       ZC && (MC(zC.rotation, ZC, zC.quaternion), zC.usesQuaternion = !0)
-     }
- 
-     function SC(CC, zC, ZC) {
-       const {
-         position: QC,
-         rotation: wC,
-         sq: nC
-       } = ZC;
-       if (ZC.usesQuaternion = !1, "Gun" === CC.type) return QC.Av(fC), wC.Av(oC), void nC.Av(qC);
-       const [FC, WC, NC] = null !== zC && void 0 !== zC ? zC : [0, 0, 0], MC = (0, bC.b)(CC.type), SC = MC ? 2.25 : 1.35, pC = MC ? 0 : .08;
-       if ("TwoDTool" === CC.type || CC.holdAsAiming) QC.L_(FC, -.48 + WC, .24 + NC + pC), nC.L_(.19 * SC, -.19 * SC, .19 * SC), CC.holdAsAiming ? wC.L_(.4 + Math.PI, 1.25, Math.PI / 2) : wC.L_(Math.PI, Math.PI / 2, .35 * Math.PI);
-       else {
-         QC.L_(FC, -.72 + WC, .18 + NC + pC);
-         const CC = .168 * SC;
- ... (174 more removed lines; see GitHub link above)
+       return dc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, dc(pp, ip)
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11870-L11898` → after: `L9498-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9498-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9498-L9504) · [Before (L11870-L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11870-L11898)

```diff
-       return {
-         name: "meshAttachments",
-         order: 100,
-         stateConstructor: iC,
-         xR: function(zC, ZC) {
-           ZC.zIndexSub = fC.o.subscribe(`otherEntitySettingsClientifiedEId|${zC}|zIndex`, (zC => {
-             for (const QC of ZC.attachments) null !== QC.WH && CC.Vg.nH.setRenderingGroupId(QC.WH, zC)
-           }))
-         },
-         lY: function(zC, ZC) {
-           fC.o.unsubscribe(ZC.zIndexSub);
-           const QC = CC.Vg.nH;
-           for (const CC of ZC.attachments)
-             if (null !== CC.WH && QC.has(CC.WH)) try {
-               QC.delete(CC.WH)
-             } catch (wC) {
- ... (13 more removed lines; see GitHub link above)
+       return function(pp) {
+         if (Array.isArray(pp)) return jc(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || uc(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11902-L11903` → after: `L9508-L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9508-L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9508-L9512) · [Before (L11902-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11902-L11903)

```diff
-       const ZC = CC.JR.getState(zC, CC.JR.names.meshAttachments);
-       ZC && dC(CC, ZC)
+       if (pp) {
+         if ("string" === typeof pp) return jc(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? jc(pp, ip) : void 0
+       }
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11907-L11926` → after: `L9516-L9518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9516-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9516-L9518) · [Before (L11907-L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11907-L11926)

```diff
-       const ZC = CC.Vg.nH,
-         QC = CC.nCC / 1e3;
-       for (const wC of zC.animatedAttachments) wC.clipPose.write(ZC, wC.WH, QC)
-     }
- 
-     function mC(CC, zC, ZC) {
-       const QC = CC.JR.getState(zC, CC.JR.names.meshAttachments);
-       if (QC)
-         for (const wC of QC.attachments)
-           if (wC.WH === ZC) return !0;
-       return !1
-     }
- 
-     function HC(CC, zC, ZC) {
-       var QC;
-       return lC(CC, zC, null !== (QC = ZC.attachments) && void 0 !== QC ? QC : [])
- ... (4 more removed lines; see GitHub link above)
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11929-L11964` → after: `L9521-L9527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9521-L9527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9521-L9527) · [Before (L11929-L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11929-L11964)

```diff
-     function lC(CC, zC, ZC) {
-       let QC = !1;
-       if ((0, bC.H)(CC)) return console.error("Cannot update mesh attachments for invalid eId", CC), QC;
-       const fC = (0, wC.e)(),
-         oC = fC.JR.fzC(CC);
-       if (!oC) return console.error(`Cannot update mesh attachments for entity ${CC} as it has no mesh`), QC;
-       const {
-         WH: qC
-       } = oC;
-       if (null === qC) return console.error(`Cannot update mesh attachments for entity ${CC} as it has no thinObjectId`), QC;
-       const WC = fC.JR.getState(CC, fC.JR.names.meshAttachments);
-       if (!WC) return console.error(`Cannot update mesh attachments for entity ${CC} as it has no meshAttachments component`), QC;
-       for (const wC of WC.attachments)(0, nC.qb)(wC.owners, zC);
-       ZC.length && (QC ||= function(CC, zC, ZC, QC, wC) {
-         let bC = !1;
-         for (const nC of wC) {
- ... (20 more removed lines; see GitHub link above)
+     function kc(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11970-L11975` → after: `L9533-L9541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9533-L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9533-L9541) · [Before (L11970-L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11970-L11975)

```diff
-       var zC;
-       const ZC = (0, wC.e)(),
-         QC = ZC.JR.getState(CC, ZC.JR.names.meshAttachments);
-       if (!QC) return;
-       const nC = null === (zC = ZC.JR.fzC(CC)) || void 0 === zC ? void 0 : zC.WH;
-       (0, bC.H)(nC) || FC(ZC.Vg.nH, nC, QC.attachments)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? kc(Object(cp), !0).forEach((function(ip) {
+           Rc(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : kc(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L11979-L12009` → after: `L9545-L9550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9545-L9550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9545-L9550) · [Before (L11979-L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L11979-L12009)

```diff
-       if (null === zC) return;
-       const QC = CC.Vg.nH;
-       if (ZC) {
-         const [CC, wC, bC] = ZC;
-         QC.set(zC, "aHueColour", CC / 255, wC / 255, bC / 255, 1)
-       } else QC.set(zC, "aHueColour", 0, 0, 0, 0)
-     }
-   },
-   37477: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       MeshRotationState: () => gC,
-       default: () => SC,
-       getCaughtUpMeshRotation: () => GC,
-       getRemoteTargetHeading: () => PC,
-       remoteVehicleYawRatePerMs: () => MC
-     });
- ... (15 more removed lines; see GitHub link above)
+       return (ip = qc(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12013-L12046` → after: `L9554-L9560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9554-L9560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9554-L9560) · [Before (L12013-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12013-L12046)

```diff
-       return {
-         name: "meshRotation",
-         order: 95,
-         stateConstructor: gC,
-         xR: function(CC, zC) {
-           zC.childrenNodeParams.push({
-             nodeName: "__root__",
-             softTolerance: 0,
-             hardTolerance: null,
-             rotationsPerSecond: zC.defaultRotationsPerSecond
-           }), zC.renderRotation = [0, 0, 0], zC.serverSetRotation = [0, 0, 0], zC.baseRenderRotation = [0, 0, 0]
-         },
-         lY: null,
-         vR: function(zC, ZC) {
-           for (const bC of ZC) {
-             var QC, wC;
- ... (18 more removed lines; see GitHub link above)
+       var ip = function(pp, ip) {
+         if ("object" != Pc(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Pc(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12048-L12052` → after: `L9562-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9562-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9562-L9564) · [Before (L12048-L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12048-L12052)

```diff
-       }
-     }
- 
-     function pC(CC, zC) {
-       zC.kR && null !== zC._thinObjectId && CC.Vg.nH.has(zC._thinObjectId) && RC(CC, zC)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Pc(ip) ? ip : ip + ""
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12055-L12057` → after: `L9579-L9580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9579-L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9579-L9580) · [Before (L12055-L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12055-L12057)

```diff
-     function PC(CC, zC) {
-       const ZC = zC.isServerControlled ? zC.serverSetRotation[1] : CC.JR.MzC(zC.mH).heading;
-       return zC.baseRenderRotation[1] + ZC
+     function Xc(pp) {
+       return pp
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12060-L12309` → after: `L9593-L9658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9593-L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9593-L9658) · [Before (L12060-L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12060-L12309)

```diff
-     function GC(CC, zC) {
-       const ZC = CC.JR.getState(zC, "meshRotation");
-       return ZC && pC(CC, ZC), ZC
-     }
- 
-     function RC(CC, zC) {
-       var ZC, QC, oC, WC, gC, SC, pC;
-       zC.kR = !1;
-       const PC = CC.JR.yCC(CC.qE),
-         GC = CC.JR.BzC(zC.mH),
-         RC = zC.mH === CC.qE,
-         AC = (0, NC.b)(CC, zC.mH, GC),
-         xC = CC.JR.MzC(CC.qE),
-         JC = CC.JR.MzC(zC.mH),
-         vC = qC().copy(IC, zC.baseRenderRotation);
-       if (AC) {
- ... (234 more removed lines; see GitHub link above)
+     function Qc(pp) {
+       return "number" === pp ? [0, "auto"] : void 0
+     }
+     var Jc = function(pp, ip, cp, Op) {
+         var op = pp.graphicalItems,
+           Ip = pp.tooltipAxis,
+           Sp = lc(ip, pp);
+         return cp < 0 || !op || !op.length || cp >= Sp.length ? null : op.reduce((function(op, xp) {
+           var Lp, Yp, Dp = null !== (Lp = xp.props.data) && void 0 !== Lp ? Lp : ip;
+           if (Dp && pp.dataStartIndex + pp.dataEndIndex !== 0 && pp.dataEndIndex - pp.dataStartIndex >= cp && (Dp = Dp.slice(pp.dataStartIndex, pp.dataEndIndex + 1)), Ip.dataKey && !Ip.allowDuplicatedCategory) {
+             var Ap = void 0 === Dp ? Sp : Dp;
+             Yp = (0, Cp.h)(Ap, Ip.dataKey, Op)
+           } else Yp = Dp && Dp[cp] || Sp[cp];
+           return Yp ? [].concat(ec(op), [(0, Mp.cb)(xp, Yp)]) : op
+         }), [])
+       },
+ ... (50 more added lines; see GitHub link above)
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12340-L12444` → after: `L9661-L9699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9661-L9699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9661-L9699) · [Before (L12340-L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12340-L12444)

```diff
-         zC(114) in JC && eC(), IC(CC[AC[21]][AC[79]] = fC()[zC(AC[83])](CC[AC[41]][AC[58]]), fC()[vC(116)](CC[AC[21]][AC[74]], CC[AC[41]][AC[58]]))
-       } else {
-         function hC(...CC) {
-           for (IC(CC[AC[12]] = AC[2], CC[AC[22]] = 'Ya1_0L)~AvmP,WK]uhgxVjGp[si^(ERF=%bHXdl?`Bq{Tn>2/cQJe|o9!M#I7fND6C+*.3w5zy:U$}tkS&4r@O<Z;8"', CC[AC[14]] = "" + (CC[AC[1]] || ""), CC[AC[4]] = CC[AC[14]].length, CC[AC[60]] = [], CC[AC[41]] = AC[1], CC[AC[16]] = AC[1], CC[AC[40] … [truncated]
-             if (CC[AC[32]] = CC[AC[22]].indexOf(CC[AC[14]][CC[-AC[59]]]), CC[AC[32]] !== -AC[2])
-               if (CC[AC[40]] < AC[1]) CC[AC[40]] = CC[AC[32]];
-               else {
-                 IC(CC[AC[40]] += CC[AC[32]] * AC[34], CC[AC[41]] |= CC[AC[40]] << CC[AC[16]], CC[AC[16]] += (CC[AC[40]] & AC[35]) > AC[36] ? AC[37] : AC[38]);
-                 do {
-                   IC(CC[AC[60]].push(CC[AC[41]] & AC[11]), CC[AC[41]] >>= AC[3], CC[AC[16]] -= AC[3])
-                 } while (CC[AC[16]] > AC[25]);
-                 CC[AC[40]] = -AC[2]
-               } return CC[AC[40]] > -AC[2] && CC[AC[60]].push((CC[AC[41]] | CC[AC[40]] << CC[AC[16]]) & AC[11]), xC(CC[AC[60]])
-         }
- 
-         function KC(...CC) {
- ... (89 more removed lines; see GitHub link above)
+         return null
+       },
+       Nc = function(pp, ip) {
+         var cp = ip.axes,
+           Op = ip.graphicalItems,
+           op = ip.axisType,
+           Sp = ip.axisIdKey,
+           xp = ip.stackGroups,
+           Lp = ip.dataStartIndex,
+           Dp = ip.dataEndIndex,
+           Ap = pp.layout,
+           Pp = pp.children,
+           Wp = pp.stackOffset,
+           yp = (0, Mp.hb)(Ap, op);
+         return cp.reduce((function(ip, cp) {
+           var Up, wp = void 0 !== cp.type.defaultProps ? mc(mc({}, cp.type.defaultProps), cp.props) : cp.props,
+ ... (23 more added lines; see GitHub link above)
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12446-L12448` → after: `L9701-L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9701-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9701-L9735) · [Before (L12446-L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12446-L12448)

```diff
- 
-             function EC(...CC) {
-               return CC[AC[12]] = AC[2], typeof GC[CC[AC[1]]] === AC[17] ? GC[CC[AC[1]]] = HC(RC[CC[AC[1]]]) : GC[CC[AC[1]]]
+             return !1
+           })(wp.domain, Hp, vp) && (Rp = (0, Mp.tb)(wp.domain, null, Hp), !yp || "number" !== vp && "auto" === ep || (Ep = (0, Mp.M)(Xp, tp, "category")));
+           var Qp = Qc(vp);
+           if (!Rp || 0 === Rp.length) {
+             var Jp, Bp = null !== (Jp = wp.domain) && void 0 !== Jp ? Jp : Qp;
+             if (tp) {
+               if (Rp = (0, Mp.M)(Xp, tp, vp), "category" === vp && yp) {
+                 var Np = (0, Cp.t)(Rp);
+                 dp && Np ? (qp = Rp, Rp = Yp()(0, lp)) : dp || (Rp = (0, Mp.lb)(Bp, Rp, cp).reduce((function(pp, ip) {
+                   return pp.indexOf(ip) >= 0 ? pp : [].concat(ec(pp), [ip])
+                 }), []))
+               } else if ("category" === vp) Rp = dp ? Rp.filter((function(pp) {
+                 return "" !== pp && !Ip()(pp)
+               })) : (0, Mp.lb)(Bp, Rp, cp).reduce((function(pp, ip) {
+                 return pp.indexOf(ip) >= 0 || "" === ip || Ip()(ip) ? pp : [].concat(ec(pp), [ip])
+               }), []);
+ ... (19 more added lines; see GitHub link above)
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12453-L12469` → after: `L9829-L9842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9829-L9842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9829-L9842) · [Before (L12453-L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12453-L12469)

```diff
-       }
-       if (CC[AC[22]] = AC[2], CC[AC[21]][AC[79]] > AC[1]) {
-         function lC(...CC) {
-           for (IC(CC[AC[12]] = AC[2], CC[AC[2]] = 'vOAPpBtCDXETgrh=j@z)FL5#Vb&nq+lU!9cdS%}?/su0M{Q_wR<2e`Zx]|;WN("f*7a1y3:4Y[G$HKmI>~,68J^k.oi', CC[AC[15]] = "" + (CC[AC[1]] || ""), CC[AC[82]] = CC[AC[15]].length, CC[AC[20]] = [], CC[-AC[81]] = AC[1], CC[AC[16]] = AC[1], CC[AC[34 … [truncated]
-             if (CC[AC[28]] = CC[AC[2]].indexOf(CC[AC[15]][CC[AC[56]]]), CC[AC[28]] !== -AC[2])
-               if (CC[AC[34]] < AC[1]) CC[AC[34]] = CC[AC[28]];
-               else {
-                 IC(CC[AC[34]] += CC[AC[28]] * AC[34], CC[-AC[81]] |= CC[AC[34]] << CC[AC[16]], CC[AC[16]] += (CC[AC[34]] & AC[35]) > AC[36] ? AC[37] : AC[38]);
-                 do {
-                   IC(CC[AC[20]].push(CC[-AC[81]] & AC[11]), CC[-AC[81]] >>= AC[3], CC[AC[16]] -= AC[3])
-                 } while (CC[AC[16]] > AC[25]);
-                 CC[AC[34]] = -AC[2]
-               } return CC[AC[34]] > -AC[2] && CC[AC[20]].push((CC[-AC[81]] | CC[AC[34]] << CC[AC[16]]) & AC[11]), xC(CC[AC[20]])
-         }
- 
-         function XC(...CC) {
- ... (1 more removed lines; see GitHub link above)
+       },
+       bc = function(pp) {
+         return "horizontal" === pp ? {
+           numericAxisName: "yAxis",
+           cateAxisName: "xAxis"
+         } : "vertical" === pp ? {
+           numericAxisName: "xAxis",
+           cateAxisName: "yAxis"
+         } : "centric" === pp ? {
+           numericAxisName: "radiusAxis",
+           cateAxisName: "angleAxis"
+         } : {
+           numericAxisName: "angleAxis",
+           cateAxisName: "radiusAxis"
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12471-L12505` → after: `L9844-L9925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR9844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L9844-L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L9844-L9925) · [Before (L12471-L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12471-L12505)

```diff
-         CC[AC[10]][XC(129) + XC(AC[95])] < AC[1] && (CC[AC[22]] = AC[21]), CC[AC[21]][AC[79]] -= ZC[XC(131) + XC(132) + XC(133) + XC(134)]
-       }
-       const QC = ZC[zC(AC[39]) + AC[84]] + CC[AC[21]][zC(136)];
-       IC(CC[AC[46]] = fC()[zC(AC[83])](CC[AC[21]][AC[74]]) + CC[AC[10]][zC(AC[85]) + zC(138)] * QC * ZC[zC(139)] * CC[AC[22]], CC[AC[46]] = gC[AC[4]][zC(140)](CC[AC[46]], ZC[zC(141) + AC[84]], QC), CC[AC[21]][zC(AC[86])]++);
-       const bC = CC[AC[25]] / 1e3,
-         nC = SC;
-       if (IC(fC()[zC(143)](nC, CC[AC[10]][zC(AC[85]) + zC(144) + zC(145)]), fC()[zC(AC[90]) + zC(AC[66])](nC, nC), fC()[zC(AC[89])](nC, nC, CC[AC[46]]), CC[AC[4]] = AC[2]), CC[AC[21]][zC(AC[86])] < ZC[zC(AC[91]) + zC(AC[92]) + zC(AC[93])]) {
-         function cC(...CC) {
-           for (IC(CC[AC[12]] = AC[2], CC[AC[2]] = 'zRZT5".+W#D=KeL3VGy([rx&J7{XApjw~v6fUNco/>a}d`lk%_<Q!?2^1$SM]P9F;tmu:4|EbI8H,niYsOB0@)h*qCg', CC[AC[15]] = "" + (CC[AC[1]] || ""), CC[AC[21]] = CC[AC[15]].length, CC[AC[20]] = [], CC[AC[41]] = AC[1], CC[AC[9]] = AC[1], CC[AC[68]] … [truncated]
-             if (CC[AC[6]] = CC[AC[2]].indexOf(CC[AC[15]][CC[AC[3]]]), CC[AC[6]] !== -AC[2])
-               if (CC[AC[68]] < AC[1]) CC[AC[68]] = CC[AC[6]];
-               else {
-                 IC(CC[AC[68]] += CC[AC[6]] * AC[34], CC[AC[41]] |= CC[AC[68]] << CC[AC[9]], CC[AC[9]] += (CC[AC[68]] & AC[35]) > AC[36] ? AC[37] : AC[38]);
-                 do {
-                   IC(CC[AC[20]].push(CC[AC[41]] & AC[11]), CC[AC[41]] >>= AC[3], CC[AC[9]] -= AC[3])
-                 } while (CC[AC[9]] > AC[25]);
- ... (19 more removed lines; see GitHub link above)
+       },
+       hc = function(pp, ip) {
+         return "xAxis" === ip ? pp[ip].width : "yAxis" === ip ? pp[ip].height : void 0
+       },
+       ac = function(pp) {
+         var ip = pp.chartName,
+           cp = pp.GraphicalChild,
+           op = pp.defaultTooltipEventType,
+           Sp = void 0 === op ? "axis" : op,
+           Lp = pp.validateTooltipEventTypes,
+           Yp = void 0 === Lp ? ["axis"] : Lp,
+           Dp = pp.axisComponents,
+           Pp = pp.legendContent,
+           yp = pp.formatAxisMap,
+           Rp = pp.defaultProps,
+           qp = function(pp, ip) {
+ ... (66 more added lines; see GitHub link above)
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12508-L12519` → after: `L10548-L10572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10548-L10572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10548-L10572) · [Before (L12508-L12519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12508-L12519)

```diff
-             static generate(...CC) {
-               CC[AC[12]] = AC[2];
-               const ZC = zC(65537);
-               let QC, wC;
-               CC[AC[22]] = AC[18];
-               do {
-                 IC(QC = this.randomPrime(CC[AC[1]] / AC[14]), wC = this.randomPrime(CC[AC[1]] / AC[14]), CC[AC[22]] = zC.lcm(QC.prev(), wC.prev()))
-               } while (zC.gcd(ZC, CC[AC[22]]).notEquals(AC[2]) || QC.minus(wC).abs().shiftRight(CC[AC[1]] / AC[14] - 100).isZero());
-               return {
-                 e: ZC,
-                 n: QC.multiply(wC),
-                 d: ZC.modInv(CC[AC[22]])
+             return function(pp, ip) {
+               if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+               pp.prototype = Object.create(ip && ip.prototype, {
+                 constructor: {
+                   value: pp,
+                   writable: !0,
+                   configurable: !0
+                 }
+               }), Object.defineProperty(pp, "prototype", {
+                 writable: !1
+               }), ip && dc(pp, ip)
+             }(cp, pp), op = cp, Lp = [{
+               key: "componentDidMount",
+               value: function() {
+                 var pp, ip;
+                 this.addListener(), this.accessibilityManager.setDetails({
+ ... (9 more added lines; see GitHub link above)
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12521-L12539` → after: `L10574-L10610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10574-L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10574-L10610) · [Before (L12521-L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12521-L12539)

```diff
-             }
-             static encrypt(...CC) {
-               return CC[AC[12]] = AC[21], zC(CC[AC[1]]).modPow(CC[AC[14]], CC[AC[2]])
-             }
-             static decrypt(...CC) {
-               return CC[AC[12]] = AC[21], zC(CC[AC[1]]).modPow(CC[AC[2]], CC[AC[14]])
-             }
-             static encode(...CC) {
-               CC[AC[12]] = AC[2];
-               const ZC = CC[AC[1]].split("").map((CC => CC.charCodeAt())).join("");
-               return zC(ZC)
-             }
-             static decode(...CC) {
-               CC[AC[12]] = AC[2];
-               const zC = CC[AC[1]].toString();
-               CC[-AC[88]] = "";
- ... (3 more removed lines; see GitHub link above)
+             }, {
+               key: "displayDefaultTooltip",
+               value: function() {
+                 var pp = this.props,
+                   ip = pp.children,
+                   cp = pp.data,
+                   Op = pp.height,
+                   op = pp.layout,
+                   Ip = (0, mp.i)(ip, dp.d);
+                 if (Ip) {
+                   var Sp = Ip.props.defaultIndex;
+                   if (!("number" !== typeof Sp || Sp < 0 || Sp > this.state.tooltipTicks.length - 1)) {
+                     var xp = this.state.tooltipTicks[Sp] && this.state.tooltipTicks[Sp].value,
+                       Lp = Jc(this.state, cp, Sp, xp),
+                       Yp = this.state.tooltipTicks[Sp].coordinate,
+                       Dp = (this.state.offset.top + Op) / 2,
+ ... (21 more added lines; see GitHub link above)
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12541-L12765` → after: `L10612-L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10612-L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10612-L10625) · [Before (L12541-L12765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12541-L12765)

```diff
-               return CC[-AC[88]]
-             }
-           }, module.exports = CC[AC[22]])
-         }
-         if (zC(AC[31]) + "v" in JC && rC(), CC[AC[4]] = MC[AC[15]][uC(AC[61]) + uC(154)](CC[AC[21]][uC(AC[33])] / wC[AC[16]][uC(156) + uC(157) + uC(158) + "nd"]), CC[AC[4]] > .8) {
-           function sC(...CC) {
-             for (IC(CC[AC[12]] = AC[2], CC[AC[22]] = '7{1~_?@*)5u|+!:#.v0UDG[sO}fPHz]8b&rQ>SdNqcnjXt<A/BYK4hERTFZw9iJ^gaIC`opLWVm6M;el(3yk2"$x=%,', CC[AC[14]] = "" + (CC[AC[1]] || ""), CC[AC[4]] = CC[AC[14]].length, CC[AC[10]] = [], CC[AC[8]] = AC[1], CC[AC[16]] = AC[1], CC[AC[25 … [truncated]
-               if (CC[AC[6]] = CC[AC[22]].indexOf(CC[AC[14]][CC[AC[56]]]), CC[AC[6]] !== -AC[2])
-                 if (CC[AC[25]] < AC[1]) CC[AC[25]] = CC[AC[6]];
-                 else {
-                   IC(CC[AC[25]] += CC[AC[6]] * AC[34], CC[AC[8]] |= CC[AC[25]] << CC[AC[16]], CC[AC[16]] += (CC[AC[25]] & AC[35]) > AC[36] ? AC[37] : AC[38]);
-                   do {
-                     IC(CC[AC[10]].push(CC[AC[8]] & AC[11]), CC[AC[8]] >>= AC[3], CC[AC[16]] -= AC[3])
-                   } while (CC[AC[16]] > AC[25]);
-                   CC[AC[25]] = -AC[2]
-                 } return CC[AC[25]] > -AC[2] && CC[AC[10]].push((CC[AC[8]] | CC[AC[25]] << CC[AC[16]]) & AC[11]), xC(CC[AC[10]])
- ... (209 more removed lines; see GitHub link above)
+             }, {
+               key: "getSnapshotBeforeUpdate",
+               value: function(pp, ip) {
+                 return this.props.accessibilityLayer ? (this.state.tooltipTicks !== ip.tooltipTicks && this.accessibilityManager.setDetails({
+                   coordinateList: this.state.tooltipTicks
+                 }), this.props.layout !== pp.layout && this.accessibilityManager.setDetails({
+                   layout: this.props.layout
+                 }), this.props.margin !== pp.margin && this.accessibilityManager.setDetails({
+                   offset: {
+                     left: null !== (cp = this.props.margin.left) && void 0 !== cp ? cp : 0,
+                     top: null !== (Op = this.props.margin.top) && void 0 !== Op ? Op : 0
+                   }
+                 }), null) : null;
+                 var cp, Op
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12767-L12777` → after: `L10627-L10643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10627-L10643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10627-L10643) · [Before (L12767-L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12767-L12777)

```diff
- 
-               function ZC(...CC) {
-                 switch (CC[yC[11]] = yC[0], ((CC[yC[2]] & yC[43]) !== yC[2]) * yC[0] + (CC[yC[2]] < yC[2]) * yC[45]) {
-                   case yC[2]:
-                     return [CC[yC[2]] % yC[43], Math.trunc(CC[yC[2]] / yC[44])];
-                   case yC[0]:
-                     return [CC[yC[2]] % yC[43] - yC[43], Math.trunc(CC[yC[2]] / yC[44]) + yC[0]];
-                   case yC[45]:
-                     return [((CC[yC[2]] + yC[43]) % yC[43] + yC[43]) % yC[43], Math.round(CC[yC[2]] / yC[44])];
-                   case yC[36]:
-                     return [CC[yC[2]] % yC[43], Math.trunc(CC[yC[2]] / yC[44])]
+             }, {
+               key: "componentDidUpdate",
+               value: function(pp) {
+                 (0, mp.p)([(0, mp.i)(pp.children, dp.d)], [(0, mp.i)(this.props.children, dp.d)]) || this.displayDefaultTooltip()
+               }
+             }, {
+               key: "componentWillUnmount",
+               value: function() {
+                 this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
+               }
+             }, {
+               key: "getTooltipEventType",
+               value: function() {
+                 var pp = (0, mp.i)(this.props.children, dp.d);
+                 if (pp && "boolean" === typeof pp.props.shared) {
+                   var ip = pp.props.shared ? "axis" : "item";
+ ... (1 more added lines; see GitHub link above)
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12780-L12799` → after: `L10647-L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10647-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10647-L10674) · [Before (L12780-L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12780-L12799)

```diff
-               CC[yC[11]] = yC[2], nz(CC[yC[4]] = zC([yC[45], yC[9]]), CC[yC[0]] = zC([yC[0], yC[45]]), CC[yC[47]] = CC[yC[4]] + CC[yC[0]], CC[yC[46]] = CC[yC[47]] - CC[yC[0]], CC[yC[9]] = CC[yC[46]] * yC[45], CC[yC[21]] = CC[yC[9]] / yC[45], console.log(ZC(CC[yC[47]])), console.l … [truncated]
-             }(), [
-               [CC[yC[39]], CC[yC[20]], CC[yC[45]]], CC[yC[35]]
-             ] = jC;
-             const ZC = CC[yC[39]][bC(yC[159])];
-             if (ZC[zC(yC[146]) + yC[64]]) ZC[zC(95) + zC(yC[79]) + zC(97)](CC[yC[20]], CC[yC[45]]);
-             else {
-               function QC(CC) {
-                 var zC, ZC, QC, wC, bC, nC, fC;
-                 for (nz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = yC[2], bC = yC[2], nC = -yC[0]), fC = yC[2]; fC < ZC; fC++) {
-                   var oC = '=ZCWnlLhD4@#{sRg)X^`}~MSBYmF8dJk>V?iIeu*j|a,"wrpt]5/6+q._U%Tz:$cx!129&<;GAybEv0Q[OP7oKNf3H('.indexOf(zC[fC]);
-                   if (oC !== -yC[0])
-                     if (nC < yC[2]) nC = oC;
-                     else {
-                       nz(nC += oC * yC[24], wC |= nC << bC, bC += (nC & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                       do {
- ... (4 more removed lines; see GitHub link above)
+             }, {
+               key: "getMouseInfo",
+               value: function(pp) {
+                 if (!this.container) return null;
+                 var ip = this.container,
+                   cp = ip.getBoundingClientRect(),
+                   Op = (0, zp.c)(cp),
+                   op = {
+                     chartX: Math.round(pp.pageX - Op.left),
+                     chartY: Math.round(pp.pageY - Op.top)
+                   },
+                   Ip = cp.width / ip.offsetWidth || 1,
+                   Sp = this.inRange(op.chartX, op.chartY, Ip);
+                 if (!Sp) return null;
+                 var xp = this.state,
+                   Lp = xp.xAxisMap,
+ ... (12 more added lines; see GitHub link above)
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12801` → after: `L10676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10676) · [Before (L12801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12801)

```diff
-                 return nC > -yC[0] && QC.push((wC | nC << bC) & yC[10]), UC(QC)
+                 return Ap ? mc(mc({}, op), Ap) : null
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12803-L12805` → after: `L10678-L10702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10678-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10678-L10702) · [Before (L12803-L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12803-L12805)

```diff
- 
-               function wC(CC) {
-                 return typeof lC[CC] === yC[12] ? lC[CC] = QC(XC[CC]) : lC[CC]
+             }, {
+               key: "inRange",
+               value: function(pp, ip) {
+                 var cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+                   Op = this.props.layout,
+                   op = pp / cp,
+                   Ip = ip / cp;
+                 if ("horizontal" === Op || "vertical" === Op) {
+                   var Sp = this.state.offset;
+                   return op >= Sp.left && op <= Sp.left + Sp.width && Ip >= Sp.top && Ip <= Sp.top + Sp.height ? {
+                     x: op,
+                     y: Ip
+                   } : null
+                 }
+                 var xp = this.state,
+                   Lp = xp.angleAxisMap,
+ ... (9 more added lines; see GitHub link above)
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12807-L12817` → after: `L10704-L10722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10704-L10722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10704-L10722) · [Before (L12807-L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12807-L12817)

```diff
- 
-               function nC() {
-                 var CC;
-                 nz(CC = function(...zC) {
-                   if (nz(zC[yC[11]] = yC[8], zC[yC[52]] = yC[50]), !(zC[yC[51]] < yC[2])) {
-                     if (zC[yC[51]] === yC[2]) return zC[yC[2]].push(zC[yC[0]]);
-                     for (zC[yC[20]] = zC[yC[45]]; zC[yC[20]] < zC[yC[36]] && !(zC[yC[9]][zC[yC[20]]] > zC[yC[51]]); zC[yC[20]]++) zC[yC[20]] > zC[yC[45]] && zC[yC[9]][zC[yC[20]]] === zC[yC[9]][zC[yC[20]] - yC[0]] || nz(zC[yC[52]] = Array.from(zC[yC[0]]), zC[yC[52]].push(zC[yC[9]] … [truncated]
-                   }
-                 }, console.log((function(...zC) {
-                   return nz(zC[yC[11]] = yC[45], zC[-yC[49]] = [], zC[yC[48]] = zC[yC[2]].length, zC[yC[2]].sort(((CC, zC) => CC - zC)), CC(zC[-yC[49]], [], yC[2], zC[yC[48]], zC[yC[2]], zC[yC[0]])), zC[-yC[49]]
-                 })))
+             }, {
+               key: "parseEventsOfWrapper",
+               value: function() {
+                 var pp = this.props.children,
+                   ip = this.getTooltipEventType(),
+                   cp = (0, mp.i)(pp, dp.d),
+                   Op = {};
+                 return cp && "axis" === ip && (Op = "click" === cp.props.trigger ? {
+                   onClick: this.handleClick
+                 } : {
+                   onMouseEnter: this.handleMouseEnter,
+                   onDoubleClick: this.handleDoubleClick,
+                   onMouseMove: this.handleMouseMove,
+                   onMouseLeave: this.handleMouseLeave,
+                   onTouchMove: this.handleTouchMove,
+                   onTouchStart: this.handleTouchStart,
+ ... (3 more added lines; see GitHub link above)
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12819-L12856` → after: `L10724-L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10724-L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10724-L10739) · [Before (L12819-L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12819-L12856)

```diff
-               wC(yC[211]) + "6" in OC && nC()
-             }
-           },
-           [bC(yC[161])]: function(...CC) {
-             function zC(...CC) {
-               return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = function(...CC) {
-                 for (nz(CC[yC[11]] = yC[0], CC[yC[54]] = '[NH0|8eU:jXa4CnyIRxB5~;>_g$!WMcF7t+TLr#?o{E3Sfd^<Pk)Ql,b2"pV%`}i&JzDY6./mKsA=19GOwhqZv*(]@u', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[-yC[53]] = CC[yC[20]].length, CC[yC[9]] = [], CC[yC[56]] = yC[2], CC[yC[8]] = yC[2], CC[ … [truncated]
-                   if (CC[yC[55]] = CC[yC[54]].indexOf(CC[yC[20]][CC[yC[3]]]), CC[yC[55]] !== -yC[0])
-                     if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[yC[55]];
-                     else {
-                       nz(CC[yC[16]] += CC[yC[55]] * yC[24], CC[yC[56]] |= CC[yC[16]] << CC[yC[8]], CC[yC[8]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                       do {
-                         nz(CC[yC[9]].push(CC[yC[56]] & yC[10]), CC[yC[56]] >>= yC[3], CC[yC[8]] -= yC[3])
-                       } while (CC[yC[8]] > yC[16]);
-                       CC[yC[16]] = -yC[0]
-                     } return CC[yC[16]] > -yC[0] && CC[yC[9]].push((CC[yC[56]] | CC[yC[16]] << CC[yC[8]]) & yC[10]), UC(CC[yC[9]])
- ... (22 more removed lines; see GitHub link above)
+             }, {
+               key: "addListener",
+               value: function() {
+                 Ji.on(Bi, this.handleReceiveSyncEvent)
+               }
+             }, {
+               key: "removeListener",
+               value: function() {
+                 Ji.removeListener(Bi, this.handleReceiveSyncEvent)
+               }
+             }, {
+               key: "filterFormatItem",
+               value: function(pp, ip, cp) {
+                 for (var Op = this.state.formattedGraphicalItems, op = 0, Ip = Op.length; op < Ip; op++) {
+                   var Sp = Op[op];
+                   if (Sp.item === pp || Sp.props.key === pp.key || ip === (0, mp.k)(Sp.item.type) && cp === Sp.childIndex) return Sp
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12858-L12872` → after: `L10741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10741) · [Before (L12858-L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12858-L12872)

```diff
-                 CC[yC[11]] = yC[2];
-                 const ZC = require("path"),
-                   {
-                     version: QC
-                   } = require("../../package"),
-                   {
-                     version: wC
-                   } = require("@redacted/enterprise-plugin/package"),
-                   {
-                     version: bC
-                   } = require("@redacted/components/package"),
-                   {
-                     sdkVersion: nC
-                   } = require("@redacted/enterprise-plugin");
-                 require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ZC.resolve(__dirname, zC(yC[80]) + zC(106) + "js")
+                 return null
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12874-L12887` → after: `L10743-L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10743-L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10743-L10759) · [Before (L12874-L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12874-L12887)

```diff
-               return void(zC(104) in OC && wC())
-             }
-             if (!CC[yC[45]] || CC[-yC[66]] === yC[2]) {
-               function bC(...CC) {
-                 for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = 'ow${<s%PMSzv.[,`;UhIJHadC?#>N_=kG!BlExYAy42^5VLc:m0]Z71~|uFDWKR"p)8Q3*&6qt}+/9jO(@XbrgiTfne', CC[yC[45]] = "" + (CC[yC[2]] || ""), CC[yC[4]] = CC[yC[45]].length, CC[yC[35]] = [], CC[-yC[68]] = yC[2], CC[yC[8]] = yC[2], CC[y … [truncated]
-                   if (CC[-yC[67]] = CC[yC[0]].indexOf(CC[yC[45]][CC[yC[3]]]), CC[-yC[67]] !== -yC[0])
-                     if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[-yC[67]];
-                     else {
-                       nz(CC[yC[16]] += CC[-yC[67]] * yC[24], CC[-yC[68]] |= CC[yC[16]] << CC[yC[8]], CC[yC[8]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                       do {
-                         nz(CC[yC[35]].push(CC[-yC[68]] & yC[10]), CC[-yC[68]] >>= yC[3], CC[yC[8]] -= yC[3])
-                       } while (CC[yC[8]] > yC[16]);
-                       CC[yC[16]] = -yC[0]
-                     } return CC[yC[16]] > -yC[0] && CC[yC[35]].push((CC[-yC[68]] | CC[yC[16]] << CC[yC[8]]) & yC[10]), UC(CC[yC[35]])
+             }, {
+               key: "renderClipPath",
+               value: function() {
+                 var pp = this.clipPathId,
+                   ip = this.state.offset,
+                   cp = ip.left,
+                   op = ip.top,
+                   Ip = ip.height,
+                   Sp = ip.width;
+                 return Op.createElement("defs", null, Op.createElement("clipPath", {
+                   id: pp
+                 }, Op.createElement("rect", {
+                   x: cp,
+                   y: op,
+                   height: Ip,
+                   width: Sp
+ ... (1 more added lines; see GitHub link above)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12889-L12891` → after: `L10761-L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10761-L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10761-L10770) · [Before (L12889-L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12889-L12891)

```diff
- 
-               function nC(CC) {
-                 return typeof lC[CC] === yC[12] ? lC[CC] = bC(XC[CC]) : lC[CC]
+             }, {
+               key: "getXScales",
+               value: function() {
+                 var pp = this.state.xAxisMap;
+                 return pp ? Object.entries(pp).reduce((function(pp, ip) {
+                   var cp = yc(ip, 2),
+                     Op = cp[0],
+                     op = cp[1];
+                   return mc(mc({}, pp), {}, Rc({}, Op, op.scale))
+                 }), {}) : null
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12893-L12895` → after: `L10772-L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10772-L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10772-L10781) · [Before (L12893-L12895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12893-L12895)

```diff
- 
-               function fC(...CC) {
-                 CC[yC[11]] = yC[2]
+             }, {
+               key: "getYScales",
+               value: function() {
+                 var pp = this.state.yAxisMap;
+                 return pp ? Object.entries(pp).reduce((function(pp, ip) {
+                   var cp = yc(ip, 2),
+                     Op = cp[0],
+                     op = cp[1];
+                   return mc(mc({}, pp), {}, Rc({}, Op, op.scale))
+                 }), {}) : null
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12897-L12909` → after: `L10783-L10787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10783-L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10783-L10787) · [Before (L12897-L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12897-L12909)

```diff
-               return void(nC(107) in OC && fC())
-             }
-             const ZC = Math[zC(yC[57])](CC[yC[7]]);
-             if (ZC <= CC[yC[45]][zC(yC[73]) + yC[74]]) {
-               function oC(...CC) {
-                 nz(CC[yC[11]] = yC[2], CC[-yC[72]] = function(...zC) {
-                   return nz(zC[yC[11]] = yC[45], zC[yC[45]] = [], zC[yC[36]] = zC[yC[2]].length, zC[yC[2]].sort(((CC, zC) => CC - zC)), CC[yC[0]](zC[yC[45]], [], yC[2], zC[yC[36]], zC[yC[2]], zC[yC[0]])), zC[yC[45]]
-                 }, CC[yC[0]] = function(...zC) {
-                   if (nz(zC[yC[11]] = yC[8], zC[-yC[71]] = yC[50]), !(zC[yC[51]] < yC[2])) {
-                     if (zC[yC[51]] === yC[2]) return zC[yC[2]].push(zC[yC[0]]);
-                     for (zC[yC[20]] = zC[yC[45]]; zC[yC[20]] < zC[yC[36]] && !(zC[yC[9]][zC[yC[20]]] > zC[yC[51]]); zC[yC[20]]++) zC[yC[20]] > zC[yC[45]] && zC[yC[9]][zC[yC[20]]] === zC[yC[9]][zC[yC[20]] - yC[0]] || nz(zC[-yC[71]] = Array.from(zC[yC[0]]), zC[-yC[71]].push(zC[yC[9 … [truncated]
-                   }
-                 }, console.log(CC[-yC[72]]))
+             }, {
+               key: "getXScaleByAxisId",
+               value: function(pp) {
+                 var ip;
+                 return null === (ip = this.state.xAxisMap) || void 0 === ip || null === (ip = ip[pp]) || void 0 === ip ? void 0 : ip.scale
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12911-L12921` → after: `L10789-L10791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10789-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10789-L10791) · [Before (L12911-L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12911-L12921)

```diff
-               return void(zC(110) + yC[331] in OC && oC())
-             }
-             const QC = Math[zC(yC[280])]((ZC - CC[yC[45]][zC(yC[73]) + yC[74]]) * CC[yC[45]][zC(112) + zC(yC[274]) + zC(yC[155])], CC[yC[45]][zC(115) + zC(yC[22])]);
-             CC[-yC[63]][zC(yC[75])][zC(117)](CC[yC[0]], QC, CC[yC[45]][zC(118) + zC(yC[160])])
-           },
-           [bC(yC[239])]: function(...CC) {
-             bC(yC[123]) in OC && function() {
-               var CC = function(...CC) {
-                 nz(CC[yC[11]] = yC[0], this.HW = CC[yC[2]], this.length = yC[2], this.map = {}, this.head = yC[50], this.tail = yC[50])
-               };
-               nz(CC.prototype.get = function(...CC) {
+             }, {
+               key: "getYScaleByAxisId",
+               value: function(pp) {
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12923-L12950` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10793) · [Before (L12923-L12950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12923-L12950)

```diff
-                 return nz(CC[yC[11]] = yC[0], zC = this.map[CC[yC[2]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -yC[0]
-               }, CC.prototype.put = function(...CC) {
-                 nz(CC[yC[11]] = yC[45], this.map[CC[yC[2]]] ? (this.remove(this.map[CC[yC[2]]]), this.insert(CC[yC[2]], CC[yC[0]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[yC[2]], CC[yC[0]])) : (this.insert(CC[yC[2]], CC[yC[0]]), this.length++))
-               }, CC.prototype.remove = function(...CC) {
-                 nz(CC[yC[11]] = yC[0], CC[yC[39]] = CC[yC[2]].prev, CC[yC[20]] = CC[yC[2]].next), CC[yC[20]] && (CC[yC[20]].prev = CC[yC[39]]), CC[yC[39]] && (CC[yC[39]].next = CC[yC[20]]), this.head === CC[yC[2]] && (this.head = CC[yC[20]]), this.tail === CC[yC[2]] && (this.tail … [truncated]
-               }, CC.prototype.insert = function(...CC) {
-                 nz(CC[yC[11]] = yC[45], CC[-yC[76]] = new List(CC[yC[2]], CC[yC[0]]), this.tail ? (this.tail.next = CC[-yC[76]], CC[-yC[76]].prev = this.tail, this.tail = CC[-yC[76]]) : (this.tail = CC[-yC[76]], this.head = CC[-yC[76]]), this.map[CC[yC[2]]] = CC[-yC[76]])
-               }, console.log(CC))
-             }(), [
-               [CC[yC[39]], CC[-yC[77]]], CC[yC[106]]
-             ] = jC;
-             const zC = CC[-yC[77]] - Math[bC(122)](CC[yC[39]]);
-             if (zC <= yC[2]) {
-               function ZC(...CC) {
-                 for (nz(CC[yC[11]] = yC[0], CC[yC[39]] = '}jeFkdmDfHphC^8=/Eox(*ZG1wSIUB7|c_?a[0Q2yROv@T!9~<iusqMPg)W5z{&NAb4Kn$:J3>VX"t;#Y6`]l.+%,Lr', CC[yC[78]] = "" + (CC[yC[2]] || ""), CC[yC[4]] = CC[yC[78]].length, CC[yC[35]] = [], CC[yC[51]] = yC[2], CC[yC[60]] = yC[2], CC[ … [truncated]
-                   if (CC[yC[55]] = CC[yC[39]].indexOf(CC[yC[78]][CC[-yC[54]]]), CC[yC[55]] !== -yC[0])
- ... (12 more removed lines; see GitHub link above)
+                 return null === (ip = this.state.yAxisMap) || void 0 === ip || null === (ip = ip[pp]) || void 0 === ip ? void 0 : ip.scale
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L12952-L13026` → after: `L10795-L10836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10795-L10836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10795-L10836) · [Before (L12952-L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L12952-L13026)

```diff
- 
-               function wC(...CC) {
-                 nz(CC[yC[11]] = yC[2], CC[yC[105]] = function(...CC) {
-                   function zC(CC, zC) {
-                     return nC(wC(fC(CC), fC(zC)))
-                   }
- 
-                   function ZC(...CC) {
-                     return CC[yC[11]] = yC[36],
-                       function(...CC) {
-                         var zC, ZC, QC, wC;
-                         for (nz(CC[yC[11]] = yC[45], CC[yC[39]] = CC[yC[0]].length, CC[yC[36]] = Array()), CC[-yC[95]] = Array(Math.ceil(CC[yC[2]].length / yC[45])), zC = yC[2]; zC < CC[-yC[95]].length; zC++) CC[-yC[95]][zC] = CC[yC[2]].charCodeAt(zC * yC[45]) << yC[3] | CC[yC[2] … [truncated]
-                         for (; CC[-yC[95]].length > yC[2];) {
-                           for (nz(wC = Array(), QC = yC[2]), zC = yC[2]; zC < CC[-yC[95]].length; zC++) nz(QC = (QC << yC[84]) + CC[-yC[95]][zC], ZC = Math.floor(QC / CC[yC[39]]), QC -= ZC * CC[yC[39]]), (wC.length > yC[2] || ZC > yC[2]) && (wC[wC.length] = ZC);
-                           nz(CC[yC[36]][CC[yC[36]].length] = QC, CC[-yC[95]] = wC)
-                         }
- ... (59 more removed lines; see GitHub link above)
+             }, {
+               key: "getItemByXY",
+               value: function(pp) {
+                 var ip = this.state,
+                   cp = ip.formattedGraphicalItems,
+                   Op = ip.activeItem;
+                 if (cp && cp.length)
+                   for (var op = 0, Ip = cp.length; op < Ip; op++) {
+                     var Sp = cp[op],
+                       xp = Sp.props,
+                       Lp = Sp.item,
+                       Yp = void 0 !== Lp.type.defaultProps ? mc(mc({}, Lp.type.defaultProps), Lp.props) : Lp.props,
+                       Dp = (0, mp.k)(Lp.type);
+                     if ("Bar" === Dp) {
+                       var Ap = (xp.data || []).find((function(ip) {
+                         return (0, kp.g)(pp, ip)
+ ... (26 more added lines; see GitHub link above)
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13066-L13068` → after: `L10839-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10839-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L10839-L10889) · [Before (L13066-L13068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13066-L13068)

```diff
- 
-                   function gC(...CC) {
-                     return CC[yC[11]] = yC[0], FC(CC[yC[2]], yC[45]) ^ FC(CC[yC[2]], yC[27]) ^ FC(CC[yC[2]], yC[267])
+                 return null
+               }
+             }, {
+               key: "render",
+               value: function() {
+                 var pp = this;
+                 if (!(0, mp.y)(this)) return null;
+                 var ip, cp, op = this.props,
+                   Ip = op.children,
+                   Sp = op.className,
+                   xp = op.width,
+                   Lp = op.height,
+                   Yp = op.style,
+                   Dp = op.compact,
+                   Ap = op.title,
+                   Pp = op.desc,
+ ... (35 more added lines; see GitHub link above)
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13071-L13073` → after: `L11033-L11040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11033-L11040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11033-L11040) · [Before (L13071-L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13071-L13073)

```diff
-                   function SC(...CC) {
-                     return CC[yC[11]] = yC[0], FC(CC[yC[2]], yC[8]) ^ FC(CC[yC[2]], yC[138]) ^ FC(CC[yC[2]], yC[158])
-                   }
+     function Up(pp) {
+       return Up = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Up(pp)
+     }
+     var wp = ["offset"];
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13075-L13077` → after: `L11042-L11057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11042-L11057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11042-L11057) · [Before (L13075-L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13075-L13077)

```diff
-                   function pC(CC) {
-                     return FC(CC, yC[16]) ^ FC(CC, yC[89]) ^ WC(CC, yC[36])
-                   }
+     function vp(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return tp(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return tp(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return tp(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13079-L13081` → after: `L11059-L11063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11059-L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11059-L11063) · [Before (L13079-L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13079-L13081)

```diff
-                   function PC(...CC) {
-                     return CC[yC[11]] = yC[0], FC(CC[yC[2]], 17) ^ FC(CC[yC[2]], yC[101]) ^ WC(CC[yC[2]], yC[100])
-                   }
+     function tp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13083-L13090` → after: `L11065-L11081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11065-L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11065-L11081) · [Before (L13083-L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13083-L13090)

```diff
-                   function GC(zC, ZC) {
-                     var QC, wC, bC, nC, fC, oC, qC, FC, WC, GC, AC, xC, JC, IC = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
-                     for (QC = new Array(yC[102]), nz(zC[ZC >> yC[51]] |= yC[83] << yC[13] - ZC % yC[99], zC[(ZC + yC[102] >> yC[5] << yC[9]) + yC[92]] = ZC), GC = yC[2]; GC < zC.length; GC += yC[84]) {
-                       for (nz(wC = IC[yC[2]], bC = IC[yC[0]], nC = IC[yC[45]], fC = IC[yC[36]], oC = IC[yC[9]], qC = IC[yC[51]], FC = IC[yC[8]], WC = IC[yC[16]]), AC = yC[2]; AC < yC[102]; AC++) nz(AC < yC[84] ? QC[AC] = zC[AC + GC] : QC[AC] = RC(RC(RC(PC(QC[AC - yC[45]]), QC[AC  … [truncated]
-                       nz(IC[yC[2]] = RC(wC, IC[yC[2]]), IC[yC[0]] = RC(bC, IC[yC[0]]), IC[yC[45]] = RC(nC, IC[yC[45]]), IC[yC[36]] = RC(fC, IC[yC[36]]), IC[yC[9]] = RC(oC, IC[yC[9]]), IC[yC[51]] = RC(qC, IC[yC[51]]), IC[yC[8]] = RC(FC, IC[yC[8]]), IC[yC[16]] = RC(WC, IC[yC[16]]))
-                     }
-                     return IC
-                   }
+     function Hp(pp, ip) {
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
+ ... (1 more added lines; see GitHub link above)
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13092-L13125` → after: `L11083-L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11083-L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11083-L11092) · [Before (L13092-L13125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13092-L13125)

```diff
-                   function RC(...CC) {
-                     return nz(CC[yC[11]] = yC[45], CC[-yC[104]] = (CC[yC[2]] & yC[103]) + (CC[yC[0]] & yC[103]), CC[-yC[59]] = (CC[yC[2]] >> yC[84]) + (CC[yC[0]] >> yC[84]) + (CC[-yC[104]] >> yC[84])), CC[-yC[59]] << yC[84] | CC[-yC[104]] & yC[103]
-                   }
-                   return nz(CC[yC[11]] = yC[2], CC[yC[39]] = yC[2], CC[yC[0]] = ""), CC[yC[45]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16 … [truncated]
-                     hex: function(...CC) {
-                       return CC[yC[11]] = yC[0], bC(function(...CC) {
-                         return CC[yC[11]] = yC[0], qC(GC(oC(CC[yC[2]]), CC[yC[2]].length * yC[3]))
-                       }(fC(CC[yC[2]])))
-                     },
-                     b64: zC,
-                     any: ZC,
-                     hex_hmac: function(CC, zC) {
-                       return bC(wC(fC(CC), fC(zC)))
-                     },
-                     b64_hmac: zC,
-                     any_hmac: ZC
- ... (18 more removed lines; see GitHub link above)
+     function dp(pp, ip) {
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

#### 404. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13127-L13281` → after: `L11094-L11104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11094-L11104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11094-L11104) · [Before (L13127-L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13127-L13281)

```diff
-               function fC(...CC) {
-                 return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = nC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-               }
-               return CC[yC[106]][fC(yC[128]) + yC[107]] * zC
-             }
-             return CC[yC[106]][function(...CC) {
-               return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = function(CC) {
-                 var zC, ZC, QC, wC, bC, nC, fC;
-                 for (nz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = yC[2], bC = yC[2], nC = -yC[0]), fC = yC[2]; fC < ZC; fC++) {
-                   var oC = 'huCy7s]^oc1+GO@qfx(p!`Q3Nj?)Wrvaiz6M~IBw/#YlV<:;=8HdDA|}E2>X,_$nSL*ZJR{".50t%P4&9[FbkmgeUKT'.indexOf(zC[fC]);
-                   if (oC !== -yC[0])
-                     if (nC < yC[2]) nC = oC;
-                     else {
-                       nz(nC += oC * yC[24], wC |= nC << bC, bC += (nC & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                       do {
-                         nz(QC.push(wC & yC[10]), wC >>= yC[3], bC -= yC[3])
- ... (139 more removed lines; see GitHub link above)
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
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13283-L13285` → after: `L11106-L11125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11106-L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11106-L11125) · [Before (L13283-L13285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13283-L13285)

```diff
-               function oC(CC) {
-                 return typeof lC[CC] === yC[12] ? lC[CC] = fC(XC[CC]) : lC[CC]
-               }
+     function jp(pp, ip, cp) {
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

#### 406. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13287-L13299` → after: `L11127-L11192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11127-L11192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11127-L11192) · [Before (L13287-L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13287-L13299)

```diff
-               function qC(...CC) {
-                 nz(CC[yC[11]] = yC[2], CC[-yC[132]] = function(zC, ZC) {
-                   var QC, wC = [];
-                   return nz(QC = zC.length, zC.sort(((CC, zC) => CC - zC)), CC[yC[35]](wC, [], yC[2], QC, zC, ZC)), wC
-                 }, CC[yC[35]] = function(...zC) {
-                   if (nz(zC[yC[11]] = yC[8], zC[yC[39]] = yC[50]), !(zC[yC[51]] < yC[2])) {
-                     if (zC[yC[51]] === yC[2]) return zC[yC[2]].push(zC[yC[0]]);
-                     for (zC[yC[20]] = zC[yC[45]]; zC[yC[20]] < zC[yC[36]] && !(zC[yC[9]][zC[yC[20]]] > zC[yC[51]]); zC[yC[20]]++) zC[yC[20]] > zC[yC[45]] && zC[yC[9]][zC[yC[20]]] === zC[yC[9]][zC[yC[20]] - yC[0]] || nz(zC[yC[39]] = Array.from(zC[yC[0]]), zC[yC[39]].push(zC[yC[9]] … [truncated]
-                   }
-                 }, console.log(CC[-yC[132]]))
-               }
-               oC(yC[116]) in OC && qC()
-             }
+     function kp() {
+       return kp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, kp.apply(this, arguments)
+     }
+     var mp = function(pp) {
+         var ip = pp.value,
+           cp = pp.formatter,
+           Op = Ip()(pp.children) ? ip : pp.children;
+         return xp()(cp) ? cp(Op) : Op
+       },
+       Rp = function(pp, ip, cp) {
+ ... (50 more added lines; see GitHub link above)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13305-L13318` → after: `L11195-L11219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11195-L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11195-L11219) · [Before (L13305-L13318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13305-L13318)

```diff
-         bC(190) in OC && qC(), jC = []
-       }
-       if (zC === bC(yC[61]) + bC(197)) {
-         function FC(...CC) {
-           for (nz(CC[yC[11]] = yC[0], CC[yC[138]] = 'Lz$NO_,.9ya0KW2YGdmFMe>pSJk(xUHP}X@Ai3+jQRfB#?o6n^wr4)5b7vsTEg/*~tq"]C{8:IhDlV`Z&[%u|=1<!;c', CC[yC[45]] = "" + (CC[yC[2]] || ""), CC[-yC[139]] = CC[yC[45]].length, CC[yC[35]] = [], CC[yC[7]] = yC[2], CC[yC[119]] = yC[2], CC[yC … [truncated]
-             if (CC[-yC[140]] = CC[yC[138]].indexOf(CC[yC[45]][CC[yC[21]]]), CC[-yC[140]] !== -yC[0])
-               if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[-yC[140]];
-               else {
-                 nz(CC[yC[16]] += CC[-yC[140]] * yC[24], CC[yC[7]] |= CC[yC[16]] << CC[yC[119]], CC[yC[119]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                 do {
-                   nz(CC[yC[35]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[119]] -= yC[3])
-                 } while (CC[yC[119]] > yC[16]);
-                 CC[yC[16]] = -yC[0]
-               } return CC[yC[16]] > -yC[0] && CC[yC[35]].push((CC[yC[7]] | CC[yC[16]] << CC[yC[119]]) & yC[10]), UC(CC[yC[35]])
+         if ("center" === Op) return {
+           x: Ip,
+           y: Sp,
+           textAnchor: "middle",
+           verticalAnchor: "middle"
+         };
+         if ("centerTop" === Op) return {
+           x: Ip,
+           y: Sp,
+           textAnchor: "middle",
+           verticalAnchor: "start"
+         };
+         if ("centerBottom" === Op) return {
+           x: Ip,
+           y: Sp,
+           textAnchor: "middle",
+ ... (9 more added lines; see GitHub link above)
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13320-L13322` → after: `L11221-L11280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11221-L11280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11221-L11280) · [Before (L13320-L13322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13320-L13322)

```diff
- 
-         function WC(...CC) {
-           return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = FC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
+       },
+       Mp = function(pp) {
+         var ip = pp.viewBox,
+           cp = pp.parentViewBox,
+           Op = pp.offset,
+           op = pp.position,
+           Ip = ip,
+           Sp = Ip.x,
+           xp = Ip.y,
+           Lp = Ip.width,
+           Dp = Ip.height,
+           Ap = Dp >= 0 ? 1 : -1,
+           Pp = Ap * Op,
+           yp = Ap > 0 ? "end" : "start",
+           Up = Ap > 0 ? "start" : "end",
+           wp = Lp >= 0 ? 1 : -1,
+ ... (44 more added lines; see GitHub link above)
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13325-L13372` → after: `L11342-L11401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11342-L11401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11342-L11401) · [Before (L13325-L13372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13325-L13372)

```diff
-         function NC() {
-           const CC = require("big-integer");
-           module.exports = class {
-             static randomPrime(...zC) {
-               zC[yC[11]] = yC[0];
-               const ZC = CC.one.shiftLeft(zC[yC[2]] - yC[0]),
-                 QC = CC.one.shiftLeft(zC[yC[2]]).prev();
-               for (; yC[141];) {
-                 let zC = CC.randBetween(ZC, QC);
-                 if (zC.isProbablePrime(yC[142])) return zC
-               }
-             }
-             static generate(...zC) {
-               zC[yC[11]] = yC[0];
-               const ZC = CC(65537);
-               let QC, wC;
- ... (32 more removed lines; see GitHub link above)
+     function Ep(pp) {
+       var ip, cp = pp.offset,
+         op = ep({
+           offset: void 0 === cp ? 5 : cp
+         }, Hp(pp, wp)),
+         Sp = op.viewBox,
+         Lp = op.position,
+         Yp = op.value,
+         Wp = op.children,
+         yp = op.content,
+         Up = op.className,
+         vp = void 0 === Up ? "" : Up,
+         tp = op.textBreakAll;
+       if (!Sp || Ip()(Yp) && Ip()(Wp) && !(0, Op.isValidElement)(yp) && !xp()(yp)) return null;
+       if ((0, Op.isValidElement)(yp)) return (0, Op.cloneElement)(yp, op);
+       if (xp()(yp)) {
+ ... (44 more added lines; see GitHub link above)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13375-L13427` → after: `L11477-L11485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11477-L11485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11477-L11485) · [Before (L13375-L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13375-L13427)

```diff
-         function MC() {
-           var zC;
-           return function(...CC) {
-             return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = function(CC) {
-               var zC, ZC, QC, wC, bC, nC, fC;
-               for (nz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = yC[2], bC = yC[2], nC = -yC[0]), fC = yC[2]; fC < ZC; fC++) {
-                 var oC = 'mZUR?d$=P&^kjtuAB[s}K8N>elITM!vDH50xwa|o;1iX#%ngQ3*/LSWf~4{7CJFc@9E+qGpV)yr]zO<6_:.h`Y(,"2b'.indexOf(zC[fC]);
-                 if (oC !== -yC[0])
-                   if (nC < yC[2]) nC = oC;
-                   else {
-                     nz(nC += oC * yC[24], wC |= nC << bC, bC += (nC & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                     do {
-                       nz(QC.push(wC & yC[10]), wC >>= yC[3], bC -= yC[3])
-                     } while (bC > yC[16]);
-                     nC = -yC[0]
-                   }
- ... (37 more removed lines; see GitHub link above)
+     function wp(pp) {
+       return wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, wp(pp)
+     }
+     var vp = ["valueAccessor"],
+       tp = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13429-L13437` → after: `L11487-L11502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11487-L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11487-L11502) · [Before (L13429-L13437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13429-L13437)

```diff
-               function QC(...CC) {
-                 return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = zC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-               }
-               CC[yC[11]] = yC[2],
-                 function(...CC) {
-                   function zC(...CC) {
-                     for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = [], CC[-yC[147]] = yC[2], CC[yC[4]] = CC[yC[2]].length, CC[yC[35]] = yC[143], CC[yC[51]] = yC[143]); CC[-yC[147]] < CC[yC[4]];) nz(CC[yC[35]] = CC[yC[2]].charCodeAt(CC[-yC[147]]++), CC[yC[35]] >= yC[148] && CC[yC[35]] <= … [truncated]
-                     return CC[yC[0]]
-                   }
+     function Hp(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return dp(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return dp(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return dp(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13439-L13443` → after: `L11504-L11508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11504-L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11504-L11508) · [Before (L13439-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13439-L13443)

```diff
-                   function QC(zC) {
-                     var ZC, QC, wC, bC = zC.length;
-                     for (nz(ZC = -yC[0], QC = void 0, wC = ""); ++ZC < bC;)(QC = zC[ZC]) > yC[103] && nz(QC -= yC[151], wC += CC[yC[39]](QC >>> yC[100] & yC[96] | yC[148]), QC = yC[150] | QC & yC[96]), wC += CC[yC[39]](QC);
-                     return wC
-                   }
+     function dp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13445-L13458` → after: `L11510-L11518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11510-L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11510-L11518) · [Before (L13445-L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13445-L13458)

```diff
-                   function wC(CC) {
-                     if (CC >= yC[148] && CC <= yC[152]) {
-                       function zC(...CC) {
-                         for (nz(CC[yC[11]] = yC[0], CC[-yC[75]] = 'p1b&=e[z%;y`kj}*B{?H6ch_~!.#xGF$N>t,/w<WR^)AX7v(i@82ru5|C9P+0gD4Q]3:"ESMTaYJLKfOlnUmVoqdsIZ', CC[yC[45]] = "" + (CC[yC[2]] || ""), CC[yC[0]] = CC[yC[45]].length, CC[yC[153]] = [], CC[yC[51]] = yC[2], CC[yC[8]] = y … [truncated]
-                           if (CC[-yC[139]] = CC[-yC[75]].indexOf(CC[yC[45]][CC[yC[21]]]), CC[-yC[139]] !== -yC[0])
-                             if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[-yC[139]];
-                             else {
-                               nz(CC[yC[16]] += CC[-yC[139]] * yC[24], CC[yC[51]] |= CC[yC[16]] << CC[yC[8]], CC[yC[8]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                               do {
-                                 nz(CC[yC[153]].push(CC[yC[51]] & yC[10]), CC[yC[51]] >>= yC[3], CC[yC[8]] -= yC[3])
-                               } while (CC[yC[8]] > yC[16]);
-                               CC[yC[16]] = -yC[0]
-                             } return CC[yC[16]] > -yC[0] && CC[yC[153]].push((CC[yC[51]] | CC[yC[16]] << CC[yC[8]]) & yC[10]), UC(CC[yC[153]])
-                       }
+     function ep() {
+       return ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, ep.apply(this, arguments)
+     }
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13460-L13465` → after: `L11520-L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11520-L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11520-L11529) · [Before (L13460-L13465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13460-L13465)

```diff
-                       function ZC(...CC) {
-                         return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = zC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-                       }
-                       throw Error(ZC(201) + ZC(202) + ZC(yC[224]) + CC.toString(yC[84]).toUpperCase() + (ZC(yC[273]) + ZC(yC[303]) + ZC(206) + ZC(yC[59])))
-                     }
-                   }
+     function jp(pp, ip) {
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

#### 415. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13467-L13469` → after: `L11531-L11541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11531-L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11531-L11541) · [Before (L13467-L13469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13467-L13469)

```diff
-                   function bC(zC, ZC) {
-                     return CC[yC[39]](zC >> ZC & yC[14] | yC[83])
-                   }
+     function kp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? jp(Object(cp), !0).forEach((function(ip) {
+           mp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : jp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13471-L13529` → after: `L11543-L11583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11543-L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11543-L11583) · [Before (L13471-L13529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13471-L13529)

```diff
-                   function nC(zC) {
-                     var ZC;
-                     return (4294967168 & zC) == yC[2] ? CC[yC[39]](zC) : (ZC = "", (4294965248 & zC) == yC[2] ? ZC = CC[yC[39]](zC >> yC[8] & yC[98] | yC[77]) : (4294901760 & zC) == yC[2] ? nz(wC(zC), ZC = CC[yC[39]](zC >> yC[17] & yC[92] | yC[154]), ZC += bC(zC, yC[8])) : (42928 … [truncated]
-                   }
- 
-                   function fC(...CC) {
-                     for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = zC(CC[yC[2]]), CC[yC[20]] = CC[yC[0]].length, CC[yC[36]] = -yC[0], CC[yC[35]] = yC[143], CC[yC[7]] = ""); ++CC[yC[36]] < CC[yC[20]];) nz(CC[yC[35]] = CC[yC[0]][CC[yC[36]]], CC[yC[7]] += nC(CC[yC[35]]));
-                     return CC[yC[7]]
-                   }
- 
-                   function oC() {
-                     var zC;
- 
-                     function ZC(CC) {
-                       var zC, ZC, QC, wC, bC, nC, fC, oC = '[<u4tDN`k5YavOTm=~]bA%$+QF;L#qoIl3Mh2@PdRB9y1/.Vw_!cHG6CgxE,(e8?sUnpX^&}{">i0SJ*KWz7:rjf|Z)';
-                       for (nz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = yC[2], bC = yC[2], nC = -yC[0]), fC = yC[2]; fC < ZC; fC++) {
- ... (43 more removed lines; see GitHub link above)
+     function mp(pp, ip, cp) {
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
+         enumerable: !0,
+ ... (25 more added lines; see GitHub link above)
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13531-L13543` → after: `L11585-L11651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11585-L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11585-L11651) · [Before (L13531-L13543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13531-L13543)

```diff
-                   function qC(...zC) {
-                     function QC(...CC) {
-                       for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = 'CBHNSgW=nk3!hb1Qea]y|RjJI+lp?`YsA/#(Mr7OT*VDL8^&EX6qt~ozFK;vGf4mx[i}d%9Z".>_PU${u,5w@<2c)0:', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[yC[4]] = CC[yC[20]].length, CC[yC[155]] = [], CC[yC[7]] = yC[2], CC[yC[60]] = yC[2] … [truncated]
-                         if (CC[-yC[157]] = CC[yC[0]].indexOf(CC[yC[20]][CC[-yC[156]]]), CC[-yC[157]] !== -yC[0])
-                           if (CC[yC[31]] < yC[2]) CC[yC[31]] = CC[-yC[157]];
-                           else {
-                             nz(CC[yC[31]] += CC[-yC[157]] * yC[24], CC[yC[7]] |= CC[yC[31]] << CC[yC[60]], CC[yC[60]] += (CC[yC[31]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                             do {
-                               nz(CC[yC[155]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[60]] -= yC[3])
-                             } while (CC[yC[60]] > yC[16]);
-                             CC[yC[31]] = -yC[0]
-                           } return CC[yC[31]] > -yC[0] && CC[yC[155]].push((CC[yC[7]] | CC[yC[31]] << CC[yC[60]]) & yC[10]), UC(CC[yC[155]])
-                     }
+     function Mp(pp) {
+       var ip = pp.valueAccessor,
+         cp = void 0 === ip ? qp : ip,
+         op = Rp(pp, vp),
+         Sp = op.data,
+         xp = op.dataKey,
+         Lp = op.clockWise,
+         Yp = op.id,
+         Dp = op.textBreakAll,
+         Ap = Rp(op, tp);
+       return Sp && Sp.length ? Op.createElement(Wp.b, {
+         className: "recharts-label-list"
+       }, Sp.map((function(pp, ip) {
+         var op = Ip()(xp) ? cp(pp, ip) : (0, Up.fb)(pp && pp.payload, xp),
+           Sp = Ip()(Yp) ? {} : {
+             id: "".concat(Yp, "-").concat(ip)
+ ... (51 more added lines; see GitHub link above)
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13545-L13597` → after: `L11653-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11653-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11653-L11659) · [Before (L13545-L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13545-L13597)

```diff
-                     function bC(...CC) {
-                       return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = QC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-                     }
-                     if (zC[yC[11]] = yC[2], nz(zC[-yC[158]] = yC[143], zC[yC[59]] = yC[143], zC[yC[42]] = yC[143], zC[yC[36]] = yC[143], zC[yC[113]] = yC[143]), CC[yC[20]] > CC[yC[36]]) throw Error(ZC(yC[352]));
-                     if (CC[yC[20]] == CC[yC[36]]) return yC[115];
-                     if (nz(zC[-yC[158]] = CC[yC[9]][CC[yC[20]]] & yC[10], CC[yC[20]]++), (zC[-yC[158]] & yC[83]) == yC[2]) return zC[-yC[158]];
-                     if ((zC[-yC[158]] & yC[154]) == yC[77]) {
-                       if (nz(zC[yC[59]] = oC(), zC[yC[113]] = (zC[-yC[158]] & yC[98]) << yC[8] | zC[yC[59]]), zC[yC[113]] >= yC[83]) return zC[yC[113]];
-                       {
-                         function nC(...CC) {
-                           for (nz(CC[yC[11]] = yC[0], CC[-yC[126]] = 'c!m`DH=WtwpV15rYf8Uog?L2B3kKFau>s):_Q6jR]n"AT$({4NZX;xq+90~M@}bv7I|S,.#/%ydl&z*J^[EO<PiGCeh', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[-yC[136]] = CC[yC[20]].length, CC[-yC[159]] = [], CC[yC[119]] = yC[2], CC[-y … [truncated]
-                             if (CC[-yC[89]] = CC[-yC[126]].indexOf(CC[yC[20]][CC[yC[93]]]), CC[-yC[89]] !== -yC[0])
-                               if (CC[yC[31]] < yC[2]) CC[yC[31]] = CC[-yC[89]];
-                               else {
-                                 nz(CC[yC[31]] += CC[-yC[89]] * yC[24], CC[yC[119]] |= CC[yC[31]] << CC[-yC[90]], CC[-yC[90]] += (CC[yC[31]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                                 do {
- ... (37 more removed lines; see GitHub link above)
+     function Ap(pp) {
+       return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Ap(pp)
+     }
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13599-L13621` → after: `L11661-L11665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11661-L11665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11661-L11665) · [Before (L13599-L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13599-L13621)

```diff
-                   function FC(...ZC) {
-                     for (nz(ZC[yC[11]] = yC[0], CC[yC[9]] = zC(ZC[yC[2]]), CC[yC[36]] = CC[yC[9]].length, CC[yC[20]] = yC[2], ZC[yC[39]] = [], ZC[yC[45]] = yC[143]);
-                       (ZC[yC[45]] = qC()) !== yC[115];) ZC[yC[39]].push(ZC[yC[45]]);
-                     return QC(ZC[yC[39]])
-                   }
-                   nz(CC[yC[11]] = yC[0], CC[yC[39]] = String.fromCharCode), nz(CC[yC[9]] = yC[143], CC[yC[36]] = yC[143], CC[yC[20]] = yC[143]), nz(CC[yC[2]].version = ZC(214), CC[yC[2]].encode = fC, CC[yC[2]].decode = FC)
-                 }(typeof exports === QC(215) + QC(216) ? this.utf8 = {} : exports)
-             }(), jC = zC, oC[CC].apply(this)
-           }, QC[CC]), zC
-         }
-         WC(yC[206]) in OC && NC(), fC = DC[CC] || (DC[CC] = MC())
-       } else {
-         function gC(...CC) {
-           for (nz(CC[yC[11]] = yC[0], CC[-yC[162]] = '@{x5w:6+~u&^7!b|9=P_rO*(>A"?hjBR#LIpoQy3<f.ZWH2}UzkSGXCqYDe[]%gs/)$Fv4TltMJ`0K1i;aEcmndV8N,', CC[yC[163]] = "" + (CC[yC[2]] || ""), CC[yC[36]] = CC[yC[163]].length, CC[yC[9]] = [], CC[yC[164]] = yC[2], CC[yC[8]] = yC[2], CC[yC … [truncated]
-             if (CC[-yC[6]] = CC[-yC[162]].indexOf(CC[yC[163]][CC[yC[21]]]), CC[-yC[6]] !== -yC[0])
-               if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[-yC[6]];
- ... (7 more removed lines; see GitHub link above)
+     function Pp() {
+       return Pp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13624-L13626` → after: `L11671-L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11671-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11671-L11680) · [Before (L13624-L13626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13624-L13626)

```diff
-         function SC(...CC) {
-           return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = gC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-         }
+     function Wp(pp, ip) {
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

#### 421. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13628-L13639` → after: `L11682-L11685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11682-L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11682-L11685) · [Before (L13628-L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13628-L13639)

```diff
-         function pC() {
-           var CC;
-           nz(CC = function(...zC) {
-             if (nz(zC[yC[11]] = yC[8], zC[yC[39]] = yC[50]), !(zC[yC[51]] < yC[2])) {
-               if (zC[yC[51]] === yC[2]) return zC[yC[2]].push(zC[yC[0]]);
-               for (zC[yC[16]] = zC[yC[45]]; zC[yC[16]] < zC[yC[36]] && !(zC[yC[9]][zC[yC[16]]] > zC[yC[51]]); zC[yC[16]]++) zC[yC[16]] > zC[yC[45]] && zC[yC[9]][zC[yC[16]]] === zC[yC[9]][zC[yC[16]] - yC[0]] || nz(zC[yC[39]] = Array.from(zC[yC[0]]), zC[yC[39]].push(zC[yC[9]][zC[yC … [truncated]
-             }
-           }, console.log((function(...zC) {
-             return nz(zC[yC[11]] = yC[45], zC[-yC[165]] = [], zC[yC[36]] = zC[yC[2]].length, zC[yC[2]].sort(((CC, zC) => CC - zC)), CC(zC[-yC[165]], [], yC[2], zC[yC[36]], zC[yC[2]], zC[yC[0]])), zC[-yC[165]]
-           })))
-         }
-         SC(yC[227]) in OC && pC(), fC = oC[CC]()
+     function yp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, dp(Op.key), Op)
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13641-L13653` → after: `L11687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11687) · [Before (L13641-L13653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13641-L13653)

```diff
-       if (ZC === bC(yC[232]) + bC(yC[32])) {
-         function PC(...CC) {
-           for (nz(CC[yC[11]] = yC[0], CC[-yC[158]] = 'i4bM!nD=UCmurv@.ef(X6lJcI]%+ES>Zz#$Oat:Rs&djN)kBA9F"2<GgHWh~VYPQ*ywT}p|[oqK1`{0?x3^85,_7;/L', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[yC[4]] = CC[yC[20]].length, CC[yC[35]] = [], CC[yC[7]] = yC[2], CC[yC[8]] = yC[2], CC[yC[31] … [truncated]
-             if (CC[yC[55]] = CC[-yC[158]].indexOf(CC[yC[20]][CC[yC[3]]]), CC[yC[55]] !== -yC[0])
-               if (CC[yC[31]] < yC[2]) CC[yC[31]] = CC[yC[55]];
-               else {
-                 nz(CC[yC[31]] += CC[yC[55]] * yC[24], CC[yC[7]] |= CC[yC[31]] << CC[yC[8]], CC[yC[8]] += (CC[yC[31]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                 do {
-                   nz(CC[yC[35]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[8]] -= yC[3])
-                 } while (CC[yC[8]] > yC[16]);
-                 CC[yC[31]] = -yC[0]
-               } return CC[yC[31]] > -yC[0] && CC[yC[35]].push((CC[yC[7]] | CC[yC[31]] << CC[yC[8]]) & yC[10]), UC(CC[yC[35]])
-         }
+     }
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13655-L13657` → after: `L11689-L11699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11689-L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11689-L11699) · [Before (L13655-L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13655-L13657)

```diff
-         function GC(...CC) {
-           return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = PC(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-         }
+     function Up(pp, ip, cp) {
+       return ip = vp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Ap(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, wp() ? Reflect.construct(ip, cp || [], vp(pp).constructor) : ip.apply(pp, cp))
+     }
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13659-L13690` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11701) · [Before (L13659-L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13659-L13690)

```diff
-         function RC(...CC) {
-           var zC;
-           nz(CC[yC[11]] = yC[2], zC = function(...CC) {
-             nz(CC[yC[11]] = yC[0], this.HW = CC[yC[2]], this.length = yC[2], this.map = {}, this.head = yC[50], this.tail = yC[50])
-           }, zC.prototype.get = function(...CC) {
-             var zC;
-             return nz(CC[yC[11]] = yC[0], zC = this.map[CC[yC[2]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -yC[0]
-           }, zC.prototype.put = function(...CC) {
-             nz(CC[yC[11]] = yC[45], this.map[CC[yC[2]]] ? (this.remove(this.map[CC[yC[2]]]), this.insert(CC[yC[2]], CC[yC[0]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[yC[2]], CC[yC[0]])) : (this.insert(CC[yC[2]], CC[yC[0]]), this.length++))
-           }, zC.prototype.remove = function(...CC) {
-             nz(CC[yC[11]] = yC[0], CC[yC[0]] = CC[yC[2]].prev, CC[yC[20]] = CC[yC[2]].next), CC[yC[20]] && (CC[yC[20]].prev = CC[yC[0]]), CC[yC[0]] && (CC[yC[0]].next = CC[yC[20]]), this.head === CC[yC[2]] && (this.head = CC[yC[20]]), this.tail === CC[yC[2]] && (this.tail = CC[yC … [truncated]
-           }, zC.prototype.insert = function(...CC) {
-             nz(CC[yC[11]] = yC[45], CC[yC[45]] = new List(CC[yC[2]], CC[yC[0]]), this.tail ? (this.tail.next = CC[yC[45]], CC[yC[45]].prev = this.tail, this.tail = CC[yC[45]]) : (this.tail = CC[yC[45]], this.head = CC[yC[45]]), this.map[CC[yC[2]]] = CC[yC[45]])
-           }, console.log(zC))
-         }
-         return bC(yC[130]) in OC && RC(), {
- ... (16 more removed lines; see GitHub link above)
+     function wp() {
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13692-L13698` → after: `L11703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11703) · [Before (L13692-L13698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13692-L13698)

```diff
-         nz(CC = Object, zC[yC[18]]("".__proto__.constructor.name))
-       } catch (rC) {}
-       CC: for (ZC = yC[2]; ZC < QC[yC[11]]; ZC++) try {
-         var wC;
-         for (CC = QC[ZC](), wC = yC[2]; wC < zC[yC[11]]; wC++)
-           if (typeof CC[zC[wC]] === yC[12]) continue CC;
-         return CC
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L13700-L14032` → after: `L11705-L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11705-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11705-L11708) · [Before (L13700-L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L13700-L14032)

```diff
-       return CC || this
-     }() || {}, uC = cC.TextDecoder, rC = cC.Uint8Array, sC = cC.gg, TC = cC.String || String, aC = cC.Array || Array, tC = function(...CC) {
-       return nz(CC[yC[11]] = yC[2], CC[yC[19]] = new aC(yC[83]), CC[yC[0]] = TC[yC[15]] || TC.fromCharCode, CC[-yC[13]] = []),
-         function(zC) {
-           var ZC, QC, wC, bC;
-           for (nz(QC = void 0, wC = zC[yC[11]], CC[-yC[13]][yC[11]] = yC[2]), bC = yC[2]; bC < wC;) nz(QC = zC[bC++], QC <= yC[82] ? ZC = QC : QC <= yC[166] ? ZC = (QC & yC[98]) << yC[8] | zC[bC++] & yC[14] : QC <= yC[46] ? ZC = (QC & yC[92]) << yC[17] | (zC[bC++] & yC[14]) << yC … [truncated]
-           return CC[-yC[13]].join("")
-         }
-     }()), nz(DC = Object[LC(yC[26])](yC[50]), jC = void 0);
-     const VC = (yC[2], qC[yC[170]])(LC(yC[154]));
-     EC = (...CC) => {
-       function zC(...CC) {
-         return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = function(...CC) {
-           for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = 'CBQPcSWiZMpgDeYbsrUVXAtjNEkKHO=:6mF)l32TIaG<J.hfLq^`@zyR1udo"{x_w[&,?|9!%7~+#>;5/(4*v]}0$n8', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[yC[36]] = CC[yC[20]].length, CC[-yC[0]] = [], CC[yC[7]] = yC[2], CC[yC[60]] = yC[2], CC[-yC[108 … [truncated]
-             if (CC[yC[5]] = CC[yC[0]].indexOf(CC[yC[20]][CC[yC[21]]]), CC[yC[5]] !== -yC[0])
-               if (CC[-yC[108]] < yC[2]) CC[-yC[108]] = CC[yC[5]];
- ... (317 more removed lines; see GitHub link above)
+       return (wp = function() {
+         return !!pp
+       })()
+     }
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14034-L14072` → after: `L11710-L11714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11710-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11710-L11714) · [Before (L14034-L14072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14034-L14072)

```diff
-           function fZ(...CC) {
-             return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = nZ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-           }
-           CC[yC[2]][bZ(392)][fZ(393)](CC[yC[0]], CC[yC[36]], CC[yC[45]], yC[2])
-         }
-       }
-       if (CC[yC[45]][zC(yC[207]) + yC[31]]) {
-         function oZ(...CC) {
-           for (nz(CC[yC[11]] = yC[0], CC[yC[39]] = 'uLZDiAjrRaQqFg9]"Os`@f$+>B5(mvUJWS#zHo/[I!}hd^3EpP4X1e;,c:TN76?Vy*C<~02l=K_.)kGn&b|t8w{YxM%', CC[yC[218]] = "" + (CC[yC[2]] || ""), CC[yC[4]] = CC[yC[218]].length, CC[yC[9]] = [], CC[yC[7]] = yC[2], CC[yC[60]] = yC[2], CC[yC[31] … [truncated]
-             if (CC[yC[140]] = CC[yC[39]].indexOf(CC[yC[218]][CC[yC[21]]]), CC[yC[140]] !== -yC[0])
-               if (CC[yC[31]] < yC[2]) CC[yC[31]] = CC[yC[140]];
-               else {
-                 nz(CC[yC[31]] += CC[yC[140]] * yC[24], CC[yC[7]] |= CC[yC[31]] << CC[yC[60]], CC[yC[60]] += (CC[yC[31]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                 do {
-                   nz(CC[yC[9]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[60]] -= yC[3])
-                 } while (CC[yC[60]] > yC[16]);
- ... (23 more removed lines; see GitHub link above)
+     function vp(pp) {
+       return vp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, vp(pp)
+     }
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14074-L14090` → after: `L11716-L11720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11716-L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11716-L11720) · [Before (L14074-L14090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14074-L14090)

```diff
-           function gZ(...CC) {
-             return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = MZ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-           }
-           nz(FZ = yC[0], WZ = CC[-yC[208]] || !CC[yC[45]][qZ(397) + qZ(398) + gZ(399)])
-         } else {
-           function SZ(...CC) {
-             for (nz(CC[yC[11]] = yC[0], CC[yC[39]] = 'xbekOZHWm4_z^2807?{K9n`V~aR%Ll5fg=wYUC/vP)"sJ}+MD@[3E*c.j|p>:]#i<&FGo;d$(SB1!6uqytI,AXQNrhT', CC[yC[53]] = "" + (CC[yC[2]] || ""), CC[-yC[146]] = CC[yC[53]].length, CC[yC[35]] = [], CC[-yC[239]] = yC[2], CC[yC[8]] = yC[2], CC[ … [truncated]
-               if (CC[yC[163]] = CC[yC[39]].indexOf(CC[yC[53]][CC[yC[3]]]), CC[yC[163]] !== -yC[0])
-                 if (CC[yC[240]] < yC[2]) CC[yC[240]] = CC[yC[163]];
-                 else {
-                   nz(CC[yC[240]] += CC[yC[163]] * yC[24], CC[-yC[239]] |= CC[yC[240]] << CC[yC[8]], CC[yC[8]] += (CC[yC[240]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                   do {
-                     nz(CC[yC[35]].push(CC[-yC[239]] & yC[10]), CC[-yC[239]] >>= yC[3], CC[yC[8]] -= yC[3])
-                   } while (CC[yC[8]] > yC[16]);
-                   CC[yC[240]] = -yC[0]
-                 } return CC[yC[240]] > -yC[0] && CC[yC[35]].push((CC[-yC[239]] | CC[yC[240]] << CC[yC[8]]) & yC[10]), UC(CC[yC[35]])
- ... (1 more removed lines; see GitHub link above)
+     function tp(pp, ip) {
+       return tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, tp(pp, ip)
+     }
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14092-L14107` → after: `L11722-L11729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11722-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11722-L11729) · [Before (L14092-L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14092-L14107)

```diff
-           function pZ(CC) {
-             return typeof lC[CC] === yC[12] ? lC[CC] = SZ(XC[CC]) : lC[CC]
-           }
-           if (CC[yC[36]][pZ(400) + pZ(401)]) {
-             function PZ(...CC) {
-               for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = 'ul@%DvxHng<>K#c6=iAe17r~R/|]E}wYByXd$VM;k{LzFO53Ij_[Ch)bt&p:9s8SGqPQ`"+^N*U.m?0a!,ToZ2J4(fW', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[yC[8]] = CC[yC[20]].length, CC[-yC[73]] = [], CC[yC[7]] = yC[2], CC[yC[113]] = yC[2], CC[yC … [truncated]
-                 if (CC[yC[55]] = CC[yC[0]].indexOf(CC[yC[20]][CC[yC[21]]]), CC[yC[55]] !== -yC[0])
-                   if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[yC[55]];
-                   else {
-                     nz(CC[yC[16]] += CC[yC[55]] * yC[24], CC[yC[7]] |= CC[yC[16]] << CC[yC[113]], CC[yC[113]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                     do {
-                       nz(CC[-yC[73]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[113]] -= yC[3])
-                     } while (CC[yC[113]] > yC[16]);
-                     CC[yC[16]] = -yC[0]
-                   } return CC[yC[16]] > -yC[0] && CC[-yC[73]].push((CC[yC[7]] | CC[yC[16]] << CC[yC[113]]) & yC[10]), UC(CC[-yC[73]])
-             }
+     function Hp(pp, ip, cp) {
+       return (ip = dp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14109-L14113` → after: `L11731-L11738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11731-L11738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11731-L11738) · [Before (L14109-L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14109-L14113)

```diff
-             function GZ(...CC) {
-               return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = PZ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-             }
-             nz(FZ = -yC[0], WZ = !CC[yC[45]][GZ(402) + GZ(403) + GZ(404) + GZ(405)])
-           }
+     function dp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Ap(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Ap(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14115-L14167` → after: `L11740-L11749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11740-L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11740-L11749) · [Before (L14115-L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14115-L14167)

```diff
-         CC[yC[45]][qZ(yC[241]) + yC[242]][qZ(yC[244]) + qZ(yC[245])] = CC[yC[9]][yC[238]][yC[0]];
-         const NZ = (yC[2], vC[yC[55]])(CC[yC[45]][qZ(yC[241]) + yC[242]], CC[yC[36]][yC[243]] !== yC[2], FZ, WZ);
-         nz(fC()[qZ(409)](mC, yC[2], NZ, yC[2]), CC[yC[9]][qZ(410) + qZ(411)](mC), CC[yC[9]][yC[238]][yC[0]] = CC[yC[45]][qZ(yC[241]) + yC[242]][qZ(yC[244]) + qZ(yC[245])], CC[yC[36]][qZ(412)][qZ(413) + qZ(414) + qZ(415)](qZ(416) + qZ(417) + qZ(418), yC[0] + CC[yC[45]][qZ(yC[241]) … [truncated]
-       } else {
-         function RZ(CC) {
-           var zC, ZC, QC, wC, bC, nC, fC;
-           for (nz(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = yC[2], bC = yC[2], nC = -yC[0]), fC = yC[2]; fC < ZC; fC++) {
-             var oC = 'uVZQpEANLoHYqGeJDgnmXBfiCb[tvj*_T)0xO}h|My9R.&1#4(w<!^;,S:]s7k26lK8%`Pcrd~/FW$>I+U3{a"@z5?='.indexOf(zC[fC]);
-             if (oC !== -yC[0])
-               if (nC < yC[2]) nC = oC;
-               else {
-                 nz(nC += oC * yC[24], wC |= nC << bC, bC += (nC & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                 do {
-                   nz(QC.push(wC & yC[10]), wC >>= yC[3], bC -= yC[3])
-                 } while (bC > yC[16]);
-                 nC = -yC[0]
- ... (37 more removed lines; see GitHub link above)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Ap(ip) ? ip : ip + ""
+     }
+     var ep = 32,
+       jp = function(pp) {
+         function ip() {
+           return function(pp, ip) {
+             if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+           }(this, ip), Up(this, ip, arguments)
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14169-L14218` → after: `L11751-L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11751-L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11751-L11757) · [Before (L14169-L14218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14169-L14218)

```diff
-         if (BC) {
-           function KZ(...CC) {
-             for (nz(CC[yC[11]] = yC[0], CC[yC[265]] = '@Z_z6+GB>.s0;|R$Y}^:g?e=k1p/{M*ho#CrAlFabS34EfmJU,7uXOdIxKj(29yiq"!]%TDPvHN`5QcVn&)~8wt[W<L', CC[yC[20]] = "" + (CC[yC[2]] || ""), CC[-yC[264]] = CC[yC[20]].length, CC[yC[35]] = [], CC[-yC[163]] = yC[2], CC[-yC[120]] = yC[2], … [truncated]
-               if (CC[yC[5]] = CC[yC[265]].indexOf(CC[yC[20]][CC[yC[3]]]), CC[yC[5]] !== -yC[0])
-                 if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[yC[5]];
-                 else {
-                   nz(CC[yC[16]] += CC[yC[5]] * yC[24], CC[-yC[163]] |= CC[yC[16]] << CC[-yC[120]], CC[-yC[120]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                   do {
-                     nz(CC[yC[35]].push(CC[-yC[163]] & yC[10]), CC[-yC[163]] >>= yC[3], CC[-yC[120]] -= yC[3])
-                   } while (CC[-yC[120]] > yC[16]);
-                   CC[yC[16]] = -yC[0]
-                 } return CC[yC[16]] > -yC[0] && CC[yC[35]].push((CC[-yC[163]] | CC[yC[16]] << CC[-yC[120]]) & yC[10]), UC(CC[yC[35]])
-           }
- 
-           function YZ(...CC) {
-             return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = KZ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
- ... (34 more removed lines; see GitHub link above)
+         return function(pp, ip) {
+           if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+           pp.prototype = Object.create(ip && ip.prototype, {
+             constructor: {
+               value: pp,
+               writable: !0,
+               configurable: !0
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14220-L14222` → after: `L11759-L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11759-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11759-L11806) · [Before (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14220-L14222)

```diff
- 
-             function XZ(...CC) {
-               return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = lZ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
+           }), Object.defineProperty(pp, "prototype", {
+             writable: !1
+           }), ip && tp(pp, ip)
+         }(ip, pp), cp = ip, op = [{
+           key: "renderIcon",
+           value: function(pp) {
+             var ip = this.props.inactiveColor,
+               cp = 16,
+               op = ep / 6,
+               Ip = ep / 3,
+               Sp = pp.inactive ? ip : pp.color;
+             if ("plainline" === pp.type) return Op.createElement("line", {
+               strokeWidth: 4,
+               fill: "none",
+               stroke: Sp,
+               strokeDasharray: pp.payload.strokeDasharray,
+ ... (32 more added lines; see GitHub link above)
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14224-L14330` → after: `L11808-L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11808-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11808-L11815) · [Before (L14224-L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14224-L14330)

```diff
-             nz(jC = [CC[yC[2]], eC[yC[21]][YZ(443) + YZ(444) + yC[259]],
-               [yC[2], CC[yC[9]][XZ(445) + yC[31]][yC[0]], yC[2]]
-             ], kC(XZ(446), XZ(447) + XZ(448), XZ(449) + XZ(450))[XZ(451) + XZ(452)])
-           } else bz(CC[yC[2]], RC[yC[0]], [yC[2], CC[yC[9]][YZ(453) + yC[31]][yC[0]], yC[2]])
-         }
-         if (Az) {
-           function cZ(...CC) {
-             for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = '"iaKZgdGLAR4Iw[kFbzQDqtHO.f)c#NTY/!Ujh$0%{X@ES=`m*+7sM&y,BCVW^_~nprlu;]x3P1o:J>e25?9|(<v}68', CC[yC[45]] = "" + (CC[yC[2]] || ""), CC[yC[36]] = CC[yC[45]].length, CC[yC[212]] = [], CC[yC[270]] = yC[2], CC[-yC[271]] = yC[2], CC[ … [truncated]
-               if (CC[yC[55]] = CC[yC[0]].indexOf(CC[yC[45]][CC[yC[3]]]), CC[yC[55]] !== -yC[0])
-                 if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[yC[55]];
-                 else {
-                   nz(CC[yC[16]] += CC[yC[55]] * yC[24], CC[yC[270]] |= CC[yC[16]] << CC[-yC[271]], CC[-yC[271]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                   do {
-                     nz(CC[yC[212]].push(CC[yC[270]] & yC[10]), CC[yC[270]] >>= yC[3], CC[-yC[271]] -= yC[3])
-                   } while (CC[-yC[271]] > yC[16]);
-                   CC[yC[16]] = -yC[0]
- ... (91 more removed lines; see GitHub link above)
+             return Op.createElement(Yp.c, {
+               fill: Sp,
+               cx: cp,
+               cy: cp,
+               size: ep,
+               sizeType: "diameter",
+               type: pp.type
+             })
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14332-L14395` → after: `L11817-L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11817-L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11817-L11863) · [Before (L14332-L14395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14332-L14395)

```diff
-           if (CC[yC[9]][yC[238]][yC[0]] <= yC[2]) {
-             function kZ(...CC) {
-               for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = 'J{FeEWgZUQLqDGVOfasS@0clCI<XHu#;j2T!7=v.+1?^N~&(>P/*i|ro3Yn"}%[_wb`BARmkMhx6y4z95ptK)]:,d8$', CC[yC[280]] = "" + (CC[yC[2]] || ""), CC[yC[4]] = CC[yC[280]].length, CC[yC[9]] = [], CC[yC[7]] = yC[2], CC[yC[8]] = yC[2], CC[yC[1 … [truncated]
-                 if (CC[-yC[125]] = CC[yC[0]].indexOf(CC[yC[280]][CC[yC[21]]]), CC[-yC[125]] !== -yC[0])
-                   if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[-yC[125]];
-                   else {
-                     nz(CC[yC[16]] += CC[-yC[125]] * yC[24], CC[yC[7]] |= CC[yC[16]] << CC[yC[8]], CC[yC[8]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                     do {
-                       nz(CC[yC[9]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[8]] -= yC[3])
-                     } while (CC[yC[8]] > yC[16]);
-                     CC[yC[16]] = -yC[0]
-                   } return CC[yC[16]] > -yC[0] && CC[yC[9]].push((CC[yC[7]] | CC[yC[16]] << CC[yC[8]]) & yC[10]), UC(CC[yC[9]])
-             }
- 
-             function VZ(...CC) {
-               return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = kZ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
- ... (48 more removed lines; see GitHub link above)
+         }, {
+           key: "renderItems",
+           value: function() {
+             var pp = this,
+               ip = this.props,
+               cp = ip.payload,
+               op = ip.iconSize,
+               Yp = ip.layout,
+               Ap = ip.formatter,
+               Wp = ip.inactiveColor,
+               yp = {
+                 x: 0,
+                 y: 0,
+                 width: ep,
+                 height: ep
+               },
+ ... (31 more added lines; see GitHub link above)
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14397-L14433` → after: `L11865-L11866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11865-L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11865-L11866) · [Before (L14397-L14433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14397-L14433)

```diff
-               }
-             }
-           } else if (OC)
-             for (let fQ = yC[2]; fQ < HC[UZ(515)]; fQ++) {
-               const oQ = HC[fQ];
-               AC[oQ] && CC[yC[9]][UZ(516) + yC[31]][oQ] !== yC[2] && nz(fC()[UZ(yC[299])](mC, yC[2], 1.05 * OZ, yC[2]), CC[yC[9]][UZ(518) + UZ(519)](mC))
-             } else if (CC[yC[36]][UZ(yC[300]) + yC[31]]) {
-               function qQ(...CC) {
-                 for (nz(CC[yC[11]] = yC[0], CC[yC[39]] = 'HPupRFI?voEq&0j^kWlZ+.3DnLw>bCY/rs~xB4f}X("#8)_JeMg{yTz9=<A$haG2U]cV[dOQ15,mS|N!i;*:t67K@%`', CC[yC[68]] = "" + (CC[yC[2]] || ""), CC[yC[36]] = CC[yC[68]].length, CC[-yC[298]] = [], CC[yC[51]] = yC[2], CC[yC[8]] = yC[2], C … [truncated]
-                   if (CC[yC[5]] = CC[yC[39]].indexOf(CC[yC[68]][CC[yC[21]]]), CC[yC[5]] !== -yC[0])
-                     if (CC[yC[31]] < yC[2]) CC[yC[31]] = CC[yC[5]];
-                     else {
-                       nz(CC[yC[31]] += CC[yC[5]] * yC[24], CC[yC[51]] |= CC[yC[31]] << CC[yC[8]], CC[yC[8]] += (CC[yC[31]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                       do {
-                         nz(CC[-yC[298]].push(CC[yC[51]] & yC[10]), CC[yC[51]] >>= yC[3], CC[yC[8]] -= yC[3])
-                       } while (CC[yC[8]] > yC[16]);
- ... (21 more removed lines; see GitHub link above)
+               }, Yp ? Yp(tp, ip, cp) : tp))
+             }))
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14436-L14453` → after: `L11901-L11908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11901-L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11901-L11908) · [Before (L14436-L14453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14436-L14453)

```diff
-           function NQ(...CC) {
-             return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = WQ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-           }
-           nz(CC[yC[36]][NQ(524)][NQ(525) + NQ(526) + NQ(527)](NQ(528), yC[0]), CC[yC[9]][NQ(529) + NQ(530) + NQ(531)] = sC, CC[yC[9]][NQ(532) + yC[302]] = fz ? Fz : Wz, CC[yC[45]][NQ(533)] = yC[115], CC[yC[45]][NQ(534)] = yC[2])
-         }
-         if (CC[yC[45]][zC(yC[304])] !== -yC[0]) {
-           function MQ(...CC) {
-             for (nz(CC[yC[11]] = yC[0], CC[yC[0]] = 'A"RldGteWyS:,YcjN?%)X@1(5Vbxi/k$_a=o#zhr`&BqC;^*.KH3ELP8!6T>]~[}gZwv7+|F9I04MfmpnuJ2U<DOQs{', CC[yC[45]] = "" + (CC[yC[2]] || ""), CC[yC[303]] = CC[yC[45]].length, CC[yC[9]] = [], CC[yC[7]] = yC[2], CC[yC[8]] = yC[2], CC[yC[16] … [truncated]
-               if (CC[-yC[82]] = CC[yC[0]].indexOf(CC[yC[45]][CC[yC[21]]]), CC[-yC[82]] !== -yC[0])
-                 if (CC[yC[16]] < yC[2]) CC[yC[16]] = CC[-yC[82]];
-                 else {
-                   nz(CC[yC[16]] += CC[-yC[82]] * yC[24], CC[yC[7]] |= CC[yC[16]] << CC[yC[8]], CC[yC[8]] += (CC[yC[16]] & yC[25]) > yC[26] ? yC[27] : yC[28]);
-                   do {
-                     nz(CC[yC[9]].push(CC[yC[7]] & yC[10]), CC[yC[7]] >>= yC[3], CC[yC[8]] -= yC[3])
-                   } while (CC[yC[8]] > yC[16]);
-                   CC[yC[16]] = -yC[0]
- ... (2 more removed lines; see GitHub link above)
+     function Rp(pp) {
+       return Rp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Rp(pp)
+     }
+     var qp = ["ref"];
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14455-L14549` → after: `L11910-L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11910-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11910-L11919) · [Before (L14455-L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14455-L14549)

```diff
-           function gQ(CC) {
-             return typeof lC[CC] === yC[12] ? lC[CC] = MQ(XC[CC]) : lC[CC]
-           }
-           const SQ = CC[yC[45]][zC(yC[304])] / CC[yC[45]][zC(536) + zC(537) + zC(538) + gQ(yC[312]) + gQ(yC[313]) + yC[314]],
-             pQ = CC[yC[45]][gQ(yC[305]) + gQ(yC[306]) + gQ(yC[308]) + gQ(yC[307])] + SQ * (CC[yC[45]][gQ(yC[305]) + gQ(yC[306]) + gQ(545) + gQ(yC[307])] - CC[yC[45]][gQ(yC[305]) + gQ(yC[306]) + gQ(yC[308]) + gQ(yC[307])]);
-           if (fC()[gQ(546)](mC, yC[2], yC[2], yC[2]), CC[yC[45]][gQ(yC[311])] > yC[2]) {
-             const GQ = .4;
-             mC[yC[0]] = pQ * GQ
-           }
-           const PQ = pQ * CC[yC[45]][gQ(yC[309]) + gQ(yC[310]) + gQ(550) + gQ(551)];
-           nz(mC[CC[yC[45]][gQ(yC[309]) + gQ(yC[310]) + gQ(552)]] = PQ, CC[yC[9]][gQ(553) + gQ(554)](mC)), ++CC[yC[45]][gQ(yC[311])] > CC[yC[45]][gQ(yC[305]) + gQ(yC[306]) + gQ(555) + gQ(yC[312]) + gQ(yC[313]) + yC[314]] && (CC[yC[45]][gQ(yC[311])] = -yC[0])
-         }
-         if (xC) {
-           if (nz(CC[yC[45]][zC(yC[323])] = yC[2], CC[yC[36]][zC(yC[318])][zC(yC[319]) + zC(yC[320]) + zC(yC[321])](zC(yC[322]), .8)), CC[yC[36]][zC(yC[358]) + zC(yC[338])] && nC === bC[yC[186]][zC(yC[324]) + yC[325]]) {
-             const RQ = Qz(CC[yC[9]][yC[238]][yC[0]], yC[51]);
-             nz(fC()[zC(yC[315])](mC, yC[2], -RQ, yC[2]), CC[yC[9]][zC(yC[316]) + zC(yC[317])](mC))
- ... (79 more removed lines; see GitHub link above)
+     function Mp(pp, ip) {
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

#### 439. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14551-L14611` → after: `L11921-L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11921-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11921-L11931) · [Before (L14551-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14551-L14611)

```diff
-           function mQ(...CC) {
-             return CC[yC[11]] = yC[0], typeof lC[CC[yC[2]]] === yC[12] ? lC[CC[yC[2]]] = dQ(XC[CC[yC[2]]]) : lC[CC[yC[2]]]
-           }
-           const HQ = CC[yC[51]] / yC[341],
-             EQ = (YQ - CC[yC[9]][yC[238]][yC[0]]) * MC[yC[20]][zC(607) + zC(608)](iz[zC(yC[342]) + zC(609) + zC(610)] * HQ);
-           nz(fC()[zC(yC[315])](mC, yC[2], EQ * CC[yC[9]].Mq / HQ, yC[2]), CC[yC[9]][mQ(611) + mQ(612)](mC))
-         }
-       }
-       const vz = function(CC, zC, ZC, QC, nC, fC) {
-           const oC = CC.airborneMode;
-           if (null === oC) return !1;
-           const qC = oC.activeMovementType,
-             FC = QC.movementTypeLastTick,
-             WC = null === oC.durationMs || !QC.floatStartTicksAgo || QC.floatStartTicksAgo < oC.durationMs / 1e3 * wC.f.clientTicksPerSecond,
-             NC = QC.isInAir && !fC && (nC.Np[1] < 0 || FC === qC) && !QC.hitWhilstAirborne(qC) && WC,
-             MC = NC && FC !== qC,
- ... (45 more removed lines; see GitHub link above)
+     function Cp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Mp(Object(cp), !0).forEach((function(ip) {
+           Bp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Mp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14613-L14614` → after: `L11933-L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11933-L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11933-L11937) · [Before (L14613-L14614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14613-L14614)

```diff
-     function zz(...CC) {
-       return jC = [CC, {}], kC(LC(662))
+     function Ep(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Np(Op.key), Op)
+       }
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14617-L14618` → after: `L11940-L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11940-L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11940-L11949) · [Before (L14617-L14618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14617-L14618)

```diff
-     function Zz(...CC) {
-       return jC = [CC, {}], kC(LC(663))
+     function Xp(pp, ip, cp) {
+       return ip = Qp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Rp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, lp() ? Reflect.construct(ip, cp || [], Qp(pp).constructor) : ip.apply(pp, cp))
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14621-L14627` → after: `L11952-L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11952-L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11952-L11958) · [Before (L14621-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14621-L14627)

```diff
-     function Qz(...CC) {
-       var zC = {
-         get [LC(664) + yC[107]]() {
-           return Cz
-         }
-       };
-       return jC = [CC, zC], kC(LC(665), LC(yC[363]) + LC(yC[364]), LC(yC[365]) + LC(yC[366]))[LC(yC[367]) + LC(yC[368])]
+     function lp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (lp = function() {
+         return !!pp
+       })()
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14630-L14631` → after: `L11961-L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11961-L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11961-L11964) · [Before (L14630-L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14630-L14631)

```diff
-     function wz(...CC) {
-       return jC = [CC, {}], kC(LC(672), LC(yC[363]) + LC(yC[364]), LC(yC[365]) + LC(yC[366]))[LC(yC[367]) + LC(yC[368])]
+     function Qp(pp) {
+       return Qp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Qp(pp)
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14634-L14635` → after: `L11967-L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11967-L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11967-L11970) · [Before (L14634-L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14634-L14635)

```diff
-     function bz(...CC) {
-       return jC = [CC, {}], kC(LC(673), LC(yC[363]) + LC(yC[364]), LC(yC[365]) + LC(yC[366]))[LC(yC[367]) + LC(yC[368])]
+     function Jp(pp, ip) {
+       return Jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Jp(pp, ip)
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14638-L14639` → after: `L11973-L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11973-L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11973-L11979) · [Before (L14638-L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14638-L14639)

```diff
-     function nz() {
-       nz = function() {}
+     function Bp(pp, ip, cp) {
+       return (ip = Np(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14643-L14652` → after: `L11982-L11989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11982-L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11982-L11989) · [Before (L14643-L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14643-L14652)

```diff
-     function oz(CC, zC) {
-       const {
-         JR: ZC
-       } = CC, QC = CC.JR.YH("movement");
-       for (let wC = 0; wC < QC.length; wC++) {
-         const bC = QC[wC];
-         if (ZC.MCC(bC.mH)) {
-           const QC = ZC.eT(bC.mH),
-             wC = ZC.MzC(bC.mH);
-           CC.bloxd.regrowPlayerBody(bC.mH), EC(CC, bC.mH, bC, wC, QC, zC)
+     function Np(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Rp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Rp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14654-L14757` → after: `L11991-L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11991-L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11991-L11993) · [Before (L14654-L14757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14654-L14757)

```diff
-       }
-     }
-   },
-   37574: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => MC,
-       tickMovementInputsPrePhysics: () => gC,
-       updateTouchMoveSpeed: () => hC
-     });
-     var QC = ZC(20),
-       wC = ZC(28),
-       bC = ZC(37577),
-       nC = ZC(1275),
-       fC = ZC(1078),
-       oC = ZC(36673),
-       qC = ZC(326),
- ... (88 more removed lines; see GitHub link above)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Rp(ip) ? ip : ip + ""
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14761-L14794` → after: `L11997-L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L11997-L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L11997-L12011) · [Before (L14761-L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14761-L14794)

```diff
-       CC.sprint ? CC._running = !0 : zC.runningSpeed < zC.walkingSpeed && (CC._running = !1)
-     }
- 
-     function AC(CC, zC, ZC) {
-       return CC.crouching && !zC.shouldIgnoreCrouchingSpeedReduction() || !ZC.canRunCombinator.getTotalBooleanVal()
-     }
- 
-     function xC(CC, zC, ZC, QC) {
-       const {
-         pR: wC
-       } = CC;
-       return AC(zC, ZC, QC) ? wC.crouchingSpeed : Math.max(wC.runningSpeed, wC.walkingSpeed)
-     }
- 
-     function JC(CC, zC, ZC, QC) {
-       return AC(ZC, QC, CC) ? zC.crouchingSpeed : CC._running ? zC.runningSpeed : zC.walkingSpeed
- ... (18 more removed lines; see GitHub link above)
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

#### 449. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14798-L14808` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12015) · [Before (L14798-L14808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14798-L14808)

```diff
-       eC(CC, CC.JR.MzC(CC.qE), CC.JR.yCC(CC.qE), CC.JR.TzC())
-     }
- 
-     function KC(CC, zC, ZC, QC) {
-       zC.jumping = QC.touchJump, zC.setCrouching(CC.pR.canCrouch && (QC.touchCrouch || QC.padSneakToggled)), eC(CC, zC, ZC, QC)
-     }
-     var YC, dC, mC, HC, EC, lC, XC, cC, uC;
-     const rC = [1, 91, 0, 8, "c", 52, 7, 5, "f", 150, 255, "length", "b", "d", 133, "e", "undefined", void 0, 2, 19, 3, 127, 63, 6, "fromCodePoint", 12, "push", 218, 9, 109, "a", 171, 71, 8191, 88, 13, 14, 4, 138, 11, 43, null, 117, 118, 119, 128, "te", 129, "||", "split", 225, 2 … [truncated]
- 
-     function sC(...CC) {
-       return CC[rC[11]] = rC[0], typeof HC !== rC[16] && HC ? (new HC).decode(new EC(CC[rC[2]])) : typeof lC !== rC[16] && lC ? lC.from(CC[rC[2]]).toString("utf-8") : uC(CC[rC[2]])
+       return pp.value
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14810-L14839` → after: `L12017-L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12017-L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12017-L12065) · [Before (L14810-L14839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14810-L14839)

```diff
- 
-     function TC() {}
- 
-     function aC() {
-       aC = function() {}
-     }
-     aC(YC = {}, dC = ["K1#=#@42e*4<$<YK=(3=Z[BB[T7#<n`2Q(BM)@lSeW2{e*zsz;A", 'ji+)`dyvo==]z0].W<YO!IX_X(kg_{DS!W";if!E,LHK`Rh{CY/)V]tl', "[N!<Kp|vh[{cHbU>+9usvhL`5u<JHbWc9bWa)#iBrh8a(n", "fiesA}X^c(Y]~HWzt+*==:TSWRGTvA[2(Mn0pMfEDi", "%KEFv`s>XTQ:dWDU3]3xw+b^=;6s{*K29g|mF#+_MO7mbU … [truncated]
-         aC(CC[rC[11]] = rC[2], CC[-rC[14]] = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }], CC[rC[12]] = rC[17], CC[rC[4]] = []);
- ... (14 more removed lines; see GitHub link above)
+     var bp = function(pp) {
+       function ip() {
+         var pp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return Bp(pp = Xp(this, ip, [].concat(Op)), "lastBoundingBox", {
+           width: -1,
+           height: -1
+         }), pp
+       }
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+ ... (33 more added lines; see GitHub link above)
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14841-L14887` → after: `L12067-L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12067-L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12067-L12081) · [Before (L14841-L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14841-L14887)

```diff
-       }()),
-       function(CC) {
-         return typeof YC[CC] === rC[16] ? YC[CC] = function(...CC) {
-           for (aC(CC[rC[11]] = rC[0], CC[rC[0]] = '5lAbnZkaBOFJEyWRHTu>i7qg{SzcNs2mxGK/@|U.f^81e+}vY<0M~=;d49Q*[pohL(P3`_CID])t#:$&r"?j,w6%!XV', CC[rC[1]] = "" + (CC[rC[2]] || ""), CC[rC[4]] = CC[rC[1]].length, CC[rC[9]] = [], CC[rC[7]] = rC[2], CC[rC[8]] = rC[2], CC[rC[6]] = -rC … [truncated]
-             if (CC[-rC[5]] = CC[rC[0]].indexOf(CC[rC[1]][CC[rC[3]]]), CC[-rC[5]] !== -rC[0])
-               if (CC[rC[6]] < rC[2]) CC[rC[6]] = CC[-rC[5]];
-               else {
-                 aC(CC[rC[6]] += CC[-rC[5]] * rC[1], CC[rC[7]] |= CC[rC[6]] << CC[rC[8]], CC[rC[8]] += (CC[rC[6]] & rC[33]) > rC[34] ? rC[35] : rC[36]);
-                 do {
-                   aC(CC[rC[9]].push(CC[rC[7]] & rC[10]), CC[rC[7]] >>= rC[3], CC[rC[8]] -= rC[3])
-                 } while (CC[rC[8]] > rC[6]);
-                 CC[rC[6]] = -rC[0]
-               } return CC[rC[6]] > -rC[0] && CC[rC[9]].push((CC[rC[7]] | CC[rC[6]] << CC[rC[8]]) & rC[10]), sC(CC[rC[9]])
-         }(dC[CC]) : YC[CC]
-       }(112) in TC && function(...CC) {
-         CC[rC[11]] = rC[2]
- ... (31 more removed lines; see GitHub link above)
+           return null
+         }
+       }, {
+         key: "updateBBox",
+         value: function() {
+           var pp = this.props.onBBoxUpdate,
+             ip = this.getBBox();
+           ip ? (Math.abs(ip.width - this.lastBoundingBox.width) > 1 || Math.abs(ip.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = ip.width, this.lastBoundingBox.height = ip.height, pp && pp(ip)) : -1 === this.lastBoundingBox.width && -1 === this.lastB … [truncated]
+         }
+       }, {
+         key: "getBBoxSnapshot",
+         value: function() {
+           return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Cp({}, this.lastBoundingBox) : {
+             width: 0,
+             height: 0
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14889-L14954` → after: `L12083-L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12083-L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12083-L12128) · [Before (L14889-L14954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14889-L14954)

```diff
-           aC(void 0, void 0, void 0, void 0);
-           const oC = wC(116) + rC[15],
-             qC = (CC = (zC = (ZC = (QC = Object[wC(rC[42]) + wC(rC[43]) + wC(rC[44])](navigator, wC(120) + wC(121) + wC(122) + "y") !== rC[17] ? wC(123) + rC[46] : rC[17]) !== rC[41] && void 0 !== QC ? QC : rC[17]) !== rC[41] && void 0 !== ZC ? ZC : Object[wC(rC[42]) + wC(rC[43]) … [truncated]
-           let WC = (0, nC[rC[13]])()[wC(132) + wC(rC[14])];
-           if (WC) {
-             WC = FC[wC(134)][wC(135) + wC(136) + wC(137)](WC);
-             try {
-               function NC(...CC) {
-                 for (aC(CC[rC[11]] = rC[0], CC[rC[0]] = 'VNaRAW0JK=nlC>XFEMj7DYU|<Sb#^TIt(/oumGOk4vP}Bygsf?h[cH1!Z$di~rQ*.p@q&L%{,"+w2z3_6:5];`9x8)e', CC[rC[12]] = "" + (CC[rC[2]] || ""), CC[rC[51]] = CC[rC[12]].length, CC[rC[37]] = [], CC[rC[52]] = rC[2], CC[rC[23]] = rC[2], CC[ … [truncated]
-                   if (CC[rC[28]] = CC[rC[0]].indexOf(CC[rC[12]][CC[rC[50]]]), CC[rC[28]] !== -rC[0])
-                     if (CC[rC[6]] < rC[2]) CC[rC[6]] = CC[rC[28]];
-                     else {
-                       aC(CC[rC[6]] += CC[rC[28]] * rC[1], CC[rC[52]] |= CC[rC[6]] << CC[rC[23]], CC[rC[23]] += (CC[rC[6]] & rC[33]) > rC[34] ? rC[35] : rC[36]);
-                       do {
-                         aC(CC[rC[37]].push(CC[rC[52]] & rC[10]), CC[rC[52]] >>= rC[3], CC[rC[23]] -= rC[3])
-                       } while (CC[rC[23]] > rC[6]);
- ... (50 more removed lines; see GitHub link above)
+         }
+       }, {
+         key: "getDefaultPosition",
+         value: function(pp) {
+           var ip, cp, Op = this.props,
+             op = Op.layout,
+             Ip = Op.align,
+             Sp = Op.verticalAlign,
+             xp = Op.margin,
+             Lp = Op.chartWidth,
+             Yp = Op.chartHeight;
+           return pp && (void 0 !== pp.left && null !== pp.left || void 0 !== pp.right && null !== pp.right) || (ip = "center" === Ip && "vertical" === op ? {
+             left: ((Lp || 0) - this.getBBoxSnapshot().width) / 2
+           } : "right" === Ip ? {
+             right: xp && xp.right || 0
+           } : {
+ ... (30 more added lines; see GitHub link above)
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14956-L14958` → after: `L12130-L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12130-L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12130-L12150) · [Before (L14956-L14958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14956-L14958)

```diff
-           }
-         }))
-       })()
+           }, function(pp, ip) {
+             if (Op.isValidElement(pp)) return Op.cloneElement(pp, ip);
+             if ("function" === typeof pp) return Op.createElement(pp, ip);
+             ip.ref;
+             var cp = Tp(ip, qp);
+             return Op.createElement(jp, cp)
+           }(cp, Cp(Cp({}, this.props), {}, {
+             payload: (0, mp.e)(Lp, xp, fp)
+           })))
+         }
+       }]) && Ep(cp.prototype, op), Ip && Ep(cp, Ip), Object.defineProperty(cp, "prototype", {
+         writable: !1
+       }), cp;
+       var cp, op, Ip
+     }(Op.PureComponent);
+     Bp(bp, "displayName", "Legend"), Bp(bp, "defaultProps", {
+ ... (5 more added lines; see GitHub link above)
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14960-L14964` → after: `L12152-L12154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12152-L12154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12152-L12154) · [Before (L14960-L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14960-L14964)

```diff
-   37267: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => nC,
-       holderAttachmentOpacity: () => oC,
-       invalidateAttachmentProximityFade: () => fC
+   5195: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => wp
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14966-L14967` → after: `L12156-L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12156-L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12156-L12162) · [Before (L14966-L14967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14966-L14967)

```diff
-     var QC = ZC(37275);
-     let wC, bC;
+     var Op = cp(5203),
+       op = cp(62),
+       Ip = cp(5207),
+       Sp = cp.n(Ip),
+       xp = cp(5299),
+       Lp = cp(5582),
+       Yp = cp(5588);
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14970-L14992` → after: `L12165-L12169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12165-L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12165-L12169) · [Before (L14970-L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14970-L14992)

```diff
-       return {
-         name: "proximityFade",
-         order: 99,
-         state: {
-           serverOpacity: 1,
-           _prevDistanceToCamera: -1,
-           _prevServerOpacity: -1,
-           _prevOpacity: -1,
-           _resendPending: !1
-         },
-         vR: function(zC, ZC) {
-           const {
-             proximityFadeDistance: QC,
-             proximityFadeMinOpacity: nC
-           } = CC.pR;
-           if (wC !== QC || bC !== nC) {
- ... (7 more removed lines; see GitHub link above)
+       return Dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Dp(pp)
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L14996-L14997` → after: `L12173-L12180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12173-L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12173-L12180) · [Before (L14996-L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L14996-L14997)

```diff
-       const ZC = CC.JR.szC(zC);
-       ZC && (ZC._resendPending = !0)
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15000-L15003` → after: `L12183-L12192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12183-L12192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12183-L12192) · [Before (L15000-L15003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15000-L15003)

```diff
-     function oC(CC, zC) {
-       var ZC, QC, wC, bC;
-       const nC = null !== (ZC = null === (QC = CC.JR.szC(zC)) || void 0 === QC ? void 0 : QC._prevOpacity) && void 0 !== ZC ? ZC : -1;
-       return nC >= 0 ? nC : null !== (wC = null === (bC = CC.QE[CC.qE][zC]) || void 0 === bC ? void 0 : bC.opacity) && void 0 !== wC ? wC : 1
+     function Pp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ap(Object(cp), !0).forEach((function(ip) {
+           Wp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ap(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15007-L15035` → after: `L12196-L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12196-L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12196-L12213) · [Before (L15007-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15007-L15035)

```diff
-       var nC, fC, oC, qC, WC, NC;
-       const {
-         JR: MC
-       } = CC, gC = null === (nC = MC.lL(zC.mH)) || void 0 === nC ? void 0 : nC.nB;
-       if (!gC) return;
-       if (zC.replayForceHidden || zC.mH === CC.qE && CC.camera.uL < .01 && !QC.b.isCameraDetachedFromPlayer(CC)) {
-         var SC, pC;
-         zC._prevServerOpacity = zC.serverOpacity, zC._prevDistanceToCamera = -1;
-         const ZC = !zC.replayForceHidden && zC.serverOpacity > 0 && null !== (SC = null === (pC = CC.Vg.CS) || void 0 === pC ? void 0 : pC.castsEntitySunShadows) && void 0 !== SC && SC,
-           QC = MC.EzC(zC.mH);
-         if (0 === zC._prevOpacity && !zC._resendPending && (!QC || QC.drawnHidden === ZC)) return;
-         return zC._prevOpacity = 0, void FC(CC, zC, 0, ZC)
-       }
-       const PC = CC.bloxd.getLifeformEyeHeight(zC.mH),
-         GC = ZC[0] - gC[0],
-         RC = ZC[1] - gC[1] - PC,
- ... (13 more removed lines; see GitHub link above)
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
+         configurable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15038-L15050` → after: `L12216-L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12216-L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12216-L12240) · [Before (L15038-L15050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15038-L15050)

```diff
-     function FC(CC, zC, ZC) {
-       var QC, wC, bC;
-       let nC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       zC._resendPending = !1;
-       const {
-         JR: fC
-       } = CC, oC = CC.Vg.nH, qC = null !== (QC = null === (wC = fC.fzC(zC.mH)) || void 0 === wC ? void 0 : wC.WH) && void 0 !== QC ? QC : null;
-       if (null !== qC) {
-         const CC = ZC > 0 || nC,
-           QC = fC.EzC(zC.mH);
-         if (QC) {
-           const zC = QC.drawnHidden !== nC;
-           QC.drawnHidden = nC, QC.meshEnabledCombinator.setBooleanType("proximityFade", CC), zC && QC.meshEnabledCombinator.forceUpdate()
+     function yp(pp, ip) {
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
+ ... (9 more added lines; see GitHub link above)
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15052-L15056` → after: `L12242-L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12242-L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12242-L12257) · [Before (L15052-L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15052-L15056)

```diff
-         CC && (oC.set(qC, "aOpacity", ZC), oC.pE(qC, "aOpacity", ZC))
-       }
-       const FC = null === (bC = fC.getState(zC.mH, fC.names.cape)) || void 0 === bC ? void 0 : bC.mesh;
-       var WC;
-       FC && (FC.ZE.aOpacity = ZC, FC.isVisible = !nC && !(null !== (WC = CC.QE[CC.qE][zC.mH]) && void 0 !== WC && WC._invisibleEffect))
+       }(pp, ip) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return Up(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Up(pp, ip)
+       }(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+     function Up(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15059-L15070` → after: `L12365-L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12365-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12365-L12367) · [Before (L15059-L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15059-L15070)

```diff
-   37911: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       RigAnimationState: () => KC,
-       default: () => YC,
-       getRigController: () => mC,
-       getRigFootfallPhase: () => EC,
-       playRigAction: () => uC,
-       playRigHurt: () => rC,
-       rigActionPlaying: () => XC,
-       rigHasAction: () => lC,
-       rigLeavesWalkToCode: () => HC,
-       setRigAiState: () => cC
+   6262: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => hp
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15072` → after: `L12369-L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12369-L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12369-L12370) · [Before (L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15072)

```diff
-     var QC = ZC(338),
+     var Op = cp(62),
+       op = cp(5575),
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15074-L15101` → after: `L12372-L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12372-L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12372-L12376) · [Before (L15074-L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15074-L15101)

```diff
-       bC = ZC(37211),
-       nC = ZC(37246),
-       fC = ZC(326),
-       oC = ZC(37213),
-       qC = ZC(37917),
-       FC = ZC(36952),
-       WC = ZC(37486),
-       NC = ZC(37477),
-       MC = ZC(37581),
-       gC = ZC(37018),
-       SC = ZC(37926);
-     const pC = 2,
-       PC = 40,
-       GC = 120,
-       RC = .1,
-       AC = -.5,
- ... (12 more removed lines; see GitHub link above)
+       Sp = cp(5203),
+       xp = cp(5299),
+       Lp = cp(6115),
+       Yp = cp(5588),
+       Dp = cp(6264);
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15104-L15118` → after: `L12379-L12383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12379-L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12379-L12383) · [Before (L15104-L15118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15104-L15118)

```diff
-       return {
-         name: "rigAnimation",
-         order: 106,
-         stateConstructor: KC,
-         xR: function(zC, ZC) {
-           ZC._isVehicle = (0, bC.u)(ZC.target), dC(CC, ZC)
-         },
-         lY: function(zC, ZC) {
-           const QC = sC(CC, zC);
-           null !== QC && QC.getRigController() === ZC._controller && QC.setRigController(null)
-         },
-         vR: function(zC, ZC) {
-           for (const QC of ZC) QC._libraryVersion !== qC.c.version && dC(CC, QC), null !== QC._controller && aC(CC, QC, zC / 1e3)
-         }
-       }
+       return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Ap(pp)
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15122-L15124` → after: `L12387-L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12387-L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12387-L12421) · [Before (L15122-L15124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15122-L15124)

```diff
-       var ZC;
-       const QC = zC.mH;
-       zC._libraryVersion = qC.c.version, zC._controller = qC.c.createController(zC.target, CC.Vg.nH, zC.WH), zC._primed = !1, null === (ZC = sC(CC, QC)) || void 0 === ZC || ZC.setRigController(zC._controller), null !== zC._controller && (0, gC.c)(CC).animations.restoreClip(QC, zC … [truncated]
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
+ ... (19 more added lines; see GitHub link above)
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15128-L15133` → after: `L12425-L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12425-L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12425-L12427) · [Before (L15128-L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15128-L15133)

```diff
-       var ZC, QC;
-       return null !== (ZC = null === (QC = sC(CC, zC)) || void 0 === QC ? void 0 : QC.getRigController()) && void 0 !== ZC ? ZC : null
-     }
- 
-     function HC(CC) {
-       return CC.rigged.binding.target === qC.b
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15137-L15138` → after: `L12431-L12434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12431-L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12431-L12434) · [Before (L15137-L15138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15137-L15138)

```diff
-       const ZC = CC.JR.getState(zC, "rigAnimation");
-       return null !== ZC && void 0 !== ZC && ZC._controller && TC(CC, ZC) ? ZC._controller.getFootfallPhase() : Number.NaN
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
+       }
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15141-L15144` → after: `L12437-L12515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12437-L12515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12437-L12515) · [Before (L15141-L15144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15141-L15144)

```diff
-     function lC(CC, zC, ZC) {
-       var QC, wC;
-       return null !== (QC = null === (wC = mC(CC, zC)) || void 0 === wC ? void 0 : wC.rigged.binding.actions.has(ZC)) && void 0 !== QC && QC
-     }
+     function Up(pp) {
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
+     var wp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
+       vp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
+       tp = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
+ ... (63 more added lines; see GitHub link above)
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15146-L15148` → after: `L12517-L12541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12517-L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12517-L12541) · [Before (L15146-L15148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15146-L15148)

```diff
-     function XC(CC, zC, ZC) {
-       var QC, wC;
-       return null !== (QC = null === (wC = mC(CC, zC)) || void 0 === wC ? void 0 : wC.isActionPlaying(ZC)) && void 0 !== QC && QC
+     function mp(pp) {
+       if (pp.includes(jp)) return jp;
+       for (var ip = pp; ip.includes("*") || ip.includes("/");) {
+         var cp, Op = Pp(null !== (cp = wp.exec(ip)) && void 0 !== cp ? cp : [], 4),
+           op = Op[1],
+           Ip = Op[2],
+           Sp = Op[3],
+           xp = kp.parse(null !== op && void 0 !== op ? op : ""),
+           Lp = kp.parse(null !== Sp && void 0 !== Sp ? Sp : ""),
+           Yp = "*" === Ip ? xp.multiply(Lp) : xp.divide(Lp);
+         if (Yp.isNaN()) return jp;
+         ip = ip.replace(wp, Yp.toString())
+       }
+       for (; ip.includes("+") || /.-\d+(?:\.\d+)?/.test(ip);) {
+         var Dp, Ap = Pp(null !== (Dp = vp.exec(ip)) && void 0 !== Dp ? Dp : [], 4),
+           Wp = Ap[1],
+ ... (9 more added lines; see GitHub link above)
```
