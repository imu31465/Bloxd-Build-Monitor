# Changed — Bundle Modifications Report (Part 004 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `4 / 67` (**383** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/112.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/112.js` (149 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e)

#### 63. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37567-L37575` → after: `L749-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L749-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L749-L752) · [Before (L37567-L37575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37567-L37575)

```diff
-     function wz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
-       const vz = Xz - tz,
-         Uz = Xz - Fz,
-         Kz = oz - Fz,
-         uz = [null, null, null];
-       for (let Nz = 0; Nz < uz.length; Nz++) uz[Nz] = {
-         SX: (Wz[Nz] - zz[Nz]) / vz,
-         VX: (Oz[Nz] - sz[Nz]) / Kz,
-         delta: Wz[Nz] - sz[Nz]
+     function Jv(vv, zv, Pv, hv) {
+       let Sv = {
+         width: 0,
+         height: 0
```

#### 64. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37577-L37580` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L754) · [Before (L37577-L37580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37577-L37580)

```diff
-       return {
-         lX: Uz,
-         aX: uz
-       }
+       return arguments.length >= 4 && (Sv.rank = Pv, Sv.order = hv), Hv(vv, "border", Sv, zv)
```

#### 65. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37584` → after: `L759-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L759-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L759-L771) · [Before (L37584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37584)

```diff
-       return null === tz ? zz : tz(zz)
+       if (zv.length > Ev) {
+         let Pv = function(vv) {
+           let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ev,
+             Pv = [];
+           for (let hv = 0; hv < vv.length; hv += zv) {
+             let Sv = vv.slice(hv, hv + zv);
+             Pv.push(Sv)
+           }
+           return Pv
+         }(zv);
+         return vv(...Pv.map((zv => vv(...zv))))
+       }
+       return vv(...zv)
```

#### 66. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37588-L37589` → after: `L775-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L775-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L775-L779) · [Before (L37588-L37589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37588-L37589)

```diff
-       const [tz, sz, Fz] = zz, Oz = -(0, Xz.h)(tz), oz = -(0, Xz.h)(sz), vz = (0, Xz.h)(Fz), Uz = Wz.c.quaternionFromEulerZYX(Oz, oz, vz);
-       return Wz.c.eulerYXZFromQuaternion(Uz)
+       let zv = vv.nodes().map((zv => {
+         let Pv = vv.node(zv).rank;
+         return void 0 === Pv ? Number.MIN_VALUE : Pv
+       }));
+       return ov(Math.max, zv)
```

#### 67. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37597-L37598` → after: `L782-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L782-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L782-L788) · [Before (L37597-L37598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37597-L37598)

```diff
-     function Bz(zz) {
-       return [-zz[0] * Hz, zz[1] * Hz, zz[2] * Hz]
+     function rv(vv, zv) {
+       let Pv = Date.now();
+       try {
+         return zv()
+       } finally {
+         console.log(vv + " time: " + (Date.now() - Pv) + "ms")
+       }
```

#### 68. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37601-L37603` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L791-L792) · [Before (L37601-L37603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37601-L37603)

```diff
-     function Pz(zz) {
-       const [tz, sz, Fz] = zz;
-       return [tz >= 0 ? Math.PI - tz : -Math.PI - tz, rz(sz + Math.PI), rz(Fz + Math.PI)]
+     function kv(vv, zv) {
+       return zv()
```

#### 69. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37607` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L797) · [Before (L37607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37607)

```diff
-       return Wz.c.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
+       return vv + "" + ++Xv
```

#### 70. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37611` → after: `L801-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L801-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L801-L807) · [Before (L37611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37611)

```diff
-       return Math.abs(Wz.c.computeShortestRotation(zz[0], tz[0])) + Math.abs(Wz.c.computeShortestRotation(zz[1], tz[1])) + Math.abs(Wz.c.computeShortestRotation(zz[2], tz[2]))
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       null == zv && (zv = vv, vv = 0);
+       let hv = vv => vv < zv;
+       Pv < 0 && (hv = vv => zv < vv);
+       let Sv = [];
+       for (let ev = vv; hv(ev); ev += Pv) Sv.push(ev);
+       return Sv
```

#### 71. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37625-L37643` → after: `L810-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L810-L813) · [Before (L37625-L37643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37625-L37643)

```diff
-     function oz(zz) {
-       return {
-         name: "collideEntitiesProjectile",
-         order: 70,
-         state: {
-           callback: null,
-           _lastPos: null
-         },
-         Hr: function(zz, tz) {},
-         NJ: null,
-         system: function(tz, sz) {
-           ! function(zz) {
-             const tz = zz.Qr.ZI("collideEntitiesProjectile");
-             if (0 === tz.length) return;
-             const sz = Nz(zz);
-             for (const Fz of tz) Fz && uz(zz, Fz, sz)
- ... (3 more removed lines; see GitHub link above)
+     function zz(vv, zv) {
+       let Pv = {};
+       for (let hv of zv) void 0 !== vv[hv] && (Pv[hv] = vv[hv]);
+       return Pv
```

#### 72. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37647-L37652` → after: `L817-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L817-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L817-L821) · [Before (L37647-L37652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37647-L37652)

```diff
-       var sz;
-       const Fz = Nz(zz),
-         Xz = zz.Qr.eT(tz),
-         Oz = zz.Qr.qL(tz),
-         oz = [Xz.gN.base[0] + Oz.width / 2, Xz.gN.base[1] + Oz.height / 2, Xz.gN.base[2] + Oz.width / 2];
-       Wz().add(oz, oz, null !== (sz = Oz.nN) && void 0 !== sz ? sz : zz.nN), uz(zz, zz.Qr.getState(tz, "collideEntitiesProjectile"), Fz, oz)
+       let Pv;
+       return Pv = "string" == typeof zv ? vv => vv[zv] : zv, Object.entries(vv).reduce(((vv, zv) => {
+         let [hv, Sv] = zv;
+         return vv[hv] = Pv(Sv, hv), vv
+       }), {})
```

#### 73. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37654-L37655` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L823) · [Before (L37654-L37655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37654-L37655)

```diff
-     const Uz = Wz().create(),
-       Kz = [];
+     var hz = "\0";
```

#### 74. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37658-L37734` → after: `L826-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L826-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L826-L842) · [Before (L37658-L37734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37658-L37734)

```diff
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.Qr.yB(tz.yI);
-       if (null === tz._lastPos) return void(tz._lastPos = Wz().clone(Fz));
-       Wz().sub(Uz, Fz, tz._lastPos);
-       const Xz = Wz().length(Uz);
-       0 === Xz && (Uz[0] = 1e-4);
-       for (let Wz = 0; Wz < Kz.length; Wz++) {
-         const Fz = sz[Wz];
-         if (!zz.Qr.Xzz(Fz.yI, "collideEntities")) continue;
-         if (!Fz.Ysz) continue;
-         const uz = Oz().distance(tz._lastPos, Uz, Kz[Wz]);
-         if (oz = tz._lastPos, vz = Kz[Wz], (oz[0] >= vz[0][0] && oz[0] <= vz[1][0] && oz[1] >= vz[0][1] && oz[1] <= vz[1][1] && oz[2] >= vz[0][2] && oz[2] <= vz[1][2] || Math.abs(uz) <= Xz) && (tz.callback(Fz.yI), !zz.Qr.Xzz(tz.yI, "collideEntitiesProjectile"))) break
-       }
-       var oz, vz;
-       Wz().copy(tz._lastPos, Fz)
-     }
- 
- ... (61 more removed lines; see GitHub link above)
+       var hv, Sv, ev, gv, pv, dv;
+       if (!(vv && zv && Pv && "edge" === zv.dummy && "edge" === Pv.dummy && zv.edgeObj && Pv.edgeObj && vv[zv.edgeObj.v] && vv[Pv.edgeObj.v] && vv[zv.edgeObj.w] && vv[Pv.edgeObj.w])) return 0;
+       let Nv = !0;
+       zv.edgeObj.w === Pv.edgeObj.w && (Nv = !1);
+       let lv = Nv ? null != (Sv = null == (hv = vv[zv.edgeObj.v]) ? void 0 : hv.rank) ? Sv : NaN : null != (gv = null == (ev = vv[zv.edgeObj.w]) ? void 0 : ev.rank) ? gv : NaN,
+         Tv = Object.entries(vv).find((vv => {
+           var Pv, hv;
+           return (null == (Pv = vv[1].edgeObj) ? void 0 : Pv.v) === zv.edgeObj.v && (null == (hv = vv[1].edgeObj) ? void 0 : hv.w) === zv.edgeObj.w && vv[1].rank === lv
+         })),
+         Wv = Object.entries(vv).find((vv => {
+           var zv, hv;
+           return (null == (zv = vv[1].edgeObj) ? void 0 : zv.v) === Pv.edgeObj.v && (null == (hv = vv[1].edgeObj) ? void 0 : hv.w) === Pv.edgeObj.w && vv[1].rank === lv
+         }));
+       if (!Tv || !Wv) return 0;
+       let wv = null != (pv = Tv[1].order) ? pv : NaN,
+         av = null != (dv = Wv[1].order) ? dv : NaN;
+ ... (1 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37738-L37783` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L847) · [Before (L37738-L37783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37738-L37783)

```diff
-       return {
-         name: "movement",
-         order: 30,
-         stateConstructor: Oz,
-         Hr: (tz, sz) => {
-           sz.CN = zz, oz = sz.isInCobweb, vz = sz.isInFluid
-         },
-         NJ: null,
-         system: function(zz, tz) {}
-       }
-     }
-   },
-   36635: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Fz
-     });
- ... (30 more removed lines; see GitHub link above)
+       vv._prev._next = vv._next, vv._next._prev = vv._prev, delete vv._next, delete vv._prev
```

#### 76. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37803` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L851) · [Before (L37803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37803)

```diff
-       return null !== tz && void 0 !== tz ? tz : zz ? 0 : Fz.d.ezBridgeGrowMs
+       if ("_next" !== vv && "_prev" !== vv) return zv
```

#### 77. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37805-L37817` → after: `L853-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L853-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L853-L857) · [Before (L37805-L37817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37805-L37817)

```diff
-     const oz = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
- 
-     function vz(zz, tz, sz, Fz, Wz) {
-       for (const [Xz, Oz, vz] of oz) {
-         if (Wz) {
-           const zz = tz + .5 + .5 * Xz,
-             sz = Fz + .5 + .5 * vz;
-           if (Xz * (Wz[0] - zz) + vz * (Wz[2] - sz) <= 0) continue
+     var dz = class {
+         constructor() {
+           Sv(this, "_sentinel");
+           let vv = {};
+           vv._next = vv._prev = vv, this._sentinel = vv
```

#### 78. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37819-L37830` → after: `L859-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L859-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L859-L876) · [Before (L37819-L37830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37819-L37830)

```diff
-         if (zz(tz + Xz, sz + Oz, Fz + vz)) return !0
-       }
-       return !1
-     }
-     const Uz = .15,
-       Kz = .95,
-       uz = .35;
- 
-     function Nz(zz) {
-       const tz = Wz.j[zz];
-       return !!tz && (!(zz in Xz.c) && (tz.model ? "Slab" === tz.model : !tz.twoDBlockItem))
-     }
+         dequeue() {
+           let vv = this._sentinel,
+             zv = vv._prev;
+           if (zv !== vv) return gz(zv), zv
+         }
+         enqueue(vv) {
+           let zv = this._sentinel;
+           vv._prev && vv._next && gz(vv), vv._next = zv._next, zv._next._prev = vv, zv._next = vv, vv._prev = zv
+         }
+         toString() {
+           let vv = [],
+             zv = this._sentinel,
+             Pv = zv._prev;
+           for (; Pv !== zv;) vv.push(JSON.stringify(Pv, pz)), Pv = Pv._prev;
+           return "[" + vv.join(", ") + "]"
+         }
+ ... (2 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37832-L37836` → after: `L878-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L878-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L878-L929) · [Before (L37832-L37836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37832-L37836)

```diff
-     function bz(zz, tz, sz) {
-       const Fz = tz - zz;
-       if (Fz <= 0) return Kz;
-       const Wz = Math.min(1, Math.max(0, (sz - zz) / Fz));
-       return Uz + (Kz - Uz) * Wz
+     function lz(vv, zv) {
+       if (vv.nodeCount() <= 1) return [];
+       let Pv = function(vv, zv) {
+         let Pv = new Lv,
+           hv = 0,
+           Sv = 0;
+         vv.nodes().forEach((vv => {
+           Pv.setNode(vv, {
+             v: vv,
+             in: 0,
+             out: 0
+           })
+         })), vv.edges().forEach((vv => {
+           let ev = Pv.edge(vv.v, vv.w) || 0,
+             gv = zv(vv),
+             pv = ev + gv;
+ ... (36 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37839-L37841` → after: `L932-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L932-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L932-L947) · [Before (L37839-L37841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37839-L37841)

```diff
-     function wz(zz, tz, sz) {
-       const Fz = bz(zz.startedAtMs, zz.endsAtMs, sz);
-       return bz(tz.startedAtMs, tz.endsAtMs, sz) >= Fz ? tz : zz
+     function Tz(vv, zv, Pv, hv, Sv) {
+       let ev = [],
+         gv = Sv ? ev : void 0;
+       return (vv.inEdges(hv.v) || []).forEach((hv => {
+         let gv = vv.edge(hv),
+           pv = vv.node(hv.v);
+         Sv && ev.push({
+           v: hv.v,
+           w: hv.w
+         }), pv.out -= gv, Wz(zv, Pv, pv)
+       })), (vv.outEdges(hv.v) || []).forEach((hv => {
+         let Sv = vv.edge(hv),
+           ev = hv.w,
+           gv = vv.node(ev);
+         gv.in -= Sv, Wz(zv, Pv, gv)
+       })), vv.removeNode(hv.v), gv
```

#### 81. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37845-L37851` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L951-L952) · [Before (L37845-L37851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37845-L37851)

```diff
-       let Fz = 1 / 0;
-       for (let Wz = 0; Wz < 3; Wz++) {
-         if (0 === tz[Wz]) continue;
-         const Xz = tz[Wz] > 0 ? sz[Wz] + 1 : sz[Wz];
-         Fz = Math.min(Fz, (Xz - zz[Wz]) / tz[Wz])
-       }
-       return Fz
+       var hv, Sv, ev;
+       Pv.out ? Pv.in ? null == (ev = vv[Pv.out - Pv.in + zv]) || ev.enqueue(Pv) : null == (Sv = vv[vv.length - 1]) || Sv.enqueue(Pv) : null == (hv = vv[0]) || hv.enqueue(Pv)
```

#### 82. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37865` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L955) · [Before (L37865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37865)

```diff
-     function Oz(zz) {
+     function wz(vv, zv) {
```

#### 83. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37867-L37868` → after: `L957-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L957-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L957-L960) · [Before (L37867-L37868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37867-L37868)

```diff
-       return !0 === (null === zz || void 0 === zz || null === (tz = zz.name) || void 0 === tz ? void 0 : tz.includes("Firecracker"))
-     }
+       ("greedy" === vv.graph().acyclicer ? lz(vv, (Pv = vv, vv => Pv.edge(vv).weight)) : function(vv, zv) {
+         let Pv = [],
+           hv = {},
+           Sv = {};
```

#### 84. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37870-L37874` → after: `L962-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L962-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L962-L966) · [Before (L37870-L37874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37870-L37874)

```diff
-     function oz(zz) {
-       for (let tz = 0; tz < Xz.p; tz++)
-         if (Oz(zz.getItemAtIdx(tz))) return tz;
-       return null
-     }
+         function ev(zv) {
+           Object.hasOwn(Sv, zv) || (Sv[zv] = !0, hv[zv] = !0, vv.outEdges(zv).forEach((vv => {
+             Object.hasOwn(hv, vv.w) ? Pv.push(vv) : ev(vv.w)
+           })), delete hv[zv])
+         }
```

#### 85. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37876-L37884` → after: `L968-L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L968-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L968-L973) · [Before (L37876-L37884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37876-L37884)

```diff
-     function vz(zz) {
-       let tz = 0;
-       for (let Fz = 0; Fz < Xz.p; Fz++) {
-         const Wz = zz.getItemAtIdx(Fz);
-         var sz;
-         if (Oz(Wz)) tz += null !== (sz = Wz.amount) && void 0 !== sz ? sz : 1
-       }
-       return tz
-     }
+         function gv(ev) {
+           var pv;
+           Object.hasOwn(Sv, ev) || (Sv[ev] = !0, hv[ev] = !0, null == (pv = vv.outEdges(ev)) || pv.forEach((Sv => {
+             var pv, dv;
+             Object.hasOwn(hv, Sv.w) || (null == (pv = zv.node(ev)) ? void 0 : pv.rank) > (null == (dv = zv.node(Sv.w)) ? void 0 : dv.rank) && function(vv, zv, Pv) {
+               let hv = new Set;
```

#### 86. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37886-L37893` → after: `L975-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L975-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L975-L992) · [Before (L37886-L37893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37886-L37893)

```diff
-     function Uz(zz, tz, sz, Xz) {
-       if (sz !== Fz.o.GLIDING && Xz !== Fz.o.GLIDING) return;
-       const Oz = zz.Qr.mzz(tz);
-       if (Oz.gliderFuelCooldownEnd = 0, sz === Fz.o.GLIDING) {
-         var vz;
-         const sz = null === (vz = zz.Qr.Rzz(tz)) || void 0 === vz ? void 0 : vz.inventory;
-         sz && null !== oz(sz) && zz.bloxd.startGliderFuelCooldown(tz, Oz, Wz.f.getFirecrackerCooldownMultiplier(sz.getItemAtSelectedSlot()))
-       }
+               function Sv(zv) {
+                 var ev;
+                 if (vv.sources().includes(zv)) return !0;
+                 hv.add(zv);
+                 for (let gv of null != (ev = vv.inEdges(zv)) ? ev : [])
+                   if ((gv.v !== Pv.v || gv.w !== Pv.w) && !hv.has(gv.v) && Sv(gv.v)) return !0;
+                 return !1
+               }
+               return Sv(zv)
+             }(vv, Sv.w, Sv) ? Pv.push(Sv) : gv(Sv.w)
+           })), delete hv[ev])
+         }
+         let pv = ev;
+         return zv && "function" == typeof zv.node && (pv = gv), vv.sources().forEach(pv), vv.nodes().forEach(pv), Pv
+       }(vv, null != zv ? zv : null)).forEach((zv => {
+         let Pv = vv.edge(zv);
+ ... (2 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37909-L37910` → after: `L996-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L996-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L996-L1017) · [Before (L37909-L37910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37909-L37910)

```diff
-       const tz = new Fz.k(`blockBreakDrop|${zz}`);
-       return () => tz.next()
+       vv.graph().dummyChains = [], vv.edges().forEach((zv => function(vv, zv) {
+         let Pv, hv, Sv, ev = zv.v,
+           gv = vv.node(ev).rank,
+           pv = zv.w,
+           dv = vv.node(pv).rank,
+           Nv = zv.name,
+           lv = vv.edge(zv),
+           Tv = lv.labelRank;
+         if (dv === gv + 1) return;
+         for (vv.removeEdge(zv), Sv = 0, ++gv; gv < dv; ++Sv, ++gv) lv.points = [], hv = {
+           width: 0,
+           height: 0,
+           edgeLabel: lv,
+           edgeObj: zv,
+           rank: gv
+         }, Pv = Hv(vv, "edge", hv, "_d"), gv === Tv && (hv.width = lv.width, hv.height = lv.height, hv.dummy = "edge-label", hv.labelpos = lv.labelpos), vv.setEdge(ev, Pv, {
+ ... (6 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37914` → after: `L1021-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1021-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1021-L1030) · [Before (L37914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37914)

```diff
-       zz.gravityMultiplier = 2, zz.friction = 4, zz.wo = .02, zz.iN = 0, zz.fluidDrag = .2
+       let zv = {};
+       vv.sources().forEach((function Pv(hv) {
+         let Sv = vv.node(hv);
+         if (Object.hasOwn(zv, hv)) return Sv.rank;
+         zv[hv] = !0;
+         let ev = vv.outEdges(hv),
+           gv = ev ? ev.map((zv => null == zv ? Number.POSITIVE_INFINITY : Pv(zv.w) - vv.edge(zv).minlen)) : [],
+           pv = ov(Math.min, gv);
+         return pv === Number.POSITIVE_INFINITY && (pv = 0), Sv.rank = pv
+       }))
```

#### 89. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37918-L37928` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1034) · [Before (L37918-L37928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37918-L37928)

```diff
-       return [zz[0] + .2 * tz() + .4, zz[1] + .5, zz[2] + .2 * tz() + .4]
-     }
-     const oz = .01;
- 
-     function vz(zz) {
-       return [oz - zz() * oz * 2, .05, oz - zz() * oz * 2]
-     }
- 
-     function Uz(zz) {
-       const tz = Math.hypot(zz[0], zz[1], zz[2]);
-       return tz > 0 && Number.isFinite(tz) ? [zz[0] / tz, zz[1] / tz, zz[2] / tz] : null
+       return vv.node(zv.w).rank - vv.node(zv.v).rank - vv.edge(zv).minlen
```

#### 90. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37932-L37936` → after: `L1049-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1049-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1049-L1056) · [Before (L37932-L37936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37932-L37936)

```diff
-       return [zz[0] + .5 * tz[0], zz[1] + .5 * tz[1], zz[2] + .5 * tz[2]]
-     }
- 
-     function uz(zz) {
-       return [3.5 / 30 * zz[0], 7 / 30 * zz[1], 3.5 / 30 * zz[2]]
+       return vv.nodes().forEach((function Pv(hv) {
+         let Sv = zv.nodeEdges(hv);
+         Sv && Sv.forEach((Sv => {
+           let ev = Sv.v,
+             gv = hv === ev ? Sv.w : ev;
+           !vv.hasNode(gv) && !Cz(zv, Sv) && (vv.setNode(gv, {}), vv.setEdge(hv, gv, {}), Pv(gv))
+         }))
+       })), vv.nodeCount()
```

#### 91. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37953-L37969` → after: `L1060-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1060-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1060-L1063) · [Before (L37953-L37969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37953-L37969)

```diff
-       var sz;
-       const Kz = (0, Fz.e)(tz),
-         uz = Kz.physicsBodyDimensions.width,
-         Nz = Kz.physicsBodyDimensions.height,
-         bz = Kz.hitBoxDimensions.width,
-         wz = Kz.hitBoxDimensions.height,
-         Dz = Math.min(Math.max(uz * zz, Oz), Wz.d),
-         gz = Math.min(Math.max(Nz * zz, oz), Wz.b),
-         Hz = Math.max(bz * Math.min(zz, Wz.d / uz), vz),
-         Bz = Math.max(wz * Math.min(zz, Wz.b / Nz), Uz);
-       return {
-         physicsBodyWidth: Dz,
-         physicsBodyHeight: gz,
-         collideEntitiesWidthExpand: Math.max(0, Hz - Dz),
-         collideEntitiesHeightExpand: Math.max(0, Bz - gz),
-         shadowSize: Xz * zz * (null !== (sz = Kz.modelScale) && void 0 !== sz ? sz : 1)
- ... (1 more removed lines; see GitHub link above)
+       return zv.edges().reduce(((Pv, hv) => {
+         let Sv = Number.POSITIVE_INFINITY;
+         return vv.hasNode(hv.v) !== vv.hasNode(hv.w) && (Sv = Cz(zv, hv)), Sv < Pv[0] ? [Sv, hv] : Pv
+       }), [Number.POSITIVE_INFINITY, null])[1]
```

#### 92. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37983` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1067) · [Before (L37983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37983)

```diff
-       return `${zz}|${tz}|${sz}`
+       vv.nodes().forEach((vv => zv.node(vv).rank += Pv))
```

#### 93. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37987-L37988` → after: `L1075-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1075-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1075-L1090) · [Before (L37987-L37988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37987-L37988)

```diff
-       const [tz, sz, Fz] = zz.split("|");
-       return [Number(tz), Number(sz), Number(Fz)]
+       vv = function(vv) {
+         let zv = (new Lv).setGraph(vv.graph());
+         return vv.nodes().forEach((Pv => zv.setNode(Pv, vv.node(Pv)))), vv.edges().forEach((Pv => {
+           let hv = zv.edge(Pv.v, Pv.w) || {
+               weight: 0,
+               minlen: 1
+             },
+             Sv = vv.edge(Pv);
+           zv.setEdge(Pv.v, Pv.w, {
+             weight: hv.weight + Sv.weight,
+             minlen: Math.max(hv.minlen, Sv.minlen)
+           })
+         })), zv
+       }(vv), sz(vv);
+       let zv, Pv, hv = iz(vv);
+       for (Dz(hv), nz(hv, vv); zv = Vz(hv);) Pv = Uz(hv, vv, zv), Rz(hv, vv, zv, Pv)
```

#### 94. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37992-L37993` → after: `L1093-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1093-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1093-L1099) · [Before (L37992-L37993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37992-L37993)

```diff
-     function Uz(zz) {
-       return Xz()(zz, [vz, vz, vz])
+     function nz(vv, zv) {
+       let Pv = fz(vv, vv.nodes());
+       Pv = Pv.slice(0, Pv.length - 1), Pv.forEach((Pv => function(vv, zv, Pv) {
+         let hv = vv.node(Pv).parent,
+           Sv = vv.edge(Pv, hv);
+         Sv.cutvalue = Oz(vv, zv, Pv)
+       }(vv, zv, Pv)))
```

#### 95. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L37995-L38061` → after: `L1101-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1101-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1101-L1119) · [Before (L37995-L38061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L37995-L38061)

```diff
-     const Kz = Xz()(new Uint16Array(vz * vz * vz), [vz, vz, vz]);
-     Fz.encode(Kz.data)
-   },
-   37023: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Iz,
-       h: () => Jz,
-       j: () => Gz,
-       i: () => Zz,
-       n: () => Tz,
-       q: () => Cz,
-       u: () => jz,
-       y: () => cz
-     });
-     var Fz = sz(6057),
-       Wz = sz(37031),
- ... (51 more removed lines; see GitHub link above)
+ 
+     function Oz(vv, zv, Pv) {
+       let hv = vv.node(Pv).parent,
+         Sv = !0,
+         ev = zv.edge(Pv, hv),
+         gv = 0;
+       ev || (Sv = !1, ev = zv.edge(hv, Pv)), gv = ev.weight;
+       let pv = zv.nodeEdges(Pv);
+       return pv && pv.forEach((ev => {
+         let pv = ev.v === Pv,
+           dv = pv ? ev.w : ev.v;
+         if (dv !== hv) {
+           let hv = pv === Sv,
+             Nv = zv.edge(ev).weight;
+           if (gv += hv ? Nv : -Nv, function(vv, zv, Pv) {
+               return vv.hasEdge(zv, Pv)
+ ... (3 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38064-L38123` → after: `L1122-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1122-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1122-L1123) · [Before (L38064-L38123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38064-L38123)

```diff
-       },
-       vz = {
-         turnRate: 3,
-         corneringSpeedDamping: .25,
-         gripStrength: 10,
-         gripInFluid: !1
-       },
-       Uz = {
-         wo: 2.5,
-         fluidDrag: 1,
-         fluidDragHorizontal: 1,
-         fluidDragVertical: 0,
-         gravityMultiplier: 3,
-         width: .25,
-         height: 1.1,
-         canRun: !1,
- ... (44 more removed lines; see GitHub link above)
+       })), gv
+     }
```

#### 97. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38126-L38139` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1126) · [Before (L38126-L38139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38126-L38139)

```diff
-       return {
-         ...uz,
-         speedMultiplier: tz,
-         fluidSpeedMultiplier: .02,
-         effect: {
-           name: "Driving",
-           icon: zz
-         },
-         horizontalBounciness: 0,
-         steering: {
-           ...Kz,
-           turnRate: 1.65
-         }
-       }
+       arguments.length < 2 && (zv = vv.nodes()[0]), Kz(vv, {}, 1, zv)
```

#### 98. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38204-L38214` → after: `L1129-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1129-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1129-L1136) · [Before (L38204-L38214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38204-L38214)

```diff
-     function wz(zz) {
-       return {
-         model: "cameraDirection",
-         maxSpeed: zz,
-         minSpeed: .5,
-         pitchAcceleration: .0125,
-         friction: 0,
-         impulseDecayTicks: 100,
-         biasMagnitude: 1.5,
-         excessVelocityBleedPerTick: .5
-       }
+     function Kz(vv, zv, Pv, hv, Sv) {
+       let ev = Pv,
+         gv = vv.node(hv);
+       zv[hv] = !0;
+       let pv = vv.neighbors(hv);
+       return pv && pv.forEach((Sv => {
+         Object.hasOwn(zv, Sv) || (Pv = Kz(vv, zv, Pv, Sv, hv))
+       })), gv.low = ev, gv.lim = Pv++, Sv ? gv.parent = Sv : delete gv.parent, Pv
```

#### 99. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38284-L38290` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1140) · [Before (L38284-L38290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38284-L38290)

```diff
-       return {
-         effect: {
-           name: "Floating",
-           icon: `${zz} Balloon`,
-           duration: 16e3
-         }
-       }
+       return vv.edges().find((zv => vv.edge(zv).cutvalue < 0))
```

#### 100. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38292-L38386` → after: `L1142-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1142-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1142-L1168) · [Before (L38292-L38386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38292-L38386)

```diff
-     const rz = {
-       [Fz.u.ROTATION_1]: {
-         fixedHeading: 0
-       },
-       [Fz.u.ROTATION_2]: {
-         fixedHeading: Math.PI / 2
-       },
-       [Fz.u.ROTATION_3]: {
-         fixedHeading: Math.PI
-       },
-       [Fz.u.ROTATION_4]: {
-         fixedHeading: -Math.PI / 2
-       }
-     };
-     var Yz = sz(8940),
-       xz = function(zz) {
- ... (79 more removed lines; see GitHub link above)
+ 
+     function Uz(vv, zv, Pv) {
+       let hv = Pv.v,
+         Sv = Pv.w;
+       zv.hasEdge(hv, Sv) || (hv = Pv.w, Sv = Pv.v);
+       let ev = vv.node(hv),
+         gv = vv.node(Sv),
+         pv = ev,
+         dv = !1;
+       return ev.lim > gv.lim && (pv = gv, dv = !0), zv.edges().filter((zv => dv === xz(vv, vv.node(zv.v), pv) && dv !== xz(vv, vv.node(zv.w), pv))).reduce(((vv, Pv) => Cz(zv, Pv) < Cz(zv, vv) ? Pv : vv))
+     }
+ 
+     function Rz(vv, zv, Pv, hv) {
+       let Sv = Pv.v,
+         ev = Pv.w;
+       vv.removeEdge(Sv, ev), vv.setEdge(hv.v, hv.w, {}), Dz(vv), nz(vv, zv),
+ ... (11 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38389-L38393` → after: `L1171-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1171-L1172) · [Before (L38389-L38393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38389-L38393)

```diff
-     function Jz(zz) {
-       return (0, Xz.tc)(zz) ? null : (0, Xz.ab)(Yz.l, (tz => {
-         var sz;
-         return null !== (sz = zz[(0, Yz.h)(tz)]) && void 0 !== sz ? sz : 1
-       }), Float64Array)
+     function xz(vv, zv, Pv) {
+       return Pv.low <= zv.lim && zv.lim <= Pv.lim
```

#### 102. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38397-L38400` → after: `L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1196) · [Before (L38397-L38400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38397-L38400)

```diff
-       return (0, Xz.tc)(zz) ? null : (0, Xz.ab)(Yz.l, (tz => {
-         const sz = zz[(0, Yz.h)(tz)];
-         return void 0 === sz ? xz.Unset : sz ? xz.On : xz.Off
-       }), Uint8Array)
+       Fz(vv)
```

#### 103. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38403-L38409` → after: `L1203-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1203-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1203-L1250) · [Before (L38403-L38409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38403-L38409)

```diff
-     function Cz(zz, tz, sz) {
-       if (zz) {
-         let sz = !1;
-         for (let Fz = 0; Fz < tz.length; Fz++) {
-           const Wz = zz[tz[Fz]];
-           if (Wz === xz.On) return !0;
-           Wz === xz.Off && (sz = !0)
+           function hv(Sv) {
+             let ev = Pv;
+             vv.children(Sv).forEach(hv), zv[Sv] = {
+               low: ev,
+               lim: Pv++
+             }
+           }
+           return vv.children(hz).forEach(hv), zv
+         }(vv),
+         Pv = vv.graph();
+       if (!Array.isArray(Pv.dummyChains)) return;
+       Pv.dummyChains.forEach((Pv => {
+         let hv = vv.node(Pv),
+           Sv = hv.edgeObj,
+           ev = function(vv, zv, Pv, hv) {
+             let Sv, ev = [],
+ ... (32 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38411-L38471` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1252) · [Before (L38411-L38471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38411-L38471)

```diff
-         if (sz) return !1
-       }
-       return sz
-     }
-     const ez = {
-       [Fz.r.DEFAULT]: new mz(Wz.e, {}),
-       [Fz.r.BOAT]: new mz(Oz, oz),
-       [Fz.r.GLIDER]: new mz(Dz, gz),
-       [Fz.r.BALLOON]: new mz(Hz, Bz),
-       [Fz.r.SLEEPING]: new mz({
-         canRun: !1,
-         jumpMultiplier: 0,
-         speedMultiplier: 0,
-         pose: "sleeping",
-         effect: {
-           name: "Sleeping",
- ... (45 more removed lines; see GitHub link above)
+       }))
```

#### 105. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38475-L38476` → after: `L1256-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1256-L1258) · [Before (L38475-L38476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38475-L38476)

```diff
-       return ez[zz]
-     }
+       let zv = Hv(vv, "root", {}, "_root"),
+         Pv = function(vv) {
+           let zv = {};
```

#### 106. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38478-L38479` → after: `L1260-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1260-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1260-L1275) · [Before (L38478-L38479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38478-L38479)

```diff
-     function Gz(zz, tz) {
-       return ez[zz].getAllSettingsForTier(tz)
+           function Pv(hv, Sv) {
+             let ev = vv.children(hv);
+             ev && ev.length && ev.forEach((vv => Pv(vv, Sv + 1))), zv[hv] = Sv
+           }
+           return vv.children(hz).forEach((vv => Pv(vv, 1))), zv
+         }(vv),
+         hv = Object.values(Pv),
+         Sv = ov(Math.max, hv) - 1,
+         ev = 2 * Sv + 1;
+       vv.graph().nestingRoot = zv, vv.edges().forEach((zv => vv.edge(zv).minlen *= ev));
+       let gv = function(vv) {
+         return vv.edges().reduce(((zv, Pv) => zv + vv.edge(Pv).weight), 0)
+       }(vv) + 1;
+       vv.children(hz).forEach((hv => {
+         Az(vv, zv, ev, gv, Sv, Pv, hv)
+       })), vv.graph().nodeRankFactor = ev
```

#### 107. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38482-L38486` → after: `L1278-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1278-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1278-L1308) · [Before (L38482-L38486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38482-L38486)

```diff
-     function* Tz() {
-       for (const zz in ez) {
-         const tz = Number(zz);
-         yield tz
-       }
+     function Az(vv, zv, Pv, hv, Sv, ev, gv) {
+       var pv;
+       let dv = vv.children(gv);
+       if (!dv.length) return void(gv !== zv && vv.setEdge(zv, gv, {
+         weight: 0,
+         minlen: Pv
+       }));
+       let Nv = Jv(vv, "_bt"),
+         lv = Jv(vv, "_bb"),
+         Tv = vv.node(gv);
+       vv.setParent(Nv, gv), Tv.borderTop = Nv, vv.setParent(lv, gv), Tv.borderBottom = lv, dv.forEach((pv => {
+         var dv;
+         Az(vv, zv, Pv, hv, Sv, ev, pv);
+         let Tv = vv.node(pv),
+           Wv = Tv.borderTop ? Tv.borderTop : pv,
+           wv = Tv.borderBottom ? Tv.borderBottom : pv,
+ ... (15 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38489-L38491` → after: `L1321-L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1321-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1321-L1332) · [Before (L38489-L38491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38489-L38491)

```diff
-     function cz(zz, tz, sz) {
-       const Fz = tz ? zz.fluidSpeedMultiplier : sz ? zz.landSpeedMultiplier : zz.airSpeedMultiplier;
-       return zz.speedMultiplier * Fz
+     function Hz(vv, zv, Pv, hv, Sv, ev) {
+       let gv = {
+           width: 0,
+           height: 0,
+           rank: ev,
+           borderType: zv
+         },
+         pv = Sv[zv][ev - 1],
+         dv = Hv(vv, "border", gv, Pv);
+       Sv[zv][ev] = dv, vv.setParent(dv, hv), pv && vv.setEdge(pv, dv, {
+         weight: 1
+       })
```

#### 109. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38494-L38495` → after: `L1335-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1335-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1335-L1350) · [Before (L38494-L38495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38494-L38495)

```diff
-     function jz(zz, tz, sz) {
-       return null !== zz.fixedHeading ? zz.fixedHeading : zz.steering ? tz : sz
+     function Mz(vv) {
+       var zv;
+       let Pv = null == (zv = vv.graph().rankdir) ? void 0 : zv.toLowerCase();
+       ("bt" === Pv || "rl" === Pv) && function(vv) {
+         vv.nodes().forEach((zv => Jz(vv.node(zv)))), vv.edges().forEach((zv => {
+           var Pv;
+           let hv = vv.edge(zv);
+           null == (Pv = hv.points) || Pv.forEach(Jz), Object.hasOwn(hv, "y") && Jz(hv)
+         }))
+       }(vv), ("lr" === Pv || "rl" === Pv) && (function(vv) {
+         vv.nodes().forEach((zv => Ez(vv.node(zv)))), vv.edges().forEach((zv => {
+           var Pv;
+           let hv = vv.edge(zv);
+           null == (Pv = hv.points) || Pv.forEach(Ez), Object.hasOwn(hv, "x") && Ez(hv)
+         }))
+       }(vv), yz(vv))
```

#### 110. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38506-L38521` → after: `L1353-L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1353-L1354) · [Before (L38506-L38521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38506-L38521)

```diff
-     function Wz(zz, tz) {
-       return zz && tz === Fz.r.DEFAULT
-     }
-     const Xz = 150,
-       Oz = 1.6,
-       oz = 65,
-       vz = 500,
-       Uz = .6,
-       Kz = .5;
-     class uz {
-       constructor() {
-         this.bX = 0, this.wX = 0, this.yVelocity = 0
-       }
-       reset() {
-         this.bX = 0, this.wX = 0, this.yVelocity = 0
-       }
+     function yz(vv) {
+       vv.nodes().forEach((zv => Bz(vv.node(zv)))), vv.edges().forEach((zv => Bz(vv.edge(zv))))
```

#### 111. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38524-L38529` → after: `L1357-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1357-L1359) · [Before (L38524-L38529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38524-L38529)

```diff
-     function Nz(zz, tz, sz, Fz) {
-       let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
-       zz.bX = tz ? Math.min(zz.bX + Oz / Xz * Wz, Oz) : 0, 0 === sz ? zz.wX = 0 : Fz ? zz.wX = Wz : zz.wX += Wz;
-       const uz = Math.min(zz.wX, Xz) / Xz,
-         Nz = (oz + uz * vz) * sz;
-       return zz.yVelocity *= Math.pow(Uz, Wz), Math.abs(zz.yVelocity) < Kz && (zz.yVelocity = 0), Nz
+     function Bz(vv) {
+       let zv = vv.width;
+       vv.width = vv.height, vv.height = zv
```

#### 112. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38554-L38566` → after: `L1362-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1362-L1363) · [Before (L38554-L38566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38554-L38566)

```diff
-     function Pz(...zz) {
-       return zz[Bz[13]] = Bz[2], typeof Uz[zz[Bz[1]]] === Bz[16] ? Uz[zz[Bz[1]]] = function(...zz) {
-         for (Cz(zz[Bz[13]] = Bz[2], zz[Bz[5]] = 'Ou_+w@`68~2$=<3iHCM9A!F0;EhJ(k%W^dvn#c*71"If/DQ?zt,){LNb|om.5xqVYl&y}r>jBPsg[pGZeRKX]4SUTa:', zz[Bz[0]] = "" + (zz[Bz[1]] || ""), zz[Bz[4]] = zz[Bz[0]].length, zz[Bz[10]] = [], zz[-Bz[8]] = Bz[1], zz[Bz[9]] = Bz[1], zz[-Bz[7]] = -B … [truncated]
-           if (zz[Bz[6]] = zz[Bz[5]].indexOf(zz[Bz[0]][zz[Bz[3]]]), zz[Bz[6]] !== -Bz[2])
-             if (zz[-Bz[7]] < Bz[1]) zz[-Bz[7]] = zz[Bz[6]];
-             else {
-               Cz(zz[-Bz[7]] += zz[Bz[6]] * Bz[31], zz[-Bz[8]] |= zz[-Bz[7]] << zz[Bz[9]], zz[Bz[9]] += (zz[-Bz[7]] & Bz[34]) > Bz[35] ? Bz[36] : Bz[37]);
-               do {
-                 Cz(zz[Bz[10]].push(zz[-Bz[8]] & Bz[12]), zz[-Bz[8]] >>= Bz[11], zz[Bz[9]] -= Bz[11])
-               } while (zz[Bz[9]] > Bz[23]);
-               zz[-Bz[7]] = -Bz[2]
-             } return zz[-Bz[7]] > -Bz[2] && zz[Bz[10]].push((zz[-Bz[8]] | zz[-Bz[7]] << zz[Bz[9]]) & Bz[12]), rz(zz[Bz[10]])
-       }(Kz[zz[Bz[1]]]) : Uz[zz[Bz[1]]]
+     function Jz(vv) {
+       vv.y = -vv.y
```

#### 113. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38570` → after: `L1367-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1367-L1368) · [Before (L38570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38570)

```diff
-       return typeof Nz !== Bz[16] && Nz ? (new Nz).decode(new bz(zz)) : typeof wz !== Bz[16] && wz ? wz.from(zz).toString("utf-8") : Hz(zz)
+       let zv = vv.x;
+       vv.x = vv.y, vv.y = zv
```

#### 114. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38573-L38603` → after: `L1371-L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1371-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1371-L1389) · [Before (L38573-L38603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38573-L38603)

```diff
-     function Yz() {}
-     Cz(Uz = {}, Kz = ["](`W(j0rAYPw|J:k^vw2", "7os^iryk{9V|j>BW]zAp0oCrsq0Wr;&#&O", ":ql)%G+9sCqP;HBc", ",NWt:G~rQM=B;zbn0heNHRBM^M?{2xo03Qrh;?1;Zie>+*v%0Aa`WGM8vVd", "LzuN}Lg)H!dBW*h(No<28,;##Yv+0KP7IAZ~BZXZm3k[;Xj9W5D(RjO", "w^)^qLiL{~.", "]+S(T?S1?=EB?3XJ4)[s,m/euivl+K)v;j6~t| … [truncated]
-       Cz(zz[Bz[13]] = Bz[1], zz[Bz[15]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], zz[Bz[2]] = Bz[17], zz[Bz[14]] = []);
-       try {
-         Cz(zz[Bz[2]] = Object, zz[Bz[14]][Bz[25]]("".__proto__.constructor.name))
-       } catch (Kz) {}
-       zz: for (zz[-Bz[10]] = Bz[1]; zz[-Bz[10]] < zz[Bz[15]][Bz[13]]; zz[-Bz[10]]++) try {
-         for (zz[Bz[2]] = zz[Bz[15]][zz[-Bz[10]]](), zz[Bz[10]] = Bz[1]; zz[Bz[10]] < zz[Bz[14]][Bz[13]]; zz[Bz[10]]++)
- ... (15 more removed lines; see GitHub link above)
+     function oz(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         Pv = {},
+         hv = vv.nodes().filter((zv => !vv.children(zv).length)),
+         Sv = hv.map((zv => vv.node(zv).rank)),
+         ev = vz(ov(Math.max, Sv) + 1).map((() => []));
+       return hv.sort(((zv, Pv) => vv.node(zv).rank - vv.node(Pv).rank)).forEach((function hv(Sv) {
+         if (Pv[Sv]) return;
+         Pv[Sv] = !0;
+         let gv = vv.node(Sv);
+         ev[gv.rank].push(Sv);
+         let pv = vv.successors(Sv);
+         pv && [...pv].sort(((Pv, hv) => function(Pv, hv) {
+           let Sv = vv.node(Pv),
+             ev = vv.node(hv);
+           return Sz(zv, Sv, ev)
+ ... (3 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38605-L38606` → after: `L1391-L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1391-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1391-L1394) · [Before (L38605-L38606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38605-L38606)

```diff
-     function Cz() {
-       Cz = function() {}
+     function bz(vv, zv) {
+       let Pv = 0;
+       for (let hv = 1; hv < zv.length; ++hv) Pv += rz(vv, zv[hv - 1], zv[hv]);
+       return Pv
```

#### 116. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38637-L38639` → after: `L1397-L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1397-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1397-L1421) · [Before (L38637-L38639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38637-L38639)

```diff
-         function Dz(...zz) {
-           return zz[Bz[13]] = Bz[2], typeof Uz[zz[Bz[1]]] === Bz[16] ? Uz[zz[Bz[1]]] = wz(Kz[zz[Bz[1]]]) : Uz[zz[Bz[1]]]
-         }
+     function rz(vv, zv, Pv) {
+       let hv = function(vv, zv) {
+           return vv.reduce(((vv, Pv, hv) => (vv[Pv] = zv[hv], vv)), {})
+         }(Pv, Pv.map(((vv, zv) => zv))),
+         Sv = zv.flatMap((zv => {
+           let Pv = vv.outEdges(zv);
+           return Pv ? Pv.map((zv => ({
+             pos: hv[zv.w],
+             weight: vv.edge(zv).weight
+           }))).sort(((vv, zv) => vv.pos - zv.pos)) : []
+         })),
+         ev = 1;
+       for (; ev < Pv.length;) ev <<= 1;
+       let gv = 2 * ev - 1;
+       ev -= 1;
+       let pv = new Array(gv).fill(0),
+ ... (9 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38641-L38643` → after: `L1423-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1423-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1423-L1431) · [Before (L38641-L38643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38641-L38643)

```diff
-         function gz() {
-           var zz = function(...zz) {
-             Cz(zz[Bz[13]] = Bz[2], this.au = zz[Bz[1]], this.length = Bz[1], this.map = {}, this.head = Bz[41], this.tail = Bz[41])
+     function kz(vv, zv) {
+       let Pv = {};
+       return vv.forEach(((vv, zv) => {
+           let hv = {
+             indegree: 0,
+             in: [],
+             out: [],
+             vs: [vv.v],
+             i: zv
```

#### 118. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38645-L38685` → after: `L1433-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1433-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1433-L1440) · [Before (L38645-L38685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38645-L38685)

```diff
-           Cz(zz.prototype.get = function(zz) {
-             var tz = this.map[zz];
-             return tz ? (this.remove(tz), this.insert(tz.key, tz.val), tz.val) : -Bz[2]
-           }, zz.prototype.put = function(...zz) {
-             Cz(zz[Bz[13]] = Bz[0], this.map[zz[Bz[1]]] ? (this.remove(this.map[zz[Bz[1]]]), this.insert(zz[Bz[1]], zz[Bz[2]])) : this.length === this.au ? (this.remove(this.head), this.insert(zz[Bz[1]], zz[Bz[2]])) : (this.insert(zz[Bz[1]], zz[Bz[2]]), this.length++))
-           }, zz.prototype.remove = function(...zz) {
-             Cz(zz[Bz[13]] = Bz[2], zz[Bz[2]] = zz[Bz[1]].prev, zz[Bz[0]] = zz[Bz[1]].next), zz[Bz[0]] && (zz[Bz[0]].prev = zz[Bz[2]]), zz[Bz[2]] && (zz[Bz[2]].next = zz[Bz[0]]), this.head === zz[Bz[1]] && (this.head = zz[Bz[0]]), this.tail === zz[Bz[1]] && (this.tail = zz[Bz[2]]) … [truncated]
-           }, zz.prototype.insert = function(...zz) {
-             Cz(zz[Bz[13]] = Bz[0], zz[Bz[42]] = new List(zz[Bz[1]], zz[Bz[2]]), this.tail ? (this.tail.next = zz[Bz[42]], zz[Bz[42]].prev = this.tail, this.tail = zz[Bz[42]]) : (this.tail = zz[Bz[42]], this.head = zz[Bz[42]]), this.map[zz[Bz[1]]] = zz[Bz[42]])
-           }, console.log(zz))
-         }
-         tz(84) in Yz && gz(), zz[Bz[2]][Dz(85) + Dz(86) + Dz(87)] = zz[Bz[23]]
-       }
-       Cz(zz[Bz[2]][tz(Bz[43]) + tz(Bz[44]) + tz(Bz[45]) + tz(Bz[46])] = !0, zz[Bz[2]][tz(Bz[43]) + tz(Bz[35]) + tz(Bz[33]) + tz(90)] = zz[Bz[2]][tz(Bz[31]) + tz(Bz[50]) + tz(Bz[51])], zz[-Bz[47]] = zz[Bz[10]]), zz[Bz[10]] === Bz[1] && zz[Bz[48]] !== Bz[1] && (zz[-Bz[47]] = Bz[2]) … [truncated]
-       const sz = zz[-Bz[47]] < Bz[1] ? -zz[Bz[48]] : zz[Bz[48]],
-         Fz = zz[Bz[10]] !== Bz[1] ? Math[Bz[49]] / Bz[10] : Math[Bz[49]] / Bz[0],
- ... (25 more removed lines; see GitHub link above)
+           void 0 !== vv.barycenter && (hv.barycenter = vv.barycenter, hv.weight = vv.weight), Pv[vv.v] = hv
+         })), zv.edges().forEach((vv => {
+           let zv = Pv[vv.v],
+             hv = Pv[vv.w];
+           void 0 !== zv && void 0 !== hv && (hv.indegree++, zv.out.push(hv))
+         })),
+         function(vv) {
+           let zv = [];
```

#### 119. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38687-L38906` → after: `L1442-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1442-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1442-L1449) · [Before (L38687-L38906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38687-L38906)

```diff
-         function xz(...zz) {
-           Cz(zz[Bz[13]] = Bz[1], zz[Bz[15]] = function(...zz) {
-             if (Cz(zz[Bz[13]] = Bz[2], zz[Bz[5]] = zz[Bz[1]].length), zz[Bz[5]] < Bz[0]) return Bz[1];
-             if (Cz(zz[Bz[0]] = Math.max(...zz[Bz[1]]), zz[Bz[53]] = Math.min(...zz[Bz[1]])), zz[Bz[0]] === zz[Bz[53]]) return Bz[1];
-             for (Cz(zz[Bz[14]] = Array(zz[Bz[5]] - Bz[2]).fill(Number.MAX_SAFE_INTEGER), zz[Bz[48]] = Array(zz[Bz[5]] - Bz[2]).fill(Number.MIN_SAFE_INTEGER), zz[Bz[9]] = Math.ceil((zz[Bz[0]] - zz[Bz[53]]) / (zz[Bz[5]] - Bz[2])), zz[Bz[23]] = Bz[1]), zz[Bz[54]] = Bz[1]; zz[Bz[54]] … [truncated]
-             for (Cz(zz[Bz[56]] = Number.MIN_SAFE_INTEGER, zz[-Bz[57]] = zz[Bz[53]]), zz[Bz[55]] = Bz[1]; zz[Bz[55]] < zz[Bz[5]] - Bz[2]; zz[Bz[55]]++) zz[Bz[14]][zz[Bz[55]]] === Number.MAX_SAFE_INTEGER && zz[Bz[48]][zz[Bz[55]]] === Number.MIN_SAFE_INTEGER || Cz(zz[Bz[56]] = Math. … [truncated]
-             return zz[Bz[56]] = Math.max(zz[Bz[56]], zz[Bz[0]] - zz[-Bz[57]]), zz[Bz[56]]
-           }, console.log(zz[Bz[15]]))
-         }
-         return Pz(99) in Yz && xz(), void(zz[Bz[0]][Bz[58]] = Bz[1])
-       }
-       Cz(zz[Bz[0]].heading = zz[-Bz[47]] > Bz[1] ? zz[Bz[2]][tz(Bz[31]) + tz(Bz[50]) + tz(Bz[51])] : zz[Bz[2]][tz(Bz[31]) + tz(Bz[50]) + tz(Bz[51])] + Math[Bz[49]], zz[Bz[0]][Bz[58]] = zz[Bz[21]] * Math[tz(Bz[59])](zz[-Bz[47]]) * (Bz[2] - zz[Bz[4]][tz(Bz[47]) + tz(101) + tz(102)  … [truncated]
-     }, oz = (...zz) => {
-       function tz(zz) {
-         return typeof Uz[zz] === Bz[16] ? Uz[zz] = function(...zz) {
-           for (Cz(zz[Bz[13]] = Bz[2], zz[Bz[5]] = 'KE2g51v^$3+9co}A0u(`nw:=xPX/a8i{|jmZB7q!&"_dL,Rt%T#ry~YVbz46Cp[?<)>@H*NJ]IDh.GOSfsQUFkMlWe;', zz[Bz[0]] = "" + (zz[Bz[1]] || ""), zz[Bz[18]] = zz[Bz[0]].length, zz[Bz[10]] = [], zz[Bz[48]] = Bz[1], zz[Bz[9]] = Bz[1], zz[-Bz[24]]  … [truncated]
- ... (204 more removed lines; see GitHub link above)
+           function Pv(vv) {
+             return zv => {
+               zv.merged || (void 0 === zv.barycenter || void 0 === vv.barycenter || zv.barycenter >= vv.barycenter) && function(vv, zv) {
+                 let Pv = 0,
+                   hv = 0;
+                 vv.weight && (Pv += vv.barycenter * vv.weight, hv += vv.weight), zv.weight && (Pv += zv.barycenter * zv.weight, hv += zv.weight), vv.vs = zv.vs.concat(vv.vs), vv.barycenter = Pv / hv, vv.weight = hv, vv.i = Math.min(zv.i, vv.i), zv.merged = !0
+               }(vv, zv)
+             }
```

#### 120. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38908-L38914` → after: `L1451-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1451-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1451-L1455) · [Before (L38908-L38914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38908-L38914)

```diff
-         },
-         "Iron Mining Drill": {
-           ...Kz,
-           meshItemName: "INTERNAL_MESH_Iron Mining Drill",
-           physicsState: {
-             type: Fz.r.CAR,
-             tier: Fz.h.IRON_MINING_DRILL
+ 
+           function hv(zv) {
+             return Pv => {
+               Pv.in.push(zv), 0 === --Pv.indegree && vv.push(Pv)
+             }
```

#### 121. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38916-L38922` → after: `L1457-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1457-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1457-L1459) · [Before (L38916-L38922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38916-L38922)

```diff
-         },
-         "Diamond Mining Drill": {
-           ...Kz,
-           meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
-           physicsState: {
-             type: Fz.r.CAR,
-             tier: Fz.h.DIAMOND_MINING_DRILL
+           for (; vv.length;) {
+             let Sv = vv.pop();
+             zv.push(Sv), Sv.in.reverse().forEach(Pv(Sv)), Sv.out.forEach(hv(Sv))
```

#### 122. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38924-L38930` → after: `L1461-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1461-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1461-L1494) · [Before (L38924-L38930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38924-L38930)

```diff
-         },
-         "Moonstone Mining Drill": {
-           ...Kz,
-           meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
-           physicsState: {
-             type: Fz.r.CAR,
-             tier: Fz.h.MOONSTONE_MINING_DRILL
+           return zv.filter((vv => !vv.merged)).map((vv => zz(vv, ["vs", "i", "barycenter", "weight"])))
+         }(Object.values(Pv).filter((vv => !vv.indegree)))
+     }
+ 
+     function Xz(vv, zv, Pv, hv, Sv) {
+       let ev = {},
+         gv = null,
+         pv = null,
+         dv = Sv;
+       "boolean" == typeof zv ? (dv = zv, ev = {}) : zv && (ev = zv, gv = null != Pv ? Pv : null, pv = null != hv ? hv : null);
+       let Nv = function(vv, zv) {
+           let Pv = {
+             lhs: [],
+             rhs: []
+           };
+           return vv.forEach((vv => {
+ ... (18 more added lines; see GitHub link above)
```

#### 123. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38932-L38958` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1496) · [Before (L38932-L38958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38932-L38958)

```diff
-         },
-         "Armored Car": {
-           meshItemName: "INTERNAL_MESH_Armored Car",
-           physicsState: {
-             type: Fz.r.CAR,
-             tier: Fz.h.ARMORED_CAR
-           },
-           validBlockIds: "solidBlocks",
-           meshSize: 4,
-           placeSound: null,
-           seats: [{
-             role: "driver",
-             localOffset: [0, .25, -.2]
-           }, {
-             role: "passenger",
-             localOffset: [0, .25, -1.2]
- ... (11 more removed lines; see GitHub link above)
+           return Pv ? Sv.i - hv.i : hv.i - Sv.i
```

#### 124. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38960-L38966` → after: `L1498-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1498-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1498-L1509) · [Before (L38960-L38966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38960-L38966)

```diff
-       },
-       Nz = Object.values(uz).map((zz => zz.meshItemName));
- 
-     function bz(zz) {
-       for (const tz of Wz.e)
-         if (uz[tz].meshItemName === zz) return tz;
-       return null
+       }(pv, gv, !!dv));
+       for (let [iv, cv] of Object.entries(ev)) {
+         let vv = lv.findIndex((vv => vv.vs[0] === iv));
+         lv.splice(vv + 1, 0, cv)
+       }
+       sv = uz(Wv, Tv, sv), lv.forEach((vv => {
+         sv += vv.vs.length, Wv.push(vv.vs), wv += vv.barycenter * vv.weight, av += vv.weight, sv = uz(Wv, Tv, sv)
+       }));
+       let Cv = {
+         vs: Wv.flat(1)
+       };
+       return av && (Cv.barycenter = wv / av, Cv.weight = av), Cv
```

#### 125. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38969-L38975` → after: `L1512-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1512-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1512-L1515) · [Before (L38969-L38975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38969-L38975)

```diff
-     function wz(zz, tz) {
-       const sz = zz.validBlockIds;
-       if (Array.isArray(sz)) return sz.includes(tz);
-       if (tz === vz) return !1;
-       if ("solidBlocks" === sz) return !0 !== Xz.j[tz].cb;
-       if ("solidBlocksOrFluid" === sz) return !0;
-       throw new Error(`Unsupported validBlockIds for ${tz}: ${JSON.stringify(sz)}`)
+     function uz(vv, zv, Pv) {
+       let hv;
+       for (; zv.length && (hv = zv[zv.length - 1]).i <= Pv;) zv.pop(), vv.push(hv.vs), Pv++;
+       return Pv
```

#### 126. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L38977-L39094` → after: `L1517-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1517-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1517-L1551) · [Before (L38977-L39094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L38977-L39094)

```diff
-     const Dz = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
-       },
-       gz = {
-         "Yellow Balloon": {
-           ...Dz,
-           physicsState: {
-             type: Fz.r.BALLOON,
-             tier: Fz.d.YELLOW
-           }
-         },
-         "White Balloon": {
- ... (102 more removed lines; see GitHub link above)
+ 
+     function vP(vv, zv, Pv, hv, Sv) {
+       var ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv;
+       let Cv = null,
+         iv = Sv;
+       "boolean" == typeof hv ? (iv = hv, Cv = null) : void 0 !== hv && (Cv = hv);
+       let cv = vv.children(zv),
+         Gv = vv.node(zv),
+         mv = Gv ? Gv.borderLeft : void 0,
+         jv = Gv ? Gv.borderRight : void 0,
+         fv = {};
+       mv && (cv = cv.filter((vv => vv !== mv && vv !== jv)));
+       let Fv = function(vv) {
+         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((zv => {
+           let Pv = vv.inEdges(zv);
+           if (!Pv || !Pv.length) return {
+ ... (19 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39097` → after: `L1641-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1641-L1642) · [Before (L39097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39097)

```diff
-       };
+       })), ev
+     }
```

#### 128. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39100-L39101` → after: `L1645-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1645-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1645-L1660) · [Before (L39100-L39101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39100-L39101)

```diff
-       var tz;
-       return null === zz || void 0 === zz ? null : null !== (tz = gz[zz]) && void 0 !== tz ? tz : null
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       if ("function" == typeof zv.customOrder) return void zv.customOrder(vv, PP);
+       let hv = bv(vv),
+         Sv = hP(vv, vz(1, hv + 1), "inEdges"),
+         ev = hP(vv, vz(hv - 1, -1, -1), "outEdges"),
+         gv = oz(vv, Pv);
+       if (eP(vv, gv), zv.disableOptimalOrderHeuristic) return;
+       let pv, dv = Number.POSITIVE_INFINITY,
+         Nv = zv.constraints || [];
+       for (let lv = 0, Tv = 0; Tv < 4; ++lv, ++Tv) {
+         SP(lv % 2 ? Sv : ev, lv % 4 >= 2, Nv, Pv), gv = Bv(vv);
+         let zv = bz(vv, gv);
+         zv < dv ? (Tv = 0, pv = Object.assign({}, gv), dv = zv) : zv === dv && (pv = structuredClone(gv))
+       }
+       eP(vv, pv)
```

#### 129. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39141-L39143` → after: `L1663-L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1663-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1663-L1675) · [Before (L39141-L39143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39141-L39143)

```diff
-     function rz(zz) {
-       var tz;
-       return null === zz || void 0 === zz ? null : null !== (tz = Pz[zz]) && void 0 !== tz ? tz : null
+     function hP(vv, zv, Pv) {
+       let hv = new Map,
+         Sv = (vv, zv) => {
+           hv.has(vv) || hv.set(vv, []), hv.get(vv).push(zv)
+         };
+       for (let ev of vv.nodes()) {
+         let zv = vv.node(ev);
+         if ("number" == typeof zv.rank && Sv(zv.rank, ev), "number" == typeof zv.minRank && "number" == typeof zv.maxRank)
+           for (let vv = zv.minRank; vv <= zv.maxRank; vv++) vv !== zv.rank && Sv(vv, ev)
+       }
+       return zv.map((function(zv) {
+         return zP(vv, zv, Pv, hv.get(zv) || [])
+       }))
```

#### 130. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39148-L39149` → after: `L1678-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1678-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1678-L1699) · [Before (L39148-L39149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39148-L39149)

```diff
-     function mz(zz) {
-       return Yz.has(zz)
+     function SP(vv, zv, Pv, hv) {
+       let Sv = !0,
+         ev = new Lv;
+       vv.forEach((function(vv) {
+         Pv.forEach((vv => ev.setEdge(vv.left, vv.right)));
+         let gv = vv.graph().root,
+           {
+             result: pv,
+             usedBias: dv
+           } = vP(vv, gv, ev, hv, Sv);
+         zv && dv && (Sv = !Sv), pv.vs.forEach(((zv, Pv) => vv.node(zv).order = Pv)),
+           function(vv, zv, Pv) {
+             let hv, Sv = {};
+             Pv.forEach((Pv => {
+               let ev, gv, pv = vv.parent(Pv);
+               for (; pv;) {
+ ... (6 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39152-L39153` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1702-L1703) · [Before (L39152-L39153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39152-L39153)

```diff
-     function Jz(zz) {
-       return xz.has(zz)
+     function eP(vv, zv) {
+       Object.values(zv).forEach((zv => zv.forEach(((zv, Pv) => vv.node(zv).order = Pv))))
```

#### 132. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39156-L39159` → after: `L1706-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1706-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1706-L1712) · [Before (L39156-L39159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39156-L39159)

```diff
-     function Iz(zz) {
-       return zz === Fz.r.DEFAULT || function(zz) {
-         return Yz.has(zz) || xz.has(zz)
-       }(zz)
+     function gP(vv, zv, Pv) {
+       if (zv > Pv) {
+         let vv = zv;
+         zv = Pv, Pv = vv
+       }
+       let hv = vv[zv];
+       hv || (vv[zv] = hv = {}), hv[Pv] = !0
```

#### 133. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39192-L39202` → after: `L1716-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1716-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1716-L1781) · [Before (L39192-L39202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39192-L39202)

```diff
-       const Fz = Math.floor(tz.base[0] + Wz),
-         Oz = Math.floor(tz.max[0] - Wz),
-         oz = Math.floor(tz.base[2] + Wz),
-         vz = Math.floor(tz.max[2] - Wz);
-       let Uz = -1 / 0;
-       for (let Kz = Fz; Kz <= Oz; Kz++)
-         for (let Fz = oz; Fz <= vz; Fz++) {
-           const Oz = zz(Kz, sz, Fz);
-           if (!Oz) continue;
-           const oz = Array.isArray(Oz) ? Oz : Xz;
-           for (let zz = 0; zz < oz.length; zz += 6) tz.base[0] < Kz + oz[zz + 3] - Wz && tz.max[0] > Kz + oz[zz] + Wz && tz.base[1] < sz + oz[zz + 4] - Wz && tz.max[1] > sz + oz[zz + 1] + Wz && tz.base[2] < Fz + oz[zz + 5] - Wz && tz.max[2] > Fz + oz[zz + 2] + Wz && sz + oz[zz +  … [truncated]
+       if (zv > Pv) {
+         let vv = zv;
+         zv = Pv, Pv = vv
+       }
+       let hv = vv[zv];
+       return void 0 !== hv && Object.hasOwn(hv, Pv)
+     }
+ 
+     function dP(vv, zv, Pv, hv) {
+       let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         ev = {},
+         gv = function(vv, zv, Pv, hv) {
+           let Sv = new Lv,
+             ev = vv.graph(),
+             gv = function(vv, zv, Pv) {
+               return (hv, Sv, ev) => {
+ ... (50 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39204` → after: `L1783-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1783-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1783-L1967) · [Before (L39204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39204)

```diff
-       return Uz
+       }
+       return dv((function(vv) {
+         let zv = gv.inEdges(vv);
+         ev[vv] = zv ? zv.reduce(((vv, zv) => {
+           var Pv;
+           let hv = null != (Pv = ev[zv.v]) ? Pv : 0,
+             Sv = gv.edge(zv);
+           return Math.max(vv, hv + (void 0 !== Sv ? Sv : 0))
+         }), 0) : 0
+       }), (function(vv) {
+         return gv.predecessors(vv) || []
+       })), dv((function(zv) {
+         let Pv = gv.outEdges(zv),
+           hv = Number.POSITIVE_INFINITY;
+         Pv && (hv = Pv.reduce(((vv, zv) => {
+           let Pv = ev[zv.w],
+ ... (169 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39208-L39215` → after: `L1971-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L1971-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L1971-L2001) · [Before (L39208-L39215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39208-L39215)

```diff
-       const Fz = Math.floor(tz.base[0] + Wz),
-         Xz = Math.floor(tz.max[0] - Wz),
-         Oz = Math.floor(tz.base[2] + Wz),
-         oz = Math.floor(tz.max[2] - Wz);
-       for (let Wz = Fz; Wz <= Xz; Wz++)
-         for (let tz = Oz; tz <= oz; tz++)
-           if (zz(Wz, sz, tz)) return !0;
-       return !1
+       var hv;
+       if (!Pv) return !1;
+       let Sv = null == (hv = zv.node(vv)) ? void 0 : hv.edgeObj;
+       if (!Sv || zv.node(vv).edgeLabel.reversed) return !1;
+       let ev = Pv.indexOf(null == Sv ? void 0 : Sv.v),
+         gv = Pv.indexOf(null == Sv ? void 0 : Sv.w);
+       return -1 !== ev && -1 !== gv && ev === (gv + 1) % Pv.length || ev === (gv - 1) % Pv.length
+     }
+ 
+     function TP(vv, zv) {
+       (function(vv) {
+         let zv = Bv(vv),
+           Pv = vv.graph(),
+           hv = Pv.ranksep,
+           Sv = Pv.rankalign,
+           ev = 0;
+ ... (15 more added lines; see GitHub link above)
```

#### 136. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39219` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2006) · [Before (L39219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39219)

```diff
-       return zz.rG && zz.wo > 0 && zz.depenetrate && null === zz.YG
+       return sP(vv, kv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), vv
```

#### 137. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39227-L39258` → after: `L2010-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2010-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2010-L2014) · [Before (L39227-L39258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39227-L39258)

```diff
-       const Xz = sz.base[1],
-         vz = Math.floor(Xz),
-         Kz = Oz(zz, sz, vz),
-         uz = Kz - Xz;
-       if (!(uz >= Fz)) return 0;
-       if (oz(tz, sz, vz)) return 0;
-       const Nz = Uz;
-       for (let Fz = 0; Fz < 3; Fz++) Nz.base[Fz] = sz.base[Fz], Nz.max[Fz] = sz.max[Fz];
-       Nz.base[1] += uz, Nz.max[1] += uz;
-       const bz = Math.floor(Nz.max[1] - Wz);
-       for (let Fz = Math.floor(Kz); Fz <= bz; Fz++)
-         if (oz(tz, Nz, Fz) || Oz(zz, Nz, Fz) !== -1 / 0) return 0;
-       return uz
-     }
-   },
-   37006: (zz, tz, sz) => {
- ... (16 more removed lines; see GitHub link above)
+       let hv = zv;
+       for (; void 0 !== hv;) {
+         let zv = vv.parent(hv);
+         if (zv === Pv) return hv;
+         hv = zv
```

#### 138. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39260-L39266` → after: `L2016-L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2016-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2016-L2197) · [Before (L39260-L39266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39260-L39266)

```diff
-       chooseRandomEnchantmentAttributes(zz, tz, sz) {
-         const Wz = [...sz],
-           Xz = {
-             enchantments: {},
-             enchantmentTier: tz,
-             id: (0, Fz.c)()
-           },
+     }
+ 
+     function sP(vv, zv, Pv) {
+       var hv;
+       let Sv = vv.nodes().filter((zv => vv.children(zv).length)),
+         ev = {};
+       Sv.forEach((hv => {
+         let Sv = vv.node(hv);
+         if (Sv && Sv.rankdir) {
+           let gv = new Lv({
+             multigraph: !0,
+             compound: !0
+           });
+           gv.setGraph({
+             rankdir: Sv.rankdir
+           });
+ ... (166 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39268` → after: `L2199-L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2199-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2199-L2227) · [Before (L39268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39268)

```diff
-         for (let Fz = 0; Fz < Oz; Fz++) {
+         if (Sv && Sv.rankdir && Sv._dagreClusterSubgraph && gv) {
+           let ev = Sv._dagreClusterSubgraph,
+             pv = null != (Pv = Sv.x) ? Pv : 0,
+             dv = null != (hv = Sv.y) ? hv : 0,
+             Nv = (gv.minX + gv.maxX) / 2,
+             lv = (gv.ve + gv.ze) / 2;
+           ev.nodes().forEach((Pv => {
+             if (Pv === zv) return;
+             let hv = ev.node(Pv),
+               Sv = vv.node(Pv);
+             if (Sv && hv && "number" == typeof hv.x && "number" == typeof hv.y) {
+               let vv = hv.x - Nv,
+                 zv = hv.y - lv;
+               Sv.x = pv + vv, Sv.y = dv + zv
+             }
+           })), delete Sv._dagreClusterSubgraph
+ ... (13 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39270-L39272` → after: `L2229-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2229-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2229-L2239) · [Before (L39270-L39272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39270-L39272)

```diff
-           if (0 === Wz.length) {
-             console.warn("Ran out of enchantments to choose from");
-             break
+           let Sv = vv.edge(Pv);
+           Sv.minlen *= 2, "c" !== (null != (hv = Sv.labelpos) ? hv : "r").toLowerCase() && ("TB" === zv.rankdir || "BT" === zv.rankdir ? Sv.width += Sv.labeloffset : Sv.height += Sv.labeloffset)
+         }))
+       }(vv))), zv("    removeSelfEdges", (() => function(vv) {
+         vv.edges().forEach((zv => {
+           if (zv.v === zv.w) {
+             let Pv = vv.node(zv.v);
+             Pv.selfEdges || (Pv.selfEdges = []), Pv.selfEdges.push({
+               e: zv,
+               label: vv.edge(zv)
+             }), vv.removeEdge(zv)
```

#### 141. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39274-L39279` → after: `L2241-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2241-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2241-L2493) · [Before (L39274-L39279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39274-L39279)

```diff
-           const {
-             enchantments: tz
-           } = Xz, sz = Wz[Math.floor(zz.next() * Wz.length)];
-           tz[sz] = (null !== (Uz = tz[sz]) && void 0 !== Uz ? Uz : 0) + 1, tz[sz] >= vz && Wz.splice(Wz.indexOf(sz), 1)
-         }
-         return Xz
+         }))
+       }(vv))), zv("    acyclic", (() => wz(vv, pv))), zv("    nestingGraph.run", (() => Zz(vv))), zv("    rank", (() => tz(Mv(vv)))), zv("    injectEdgeLabelProxies", (() => function(vv) {
+         vv.edges().forEach((zv => {
+           let Pv = vv.edge(zv);
+           if (Pv.width && Pv.height) {
+             let Pv = vv.node(zv.v),
+               hv = {
+                 rank: (vv.node(zv.w).rank - Pv.rank) / 2 + Pv.rank,
+                 e: zv
+               };
+             Hv(vv, "edge-proxy", hv, "_ep")
+           }
+         }))
+       }(vv))), zv("    removeEmptyRanks", (() => function(vv) {
+         let zv = vv.nodes().map((zv => vv.node(zv).rank)).filter((vv => void 0 !== vv)),
+           Pv = ov(Math.min, zv),
+ ... (237 more added lines; see GitHub link above)
```

#### 142. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39282-L39304` → after: `L2496-L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2496-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2496-L2520) · [Before (L39282-L39304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39282-L39304)

```diff
-     const Xz = {
-         Sword: ["Damage", "Attack Speed", "Critical Damage"],
-         Spear: ["Damage", "Attack Speed", "Critical Damage"],
-         Dagger: ["Damage", "Attack Speed", "Critical Damage"],
-         Mace: ["Damage", "Attack Speed", "Critical Damage"],
-         Whip: ["Damage", "Attack Speed", "Critical Damage"],
-         Helmet: ["Protection", "Health", "Health Regen"],
-         Chestplate: ["Protection", "Health", "Health Regen"],
-         Leggings: ["Protection", "Health", "Health Regen"],
-         Boots: ["Protection", "Health", "Health Regen"],
-         Gauntlets: ["Protection", "Health", "Health Regen"],
-         Bow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
-         Crossbow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
-         Pickaxe: ["Break Speed", "Momentum", "Mining Yield", "Mining Aura"],
-         Spade: ["Break Speed", "Momentum", "Digging Aura"],
-         Axe: ["Break Speed", "Momentum", "Lumber Aura"],
- ... (7 more removed lines; see GitHub link above)
+ 
+     function iP(vv, zv) {
+       vv.nodes().forEach((Pv => {
+         let hv = vv.node(Pv),
+           Sv = zv.node(Pv);
+         hv && (hv.x = Sv.x, hv.y = Sv.y, hv.order = Sv.order, hv.rank = Sv.rank, zv.children(Pv).length && (hv.width = Sv.width, hv.height = Sv.height))
+       })), vv.edges().forEach((Pv => {
+         let hv = vv.edge(Pv),
+           Sv = zv.edge(Pv);
+         hv.points = Sv.points, Object.hasOwn(Sv, "x") && (hv.x = Sv.x, hv.y = Sv.y)
+       })), vv.graph().width = zv.graph().width, vv.graph().height = zv.graph().height
+     }
+     var cP = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
+       GP = {
+         ranksep: 50,
+         edgesep: 20,
+ ... (9 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39306` → after: `L2522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2522) · [Before (L39306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39306)

```diff
-       Oz = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
+       FP = ["minlen", "weight", "width", "height", "labeloffset"],
```

#### 144. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39308-L39312` → after: `L2524-L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2524-L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2524-L2529) · [Before (L39308-L39312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39308-L39312)

```diff
-         "Tier 1": 1,
-         "Tier 2": 2,
-         "Tier 3": 3,
-         "Tier 4": 4,
-         "Tier 5": 5
+         minlen: 1,
+         weight: 1,
+         width: 0,
+         height: 0,
+         labeloffset: 10,
+         labelpos: "r"
```

#### 145. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39314-L39775` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2531) · [Before (L39314-L39775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39314-L39775)

```diff
-       vz = 3
-   },
-   36630: (zz, tz, sz) => {
-     var Fz = {
-       "./67/67_Atlas.png": 26882,
-       "./67/67_Model.glb": 33059,
-       "./67/67_Reconstructed.glb": 33068,
-       "./67/variations/0_67_default.png": 26891,
-       "./Armour Collector/Armour Collector_Atlas.png": 26900,
-       "./Armour Collector/Armour Collector_Model.glb": 33076,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 33081,
-       "./Armour Collector/variations/0_armour collector_default.png": 26903,
-       "./Bear/BearSaddle_Atlas.png": 26906,
-       "./Bear/Bear_Atlas.png": 26910,
-       "./Bear/Bear_Model.glb": 33089,
-       "./Bear/variations/0_bear_default.png": 26912,
- ... (446 more removed lines; see GitHub link above)
+       nP = ["labelpos"];
```

#### 146. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39778-L39782` → after: `L2534-L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2534-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2534-L2549) · [Before (L39778-L39782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39778-L39782)

```diff
-       if (!sz.o(Fz, zz)) {
-         var tz = new Error("Cannot find module '" + zz + "'");
-         throw tz.code = "MODULE_NOT_FOUND", tz
-       }
-       return Fz[zz]
+       let zv = new Lv({
+           multigraph: !0,
+           compound: !0
+         }),
+         Pv = KP(vv.graph());
+       return zv.setGraph(Object.assign({}, GP, DP(Pv, cP), zz(Pv, mP))), vv.nodes().forEach((Pv => {
+         let hv = DP(KP(vv.node(Pv)), jP);
+         Object.keys(fP).forEach((vv => {
+           void 0 === hv[vv] && (hv[vv] = fP[vv])
+         })), zv.setNode(Pv, hv);
+         let Sv = vv.parent(Pv);
+         void 0 !== Sv && zv.setParent(Pv, Sv)
+       })), vv.edges().forEach((Pv => {
+         let hv = KP(vv.edge(Pv));
+         zv.setEdge(Pv, Object.assign({}, YP, DP(hv, FP), zz(hv, nP)))
+       })), zv
```

#### 147. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39834` → after: `L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2553) · [Before (L39834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39834)

```diff
-       return zz + 65536 * tz
+       return Pz(zz(vv, zv), Number)
```

#### 148. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39837-L39838` → after: `L2556-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2556-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2556-L2561) · [Before (L39837-L39838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39837-L39838)

```diff
-     function oz(zz, tz) {
-       return vz(zz) + 4 * vz(tz)
+     function KP(vv) {
+       let zv = {};
+       return vv && Object.entries(vv).forEach((vv => {
+         let [Pv, hv] = vv;
+         "string" == typeof Pv && (Pv = Pv.toLowerCase()), zv[Pv] = hv
+       })), zv
```

#### 149. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L39842` → after: `L2565-L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2565-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/112.js#L2565-L2581) · [Before (L39842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/112.js#L39842)

```diff
-       return (Math.round(zz / (Math.PI / 2)) % 4 + 4) % 4
+       let zv = Bv(vv),
+         Pv = new Lv({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return vv.nodes().forEach((zv => {
+         Pv.setNode(zv, {
+           label: zv
+         }), Pv.setParent(zv, "layer" + vv.node(zv).rank)
+       })), vv.edges().forEach((vv => Pv.setEdge(vv.v, vv.w, {}, vv.name))), zv.forEach(((vv, zv) => {
+         let hv = "layer" + zv;
+         Pv.setNode(hv, {
+           rank: "same"
+         }), vv.reduce(((vv, zv) => (Pv.setEdge(vv, zv, {
+           style: "invis"
+         }), zv)))
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L4)

```diff
-   36097: (zz, tz, sz) => {
+   36148: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L6-L7)

```diff
-       e: () => Dz,
-       f: () => xz
+       b: () => sv,
+       d: () => fv
```

#### 3. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9-L21` → after: `L9-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L9-L21) · [Before (L9-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L9-L21)

```diff
-     sz(8821);
-     var Fz = sz(65),
-       Wz = sz(1416),
-       Xz = sz(1857),
-       Oz = sz(1901),
-       oz = sz(30),
-       vz = sz(2290),
-       Uz = sz(36103),
-       Kz = sz(36112),
-       uz = sz(8779),
-       Nz = sz(8813),
-       bz = sz(8826),
-       wz = sz(1087);
+     Pv(8975);
+     var hv = Pv(52),
+       Sv = Pv(1439),
+       ev = Pv(1876),
+       gv = Pv(1923),
+       pv = Pv(22),
+       dv = Pv(2324),
+       Nv = Pv(36151),
+       lv = Pv(36153),
+       Tv = Pv(8931),
+       Wv = Pv(8970),
+       wv = Pv(8987),
+       av = Pv(1082);
```

#### 4. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L30)

```diff
-       } = (0, oz.h)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Bz = (0, vz.e)("gunshotOrigin"), Pz = (0, Fz.useRef)(null), rz = (0, Fz.useRef)(!1), [Yz, mz] = (0, Fz.useState)(gz);
+       } = (0, pv.i)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), cv = (0, dv.i)("gunshotOrigin"), Gv = (0, hv.useRef)(null), mv = (0, hv.useRef)(!1), [jv, Fv] = (0, hv.useState)(Cv);
```

#### 5. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L34)

```diff
-       const Jz = (0, Oz.l)("heldItemAim"),
+       const Yv = (0, gv.h)("heldItemAim"),
```

#### 6. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L40)

```diff
-       (0, Fz.useEffect)((() => (0, Kz.i)("crosshairAccuracy", xz)), []), (0, Wz.g)("mouseState", (zz => {
+       (0, hv.useEffect)((() => (0, lv.c)("crosshairAccuracy", fv)), []), (0, Sv.g)("mouseState", (vv => {
```

#### 7. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L44)

```diff
-         rz.current = tz, Pz.current && (Pz.current.style.transform = (0, Nz.f)(tz, Zz.current.growOnClick)), "shapes" === Zz.current.style && Tz(tz)
+         mv.current = zv, Gv.current && (Gv.current.style.transform = (0, Wv.c)(zv, Kv.current.growOnClick)), "shapes" === Kv.current.style && Uv(zv)
```

#### 8. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L46-L47)

```diff
-       const cz = (0, uz.i)(tz, sz.touchActionButtons);
-       return (null !== (zz = (0, Uz.c)(Hz, Dz)) && void 0 !== zz ? zz : (0, Uz.h)(Jz, Yz > 1, cz, Bz)) ? "movement" === Xz || "cursor" === Xz ? null : (0, wz.jsxs)(wz.Fragment, {
+       const Rv = (0, Tv.f)(zv, Pv.touchActionButtons);
+       return (null !== (vv = (0, Nv.b)(iv, sv)) && void 0 !== vv ? vv : (0, Nv.e)(Yv, jv > 1, Rv, cv)) ? "movement" === ev || "cursor" === ev ? null : (0, av.jsxs)(av.Fragment, {
```

#### 9. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L49)

```diff
-           custom: ez.forGuns && "shapes" === ez.style ? ez : null,
+           custom: Dv.forGuns && "shapes" === Dv.style ? Dv : null,
```

#### 10. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L51)

```diff
-         }), !Cz && (0, wz.jsx)(Nz.d, {
+         }), !Ov && (0, av.jsx)(Wv.b, {
```

#### 11. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L55)

```diff
-           pressed: "shapes" === ez.style ? Gz : rz.current
+           pressed: "shapes" === Dv.style ? Vv : mv.current
```

#### 12. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L86)

```diff
-       return ((0, Uz.g)(zz) - (0, Uz.g)(0)) * window.innerHeight / 100
+       return ((0, Nv.d)(vv) - (0, Nv.d)(0)) * window.innerHeight / 100
```

#### 13. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L92-L93` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L92-L93) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L92-L93)

```diff
-         const tz = `${(0,Uz.g)(zz)}vh`;
-         Hz[0].current.style.transform = `translateX(calc(0px - ${tz}))`, Hz[1].current.style.transform = `translateX(calc(0px + ${tz}))`, Hz[2].current.style.transform = `translateY(calc(0px - ${tz}))`, Hz[3].current.style.transform = `translateY(calc(0px + ${tz}))`
+         const zv = `${(0,Nv.d)(vv)}vh`;
+         iv[0].current.style.transform = `translateX(calc(0px - ${zv}))`, iv[1].current.style.transform = `translateX(calc(0px + ${zv}))`, iv[2].current.style.transform = `translateY(calc(0px - ${zv}))`, iv[3].current.style.transform = `translateY(calc(0px + ${zv}))`
```

#### 14. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L95)

```diff
-       Bz.current && (Bz.current.style.filter = `blur(${Math.round(zz/10)}px)`)
+       cv.current && (cv.current.style.filter = `blur(${Math.round(vv/10)}px)`)
```

#### 15. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L103)

```diff
-       const Xz = (0, Wz.h)("aimingOverlay", "none"),
+       const ev = (0, Sv.j)("aimingOverlay", "none"),
```

#### 16. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L132)

```diff
-           children: [tz && (0, wz.jsx)(Nz.d, {
+           children: [zv && (0, av.jsx)(Wv.b, {
```

#### 17. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L179)

```diff
-   8813: (zz, tz, sz) => {
+   8970: (vv, zv, Pv) => {
```

#### 18. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L181-L182` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L181-L182) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L181-L182)

```diff
-       d: () => Nz,
-       f: () => uz
+       b: () => sv,
+       c: () => av
```

#### 19. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L184-L185` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L184-L185) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L184-L185)

```diff
-     sz(8821);
-     var Fz = sz(1020),
+     Pv(8975);
+     var hv = Pv(1035),
```

#### 20. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L187-L188` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L187-L188) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L187-L188)

```diff
-       Xz = sz(65),
-       Oz = sz(8785);
+       ev = Pv(52),
+       gv = Pv(8940);
```

#### 21. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L204` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L290) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L204)

```diff
-     var Uz = sz(1087);
+     var Wv = Pv(1082);
```

#### 22. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L208` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L294) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L208)

```diff
-       return zz && tz ? `scale(${Kz})` : "scale(1)"
+       return vv && zv ? `scale(${wv})` : "scale(1)"
```

#### 23. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L222` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L308) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L222)

```diff
-       if (zz.color !== Oz.h.color && (sz.color = (0, Oz.n)(zz.color)), zz.opacity !== Oz.h.opacity && (sz.opacity = zz.opacity / 100), zz.outline !== Oz.h.outline || zz.outlineColor !== Oz.h.outlineColor) {
+       if (vv.color !== gv.f.color && (Pv.color = (0, gv.m)(vv.color)), vv.opacity !== gv.f.opacity && (Pv.opacity = vv.opacity / 100), vv.outline !== gv.f.outline || vv.outlineColor !== gv.f.outlineColor) {
```

#### 24. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L224-L225` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L310-L311) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L224-L225)

```diff
-           Fz = (0, Oz.n)(zz.outlineColor);
-         sz.textShadow = tz > 0 ? `-${tz}px 0 ${Fz}, 0 ${tz}px ${Fz}, ${tz}px 0 ${Fz}, 0 -${tz}px ${Fz}` : "none"
+           hv = (0, gv.m)(vv.outlineColor);
+         Pv.textShadow = zv > 0 ? `-${zv}px 0 ${hv}, 0 ${zv}px ${hv}, ${zv}px 0 ${hv}, 0 -${zv}px ${hv}` : "none"
```

#### 25. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L227` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L313) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L227)

```diff
-       if (zz.size !== Oz.h.size) {
+       if (vv.size !== gv.f.size) {
```

#### 26. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L229` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L315) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L229)

```diff
-         sz.fontSize = tz ? `calc(max(1.3rem, 18px) * ${Fz})` : `calc(1.3rem * ${Fz})`, sz.marginTop = `-${bz}em`, sz.transformOrigin = `50% calc(50% + ${bz}em)`
+         Pv.fontSize = zv ? `calc(max(1.3rem, 18px) * ${hv})` : `calc(1.3rem * ${hv})`, Pv.marginTop = `-${Cv}em`, Pv.transformOrigin = `50% calc(50% + ${Cv}em)`
```

#### 27. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L279` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L365) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L279)

```diff
-         background: zz.filled ? sz : void 0
+         background: vv.filled ? Pv : void 0
```

#### 28. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L334` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L420) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L334)

```diff
-               sz((tz => tz.dpr === Fz && tz.box.left === zz.left && tz.box.top === zz.top && tz.box.width === zz.width && tz.box.height === zz.height ? tz : {
+               Pv((zv => zv.dpr === hv && zv.box.left === vv.left && zv.box.top === vv.top && zv.box.width === vv.width && zv.box.height === vv.height ? zv : {
```

#### 29. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L353-L435` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L439) · [Before (L353-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L353-L435)

```diff
-       const xz = function(zz, tz) {
-           const sz = oz(zz.lineThickness, tz),
-             Fz = oz(zz.lineLength, tz),
-             Wz = Math.round(zz.gap * tz),
-             Xz = oz(zz.dotSize, tz),
-             Oz = zz.outline > 0 ? oz(zz.outline, tz) : 0,
-             Uz = oz(zz.circleThickness, tz),
-             Kz = zz.circle ? Math.round(zz.circleRadius * tz * 2 + Uz) : 0,
-             uz = function(zz, tz, sz, Fz) {
-               return zz.lines ? tz : zz.dot ? sz : zz.circle && Fz % 2 === 0 ? 2 : 1
-             }(zz, sz, Xz, Kz),
-             Nz = [];
-           if (zz.lines && (Nz.push({
-               x: uz + Wz,
-               y: 0,
-               w: Fz,
- ... (67 more removed lines; see GitHub link above)
+       const iv = dv(zv, sv, pv && zv.growOnClick ? wv : 1),
```

#### 30. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L444-L445` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L448-L449) · [Before (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L444-L445)

```diff
-         Jz = (0, Oz.n)(tz.color),
-         Iz = (0, Oz.n)(tz.outlineColor),
+         Gv = (0, gv.m)(zv.color),
+         fv = (0, gv.m)(zv.outlineColor),
```

#### 31. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L463` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L467) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L463)

```diff
-       const ez = null !== Nz && void 0 !== Nz ? Nz : Cz.current;
+       const Ov = null !== Nv && void 0 !== Nv ? Nv : nv.current;
```

#### 32. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L487` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L491) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L487)

```diff
-             }, `o${tz}`))), xz.ring && (0, Uz.jsx)("div", {
+             }, `o${zv}`))), iv.ring && (0, Wv.jsx)("div", {
```

#### 33. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L494` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L498) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L494)

```diff
-             }, `f${tz}`)))]
+             }, `f${zv}`)))]
```

#### 34. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L500` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L504) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L500)

```diff
-   8823: (zz, tz, sz) => {
+   8983: (vv, zv, Pv) => {
```

#### 35. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L502-L503` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L506-L507) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L502-L503)

```diff
-       c: () => Kz,
-       g: () => gz,
+       d: () => lv,
+       h: () => Cv,
```

#### 36. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L506` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L510) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L506)

```diff
-     var Fz = sz(8785);
+     var hv = Pv(8940);
```

#### 37. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L543` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L547) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L543)

```diff
-         const tz = (0, Fz.l)(Wz, zz[Wz]);
+         const zv = (0, hv.i)(Sv, vv[Sv]);
```

#### 38. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L551` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L555) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L551)

```diff
-         sz.push(Math.round(((0, Fz.l)(Wz, zz[Wz]) - tz) / Xz))
+         Pv.push(Math.round(((0, hv.i)(Sv, vv[Sv]) - zv) / ev))
```

#### 39. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L563` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L567) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L563)

```diff
-       for (const tz of zz.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Uz}})`, "gi"))) {
+       for (const zv of vv.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Nv}})`, "gi"))) {
```

#### 40. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L574` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L578) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L574)

```diff
-           ...Fz.h,
+           ...hv.f,
```

#### 41. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L587` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L591) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L587)

```diff
-         sz[Xz] = (0, Fz.l)(Xz, tz + zz[Wz] * Oz), Wz++
+         Pv[ev] = (0, hv.i)(ev, zv + vv[Sv] * gv), Sv++
```

#### 42. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L592` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L596) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L592)

```diff
-   8785: (zz, tz, sz) => {
+   8940: (vv, zv, Pv) => {
```

#### 43. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L595-L599` → after: `L599-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L599-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L599-L603) · [Before (L595-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L595-L599)

```diff
-       h: () => Wz,
-       l: () => Xz,
-       n: () => Uz,
-       q: () => vz,
-       u: () => Kz,
+       f: () => Sv,
+       i: () => ev,
+       m: () => Nv,
+       p: () => dv,
+       t: () => lv,
```

#### 44. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L601` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L605) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L601)

```diff
-       y: () => Oz
+       x: () => gv
```

#### 45. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L689` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L693) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L689)

```diff
-       const vz = (null !== (sz = String(oz).split(".")[1]) && void 0 !== sz ? sz : "").length,
+       const dv = (null !== (Pv = String(pv).split(".")[1]) && void 0 !== Pv ? Pv : "").length,
```

#### 46. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L712` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L716) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L712)

```diff
-       return `#${zz.toString(16).padStart(6,"0")}`
+       return `#${vv.toString(16).padStart(6,"0")}`
```

#### 47. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L720` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L724) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L720)

```diff
-   8826: (zz, tz, sz) => {
+   8987: (vv, zv, Pv) => {
```

#### 48. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L725-L728` → after: `L729-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L729-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L729-L732) · [Before (L725-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L725-L728)

```diff
-     var Fz = sz(65),
-       Wz = sz(44),
-       Xz = sz(8823),
-       Oz = sz(8785);
+     var hv = Pv(52),
+       Sv = Pv(39),
+       ev = Pv(8983),
+       gv = Pv(8940);
```

#### 49. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L736-L737` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L740-L741) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L736-L737)

```diff
-         const tz = Wz.f.getItem(oz);
-         vz = null !== (zz = "string" === typeof tz ? (0, Xz.g)(tz) : null) && void 0 !== zz ? zz : Oz.h
+         const zv = Sv.h.getItem(pv);
+         dv = null !== (vv = "string" === typeof zv ? (0, ev.h)(zv) : null) && void 0 !== vv ? vv : gv.f
```

#### 50. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L743` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L747) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L743)

```diff
-       vz = zz, (0, Oz.q)(zz) ? Wz.f.removeItem(oz) : Wz.f.setItem(oz, (0, Xz.k)(zz));
+       dv = vv, (0, gv.p)(vv) ? Sv.h.removeItem(pv) : Sv.h.setItem(pv, (0, ev.k)(vv));
```

#### 51. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L760` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L764) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L760)

```diff
-   36201: (zz, tz, sz) => {
+   36284: (vv, zv, Pv) => {
```

#### 52. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L762` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L766) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L762)

```diff
-       d: () => Xz,
+       b: () => ev,
```

#### 53. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L766-L767` → after: `L770-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L770-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L770-L771) · [Before (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L766-L767)

```diff
-     var Fz = sz(580),
-       Wz = sz(2555);
+     var hv = Pv(626),
+       Sv = Pv(2599);
```

#### 54. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L770` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L774) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L770)

```diff
-       return zz === (0, Wz.e)().Uzz ? (0, Wz.e)().gC : zz
+       return vv === (0, Sv.g)().W8 ? (0, Sv.g)().sV : vv
```

#### 55. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L774` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L778) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L774)

```diff
-       return !(0, Fz.G)(zz) && Xz(zz) === (0, Wz.e)().gC
+       return !(0, hv.N)(vv) && ev(vv) === (0, Sv.g)().sV
```

#### 56. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L779-L851` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L783) · [Before (L779-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L779-L851)

```diff
-       return (0, Wz.e)().physics[oz][1]
-     }
-   },
-   35947: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       countDecodesAs: () => Kz,
-       decodedAudio: () => uz
-     });
-     var Fz = sz(4488);
-     const Wz = Fz.Howler,
-       Xz = new Map;
-     let Oz = 0;
-     const oz = {
-         song: 0,
-         sheet: 0
-       },
- ... (57 more removed lines; see GitHub link above)
+       return (0, Sv.g)().physics[pv][1]
```

#### 57. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L854` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L786) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L854)

```diff
-   36197: (zz, tz, sz) => {
+   36269: (vv, zv, Pv) => {
```

#### 58. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L856` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L788) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L856)

```diff
-       d: () => rz
+       c: () => Fv
```

#### 59. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L858-L864` → after: `L790-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L790-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L790-L797) · [Before (L858-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L858-L864)

```diff
-     var Fz = sz(36199),
-       Wz = sz(201),
-       Xz = sz(4488),
-       Oz = sz(35947),
-       oz = sz(36215),
-       vz = sz(36201),
-       Uz = sz(330),
+     var hv = Pv(36271),
+       Sv = Pv(185),
+       ev = Pv(4603),
+       gv = Pv(36279),
+       pv = Pv(35980),
+       dv = Pv(36314),
+       Nv = Pv(36284),
+       lv = Pv(327),
```

#### 60. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L866-L871` → after: `L799-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L799-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L799-L806) · [Before (L866-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L866-L871)

```diff
-       uz = sz(1191),
-       Nz = sz(2555),
-       bz = sz(36210),
-       wz = sz(34),
-       Dz = sz(30),
-       gz = sz(36204);
+       Wv = Pv(1184),
+       wv = Pv(2599),
+       av = Pv(36310),
+       sv = Pv(26),
+       Cv = Pv(22),
+       iv = Pv(36290),
+       cv = Pv(36292),
+       Gv = Pv(36299);
```

#### 61. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L893` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L828) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L893)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, vz ? (tz = (0, Fz.e)(sz), this._spriteTrackSrc = tz) : tz = {
+         this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, this._unloaded = !1, gv ? (zv = (0, hv.f)(Pv), this._spriteTrackSrc = zv) : zv = {
```

#### 62. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L895` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L830) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L895)

```diff
-         }, this._volumeMultiplier = new oz.h, this._volumeMultiplier.setMultiplierType("persistentScalar", Wz), this._howl = (0, Oz.countDecodesAs)(new Xz.Howl({
+         }, this._volumeMultiplier = new dv.j, this._volumeMultiplier.setMultiplierType("persistentScalar", Sv), this._howl = (0, pv.countDecodesAs)(new ev.Howl({
```

#### 63. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L914-L916` → after: `L849-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L849-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L849-L860) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L914-L916)

```diff
-           stop: () => (this._howl.stop(zz), Xz),
-           fade: (tz, sz, Fz) => (this._howl.fade(tz, sz, Fz, zz), Xz),
-           rate: tz => (this._howl.rate(tz, zz), Xz),
+           stop: () => {
+             var zv;
+             return null === (zv = this.liveHowl()) || void 0 === zv || zv.stop(vv), ev
+           },
+           fade: (zv, Pv, hv) => {
+             var Sv;
+             return null === (Sv = this.liveHowl()) || void 0 === Sv || Sv.fade(zv, Pv, hv, vv), ev
+           },
+           rate: zv => {
+             var Pv;
+             return null === (Pv = this.liveHowl()) || void 0 === Pv || Pv.rate(zv, vv), ev
+           },
```

#### 64. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L927` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L872) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L927)

```diff
-             return Wz = Dz.b.get("soundOnFromAd") ? tz : 0, this._howl.volume(Math.min(1, Wz * this._volumeMultiplier.getTotalMultipliedVal()), zz), Xz
+             return Sv = Cv.c.get("soundOnFromAd") ? zv : 0, null === (Pv = this.liveHowl()) || void 0 === Pv || Pv.volume(Math.min(1, Sv * this._volumeMultiplier.getTotalMultipliedVal()), vv), ev
```

#### 65. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L952` → after: `L897-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L897-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L897-L900) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L952)

```diff
-           setPosition: tz => (this._howl.pos(tz[2], tz[1], tz[0], zz), Xz)
+           setPosition: zv => {
+             var Pv;
+             return null === (Pv = this.liveHowl()) || void 0 === Pv || Pv.pos(zv[2], zv[1], zv[0], vv), ev
+           }
```

#### 66. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L968` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L927) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L968)

```diff
-           refDistance: vz = bz.f,
+           refDistance: dv = av.e,
```

#### 67. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L971` → after: `L930-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L930-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L930-L932) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L971)

```diff
-         this._howl.pannerAttr({
+         const lv = this.liveHowl();
+         if (null === lv) return;
+         lv.pannerAttr({
```

#### 68. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L984` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L945) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L984)

```diff
-         this._howl.pannerAttr(Kz, tz)
+         lv.pannerAttr(Tv, zv)
```

#### 69. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L989` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L950) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L989)

```diff
-         this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new gz.e, wz.o.subscribe("appManagerUpdated|soundVolume", (zz => {
+         this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new iv.d, sv.j.subscribe("appManagerUpdated|soundVolume", (vv => {
```

#### 70. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L996` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L957) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L996)

```diff
-         let Xz, Oz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (sz = (0, Nz.e)()) || void 0 === sz ? void 0 : sz.gC,
+         let ev, gv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Pv = (0, wv.g)()) || void 0 === Pv ? void 0 : Pv.sV,
```

#### 71. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L998` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L959) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L998)

```diff
-           Uz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bz.f,
+           dv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : av.e,
```

#### 72. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1001-L1012` → after: `L962-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L962-L964) · [Before (L1001-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1001-L1012)

```diff
-         (0, Nz.e)() ? Xz = !!Array.isArray(Oz) || (0, vz.d)(Oz) !== (null === (wz = (0, Nz.e)()) || void 0 === wz ? void 0 : wz.gC): Xz = !1;
-         const rz = Xz ? this.spatialSheets : this.stereoSheets,
-           Yz = (0, Fz.h)(zz);
-         if (!rz[Yz]) {
-           const zz = new Pz({
-             src: Yz,
-             isSoundSprite: !0,
-             volumeScalar: 1
-           });
-           zz.setGlobalVolume(Dz.b.get("soundVolume")), rz[Yz] = zz
-         }
-         const xz = rz[Yz];
+         (0, wv.g)() ? ev = !!Array.isArray(gv) || (0, Nv.b)(gv) !== (null === (Wv = (0, wv.g)()) || void 0 === Wv ? void 0 : Wv.sV): ev = !1;
+         const sv = (0, hv.i)(vv),
+           Cv = this.loadSheet(ev ? this.spatialSheets : this.stereoSheets, sv);
```

#### 73. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1017-L1019` → after: `L969-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L969-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L969-L971) · [Before (L1017-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1017-L1019)

```diff
-         const mz = (0, Nz.e)(),
-           Jz = Array.isArray(Oz) ? Oz : mz.Qr.yB(Oz),
-           Iz = mz.Qr.yB(mz.gC);
+         const cv = (0, wv.g)(),
+           Gv = Array.isArray(gv) ? gv : cv.Rm.yG(gv),
+           fv = cv.Rm.yG(cv.sV);
```

#### 74. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1024-L1025` → after: `L976-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L976-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L976-L977) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1024-L1025)

```diff
-               group: Hz.has(Yz) ? null : (0, gz.m)(zz),
-               loudness: (0, gz.i)(tz, Kz().xo(Jz, Iz), Uz),
+               group: mv.has(sv) ? null : (0, iv.k)(vv),
+               loudness: (0, iv.g)(zv, Tv().Mg(Gv, fv), dv),
```

#### 75. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1029` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L981) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1029)

```diff
-                 return null !== (zz = null === (tz = Cz) || void 0 === tz ? void 0 : tz.getDurationMs()) && void 0 !== zz ? zz : 0
+                 return null !== (vv = null === (zv = Fv) || void 0 === zv ? void 0 : zv.getDurationMs()) && void 0 !== vv ? vv : 0
```

#### 76. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1047` → after: `L999-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L999-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L999-L1014) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1047)

```diff
-         }), Cz.setPosition([Jz[0], Jz[1] + Wz.d.jH * Wz.d.playerEyeToHeightRatio, Jz[2]]), Cz
+         }), Fv.setPosition([Gv[0], Gv[1] + Sv.f.lG * Sv.f.playerEyeToHeightRatio, Gv[2]]), Fv
+       }
+       preload(vv) {
+         this.loadSheet(this.stereoSheets, (0, hv.i)(vv))
+       }
+       loadSheet(vv, zv) {
+         let Pv = vv[zv];
+         return Pv || ((0, Gv.d)(zv), Pv = new fv({
+           src: zv,
+           isSoundSprite: !0,
+           volumeScalar: 1
+         }), Pv.setGlobalVolume(Cv.c.get("soundVolume")), vv[zv] = Pv), Pv
+       }
+       freeSheetsAfterGame() {
+         for (const vv of [this.stereoSheets, this.spatialSheets])
+           for (const [zv, Pv] of Object.entries(vv)) !cv.b.has(zv) && Pv.loaded() && (Pv.unloadOnceIdle(), delete vv[zv])
```

#### 77. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1051` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1018) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1051)

```diff
-   36261: (zz, tz, sz) => {
+   36357: (vv, zv, Pv) => {
```

#### 78. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1057` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1024) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1057)

```diff
-       e: () => Fz
+       c: () => hv
```

#### 79. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1060` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1027) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1060)

```diff
-   36339: (zz, tz, sz) => {
+   36443: (vv, zv, Pv) => {
```

#### 80. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1078-L1080` → after: `L1045-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1045-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1045-L1047) · [Before (L1078-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1078-L1080)

```diff
-       i: () => Fz,
-       l: () => Xz,
-       m: () => Wz
+       h: () => hv,
+       k: () => ev,
+       n: () => Sv
```

#### 81. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1083` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1050) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1083)

```diff
-   36336: (zz, tz, sz) => {
+   36434: (vv, zv, Pv) => {
```

#### 82. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1085` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1052) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1085)

```diff
-       c: () => Uz
+       b: () => Nv
```

#### 83. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1087-L1088` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1054-L1055) · [Before (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1087-L1088)

```diff
-     var Fz = sz(36339),
-       Wz = sz(8940);
+     var hv = Pv(36443),
+       Sv = Pv(9101);
```

#### 84. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1093` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1060) · [Before (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1093)

```diff
-     for (const Kz of Object.keys(Wz.l))(0, Fz.i)(Kz) ? Xz.push(Kz) : (0, Fz.m)(Kz) && Oz.push(Kz), (0, Fz.l)(Kz) && oz.push(Kz), (Kz.includes(" Bed Head") || Kz.includes(" Strongbed Head")) && vz.push(Kz);
+     for (const lv of Object.keys(Sv.k))(0, hv.h)(lv) ? ev.push(lv) : (0, hv.n)(lv) && gv.push(lv), (0, hv.k)(lv) && pv.push(lv), (lv.includes(" Bed Head") || lv.includes(" Strongbed Head")) && dv.push(lv);
```

#### 85. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1103` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1070) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1103)

```diff
-   6057: (zz, tz, sz) => {
+   6192: (vv, zv, Pv) => {
```

#### 86. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1109-L1110` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1075-L1077) · [Before (L1109-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1109-L1110)

```diff
-       o: () => Uz,
-       r: () => Fz,
+       n: () => ev,
+       p: () => Nv,
+       s: () => hv,
```

#### 87. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L1136` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/113.js#L1103) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/113.js#L1136)

```diff
-   8821: () => {}
+   8975: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/114.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/114.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731)

#### 1. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/114.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/114.js#L4)

```diff
-   6065: (zz, tz, sz) => {
+   6199: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L161` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/114.js#L162) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/114.js#L161)

```diff
-       _shopVersion: sz(1888).e,
+       _shopVersion: Pv(1908).d,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/115.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/115.js` (158 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387)

#### 1. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115, 389];
+ export const ids = [115, 390];
```

#### 2. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L4)

```diff
-   35848: (zz, tz, sz) => {
+   35895: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L8-L18)

```diff
-     var Fz = sz(308),
-       Wz = sz(3169),
-       Xz = sz(3215),
-       Oz = sz(3208),
-       oz = sz(3202),
-       vz = sz(1173),
-       Uz = sz(44),
-       Kz = sz(1664),
-       uz = sz(1333),
-       Nz = sz(1419),
-       bz = sz(1020),
+     var hv = Pv(302),
+       Sv = Pv(3258),
+       ev = Pv(3301),
+       gv = Pv(3295),
+       pv = Pv(3289),
+       dv = Pv(1175),
+       Nv = Pv(39),
+       lv = Pv(1692),
+       Tv = Pv(1344),
+       Wv = Pv(1442),
+       wv = Pv(1035),
```

#### 4. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L20-L39` → after: `L20-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L20-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L20-L38) · [Before (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L20-L39)

```diff
-       Dz = sz(1622),
-       gz = sz(65),
-       Hz = sz(78),
-       Bz = sz(2253),
-       Pz = sz(1297),
-       rz = sz(1558),
-       Yz = sz(1116),
-       xz = sz(3076),
-       mz = sz(4191),
-       Jz = sz(3160),
-       Iz = sz(3163),
-       Cz = sz(1831),
-       ez = sz(3166),
-       Zz = sz(1673),
-       Gz = sz(1466),
-       Tz = sz(2075),
- ... (4 more removed lines; see GitHub link above)
+       sv = Pv(1647),
+       Cv = Pv(52),
+       iv = Pv(62),
+       cv = Pv(2277),
+       Gv = Pv(1311),
+       mv = Pv(1595),
+       jv = Pv(1108),
+       fv = Pv(3156),
+       Fv = Pv(4310),
+       Yv = Pv(3241),
+       nv = Pv(1858),
+       Ov = Pv(3256),
+       Dv = Pv(1703),
+       Kv = Pv(1482),
+       Vv = Pv(2097),
+       Uv = Pv(1327),
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L50` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L49) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L50)

```diff
-       } = (0, vz.B)(), Wz = Zz.h[sz], [Xz, Oz] = (0, gz.useState)((() => Date.now() >= Wz.endsAt.getTime())), [oz, Uz] = (0, gz.useState)("overall"), Kz = function(zz, tz) {
+       } = (0, dv.x)(), Sv = Dv.h[Pv], [ev, gv] = (0, Cv.useState)((() => Date.now() >= Sv.endsAt.getTime())), [pv, Nv] = (0, Cv.useState)("overall"), lv = function(vv, zv) {
```

#### 6. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L54` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L53) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L54)

```diff
-         } = (0, Yz.b)(), Wz = `${zz}:${tz}`, [Xz, Oz] = (0, gz.useState)({
+         } = (0, jv.d)(), Sv = `${vv}:${zv}`, [ev, gv] = (0, Cv.useState)({
```

#### 7. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L65` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L64) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L65)

```diff
-               const Fz = await Gz.d.getGameEventLeaderboard(sz, {
+               const hv = await Kv.e.getGameEventLeaderboard(Pv, {
```

#### 8. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L77` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L76) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L77)

```diff
-               oz || Oz((zz => zz.requestKey === Wz && "loaded" === zz.leaderboard.status ? zz : {
+               pv || gv((vv => vv.requestKey === Sv && "loaded" === vv.leaderboard.status ? vv : {
```

#### 9. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L122` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L121) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L122)

```diff
-       }(Kz), bz = Tz.f[`profileEffect_${Wz.prizePack}`];
+       }(lv), wv = Vv.f[`profileEffect_${Sv.prizePack}`];
```

#### 10. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L125` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L124) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L125)

```diff
-         Hz = null !== (tz = null === Dz || void 0 === Dz ? void 0 : Dz.entries) && void 0 !== tz ? tz : null,
+         iv = null !== (zv = null === sv || void 0 === sv ? void 0 : sv.entries) && void 0 !== zv ? zv : null,
```

#### 11. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L181` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L180) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L181)

```diff
-               }), (0, yz.jsx)(Az.b, {
+               }), (0, tv.jsx)(xv.c, {
```

#### 12. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L183` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L182) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L183)

```diff
-                 options: Zz.e.map((zz => ({
+                 options: Dv.d.map((vv => ({
```

#### 13. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L185` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L184) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L185)

```diff
-                   label: Fz(`gameEvents:${zz}Scope`)
+                   label: hv(`gameEvents:${vv}Scope`)
```

#### 14. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L192` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L191) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L192)

```diff
-               children: (0, yz.jsx)(cz.d, {})
+               children: (0, tv.jsx)(Uv.c, {})
```

#### 15. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L213` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L212) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L213)

```diff
-                     children: (0, yz.jsx)(jz.g, {
+                     children: (0, tv.jsx)(Rv.e, {
```

#### 16. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L256` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L255) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L256)

```diff
-       } = (0, vz.B)(), Wz = null !== sz && tz.prizeGoals.some(((zz, tz) => sz[tz] >= zz.target));
+       } = (0, dv.x)(), Sv = null !== Pv && zv.prizeGoals.some(((vv, zv) => Pv[zv] >= vv.target));
```

#### 17. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L282` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L281) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L282)

```diff
-                       width: (null !== Wz && void 0 !== Wz ? Wz : 0) / zz.target * 100 + "%"
+                       width: (null !== Sv && void 0 !== Sv ? Sv : 0) / vv.target * 100 + "%"
```

#### 18. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L295-L299` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L294-L298) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L295-L299)

```diff
-     var kz = sz(1511),
-       iz = sz(1546),
-       Lz = sz(1012),
-       lz = sz(699),
-       nz = sz(3158);
+     var Av = Pv(1534),
+       Lv = Pv(1578),
+       Hv = Pv(1024),
+       Mv = Pv(721),
+       yv = Pv(3236);
```

#### 19. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L305` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L304) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L305)

```diff
-       const sz = (0, kz.y)(tz),
+       const Pv = (0, Av.M)(zv),
```

#### 20. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L310` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L309) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L310)

```diff
-           return (0, iz.i)(sz).then((tz => {
+           return (0, Lv.e)(Pv).then((zv => {
```

#### 21. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L313` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L312) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L313)

```diff
-             console.error(`Failed to load the page copy for ${sz.name}`, zz)
+             console.error(`Failed to load the page copy for ${Pv.name}`, vv)
```

#### 22. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L318-L320` → after: `L317-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L317-L319) · [Before (L318-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L318-L320)

```diff
-       const Xz = (0, iz.e)(Fz),
-         Oz = new Set((0, Lz.c)((0, lz.h)()).map((zz => (0, kz.v)(zz)))),
-         oz = Fz.similarGames.filter((zz => Oz.has((0, kz.v)(zz))));
+       const ev = (0, Lv.d)(hv),
+         gv = new Set((0, Hv.d)((0, Mv.k)()).map((vv => (0, Av.C)(vv)))),
+         pv = hv.similarGames.filter((vv => gv.has((0, Av.C)(vv))));
```

#### 23. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L382` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L381) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L382)

```diff
-                 children: (0, yz.jsx)(nz.g, {
+                 children: (0, tv.jsx)(yv.i, {
```

#### 24. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L397-L418` → after: `L396-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L396-L418) · [Before (L397-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L397-L418)

```diff
-     var qz = sz(1036),
-       Sz = sz(106),
-       Vz = sz(1120),
-       Rz = sz(8900),
-       pz = sz(1594),
-       fz = sz(1493),
-       Ez = sz(1483),
-       zt = sz(1550),
-       tt = sz(1430),
-       st = sz(1319),
-       Ft = sz(35856),
-       Wt = sz(1220),
-       Xt = sz(991),
-       Ot = sz(321),
-       ot = sz(1001),
-       vt = sz(1506),
- ... (6 more removed lines; see GitHub link above)
+     var Jv = Pv(1042),
+       Ev = Pv(73),
+       ov = Pv(1114),
+       bv = Pv(9054),
+       rv = Pv(1622),
+       kv = Pv(1505),
+       Xv = Pv(1492),
+       uv = Pv(1592),
+       vz = Pv(1447),
+       zz = Pv(1336),
+       Pz = Pv(35899),
+       hz = Pv(1221),
+       Sz = Pv(1002),
+       ez = Pv(312),
+       gz = Pv(1011),
+       pz = Pv(1529),
+ ... (7 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L425-L426` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L425-L426) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L425-L426)

```diff
-       const Fz = null === tz ? null : (0, Xz.e)(tz, "small"),
-         Oz = (0, Wz.e)(null !== Fz && void 0 !== Fz ? Fz : Xz.o);
+       const hv = null === zv ? null : (0, ev.g)(zv, "small"),
+         gv = (0, Sv.f)(null !== hv && void 0 !== hv ? hv : ev.r);
```

#### 26. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L431)

```diff
-         children: (0, yz.jsx)(qz.c, {
+         children: (0, tv.jsx)(Jv.b, {
```

#### 27. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L435-L436` → after: `L435-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L435-L436) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L435-L436)

```diff
-         className: wz()("FeaturedGamesPopupSlotThumbnail", oz.h),
-         style: (0, oz.f)(Oz),
+         className: av()("FeaturedGamesPopupSlotThumbnail", pv.g),
+         style: (0, pv.e)(gv),
```

#### 28. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L439)

```diff
-         children: (0, yz.jsx)(oz.d, {
+         children: (0, tv.jsx)(pv.b, {
```

#### 29. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L452-L453` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L452-L453) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L452-L453)

```diff
-       } = (0, Yz.b)(), Xz = (0, Iz.d)(), [Oz, oz] = (0, gz.useState)(null), [vz, Uz] = (0, gz.useState)(null), [Kz, uz] = (0, gz.useState)(!1), bz = (0, gz.useCallback)((() => {
-         Uz(null), Gz.d.getFeaturedGames(Wz).then((zz => {
+       } = (0, jv.d)(), ev = (0, az.b)(), [gv, pv] = (0, Cv.useState)(null), [dv, Nv] = (0, Cv.useState)(null), [lv, Tv] = (0, Cv.useState)(!1), wv = (0, Cv.useCallback)((() => {
+         Nv(null), Kv.e.getFeaturedGames(Sv).then((vv => {
```

#### 30. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L463)

```diff
-         Kz || (uz(!0), Gz.d.setFeaturedGame(Wz, zz, tz).then((() => {
+         lv || (Tv(!0), Kv.e.setFeaturedGame(Sv, vv, zv).then((() => {
```

#### 31. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L478)

```diff
-           children: (0, yz.jsx)(cz.d, {})
+           children: (0, tv.jsx)(Uv.c, {})
```

#### 32. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L490)

```diff
-                 } = Fz.M[zz.slotId];
+                 } = hv.D[vv.slotId];
```

#### 33. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L500)

```diff
-                     children: [(0, Fz.jb)(Xz), " \xb7 position", " ", (0, Fz.O)(zz.slotId, Fz.Pb) + 1, " of", " ", (0, Fz.Nb)(Xz, Fz.Pb)]
+                     children: [(0, hv.eb)(ev), " \xb7 position", " ", (0, hv.E)(vv.slotId, hv.Ab) + 1, " of", " ", (0, hv.zb)(ev, hv.Ab)]
```

#### 34. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L509)

```diff
-                     children: [(0, yz.jsx)(qz.c, {
+                     children: [(0, tv.jsx)(Jv.b, {
```

#### 35. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L515)

```diff
-                   children: [Wz && (0, yz.jsxs)(Nz.t, {
+                   children: [Sv && (0, tv.jsxs)(Wv.l, {
```

#### 36. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L521)

```diff
-                     children: [(0, yz.jsx)(qz.c, {
+                     children: [(0, tv.jsx)(Jv.b, {
```

#### 37. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L524)

```diff
-                   }), !Wz && !sz && (0, yz.jsxs)(Nz.Q, {
+                   }), !Sv && !Pv && (0, tv.jsxs)(Wv.K, {
```

#### 38. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L530)

```diff
-                     children: [(0, yz.jsx)(qz.c, {
+                     children: [(0, tv.jsx)(Jv.b, {
```

#### 39. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L533)

```diff
-                   }), !Wz && (0, yz.jsxs)(Nz.H, {
+                   }), !Sv && (0, tv.jsxs)(Wv.A, {
```

#### 40. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L539)

```diff
-                     children: [(0, yz.jsx)(qz.c, {
+                     children: [(0, tv.jsx)(Jv.b, {
```

#### 41. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L553-L560` → after: `L553-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L553-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L553-L589) · [Before (L553-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L553-L560)

```diff
-     var Ht = sz(4321),
-       Bt = sz(4235),
-       Pt = sz(4240),
-       rt = sz(4261),
-       Yt = sz(4210),
-       xt = sz(3243),
-       mt = sz(8410),
-       Jt = sz(220);
+     var iz = Pv(4437),
+       cz = Pv(4351),
+       Gz = Pv(3329);
+     const mz = 8,
+       jz = 12;
+ 
+     function fz(vv) {
+       let {
+         customLobbies: zv,
+         favouriteLobbies: Pv,
+         toggleLikeLobby: hv,
+         showReport: Sv
+       } = vv;
+       const [ev, gv] = (0, Cv.useState)(mz);
+       return (0, Cv.useEffect)((() => {
+         if (ev >= zv.length) return;
+ ... (21 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L562` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L591) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L562)

```diff
-       skyblock: [sz(35887).d]
+       skyblock: [Pv(35922).d]
```

#### 43. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L564` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L593) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L564)

```diff
-     var Ct = sz(580);
+     var Uz = Pv(626);
```

#### 44. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L567` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L596) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L567)

```diff
-       backgroundImage: Xz.o,
+       backgroundImage: ev.r,
```

#### 45. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L584` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L613) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L584)

```diff
-       const sz = Nt.i[zz.schematicId];
+       const Pv = Tz.h[vv.schematicId];
```

#### 46. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L587` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L616) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L587)

```diff
-         backgroundImage: (0, Xz.e)(zz, "large"),
+         backgroundImage: (0, ev.g)(vv, "large"),
```

#### 47. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L606` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L635) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L606)

```diff
-       return null !== (tz = null !== (sz = (0, Jt.l)() ? function(zz) {
+       return null !== (zv = null !== (Pv = (0, Kz.m)() ? function(vv) {
```

#### 48. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L608` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L637) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L608)

```diff
-           const Fz = [tz, ...sz.map((zz => (0, Ot.Pb)(tz, zz)))];
+           const hv = [zv, ...Pv.map((vv => (0, ez.Lb)(zv, vv)))];
```

#### 49. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L612` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L641) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L612)

```diff
-       }(zz) : null) && void 0 !== sz ? sz : null === (Fz = Nt.e[zz]) || void 0 === Fz ? void 0 : Fz.listedVariations) && void 0 !== tz ? tz : null
+       }(vv) : null) && void 0 !== Pv ? Pv : null === (hv = Tz.e[vv]) || void 0 === hv ? void 0 : hv.listedVariations) && void 0 !== zv ? zv : null
```

#### 50. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L618-L619` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L647-L648) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L618-L619)

```diff
-       } = (0, fz.C)();
-       if ((0, gz.useEffect)(xt.s, []), zz && (0, Wt.s)(zz)) return (0, yz.jsx)(ct, {
+       } = (0, kv.B)();
+       if ((0, Cv.useEffect)(Oz.u, []), vv && (0, hz.n)(vv)) return (0, tv.jsx)(Iz, {
```

#### 51. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L622` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L651) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L622)

```diff
-       const tz = zz && (0, Xt.n)(zz) ? zz : "firstParty";
+       const zv = vv && (0, Sz.l)(vv) ? vv : "firstParty";
```

#### 52. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L633` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L662) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L633)

```diff
-       } = (0, Yz.b)(), Wz = (0, gz.useMemo)((() => (0, pz.f)(tz)), [tz]);
+       } = (0, jv.d)(), Sv = (0, Cv.useMemo)((() => (0, rv.f)(zv)), [zv]);
```

#### 53. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L637-L638` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L666-L667) · [Before (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L637-L638)

```diff
-         (null !== zz ? Gz.d.getGame(zz, Wz.schematicId) : Vz.userContextManager.getCurrentUserContext().then((zz => Gz.d.getGame(zz, Wz.schematicId)))).catch((zz => {
-           console.error(`Failed to get the custom game ${Wz.schematicId}`, zz), (0, pz.e)(tz)
+         (null !== vv ? Kv.e.getGame(vv, Sv.schematicId) : ov.userContextManager.getCurrentUserContext().then((vv => Kv.e.getGame(vv, Sv.schematicId)))).catch((vv => {
+           console.error(`Failed to get the custom game ${Sv.schematicId}`, vv), (0, rv.c)(zv)
```

#### 54. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L641` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L670) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L641)

```diff
-       const [Xz, Oz] = (0, gz.useState)(null), oz = (0, Rz.e)();
+       const [ev, gv] = (0, Cv.useState)(null), pv = (0, bv.c)();
```

#### 55. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L645` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L674) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L645)

```diff
-         return Gz.d.getGameByUrlId(sz, tz).then((sz => {
+         return Kv.e.getGameByUrlId(Pv, zv).then((Pv => {
```

#### 56. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L651` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L680) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L651)

```diff
-           console.error(`Failed to find the custom game with urlId ${tz}`, sz), zz && (0, Ez.navigateToHomePage)()
+           console.error(`Failed to find the custom game with urlId ${zv}`, Pv), vv && (0, Xv.navigateToHomePage)()
```

#### 57. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L656-L658` → after: `L685-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L685-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L685-L687) · [Before (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L656-L658)

```diff
-       const vz = null !== Wz && void 0 !== Wz ? Wz : (null === Xz || void 0 === Xz ? void 0 : Xz.urlId) === tz ? Xz.game : null;
-       return null === vz ? (0, yz.jsx)(cz.d, {}) : oz ? (0, yz.jsx)(jt, {
-         gameNameWithVariation: (0, Xt.t)(vz.schematicId),
+       const dv = null !== Sv && void 0 !== Sv ? Sv : (null === ev || void 0 === ev ? void 0 : ev.urlId) === zv ? ev.game : null;
+       return null === dv ? (0, tv.jsx)(Uv.c, {}) : pv ? (0, tv.jsx)(Qz, {
+         gameNameWithVariation: (0, Sz.u)(dv.schematicId),
```

#### 58. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L671-L673` → after: `L700-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L700-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L700-L702) · [Before (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L671-L673)

```diff
-       } = (0, vz.B)();
-       (0, ut.e)();
-       const iz = (0, ut.k)(),
+       } = (0, dv.x)();
+       (0, lz.g)();
+       const Lv = (0, lz.o)(),
```

#### 59. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L677-L678` → after: `L706-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L706-L707) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L677-L678)

```diff
-         } = (0, Yz.b)(),
-         nz = (0, Yt.i)(),
+         } = (0, jv.d)(),
+         yv = (0, nz.h)(),
```

#### 60. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L680` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L709) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L680)

```diff
-         Rz = (0, fz.C)(),
+         bv = (0, kv.B)(),
```

#### 61. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L684` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L713) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L684)

```diff
-         tt = (0, Ut.c)(pz),
+         vz = (0, dz.b)(rv),
```

#### 62. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L690` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L719) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L690)

```diff
-             const Wz = Uz.f.getItem((0, Bz.l)(zz));
+             const Sv = Nv.h.getItem((0, cv.i)(vv));
```

#### 63. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L692` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L721) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L692)

```diff
-             return null !== (tz = null === (sz = Nt.e[zz]) || void 0 === sz ? void 0 : sz.defaultListedVariation) && void 0 !== tz ? tz : Fz[0]
+             return null !== (zv = null === (Pv = Tz.e[vv]) || void 0 === Pv ? void 0 : Pv.defaultListedVariation) && void 0 !== zv ? zv : hv[0]
```

#### 64. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L694` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L723) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L694)

```diff
-           return zz === tt.gameNameWithVariation ? tt : {
+           return vv === vz.gameNameWithVariation ? vz : {
```

#### 65. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L701` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L730) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L701)

```diff
-         Wt.gameNameWithVariation !== zz && zz !== (0, Ot.Tb)(zz) && Vz((0, kz.w)(Wt.gameNameWithVariation), {
+         hz.gameNameWithVariation !== vv && vv !== (0, ez.Pb)(vv) && ov((0, Av.G)(hz.gameNameWithVariation), {
```

#### 66. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L705-L739` → after: `L734-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L734-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L734-L781) · [Before (L705-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L705-L739)

```diff
-       const Dt = (0, Iz.d)(),
-         [xt, Jt] = (0, gz.useState)(""),
-         It = gz.useRef(null),
-         [Tt, ct] = (0, gz.useState)(),
-         jt = (0, Xt.n)(Wt.gameNameWithVariation),
-         yt = (0, gz.useMemo)((() => jt ? null : function(zz, tz, sz) {
-           var Fz, Wz;
-           const Oz = Nt.e[zz];
-           return (0, Ct.G)(Oz) ? null : {
-             listedVariations: Gt(zz),
-             backgroundImage: (0, Xz.m)(zz, (0, Xz.c)(Oz)),
-             badges: (0, Kz.filterBadges)(Oz.badges),
-             category: Oz.type,
-             title: sz(Oz.title),
-             variationTitle: Oz.variationTitle ? sz(Oz.variationTitle) : null,
-             description: sz(Oz.description),
- ... (19 more removed lines; see GitHub link above)
+       const [az, sz] = (0, Cv.useState)(""), Gz = Cv.useRef(null), [mz, jz] = (0, Cv.useState)(), Oz = (0, Sz.l)(hz.gameNameWithVariation), Kz = (0, Cv.useMemo)((() => Oz ? null : function(vv, zv, Pv) {
+         var hv, Sv;
+         const gv = Tz.e[vv];
+         return (0, Uz.N)(gv) ? null : {
+           listedVariations: tz(vv),
+           backgroundImage: (0, ev.l)(vv, (0, ev.d)(gv)),
+           badges: (0, lv.filterBadges)(gv.badges),
+           category: gv.type,
+           title: Pv(gv.title),
+           variationTitle: gv.variationTitle ? Pv(gv.variationTitle) : null,
+           description: Pv(gv.description),
+           ownerSocialPreviewWithoutLocation: null,
+           ccu: null !== zv ? null !== (hv = zv[vv]) && void 0 !== hv ? hv : 0 : null,
+           favourites: null,
+           isFavourite: null,
+           useRejoinLastLobbyButton: gv.useRejoinLastLobbyButton,
+ ... (32 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L742-L780` → after: `L784-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L784-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L784-L792) · [Before (L742-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L742-L780)

```diff
-         } = (0, gz.useMemo)((() => function(zz, tz, sz, Fz) {
-           var Wz;
-           const Xz = zz => {
-               const sz = (0, Xt.r)(zz),
-                 Fz = tz.find((tz => "custom" === tz.type ? tz.schematicId === sz : tz.gameNameWithVariation === zz));
-               return Fz ? [...Fz.recentLobbies] : []
-             },
-             Oz = (0, Kz.getRecentGameNameWithVariationLobbiesKey)(zz),
-             oz = null !== (Wz = Uz.f.getItem(Oz)) && void 0 !== Wz ? Wz : [],
-             vz = [...Xz(zz), ...oz],
-             uz = [];
-           for (const Uz of vz)(0, bt.L)(Uz) && !uz.includes(Uz) && uz.push(Uz);
-           let Nz = vz;
-           if (sz) {
-             const zz = Xz("classic_worlds"),
-               tz = vz.filter((tz => !zz.includes(tz)));
- ... (23 more removed lines; see GitHub link above)
+         }
+       }(hz.gameNameWithVariation, yv, Az.showWorldsInsteadOfCustomLobbies, Az.canCreateCustomLobbies)), [hz.gameNameWithVariation, yv, Az.showWorldsInsteadOfCustomLobbies, Az.canCreateCustomLobbies]), [Bz, Jz] = (0, Cv.useState)(!0), [Ez, oz] = (0, Cv.useState)([]), [bz, rz] = (0 … [truncated]
+         (0, iv.unstable_batchedUpdates)((() => {
+           jz(vv), Qz((zv => ({
+             ...xz(vv, Zv),
+             isFavourite: zv.isFavourite
+           })))
+         }))
+       }), [Zv]);
```

#### 68. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L782` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L794) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L782)

```diff
-         null === Kt.b.get("gameEntrySource") && (0, Kt.e)("gameInformationPageDirect")
+         null === Nz.c.get("gameEntrySource") && (0, Nz.g)("gameInformationPageDirect")
```

#### 69. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L800` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L812) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L800)

```diff
-       })), (0, mz.b)(Ez.navigateToHomePage);
+       })), (0, Fv.c)(Xv.navigateToHomePage);
```

#### 70. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L805-L806` → after: `L817-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L817-L818) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L805-L806)

```diff
-         vs = null !== (sz = null === (Oz = kt.badges.find((zz => "event" === zz.type))) || void 0 === Oz ? void 0 : Oz.event) && void 0 !== sz ? sz : null,
-         Us = Xs ? Nz.p : Nz.h,
+         gP = null !== (Pv = null === (gv = Az.badges.find((vv => "event" === vv.type))) || void 0 === gv ? void 0 : gv.event) && void 0 !== Pv ? Pv : null,
+         pP = hP ? Wv.j : Wv.d,
```

#### 71. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L822` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L834) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L822)

```diff
-                 children: [(0, yz.jsx)(qz.c, {
+                 children: [(0, tv.jsx)(Jv.b, {
```

#### 72. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L832-L833` → after: `L844-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L844-L845) · [Before (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L832-L833)

```diff
-         const tz = (0, Xt.r)(Wt.gameNameWithVariation);
-         return Gz.d.getGame(Lz, tz).then((tz => {
+         const zv = (0, Sz.q)(hz.gameNameWithVariation);
+         return Kv.e.getGame(Hv, zv).then((zv => {
```

#### 73. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L837` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L849) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L837)

```diff
-         })), Gz.d.getFavouriteGames(Lz).then((sz => {
+         })), Kv.e.getFavouriteGames(Hv).then((Pv => {
```

#### 74. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L851` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L863) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L851)

```diff
-         (0, mt.e)(), Vz((0, Pz.c)(Wt.gameNameWithVariation, zz))
+         (0, Dz.g)(), ov((0, Gv.e)(hz.gameNameWithVariation, vv))
```

#### 75. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L855` → after: `L867-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L867-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L867-L869) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L855)

```diff
-         !1 !== kt.canCreateCustomLobbies && null !== kt.showWorldsInsteadOfCustomLobbies && !1 === lz && (St(!0), Gz.d.getFavouriteLobbies(Lz).then((zz => {
+         if (!1 === Az.canCreateCustomLobbies) return;
+         let vv = !0;
+         return null !== Az.showWorldsInsteadOfCustomLobbies && !1 === Mv && (Jz(!0), Kv.e.getFavouriteLobbies(Hv).then((vv => {
```

#### 76. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L857` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L871) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L857)

```diff
-         })), Gz.d.getOpenCustomLobbies(Lz, {
+         })), Kv.e.getOpenCustomLobbies(Hv, {
```

#### 77. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L862-L866` → after: `L876-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L876-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L876-L884) · [Before (L862-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L862-L866)

```diff
-           Dt.current && Rt(zz)
-         })).catch((zz => {})).finally((() => {
-           Dt.current && St(!1)
-         })))
-       }), [lz, Wt, Et, kt.showWorldsInsteadOfCustomLobbies, kt.canCreateCustomLobbies, Dt, Lz]);
+           vv && (0, iv.unstable_batchedUpdates)((() => {
+             oz(zv), Jz(!1)
+           }))
+         })).catch((zv => {
+           console.error("Failed to get open custom lobbies", zv), vv && Jz(!1)
+         }))), () => {
+           vv = !1
+         }
+       }), [Mv, hz, kz, Az.showWorldsInsteadOfCustomLobbies, Az.canCreateCustomLobbies, Hv]);
```

#### 78. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L870` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L888) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L870)

```diff
-             pt.includes(zz) ? (Gz.d.unfavouriteLobby(Lz, zz), ft(pt.filter((tz => tz !== zz)))) : (Gz.d.favouriteLobby(Lz, zz).catch((zz => {
+             bz.includes(vv) ? (Kv.e.unfavouriteLobby(Hv, vv), rz(bz.filter((zv => zv !== vv)))) : (Kv.e.favouriteLobby(Hv, vv).catch((vv => {
```

#### 79. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L877-L879` → after: `L895-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L895-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L895-L897) · [Before (L877-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L877-L879)

```diff
-         ws = (null === Tt || void 0 === Tt ? void 0 : Tt.schematicId) === (0, Xt.r)(tt.gameNameWithVariation) ? Tt : null,
-         Ds = ws && (0, kz.z)(tt.gameNameWithVariation, (zz => Qz(zz)), ws);
-       (0, zt.h)(ws && (0, kz.w)(tt.gameNameWithVariation, ws));
+         WP = (null === mz || void 0 === mz ? void 0 : mz.schematicId) === (0, Sz.q)(vz.gameNameWithVariation) ? mz : null,
+         wP = WP && (0, Av.N)(vz.gameNameWithVariation, (vv => Zv(vv)), WP);
+       (0, uv.g)(WP && (0, Av.G)(vz.gameNameWithVariation, WP));
```

#### 80. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L893` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L911) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L893)

```diff
-           children: [Ds && (0, yz.jsx)(rz.c, {
+           children: [wP && (0, tv.jsx)(mv.e, {
```

#### 81. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L904-L906` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L922-L924) · [Before (L904-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L904-L906)

```diff
-                   className: wz()("GameInformationTopBackgroundImage", oz.h),
-                   style: (0, oz.f)(Lt),
-                   children: (0, yz.jsx)(oz.d, {
+                   className: av()("GameInformationTopBackgroundImage", pv.g),
+                   style: (0, pv.e)(Hz),
+                   children: (0, tv.jsx)(pv.b, {
```

#### 82. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L912` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L930) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L912)

```diff
-                 children: [(0, yz.jsx)(Ht.e, {}), (0, yz.jsxs)("div", {
+                 children: [(0, tv.jsx)(iz.d, {}), (0, tv.jsxs)("div", {
```

#### 83. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L921-L922` → after: `L939-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L939-L940) · [Before (L921-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L921-L922)

```diff
-                         className: `GameInformationHeaderTag AnimFadeInScaleUp ${zz.type}`,
-                         children: (0, yz.jsx)(ez.b, {
+                         className: `GameInformationHeaderTag AnimFadeInScaleUp ${vv.type}`,
+                         children: (0, tv.jsx)(Ov.e, {
```

#### 84. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L928` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L946) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L928)

```diff
-                           text: (0, Fz.cb)({
+                           text: (0, hv.W)({
```

#### 85. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L936` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L954) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L936)

```diff
-                             str: (0, Fz.gb)(kt.category).toUpperCase()
+                             str: (0, hv.Z)(Az.category).toUpperCase()
```

#### 86. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L941` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L959) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L941)

```diff
-                         children: [(0, yz.jsx)(qz.c, {
+                         children: [(0, tv.jsx)(Jv.b, {
```

#### 87. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L943` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L961) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L943)

```diff
-                         }), (0, bt.R)(kt.ccu), " online"]
+                         }), (0, Wz.X)(Az.ccu), " online"]
```

#### 88. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L948` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L966) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L948)

```diff
-                         }), (0, yz.jsx)(jz.g, {
+                         }), (0, tv.jsx)(Rv.e, {
```

#### 89. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L965` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L983) · [Before (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L965)

```diff
-                       }), null !== kt.favourites && (null !== kt.isFavourite || jt && !Mt) && (0, yz.jsx)(Nz.v, {
+                       }), null !== Az.favourites && (null !== Az.isFavourite || Oz && !Vz) && (0, tv.jsx)(Wv.m, {
```

#### 90. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L969` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L987) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L969)

```diff
-                               const zz = (0, Xt.r)(Wt.gameNameWithVariation);
+                               const vv = (0, Sz.q)(hz.gameNameWithVariation);
```

#### 91. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L971` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L989) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L971)

```diff
-                               kt.isFavourite ? (tz = -1, Gz.d.unfavouriteGame(Lz, zz).catch((zz => {
+                               Az.isFavourite ? (zv = -1, Kv.e.unfavouriteGame(Hv, vv).catch((vv => {
```

#### 92. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L975` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L993) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L975)

```diff
-                               }))) : (tz = 1, Gz.d.favouriteGame(Lz, zz).catch((zz => {
+                               }))) : (zv = 1, Kv.e.favouriteGame(Hv, vv).catch((vv => {
```

#### 93. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L994` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1012) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L994)

```diff
-                       }, null === kt.isFavourite ? "pending" : "known"), jt && !Os && Sz.featureFlags.useSocialFeatures && !os && (0, yz.jsx)(Pt.c, {
+                       }, null === Az.isFavourite ? "pending" : "known"), Oz && !SP && Ev.featureFlags.useSocialFeatures && !eP && (0, tv.jsx)(Fz.b, {
```

#### 94. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L996` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1014) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L996)

```diff
-                         targetId: (0, Xt.r)(Wt.gameNameWithVariation),
+                         targetId: (0, Sz.q)(hz.gameNameWithVariation),
```

#### 95. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L998` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1016) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L998)

```diff
-                       }), (Lz.playerHasRank("developer") || Lz.playerHasRank("admin") && os) && (0, yz.jsxs)(Nz.p, {
+                       }), (Hv.playerHasRank("developer") || Hv.playerHasRank("admin") && eP) && (0, tv.jsxs)(Wv.j, {
```

#### 96. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1001` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1019) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1001)

```diff
-                           Vz((0, vt.n)((0, ot.e)(Wt.gameNameWithVariation, !0)))
+                           ov((0, pz.o)((0, gz.i)(hz.gameNameWithVariation, !0)))
```

#### 97. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1003` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1021) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1003)

```diff
-                         children: [(0, yz.jsx)(qz.c, {
+                         children: [(0, tv.jsx)(Jv.b, {
```

#### 98. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1006` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1024) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1006)

```diff
-                       }), jt && Lz.playerHasRank("developer") && (0, yz.jsxs)(Nz.h, {
+                       }), Oz && Hv.playerHasRank("developer") && (0, tv.jsxs)(Wv.d, {
```

#### 99. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1009-L1010` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1027-L1028) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1009-L1010)

```diff
-                           (0, wt.c)({
-                             schematicId: (0, Xt.r)(Wt.gameNameWithVariation),
+                           (0, wz.e)({
+                             schematicId: (0, Sz.q)(hz.gameNameWithVariation),
```

#### 100. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1014` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1032) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1014)

```diff
-                         children: [(0, yz.jsx)(qz.c, {
+                         children: [(0, tv.jsx)(Jv.b, {
```

#### 101. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1017` → after: `L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1035) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1017)

```diff
-                       }), jt && Lz.playerHasRank("developer") && (0, yz.jsxs)(Nz.h, {
+                       }), Oz && Hv.playerHasRank("developer") && (0, tv.jsxs)(Wv.d, {
```

#### 102. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1022` → after: `L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1040) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1022)

```diff
-                               schematicId: (0, Xt.r)(Wt.gameNameWithVariation),
+                               schematicId: (0, Sz.q)(hz.gameNameWithVariation),
```

#### 103. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1030` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1048) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1030)

```diff
-                         children: [(0, yz.jsx)(qz.c, {
+                         children: [(0, tv.jsx)(Jv.b, {
```

#### 104. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1069` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1087) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1069)

```diff
-                                 children: [(0, yz.jsx)(qz.c, {
+                                 children: [(0, tv.jsx)(Jv.b, {
```

#### 105. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1071` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1089) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1071)

```diff
-                                 }), " ", (0, bt.R)(null !== (tz = iz[zz]) && void 0 !== tz ? tz : 0)]
+                                 }), " ", (0, Wz.X)(null !== (zv = Lv[vv]) && void 0 !== zv ? zv : 0)]
```

#### 106. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1075` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1093) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1075)

```diff
-                               children: Qz(null !== (sz = Nt.e[zz].variationTitle) && void 0 !== sz ? sz : Nt.e[zz].title)
+                               children: Zv(null !== (Pv = Tz.e[vv].variationTitle) && void 0 !== Pv ? Pv : Tz.e[vv].title)
```

#### 107. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1082` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1100) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1082)

```diff
-                                   children: (0, yz.jsx)(ez.b, {
+                                   children: (0, tv.jsx)(Ov.e, {
```

#### 108. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1104` → after: `L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1122) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1104)

```diff
-                         children: (0, yz.jsx)(Nz.p, {
+                         children: (0, tv.jsx)(Wv.j, {
```

#### 109. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1113` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1131) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1113)

```diff
-                             children: [(0, yz.jsx)(qz.c, {
+                             children: [(0, tv.jsx)(Jv.b, {
```

#### 110. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1125` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1143) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1125)

```diff
-                         children: [(0, yz.jsx)(qz.c, {
+                         children: [(0, tv.jsx)(Jv.b, {
```

#### 111. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1128` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1146) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1128)

```diff
-                         }), (0, yz.jsx)(Dz.d, {
+                         }), (0, tv.jsx)(sv.c, {
```

#### 112. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1131` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1149) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1131)

```diff
-                           maxLength: bt.P,
+                           maxLength: Wz.U,
```

#### 113. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1134` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1152) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1134)

```diff
-                             zz = (0, bt.vb)(zz), Jt(zz)
+                             vv = (0, Wz.ub)(vv), sz(vv)
```

#### 114. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1139` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1157) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1139)

```diff
-                         }), (0, yz.jsx)(Nz.h, {
+                         }), (0, tv.jsx)(Wv.d, {
```

#### 115. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1156` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1174) · [Before (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1156)

```diff
-                           children: [(0, yz.jsx)(qz.c, {
+                           children: [(0, tv.jsx)(Jv.b, {
```

#### 116. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1186` → after: `L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1204) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1186)

```diff
-                     children: [(0, yz.jsx)(qz.c, {
+                     children: [(0, tv.jsx)(Jv.b, {
```

#### 117. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1197` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1215) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1197)

```diff
-                     children: [(0, yz.jsx)(qz.c, {
+                     children: [(0, tv.jsx)(Jv.b, {
```

#### 118. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1205` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1223) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1205)

```diff
-                   }), (0, yz.jsx)(Nz.Q, {
+                   }), (0, tv.jsx)(Wv.K, {
```

#### 119. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1211` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1229) · [Before (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1211)

```diff
-                   }), (0, yz.jsx)(Nz.Q, {
+                   }), (0, tv.jsx)(Wv.K, {
```

#### 120. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1217` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1235) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1217)

```diff
-                   }), (0, yz.jsx)(Nz.Q, {
+                   }), (0, tv.jsx)(Wv.K, {
```

#### 121. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1239-L1240` → after: `L1257-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1257-L1258) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1239-L1240)

```diff
-                     }), !0 === qt && (0, yz.jsx)(Bt.f, {}), !1 === qt && Vt.length > 0 && Vt.map((zz => (0, yz.jsx)(Bt.c, {
-                       customLobby: zz,
+                     }), !0 === Bz && (0, tv.jsx)(cz.g, {}), !1 === Bz && (0, tv.jsx)(fz, {
+                       customLobbies: Ez,
```

#### 122. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1244` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1262) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1244)

```diff
-                     }, zz.name)))]
+                     })]
```

#### 123. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1261-L1263` → after: `L1279-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1279-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1279-L1281) · [Before (L1261-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1261-L1263)

```diff
-         Kz = (0, Xz.m)(tz, (0, Xz.n)(vz)),
-         uz = (0, Wz.e)(Kz),
-         Nz = (0, Oz.g)([(0, Xz.i)(tz, (0, Xz.c)(vz))]);
+         lv = (0, ev.l)(zv, (0, ev.n)(dv)),
+         Tv = (0, Sv.f)(lv),
+         Wv = (0, gv.e)([(0, ev.h)(zv, (0, ev.d)(dv))]);
```

#### 124. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1265` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1283) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1265)

```diff
-         to: (0, kz.w)(tz),
+         to: (0, Av.G)(zv),
```

#### 125. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1267` → after: `L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1285) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1267)

```diff
-         className: wz()("GameInformationVariation", oz.h, {
+         className: av()("GameInformationVariation", pv.g, {
```

#### 126. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1271-L1273` → after: `L1289-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1289-L1291) · [Before (L1271-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1271-L1273)

```diff
-           if (!(0, tt.c)(zz)) return;
-           const sz = (0, Bz.l)(tz);
-           Uz.f.setItem(sz, tz)
+           if (!(0, vz.b)(vv)) return;
+           const Pv = (0, cv.i)(zv);
+           Nv.h.setItem(Pv, zv)
```

#### 127. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1279-L1280` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1297-L1298) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1279-L1280)

```diff
-         style: (0, oz.f)(uz),
-         children: [(0, yz.jsx)(oz.d, {
+         style: (0, pv.e)(Tv),
+         children: [(0, tv.jsx)(pv.b, {
```

#### 128. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1286` → after: `L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1304) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1286)

```diff
-   6089: (zz, tz, sz) => {
+   6225: (vv, zv, Pv) => {
```

#### 129. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1288` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1306) · [Before (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1288)

```diff
-       c: () => Hz
+       e: () => iv
```

#### 130. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1290-L1298` → after: `L1308-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1308-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1308-L1316) · [Before (L1290-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1290-L1298)

```diff
-     var Fz = sz(65),
-       Wz = sz(1419),
-       Xz = sz(1466),
-       Oz = sz(3163),
-       oz = sz(1116),
-       vz = sz(1306),
-       Uz = sz(1333),
-       Kz = sz(1036),
-       uz = sz(1020),
+     var hv = Pv(52),
+       Sv = Pv(1442),
+       ev = Pv(1482),
+       gv = Pv(3247),
+       pv = Pv(1108),
+       dv = Pv(1327),
+       Nv = Pv(1344),
+       lv = Pv(1042),
+       Tv = Pv(1035),
```

#### 131. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1300` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1318) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1300)

```diff
-       bz = sz(1087);
+       wv = Pv(1082);
```

#### 132. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1311` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1329) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1311)

```diff
-           children: [(0, bz.jsx)(Kz.c, {
+           children: [(0, wv.jsx)(lv.b, {
```

#### 133. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1320` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1338) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1320)

```diff
-             children: [(0, bz.jsx)(Kz.c, {
+             children: [(0, wv.jsx)(lv.b, {
```

#### 134. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1336-L1337` → after: `L1354-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1354-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1354-L1355) · [Before (L1336-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1336-L1337)

```diff
-     var Dz = sz(1173),
-       gz = sz(1319);
+     var sv = Pv(1175),
+       Cv = Pv(1336);
```

#### 135. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1358` → after: `L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1376) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1358)

```diff
-       } = (0, Dz.B)(), {
+       } = (0, sv.x)(), {
```

#### 136. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1360-L1361` → after: `L1378-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1378-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1378-L1379) · [Before (L1360-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1360-L1361)

```diff
-       } = (0, oz.b)(), Hz = (0, Oz.d)(), [Bz, Pz] = (0, Fz.useState)(null), [rz, Yz] = (0, Fz.useState)(null), [xz, mz] = (0, Fz.useState)(!1), Jz = (0, Fz.useCallback)((() => {
-         Yz(null), Xz.d.getGameApprovalInfo(gz, tz).then((zz => {
+       } = (0, pv.d)(), iv = (0, gv.b)(), [cv, Gv] = (0, hv.useState)(null), [mv, jv] = (0, hv.useState)(null), [fv, Fv] = (0, hv.useState)(!1), Yv = (0, hv.useCallback)((() => {
+         jv(null), ev.e.getGameApprovalInfo(Cv, zv).then((vv => {
```

#### 137. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1371` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1389) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1371)

```diff
-         xz || (mz(!0), Xz.d.setGameApproval(gz, tz, zz).then((() => {
+         fv || (Fv(!0), ev.e.setGameApproval(Cv, zv, vv).then((() => {
```

#### 138. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1386` → after: `L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1404) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1386)

```diff
-           children: (0, bz.jsx)(vz.d, {})
+           children: (0, wv.jsx)(dv.c, {})
```

#### 139. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1399` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1417) · [Before (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1399)

```diff
-               children: (0, bz.jsxs)(Wz.p, {
+               children: (0, wv.jsxs)(Sv.j, {
```

#### 140. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1405` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1423) · [Before (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1405)

```diff
-                 children: [(0, bz.jsx)(Kz.c, {
+                 children: [(0, wv.jsx)(lv.b, {
```

#### 141. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1413` → after: `L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1431) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1413)

```diff
-               children: (0, bz.jsxs)(Wz.H, {
+               children: (0, wv.jsxs)(Sv.A, {
```

#### 142. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1419` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1437) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1419)

```diff
-                 children: [(0, bz.jsx)(Kz.c, {
+                 children: [(0, wv.jsx)(lv.b, {
```

#### 143. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1427` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1445) · [Before (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1427)

```diff
-               children: (0, bz.jsxs)(Wz.h, {
+               children: (0, wv.jsxs)(Sv.d, {
```

#### 144. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1433` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1451) · [Before (L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1433)

```diff
-                 children: [(0, bz.jsx)(Kz.c, {
+                 children: [(0, wv.jsx)(lv.b, {
```

#### 145. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1443` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1461) · [Before (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1443)

```diff
-   8900: (zz, tz, sz) => {
+   9054: (vv, zv, Pv) => {
```

#### 146. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1445` → after: `L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1463) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1445)

```diff
-       e: () => Xz
+       c: () => ev
```

#### 147. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1447-L1448` → after: `L1465-L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1465-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1465-L1466) · [Before (L1447-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1447-L1448)

```diff
-     var Fz = sz(65),
-       Wz = sz(3252);
+     var hv = Pv(52),
+       Sv = Pv(3329);
```

#### 148. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1454` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1472) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1454)

```diff
-         return (0, Wz.d)().then((() => {
+         return (0, Sv.e)().then((() => {
```

#### 149. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1462` → after: `L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1480) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1462)

```diff
-   8419: (zz, tz, sz) => {
+   8580: (vv, zv, Pv) => {
```

#### 150. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1464` → after: `L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1482) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1464)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 151. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1466-L1468` → after: `L1484-L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1484-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1484-L1486) · [Before (L1466-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1466-L1468)

```diff
-     var Fz = sz(1297),
-       Wz = sz(1213),
-       Xz = sz(580);
+     var hv = Pv(1311),
+       Sv = Pv(1209),
+       ev = Pv(626);
```

#### 152. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1476-L1477` → after: `L1494-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1494-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1494-L1495) · [Before (L1476-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1476-L1477)

```diff
-           Oz = null !== (sz = Wz) && void 0 !== sz ? sz : zz.lobbyName,
-           oz = null !== Xz && void 0 !== Xz ? Xz : zz.directJoinVmUrl;
+           gv = null !== (Pv = Sv) && void 0 !== Pv ? Pv : vv.lobbyName,
+           pv = null !== ev && void 0 !== ev ? ev : vv.directJoinVmUrl;
```

#### 153. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1485-L1486` → after: `L1503-L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1503-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1503-L1504) · [Before (L1485-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1485-L1486)

```diff
-         if ((0, Xz.G)(zz.directJoinVmUrl)) return zz;
-         const tz = (0, Wz.cb)(zz.directJoinVmUrl);
+         if ((0, ev.N)(vv.directJoinVmUrl)) return vv;
+         const zv = (0, Sv.db)(vv.directJoinVmUrl);
```

#### 154. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1490-L1491` → after: `L1508-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1508-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1508-L1509) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1490-L1491)

```diff
-         if ((0, Xz.G)(zz.gameNameWithVariation)) return zz;
-         return zz.gameNameWithVariation = (0, Fz.j)(zz.gameNameWithVariation), zz
+         if ((0, ev.N)(vv.gameNameWithVariation)) return vv;
+         return vv.gameNameWithVariation = (0, hv.n)(vv.gameNameWithVariation), vv
```

#### 155. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1495` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1513) · [Before (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1495)

```diff
-   8410: (zz, tz, sz) => {
+   8578: (vv, zv, Pv) => {
```

#### 156. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1497-L1498` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1515-L1516) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1497-L1498)

```diff
-       c: () => Xz,
-       e: () => Wz
+       d: () => ev,
+       g: () => Sv
```

#### 157. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1510` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1528) · [Before (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1510)

```diff
-   35887: (zz, tz, sz) => {
+   35922: (vv, zv, Pv) => {
```

#### 158. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L1513` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/115.js#L1531) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/115.js#L1513)

```diff
-       h: () => Fz
+       f: () => hv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/116.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/116.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6)

#### 1. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L4)

```diff
-   6100: (zz, tz, sz) => {
+   6237: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L8-L17` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L8-L17) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L8-L17)

```diff
-     var Fz = sz(1173),
-       Wz = sz(133),
-       Xz = sz(240),
-       Oz = sz(1419),
-       oz = sz(1287),
-       vz = sz(30),
-       Uz = sz(1636),
-       Kz = sz(3056),
-       uz = sz(2856),
-       Nz = sz(1087);
+     var hv = Pv(1175),
+       Sv = Pv(108),
+       ev = Pv(229),
+       gv = Pv(1442),
+       pv = Pv(1295),
+       dv = Pv(22),
+       Nv = Pv(1657),
+       lv = Pv(3134),
+       Tv = Pv(2915),
+       Wv = Pv(1082);
```

#### 3. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L22)

```diff
-       } = (0, Fz.B)(), tz = !(0, Xz.shouldUseUkPrivacyPolicy)();
+       } = (0, hv.x)(), zv = !(0, ev.shouldUseUkPrivacyPolicy)();
```

#### 4. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L30)

```diff
-             children: ["Last updated: ", Kz.j.toLocaleDateString()]
+             children: ["Last updated: ", lv.g.toLocaleDateString()]
```

#### 5. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L1065)

```diff
-       } = (0, vz.h)(["adMobPrivacyOptionsRequired"]);
+       } = (0, dv.i)(["adMobPrivacyOptionsRequired"]);
```

#### 6. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L1067` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L1067) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L1067)

```diff
-       return (0, Nz.jsx)(Oz.h, {
+       return (0, Wv.jsx)(gv.d, {
```

#### 7. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L1072` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L1072) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L1072)

```diff
-               await Uz.c.request("ads.showPrivacyOptions", {})
+               await Nv.d.request("ads.showPrivacyOptions", {})
```

#### 8. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L1084-L1085` → after: `L1084-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L1084-L1085) · [Before (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L1084-L1085)

```diff
-         children: [(0, Wz.e)() && (0, Nz.jsx)(Nz.Fragment, {
-           children: (0, Nz.jsx)(Oz.h, {
+         children: [(0, Sv.b)() && (0, Wv.jsx)(Wv.Fragment, {
+           children: (0, Wv.jsx)(gv.d, {
```

#### 9. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L1088)

```diff
-               (0, oz.t)()
+               (0, pv.y)()
```

#### 10. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/116.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/116.js#L1092)

```diff
-         }), (0, Nz.jsx)(wz, {}), (0, Nz.jsx)(uz.b, {
+         }), (0, Wv.jsx)(av, {}), (0, Wv.jsx)(Tv.e, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 1. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/117.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/117.js#L4)

```diff
-   6108: (zz, tz, sz) => {
+   6239: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/117.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/117.js#L8-L9)

```diff
-     var Fz = sz(1173),
-       Wz = sz(1087);
+     var hv = Pv(1175),
+       Sv = Pv(1082);
```

#### 3. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/117.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/117.js#L14)

```diff
-       } = (0, Fz.B)();
+       } = (0, hv.x)();
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 1. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L4)

```diff
-   6111: (zz, tz, sz) => {
+   6246: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L8-L18)

```diff
-     var Fz = sz(1493),
-       Wz = sz(1518),
-       Xz = sz(2728),
-       Oz = sz(2181),
-       oz = sz(1419),
-       vz = sz(1483),
-       Uz = sz(1116),
-       Kz = sz(1028),
-       uz = sz(1173),
-       Nz = sz(1036),
-       bz = sz(1087);
+     var hv = Pv(1505),
+       Sv = Pv(1542),
+       ev = Pv(2769),
+       gv = Pv(2205),
+       pv = Pv(1442),
+       dv = Pv(1492),
+       Nv = Pv(1108),
+       lv = Pv(1040),
+       Tv = Pv(1175),
+       Wv = Pv(1042),
+       wv = Pv(1082);
```

#### 3. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L28)

```diff
-       } = (0, Uz.b)();
+       } = (0, Nv.d)();
```

#### 4. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L30)

```diff
-         const zz = Wz.e[sz];
+         const vv = Sv.b[Pv];
```

#### 5. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L35-L38` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L35-L38) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L35-L38)

```diff
-       const Dz = sz ? Wz.e[sz] : null,
-         gz = sz ? Xz.k[(0, Oz.j)(sz)] : null,
-         Hz = void 0 !== (null === Dz || void 0 === Dz ? void 0 : Dz.characterSet) || null !== Dz && void 0 !== Dz && Dz.singleItem ? Dz.displayName : `${null!==(zz=null===Dz||void 0===Dz?void 0:Dz.displayName)&&void 0!==zz?zz:sz} Pack`,
-         Bz = Dz ? `Your ${Hz} is Ready!` : "Welcome To Super Rank!",
+       const sv = Pv ? Sv.b[Pv] : null,
+         Cv = Pv ? ev.k[(0, gv.m)(Pv)] : null,
+         iv = void 0 !== (null === sv || void 0 === sv ? void 0 : sv.characterSet) || null !== sv && void 0 !== sv && sv.singleItem ? sv.displayName : `${null!==(vv=null===sv||void 0===sv?void 0:sv.displayName)&&void 0!==vv?vv:Pv} Pack`,
+         cv = sv ? `Your ${iv} is Ready!` : "Welcome To Super Rank!",
```

#### 6. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L44)

```diff
-         children: [gz && (0, bz.jsx)(gz, {}), !Dz && (0, bz.jsx)(Kz.e, {
+         children: [Cv && (0, wv.jsx)(Cv, {}), !sv && (0, wv.jsx)(lv.c, {
```

#### 7. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L58)

```diff
-           children: [(0, bz.jsx)(Nz.c, {
+           children: [(0, wv.jsx)(Wv.b, {
```

#### 8. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/118.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/118.js#L65)

```diff
-           children: (0, bz.jsx)(oz.p, {
+           children: (0, wv.jsx)(pv.j, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/119.js#L4)

```diff
-   6116: (zz, tz, sz) => {
+   6251: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/119.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/119.js#L8-L16)

```diff
-     var Fz = sz(1306),
-       Wz = sz(65),
-       Xz = sz(116),
-       Oz = sz(1493),
-       oz = sz(1215),
-       vz = sz(308),
-       Uz = sz(601);
-     const Kz = new URL(oz.p[vz.b.PRODUCTION]).origin;
-     var uz = sz(1087);
+     var hv = Pv(1327),
+       Sv = Pv(52),
+       ev = Pv(81),
+       gv = Pv(1505),
+       pv = Pv(1212),
+       dv = Pv(302),
+       Nv = Pv(635);
+     const lv = new URL(pv.n[dv.c.PRODUCTION]).origin;
+     var Tv = Pv(1082);
```

#### 3. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/119.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/119.js#L19)

```diff
-       const zz = (0, Oz.C)();
+       const vv = (0, gv.B)();
```

#### 4. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/119.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/119.js#L24)

```diff
-           type: `oauth_authentication_${zz.providerName}`,
+           type: `oauth_authentication_${vv.providerName}`,
```

#### 5. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/119.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/119.js#L27)

```diff
-         for (const zz of (Wz = window.location.origin) === Kz ? [Wz, `https://${Uz.c}`] : [Wz]) {
+         for (const vv of (Sv = window.location.origin) === lv ? [Sv, `https://${Nv.e}`] : [Sv]) {
```

#### 6. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/119.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/119.js#L37)

```diff
-         children: (0, uz.jsx)(Fz.d, {
+         children: (0, Tv.jsx)(hv.c, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (57 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L4)

```diff
-   6119: (zz, tz, sz) => {
+   6260: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L8-L10)

```diff
-     var Fz = sz(65),
-       Wz = sz(1493),
-       Xz = sz(1020),
+     var hv = Pv(52),
+       Sv = Pv(1505),
+       ev = Pv(1035),
```

#### 3. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L12-L32` → after: `L12-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L12-L32) · [Before (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L12-L32)

```diff
-       oz = sz(308),
-       vz = sz(6129),
-       Uz = sz(1036),
-       Kz = sz(1483),
-       uz = sz(4194),
-       Nz = sz(1419),
-       bz = sz(2862),
-       wz = sz(4201),
-       Dz = sz(1622),
-       gz = sz(4191),
-       Hz = sz(1116),
-       Bz = sz(30),
-       Pz = sz(1466),
-       rz = sz(1191),
-       Yz = sz(106),
-       xz = sz(1173),
- ... (5 more removed lines; see GitHub link above)
+       pv = Pv(302),
+       dv = Pv(6268),
+       Nv = Pv(1042),
+       lv = Pv(1492),
+       Tv = Pv(4319),
+       Wv = Pv(1442),
+       wv = Pv(2917),
+       av = Pv(4326),
+       sv = Pv(1647),
+       Cv = Pv(4310),
+       iv = Pv(1108),
+       cv = Pv(22),
+       Gv = Pv(1482),
+       mv = Pv(1184),
+       jv = Pv(73),
+       fv = Pv(1175),
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L44)

```diff
-       } = vz.q.thumb, {
+       } = dv.t.thumb, {
```

#### 5. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L52)

```diff
-             to: (0, Iz.jb)(tz.packId),
+             to: (0, nv.U)(zv.packId),
```

#### 6. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L56)

```diff
-               src: (0, vz.r)(rz.clientSideServerUrls.s3Url, uz, sz, "thumb"),
+               src: (0, dv.v)(mv.clientSideServerUrls.s3Url, Tv, Pv, "thumb"),
```

#### 7. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L66)

```diff
-               children: (0, ez.jsx)(Uz.c, {
+               children: (0, Dv.jsx)(Nv.b, {
```

#### 8. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L85)

```diff
-               children: [(0, ez.jsx)(Uz.c, {
+               children: [(0, Dv.jsx)(Nv.b, {
```

#### 9. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L87-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L87-L88) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L87-L88)

```diff
-               }), (0, Jz.R)(uz.downloads)]
-             }), Fz && (0, ez.jsx)(Nz.v, {
+               }), (0, Yv.X)(Tv.downloads)]
+             }), hv && (0, Dv.jsx)(Wv.m, {
```

#### 10. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L97)

```diff
-     var Gz = sz(6143);
+     var Vv = Pv(6278);
```

#### 11. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L110)

```diff
-       } = (0, xz.B)(), Uz = (0, Gz.g)(), Kz = Date.now(), uz = null === tz ? 0 : "owned" === tz.kind ? tz.packs.length : tz.page.results.length;
+       } = (0, fv.x)(), Nv = (0, Vv.i)(), lv = Date.now(), Tv = null === zv ? 0 : "owned" === zv.kind ? zv.packs.length : zv.page.results.length;
```

#### 12. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L117)

```diff
-           children: (0, ez.jsx)(mz.d, {})
+           children: (0, Dv.jsx)(Fv.c, {})
```

#### 13. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L120)

```diff
-           children: [vz("shaderPackListing:loadFailed"), (0, ez.jsx)(Nz.h, {
+           children: [dv("shaderPackListing:loadFailed"), (0, Dv.jsx)(Wv.d, {
```

#### 14. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L147)

```diff
-               notice: zz.owner ? (0, Iz.hb)(zz.owner, !(null === (tz = zz.live) || void 0 === tz || !tz.renderId), Kz, vz)[0] : void 0
+               notice: vv.owner ? (0, nv.R)(vv.owner, !(null === (zv = vv.live) || void 0 === zv || !zv.renderId), lv, dv)[0] : void 0
```

#### 15. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L158)

```diff
-       return "mine" === zz.section ? "shaderPackListing:noOwnPacks" : (0, Iz.x)(zz) ? "general:noResults" : "favourites" === zz.section ? "shaderPackListing:noFavourites" : "general:noResults"
+       return "mine" === vv.section ? "shaderPackListing:noOwnPacks" : (0, nv.u)(vv) ? "general:noResults" : "favourites" === vv.section ? "shaderPackListing:noFavourites" : "general:noResults"
```

#### 16. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L160)

```diff
-     var jz = sz(6153);
+     var xv = Pv(6294);
```

#### 17. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L171)

```diff
-       } = (0, xz.B)(), Jz = (0, Kz.useNavigatePreserveSearch)(), Cz = (0, Wz.s)(), {
+       } = (0, fv.x)(), Yv = (0, lv.useNavigatePreserveSearch)(), Ov = (0, Sv.p)(), {
```

#### 18. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L174)

```diff
-       } = (0, Hz.b)(), [Mz, dz] = (0, Gz.f)(), [hz, Qz] = (0, Gz.e)(), kz = (0, Fz.useRef)(!1), [iz, Lz] = (0, uz.i)(), lz = (0, Iz.K)(iz), [nz, az] = (0, Fz.useState)(null !== (zz = lz.searchQuery) && void 0 !== zz ? zz : ""), qz = (0, Fz.useRef)(null), {
+       } = (0, iv.d)(), [Iv, Qv] = (0, Vv.h)(), [Zv, Av] = (0, Vv.e)(), Lv = (0, hv.useRef)(!1), [Hv, Mv] = (0, Tv.r)(), yv = (0, nv.E)(Hv), [Bv, Jv] = (0, hv.useState)(null !== (vv = yv.searchQuery) && void 0 !== vv ? vv : ""), Ev = (0, hv.useRef)(null), {
```

#### 19. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L178)

```diff
-         az(null !== Sz && void 0 !== Sz ? Sz : ""), qz.current && (qz.current.value = null !== Sz && void 0 !== Sz ? Sz : "")
+         Jv(null !== ov && void 0 !== ov ? ov : ""), Ev.current && (Ev.current.value = null !== ov && void 0 !== ov ? ov : "")
```

#### 20. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L180)

```diff
-       const [Vz, Rz] = (0, Fz.useState)(null), [pz, fz] = (0, Fz.useState)(!1), [Ez, zt] = (0, Fz.useState)(!1), [tt, st] = (0, Fz.useState)(0), Ft = (0, Fz.useRef)(0), Wt = JSON.stringify(lz), Xt = (0, Iz.s)();
+       const [bv, rv] = (0, hv.useState)(null), [kv, Xv] = (0, hv.useState)(!1), [uv, vz] = (0, hv.useState)(!1), [zz, Pz] = (0, hv.useState)(0), hz = (0, hv.useRef)(0), Sz = JSON.stringify(yv), ez = (0, nv.m)();
```

#### 21. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L183-L185` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L183-L185) · [Before (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L183-L185)

```diff
-         null !== Xt ? (Jz(Xt), Bz.b.set({
-           openEverythingMenuName: oz.r.SETTINGS,
-           openSettingsCategory: "Cw"
+         null !== ez ? (Yv(ez), cv.c.set({
+           openEverythingMenuName: pv.o.SETTINGS,
+           openSettingsCategory: "Bw"
```

#### 22. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/120.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/120.js#L191)

```diff
-           (0, Iz.wb)(tz, {
+           (0, nv.gb)(zv, {
```
