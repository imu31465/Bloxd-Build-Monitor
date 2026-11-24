# Changed — Bundle Modifications Report (Part 031 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `31 / 69` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 030](part-030.md) · [Part 032 →](part-032.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/77.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/77.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa)

#### 6. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L103-L104` → after: `L551-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L551-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L551-L553) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L103-L104)

```diff
-     function EC() {
-       return (HC === nC ? 0 : 3) + dC
+       function xp(pp, ip, cp) {
+         return pp < ip ? ip : pp > cp ? cp : pp
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L106-L109` → after: `L555-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L555-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L555-L575) · [Before (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L106-L109)

```diff
- 
-     function lC() {
-       const CC = EC();
-       return HC = nC, CC
+   },
+   38550: (pp, ip, cp) => {
+     function Op(pp) {
+       return {
+         name: "collideTerrain",
+         order: 0,
+         state: {
+           callback: null
+         },
+         Lk: function(ip, cp) {
+           var Op = pp.entities;
+           Op.Cxp(ip) && (Op.jpp(ip).body.kP = function(cp) {
+             var Op = pp.Yk.Exp(ip).callback;
+             Op && Op(cp, ip)
+           })
+         },
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L111` → after: `L577-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L577-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L577-L581) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L111)

```diff
- 
+     cp.r(ip), cp.d(ip, {
+       default: () => Op
+     })
+   },
+   38566: (pp, ip, cp) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L113` → after: `L583-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L583-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L583-L594) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L113)

```diff
-       HC = CC >= 3 ? mC : nC, dC = CC % 3
+       return {
+         name: "kpp",
+         order: 99,
+         state: {
+           XE: 1.5
+         },
+         Lk: null,
+         uE: null,
+         system: function(ip, cp) {
+           for (var Op = pp.camera.HZ, Ip = 0; Ip < cp.length; Ip++) op(cp[Ip], Op, pp)
+         }
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L131-L138` → after: `L597-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L597-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L597-L604) · [Before (L131-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L131-L138)

```diff
-     function VC(CC) {
-       if ("function" !== typeof CC) return "#a0.0";
-       const zC = HC(DC, kC, [CC]);
-       if (void 0 !== zC) return zC;
-       const ZC = HC(cC, CC, []),
-         QC = ZC.length > BC ? BC : ZC.length,
-         wC = `#${function(CC,zC){const ZC=HC(sC,yC,[zC]);if(null===ZC)return"s";const QC=ZC[1];if("ProxyObject"===QC)return"p";if(""!==QC)return HC(aC,QC,["bound "])?"b":"n";try{const zC=uC(CC,"name"),ZC=void 0!==zC&&HC(rC,zC,["value"])?zC.value:void 0;return"string"===typeof ZC& … [truncated]
-       return HC(jC, kC, [CC, wC]), wC
+     function op(pp, ip, cp) {
+       if (cp.Yk.Xxp(pp.yJ)) {
+         var Op = cp.Yk.Rip(pp.yJ).mesh;
+         if (Op.metadata) {
+           var op = ip < pp.XE;
+           cp.WU.h_(Op, !op)
+         }
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L142-L155` → after: `L618-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L618-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L618-L620) · [Before (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L142-L155)

```diff
-       const zC = HC(sC, OC, [CC]);
-       return null === zC ? CC : zC[1]
-     }
-     var zz = ZC(2871);
-     const Zz = Function.prototype.toString,
-       Qz = Object.getOwnPropertyDescriptor,
-       wz = RegExp.prototype.exec,
-       bz = Object.prototype.hasOwnProperty,
-       nz = Set.prototype.has,
-       fz = WeakMap.prototype.get,
-       oz = WeakMap.prototype.set,
-       qz = Reflect.get,
-       Fz = Object.getPrototypeOf,
-       Wz = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;
+       let ip = 0;
+       const cp = op().create(),
+         Op = op().create();
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L157` → after: `L622-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L622-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L622-L637) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L157)

```diff
-     function Nz(CC, zC, ZC) {
+       function Ip(Sp, xp) {
+         if (Sp.lxp === ip) return;
+         Sp.lxp = ip;
+         const Lp = pp.Yk.qcp(Sp.vy);
+         Lp && Ip(Lp, xp);
+         const Yp = pp.Yk.xZ(Sp.yJ),
+           Dp = pp.Yk.xZ(Sp.vy);
+         if (Dp)
+           if (Sp.Jcp ? Sp.Jcp(cp, xp, Sp.offset) : op().copy(cp, Sp.offset), xp) op().add(Yp.Fs, Dp.Fs, cp);
+           else {
+             const ip = Yp.BP || pp.BP;
+             for (let pp = 0; pp < 3; pp++) Op[pp] = Dp.position[pp] - ip[pp] + cp[pp];
+             pp.Yk.Jxp(Sp.yJ, Op)
+           }
+         else Sp.Qcp || (Sp.Qxp && Sp.Qxp(Sp.yJ), pp.Yk.HJ(Sp.yJ, pp.Yk.names.Qm))
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L159-L163` → after: `L639-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L639-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L639-L666) · [Before (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L159-L163)

```diff
-         code: CC,
-         holder: zC,
-         key: ZC,
-         ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
-         native: new RegExp(`^function (get )?${ZC}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+         name: "Qm",
+         order: pp.room ? 50 : 97,
+         state: {
+           vy: 0,
+           offset: null,
+           Jcp: null,
+           Mcp: !0,
+           Qxp: null,
+           Qcp: !1,
+           lxp: 0
+         },
+         Lk: function(cp, Op) {
+           Op.offset = Op.offset ? op().clone(Op.offset) : op().create();
+           const Sp = pp.Yk.fn(cp);
+           Sp && (Sp.hN = !1, op().set(Sp.tw, 0, 0, 0), op().set(Sp.ZN, 0, 0, 0), op().set(Sp.zN, 0, 0, 0)), ip++, Ip(Op, !1), ip++, Ip(Op, !0)
+         },
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L167-L168` → after: `L681-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L681-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L681-L687) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L167-L168)

```diff
-     function Mz() {
-       return Wz
+     function Yp(pp, ip) {
+       const cp = ip.aop || ip;
+       void 0 === cp.MJ?.aLightLevels && (cp.qJ("aLightLevels", 4), cp.MJ.aLightLevels = (0, Ip.j)());
+       const {
+         MJ: Op
+       } = ip;
+       !Op || void 0 !== Op.aLightLevels && null !== Op.aLightLevels && Op.aLightLevels !== cp.MJ?.aLightLevels || (Op.aLightLevels = (0, Ip.j)()), pp.WU.Scp && cp.material && pp.WU.Scp(cp.material)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L173` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L690-L692) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L173)

```diff
-     function pz() {
+     function Dp(pp, ip) {
+       const cp = (0, Ip.i)(ip);
+       for (const Op of cp) Yp(pp, Op);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L245-L254` → after: `L697-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L697-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L697-L753) · [Before (L245-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L245-L254)

```diff
-       let zC;
-       try {
-         const ZC = qz(globalThis, CC);
-         zC = "function" === typeof ZC ? ZC.prototype : void 0
-       } catch {}
-       return () => zC
-     }
- 
-     function Jz(CC, zC, ZC) {
-       return ZC.map((ZC => Nz(CC, zC, ZC)))
+       return {
+         name: "mesh",
+         order: 100,
+         state: {
+           FQ: null,
+           iOp: null,
+           mesh: null,
+           offset: null,
+           fxp: null,
+           Ow: !1,
+           bxp: !0,
+           oOp: !0,
+           hxp: null,
+           axp: null,
+           nxp: -1
+         },
+ ... (41 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L256-L271` → after: `L755-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L755-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L755-L768) · [Before (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L256-L271)

```diff
-     const Iz = Nz("rx", xz("HTMLCanvasElement"), "getContext"),
-       iz = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
-       vz = {
-         webgpu: [...Jz("gd", xz("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Jz("gq", xz("GPUQueue"), ["submit", "writeBuffer"]), ...Jz("ge", xz("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Jz("gp", xz("GPURenderPassEncoder … [truncated]
-         webgl: [...Jz("g2", xz("WebGL2RenderingContext"), [...iz, "drawArraysInstanced", "drawElementsInstanced"]), Iz],
-         webgl1: [...Jz("g1", xz("WebGLRenderingContext"), iz), Iz]
-       };
-     let ez = [];
-     const hz = new WeakMap;
- 
-     function Kz(CC, zC) {
-       const ZC = lC();
-       try {
-         HC(oz, hz, [CC, zC])
-       } finally {
-         XC(ZC)
+   },
+   38468: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       PhysicsState: () => Ip,
+       default: () => Sp,
+       setFloatingYValue: () => Yp,
+       Zxp: () => Lp,
+       zxp: () => Dp
+     });
+     var Op = cp(343),
+       op = cp.n(Op);
+     class Ip {
+       constructor() {
+         this.body = null, this.Gc = null, this.HP = null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L276-L281` → after: `L773-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L773-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L773-L799) · [Before (L276-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L276-L281)

```diff
-       try {
-         const zC = fZ(CC),
-           ZC = HC(fz, hz, [zC]);
-         return CZ(ZC, CC) ? dz(CC, !0) : `${dz(CC,!1)}${VC(ZC??zC)}`
-       } catch {
-         return `${dz(CC,!1)}${VC(void 0)}`
+       return {
+         name: "physics",
+         order: 40,
+         state: new Ip,
+         Lk: function(ip, cp) {
+           cp.HP = pp, cp.Gc = null, cp.body = pp.physics.CP(), Lp(cp, pp.Yk.xZ(cp.yJ))
+         },
+         uE: function(ip, cp) {
+           if (pp.Yk.hasPosition(cp.yJ)) {
+             var Op = pp.Yk.xZ(cp.yJ);
+             Dp(cp, Op), Ap(cp, Op, 0, !1)
+           }
+           pp.physics.EP(cp.body)
+         },
+         system: function(ip, cp) {
+           for (var Op = 0; Op < cp.length; Op++) {
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L286-L290` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L805-L807) · [Before (L286-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L286-L290)

```diff
-       let {
-         code: ZC,
-         key: QC
-       } = CC;
-       return `wh:${ZC}${zC?"-dbg":""}:${QC}`
+       var cp = pp.body.DP,
+         Op = ip.Vcp;
+       op().copy(cp.base, Op), op().set(cp.vec, ip.width, ip.height, ip.width), op().add(cp.max, cp.base, cp.vec), Yp(pp, ip, pp.Gc)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L293-L294` → after: `L810-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L810-L813) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L293-L294)

```diff
-     function mz(CC) {
-       return Object.values(vz).flatMap((zC => zC.map((zC => dz(zC, CC)))))
+     function Yp(pp, ip, cp) {
+       pp.Gc = cp;
+       const Op = ip.BP ?? pp.HP.BP;
+       pp.body.aN = null !== cp ? cp - Op[1] : null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L300-L301` → after: `L816-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L816-L820) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L300-L301)

```diff
-     function Xz(CC) {
-       ez = vz[CC]
+     function Dp(pp, ip) {
+       var cp = pp.body.DP.base,
+         Op = ip.width / 2,
+         op = ip.Iip;
+       op[0] = cp[0] + Op, op[1] = cp[1], op[2] = cp[2] + Op
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L304-L309` → after: `L823-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L823-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L823-L837) · [Before (L304-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L304-L309)

```diff
-     function cz(CC) {
-       const zC = lC();
-       try {
-         return uz(CC) || uz(Cz(CC))
-       } finally {
-         XC(zC)
+     function Ap(pp, ip, cp, Op) {
+       var Ip = pp.body.tw;
+       op().ep(xp, ip.Iip, Ip, cp), Op && op().lerp(xp, ip.Fs, xp, .3), op().copy(ip.Fs, xp)
+     }
+   },
+   38461: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       PositionState: () => op,
+       default: () => Ip,
+       Kxp: () => Sp
+     });
+     const Op = cp(343);
+     class op {
+       constructor() {
+         this.position = null, this.width = .8, this.height = .8, this.Iip = null, this.Fs = null, this.Vcp = null, this.BP = null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L314` → after: `L842-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L842-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L842-L860) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L314)

```diff
-       return HC(nz, Ez, [CC])
+       return {
+         name: "position",
+         order: 41,
+         state: new op,
+         Lk: function(ip, cp) {
+           var op = [0, 0, 0];
+           cp.position && Op.copy(op, cp.position), cp.position = op, cp.Iip = Op.create(), cp.Fs = Op.create(), cp.Vcp = new Float32Array(6), pp.uip(cp.position, null, cp.Iip), Op.copy(cp.Fs, cp.Iip), Sp(cp)
+         },
+         uE: null,
+         system: function(ip, cp) {
+           for (var Op = 0; Op < cp.length; Op++) {
+             var op = cp[Op],
+               Ip = op.BP ?? pp.BP,
+               xp = op.position,
+               Lp = op.Iip;
+             xp[0] = Lp[0] + Ip[0], xp[1] = Lp[1] + Ip[1], xp[2] = Lp[2] + Ip[2], Sp(op)
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L318` → after: `L864-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L864-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L864-L867) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L318)

```diff
-       return new Set(Az.filter((zC => zC.tier === CC)).map((CC => `wh:${CC.code}`)))
+       var ip = pp.width / 2,
+         cp = pp.Iip,
+         Op = pp.Vcp;
+       Op[0] = cp[0] - ip, Op[1] = cp[1], Op[2] = cp[2] - ip, Op[3] = cp[0] + ip, Op[4] = cp[1] + pp.height, Op[5] = cp[2] + ip
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L320-L324` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L869-L870) · [Before (L320-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L320-L324)

```diff
-     const sz = rz("punished"),
-       Tz = !1,
-       az = new Set(zz.c),
-       tz = rz("weighted");
- 
+   },
+   38474: (pp, ip, cp) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L326-L330` → after: `L872-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L872-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L872-L886) · [Before (L326-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L326-L330)

```diff
-       const zC = lC();
-       try {
-         return yz(Cz(CC))
-       } finally {
-         XC(zC)
+       var ip = "Vxp";
+       return {
+         name: ip,
+         order: 99,
+         state: {
+           time: 100.1
+         },
+         Lk: null,
+         uE: null,
+         system: function(cp, Op) {
+           for (var op = 0; op < Op.length; op++) {
+             var Ip = Op[op];
+             Ip.time -= cp, Ip.time < 0 && pp.Yk.HJ(Ip.yJ, ip)
+           }
+         }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L333-L339` → after: `L889-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L889-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L889-L917) · [Before (L333-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L333-L339)

```diff
- 
-     function jz(CC) {
-       const zC = lC();
-       try {
-         return Cz(CC)
-       } finally {
-         XC(zC)
+     cp.r(ip), cp.d(ip, {
+       default: () => Op
+     })
+   },
+   38451: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => wp,
+       f: () => dp,
+       i: () => Wp
+     });
+     var Op = cp(38455),
+       op = cp.n(Op),
+       Ip = cp(343),
+       Sp = cp.n(Ip),
+       xp = cp(38461),
+       Lp = cp(38468);
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L342-L352` → after: `L920-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L920-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L920-L925) · [Before (L342-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L342-L352)

```diff
- 
-     function yz(CC) {
-       return HC(nz, tz, [CC])
-     }
- 
-     function Lz(CC) {
-       const zC = lC();
-       try {
-         return Uz(CC)
-       } finally {
-         XC(zC)
+     class Dp {
+       constructor(pp) {
+         this.sampleRate = pp, this.ticks = new Yp, this.renders = new Yp
+       }
+       reset() {
+         this.ticks.reset(), this.renders.reset()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L355-L357` → after: `L928-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L928-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L928-L974) · [Before (L355-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L355-L357)

```diff
- 
-     function Uz(CC) {
-       return HC(nz, az, [CC])
+     class Ap {
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
+           let pp = 2654435769;
+           return () => (pp ^= pp << 13, pp ^= pp >>> 17, pp ^= pp << 5, (pp >>> 0) / 4294967296)
+         }();
+         this.ecs = pp, this.random = ip, this.windows = [], this.sampleRate = 0, this.runNames = [], this.runMs = [], this.runStates = [], this.now = () => performance.now();
+         const cp = pp.LP,
+           Op = pp.render;
+         pp.LP = ip => this.sampleRate > 0 && this.random() < this.sampleRate && pp._systems.length > 0 ? (this.runTimed(pp._systems, "system", ip), pp) : cp(ip), pp.render = ip => this.sampleRate > 0 && this.random() < this.sampleRate && pp._renderSystems.length > 0 ? (this.runTi … [truncated]
+       }
+       openWindow(pp) {
+         const ip = new Dp(pp);
+         return this.windows.push(ip), this.updateSampleRate(), ip
+       }
+       closeWindow(pp) {
+ ... (31 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L361` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L979) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L361)

```diff
-       return "wb" === CC || HC(nz, sz, [CC])
+       Pp = pp
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L363-L369` → after: `L981-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L981-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L981-L1153) · [Before (L363-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L363-L369)

```diff
- 
-     function Oz(CC) {
-       const zC = lC();
-       try {
-         return Bz(CC) || Uz(CC)
-       } finally {
-         XC(zC)
+     var yp = {
+       iLp: 10
+     };
+     const Up = {
+       physics: {
+         Py: cp(38468),
+         server: !0
+       },
+       position: {
+         Py: cp(38461),
+         server: !0
+       },
+       Ay: {},
+       Vxp: {
+         Py: cp(38474),
+         server: !0
+ ... (157 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L373-L379` → after: `L1157-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1157-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1157-L1160) · [Before (L373-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L373-L379)

```diff
-     function kz(CC) {
-       const zC = lC();
-       try {
-         return "wb" === CC || Tz && Bz(CC)
-       } finally {
-         XC(zC)
-       }
+     function vp(pp, ip, cp, Op, op) {
+       var Ip = pp[ip] + cp,
+         Sp = pp[ip] + Op;
+       Math.abs(Ip - Math.round(Ip)) < .002 && (pp[ip] += .002), Math.abs(Sp - Math.round(Sp)) < .001 && (pp[ip] -= .001)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L383-L387` → after: `L1165-L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1165-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1165-L1214) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L383-L387)

```diff
-       let {
-         isGetter: ZC
-       } = zC;
-       const QC = Qz(CC, ZC ? "get" : "value");
-       return void 0 === QC ? void 0 : QC.value
+       return !(pp[0] > ip[3]) && (!(pp[1] > ip[4]) && (!(pp[2] > ip[5]) && (!(pp[3] < ip[0]) && (!(pp[4] < ip[1]) && !(pp[5] < ip[2])))))
+     }
+     let dp = !1
+   },
+   37713: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Si,
+       f: () => Pi,
+       h: () => ci,
+       k: () => oi,
+       l: () => zp,
+       o: () => sp,
+       r: () => Vp,
+       s: () => Zp,
+       w: () => Kp,
+       y: () => Wi,
+ ... (34 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L390-L395` → after: `L1217-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1217-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1217-L1223) · [Before (L390-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L390-L395)

```diff
-     function CZ(CC, zC) {
-       let {
-         isConstructor: ZC,
-         native: QC
-       } = zC;
-       return "function" === typeof CC && (!(!ZC && HC(bz, CC, ["prototype"])) && null !== HC(wz, QC, [HC(Zz, CC, [])]))
+     function Pp(pp, ip, cp, Op, op, Ip) {
+       if ("number" !== typeof cp) {
+         for (let Op = 0; Op < cp.length; Op++)
+           if (!Wp(pp[ip + Op], cp[Op])) return !1;
+         return !0
+       }
+       return !!Wp(pp[ip], cp) && (void 0 === Op || !!Wp(pp[ip + 1], Op) && (void 0 === op || !!Wp(pp[ip + 2], op) && (void 0 === Ip || Wp(pp[ip + 3], Ip))))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L399-L401` → after: `L1227-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1227-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1227-L1228) · [Before (L399-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L399-L401)

```diff
-       return CZ(CC, Nz("", (() => {}), zC, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
-         isConstructor: !0
-       } : {}))
+       const cp = Math.fround(ip);
+       return pp === cp && (0 !== cp || 1 / pp === 1 / cp)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L406-L411` → after: `L1231-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1231-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1231-L1235) · [Before (L406-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L406-L411)

```diff
-     function wZ() {
-       try {
-         return globalThis.WebAssembly === Wz
-       } catch {
-         return !1
-       }
+     function yp(pp, ip, cp, Op) {
+       const op = pp.getBuffer();
+       if (!op || !pp.isUpdatable()) return;
+       const Ip = pp._engine;
+       Ip.eU >= 2 ? (Up(Ip, op, ip, cp, Op), wp(Ip)) : pp.updateDirectly(ip.subarray(cp, Op), cp)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L414-L437` → after: `L1238-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1238-L1239) · [Before (L414-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L414-L437)

```diff
-     function bZ(CC) {
-       try {
-         return function(CC) {
-           const {
-             holder: zC,
-             key: ZC,
-             onNamespace: QC,
-             inSecureContext: wC
-           } = CC, bC = zC(), nC = Rz(bC, ZC);
-           if (!nC) return !(wC && !0 === globalThis.isSecureContext);
-           const fC = Vz(nC, CC);
-           if (!CZ(fC, CC)) return !1;
-           if (QC) {
-             const zC = globalThis.WebAssembly;
-             if (zC !== bC && null !== zC && ("object" === typeof zC || "function" === typeof zC)) {
-               const QC = qz(zC, ZC);
- ... (8 more removed lines; see GitHub link above)
+     function Up(pp, ip, cp, Op, op) {
+       pp.bindArrayBuffer(ip), pp._gl.bufferSubData(pp._gl.ARRAY_BUFFER, Op * Float32Array.BYTES_PER_ELEMENT, cp, Op, op - Op)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L441-L447` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1243) · [Before (L441-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L441-L447)

```diff
-       const zC = `wh:${CC.code}`;
-       if ("punished" === CC.tier) return zC;
-       try {
-         return `${zC}${VC(fZ(CC))}`
-       } catch {
-         return `${zC}${VC(void 0)}`
-       }
+       pp._cachedVertexBuffers = null
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L449` → after: `L1245-L38516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L1245-L38516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L1245-L38516) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L449)

```diff
- 
+     class vp {
+       constructor(pp) {
+         this.engine = pp, this.pages = []
+       }
+       static forEngine(pp) {
+         const ip = pp;
+         if (!(ip.eU >= 2) || !tp.test(ip.getGlInfo().renderer)) return null;
+         let cp = Hp.get(pp);
+         if (!cp) {
+           const Op = new vp(ip);
+           cp = Op, Hp.set(pp, Op);
+           const op = pp.Fy.add((() => {
+             for (const pp of Op.pages) pp.restore()
+           }));
+           pp.Kl.addOnce((() => {
+             pp.Fy.remove(op), Op.dispose(), Hp.delete(pp)
+ ... (37256 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L451-L453` → after: `L38518-L38527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR38518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L38518-L38527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L38518-L38527) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L451-L453)

```diff
-       const zC = Rz(CC.holder(), CC.key),
-         ZC = void 0 === zC ? void 0 : Vz(zC, CC);
-       return CC.onNamespace && !wZ() && CZ(ZC, CC) ? qz(globalThis.WebAssembly, CC.key) : ZC
+       return {
+         model: "cameraDirection",
+         maxSpeed: pp,
+         minSpeed: .5,
+         pitchAcceleration: .0125,
+         friction: 0,
+         impulseDecayTicks: 100,
+         biasMagnitude: 1.5,
+         excessVelocityBleedPerTick: .5
+       }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L457-L461` → after: `L38597-L38699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR38597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L38597-L38699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L38597-L38699) · [Before (L457-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L457-L461)

```diff
-       if (Bz(CC)) return 5;
-       const zC = Cz(CC);
-       return yz(zC) ? 4 : Uz(CC) ? 3 : uz(zC) ? function(CC) {
-         return HC(nz, Hz, [CC])
-       }(zC) ? -1 : zC === lz ? 0 : 1 : 2
+       return {
+         effect: {
+           name: "Floating",
+           icon: `${pp} Balloon`,
+           duration: 16e3
+         }
+       }
+     }
+     const dp = {
+       [Op.m.ROTATION_1]: {
+         fixedHeading: 0
+       },
+       [Op.m.ROTATION_2]: {
+         fixedHeading: Math.PI / 2
+       },
+       [Op.m.ROTATION_3]: {
+ ... (87 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L464-L468` → after: `L38702-L39033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR38702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L38702-L39033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L38702-L39033) · [Before (L464-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L464-L468)

```diff
-     function qZ() {
-       const CC = function() {
-         const CC = EC();
-         return IC === GC || IC === RC ? (HC = mC, dC = KC) : HC = nC, CC
-       }();
+     function mp(pp) {
+       return (0, Ip.mc)(pp) ? null : (0, Ip.bb)(ep.h, (ip => {
+         var cp;
+         return null !== (cp = pp[(0, ep.d)(ip)]) && void 0 !== cp ? cp : 1
+       }), Float64Array)
+     }
+ 
+     function Rp(pp) {
+       return (0, Ip.mc)(pp) ? null : (0, Ip.bb)(ep.h, (ip => {
+         const cp = pp[(0, ep.d)(ip)];
+         return void 0 === cp ? jp.Unset : cp ? jp.On : jp.Off
+       }), Uint8Array)
+     }
+ 
+     function qp(pp, ip, cp) {
+       if (pp) {
+ ... (316 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L470-L479` → after: `L39035-L39079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR39035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L39035-L39079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L39035-L39079) · [Before (L470-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L470-L479)

```diff
-         if (null === ZZ || !Bz(ZZ)) {
-           const CC = function() {
-             if (void 0 === Wz) return null;
-             let CC = wZ() ? null : "wh:wa";
-             const zC = zC => {
-               null !== zC && (null === CC || oZ(zC) > oZ(CC)) && (CC = zC)
-             };
-             for (let ZC = 0; ZC < Az.length; ZC++) {
-               const CC = Az[ZC];
-               void 0 === CC || bZ(CC) || zC(nZ(CC))
+         Mp(pp[tp[2]] = Object, pp[-tp[14]][tp[27]]("".__proto__.constructor.name))
+       } catch (Dp) {}
+       pp: for (pp[-tp[15]] = tp[1]; pp[-tp[15]] < pp[tp[5]][tp[13]]; pp[-tp[15]]++) try {
+         for (pp[tp[2]] = pp[tp[5]][pp[-tp[15]]](), pp[tp[10]] = tp[1]; pp[tp[10]] < pp[-tp[14]][tp[13]]; pp[tp[10]]++)
+           if (typeof pp[tp[2]][pp[-tp[14]][pp[tp[10]]]] === tp[16]) continue pp;
+         return pp[tp[2]]
+       } catch (Dp) {}
+       return pp[tp[2]] || this
+     }() || {}, Pp = Ap.TextDecoder, Wp = Ap.Uint8Array, yp = Ap.my, Up = Ap.String || String, wp = Ap.Array || Array, vp = function(...pp) {
+       return Mp(pp[tp[13]] = tp[1], pp[tp[17]] = new wp(tp[49]), pp[tp[2]] = Up[tp[24]] || Up.fromCharCode, pp[tp[19]] = []),
+         function(...ip) {
+           for (Mp(ip[tp[13]] = tp[2], ip[tp[5]] = tp[18], ip[tp[21]] = tp[18], ip[tp[20]] = ip[tp[1]][tp[13]], pp[tp[19]][tp[13]] = tp[1]), ip[tp[10]] = tp[1]; ip[tp[10]] < ip[tp[20]];) Mp(ip[tp[21]] = ip[tp[1]][ip[tp[10]]++], ip[tp[21]] <= tp[48] ? ip[tp[5]] = ip[tp[21]] : ip[tp … [truncated]
+           return pp[tp[19]].join("")
+         }
+     }());
+     const kp = op()[Hp(tp[36])](),
+ ... (29 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L481-L484` → after: `L39081-L39088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR39081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L39081-L39088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L39081-L39088) · [Before (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L481-L484)

```diff
-             zC((0, zz.l)());
-             for (let ZC = 0; ZC < ez.length; ZC++) {
-               const CC = ez[ZC];
-               void 0 === CC || bZ(CC) || zC(Yz(CC))
+           }, pp[tp[19]] = function(...pp) {
+             for (Mp(pp[tp[13]] = tp[2], pp[tp[2]] = [], pp[tp[37]] = pp[tp[1]].length), pp[tp[4]] = tp[1]; pp[tp[4]] < pp[tp[37]]; pp[tp[4]]++)
+               for (pp[tp[2]][pp[tp[4]]] = "", pp[-tp[42]] = tp[1]; pp[-tp[42]] < pp[tp[37]]; pp[-tp[42]]++) pp[tp[2]][pp[tp[4]]] += pp[tp[1]][pp[tp[4]]][tp[2]] === pp[-tp[42]] ? "Q" : ".";
+             return pp[tp[2]]
+           }, pp[tp[4]] = function(...pp) {
+             for (Mp(pp[tp[13]] = tp[37], pp[tp[43]] = pp[tp[1]].length), pp[tp[28]] = tp[1]; pp[tp[28]] < pp[tp[43]]; pp[tp[28]]++) {
+               if (pp[tp[1]][pp[tp[28]]][tp[1]] === pp[tp[2]][tp[1]] || pp[tp[1]][pp[tp[28]]][tp[2]] === pp[tp[2]][tp[2]]) return tp[44];
+               if (Math.abs((pp[tp[1]][pp[tp[28]]][tp[1]] - pp[tp[2]][tp[1]]) / (pp[tp[1]][pp[tp[28]]][tp[2]] - pp[tp[2]][tp[2]])) === tp[2]) return tp[44]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L486-L488` → after: `L39090-L39103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR39090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L39090-L39103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L39090-L39103) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L486-L488)

```diff
-             return CC
-           }();
-           (null === ZZ || null !== CC && oZ(CC) > oZ(ZZ)) && (ZZ = CC)
+             return tp[50]
+           }, console.log(pp[tp[5]]))
+         }(), !pp[tp[2]][ip(tp[51]) + ip(123) + ip(124) + ip(125)]) {
+         function yp(...pp) {
+           for (Mp(pp[tp[13]] = tp[2], pp[tp[5]] = 'DHULud5$.*vQ1AJjrZ;B2wN3=VpYRlbx["h|y,%6_Ez#eX+G0O~C9g/csT:mqo@^W}4&k?nKt<a!fM]PI(7Fi)8{>`S', pp[tp[21]] = "" + (pp[tp[1]] || ""), pp[tp[4]] = pp[tp[21]].length, pp[tp[19]] = [], pp[tp[47]] = tp[1], pp[tp[23]] = tp[1], pp[tp[46]] … [truncated]
+             if (pp[tp[45]] = pp[tp[5]].indexOf(pp[tp[21]][pp[tp[3]]]), pp[tp[45]] !== -tp[2])
+               if (pp[tp[46]] < tp[1]) pp[tp[46]] = pp[tp[45]];
+               else {
+                 Mp(pp[tp[46]] += pp[tp[45]] * tp[30], pp[tp[47]] |= pp[tp[46]] << pp[tp[23]], pp[tp[23]] += (pp[tp[46]] & tp[33]) > tp[34] ? tp[35] : tp[17]);
+                 do {
+                   Mp(pp[tp[19]].push(pp[tp[47]] & tp[12]), pp[tp[47]] >>= tp[11], pp[tp[23]] -= tp[11])
+                 } while (pp[tp[23]] > tp[25]);
+                 pp[tp[46]] = -tp[2]
+               } return pp[tp[46]] > -tp[2] && pp[tp[19]].push((pp[tp[47]] | pp[tp[46]] << pp[tp[23]]) & tp[12]), dp(pp[tp[19]])
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L490-L491` → after: `L39105-L39335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR39105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L39105-L39335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L39105-L39335) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L490-L491)

```diff
-       } finally {
-         XC(CC)
+ 
+         function Up(pp) {
+           return typeof Yp[pp] === tp[16] ? Yp[pp] = yp(Dp[pp]) : Yp[pp]
+         }
+         pp[tp[2]][Up(126) + Up(tp[48]) + Up(tp[49])] = pp[tp[25]]
+       }
+       Mp(pp[tp[2]][ip(129) + ip(130) + ip(tp[77])] = tp[50], pp[tp[2]][ip(tp[51]) + ip(tp[43]) + ip(133) + ip(134)] = pp[tp[2]][ip(tp[53]) + ip(tp[54]) + ip(tp[55])], pp[tp[45]] = pp[tp[10]]), pp[tp[10]] === tp[1] && pp[tp[47]] !== tp[1] && (pp[tp[45]] = tp[2]);
+       const cp = pp[tp[45]] < tp[1] ? -pp[tp[47]] : pp[tp[47]],
+         Op = pp[tp[10]] !== tp[1] ? Math[tp[52]] / tp[10] : Math[tp[52]] / tp[37],
+         op = pp[tp[25]] + cp * Op,
+         Sp = Ip[tp[19]][ip(tp[15])](pp[tp[2]][ip(tp[53]) + ip(tp[54]) + ip(tp[55])], op),
+         xp = pp[tp[11]] / tp[96],
+         Lp = Sp * (tp[2] - Math[ip(139)](-qp * xp)),
+         Ap = pp[tp[28]][ip(140) + "te"] * xp,
+         Pp = Ip[tp[19]][ip(tp[56])](Lp, -Ap, Ap);
+       pp[tp[2]][ip(tp[53]) + ip(tp[54]) + ip(tp[55])] = (pp[tp[2]][ip(tp[53]) + ip(tp[54]) + ip(tp[55])] + Pp) % (Math[tp[52]] * tp[37]);
+ ... (215 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L495-L496` → after: `L39565-L39568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR39565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L39565-L39568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L39565-L39568) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L495-L496)

```diff
-     function FZ() {
-       QZ = !0
+     function Wp(pp) {
+       for (const ip of op.d)
+         if (Ap[ip].meshItemName === pp) return ip;
+       return null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L499-L504` → after: `L39571-L39967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR39571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L39571-L39967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/77.js#L39571-L39967) · [Before (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/77.js#L499-L504)

```diff
-     function WZ() {
-       if (QZ) return "wb";
-       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && qZ(), null !== ZZ) return ZZ;
-       if (void 0 === Wz) return "wn:unsupported";
-       const CC = (0, QC.q)();
-       return null === CC ? null : `wn:${CC}`
+     function yp(pp, ip) {
+       const cp = pp.validBlockIds;
+       if (Array.isArray(cp)) return cp.includes(ip);
+       if (ip === Lp) return !1;
+       if ("solidBlocks" === cp) return !0 !== Ip.e[ip].tW;
+       if ("solidBlocksOrFluid" === cp) return !0;
+       throw new Error(`Unsupported validBlockIds for ${ip}: ${JSON.stringify(cp)}`)
+     }
+     const Up = {
+         meshAttachment: {
+           size: .12,
+           offset: [0, 1.8, -.24],
+           rotation: [0, 0, 0]
+         }
+       },
+       wp = {
+ ... (381 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/78.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/78.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224)

#### 1. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L2)

```diff
- export const ids = [78, 93];
+ export const ids = [78];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L4-L7` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L4-L40) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L4-L7)

```diff
-     4760: (CC, zC, ZC) => {
-       ZC.d(zC, {
-         c: () => pC,
-         d: () => PC
+   4791: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Fi,
+       f: () => yc,
+       g: () => pc,
+       i: () => oc,
+       j: () => si,
+       m: () => ic,
+       p: () => fi,
+       q: () => ri,
+       u: () => Ei,
+       v: () => Wc,
+       x: () => Pc,
+       A: () => Zi,
+       C: () => Ti
+     });
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L9-L23` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L42-L45) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L9-L23)

```diff
-       var QC = ZC(1002),
-         wC = ZC.n(QC),
-         bC = ZC(48),
-         nC = ZC(1143),
-         fC = ZC(4769),
-         oC = ZC(1811),
-         qC = ZC(2369),
-         FC = ZC(4775),
-         WC = ZC(1056);
-       const NC = new WeakMap;
-       let MC = 0;
- 
-       function gC(CC) {
-         let zC = NC.get(CC);
-         return void 0 === zC && (zC = MC++, NC.set(CC, zC)), zC
+       try {
+         Up = pp[yp](Lp)
+       } finally {
+         delete pp[yp]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L25-L40` → after: `L47-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L47-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L47-L97) · [Before (L25-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L25-L40)

```diff
- 
-       function SC(CC) {
-         let {
-           piece: zC
-         } = CC;
-         return "space" === zC.kind ? (0, WC.jsx)(WC.Fragment, {
-           children: zC.text
-         }) : (0, WC.jsx)("span", {
-           className: "DialogueWord",
-           style: {
-             "--word-delay": `${zC.delayMs}ms`
-           },
-           children: (0, WC.jsx)(fC.e, {
-             text: "icon" === zC.kind ? `[[${zC.icon}]]` : zC.text
-           })
-         })
+     } catch {}
+     const wp = 16,
+       vp = 256,
+       tp = 0,
+       Hp = 1,
+       dp = 2,
+       ep = 3;
+     let jp, kp = tp,
+       mp = Sp,
+       Rp = 0;
+ 
+     function qp(pp, ip) {
+       return pp === `function ${ip}() { [native code] }` || pp === `function ${ip}() {\n    [native code]\n}`
+     }
+     const Mp = 0,
+       Cp = 1,
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L42-L66` → after: `L99-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L99-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L99-L163) · [Before (L42-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L42-L66)

```diff
- 
-       function pC(CC) {
-         let {
-           display: zC
-         } = CC;
-         const {
-           selectedLanguage: ZC
-         } = (0, nC.y)(), QC = (0, bC.useMemo)((() => (0, FC.c)((0, FC.f)(zC).plan.pieces)), [zC, ZC.code]);
-         return (0, WC.jsxs)("div", {
-           className: wC()("Dialogue", {
-             DialogueAnimateIn: !1 !== zC.animateIn
-           }),
-           children: [zC.speakerName && (0, WC.jsx)(oC.e, {
-             text: zC.speakerName,
-             className: "DialogueSpeaker"
-           }), (0, WC.jsx)("p", {
- ... (9 more removed lines; see GitHub link above)
+       return Xp = Ep, Op
+     }
+     let Qp = Sp;
+ 
+     function Jp() {
+       return (Qp === Sp ? 0 : 3) + Xp
+     }
+ 
+     function Bp() {
+       const pp = Jp();
+       return Qp = Sp, pp
+     }
+ 
+     function Np(pp) {
+       Qp = pp >= 3 ? lp : Sp, Xp = pp % 3
+     }
+ ... (49 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L68-L140` → after: `L165-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L165-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L165-L430) · [Before (L68-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L68-L140)

```diff
-       const PC = (0, bC.memo)((function() {
-         const CC = (0, qC.h)("dialogue");
-         return (0, WC.jsx)("div", {
-           className: "DialogueAnchor",
-           "data-camera-keeper": "",
-           role: "status",
-           "aria-live": "polite",
-           "aria-atomic": "true",
-           children: CC && (0, WC.jsx)(pC, {
-             display: CC
-           }, gC(CC))
-         })
-       }))
-     },
-     4648: (CC, zC, ZC) => {
-         ZC.r(zC), ZC.d(zC, {
- ... (57 more removed lines; see GitHub link above)
+     }
+ 
+     function Ui() {
+       return Wi
+     }
+     const wi = Wi?.Instance.prototype,
+       vi = Wi?.Memory.prototype;
+ 
+     function ti() {
+       return vi
+     }
+     let Hi, di;
+     try {
+       const pp = globalThis.crypto,
+         ip = pp?.subtle;
+       Hi = pp ? Pi(pp) : void 0, di = ip ? Pi(ip) : void 0
+ ... (250 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L263-L545` → after: `L433-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L433-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L433-L475) · [Before (L263-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L263-L545)

```diff
-           return bC(), zC
-         }
- 
-         function KC(CC) {
-           return "methods" === CC || "callbacks" === CC || "settings" === CC
-         }
-         const YC = {
-             readme: {
-               icon: "code-block",
-               summary: "Code blocks, boards and World Code, and the globals your code can use.",
-               layout: "article"
-             },
-             snippets: {
-               icon: "scroll",
-               summary: "Ready-made code for common jobs, from moving players to running code every second.",
-               layout: "snippets"
- ... (267 more removed lines; see GitHub link above)
+           return !0
+         }(pp)
+       } catch {
+         return !1
+       }
+     }
+ 
+     function Yc(pp) {
+       const ip = `wh:${pp.code}`;
+       if ("punished" === pp.tier) return ip;
+       try {
+         return `${ip}${ii(Dc(pp))}`
+       } catch {
+         return `${ip}${ii(void 0)}`
+       }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L547-L549` → after: `L477-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L477-L479) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L547-L549)

```diff
-             if (TC(CC, wC)) return {
-               page: CC,
-               anchor: wC
+             for (let cp = 0; cp < ui.length; cp++) {
+               const pp = ui[cp];
+               void 0 === pp || Lc(pp) || ip(Yc(pp))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L551-L709` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L481) · [Before (L551-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L551-L709)

```diff
-           }
-           return {
-             page: QC,
-             anchor: wC
-           }
-         }
-         const tC = {
-           Examples: {
-             pageId: "snippets",
-             anchor: ""
-           },
-           Notes: {
-             pageId: "readme",
-             anchor: "Globals"
-           },
-           "Glossary-of-Referenced-Types": {
- ... (143 more removed lines; see GitHub link above)
+             ip((0, Oi.p)());
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L711-L728` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L483-L484) · [Before (L711-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L711-L728)

```diff
-               var wC;
-               if (!QC[bC].trimStart().startsWith("/**")) continue;
-               const CC = bC;
-               for (; bC < QC.length && !QC[bC].includes("*/");) bC++;
-               const zC = null === (wC = QC[bC + 1]) || void 0 === wC ? void 0 : wC.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
-               if (!zC) continue;
-               let nC = null;
-               const fC = [];
-               let oC = "description",
-                 qC = !1;
-               for (const ZC of QC.slice(CC, bC + 1).join("\n").split("\n").map((CC => CC.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
-                 const CC = ZC.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
-                 CC ? (nC = CC[1].trim(), oC = "deprecation") : ZC.startsWith("@") ? (oC = "otherTag", qC = !0) : "" === ZC.trim() ? qC || (oC = "description", fC.push(ZC)) : "deprecation" !== oC || /^[A-Z]/.test(ZC.trim()) ? "otherTag" !== oC && (oC = "description", fC.push(ZC))  … [truncated]
-               }
-               ZC.set(zC[1], {
-                 deprecation: nC,
- ... (2 more removed lines; see GitHub link above)
+               const pp = Mi[cp];
+               void 0 === pp || Lc(pp) || ip(Xi(pp))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L731-L1568` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L487-L488) · [Before (L731-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L731-L1568)

```diff
-           }(jC.default), bz
-         }
- 
-         function oz() {
-           if (!nz) {
-             nz = new Map;
-             for (const CC of XC) {
-               const zC = (0, iC.r)(sC(CC)).flatMap((CC => CC.blocks));
-               for (const CC of (0, iC.h)(zC))
-                 if ("ts" === CC.lang || "typescript" === CC.lang)
-                   for (const [zC, ZC] of hC(CC.code)) nz.set(zC, ZC)
-             }
-             for (const [CC, zC] of(wz ??= Qz(jC.default), wz)) nz.has(CC) || nz.set(CC, zC)
-           }
-           return nz
-         }
- ... (822 more removed lines; see GitHub link above)
+           }();
+           (null === Ic || null !== pp && Ac(pp) > Ac(Ic)) && (Ic = pp)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L1570-L7297` → after: `L490-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L490-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/78.js#L490-L509) · [Before (L1570-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/78.js#L1570-L7297)

```diff
- 
-         function qZ(CC) {
-           let {
-             level: zC,
-             text: ZC,
-             anchor: QC,
-             className: wC
-           } = CC;
-           const nC = `h${Math.min(zC,6)}`;
-           return (0, gC.jsxs)(nC, {
-                 id: QC,
-                 className: bC()("DocsHeading", wC),
-                 children: [(0, gC.jsx)(Jz, {
-                       text: ZC
-                     }), (0, gC.jsx)("a", {
-                         className: "DocsHeadingAnchor",
- ... (5712 more removed lines; see GitHub link above)
+       } finally {
+         Np(pp)
+       }
+     }
+ 
+     function Wc() {
+       Sc = !0
+     }
+ 
+     function yc() {
+       if (Sc) return "wb";
+       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Pc(), null !== Ic) return Ic;
+       if (void 0 === Wi) return "wn:unsupported";
+       const pp = (0, Op.r)();
+       return null === pp ? null : `wn:${pp}`
+     }
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/79.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/79.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda)

#### 1. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L2)

```diff
- export const ids = [79];
+ export const ids = [79, 95];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4-L140` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L4-L23) · [Before (L4-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L4-L140)

```diff
-   4661: CC => {
-     function zC(CC) {
-       return CC instanceof Map ? CC.clear = CC.delete = CC.set = function() {
-         throw new Error("map is read-only")
-       } : CC instanceof Set && (CC.add = CC.clear = CC.delete = function() {
-         throw new Error("set is read-only")
-       }), Object.freeze(CC), Object.getOwnPropertyNames(CC).forEach((ZC => {
-         const QC = CC[ZC],
-           wC = typeof QC;
-         "object" !== wC && "function" !== wC || Object.isFrozen(QC) || zC(QC)
-       })), CC
-     }
-     class ZC {
-       constructor(CC) {
-         void 0 === CC.data && (CC.data = {}), this.data = CC.data, this.isMatchIgnored = !1
-       }
- ... (121 more removed lines; see GitHub link above)
+     4950: (pp, ip, cp) => {
+       cp.d(ip, {
+         e: () => wp,
+         i: () => vp
+       });
+       var Op = cp(1049),
+         op = cp.n(Op),
+         Ip = cp(62),
+         Sp = cp(1201),
+         xp = cp(4956),
+         Lp = cp(1929),
+         Yp = cp(2492),
+         Dp = cp(4964),
+         Ap = cp(1112);
+       const Pp = new WeakMap;
+       let Wp = 0;
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L142-L298` → after: `L25-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L25-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L25-L35) · [Before (L142-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L142-L298)

```diff
-     }
- 
-     function FC(CC) {
-       return CC ? "string" === typeof CC ? CC : CC.source : null
-     }
- 
-     function WC(CC) {
-       return gC("(?=", CC, ")")
-     }
- 
-     function NC(CC) {
-       return gC("(?:", CC, ")*")
-     }
- 
-     function MC(CC) {
-       return gC("(?:", CC, ")?")
- ... (141 more removed lines; see GitHub link above)
+ 
+       function Up(pp) {
+         let {
+           piece: ip
+         } = pp;
+         return "space" === ip.kind ? (0, Ap.jsx)(Ap.Fragment, {
+           children: ip.text
+         }) : (0, Ap.jsx)("span", {
+           className: "DialogueWord",
+           style: {
+             "--word-delay": `${ip.delayMs}ms`
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L300-L302` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L37-L39) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L300-L302)

```diff
-           "on:end": (CC, zC) => {
-             zC.data._beginMatch !== CC[1] && zC.ignoreMatch()
-           }
+           children: (0, Ap.jsx)(xp.d, {
+             text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
+           })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L356-L370` → after: `L42-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L42-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L42-L64) · [Before (L356-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L356-L370)

```diff
-     }
- 
-     function jC(CC, zC) {
-       void 0 === CC.relevance && (CC.relevance = 1)
-     }
-     const yC = (CC, zC) => {
-         if (!CC.beforeMatch) return;
-         if (CC.starts) throw new Error("beforeMatch cannot be used with starts");
-         const ZC = Object.assign({}, CC);
-         Object.keys(CC).forEach((zC => {
-           delete CC[zC]
-         })), CC.keywords = ZC.keywords, CC.RM = gC(ZC.beforeMatch, WC(ZC.RM)), CC.starts = {
-           relevance: 0,
-           contains: [Object.assign(ZC, {
-             endsParent: !0
+ 
+       function wp(pp) {
+         let {
+           display: ip
+         } = pp;
+         const {
+           selectedLanguage: cp
+         } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
+         return (0, Ap.jsxs)("div", {
+           className: op()("Dialogue", {
+             DialogueAnimateIn: !1 !== ip.animateIn
+           }),
+           children: [ip.speakerName && (0, Ap.jsx)(Lp.e, {
+             text: ip.speakerName,
+             className: "DialogueSpeaker"
+           }), (0, Ap.jsx)("p", {
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L372-L387` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L66) · [Before (L372-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L372-L387)

```diff
-         }, CC.relevance = 0, delete ZC.beforeMatch
-       },
-       LC = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
- 
-     function UC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
-       const QC = Object.create(null);
-       return "string" === typeof CC ? wC(ZC, CC.split(" ")) : Array.isArray(CC) ? wC(ZC, CC) : Object.keys(CC).forEach((function(ZC) {
-         Object.assign(QC, UC(CC[ZC], zC, ZC))
-       })), QC;
- 
-       function wC(CC, ZC) {
-         zC && (ZC = ZC.map((CC => CC.toLowerCase()))), ZC.forEach((function(zC) {
-           const ZC = zC.split("|");
-           QC[ZC[0]] = [CC, BC(ZC[0], ZC[1])]
-         }))
+         })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L389-L450` → after: `L68-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L68-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L68-L98) · [Before (L389-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L389-L450)

```diff
-     }
- 
-     function BC(CC, zC) {
-       return zC ? Number(zC) : function(CC) {
-         return LC.includes(CC.toLowerCase())
-       }(CC) ? 0 : 1
-     }
-     const OC = {},
-       kC = CC => {
-         console.error(CC)
-       },
-       VC = function(CC) {
-         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
-         console.log(`WARN: ${CC}`, ...ZC)
-       },
-       Cz = (CC, zC) => {
- ... (46 more removed lines; see GitHub link above)
+       const vp = (0, Ip.memo)((function() {
+         const pp = (0, Yp.i)("dialogue");
+         return (0, Ap.jsx)("div", {
+           className: "DialogueAnchor",
+           "data-camera-keeper": "",
+           role: "status",
+           "aria-live": "polite",
+           "aria-atomic": "true",
+           children: pp && (0, Ap.jsx)(wp, {
+             display: pp
+           }, yp(pp))
+         })
+       }))
+     },
+     4817: (pp, ip, cp) => {
+         cp.r(ip), cp.d(ip, {
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L452-L481` → after: `L100-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L100-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L100-L128) · [Before (L452-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L452-L481)

```diff
-     function wz(CC) {
-       function zC(zC, ZC) {
-         return new RegExp(FC(zC), "m" + (CC.case_insensitive ? "i" : "") + (CC.unicodeRegex ? "u" : "") + (ZC ? "g" : ""))
-       }
-       class ZC {
-         constructor() {
-           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
-         }
-         addRule(CC, zC) {
-           zC.position = this.position++, this.matchIndexes[this.matchAt] = zC, this.regexes.push([zC, CC]), this.matchAt += pC(CC) + 1
-         }
-         compile() {
-           0 === this.regexes.length && (this.exec = () => null);
-           const CC = this.regexes.map((CC => CC[1]));
-           this.matcherRe = zC(GC(CC, {
-             joinWith: "|"
- ... (14 more removed lines; see GitHub link above)
+         function wp(pp) {
+           let {
+             name: ip,
+             isTinted: cp,
+             className: Op,
+             style: op
+           } = pp;
+           const Sp = `${Up}/${ip}.png`;
+           return cp ? (0, yp.jsxs)("span", {
+             className: Ip()("DocsPixelIcon", "Tinted", Op),
+             "aria-hidden": "true",
+             style: op,
+             children: [(0, yp.jsx)("span", {
+               className: "DocsPixelIconTint",
+               style: {
+                 maskImage: `url("${Sp}")`,
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L483-L489` → after: `L130-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L130-L155) · [Before (L483-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L483-L489)

```diff
-         getMatcher(CC) {
-           if (this.multiRegexes[CC]) return this.multiRegexes[CC];
-           const zC = new ZC;
-           return this.rules.slice(CC).forEach((CC => {
-             let [ZC, QC] = CC;
-             return zC.addRule(ZC, QC)
-           })), zC.compile(), this.multiRegexes[CC] = zC, zC
+         const vp = 1500;
+ 
+         function tp() {
+           const [pp, ip] = (0, Op.useState)(null);
+           (0, Op.useEffect)((() => {
+             if (null === pp) return;
+             const cp = setTimeout((() => {
+               ip(null)
+             }), vp);
+             return () => {
+               clearTimeout(cp)
+             }
+           }), [pp]);
+           return [pp, pp => {
+             (0, Wp.d)(pp).then((() => {
+               ip({
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L491-L492` → after: `L157-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L157-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L157-L180) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L491-L492)

```diff
-         resumingScanAtSamePosition() {
-           return 0 !== this.regexIndex
+ 
+         function Hp(pp) {
+           let {
+             text: ip,
+             label: cp,
+             className: Op
+           } = pp;
+           const [op, Sp] = tp(), xp = !1 === (null === op || void 0 === op ? void 0 : op.failed);
+           return (0, yp.jsxs)("button", {
+             type: "button",
+             className: Ip()("DocsCopyButton", Op, {
+               Copied: xp
+             }),
+             title: `Copy ${ip.length>40?"to clipboard":ip}`,
+             "aria-label": cp ? void 0 : `Copy ${ip}`,
+             onClick: pp => {
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L494-L495` → after: `L182-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L182-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L182-L243) · [Before (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L494-L495)

```diff
-         considerAll() {
-           this.regexIndex = 0
+         Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);
+         const dp = {
+             js: "javascript",
+             ts: "typescript",
+             javascript: "javascript",
+             typescript: "typescript"
+           },
+           ep = {
+             javascript: "JavaScript",
+             typescript: "TypeScript"
+           },
+           jp = 24;
+ 
+         function kp(pp) {
+           let {
+             code: ip,
+ ... (46 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L497-L498` → after: `L245-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L245-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L245-L263) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L497-L498)

```diff
-         addRule(CC, zC) {
-           this.rules.push([CC, zC]), "RM" === zC.type && this.count++
+         var mp = cp(4844);
+         var Rp = cp(4852);
+         const qp = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;
+ 
+         function Mp(pp) {
+           const ip = new Map;
+           let cp, Op = [],
+             op = !1;
+           const Ip = () => {
+             cp && ip.set(cp.name, cp.lines.join("\n").trimEnd())
+           };
+           for (const Sp of pp.split("\n")) {
+             const pp = Sp.match(qp);
+             op || Sp.startsWith("/*") ? (op || (Ip(), cp = void 0), Op.push(Sp), op = !Sp.includes("*/")) : pp ? (Ip(), cp = {
+               name: pp[1],
+               lines: [...Op, Sp]
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L500-L509` → after: `L265-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L265-L267) · [Before (L500-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L500-L509)

```diff
-         exec(CC) {
-           const zC = this.getMatcher(this.regexIndex);
-           zC.lastIndex = this.lastIndex;
-           let ZC = zC.exec(CC);
-           if (this.resumingScanAtSamePosition())
-             if (ZC && ZC.index === this.lastIndex);
-             else {
-               const zC = this.getMatcher(0);
-               zC.lastIndex = this.lastIndex + 1, ZC = zC.exec(CC)
-             } return ZC && (this.regexIndex += ZC.position + 1, this.regexIndex === this.count && this.considerAll()), ZC
+ 
+         function Cp(pp) {
+           return "methods" === pp || "callbacks" === pp || "settings" === pp
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L511-L565` → after: `L269-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L269-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L269-L379) · [Before (L511-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L511-L565)

```diff
-       }
-       if (CC.compilerExtensions || (CC.compilerExtensions = []), CC.contains && CC.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
-       return CC.classNameAliases = wC(CC.classNameAliases || {}),
-         function ZC(bC, nC) {
-           const fC = bC;
-           if (bC.isCompiled) return fC;
-           [TC, DC, Qz, yC].forEach((CC => CC(bC, nC))), CC.compilerExtensions.forEach((CC => CC(bC, nC))), bC.__beforeBegin = null, [aC, tC, jC].forEach((CC => CC(bC, nC))), bC.isCompiled = !0;
-           let oC = null;
-           return "object" === typeof bC.keywords && bC.keywords.$pattern && (bC.keywords = Object.assign({}, bC.keywords), oC = bC.keywords.$pattern, delete bC.keywords.$pattern), oC = oC || /\w+/, bC.keywords && (bC.keywords = UC(bC.keywords, CC.case_insensitive)), fC.keywordPat … [truncated]
-             return function(CC) {
-               CC.variants && !CC.cachedVariants && (CC.cachedVariants = CC.variants.map((function(zC) {
-                 return wC(CC, {
-                   variants: null
-                 }, zC)
-               })));
-               if (CC.cachedVariants) return CC.cachedVariants;
- ... (39 more removed lines; see GitHub link above)
+         const Ep = {
+             readme: {
+               icon: "code-block",
+               summary: "Code blocks, boards and World Code, and the globals your code can use.",
+               layout: "article"
+             },
+             snippets: {
+               icon: "scroll",
+               summary: "Ready-made code for common jobs, from moving players to running code every second.",
+               layout: "snippets"
+             },
+             howTo: {
+               icon: "book",
+               summary: "Step-by-step guides for variations, plugins and full games.",
+               layout: "article",
+               navTitle: "All how-tos"
+ ... (95 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L567-L569` → after: `L381-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L381-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L381-L404) · [Before (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L567-L569)

```diff
-             disableAutodetect: !0,
-             name: "Plain text",
-             contains: []
+             Variations: {
+               icon: "layers",
+               summary: "Alternate versions of a custom game, and matchmaking players between them."
+             },
+             Plugins: {
+               icon: "puzzle",
+               summary: "Reusable first-party World Code features, imported from @plugins."
+             },
+             "Building a SessionBasedGame": {
+               icon: "trophy",
+               summary: "A full team game: lobby, teams, map voting, rounds and a winner."
+             },
+             "Interactable NPCs": {
+               icon: "speech-bubble",
+               summary: "Entities players talk to or use, such as shopkeepers and guards."
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L583` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L408) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L583)

```diff
-           return FC.noHighlightRe.test(CC)
+           return pp.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L586-L596` → after: `L411-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L411-L413) · [Before (L586-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L586-L596)

```diff
-         function PC(CC, zC, ZC) {
-           let QC = "",
-             wC = "";
-           "object" === typeof zC ? (QC = CC, ZC = zC.ignoreIllegals, wC = zC.language) : (Cz("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Cz("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), wC … [truncated]
-           const bC = {
-             code: QC,
-             language: wC
-           };
-           eC("before:highlight", bC);
-           const nC = bC.result ? bC.result : GC(bC.language, bC.code, ZC);
-           return nC.code = bC.code, eC("after:highlight", nC), nC
+         function Qp(pp) {
+           let ip = !1;
+           return pp.split("\n").map((pp => (pp.startsWith("```") && (ip = !ip), !ip && /^#{3,} /.test(pp) ? pp.slice(1) : pp))).join("\n")
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L599-L617` → after: `L416-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L416-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L416-L495) · [Before (L599-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L599-L617)

```diff
-         function GC(CC, zC, wC, bC) {
-           const oC = Object.create(null);
- 
-           function qC() {
-             if (!eC.keywords) return void KC.addText(YC);
-             let CC = 0;
-             eC.keywordPatternRe.lastIndex = 0;
-             let zC = eC.keywordPatternRe.exec(YC),
-               ZC = "";
-             for (; zC;) {
-               ZC += YC.substring(CC, zC.index);
-               const wC = JC.case_insensitive ? zC[0].toLowerCase() : zC[0],
-                 bC = (QC = wC, eC.keywords[QC]);
-               if (bC) {
-                 const [CC, QC] = bC;
-                 if (KC.addText(ZC), ZC = "", oC[wC] = (oC[wC] || 0) + 1, oC[wC] <= 7 && (dC += QC), CC.startsWith("_")) ZC += zC[0];
- ... (3 more removed lines; see GitHub link above)
+         function Jp(pp) {
+           return "readme" === pp ? "getting-started" : lp(pp)
+         }
+         const Bp = "## Glossary of Referenced Types";
+         const Np = [{
+             id: "welcome",
+             slug: "",
+             title: "Welcome",
+             icon: "house",
+             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
+             layout: "article",
+             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
+           }, ...Rp.d.flatMap((pp => {
+             const ip = {
+               id: pp.id,
+               slug: Jp(pp.id),
+ ... (64 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L619-L620` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L497-L498) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L619-L620)

```diff
-               } else ZC += zC[0];
-               CC = eC.keywordPatternRe.lastIndex, zC = eC.keywordPatternRe.exec(YC)
+               }(ip);
+               return [pp, ...cp]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L622-L624` → after: `L500-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L500-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L500-L520) · [Before (L622-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L622-L624)

```diff
-             var QC;
-             ZC += YC.substring(CC), KC.addText(ZC)
-           }
+             return [ip]
+           }))],
+           Tp = [{
+             title: "Get started",
+             pageIds: ["welcome", "readme", "snippets", "changelog"]
+           }, {
+             title: "How-Tos",
+             pageIds: ["howTo", ...Np.filter((pp => void 0 !== pp.sourceAnchor)).map((pp => pp.id))]
+           }, {
+             title: "Reference",
+             pageIds: ["apiReference", "callbacks", "clientOptions", "types"]
+           }, {
+             title: "Settings",
+             pageIds: ["entitySettings", "mobSettings", "vehicleSettings"]
+           }, {
+             title: "Systems",
+ ... (5 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L626-L636` → after: `L522-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L522-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L522-L525) · [Before (L626-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L626-L636)

```diff
-           function WC() {
-             null != eC.subLanguage ? function() {
-               if ("" === YC) return;
-               let CC = null;
-               if ("string" === typeof eC.subLanguage) {
-                 if (!QC[eC.subLanguage]) return void KC.addText(YC);
-                 CC = GC(eC.subLanguage, YC, !0, hC[eC.subLanguage]), hC[eC.subLanguage] = CC._top
-               } else CC = RC(YC, eC.subLanguage.length ? eC.subLanguage : null);
-               eC.relevance > 0 && (dC += CC.relevance), KC.__addSublanguage(CC._emitter, CC.language)
-             }() : qC(), YC = ""
-           }
+         function fp(pp) {
+           return Np.find((ip => ip.id === pp))
+         }
+         const bp = new Map;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L638-L640` → after: `L527-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L527-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L527-L530) · [Before (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L638-L640)

```diff
-           function NC(CC, zC) {
-             "" !== CC && (KC.startScope(zC), KC.addText(CC), KC.endScope())
-           }
+         function hp(pp) {
+           let ip = bp.get(pp.id);
+           return ip || (ip = (0, mp.w)(pp.markdown, "changelog" === pp.layout ? 3 : 2), bp.set(pp.id, ip)), ip
+         }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L642-L652` → after: `L532-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L532-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L532-L549) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L642-L652)

```diff
-           function MC(CC, zC) {
-             let ZC = 1;
-             const QC = zC.length - 1;
-             for (; ZC <= QC;) {
-               if (!CC._emit[ZC]) {
-                 ZC++;
-                 continue
-               }
-               const QC = JC.classNameAliases[CC[ZC]] || CC[ZC],
-                 wC = zC[ZC];
-               QC ? NC(wC, QC) : (YC = wC, qC(), YC = ""), ZC++
+         function ap(pp, ip) {
+           return hp(pp).sections.some((pp => pp.heading.anchor === ip || pp.blocks.some((pp => "heading" === pp.kind && pp.anchor === ip))))
+         }
+ 
+         function np(pp) {
+           const [ip, ...cp] = pp.replace(/^#/, "").split("-"), Op = Np.find((pp => pp.id === ip));
+           if (!Op) return null;
+           const op = cp.length > 0 ? (0, mp.s)(cp.join("-")) : "";
+           for (const Sp of null !== (Ip = Op.childPageIds) && void 0 !== Ip ? Ip : []) {
+             var Ip;
+             const pp = fp(Sp);
+             if (pp.sourceAnchor === op) return {
+               page: pp,
+               anchor: ""
+             };
+             if (ap(pp, op)) return {
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L655-L661` → after: `L552-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L552-L554) · [Before (L655-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L655-L661)

```diff
- 
-           function gC(CC, zC) {
-             return CC.scope && "string" === typeof CC.scope && KC.openNode(JC.classNameAliases[CC.scope] || CC.scope), CC.beginScope && (CC.beginScope._wrap ? (NC(YC, JC.classNameAliases[CC.beginScope._wrap] || CC.beginScope._wrap), YC = "") : CC.beginScope._multi && (MC(CC.begin … [truncated]
-               parent: {
-                 value: eC
-               }
-             }), eC
+           return {
+             page: Op,
+             anchor: op
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L663-L679` → after: `L556-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L556-L568) · [Before (L663-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L663-L679)

```diff
- 
-           function SC(CC, zC, QC) {
-             let wC = function(CC, zC) {
-               const ZC = CC && CC.exec(zC);
-               return ZC && 0 === ZC.index
-             }(CC.endRe, QC);
-             if (wC) {
-               if (CC["on:end"]) {
-                 const QC = new ZC(CC);
-                 CC["on:end"](zC, QC), QC.isMatchIgnored && (wC = !1)
-               }
-               if (wC) {
-                 for (; CC.endsParent && CC.parent;) CC = CC.parent;
-                 return CC
-               }
-             }
- ... (1 more removed lines; see GitHub link above)
+         }
+         const Fp = {
+           Examples: {
+             pageId: "snippets",
+             anchor: ""
+           },
+           Notes: {
+             pageId: "readme",
+             anchor: "Globals"
+           },
+           "Glossary-of-Referenced-Types": {
+             pageId: "types",
+             anchor: ""
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L682-L684` → after: `L572-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L572-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L572-L580) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L682-L684)

```diff
-           function pC(CC) {
-             return 0 === eC.matcher.regexIndex ? (YC += CC[0], 1) : (EC = !0, 0)
-           }
+         function gp(pp, ip) {
+           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+           const Op = ip.slug ? `${pp}/${ip.slug}` : pp;
+           return cp ? `${Op}#${cp}` : Op
+         }
+         var Gp = cp(4874);
+         const rp = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
+           Zp = new Set(["GameApi", "Console", "_TypeOf"]),
+           zp = 4;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L686-L734` → after: `L582-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L582-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L582-L589) · [Before (L686-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L686-L734)

```diff
-           function PC(CC) {
-             const ZC = CC[0],
-               QC = zC.substring(CC.index),
-               wC = SC(eC, CC, QC);
-             if (!wC) return qz;
-             const bC = eC;
-             eC.endScope && eC.endScope._wrap ? (WC(), NC(ZC, eC.endScope._wrap)) : eC.endScope && eC.endScope._multi ? (WC(), MC(eC.endScope, CC)) : bC.skip ? YC += ZC : (bC.returnEnd || bC.excludeEnd || (YC += ZC), WC(), bC.excludeEnd && (YC = ZC));
-             do {
-               eC.scope && KC.closeNode(), eC.skip || eC.subLanguage || (dC += eC.relevance), eC = eC.parent
-             } while (eC !== wC.parent);
-             return wC.starts && gC(wC.starts, CC), bC.returnEnd ? 0 : ZC.length
-           }
-           let AC = {};
- 
-           function xC(QC, bC) {
-             const fC = bC && bC[0];
- ... (33 more removed lines; see GitHub link above)
+         function sp(pp) {
+           let ip = pp.length;
+           for (; ip > 0 && "" === pp[ip - 1].trim();) ip--;
+           return pp.slice(0, ip)
+         }
+ 
+         function Kp(pp) {
+           var ip;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L736-L794` → after: `L591-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L591-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L591-L601) · [Before (L736-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L736-L794)

```diff
-           let vC = "",
-             eC = bC || iC;
-           const hC = {},
-             KC = new FC.__emitter(FC);
-           ! function() {
-             const CC = [];
-             for (let zC = eC; zC !== JC; zC = zC.parent) zC.scope && CC.unshift(zC.scope);
-             CC.forEach((CC => KC.openNode(CC)))
-           }();
-           let YC = "",
-             dC = 0,
-             mC = 0,
-             HC = 0,
-             EC = !1;
-           try {
-             if (JC.__emitTokens) JC.__emitTokens(zC, KC);
- ... (43 more removed lines; see GitHub link above)
+           if (null === (ip = cp.at(-1)) || void 0 === ip || !ip.trimEnd().endsWith("*/")) return {
+             lines: cp,
+             doc: ""
+           };
+           const Op = cp.findLastIndex((pp => pp.startsWith("/**")));
+           return -1 === Op ? {
+             lines: cp,
+             doc: ""
+           } : {
+             lines: sp(cp.slice(0, Op)),
+             doc: cp.slice(Op).join("\n")
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L799-L806` → after: `L649-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L649-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L649-L688) · [Before (L799-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L799-L806)

```diff
-           zC = zC || FC.languages || Object.keys(QC);
-           const ZC = function(CC) {
-               const zC = {
-                 value: fz(CC),
-                 illegal: !1,
-                 relevance: 0,
-                 _top: oC,
-                 _emitter: new FC.__emitter(FC)
+           const cp = function(pp, ip) {
+             return pp.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((pp, cp) => {
+               var Op;
+               const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.object;
+               return op ? Oi(op.values) : pp
+             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((pp, cp) => {
+               var Op, op;
+               const Ip = null === (Op = ip.get(cp)) || void 0 === Op || null === (op = Op.object) || void 0 === op ? void 0 : op.values.map(ii);
+               return null !== Ip && void 0 !== Ip && Ip.every((pp => null !== pp)) ? Oi([...new Set(Ip.flat())]) : pp
+             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((pp, cp) => {
+               var Op;
+               const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.members;
+               return op ? Oi(op) : pp
+             })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((pp, cp) => {
+               var Op;
+               const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.object;
+ ... (24 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L808` → after: `L690-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L690-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L690-L697) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L808)

```diff
-               return zC._emitter.addText(CC), zC
+               for (const Ip of cp.lines.slice(1, -1)) {
+                 const pp = Ip.match(/^\t([\w$]+): (.+)$/);
+                 pp ? (op(), Op = {
+                   name: pp[1],
+                   lines: [pp[2]]
+                 }) : Op && Op.lines.push(Ip.replace(/^\t/, ""))
+               }
+               return op(), ip
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L810-L816` → after: `L699-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L699-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L699-L723) · [Before (L810-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L810-L816)

```diff
-             wC = zC.filter(IC).filter(vC).map((zC => GC(zC, CC, !1)));
-           wC.unshift(ZC);
-           const bC = wC.sort(((CC, zC) => {
-               if (CC.relevance !== zC.relevance) return zC.relevance - CC.relevance;
-               if (CC.language && zC.language) {
-                 if (IC(CC.language).supersetOf === zC.language) return 1;
-                 if (IC(zC.language).supersetOf === CC.language) return -1
+             Op = new Map;
+           for (const op of ip) Zp.has(op.name) || Op.has(op.name) || Op.set(op.name, oi(op, cp));
+           return Op
+         }
+         let Si, xi, Li;
+ 
+         function Yi() {
+           return xi ??= function(pp) {
+             const ip = Vp(pp).find((pp => "GameApi" === pp.name)),
+               cp = new Map,
+               Op = ip.lines;
+             for (let Ip = 0; Ip < Op.length; Ip++) {
+               var op;
+               if (!Op[Ip].trimStart().startsWith("/**")) continue;
+               const pp = Ip;
+               for (; Ip < Op.length && !Op[Ip].includes("*/");) Ip++;
+ ... (9 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L818-L822` → after: `L725-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L725-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L725-L731) · [Before (L818-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L818-L822)

```diff
-               return 0
-             })),
-             [nC, fC] = bC,
-             qC = nC;
-           return qC.secondBest = fC, qC
+               cp.set(ip[1], {
+                 deprecation: Sp,
+                 description: xp.join("\n").trim()
+               })
+             }
+             return cp
+           }(Gp.default), xi
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L825-L833` → after: `L734-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L734-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L734-L741) · [Before (L825-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L825-L833)

```diff
-         function AC(CC) {
-           let zC = null;
-           const ZC = function(CC) {
-             let zC = CC.className + " ";
-             zC += CC.parentNode ? CC.parentNode.className : "";
-             const ZC = FC.languageDetectRe.exec(zC);
-             if (ZC) {
-               const zC = IC(ZC[1]);
-               return zC || (VC(fC.replace("{}", ZC[1])), VC("Falling back to no-highlight mode for this block.", CC)), zC ? ZC[1] : "no-highlight"
+         function Di() {
+           if (!Li) {
+             Li = new Map;
+             for (const pp of Np) {
+               const ip = (0, mp.t)(hp(pp)).flatMap((pp => pp.blocks));
+               for (const pp of (0, mp.n)(ip))
+                 if ("ts" === pp.lang || "typescript" === pp.lang)
+                   for (const [ip, cp] of Mp(pp.code)) Li.set(ip, cp)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L835-L843` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L743) · [Before (L835-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L835-L843)

```diff
-             return zC.split(/\s+/).find((CC => pC(CC) || IC(CC)))
-           }(CC);
-           if (pC(ZC)) return;
-           if (eC("before:highlightElement", {
-               el: CC,
-               language: ZC
-             }), CC.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", CC);
-           if (CC.children.length > 0 && (FC.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element  … [truncated]
-             throw new nz("One of your code blocks includes unescaped HTML.", CC.innerHTML)
+             for (const [pp, ip] of(Si ??= Ii(Gp.default), Si)) Li.has(pp) || Li.set(pp, ip)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L845-L866` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L745) · [Before (L845-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L845-L866)

```diff
-           zC = CC;
-           const QC = zC.textContent,
-             bC = ZC ? PC(QC, {
-               language: ZC,
-               ignoreIllegals: !0
-             }) : RC(QC);
-           CC.innerHTML = bC.value, CC.dataset.highlighted = "yes",
-             function(CC, zC, ZC) {
-               const QC = zC && wC[zC] || ZC;
-               CC.classList.add("hljs"), CC.classList.add(`language-${QC}`)
-             }(CC, ZC, bC.language), CC.result = {
-               language: bC.language,
-               re: bC.relevance,
-               relevance: bC.relevance
-             }, bC.secondBest && (CC.secondBest = {
-               language: bC.secondBest.language,
- ... (6 more removed lines; see GitHub link above)
+           return Li
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L868` → after: `L747-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L747-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L747-L764) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L868)

```diff
-         let xC = !1;
+         const Ai = {
+           BlockName: "blockNames",
+           BlockNameOrId: "blockNames",
+           ItemName: "itemNames",
+           Song: "sounds",
+           ParticlePresetId: "particles",
+           PlayerPose: "skins",
+           IngameIconName: "icons",
+           ClientOptions: "clientOptions",
+           ClientOption: "clientOptions",
+           OtherEntitySettings: "entitySettings",
+           OtherEntitySetting: "entitySettings",
+           MobSettings: "mobSettings",
+           MobSetting: "mobSettings",
+           VehicleSetting: "vehicleSettings",
+           SettableVehicleSetting: "vehicleSettings"
+ ... (2 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L871-L874` → after: `L767-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L767-L776) · [Before (L871-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L871-L874)

```diff
-           if ("loading" === document.readyState) return xC || window.addEventListener("DOMContentLoaded", (function() {
-             JC()
-           }), !1), void(xC = !0);
-           document.querySelectorAll(FC.cssSelector).forEach(AC)
+           if (!Pi) {
+             Pi = new Map;
+             for (const pp of Np)
+               if (Cp(pp.layout))
+                 for (const ip of hp(pp).sections) Pi.has(ip.heading.text) || Pi.set(ip.heading.text, {
+                   pageId: pp.id,
+                   anchor: ip.heading.anchor
+                 })
+           }
+           return Pi
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L878` → after: `L780-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L780-L781) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L878)

```diff
-           return CC = (CC || "").toLowerCase(), QC[CC] || QC[wC[CC]]
+           const ip = pp.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
+           return ip ? Wi().get(ip[1]) : void 0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L881` → after: `L788-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L788-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L788-L793) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L881)

```diff
-         function iC(CC, zC) {
+         function Hi(pp) {
+           const ip = pp.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
+           return ip ? ip[1] : null
+         }
+ 
+         function di(pp) {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L883` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L795) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L883)

```diff
-             languageName: ZC
+             colour: ip
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L885-L887` → after: `L797-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L797-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L797-L839) · [Before (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L885-L887)

```diff
-           "string" === typeof CC && (CC = [CC]), CC.forEach((CC => {
-             wC[CC.toLowerCase()] = ZC
-           }))
+           return (0, yp.jsx)("span", {
+             className: "DocsColourSwatch",
+             style: {
+               background: ip
+             },
+             "aria-hidden": "true"
+           })
+         }
+ 
+         function ei(pp) {
+           const ip = [];
+           let cp = 0;
+           for (const Op of pp.matchAll(ti)) ip.push(pp.slice(cp, Op.index), (0, yp.jsx)(di, {
+             colour: Op[0]
+           }), Op[0]), cp = Op.index + Op[0].length;
+           return ip.push(pp.slice(cp)), ip
+ ... (27 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L892` → after: `L855-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L855-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L855-L866) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L892)

```diff
-           return zC && !zC.disableAutodetect
+           if (op) return (0, yp.jsx)(Sp.c, {
+             className: "DocsInlineCode DocsSymbolLink",
+             to: gp(cp, fp(op.pageId), op.anchor),
+             children: ip
+           });
+           const Ip = Hi(ip);
+           return (0, yp.jsxs)("code", {
+             className: "DocsInlineCode",
+             children: [Ip && (0, yp.jsx)(di, {
+               colour: Ip
+             }), ip]
+           })
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L895-L899` → after: `L869-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L869-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L869-L895) · [Before (L895-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L895-L899)

```diff
-         function eC(CC, zC) {
-           const ZC = CC;
-           bC.forEach((function(CC) {
-             CC[ZC] && CC[ZC](zC)
-           }))
+         function ki(pp) {
+           let {
+             text: ip
+           } = pp;
+           const cp = [];
+           let op = 0;
+           for (const Op of ip.matchAll(mp.g)) {
+             Op.index > op && cp.push(...ei(ip.slice(op, Op.index)));
+             const [, pp, Ip, Sp, xp, Lp] = Op;
+             pp ? cp.push((0, yp.jsx)(ji, {
+               code: (0, mp.q)(pp, Ip)
+             })) : Sp ? cp.push((0, yp.jsx)("strong", {
+               children: (0, yp.jsx)(ki, {
+                 text: Sp
+               })
+             })) : cp.push((0, yp.jsx)(ui, {
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L901-L924` → after: `L897-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L897-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L897-L970) · [Before (L901-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L901-L924)

```diff
-         Object.assign(CC, {
-           highlight: PC,
-           highlightAuto: RC,
-           highlightAll: JC,
-           highlightElement: AC,
-           highlightBlock: function(CC) {
-             return Cz("10.7.0", "highlightBlock will be removed entirely in v12.0"), Cz("10.7.0", "Please use highlightElement now."), AC(CC)
-           },
-           configure: function(CC) {
-             FC = oz(FC, CC)
-           },
-           initHighlighting: () => {
-             JC(), Cz("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
-           },
-           initHighlightingOnLoad: function() {
-             JC(), Cz("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
- ... (8 more removed lines; see GitHub link above)
+         const mi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
+           Ri = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
+ 
+         function qi(pp) {
+           let {
+             type: ip
+           } = pp;
+           const cp = Di(),
+             op = [];
+           for (const Op of ip.trim().matchAll(mi)) {
+             const [pp, ip, Ip, Sp, xp] = Op;
+             ip ? op.push((0, yp.jsx)("span", {
+               className: "DocsTypeString",
+               children: pp
+             })) : Ip && cp.has(Ip) ? op.push((0, yp.jsx)(li, {
+               name: Ip,
+ ... (58 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L926-L927` → after: `L972-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L972-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L972-L983) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L926-L927)

```diff
-             wC.name || (wC.name = zC), QC[zC] = wC, wC.rawDefinition = ZC.bind(null, CC), wC.aliases && iC(wC.aliases, {
-               languageName: zC
+           }), [Ap]), (0, Op.useEffect)((() => () => {
+             clearTimeout(vp.current)
+           }), []), (0, Op.useLayoutEffect)((() => {
+             if (!Ap || !xp.current || !Lp.current) return void Up(null);
+             const pp = xp.current.getBoundingClientRect(),
+               ip = Lp.current.offsetHeight,
+               cp = Math.min(Mi, window.innerWidth - 32),
+               Op = Math.min(Math.max(16, pp.left), window.innerWidth - cp - 16),
+               op = pp.bottom + Ci + ip < window.innerHeight;
+             Up({
+               left: Op,
+               top: op ? pp.bottom + Ci : Math.max(16, pp.top - Ci - ip)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L930-L932` → after: `L1069-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1069-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1069-L1078) · [Before (L930-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L930-L932)

```diff
-           unregisterLanguage: function(CC) {
-             delete QC[CC];
-             for (const zC of Object.keys(wC)) wC[zC] === CC && delete wC[zC]
+           timedClick: {
+             Ai: 3e3,
+             icon: "fa-solid fa-computer-mouse",
+             label: [{
+               str: "Click to complete the QTE!"
+             }],
+             Pi: !0,
+             scale: 3,
+             rotation: 15,
+             Wi: !1
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L934-L935` → after: `L1080-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1080-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1080-L1093) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L934-L935)

```diff
-           listLanguages: function() {
-             return Object.keys(QC)
+           gravityBar: {
+             Oi: 30,
+             Ui: .25,
+             Hi: 3,
+             ui: .8,
+             gravity: 1,
+             ji: 1.5,
+             ki: 8,
+             mi: 4,
+             Si: !1,
+             description: [{
+               str: "Hold to catch!"
+             }],
+             icon: "Moonfish"
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L937-L952` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1095-L1103) · [Before (L937-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L937-L952)

```diff
-           getLanguage: IC,
-           registerAliases: iC,
-           autoDetection: vC,
-           inherit: oz,
-           addPlugin: function(CC) {
-             ! function(CC) {
-               CC["before:highlightBlock"] && !CC["before:highlightElement"] && (CC["before:highlightElement"] = zC => {
-                 CC["before:highlightBlock"](Object.assign({
-                   block: zC.el
-                 }, zC))
-               }), CC["after:highlightBlock"] && !CC["after:highlightElement"] && (CC["after:highlightElement"] = zC => {
-                 CC["after:highlightBlock"](Object.assign({
-                   block: zC.el
-                 }, zC))
-               })
-             }(CC), bC.push(CC)
+           precisionBar: {
+             speed: .5,
+             qi: .15,
+             label: [{
+               str: "Click when the marker is within the green zone."
+             }],
+             icon: "",
+             scale: 1,
+             rotation: 0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L954-L955` → after: `L1105-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1105-L1113) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L954-L955)

```diff
-           removePlugin: function(CC) {
-             const zC = bC.indexOf(CC); - 1 !== zC && bC.splice(zC, 1)
+           rhythmClick: {
+             Ci: 5,
+             Ei: 1200,
+             Xi: .15,
+             li: 3,
+             label: [{
+               str: "Click when the circles align!"
+             }],
+             icon: ""
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L968-L1158` → after: `L1116-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1116-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1116-L1140) · [Before (L968-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L968-L1158)

```diff
-         for (const ZC in rC) "object" === typeof rC[ZC] && zC(rC[ZC]);
-         return Object.assign(CC, rC), CC
-       },
-       Wz = Fz({});
-     Wz.newInstance = () => Fz({}), CC.exports = Wz, Wz.HighlightJS = Wz, Wz.default = Wz
-   },
-   4657: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
-     });
-     const QC = ZC(4661)
-   },
-   4668: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => WC
-     });
- ... (175 more removed lines; see GitHub link above)
+         var fi = cp(322),
+           bi = cp(2028);
+ 
+         function ai(pp) {
+           return pp.startsWith("fa-")
+         }
+         const ni = {
+             text: "Text",
+             icon: "Icon",
+             progressBar: "Progress bar",
+             keyBinding: "Key binding",
+             other: "Other"
+           },
+           Fi = {
+             text: "Text",
+             icon: {
+ ... (9 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1160-L1172` → after: `L1142-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1142-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1142-L1153) · [Before (L1160-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1160-L1172)

```diff
-           }]
-         },
-         dC = {
-           relevance: 0,
-           match: zC.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
-           className: "title.class",
-           keywords: {
-             _: [...nC, ...fC]
-           }
-         },
-         mC = {
-           variants: [{
-             match: [/function/, /\s+/, ZC, /(?=\s*\()/]
+           };
+ 
+         function gi(pp) {
+           return "string" === typeof pp ? "text" : "entityName" in pp || "translationKey" in pp ? "other" : (0, fi.Eb)(pp) ? "progressBar" : (0, fi.Cb)(pp) ? "keyBinding" : "icon" in pp ? "icon" : "str" in pp && "string" === typeof pp.str ? "text" : "other"
+         }
+         const Gi = [{
+             path: ["style", "color"],
+             label: "Colour",
+             field: {
+               kind: "colour"
+             },
+             defaultText: "The surrounding text's"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1174-L1268` → after: `L1155-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1155-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1155-L1160) · [Before (L1174-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1174-L1268)

```diff
-             match: [/function/, /\s*(?=\()/]
-           }],
-           className: {
-             1: "keyword",
-             3: "title.function"
-           },
-           label: "func.def",
-           contains: [KC],
-           illegal: /%/
-         };
-       const HC = {
-         match: zC.concat(/\b/, (EC = [...oC, "super", "import"].map((CC => `${CC}\\s*\\(`)), zC.concat("(?!", EC.join("|"), ")")), ZC, zC.lookahead(/\s*\(/)),
-         className: "title.function",
-         relevance: 0
-       };
-       var EC;
- ... (79 more removed lines; see GitHub link above)
+             path: ["style", "fontSize"],
+             label: "Font size",
+             field: {
+               kind: "size"
+             },
+             defaultText: "1em"
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1270-L1271` → after: `L1162-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1162-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1162-L1168) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1270-L1271)

```diff
-             RM: /,/,
-             relevance: 0
+             path: ["style", "fontWeight"],
+             label: "Font weight",
+             field: {
+               kind: "choice",
+               options: ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
+             },
+             defaultText: "normal"
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1273-L1274` → after: `L1170-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1170-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1170-L1176) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1273-L1274)

```diff
-             match: /\s+/,
-             relevance: 0
+             path: ["style", "fontStyle"],
+             label: "Font style",
+             field: {
+               kind: "choice",
+               options: ["normal", "italic"]
+             },
+             defaultText: "normal"
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1276-L1278` → after: `L1178-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1178-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1178-L1201) · [Before (L1276-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1276-L1278)

```diff
-             variants: [{
-               RM: WC,
-               end: NC
+             path: ["style", "opacity"],
+             label: "Opacity",
+             field: {
+               kind: "fraction"
+             },
+             defaultText: "1"
+           }],
+           ri = {
+             text: [{
+               path: ["str"],
+               label: "Text",
+               field: {
+                 kind: "text",
+                 multiline: !0
+               },
+               isRequired: !0
+ ... (8 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1280` → after: `L1203-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1203-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1203-L1208) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1280)

```diff
-               match: /<[A-Za-z0-9\\._:-]+\s*\/>/
+               path: ["style", "color"],
+               label: "Colour",
+               field: {
+                 kind: "colour"
+               },
+               defaultText: "None, or the text's for Font Awesome"
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1282-L1284` → after: `L1210-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1210-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1210-L1222) · [Before (L1282-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1282-L1284)

```diff
-               RM: MC.RM,
-               "on:begin": MC.isTrulyOpeningTag,
-               end: MC.end
+               path: ["style", "fontSize"],
+               label: "Size",
+               field: {
+                 kind: "size"
+               },
+               defaultText: "1.8em"
+             }, {
+               path: ["style", "opacity"],
+               label: "Opacity",
+               field: {
+                 kind: "fraction"
+               },
+               defaultText: "1"
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1286-L1418` → after: `L1224-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1224-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1224-L1319) · [Before (L1286-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1286-L1418)

```diff
-             subLanguage: "xml",
-             contains: [{
-               RM: MC.RM,
-               end: MC.end,
-               skip: !0,
-               contains: ["self"]
-             }]
-           }]
-         }, mC, {
-           beginKeywords: "while if switch catch for"
-         }, {
-           RM: "\\b(?!function)" + CC.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
-           returnBegin: !0,
-           label: "func.def",
-           contains: [KC, CC.inherit(CC.TITLE_MODE, {
-             RM: ZC,
- ... (117 more removed lines; see GitHub link above)
+             progressBar: [{
+               path: ["progress"],
+               label: "Progress",
+               field: {
+                 kind: "fraction"
+               },
+               isRequired: !0
+             }, {
+               path: ["width"],
+               label: "Width",
+               field: {
+                 kind: "size"
+               },
+               defaultText: "4em"
+             }, {
+               path: ["height"],
+ ... (80 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1420-L1428` → after: `L1321-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1321-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1321-L1331) · [Before (L1420-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1420-L1428)

```diff
-         },
-         JC = {
-           RM: ".?gql`",
-           end: "",
-           starts: {
-             end: "`",
-             returnEnd: !1,
-             contains: [CC.BACKSLASH_ESCAPE, RC],
-             subLanguage: "graphql"
+         }
+         const pc = /^[A-Za-z_$][\w$]*$/;
+ 
+         function ic(pp) {
+           if (Array.isArray(pp)) return `[${pp.map(ic).join(", ")}]`;
+           if (pp && "object" === typeof pp) {
+             const ip = Object.entries(pp).map((pp => {
+               let [ip, cp] = pp;
+               return `${pc.test(ip)?ip:JSON.stringify(ip)}: ${ic(cp)}`
+             }));
+             return 0 === ip.length ? "{}" : `{ ${ip.join(", ")} }`
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1430-L1498` → after: `L1333-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1333-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1333-L1358) · [Before (L1430-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1430-L1498)

```diff
-         },
-         IC = {
-           className: "string",
-           RM: "`",
-           end: "`",
-           contains: [CC.BACKSLASH_ESCAPE, RC]
-         },
-         iC = {
-           className: "comment",
-           variants: [CC.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
-             relevance: 0,
-             contains: [{
-               RM: "(?=@[A-Za-z]+)",
-               relevance: 0,
-               contains: [{
-                 className: "doctag",
- ... (53 more removed lines; see GitHub link above)
+           return JSON.stringify(pp)
+         }
+ 
+         function cc(pp) {
+           const ip = pp.map(ic),
+             cp = `[${ip.join(", ")}]`;
+           return cp.length <= 60 ? cp : `[\n${ip.map((pp=>`    ${pp},`)).join("\n")}\n]`
+         }
+         const Oc = {
+           "\n": "\\n",
+           "\r": "\\r",
+           "\t": "\\t"
+         };
+ 
+         function oc(pp) {
+           let ip = "";
+ ... (10 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1500-L1504` → after: `L1360-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1360-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1360-L1407) · [Before (L1500-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1500-L1504)

```diff
-           }, {
-             match: [/class/, /\s+/, ZC],
-             scope: {
-               1: "keyword",
-               3: "title.class"
+           }
+           return `"${ip}"`
+         }
+ 
+         function Ic(pp) {
+           if ("string" === typeof pp) return !0;
+           if (!pp || "object" !== typeof pp || Array.isArray(pp)) return !1;
+           const ip = pp;
+           return "ProgressBar" === ip.type ? "number" === typeof ip.progress : "StyledKeyBinding" === ip.type ? bi.n.includes(ip.action) : "string" === typeof ip.icon || "string" === typeof ip.str || "string" === typeof ip.entityName || "string" === typeof ip.translationKey
+         }
+ 
+         function Sc(pp) {
+           let ip;
+           try {
+             ip = function(pp) {
+               let ip = "",
+ ... (32 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1515-L1681` → after: `L1410-L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1410-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1410-L1420) · [Before (L1515-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1515-L1681)

```diff
-         },
-         mC = {
-           variants: [{
-             match: [/function/, /\s+/, ZC, /(?=\s*\()/]
-           }, {
-             match: [/function/, /\s*(?=\()/]
-           }],
-           className: {
-             1: "keyword",
-             3: "title.function"
-           },
-           label: "func.def",
-           contains: [KC],
-           illegal: /%/
-         };
-       const HC = {
- ... (151 more removed lines; see GitHub link above)
+           if (!Array.isArray(ip)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
+           };
+           const cp = ip.findIndex((pp => !Ic(pp)));
+           return -1 !== cp ? {
+             parts: null,
+             error: `Part ${cp+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+           } : {
+             parts: ip,
+             error: null
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1683-L1690` → after: `L1422-L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1422-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1422-L1429) · [Before (L1683-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1683-L1690)

```diff
-         },
-         NC = {
-           beginKeywords: "interface",
-           end: /\{/,
-           excludeEnd: !0,
-           keywords: {
-             keyword: "interface extends",
-             built_in: fC
+         }
+         const xc = 1 / Qi.g.clientTicksPerSecond,
+           Lc = 700,
+           Yc = {
+             type: null,
+             parameters: null,
+             state: null,
+             isActive: !1
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1692-L1728` → after: `L1431-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1431-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/79.js#L1431-L7325) · [Before (L1692-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/79.js#L1692-L1728)

```diff
-           contains: [ZC.exports.CLASS_REFERENCE]
-         },
-         MC = {
-           $pattern: QC,
-           keyword: wC.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
-           literal: bC,
-           built_in: FC.concat(fC),
-           "variable.language": qC
-         },
-         gC = {
-           className: "meta",
-           RM: "@" + nC
-         },
-         SC = (CC, zC, ZC) => {
-           const QC = CC.contains.findIndex((CC => CC.label === zC));
-           if (-1 === QC) throw new Error("can not find mode to replace");
- ... (21 more removed lines; see GitHub link above)
+           Dc = {
+             progressBar: Ti.progressBar.Yi,
+             timedClick: Ti.timedClick.icon,
+             gravityBar: Ti.gravityBar.icon,
+             precisionBar: Ti.precisionBar.icon,
+             rhythmClick: Ti.rhythmClick.icon
+           };
+ 
+         function Ac(pp) {
+           let {
+             type: ip
+           } = pp;
+           const [cp, op] = (0, Op.useState)("ready"), [Sp, xp] = (0, Op.useState)(1), [Lp, Yp] = (0, Op.useState)(!0), Dp = (0, Op.useRef)(null), Ap = (0, Op.useRef)(null), Pp = (0, Op.useRef)(null), Wp = (0, Op.useRef)(new Set), Up = (0, Op.useRef)(!1), vp = Dc[ip], tp = (0, Op. … [truncated]
+             getState: () => {
+               var pp, ip;
+               return null !== (pp = null === (ip = Pp.current) || void 0 === ip ? void 0 : ip.getState()) && void 0 !== pp ? pp : Yc
+ ... (5879 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/80.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/80.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102)

#### 1. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L4-L18)

```diff
-   4674: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => QC,
-       e: () => nC,
-       g: () => pC,
-       h: () => SC,
-       j: () => fC,
-       n: () => wC,
-       p: () => bC,
-       r: () => gC,
-       s: () => MC,
-       u: () => NC
-     });
-     const QC = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
- 
+   4824: pp => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L20-L23` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L6-L21) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L20-L23)

```diff
-       try {
-         return decodeURIComponent(CC.slice(1))
-       } catch {
-         return CC.slice(1)
+       return pp instanceof Map ? pp.clear = pp.delete = pp.set = function() {
+         throw new Error("map is read-only")
+       } : pp instanceof Set && (pp.add = pp.clear = pp.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(pp), Object.getOwnPropertyNames(pp).forEach((cp => {
+         const Op = pp[cp],
+           op = typeof Op;
+         "object" !== op && "function" !== op || Object.isFrozen(Op) || ip(Op)
+       })), pp
+     }
+     class cp {
+       constructor(pp) {
+         void 0 === pp.data && (pp.data = {}), this.data = pp.data, this.isMatchIgnored = !1
+       }
+       ignoreMatch() {
+         this.isMatchIgnored = !0
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L28` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L26) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L28)

```diff
-       return CC.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
+       return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L32-L33` → after: `L29-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L29-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L29-L141) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L32-L33)

```diff
-     function fC(CC, zC) {
-       return 2 === CC.length ? zC.replace(/^ (.*) $/, "$1") : zC
+     function op(pp) {
+       const ip = Object.create(null);
+       for (const Ip in pp) ip[Ip] = pp[Ip];
+       for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
+       return Op.forEach((function(pp) {
+         for (const cp in pp) ip[cp] = pp[cp]
+       })), ip
+     }
+     const Ip = pp => !!pp.scope;
+     class Sp {
+       constructor(pp, ip) {
+         this.buffer = "", this.classPrefix = ip.classPrefix, pp.walk(this)
+       }
+       addText(pp) {
+         this.buffer += Op(pp)
+       }
+ ... (97 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L37` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L145) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L37)

```diff
-       return "" === CC.trim()
+       return pp ? "string" === typeof pp ? pp : pp.source : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L41-L43` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L149) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L41-L43)

```diff
-       const zC = [];
-       for (const ZC of CC.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zC.length > 0 && zC[zC.length - 1].endsWith("\\") ? zC[zC.length - 1] += `|${ZC}` : zC.push(ZC);
-       return zC.map((CC => CC.trim().replaceAll("\\|", "|")))
+       return yp("(?=", pp, ")")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L48-L70` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L153) · [Before (L48-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L48-L70)

```diff
-       const zC = [],
-         ZC = [{
-           indent: -1,
-           items: zC
-         }];
-       let QC = null;
-       for (const wC of CC) {
-         const CC = wC.match(FC);
-         if (!CC) {
-           QC && (QC.text += ` ${wC.trim()}`);
-           continue
-         }
-         const zC = CC[1].replace(/\t/g, "  ").length;
-         for (; zC <= ZC[ZC.length - 1].indent;) ZC.pop();
-         QC = {
-           text: CC[3].trim(),
- ... (7 more removed lines; see GitHub link above)
+       return yp("(?:", pp, ")*")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L74-L149` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L157) · [Before (L74-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L74-L149)

```diff
-       const zC = CC.replace(/\r\n/g, "\n").split("\n"),
-         ZC = [];
-       let QC = 0;
-       for (; QC < zC.length;) {
-         const CC = zC[QC];
-         if (oC(CC)) {
-           QC++;
-           continue
-         }
-         const wC = CC.match(/^\s*```\s*(\w*)\s*$/);
-         if (wC) {
-           const CC = [];
-           for (QC++; QC < zC.length && !/^\s*```\s*$/.test(zC[QC]);) CC.push(zC[QC]), QC++;
-           QC++, ZC.push({
-             kind: "code",
-             lang: wC[1] || "text",
- ... (60 more removed lines; see GitHub link above)
+       return yp("(?:", pp, ")?")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L152-L192` → after: `L160-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L160-L162) · [Before (L152-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L152-L192)

```diff
-     function MC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const ZC = NC(CC);
-       let QC = "";
-       const wC = [],
-         bC = [],
-         nC = new Map;
-       for (const qC of ZC) {
-         if ("heading" === qC.kind) {
-           var fC;
-           const CC = (null !== (fC = nC.get(qC.anchor)) && void 0 !== fC ? fC : 0) + 1;
-           nC.set(qC.anchor, CC), CC > 1 && (qC.anchor = `${qC.anchor}-${CC}`)
-         }
-         if ("heading" === qC.kind && 1 === qC.level && !QC) {
-           QC = qC.text;
-           continue
- ... (25 more removed lines; see GitHub link above)
+     function yp() {
+       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+       return ip.map((pp => Dp(pp))).join("")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L195-L202` → after: `L165-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L165-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L165-L171) · [Before (L195-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L195-L202)

```diff
-     function gC(CC) {
-       return [{
-         heading: null,
-         blocks: CC.intro
-       }, ...CC.sections.map((CC => ({
-         heading: CC.heading,
-         blocks: CC.blocks
-       })))]
+     function Up() {
+       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+       const Op = function(pp) {
+         const ip = pp[pp.length - 1];
+         return "object" === typeof ip && ip.constructor === Object ? (pp.splice(pp.length - 1, 1), ip) : {}
+       }(ip);
+       return "(" + (Op.capture ? "" : "?:") + ip.map((pp => Dp(pp))).join("|") + ")"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L206` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L175) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L206)

```diff
-       return CC.flatMap((CC => "code" === CC.kind ? [CC] : "quote" === CC.kind ? SC(CC.blocks) : []))
+       return new RegExp(pp.toString() + "|").exec("").length - 1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L209-L220` → after: `L179-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L179-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L179-L194) · [Before (L209-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L209-L220)

```diff
-     function pC(CC) {
-       switch (CC.kind) {
-         case "heading":
-         case "paragraph":
-           return CC.text;
-         case "code":
-           return CC.code;
-         case "table":
-           return [CC.header, ...CC.rows].map((CC => CC.join(" "))).join(" ");
-         case "list": {
-           const zC = CC => CC.map((CC => `${CC.text} ${zC(CC.children)}`)).join(" ");
-           return zC(CC.items)
+     function tp(pp, ip) {
+       let {
+         joinWith: cp
+       } = ip, Op = 0;
+       return pp.map((pp => {
+         Op += 1;
+         const ip = Op;
+         let cp = Dp(pp),
+           op = "";
+         for (; cp.length > 0;) {
+           const pp = vp.exec(cp);
+           if (!pp) {
+             op += cp;
+             break
+           }
+           op += cp.substring(0, pp.index), cp = cp.substring(pp.index + pp[0].length), "\\" === pp[0][0] && pp[1] ? op += "\\" + String(Number(pp[1]) + ip) : (op += pp[0], "(" === pp[0] && Op++)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L222-L226` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L196-L197) · [Before (L222-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L222-L226)

```diff
-         case "quote":
-           return CC.blocks.map(pC).join(" ");
-         case "rule":
-           return ""
-       }
+         return op
+       })).map((pp => `(${pp})`)).join(cp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L228-L233` → after: `L199-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L199-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L199-L332) · [Before (L228-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L228-L233)

```diff
-   },
-   6499: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => WC,
-       d: () => nC,
-       g: () => fC
+     const Hp = "[a-zA-Z]\\w*",
+       dp = "[a-zA-Z_]\\w*",
+       ep = "\\b\\d+(\\.\\d+)?",
+       jp = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
+       kp = "\\b(0b[01]+)",
+       mp = {
+         mW: "\\\\[\\s\\S]",
+         relevance: 0
+       },
+       Rp = {
+         scope: "string",
+         mW: "'",
+         end: "'",
+         illegal: "\\n",
+         contains: [mp]
+       },
+ ... (118 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L242` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L336) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L242)

```diff
-       return CC === zC ? CC : `${CC} (${zC})`
+       "." === pp.input[pp.index - 1] && ip.ignoreMatch()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L245-L259` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L339-L340) · [Before (L245-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L245-L259)

```diff
-     function oC(CC) {
-       const zC = [];
-       let ZC = 0;
-       for (const QC of CC.matchAll(nC)) {
-         QC.index > ZC && zC.push(CC.slice(ZC, QC.index));
-         const [, wC, nC, oC, qC, FC, WC] = QC;
-         void 0 !== wC ? zC.push(fC(wC, nC)) : void 0 !== oC || void 0 !== qC ? zC.push((0, bC.jsx)("strong", {
-           children: null !== oC && void 0 !== oC ? oC : qC
-         }, QC.index)) : void 0 !== FC ? zC.push((0, bC.jsx)("em", {
-           children: FC
-         }, QC.index)) : zC.push((0, bC.jsx)("code", {
-           children: WC
-         }, QC.index)), ZC = QC.index + QC[0].length
-       }
-       return ZC < CC.length && zC.push(CC.slice(ZC)), zC
+     function ap(pp, ip) {
+       void 0 !== pp.className && (pp.scope = pp.className, delete pp.className)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L263-L272` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L344) · [Before (L263-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L263-L272)

```diff
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       const QC = CC.map(((CC, zC) => (0, bC.jsxs)("li", {
-         children: [oC(CC.text), CC.children.length > 0 && qC(CC.children, !1)]
-       }, zC)));
-       return zC ? (0, bC.jsx)("ol", {
-         start: ZC,
-         children: QC
-       }) : (0, bC.jsx)("ul", {
-         children: QC
-       })
+       ip && pp.beginKeywords && (pp.mW = "\\b(" + pp.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", pp.__beforeBegin = hp, pp.keywords = pp.keywords || pp.beginKeywords, delete pp.beginKeywords, void 0 === pp.relevance && (pp.relevance = 0))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L276-L318` → after: `L348-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L348-L354) · [Before (L276-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L276-L318)

```diff
-       switch (CC.kind) {
-         case "heading":
-           return CC.level <= 2 ? (0, bC.jsx)("h3", {
-             children: oC(CC.text)
-           }, zC) : (0, bC.jsx)("h4", {
-             children: oC(CC.text)
-           }, zC);
-         case "paragraph":
-           return (0, bC.jsx)("p", {
-             children: oC(CC.text)
-           }, zC);
-         case "list":
-           return (0, bC.jsx)(QC.Fragment, {
-             children: qC(CC.items, CC.ordered)
-           }, zC);
-         case "quote":
- ... (27 more removed lines; see GitHub link above)
+       Array.isArray(pp.illegal) && (pp.illegal = Up(...pp.illegal))
+     }
+ 
+     function gp(pp, ip) {
+       if (pp.match) {
+         if (pp.mW || pp.end) throw new Error("begin & end are not supported with match");
+         pp.mW = pp.match, delete pp.match
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L322` → after: `L358-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L358-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L358-L409) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L322)

```diff
-     function WC(CC) {
+     function Gp(pp, ip) {
+       void 0 === pp.relevance && (pp.relevance = 1)
+     }
+     const rp = (pp, ip) => {
+         if (!pp.beforeMatch) return;
+         if (pp.starts) throw new Error("beforeMatch cannot be used with starts");
+         const cp = Object.assign({}, pp);
+         Object.keys(pp).forEach((ip => {
+           delete pp[ip]
+         })), pp.keywords = cp.keywords, pp.mW = yp(cp.beforeMatch, Ap(cp.mW)), pp.starts = {
+           relevance: 0,
+           contains: [Object.assign(cp, {
+             endsParent: !0
+           })]
+         }, pp.relevance = 0, delete cp.beforeMatch
+       },
+ ... (36 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L324` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L411) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L324)

```diff
-         markdown: zC
+         key: Op
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L326-L335` → after: `L413-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L413-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L413-L417) · [Before (L326-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L326-L335)

```diff
-       return (0, bC.jsx)("div", {
-         className: "StudioAiAnswerText",
-         children: (0, wC.u)(zC).map(((CC, zC) => {
-           if ("list" !== CC.kind || !CC.ordered) return ZC = 0, FC(CC, zC);
-           const wC = ZC + 1;
-           return ZC += CC.items.length, (0, bC.jsx)(QC.Fragment, {
-             children: qC(CC.items, !0, wC)
-           }, zC)
-         }))
-       })
+       const Ip = pp[Op],
+         Sp = {},
+         xp = {};
+       for (let Lp = 1; Lp <= ip.length; Lp++) xp[Lp + op] = Ip[Lp], Sp[Lp + op] = !0, op += wp(ip[Lp - 1]);
+       pp[Op] = xp, pp[Op]._emit = Sp, pp[Op]._multi = !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L351` → after: `L421-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L421-L449) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L351)

```diff
-       return (0, bC.f)(CC, nC, (zC => !/^my/i.test(zC[0]) || !/follow $/i.test(CC.slice(0, zC.index)))).length > 0
+       ! function(pp) {
+         pp.scope && "object" === typeof pp.scope && null !== pp.scope && (pp.beginScope = pp.scope, delete pp.scope)
+       }(pp), "string" === typeof pp.beginScope && (pp.beginScope = {
+           _wrap: pp.beginScope
+         }), "string" === typeof pp.endScope && (pp.endScope = {
+           _wrap: pp.endScope
+         }),
+         function(pp) {
+           if (Array.isArray(pp.mW)) {
+             if (pp.skip || pp.excludeBegin || pp.returnBegin) throw Vp("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Oi;
+             if ("object" !== typeof pp.beginScope || null === pp.beginScope) throw Vp("beginScope must be object"), Oi;
+             oi(pp, pp.mW, {
+               key: "beginScope"
+             }), pp.mW = tp(pp.mW, {
+               joinWith: ""
+             })
+ ... (13 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L358-L368` → after: `L453-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L453-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L453-L458) · [Before (L358-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L358-L368)

```diff
-       return function(CC) {
-         const zC = [];
-         let ZC = !1;
-         for (const QC of CC.split("\n")) {
-           if (/^\s*(```|~~~)/.test(QC)) {
-             ZC = !ZC;
-             continue
-           }
-           if (ZC || /^\s*>/.test(QC)) continue;
-           const CC = QC.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-           zC.push(...(0, wC.o)(CC))
+       function ip(ip, cp) {
+         return new RegExp(Dp(ip), "m" + (pp.case_insensitive ? "i" : "") + (pp.unicodeRegex ? "u" : "") + (cp ? "g" : ""))
+       }
+       class cp {
+         constructor() {
+           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L370-L371` → after: `L460-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L460-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L460-L546) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L370-L371)

```diff
-         return zC
-       }(CC).filter((CC => fC(CC) || qC.test(CC) && !oC.test(CC)))
+         addRule(pp, ip) {
+           ip.position = this.position++, this.matchIndexes[this.matchAt] = ip, this.regexes.push([ip, pp]), this.matchAt += wp(pp) + 1
+         }
+         compile() {
+           0 === this.regexes.length && (this.exec = () => null);
+           const pp = this.regexes.map((pp => pp[1]));
+           this.matcherRe = ip(tp(pp, {
+             joinWith: "|"
+           }), !0), this.lastIndex = 0
+         }
+         exec(pp) {
+           this.matcherRe.lastIndex = this.lastIndex;
+           const ip = this.matcherRe.exec(pp);
+           if (!ip) return null;
+           const cp = ip.findIndex(((pp, ip) => ip > 0 && void 0 !== pp)),
+             Op = this.matchIndexes[cp];
+ ... (71 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L388-L389` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L550) · [Before (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L388-L389)

```diff
-       const zC = MC.findIndex((zC => zC.name === CC));
-       return -1 === zC ? MC.length : zC
+       return !!pp && (pp.endsWithParent || xi(pp.starts))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L394-L395` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L553-L554) · [Before (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L394-L395)

```diff
-       constructor(CC) {
-         super(`Studio AI chat ${CC}`), this.reason = CC
+       constructor(pp, ip) {
+         super(pp), this.name = "HTMLInjectionError", this.html = ip
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L399-L410` → after: `L582-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L582-L583) · [Before (L399-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L399-L410)

```diff
-     function GC(CC, zC) {
-       const ZC = new AbortController,
-         QC = () => {
-           ZC.abort()
-         },
-         wC = setTimeout(QC, CC);
-       return null !== zC && void 0 !== zC && zC.aborted && QC(), null === zC || void 0 === zC || zC.addEventListener("abort", QC, {
-         once: !0
-       }), {
-         signal: ZC.signal,
-         clear: () => {
-           clearTimeout(wC), null === zC || void 0 === zC || zC.removeEventListener("abort", QC)
+         function wp(pp) {
+           return Dp.noHighlightRe.test(pp)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L415-L419` → after: `L586-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L586-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L586-L592) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L415-L419)

```diff
-     function RC(CC, zC, ZC) {
-       return new Promise(((wC, bC) => {
-         const nC = new AbortController,
-           fC = () => {
-             nC.abort(), bC((0, QC.g)(ZC))
+         function vp(pp, ip, cp) {
+           let Op = "",
+             op = "";
+           "object" === typeof ip ? (Op = pp, cp = ip.ignoreIllegals, op = ip.language) : (ci("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ci("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), op … [truncated]
+           const Ip = {
+             code: Op,
+             language: op
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L421-L458` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L594-L597) · [Before (L421-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L421-L458)

```diff
-         if (null !== ZC && void 0 !== ZC && ZC.aborted) return void fC();
-         null === ZC || void 0 === ZC || ZC.addEventListener("abort", fC, {
-           once: !0
-         });
-         const oC = MC.map((() => !1));
-         let qC = null;
-         const FC = MC.map((() => !1)),
-           WC = MC.map((() => !1));
-         MC.forEach(((QC, NC) => {
-           const gC = GC(pC, nC.signal);
-           JC(QC, [{
-             role: "user",
-             content: CC
-           }], gC.signal).then((CC => {
-             nC.signal.aborted || ("busy" === CC || "failed" === CC ? (FC[NC] = "busy" === CC, WC[NC] = !0) : null !== CC && (null === qC || NC < qC.rank) && (qC = {
-               rank: NC,
- ... (22 more removed lines; see GitHub link above)
+           qp("before:highlight", Ip);
+           const Sp = Ip.result ? Ip.result : tp(Ip.language, Ip.code, cp);
+           return Sp.code = Ip.code, qp("after:highlight", Sp), Sp
+         }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L460-L535` → after: `L599-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L599-L600) · [Before (L460-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L460-L535)

```diff
-     function AC(CC) {
-       var zC, ZC;
-       return "length" === (null === CC || void 0 === CC || null === (zC = CC.choices) || void 0 === zC || null === (ZC = zC[0]) || void 0 === ZC ? void 0 : ZC.finish_reason)
-     }
-     async function xC(CC, zC, ZC) {
-       const QC = MC.find((zC => zC.name === CC));
-       if (void 0 === QC) return "failed";
-       const wC = GC(pC, ZC);
-       try {
-         const CC = await JC(QC, zC, wC.signal);
-         return null !== CC && "object" === typeof CC ? CC.isCutOff ? (console.warn(`Studio AI: ${QC.name}'s answer was cut off at the token limit`), null) : {
-           text: CC.text
-         } : CC
-       } finally {
-         wC.clear()
-       }
- ... (60 more removed lines; see GitHub link above)
+         function tp(pp, ip, op, Ip) {
+           const Lp = Object.create(null);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L537-L539` → after: `L602-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L602-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L602-L624) · [Before (L537-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L537-L539)

```diff
-     function nC(CC) {
-       return CC.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
-     }
+           function Yp() {
+             if (!qp.keywords) return void Cp.addText(Ep);
+             let pp = 0;
+             qp.keywordPatternRe.lastIndex = 0;
+             let ip = qp.keywordPatternRe.exec(Ep),
+               cp = "";
+             for (; ip;) {
+               cp += Ep.substring(pp, ip.index);
+               const op = jp.case_insensitive ? ip[0].toLowerCase() : ip[0],
+                 Ip = (Op = op, qp.keywords[Op]);
+               if (Ip) {
+                 const [pp, Op] = Ip;
+                 if (Cp.addText(cp), cp = "", Lp[op] = (Lp[op] || 0) + 1, Lp[op] <= 7 && (Xp += Op), pp.startsWith("_")) cp += ip[0];
+                 else {
+                   const cp = jp.classNameAliases[pp] || pp;
+                   Pp(ip[0], cp)
+ ... (7 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L541-L544` → after: `L626-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L626-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L626-L636) · [Before (L541-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L541-L544)

```diff
-     function fC(CC) {
-       return CC.replace(/\$/g, "\\$")
-     }
-     const oC = /[.!?](?=\s|\*|_|$)|\n|$/g;
+           function Ap() {
+             null != qp.subLanguage ? function() {
+               if ("" === Ep) return;
+               let pp = null;
+               if ("string" === typeof qp.subLanguage) {
+                 if (!Op[qp.subLanguage]) return void Cp.addText(Ep);
+                 pp = tp(qp.subLanguage, Ep, !0, Mp[qp.subLanguage]), Mp[qp.subLanguage] = pp._top
+               } else pp = Hp(Ep, qp.subLanguage.length ? qp.subLanguage : null);
+               qp.relevance > 0 && (Xp += pp.relevance), Cp.__addSublanguage(pp._emitter, pp.language)
+             }() : Yp(), Ep = ""
+           }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L546-L550` → after: `L638-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L638-L640) · [Before (L546-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L546-L550)

```diff
-     function qC(CC, zC) {
-       oC.lastIndex = zC;
-       const ZC = oC.exec(CC);
-       return ZC.index + ZC[0].length
-     }
+           function Pp(pp, ip) {
+             "" !== pp && (Cp.startScope(ip), Cp.addText(pp), Cp.endScope())
+           }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L552-L554` → after: `L642-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L642-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L642-L654) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L552-L554)

```diff
-     function FC(CC) {
-       return (0, QC.z)(CC, /\s+/g, (0, QC.s)(".!?")).flatMap((CC => CC.split("\n")))
-     }
+           function Wp(pp, ip) {
+             let cp = 1;
+             const Op = ip.length - 1;
+             for (; cp <= Op;) {
+               if (!pp._emit[cp]) {
+                 cp++;
+                 continue
+               }
+               const Op = jp.classNameAliases[pp[cp]] || pp[cp],
+                 op = ip[cp];
+               Op ? Pp(op, Op) : (Ep = op, Yp(), Ep = ""), cp++
+             }
+           }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L556-L562` → after: `L656-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L656-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L656-L662) · [Before (L556-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L556-L562)

```diff
-     function WC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC;
-       const QC = [...CC.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((CC => CC.index)),
-         wC = QC.filter((CC => CC < zC)),
-         bC = QC.find((CC => CC >= ZC));
-       return [0 === wC.length ? 0 : wC.at(-1) + 1, void 0 === bC ? CC.length : bC + 1]
-     }
+           function yp(pp, ip) {
+             return pp.scope && "string" === typeof pp.scope && Cp.openNode(jp.classNameAliases[pp.scope] || pp.scope), pp.beginScope && (pp.beginScope._wrap ? (Pp(Ep, jp.classNameAliases[pp.beginScope._wrap] || pp.beginScope._wrap), Ep = "") : pp.beginScope._multi && (Wp(pp.begin … [truncated]
+               parent: {
+                 value: qp
+               }
+             }), qp
+           }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L564-L567` → after: `L664-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L664-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L664-L680) · [Before (L564-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L564-L567)

```diff
-     function NC(CC, zC) {
-       const ZC = CC.charCodeAt(zC - 1);
-       return CC.slice(0, zC > 0 && zC < CC.length && ZC >= 55296 && ZC <= 56319 ? zC - 1 : zC)
-     }
+           function Up(pp, ip, Op) {
+             let op = function(pp, ip) {
+               const cp = pp && pp.exec(ip);
+               return cp && 0 === cp.index
+             }(pp.endRe, Op);
+             if (op) {
+               if (pp["on:end"]) {
+                 const Op = new cp(pp);
+                 pp["on:end"](ip, Op), Op.isMatchIgnored && (op = !1)
+               }
+               if (op) {
+                 for (; pp.endsParent && pp.parent;) pp = pp.parent;
+                 return pp
+               }
+             }
+             if (pp.endsWithParent) return Up(pp.parent, ip, Op)
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L569-L571` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L682-L684) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L569-L571)

```diff
-     function MC(CC, zC) {
-       return `${zC}${CC.replace(/\\/g,"\\\\").split(zC).join(`\\${zC}`)}${zC}`
-     }
+           function wp(pp) {
+             return 0 === qp.matcher.regexIndex ? (Ep += pp[0], 1) : (Jp = !0, 0)
+           }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L573-L575` → after: `L686-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L686-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L686-L698) · [Before (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L573-L575)

```diff
-     function gC(CC) {
-       return CC.charAt(0).toUpperCase() + CC.slice(1)
-     }
+           function vp(pp) {
+             const cp = pp[0],
+               Op = ip.substring(pp.index),
+               op = Up(qp, pp, Op);
+             if (!op) return Ai;
+             const Ip = qp;
+             qp.endScope && qp.endScope._wrap ? (Ap(), Pp(cp, qp.endScope._wrap)) : qp.endScope && qp.endScope._multi ? (Ap(), Wp(qp.endScope, pp)) : Ip.skip ? Ep += cp : (Ip.returnEnd || Ip.excludeEnd || (Ep += cp), Ap(), Ip.excludeEnd && (Ep = cp));
+             do {
+               qp.scope && Cp.closeNode(), qp.skip || qp.subLanguage || (Xp += qp.relevance), qp = qp.parent
+             } while (qp !== op.parent);
+             return op.starts && yp(op.starts, pp), Ip.returnEnd ? 0 : cp.length
+           }
+           let dp = {};
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L577-L579` → after: `L700-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L700-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L700-L796) · [Before (L577-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L577-L579)

```diff
-     function SC(CC) {
-       return Math.round(CC).toLocaleString("en-US")
-     }
+           function ep(Op, Ip) {
+             const xp = Ip && Ip[0];
+             if (Ep += Op, null == xp) return Ap(), 0;
+             if ("mW" === dp.type && "end" === Ip.type && dp.index === Ip.index && "" === xp) {
+               if (Ep += ip.slice(Ip.index, Ip.index + 1), !Sp) {
+                 const ip = new Error(`0 width match regex (${pp})`);
+                 throw ip.languageName = pp, ip.badRule = dp.rule, ip
+               }
+               return 1
+             }
+             if (dp = Ip, "mW" === Ip.type) return function(pp) {
+               const ip = pp[0],
+                 Op = pp.rule,
+                 op = new cp(Op),
+                 Ip = [Op.__beforeBegin, Op["on:begin"]];
+               for (const cp of Ip)
+ ... (81 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L581-L584` → after: `L798-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L798-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L798-L823) · [Before (L581-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L581-L584)

```diff
-     function pC(CC) {
-       return CC.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((CC => "" !== CC))
-     }
-     const PC = 3;
+         function Hp(pp, ip) {
+           ip = ip || Dp.languages || Object.keys(Op);
+           const cp = function(pp) {
+               const ip = {
+                 value: Yi(pp),
+                 illegal: !1,
+                 relevance: 0,
+                 _top: Lp,
+                 _emitter: new Dp.__emitter(Dp)
+               };
+               return ip._emitter.addText(pp), ip
+             }(pp),
+             op = ip.filter(kp).filter(Rp).map((ip => tp(ip, pp, !1)));
+           op.unshift(cp);
+           const Ip = op.sort(((pp, ip) => {
+               if (pp.relevance !== ip.relevance) return ip.relevance - pp.relevance;
+ ... (10 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L586-L588` → after: `L825-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L825-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L825-L868) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L586-L588)

```diff
-     function GC(CC, zC) {
-       return pC(CC).filter((CC => CC.length >= PC && !/\d/.test(CC))).map((CC => `${CC} ${zC}`))
-     }
+         function dp(pp) {
+           let ip = null;
+           const cp = function(pp) {
+             let ip = pp.className + " ";
+             ip += pp.parentNode ? pp.parentNode.className : "";
+             const cp = Dp.languageDetectRe.exec(ip);
+             if (cp) {
+               const ip = kp(cp[1]);
+               return ip || (ii(xp.replace("{}", cp[1])), ii("Falling back to no-highlight mode for this block.", pp)), ip ? cp[1] : "no-highlight"
+             }
+             return ip.split(/\s+/).find((pp => wp(pp) || kp(pp)))
+           }(pp);
+           if (wp(cp)) return;
+           if (qp("before:highlightElement", {
+               el: pp,
+               language: cp
+ ... (28 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L590-L592` → after: `L870-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L870-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L870-L875) · [Before (L590-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L590-L592)

```diff
-     function RC(CC) {
-       return CC.split(/[\s:_]+/).filter((CC => "" !== CC)).map(nC).join("[`:_\\s]+")
-     }
+         function jp() {
+           if ("loading" === document.readyState) return ep || window.addEventListener("DOMContentLoaded", (function() {
+             jp()
+           }), !1), void(ep = !0);
+           document.querySelectorAll(Dp.cssSelector).forEach(dp)
+         }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L594-L596` → after: `L877-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L877-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L877-L879) · [Before (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L594-L596)

```diff
-     function AC(CC) {
-       return pC(CC.split(".").pop())
-     }
+         function kp(pp) {
+           return pp = (pp || "").toLowerCase(), Op[pp] || Op[op[pp]]
+         }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L598-L600` → after: `L881-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L881-L888) · [Before (L598-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L598-L600)

```diff
-     function xC(CC) {
-       return CC.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
-     }
+         function mp(pp, ip) {
+           let {
+             languageName: cp
+           } = ip;
+           "string" === typeof pp && (pp = [pp]), pp.forEach((pp => {
+             op[pp.toLowerCase()] = cp
+           }))
+         }
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L602-L610` → after: `L890-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L890-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L890-L978) · [Before (L602-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L602-L610)

```diff
-     function JC(CC) {
-       let zC = null;
-       return () => {
-         const ZC = zC ??= CC();
-         return ZC.catch((() => {
-           zC === ZC && (zC = null)
-         })), ZC
-       }
-     }
+         function Rp(pp) {
+           const ip = kp(pp);
+           return ip && !ip.disableAutodetect
+         }
+ 
+         function qp(pp, ip) {
+           const cp = pp;
+           Ip.forEach((function(pp) {
+             pp[cp] && pp[cp](ip)
+           }))
+         }
+         Object.assign(pp, {
+           highlight: vp,
+           highlightAuto: Hp,
+           highlightAll: jp,
+           highlightElement: dp,
+ ... (73 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L612` → after: `L980-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L980-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L980-L992) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L612)

```diff
-   4804: (CC, zC, ZC) => {
+   4831: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ap
+     });
+     const Op = "[A-Za-z$_][0-9A-Za-z$_]*",
+       op = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       Ip = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       Sp = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       xp = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       Lp = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       Yp = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       Dp = [].concat(Lp, Sp, xp);
+ 
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L615` → after: `L1219-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1219-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1219-L1322) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L615)

```diff
-         notAfter: CC
+         name: "JavaScript",
+         aliases: ["js", "jsx", "mjs", "cjs"],
+         keywords: yp,
+         exports: {
+           PARAMS_CONTAINS: Mp,
+           CLASS_REFERENCE: Xp
+         },
+         illegal: /#(?![$_A-z])/,
+         contains: [pp.SHEBANG({
+           label: "shebang",
+           binary: "node",
+           relevance: 5
+         }), {
+           label: "use_strict",
+           className: "meta",
+           relevance: 10,
+ ... (88 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L619-L627` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1328) · [Before (L619-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L619-L627)

```diff
-       d: () => oC,
-       f: () => qC,
-       h: () => fC,
-       l: () => QC,
-       n: () => wC,
-       q: () => bC,
-       s: () => nC,
-       v: () => FC,
-       z: () => WC
+       d: () => Pp
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L629-L630` → after: `L1330-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1330-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1330-L1337) · [Before (L629-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L629-L630)

```diff
-     const wC = QC("\\w$."),
-       bC = QC("\\w.,");
+     const Op = "[A-Za-z$_][0-9A-Za-z$_]*",
+       op = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       Ip = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       Sp = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       xp = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       Lp = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       Yp = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       Dp = [].concat(Lp, Sp, xp);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L633` → after: `L1340-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1340-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1340-L1669) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L633)

```diff
-       return zC => oC(zC, CC)
+       const ip = pp.regex,
+         cp = Op,
+         Ap = "<>",
+         Pp = "</>",
+         Wp = {
+           mW: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (pp, ip) => {
+             const cp = pp[0].length + pp.index,
+               Op = pp.input[cp];
+             if ("<" === Op || "," === Op) return void ip.ignoreMatch();
+             let op;
+             ">" === Op && (((pp, ip) => {
+               let {
+                 after: cp
+               } = ip;
+ ... (314 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L637-L653` → after: `L1673-L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1673-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1673-L1690) · [Before (L637-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L637-L653)

```diff
-       return zC => !CC.test(zC.input.slice(0, zC.index))
-     }
- 
-     function oC(CC, zC) {
-       return CC.index > 0 && new RegExp(`[${zC}]`).test(CC.input[CC.index - 1])
-     }
- 
-     function qC(CC, zC, ZC) {
-       return function(CC) {
-         return void 0 !== CC && "function" !== typeof CC
-       }(ZC) ? function(CC, zC, ZC) {
-         const QC = zC.flags.replace(/[gy]/g, ""),
-           wC = new RegExp(`[^${ZC}](?:${zC.source})`, `${QC}g`),
-           bC = [],
-           nC = ZC => {
-             const QC = ZC.index + ZC[0].length;
- ... (1 more removed lines; see GitHub link above)
+       const ip = pp.regex,
+         cp = Ap(pp),
+         Sp = Op,
+         xp = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
+         Lp = {
+           mW: [/namespace/, /\s+/, pp.IDENT_RE],
+           beginScope: {
+             1: "keyword",
+             3: "title.class"
+           }
+         },
+         Pp = {
+           beginKeywords: "interface",
+           end: /\{/,
+           excludeEnd: !0,
+           keywords: {
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L655-L694` → after: `L1692-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1692-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1692-L1723) · [Before (L655-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L655-L694)

```diff
-           fC = new RegExp(`(?:${zC.source})`, `${QC}y`).exec(CC);
-         if (fC) {
-           if (bC.push(fC), !zC.global) return bC;
-           wC.lastIndex = nC(fC)
-         }
-         for (let oC = wC.exec(CC); oC; oC = wC.exec(CC)) {
-           const ZC = NC(CC, zC, oC.index) - oC.index;
-           if (oC[0] = oC[0].slice(ZC), oC.index += ZC, bC.push(oC), !zC.global) break;
-           wC.lastIndex = nC(oC)
-         }
-         return bC
-       }(CC, zC, ZC.notAfter) : function(CC, zC, ZC) {
-         const QC = new RegExp(zC.source, `${zC.flags.replace(/[gy]/g,"")}g`),
-           wC = [];
-         for (let bC = QC.exec(CC); bC; bC = QC.exec(CC))
-           if (!ZC || ZC(bC)) {
- ... (24 more removed lines; see GitHub link above)
+           contains: [cp.exports.CLASS_REFERENCE]
+         },
+         Wp = {
+           $pattern: Op,
+           keyword: op.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
+           literal: Ip,
+           built_in: Dp.concat(xp),
+           "variable.language": Yp
+         },
+         yp = {
+           className: "meta",
+           mW: "@" + Sp
+         },
+         Up = (pp, ip, cp) => {
+           const Op = pp.contains.findIndex((pp => pp.label === ip));
+           if (-1 === Op) throw new Error("can not find mode to replace");
+ ... (16 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L696-L697` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/80.js#L1725) · [Before (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/80.js#L696-L697)

```diff
-   },
-   6495: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/81.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/81.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/81.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/81.js#L4)

```diff
-   4679: (CC, zC, ZC) => {
+   4844: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/81.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/81.js#L6)

```diff
-       c: () => SC
+       d: () => Op,
+       g: () => Sp,
+       k: () => wp,
+       n: () => Up,
+       q: () => xp,
+       r: () => op,
+       s: () => Ip,
+       t: () => yp,
+       w: () => Wp,
+       x: () => Pp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L8-L113` → after: `L17-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L17-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/81.js#L17-L697) · [Before (L8-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/81.js#L8-L113)

```diff
-     const QC = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       wC = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       bC = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       nC = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       fC = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       oC = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var qC = ZC(4688),
-       FC = ZC(4694);
-     const WC = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       NC = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
- 
-     function MC(CC) {
-       return CC.split("\n").filter((CC => CC.startsWith("## "))).map((CC => CC.replace(/^## (.+)$/gm, "$1").trim()))
-     }
- 
-     function gC(CC) {
- ... (90 more removed lines; see GitHub link above)
+     const Op = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function op(pp) {
+       try {
+         return decodeURIComponent(pp.slice(1))
+       } catch {
+         return pp.slice(1)
+       }
+     }
+ 
+     function Ip(pp) {
+       return pp.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
+     }
+     const Sp = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Op.source}`, "g");
+ 
+     function xp(pp, ip) {
+ ... (665 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/82.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/82.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba)

#### 1. `bundles/preprod.bloxd.io/chunks/js/82.js` (Changed code · before: `L4-L5` → after: `L4-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba) · [After (L4-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/82.js#L4-L112) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/82.js#L4-L5)

```diff
-   4688: CC => {
-     CC.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
+   4852: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Up
+     });
+     const Op = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       op = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       Ip = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       Sp = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       xp = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       Lp = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var Yp = cp(4861),
+       Dp = cp(4868);
+     const Ap = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       Pp = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+ 
+     function Wp(pp) {
+ ... (93 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/83.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/83.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/83.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/83.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/83.js#L4-L5)

```diff
-   4694: CC => {
-     CC.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   4861: pp => {
+     pp.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/84.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/84.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L4485` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L5) · [Before (L4-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L4485)

```diff
-   4696: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => QC
-     });
-     const QC = String.raw`export interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
- ... (4466 more removed lines; see GitHub link above)
+   4868: pp => {
+     pp.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/85.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/85.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/85.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/85.js#L2)

```diff
- export const ids = [85, 194];
+ export const ids = [85];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4-L20729` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/85.js#L4) · [Before (L4-L20729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/85.js#L4-L20729)

```diff
-   36414: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => sC,
-       g: () => uC
-     });
-     var QC = ZC(48),
-       wC = ZC(1840),
-       bC = ZC(36417),
-       nC = ZC.n(bC),
-       fC = ZC(4479),
-       oC = ZC(1811),
-       qC = ZC(1383),
-       FC = ZC(77),
-       WC = ZC(91),
-       NC = ZC(326),
-       MC = ZC(1002),
- ... (20710 more removed lines; see GitHub link above)
+   4874: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L20731-L25202` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/85.js#L6) · [Before (L20731-L25202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/85.js#L20731-L25202)

```diff
-       ALL_DEV_TOOLS: () => nC,
-       coreDevTools: () => qC,
-       devTools: () => oC
-     });
-     var QC = ZC(615),
-       wC = ZC(1257),
-       bC = ZC(34046);
-     const nC = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function fC() {
-       const {
-         noaDevTools: CC
-       } = await ZC.e(236).then((() => ZC(40899)));
-       return CC
-     }
-     const oC = new class {
-         constructor() {
- ... (4456 more removed lines; see GitHub link above)
+       default: () => Op
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L25204-L25398` → after: `L8-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/85.js#L8-L4491) · [Before (L25204-L25398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/85.js#L25204-L25398)

```diff
-     const QC = ["sine", "triangle", "square", "sawtooth"],
-       wC = 55,
-       bC = {
-         soft: {
-           waveform: "sine",
-           pitchHz: 300,
-           glideSemitones: -.5,
-           durationMs: 80,
-           attackMs: 6,
-           releaseMs: 18,
-           lowpassHz: null,
-           volume: .6,
-           intonation: {
-             variationSemitones: 1.2,
-             declineSemitones: 1.5,
-             questionRiseSemitones: 3.5,
- ... (179 more removed lines; see GitHub link above)
+     const Op = String.raw`export interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (4468 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/86.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/86.js` (75 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L4-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L4-L534) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L4)

```diff
-   4706: (CC, zC, ZC) => {
+   36728: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => hp,
+       g: () => fp
+     });
+     var Op = cp(62),
+       op = cp(1956),
+       Ip = cp(36730),
+       Sp = cp.n(Ip),
+       xp = cp(4635),
+       Lp = cp(1929),
+       Yp = cp(1476),
+       Dp = cp(104),
+       Ap = cp(116),
+       Pp = cp(337),
+       Wp = cp(1049),
+ ... (515 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L7` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L537) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L7)

```diff
-       f: () => PC
+       g: () => Dp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L9-L19` → after: `L539-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L539-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L539-L757) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L9-L19)

```diff
-     var QC = ZC(1260),
-       wC = ZC(28);
-     var bC = ZC(326);
-     var nC = ZC(600);
-     var fC = ZC(2348),
-       oC = ZC(4711),
-       qC = ZC(4739),
-       FC = ZC(4752);
-     class WC {
-       constructor(CC, zC, ZC, QC, wC, bC) {
-         this.id = CC, this.type = zC, this.parameters = ZC, this.tearDownNotification = QC, this.onDonePromise = wC, this.resolveRequest = bC
+     var Op = cp(62),
+       op = cp(1049),
+       Ip = cp.n(op),
+       Sp = cp(1480),
+       xp = cp(1112);
+     const Lp = 200,
+       Yp = 160;
+ 
+     function Dp() {
+       return window.matchMedia("(max-width: 900px)").matches
+     }
+ 
+     function Ap(pp) {
+       let {
+         side: ip,
+         defaultSize: cp,
+ ... (203 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L22` → after: `L760-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L760-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L760-L788) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L22)

```diff
-     const NC = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+   },
+   37115: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op,
+       e: () => Ip,
+       g: () => Sp,
+       j: () => op
+     });
+     const Op = "code block",
+       op = "World Code/";
+ 
+     function Ip(pp) {
+       return pp.trim().toLowerCase().startsWith(op.toLowerCase())
+     }
+ 
+     function Sp(pp) {
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L24-L30` → after: `L790-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L790-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L790-L802) · [Before (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L24-L30)

```diff
-       constructor(CC, zC, ZC, QC, wC, bC) {
-         this.id = CC, this.type = zC, this.parameters = ZC, this.resolveRequest = QC, this.onDonePromise = wC, this.tearDownNotification = bC, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.i … [truncated]
-         const nC = PC[zC];
-         if (!nC) throw console.error(`No QTE implementation registered for type: ${zC}`), new Error(`No QTE implementation registered for type: ${zC}`);
-         this.implementation = new nC(ZC, (CC => {
-           this.isCompleted = !0, this.resolveRequest(CC)
-         }), this.tearDownNotification), this.setupInputHandlers()
+       constructor(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         this.storageKey = pp, this.defaultValue = ip, this.canChange = cp, this.value = null, this.listeners = new Set, this.get = () => {
+           if (!this.canChange) return this.defaultValue;
+           if (null === this.value) {
+             const pp = op.h.getItem(this.storageKey);
+             this.value = "boolean" === typeof pp ? pp : this.defaultValue
+           }
+           return this.value
+         }, this.set = pp => {
+           this.value = pp, op.h.setItem(this.storageKey, pp);
+           for (const ip of this.listeners) ip(pp)
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L32-L45` → after: `L804-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L804-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L804-L880) · [Before (L32-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L32-L45)

```diff
-       setupInputHandlers() {
-         this.mouseSub = wC.o.subscribe("QTEMouseState", (CC => {
-           let {
-             isDown: zC
-           } = CC;
-           this.isCompleted || this.implementation.handleMouseInput(zC)
-         })), this.stopInputActions = (0, qC.k)((CC => {
-           this.isCompleted || !NC.has(CC.action) && !(0, qC.g)(CC) || this.implementation.handleMouseInput(CC.down)
-         })), this.tickSub = wC.o.subscribe("noaTick", (CC => {
-           if (this.isCompleted) return;
-           const zC = CC / 1e3;
-           this.implementation.handleTick(zC)
-         })), this.stopShellTicks = (0, oC.r)((() => {
-           this.isCompleted || this.implementation.handleTick(fC.p / 1e3)
+       subscribe(pp) {
+         return this.listeners.add(pp), () => {
+           this.listeners.delete(pp)
+         }
+       }
+     }
+     const xp = new Sp("codeEditorLightMode", !1),
+       Lp = new Sp("codeEditorAiHints", !0),
+       Yp = new Sp("codeEditorAiKeySafetyCheck", !0, Ip.featureFlags.isOwnTopLevelSite);
+ 
+     function Dp(pp) {
+       const [ip, cp] = (0, Op.useState)(pp.get);
+       return (0, Op.useEffect)((() => {
+         const ip = pp.subscribe(cp);
+         return cp(pp.get()), ip
+       }), [pp]), [ip, pp.set]
+ ... (61 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L48-L50` → after: `L885-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L885-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L885-L916) · [Before (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L48-L50)

```diff
-       cleanup() {
-         var CC, zC;
-         this.mouseSub && (wC.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (CC = this.stopInputActions) || void 0 === CC || CC.call(this), this.stopInputActions = null, null === (zC = this.stopShellTicks) || void 0 === zC || zC.call(this), this.stopShellTicks = nu … [truncated]
+     }
+     async function Wp(pp) {
+       const ip = await Ap();
+       try {
+         return await new Promise(((cp, Op) => {
+           const op = ip.transaction(Sp, "readonly").objectStore(Sp).get(pp);
+           op.onsuccess = () => {
+             var pp;
+             cp(null !== (pp = op.result) && void 0 !== pp ? pp : null)
+           }, op.onerror = () => {
+             var pp;
+             Op(null !== (pp = op.error) && void 0 !== pp ? pp : new Error("Failed to load directory handle"))
+           }
+         }))
+       } finally {
+         ip.close()
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L52-L53` → after: `L918-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L918-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L918-L936) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L52-L53)

```diff
-       async waitUntilDone() {
-         await this.onDonePromise
+     }
+     async function Up(pp) {
+       const ip = {
+         mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
+       };
+       return "granted" === await pp.queryPermission(ip) || "granted" === await pp.requestPermission(ip)
+     }
+     async function wp(pp) {
+       if (!Dp()) return null;
+       try {
+         const ip = await window.showDirectoryPicker({
+           mode: "readwrite"
+         });
+         return await Pp(pp, ip), ip
+       } catch (ip) {
+         if (function(pp) {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L55-L56` → after: `L938-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L938-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L938-L963) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L55-L56)

```diff
-       getState() {
-         return this.implementation.getState()
+     }
+ 
+     function vp(pp) {
+       return pp.startsWith(".") || Yp.has(pp)
+     }
+ 
+     function tp(pp) {
+       if (!pp) return !0;
+       const ip = pp.split("/");
+       for (const cp of ip)
+         if ("" === cp || "." === cp || ".." === cp) return !1;
+       return !0
+     }
+     async function Hp(pp, ip, cp) {
+       for await (const [Ip, Sp] of pp.entries()) {
+         if ("directory" === Sp.kind) {
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L58-L59` → after: `L965-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L965-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L965-L983) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L58-L59)

```diff
-       tearDown() {
-         this.isCompleted = !0, this.cleanup(), this.implementation.tearDown()
+     }
+     async function dp(pp) {
+       const ip = {};
+       return await Hp(pp, "", ip), ip
+     }
+ 
+     function ep(pp) {
+       return !(!pp || pp !== pp.trim() || pp.startsWith("/") || pp.includes("\\") || pp.includes("\0")) && tp(pp)
+     }
+     async function jp(pp, ip, cp) {
+       const Op = ip.split("/"),
+         op = Op[Op.length - 1];
+       let Ip = pp;
+       for (let Sp = 0; Sp < Op.length - 1; Sp++) Ip = await Ip.getDirectoryHandle(Op[Sp], {
+         create: cp
+       });
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L62-L71` → after: `L986-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L986-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L986-L1007) · [Before (L62-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L62-L71)

```diff
-     const gC = new QC.b,
-       SC = new Map;
-     let pC = null;
-     const PC = {
-       progressBar: class {
-         constructor(CC, zC, ZC) {
-           var QC, wC, bC, nC;
-           this.resolveRequest = zC, this.tearDownNotification = ZC, this.progress = 0, this.vZ = void 0, this.eZ = void 0, this.hZ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
-           const fC = CC;
-           this.vZ = null !== (QC = fC.vZ) && void 0 !== QC ? QC : .075, this.eZ = null !== (wC = fC.eZ) && void 0 !== wC ? wC : 1, this.progress = null !== (bC = fC.iZ) && void 0 !== bC ? bC : 30, this.hZ = null !== (nC = fC.hZ) && void 0 !== nC && nC, this.parameters = fC
+     async function kp(pp, ip, cp) {
+       if (!ep(ip)) throw new Error(`Refusing to write unsafe path: ${ip}`);
+       const {
+         dir: Op,
+         fileName: op
+       } = await jp(pp, ip, !0), Ip = await Op.getFileHandle(op, {
+         create: !0
+       }), Sp = await Ip.createWritable();
+       await Sp.write(cp), await Sp.close()
+     }
+     async function mp(pp, ip, cp) {
+       const Op = await async function(pp, ip) {
+         if (!ep(ip)) return null;
+         try {
+           const {
+             dir: cp,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L73-L74` → after: `L1009-L21670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L1009-L21670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L1009-L21670) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L73-L74)

```diff
-         handleMouseInput(CC) {
-           CC && !this.isCompleted && (this.clickCount++, this.progress += this.eZ, this.progress >= 100 && this.complete(!0))
+       }(pp, ip);
+       Op !== cp && await kp(pp, ip, cp)
+     }
+     async function Rp(pp, ip, cp) {
+       if (!(0, Op.s)(ip) && !(0, op.c)(ip)) throw new Error(`Refusing to write non-allowlisted path: ${ip}`);
+       if ((0, op.c)(ip)) {
+         if (await Xp(pp, ip) === xp) throw new Error(`Move the binary schematic ${ip} outside the linked folder before syncing its placeholder`)
+       }
+       await kp(pp, ip, cp)
+     }
+     async function qp(pp, ip) {
+       if (!ep(ip)) throw new Error(`Refusing to remove unsafe path: ${ip}`);
+       try {
+         const {
+           dir: cp,
+           fileName: Op
+ ... (20646 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L76-L80` → after: `L21672-L21673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21672-L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21672-L21673) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L76-L80)

```diff
-         handleTick() {
-           if (!this.isCompleted)
-             if (this.progress -= this.vZ, this.hZ && this.progress <= 0) this.complete(!1);
-             else if (this.progress <= 0) this.progress = 0;
-           else if (this.progress >= 100) return void this.complete(!0)
+         return Wp(103) in vc && yp(), {
+           [Wp(120) + Wp(yc[84])]: Sp
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L82-L83` → after: `L21675-L21705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21675-L21705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21675-L21705) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L82-L83)

```diff
-         complete(CC) {
-           this.isCompleted = !0, this.resolveRequest(CC)
+       }
+       return Sp
+     }
+ 
+     function Hc() {
+       Hc = function() {}
+     }
+     Hc(Oc = {}, oc = ["(kfw!U1r_o/yTxn", "O#4R4f0Lu}c+7GZOL#0`G!;$7)d:%|tN:GQm=9+dB", "f_XD,J%KQW#^C+(Oc+w/T{R5E(h^Jg8@YhCfTQL)aW", "8`jlO{P", "sel%L|1EX2wFZk7GDGVn<cN5N=yfc85NQ_i%^Qsy7p2g5kdd", '!qJY")wqO#:Ip[u@', "Op]fZK@R<=&RIlr?$gfXx0^LKp].]G{aC+N%mH,::r<8y0er", "w3*?)6`zfo!< … [truncated]
+       Hc(pp[yc[13]] = yc[1], pp[yc[15]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L85-L93` → after: `L21707-L21732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21707-L21732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21707-L21732) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L85-L93)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               progress: this.progress,
-               clickCount: this.clickCount
-             },
-             isActive: !0
+     }()), Hc(Pc = Object[Uc(84)](yc[36]), Wc = void 0), Hc(ic = (...pp) => {
+       function ip(...pp) {
+         return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
+           for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = '2uw9]":SAN^Qc_(1Rglap3W<tkYCZ,d7=P[e~B5Mj{Tx04&U+r}ny>FH6*of$vhiXm`8%;GI|qEK)?JbD.!zO@#s/VL', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[-yc[69]] = [], pp[yc[30]] = yc[1], pp[-yc[82]] = yc[1], pp[yc[7] … [truncated]
+             if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[0]][pp[-yc[3]]]), pp[yc[6]] !== -yc[2])
+               if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
+               else {
+                 Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[-yc[82]], pp[-yc[82]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 do {
+                   Hc(pp[-yc[69]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[-yc[82]] -= yc[11])
+                 } while (pp[-yc[82]] > yc[7]);
+                 pp[yc[7]] = -yc[2]
+               } return pp[yc[7]] > -yc[2] && pp[-yc[69]].push((pp[yc[30]] | pp[yc[7]] << pp[-yc[82]]) & yc[12]), wc(pp[-yc[69]])
+         }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
+       }
+       pp[yc[13]] = yc[2], ip(122) + "o" in vc && function(...pp) {
+ ... (10 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L95-L101` → after: `L21734-L21737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21734-L21737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21734-L21737) · [Before (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L95-L101)

```diff
-         }
-         tearDown() {
-           this.tearDownNotification()
-         }
-       },
-       timedClick: class {
-         constructor(CC, zC, ZC) {
+           return pp[yc[73]]
+         }, console.log(pp[yc[15]]))
+       }();
+       const cp = function(pp) {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L120-L124` → after: `L21740-L21743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21740-L21743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21740-L21743) · [Before (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L120-L124)

```diff
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               timeRemaining: zC,
-               HZ: this.timeWindowMs
+             meta: {
+               ...pp.meta,
+               formatVersion: Ri.g,
+               variation: null !== (ip = pp.meta.variation) && void 0 !== ip ? ip : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L126` → after: `L21745-L21751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21745-L21751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21745-L21751) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L126)

```diff
-             isActive: !0
+             initialChunks: pp.initialChunks.map((pp => ({
+               chunkPos: pp.chunkPos,
+               rle: Mi(pp.rle),
+               sharedBlockData: li("sharedBlockData", pp.sharedBlockData)
+             }))),
+             ticks: pp.ticks.map(Vi),
+             editState: pp.editState
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L129-L159` → after: `L21769-L21771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21769-L21771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21769-L21771) · [Before (L129-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L129-L159)

```diff
-         tearDown() {
-           this.tearDownNotification()
-         }
-       },
-       gravityBar: class {
-         constructor(CC, zC, ZC) {
-           var QC;
-           this.resolveRequest = zC, this.tearDownNotification = ZC, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
-           const wC = CC;
-           this.parameters = {
-             ...wC,
-             cZ: bC.c.clamp(wC.cZ, .05, 1)
-           }, this.progress = null !== (QC = wC.iZ) && void 0 !== QC ? QC : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
-         }
-         handleMouseInput(CC) {
-           this.isMouseDown = CC
- ... (15 more removed lines; see GitHub link above)
+ 
+         function Lp(...pp) {
+           return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = xp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L161-L166` → after: `L21773-L21822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21773-L21822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21773-L21822) · [Before (L161-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L161-L166)

```diff
-         updateCatchZone() {
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.sZ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = bC.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const CC = this.parameters.cZ / 2,
-             zC = CC,
-             ZC = 1 - CC;
-           this.catchZonePosition <= zC ? (this.catchZonePosition = zC, this.catchZoneVelocity = 0) : this.catchZonePosition >= ZC && (this.catchZonePosition = ZC, this.catchZoneVelocity = 0)
+ 
+         function Yp(...pp) {
+           pp[yc[13]] = yc[1];
+           const ip = require("big-integer");
+           Hc(pp[-yc[16]] = class {
+             static randomPrime(...pp) {
+               pp[yc[13]] = yc[2];
+               const cp = ip.one.shiftLeft(pp[yc[1]] - yc[2]),
+                 Op = ip.one.shiftLeft(pp[yc[1]]).prev();
+               for (; yc[51];) {
+                 let pp = ip.randBetween(cp, Op);
+                 if (pp.isProbablePrime(yc[99])) return pp
+               }
+             }
+             static generate(...pp) {
+               pp[yc[13]] = yc[2];
+ ... (34 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L168-L170` → after: `L21824-L21836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21824-L21836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21824-L21836) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L168-L170)

```diff
-         isMoverInCatchZone() {
-           const CC = this.parameters.cZ / 2;
-           return this.moverPosition >= this.catchZonePosition - CC && this.moverPosition <= this.catchZonePosition + CC
+         ip(yc[3]) + "k" in vc && Yp(), pp[yc[15]] = Op[Lp(124)](cp)
+       } catch (Uc) {
+         function Ap(...pp) {
+           for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'c?KlNHASZGOhfJRLtkXWYraoBCVdqgbpEUMsDFImijTPQen5v;_87u`^4,{/03]~x|"1#2=y&@*)z%[(.6+9$:!w>}<', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[21]].length, pp[-yc[27]] = [], pp[yc[88]] = yc[1], pp[yc[7]] = yc[1], pp[-yc[89 … [truncated]
+             if (pp[-yc[90]] = pp[yc[2]].indexOf(pp[yc[21]][pp[yc[67]]]), pp[-yc[90]] !== -yc[2])
+               if (pp[-yc[89]] < yc[1]) pp[-yc[89]] = pp[-yc[90]];
+               else {
+                 Hc(pp[-yc[89]] += pp[-yc[90]] * yc[29], pp[yc[88]] |= pp[-yc[89]] << pp[yc[7]], pp[yc[7]] += (pp[-yc[89]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                 do {
+                   Hc(pp[-yc[27]].push(pp[yc[88]] & yc[12]), pp[yc[88]] >>= yc[11], pp[yc[7]] -= yc[11])
+                 } while (pp[yc[7]] > yc[7]);
+                 pp[-yc[89]] = -yc[2]
+               } return pp[-yc[89]] > -yc[2] && pp[-yc[27]].push((pp[yc[88]] | pp[-yc[89]] << pp[yc[7]]) & yc[12]), wc(pp[-yc[27]])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L172-L173` → after: `L21838-L21840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21838-L21840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21838-L21840) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L172-L173)

```diff
-         updateProgress(CC) {
-           this.isMoverInCatchZone() ? this.progress += this.parameters.TZ * CC : this.progress -= this.parameters.aZ * CC, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hZ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+ 
+         function Pp(...pp) {
+           return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Ap(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L175-L176` → after: `L21842-L21850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21842-L21850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21842-L21850) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L175-L176)

```diff
-         complete(CC) {
-           this.isCompleted = !0, this.resolveRequest(CC)
+ 
+         function Wp(...pp) {
+           Hc(pp[yc[13]] = yc[1], pp[-yc[0]] = function(...pp) {
+             if (Hc(pp[yc[13]] = yc[2], pp[-yc[91]] = pp[yc[1]].length), pp[-yc[91]] < yc[0]) return yc[1];
+             if (Hc(pp[yc[21]] = Math.max(...pp[yc[1]]), pp[yc[14]] = Math.min(...pp[yc[1]])), pp[yc[21]] === pp[yc[14]]) return yc[1];
+             for (Hc(pp[yc[93]] = Array(pp[-yc[91]] - yc[2]).fill(Number.MAX_SAFE_INTEGER), pp[-yc[92]] = Array(pp[-yc[91]] - yc[2]).fill(Number.MIN_SAFE_INTEGER), pp[-yc[80]] = Math.ceil((pp[yc[21]] - pp[yc[14]]) / (pp[-yc[91]] - yc[2])), pp[yc[28]] = yc[1]), pp[yc[11]] = yc[1];  … [truncated]
+             for (Hc(pp[yc[6]] = Number.MIN_SAFE_INTEGER, pp[yc[5]] = pp[yc[14]]), pp[yc[94]] = yc[1]; pp[yc[94]] < pp[-yc[91]] - yc[2]; pp[yc[94]]++) pp[yc[93]][pp[yc[94]]] === Number.MAX_SAFE_INTEGER && pp[-yc[92]][pp[yc[94]]] === Number.MIN_SAFE_INTEGER || Hc(pp[yc[6]] = Math.m … [truncated]
+             return pp[yc[6]] = Math.max(pp[yc[6]], pp[yc[21]] - pp[yc[5]]), pp[yc[6]]
+           }, console.log(pp[-yc[0]]))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L178-L189` → after: `L21852-L21927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21852-L21927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21852-L21927) · [Before (L178-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L178-L189)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               catchZonePosition: this.catchZonePosition,
-               cZ: this.parameters.cZ,
-               moverPosition: this.moverPosition,
-               progress: this.progress,
-               isCatching: this.isMoverInCatchZone()
-             },
-             isActive: !0
+         throw ip(125) in vc && Wp(), Hc(console[ip(126)](cp), Op[Pp(yc[49])](cp, {
+           [Pp(yc[41]) + Pp(129)](...pp) {
+             function ip(...pp) {
+               return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(pp) {
+                 var ip, cp, Op, op, Ip, Sp, xp;
+                 for (Hc(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yc[1], Ip = yc[1], Sp = -yc[2]), xp = yc[1]; xp < cp; xp++) {
+                   var Lp = '$fWiURId{xO5`031Jp@}G~e)7XA?Y=#(>M_oZFmc4,gs[+r]SNwP!^26/ut:j;|zbBkCvT%.D<9"aQq8LlV&hyEH*nK'.indexOf(ip[xp]);
+                   if (Lp !== -yc[2])
+                     if (Sp < yc[1]) Sp = Lp;
+                     else {
+                       Hc(Sp += Lp * yc[29], op |= Sp << Ip, Ip += (Sp & yc[32]) > yc[33] ? yc[34] : yc[35]);
+                       do {
+                         Hc(Op.push(op & yc[12]), op >>= yc[11], Ip -= yc[11])
+                       } while (Ip > yc[7]);
+                       Sp = -yc[2]
+                     }
+ ... (60 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L192-L193` → after: `L21967-L21969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21967-L21969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21967-L21969) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L192-L193)

```diff
-         tearDown() {
-           this.tearDownNotification()
+ 
+         function xp(...pp) {
+           return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Sp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L195-L197` → after: `L21971-L21973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21971-L21973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21971-L21973) · [Before (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L195-L197)

```diff
-       },
-       precisionBar: class {
-         constructor(CC, zC, ZC) {
+         const Lp = cp[xp(147)](yc[19]),
+           Yp = xi(Op) ? Ip[yc[97]][xp(148)](Yi(Op, Lp)) : Lp;
+         return function(pp) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L199-L217` → after: `L21975-L21997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R21975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L21975-L21997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L21975-L21997) · [Before (L199-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L199-L217)

```diff
-           this.resolveRequest = zC, this.tearDownNotification = ZC, this.startTime = void 0, this.speed = void 0, this.DZ = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
-           const qC = CC;
-           this.parameters = {
-             ...qC,
-             speed: null !== (QC = qC.speed) && void 0 !== QC ? QC : .5,
-             DZ: bC.c.clamp(qC.DZ, .05, 1),
-             label: null !== (wC = qC.label) && void 0 !== wC ? wC : [{
-               str: "Click when the marker is within the green zone."
-             }],
-             icon: null !== (nC = qC.icon) && void 0 !== nC ? nC : null,
-             scale: null !== (fC = qC.scale) && void 0 !== fC ? fC : 1,
-             rotation: null !== (oC = qC.rotation) && void 0 !== oC ? oC : 0
-           }, this.speed = this.parameters.speed, this.DZ = this.parameters.DZ, this.startTime = Date.now()
-         }
-         handleMouseInput(CC) {
-           if (CC) {
- ... (3 more removed lines; see GitHub link above)
+           const xp = null === (ip = pp.meta) || void 0 === ip ? void 0 : ip.formatVersion;
+           if (!(0, qi.h)(xp)) throw new Error(`Unsupported recording format version: ${xp}`);
+           if (!Array.isArray(pp.initialChunks) || !Array.isArray(pp.ticks)) throw new Error("Recording is missing initialChunks or ticks");
+           for (const op of pp.ticks)
+             if (!Array.isArray(op.structuralEvents) || !Array.isArray(op.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
+           const Lp = {
+             ...pp.meta
+           };
+           return Lp.formatVersion = Ri.g, (0, op.G)(Lp.variation) && delete Lp.variation, {
+             meta: Lp,
+             initialChunks: pp.initialChunks.map((pp => {
+               var ip;
+               return {
+                 chunkPos: pp.chunkPos,
+                 rle: Ci(pp.rle),
+                 sharedBlockData: null !== (ip = Qi("sharedBlockData", pp.sharedBlockData)) && void 0 !== ip ? ip : []
+ ... (7 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L220-L237` → after: `L22077-L22122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22077-L22122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22077-L22122) · [Before (L220-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L220-L237)

```diff
-         handleTick() {
-           this.isCompleted || this.updateMarkerPosition()
-         }
-         updateMarkerPosition() {
-           const CC = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
-           this.markerPosition = CC <= .5 ? 2 * CC : 2 - 2 * CC
-         }
-         complete(CC) {
-           this.isCompleted = !0, this.resolveRequest(CC)
-         }
-         getState() {
-           return this.updateMarkerPosition(), {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               markerPosition: this.markerPosition
- ... (2 more removed lines; see GitHub link above)
+       }
+       return ip
+     }
+ 
+     function Yp(pp, ip) {
+       const cp = {};
+       for (const op of Object.keys(pp)) {
+         const Ip = {};
+         for (const cp of Object.keys(pp[op])) {
+           const Op = pp[op][cp];
+           null !== Op.endTick && Op.endTick < ip || (Ip[cp] = {
+             ...Op,
+             endTick: null === Op.endTick ? null : Op.endTick - ip
+           })
+         }(0, Op.mc)(Ip) || (cp[op] = Ip)
+       }
+ ... (30 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L240-L241` → after: `L22125-L22171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22125-L22171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22125-L22171) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L240-L241)

```diff
-         tearDown() {
-           this.tearDownNotification()
+       }
+       upsert(pp, ip, cp) {
+         this.tracked[pp] || (this.tracked[pp] = {}), this.tracked[pp][ip] = cp
+       }
+       remove(pp, ip) {
+         const cp = this.tracked[pp];
+         cp && (delete cp[ip], (0, Op.mc)(cp) && delete this.tracked[pp])
+       }
+       handleUpdate(pp) {
+         var ip;
+         0 !== pp.duration ? this.upsert(pp.Np, pp.name, {
+           icon: pp.icon,
+           level: pp.level,
+           displayName: Ip(pp.displayName),
+           showInNametag: null === (ip = pp.showInNametag) || void 0 === ip || ip,
+           endTime: void 0 !== pp.duration && null !== pp.duration ? Date.now() + pp.duration : null
+ ... (31 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L243-L246` → after: `L22173-L22200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22173-L22200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22173-L22200) · [Before (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L243-L246)

```diff
-       },
-       rhythmClick: class {
-         constructor(CC, zC, ZC) {
-           this.resolveRequest = zC, this.tearDownNotification = ZC, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = CC, this.shrinkStartT … [truncated]
+         return op
+       }
+     }
+ 
+     function Pp(pp, ip, cp, Op) {
+       pp.hasEntity(ip) ? pp.updateEffect(ip, cp, Op) : function(pp, ip, cp) {
+         op.m.GA("EffectUpdate", {
+           Np: pp,
+           name: ip,
+           ...cp
+         }, !0)
+       }(ip, cp, Op)
+     }
+ 
+     function Wp(pp, ip, cp) {
+       pp.hasEntity(ip) ? pp.removeEffect(ip, cp) : function(pp, ip) {
+ ... (12 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L248-L254` → after: `L22202-L22223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22202-L22223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22202-L22223) · [Before (L248-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L248-L254)

```diff
-         handleMouseInput(CC) {
-           if (!CC || this.isCompleted) return;
-           const zC = this.getOuterCircleProgress();
-           if (zC <= this.parameters.UZ && zC >= -this.parameters.UZ) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yZ) return void this.complete(!0)
-           } else this.handleMiss();
-           this.shrinkStartTime = Date.now()
+       for (const Up of Object.keys(ip))
+         for (const xp of Object.keys(ip[Up])) {
+           var Lp, Yp;
+           const wp = ip[Up][xp],
+             vp = Dp(wp.endTick, Ip, Sp);
+           if (0 === vp) {
+             Wp(pp, Up, xp), Op && Up === Op && String(op) !== String(Up) && Wp(pp, op, xp);
+             continue
+           }
+           const tp = null === (Lp = cp[Up]) || void 0 === Lp ? void 0 : Lp[xp],
+             Hp = tp && (yp = wp, (Ap = tp).icon === yp.icon && Ap.level === yp.level && Ap.displayName === yp.displayName && Ap.endTick === yp.endTick && Ap.showInNametag === yp.showInNametag),
+             dp = {
+               icon: wp.icon,
+               level: wp.level,
+               displayName: null !== (Yp = wp.displayName) && void 0 !== Yp ? Yp : void 0,
+               duration: vp,
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L256-L257` → after: `L22225-L22261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22225-L22261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22225-L22261) · [Before (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L256-L257)

```diff
-         handleMiss() {
-           this.misses++, this.lastClickResult = !1, !(0, nC.H)(this.parameters.BZ) && this.misses > this.parameters.BZ ? this.complete(!1) : this.shrinkStartTime = Date.now()
+       var Ap, yp
+     }
+   },
+   37173: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Dp,
+       f: () => Yp,
+       i: () => Pp,
+       j: () => xp,
+       k: () => Ap
+     });
+     var Op = cp(37169),
+       op = cp(37177),
+       Ip = cp(301);
+     const Sp = {
+       description: "Bloxd Replay",
+ ... (21 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L259-L261` → after: `L22263-L22546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22263-L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22263-L22546) · [Before (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L259-L261)

```diff
-         handleTick() {
-           if (this.isCompleted) return;
-           this.getOuterCircleProgress() < -this.parameters.UZ && this.handleMiss()
+       } catch (pp) {
+         if (Lp(pp)) return null;
+         throw pp
+       }
+     }
+     async function Dp(pp) {
+       if (pp && await async function(pp) {
+           const ip = {
+             mode: "readwrite"
+           };
+           return "granted" === await pp.queryPermission(ip) || "granted" === await pp.requestPermission(ip)
+         }(pp)) return pp;
+       try {
+         return await window.showSaveFilePicker({
+           suggestedName: (0, Op.l)(),
+           types: [Sp]
+ ... (268 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L263-L264` → after: `L22548-L22604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22548-L22604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22548-L22604) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L263-L264)

```diff
-         getOuterCircleProgress() {
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.LZ
+       }
+       async reportRtt(pp, ip, cp) {
+         const Op = "ours" === (await this.probeHost(pp)).answer ? await this.probeHost(pp) : null;
+         "ours" === (null === Op || void 0 === Op ? void 0 : Op.answer) ? this.deps.Yy("game_server_rtt", ip, Op.ms): this.deps.Yy("game_server_rtt", cp, 0)
+       }
+       probeHost(pp) {
+         return this.deps.probe(`https://${pp}/version`, 8e3)
+       }
+       stored() {
+         return function(pp) {
+           if ("object" !== typeof pp || null === pp) return null;
+           const {
+             route: ip,
+             until: cp,
+             aliasFailedOnce: Op,
+             recoveryArm: op
+ ... (41 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L266-L267` → after: `L22606-L22645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22606-L22645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22606-L22645) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L266-L267)

```diff
-         complete(CC) {
-           this.isCompleted = !0, this.resolveRequest(CC)
+       },
+       Yy: yp.x,
+       enabled: !(0, kp.isDiscordClient)(),
+       now: Date.now,
+       random: Math.random,
+       delay: pp => new Promise((ip => {
+         setTimeout(ip, pp)
+       })),
+       sleep: mp.e,
+       seatLegs: Rp.g
+     });
+     var lp = cp(1749),
+       Qp = cp(9056);
+ 
+     function Jp(pp) {
+       return async (ip, cp, Sp, xp, Yp) => {
+ ... (24 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L269-L280` → after: `L22647-L22701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22647-L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22647-L22701) · [Before (L269-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L269-L280)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               outerCircleProgress: this.getOuterCircleProgress(),
-               successes: this.successes,
-               yZ: this.parameters.yZ,
-               misses: this.misses,
-               lastClickResult: this.lastClickResult
-             },
-             isActive: !0
+         if (Yp.aborted) return Np();
+         console.log(`Connecting to ${Ap.gameNameWithVariation} in lobby ${Ap.lobbyName} on game server ${Ap.endpoint}`), Pp.m.GA("matchmakeAndPlayStepCompleted", {
+           step: Ip.k.REQUEST_TO_MATCHMAKING,
+           totalSubSteps: 1
+         }), (0, yp.m)(), Up.c.markGameLoadStart((0, lp.d)()), (0, tp.p)({
+           websocketUrl: Ap.endpoint,
+           gameNameWithVariation: Ap.gameNameWithVariation,
+           lobbyName: Ap.lobbyName
+         }), Pp.m.GA("loadingScreenState", "loadingPage:loadingGame");
+         const dp = async () => {
+           const pp = await async function(pp, ip, cp, Op) {
+             const op = await bp(pp, ip, cp);
+             if (!op.isError() && !Op.aborted) {
+               const {
+                 endpoint: pp,
+                 gameNameWithVariation: ip,
+ ... (39 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L283-L284` → after: `L22717-L22729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22717-L22729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22717-L22729) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L283-L284)

```diff
-         tearDown() {
-           this.tearDownNotification()
+         if (Mp.isError() && "retry" === Jp && !Yp.aborted && Xp.takeAutoRetry()) {
+           if (!await Xp.waitToRetry(Yp)) return Np();
+           console.log("Joining through Cloudflare again");
+           const pp = await dp();
+           if (Yp.aborted) return Np();
+           if (pp.isError()) return Xp.afterAutoRetryFailed(null), Mp.asError().forward();
+           if (Mp = await jp(Yp), Mp.isError() && !Yp.aborted) {
+             const pp = Mp.asError().debugResult;
+             await Xp.afterJoinFailed(Ap.endpoint, pp, null), Xp.afterAutoRetryFailed(pp)
+           } else if (!Mp.isError()) {
+             var ap;
+             Xp.afterAutoRetryJoined(null !== (ap = Cp()) && void 0 !== ap ? ap : 0)
+           }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L287` → after: `L22738-L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22738-L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22738-L22742) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L287)

```diff
-     };
+     }
+ 
+     function Bp(pp) {
+       null !== pp && Xp.afterAliasJoinLeft(performance.now() - pp)
+     }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L290-L293` → after: `L22745-L22747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22745-L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22745-L22747) · [Before (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L290-L293)

```diff
-       (0, FC.e)(fC.v.Qte, pC ? fC.v.Qte : 0), pC ? wC.o.bp("qteStateUpdated", pC.getState()) : wC.o.bp("qteStateUpdated", {
-         type: null,
-         typeSpecificParameters: null,
-         isActive: !1
+       return Dp.d.errorWithCode("Left the game while it loaded", Ip.k.REQUEST_TO_MATCHMAKING, {
+         severity: "low",
+         OO: !0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L296-L306` → after: `L22750-L22759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22750-L22759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22750-L22759) · [Before (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L296-L306)

```diff
-     class RC {
-       constructor(CC, zC) {
-         this.resultPromise = CC, this.tearDownQTE = zC
-       }
-       static create(CC, zC, ZC) {
-         const QC = Promise.race([CC, zC]);
-         return new RC(QC, ZC)
-       }
-       async getResult() {
-         return await this.resultPromise
-       }
+     setTimeout((() => {
+       window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
+     }), 3e3);
+     const Tp = 1e4;
+ 
+     function fp(pp, ip, cp) {
+       return bp(pp, ip, cp).then((pp => ({
+         result: pp,
+         at: performance.now()
+       })))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L308-L353` → after: `L22761-L22810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22761-L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22761-L22810) · [Before (L308-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L308-L353)

```diff
-     class AC {
-       static queueQTE(CC, zC, ZC) {
-         let QC, wC;
-         const bC = new Promise((CC => {
-             QC = CC
-           })),
-           nC = new Promise((CC => {
-             wC = () => {
-               CC("qteTornDown")
-             }
-           })),
-           fC = Promise.race([bC, nC]).then((() => {})),
-           oC = new WC(CC, zC, ZC, wC, fC, QC);
-         return SC.set(CC, oC), gC.enqueue(oC), pC || this.processNextQTE(), RC.create(bC, nC, wC)
-       }
-       static async processNextQTE() {
- ... (30 more removed lines; see GitHub link above)
+     async function bp(pp, ip, cp) {
+       return (0, Op.G)(pp) || pp instanceof op.e || !(pp.length > Ap.M) ? await Hp.b.matchmakePlayer(cp, pp, ip, (0, ep.c)()).then((pp => {
+         if (!1 === pp.succeeded) return Dp.d.errorWithCode(pp.failReason, Ip.k.REQUEST_TO_MATCHMAKING, {
+           severity: "low"
+         });
+         const {
+           gameServerHost: ip,
+           lobbyName: cp,
+           gameNameWithVariation: Op
+         } = pp, op = hp(Xp.hostFor(ip));
+         return op.isError() ? op.asError().forward() : Dp.d.value({
+           endpoint: op.getValue(),
+           gameNameWithVariation: Op,
+           lobbyName: cp
+         })
+       })).catch((pp => (console.error("Bad response from the matchmaking server:", pp), Dp.d.errorWithCode(pp.toString(), Ip.k.REQUEST_TO_MATCHMAKING, {
+ ... (34 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L357` → after: `L22815-L22830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22815-L22830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22815-L22830) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L357)

```diff
-   4711: (CC, zC, ZC) => {
+   36769: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       for (let cp = 0; cp < pp.length; cp++)
+         if (pp[cp].identifier === ip) return pp[cp];
+       return null
+     }
+ 
+     function op(pp, ip) {
+       return null !== Op(pp, ip)
+     }
+     cp.d(ip, {
+       b: () => Op,
+       e: () => op
+     })
+   },
+   36779: (pp, ip, cp) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L365-L373` → after: `L22834-L22835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22834-L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22834-L22835) · [Before (L365-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L365-L373)

```diff
-       h: () => dC,
-       j: () => YC,
-       k: () => PC,
-       m: () => JC,
-       n: () => RC,
-       p: () => xC,
-       r: () => eC,
-       u: () => hC,
-       w: () => KC
+       i: () => vp,
+       m: () => Yp
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L375` → after: `L22837-L22846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22837-L22846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22837-L22846) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L375)

```diff
-     var QC = ZC(4719);
+     var Op = cp(25),
+       op = cp(2457),
+       Ip = cp(2463),
+       Sp = cp(2468),
+       xp = cp(2543),
+       Lp = cp(34);
+ 
+     function Yp(pp, ip) {
+       return (!(0, Sp.c)() || 0 === pp && 0 === ip) && (0, Ip.A)(op.i.Joystick, 0, pp, ip, 0)
+     }
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L377-L379` → after: `L22848-L22854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22848-L22854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22848-L22854) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L377-L379)

```diff
-       lockPointer: () => !1,
-       unlockPointer: () => {},
-       leaveGame: () => {}
+       Action1: 1,
+       Action2: 2,
+       Action3: 3,
+       Attack: 4,
+       Use: 5,
+       Interact: 6,
+       Boost: 7
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L384` → after: `L22858-L22868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22858-L22868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22858-L22868) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L384)

```diff
-       bC = null !== CC && void 0 !== CC ? CC : wC
+       return pp.classList.contains("TouchKeyHit") && Wp() ? null : pp.firstElementChild
+     }
+ 
+     function Pp(pp) {
+       return pp.classList.contains("TouchKeyHit") && !pp.classList.contains("CanvasZone") ? {
+         whole: !Wp(),
+         keyBox: null
+       } : {
+         whole: !1,
+         keyBox: yp(Ap(pp))
+       }
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L388` → after: `L22872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22872) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L388)

```diff
-       return bC
+       return document.documentElement.classList.contains(xp.l)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L401-L402` → after: `L22876-L22878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22876-L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22876-L22878) · [Before (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L401-L402)

```diff
-       return oC.add(CC), () => {
-         oC.delete(CC)
+       return !(pp instanceof HTMLElement) || pp.offsetWidth <= 0 || pp.offsetHeight <= 0 ? null : {
+         width: pp.offsetWidth,
+         height: pp.offsetHeight
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L407-L410` → after: `L22883-L22943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22883-L22943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22883-L22943) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L407-L410)

```diff
-       for (const QC of oC) try {
-         QC(CC)
-       } catch (ZC) {
-         zC(ZC)
+       const cp = pp => Math.min(65535, Math.round(4 * pp));
+       return (cp(pp) | cp(ip) << 16) >>> 0
+     }
+ 
+     function wp(pp) {
+       return {
+         x: pp.left + pp.width / 2,
+         y: pp.top + pp.height / 2,
+         radius: Math.min(pp.width, pp.height) / 2
+       }
+     }
+     const vp = new class {
+       constructor(pp) {
+         this.write = pp, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
+       }
+       set(pp, ip) {
+ ... (45 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L415-L416` → after: `L22975-L22990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22975-L22990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22975-L22990) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L415-L416)

```diff
-       return qC.add(CC), () => {
-         qC.delete(CC)
+       return "download" === pp ? {
+         icon: "wifi",
+         title: "wasmScreens:downloadFailedTitle",
+         help: "wasmScreens:downloadFailedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+       } : {
+         icon: "face-dizzy",
+         title: "wasmScreens:unsupportedTitle",
+         help: "wasmScreens:unsupportedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L421-L426` → after: `L22995-L23004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R22995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L22995-L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L22995-L23004) · [Before (L421-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L421-L426)

```diff
-       const ZC = FC < 0 ? 0 : CC - FC;
-       FC = CC;
-       for (const wC of qC) try {
-         wC(ZC)
-       } catch (QC) {
-         zC(QC)
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:crashTitle",
+         help: ip ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
+         helpValues: {
+           code: pp.code
+         },
+         discordLink: ip,
+         confirm: "general:reload",
+         cancel: "general:back"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L430-L432` → after: `L23008-L23016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23008-L23016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23008-L23016) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L430-L432)

```diff
-     function xC(CC) {
-       return WC.add(CC), () => {
-         WC.delete(CC)
+     function xp() {
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L436-L438` → after: `L23020-L23030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23020-L23030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23020-L23030) · [Before (L436-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L436-L438)

```diff
-     function JC(CC) {
-       return NC.add(CC), () => {
-         NC.delete(CC)
+     function Lp(pp, ip, cp) {
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+         help: cp ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
+         helpValues: {
+           reason: pp.reason
+         },
+         discordLink: null === pp.name,
+         confirm: ip ? "general:reconnect" : pp.requiresRefresh ? "general:reload" : "general:ok",
+         cancel: null
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L441` → after: `L23033-L23134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23033-L23134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23033-L23134) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L441)

```diff
-     let IC = 0;
+   },
+   37099: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       return null === pp || null === ip ? pp === ip : pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
+     }
+ 
+     function op(pp) {
+       return [pp[0] + .5, pp[1] + .5, pp[2] + .5]
+     }
+     cp.d(ip, {
+       e: () => op,
+       i: () => Op
+     })
+   },
+   37053: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (86 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L444` → after: `L23137-L23149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23137-L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23137-L23149) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L444)

```diff
-       IC += CC
+       const ip = [],
+         cp = new Set,
+         Op = pp => {
+           if (cp.has(pp)) return;
+           const op = xp[pp];
+           if (op) {
+             cp.add(pp);
+             for (const pp of op.dependencies) Op(pp);
+             ip.push(pp)
+           }
+         };
+       for (const op of pp) Op(op);
+       return ip
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L447-L449` → after: `L23167-L23168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23167-L23168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23167-L23168) · [Before (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L447-L449)

```diff
-     function vC() {
-       const CC = IC;
-       return IC = 0, CC
+     function Ip(pp) {
+       return op.includes(pp)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L453-L455` → after: `L23172-L23176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23172-L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23172-L23176) · [Before (L453-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L453-L455)

```diff
-       return SC.add(CC), () => {
-         SC.delete(CC)
-       }
+       return pp === Op.k || pp === Op.l
+     }
+ 
+     function xp(pp, ip) {
+       return pp === Op.k && ip === Op.l || pp === Op.l && ip === Op.k
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L459-L461` → after: `L23180-L23182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23180-L23182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23180-L23182) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L459-L461)

```diff
-       return pC.add(CC), () => {
-         pC.delete(CC)
-       }
+       const ip = Op.l in pp,
+         cp = Op.k in pp;
+       return ip && cp ? null : ip ? Op.l : cp ? Op.k : null
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L464-L465` → after: `L23185-L23187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23185-L23187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23185-L23187) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L464-L465)

```diff
-     function KC() {
-       MC = 0, gC = 0, FC = -1
+     function Yp(pp, ip, cp) {
+       const Op = `${ip}/`;
+       return pp.filter((pp => pp.startsWith(Op))).map((pp => [pp, `${cp}/${pp.slice(Op.length)}`]))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L469-L472` → after: `L23191-L23193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23191-L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23191-L23193) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L469-L472)

```diff
-       if ("paced" === CC) return gC += zC, null;
-       if ("drawn" !== CC && "skipped" !== CC) return null;
-       const ZC = zC + gC;
-       return gC = 0, ZC
+       let cp = 0;
+       for (const [Op, op] of Object.entries(pp)) Op !== ip && (cp += op.length);
+       return cp
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L475-L505` → after: `L23197-L23210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23197-L23210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23197-L23210) · [Before (L475-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L475-L505)

```diff
-     function dC(CC, zC, ZC, wC) {
-       const bC = (0, QC.i)(zC),
-         nC = CC > 0 ? performance.now() : 0;
-       for (let QC = 0; QC < CC; QC++)
-         for (const CC of SC) try {
-           CC()
-         } catch (fC) {
-           wC(fC)
-         }
-       if (CC > 0 && iC(performance.now() - nC), null !== ZC) {
-         for (const CC of WC) try {
-           CC(ZC)
-         } catch (fC) {
-           wC(fC)
-         }
-         MC += ZC
- ... (15 more removed lines; see GitHub link above)
+     function Pp(pp) {
+       return `${Ap}${pp}`
+     }
+ 
+     function Wp(pp, ip) {
+       return `/node_modules/@plugins/${pp}/${ip}`
+     }
+ 
+     function yp(pp) {
+       if (!pp.startsWith(Ap)) return null;
+       const ip = pp.slice(Ap.length);
+       return function(pp) {
+         return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(pp)
+       }(ip) ? ip : null
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L508` → after: `L23213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23213) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L508)

```diff
-   4739: (CC, zC, ZC) => {
+   37063: (pp, ip, cp) => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L510` → after: `L23215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23215) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L510)

```diff
-       e: () => oC,
+       c: () => xp,
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L512` → after: `L23217-L23219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23217-L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23217-L23219) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L512)

```diff
-       k: () => fC
+       k: () => Sp,
+       o: () => Lp,
+       r: () => Ip
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L514-L524` → after: `L23221-L23224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23221-L23224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23221-L23224) · [Before (L514-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L514-L524)

```diff
-     var QC = ZC(2348),
-       wC = ZC(4745);
- 
-     function bC(CC) {
-       let {
-         action: zC,
-         flags: ZC
-       } = CC;
-       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
-     }
-     const nC = new Set;
+     var Op = cp(2487);
+     const op = 5,
+       Ip = "[SCHEMATIC]",
+       Sp = 1024e4;
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L527-L529` → after: `L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23227) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L527-L529)

```diff
-       return nC.add(CC), () => {
-         nC.delete(CC)
-       }
+       return pp.endsWith(".bloxdschem") && (0, Op.s)(pp.slice(0, -11) + ".ts") && pp.length <= 64
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L533-L542` → after: `L23231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23231) · [Before (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L533-L542)

```diff
-       const zC = wC.c[255 & CC];
-       if (void 0 === zC) return;
-       const ZC = CC >>> 8 & 255,
-         bC = {
-           action: zC,
-           down: 0 !== (ZC & QC.c.Down),
-           flags: ZC,
-           press: CC >>> 16
-         };
-       for (const QC of nC) QC(bC)
+       return Object.fromEntries(Object.keys(pp).map((pp => [pp, Ip])))
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L545` → after: `L23234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23234) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L545)

```diff
-   4745: (CC, zC, ZC) => {
+   4970: (pp, ip, cp) => {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L550-L551` → after: `L23238-L23240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23238-L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23238-L23240) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L550-L551)

```diff
-       g: () => QC,
-       h: () => fC
+       i: () => Ip,
+       m: () => Lp,
+       o: () => Sp
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L553-L813` → after: `L23242-L23243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23242-L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23242-L23243) · [Before (L553-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L553-L813)

```diff
-     const QC = {
-         Mouse1: 1,
-         Mouse2: 2,
-         Mouse3: 3,
-         "Alt+Left Click": 4,
-         F2: 5,
-         F4: 6,
-         F5: 7,
-         F8: 8,
-         F9: 9,
-         Digit0: 10,
-         Digit1: 11,
-         Digit2: 12,
-         Digit3: 13,
-         Digit4: 14,
-         Digit5: 15,
- ... (245 more removed lines; see GitHub link above)
+     const Op = ["sine", "triangle", "square", "sawtooth"],
+       op = 55,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L815-L831` → after: `L23245-L23381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23245-L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23245-L23381) · [Before (L815-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L815-L831)

```diff
-         jump: [188],
-         crouch: [189],
-         SwapCameraZoom: [190],
-         "primary-fire": [194],
-         "alt-fire": [195]
-       },
-       fC = [16]
-   },
-   4752: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => fC,
-       d: () => nC,
-       e: () => qC
-     });
-     var QC = ZC(2348),
-       wC = ZC(2351);
- ... (1 more removed lines; see GitHub link above)
+         soft: {
+           waveform: "sine",
+           pitchHz: 300,
+           glideSemitones: -.5,
+           durationMs: 80,
+           attackMs: 6,
+           releaseMs: 18,
+           lowpassHz: null,
+           volume: .6,
+           intonation: {
+             variationSemitones: 1.2,
+             declineSemitones: 1.5,
+             questionRiseSemitones: 3.5,
+             exclaimLiftSemitones: 1.5
+           },
+           syllableMs: 60
+ ... (121 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L834` → after: `L23384-L23388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23384-L23388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23384-L23388) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L834)

```diff
-       return CC instanceof HTMLElement && (!!(CC.isContentEditable || CC instanceof HTMLTextAreaElement || CC instanceof HTMLSelectElement) || CC instanceof HTMLInputElement && !bC.has(CC.type))
+       return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
+     }
+ 
+     function xp(pp, ip, cp) {
+       return Math.min(cp, Math.max(ip, pp))
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L838-L850` → after: `L23392-L23410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23392-L23410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23392-L23410) · [Before (L838-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L838-L850)

```diff
-       let zC = null;
-       const ZC = ZC => {
-           const wC = nC(ZC);
-           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
-         },
-         wC = CC => {
-           ZC(CC.target)
-         },
-         bC = CC => {
-           ZC(CC.relatedTarget)
-         },
-         fC = () => {
-           ZC(document.activeElement)
+       const ip = xp(pp.durationMs, 10, 500),
+         cp = xp(pp.attackMs, 0, ip),
+         {
+           intonation: op
+         } = pp;
+       return {
+         waveform: Op.includes(pp.waveform) ? pp.waveform : "sine",
+         pitchHz: xp(pp.pitchHz, 20, 4e3),
+         glideSemitones: xp(pp.glideSemitones, -24, 24),
+         durationMs: ip,
+         attackMs: cp,
+         releaseMs: xp(pp.releaseMs, 0, ip - cp),
+         lowpassHz: null === pp.lowpassHz ? null : xp(pp.lowpassHz, 20, 2e4),
+         volume: xp(pp.volume, 0, 2),
+         intonation: {
+           variationSemitones: xp(op.variationSemitones, 0, 6),
+ ... (3 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L852-L857` → after: `L23412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23412) · [Before (L852-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L852-L857)

```diff
-         oC = {
-           capture: !0,
-           passive: !0
-         };
-       return document.addEventListener("focusin", wC, oC), document.addEventListener("focusout", bC, oC), document.addEventListener("keydown", fC, oC), ZC(document.activeElement), () => {
-         document.removeEventListener("focusin", wC, oC), document.removeEventListener("focusout", bC, oC), document.removeEventListener("keydown", fC, oC)
+         syllableMs: xp(pp.syllableMs, 25, 200)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L860-L869` → after: `L23415-L23436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R23415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L23415-L23436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/86.js#L23415-L23436) · [Before (L860-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/86.js#L860-L869)

```diff
-     const oC = new Map;
- 
-     function qC(CC, zC) {
-       var ZC;
-       let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
-       let bC = 0;
-       for (const wC of oC.values()) bC |= wC;
-       return (0, wC.v)(CC, bC & CC)
-     }
+   },
+   8937: () => {},
+   10097: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
+   },
+   18309: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm … [truncated]
+   },
+   20246: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
+   },
+   20253: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
+   },
+   20255: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L4)

```diff
-   40717: (CC, zC, ZC) => {
+   4882: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L6-L23` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L6-L7) · [Before (L6-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L6-L23)

```diff
-       A: () => EC,
-       D: () => HC,
-       G: () => BC,
-       H: () => XC,
-       J: () => YC,
-       N: () => lC,
-       O: () => KC,
-       R: () => DC,
-       T: () => tC,
-       W: () => mC,
-       c: () => jC,
-       d: () => uC,
-       g: () => eC,
-       k: () => yC,
-       o: () => hC,
-       s: () => vC,
- ... (2 more removed lines; see GitHub link above)
+       b: () => dp,
+       e: () => vp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L25-L68` → after: `L9-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L9-L19) · [Before (L25-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L25-L68)

```diff
-     var QC = ZC(1347),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(2348),
-       fC = ZC(4752),
-       oC = ZC(4711);
-     let qC, FC = !1,
-       WC = !1,
-       NC = !1,
-       MC = !1;
-     const gC = 1300,
-       SC = 3e3;
-     let pC = 0,
-       PC = !1,
-       GC = !1,
-       RC = 0;
- ... (28 more removed lines; see GitHub link above)
+     var Op = cp(1325),
+       op = cp(34);
+     var Ip = cp(337);
+     var Sp = cp(640);
+     var xp = cp(2457),
+       Lp = cp(4886),
+       Yp = cp(4919),
+       Dp = cp(4927);
+     class Ap {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.id = pp, this.type = ip, this.parameters = cp, this.tearDownNotification = Op, this.onDonePromise = op, this.resolveRequest = Ip
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L71-L74` → after: `L22-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L22-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L22-L30) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L71-L74)

```diff
- 
-     function dC(CC) {
-       return iC.add(CC), () => {
-         iC.delete(CC)
+     const Pp = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+     class Wp {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.id = pp, this.type = ip, this.parameters = cp, this.resolveRequest = Op, this.onDonePromise = op, this.tearDownNotification = Ip, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.i … [truncated]
+         const Sp = vp[ip];
+         if (!Sp) throw console.error(`No QTE implementation registered for type: ${ip}`), new Error(`No QTE implementation registered for type: ${ip}`);
+         this.implementation = new Sp(cp, (pp => {
+           this.isCompleted = !0, this.resolveRequest(pp)
+         }), this.tearDownNotification), this.setupInputHandlers()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L76-L88` → after: `L32-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L32-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L32-L59) · [Before (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L76-L88)

```diff
-     }
- 
-     function mC() {
-       (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
-     }
- 
-     function HC() {
-       GC = !1, RC = 0, mC(), tC()
-     }
- 
-     function EC(CC) {
-       return IC.add(CC), () => {
-         IC.delete(CC)
+       setupInputHandlers() {
+         this.mouseSub = op.m.subscribe("QTEMouseState", (pp => {
+           let {
+             isDown: ip
+           } = pp;
+           this.isCompleted || this.implementation.handleMouseInput(ip)
+         })), this.stopInputActions = (0, Yp.f)((pp => {
+           this.isCompleted || !Pp.has(pp.action) && !(0, Yp.e)(pp) || this.implementation.handleMouseInput(pp.down)
+         })), this.tickSub = op.m.subscribe("noaTick", (pp => {
+           if (this.isCompleted) return;
+           const ip = pp / 1e3;
+           this.implementation.handleTick(ip)
+         })), this.stopShellTicks = (0, Lp.s)((() => {
+           this.isCompleted || this.implementation.handleTick(xp.u / 1e3)
+         }))
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L91-L184` → after: `L62-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L62-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L62-L287) · [Before (L91-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L91-L184)

```diff
- 
-     function lC(CC) {
-       WC = !1, CC !== FC && (FC = CC, MC = !1, clearTimeout(qC), NC = !FC && xC, FC ? (PC = !1, GC = !1, RC = 0) : KC() && !xC && (GC = !0), xC = !1, FC && !KC() && UC(), OC(), NC && tC())
-     }
- 
-     function XC(CC) {
-       CC !== PC && (PC = CC, CC || tC())
-     }
- 
-     function cC() {
-       WC = !1, MC || !0 !== TC() || (MC = !0, clearTimeout(qC), qC = setTimeout(rC, gC))
-     }
- 
-     function uC() {
-       return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
-     }
- ... (78 more removed lines; see GitHub link above)
+     const yp = new Op.c,
+       Up = new Map;
+     let wp = null;
+     const vp = {
+       progressBar: class {
+         constructor(pp, ip, cp) {
+           var Op, op, Ip, Sp;
+           this.resolveRequest = ip, this.tearDownNotification = cp, this.progress = 0, this.oi = void 0, this.Ii = void 0, this.Si = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           const xp = pp;
+           this.oi = null !== (Op = xp.oi) && void 0 !== Op ? Op : .075, this.Ii = null !== (op = xp.Ii) && void 0 !== op ? op : 1, this.progress = null !== (Ip = xp.Oi) && void 0 !== Ip ? Ip : 30, this.Si = null !== (Sp = xp.Si) && void 0 !== Sp && Sp, this.parameters = xp
+         }
+         handleMouseInput(pp) {
+           pp && !this.isCompleted && (this.clickCount++, this.progress += this.Ii, this.progress >= 100 && this.complete(!0))
+         }
+         handleTick() {
+           if (!this.isCompleted)
+ ... (210 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L187` → after: `L290-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L290-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L290-L294) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L187)

```diff
-       return wC
+       (0, Dp.g)(xp.C.Qte, wp ? xp.C.Qte : 0), wp ? op.m.GA("qteStateUpdated", wp.getState()) : op.m.GA("qteStateUpdated", {
+         type: null,
+         typeSpecificParameters: null,
+         isActive: !1
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L189-L195` → after: `L296-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L296-L306) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L189-L195)

```diff
- 
-     function FC(CC) {
-       bC = CC
-     }
- 
-     function WC() {
-       return bC
+     class Hp {
+       constructor(pp, ip) {
+         this.resultPromise = pp, this.tearDownQTE = ip
+       }
+       static create(pp, ip, cp) {
+         const Op = Promise.race([pp, ip]);
+         return new Hp(Op, cp)
+       }
+       async getResult() {
+         return await this.resultPromise
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L197-L200` → after: `L308-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L308-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L308-L354) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L197-L200)

```diff
- 
-     function NC() {
-       var CC, zC;
-       return !0 === (null === (CC = wC) || void 0 === CC || null === (zC = CC.currentViewer) || void 0 === zC ? void 0 : zC.inPlayback)
+     class dp {
+       static queueQTE(pp, ip, cp) {
+         let Op, op;
+         const Ip = new Promise((pp => {
+             Op = pp
+           })),
+           Sp = new Promise((pp => {
+             op = () => {
+               pp("qteTornDown")
+             }
+           })),
+           xp = Promise.race([Ip, Sp]).then((() => {})),
+           Lp = new Ap(pp, ip, cp, op, xp, Op);
+         return Up.set(pp, Lp), yp.enqueue(Lp), wp || this.processNextQTE(), Hp.create(Ip, Sp, op)
+       }
+       static async processNextQTE() {
+ ... (31 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L203` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L357) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L203)

```diff
-   4711: (CC, zC, ZC) => {
+   4886: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L207-L208` → after: `L360-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L360-L362) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L207-L208)

```diff
-       E: () => fC,
-       G: () => vC,
+       D: () => Sp,
+       H: () => xp,
+       K: () => Rp,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L210` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L364-L365) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L210)

```diff
-       e: () => AC,
+       c: () => dp,
+       f: () => Xp,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L217` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L371) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L217)

```diff
-       r: () => eC,
+       s: () => qp,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L219` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L373) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L219)

```diff
-       w: () => KC
+       y: () => Cp
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L221` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L375) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L221)

```diff
-     var QC = ZC(4719);
+     var Op = cp(4895);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L230` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L384) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L230)

```diff
-       bC = null !== CC && void 0 !== CC ? CC : wC
+       Ip = null !== pp && void 0 !== pp ? pp : op
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L322` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L476) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L322)

```diff
-       const bC = (0, QC.i)(zC),
+       const Ip = (0, Op.j)(ip),
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L354-L369` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L508) · [Before (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L354-L369)

```diff
-   40729: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC
-     });
-     const QC = {
-       stop: () => QC,
-       fade: () => QC,
-       rate: () => QC,
-       getVolume: () => 0,
-       getRelativeVolume: () => 0,
-       setRelativeVolume: () => QC,
-       setPannerAttr: () => QC,
-       setPosition: () => QC
-     }
-   },
-   4739: (CC, zC, ZC) => {
+   4919: (pp, ip, cp) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L372-L373` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L512) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L372-L373)

```diff
-       g: () => bC,
-       k: () => fC
+       f: () => xp
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L375-L376` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L514-L515) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L375-L376)

```diff
-     var QC = ZC(2348),
-       wC = ZC(4745);
+     var Op = cp(2457),
+       op = cp(4921);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L406` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L545) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L406)

```diff
-   4745: (CC, zC, ZC) => {
+   4921: (pp, ip, cp) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L409-L412` → after: `L548-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L548-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L548-L551) · [Before (L409-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L409-L412)

```diff
-       d: () => bC,
-       f: () => nC,
-       g: () => QC,
-       h: () => fC
+       e: () => Ip,
+       i: () => Sp,
+       j: () => Op,
+       n: () => xp
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L684-L729` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L823) · [Before (L684-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L684-L729)

```diff
-   40750: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => FC,
-       d: () => qC,
-       h: () => oC
-     });
-     var QC = ZC(4733),
-       wC = ZC(2348),
-       bC = ZC(4752);
-     let nC = !1,
-       fC = !1;
- 
-     function oC(CC) {
-       nC = !0;
-       try {
-         CC()
- ... (30 more removed lines; see GitHub link above)
+   4927: (pp, ip, cp) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L732-L733` → after: `L826-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L826-L827) · [Before (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L732-L733)

```diff
-       d: () => nC,
-       e: () => qC
+       e: () => Sp,
+       g: () => Yp
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L735-L736` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L829-L830) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L735-L736)

```diff
-     var QC = ZC(2348),
-       wC = ZC(2351);
+     var Op = cp(2457),
+       op = cp(2463);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L747` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L841) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L747)

```diff
-           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
+           op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L771` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L865) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L771)

```diff
-       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
+       Lp.set(Op, (null !== (cp = Lp.get(Op)) && void 0 !== cp ? cp : 0) & ~pp | ip & pp);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L774-L1002` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/87.js#L868) · [Before (L774-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/87.js#L774-L1002)

```diff
-       return (0, wC.v)(CC, bC & CC)
-     }
-   },
-   40779: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => FC,
-       h: () => oC,
-       j: () => fC,
-       m: () => qC
-     });
-     var QC = ZC(1851);
-     let wC = null,
-       bC = 0;
-     const nC = new Set;
- 
-     function fC() {
- ... (213 more removed lines; see GitHub link above)
+       return (0, op.E)(pp, Ip & pp)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 1. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4-L215` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L7) · [Before (L4-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L215)

```diff
-   40372: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       startWasmPadGameplay: () => uC
-     });
-     ZC(40381);
-     var QC = ZC(40389),
-       wC = ZC(40405),
-       bC = ZC(1865),
-       nC = ZC(40412),
-       fC = ZC(4733),
-       oC = ZC(4711),
-       qC = ZC(40417),
-       FC = ZC(40423),
-       WC = ZC(4745),
-       NC = ZC(40500),
-       MC = ZC(2351),
- ... (196 more removed lines; see GitHub link above)
+   41079: (pp, ip, cp) => {
+     cp.d(ip, {
+       $: () => lp,
+       C: () => Jp,
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L225` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L217) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L225)

```diff
-       r: () => eC,
+       s: () => qp,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L227-L229` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L219-L221) · [Before (L227-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L227-L229)

```diff
-       w: () => KC
-     });
-     var QC = ZC(4719);
+       y: () => Cp
+     });
+     var Op = cp(4895);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L238` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L230) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L238)

```diff
-       bC = null !== CC && void 0 !== CC ? CC : wC
+       Ip = null !== pp && void 0 !== pp ? pp : op
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L330` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L322) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L330)

```diff
-       const bC = (0, QC.i)(zC),
+       const Ip = (0, Op.j)(ip),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L362` → after: `L354-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L354-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L354-L406) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L362)

```diff
-   4745: (CC, zC, ZC) => {
+   41091: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Op
+     });
+     const Op = {
+       stop: () => Op,
+       fade: () => Op,
+       rate: () => Op,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => Op,
+       setPannerAttr: () => Op,
+       setPosition: () => Op
+     }
+   },
+   4919: (pp, ip, cp) => {
+ ... (37 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L365-L368` → after: `L409-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L409-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L409-L412) · [Before (L365-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L365-L368)

```diff
-       d: () => bC,
-       f: () => nC,
-       g: () => QC,
-       h: () => fC
+       e: () => Ip,
+       i: () => Sp,
+       j: () => Op,
+       n: () => xp
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L640-L642` → after: `L684-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L684-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/88.js#L684-L686) · [Before (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/88.js#L640-L642)

```diff
-   40500: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC,
+   41120: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Dp,
```
