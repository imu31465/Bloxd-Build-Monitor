# Changed — Bundle Modifications Report (Part 016 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `16 / 82` (**304** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 20. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L229-L245` → after: `L366-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L366-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L366-L413) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L229-L245)

```diff
-     const pe = "Splitter",
-       Xe = "Sorting Gate",
-       ze = new Set(fe.J),
-       Be = new Set([...fe.J, "Belt Loader", "Fast Loader", Xe]),
-       Ee = new Set(fe.r),
-       ge = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0],
-         [0, -1, 0]
-       ];
- 
-     function Oe(ee) {
-       var ie, He;
- ... (1 more removed lines; see GitHub link above)
+     class wW {
+       constructor(WW, iW) {
+         this.jZ = WW, this.engine = iW, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(WW, iW) {
+         if (!iW) return;
+         const OW = iW.getProjectionMatrix().m,
+           PW = 0 === NW && 0 === OW[15],
+           LW = iW.globalPosition,
+           {
+             engine: wW
+           } = this,
+           tW = PW ? (0, EW.e)(OW, wW.getRenderWidth(), wW.getRenderHeight()) : 0;
+         LW.x === this.eyeX && LW.y === this.eyeY && LW.z === this.eyeZ && tW === this.focalPx && PW === this.culling || (this.epoch++, this.eyeX = LW.x, this.eyeY = LW.y, this.eyeZ = LW.z, this.focalPx = tW, this.culling = PW);
+         const {
+           epoch: ZW,
+ ... (32 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L248-L249` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L425-L426) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L248-L249)

```diff
-     function de(ee) {
-       return Oe(ee) === fe.i && (0, fe.V)(ye.i[ee].name)
+     function PW(WW, iW) {
+       WW._data = iW
```

#### 22. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L262-L270` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L431) · [Before (L262-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L262-L270)

```diff
-       const be = null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.meta;
-       return (null === be || void 0 === be ? void 0 : be.rootName) !== te.n ? null : {
-         rot: null !== (He = be.rot) && void 0 !== He ? He : 1,
-         half: (0, te.h)(be.rootName, be.metaStr)
-       }
-     }
- 
-     function De(ee, ie, He, ye) {
-       return we(ee(ie, He, ye))
+       (null !== (iW = null === (OW = WW.getBuffer()) || void 0 === OW ? void 0 : OW.aZ) && void 0 !== iW ? iW : 0) > 0 && (mW.add(WW), 0 === EW ? PW(WW, null) : NW.add(WW))
```

#### 23. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L273-L386` → after: `L434-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L434-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L434-L444) · [Before (L273-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L273-L386)

```diff
-     function Pe(ee, ie, He, ye, be) {
-       let {
-         rot: Me,
-         half: Ke
-       } = be;
-       const [Ue, Fe] = (0, te.m)(Me, Ke), Je = De(ee, ie + Ue, He, ye + Fe);
-       return null !== Je && Je.rot === Me && Je.half === te.p[Ke]
-     }
-     var Ae = He(39211);
-     const Ye = [new class {
-       constructor() {
-         this.reshapeOffsets = qe
-       }
-       handles(ee) {
-         var ie;
-         return "Stairs" === (null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.model)
- ... (98 more removed lines; see GitHub link above)
+     function cW(WW) {
+       EW++;
+       for (const OW of function(WW) {
+           const iW = new Set;
+           for (const EW of WW) {
+             const WW = EW.geometry;
+             for (const EW of Object.values(null !== (OW = null === WW || void 0 === WW ? void 0 : WW.getVertexBuffers()) && void 0 !== OW ? OW : {})) {
+               var OW;
+               const WW = EW.getWrapperBuffer();
+               mW.has(WW) && iW.add(WW)
+             }
```

#### 24. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L388-L446` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L446-L452) · [Before (L388-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L388-L446)

```diff
-           return (0, ye.j)((0, fe.eb)(Me, !1))
-         }(ee, ie, He, be, Fe) : (0, ye.j)((0, fe.M)(Ue, Fe, function(ee, ie, He, be, Me) {
-           const [Ke, Ue] = fe.e[Me - 1], Fe = (Me, Ke) => function(ee, ie, He) {
-             var be;
-             const Me = null === (be = ye.i[ee]) || void 0 === be ? void 0 : be.meta;
-             if (!Me) return !1;
-             const Ke = Me.rootName,
-               Ue = Be.has(Ke) || de(ee);
-             if (!Ue && !Ee.has(Ke) && Ke !== pe) return !1;
-             const [Fe, Je] = fe.e[Me.rot - 1];
-             if (Ue && Fe === -ie && Je === -He) return !0;
-             if (Ee.has(Ke)) return Fe === ie && Je === He;
-             const oe = ye.i[ee].name;
-             return (Ke === pe ? (0, fe.ab)(oe, Fe, Je) : Ke === Xe ? [(0, fe.O)(oe, Fe, Je)] : []).some((ee => {
-               let [ye, be] = ee;
-               return ye === -ie && be === -He
- ... (43 more removed lines; see GitHub link above)
+           return iW
+         }(WW)) OW.getData() || wW(OW), NW.add(OW);
+       let iW = !0;
+       return () => {
+         if (iW && (iW = !1, EW--, 0 === EW)) {
+           for (const WW of NW) PW(WW, null);
+           NW.clear()
```

#### 25. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L460-L464` → after: `L458-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L458-L462) · [Before (L460-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L460-L464)

```diff
-       for (const ye of Ye) {
-         var ie, He;
-         if (ye.handles(ee)) return null !== (ie = null === (He = ye.placedBy) || void 0 === He ? void 0 : He.call(ye, ee)) && void 0 !== ie ? ie : null
-       }
-       return null
+       const iW = WW.getBuffer();
+       if (!iW || !(iW.aZ > 0)) return;
+       const OW = WW._engine,
+         mW = new Uint8Array(iW.aZ);
+       OW.bindArrayBuffer(iW), OW._gl.getBufferSubData(OW._gl.ARRAY_BUFFER, 0, mW), OW._resetVertexBufferBinding(), PW(WW, mW)
```

#### 26. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L467` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L465) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L467)

```diff
-   39211: (ee, ie, He) => {
+   38623: (WW, iW, OW) => {
```

#### 27. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L471` → after: `L495-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L495-L498) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L471)

```diff
-       h: () => Be
+       h: () => cW,
+       j: () => tW,
+       m: () => wW,
+       o: () => AW
```

#### 28. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L473-L481` → after: `L500-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L500-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L500-L504) · [Before (L473-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L473-L481)

```diff
-     var ye = He(9961),
-       be = He(9985),
-       Me = He(10049),
-       Ke = He(39214),
-       Ue = He(10046);
-     const Fe = (0, Ke.P)("pipe"),
-       Je = (0, Ke.P)("tank"),
-       oe = (0, Ke.P)("port"),
-       Re = "Reactor Port";
+     var mW = OW(38623);
+     const EW = 1 / 16,
+       NW = 1 / 64,
+       PW = 2048;
+     mW.k;
```

#### 29. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L484-L488` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L507) · [Before (L484-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L484-L488)

```diff
-       const ye = new Set([Me.i, Me.e, Re, ...ie, ...He, ...ee ? [Ke.l] : []]);
-       return {
-         makers: new Set(ie),
-         roots: ye
-       }
+       return Math.min(Math.abs(WW[0] * iW), Math.abs(WW[5] * OW)) / 2
```

#### 30. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L512-L522` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L510-L511) · [Before (L512-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L512-L522)

```diff
-     function ze(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-       const He = ye.i[ee],
-         be = null === He || void 0 === He ? void 0 : He.meta.rootName,
-         ke = qe[ie];
-       if (!be || !ke.roots.has(be)) return null;
-       if ((0, Me.n)(be)) return (0, Ke.L)(He.name) === ie ? Fe : null;
-       if (be === Ke.l) return Je;
-       if (be === Re) return He.name.endsWith("|Water") ? oe : null;
-       const [fe, Te] = Ue.e[(He.meta.rot || 1) - 1];
-       return (0, Ke.P)(ke.makers.has(be) ? "maker" : "user", [-fe, 0, -Te])
+     function cW(WW, iW) {
+       return EW + NW * WW * WW / iW
```

#### 31. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L525-L536` → after: `L514-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L514-L516) · [Before (L525-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L525-L536)

```diff
-     function Be(ee, ie, He, be) {
-       let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
-       const {
-         makers: Ue
-       } = qe[Me];
-       return pe.some(((Je, oe) => {
-         var Re, ke;
-         let [qe, fe, Te] = Je;
-         const pe = ee(ie + qe, He + fe, be + Te),
-           Be = ze(pe, Me);
-         return null !== Be && Ue.has(null !== (Re = null === (ke = ye.i[pe]) || void 0 === ke ? void 0 : ke.meta.rootName) && void 0 !== Re ? Re : "") && !(0, Ke.T)(Fe, Be, Xe[oe])
-       }))
+     function wW(WW, iW, OW, EW, NW) {
+       const PW = mW.o;
+       return tW(WW[PW], WW[PW + 1], WW[PW + 2], WW[PW + 3], WW[PW + 4], WW[PW + 5], iW, OW, EW, NW)
```

#### 32. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L539-L541` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L519-L520) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L539-L541)

```diff
-     function Ee(ee) {
-       const ie = ye.i[ee];
-       return ie ? (0, Ke.L)(ie.name) : null
+     function tW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
+       return (PW <= WW - wW ? 0 : 1) | (PW >= iW + wW ? 0 : 2) | (LW <= OW - wW ? 0 : 4) | (LW >= mW + wW ? 0 : 8) | (cW <= EW - wW ? 0 : 16) | (cW >= NW + wW ? 0 : 32)
```

#### 33. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L543-L553` → after: `L522-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L522-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L522-L532) · [Before (L543-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L543-L553)

```diff
-     let ge = null;
- 
-     function Oe(ee) {
-       if (!ge) {
-         ge = new Map;
-         for (const ee of ["water", "cryo"])
-           for (let ie = 0; ie < 64; ie++)
-             for (const He of [!1, !0]) ge.set((0, Me.o)(ee, ie, He), {
-               Lq: ee,
-               mask: ie,
-               full: He
+     const ZW = (() => {
+         const WW = [];
+         for (let iW = 0; iW < mW.s.length; iW++) {
+           let OW = 0;
+           for (let EW = iW + 1; EW <= mW.s.length; EW++) {
+             const NW = 1 << mW.s[EW - 1];
+             if (OW & NW) break;
+             OW |= NW, WW.push({
+               start: iW,
+               end: EW,
+               iW: OW
```

#### 34. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L555-L560` → after: `L534-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L534-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L534-L538) · [Before (L555-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L555-L560)

```diff
-       }
-       return ge.get(ee)
-     }
-     const de = new Map(Array.from({
-       length: Me.j + 1
-     }, ((ee, ie) => [(0, Me.p)(ie), ie])));
+           }
+         }
+         return WW
+       })(),
+       xW = [];
```

#### 35. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L562-L614` → after: `L540-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L540-L542) · [Before (L562-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L562-L614)

```diff
-     function We(ee, ie, He, be, Me, Ke) {
-       return pe.some(((Ue, Fe) => {
-         var Je, oe, Re;
-         let [ke, qe, fe] = Ue;
-         if (0 === (Ke >> Fe & 1)) return !1;
-         const Te = null !== (Je = null === (oe = ye.i[ee(ie + ke, He + qe, be + fe)]) || void 0 === oe ? void 0 : oe.name) && void 0 !== Je ? Je : "",
-           pe = Oe(Te);
-         return pe ? pe.Lq === Me && pe.full : (null !== (Re = function(ee) {
-           var ie;
-           return null !== (ie = de.get(ee)) && void 0 !== ie ? ie : null
-         }(Te)) && void 0 !== Re ? Re : 0) > 0
-       }))
-     }
-     class te {
-       constructor() {
-         this.reshapeOffsets = pe
- ... (37 more removed lines; see GitHub link above)
+     function lW(WW, iW) {
+       const OW = mW.g[iW];
+       return WW[OW + 1] - WW[OW]
```

#### 36. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L643-L644` → after: `L545-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L545-L579) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L643-L644)

```diff
-     function Me(ee) {
-       return be.find((ie => ie.exactMatch ? ee === ie.name : ee.includes(ie.name)))
+     function AW(WW, iW, OW) {
+       let EW = 0;
+       for (let PW = 0; PW < mW.k; PW++) lW(WW, PW) > 0 && (EW |= 1 << PW);
+       if (0 === (iW &= EW)) return 0;
+       if (iW === EW) return OW[0] = 0, OW[1] = WW[mW.f], 1;
+       let NW = null,
+         LW = 1 / 0;
+       for (const wW of function(WW) {
+           let iW = xW[WW];
+           if (iW) return iW;
+           const OW = new Map,
+             mW = (WW, iW) => {
+               const mW = 4 * WW + iW.length / 2;
+               OW.has(mW) || OW.set(mW, {
+                 iW: WW,
+                 windows: iW
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L38` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L4-L10) · [Before (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L4-L38)

```diff
-   39301: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(39305);
-     const be = [0, 0, 0];
-     class Me {
-       constructor(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be;
-         this.pool = ee, this.origin = ie, this.count = 0, this.free = []
-       }
-       take() {
-         var ee;
-         const ie = null !== (ee = this.free.pop()) && void 0 !== ee ? ee : this.count++;
-         return ie >= this.pool.bk && this.pool.grow(Math.max(2 * this.pool.bk, ie + 1)), this.hide(ie), ie
-       }
- ... (19 more removed lines; see GitHub link above)
+   38900: (WW, iW, OW) => {
+     var mW = OW(38905);
+ 
+     function EW(WW) {
+       for (var iW, OW, EW = 0, NW = WW.length, PW = 0; PW < WW.length;) {
+         for (iW = WW[PW], OW = 0; PW < NW && WW[PW] === iW;) ++PW, ++OW;
+         EW += mW.log2(OW) / 7 | 0, EW += mW.log2(iW >>> 0) / 7 | 0, EW += 2
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L41-L63` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L14-L22) · [Before (L41-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L41-L63)

```diff
-     class Ke {
-       constructor(ee, ie, He) {
-         this.api = ee, this.model = ie, this.initialCapacity = He, this.kinds = new Map, this.origin = [0, 0, 0]
-       }
-       kindOf(ee) {
-         let ie = this.kinds.get(ee);
-         if (void 0 === ie) {
-           const He = this.api.createInstancePool({
-             ...this.model,
-             item: ee
-           }, this.initialCapacity);
-           null === He || void 0 === He || He.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ie = He && new Me(He, this.origin), this.kinds.set(ee, ie)
-         }
-         return ie
-       }
-       follow(ee) {
- ... (7 more removed lines; see GitHub link above)
+     iW.size = EW, iW.encode = function(WW, iW) {
+       iW || (iW = new Uint8Array(EW(WW)));
+       for (var OW, mW, NW = 0, PW = iW.length, LW = 0; LW < WW.length;) {
+         for (OW = WW[LW], mW = 0; LW < WW.length && WW[LW] === OW;) ++LW, ++mW;
+         for (; NW < PW && mW >= 128;) iW[NW++] = 128 + (127 & mW), mW >>>= 7;
+         if (NW >= PW) throw new Error("RLE buffer overflow");
+         for (iW[NW++] = mW, OW >>>= 0; NW < PW && OW >= 128;) iW[NW++] = 128 + (127 & OW), OW >>>= 7;
+         if (NW >= PW) throw new Error("RLE buffer overflow");
+         iW[NW++] = OW
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L65-L70` → after: `L24-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L24-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L24-L32) · [Before (L65-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L65-L70)

```diff
-       commit() {
-         for (const ee of this.kinds.values()) null === ee || void 0 === ee || ee.commit()
-       }
-       dispose() {
-         for (const ee of this.kinds.values()) null === ee || void 0 === ee || ee.dispose();
-         this.kinds.clear()
+       return iW
+     }, iW.decode = function(WW, iW) {
+       for (var OW, mW, EW, NW, PW = iW.length, LW = WW.length, cW = 0, wW = 0; wW < LW;) {
+         for (OW = 0, mW = 0; wW < LW && WW[wW] >= 128;) OW += (127 & WW[wW++]) << mW, mW += 7;
+         if (OW += WW[wW++] << mW, wW >= LW) throw new Error("RLE buffer underrun");
+         if (cW + OW > PW) throw new Error("Chunk buffer overflow");
+         for (EW = 0, mW = 0; wW < LW && WW[wW] >= 128;) EW += (127 & WW[wW++]) << mW, mW += 7;
+         if (wW >= LW) throw new Error("RLE buffer underrun");
+         for (EW += WW[wW++] << mW, NW = 0; NW < OW; ++NW) iW[cW++] = EW
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L74-L115` → after: `L37-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L37-L88) · [Before (L74-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L74-L115)

```diff
-   39315: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke,
-       h: () => Ue,
-       l: () => Fe
-     });
-     const ye = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
-       be = [0, 1, 2, 0, 2, 3],
-       Me = [4, 5];
- 
-     function Ke(ee, ie, He, ye, be) {
-       for (let Ke = 0; Ke < 6; Ke++) Me.includes(Ke) === be && Je(ee, ie, He, ye, Ke)
-     }
- 
-     function Ue(ee, ie, He, ye) {
-       for (let be = 0; be < 6; be++) Je(ee, ie, He, ye, be)
- ... (26 more removed lines; see GitHub link above)
+   38905: (WW, iW) => {
+     function OW(WW) {
+       var iW = 32;
+       return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
+     }
+     iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
+       return (WW > 0) - (WW < 0)
+     }, iW.abs = function(WW) {
+       var iW = WW >> 31;
+       return (WW ^ iW) - iW
+     }, iW.min = function(WW, iW) {
+       return iW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.max = function(WW, iW) {
+       return WW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.isPow2 = function(WW) {
+       return !(WW & WW - 1) && !!WW
+ ... (36 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L118` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L91) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L118)

```diff
-   39281: (ee, ie, He) => {
+   41343: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L120` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L93-L95) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L120)

```diff
-       default: () => pz
+       emptyColumnHeight: () => sW,
+       loadHeatmapSchematic: () => MW,
+       readSchematicBlocks: () => KW
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L122` → after: `L97-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L97-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L97-L103) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L122)

```diff
-     var ye = He(59);
+     var mW = OW(2484),
+       EW = OW.n(mW),
+       NW = OW(2437),
+       PW = OW(38900),
+       LW = OW(182),
+       cW = OW(5725),
+       wW = OW(40748);
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L124-L368` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L105-L106) · [Before (L124-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L124-L368)

```diff
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
-           item: "Glass",
-           amount: 12
- ... (229 more removed lines; see GitHub link above)
+         name: "x",
+         type: "int"
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L370-L404` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L108-L109) · [Before (L370-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L370-L404)

```diff
-         nameKey: "tierStage5",
-         stage: 5,
-         cost: [{
-           item: "Star Alloy",
-           amount: 32
-         }, {
-           item: "Voltite Cell",
-           amount: 64
-         }, {
-           item: "Machine Hull",
-           amount: 20
-         }, {
-           item: "Comet Core",
-           amount: 3
-         }],
-         charge: {
- ... (19 more removed lines; see GitHub link above)
+         name: "y",
+         type: "int"
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L406-L443` → after: `L111-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L111-L116) · [Before (L406-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L406-L443)

```diff
-         nameKey: "tierIsotope",
-         reactorTier: 1,
-         cost: [{
-           item: "Uranium Grit",
-           amount: 256
-         }, {
-           item: "Star Alloy",
-           amount: 8
-         }, {
-           item: "Comet Core",
-           amount: 3
-         }, {
-           item: "Glass",
-           amount: 16
-         }],
-         charge: {
- ... (22 more removed lines; see GitHub link above)
+         name: "z",
+         type: "int"
+       }],
+       ZW = [{
+         name: "name",
+         type: "string"
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L445-L476` → after: `L118-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L118-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L118-L122) · [Before (L445-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L445-L476)

```diff
-         nameKey: "tierFission",
-         reactorTier: 2,
-         cost: [{
-           item: "Uranium Pellet",
-           amount: 16
-         }, {
-           item: "Heat Exchanger",
-           amount: 8
-         }, {
-           item: "Star Alloy",
-           amount: 16
-         }, {
-           item: "Comet Core",
-           amount: 2
-         }],
-         charge: {
- ... (16 more removed lines; see GitHub link above)
+         name: "startOffset",
+         type: {
+           type: "record",
+           fields: tW
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L478-L509` → after: `L124-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L124-L128) · [Before (L478-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L478-L509)

```diff
-         nameKey: "tierCritical",
-         reactorTier: 3,
-         cost: [{
-           item: "Uranium Pellet",
-           amount: 24
-         }, {
-           item: "Spent Pellet",
-           amount: 8
-         }, {
-           item: "Star Alloy",
-           amount: 24
-         }, {
-           item: "Comet Core",
-           amount: 3
-         }],
-         charge: {
- ... (16 more removed lines; see GitHub link above)
+         name: "dimensions",
+         type: {
+           type: "record",
+           fields: tW
+         }
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L511-L535` → after: `L130-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L130-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L130-L213) · [Before (L511-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L511-L535)

```diff
-         nameKey: "tierCollider",
-         reactorTier: 4,
-         cost: [{
-           item: "Plutonium Pellet",
-           amount: 2
-         }, {
-           item: "Battery Cell",
-           amount: 4
-         }, {
-           item: "Star Alloy",
-           amount: 16
-         }, {
-           item: "Glow Dust",
-           amount: 16
-         }, {
-           item: "Comet Core",
- ... (9 more removed lines; see GitHub link above)
+         name: "chunkData",
+         type: {
+           type: "array",
+           items: {
+             type: "record",
+             fields: [...tW, {
+               name: "rle",
+               type: "bytes"
+             }]
+           }
+         }
+       }],
+       xW = EW().Type.forSchema({
+         type: "record",
+         fields: ZW
+       }),
+ ... (68 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L537-L571` → after: `L215-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L215-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L215-L252) · [Before (L537-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L537-L571)

```diff
-         islandRadius: 78,
-         machineAllowance: 616,
-         beltAllowance: 2640,
-         newDeposits: [{
-           block: "Uranium Deposit",
-           offset: [53, 0, -53]
-         }],
-         unlocks: ["Collider", "Laser", "Focus Lens", "Wireless Terminal", "Comet Beacon"],
-         reward: null
-       }, {
-         nameKey: "tierNovaCore",
-         reactorTier: 5,
-         cost: [{
-           item: "Nova Matter",
-           amount: 8
-         }, {
- ... (19 more removed lines; see GitHub link above)
+         MW = new Map,
+         KW = [],
+         YW = [];
+       for (const [NW, PW] of wW.entries()) {
+         const WW = tW.get(`${PW.x},${PW.y},${PW.z}`),
+           OW = [PW.x * kW, PW.y * kW, PW.z * kW],
+           mW = (iW, mW, EW) => iW < 0 || mW < 0 || EW < 0 || iW >= kW || mW >= kW || EW >= kW ? UW(OW[0] + iW, OW[1] + mW, OW[2] + EW) : WW[ZW(iW, mW, EW)],
+           EW = `${PW.x},${PW.z}`;
+         let LW = MW.get(EW);
+         void 0 === LW && (LW = {
+           chunkX: PW.x,
+           chunkZ: PW.z,
+           heights: new Int32Array(kW * kW).fill(sW),
+           colours: new Uint8Array(kW * kW * 3)
+         }, MW.set(EW, LW));
+         for (let NW = 0; NW < kW; NW++)
+ ... (22 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L573-L584` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L254-L255) · [Before (L573-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L573-L584)

```diff
-         islandRadius: 80,
-         machineAllowance: 680,
-         beltAllowance: 2928,
-         newDeposits: [],
-         unlocks: ["Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool", "Nova Coupler", "Pocket Terminal", "Atomic Bomb", "Nova Wrench", "Nova Bomb"],
-         reward: "Deposit Seed (Uranium)"
-       }],
-       Me = 10;
-     let Ke = !0;
- 
-     function Ue() {
-       return Ke
+         columnTops: [...MW.values()]
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L588-L599` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L259-L261) · [Before (L588-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L588-L599)

```diff
-       Ke = ee
-     }
-     const Je = {
-       11: "uraniumLine",
-       12: "centrifuge",
-       13: "reactorOnline",
-       14: "cryoCoolant",
-       15: "moreLasers"
-     };
- 
-     function oe() {
-       return Ke ? be.length : Me
+       if (0 === WW) return !0;
+       const iW = cW.j[WW];
+       return void 0 === iW || iW.dl || iW.transTex || !1 === iW.solid
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L603-L604` → after: `L265-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L265-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L265-L309) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L603-L604)

```diff
-       var ie, He;
-       return null !== (ie = null === (He = be[ee - 1]) || void 0 === He ? void 0 : He.reactorTier) && void 0 !== ie ? ie : 0
+       let iW = 1 / 0,
+         OW = -1 / 0,
+         mW = 1 / 0,
+         EW = -1 / 0;
+       for (const {
+           chunkX: AW,
+           chunkZ: bW,
+           heights: jW
+         }
+         of WW) jW.forEach(((WW, NW) => {
+         if (WW === sW) return;
+         const PW = AW * kW + NW % kW,
+           LW = bW * kW + Math.floor(NW / kW);
+         iW = Math.min(iW, PW), OW = Math.max(OW, PW), mW = Math.min(mW, LW), EW = Math.max(EW, LW)
+       }));
+       const NW = OW - iW + 1,
+ ... (29 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L607-L609` → after: `L312-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L312-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L312-L315) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L607-L609)

```diff
-     function ke(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Re(ee) > 0;
-       return He && !Ke ? "hidden" : ee <= ie ? "open" : He ? ie < 5 ? "hidden" : ie < Me ? "teaser" : "locked" : "locked"
+     function yW() {
+       return new Promise((WW => {
+         setTimeout(WW, 0)
+       }))
```

#### 19. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L611-L613` → after: `L317-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L317-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L317-L323) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L611-L613)

```diff
- 
-     function qe(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+   },
+   40748: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW
+     });
+     var mW = OW(40751);
+     async function EW() {
```

#### 20. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L615-L623` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L325-L327) · [Before (L615-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L615-L623)

```diff
-         kind: ye,
-         n: be
-       } = pe(ee);
-       return {
-         key: ie[ye],
-         params: {
-           [ye]: He ? String(be) : be
-         }
-       }
+         averageColors: WW
+       } = await OW.e(234).then((() => OW(35332)));
+       return new mW.d(WW)
```

#### 21. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L626-L710` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L337-L338) · [Before (L626-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L626-L710)

```diff
-       tier: "coreTierName",
-       stage: "coreStageName",
-       atomic: "coreAtomicName"
-     };
- 
-     function Te(ee, ie) {
-       return Re(ee) > 0 && ie < Me
-     }
- 
-     function pe(ee) {
-       const ie = Re(ee);
-       if (ie > 0) return {
-         kind: "atomic",
-         n: ie,
-         short: `A${ie}`
-       };
- ... (69 more removed lines; see GitHub link above)
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
```

#### 22. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L712-L734` → after: `L340-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L340-L344) · [Before (L712-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L712-L734)

```diff
-       Le = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
-       Ce = {
-         1: 20,
-         2: 60,
-         3: 120
-       },
-       ve = "baf2farmvoid",
-       ue = "Caged ",
-       me = " Spawner Block";
- 
-     function le(ee) {
-       return `lifeform:${(0,ae.ve)(ee)}`
-     }
- 
-     function Se(ee) {
-       if (!ee) return null;
- ... (7 more removed lines; see GitHub link above)
+       NW = [150, 150, 150],
+       PW = -2147483648;
+     class LW {
+       constructor(WW) {
+         this.averages = WW, this.byId = new Map
```

#### 23. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L736-L800` → after: `L346-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L346-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L346-L359) · [Before (L736-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L736-L800)

```diff
-       return null
-     }
- 
-     function ne(ee) {
-       return !0 === ee.mobFarm
-     }
- 
-     function je(ee, ie) {
-       return Ce[xe[ie]] * ee.opMs / 1e3
-     }
-     const se = new Map;
-     const Ie = "baf2islands",
-       he = "baf2islandnew";
- 
-     function Ne(ee) {
-       const ie = be.findIndex((ie => ie.unlocks.includes(ee)));
- ... (49 more removed lines; see GitHub link above)
+       get(WW) {
+         var iW, OW, PW, LW, cW;
+         const wW = this.byId.get(WW);
+         if (void 0 !== wW) return wW;
+         const tW = null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : "",
+           ZW = tW.split("|")[0],
+           xW = null !== (PW = this.averages[tW]) && void 0 !== PW ? PW : this.averages[ZW],
+           lW = null !== (LW = null !== (cW = null === xW || void 0 === xW ? void 0 : xW[0]) && void 0 !== cW ? cW : EW[ZW]) && void 0 !== LW ? LW : 0 === (null === xW || void 0 === xW ? void 0 : xW.length) ? null : NW;
+         return this.byId.set(WW, lW), lW
+       }
+       getDrawnIds() {
+         const WW = new Uint8Array(65536);
+         for (let iW = 1; iW < 65536; iW++) void 0 !== mW.j[iW] && null !== this.get(iW) && (WW[iW] = 1);
+         return WW
```

#### 24. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L802-L881` → after: `L361-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L361-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/270.js#L361-L367) · [Before (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/270.js#L802-L881)

```diff
-     }
- 
-     function Ui(ee, ie) {
-       const He = "number" === typeof ee ? ee : "one" === ee ? 1 : "stack" === ee ? 99 : ie;
-       return Math.min(ie, He)
-     }
- 
-     function Fi(ee, ie) {
-       const He = ee => "number" === typeof ee ? ee : "one" === ee ? 1 : 99;
-       return "fill" === ee || "fill" === ie ? "fill" : He(ee) + He(ie)
-     }
- 
-     function Ji(ee, ie) {
-       const He = Ki(ee),
-         ye = Ki(ie),
-         be = He && ye ? function(ee, ie) {
- ... (64 more removed lines; see GitHub link above)
+       drawPixel(WW, iW, OW, mW, EW, NW) {
+         const LW = function(WW, iW, OW) {
+             const mW = WW - iW + (WW - OW);
+             return Math.max(.65, Math.min(1.2, .97 + .055 * mW))
+           }(mW, EW === PW ? mW : EW, NW === PW ? mW : NW),
+           cW = this.get(OW);
+         WW[iW] = cW[0] * LW, WW[iW + 1] = cW[1] * LW, WW[iW + 2] = cW[2] * LW, WW[iW + 3] = 255
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (91 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L2)

```diff
- export const ids = [271];
+ export const ids = [271, 272];
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4` → after: `L4-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L4-L98) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4)

```diff
-   44803: (ee, ie, He) => {
+   41765: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW,
+       e: () => xW
+     });
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38241),
+       PW = OW(38372),
+       LW = OW(41773),
+       cW = OW(41732),
+       wW = OW(38299);
+     let tW = (() => {
+         var WW;
+         let iW, OW, cW = LW.b,
+           wW = [],
+ ... (79 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L8-L9` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L102) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L8-L9)

```diff
-     var ye = He(41216),
-       be = He(44806);
+     var mW = OW(38939);
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L11-L13` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L104-L107) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L11-L13)

```diff
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = He, this.kMe = [], this._maxBlockCapacity = ie || 64, this._selectionContent = new ye.d(1024), this._creationFunc = ee
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
```

#### 5. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L15-L16` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L109-L111) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L15-L16)

```diff
-       update(ee, ie, He) {
-         be.c._CreateBlocks(ee, ie, He, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
```

#### 6. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L18-L21` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L113-L115) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L18-L21)

```diff
-       Nbe(ee) {
-         for (let ie = 0; ie < this.blocks.length; ie++) {
-           this.blocks[ie].addEntry(ee)
-         }
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
```

#### 7. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L23-L26` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L117-L119) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L23-L26)

```diff
-       gL(ee) {
-         for (let ie = 0; ie < this.blocks.length; ie++) {
-           this.blocks[ie].removeEntry(ee)
-         }
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L28-L33` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L121-L123) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L28-L33)

```diff
-       select(ee, ie) {
-         this._selectionContent.reset();
-         for (let He = 0; He < this.blocks.length; He++) {
-           this.blocks[He].select(ee, this._selectionContent, ie)
-         }
-         return ie ? this._selectionContent.concat(this.kMe) : this._selectionContent.concatWithNoDuplicate(this.kMe), this._selectionContent
+       static GetRightPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L35-L40` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L125-L127) · [Before (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L35-L40)

```diff
-       intersects(ee, ie, He) {
-         this._selectionContent.reset();
-         for (let ye = 0; ye < this.blocks.length; ye++) {
-           this.blocks[ye].intersects(ee, ie, this._selectionContent, He)
-         }
-         return He ? this._selectionContent.concat(this.kMe) : this._selectionContent.concatWithNoDuplicate(this.kMe), this._selectionContent
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L42-L47` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L129-L139) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L42-L47)

```diff
-       intersectsRay(ee) {
-         this._selectionContent.reset();
-         for (let ie = 0; ie < this.blocks.length; ie++) {
-           this.blocks[ie].intersectsRay(ee, this._selectionContent)
-         }
-         return this._selectionContent.concatWithNoDuplicate(this.kMe), this._selectionContent
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
+       }
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
+       }
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
```

#### 11. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L57` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L143) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L57)

```diff
-   44806: (ee, ie, He) => {
+   38939: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L61-L62` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L147) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L61-L62)

```diff
-     var ye = He(37917),
-       be = He(41437);
+     var mW = OW(38241);
```

#### 13. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L64-L65` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L149-L150) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L64-L65)

```diff
-       constructor(ee, ie, He, ye, be, Me) {
-         this.entries = [], this.qMe = new Array, this._capacity = He, this._depth = ye, this._maxDepth = be, this._creationFunc = Me, this._minPoint = ee, this._maxPoint = ie, this.qMe.push(ee.clone()), this.qMe.push(ie.clone()), this.qMe.push(ee.clone()), this.qMe[2].x = ie.x, t … [truncated]
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
```

#### 14. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L67-L68` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L152-L153) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L67-L68)

```diff
-       get bk() {
-         return this._capacity
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 15. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L70-L71` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L155-L156) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L70-L71)

```diff
-       get MMe() {
-         return this._minPoint
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 16. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L73-L74` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L158-L159) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L73-L74)

```diff
-       get bMe() {
-         return this._maxPoint
+       getClassName() {
+         return "Plane"
```

#### 17. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L76-L80` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L161-L163) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L76-L80)

```diff
-       addEntry(ee) {
-         if (this.blocks)
-           for (let ie = 0; ie < this.blocks.length; ie++) {
-             this.blocks[ie].addEntry(ee)
-           } else this._creationFunc(ee, this), this.entries.length > this.bk && this._depth < this._maxDepth && this.createInnerBlocks()
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+         return WW = 397 * WW ^ this.d, WW
```

#### 18. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L82-L90` → after: `L165-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L165-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L165-L199) · [Before (L82-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L82-L90)

```diff
-       removeEntry(ee) {
-         if (this.blocks) {
-           for (let ie = 0; ie < this.blocks.length; ie++) {
-             this.blocks[ie].removeEntry(ee)
-           }
-           return
-         }
-         const ie = this.entries.indexOf(ee);
-         ie > -1 && this.entries.splice(ie, 1)
+       normalize() {
+         const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let iW = 0;
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+ ... (19 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L92-L96` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L201-L202) · [Before (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L92-L96)

```diff
-       addEntries(ee) {
-         for (let ie = 0; ie < ee.length; ie++) {
-           const He = ee[ie];
-           this.addEntry(He)
-         }
+       isFrontFacingTo(WW, iW) {
+         return mW.q.Dot(this.normal, WW) <= iW
```

#### 20. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L98-L107` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L204-L205) · [Before (L98-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L98-L107)

```diff
-       select(ee, ie, He) {
-         if (be.d.IsInFrustum(this.qMe, ee)) {
-           if (this.blocks) {
-             for (let ye = 0; ye < this.blocks.length; ye++) {
-               this.blocks[ye].select(ee, ie, He)
-             }
-             return
-           }
-           He ? ie.concat(this.entries) : ie.concatWithNoDuplicate(this.entries)
-         }
+       signedDistanceTo(WW) {
+         return mW.q.Dot(WW, this.normal) + this.d
```

#### 21. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L109-L118` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L207-L208) · [Before (L109-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L109-L118)

```diff
-       intersects(ee, ie, He, ye) {
-         if (be.d.IntersectsSphere(this._minPoint, this._maxPoint, ee, ie)) {
-           if (this.blocks) {
-             for (let be = 0; be < this.blocks.length; be++) {
-               this.blocks[be].intersects(ee, ie, He, ye)
-             }
-             return
-           }
-           ye ? He.concat(this.entries) : He.concatWithNoDuplicate(this.entries)
-         }
+       static FromArray(WW) {
+         return new EW(WW[0], WW[1], WW[2], WW[3])
```

#### 22. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L120-L129` → after: `L210-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L210-L212) · [Before (L120-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L120-L129)

```diff
-       intersectsRay(ee, ie) {
-         if (ee.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
-           if (this.blocks) {
-             for (let He = 0; He < this.blocks.length; He++) {
-               this.blocks[He].intersectsRay(ee, ie)
-             }
-             return
-           }
-           ie.concatWithNoDuplicate(this.entries)
-         }
+       static FromPoints(WW, iW, OW) {
+         const mW = new EW(0, 0, 0, 0);
+         return mW.copyFromPoints(WW, iW, OW), mW
```

#### 23. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L131-L132` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L214-L216) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L131-L132)

```diff
-       createInnerBlocks() {
-         Me._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       static FromPositionAndNormal(WW, iW) {
+         const OW = new EW(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(WW, iW, OW)
```

#### 24. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L134-L144` → after: `L218-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L218-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L218-L223) · [Before (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L134-L144)

```diff
-       static _CreateBlocks(ee, ie, He, be, Ke, Ue, Fe, Je) {
-         Fe.blocks = new Array;
-         const oe = new ye.p((ie.x - ee.x) / 2, (ie.y - ee.y) / 2, (ie.z - ee.z) / 2);
-         for (let ye = 0; ye < 2; ye++)
-           for (let ie = 0; ie < 2; ie++)
-             for (let Re = 0; Re < 2; Re++) {
-               const ke = ee.add(oe.multiplyByFloats(ye, ie, Re)),
-                 qe = ee.add(oe.multiplyByFloats(ye + 1, ie + 1, Re + 1)),
-                 fe = new Me(ke, qe, be, Ke + 1, Ue, Je);
-               fe.addEntries(He), Fe.blocks.push(fe)
-             }
+       static FromPositionAndNormalToRef(WW, iW, OW) {
+         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
+         const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
+         return mW.q.Dot(OW, iW) + EW
```

#### 25. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L148` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L228) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L148)

```diff
-   44812: (ee, ie, He) => {
+   39271: (WW, iW, OW) => {
```

#### 26. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L150` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L230) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L150)

```diff
-       b: () => oe
+       e: () => mW
```

#### 27. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L160-L172` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L233-L234) · [Before (L160-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L160-L172)

```diff
-       constructor(ee) {
-         this.name = Ue.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Ke.D(be.p.Zero(), new be.p(1, 1, 1)), (ee = ee || Fe.b.LastCreatedScene) && (this.yp = ee, this.yp.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.yp.getActiveSubMeshCandidat … [truncated]
-       }
-       register() {
-         this.yp.onMeshRemovedObservable.add((ee => {
-           const ie = this.yp.selectionOctree;
-           if (void 0 !== ie && null !== ie) {
-             const He = ie.kMe.indexOf(ee); - 1 !== He && ie.kMe.splice(He, 1)
-           }
-         })), this.yp.onMeshImportedObservable.add((ee => {
-           const ie = this.yp.selectionOctree;
-           void 0 !== ie && null !== ie && ie.Nbe(ee)
-         }))
+       constructor(WW, iW, OW, mW) {
+         this.x = WW, this.y = iW, this.width = OW, this.height = mW
```

#### 28. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L174-L175` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L236-L237) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L174-L175)

```diff
-       getActiveMeshCandidates() {
-         return this.yp.EMe?.select(this.yp.frustumPlanes) || this.yp._getDefaultMeshCandidates()
+       toGlobal(WW, iW) {
+         return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
```

#### 29. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L177-L181` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L239-L240) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L177-L181)

```diff
-       getActiveSubMeshCandidates(ee) {
-         if (ee._submeshesOctree && ee.useOctreeForRenderingSelection) {
-           return ee._submeshesOctree.select(this.yp.frustumPlanes)
-         }
-         return this.yp._getDefaultSubMeshCandidates(ee)
+       toGlobalToRef(WW, iW, OW) {
+         return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
```

#### 30. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L183-L188` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L242-L243) · [Before (L183-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L183-L188)

```diff
-       getIntersectingSubMeshCandidates(ee, ie) {
-         if (ee._submeshesOctree && ee.useOctreeForPicking) {
-           Ke.D.TransformToRef(ie, ee.getWorldMatrix(), this._tempRay);
-           return ee._submeshesOctree.intersectsRay(this._tempRay)
-         }
-         return this.yp._getDefaultSubMeshCandidates(ee)
+       clone() {
+         return new mW(this.x, this.y, this.width, this.height)
```

#### 31. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L190-L193` → after: `L245-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L245-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L245-L285) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L190-L193)

```diff
-       getCollidingSubMeshCandidates(ee, ie) {
-         if (ee._submeshesOctree && ee.useOctreeForCollisions) {
-           const He = ie._velocityWorldLength + Math.max(ie._radius.x, ie._radius.y, ie._radius.z);
-           return ee._submeshesOctree.intersects(ie._basePointWorld, He)
+     }
+   },
+   39908: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
+     });
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+           const iW = [];
+           do {
+ ... (25 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L200-L221` → after: `L289-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L289-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L289-L298) · [Before (L200-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L200-L221)

```diff
-     let Re = !1;
-     Re || (Re = !0, ye.f.prototype.createOrUpdateSelectionOctree = function() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
-         ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
-         He = this._getComponent(Ue.c.NAME_OCTREE);
-       He || (He = new oe(this), this.Cbe(He)), this.EMe || (this.EMe = new Je.e(Je.e.CreationFuncForMeshes, ee, ie));
-       const ye = this.getWorldExtends();
-       return this.EMe.update(ye.min, ye.max, this.meshes), this.EMe
-     }, Object.defineProperty(ye.f.prototype, "selectionOctree", {
-       get: function() {
-         return this.EMe
-       },
-       enumerable: !0,
-       configurable: !0
-     }), Me.b.prototype.createOrUpdateSubmeshesOctree = function() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
- ... (6 more removed lines; see GitHub link above)
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
+     }
+     OW.d(iW, {
+       b: () => mW
```

#### 33. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L224` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L301) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L224)

```diff
-   44753: (ee, ie, He) => {
+   39911: (WW, iW, OW) => {
```

#### 34. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L226-L235` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L303) · [Before (L226-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L226-L235)

```diff
-       B: () => We,
-       D: () => Re,
-       d: () => Pe,
-       h: () => Te,
-       k: () => fe,
-       m: () => qe,
-       q: () => we,
-       t: () => Ze,
-       w: () => de,
-       z: () => te
+       b: () => mW
```

#### 35. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L249-L251` → after: `L425-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L425-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L425-L445) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L249-L251)

```diff
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ye.b;
-         this.origin = ee, this.direction = ie, this.length = He, this.epsilon = be
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           EW = arguments.length > 3 ? arguments[3] : void 0,
+           NW = arguments.length > 4 ? arguments[4] : void 0,
+           PW = arguments.length > 5 ? arguments[5] : void 0,
+           LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const cW = {
+           uniforms: tW.Uniforms,
+           size: "number" === typeof iW ? iW : void 0,
+           camera: OW,
+           samplingMode: EW || mW.h.BILINEAR_SAMPLINGMODE,
+           engine: NW,
+           reusable: PW,
+           textureType: LW,
+           ...iW
+         };
+         super(WW, tW.FragmentUrl, {
+ ... (5 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L253-L254` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L447-L448) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L253-L254)

```diff
-       clone() {
-         return new Re(this.origin.clone(), this.direction.clone(), this.length)
+       static _Parse(WW, iW, OW, mW) {
+         return PW.d.Parse((() => new ZW(WW.name, WW.options, iW, WW.renderTargetSamplingMode, OW.VA(), WW.reusable)), WW, OW, mW)
```

#### 37. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L256-L271` → after: `L450-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L450-L459) · [Before (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L256-L271)

```diff
-       intersectsBoxMinMax(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         const ye = Re._TmpVector3[0].wie(ee.x - He, ee.y - He, ee.z - He),
-           be = Re._TmpVector3[1].wie(ie.x + He, ie.y + He, ie.z + He);
-         let Me, Ke, Ue, Fe, Je = 0,
-           oe = Number.MAX_VALUE;
-         if (Math.abs(this.direction.x) < 1e-7) {
-           if (this.origin.x < ye.x || this.origin.x > be.x) return !1
-         } else if (Me = 1 / this.direction.x, Ke = (ye.x - this.origin.x) * Me, Ue = (be.x - this.origin.x) * Me, Ue === -1 / 0 && (Ue = 1 / 0), Ke > Ue && (Fe = Ke, Ke = Ue, Ue = Fe), Je = Math.max(Ke, Je), oe = Math.min(Ue, oe), Je > oe) return !1;
-         if (Math.abs(this.direction.y) < 1e-7) {
-           if (this.origin.y < ye.y || this.origin.y > be.y) return !1
-         } else if (Me = 1 / this.direction.y, Ke = (ye.y - this.origin.y) * Me, Ue = (be.y - this.origin.y) * Me, Ue === -1 / 0 && (Ue = 1 / 0), Ke > Ue && (Fe = Ke, Ke = Ue, Ue = Fe), Je = Math.max(Ke, Je), oe = Math.min(Ue, oe), Je > oe) return !1;
-         if (Math.abs(this.direction.z) < 1e-7) {
-           if (this.origin.z < ye.z || this.origin.z > be.z) return !1
-         } else if (Me = 1 / this.direction.z, Ke = (ye.z - this.origin.z) * Me, Ue = (be.z - this.origin.z) * Me, Ue === -1 / 0 && (Ue = 1 / 0), Ke > Ue && (Fe = Ke, Ke = Ue, Ue = Fe), Je = Math.max(Ke, Je), oe = Math.min(Ue, oe), Je > oe) return !1;
-         return !0
+     }
+     var xW = OW(39911),
+       lW = OW(41620),
+       AW = OW(54011),
+       bW = OW(53995),
+       jW = OW(41420);
+     const UW = 0;
+     class kW {
+       constructor(WW, iW, OW) {
+         this.name = WW, this._parentTask = iW, this._context = OW, this.disabled = !1
```

#### 38. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L273-L275` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L461-L462) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L273-L275)

```diff
-       intersectsBox(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return this.intersectsBoxMinMax(ee.minimum, ee.maximum, ie)
+       setInitializeFunc(WW) {
+         this._initFunc = WW
```

#### 39. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L277-L288` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L464-L465) · [Before (L277-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L277-L288)

```diff
-       intersectsSphere(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const He = ee.center.x - this.origin.x,
-           ye = ee.center.y - this.origin.y,
-           be = ee.center.z - this.origin.z,
-           Me = He * He + ye * ye + be * be,
-           Ke = ee.radius + ie,
-           Ue = Ke * Ke;
-         if (Me <= Ue) return !0;
-         const Fe = He * this.direction.x + ye * this.direction.y + be * this.direction.z;
-         if (Fe < 0) return !1;
-         return Me - Fe * Fe <= Ue
+       setExecuteFunc(WW) {
+         this._executeFunc = WW
```

#### 40. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L290-L307` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L467-L468) · [Before (L290-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L290-L307)

```diff
-       intersectsTriangle(ee, ie, He) {
-         const ye = Re._TmpVector3[0],
-           Me = Re._TmpVector3[1],
-           Ue = Re._TmpVector3[2],
-           Fe = Re._TmpVector3[3],
-           Je = Re._TmpVector3[4];
-         ie.subtractToRef(ee, ye), He.subtractToRef(ee, Me), be.p.CrossToRef(this.direction, Me, Ue);
-         const oe = be.p.Dot(ye, Ue);
-         if (0 === oe) return null;
-         const ke = 1 / oe;
-         this.origin.subtractToRef(ee, Fe);
-         const qe = be.p.Dot(Fe, Ue) * ke;
-         if (qe < -this.epsilon || qe > 1 + this.epsilon) return null;
-         be.p.CrossToRef(Fe, ye, Je);
-         const fe = be.p.Dot(this.direction, Je) * ke;
-         if (fe < -this.epsilon || qe + fe > 1 + this.epsilon) return null;
- ... (2 more removed lines; see GitHub link above)
+       _execute() {
+         this.disabled || this._executeFunc(this._context)
```

#### 41. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L309-L316` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L470-L471) · [Before (L309-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L309-L316)

```diff
-       intersectsPlane(ee) {
-         let ie;
-         const He = be.p.Dot(ee.normal, this.direction);
-         if (Math.abs(He) < 9.99999997475243e-7) return null;
-         {
-           const ye = be.p.Dot(ee.normal, this.origin);
-           return ie = (-ee.d - ye) / He, ie < 0 ? ie < -9.99999997475243e-7 ? null : 0 : ie
-         }
+       _initialize() {
+         this._initFunc?.(this._context)
```

#### 42. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L318-L335` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L473-L474) · [Before (L318-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L318-L335)

```diff
-       intersectsAxis(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         switch (ee) {
-           case "y": {
-             const ee = (this.origin.y - ie) / this.direction.y;
-             return ee > 0 ? null : new be.p(this.origin.x + this.direction.x * -ee, ie, this.origin.z + this.direction.z * -ee)
-           }
-           case "x": {
-             const ee = (this.origin.x - ie) / this.direction.x;
-             return ee > 0 ? null : new be.p(ie, this.origin.y + this.direction.y * -ee, this.origin.z + this.direction.z * -ee)
-           }
-           case "z": {
-             const ee = (this.origin.z - ie) / this.direction.z;
-             return ee > 0 ? null : new be.p(this.origin.x + this.direction.x * -ee, this.origin.y + this.direction.y * -ee, ie)
-           }
-           default:
- ... (2 more removed lines; see GitHub link above)
+       _isValid() {
+         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
```

#### 43. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L337-L342` → after: `L476-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L476-L480) · [Before (L337-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L337-L342)

```diff
-       CMe(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           Me = arguments.length > 4 ? arguments[4] : void 0,
-           Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         const Ue = be.j.Matrix[0];
-         return ee.getWorldMatrix().invertToRef(Ue), this._tmpRay ? Re.TransformToRef(this, Ue, this._tmpRay) : this._tmpRay = Re.Transform(this, Ue), ee.intersects(this._tmpRay, ie, He, ye, Me, Ke)
+       _dispose() {}
+     }
+     class sW extends kW {
+       static IsObjectListPass(WW) {
+         return void 0 !== WW.setObjectList
```

#### 44. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L344-L350` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L482-L483) · [Before (L344-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L344-L350)

```diff
-       intersectsMeshes(ee, ie, He) {
-         He ? He.length = 0 : He = [];
-         for (let ye = 0; ye < ee.length; ye++) {
-           const be = this.CMe(ee[ye], ie);
-           be.hit && He.push(be)
-         }
-         return He.sort(this._comparePickingInfo), He
+       get objectList() {
+         return this._objectList
```

#### 45. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L352-L353` → after: `L485-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L485-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L485-L489) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L352-L353)

```diff
-       _comparePickingInfo(ee, ie) {
-         return ee.distance < ie.distance ? -1 : ee.distance > ie.distance ? 1 : 0
+       setObjectList(WW) {
+         this._objectList = WW
+       }
+       constructor(WW, iW, OW, mW) {
+         super(WW, iW, OW), this._engine = mW
```

#### 46. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L355-L379` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L491-L493) · [Before (L355-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L355-L379)

```diff
-       intersectionSegment(ee, ie, He) {
-         const ye = this.origin,
-           Me = be.j.rf[0],
-           Ke = be.j.rf[1],
-           Ue = be.j.rf[2],
-           Fe = be.j.rf[3];
-         ie.subtractToRef(ee, Me), this.direction.scaleToRef(Re._Rayl, Ue), ye.addToRef(Ue, Ke), ee.subtractToRef(ye, Fe);
-         const Je = be.p.Dot(Me, Me),
-           oe = be.p.Dot(Me, Ue),
-           ke = be.p.Dot(Ue, Ue),
-           qe = be.p.Dot(Me, Fe),
-           fe = be.p.Dot(Ue, Fe),
-           Te = Je * ke - oe * oe;
-         let pe, Xe, ze = Te,
-           Be = Te;
-         Te < Re._Smallnum ? (pe = 0, ze = 1, Xe = fe, Be = ke) : (pe = oe * fe - ke * qe, Xe = Je * fe - oe * qe, pe < 0 ? (pe = 0, Xe = fe, Be = ke) : pe > ze && (pe = ze, Xe = fe + oe, Be = ke)), Xe < 0 ? (Xe = 0, -qe < 0 ? pe = 0 : -qe > Je ? pe = ze : (pe = -qe, ze = Je)) : X … [truncated]
- ... (9 more removed lines; see GitHub link above)
+       _isValid() {
+         const WW = super._isValid();
+         return WW || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
```

#### 47. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L381-L387` → after: `L495-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L495-L498) · [Before (L381-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L381-L387)

```diff
-       update(ee, ie, He, ye, Me, Ke, Ue) {
-         if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
-           Re._RayDistant || (Re._RayDistant = Re.Zero()), Re._RayDistant.unprojectRayToRef(ee, ie, He, ye, be.b.IdentityReadOnly, Ke, Ue);
-           const Fe = be.j.Matrix[0];
-           Me.invertToRef(Fe), Re.TransformToRef(Re._RayDistant, Fe, this)
-         } else this.unprojectRayToRef(ee, ie, He, ye, Me, Ke, Ue);
-         return this
+     }
+     class MW extends kW {
+       static IsRenderPass(WW) {
+         return void 0 !== WW.setRenderTarget
```

#### 48. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L389-L390` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L500-L501) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L389-L390)

```diff
-       static Zero() {
-         return new Re(be.p.Zero(), be.p.Zero())
+       get renderTarget() {
+         return this._renderTarget
```

#### 49. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L392-L393` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L503-L504) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L392-L393)

```diff
-       static CreateNew(ee, ie, He, ye, be, Me, Ke) {
-         return Re.Zero().update(ee, ie, He, ye, be, Me, Ke)
+       get renderTargetDepth() {
+         return this._renderTargetDepth
```

#### 50. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L395-L398` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L506-L507) · [Before (L395-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L395-L398)

```diff
-       static CreateNewFromTo(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.b.IdentityReadOnly;
-         const ye = new Re(new be.p(0, 0, 0), new be.p(0, 0, 0));
-         return Re.CreateFromToToRef(ee, ie, ye, He)
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
```

#### 51. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L400-L405` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L509-L510) · [Before (L400-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L400-L405)

```diff
-       static CreateFromToToRef(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : be.b.IdentityReadOnly;
-         He.origin.jD(ee);
-         const Me = ie.subtractToRef(ee, He.direction),
-           Ke = Math.sqrt(Me.x * Me.x + Me.y * Me.y + Me.z * Me.z);
-         return He.length = Ke, He.direction.normalize(), Re.TransformToRef(He, ye, He)
+       constructor(WW, iW, OW, mW) {
+         super(WW, iW, OW), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = mW
```

#### 52. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L407-L409` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L512-L513) · [Before (L407-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L407-L409)

```diff
-       static Transform(ee, ie) {
-         const He = new Re(new be.p(0, 0, 0), new be.p(0, 0, 0));
-         return Re.TransformToRef(ee, ie, He), He
+       setRenderTarget(WW) {
+         this._renderTarget = WW
```

#### 53. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L411-L419` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L515-L516) · [Before (L411-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L411-L419)

```diff
-       static TransformToRef(ee, ie, He) {
-         be.p.TransformCoordinatesToRef(ee.origin, ie, He.origin), be.p.TransformNormalToRef(ee.direction, ie, He.direction), He.length = ee.length, He.epsilon = ee.epsilon;
-         const ye = He.direction,
-           Me = ye.length();
-         if (0 !== Me && 1 !== Me) {
-           const ee = 1 / Me;
-           ye.x *= ee, ye.y *= ee, ye.z *= ee, He.length *= Me
-         }
-         return He
+       setRenderTargetDepth(WW) {
+         this._renderTargetDepth = WW
```

#### 54. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L421-L430` → after: `L518-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L518-L522) · [Before (L421-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L421-L430)

```diff
-       unprojectRayToRef(ee, ie, He, ye, Me, Ke, Ue) {
-         const Je = be.j.Matrix[0];
-         Me.multiplyToRef(Ke, Je), Je.multiplyToRef(Ue, Je), Je.invert();
-         const oe = Fe.b.LastCreatedEngine,
-           Re = be.j.rf[0];
-         Re.x = ee / He * 2 - 1, Re.y = -(ie / ye * 2 - 1), Re.z = oe?.Gbe ? 1 : oe?.isNDCHalfZRange ? 0 : -1;
-         const ke = be.j.rf[1].wie(Re.x, Re.y, 1 - 1e-8),
-           qe = be.j.rf[2],
-           fe = be.j.rf[3];
-         be.p.TransformCoordinatesToRef(Re, Je, qe), be.p.TransformCoordinatesToRef(ke, Je, fe), this.origin.jD(qe), fe.subtractToRef(qe, this.direction), this.direction.normalize()
+       addDependencies(WW) {
+         if (void 0 !== WW)
+           if (Array.isArray(WW))
+             for (const iW of WW) this._dependencies.add(iW);
+           else this._dependencies.add(WW)
```

#### 55. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L432-L501` → after: `L524-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L524-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L524-L549) · [Before (L432-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L432-L501)

```diff
-     }
- 
-     function ke(ee, ie, He, ye, be) {
-       let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       const Ke = Re.Zero();
-       return qe(ee, ie, He, ye, Ke, be, Me), Ke
-     }
- 
-     function qe(ee, ie, He, ye, Me, Ke) {
-       let Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Fe = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       const Je = ee.Nf();
-       if (!Ke && !(Ke = ee.activeCamera) && !(Ke = ee.cameraToUseForPointers)) return ee;
-       const oe = Ke.viewport,
-         Re = Je.getRenderHeight(),
-         {
- ... (54 more removed lines; see GitHub link above)
+       collectDependencies(WW) {
+         const iW = this._dependencies.keys();
+         for (let OW = iW.next(); !0 !== OW.done; OW = iW.next()) WW.add(OW.value);
+         if (void 0 !== this._renderTarget)
+           if (Array.isArray(this._renderTarget))
+             for (const OW of this._renderTarget) void 0 !== OW && WW.add(OW);
+           else WW.add(this._renderTarget);
+         void 0 !== this._renderTargetDepth && WW.add(this._renderTargetDepth)
+       }
+       setOutputLayerAndFaceIndices(WW) {
+         const iW = this.frameGraphRenderTarget.renderTargetWrapper;
+         if (iW)
+           for (const OW of WW) iW.setLayerAndFaceIndex(OW.targetIndex, OW.layerIndex, OW.faceIndex)
+       }
+       _initialize() {
+         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
+ ... (10 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L504-L547` → after: `L552-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L552-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L552-L640) · [Before (L504-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L504-L547)

```diff
- 
-     function Ee(ee, ie, He, ye, be) {
-       const Me = ee(He, ie.enableDistantPicking);
-       return Me.intersectsSphere(ye.OMe, be) && Me.intersectsBox(ye.boundingBox, be) ? Me : null
-     }
- 
-     function ge(ee, ie, He, ye, Me, Ke) {
-       let Fe = null;
-       const Je = !!(ee.activeCameras && ee.activeCameras.length > 1 && ee.cameraToUseForPointers !== ee.activeCamera),
-         Re = ee.cameraToUseForPointers || ee.activeCamera,
-         ke = oe.internalPickerForMesh || pe,
-         qe = ke === pe;
-       for (let Ue = 0; Ue < ee.meshes.length; Ue++) {
-         const oe = ee.meshes[Ue];
-         if (He) {
-           if (!He(oe, -1)) continue
- ... (28 more removed lines; see GitHub link above)
+     var KW = OW(38276);
+     class SW {
+       get name() {
+         return this._name
+       }
+       set name(WW) {
+         this._name = WW
+       }
+       get disabled() {
+         return this._disabled
+       }
+       set disabled(WW) {
+         this._disabled = WW
+       }
+       get passes() {
+         return this._passes
+ ... (73 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L550-L589` → after: `L644-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L644-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L644-L650) · [Before (L550-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L550-L589)

```diff
-       return Fe || new Ue.e
-     }
- 
-     function Oe(ee, ie, He, ye) {
-       if (!Ue.e) return null;
-       const Me = [],
-         Ke = !!(ee.activeCameras && ee.activeCameras.length > 1 && ee.cameraToUseForPointers !== ee.activeCamera),
-         Fe = ee.cameraToUseForPointers || ee.activeCamera,
-         Je = oe.internalPickerForMesh || pe,
-         Re = Je === pe;
-       for (let Ue = 0; Ue < ee.meshes.length; Ue++) {
-         const oe = ee.meshes[Ue];
-         if (He) {
-           if (!He(oe, -1)) continue
-         } else if (!oe.isEnabled() || !oe.isVisible || !oe.Mp) continue;
-         const ke = Ke && oe.isWorldMatrixCameraDependent(),
- ... (24 more removed lines; see GitHub link above)
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const WW of this._passes) WW._initialize();
+           for (const WW of this._passesDisabled) WW._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 58. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L592-L627` → after: `L653-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L653-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L653-L659) · [Before (L592-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L592-L627)

```diff
-       return Me
-     }
- 
-     function de(ee, ie, He, ye, Me, Ke) {
-       if (!Ue.e) return null;
-       const Fe = ge(ee, (ye => (ee._tempPickingRay || (ee._tempPickingRay = Re.Zero()), qe(ee, ie, He, ye, ee._tempPickingRay, Ke || null), ee._tempPickingRay)), ye, Me, !0);
-       return Fe && (Fe.ray = ke(ee, ie, He, be.b.Identity(), Ke || null)), Fe
-     }
- 
-     function We(ee, ie, He, ye, Me, Ke, Ue) {
-       const Fe = ge(ee, ((ye, be) => (ee._tempPickingRay || (ee._tempPickingRay = Re.Zero()), qe(ee, ie, He, ye, ee._tempPickingRay, Ke || null, !1, be), ee._tempPickingRay)), ye, Me, !1, Ue);
-       return Fe && (Fe.ray = ke(ee, ie, He, be.b.Identity(), Ke || null)), Fe
-     }
- 
-     function te(ee, ie, He, ye, Me) {
-       const Ke = ge(ee, (He => (ee._pickWithRayInverseMatrix || (ee._pickWithRayInverseMatrix = be.b.Identity()), He.invertToRef(ee._pickWithRayInverseMatrix), ee._cachedRayForTransform || (ee._cachedRayForTransform = Re.Zero()), Re.TransformToRef(ie, ee._pickWithRayInverseMatrix … [truncated]
- ... (20 more removed lines; see GitHub link above)
+       _checkSameRenderTarget(WW, iW) {
+         if (null === WW || null === iW) return WW === iW;
+         if (WW.length !== iW.length) return !1;
+         for (let OW = 0; OW < WW.length; OW++)
+           if (WW[OW] !== iW[OW]) return !1;
+         return !0
+       }
```

#### 59. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L629-L3560` → after: `L661-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L661-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L661-L663) · [Before (L629-L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L629-L3560)

```diff
- 
-     function Pe(ee, ie) {
-       ie && (ie.prototype.getForwardRay = function() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
-           ie = arguments.length > 1 ? arguments[1] : void 0,
-           He = arguments.length > 2 ? arguments[2] : void 0;
-         return De(this, new Re(be.p.Zero(), be.p.Zero(), ee), ee, ie, He)
-       }, ie.prototype.getForwardRayToRef = function(ee) {
-         return De(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
-       }), ee && (Je.c._IsPickingAvailable = !0, ee.prototype.createPickingRay = function(ee, ie, He, ye) {
-         return ke(this, ee, ie, He, ye, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
-       })
-     }
-     Re._TmpVector3 = (0, Me.c)(6, be.p.Zero), Re._RayDistant = Re.Zero(), Re._Smallnum = 1e-8, Re._Rayl = 1e9
-   },
-   44748: (ee, ie, He) => {
- ... (2916 more removed lines; see GitHub link above)
+     class YW extends SW {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 60. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3562-L3598` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L665-L666) · [Before (L3562-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3562-L3598)

```diff
-       _getWrapper(ee) {
-         var ie;
-         const He = this._getCustomDrawWrapper(ee);
-         if (He?.effect) return He;
-         const ye = [];
-         this.fillDefines(ye, ee);
-         const Me = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           Ke = Yi.b._PrepareStringDefines(Me, ye),
-           Ue = Ke ? Yi.b.GetConfiguration(Me) : void 0;
-         let Fe = this._drawWrappers[Me];
-         Fe || (Fe = this._drawWrappers[Me] = [], 0 === Me || this._renderPassObserver || (this._renderPassObserver = ((ie = this._engine)._onReleaseRenderPassObservable ?? (ie._onReleaseRenderPassObservable = new be.d)).add((ee => {
-           const ie = this._drawWrappers[ee];
-           if (ie) {
-             for (const ee of ie) ee?.dispose();
-             delete this._drawWrappers[ee]
-           }
- ... (21 more removed lines; see GitHub link above)
+       set alphaMode(WW) {
+         this.postProcess.alphaMode = WW
```

#### 61. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3600-L3610` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L668-L669) · [Before (L3600-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3600-L3610)

```diff
-       _bindGeometryRendering(ee) {
-         const ie = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           He = Yi.b.GetConfiguration(ie);
-         if (!He?._defines) return;
-         ee.setFloat("objectId", 0), ee.setInt("meshBlendTag", 0);
-         const ye = this._scene?.activeCamera;
-         if (ee.setFloat2("cameraInfo", ye?.minZ ?? 0, ye?.maxZ ?? 1), this.isLocal && void 0 !== He.defines.PREPASS_LOCAL_POSITION_INDEX) {
-           ee.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
-           const ie = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Me.p.ZeroReadOnly, Me.j.rf[0]);
-           ee.setVector3("geometryWorldOffset", ie)
-         }
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 62. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3612-L3639` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L671-L672) · [Before (L3612-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3612-L3639)

```diff
-       animate() {
-         let ee, ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._started && !this.paused) {
-           if (!ie && this._scene) {
-             if (!this.isReady()) return;
-             if (this._currentRenderId === this._scene.getFrameId()) return;
-             this._currentRenderId = this._scene.getFrameId()
-           }
-           if (this._scaledUpdateSpeed = this.updateSpeed * (ie ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) ee = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
-           else {
-             const ie = this._calculateEmitRate();
-             ee = ie * this._scaledUpdateSpeed | 0, this._newPartsExcess += ie * this._scaledUpdateSpeed - ee
-           }
-           if (this._newPartsExcess > 1 && (ee += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? ee = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopD … [truncated]
-             let ee = 0;
-             for (let ie = 0; ie < this._particles.length; ie++) {
- ... (12 more removed lines; see GitHub link above)
+       constructor(WW, iW, OW) {
+         super(WW, iW), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = OW, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3641-L3642` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L674-L675) · [Before (L3641-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3641-L3642)

```diff
-       _initFixedCapacitySnapshotData() {
-         return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
+       isReady() {
+         return this.postProcess.isReady()
```

#### 64. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3644-L3647` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L677-L678) · [Before (L3644-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3644-L3647)

```diff
-       _clearFixedCapacitySnapshotData() {
-         if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
-         const ee = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
-         this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * ee), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
+       getClassName() {
+         return "FrameGraphPostProcessTask"
```

#### 65. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3649-L3654` → after: `L680-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L680-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L680-L700) · [Before (L3649-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3649-L3654)

```diff
-       _calculateEmitRate() {
-         let ee = this.emitRate;
-         if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
-           const ie = this._actualFrame / this.targetStopDuration;
-           ye.k.GetCurrentGradient(ie, this._emitRateGradients, ((ie, He, ye) => {
-             ie !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = He.getFactor(), this._currentEmitRateGradient = ie), ee = (0, qe.Lerp)(this._currentEmitRate1, this._currentEmitRate2, ye)
+       record() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const mW = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (mW && (mW.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, mW), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+           const WW = this._frameGraph.textureManager.getTextureAbsoluteDimensions(mW);
+           this._sourceWidth = WW.width, this._sourceHeight = WW.height
+         }
+         const EW = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
+         this._outputWidth = EW.size.width, this._outputHeight = EW.size.height;
+         const NW = this._frameGraph.addRenderPass(this.name);
+         if (NW.depthReadOnly = this.depthReadOnly, NW.stencilReadOnly = this.stencilReadOnly, NW.addDependencies(this.sourceTexture), NW.setRenderTarget(this.outputTexture), NW.setRenderTargetDepth(this.depthAttachmentTexture), NW.setExecuteFunc((WW => {
+             WW.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && WW.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), iW?.(WW), this.viewport && WW.setViewport(this.viewport), WW.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
+               void 0 !== this.sourceTexture && WW.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), OW?.(WW), this.postProcess.bind()
+ ... (5 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3714-L3721` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L706) · [Before (L3714-L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3714-L3721)

```diff
-         let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
-           const ee = this._scene.zW.indexOf(this);
-           ee > -1 && this._scene.zW.splice(ee, 1), this._scene._activeParticleSystems.dispose()
-         }
-         this.Bx.notifyObservers(this), this.Bx.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
+         this.postProcess.dispose(), super.dispose()
```

#### 67. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3724-L3753` → after: `L709-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L709-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L709-L711) · [Before (L3724-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3724-L3753)

```diff
-     Vi.ForceGLSL = !1;
-     var ai, ci = He(37949);
-     ! function(ee) {
-       ee[ee.ATTACHED = 0] = "ATTACHED", ee[ee.END = 1] = "END"
-     }(ai || (ai = {}));
-     class xi {
-       constructor(ee) {
-         if (this.particleSystem = ee, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !ee.emitter || !ee.emitter.dispose) {
-           const ie = (0, ci.c)("BABYLON.AbstractMesh");
-           ee.emitter = new ie("SubemitterSystemEmitter", ee.Xx()), ee._disposeEmitterOnDispose = !0
-         }
-       }
-       clone() {
-         let ee = this.particleSystem.emitter;
-         if (ee) {
-           if (ee instanceof Me.p) ee = ee.clone();
- ... (14 more removed lines; see GitHub link above)
+     class yW extends YW {
+       constructor(WW, iW, OW) {
+         super(WW, iW, OW || new tW(WW, iW.engine))
```

#### 68. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3755-L3758` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L713-L714) · [Before (L3755-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3755-L3758)

```diff
-       static Parse(ee, ie, He) {
-         const ye = ee.particleSystem,
-           be = new xi(xi._ParseParticleSystem(ye, ie, He, !0));
-         return be.type = ee.type, be.inheritDirection = ee.inheritDirection, be.inheritedVelocityAmount = ee.inheritedVelocityAmount, be.particleSystem._isSubEmitter = !0, be
+       getClassName() {
+         return "FrameGraphFXAATask"
```

#### 69. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3760-L3761` → after: `L716-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L716-L721) · [Before (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3760-L3761)

```diff
-       dispose() {
-         this.particleSystem.dispose()
+       record() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         const mW = super.record(WW, iW, OW);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, mW
```

#### 70. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3764-L3792` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L724-L727) · [Before (L3764-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3764-L3792)

```diff
-     var Li = He(41e3),
-       Ci = He(41141);
-     const vi = () => {};
-     class ui {
-       constructor() {
-         this.particlePositionGenerator = vi, this.particleDestinationGenerator = vi, this.particleDirectionGenerator = vi
-       }
-       startDirectionFunction(ee, ie, He, ye) {
-         const be = Me.j.rf[0];
-         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== vi) this.particleDirectionGenerator(-1, He, be);
-         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== vi) {
-           this.particleDestinationGenerator(-1, He, be);
-           const ee = Me.j.rf[1];
-           be.subtractToRef(He.position, ee), ee.scaleToRef(1 / He.lifeTime, be)
-         } else be.set(0, 0, 0);
-         ye ? ie.jD(be) : Me.p.TransformNormalToRef(be, ee, ie)
- ... (13 more removed lines; see GitHub link above)
+     var TW = OW(54003);
+     class JW extends YW {
+       constructor(WW, iW, OW) {
+         super(WW, iW, OW || new TW.h(WW, iW.engine))
```

#### 71. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3795-L3802` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L730) · [Before (L3795-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3795-L3802)

```diff
-         return "CustomParticleEmitter"
-       }
-       serialize() {
-         const ee = {};
-         return ee.type = this.getClassName(), ee.particlePositionGenerator = this.particlePositionGenerator, ee.particleDestinationGenerator = this.particleDestinationGenerator, ee
-       }
-       parse(ee) {
-         ee.particlePositionGenerator && (this.particlePositionGenerator = ee.particlePositionGenerator), ee.particleDestinationGenerator && (this.particleDestinationGenerator = ee.particleDestinationGenerator)
+         return "FrameGraphPassTask"
```

#### 72. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3805-L3807` → after: `L733-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L733-L737) · [Before (L3805-L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3805-L3807)

```diff
-     const mi = Me.p.Zero(),
-       li = Me.p.Zero(),
-       Si = Me.p.Zero();
+     var hW = OW(41612),
+       HW = OW(41695),
+       nW = OW(41653),
+       uW = OW(41765),
+       oW = OW(38372);
```

#### 73. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3809-L3834` → after: `L739-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L739-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L739-L743) · [Before (L3809-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3809-L3834)

```diff
-       constructor() {
-         this.strength = 0, this.position = Me.p.Zero()
-       }
-       _processParticle(ee, ie) {
-         this.position.subtractToRef(ee.position, mi);
-         const He = mi.lengthSquared() + 1;
-         mi.normalize().scaleToRef(this.strength / He, li), li.scaleToRef(ie._tempScaledUpdateSpeed, Si), ee.direction.addInPlace(Si)
-       }
-       serialize() {
-         return {
-           position: this.position.Qbe(),
-           strength: this.strength
-         }
-       }
-     }
-     const ji = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
- ... (10 more removed lines; see GitHub link above)
+       getRenderCamera(WW) {
+         if (this._renderCamera) return this._renderCamera;
+         {
+           let iW;
+           return iW = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, WW && iW && iW.isRigCamera ? iW.rigParent : iW
```

#### 74. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3837-L3866` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L746-L747) · [Before (L3837-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3837-L3866)

```diff
-       get source() {
-         return this._source
-       }
-       get isNodeGenerated() {
-         return null !== this._source
-       }
-       get flowMap() {
-         return this._flowMap
-       }
-       set flowMap(ee) {
-         this._flowMap !== ee && (this._flowMap = ee, this._flowMapUpdate && (Ai(this._flowMapUpdate), this._flowMapUpdate = null), ee && (this._flowMapUpdate = {
-           process: ee => {
-             const ie = this.Xx()?.getTransformMatrix();
-             this._flowMap._processParticle(ee, this.flowMapStrength * this._tempScaledUpdateSpeed, ie)
-           },
-           previousItem: null,
- ... (14 more removed lines; see GitHub link above)
+       setRenderCamera(WW) {
+         this._renderCamera = WW
```

#### 75. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3868-L3870` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L749-L750) · [Before (L3868-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3868-L3870)

```diff
-       start() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
-         this.canStart() && super.start(ee)
+       _getSharedGizmoLight() {
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new uW.c("shared gizmo light", new wW.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = oW.b.Gray()), this._sharedGizmoLight
```

#### 76. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3872-L3874` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L752-L753) · [Before (L3872-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3872-L3874)

```diff
-       _prepareSubEmitterInternalArray() {
-         if (this._subEmitters = new Array, this.subEmitters)
-           for (const ee of this.subEmitters) ee instanceof si ? this._subEmitters.push([new xi(ee)]) : ee instanceof xi ? this._subEmitters.push([ee]) : ee instanceof Array && this._subEmitters.push(ee)
+       static get DefaultUtilityLayer() {
+         return null == dW._DefaultUtilityLayer ? dW._CreateDefaultUtilityLayerFromScene(cW.d.LastCreatedScene) : dW._DefaultUtilityLayer
```

#### 77. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3876-L3880` → after: `L755-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L755-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L755-L758) · [Before (L3876-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3876-L3880)

```diff
-       _stopSubEmitters() {
-         if (this.activeSubSystems) {
-           for (const ee of this.activeSubSystems) ee.stop(!0);
-           this.activeSubSystems = []
-         }
+       static _CreateDefaultUtilityLayerFromScene(WW) {
+         return dW._DefaultUtilityLayer = new dW(WW), dW._DefaultUtilityLayer.originalScene.jD.addOnce((() => {
+           dW._DefaultUtilityLayer = null
+         })), dW._DefaultUtilityLayer
```

#### 78. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3882-L3884` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L760-L761) · [Before (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3882-L3884)

```diff
-       _removeFromRoot() {
-         if (!this._rootParticleSystem) return;
-         const ee = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== ee && this._rootParticleSystem.activeSubSystems.splice(ee, 1), this._rootParticleSystem = null
+       static get DefaultKeepDepthUtilityLayer() {
+         return null == dW._DefaultKeepDepthUtilityLayer ? dW._CreateDefaultKeepUtilityLayerFromScene(cW.d.LastCreatedScene) : dW._DefaultKeepDepthUtilityLayer
```

#### 79. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3886-L3887` → after: `L763-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L763-L766) · [Before (L3886-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3886-L3887)

```diff
-       _preStart() {
-         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+       static _CreateDefaultKeepUtilityLayerFromScene(WW) {
+         return dW._DefaultKeepDepthUtilityLayer = new dW(WW), dW._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, dW._DefaultKeepDepthUtilityLayer.originalScene.jD.addOnce((() => {
+           dW._DefaultKeepDepthUtilityLayer = null
+         })), dW._DefaultKeepDepthUtilityLayer
```

#### 80. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3889-L3890` → after: `L768-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L768-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L768-L803) · [Before (L3889-L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3889-L3890)

```diff
-       _postStop(ee) {
-         ee && this._stopSubEmitters()
+       constructor(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this.originalScene = WW, this.handleEvents = iW, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
+           virtual: !0,
+           useFloatingOrigin: WW.floatingOriginMode
+         }), this.utilityLayerScene.useRightHandedSystem = WW.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), iW && (this._originalPointerObserver = WW.onPrePoi … [truncated]
+           if (!this.utilityLayerScene.activeCamera) return;
+           if (!this.pickingEnabled) return;
+           if (!this.processAllEvents && iW.type !== HW.c.POINTERMOVE && iW.type !== HW.c.POINTERUP && iW.type !== HW.c.POINTERDOWN && iW.type !== HW.c.POINTERDOUBLETAP) return;
+           this.utilityLayerScene.pointerX = WW.pointerX, this.utilityLayerScene.pointerY = WW.pointerY;
+           const OW = iW.event;
+           if (WW.isPointerCaptured(OW.pointerId)) return void(this._pointerCaptures[OW.pointerId] = !1);
+           const mW = OW => {
+               let mW;
+               if (iW.nearInteractionPickingInfo) mW = iW.nearInteractionPickingInfo.pickedMesh.bD() == OW ? iW.nearInteractionPickingInfo : new nW.b;
+ ... (20 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3892-L3901` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L805-L806) · [Before (L3892-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3892-L3901)

```diff
-       _prepareParticle(ee) {
-         if (this._subEmitters && this._subEmitters.length > 0) {
-           const ie = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
-           ee._properties.attachedSubEmitters = [];
-           for (const He of ie)
-             if (0 === He.type) {
-               const ie = He.clone();
-               ee._properties.attachedSubEmitters.push(ie), ie.particleSystem.start()
-             }
-         }
+       _notifyObservers(WW, iW, OW) {
+         WW.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new HW.f(WW.type, WW.event, iW), WW.type), this._lastPointerEvents[OW.pointerId] = !0)
```

#### 82. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3903-L3915` → after: `L808-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L808-L812) · [Before (L3903-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3903-L3915)

```diff
-       _onDispose() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), ee && this.particles)
-           for (const He of this.particles)
-             if (He._properties.attachedSubEmitters)
-               for (let ee = He._properties.attachedSubEmitters.length - 1; ee >= 0; ee -= 1) He._properties.attachedSubEmitters[ee].dispose();
-         if (ie && this.activeSubSystems)
-           for (let He = this.activeSubSystems.length - 1; He >= 0; He -= 1) this.activeSubSystems[He].dispose();
-         if (this._subEmitters && this._subEmitters.length) {
-           for (let ee = 0; ee < this._subEmitters.length; ee++)
-             for (const ie of this._subEmitters[ee]) ie.dispose();
-           this._subEmitters = [], this.subEmitters = []
+       render() {
+         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
+           const WW = this.utilityLayerScene.activeCamera.bD(),
+             iW = this.utilityLayerScene.activeCamera;
+           iW._scene = this.utilityLayerScene, iW.leftCamera && (iW.leftCamera._scene = this.utilityLayerScene), iW.rightCamera && (iW.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), iW._scene = WW, iW.leftCamera && (iW.leftCamera._scene = WW), iW. … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L3919-L4011` → after: `L815-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L815-L816) · [Before (L3919-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L3919-L4011)

```diff
-       static _Parse(ee, ie, He, ye) {
-         let be;
-         be = He instanceof Li.e ? null : He;
-         const Ke = (0, ci.c)("BABYLON.Texture");
-         if (Ke && be)
-           if (ee.texture) ie.particleTexture = Ke.Parse(ee.texture, be, ye);
-           else if (ee.textureName) {
-           const He = ee.textureSettings;
-           if (ie.particleTexture = new Ke(ye + ee.textureName, be, !1, void 0 === ee.invertY || ee.invertY, He ? He.samplingMode : void 0), ie.particleTexture.name = ee.textureName, He) {
-             const ee = ie.particleTexture;
-             for (const ie of ji) void 0 !== He[ie] && (ee[ie] = He[ie])
-           }
-         }
-         if (ee.emitterId || 0 === ee.emitterId || void 0 !== ee.emitter ? (ee.emitterId || 0 === ee.emitterId) && be ? (ie.emitter = be.getLastMeshById(ee.emitterId), ie.emitter || (ie.emitter = Me.p.Zero())) : ie.emitter = Me.p.FromArray(ee.emitter) : ie.emitter = Me.p.Zero(), i … [truncated]
-           for (let He = 0; He < ee.animations.length; He++) {
-             const ye = ee.animations[He],
- ... (77 more removed lines; see GitHub link above)
+       dispose() {
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.jD.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4013-L4038` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L818-L819) · [Before (L4013-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4013-L4038)

```diff
-       static Parse(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           be = arguments.length > 4 ? arguments[4] : void 0;
-         const Ke = ee.name;
-         let Ue, Fe, Je = null,
-           Re = null;
-         if (ie instanceof Li.e ? Ue = ie : (Fe = ie, Ue = Fe.Nf()), ee.customShader && (0, xe.c)(Ue.createEffectForParticles)) {
-           Re = ee.customShader;
-           const ie = Re.shaderOptions.defines.length > 0 ? Re.shaderOptions.defines.join("\n") : "";
-           Je = Ue.createEffectForParticles(Re.shaderPath.fragmentElement, Re.shaderOptions.uniforms, Re.shaderOptions.samplers, ie)
-         }
-         const ke = new si(Ke, be || ee.bk, ie, Je, ee.isAnimationSheetEnabled);
-         if (ke.customShader = Re, ke._rootUrl = He, ee.id && (ke.id = ee.id), ee.subEmitters) {
-           ke.subEmitters = [];
-           for (const ye of ee.subEmitters) {
-             const ee = [];
- ... (10 more removed lines; see GitHub link above)
+       _updateCamera() {
+         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
```

#### 85. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4040-L4055` → after: `L821-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L821-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L821-L842) · [Before (L4040-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4040-L4055)

```diff
-       serialize() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ie = {};
-         if (si._Serialize(ie, this, ee), ie.textureMask = this.textureMask.Qbe(), ie.customShader = this.customShader, ie.preventAutoStart = this.preventAutoStart, ie.worldOffset = this.worldOffset.Qbe(), this.metadata && (ie.metadata = this.metadata), this.subEmitters) {
-           ie.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
-           for (const He of this._subEmitters) {
-             const ye = [];
-             for (const ie of He) ie.particleSystem.doNotSerialize || ye.push(ie.serialize(ee));
-             ie.subEmitters.push(ye)
-           }
-         }
-         if (this._attractors && this._attractors.length) {
-           ie.attractors = [];
-           for (const ee of this._attractors) ie.attractors.push(ee.serialize())
-         }
-         return ie
+     }
+     dW._DefaultUtilityLayer = null, dW._DefaultKeepDepthUtilityLayer = null;
+     const eW = {
+       FindMainCamera: function(WW) {
+         return WW.findMainCamera()
+       },
+       FindMainObjectRenderer: function(WW) {
+         return WW.findMainObjectRenderer()
+       },
+       CreateUtilityLayerRenderer: function(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const OW = WW.rb,
+           mW = new dW(OW, iW, !0);
+         mW.utilityLayerScene.activeCamera = OW.activeCamera;
+         let EW = eW.FindMainCamera(OW.frameGraph);
+         !EW && OW.cameras.length > 0 && (EW = OW.cameras[0]), EW && (mW.setRenderCamera(EW), mW.utilityLayerScene.activeCamera = EW);
+ ... (6 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4057-L4196` → after: `L844-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L844-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L844-L864) · [Before (L4057-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4057-L4196)

```diff
-       static _Serialize(ee, ie, He) {
-         if (ee.name = ie.name, ee.id = ie.id, ee.bk = ie.getCapacity(), ee.disposeOnStop = ie.disposeOnStop, ee.manualEmitCount = ie.manualEmitCount, ie.emitter.position) {
-           const He = ie.emitter;
-           ee.emitterId = He.id
-         } else {
-           const He = ie.emitter;
-           ee.emitter = He.Qbe()
-         }
-         if (ie.particleEmitterType && (ee.particleEmitterType = ie.particleEmitterType.serialize()), ie.particleTexture)
-           if (He) ee.texture = ie.particleTexture.serialize();
-           else {
-             const He = ie.particleTexture;
-             ee.textureName = ie.particleTexture.name, ee.invertY = !!He._invertY;
-             const ye = {};
-             for (const ee of ji) ye[ee] = He[ee];
-             ye.samplingMode = He.samplingMode, ee.textureSettings = ye
- ... (124 more removed lines; see GitHub link above)
+     };
+     let vW = null;
+ 
+     function gW(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 ? arguments[6] : void 0,
+         LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: wW,
+         width: tW
+       } = XW(WW, iW, OW);
+       if (!wW || !tW) return void xW.b.Error("Invalid 'size' parameter !");
+       const ZW = iW.bD();
+       let AW = ZW.activeCamera !== iW;
+ ... (5 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4198-L4213` → after: `L866-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L866-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L866-L977) · [Before (L4198-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4198-L4213)

```diff
-           ee.limitVelocityGradients = [];
-           for (const ie of fe) {
-             const He = {
-               gradient: ie.gradient,
-               factor1: ie.factor1
-             };
-             void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.limitVelocityGradients.push(He)
-           }
-           ee.limitVelocityDamping = ie.limitVelocityDamping
-         }
-         ie.noiseTexture && (ee.noiseTexture = ie.noiseTexture.serialize())
-       }
-       clone(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const ye = {
-           ...this._customWrappers
+           const iW = new Blob([WW]);
+           lW.f.DownloadBlob(iW), mW && mW("")
+         } else mW && mW(WW)
+       }), EW, 1, WW.getCreationOptions().antialias, void 0, void 0, void 0, void 0, PW) : WW.onEndFrameObservable.addOnce((() => {
+         vW || (vW = document.createElement("canvas")), vW.width = tW, vW.height = wW;
+         const iW = vW.getContext("2d"),
+           OW = WW.getRenderingCanvas();
+         if (!iW || !OW) return void xW.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
+         const AW = OW.width,
+           bW = OW.height,
+           jW = vW.width,
+           UW = vW.height,
+           kW = jW / AW,
+           sW = UW / bW,
+           MW = LW ? Math.max(kW, sW) : Math.min(kW, sW),
+           KW = AW * MW,
+ ... (96 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4215-L4228` → after: `L979-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L979-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L979-L1003) · [Before (L4215-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4215-L4228)

```diff
-         let be = null;
-         const Me = this._engine;
-         if ((0, xe.c)(Me.createEffectForParticles) && null != this.customShader) {
-           be = this.customShader;
-           const ee = be.shaderOptions.defines.length > 0 ? be.shaderOptions.defines.join("\n") : "",
-             ie = Me.createEffectForParticles(be.shaderPath.fragmentElement, be.shaderOptions.uniforms, be.shaderOptions.samplers, ee);
-           ye[0] ? ye[0].effect = ie : this.setCustomEffect(ie, 0)
-         }
-         const Ke = this.serialize(He),
-           Ue = !1 === He && this.particleTexture ? this.particleTexture.clone() : null;
-         Ue && (Ke.textureName = void 0);
-         const Fe = si.Parse(Ke, this._scene || this._engine, this._rootUrl);
-         return Fe.name = ee, Fe.customShader = be, Fe._customWrappers = ye, Ue && (Fe.particleTexture = Ue), void 0 === ie && (ie = this.emitter), this.noiseTexture && (Fe.noiseTexture = this.noiseTexture.clone()), Fe.emitter = ie, this.preventAutoStart || Fe.start(), Fe
-       }
+       if (wW) {
+         const WW = new ZW("antialiasing", 1, yW.activeCamera);
+         dW.addPostProcess(WW), WW.autoClear = !0, WW.onEffectCreatedObservable.addOnce((WW => {
+           WW.isReady() ? vW() : WW.onCompiled = () => {
+             vW()
+           }
+         }))
+       } else vW()
+     }
+     async function fW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 ? arguments[6] : void 0,
+         LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+ ... (9 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4230-L4255` → after: `L1005-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1005-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L1005-L1077) · [Before (L4230-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4230-L4255)

```diff
-     si.BILLBOARDMODE_Y = 2, si.BILLBOARDMODE_ALL = 7, si.BILLBOARDMODE_STRETCHED = 8, si.BILLBOARDMODE_STRETCHED_LOCAL = 9;
-     let Ii = !1;
-     Ii || (Ii = !0, xi._ParseParticleSystem = si.Parse)
-   },
-   44830: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       SkyMaterial: () => Be,
-       _MaxColorValueForRenderTarget: () => ze
-     });
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(41141),
-       Ke = He(37913),
-       Ue = He(41406),
-       Fe = He(41472),
-       Je = He(44789),
- ... (10 more removed lines; see GitHub link above)
+     async function CW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 ? arguments[6] : void 0,
+         LW = arguments.length > 7 ? arguments[7] : void 0,
+         cW = arguments.length > 8 ? arguments[8] : void 0,
+         wW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         tW = arguments.length > 10 ? arguments[10] : void 0;
+       const ZW = WW.engine,
+         xW = WW.textureManager,
+         {
+           height: lW,
+           width: bW,
+           finalWidth: jW,
+           finalHeight: kW
+ ... (57 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4259-L4266` → after: `L1095-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1095-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L1095-L1108) · [Before (L4259-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4259-L4266)

```diff
-     function ze(ee) {
-       switch (ee) {
-         case Je.c.TEXTURETYPE_HALF_FLOAT:
-           return 65504;
-         case Je.c.TEXTURETYPE_FLOAT:
-           return 3e38;
-         default:
-           return 1
+     function XW(WW, iW, OW) {
+       let mW = 0,
+         EW = 0,
+         NW = 0,
+         PW = 0;
+       if ("object" === typeof OW) {
+         const LW = OW.precision ? Math.abs(OW.precision) : 1;
+         OW.width && OW.height ? (mW = OW.height * LW, EW = OW.width * LW) : OW.width && !OW.height ? (EW = OW.width * LW, mW = Math.round(EW / WW.getAspectRatio(iW))) : OW.height && !OW.width ? (mW = OW.height * LW, EW = Math.round(mW * WW.getAspectRatio(iW))) : (EW = Math.round( … [truncated]
+       } else isNaN(OW) || (mW = OW, EW = OW, NW = OW, PW = OW);
+       return EW && (EW = Math.floor(EW)), mW && (mW = Math.floor(mW)), NW && (NW = Math.floor(NW)), PW && (PW = Math.floor(PW)), {
+         height: 0 | mW,
+         width: 0 | EW,
+         finalWidth: 0 | NW,
+         finalHeight: 0 | PW
```

#### 91. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4269-L4594` → after: `L1111-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1111-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/271.js#L1111-L1126) · [Before (L4269-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/271.js#L4269-L4594)

```diff
-     let Be = (() => {
-       var ee;
-       let ie, Ue, Je, ke, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae = Fe.c,
-         Ye = [],
-         Ve = [],
-         ae = [],
-         ce = [],
-         xe = [],
-         Le = [],
-         Ce = [],
-         ve = [],
-         ue = [],
-         me = [],
-         le = [],
-         Se = [],
-         ne = [],
- ... (310 more removed lines; see GitHub link above)
+     const BW = {
+       CreateScreenshot: gW,
+       CreateScreenshotAsync: DW,
+       CreateScreenshotWithResizeAsync: VW,
+       CreateScreenshotUsingRenderTarget: pW,
+       CreateScreenshotUsingRenderTargetAsync: fW,
+       CreateScreenshotForFrameGraphAsync: CW
+     };
+     let qW = !1;
+ 
+     function RW() {
+       if (qW) return;
+       qW = !0;
+       lW.f.CreateScreenshot = gW, lW.f.CreateScreenshotAsync = DW, lW.f.CreateScreenshotUsingRenderTarget = pW, lW.f.CreateScreenshotUsingRenderTargetAsync = fW
+     }
+     RW()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L163` → after: `L4-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/272.js#L4-L72) · [Before (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/272.js#L4-L163)

```diff
-   42166: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke,
-       f: () => oe,
-       j: () => Je
-     });
-     var ye, be = He(37938),
-       Me = He(37917);
-     ! function(ee) {
-       ee[ee.CW = 0] = "CW", ee[ee.CCW = 1] = "CCW"
-     }(ye || (ye = {}));
-     class Ke {
-       static Interpolate(ee, ie, He, ye, be) {
-         if (0 === ee) return 0;
-         const Me = 1 - 3 * ye + 3 * ie,
-           Ke = 3 * ye - 6 * ie,
- ... (144 more removed lines; see GitHub link above)
+   38937: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW
+     });
+     var mW = OW(38939);
+     class EW {
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
+       }
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
+       }
+       static GetFarPlaneToRef(WW, iW) {
+ ... (53 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L165-L300` → after: `L74-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L74-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/272.js#L74-L138) · [Before (L165-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/272.js#L165-L300)

```diff
-         for (let He = ee - 1, ye = 0; ye < ee; He = ye++) ie += this._points[He].x * this._points[ye].y - this._points[ye].x * this._points[He].y;
-         return .5 * ie
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(ee) {
-         if (ee < 0 || ee > 1) return Me.n.Zero();
-         const ie = ee * this.length();
-         let He = 0;
-         for (let ye = 0; ye < this._points.length; ye++) {
-           const ee = (ye + 1) % this._points.length,
-             be = this._points[ye],
-             Ke = this._points[ee].subtract(be),
-             Ue = Ke.length() + He;
-           if (ie >= He && ie <= Ue) {
- ... (120 more removed lines; see GitHub link above)
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+           ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
+         return new EW(cW, wW, tW, ZW)
+       }
+ ... (49 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L333` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/272.js#L171) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/272.js#L333)

```diff
-             ye.e.Warn(Fe.message)
+             mW.b.Warn(cW.message)
```

#### 4. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L339-L341` → after: `L177-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L177-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/272.js#L177-L190) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/272.js#L339-L341)

```diff
-   39467: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
+     }
+     OW.d(iW, {
+       b: () => mW
+     })
+   },
+   39911: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
```

#### 5. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L362` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/272.js#L211) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/272.js#L362)

```diff
-         const ie = ee => ee < 10 ? "0" + ee : "" + ee,
+         const iW = WW => WW < 10 ? "0" + WW : "" + WW,
```

#### 6. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L377` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/272.js#L226) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/272.js#L377)

```diff
-         const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
+         const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L2)

```diff
- export const ids = [273];
+ export const ids = [272, 273];
```

#### 2. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L10` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L4-L11) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L4-L10)

```diff
-   42184: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => qe,
-       f: () => Je,
-       h: () => Re,
-       i: () => oe,
-       k: () => ke
+   64398: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       RegisterShaderMaterial: () => mW.b,
+       ShaderMaterial: () => mW.o,
+       ShaderMaterialCreateFromSnippetAsync: () => mW.d,
+       ShaderMaterialParse: () => mW.k,
+       ShaderMaterialParseFromFileAsync: () => mW.h,
+       ShaderMaterialParseFromSnippetAsync: () => mW.i
```

#### 3. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L12-L127` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L13-L14) · [Before (L12-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L12-L127)

```diff
-     var ye = He(1169),
-       be = He(2278),
-       Me = He(37987),
-       Ke = He(38351);
-     class Ue {
-       constructor(ee, ie) {
-         this.pose = ee, this.nodes = void 0, this.nodes = ee.boneNames.map((ee => ie.get(ee)))
-       }
-       write(ee) {
-         this.pose.pose(ee), (0, Ke.o)(this.pose, this.nodes)
-       }
-     }
- 
-     function Fe(ee) {
-       ee.unfreezeWorldMatrix();
-       for (const ie of ee.getChildren()) Fe(ie)
- ... (100 more removed lines; see GitHub link above)
+     var mW = OW(41985);
+     (0, mW.b)()
```

#### 4. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L129-L133` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L16-L18) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L129-L133)

```diff
-   42155: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       openMobLineupPreview: () => je,
-       openMobPreview: () => ne,
-       openPetPreview: () => se
+   38937: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW
```

#### 5. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L135-L331` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L20) · [Before (L135-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L135-L331)

```diff
-     var ye = He(40913),
-       be = He(41195),
-       Me = He(42157),
-       Ke = He(38020),
-       Ue = He(37913),
-       Fe = He(41357),
-       Je = He(42177),
-       oe = He(39259),
-       Re = He(37979),
-       ke = He(37963),
-       qe = He(37908),
-       fe = He(39173),
-       Te = He(39169),
-       pe = He(38927),
-       Xe = He(37987),
-       ze = He(2969),
- ... (181 more removed lines; see GitHub link above)
+     var mW = OW(38939);
```

#### 6. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L333-L346` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L22-L25) · [Before (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L333-L346)

```diff
-       constructor(ee, ie) {
-         this.place = ie, this.remove = null;
-         const {
-           engine: He,
-           yp: ye,
-           canvas: be
-         } = xe();
-         ee.appendChild(be), He.resize(), He.runRenderLoop((() => {
-           ye.render()
-         }))
-       }
-       show(ee) {
-         var ie;
-         null === (ie = this.remove) || void 0 === ie || ie.call(this), this.remove = this.place(ee)
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
```

#### 7. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L348-L353` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L27-L29) · [Before (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L348-L353)

```diff
-       resize(ee, ie) {
-         const {
-           engine: He,
-           canvas: ye
-         } = xe();
-         ye.width = ee, ye.height = ie, He.resize()
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L355-L357` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L31-L33) · [Before (L355-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L355-L357)

```diff
-       close() {
-         var ee;
-         xe().engine.stopRenderLoop(), null === (ee = this.remove) || void 0 === ee || ee.call(this), this.remove = null
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L359-L365` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L35-L37) · [Before (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L359-L365)

```diff
-     }
-     class Se {
-       constructor(ee) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new le(ee, (() => () => {}))
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L367-L368` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L39-L41) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L367-L368)

```diff
-       show(ee) {
-         ee.figures !== this.view.figures && this.preload(ee.figures), this.view = ee, this.place()
+       static GetRightPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
```

#### 11. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L370-L371` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L43-L45) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L370-L371)

```diff
-       resize(ee, ie) {
-         this.preview.resize(ee, ie), this.aspect = ee / ie, this.place()
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
```

#### 12. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L373-L376` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L47-L49) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L373-L376)

```diff
-       close() {
-         this.preview.close();
-         for (const ee of this.placed) null === ee || void 0 === ee || ee.remove();
-         this.placed = []
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
```

#### 13. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L378-L385` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L51-L52) · [Before (L378-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L378-L385)

```diff
-       preload(ee) {
-         const ie = () => {};
-         Le("NPC").catch(ie);
-         for (const {
-             OW: He,
-             cosmetics: ye
-           }
-           of ee) null !== He && Ce(He).catch(ie), Oe(xe().yp, ye).catch(ie)
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
```

#### 14. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L387-L404` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L54-L57) · [Before (L387-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L387-L404)

```diff
-       place() {
-         const {
-           figures: ee,
-           shown: ie
-         } = this.view, He = ee.map(((He, ye) => {
-           var be;
-           const Me = null !== (be = this.placed[ye]) && void 0 !== be ? be : null;
-           if (!ie[ye]) return null === Me || void 0 === Me || Me.remove(), null;
-           const Ke = (Ue = (ye + .5) / ee.length, Fe = this.aspect, (.5 - Ue) * (2 * we * Math.tan(xe().camera.fov / 2)) * Fe);
-           var Ue, Fe;
-           return null !== Me && Me.figure === He && Me.x === Ke ? Me : (null === Me || void 0 === Me || Me.remove(), {
-             figure: He,
-             x: Ke,
-             remove: ue(He, Ke)
-           })
-         }));
- ... (2 more removed lines; see GitHub link above)
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
```

#### 15. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L420` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L61) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L420)

```diff
-   39577: (ee, ie, He) => {
+   38939: (WW, iW, OW) => {
```

#### 16. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L424-L577` → after: `L65-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L65-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L65-L144) · [Before (L424-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L424-L577)

```diff
-     var ye = He(38032),
-       be = He(38133),
-       Me = He(38162),
-       Ke = He(38045),
-       Ue = He(38034);
- 
-     function Fe(ee) {
-       return `\n\t\t\t\t${(0,Ue.v)(ee,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, Ue.C)(ee, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, Ue.C)(ee, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, Ue.o)(ee, "mat2", "c", "s", "-s", "c")
- ... (138 more removed lines; see GitHub link above)
+     var mW = OW(38241);
+     class EW {
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
+       }
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+ ... (64 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L579` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L146) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L579)

```diff
-   42201: (ee, ie, He) => {
+   39908: (WW, iW, OW) => {
```

#### 18. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L581-L583` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L148) · [Before (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L581-L583)

```diff
-       d: () => me,
-       e: () => ze,
-       h: () => Ie
+       c: () => NW
```

#### 19. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L585-L620` → after: `L150-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L150-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L150-L183) · [Before (L585-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L585-L620)

```diff
-     var ye = He(41380),
-       be = He(42210),
-       Me = He(42250),
-       Ke = He(42217),
-       Ue = He(38650),
-       Fe = He(38659),
-       Je = He(38664),
-       oe = He(38673),
-       Re = He(38070),
-       ke = He(38075),
-       qe = He(42219),
-       fe = He(38045),
-       Te = He(38057),
-       pe = He(38034);
- 
-     function Xe(ee, ie) {
- ... (20 more removed lines; see GitHub link above)
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+           const iW = [];
+           do {
+             const OW = Object.getOwnPropertyNames(WW);
+             for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
+           } while (WW = Object.getPrototypeOf(WW));
+           return iW
+         }(WW);
+         for (const wW of LW) {
+ ... (18 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L795-L798` → after: `L188-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L188-L194) · [Before (L795-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L795-L798)

```diff
-     const se = new Map;
- 
-     function Ie(ee, ie) {
-       se.set(ee, ie)
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
```

#### 21. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L800-L881` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L196-L197) · [Before (L800-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L800-L881)

```diff
-     Ie(Ue.e, Be), Ie(Fe.k, Ze), Ie(Je.h, je), Ie(oe.e, ue), (0, Re.d)({
-       create: (ee, ie) => {
-         const He = new ye.StandardMaterial(ee.name, ie);
-         return (0, le.o)(ee, He), He.detailMap._pluginDefineNames
-       },
-       write: (ee, ie, He) => {
-         (0, le.S)(ee.mirror, ie, He)
-       },
-       addFeature: (ee, ie, He) => {
-         const ye = se.get(ie.feature);
-         if (!ye) throw new Error(`${ie.feature.name} has no plugin class (registerPluginClass)`);
-         new ye(ee.mirror, ie.state, ...He)
-       },
-       texture: (ee, ie, He) => {
-         let {
-           url: ye,
- ... (66 more removed lines; see GitHub link above)
+     OW.d(iW, {
+       b: () => mW
```

#### 22. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L884` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L200) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L884)

```diff
-   42244: (ee, ie, He) => {
+   39911: (WW, iW, OW) => {
```

#### 23. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L886-L888` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L202) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L886-L888)

```diff
-       b: () => oe,
-       f: () => Re,
-       h: () => ke
+       b: () => mW
```

#### 24. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L890-L1051` → after: `L204-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L204-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/273.js#L204-L254) · [Before (L890-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/273.js#L890-L1051)

```diff
-     var ye = He(42233),
-       be = He(41175),
-       Me = He(41429),
-       Ke = He(41540),
-       Ue = He(42240),
-       Fe = He(41535),
-       Je = He(38195);
-     class oe extends Ke.b {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (ee, ie) => {
-           this.releaseUnlessInstanced(ie)
-         }, this.onLinked = null
-       }
-       link(ee) {
-         var ie;
-         (0, Je.k)(ee), this.model = ee, null === (ie = this.onLinked) || void 0 === ie || ie.call(this, ee)
- ... (146 more removed lines; see GitHub link above)
+     class mW {
+       static _CheckLimit(WW, iW) {
+         let OW = mW._LogLimitOutputs[WW];
+         return OW ? OW.current++ : (OW = {
+           limit: iW,
+           current: 1
+         }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
+       }
+       static _GenerateLimitMessage(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const OW = mW._LogLimitOutputs[WW];
+         if (!OW || !mW.MessageLimitReached) return;
+         const EW = this._Levels[iW];
+         OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
+       }
+       static _AddLogEntry(WW) {
+ ... (35 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L4)

```diff
-   42120: (ee, ie, He) => {
+   39689: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L6-L7)

```diff
-       c: () => Me,
-       f: () => Ke
+       e: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L9-L13` → after: `L8-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L8-L39) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L9-L13)

```diff
-     var ye = He(1992);
-     let be = !1;
- 
-     function Me() {
-       be = !0
+     var mW = OW(39696);
+     const EW = [0, 0, 0];
+     class NW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW;
+         this.pool = WW, this.origin = iW, this.count = 0, this.free = []
+       }
+       take() {
+         var WW;
+         const iW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.count++;
+         return iW >= this.pool.aZ && this.pool.grow(Math.max(2 * this.pool.aZ, iW + 1)), this.hide(iW), iW
+       }
+       release(WW) {
+         this.hide(WW), this.free.push(WW)
+       }
+       write(WW, iW, OW, EW) {
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L15-L17` → after: `L41-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L41-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L41-L71) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L15-L17)

```diff
- 
-     function Ke() {
-       be && (be = !1, (0, ye.d)())
+     class PW {
+       constructor(WW, iW, OW) {
+         this.api = WW, this.model = iW, this.initialCapacity = OW, this.kinds = new Map, this.origin = [0, 0, 0]
+       }
+       kindOf(WW) {
+         let iW = this.kinds.get(WW);
+         if (void 0 === iW) {
+           const OW = this.api.createInstancePool({
+             ...this.model,
+             item: WW
+           }, this.initialCapacity);
+           null === OW || void 0 === OW || OW.setOrigin(this.origin[0], this.origin[1], this.origin[2]), iW = OW && new NW(OW, this.origin), this.kinds.set(WW, iW)
+         }
+         return iW
+       }
+       follow(WW) {
+ ... (15 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L20` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L74) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L20)

```diff
-   42116: (ee, ie, He) => {
+   39708: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L24` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L77-L78) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L24)

```diff
-       g: () => Ue
+       h: () => LW,
+       k: () => cW
```

#### 7. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L26-L62` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L80-L85) · [Before (L26-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L26-L62)

```diff
-     var ye = He(41694),
-       be = He(41704);
- 
-     function Me(ee) {
-       if (ee.queries.drawCensus() < ye.vb.BYTES) return null;
-       const ie = ee.memoryData(ee.scratch(), ye.vb.BYTES, 4, "the draw census");
-       return null === ie ? null : {
-         terrainOpaque: ye.vb.terrainOpaque(ie, 0),
-         terrainTransparent: ye.vb.terrainTransparent(ie, 0),
-         terrainPack: ye.vb.terrainPack(ie, 0),
-         earthSky: ye.vb.earthSky(ie, 0),
-         skyMeshes: ye.vb.skyMeshes(ie, 0),
-         regular: ye.vb.regular(ie, 0),
-         thin: ye.vb.thin(ie, 0),
-         line: ye.vb.line(ie, 0),
-         text: ye.vb.text(ie, 0),
- ... (21 more removed lines; see GitHub link above)
+     const mW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       EW = [0, 1, 2, 0, 2, 3],
+       NW = [4, 5];
+ 
+     function PW(WW, iW, OW, mW, EW) {
+       for (let PW = 0; PW < 6; PW++) NW.includes(PW) === EW && wW(WW, iW, OW, mW, PW)
```

#### 8. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L65-L84` → after: `L88-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L88-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L88-L278) · [Before (L65-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L65-L84)

```diff
-     function Ue() {
-       const ee = (0, be.h)();
-       return !0 === (null === ee || void 0 === ee ? void 0 : ee.isCoreRunning) ? function(ee) {
-         const ie = Me(ee);
-         if (null === ie) return [];
-         const {
-           terrainOpaque: He,
-           terrainTransparent: ye,
-           terrainPack: be,
-           earthSky: Ue,
-           skyMeshes: Fe,
-           regular: Je,
-           thin: oe,
-           line: Re,
-           text: ke,
-           particles: qe
- ... (4 more removed lines; see GitHub link above)
+     function LW(WW, iW, OW, mW) {
+       for (let EW = 0; EW < 6; EW++) wW(WW, iW, OW, mW, EW)
+     }
+ 
+     function cW(WW, iW, OW, NW, PW) {
+       for (let LW = 0; LW < 6; LW++)
+         for (const cW of [0, 1]) {
+           const [wW, tW, ZW] = [cW + 2, cW + 1, (cW + 3) % 4], xW = WW.length / 3;
+           for (const [iW, EW] of [
+               [cW, tW],
+               [wW, tW],
+               [wW, ZW],
+               [cW, ZW]
+             ])
+             for (let cW = 0; cW < 3; cW++) {
+               const wW = mW[3 * (4 * LW + iW) + cW],
+ ... (175 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L86-L87` → after: `L280-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L280-L281) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L86-L87)

```diff
-           label: "Terrain",
-           value: `${He} opaque / ${ye} transparent (${be} shader pack)`
+           item: "Diamond",
+           amount: 6
```

#### 10. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L89-L90` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L283-L284) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L89-L90)

```diff
-           label: "Meshes / Thin bases",
-           value: `${Je} / ${oe}`
+           item: "Voltite Cell",
+           amount: 32
```

#### 11. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L92-L93` → after: `L286-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L286-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L286-L554) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L92-L93)

```diff
-           label: "Text / Lines",
-           value: `${ke} / ${Re}`
+           item: "Comet Core",
+           amount: 1
+         }],
+         charge: {
+           items: [{
+             item: "Iron Plate",
+             amount: 60
+           }, {
+             item: "Copper Wire",
+             amount: 120
+           }],
+           powerPerS: 0,
+           seconds: 90
+         },
+         islandRadius: 50,
+         machineAllowance: 280,
+ ... (253 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L95-L98` → after: `L556-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L556-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L556-L584) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L95-L98)

```diff
-           label: "Sky / Particles",
-           value: `${Ue+Fe} / ${qe}`
-         }]
-       }(ee.api) : []
+           item: "Plutonium Pellet",
+           amount: 6
+         }, {
+           item: "Comet Core",
+           amount: 3
+         }],
+         charge: {
+           items: [{
+             item: "Spent Pellet",
+             amount: 4
+           }, {
+             item: "Plutonium Pellet",
+             amount: 1
+           }],
+           powerPerS: 1e4,
+           seconds: 120
+ ... (13 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L117-L118` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L588) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L117-L118)

```diff
-       const ie = (0, Me.h)();
-       return null !== ie && +ee === ie.api.localId
+       PW = WW
```

#### 14. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L122-L140` → after: `L599-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L599-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L599-L604) · [Before (L122-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L122-L140)

```diff
-       oe || (oe = !0, (0, Fe.j)(Ke.l, (ee => {
-         var ie, He;
-         const ye = (0, Ue.g)(Ke.l, ee);
-         if (!(0, Ue.c)(ye)) return;
-         const be = ye;
-         Re(be.Oy) && qe(be.Wy, {
-           icon: be.Zy,
-           level: be.Dy,
-           displayName: null !== (ie = be.ty) && void 0 !== ie ? ie : null,
-           durationMs: null !== (He = be.wy) && void 0 !== He ? He : null
-         })
-       })), (0, Fe.j)(Ke.N, (ee => {
-         const ie = (0, Ue.g)(Ke.N, ee);
-         if (!(0, Ue.c)(ie)) return;
-         const He = ie;
-         Re(He.Oy) && ye.b.remove(He.Wy)
- ... (3 more removed lines; see GitHub link above)
+       return PW ? EW.length : NW
+     }
+ 
+     function ZW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = EW[WW - 1]) || void 0 === OW ? void 0 : OW.reactorTier) && void 0 !== iW ? iW : 0
```

#### 15. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L144-L146` → after: `L608-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L608-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L608-L623) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L144-L146)

```diff
-       ye.b.update(ee, ie), Je.forEach((ie => {
-         ie(ee)
-       }))
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZW(WW) > 0;
+       return OW && !PW ? "hidden" : WW <= iW ? "open" : OW ? iW < 5 ? "hidden" : iW < NW ? "teaser" : "locked" : "locked"
+     }
+ 
+     function lW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const {
+         kind: mW,
+         n: EW
+       } = jW(WW);
+       return {
+         key: iW[mW],
+         params: {
+           [mW]: OW ? String(EW) : EW
+         }
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L149-L150` → after: `L626-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L626-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L626-L652) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L149-L150)

```diff
-       localEffectUpdated: {
-         watch: ee => Je.add(ee)
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function bW(WW, iW) {
+       return ZW(WW) > 0 && iW < NW
+     }
+ 
+     function jW(WW) {
+       const iW = ZW(WW);
+       if (iW > 0) return {
+         kind: "atomic",
+         n: iW,
+         short: `A${iW}`
+       };
+ ... (11 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L153-L164` → after: `L655-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L655-L658) · [Before (L153-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L153-L164)

```diff
-   },
-   42109: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => oe
-     });
-     var ye = He(5279),
-       be = He(5271),
-       Me = He(41734),
-       Ke = He(41739);
-     const Ue = new Set(ye.N),
-       Fe = ye.N.map((ee => (new TextEncoder).encode(ee))),
-       Je = new Map;
+ 
+     function UW(WW) {
+       return EW[Math.max(1, Math.min(WW, EW.length)) - 1]
+     }
```

#### 18. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L168-L207` → after: `L673-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L673-L675) · [Before (L168-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L168-L207)

```diff
-       return null === (He = Je.get(ee)) || void 0 === He ? void 0 : He[ie]
-     }(0, Ke.j)(ye.ic.NewOtherEntitySettings, (ee => {
-       ee.payloadKind === be.dc.Msgpack && Fe.some((ie => function(ee, ie) {
-         const He = ie[0];
-         for (let ye = ee.indexOf(He); - 1 !== ye && ye + ie.length <= ee.length; ye = ee.indexOf(He, ye + 1)) {
-           let He = 1;
-           for (; He < ie.length && ee[ye + He] === ie[He];) He++;
-           if (He === ie.length) return !0
-         }
-         return !1
-       }(ee.payload, ie))) && function(ee) {
-         if (null === ee || "object" !== typeof ee || null === ee.settings || "object" !== typeof ee.settings) return;
-         const ie = String(ee.eId),
-           He = ee.settings;
-         let ye = Je.get(ie);
-         for (const be in He) {
- ... (24 more removed lines; see GitHub link above)
+       return null !== (iW = WW.baf2CoreOpen) && void 0 !== iW ? iW : NW
+     }
+     const yW = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];
```

#### 19. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L210` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L678) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L210)

```diff
-       return oe[ee]
+       return yW.includes(WW)
```

#### 20. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L212` → after: `L680-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L680-L682) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L212)

```diff
-     const ke = new Me.b;
+     const JW = (WW, iW) => iW.map((iW => [iW, [WW]])),
+       hW = Object.fromEntries([...JW("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...JW("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...JW("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator",  … [truncated]
+     new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);
```

#### 21. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L215` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L685-L686) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L215)

```diff
-       return ke.add(ee)
+       var iW;
+       return null !== (iW = hW[WW]) && void 0 !== iW ? iW : ["Workbench"]
```

#### 22. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L219-L296` → after: `L690-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L690-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L690-L694) · [Before (L219-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L219-L296)

```diff
-       ke.callEach(ee, "a roster listener")
-     }(0, Fe.j)(Ke.X, (ee => {
-       const ie = (0, Ue.g)(Ke.X, ee);
-       if (void 0 === ie) return;
-       const He = ie.oy.some((ee => {
-           let {
-             Ry: ie,
-             ky: He
-           } = ee;
-           return null !== He && Je.has(ie) && Je.getName(ie) !== He
-         })),
-         {
-           added: ye,
-           removed: Me,
-           settingChanges: Fe
-         } = Je.apply(ie),
- ... (62 more removed lines; see GitHub link above)
+       return HW(WW)[0]
+     }
+     EW.slice(1).map(((WW, iW) => `Core Tier ${iW+2}`));
+     var uW = OW(5725);
+     const oW = ["on", "hud", "off"];
```

#### 23. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L299-L316` → after: `L697-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L697-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L697-L723) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L299-L316)

```diff
-       let {
-         deadEId: ie,
-         killerEId: He,
-         killerLifeformType: ye,
-         withItem: be,
-         killstreak: Me
-       } = ee;
-       return {
-         killer: Ee({
-           eId: He,
-           lifeformType: ye
-         }),
-         victim: Ee({
-           eId: ie
-         }),
-         withItem: be,
- ... (2 more removed lines; see GitHub link above)
+       return "on" === WW
+     }
+     var eW = OW(344);
+     const vW = "Mob Farm",
+       gW = {
+         Pig: 1,
+         Cow: 1,
+         Sheep: 1,
+         Deer: 1,
+         Stag: 1,
+         "Draugr Zombie": 2,
+         "Draugr Skeleton": 2,
+         "Cave Golem": 3,
+         "Magma Golem": 3
+       },
+       DW = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
+ ... (11 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L320-L329` → after: `L727-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L727-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L727-L730) · [Before (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L320-L329)

```diff
-       let {
-         killer: ie,
-         victim: He,
-         withItem: ye
-       } = ee;
-       return {
-         killer: Ee(ie),
-         victim: Ee(He),
-         withItem: ye,
-         killstreak: 0
+       if (!WW) return null;
+       if (WW.startsWith(fW)) {
+         const iW = WW.slice(6);
+         return DW.includes(iW) ? iW : null
```

#### 25. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L334` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L740) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L334)

```diff
-       We && Ze((() => "killed" === ee.kind ? fe(ee.body) : Te(ee.body)))
+       return !0 === WW.mobFarm
```

#### 26. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L340-L341` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L744) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L340-L341)

```diff
-       var He;
-       return Re.f.has(ee) ? null === (He = Re.f.getSettings(ee)) || void 0 === He ? void 0 : He[ie] : (0, oe.c)(ee, ie)
+       return VW[gW[iW]] * WW.opMs / 1e3
```

#### 27. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L345-L381` → after: `L751-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L751-L752) · [Before (L345-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L345-L381)

```diff
-       var ie, He, Ke, Ue, oe;
-       let {
-         eId: ke,
-         name: qe,
-         colour: fe,
-         lifeformType: Te
-       } = ee;
-       if (void 0 === ke || null === ke || "" === ke) {
-         const ee = qe || null;
-         return {
-           id: null,
-           shownName: ee,
-           lifeformType: null === ee && null !== Te && void 0 !== Te ? Te : null,
-           colour: fe || null,
-           local: !1,
-           realName: null
- ... (21 more removed lines; see GitHub link above)
+       const iW = EW.findIndex((iW => iW.unlocks.includes(WW)));
+       return iW < 0 ? 1 : iW + 1
```

#### 28. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L390` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L756) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L390)

```diff
-       null === de ? (Oe.length === ge && Oe.shift(), Oe.push(ee)) : de(ee())
+       return Math.floor(WW).toLocaleString("en-US")
```

#### 29. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L393-L402` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L763-L764) · [Before (L393-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L393-L402)

```diff
-     function we() {
-       te || (te = !0, (0, qe.j)(Ke.ic.PlayerKilled, (ee => {
-         const ie = (0, ke.h)(ee);
-         (0, ke.c)(ie) && Ze((() => fe(ie)))
-       })), (0, qe.j)(Ke.ic.CustomKillfeed, (ee => {
-         const ie = (0, ke.h)(ee);
-         (0, ke.c)(ie) && (0, ke.c)(ie.killer) && (0, ke.c)(ie.victim) && Ze((() => Te(ie)))
-       })), (0, qe.g)((() => {
-         Oe = []
-       })))
+     function Oi(WW, iW, OW) {
+       return `${QW} ${WW} ${iW} ${OW}`
```

#### 30. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L404-L441` → after: `L766-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L766-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L766-L800) · [Before (L404-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L404-L441)

```diff
-     const De = Object.freeze([0, 0, 0]),
-       Pe = [0, 0, 0],
-       Ae = [0, 0, 0],
-       Ye = {
-         kill: {
-           watch(ee) {
-             if (We = !0, 0 === Oe.length) return de = ee, () => {
-               We = !1, de = null
-             };
-             const ie = setTimeout((() => {
-               const ie = Oe;
-               Oe = [], de = ee;
-               for (const ye of ie) try {
-                 ee(ye())
-               } catch (He) {
-                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", He)
- ... (22 more removed lines; see GitHub link above)
+ 
+     function mi(WW, iW, OW) {
+       return `${Wi} ${WW} ${iW} ${OW}`
+     }
+ 
+     function Ei(WW) {
+       return `${Wi} ${WW}`
+     }
+     const Ni = [
+       [`${QW} `, "take"],
+       [`${Wi} `, "put"]
+     ];
+ 
+     function Pi(WW) {
+       const iW = Ni.find((iW => {
+         let [OW] = iW;
+ ... (19 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L443-L450` → after: `L802-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L802-L881) · [Before (L443-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L443-L450)

```diff
-   },
-   39793: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye
-     });
-     class ye {
-       constructor() {
-         this.members = new Map
+     }
+ 
+     function Li(WW, iW) {
+       const OW = "number" === typeof WW ? WW : "one" === WW ? 1 : "stack" === WW ? 99 : iW;
+       return Math.min(iW, OW)
+     }
+ 
+     function ci(WW, iW) {
+       const OW = WW => "number" === typeof WW ? WW : "one" === WW ? 1 : 99;
+       return "fill" === WW || "fill" === iW ? "fill" : OW(WW) + OW(iW)
+     }
+ 
+     function wi(WW, iW) {
+       const OW = Pi(WW),
+         mW = Pi(iW),
+         EW = OW && mW ? function(WW, iW) {
+ ... (64 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L452-L471` → after: `L883-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L883-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L883-L894) · [Before (L452-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L452-L471)

```diff
-       apply(ee) {
-         const ie = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const ye of ee.oy) {
-           let ee = this.members.get(ye.Ry);
-           if (ee || (ee = {
-               name: null,
-               settings: {}
-             }, this.members.set(ye.Ry, ee), ie.added.push(ye.Ry)), null !== ye.ky && (ee.name = ye.ky), null !== ye.qy || ye.Ty.length > 0) {
-             const He = null === ye.qy ? {} : JSON.parse(ye.qy);
-             Object.assign(ee.settings, He);
-             for (const ie of ye.Ty) delete ee.settings[ie], He[ie] = void 0;
-             ie.settingChanges.push({
- ... (4 more removed lines; see GitHub link above)
+     }
+     const Ji = "baf2synth",
+       Hi = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
+       ni = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
+       ui = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
+       oi = function(WW, iW) {
+         return {
+           input: WW,
+           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           output: iW,
+           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           bonus: arguments.length > 4 ? arguments[4] : void 0
```

#### 33. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L473-L479` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L896-L900) · [Before (L473-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L473-L479)

```diff
-         for (const ye of ee.py) {
-           const ee = this.members.get(ye);
-           var He;
-           if (ee) this.members.delete(ye), ie.removed.push({
-             playerId: ye,
-             name: null !== (He = ee.name) && void 0 !== He ? He : void 0
-           })
+       },
+       di = function(WW, iW) {
+         return {
+           ...oi(WW, iW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+           nuclear: !0
```

#### 34. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L481-L487` → after: `L902-L16909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L902-L16909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L902-L16909) · [Before (L481-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L481-L487)

```diff
-         return ie
-       }
-       has(ee) {
-         return this.members.has(ee)
-       }
-       ids() {
-         return [...this.members.keys()]
+       },
+       ei = ni.map((WW => di(WW, "Biomass", 2))),
+       vi = {
+         "Burner Drill": {
+           kind: "Burner Drill",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [1, 2, 3],
+           recipes: []
+         },
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+ ... (15992 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L489` → after: `L16911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R16911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L16911) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L489)

```diff
-       getName(ee) {
+       watch(WW) {
```

#### 36. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L491` → after: `L16913-L16918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L16913-L16918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L16913-L16918) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L491)

```diff
-         return null !== (ie = null === (He = this.members.get(ee)) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : void 0
+         this.tracker && this.sizes.unobserve(this.tracker), null === (iW = this.hud) || void 0 === iW || iW.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = WW, this.hud = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.closest(". … [truncated]
+           passive: !0
+         }), this.hudStyle.observe(this.hud, {
+           attributes: !0,
+           attributeFilter: ["style", "class"]
+         }))
```

#### 37. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L493` → after: `L16920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R16920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L16920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L16920) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L493)

```diff
-       getSettings(ee) {
+       shiftLeftOf(WW, iW) {
```

#### 38. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L495` → after: `L16922-L16939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R16922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L16922-L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L16922-L16939) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L495)

```diff
-         return null === (ie = this.members.get(ee)) || void 0 === ie ? void 0 : ie.settings
+         const mW = this.anchorOf(WW);
+         if (!mW) return 0;
+         const {
+           y: EW
+         } = mW, NW = mW.x + (null !== (OW = this.labelOffsets.get(WW)) && void 0 !== OW ? OW : 0), PW = this.em, {
+           halfWidth: LW,
+           labelled: cW
+         } = this.extentOf(WW), wW = EW - PW, tW = NW + LW;
+         return EW + PW * (cW ? 6.2 : 3) < iW.top || wW > iW.bottom || tW < iW.left - 6 || NW - LW > iW.right ? 0 : Math.max(iW.left - 6 - tW, 6 - (NW - LW))
+       }
+       shiftOnScreen(WW) {
+         var iW;
+         const OW = this.anchorOf(WW);
+         if (!OW) return 0;
+         const {
+           halfWidth: mW
+ ... (2 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L497` → after: `L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R16941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L16941) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L497)

```diff
-       getSetting(ee, ie) {
+       runLabelAside(WW, iW) {
```

#### 40. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L499` → after: `L16943-L17011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L16943-L17011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L16943-L17011) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L499)

```diff
-         return null === (He = this.members.get(ee)) || void 0 === He ? void 0 : He.settings[ie]
+         let mW = null;
+         for (let PW = 0; PW < WW.children.length; PW++) WW.children[PW].classList.contains("DirectionArrowLabel") && (mW = WW.children[PW]);
+         if (!mW) return 0;
+         const EW = WW.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(WW) : null,
+           NW = (EW && this.api ? this.side.sideOf(this.api, {
+             x: EW.x / this.innerWidth * 100,
+             y: EW.y / this.innerHeight * 100
+           }, iW, this.project) : 0) * this.halfWidthOf(mW);
+         return NW !== (null !== (OW = this.sideLabels.get(mW)) && void 0 !== OW ? OW : 0) && (mW.style.transform = 0 === NW ? "" : `translateX(-50%) translateX(${NW}px)`, 0 === NW ? this.sideLabels.delete(mW) : this.sideLabels.set(mW, NW)), NW
+       }
+       extentOf(WW) {
+         let iW = this.em,
+           OW = !1;
+         for (let mW = 0; mW < WW.children.length; mW++) {
+           const EW = WW.children[mW],
+             NW = EW.classList.contains("DirectionArrowLabel");
+ ... (53 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L502` → after: `L17014-L17764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R17014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L17014-L17764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/274.js#L17014-L17764) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/274.js#L502)

```diff
-         this.members.clear()
+         this.picks.clear()
+       }
+       Kl(WW, iW, OW) {
+         this.picks.set(WW, {
+           item: iW,
+           had: OW(iW)
+         }), this.select(WW, iW)
+       }
+     }(vE.s);
+ 
+     function aU(WW) {
+       return iW => {
+         let OW = 0;
+         for (const mW of WW.getInventoryItems())(null === mW || void 0 === mW ? void 0 : mW.name) === iW && (OW += null === mW.amount ? 1 : Math.max(mW.amount, 0));
+         return OW
+       }
+ ... (735 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L4863` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L4-L21) · [Before (L4-L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L4-L4863)

```diff
-   40282: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke,
-       d: () => be,
-       h: () => Me
-     });
-     var ye = He(59);
- 
-     function be(ee) {
-       return Ue(ee, Fe)
-     }
- 
-     function Me(ee) {
-       return Ue(ee, Je)
-     }
- 
- ... (4844 more removed lines; see GitHub link above)
+   53479: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       PostMatchPodium: () => kW
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(35264),
+       LW = OW(53483),
+       cW = OW(53489),
+       wW = OW(2075),
+       tW = OW(2021),
+       ZW = OW(1172),
+       xW = OW(37872),
+       lW = OW(1283);
+     const AW = [1, 0, 2],
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4866-L4880` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L24) · [Before (L4866-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L4866-L4880)

```diff
-       let {
-         controller: ie
-       } = ee;
-       return (0, ze.j)(ib, null), (0, Oe.jsx)(Oe.Fragment, {
-         children: ie.getMarkers().map(((ee, ie) => (0, Oe.jsxs)("span", {
-           className: "GreenvilleNavPin GreenvilleNavMarker",
-           style: Tb(ee.x, ee.z),
-           children: ["npc" === ee.kind && (0, Oe.jsx)(Mb.b, {
-             icon: ee.face
-           }), "place" === ee.kind && (0, Oe.jsx)(Xe.c, {
-             itemName: kb[ee.place],
-             amount: 0
-           })]
-         }, ie)))
-       })
+       return PW.f.openMobLineup(WW)
```

#### 3. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4884-L4885` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L28) · [Before (L4884-L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L4884-L4885)

```diff
-         plot: ie,
-         animate: He
+         view: iW
```

#### 4. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4887-L4920` → after: `L30-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L30-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L30-L61) · [Before (L4887-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L4887-L4920)

```diff
-       const ye = (0, Ue.useRef)(null),
-         be = (0, Ue.useRef)(ie.state),
-         Me = (0, Ue.useRef)(null);
-       return (0, Ue.useLayoutEffect)((() => {
-         var ee;
-         const Ke = be.current;
-         be.current = ie.state, Ke !== ie.state && (null === (ee = Me.current) || void 0 === ee || ee.cancel(), He && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === ie.state ? Me.current = ye.current.animate(Jb, {
-           duration: 300,
-           easing: "ease-out"
-         }) : "vacant" === ie.state && (Me.current = ye.current.animate(ob, {
-           duration: 400,
-           easing: "ease-in"
-         }))))
-       }), [ie.state]), (0, Ue.useEffect)((() => () => {
-         var ee;
-         null === (ee = Me.current) || void 0 === ee || ee.cancel()
- ... (18 more removed lines; see GitHub link above)
+       const OW = (0, wW.g)("players"),
+         EW = (0, mW.useRef)(null),
+         NW = AW.filter((WW => WW < iW.podium.length)),
+         PW = (0, mW.useMemo)((() => NW.map((WW => {
+           const mW = iW.podium[WW];
+           return {
+             cosmetics: (0, xW.w)(mW, OW.byId),
+             size: jW[WW],
+             nS: null,
+             animation: LW.h,
+             lift: bW[WW]
+           }
+         }))), [iW.wZ]),
+         tW = (0, mW.useMemo)((() => ({
+           figures: PW,
+           shown: PW.map((() => !0))
+ ... (16 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4927-L5010` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L69-L71) · [Before (L4927-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L4927-L5010)

```diff
-         controller: ie
-       } = ee;
-       const [He, ye] = (0, Ue.useState)((() => ie.isMapShown()));
-       (0, ze.f)(Qy, (() => {
-         ye(ie.isMapShown())
-       }));
-       const be = (0, Le.d)(),
-         [Me, Ke] = (0, Ue.useState)(null);
-       return function(ee) {
-         (0, Ue.useLayoutEffect)((() => {
-           if (!ee) return;
-           const ie = ee.closest(".GreenvilleHudColumnStack"),
-             He = new ResizeObserver((() => {
-               ee.offsetWidth > 0 && ie.style.setProperty("--greenville-map-width", `${ee.offsetWidth}px`)
-             }));
-           return He.observe(ee), () => {
- ... (68 more removed lines; see GitHub link above)
+         view: OW,
+         row: mW,
+         place: EW
```

#### 6. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5014-L5104` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L75) · [Before (L5014-L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5014-L5104)

```diff
-       } = (0, Ee.v)(), ye = function(ee) {
-         const [, ie] = (0, Ue.useState)(0);
-         return (0, Ue.useEffect)((() => {
-           const He = ee - performance.now();
-           if (He <= 0) return;
-           const ye = window.setTimeout((() => {
-             ie((ee => ee + 1))
-           }), He);
-           return () => {
-             window.clearTimeout(ye)
-           }
-         }), [ee]), ee > performance.now()
-       }(ie.restedEndsAt), {
-         energy: be,
-         breakEvenEnergy: Me,
-         luckPercent: Ke
- ... (75 more removed lines; see GitHub link above)
+       } = (0, ZW.B)(), LW = (0, xW.s)(OW, mW);
```

#### 7. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5106-L5107` → after: `L77-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L77-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L77-L83) · [Before (L5106-L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5106-L5107)

```diff
-         className: "GreenvilleMarketCountdown",
-         role: "timer",
+         className: NW()("PostMatchPodiumStep", `Place-${EW+1}`, {
+           IsLocal: mW.isLocal
+         }),
+         style: {
+           "--stepHeight": .151 + bW[EW],
+           "--teamColour": null !== (iW = mW.colour) && void 0 !== iW ? iW : void 0
+         },
```

#### 8. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5109-L5110` → after: `L85-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L85-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L85-L102) · [Before (L5109-L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5109-L5110)

```diff
-           className: "GreenvilleMarketCountdownTime FullyFancyText",
-           children: [Math.floor(He / 60), ":", String(He % 60).padStart(2, "0")]
+           className: "PostMatchPodiumBlock",
+           children: [(0, lW.jsx)("span", {
+             className: "PostMatchPodiumPlace FullyFancyText",
+             children: EW + 1
+           }), (0, lW.jsx)("span", {
+             className: "PostMatchPodiumName SmallTextBold",
+             children: mW.name
+           }), (mW.isMvp || mW.isSvp) && (0, lW.jsx)("span", {
+             className: NW()("PostMatchTag", mW.isMvp ? "Tag-mvp" : "Tag-svp"),
+             children: PW(mW.isMvp ? "postMatch:mvp" : "postMatch:svp")
+           }), null !== LW && (0, lW.jsxs)("span", {
+             className: "PostMatchPodiumStat SmallTextBold",
+             children: [(0, lW.jsx)("b", {
+               children: LW.value
+             }), " ", (0, lW.jsx)(tW.d, {
+               text: LW.label
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5114-L5131` → after: `L106-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L106-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L106-L112) · [Before (L5114-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5114-L5131)

```diff
-     const cb = [{
-         transform: "translateY(100%)",
-         opacity: 0
-       }, {
-         transform: "translateY(0)",
-         opacity: 1
-       }],
-       xb = [{
-         transform: "translateY(-100%)",
-         opacity: 0
-       }, {
-         transform: "translateY(0)",
-         opacity: 1
-       }];
- 
-     function Lb(ee) {
- ... (2 more removed lines; see GitHub link above)
+   },
+   53489: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
+     });
+     var mW = OW(62),
+       EW = OW(3809);
```

#### 10. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5133-L5216` → after: `L114-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L114-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L114-L123) · [Before (L5133-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5133-L5216)

```diff
-     function Cb(ee) {
-       let {
-         address: ie,
-         large: He,
-         rootRef: ye
-       } = ee;
-       const be = function(ee) {
-           switch (ee.kind) {
-             case "junction":
-               return [{
-                 street: ee.along,
-                 number: null
-               }, {
-                 street: ee.cross,
-                 number: null
-               }];
- ... (68 more removed lines; see GitHub link above)
+     function NW(WW, iW, OW) {
+       const NW = (0, mW.useRef)(null),
+         {
+           width: PW,
+           height: LW
+         } = (0, EW.d)(WW);
+       (0, mW.useEffect)((() => {
+         const OW = iW(WW.current);
+         return NW.current = OW, () => {
+           OW.close(), NW.current = null
```

#### 11. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5218-L5418` → after: `L125-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L125-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L125-L129) · [Before (L5218-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5218-L5418)

```diff
-       }), [ye]);
-       const [qe, Te] = be;
-       return (0, Oe.jsxs)("div", {
-         ref: ye,
-         className: fe()("GreenvilleNavSign", {
-           Large: He
-         }),
-         children: [(0, Oe.jsxs)("div", {
-           className: "GreenvilleNavBlade",
-           children: [null !== Me && (0, Oe.jsx)("span", {
-             className: "GreenvilleNavHeader",
-             children: Me
-           }), (0, Oe.jsx)(vb, {
-             blade: qe,
-             textRef: Ke
-           })]
- ... (185 more removed lines; see GitHub link above)
+       }), [WW, iW]), (0, mW.useEffect)((() => {
+         PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
+       }), [PW, LW]), (0, mW.useEffect)((() => {
+         NW.current.show(OW)
+       }), [OW])
```

#### 12. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5421-L5466` → after: `L141-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L141-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L141-L149) · [Before (L5421-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5421-L5466)

```diff
-     function Ib(ee) {
-       let {
-         status: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ee.v)();
-       switch (ie.kind) {
-         case "hudTier":
-           return (0, Oe.jsxs)("span", {
-             className: fe()("GreenvillePlaceChip", {
-               Locked: ie.locked
-             }),
-             children: [ie.locked && (0, Oe.jsx)(re.e, {
-               name: "lock"
-             }), He(`greenvilleGame:${ie.tierKey}`)]
- ... (30 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       let [OW, mW, EW] = WW;
+       return [0, .5, 1].map((WW => ({
+         timeFraction: WW,
+         rotation: {
+           YO: "catmull-rom-spline",
+           point: [OW, mW, EW + (.5 === WW ? iW : 0)]
+         }
+       })))
```

#### 13. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5469-L5504` → after: `L152-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L152-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L152-L164) · [Before (L5469-L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5469-L5504)

```diff
-     function hb(ee) {
-       let {
-         home: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ee.v)();
-       return ie.pvp || ie.parkour || !ie.visitorsAllowed ? (0, Oe.jsxs)("div", {
-         className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
-         children: [ie.pvp && (0, Oe.jsx)("span", {
-           className: "GreenvillePlaceChip Danger",
-           children: He("greenvilleGame:houseChipPvp")
-         }), ie.parkour && (0, Oe.jsx)("span", {
-           className: "GreenvillePlaceChip",
-           children: He("greenvilleGame:houseChipParkour")
-         }), !ie.visitorsAllowed && (0, Oe.jsxs)("span", {
- ... (20 more removed lines; see GitHub link above)
+     function PW(WW, iW, OW) {
+       return {
+         kO: 3200,
+         loop: !0,
+         MO: {
+           Root: {
+             timeline: [0, .5, 1].map((WW => ({
+               timeFraction: WW,
+               position: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .5 === WW ? .18 : 0, 0]
+               }
+             })))
```

#### 14. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5506-L5514` → after: `L166-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L166-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L166-L173) · [Before (L5506-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5506-L5514)

```diff
-           onCoinLanded: (ee, ie) => {
-             Me.playSound(Ke, "pickUp", .3, 1 + .5 * ee / Math.max(1, ie - 1))
-           }
-         },
-         pe = [],
-         Xe = {
-           open: ee => {
-             for (const ie of pe) ie !== ee && ie.onMenuClosed();
-             (0, oe.s)()
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((WW => ({
+               timeFraction: WW,
+               rotation: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
+               }
+             })))
```

#### 15. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5516-L5624` → after: `L175-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L175-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L175-L180) · [Before (L5516-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5516-L5624)

```diff
-           close: oe.h,
-           dismiss: oe.l
-         },
-         ze = new Je.e,
-         Be = new eH((ee => {
-           Fe.h.yR(ri, ee)
-         }), Xe, (ee => {
-           Me.sendCommand(null === ee ? ye : `${ye} ${ee}`)
-         }), ze),
-         Ee = new Ge((ee => {
-           Fe.h.yR(he, ee)
-         }), Xe, (ee => {
-           Me.sendCommand(`demolition pick ${ee}`)
-         }), ze),
-         ge = new Bi((ee => {
-           Fe.h.yR(Xi, ee)
- ... (93 more removed lines; see GitHub link above)
+           ArmLeftMesh: {
+             timeline: NW(WW, OW)
+           },
+           ArmRightMesh: {
+             timeline: NW(iW, -OW)
+           }
```

#### 16. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5629` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L191) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5629)

```diff
-   40306: (ee, ie, He) => {
+   39881: (WW, iW, OW) => {
```

#### 17. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L5634-L5667` → after: `L196-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L196-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/275.js#L196-L204) · [Before (L5634-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/275.js#L5634-L5667)

```diff
-     var ye = He(9961);
-     const be = {
-         Water: [63, 118, 228],
-         Lava: [232, 110, 30]
-       },
-       Me = [150, 150, 150],
-       Ke = -2147483648;
-     class Ue {
-       constructor(ee) {
-         this.averages = ee, this.byId = new Map
-       }
-       get(ee) {
-         var ie, He, Ke, Ue, Fe;
-         const Je = this.byId.get(ee);
-         if (void 0 !== Je) return Je;
-         const oe = null !== (ie = null === (He = ye.i[ee]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : "",
- ... (18 more removed lines; see GitHub link above)
+     const mW = new WeakMap;
+ 
+     function EW(WW, iW) {
+       return mW.set(WW, iW), WW
+     }
+ 
+     function NW(WW) {
+       var iW;
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L4-L9)

```diff
-   40631: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Je
-     });
-     var ye = He(5106);
-     const be = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+   40925: (WW, iW, OW) => {
+     WW.exports = EW;
+     var mW = OW(352);
```

#### 2. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L11-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L8-L11) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L11-L18)

```diff
-     function Me(ee) {
-       return new Promise(((ie, He) => {
-         ee.onsuccess = () => {
-           ie(ee.result)
-         }, ee.onerror = () => {
-           He(ee.error)
-         }
-       }))
+     function EW(WW, iW) {
+       if (!(this instanceof EW)) return new EW(WW, iW);
+       var OW = mW.create();
+       mW.add(OW, WW, iW), this.base = mW.min(mW.create(), WW, OW), this.vec = mW.clone(iW), this.max = mW.max(mW.create(), WW, OW), this.mag = mW.length(this.vec)
```

#### 3. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L20-L29` → after: `L13-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L13-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L13-L67) · [Before (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L20-L29)

```diff
- 
-     function Ke(ee) {
-       return new Promise(((ie, He) => {
-         ee.oncomplete = () => {
-           ie()
-         }, ee.onerror = () => {
-           He(ee.error)
-         }, ee.onabort = () => {
-           var ie;
-           He(null !== (ie = ee.error) && void 0 !== ie ? ie : new Error("IndexedDB transaction aborted"))
+     var NW = EW.prototype;
+     NW.width = function() {
+       return this.vec[0]
+     }, NW.height = function() {
+       return this.vec[1]
+     }, NW.depth = function() {
+       return this.vec[2]
+     }, NW.x0 = function() {
+       return this.base[0]
+     }, NW.y0 = function() {
+       return this.base[1]
+     }, NW.z0 = function() {
+       return this.base[2]
+     }, NW.x1 = function() {
+       return this.max[0]
+     }, NW.y1 = function() {
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L31` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L69-L70) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L31)

```diff
-       }))
+         return cW && (cW[0] = iW + tW * EW, cW[1] = OW + tW * NW, cW[2] = mW + tW * PW), wW && (wW[0] = wW[1] = wW[2] = 0), 0
+       }(WW, PW, LW, cW, wW /= xW, tW /= xW, ZW /= xW, mW = "undefined" === typeof mW ? 64 : +mW, EW, NW)
```

#### 5. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L35` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L82) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L35)

```diff
-       return IDBKeyRange.bound([ee], [ee, []])
+       return null !== EW && WW === EW
```

#### 6. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L38-L39` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L85-L86) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L38-L39)

```diff
-     function Fe(ee, ie) {
-       return IDBKeyRange.bound([ee, ie], [ee, ie, []])
+     function PW() {
+       this.Qq = !1, this.stopPropagation = !1, this.xR = !1, this.disabled = !1
```

#### 7. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L42-L52` → after: `L89-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L89-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L89-L119) · [Before (L42-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L42-L52)

```diff
-       constructor() {
-         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
-       }
-       get working() {
-         return !this.failed
-       }
-       static get supported() {
-         try {
-           return "undefined" !== typeof indexedDB
-         } catch {
-           return !1
+       constructor(WW, iW) {
+         this.version = "0.7.0";
+         var OW = Object.assign({}, new PW, iW || {});
+         this.element = WW || document, this.Qq = !!OW.Qq, this.stopPropagation = !!OW.stopPropagation, this.xR = !!OW.xR, this.disabled = !!OW.disabled, this.filterEvents = (WW, iW) => !0, this.ignoreEvent = WW => !1, this.down = new mW.EventEmitter, this.up = new mW.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           diW: 0,
+           eiW: 0,
+           viW: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? wW(this) : document.addEventListener("DOMContentLoaded", (WW => {
+           wW(this)
+         }), {
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L55-L157` → after: `L122-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L122-L126) · [Before (L55-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L55-L157)

```diff
-       putRecording(ee) {
-         this.write(["recordings"], (ie => {
-           ie.objectStore("recordings").put(ee)
-         }))
-       }
-       putVideoSequence(ee, ie, He) {
-         this.write(["recordings", "videoSequences"], (ye => {
-           ye.objectStore("recordings").put(ee), ye.objectStore("videoSequences").put({
-             recordingId: ee.recordingId,
-             segmentId: ie,
-             sequence: He
-           })
-         }))
-       }
-       appendVideo(ee, ie) {
-         this.write(["videoHeaders", "videoChunks"], (He => {
- ... (87 more removed lines; see GitHub link above)
+       getBindings() {
+         var WW = {};
+         for (var iW in this._keyBindmap) {
+           this._keyBindmap[iW].forEach((OW => {
+             WW[OW] = WW[OW] || [], WW[OW].push(iW)
```

#### 9. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L161-L247` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L131-L132) · [Before (L161-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L161-L247)

```diff
-       async deleteRecording(ee) {
-         const ie = (await this.open()).transaction([...be], "readwrite");
-         ie.objectStore("recordings").delete(ee);
-         for (const He of be.slice(1)) ie.objectStore(He).delete(Ue(ee));
-         await Ke(ie)
-       }
-       async forgetSent(ee, ie) {
-         const He = (await this.open()).transaction([...be], "readwrite"),
-           {
-             recordingId: ye
-           } = ee;
-         He.objectStore("recordings").put(ee);
-         for (const be of ie.videoSegmentIds) He.objectStore("videoHeaders").delete([ye, be]), He.objectStore("videoChunks").delete(Fe(ye, be)), He.objectStore("videoSequences").delete([ye, be]), He.objectStore("videoProgress").delete([ye, be]);
-         for (const be of ie.telemetrySequences) He.objectStore("telemetry").delete([ye, be]);
-         for (const be of ie.domSequences) He.objectStore("dom").delete([ye, be]);
-         for (const be of ie.domTailChunks) He.objectStore("domTail").delete(Fe(ye, be));
- ... (71 more removed lines; see GitHub link above)
+       hZ() {
+         cW(this.bR), cW(this.pressCount), cW(this.releaseCount)
```

#### 10. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L260-L307` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L136-L137) · [Before (L260-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L260-L307)

```diff
-     function Me(ee, ie) {
-       return new Blob([be.encode(`${JSON.stringify(ee)}\n`), ie], {
-         type: "text/plain"
-       })
-     }
-     class Ke {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-         this.token = ee, this.relay = ie, this.nowMs = He, this.refused = !1, this.skipUntilMs = 0
-       }
-       async send(ee, ie, He, be, Ke) {
-         if (this.goesDirect(ie, He)) return null;
-         const Ue = Me({
-             token: this.token,
-             contentType: He,
-             target: ee
- ... (32 more removed lines; see GitHub link above)
+     function cW(WW) {
+       for (var iW in WW) WW[iW] = 0
```

#### 11. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L311` → after: `L141-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L141-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L141-L147) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L311)

```diff
-       return void 0 === (null === ee || void 0 === ee ? void 0 : ee.relay) ? null : new Ke(ee.token, ee.relay)
+       window.addEventListener("keydown", jW.bind(null, WW, !0), !1), window.addEventListener("keyup", jW.bind(null, WW, !1), !1);
+       var iW = {
+         passive: !0
+       };
+       WW.element.addEventListener("touchstart", lW.bind(void 0, WW), {
+         passive: !1
+       }), WW.element.addEventListener("touchend", bW.bind(void 0, WW), iW), WW.element.addEventListener("mousedown", UW.bind(null, WW, !0), iW), window.document.addEventListener("mouseup", UW.bind(null, WW, !1), iW), WW.element.addEventListener("touchmove", kW.bind(null, WW), iW) … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L313-L320` → after: `L149-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L149-L154) · [Before (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L313-L320)

```diff
-     class Fe {
-       constructor() {
-         this.relays = new Map
-       }
-       for (ee) {
-         let ie = this.relays.get(ee.recordingId);
-         return void 0 === ie && (ie = Ue(ee.partJoiner), this.relays.set(ee.recordingId, ie)), ie
-       }
+     var tW = 0,
+       ZW = 0,
+       xW = null;
+ 
+     function lW(WW, iW) {
+       iW.preventDefault(), AW(iW)
```

#### 13. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L335` → after: `L158-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L158-L170) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L335)

```diff
-       return 6e4 + Math.ceil(ee / 16384 * 1e3)
+       let iW = !1;
+       for (let OW = 0; OW < WW.touches.length; ++OW)
+         if (WW.touches[OW].identifier === xW) {
+           iW = !0;
+           break
+         } if (!iW) {
+         const iW = WW.changedTouches[0];
+         tW = iW.clientX, ZW = iW.clientY, xW = iW.identifier
+       }
+     }
+ 
+     function bW(WW, iW) {
+       for (var OW = iW.changedTouches, mW = 0; mW < OW.length; ++mW) OW[mW].identifier === xW && (xW = null)
```

#### 14. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L339-L346` → after: `L174-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L174-L177) · [Before (L339-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L339-L346)

```diff
-       const be = new FormData;
-       let Me = ie.byteLength + Ke;
-       for (const [Ke, Ue] of Object.entries(ee.fields)) be.append(Ke, Ue), Me += (0, ye.i)(Ke) + (0, ye.i)(Ue);
-       return be.append("file", new Blob([ie], {
-         type: He
-       })), {
-         form: be,
-         byteLength: Me
+       if (!WW.ignoreEvent(OW)) try {
+         yW(WW, OW), iW && OW.isTrusted && !OW.repeat && WW._keyStates[OW.code] && TW(WW, OW.code)
+       } finally {
+         JW(OW.code, iW, WW, OW)
```

#### 15. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L351` → after: `L182-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L182-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L182-L196) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L351)

```diff
-       return new Me.b(`Segment ${ee} failed with ${ie}${null===He?"":` (${He})`}`, ie, He)
+       if (!WW.ignoreEvent(OW)) try {
+         yW(WW, OW)
+       } finally {
+         ! function(WW, iW, OW) {
+           if ("pointerId" in OW)
+             if (iW) {
+               if (null !== WW._touches.currID) return;
+               WW._touches.currID = OW.pointerId
+             } else {
+               if (WW._touches.currID !== OW.pointerId) return;
+               WW._touches.currID = null
+             } var mW = "button" in OW ? OW.button + 1 : 1;
+           JW("Mouse" + mW, iW, WW, OW)
+         }(WW, iW, OW)
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L354-L355` → after: `L199-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L199-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L199-L214) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L354-L355)

```diff
-     function oe(ee) {
-       if (ee < 200 || ee > 299) throw Je("POST", ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
+     function kW(WW, iW) {
+       var OW = iW.movementX || iW.mozMovementX || 0,
+         mW = iW.movementY || iW.mozMovementY || 0;
+       if (iW.touches && 0 === (OW | mW)) {
+         var EW = function(WW) {
+           AW(WW);
+           for (let iW = 0; iW < WW.changedTouches.length; ++iW)
+             if (WW.changedTouches[iW].identifier == xW) {
+               const OW = WW.changedTouches[iW],
+                 mW = [OW.clientX - tW, OW.clientY - ZW];
+               return tW = OW.clientX, ZW = OW.clientY, mW
+             } return console.error(`Did not find touch id ${xW}`), [0, 0]
+         }(iW);
+         OW = EW[0], mW = EW[1]
+       }
+       WW.bR.dx += OW, WW.bR.dy += mW
```

#### 17. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L359` → after: `L218-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L218-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L218-L230) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L359)

```diff
-       if ((ee < 200 || ee > 299) && (!ie || 412 !== ee)) throw Je("PUT", ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+       yW(WW, iW);
+       var OW = 1;
+       switch (iW.deltaMode) {
+         case 0:
+           OW = 1;
+           break;
+         case 1:
+           OW = 12;
+           break;
+         case 2:
+           OW = WW.element.clientHeight || window.innerHeight
+       }
+       WW.bR.diW += (iW.deltaX || 0) * OW, WW.bR.eiW += (iW.deltaY || 0) * OW, WW.bR.viW += (iW.deltaZ || 0) * OW
```

#### 18. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L361-L370` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L232-L234) · [Before (L361-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L361-L370)

```diff
-     async function ke(ee) {
-       var ie, He;
-       if (ee.ok) return null;
-       let ye;
-       try {
-         ye = await ee.text()
-       } catch (be) {
-         return console.warn("Session replay couldn't read storage's error answer", be), null
-       }
-       return null !== (ie = null === (He = /<Code>([^<]+)<\/Code>/.exec(ye)) || void 0 === He ? void 0 : He[1]) && void 0 !== ie ? ie : null
+ 
+     function MW(WW, iW) {
+       if (!WW.xR) return iW.preventDefault(), !1
```

#### 19. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L372-L440` → after: `L236-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L236-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L236-L248) · [Before (L372-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L372-L440)

```diff
-     class qe {
-       constructor(ee) {
-         var ie;
-         let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         this.segmentUploadUrl = ee, this.deadline = void 0, this.relay = void 0, this.deadline = He.deadline, this.relay = null !== (ie = He.relay) && void 0 !== ie ? ie : null
-       }
-       requestPutUrl(ee) {
-         return this.presign(ee)
-       }
-       requestPostTargets(ee) {
-         return this.presign(ee)
-       }
-       async presign(ee) {
-         const ie = await fetch(this.segmentUploadUrl, {
-           method: "POST",
-           headers: {
- ... (53 more removed lines; see GitHub link above)
+     var KW = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ 
+     function SW(WW, iW) {
+       return !!WW[KW[iW]] || ("AltRight" === iW || "ControlLeft" === iW) && "function" === typeof WW.getModifierState && !0 === WW.getModifierState("AltGraph")
```

#### 20. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L442-L457` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L250-L257) · [Before (L442-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L442-L457)

```diff
-     class fe {
-       async requestPutUrl(ee) {
-         return {
-           uploadUrl: "",
-           ifNoneMatch: !1
-         }
-       }
-       async requestPostTargets(ee) {
-         return {
-           targets: Array.from({
-             length: ee.parts.count
-           }, (() => ({
-             url: "",
-             fields: {}
-           }))),
-           expiresInSecs: 900
+ 
+     function YW(WW, iW) {
+       for (var OW in WW._modifiersHeldThroughBlur = {}, KW) WW._keyStates[OW] && (WW._modifiersHeldThroughBlur[OW] = !0);
+       iW && iW.isTrusted && function() {
+         try {
+           return window.self !== window.top
+         } catch (WW) {
+           return !0
```

#### 21. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L459-L464` → after: `L259-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L259-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L259-L282) · [Before (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L459-L464)

```diff
-       }
-       put() {
-         return Promise.resolve()
-       }
-       post() {
-         return Promise.resolve()
+       }() && (clearTimeout(WW._blurRelease), WW._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var iW in WW._modifiersHeldThroughBlur = {}, WW._keyStates) WW._keyStates[iW] && !/^Mouse\d/.test(iW) && TW(WW, iW)
+       }), 0))
+     }
+ 
+     function yW(WW, iW) {
+       var OW = WW._modifiersHeldThroughBlur;
+       if (OW && iW.isTrusted && document.hasFocus())
+         for (var mW in OW) delete OW[mW], WW._keyStates[mW] && mW !== iW.code && (SW(iW, mW) || TW(WW, mW))
+     }
+ 
+     function TW(WW, iW) {
+       const OW = {
+           code: iW,
+           preventDefault: () => {},
+ ... (8 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L468` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L309) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L468)

```diff
-   40570: (ee, ie, He) => {
+   40907: (WW, iW, OW) => {
```

#### 23. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L470` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L311) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L470)

```diff
-       e: () => Ke
+       d: () => mW
```

#### 24. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L480-L549` → after: `L315-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L315-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L315-L382) · [Before (L480-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L480-L549)

```diff
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
-         this.quietMs = ee, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
-       }
-       pack(ee) {
-         return new Promise(((ie, He) => {
-           var ye;
-           const be = null !== (ye = this.worker) && void 0 !== ye ? ye : this.start();
-           if (null === be) return void He(this.failure);
-           const Me = this.nextId++;
-           this.waiting.set(Me, {
-             resolve: ie,
-             reject: He
-           });
-           const Ke = {
-             id: Me,
-             text: ee
- ... (54 more removed lines; see GitHub link above)
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.rV = !1, this.zV = !1, this.Fv = 30, this.XV = 0, this.mp = 100, this.PU = !1, this.fullscreen = !1, this.Hk = function(WW) {}, this.kp = function(WW, iW, OW) {}, this.uZ = function() {}, this.Lk = function() {}, this.Xp = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(WW) {
+             if ("loading" === document.readyState) {
+               var iW = () => {
+                 document.removeEventListener("readystatechange", iW), WW()
+               };
+               document.addEventListener("readystatechange", iW)
+             } else setTimeout(WW, 0)
+           }((() => {
+             ! function(WW) {
+               var iW = WW._data,
+                 OW = iW.nowObject.now();
+               iW.lastTickStarted = OW, iW.lastFrameStarted = OW, iW.lastRenderStarted = OW, iW.frameCB = () => function(WW) {
+                 var iW = WW._data;
+ ... (52 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L552-L557` → after: `L385-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L385-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L385-L391) · [Before (L552-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L552-L557)

```diff
-   },
-   40548: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => be
-     });
-     var ye = He(40554);
+ 
+     function EW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
+       this.nowObject = performance || Date, this.pollTime = WW, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     }
+     var NW = 3,
+       PW = 20;
```

#### 26. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L560-L564` → after: `L394-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L394-L398) · [Before (L560-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L560-L564)

```diff
-       const ie = (new TextEncoder).encode(ee);
-       return {
-         bytes: (0, ye.b)(ie),
-         inflatedBytes: ie.byteLength
-       }
+       for (var iW = WW._data, OW = 1e3 / WW.Fv, mW = iW.nowObject.now() + PW, EW = 0; iW.nowObject.now() >= iW.lastTickStarted + OW && iW.nowObject.now() < mW && ++EW <= NW;) WW.Hk(OW), iW.lastTickStarted += OW;
+       var LW = 5 * (OW + 5),
+         cW = iW.nowObject.now();
+       if (cW - iW.lastTickStarted > LW)
+         for (; cW >= iW.lastTickStarted + OW;) iW.lastTickStarted += OW
```

#### 27. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L567` → after: `L401-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L401-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L401-L409) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L567)

```diff
-   40602: (ee, ie, He) => {
+   40189: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW, EW) {
+       var NW = {};
+       return Object.keys(mW).forEach((function(WW) {
+         NW[WW] = mW[WW]
+       })), NW.enumerable = !!NW.enumerable, NW.configurable = !!NW.configurable, ("value" in NW || NW.initializer) && (NW.writable = !0), NW = OW.slice().reverse().reduce((function(OW, mW) {
+         return mW(WW, iW, OW) || OW
+       }), NW), EW && void 0 !== NW.initializer && (NW.value = NW.initializer ? NW.initializer.call(EW) : void 0, NW.initializer = void 0), void 0 === NW.initializer && (Object.defineProperty(WW, iW, NW), NW = null), NW
+     }
```

#### 28. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L569-L577` → after: `L411-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L411-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L411-L421) · [Before (L569-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L569-L577)

```diff
-       e: () => Me
-     });
-     const ye = 20;
-     let be = Date.now() - performance.now();
- 
-     function Me() {
-       const ee = performance.now(),
-         ie = Date.now();
-       return Math.abs(ie - (ee + be)) > ye && (be = ie - ee), ee + be
+       c: () => mW
+     })
+   },
+   40181: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW) {
+       OW && Object.defineProperty(WW, iW, {
+         enumerable: OW.enumerable,
+         configurable: OW.configurable,
+         writable: OW.writable,
+         value: OW.initializer ? OW.initializer.call(mW) : void 0
+       })
```

#### 29. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L580` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L427) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L580)

```diff
-   40572: (ee, ie, He) => {
+   39908: (WW, iW, OW) => {
```

#### 30. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L582` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L429) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L582)

```diff
-       b: () => Me
+       c: () => NW
```

#### 31. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L584-L590` → after: `L431-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L431-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L431-L466) · [Before (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L584-L590)

```diff
-     var ye = He(40579),
-       be = He(1141);
- 
-     function Me() {
-       return {
-         segmentUploadUrl: `${be.clientSideServerUrls.indexUrl}${ye.j}`,
-         manifestUrl: `${be.clientSideServerUrls.indexUrl}${ye.f}`
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+           const iW = [];
+           do {
+             const OW = Object.getOwnPropertyNames(WW);
+             for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
+           } while (WW = Object.getPrototypeOf(WW));
+           return iW
+         }(WW);
+         for (const wW of LW) {
+ ... (20 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L594` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L470) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L594)

```diff
-   40584: (ee, ie, He) => {
+   39938: (WW, iW, OW) => {
```

#### 33. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L598` → after: `L474-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L474-L475) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L598)

```diff
-       i: () => be
+       i: () => PW,
+       m: () => LW
```

#### 34. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L600-L626` → after: `L477-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L477-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L477-L480) · [Before (L600-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L600-L626)

```diff
-     const ye = 32768;
- 
-     function be(ee) {
-       return (new TextEncoder).encode(ee).byteLength
-     }
-     const Me = new class {
-       constructor() {
-         this.inFlightBytes = 0, this.inFlightLabels = new Map
-       }
-       async fetch(ee, ie, He, ye) {
-         if (this.inFlightBytes + He > 49152) return await fetch(ee, ie);
-         this.inFlightBytes += He, this.countLabel(ye, 1);
-         const be = () => {
-           this.inFlightBytes -= He, this.countLabel(ye, -1)
-         };
-         let Me;
- ... (11 more removed lines; see GitHub link above)
+     var mW = OW(38372);
+     class EW {
+       constructor(WW, iW, OW) {
+         this.gradient = WW, this.color1 = iW, this.color2 = OW
```

#### 35. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L628-L630` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L482-L483) · [Before (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L628-L630)

```diff
-       isInFlight(ee) {
-         var ie;
-         return (null !== (ie = this.inFlightLabels.get(ee)) && void 0 !== ie ? ie : 0) > 0
+       getColorToRef(WW) {
+         this.color2 ? mW.d.LerpToRef(this.color1, this.color2, Math.random(), WW) : WW.HJ(this.color1)
```

#### 36. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L632-L636` → after: `L485-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L485-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L485-L488) · [Before (L632-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L632-L636)

```diff
-       sendBeacon(ee, ie) {
-         const He = be(ie);
-         return !(this.inFlightBytes + He > 57344) && this.beaconSent(navigator.sendBeacon(ee, new Blob([ie], {
-           type: "text/plain"
-         })), He)
+     }
+     class NW {
+       constructor(WW, iW) {
+         this.gradient = WW, this.color = iW
```

#### 37. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L638-L639` → after: `L490-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L490-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L490-L493) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L638-L639)

```diff
-       sendUploadBeacon(ee, ie, He) {
-         return !(this.inFlightBytes + He > 40960) && this.beaconSent(navigator.sendBeacon(ee, ie), He)
+     }
+     class PW {
+       constructor(WW, iW, OW) {
+         this.gradient = WW, this.factor1 = iW, this.factor2 = OW
```

#### 38. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L641-L643` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L495-L496) · [Before (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L641-L643)

```diff
-       countLabel(ee, ie) {
-         var He;
-         void 0 !== ee && this.inFlightLabels.set(ee, (null !== (He = this.inFlightLabels.get(ee)) && void 0 !== He ? He : 0) + ie)
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
```

#### 39. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L645-L648` → after: `L498-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L498-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L498-L510) · [Before (L645-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L645-L648)

```diff
-       beaconSent(ee, ie) {
-         return ee && (this.inFlightBytes += ie, setTimeout((() => {
-           this.inFlightBytes -= ie
-         }), 1e4)), ee
+     }
+     class LW {
+       static GetCurrentGradient(WW, iW, OW) {
+         if (iW[0].gradient > WW) return void OW(iW[0], iW[0], 1);
+         for (let EW = 0; EW < iW.length - 1; EW++) {
+           const mW = iW[EW],
+             NW = iW[EW + 1];
+           if (WW >= mW.gradient && WW <= NW.gradient) {
+             return void OW(mW, NW, (WW - mW.gradient) / (NW.gradient - mW.gradient))
+           }
+         }
+         const mW = iW.length - 1;
+         OW(iW[mW], iW[mW], 1)
```

#### 40. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L652` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L514) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L652)

```diff
-   40606: (ee, ie, He) => {
+   39911: (WW, iW, OW) => {
```

#### 41. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L654` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L516) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L654)

```diff
-       d: () => Ke
+       b: () => mW
```

#### 42. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L656-L676` → after: `L518-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L518-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L518-L568) · [Before (L656-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L656-L676)

```diff
-     var ye = He(40584),
-       be = He(1155);
-     const Me = 6e4;
-     async function Ke(ee, ie) {
-       const He = JSON.stringify(ie);
-       try {
-         const ie = await ye.g.fetch(ee, {
-           method: "POST",
-           headers: {
-             "Content-Type": "application/json"
-           },
-           body: He,
-           signal: (0, be.v)(Me)
-         }, (0, ye.i)(He));
-         return await async function(ee) {
-           if (!ee.ok) return 413 === ee.status ? "refused" : "retryLater";
- ... (5 more removed lines; see GitHub link above)
+     class mW {
+       static _CheckLimit(WW, iW) {
+         let OW = mW._LogLimitOutputs[WW];
+         return OW ? OW.current++ : (OW = {
+           limit: iW,
+           current: 1
+         }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
+       }
+       static _GenerateLimitMessage(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const OW = mW._LogLimitOutputs[WW];
+         if (!OW || !mW.MessageLimitReached) return;
+         const EW = this._Levels[iW];
+         OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
+       }
+       static _AddLogEntry(WW) {
+ ... (35 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L680` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L585) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L680)

```diff
-   40609: (ee, ie, He) => {
+   39940: (WW, iW, OW) => {
```

#### 44. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L682-L683` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L587) · [Before (L682-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L682-L683)

```diff
-       d: () => Ue,
-       e: () => Fe
+       d: () => PW
```

#### 45. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L685-L721` → after: `L589-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L589-L631) · [Before (L685-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L685-L721)

```diff
-     var ye = He(40584);
-     const be = 16384,
-       Me = 100,
-       Ke = (0, ye.i)(',"domSegments":[]');
- 
-     function Ue(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be;
-       const {
-         domSegments: Ue,
-         ...Fe
-       } = ee.manifest, Je = () => ({
-         ...ee,
-         manifest: {
-           ...Fe,
-           videoSegments: [],
-           telemetrySegments: [],
- ... (21 more removed lines; see GitHub link above)
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(39908);
+     class PW {
+       constructor() {
+         this.direction1 = new mW.q(0, 1, 0), this.direction2 = new mW.q(0, 1, 0), this.minEmitBox = new mW.q(-.5, -.5, -.5), this.maxEmitBox = new mW.q(.5, .5, .5)
+       }
+       startDirectionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
+           LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
+           cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
+         if (NW) return iW.x = PW, iW.y = LW, void(iW.z = cW);
+         mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
+       }
+       startPositionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
+ ... (27 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L754` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L635) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L754)

```diff
-   40594: (ee, ie, He) => {
+   39906: (WW, iW, OW) => {
```

#### 47. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L756` → after: `L637-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L637-L638) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L756)

```diff
-       b: () => ye
+       e: () => LW,
+       i: () => PW
```

#### 48. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L758-L761` → after: `L640-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L640-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L640-L726) · [Before (L758-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L758-L761)

```diff
-     class ye extends Error {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         super(ee), this.status = ie, this.storageCode = He
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(39908);
+     class PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = WW, this.height = iW, this.radiusRange = OW, this.directionRandomizer = EW, this._tempVector = mW.q.Zero()
+       }
+       startDirectionFunction(WW, iW, OW, NW, PW) {
+         OW.position.subtractToRef(WW.getTranslation(), this._tempVector), this._tempVector.normalize(), mW.q.TransformNormalToRef(this._tempVector, PW, this._tempVector);
+         const LW = (0, EW.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
+         let cW = Math.atan2(this._tempVector.x, this._tempVector.z);
+         cW += (0, EW.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = LW, this._tempVector.x = Math.sin(cW), this._tempVector.z = Math.cos(cW), this._tempVector.normalize(), NW ? iW.HJ(this._tempVector) : mW.q.TransformNormalFromFloatsToRef … [truncated]
+ ... (71 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L765` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L730) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L765)

```diff
-   40579: (ee, ie, He) => {
+   40009: (WW, iW, OW) => {
```

#### 50. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L767-L771` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L732) · [Before (L767-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L767-L771)

```diff
-       d: () => Ue,
-       f: () => be,
-       g: () => Me,
-       j: () => ye,
-       k: () => Ke
+       d: () => ZW
```

#### 51. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L773-L780` → after: `L734-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L734-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/276.js#L734-L951) · [Before (L773-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/276.js#L773-L780)

```diff
-     const ye = "/index/replay/segment-upload-url",
-       be = "/index/replay/manifest";
-     const Me = 65536;
- 
-     function Ke(ee) {
-       return {
-         count: Math.ceil(ee.segmentDurationMs / ee.partDurationMs) + 1,
-         maxBytes: Math.ceil(1.5 * ee.bitrate / 8 * (ee.partDurationMs / 1e3)) + 32768
+     const mW = .5 * (Math.sqrt(3) - 1),
+       EW = (3 - Math.sqrt(3)) / 6,
+       NW = 1 / 3,
+       PW = 1 / 6,
+       LW = (Math.sqrt(5) - 1) / 4,
+       cW = (5 - Math.sqrt(5)) / 20,
+       wW = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
+       tW = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
+     const ZW = class {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+         const iW = "function" == typeof WW ? WW : function(WW) {
+           let iW = 0,
+             OW = 0,
+             mW = 0,
+             EW = 1;
+ ... (202 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (274 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4)

```diff
-   40653: (ee, ie, He) => {
+   53781: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L6-L7)

```diff
-       c: () => XJ,
-       e: () => sq
+       d: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9-L159` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L8-L20) · [Before (L9-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L9-L159)

```diff
-     const ye = "0.9.4",
-       be = {
-         DEBUG: !1,
-         LIB_VERSION: "1.438.7",
-         LIB_NAME: "web",
-         JS_SDK_VERSION: ye
-       };
-     var Me = be;
-     const Ke = "$early_access_features",
-       Ue = "$active_feature_flags",
-       Fe = "$feature_flag_details",
-       Je = "$feature_flag_errors",
-       oe = "$feature_flag_evaluated_at",
-       Re = "$feature_flag_request_id",
-       ke = "$minimal_flag_called_events",
-       qe = "$enabled_feature_flags",
- ... (135 more removed lines; see GitHub link above)
+     var mW = OW(41628),
+       EW = OW(53788);
+     class NW {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = OW, this.sEW = [], this._maxBlockCapacity = iW || 64, this._selectionContent = new mW.d(1024), this._creationFunc = WW
+       }
+       update(WW, iW, OW) {
+         EW.e._CreateBlocks(WW, iW, OW, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       xEW(WW) {
+         for (let iW = 0; iW < this.blocks.length; iW++) {
+           this.blocks[iW].addEntry(WW)
```

#### 4. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L161-L175` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L22-L25) · [Before (L161-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L161-L175)

```diff
-       }))) && void 0 !== ie ? ie : "null"
-     }
-     const zH = Object.prototype,
-       BH = zH.hasOwnProperty,
-       EH = zH.toString,
-       gH = Array.isArray || function(ee) {
-         return "[object Array]" === EH.call(ee)
-       },
-       OH = ee => "function" == typeof ee,
-       dH = ee => ee === Object(ee) && !gH(ee),
-       WH = ee => {
-         if (dH(ee)) {
-           for (const ie in ee)
-             if (BH.call(ee, ie)) return !1;
-           return !0
+       }
+       pD(WW) {
+         for (let iW = 0; iW < this.blocks.length; iW++) {
+           this.blocks[iW].removeEntry(WW)
```

#### 5. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L177-L207` → after: `L27-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L27-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L27-L47) · [Before (L177-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L177-L207)

```diff
-         return !1
-       },
-       tH = ee => void 0 === ee,
-       ZH = ee => "[object String]" == EH.call(ee),
-       wH = ee => ZH(ee) && 0 === ee.trim().length,
-       DH = ee => null === ee,
-       PH = ee => tH(ee) || DH(ee),
-       AH = ee => "[object Number]" == EH.call(ee) && ee == ee,
-       YH = ee => AH(ee) && ee > 0,
-       VH = ee => "[object Boolean]" === EH.call(ee),
-       aH = ee => fH(kH, ee),
-       cH = ee => fH(qH, ee);
- 
-     function xH(ee) {
-       return null === ee || "object" != typeof ee
-     }
- ... (15 more removed lines; see GitHub link above)
+       }
+       select(WW, iW) {
+         this._selectionContent.reset();
+         for (let OW = 0; OW < this.blocks.length; OW++) {
+           this.blocks[OW].select(WW, this._selectionContent, iW)
+         }
+         return iW ? this._selectionContent.concat(this.sEW) : this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
+       }
+       intersects(WW, iW, OW) {
+         this._selectionContent.reset();
+         for (let mW = 0; mW < this.blocks.length; mW++) {
+           this.blocks[mW].intersects(WW, iW, this._selectionContent, OW)
+         }
+         return OW ? this._selectionContent.concat(this.sEW) : this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
+       }
+       intersectsRay(WW) {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L210-L212` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L50-L54) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L210-L212)

```diff
- 
-     function vH(ee) {
-       return "u" > typeof Event && uH(ee, Event)
+     NW.CreationFuncForMeshes = (WW, iW) => {
+       const OW = WW.KV();
+       !WW.isBlocked && OW.boundingBox.intersectsMinMax(iW.ZEW, iW.tEW) && iW.entries.push(WW)
+     }, NW.CreationFuncForSubMeshes = (WW, iW) => {
+       WW.KV().boundingBox.intersectsMinMax(iW.ZEW, iW.tEW) && iW.entries.push(WW)
```

#### 7. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L214-L219` → after: `L56-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L56-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L56-L65) · [Before (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L214-L219)

```diff
- 
-     function uH(ee, ie) {
-       try {
-         return ee instanceof ie
-       } catch (ee) {
-         return !1
+   },
+   53788: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW
+     });
+     var mW = OW(38241),
+       EW = OW(41825);
+     class NW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+         this.entries = [], this.MEW = new Array, this._capacity = OW, this._depth = mW, this._maxDepth = EW, this._creationFunc = NW, this._minPoint = WW, this._maxPoint = iW, this.MEW.push(WW.clone()), this.MEW.push(iW.clone()), this.MEW.push(WW.clone()), this.MEW[2].x = iW.x, t … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L221-L231` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L67-L68) · [Before (L221-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L221-L231)

```diff
-     }
-     const mH = [!0, "true", 1, "1", "yes"],
-       lH = ee => fH(mH, ee),
-       SH = [!1, "false", 0, "0", "no"];
- 
-     function nH(ee, ie, He, ye, be, Me, Ke) {
-       try {
-         var Ue = ee[Me](Ke),
-           Fe = Ue.value
-       } catch (ee) {
-         return void He(ee)
+       get aZ() {
+         return this._capacity
```

#### 9. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L233-L244` → after: `L70-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L70-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L70-L85) · [Before (L233-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L233-L244)

```diff
-       Ue.done ? ie(Fe) : Promise.resolve(Fe).then(ye, be)
-     }
- 
-     function jH(ee) {
-       return function() {
-         var ie = this,
-           He = arguments;
-         return new Promise((function(ye, be) {
-           var Me = ee.apply(ie, He);
- 
-           function Ke(ee) {
-             nH(Me, ye, be, Ke, Ue, "next", ee)
+       get ZEW() {
+         return this._minPoint
+       }
+       get tEW() {
+         return this._maxPoint
+       }
+       addEntry(WW) {
+         if (this.blocks)
+           for (let iW = 0; iW < this.blocks.length; iW++) {
+             this.blocks[iW].addEntry(WW)
+           } else this._creationFunc(WW, this), this.entries.length > this.aZ && this._depth < this._maxDepth && this.createInnerBlocks()
+       }
+       removeEntry(WW) {
+         if (this.blocks) {
+           for (let iW = 0; iW < this.blocks.length; iW++) {
+             this.blocks[iW].removeEntry(WW)
```

#### 10. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L246-L248` → after: `L87-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L87-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L87-L104) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L246-L248)

```diff
- 
-           function Ue(ee) {
-             nH(Me, ye, be, Ke, Ue, "throw", ee)
+           return
+         }
+         const iW = this.entries.indexOf(WW);
+         iW > -1 && this.entries.splice(iW, 1)
+       }
+       addEntries(WW) {
+         for (let iW = 0; iW < WW.length; iW++) {
+           const OW = WW[iW];
+           this.addEntry(OW)
+         }
+       }
+       select(WW, iW, OW) {
+         if (EW.b.IsInFrustum(this.MEW, WW)) {
+           if (this.blocks) {
+             for (let mW = 0; mW < this.blocks.length; mW++) {
+               this.blocks[mW].select(WW, iW, OW)
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L250-L251` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L106-L107) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L250-L251)

```diff
-           Ke(void 0)
-         }))
+           OW ? iW.concat(this.entries) : iW.concatWithNoDuplicate(this.entries)
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L253-L263` → after: `L109-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L109-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L109-L113) · [Before (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L253-L263)

```diff
-     }
-     const sH = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
-       IH = new Map,
-       hH = function(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         if (!ee) return !1;
-         const He = function(ee, ie) {
-             let He = "";
-             for (let ye = 0; ie.length > ye; ye++) {
-               const ee = ie[ye];
-               He += ee.length + ":" + ee
+       intersects(WW, iW, OW, mW) {
+         if (EW.b.IntersectsSphere(this._minPoint, this._maxPoint, WW, iW)) {
+           if (this.blocks) {
+             for (let EW = 0; EW < this.blocks.length; EW++) {
+               this.blocks[EW].intersects(WW, iW, OW, mW)
```

#### 13. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L265-L279` → after: `L115-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L115-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L115-L129) · [Before (L265-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L265-L279)

```diff
-             return ee.length + ":" + ee + "|" + ie.length + ":" + He
-           }(ee, ie),
-           ye = IH.get(He);
-         if (void 0 !== ye) return ye;
-         const be = ee.toLowerCase(),
-           Me = sH.concat(ie).some((ee => -1 !== be.indexOf(ee.toLowerCase())));
-         return 256 > IH.size || IH.clear(), IH.set(He, Me), Me
-       };
- 
-     function NH(ee, ie, He, ye, be) {
-       return ie > He && (ye.warn("min cannot be greater than max."), ie = He), AH(ee) ? ee > He ? (ye.warn(" cannot be  greater than max: " + He + ". Using max value instead."), He) : ie > ee ? (ye.warn(" cannot be less than min: " + ie + ". Using min value instead."), ie) : ee : … [truncated]
-     }
-     var GH = class {
-       constructor(ee) {
-         this._buckets = {}, this._onBucketRateLimited = ee._onBucketRateLimited, this._bucketSize = NH(ee.bucketSize, 0, 100, ee._logger), this._refillRate = NH(ee.refillRate, 0, this._bucketSize, ee._logger), this._refillInterval = NH(ee.refillInterval, 0, 864e5, ee._logger)
+             return
+           }
+           mW ? OW.concat(this.entries) : OW.concatWithNoDuplicate(this.entries)
+         }
+       }
+       intersectsRay(WW, iW) {
+         if (WW.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let OW = 0; OW < this.blocks.length; OW++) {
+               this.blocks[OW].intersectsRay(WW, iW)
+             }
+             return
+           }
+           iW.concatWithNoDuplicate(this.entries)
+         }
```

#### 14. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L281-L283` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L131-L132) · [Before (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L281-L283)

```diff
-       _applyRefill(ee, ie) {
-         const He = Math.floor((ie - ee.lastAccess) / this._refillInterval);
-         He > 0 && (ee.tokens = Math.min(ee.tokens + He * this._refillRate, this._bucketSize), ee.lastAccess = ee.lastAccess + He * this._refillInterval)
+       createInnerBlocks() {
+         NW._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
```

#### 15. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L285-L293` → after: `L134-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L134-L144) · [Before (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L285-L293)

```diff
-       consumeRateLimit(ee) {
-         var ie;
-         const He = Date.now(),
-           ye = String(ee);
-         let be = this._buckets[ye];
-         return be ? this._applyRefill(be, He) : (be = {
-           tokens: this._bucketSize,
-           lastAccess: He
-         }, this._buckets[ye] = be), 0 === be.tokens || (be.tokens--, 0 === be.tokens && (null === (ie = this._onBucketRateLimited) || void 0 === ie || ie.call(this, ee)), 0 === be.tokens)
+       static _CreateBlocks(WW, iW, OW, EW, PW, LW, cW, wW) {
+         cW.blocks = new Array;
+         const tW = new mW.q((iW.x - WW.x) / 2, (iW.y - WW.y) / 2, (iW.z - WW.z) / 2);
+         for (let mW = 0; mW < 2; mW++)
+           for (let iW = 0; iW < 2; iW++)
+             for (let ZW = 0; ZW < 2; ZW++) {
+               const xW = WW.add(tW.multiplyByFloats(mW, iW, ZW)),
+                 lW = WW.add(tW.multiplyByFloats(mW + 1, iW + 1, ZW + 1)),
+                 AW = new NW(xW, lW, EW, PW + 1, LW, wW);
+               AW.addEntries(OW), cW.blocks.push(AW)
+             }
```

#### 16. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L295-L296` → after: `L146-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L146-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L146-L161) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L295-L296)

```diff
-       stop() {
-         this._buckets = {}
+     }
+   },
+   53797: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW
+     });
+     var mW = OW(41612),
+       EW = OW(38241),
+       NW = OW(41942),
+       PW = OW(53729),
+       LW = OW(41689),
+       cW = OW(38270),
+       wW = OW(53781);
+     class tW {
+       constructor(WW) {
+         this.name = LW.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new PW.t(EW.q.Zero(), new EW.q(1, 1, 1)), (WW = WW || cW.d.LastCreatedScene) && (this.rb = WW, this.rb.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.rb.getActiveSubMeshCandidat … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L298-L419` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L163-L167) · [Before (L298-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L298-L419)

```diff
-     };
-     const rH = "Mobile",
-       QH = "Android",
-       ey = "Tablet",
-       iy = "Android Tablet",
-       Hy = "iPad",
-       yy = "Apple Watch",
-       by = "Safari",
-       My = "BlackBerry",
-       Ky = "Samsung Internet",
-       Uy = "Chrome",
-       Fy = "Chrome iOS",
-       Jy = "Internet Explorer",
-       oy = "Internet Explorer Mobile",
-       Ry = "Opera",
-       ky = "Microsoft Edge",
- ... (106 more removed lines; see GitHub link above)
+       register() {
+         this.rb.onMeshRemovedObservable.add((WW => {
+           const iW = this.rb.selectionOctree;
+           if (void 0 !== iW && null !== iW) {
+             const OW = iW.sEW.indexOf(WW); - 1 !== OW && iW.sEW.splice(OW, 1)
```

#### 18. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L421-L440` → after: `L169-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L169-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L169-L179) · [Before (L421-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L421-L440)

```diff
-           return [Ey, ""]
-         }],
-         [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, ee => ee && ee[3] ? ["iOS", [ee[3], ee[4], ee[5] || "0"].join(".")] : ["iOS", ""]],
-         [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, ee => {
-           let ie = "";
-           return ee && ee.length >= 3 && (ie = tH(ee[2]) ? ee[3] : ee[2]), ["watchOS", ie]
-         }],
-         [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), ee => ee && ee[2] ? [QH, [ee[2], ee[3], ee[4] || "0"].join(".")] : [QH, ""]],
-         [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, ee => {
-           const ie = ["Mac OS X", ""];
-           return ee && ee[1] && (ie[1] = [ee[1], ee[2], ee[3] || "0"].join(".")), ie
-         }],
-         [/Mac/i, ["Mac OS X", ""]],
-         [/CrOS/, ["Chrome OS", ""]],
-         [/Linux|debian/i, ["Linux", ""]]
-       ],
- ... (4 more removed lines; see GitHub link above)
+         })), this.rb.onMeshImportedObservable.add((WW => {
+           const iW = this.rb.selectionOctree;
+           void 0 !== iW && null !== iW && iW.xEW(WW)
+         }))
+       }
+       getActiveMeshCandidates() {
+         return this.rb.JEW?.select(this.rb.frustumPlanes) || this.rb._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(WW) {
+         if (WW._submeshesOctree && WW.useOctreeForRenderingSelection) {
+           return WW._submeshesOctree.select(this.rb.frustumPlanes)
```

#### 19. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L442-L483` → after: `L181-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L181-L186) · [Before (L442-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L442-L483)

```diff
-         return ["", ""]
-       },
-       Qy = function(ee) {
-         return ny.test(ee) ? Ty : Sy.test(ee) ? py : ly.test(ee) ? Xy : new RegExp(dy, "i").test(ee) ? dy : new RegExp("(Windows Phone|WPDesktop)", "i").test(ee) ? gy : /iPad/.test(ee) ? Hy : /iPod/.test(ee) ? "iPod Touch" : /iPhone/.test(ee) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\ … [truncated]
-       },
-       eb = function(ee, ie) {
-         var He;
-         const ye = Qy(ee);
-         return ye === Hy || ye === iy || "Kobo" === ye || "Kindle Fire" === ye || ye === ty ? ey : ye === Ty || ye === Xy || ye === py || ye === dy ? "Console" : ye === yy ? "Wearable" : ye ? rH : "Android" === (null == ie ? void 0 : ie.userAgentDataPlatform) && (null !== (He = n … [truncated]
-         var be, Me, Ke
-       },
-       ib = /\bFBAV\/(\d+(?:\.\d+)*)/i,
-       Hb = [
-         [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
-         [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
-         [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", ib],
- ... (26 more removed lines; see GitHub link above)
+         return this.rb._getDefaultSubMeshCandidates(WW)
+       }
+       getIntersectingSubMeshCandidates(WW, iW) {
+         if (WW._submeshesOctree && WW.useOctreeForPicking) {
+           PW.t.TransformToRef(iW, WW.getWorldMatrix(), this._tempRay);
+           return WW._submeshesOctree.intersectsRay(this._tempRay)
```

#### 20. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L486-L502` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L190-L193) · [Before (L486-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L486-L502)

```diff
-       return ie
-     }
- 
-     function Kb(ee, ie) {
-       if (!ie) return ee;
-       let He = [];
-       try {
-         He = Object.keys(ie)
-       } catch (ee) {
-         He = []
-       }
-       for (const ye of He) {
-         let He;
-         try {
-           He = ie[ye]
-         } catch (ee) {
- ... (1 more removed lines; see GitHub link above)
+       getCollidingSubMeshCandidates(WW, iW) {
+         if (WW._submeshesOctree && WW.useOctreeForCollisions) {
+           const OW = iW._velocityWorldLength + Math.max(iW._radius.x, iW._radius.y, iW._radius.z);
+           return WW._submeshesOctree.intersects(iW._basePointWorld, OW)
```

#### 21. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L504-L509` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L195) · [Before (L504-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L504-L509)

```diff
-         Object.defineProperty(ee, ye, {
-           value: He,
-           enumerable: !0,
-           writable: !0,
-           configurable: !0
-         })
+         return this.rb._getDefaultSubMeshCandidates(WW)
```

#### 22. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L511` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L197-L198) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L511)

```diff
-       return ee
+       rebuild() {}
+       dispose() {}
```

#### 23. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L513-L533` → after: `L200-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L200-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L200-L271) · [Before (L513-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L513-L533)

```diff
-     Date, Date;
-     const Ub = 3e5;
-     var Fb = class {
-       record(ee) {
-         if ("too-large" === ee.kind) return;
-         if ("retry-later" !== ee.kind) return void this.reset();
-         if (!ee.retryAfterMs) return;
-         const ie = this.isOpen(),
-           He = Date.now(),
-           ye = Math.min(ee.retryAfterMs, Ub);
-         if (!ie) return this._installedAt = He, void(this._until = He + ye);
-         this._until = Math.max(this._until, Math.min(He + ye, this._installedAt + Ub))
-       }
-       remainingMs() {
-         const ee = Date.now();
-         if (this._installedAt - 5e3 > ee) return this.reset(), 0;
- ... (5 more removed lines; see GitHub link above)
+     let ZW = !1;
+     ZW || (ZW = !0, mW.i.prototype.createOrUpdateSelectionOctree = function() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         OW = this._getComponent(LW.b.NAME_OCTREE);
+       OW || (OW = new tW(this), this.MmW(OW)), this.JEW || (this.JEW = new wW.d(wW.d.CreationFuncForMeshes, WW, iW));
+       const mW = this.getWorldExtends();
+       return this.JEW.update(mW.min, mW.max, this.meshes), this.JEW
+     }, Object.defineProperty(mW.i.prototype, "selectionOctree", {
+       get: function() {
+         return this.JEW
+       },
+       enumerable: !0,
+       configurable: !0
+     }), NW.b.prototype.createOrUpdateSubmeshesOctree = function() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (56 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L535-L536` → after: `L273-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L273-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L273-L316) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L535-L536)

```diff
-       reset() {
-         this._until = 0, this._installedAt = 0
+       intersectsBox(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.intersectsBoxMinMax(WW.minimum, WW.maximum, iW)
+       }
+       intersectsSphere(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = WW.center.x - this.origin.x,
+           mW = WW.center.y - this.origin.y,
+           EW = WW.center.z - this.origin.z,
+           NW = OW * OW + mW * mW + EW * EW,
+           PW = WW.radius + iW,
+           LW = PW * PW;
+         if (NW <= LW) return !0;
+         const cW = OW * this.direction.x + mW * this.direction.y + EW * this.direction.z;
+         if (cW < 0) return !1;
+         return NW - cW * cW <= LW
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L538-L539` → after: `L318-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L318-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L318-L419) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L538-L539)

```diff
-       constructor() {
-         this._until = 0, this._installedAt = 0
+       intersectsAxis(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (WW) {
+           case "y": {
+             const WW = (this.origin.y - iW) / this.direction.y;
+             return WW > 0 ? null : new EW.q(this.origin.x + this.direction.x * -WW, iW, this.origin.z + this.direction.z * -WW)
+           }
+           case "x": {
+             const WW = (this.origin.x - iW) / this.direction.x;
+             return WW > 0 ? null : new EW.q(iW, this.origin.y + this.direction.y * -WW, this.origin.z + this.direction.z * -WW)
+           }
+           case "z": {
+             const WW = (this.origin.z - iW) / this.direction.z;
+             return WW > 0 ? null : new EW.q(this.origin.x + this.direction.x * -WW, this.origin.y + this.direction.y * -WW, iW)
+           }
+           default:
+ ... (86 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L541-L570` → after: `L421-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L421-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L421-L430) · [Before (L541-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L541-L570)

```diff
-     };
-     const Jb = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
- 
-     function ob(ee, ie) {
-       return "string" == typeof(He = ee) && Jb.test(He) ? ee : ie();
-       var He
-     }
- 
-     function Rb(ee, ie) {
-       const He = new Error(ie);
-       try {
-         Object.defineProperty(He, "name", {
-           value: ee,
-           writable: !0,
-           enumerable: !0,
-           configurable: !0
- ... (14 more removed lines; see GitHub link above)
+       unprojectRayToRef(WW, iW, OW, mW, NW, PW, LW) {
+         const wW = EW.l.Matrix[0];
+         NW.multiplyToRef(PW, wW), wW.multiplyToRef(LW, wW), wW.invert();
+         const tW = cW.d.LastCreatedEngine,
+           ZW = EW.l.fA[0];
+         ZW.x = WW / OW * 2 - 1, ZW.y = -(iW / mW * 2 - 1), ZW.z = tW?.nmW ? 1 : tW?.isNDCHalfZRange ? 0 : -1;
+         const xW = EW.l.fA[1].yWW(ZW.x, ZW.y, 1 - 1e-8),
+           lW = EW.l.fA[2],
+           AW = EW.l.fA[3];
+         EW.q.TransformCoordinatesToRef(ZW, wW, lW), EW.q.TransformCoordinatesToRef(xW, wW, AW), this.origin.HJ(lW), AW.subtractToRef(lW, this.direction), this.direction.normalize()
```

#### 27. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L574-L576` → after: `L434-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L434-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L434-L454) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L574-L576)

```diff
-     function fb(ee, ie) {
-       const He = setTimeout(ee, ie);
-       return null != He && He.unref && (null == He || He.unref()), He
+     function xW(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const PW = ZW.Zero();
+       return lW(WW, iW, OW, mW, PW, EW, NW), PW
+     }
+ 
+     function lW(WW, iW, OW, mW, NW, PW) {
+       let LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const wW = WW.VA();
+       if (!PW && !(PW = WW.activeCamera) && !(PW = WW.cameraToUseForPointers)) return WW;
+       const tW = PW.viewport,
+         ZW = wW.getRenderHeight(),
+         {
+           x: xW,
+           y: lW,
+ ... (5 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L579-L580` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L457-L459) · [Before (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L579-L580)

```diff
-     function Tb(ee, ie, He) {
-       return pb.apply(this, arguments)
+     function AW(WW, iW, OW, mW) {
+       const EW = ZW.Zero();
+       return bW(WW, iW, OW, EW, mW), EW
```

#### 29. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L583-L599` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L462-L476) · [Before (L583-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L583-L599)

```diff
-     function pb() {
-       return (pb = jH((function*(ee, ie, He) {
-         let ye;
-         try {
-           return yield Promise.race([ee, new Promise(((ee, be) => {
-             ye = fb((() => {
-               try {
-                 null == He || He(), ee()
-               } catch (ee) {
-                 be(ee)
-               }
-             }), ie)
-           }))])
-         } finally {
-           clearTimeout(ye)
-         }
- ... (1 more removed lines; see GitHub link above)
+     function bW(WW, iW, OW, mW, NW) {
+       if (!LW.b) return WW;
+       const PW = WW.VA();
+       if (!NW && !(NW = WW.activeCamera) && !(NW = WW.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const cW = NW.viewport,
+         wW = PW.getRenderHeight(),
+         {
+           x: tW,
+           y: ZW,
+           width: xW,
+           height: lW
+         } = cW.toGlobal(PW.getRenderWidth(), wW),
+         AW = EW.d.Identity(),
+         bW = 1 / PW.getHardwareScalingLevel();
+       return iW = iW * bW - tW, OW = OW * bW - (wW - ZW - lW), mW.update(iW, OW, xW, lW, AW, AW, NW.getProjectionMatrix()), WW
```

#### 30. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L602-L607` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L479-L480) · [Before (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L602-L607)

```diff
-     function Xb(ee) {
-       return Xb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
-         return typeof ee
-       } : function(ee) {
-         return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
-       }, Xb(ee)
+     function jW(WW, iW, OW, mW, EW, NW, PW, LW) {
+       return UW(WW, OW, mW, iW(mW, OW.enableDistantPicking), EW, NW, PW, LW)
```

#### 31. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L610-L628` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L483-L485) · [Before (L610-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L610-L628)

```diff
-     function zb(ee, ie, He) {
-       return (ie = function(ee) {
-         var ie = function(ee) {
-           if ("object" != Xb(ee) || !ee) return ee;
-           var ie = ee[Symbol.toPrimitive];
-           if (void 0 !== ie) {
-             var He = ie.call(ee, "string");
-             if ("object" != Xb(He)) return He;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return String(ee)
-         }(ee);
-         return "symbol" == Xb(ie) ? ie : ie + ""
-       }(ie)) in ee ? Object.defineProperty(ee, ie, {
-         value: He,
-         enumerable: !0,
- ... (3 more removed lines; see GitHub link above)
+     function UW(WW, iW, OW, mW, EW, NW, PW, LW) {
+       const cW = iW.intersects(mW, EW, PW, NW, OW, LW);
+       return cW && cW.hit ? !EW && null != WW && cW.distance >= WW.distance ? null : cW : null
```

#### 32. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L632-L639` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L489) · [Before (L632-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L632-L639)

```diff
-       var He = Object.keys(ee);
-       if (Object.getOwnPropertySymbols) {
-         var ye = Object.getOwnPropertySymbols(ee);
-         ie && (ye = ye.filter((function(ie) {
-           return Object.getOwnPropertyDescriptor(ee, ie).enumerable
-         }))), He.push.apply(He, ye)
-       }
-       return He
+       return "InstancedLinesMesh" === WW || "LinesMesh" === WW ? iW.intersectionThreshold : 0
```

#### 33. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L643-L649` → after: `L493-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L493-L501) · [Before (L643-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L643-L649)

```diff
-       for (var ie = 1; arguments.length > ie; ie++) {
-         var He = null != arguments[ie] ? arguments[ie] : {};
-         ie % 2 ? Bb(Object(He), !0).forEach((function(ie) {
-           zb(ee, ie, He[ie])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Bb(Object(He)).forEach((function(ie) {
-           Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
-         }))
+       const iW = WW.getClassName();
+       if ("GreasedLineMesh" === iW) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const OW = WW.rawBoundingInfo;
+       return {
+         rawBoundingInfo: OW,
+         intersectionThreshold: OW ? kW(iW, WW) : 0
```
