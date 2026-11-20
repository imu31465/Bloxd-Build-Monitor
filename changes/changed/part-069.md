# Changed — Bundle Modifications Report (Part 069 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `69 / 133` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 068](part-068.md) · [Part 070 →](part-070.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/74.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/74.js` (4747 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28)

#### 2252. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16276` → after: `L16385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16385) · [Before (L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16276)

```diff
-           savedZoomDistance: vv.camera.gL,
+           savedZoomDistance: TT.camera.uL,
```

#### 2253. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16278` → after: `L16387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16387) · [Before (L16278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16278)

```diff
-           facingMode: null !== (Pv = ev.facingMode) && void 0 !== Pv ? Pv : "frozen",
+           facingMode: null !== (cT = KT.facingMode) && void 0 !== cT ? cT : "frozen",
```

#### 2254. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16281-L16283` → after: `L16390-L16392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16390-L16392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16390-L16392) · [Before (L16281-L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16281-L16283)

```diff
-         }), vv.camera.gL = 0, vv.camera.dL = 0, Nv[0] = 0, Nv[1] = 0, vv.Rm.svv(vv.sV).heading = dv.heading, vv.Rm.bK(vv.camera.HA, vv.Rm.names.KF);
-         const lv = null !== (Sv = ev.position) && void 0 !== Sv ? Sv : vv.camera.nH();
-         return vv.Rm.setPosition(vv.camera.HA, [lv[0], lv[1], lv[2]]), hv(vv), !0
+         }), TT.camera.uL = 0, TT.camera.dL = 0, xT[0] = 0, xT[1] = 0, TT.oN.oTT(TT.jH).heading = fT.heading, TT.oN.LJ(TT.camera.fL, TT.oN.names.Xw);
+         const IT = null !== (MT = KT.position) && void 0 !== MT ? MT : TT.camera.KU();
+         return TT.oN.setPosition(TT.camera.fL, [IT[0], IT[1], IT[2]]), lT(TT), !0
```

#### 2255. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16288` → after: `L16397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16397) · [Before (L16288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16288)

```diff
-         null === (zv = vv.Rm.Avv(vv.sV)) || void 0 === zv || zv.Vdv()
+         null === (kT = TT.oN.ckT(TT.jH)) || void 0 === kT || kT.sfT()
```

#### 2256. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16298` → after: `L16407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16407) · [Before (L16298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16298)

```diff
-         return null !== (zv = null === (Pv = dv(vv)) || void 0 === Pv ? void 0 : Pv.facing.heading) && void 0 !== zv ? zv : vv.camera.heading
+         return null !== (kT = null === (cT = fT(TT)) || void 0 === cT ? void 0 : cT.facing.heading) && void 0 !== kT ? kT : TT.camera.heading
```

#### 2257. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16303-L16304` → after: `L16412-L16413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16412-L16413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16412-L16413) · [Before (L16303-L16304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16303-L16304)

```diff
-         if (!Pv) return Sv().copy(zv, vv.camera.ZH());
-         const hv = (0, ev.b)(Pv.facing.heading, Pv.facing.pitch);
+         if (!cT) return MT().copy(kT, TT.camera.rU());
+         const lT = (0, KT.c)(cT.facing.heading, cT.facing.pitch);
```

#### 2258. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16315-L16316` → after: `L16424-L16425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16424-L16425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16424-L16425) · [Before (L16315-L16316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16315-L16316)

```diff
-         vv.Rm.IK(vv.camera.HA, vv.Rm.names.KF, {
-           Xw: Pv.followEntity,
+         TT.oN.dJ(TT.camera.fL, TT.oN.names.Xw, {
+           Tv: cT.followEntity,
```

#### 2259. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16318-L16320` → after: `L16427-L16429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16427-L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16427-L16429) · [Before (L16318-L16320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16318-L16320)

```diff
-           pzv: Pv.pzv
-         }), vv.camera.gL = Pv.savedZoomDistance, vv.camera.dL = Pv.savedZoomDistance;
-         const Sv = vv.Ma.Wy().Gy;
+           FkT: cT.FkT
+         }), TT.camera.uL = cT.savedZoomDistance, TT.camera.dL = cT.savedZoomDistance;
+         const MT = TT.gv.hY().aY;
```

#### 2260. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16324` → after: `L16433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16433) · [Before (L16324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16324)

```diff
-         return null !== (zv = null === (Pv = dv(vv)) || void 0 === Pv ? void 0 : Pv.savedZoomDistance) && void 0 !== zv ? zv : 0
+         return null !== (kT = null === (cT = fT(TT)) || void 0 === cT ? void 0 : cT.savedZoomDistance) && void 0 !== kT ? kT : 0
```

#### 2261. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16327` → after: `L16436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16436) · [Before (L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16327)

```diff
-         return null !== (zv = null === (Pv = dv(vv)) || void 0 === Pv ? void 0 : Pv.savedRigShift) && void 0 !== zv ? zv : pv
+         return null !== (kT = null === (cT = fT(TT)) || void 0 === cT ? void 0 : cT.savedRigShift) && void 0 !== kT ? kT : yT
```

#### 2262. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16330-L16331` → after: `L16439-L16440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16439-L16440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16439-L16440) · [Before (L16330-L16331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16330-L16331)

```diff
-           hv = Pv && vv.Rm.rA(Pv.followEntity);
-         return !!hv && (Pv.pzv ? Pv.pzv(zv, !0, Pv.followOffset) : Sv().copy(zv, Pv.followOffset), Sv().add(zv, hv.iH, zv), !0)
+           lT = cT && TT.oN.wL(cT.followEntity);
+         return !!lT && (cT.FkT ? cT.FkT(kT, !0, cT.followOffset) : MT().copy(kT, cT.followOffset), MT().add(kT, lT.uR, kT), !0)
```

#### 2263. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16340` → after: `L16449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16449) · [Before (L16340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16340)

```diff
-         return null !== (zv = null === (Pv = dv(vv)) || void 0 === Pv ? void 0 : Pv.facing.pitch) && void 0 !== zv ? zv : vv.camera.pitch
+         return null !== (kT = null === (cT = fT(TT)) || void 0 === cT ? void 0 : cT.facing.pitch) && void 0 !== kT ? kT : TT.camera.pitch
```

#### 2264. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16344` → after: `L16453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16453) · [Before (L16344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16344)

```diff
-         return Wv(vv) ? Tv(vv, zv) : Sv().copy(zv, vv.camera.ZH())
+         return CT(TT) ? AT(TT, kT) : MT().copy(kT, TT.camera.rU())
```

#### 2265. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16353` → after: `L16462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16462) · [Before (L16353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16353)

```diff
-         zv(vv) ? vv.Rm.setPosition(vv.camera.HA, hv) : Pv(vv, {
+         kT(TT) ? TT.oN.setPosition(TT.camera.fL, lT) : cT(TT, {
```

#### 2266. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16358` → after: `L16467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16467) · [Before (L16358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16358)

```diff
-         const dv = vv.Rm.svv(vv.sV);
+         const fT = TT.oN.oTT(TT.jH);
```

#### 2267. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16363` → after: `L16472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16472) · [Before (L16363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16363)

```diff
-   37956: (vv, zv, Pv) => {
+   38270: (TT, kT, cT) => {
```

#### 2268. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16365` → after: `L16474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16474) · [Before (L16365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16365)

```diff
-       b: () => Rv
+       d: () => HT
```

#### 2269. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16367-L16368` → after: `L16476-L16477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16476-L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16476-L16477) · [Before (L16367-L16368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16367-L16368)

```diff
-     var hv = Pv(37764),
-       Sv = Pv(327),
+     var lT = cT(38067),
+       MT = cT(350),
```

#### 2270. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16370-L16378` → after: `L16479-L16487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16479-L16487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16479-L16487) · [Before (L16370-L16378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16370-L16378)

```diff
-       gv = Pv(185),
-       pv = Pv(37962),
-       dv = Pv(37789),
-       Nv = Pv(36269),
-       lv = Pv(36271),
-       Tv = Pv(3438),
-       Wv = Pv(3539),
-       wv = Pv(609),
-       av = Pv(4019);
+       OT = cT(218),
+       yT = cT(38277),
+       fT = cT(38097),
+       xT = cT(36573),
+       IT = cT(36580),
+       AT = cT(3644),
+       CT = cT(3732),
+       jT = cT(606),
+       vT = cT(4235);
```

#### 2271. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16405` → after: `L16514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16514) · [Before (L16405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16405)

```diff
-           vv.playParticleEffect(zv, pv ? Pv : null)
+           TT.playParticleEffect(kT, yT ? cT : null)
```

#### 2272. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16467-L16469` → after: `L16576-L16578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16576-L16578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16576-L16578) · [Before (L16467-L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16467-L16469)

```diff
-     var cv = Pv(321),
-       Gv = Pv(618),
-       mv = Pv(312);
+     var QT = cT(347),
+       ST = cT(608),
+       DT = cT(339);
```

#### 2273. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16496` → after: `L16605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16605) · [Before (L16496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16496)

```diff
-         wW: 2.5,
+         tC: 2.5,
```

#### 2274. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16646` → after: `L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16755) · [Before (L16646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16646)

```diff
-           wW: 0,
+           tC: 0,
```

#### 2275. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16664` → after: `L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16773) · [Before (L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16664)

```diff
-           wW: 0,
+           tC: 0,
```

#### 2276. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16684` → after: `L16793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16793) · [Before (L16684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16684)

```diff
-           wW: 0,
+           tC: 0,
```

#### 2277. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16743` → after: `L16852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16852) · [Before (L16743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16743)

```diff
-         ...Object.fromEntries(Gv.y.map((vv => [(0, mv.Tb)(vv), {
+         ...Object.fromEntries(ST.y.map((TT => [(0, DT.Pb)(TT), {
```

#### 2278. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16863` → after: `L16972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16972) · [Before (L16863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16863)

```diff
-         ...Object.fromEntries(cv.h.map((vv => [vv, Kv]))),
+         ...Object.fromEntries(QT.d.map((TT => [TT, zT]))),
```

#### 2279. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16868` → after: `L16977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16977) · [Before (L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16868)

```diff
-           wW: 0,
+           tC: 0,
```

#### 2280. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16877` → after: `L16986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R16986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L16986) · [Before (L16877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16877)

```diff
-           wW: 0,
+           tC: 0,
```

#### 2281. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16903` → after: `L17012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17012) · [Before (L16903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16903)

```diff
-           wW: .05,
+           tC: .05,
```

#### 2282. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16919` → after: `L17028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17028) · [Before (L16919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16919)

```diff
-         this.bloxd = vv, this.eId = zv, this.vW = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.vW = vv.vW, this.type = (0, hv.f)(Pv).item, this.spawnTime = Date.now()
+         this.bloxd = TT, this.eId = kT, this.cC = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.cC = TT.cC, this.type = (0, lT.f)(cT).item, this.spawnTime = Date.now()
```

#### 2283. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16923` → after: `L17032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17032) · [Before (L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16923)

```diff
-         this.vW.Rm.deleteEntity(this.eId)
+         this.cC.oN.deleteEntity(this.eId)
```

#### 2284. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16930` → after: `L17039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17039) · [Before (L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16930)

```diff
-           vW: zv
+           cC: kT
```

#### 2285. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16932` → after: `L17041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17041) · [Before (L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16932)

```diff
-           Rm: Pv
+           oN: cT
```

#### 2286. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16937` → after: `L17046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17046) · [Before (L16937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16937)

```diff
-         Pv.add([vv.x, vv.y, vv.z], Sv, ev, null, null, !1, !1, this.eId), Pv.IK(this.eId, Pv.names.smoothToServerPos);
+         cT.add([TT.x, TT.y, TT.z], MT, KT, null, null, !1, !1, this.eId), cT.dJ(this.eId, cT.names.smoothToServerPos);
```

#### 2287. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16941-L16943` → after: `L17050-L17052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17050-L17052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17050-L17052) · [Before (L16941-L16943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16941-L16943)

```diff
-         if (null !== gv && hv.d.includes(this.type)) {
-           if (gv === zv.W8) return;
-           const vv = zv.wV[zv.sV][gv];
+         if (null !== OT && lT.e.includes(this.type)) {
+           if (OT === kT.W9) return;
+           const TT = kT.IH[kT.jH][OT];
```

#### 2288. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16946` → after: `L17055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17055) · [Before (L16946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16946)

```diff
-         Pv.IK(this.eId, "doOnFirstTick", {
+         cT.dJ(this.eId, "doOnFirstTick", {
```

#### 2289. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16948` → after: `L17057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17057) · [Before (L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16948)

```diff
-             Pv.IK(this.eId, "hidingMeshManager", {
+             cT.dJ(this.eId, "hidingMeshManager", {
```

#### 2290. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16950` → after: `L17059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17059) · [Before (L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16950)

```diff
-                 Pv.IK(this.eId, Pv.names.mesh, {
+                 cT.dJ(this.eId, cT.names.mesh, {
```

#### 2291. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16952` → after: `L17061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17061) · [Before (L16952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16952)

```diff
-                   ggv: !1
+                   jOT: !1
```

#### 2292. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16956` → after: `L17065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17065) · [Before (L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16956)

```diff
-                 Pv.bK(this.eId, Pv.names.mesh)
+                 cT.LJ(this.eId, cT.names.mesh)
```

#### 2293. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16967` → after: `L17076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17076) · [Before (L16967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16967)

```diff
-           vW: hv
+           cC: lT
```

#### 2294. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16969-L16970` → after: `L17078-L17079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17078-L17079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17078-L17079) · [Before (L16969-L16970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16969-L16970)

```diff
-           Rm: Sv
-         } = hv, av = hv.sV, cv = this.getSpawnPos(av), Gv = {
+           oN: MT
+         } = lT, vT = lT.jH, QT = this.getSpawnPos(vT), ST = {
```

#### 2295. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16976` → after: `L17085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17085) · [Before (L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16976)

```diff
-               } = Vv[this.type], dv = Sv.yG(this.eId), cv = this.bloxd.getClosestSolidBlock(dv), [Gv, mv, jv] = dv;
+               } = JT[this.type], fT = MT.kN(this.eId), QT = this.bloxd.getClosestSolidBlock(fT), [ST, DT, aT] = fT;
```

#### 2296. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16980-L16983` → after: `L17089-L17092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17089-L17092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17089-L17092) · [Before (L16980-L16983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16980-L16983)

```diff
-                 return void(0, Tv.sendColyMessage)(Wv.ng, {
-                   zp: this.eId,
-                   Pp: dv,
-                   hp: vv
+                 return void(0, AT.sendColyMessage)(CT.vg, {
+                   RO: this.eId,
+                   gO: fT,
+                   UO: TT
```

#### 2297. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16986` → after: `L17095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17095) · [Before (L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16986)

```diff
-               const fv = null !== (vv = pv.type) && void 0 !== vv ? vv : sv.Boom;
+               const FT = null !== (TT = yT.type) && void 0 !== TT ? TT : tT.Boom;
```

#### 2298. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16988` → after: `L17097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17097) · [Before (L16988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16988)

```diff
-               const Fv = Sv.yG(av),
+               const rT = MT.kN(vT),
```

#### 2299. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L16993` → after: `L17102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17102) · [Before (L16993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L16993)

```diff
-               ev().Mg(Fv, Yv) < nv + 1 && Nv.c.play((0, lv.e)("cannonFire"), null !== (Dv = null !== (Kv = pv.volume) && void 0 !== Kv ? Kv : Vv[this.type].volume) && void 0 !== Dv ? Dv : 1, Yv, nv, Ov).rate(.8 + .2 * Math.random());
+               KT().JO(rT, PT) < wT + 1 && xT.d.play((0, IT.h)("cannonFire"), null !== (bT = null !== (zT = yT.volume) && void 0 !== zT ? zT : JT[this.type].volume) && void 0 !== bT ? bT : 1, PT, wT, mT).rate(.8 + .2 * Math.random());
```

#### 2300. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17001` → after: `L17110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17110) · [Before (L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17001)

```diff
-                 const Nv = vv.bloxd.isClient ? [...vv.Rm.yG(zv)] : vv.room.api.yG(zv);
+                 const xT = TT.bloxd.isClient ? [...TT.oN.kN(kT)] : TT.room.api.kN(kT);
```

#### 2301. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17007` → after: `L17116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17116) · [Before (L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17007)

```diff
-                   const Sv = vv.Rm.vx(zv);
+                   const MT = TT.oN.JV(kT);
```

#### 2302. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17009` → after: `L17118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17118) · [Before (L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17009)

```diff
-                   Sv && (ev = Sv.BT.vec[1] / 2);
+                   MT && (KT = MT.BA.vec[1] / 2);
```

#### 2303. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17016` → after: `L17125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17125) · [Before (L17016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17016)

```diff
-                   return hv >= pv ? gv : ev + (hv - Pv) / (pv - Pv) * (gv - ev)
+                   return lT >= yT ? OT : KT + (lT - cT) / (yT - cT) * (OT - KT)
```

#### 2304. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17026-L17030` → after: `L17135-L17139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17135-L17139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17135-L17139) · [Before (L17026-L17030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17026-L17030)

```diff
-               }(this.vW, av, "Player", fv, null !== (zv = null === (Pv = pv.knockbackFactor) || void 0 === Pv ? void 0 : Pv.terrain) && void 0 !== zv ? zv : 1, 2 * pv.power, Yv, pv.ignoreProjectiles);
-               ev().scale(Rv, Rv, 1 / gv.f.clientTicksPerSecond), Sv.vx(hv.sV).applyImpulse([Rv[0], Rv[1], Rv[2]]), (0, Tv.sendColyMessage)(Wv.ng, {
-                 zp: this.eId,
-                 Pp: dv,
-                 hp: Rv
+               }(this.cC, vT, "Player", FT, null !== (kT = null === (cT = yT.knockbackFactor) || void 0 === cT ? void 0 : cT.terrain) && void 0 !== kT ? kT : 1, 2 * yT.power, PT, yT.ignoreProjectiles);
+               KT().scale(HT, HT, 1 / OT.f.clientTicksPerSecond), MT.JV(lT.jH).applyImpulse([HT[0], HT[1], HT[2]]), (0, AT.sendColyMessage)(CT.vg, {
+                 RO: this.eId,
+                 gO: fT,
+                 UO: HT
```

#### 2305. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17036` → after: `L17145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17145) · [Before (L17036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17036)

```diff
-           Sv.IK(this.eId, "doOnFirstTick", {
+           MT.dJ(this.eId, "doOnFirstTick", {
```

#### 2306. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17045-L17050` → after: `L17154-L17159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17154-L17159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17154-L17159) · [Before (L17045-L17050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17045-L17050)

```diff
-         this.eId = Sv.add(cv, jv, fv, null, null, !0, !1).toString(), (0, Tv.sendColyMessage)(Wv.rg, {
-             zp: this.eId,
-             Kl: this.type,
-             Vl: vv,
-             sg: this.vW.camera.fL
-           }), Nv.c.play((0, lv.e)("bow"), .6 * (null !== (zv = Vv[this.type].volume) && void 0 !== zv ? zv : 1)).rate(.6 + .2 * Math.random()), Sv.IK(this.eId, "doOnFirstTick", {
+         this.eId = MT.add(QT, aT, FT, null, null, !0, !1).toString(), (0, AT.sendColyMessage)(CT.zg, {
+             RO: this.eId,
+             JI: this.type,
+             oI: TT,
+             cO: this.cC.camera.qL
+           }), xT.d.play((0, IT.h)("bow"), .6 * (null !== (kT = JT[this.type].volume) && void 0 !== kT ? kT : 1)).rate(.6 + .2 * Math.random()), MT.dJ(this.eId, "doOnFirstTick", {
```

#### 2307. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17052` → after: `L17161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17161) · [Before (L17052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17052)

```diff
-               Sv.IK(this.eId, "hidingMeshManager", {
+               MT.dJ(this.eId, "hidingMeshManager", {
```

#### 2308. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17054` → after: `L17163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17163) · [Before (L17054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17054)

```diff
-                   Sv.IK(this.eId, Sv.names.mesh, {
+                   MT.dJ(this.eId, MT.names.mesh, {
```

#### 2309. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17056` → after: `L17165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17165) · [Before (L17056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17056)

```diff
-                     ggv: !0
+                     jOT: !0
```

#### 2310. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17060` → after: `L17169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17169) · [Before (L17060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17060)

```diff
-                   Sv.bK(this.eId, Sv.names.mesh)
+                   MT.LJ(this.eId, MT.names.mesh)
```

#### 2311. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17068-L17069` → after: `L17177-L17178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17177-L17178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17177-L17178) · [Before (L17068-L17069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17068-L17069)

```diff
-             ev().sqrDist(Sv.yG(this.eId), Sv.yG(av)) > 1e4 && ((0, Tv.sendColyMessage)(Wv.vg, {
-               zp: this.eId
+             KT().sqrDist(MT.kN(this.eId), MT.kN(vT)) > 1e4 && ((0, AT.sendColyMessage)(CT.Dg, {
+               RO: this.eId
```

#### 2312. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17072-L17073` → after: `L17181-L17182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17181-L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17181-L17182) · [Before (L17072-L17073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17072-L17073)

```diff
-             (0, Tv.sendColyMessage)(Wv.vg, {
-               zp: this.eId
+             (0, AT.sendColyMessage)(CT.Dg, {
+               RO: this.eId
```

#### 2313. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17075` → after: `L17184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17184) · [Before (L17075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17075)

```diff
-           }), null !== (Pv = Vv[this.type].autoRemoveAfterTime) && void 0 !== Pv ? Pv : 6e4, this.eId), Sv.IK(this.eId, "collideTerrain", {
+           }), null !== (cT = JT[this.type].autoRemoveAfterTime) && void 0 !== cT ? cT : 6e4, this.eId), MT.dJ(this.eId, "collideTerrain", {
```

#### 2314. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17078` → after: `L17187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17187) · [Before (L17078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17078)

```diff
-               (0, dv.sgv)(Sv.getState(this.eId, "physics"), Sv.rA(this.eId)), Sv.tgv(this.eId, Sv.rA(this.eId));
+               (0, fT.rOT)(MT.getState(this.eId, "physics"), MT.wL(this.eId)), MT.UOT(this.eId, MT.wL(this.eId));
```

#### 2315. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17080-L17081` → after: `L17189-L17190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17189-L17190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17189-L17190) · [Before (L17080-L17081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17080-L17081)

```diff
-                 hv = Sv.vx(this.eId);
-               ev().length(hv.pC) > .1 && Pv && ((0, pv.f)(this.vW, this.eId), !Sv.R7(this.eId, "collideTerrain")) || (null === (vv = (zv = Gv[this.type]).onHitTerrain) || void 0 === vv || vv.call(zv), Pv && mv())
+                 lT = MT.JV(this.eId);
+               KT().length(lT.Oh) > .1 && cT && ((0, yT.d)(this.cC, this.eId), !MT.o9(this.eId, "collideTerrain")) || (null === (TT = (kT = ST[this.type]).onHitTerrain) || void 0 === TT || TT.call(kT), cT && DT())
```

#### 2316. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17083` → after: `L17192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17192) · [Before (L17083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17083)

```diff
-           }), Sv.IK(this.eId, "collideEntitiesProjectile", {
+           }), MT.dJ(this.eId, "collideEntitiesProjectile", {
```

#### 2317. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17090-L17091` → after: `L17199-L17200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17199-L17200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17199-L17200) · [Before (L17090-L17091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17090-L17091)

```diff
-             const lv = vv.Rm.vx(zv),
-               Tv = ev().copy(lv.pC, hv),
+             const IT = TT.oN.JV(kT),
+               AT = KT().copy(IT.Oh, lT),
```

#### 2318. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17093-L17094` → after: `L17202-L17203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17202-L17203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17202-L17203) · [Before (L17093-L17094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17093-L17094)

```diff
-             ev().normalize(Tv, Tv), ev().scale(Tv, Tv, Wv.speed * dv), lv.gravityMultiplier = (null !== (Sv = Wv.gravityMult) && void 0 !== Sv ? Sv : 1) * Nv, lv.Dl = .02, lv.wW = (null !== (gv = Wv.wW) && void 0 !== gv ? gv : .1) * lv.Dl, lv.fluidDrag = null !== (pv = Wv.fluidDr … [truncated]
-           }(this.vW, this.eId, this.type, this.vW.camera.fL)
+             KT().normalize(AT, AT), KT().scale(AT, AT, CT.speed * fT), IT.gravityMultiplier = (null !== (MT = CT.gravityMult) && void 0 !== MT ? MT : 1) * xT, IT.zI = .02, IT.tC = (null !== (OT = CT.tC) && void 0 !== OT ? OT : .1) * IT.zI, IT.fluidDrag = null !== (yT = CT.fluidDr … [truncated]
+           }(this.cC, this.eId, this.type, this.cC.camera.qL)
```

#### 2319. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17098` → after: `L17207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17207) · [Before (L17098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17098)

```diff
-         if ("torso" === Vv[this.type].spawnOffset) zv = ev().clone(this.vW.Rm.yG(vv)), zv[1] += gv.f.lG / 2;
+         if ("torso" === JT[this.type].spawnOffset) kT = KT().clone(this.cC.oN.kN(TT)), kT[1] += OT.f.Iw / 2;
```

#### 2320. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17105-L17106` → after: `L17214-L17215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17214-L17215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17214-L17215) · [Before (L17105-L17106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17105-L17106)

```diff
-           width: null !== (vv = null !== (zv = null === (Pv = Vv[this.type]) || void 0 === Pv ? void 0 : Pv.collisionWidth) && void 0 !== zv ? zv : null === (hv = Vv[this.type]) || void 0 === hv ? void 0 : hv.collisionHeight) && void 0 !== vv ? vv : .1,
-           height: null !== (Sv = null !== (ev = null === (gv = Vv[this.type]) || void 0 === gv ? void 0 : gv.collisionHeight) && void 0 !== ev ? ev : null === (pv = Vv[this.type]) || void 0 === pv ? void 0 : pv.collisionWidth) && void 0 !== Sv ? Sv : .1
+           width: null !== (TT = null !== (kT = null === (cT = JT[this.type]) || void 0 === cT ? void 0 : cT.collisionWidth) && void 0 !== kT ? kT : null === (lT = JT[this.type]) || void 0 === lT ? void 0 : lT.collisionHeight) && void 0 !== TT ? TT : .1,
+           height: null !== (MT = null !== (KT = null === (OT = JT[this.type]) || void 0 === OT ? void 0 : OT.collisionHeight) && void 0 !== KT ? KT : null === (yT = JT[this.type]) || void 0 === yT ? void 0 : yT.collisionWidth) && void 0 !== MT ? MT : .1
```

#### 2321. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17111` → after: `L17220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17220) · [Before (L17111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17111)

```diff
-   36861: (vv, zv, Pv) => {
+   37219: (TT, kT, cT) => {
```

#### 2322. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17113-L17115` → after: `L17222-L17224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17222-L17224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17222-L17224) · [Before (L17113-L17115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17113-L17115)

```diff
-       c: () => ev,
-       f: () => gv,
-       j: () => Sv,
+       b: () => KT,
+       e: () => OT,
+       h: () => MT,
```

#### 2323. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17118` → after: `L17227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17227) · [Before (L17118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17118)

```diff
-     var hv = Pv(2599);
+     var lT = cT(2790);
```

#### 2324. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17122-L17123` → after: `L17231-L17232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17231-L17232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17231-L17232) · [Before (L17122-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17122-L17123)

```diff
-       const Sv = (0, hv.g)();
-       return null !== (zv = null === (Pv = Sv.wV[Sv.sV][vv]) || void 0 === Pv ? void 0 : Pv.canAttack) && void 0 !== zv && zv || gv(vv)
+       const MT = (0, lT.f)();
+       return null !== (kT = null === (cT = MT.IH[MT.jH][TT]) || void 0 === cT ? void 0 : cT.canAttack) && void 0 !== kT && kT || OT(TT)
```

#### 2325. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17128-L17129` → after: `L17237-L17238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17237-L17238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17237-L17238) · [Before (L17128-L17129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17128-L17129)

```diff
-       const Sv = (0, hv.g)();
-       return null !== (zv = null === (Pv = Sv.wV[Sv.sV][vv]) || void 0 === Pv ? void 0 : Pv.interactionPrompt) && void 0 !== zv ? zv : null
+       const MT = (0, lT.f)();
+       return null !== (kT = null === (cT = MT.IH[MT.jH][TT]) || void 0 === cT ? void 0 : cT.interactionPrompt) && void 0 !== kT ? kT : null
```

#### 2326. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17135-L17136` → after: `L17244-L17245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17244-L17245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17244-L17245) · [Before (L17135-L17136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17135-L17136)

```diff
-       const Sv = (0, hv.g)();
-       return null !== (zv = null === (Pv = Sv.wV[Sv.sV][vv]) || void 0 === Pv ? void 0 : Pv.interactable) && void 0 !== zv && zv
+       const MT = (0, lT.f)();
+       return null !== (kT = null === (cT = MT.IH[MT.jH][TT]) || void 0 === cT ? void 0 : cT.interactable) && void 0 !== kT && kT
```

#### 2327. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17142-L17143` → after: `L17251-L17252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17251-L17252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17251-L17252) · [Before (L17142-L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17142-L17143)

```diff
-           const vv = (0, hv.g)(),
-             zv = vv.wV[vv.sV];
+           const TT = (0, lT.f)(),
+             kT = TT.IH[TT.jH];
```

#### 2328. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17150` → after: `L17259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17259) · [Before (L17150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17150)

```diff
-       const ev = null !== vv && void 0 !== vv ? vv : hv.i.localPlayerPickActionHelper;
+       const KT = null !== TT && void 0 !== TT ? TT : lT.i.localPlayerPickActionHelper;
```

#### 2329. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17152-L17154` → after: `L17261-L17263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17261-L17263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17261-L17263) · [Before (L17152-L17154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17152-L17154)

```diff
-       const pv = (0, hv.g)(),
-         dv = null !== (Pv = ev.getPickEntityResult(null !== (Sv = null !== zv && void 0 !== zv ? zv : pv.Q8) && void 0 !== Sv ? Sv : pv.camera.ZH())) && void 0 !== Pv ? Pv : null;
-       return gv(dv) ? dv : null
+       const yT = (0, lT.f)(),
+         fT = null !== (cT = KT.getPickEntityResult(null !== (MT = null !== kT && void 0 !== kT ? kT : yT.Q8) && void 0 !== MT ? MT : yT.camera.rU())) && void 0 !== cT ? cT : null;
+       return OT(fT) ? fT : null
```

#### 2330. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17157` → after: `L17266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17266) · [Before (L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17157)

```diff
-   36645: (vv, zv, Pv) => {
+   36963: (TT, kT, cT) => {
```

#### 2331. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17159` → after: `L17268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17268) · [Before (L17159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17159)

```diff
-       c: () => lv
+       e: () => IT
```

#### 2332. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17161-L17163` → after: `L17270-L17272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17270-L17272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17270-L17272) · [Before (L17161-L17163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17161-L17163)

```diff
-     var hv = Pv(4019),
-       Sv = Pv(36639),
-       ev = Pv(36647);
+     var lT = cT(4235),
+       MT = cT(36955),
+       KT = cT(36971);
```

#### 2333. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17167` → after: `L17276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17276) · [Before (L17167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17167)

```diff
-         this.vW = vv, this.now = zv, this.animations = new Map, this.warned = new Set
+         this.cC = TT, this.now = kT, this.animations = new Map, this.warned = new Set
```

#### 2334. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17176` → after: `L17285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17285) · [Before (L17176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17176)

```diff
-         "clip" === (null === Tv || void 0 === Tv ? void 0 : Tv.kind) && (null === lv || void 0 === lv || null === (Wv = lv.getRigController()) || void 0 === Wv || Wv.stopClip(Tv.sS));
+         "clip" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (null === IT || void 0 === IT || null === (CT = IT.getRigController()) || void 0 === CT || CT.stopClip(AT.AM));
```

#### 2335. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17178-L17179` → after: `L17287-L17288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17287-L17288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17287-L17288) · [Before (L17178-L17179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17178-L17179)

```diff
-           wS: hv,
-           aS: Math.max(ev, 0),
+           xM: lT,
+           IM: Math.max(KT, 0),
```

#### 2336. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17187` → after: `L17296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17296) · [Before (L17187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17187)

```diff
-         if (null === lv || void 0 === lv || lv.stopAnimation(zv), null === dv || zv !== Sv.f.Custom) return void this.forget(vv, zv);
+         if (null === IT || void 0 === IT || IT.stopAnimation(kT), null === fT || kT !== MT.g.Custom) return void this.forget(TT, kT);
```

#### 2337. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17190-L17191` → after: `L17299-L17300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17299-L17300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17299-L17300) · [Before (L17190-L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17190-L17191)

```diff
-           sS: dv,
-           CS: Math.max(Nv, 0),
+           AM: fT,
+           CM: Math.max(xT, 0),
```

#### 2338. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17195` → after: `L17304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17304) · [Before (L17195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17195)

```diff
-         const sv = null !== (pv = null === lv || void 0 === lv ? void 0 : lv.getRigController()) && void 0 !== pv ? pv : null;
+         const tT = null !== (yT = null === IT || void 0 === IT ? void 0 : IT.getRigController()) && void 0 !== yT ? yT : null;
```

#### 2339. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17206-L17207` → after: `L17315-L17316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17315-L17316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17315-L17316) · [Before (L17206-L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17206-L17207)

```diff
-             aS: pv,
-             wS: dv,
+             IM: yT,
+             xM: fT,
```

#### 2340. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17215` → after: `L17324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17324) · [Before (L17215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17215)

```diff
-         const hv = null === (Pv = this.animations.get(vv)) || void 0 === Pv ? void 0 : Pv.get(Sv.f.Custom);
+         const lT = null === (cT = this.animations.get(TT)) || void 0 === cT ? void 0 : cT.get(MT.g.Custom);
```

#### 2341. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17220` → after: `L17329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17329) · [Before (L17220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17220)

```diff
-         return [...null !== (zv = null === (Pv = this.animations.get(vv)) || void 0 === Pv ? void 0 : Pv.keys()) && void 0 !== zv ? zv : []]
+         return [...null !== (kT = null === (cT = this.animations.get(TT)) || void 0 === cT ? void 0 : cT.keys()) && void 0 !== kT ? kT : []]
```

#### 2342. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17224` → after: `L17333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17333) · [Before (L17224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17224)

```diff
-         for (const [hv, Sv] of null !== (Pv = this.animations.get(vv)) && void 0 !== Pv ? Pv : []) {
+         for (const [lT, MT] of null !== (cT = this.animations.get(TT)) && void 0 !== cT ? cT : []) {
```

#### 2343. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17228` → after: `L17337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17337) · [Before (L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17228)

```diff
-             aS: Sv.aS
+             IM: MT.IM
```

#### 2344. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17230-L17231` → after: `L17339-L17340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17339-L17340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17339-L17340) · [Before (L17230-L17231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17230-L17231)

```diff
-             sS: Sv.sS,
-             aS: Sv.aS
+             AM: MT.AM,
+             IM: MT.IM
```

#### 2345. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17244` → after: `L17353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17353) · [Before (L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17244)

```diff
-             if (null === hv || void 0 === hv || hv.stopAnimation(zv), "clip" === Sv.kind) null === hv || void 0 === hv || null === (vv = hv.getRigController()) || void 0 === vv || vv.stopClip(Sv.sS)
+             if (null === lT || void 0 === lT || lT.stopAnimation(kT), "clip" === MT.kind) null === lT || void 0 === lT || null === (TT = lT.getRigController()) || void 0 === TT || TT.stopClip(MT.AM)
```

#### 2346. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17251` → after: `L17360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17360) · [Before (L17251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17251)

```diff
-         return null !== (zv = this.vW.Rm.getState(vv, "animator")) && void 0 !== zv ? zv : null
+         return null !== (kT = this.cC.oN.getState(TT, "animator")) && void 0 !== kT ? kT : null
```

#### 2347. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17263-L17266` → after: `L17372-L17375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17372-L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17372-L17375) · [Before (L17263-L17266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17263-L17266)

```diff
-           sS: Pv,
-           wS: hv,
-           aS: Sv,
-           CS: ev,
+           AM: cT,
+           xM: lT,
+           IM: MT,
+           CM: KT,
```

#### 2348. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17269` → after: `L17378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17378) · [Before (L17269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17269)

```diff
-         "noClip" === dv ? this.warnOnce(`${Pv}|${Nv}`, `Can't play "${Pv}": ${Nv} has no clip by that name`) : "ambiguous" === dv && this.warnOnce(`${Pv}|${Nv}`, `Can't play "${Pv}" on ${Nv}: several clips are called that, so give its full name`)
+         "noClip" === fT ? this.warnOnce(`${cT}|${xT}`, `Can't play "${cT}": ${xT} has no clip by that name`) : "ambiguous" === fT && this.warnOnce(`${cT}|${xT}`, `Can't play "${cT}" on ${xT}: several clips are called that, so give its full name`)
```

#### 2349. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17280` → after: `L17389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17389) · [Before (L17280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17280)

```diff
-         this.now = zv, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.kh = new Set, this.healthFracs = new M … [truncated]
+         this.now = kT, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.Wl = new Set, this.healthFracs = new M … [truncated]
```

#### 2350. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17283` → after: `L17392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17392) · [Before (L17283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17283)

```diff
-         Tv(this.attachments, vv).set(zv.ke, zv)
+         AT(this.attachments, TT).set(kT.XK, kT)
```

#### 2351. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17290` → after: `L17399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17399) · [Before (L17290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17290)

```diff
-         return [...null !== (zv = null === (Pv = this.attachments.get(vv)) || void 0 === Pv ? void 0 : Pv.values()) && void 0 !== zv ? zv : []]
+         return [...null !== (kT = null === (cT = this.attachments.get(TT)) || void 0 === cT ? void 0 : cT.values()) && void 0 !== kT ? kT : []]
```

#### 2352. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17308` → after: `L17417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17417) · [Before (L17308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17308)

```diff
-         Sv || (Sv = Object.create(null), this.particleSystemUpdates.set(vv, Sv)), (0, hv.m)(Sv[zv] ??= {}, Pv)
+         MT || (MT = Object.create(null), this.particleSystemUpdates.set(TT, MT)), (0, lT.o)(MT[kT] ??= {}, cT)
```

#### 2353. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17330` → after: `L17439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17439) · [Before (L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17330)

```diff
-         return null !== (zv = this.effects.get(vv)) && void 0 !== zv ? zv : pv
+         return null !== (kT = this.effects.get(TT)) && void 0 !== kT ? kT : yT
```

#### 2354. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17338` → after: `L17447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17447) · [Before (L17338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17338)

```diff
-           RS: zv ? Pv : null
+           bM: kT ? cT : null
```

#### 2355. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17345` → after: `L17454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17454) · [Before (L17345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17345)

```diff
-         zv ? this.kh.add(vv) : this.kh.delete(vv)
+         kT ? this.Wl.add(TT) : this.Wl.delete(TT)
```

#### 2356. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17348` → after: `L17457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17457) · [Before (L17348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17348)

```diff
-         return this.kh.has(vv)
+         return this.Wl.has(TT)
```

#### 2357. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17355` → after: `L17464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17464) · [Before (L17355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17355)

```diff
-         return null !== (zv = this.healthFracs.get(vv)) && void 0 !== zv ? zv : null
+         return null !== (kT = this.healthFracs.get(TT)) && void 0 !== kT ? kT : null
```

#### 2358. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17358` → after: `L17467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17467) · [Before (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17358)

```diff
-         this.animations.remove(vv), this.attachments.delete(vv), this.attachmentGenerations.delete(vv), this.particleSystemUpdates.delete(vv), this.effects.delete(vv), this.floating.delete(vv), this.kh.delete(vv), this.healthFracs.delete(vv)
+         this.animations.remove(TT), this.attachments.delete(TT), this.attachmentGenerations.delete(TT), this.particleSystemUpdates.delete(TT), this.effects.delete(TT), this.floating.delete(TT), this.Wl.delete(TT), this.healthFracs.delete(TT)
```

#### 2359. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17361` → after: `L17470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17470) · [Before (L17361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17361)

```diff
-         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.kh.clear(), this.healthFracs.clear()
+         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.Wl.clear(), this.healthFracs.clear()
```

#### 2360. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17374-L17377` → after: `L17483-L17486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17483-L17486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17483-L17486) · [Before (L17374-L17377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17374-L17377)

```diff
-               ke: zv,
-               Xe: Pv,
-               ue: hv,
-               vg: Sv
+               XK: kT,
+               dK: cT,
+               LK: lT,
+               RK: MT
```

#### 2361. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17380-L17382` → after: `L17489-L17491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17489-L17491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17489-L17491) · [Before (L17380-L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17380-L17382)

```diff
-               Xe: Pv,
-               ue: hv,
-               vg: Sv
+               dK: cT,
+               LK: lT,
+               RK: MT
```

#### 2362. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17386` → after: `L17495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17495) · [Before (L17386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17386)

```diff
-           mF: JSON.parse(JSON.stringify(null !== (zv = this.particleSystemUpdates.get(vv)) && void 0 !== zv ? zv : {})),
+           lF: JSON.parse(JSON.stringify(null !== (kT = this.particleSystemUpdates.get(TT)) && void 0 !== kT ? kT : {})),
```

#### 2363. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17388-L17390` → after: `L17497-L17499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17497-L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17497-L17499) · [Before (L17388-L17390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17388-L17390)

```diff
-           floating: null !== (Pv = this.floating.get(vv)) && void 0 !== Pv ? Pv : null,
-           kh: this.kh.has(vv),
-           Uv: this.getHealthFrac(vv)
+           floating: null !== (cT = this.floating.get(TT)) && void 0 !== cT ? cT : null,
+           Wl: this.Wl.has(TT),
+           JT: this.getHealthFrac(TT)
```

#### 2364. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17394` → after: `L17503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17503) · [Before (L17394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17394)

```diff
-         return this.animations.retainedTypes(vv).length > 0 || this.attachments.has(vv) || this.attachmentGenerations.has(vv) || this.particleSystemUpdates.has(vv) || this.effects.has(vv) || this.floating.has(vv) || this.kh.has(vv) || this.healthFracs.has(vv)
+         return this.animations.retainedTypes(TT).length > 0 || this.attachments.has(TT) || this.attachmentGenerations.has(TT) || this.particleSystemUpdates.has(TT) || this.effects.has(TT) || this.floating.has(TT) || this.Wl.has(TT) || this.healthFracs.has(TT)
```

#### 2365. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17414` → after: `L17523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17523) · [Before (L17414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17414)

```diff
-   37637: (vv, zv, Pv) => {
+   37943: (TT, kT, cT) => {
```

#### 2366. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17418-L17420` → after: `L17527-L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17527-L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17527-L17529) · [Before (L17418-L17420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17418-L17420)

```diff
-       i: () => nz,
-       k: () => mz,
-       o: () => Dz,
+       h: () => wk,
+       j: () => Dk,
+       m: () => bk,
```

#### 2367. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17422-L17423` → after: `L17531-L17532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17531-L17532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17531-L17532) · [Before (L17422-L17423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17422-L17423)

```diff
-       r: () => jz,
-       t: () => cz,
+       s: () => ak,
+       v: () => Qk,
```

#### 2368. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17425` → after: `L17534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17534) · [Before (L17425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17425)

```diff
-       A: () => fz
+       y: () => Fk
```

#### 2369. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17427` → after: `L17536-L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17536-L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17536-L17538) · [Before (L17427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17427)

```diff
-     var hv = Pv(36745),
+     var lT = cT(37086),
+       MT = cT(36885),
+       KT = cT(3644),
```

#### 2370. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17429-L17454` → after: `L17540-L17563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17540-L17563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17540-L17563) · [Before (L17429-L17454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17429-L17454)

```diff
-       ev = Pv(3438),
-       gv = Pv(36284),
-       pv = Pv(37641),
-       dv = Pv(37644),
-       Nv = Pv(36574),
-       lv = Pv(36645),
-       Tv = Pv(37273),
-       Wv = Pv(37164),
-       wv = Pv(609),
-       av = Pv(144),
-       sv = Pv(37670),
-       Cv = Pv(2160),
-       iv = Pv(8501),
-       cv = Pv(2176),
-       Gv = Pv(37983),
-       mv = Pv(618),
- ... (10 more removed lines; see GitHub link above)
+       yT = cT(37951),
+       fT = cT(37959),
+       xT = cT(36868),
+       IT = cT(36963),
+       AT = cT(37618),
+       CT = cT(37514),
+       jT = cT(606),
+       vT = cT(184),
+       tT = cT(37990),
+       hT = cT(2260),
+       NT = cT(8855),
+       QT = cT(2272),
+       ST = cT(38295),
+       DT = cT(608),
+       aT = cT(36976),
+       FT = cT(38297),
+ ... (8 more added lines; see GitHub link above)
```

#### 2371. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17456-L17462` → after: `L17565-L17571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17565-L17571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17565-L17571) · [Before (L17456-L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17456-L17462)

```diff
-       xv = Pv(1903);
-     var tv = Pv(26),
-       qv = Pv(2934),
-       Iv = Pv(626),
-       Qv = Pv(2940),
-       Zv = Pv(36738),
-       Av = Pv(2982);
+       eT = cT(1974);
+     var GT = cT(36),
+       VT = cT(3081),
+       ET = cT(617),
+       ZT = cT(3089),
+       uT = cT(37074),
+       XT = cT(3146);
```

#### 2372. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17464-L17486` → after: `L17573-L17595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17573-L17595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17573-L17595) · [Before (L17464-L17486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17464-L17486)

```diff
-     var Hv = Pv(2599),
-       Mv = Pv(36579),
-       yv = Pv(36863),
-       Bv = Pv(37650),
-       Jv = Pv(36720),
-       Ev = Pv(37657),
-       ov = Pv(37662),
-       bv = Pv(36708),
-       rv = Pv(36895),
-       kv = Pv(37536),
-       Xv = Pv(37384),
-       uv = Pv(36659),
-       vz = Pv(36764),
-       zz = Pv(36783),
-       Pz = Pv(36712),
-       hz = Pv(37672),
- ... (7 more removed lines; see GitHub link above)
+     var LT = cT(2790),
+       RT = cT(36875),
+       gT = cT(37227),
+       UT = cT(37967),
+       YT = cT(37056),
+       BT = cT(37969),
+       WT = cT(37982),
+       nT = cT(37050),
+       pT = cT(37250),
+       iT = cT(37868),
+       qT = cT(37709),
+       sT = cT(36985),
+       Tk = cT(37114),
+       kk = cT(37143),
+       ck = cT(37053),
+       lk = cT(37997),
+ ... (7 more added lines; see GitHub link above)
```

#### 2373. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17489` → after: `L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17598) · [Before (L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17489)

```diff
-         this.vW = vv, this.vehicleEId = null, this.previousHeading = 0
+         this.cC = TT, this.vehicleEId = null, this.previousHeading = 0
```

#### 2374. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17497` → after: `L17606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17606) · [Before (L17497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17497)

```diff
-           Rm: Sv,
+           oN: MT,
```

#### 2375. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17499` → after: `L17608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17608) · [Before (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17499)

```diff
-           sV: gv,
+           jH: OT,
```

#### 2376. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17501-L17503` → after: `L17610-L17612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17610-L17612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17610-L17612) · [Before (L17501-L17503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17501-L17503)

```diff
-         } = this.vW, dv = null === (vv = Sv.svv(gv)) || void 0 === vv ? void 0 : vv.ridingVehicleEId, Nv = dv && (null === (zv = Sv.vzv(gv)) || void 0 === zv ? void 0 : zv.Xw) === dv, lv = (null === (Pv = Sv.vzv(ev.HA)) || void 0 === Pv ? void 0 : Pv.Xw) === gv;
-         if (!Nv || !lv || null !== ev.uL || null !== (hv = pv.client) && void 0 !== hv && hv.isReplayMode()) return this.reset(), 0;
-         const Tv = (0, lz.getCaughtUpMeshRotation)(this.vW, dv);
+         } = this.cC, fT = null === (TT = MT.oTT(OT)) || void 0 === TT ? void 0 : TT.ridingVehicleEId, xT = fT && (null === (kT = MT.hkT(OT)) || void 0 === kT ? void 0 : kT.Tv) === fT, IT = (null === (cT = MT.hkT(KT.fL)) || void 0 === cT ? void 0 : cT.Tv) === OT;
+         if (!xT || !IT || null !== KT.jR || null !== (lT = yT.client) && void 0 !== lT && lT.isReplayMode()) return this.reset(), 0;
+         const AT = (0, Ik.getCaughtUpMeshRotation)(this.cC, fT);
```

#### 2377. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17510-L17512` → after: `L17619-L17621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17619-L17621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17619-L17621) · [Before (L17510-L17512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17510-L17512)

```diff
-     var Wz = Pv(36861),
-       wz = Pv(37617),
-       az = Pv(4426);
+     var Ck = cT(37219),
+       jk = cT(37915),
+       vk = cT(4652);
```

#### 2378. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17515-L17516` → after: `L17624-L17625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17624-L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17624-L17625) · [Before (L17515-L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17515-L17516)

```diff
-       wz.i.setPlayerRigCheck((vv => wv.i.includes(vv) && Uz(vv))), (0, zz.m)(), await qv.b.requiredAssetsAreGenerated();
-       const zv = qv.b.getGenerationFailure();
+       jk.g.setPlayerRigCheck((TT => jT.i.includes(TT) && Hk(TT))), (0, kk.l)(), await VT.e.requiredAssetsAreGenerated();
+       const kT = VT.e.getGenerationFailure();
```

#### 2379. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17518` → after: `L17627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17627) · [Before (L17518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17518)

```diff
-       const Pv = vv.Ma.rD();
+       const cT = TT.gv.NJ();
```

#### 2380. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17521-L17523` → after: `L17630-L17632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17630-L17632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17630-L17632) · [Before (L17521-L17523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17521-L17523)

```diff
-           const zv = hv.then((() => (0, az.s)(`lifeform ${vv}`)));
-           return hv = zv, zv.then((() => cz(vv, Pv))).then((vv => (tv.j.zC("matchmakeAndPlayStepCompleted", {
-             step: av.o.SETUP_LIFEFORMS,
+           const kT = lT.then((() => (0, vk.m)(`lifeform ${TT}`)));
+           return lT = kT, kT.then((() => Qk(TT, cT))).then((TT => (GT.k.nt("matchmakeAndPlayStepCompleted", {
+             step: vT.g.SETUP_LIFEFORMS,
```

#### 2381. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17531` → after: `L17640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17640) · [Before (L17531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17531)

```diff
-       return sz = gv, await (0, az.s)("local player"),
+       return tk = OT, await (0, vk.m)("local player"),
```

#### 2382. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17535-L17536` → after: `L17644-L17645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17644-L17645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17644-L17645) · [Before (L17535-L17536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17535-L17536)

```diff
-               Rm: Pv,
-               sV: hv
+               oN: cT,
+               jH: lT
```

#### 2383. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17538-L17541` → after: `L17647-L17650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17647-L17650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17647-L17650) · [Before (L17538-L17541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17538-L17541)

```diff
-           jz(zv, vv, hv), (0, Jv.q)(vv, hv), Pv.IK(hv, Pv.names.movementInputs), Pv.IK(hv, Pv.names.movement), Pv.IK(hv, Pv.names.updateServerOfMovement), Pv.IK(hv, Pv.names.playerCameraAdjustment), Pv.IK(hv, Pv.names.crouchingHandler), Pv.IK(hv, "stepSoundOnWalk"), Pv.IK(hv, "pl … [truncated]
-           const Sv = Pv.vx(hv);
-           Sv.alwaysApplyHorizFriction = !0, Sv.wW = 0;
-           const gv = Pv.vzv(vv.camera.HA),
+           ak(kT, TT, lT), (0, YT.u)(TT, lT), cT.dJ(lT, cT.names.movementInputs), cT.dJ(lT, cT.names.movement), cT.dJ(lT, cT.names.updateServerOfMovement), cT.dJ(lT, cT.names.playerCameraAdjustment), cT.dJ(lT, cT.names.crouchingHandler), cT.dJ(lT, "stepSoundOnWalk"), cT.dJ(lT, "pl … [truncated]
+           const MT = cT.JV(lT);
+           MT.alwaysApplyHorizFriction = !0, MT.tC = 0;
+           const OT = cT.hkT(TT.camera.fL),
```

#### 2384. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17543` → after: `L17652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17652) · [Before (L17543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17543)

```diff
-           vv.camera.gH = () => pv.gH(), gv.pzv = (zv, Sv, ev) => {
+           TT.camera.vR = () => yT.vR(), OT.FkT = (kT, MT, KT) => {
```

#### 2385. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17545-L17547` → after: `L17654-L17656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17654-L17656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17654-L17656) · [Before (L17545-L17547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17545-L17547)

```diff
-             const gv = Pv.svv(hv).ridingVehicleEId;
-             if (gv && !Pv.R7(hv, Pv.names.KF)) {
-               const ev = Pv.svv(hv).meshOffset,
+             const OT = cT.oTT(lT).ridingVehicleEId;
+             if (OT && !cT.o9(lT, cT.names.Xw)) {
+               const KT = cT.oTT(lT).meshOffset,
```

#### 2386. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17554` → after: `L17663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17663) · [Before (L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17554)

```diff
-             (0, Tv.tickMovementInputsPrePhysics)(vv, zv), Pv.R7(hv, Pv.names.KF) || (0, Wv.tickMovementPrePhysics)(vv, zv)
+             (0, AT.tickMovementInputsPrePhysics)(TT, kT), cT.o9(lT, cT.names.Xw) || (0, CT.tickMovementPrePhysics)(TT, kT)
```

#### 2387. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17558` → after: `L17667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17667) · [Before (L17558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17558)

```diff
-           } = (0, Sz.d)(zv);
+           } = (0, Mk.b)(kT);
```

#### 2388. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17560` → after: `L17669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17669) · [Before (L17560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17560)

```diff
-             pv.reset(), Rv().set(Sv.pC, 0, 0, 0), Rv().set(Sv.vR, 0, 0, 0), Rv().set(Sv.gR, 0, 0, 0), vv.bloxd.takeHeldPlayerBodySize(hv), Pv.qgv(hv, Pv.names.movement), Pv.qgv(hv, Pv.names.moveState);
+             yT.reset(), HT().set(MT.Oh, 0, 0, 0), HT().set(MT.KV, 0, 0, 0), HT().set(MT.yV, 0, 0, 0), TT.bloxd.takeHeldPlayerBodySize(lT), cT.YOT(lT, cT.names.movement), cT.YOT(lT, cT.names.moveState);
```

#### 2389. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17564-L17565` → after: `L17673-L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17673-L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17673-L17674) · [Before (L17564-L17565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17564-L17565)

```diff
-                   NK: zv,
-                   Ozv: Sv,
+                   mJ: kT,
+                   RkT: MT,
```

#### 2390. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17572-L17574` → after: `L17681-L17683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17681-L17683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17681-L17683) · [Before (L17572-L17574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17572-L17574)

```diff
-               if (Pv.qgv(hv, vv, {
-                   NK: zv,
-                   Ozv: Sv,
+               if (cT.YOT(lT, TT, {
+                   mJ: kT,
+                   RkT: MT,
```

#### 2391. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17577-L17579` → after: `L17686-L17688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17686-L17688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17686-L17688) · [Before (L17577-L17579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17577-L17579)

```diff
-                 }), Pv.qgv(hv, "animator", {
-                   NK: zv,
-                   Ozv: Sv,
+                 }), cT.YOT(lT, "animator", {
+                   mJ: kT,
+                   RkT: MT,
```

#### 2392. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17581` → after: `L17690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17690) · [Before (L17581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17581)

```diff
-                 }), Pv.R7(hv, "rigAnimation")) {
+                 }), cT.o9(lT, "rigAnimation")) {
```

#### 2393. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17585` → after: `L17694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17694) · [Before (L17585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17585)

```diff
-                 Pv.qgv(hv, "rigAnimation", {
+                 cT.YOT(lT, "rigAnimation", {
```

#### 2394. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17587` → after: `L17696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17696) · [Before (L17587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17587)

```diff
-                   NK: zv
+                   mJ: kT
```

#### 2395. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17591-L17592` → after: `L17700-L17701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17700-L17701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17700-L17701) · [Before (L17591-L17592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17591-L17592)

```diff
-             Pv.qgv(hv, Pv.names.meshAttachments)
-           })), Pv.IK(hv, Pv.names.cameraShake), Pv.IK(hv, "forcedCameraTransition"),
+             cT.YOT(lT, cT.names.meshAttachments)
+           })), cT.dJ(lT, cT.names.cameraShake), cT.dJ(lT, "forcedCameraTransition"),
```

#### 2396. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17594-L17596` → after: `L17703-L17705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17703-L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17703-L17705) · [Before (L17594-L17596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17594-L17596)

```diff
-               const zv = vv.sV;
-               xv.c.subscribe("useInventory", (Pv => {
-                 if (!0 === Pv && !vv.Rm.Gvv(zv)) {
+               const kT = TT.jH;
+               eT.b.subscribe("useInventory", (cT => {
+                 if (!0 === cT && !TT.oN.ETT(kT)) {
```

#### 2397. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17598-L17599` → after: `L17707-L17708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17707-L17708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17707-L17708) · [Before (L17598-L17599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17598-L17599)

```diff
-                     const hv = vv.Rm.ivv(zv);
-                     tv.j.zC("updatedInventory", hv.getItems())
+                     const lT = TT.oN.eTT(kT);
+                     GT.k.nt("updatedInventory", lT.getItems())
```

#### 2398. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17601` → after: `L17710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17710) · [Before (L17601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17601)

```diff
-                   vv.Rm.IK(zv, vv.Rm.names.inventory, {
+                   TT.oN.dJ(kT, TT.oN.names.inventory, {
```

#### 2399. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17604-L17609` → after: `L17713-L17718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17713-L17718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17713-L17718) · [Before (L17604-L17609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17604-L17609)

```diff
-                   }), vv.Rm.cvv(vv.sV).inCreative = vv.Om.creative, tv.j.zC("playerInventoryComponentChanged")
-                 }!1 === Pv && vv.Rm.Gvv(zv) && (vv.Rm.bK(zv, vv.Rm.names.inventory), tv.j.zC("playerInventoryComponentChanged"))
-               })), xv.c.subscribe("creative", (Pv => {
-                 vv.Rm.R7(zv, "inventory") && (vv.Rm.cvv(vv.sV).inCreative = Pv)
-               })), tv.j.subscribe("leaveGame", (() => {
-                 vv.Rm.Gvv(zv) && vv.Rm.bK(zv, vv.Rm.names.inventory)
+                   }), TT.oN.VTT(TT.jH).inCreative = TT.lD.creative, GT.k.nt("playerInventoryComponentChanged")
+                 }!1 === cT && TT.oN.ETT(kT) && (TT.oN.LJ(kT, TT.oN.names.inventory), GT.k.nt("playerInventoryComponentChanged"))
+               })), eT.b.subscribe("creative", (cT => {
+                 TT.oN.o9(kT, "inventory") && (TT.oN.VTT(TT.jH).inCreative = cT)
+               })), GT.k.subscribe("leaveGame", (() => {
+                 TT.oN.ETT(kT) && TT.oN.LJ(kT, TT.oN.names.inventory)
```

#### 2400. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17617` → after: `L17726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17726) · [Before (L17617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17617)

```diff
-               Rm: hv
+               oN: lT
```

#### 2401. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17619` → after: `L17728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17728) · [Before (L17619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17619)

```diff
-           xv.c.subscribe("numClosestPlayersVisible", (Pv => {
+           eT.b.subscribe("numClosestPlayersVisible", (cT => {
```

#### 2402. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17622-L17623` → after: `L17731-L17732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17731-L17732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17731-L17732) · [Before (L17622-L17623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17622-L17623)

```diff
-               const zv = vv.Rm.jK("genericLifeformState");
-               for (const vv of zv) vv.meshEnabledCombinator.removeBoolean("closestVisibleX"), hv.getState(vv.VK, hv.names.Jw).enabledCombinator.removeBoolean("closestVisibleX")
+               const kT = TT.oN.VJ("genericLifeformState");
+               for (const TT of kT) TT.meshEnabledCombinator.removeBoolean("closestVisibleX"), lT.getState(TT.ZJ, lT.names.Wj).enabledCombinator.removeBoolean("closestVisibleX")
```

#### 2403. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17634` → after: `L17743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17743) · [Before (L17634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17634)

```diff
-             const pv = hv.yG(vv.sV);
+             const yT = lT.kN(TT.jH);
```

#### 2404. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17636` → after: `L17745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17745) · [Before (L17636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17636)

```diff
-             const dv = hv.jK("genericLifeformState");
+             const fT = lT.VJ("genericLifeformState");
```

#### 2405. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17638` → after: `L17747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17747) · [Before (L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17638)

```diff
-             Pv.length = dv.length, Pv.sort(((vv, zv) => Rv().Mg(hv.yG(vv.VK), pv) - Rv().Mg(hv.yG(zv.VK), pv)));
+             cT.length = fT.length, cT.sort(((TT, kT) => HT().JO(lT.kN(TT.ZJ), yT) - HT().JO(lT.kN(kT.ZJ), yT)));
```

#### 2406. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17640` → after: `L17749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17749) · [Before (L17640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17640)

```diff
-             for (const Sv of Pv) Sv.VK !== vv.sV && (Nv < zv ? (Sv.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), hv.getState(Sv.VK, hv.names.Jw).enabledCombinator.setBooleanType("closestVisibleX", !0), Nv++) : (Sv.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
+             for (const MT of cT) MT.ZJ !== TT.jH && (xT < kT ? (MT.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), lT.getState(MT.ZJ, lT.names.Wj).enabledCombinator.setBooleanType("closestVisibleX", !0), xT++) : (MT.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
```

#### 2407. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17642-L17644` → after: `L17751-L17753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17751-L17753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17751-L17753) · [Before (L17642-L17644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17642-L17644)

```diff
-           vv.on("MT", (function(zv) {
-             const Pv = hv.yG(vv.sV),
-               pv = Rv().Mg(Pv, Sv);
+           TT.on("UA", (function(kT) {
+             const cT = lT.kN(TT.jH),
+               yT = HT().JO(cT, MT);
```

#### 2408. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17673-L17674` → after: `L17782-L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17782-L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17782-L17783) · [Before (L17673-L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17673-L17674)

```diff
-       const gv = (0, Sz.d)(vv),
-         pv = null !== (Pv = gv.meshMetadata.lifeformTypeForModelOverride) && void 0 !== Pv ? Pv : vv,
+       const OT = (0, Mk.b)(TT),
+         yT = null !== (cT = OT.meshMetadata.lifeformTypeForModelOverride) && void 0 !== cT ? cT : TT,
```

#### 2409. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17678` → after: `L17787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17787) · [Before (L17678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17678)

```diff
-         for (const vv of sv.e) dv.push(Cv.i[vv][(0, iv.b)(vv)].atlasIdx);
+         for (const TT of tT.c) fT.push(hT.e[TT][(0, NT.e)(TT)].atlasIdx);
```

#### 2410. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17682-L17683` → after: `L17791-L17792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17791-L17792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17791-L17792) · [Before (L17682-L17683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17682-L17683)

```diff
-           Pv = (0, Gv.c)(zv, "default");
-         for (dv.push(Pv.atlasIdx1), dv.push(Pv.atlasIdx2), dv.push(Pv.atlasIdx3); Nv * Nv < mv.u[zv].length;) Nv *= 2
+           cT = (0, ST.e)(kT, "default");
+         for (fT.push(cT.atlasIdx1), fT.push(cT.atlasIdx2), fT.push(cT.atlasIdx3); xT * xT < DT.q[kT].length;) xT *= 2
```

#### 2411. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17693` → after: `L17802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17802) · [Before (L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17693)

```diff
-         } = (0, Sz.d)(vv), hv = (0, Vv.h)() || !1, Sv = null !== (zv = Pv.lifeformTypeForModelOverride) && void 0 !== zv ? zv : vv, ev = hv ? qv.b.getModel(`${Sv}_Model`, Qv.e.LIFEFORM) : null, gv = ev && !ev.notFound;
+         } = (0, Mk.b)(TT), lT = (0, JT.g)() || !1, MT = null !== (kT = cT.lifeformTypeForModelOverride) && void 0 !== kT ? kT : TT, KT = lT ? VT.e.getModel(`${MT}_Model`, ZT.e.LIFEFORM) : null, OT = KT && !KT.notFound;
```

#### 2412. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17696-L17699` → after: `L17805-L17808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17805-L17808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17805-L17808) · [Before (L17696-L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17696-L17699)

```diff
-           const vv = gv ? Qv.f.LIFEFORM_ATLAS : Qv.f.PLAYER_ASSET;
-           pv = qv.b.getTexture("Player_Atlas", vv).url
-         } else pv = qv.b.getTexture(`${vv}_Atlas`, Qv.f.LIFEFORM_ATLAS).url;
-         let dv = gv ? ev.url : (0, Jv.l)(Sv, `${Sv}_Model.glb`);
+           const TT = OT ? ZT.h.LIFEFORM_ATLAS : ZT.h.PLAYER_ASSET;
+           yT = VT.e.getTexture("Player_Atlas", TT).url
+         } else yT = VT.e.getTexture(`${TT}_Atlas`, ZT.h.LIFEFORM_ATLAS).url;
+         let fT = OT ? KT.url : (0, YT.q)(MT, `${MT}_Model.glb`);
```

#### 2413. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17701` → after: `L17810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17810) · [Before (L17701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17701)

```diff
-         const Nv = (0, jv.b)(Sv),
+         const xT = (0, aT.e)(MT),
```

#### 2414. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17705` → after: `L17814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17814) · [Before (L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17705)

```diff
-               hv = (0, Jv.l)(vv, `${vv}${Lv}`)
+               lT = (0, YT.q)(TT, `${TT}${dT}`)
```

#### 2415. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17709-L17715` → after: `L17818-L17824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17818-L17824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17818-L17824) · [Before (L17709-L17715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17709-L17715)

```diff
-             const Sv = (0, Av.i)(hv);
-             if (!Sv) return console.error(`Pre-reconstructed GLB for ${vv} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
-             const ev = (0, Av.i)(zv);
-             if (!ev) return console.error(`GLB for ${vv} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
-             const gv = (0, Av.e)(Sv.base64),
-               pv = (0, Zv.n)(Pv, ev.base64);
-             if ((0, Zv.E)(gv) !== pv) return console.error(`Stale pre-reconstructed model for ${vv} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
+             const MT = (0, XT.f)(lT);
+             if (!MT) return console.error(`Pre-reconstructed GLB for ${TT} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
+             const KT = (0, XT.f)(kT);
+             if (!KT) return console.error(`GLB for ${TT} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
+             const OT = (0, XT.d)(MT.base64),
+               yT = (0, uT.i)(cT, KT.base64);
+             if ((0, uT.z)(OT) !== yT) return console.error(`Stale pre-reconstructed model for ${TT} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
```

#### 2416. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17724` → after: `L17833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17833) · [Before (L17724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17724)

```diff
-       await (0, az.s)(`lifeform ${vv} materials`);
+       await (0, vk.m)(`lifeform ${TT} materials`);
```

#### 2417. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17735` → after: `L17844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17844) · [Before (L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17735)

```diff
-       if (!(0, Iv.N)(gv.getArmourMetadata)) {
+       if (!(0, ET.R)(OT.getArmourMetadata)) {
```

#### 2418. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17742` → after: `L17851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17851) · [Before (L17742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17742)

```diff
-           return (0, vz.c)({
+           return (0, Tk.e)({
```

#### 2419. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17744` → after: `L17853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17853) · [Before (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17744)

```diff
-             Is: Pv,
+             et: cT,
```

#### 2420. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17746` → after: `L17855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17855) · [Before (L17746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17746)

```diff
-               transparencyMode: ez.c.MATERIAL_OPAQUE,
+               transparencyMode: Kk.d.MATERIAL_OPAQUE,
```

#### 2421. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17761` → after: `L17870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17870) · [Before (L17761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17761)

```diff
-               (0, dz.q)(vv, kv.b, {
+               (0, fk.t)(TT, iT.b, {
```

#### 2422. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17763` → after: `L17872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17872) · [Before (L17763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17763)

```diff
-               }), (0, rv.d)(vv, (0, Hv.g)().Ma), (0, uv.e)(vv), (0, dz.q)(vv, Xv.e), (0, dz.O)(vv)
+               }), (0, pT.d)(TT, (0, LT.f)().gv), (0, sT.d)(TT), (0, fk.t)(TT, qT.e), (0, fk.Q)(TT)
```

#### 2423. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17767` → after: `L17876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17876) · [Before (L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17767)

```diff
-         }(`${vv}ArmourMaterial`, Pv, zv), Ov = Pv.textureOffsets, Dv = Pv.isArmourVisibleByDefault
+         }(`${TT}ArmourMaterial`, cT, kT), mT = cT.textureOffsets, bT = cT.isArmourVisibleByDefault
```

#### 2424. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17769` → after: `L17878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17878) · [Before (L17769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17769)

```diff
-       const Kv = (0, jv.b)(pv);
+       const zT = (0, aT.e)(yT);
```

#### 2425. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17771` → after: `L17880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17880) · [Before (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17771)

```diff
-         const Sv = await (0, zz.h)(Pv, hv, {}).catch((vv => (console.error(`Failed to parse pre-reconstructed model for ${zv} - falling back to runtime reconstruction.`, vv, ...null !== vv && void 0 !== vv && vv.innerError ? [vv.innerError] : []), null)));
+         const MT = await (0, kk.g)(cT, lT, {}).catch((TT => (console.error(`Failed to parse pre-reconstructed model for ${kT} - falling back to runtime reconstruction.`, TT, ...null !== TT && void 0 !== TT && TT.innerError ? [TT.innerError] : []), null)));
```

#### 2426. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17773-L17775` → after: `L17882-L17884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17882-L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17882-L17884) · [Before (L17773-L17775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17773-L17775)

```diff
-         await (0, az.s)(`lifeform ${vv} model`), Sv.addAllToScene();
-         const ev = (0, hz.j)(Sv, hv);
-         if (!ev) return Sv.dispose(), console.error(`Corrupt pre-reconstructed model for ${zv} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, vk.m)(`lifeform ${TT} model`), MT.addAllToScene();
+         const KT = (0, lk.k)(MT, lT);
+         if (!KT) return MT.dispose(), console.error(`Corrupt pre-reconstructed model for ${kT} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2427. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17779` → after: `L17888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17888) · [Before (L17779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17779)

```diff
-         const Pv = await (0, zz.h)("", zv, {
+         const cT = await (0, kk.g)("", kT, {
```

#### 2428. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17782` → after: `L17891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17891) · [Before (L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17782)

```diff
-         await (0, az.s)(`lifeform ${vv} model`), Uv = Kv ? hz.i.reconstructModel(Pv, Kv.reconstructionSchema, zv, Tv) : {
+         await (0, vk.m)(`lifeform ${TT} model`), oT = zT ? lk.h.reconstructModel(cT, zT.reconstructionSchema, kT, AT) : {
```

#### 2429. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17787-L17788` → after: `L17896-L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17896-L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17896-L17897) · [Before (L17787-L17788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17787-L17788)

```diff
-       await (0, az.s)(`lifeform ${vv} meshes`);
-       const Rv = (0, Hv.g)(),
+       await (0, vk.m)(`lifeform ${TT} meshes`);
+       const HT = (0, LT.f)(),
```

#### 2430. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17790` → after: `L17899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17899) · [Before (L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17790)

```diff
-           Ma: xv
+           gv: eT
```

#### 2431. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17792-L17793` → after: `L17901-L17902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17901-L17902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17901-L17902) · [Before (L17792-L17793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17792-L17793)

```diff
-         tv = xv.hK,
-         Mv = ev || !xv.ya;
+         GT = eT.PJ,
+         RT = KT || !eT.Uv;
```

#### 2432. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17796-L17797` → after: `L17905-L17906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17905-L17906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17905-L17906) · [Before (L17796-L17797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17796-L17797)

```diff
-         const vv = (0, Jv.g)(Sv) ? nv : null !== (yv = null !== wv && void 0 !== wv && wv.includes(Sv.name) ? Yv : null) && void 0 !== yv ? yv : Fv;
-         vv && Mv && (ev ? zv.NPv(Sv, !1) : xv.iK(Sv)), (0, Zv.v)(Sv) || (0, Zv.D)(Sv, 1 / 512), Sv.lK(), Sv.material = vv, Sv.sideOrientation = ez.c.CounterClockWiseSideOrientation, (0, gz.f)(Sv) ? null !== av && void 0 !== av && av.includes(Sv.name) && (Sv.noSunShadowVertices =  … [truncated]
+         const TT = (0, YT.i)(MT) ? wT : null !== (gT = null !== jT && void 0 !== jT && jT.includes(MT.name) ? PT : null) && void 0 !== gT ? gT : rT;
+         TT && RT && (KT ? kT.rcT(MT, !1) : eT.GJ(MT)), (0, uT.r)(MT) || (0, uT.y)(MT, 1 / 512), MT.bJ(), MT.material = TT, MT.sideOrientation = Kk.d.CounterClockWiseSideOrientation, (0, Ok.f)(MT) ? null !== vT && void 0 !== vT && vT.includes(MT.name) && (MT.noSunShadowVertices =  … [truncated]
```

#### 2433. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17800` → after: `L17909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17909) · [Before (L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17800)

```diff
-         ((0, gz.f)(Sv) ? !Sv.material : !Sv.rD().meshes.includes(Sv)) && 0 === Sv.getChildMeshes().length && Sv.uF(!1)
+         ((0, Ok.f)(MT) ? !MT.material : !MT.NJ().meshes.includes(MT)) && 0 === MT.getChildMeshes().length && MT.PD(!1)
```

#### 2434. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17806` → after: `L17915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17915) · [Before (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17806)

```diff
-           "ArmLeftMesh" === sv.name && sv.translate(Sv.fa.LeftReadOnly, vv), "ArmRightMesh" === sv.name && sv.translate(Sv.fa.RightReadOnly, vv), "HeadMesh" === sv.name && sv.translate(Sv.fa.DownReadOnly, vv), "LegLeftMesh" === sv.name && sv.translate(Sv.fa.UpReadOnly, vv), "LegR … [truncated]
+           "ArmLeftMesh" === tT.name && tT.translate(MT.Fv.LeftReadOnly, TT), "ArmRightMesh" === tT.name && tT.translate(MT.Fv.RightReadOnly, TT), "HeadMesh" === tT.name && tT.translate(MT.Fv.DownReadOnly, TT), "LegLeftMesh" === tT.name && tT.translate(MT.Fv.UpReadOnly, TT), "LegR … [truncated]
```

#### 2435. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17813` → after: `L17922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17922) · [Before (L17813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17813)

```diff
-         for (const Sv of ov) Sv.material && xv.iK(Sv);
+         for (const MT of WT) MT.material && eT.GJ(MT);
```

#### 2436. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17815` → after: `L17924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17924) · [Before (L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17815)

```diff
-         const vv = (0, Jv.l)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+         const TT = (0, YT.q)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
```

#### 2437. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17822-L17824` → after: `L17931-L17933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17931-L17933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17931-L17933) · [Before (L17822-L17824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17822-L17824)

```diff
-           } = zv.cV();
-           if (Sv.fa.DistanceSquared(vv.minimum, vv.maximum)) {
-             (0, Zv.v)(zv) || (0, Zv.D)(zv, 1 / 128), zv.name = "Cape", zv.pp = zv.pp.scale(.12), zv.Zs = !1, Bv = zv;
+           } = kT.DH();
+           if (MT.Fv.DistanceSquared(TT.minimum, TT.maximum)) {
+             (0, uT.r)(kT) || (0, uT.y)(kT, 1 / 128), kT.name = "Cape", kT.GA = kT.GA.scale(.12), kT.Vt = !1, UT = kT;
```

#### 2438. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17831` → after: `L17940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17940) · [Before (L17831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17831)

```diff
-           Is: zv,
+           et: kT,
```

#### 2439. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17837` → after: `L17946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17946) · [Before (L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17837)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (hv = gv.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== hv ? hv : {}).map((zv => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (lT = OT.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== lT ? lT : {}).map((kT => {
```

#### 2440. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17840` → after: `L17949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17949) · [Before (L17840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17840)

```diff
-               numTexturesInAtlas: "default" === hv.numTexturesInAtlas ? "Player" === pv ? Nv : mv.u[vv].length : hv.numTexturesInAtlas
+               numTexturesInAtlas: "default" === lT.numTexturesInAtlas ? "Player" === yT ? xT : DT.q[TT].length : lT.numTexturesInAtlas
```

#### 2441. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17844` → after: `L17953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17953) · [Before (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17844)

```diff
-         Nz = ev ? `${vv}Preview` : vv;
+         xk = KT ? `${TT}Preview` : TT;
```

#### 2442. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17846` → after: `L17955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17955) · [Before (L17846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17846)

```diff
-         GT: 32,
+         DA: 32,
```

#### 2443. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17870` → after: `L17979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17979) · [Before (L17870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17870)

```diff
-       }), tv.setPickableForType(Nz, !ev), tv.setCullableForType(Nz, !ev), (0, Pz.n)(Ev), {
+       }), GT.setPickableForType(xk, !KT), GT.setCullableForType(xk, !KT), (0, ck.s)(BT), {
```

#### 2444. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17878-L17880` → after: `L17987-L17989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R17987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L17987-L17989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L17987-L17989) · [Before (L17878-L17880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17878-L17880)

```diff
-       return (0, vz.c)({
-         name: `${vv}SpriteSheet${ev?"":"WithVisibleBackFaces"}`,
-         Is: zv,
+       return (0, Tk.e)({
+         name: `${TT}SpriteSheet${KT?"":"WithVisibleBackFaces"}`,
+         et: kT,
```

#### 2445. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17899` → after: `L18008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18008) · [Before (L17899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17899)

```diff
-           (0, ov.c)(vv, hv, hv, Sv), (0, dz.q)(vv, bv.c), (0, rv.d)(vv, (0, Hv.g)().Ma), (0, uv.e)(vv), (0, dz.O)(vv)
+           (0, WT.b)(TT, lT, lT, MT), (0, fk.t)(TT, nT.b), (0, pT.d)(TT, (0, LT.f)().gv), (0, sT.d)(TT), (0, fk.Q)(TT)
```

#### 2446. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17909-L17911` → after: `L18018-L18020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18018-L18020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18018-L18020) · [Before (L17909-L17911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17909-L17911)

```diff
-       const ev = (0, Hv.g)().Ma.hK,
-         gv = Sv ? `${vv}Preview` : vv;
-       if (!ev.hasType(gv)) throw new Error(`Thin instance manager not set up for ${vv}`);
+       const KT = (0, LT.f)().gv.PJ,
+         OT = MT ? `${TT}Preview` : TT;
+       if (!KT.hasType(OT)) throw new Error(`Thin instance manager not set up for ${TT}`);
```

#### 2447. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17913` → after: `L18022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18022) · [Before (L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17913)

```diff
-       Pv && ev.uF(pv, !0);
+       cT && KT.PD(yT, !0);
```

#### 2448. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17917` → after: `L18026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18026) · [Before (L17917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17917)

```diff
-       return ev.setGroupEnabled(pv, "armour", dv), dv && ev.setGroup(pv, "armour", "aArmourTint", 1, 1, 1, 0), sz[vv].meshApi.updateMeshOverlayColour(pv, new hv.d(0, 0, 0, 0)), sz[vv].meshApi.updateMeshLightLevels(pv, Nz.d), ev.getScale(pv).scaleInPlace(zv), ev.setDirty(pv, 0), p … [truncated]
+       return KT.setGroupEnabled(yT, "armour", fT), fT && KT.setGroup(yT, "armour", "aArmourTint", 1, 1, 1, 0), tk[TT].meshApi.updateMeshOverlayColour(yT, new lT.e(0, 0, 0, 0)), tk[TT].meshApi.updateMeshLightLevels(yT, xk.d), KT.getScale(yT).scaleInPlace(kT), KT.setDirty(yT, 0), y … [truncated]
```

#### 2449. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17923` → after: `L18032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18032) · [Before (L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17923)

```diff
-         Rm: jv
+         oN: aT
```

#### 2450. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17926` → after: `L18035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18035) · [Before (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17926)

```diff
-       } = (0, Sz.d)(vv), Kv = zv.Ma.hK, Vv = mz(vv), Uv = Kv.ePv(Vv, 0);
+       } = (0, Mk.b)(TT), zT = kT.gv.PJ, JT = Dk(TT), oT = zT.ScT(JT, 0);
```

#### 2451. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17928` → after: `L18037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18037) · [Before (L17928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17928)

```diff
-       "humanoidMesh" === Dv.type ? (qv = fv.p, Iv = fv.m) : (qv = fv.i, Iv = fv.e), jv.IK(Pv, jv.names.moveState), jv.IK(Pv, "genericLifeformState"), jv.IK(Pv, "genericLifeform", {
+       "humanoidMesh" === bT.type ? (VT = FT.i, ET = FT.h) : (VT = FT.d, ET = FT.c), aT.dJ(cT, aT.names.moveState), aT.dJ(cT, "genericLifeformState"), aT.dJ(cT, "genericLifeform", {
```

#### 2452. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17930-L17932` → after: `L18039-L18041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18039-L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18039-L18041) · [Before (L17930-L17932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17930-L17932)

```diff
-           NK: Vv,
-           Ozv: Uv
-         }), jv.IK(Pv, "YF"), jv.IK(Pv, "meshRotation", {
+           mJ: JT,
+           RkT: oT
+         }), aT.dJ(cT, "Gw"), aT.dJ(cT, "meshRotation", {
```

#### 2453. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17938` → after: `L18047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18047) · [Before (L17938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17938)

```diff
-           modelYRotationOffset: null !== (Sv = Dv.modelYRotationOffset) && void 0 !== Sv ? Sv : 0
+           modelYRotationOffset: null !== (MT = bT.modelYRotationOffset) && void 0 !== MT ? MT : 0
```

#### 2454. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17941` → after: `L18050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18050) · [Before (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17941)

```diff
-           const Pv = vv.Rm.Qvv(zv),
+           const cT = TT.oN.TkT(kT),
```

#### 2455. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17943` → after: `L18052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18052) · [Before (L17943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17943)

```diff
-             Sv = vv.Om.showPlayersInUnloadedChunks || !1;
+             MT = TT.lD.showPlayersInUnloadedChunks || !1;
```

#### 2456. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17947` → after: `L18056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18056) · [Before (L17947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17947)

```diff
-           vv.Rm.IK(zv, "inLoadedChunk", {
+           TT.oN.dJ(kT, "inLoadedChunk", {
```

#### 2457. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17949` → after: `L18058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18058) · [Before (L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17949)

```diff
-               ev = Sv, gv || (hv.setBooleanType("inLoadedChunk", Sv), zv !== vv.sV && (Pv.isLifeformMeshEnabled = Sv))
+               KT = MT, OT || (lT.setBooleanType("inLoadedChunk", MT), kT !== TT.jH && (cT.isLifeformMeshEnabled = MT))
```

#### 2458. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17952-L17953` → after: `L18061-L18062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18061-L18062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18061-L18062) · [Before (L17952-L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17952-L17953)

```diff
-           const pv = xv.c.subscribe("showPlayersInUnloadedChunks", (Sv => {
-               gv = Sv, gv ? (hv.setBooleanType("inLoadedChunk", !0), Pv.isLifeformMeshEnabled = !0) : (hv.setBooleanType("inLoadedChunk", ev), zv !== vv.sV && (Pv.isLifeformMeshEnabled = ev))
+           const yT = eT.b.subscribe("showPlayersInUnloadedChunks", (MT => {
+               OT = MT, OT ? (lT.setBooleanType("inLoadedChunk", !0), cT.isLifeformMeshEnabled = !0) : (lT.setBooleanType("inLoadedChunk", KT), kT !== TT.jH && (cT.isLifeformMeshEnabled = KT))
```

#### 2459. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17955-L17956` → after: `L18064-L18065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18064-L18065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18064-L18065) · [Before (L17955-L17956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17955-L17956)

```diff
-             dv = tv.j.subscribe(`lifeformDisposed|${zv}`, (() => {
-               pv(), tv.j.unsubscribe(dv)
+             fT = GT.k.subscribe(`lifeformDisposed|${kT}`, (() => {
+               yT(), GT.k.unsubscribe(fT)
```

#### 2460. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17958-L17960` → after: `L18067-L18069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18067-L18069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18067-L18069) · [Before (L17958-L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17958-L17960)

```diff
-         }(zv, Pv), jv.IK(Pv, "updateWalkingState", {
-           NK: Vv,
-           Ozv: Uv,
+         }(kT, cT), aT.dJ(cT, "updateWalkingState", {
+           mJ: JT,
+           RkT: oT,
```

#### 2461. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17962-L17971` → after: `L18071-L18080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18071-L18080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18071-L18080) · [Before (L17962-L17971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17962-L17971)

```diff
-         }), jv.IK(Pv, jv.names[Dv.type], {
-           NK: Vv,
-           Ozv: Uv,
-           heldItemPositionParams: null !== (ev = Dv.heldItemPositionParams) && void 0 !== ev ? ev : {},
-           maxWalkingAngleOverride: null !== (Tv = Dv.walkingLegSwingAngle) && void 0 !== Tv ? Tv : null
-         }), jv.IK(Pv, "animator", {
-           NK: Vv,
-           Ozv: Uv,
-           modelLifeformType: null !== (Wv = Dv.lifeformTypeForModelOverride) && void 0 !== Wv ? Wv : vv
-         }), wz.i.hasAnimation(vv) && jv.IK(Pv, "rigAnimation", {
+         }), aT.dJ(cT, aT.names[bT.type], {
+           mJ: JT,
+           RkT: oT,
+           heldItemPositionParams: null !== (KT = bT.heldItemPositionParams) && void 0 !== KT ? KT : {},
+           maxWalkingAngleOverride: null !== (AT = bT.walkingLegSwingAngle) && void 0 !== AT ? AT : null
+         }), aT.dJ(cT, "animator", {
+           mJ: JT,
+           RkT: oT,
+           modelLifeformType: null !== (CT = bT.lifeformTypeForModelOverride) && void 0 !== CT ? CT : TT
+         }), jk.g.hasAnimation(TT) && aT.dJ(cT, "rigAnimation", {
```

#### 2462. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17973` → after: `L18082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18082) · [Before (L17973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17973)

```diff
-           NK: Vv
+           mJ: JT
```

#### 2463. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17977-L17978` → after: `L18086-L18087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18086-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18086-L18087) · [Before (L17977-L17978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17977-L17978)

```diff
-             Rm: hv
-           } = zv, Sv = (0, Sz.d)(vv), ev = hv.Qvv(Pv), dv = hv.getState(Pv, hv.names.Jw);
+             oN: lT
+           } = kT, MT = (0, Mk.b)(TT), KT = lT.TkT(cT), fT = lT.getState(cT, lT.names.Wj);
```

#### 2464. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17981` → after: `L18090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18090) · [Before (L17981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17981)

```diff
-               ev.meshEnabledCombinator.setBooleanType(vv, zv), hv.getState(Pv, hv.names.Jw).enabledCombinator.setBooleanType(vv, zv)
+               KT.meshEnabledCombinator.setBooleanType(TT, kT), lT.getState(cT, lT.names.Wj).enabledCombinator.setBooleanType(TT, kT)
```

#### 2465. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17986` → after: `L18095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18095) · [Before (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17986)

```diff
-                 zv.Ma.hK.setVisibility(ev.NK, vv)
+                 kT.gv.PJ.setVisibility(KT.mJ, TT)
```

#### 2466. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17988` → after: `L18097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18097) · [Before (L17988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17988)

```diff
-               const pv = (0, Hv.d)().getFollowingEntities(Pv);
+               const yT = (0, LT.c)().getFollowingEntities(cT);
```

#### 2467. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17990` → after: `L18099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18099) · [Before (L17990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17990)

```diff
-                 const Sv = hv.Nvv(Pv);
+                 const MT = lT.PTT(cT);
```

#### 2468. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17993` → after: `L18102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18102) · [Before (L17993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17993)

```diff
-                     NK: Pv
+                     mJ: cT
```

#### 2469. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L17996` → after: `L18105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18105) · [Before (L17996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L17996)

```diff
-                     zv.Ma.hK.uF(Pv, vv)
+                     kT.gv.PJ.PD(cT, TT)
```

#### 2470. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18000` → after: `L18109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18109) · [Before (L18000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18000)

```diff
-               hv.getState(Pv, hv.names.Jw).enabledCombinator.setBooleanType("visible", vv)
+               lT.getState(cT, lT.names.Wj).enabledCombinator.setBooleanType("visible", TT)
```

#### 2471. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18004` → after: `L18113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18113) · [Before (L18004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18004)

```diff
-                 dv = zv.Rm.getState((0, gv.b)(Pv), Sv.meshMetadata.type);
+                 fT = kT.oN.getState((0, OT.b)(cT), MT.meshMetadata.type);
```

#### 2472. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18006` → after: `L18115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18115) · [Before (L18006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18006)

```diff
-               const Nv = (0, Hv.g)().Ma.hK,
+               const xT = (0, LT.f)().gv.PJ,
```

#### 2473. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18008` → after: `L18117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18117) · [Before (L18008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18008)

```diff
-                   NK: lv
+                   mJ: IT
```

#### 2474. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18012` → after: `L18121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18121) · [Before (L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18012)

```diff
-                 Wv = Tv ? wv.m : Nv.getNodeNames(lv);
+                 CT = AT ? jT.k : xT.getNodeNames(IT);
```

#### 2475. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18017` → after: `L18126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18126) · [Before (L18017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18017)

```diff
-                   Pv = null !== (av = ev[vv]) && void 0 !== av ? av : [1, 1, 1];
+                   cT = null !== (vT = KT[TT]) && void 0 !== vT ? vT : [1, 1, 1];
```

#### 2476. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18021` → after: `L18130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18130) · [Before (L18021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18021)

```diff
-             Wv = zv.wV[zv.sV][Pv];
+             CT = kT.IH[kT.jH][cT];
```

#### 2477. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18023` → after: `L18132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18132) · [Before (L18023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18023)

```diff
-           const av = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|_isAlive`, (vv => {
+           const vT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|_isAlive`, (TT => {
```

#### 2478. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18026` → after: `L18135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18135) · [Before (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18026)

```diff
-             sv = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|canSee`, (vv => {
+             tT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|canSee`, (TT => {
```

#### 2479. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18029` → after: `L18138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18138) · [Before (L18029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18029)

```diff
-             Cv = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|_invisibleEffect`, (vv => {
+             hT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|_invisibleEffect`, (TT => {
```

#### 2480. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18032` → after: `L18141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18141) · [Before (L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18032)

```diff
-             iv = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|meshScaling`, (vv => {
+             NT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|meshScaling`, (TT => {
```

#### 2481. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18036` → after: `L18145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18145) · [Before (L18036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18036)

```diff
-           if (Pv === zv.sV) {
+           if (cT === kT.jH) {
```

#### 2482. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18040-L18041` → after: `L18149-L18150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18149-L18150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18149-L18150) · [Before (L18040-L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18040-L18041)

```diff
-             cv = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${zv.sV}|_isAlive`, (Pv => {
-               const hv = zv.Rm.vx(zv.sV);
+             QT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${kT.jH}|_isAlive`, (cT => {
+               const lT = kT.oN.JV(kT.jH);
```

#### 2483. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18045` → after: `L18154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18154) · [Before (L18045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18045)

```diff
-               } else vv.gravityMultiplier = hv.gravityMultiplier, hv.gravityMultiplier = 0, hv.pC[0] = 0, hv.pC[1] = 0, hv.pC[2] = 0, hv.vR[0] = 0, hv.vR[1] = 0, hv.vR[2] = 0, hv.gR[0] = 0, hv.gR[1] = 0, hv.gR[2] = 0
+               } else TT.gravityMultiplier = lT.gravityMultiplier, lT.gravityMultiplier = 0, lT.Oh[0] = 0, lT.Oh[1] = 0, lT.Oh[2] = 0, lT.KV[0] = 0, lT.KV[1] = 0, lT.KV[2] = 0, lT.yV[0] = 0, lT.yV[1] = 0, lT.yV[2] = 0
```

#### 2484. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18048-L18049` → after: `L18157-L18158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18157-L18158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18157-L18158) · [Before (L18048-L18049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18048-L18049)

```diff
-           const Gv = tv.j.subscribe(`lifeformDisposed|${Pv}`, (() => {
-             tv.j.unsubscribe(av), tv.j.unsubscribe(sv), tv.j.unsubscribe(Cv), tv.j.unsubscribe(iv), tv.j.unsubscribe(cv), tv.j.unsubscribe(Gv)
+           const ST = GT.k.subscribe(`lifeformDisposed|${cT}`, (() => {
+             GT.k.unsubscribe(vT), GT.k.unsubscribe(tT), GT.k.unsubscribe(hT), GT.k.unsubscribe(NT), GT.k.unsubscribe(QT), GT.k.unsubscribe(ST)
```

#### 2485. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18051-L18052` → after: `L18160-L18161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18160-L18161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18160-L18161) · [Before (L18051-L18052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18051-L18052)

```diff
-         }(vv, zv, Pv), jv.IK(Pv, jv.names.mesh, {
-           egv: "humanoidMesh" === Dv.type ? vv => {
+         }(TT, kT, cT), aT.dJ(cT, aT.names.mesh, {
+           COT: "humanoidMesh" === bT.type ? TT => {
```

#### 2486. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18054` → after: `L18163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18163) · [Before (L18054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18054)

```diff
-             const Sv = jv.svv(Pv),
+             const MT = aT.oTT(cT),
```

#### 2487. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18058` → after: `L18167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18167) · [Before (L18058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18058)

```diff
-               gv = null !== (hv = Sv.ridingVehicleEId) && void 0 !== hv ? hv : null;
+               OT = null !== (lT = MT.ridingVehicleEId) && void 0 !== lT ? lT : null;
```

#### 2488. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18061-L18062` → after: `L18170-L18171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18170-L18171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18170-L18171) · [Before (L18061-L18062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18061-L18062)

```diff
-               const hv = zv.bloxd.getEntityHeading(null !== gv && void 0 !== gv ? gv : Pv, !0);
-               Rv().ep(vv, ev, Rv().ZERO, hv)
+               const lT = kT.bloxd.getEntityHeading(null !== OT && void 0 !== OT ? OT : cT, !0);
+               HT().Of(TT, KT, HT().ZERO, lT)
```

#### 2489. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18064` → after: `L18173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18173) · [Before (L18064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18064)

```diff
-             null !== gv && (0, Bv.b)(zv, gv, vv)
+             null !== OT && (0, UT.d)(kT, OT, TT)
```

#### 2490. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18066-L18067` → after: `L18175-L18176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18175-L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18175-L18176) · [Before (L18066-L18067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18066-L18067)

```diff
-           NK: Vv,
-           Ozv: Uv,
+           mJ: JT,
+           RkT: oT,
```

#### 2491. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18069-L18073` → after: `L18178-L18182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18178-L18182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18178-L18182) · [Before (L18069-L18073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18069-L18073)

```diff
-           Zs: !1,
-           Uzv: !1
-         }), jv.IK(Pv, jv.names.cape);
-       const Qv = (0, lv.c)(zv).getFloating((0, gv.b)(Pv));
-       jv.IK(Pv, "floating", Qv ? {
+           Vt: !1,
+           YkT: !1
+         }), aT.dJ(cT, aT.names.cape);
+       const ZT = (0, IT.e)(kT).getFloating((0, OT.b)(cT));
+       aT.dJ(cT, "floating", ZT ? {
```

#### 2492. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18075` → after: `L18184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18184) · [Before (L18075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18075)

```diff
-         RS: Qv.RS
+         bM: ZT.bM
```

#### 2493. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18077-L18079` → after: `L18186-L18188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18186-L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18186-L18188) · [Before (L18077-L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18077-L18079)

```diff
-       const Zv = jv.Qvv(Pv).meshEnabledCombinator.getTotalBooleanVal();
-       if (Kv.uF(Vv, Zv), Kv.setEntityId(Vv, Pv), Kv.setPickable(Vv, (0, Wz.j)(Pv)), Uz(vv)) {
-         jv.IK(Pv, jv.names.meshAttachments);
+       const uT = aT.TkT(cT).meshEnabledCombinator.getTotalBooleanVal();
+       if (zT.PD(JT, uT), zT.setEntityId(JT, cT), zT.setPickable(JT, (0, Ck.h)(cT)), Hk(TT)) {
+         aT.dJ(cT, aT.names.meshAttachments);
```

#### 2494. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18082` → after: `L18191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18191) · [Before (L18082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18082)

```diff
-           for (const zv of wv.c) {
+           for (const kT of jT.b) {
```

#### 2495. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18087` → after: `L18196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18196) · [Before (L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18087)

```diff
-       if ((0, Nv.i)(zv, (0, gv.b)(Pv)), "Player" === vv) {
+       if ((0, xT.e)(kT, (0, OT.b)(cT)), "Player" === TT) {
```

#### 2496. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18089` → after: `L18198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18198) · [Before (L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18089)

```diff
-         if (dv.c[Pv]) {
+         if (fT.e[cT]) {
```

#### 2497. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18092` → after: `L18201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18201) · [Before (L18092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18092)

```diff
-           for (const vv of Fv.u) dv.c[Pv][vv] && hv.updatePlayerCosmetic(zv, Vv, vv, dv.c[Pv][vv])
+           for (const TT of rT.u) fT.e[cT][TT] && lT.updatePlayerCosmetic(kT, JT, TT, fT.e[cT][TT])
```

#### 2498. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18094-L18095` → after: `L18203-L18204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18203-L18204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18203-L18204) · [Before (L18094-L18095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18094-L18095)

```diff
-         Pv === zv.sV || null !== (Av = (0, Hv.d)().client) && void 0 !== Av && Av.isReplayMode() || (jv.IK(Pv, "proximityHide"), tv.j.zC(`otherPlayerTeleported|${Pv}`, {
-           pos: zv.Rm.yG(Pv)
+         cT === kT.jH || null !== (XT = (0, LT.c)().client) && void 0 !== XT && XT.isReplayMode() || (aT.dJ(cT, "proximityHide"), GT.k.nt(`otherPlayerTeleported|${cT}`, {
+           pos: kT.oN.kN(cT)
```

#### 2499. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18098-L18099` → after: `L18207-L18208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18207-L18208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18207-L18208) · [Before (L18098-L18099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18098-L18099)

```diff
-       jv.getState(Pv, jv.names.Jw).size = Yv.d, jv.IK(Pv, "proximityFade", {
-         serverOpacity: null !== (av = null === (sv = zv.wV[zv.sV][Pv]) || void 0 === sv ? void 0 : sv.opacity) && void 0 !== av ? av : 1
+       aT.getState(cT, aT.names.Wj).size = PT.b, aT.dJ(cT, "proximityFade", {
+         serverOpacity: null !== (vT = null === (tT = kT.IH[kT.jH][cT]) || void 0 === tT ? void 0 : tT.opacity) && void 0 !== vT ? vT : 1
```

#### 2500. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18102-L18103` → after: `L18211-L18212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18211-L18212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18211-L18212) · [Before (L18102-L18103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18102-L18103)

```diff
-       Pv === zv.sV && (Lv = zv.W8, tv.j.subscribe("initInfoReceived", (() => {
-         Lv = zv.W8
+       cT === kT.jH && (dT = kT.W9, GT.k.subscribe("initInfoReceived", (() => {
+         dT = kT.W9
```

#### 2501. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18105` → after: `L18214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18214) · [Before (L18105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18105)

```diff
-       const Mv = (0, Hv.d)().jH(Pv);
+       const RT = (0, LT.c)().pR(cT);
```

#### 2502. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18107` → after: `L18216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18216) · [Before (L18107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18107)

```diff
-       const yv = tv.j.subscribe("otherEntitySettings|opacity", (vv => {
+       const gT = GT.k.subscribe("otherEntitySettings|opacity", (TT => {
```

#### 2503. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18113` → after: `L18222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18222) · [Before (L18113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18113)

```diff
-           const ev = zv.Rm.yvv(Pv);
+           const KT = kT.oN.OkT(cT);
```

#### 2504. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18116` → after: `L18225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18225) · [Before (L18116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18116)

```diff
-         Jv = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|_invincible`, (vv => {
+         YT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|_invincible`, (TT => {
```

#### 2505. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18121` → after: `L18230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18230) · [Before (L18121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18121)

```diff
-         !vv && jv.R7(Pv, "flashingMeshOverlay") && jv.bK(Pv, "flashingMeshOverlay"), vv && !jv.R7(Pv, "flashingMeshOverlay") && jv.IK(Pv, "flashingMeshOverlay")
+         !TT && aT.o9(cT, "flashingMeshOverlay") && aT.LJ(cT, "flashingMeshOverlay"), TT && !aT.o9(cT, "flashingMeshOverlay") && aT.dJ(cT, "flashingMeshOverlay")
```

#### 2506. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18123-L18124` → after: `L18232-L18233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18232-L18233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18232-L18233) · [Before (L18123-L18124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18123-L18124)

```diff
-       Ev(null === (Cv = zv.wV[zv.sV][Pv]) || void 0 === Cv ? void 0 : Cv._invincible);
-       const ov = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|zIndex`, (vv => {
+       BT(null === (hT = kT.IH[kT.jH][cT]) || void 0 === hT ? void 0 : hT._invincible);
+       const WT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|zIndex`, (TT => {
```

#### 2507. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18127-L18128` → after: `L18236-L18237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18236-L18237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18236-L18237) · [Before (L18127-L18128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18127-L18128)

```diff
-       Kv.setRenderingGroupId(Vv, null !== (iv = null === (cv = zv.wV[zv.sV][Pv]) || void 0 === cv ? void 0 : cv.zIndex) && void 0 !== iv ? iv : 0);
-       const bv = tv.j.subscribe(`otherEntitySettingsClientifiedEId|${Pv}|overlayColour`, (vv => {
+       zT.setRenderingGroupId(JT, null !== (NT = null === (QT = kT.IH[kT.jH][cT]) || void 0 === QT ? void 0 : QT.zIndex) && void 0 !== NT ? NT : 0);
+       const nT = GT.k.subscribe(`otherEntitySettingsClientifiedEId|${cT}|overlayColour`, (TT => {
```

#### 2508. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18135-L18136` → after: `L18244-L18245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18244-L18245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18244-L18245) · [Before (L18135-L18136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18135-L18136)

```diff
-           const zv = (0, nv._)(vv);
-           Sv = new hv.d(zv[0] / 255, zv[1] / 255, zv[2] / 255, .5)
+           const kT = (0, wT.Q)(TT);
+           MT = new lT.e(kT[0] / 255, kT[1] / 255, kT[2] / 255, .5)
```

#### 2509. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18138` → after: `L18247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18247) · [Before (L18138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18138)

```diff
-         zv.Rm.Rvv(Pv).overlayColourOverride = Sv
+         kT.oN.nTT(cT).overlayColourOverride = MT
```

#### 2510. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18140-L18141` → after: `L18249-L18250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18249-L18250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18249-L18250) · [Before (L18140-L18141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18140-L18141)

```diff
-       rv(null !== (Gv = null === (mv = zv.wV[zv.sV][Pv]) || void 0 === mv ? void 0 : mv.overlayColour) && void 0 !== Gv ? Gv : null);
-       const kv = tv.j.subscribe(`entityScale|${Pv}`, (hv => {
+       pT(null !== (ST = null === (DT = kT.IH[kT.jH][cT]) || void 0 === DT ? void 0 : DT.overlayColour) && void 0 !== ST ? ST : null);
+       const iT = GT.k.subscribe(`entityScale|${cT}`, (lT => {
```

#### 2511. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18147-L18148` → after: `L18256-L18257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18256-L18257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18256-L18257) · [Before (L18147-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18147-L18148)

```diff
-         const ev = (0, Sz.d)(Pv),
-           pv = vv.Rm.getState((0, gv.b)(zv), ev.meshMetadata.type);
+         const KT = (0, Mk.b)(cT),
+           yT = TT.oN.getState((0, OT.b)(kT), KT.meshMetadata.type);
```

#### 2512. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18151` → after: `L18260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18260) · [Before (L18151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18151)

```diff
-           NK: dv
+           mJ: fT
```

#### 2513. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18156` → after: `L18265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18265) · [Before (L18156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18156)

```diff
-         } = (0, Yv.f)(hv, Pv), lv = vv.Ma.hK, Tv = (0, gv.b)(zv);
+         } = (0, PT.e)(lT, cT), IT = TT.gv.PJ, AT = (0, OT.b)(kT);
```

#### 2514. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18159` → after: `L18268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18268) · [Before (L18159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18159)

```diff
-           const vv = lv.ePv(dv, 0).scale;
+           const TT = IT.ScT(fT, 0).scale;
```

#### 2515. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18162` → after: `L18271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18271) · [Before (L18162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18162)

```diff
-         const wv = hv * (null !== (Sv = ev.modelScale) && void 0 !== Sv ? Sv : 1);
+         const jT = lT * (null !== (MT = KT.modelScale) && void 0 !== MT ? MT : 1);
```

#### 2516. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18164` → after: `L18273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18273) · [Before (L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18164)

```diff
-         const av = vv.Rm.getState(Tv, vv.Rm.names.Jw);
+         const vT = TT.oN.getState(AT, TT.oN.names.Wj);
```

#### 2517. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18167-L18168` → after: `L18276-L18277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18276-L18277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18276-L18277) · [Before (L18167-L18168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18167-L18168)

```diff
-       const uv = tv.j.subscribe(`lifeformDisposed|${Pv}`, (() => {
-         tv.j.unsubscribe(yv), tv.j.unsubscribe(Jv), tv.j.unsubscribe(ov), tv.j.unsubscribe(bv), tv.j.unsubscribe(kv), tv.j.unsubscribe(uv), Pv !== zv.sV && delete Fz[Pv]
+       const sT = GT.k.subscribe(`lifeformDisposed|${cT}`, (() => {
+         GT.k.unsubscribe(gT), GT.k.unsubscribe(YT), GT.k.unsubscribe(WT), GT.k.unsubscribe(nT), GT.k.unsubscribe(iT), GT.k.unsubscribe(sT), cT !== kT.jH && delete rk[cT]
```

#### 2518. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18170` → after: `L18279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18279) · [Before (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18170)

```diff
-       tv.j.zC(`lifeformSetupFinished|${Pv}`)
+       GT.k.nt(`lifeformSetupFinished|${cT}`)
```

#### 2519. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18176-L18178` → after: `L18285-L18287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18285-L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18285-L18287) · [Before (L18176-L18178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18176-L18178)

```diff
-         cP: Pv,
-         GP: hv,
-         mP: Sv
+         Nc: cT,
+         Qc: lT,
+         Sc: MT
```

#### 2520. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18181-L18182` → after: `L18290-L18291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18290-L18291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18290-L18291) · [Before (L18181-L18182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18181-L18182)

```diff
-       dv.c[Pv] = {
-         ...dv.c[Pv],
+       fT.e[cT] = {
+         ...fT.e[cT],
```

#### 2521. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18184-L18185` → after: `L18293-L18294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18293-L18294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18293-L18294) · [Before (L18184-L18185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18184-L18185)

```diff
-       }, dv.c[ev] = {
-         ...dv.c[ev],
+       }, fT.e[KT] = {
+         ...fT.e[KT],
```

#### 2522. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18188` → after: `L18297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18297) · [Before (L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18188)

```diff
-       const pv = (0, Hv.g)().Rm.Hvv(ev);
+       const yT = (0, LT.f)().oN.MkT(KT);
```

#### 2523. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18190-L18192` → after: `L18299-L18301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18299-L18301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18299-L18301) · [Before (L18190-L18192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18190-L18192)

```diff
-       const Nv = null !== (zv = pv.NK) && void 0 !== zv ? zv : null;
-       null !== Nv && sz ? sz.Player.meshApi.updatePlayerCosmetic(ev, pv.NK, hv, Sv) : console.error(`Error: ${ev} not ready for updateIngamePlayerCustomisation, ${null!==Nv} ${!!sz}`)
-     }(0, ev.onGameReset)(dv.f);
+       const xT = null !== (kT = yT.mJ) && void 0 !== kT ? kT : null;
+       null !== xT && tk ? tk.Player.meshApi.updatePlayerCosmetic(KT, yT.mJ, lT, MT) : console.error(`Error: ${KT} not ready for updateIngamePlayerCustomisation, ${null!==xT} ${!!tk}`)
+     }(0, KT.onGameReset)(fT.g);
```

#### 2524. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18198` → after: `L18307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18307) · [Before (L18198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18198)

```diff
-       return null !== (zv = Fz[(0, gv.b)(vv)]) && void 0 !== zv ? zv : {}
+       return null !== (kT = rk[(0, OT.b)(TT)]) && void 0 !== kT ? kT : {}
```

#### 2525. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18203` → after: `L18312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18312) · [Before (L18203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18203)

```diff
-       return null !== (zv = Yz[(0, gv.b)(vv)]) && void 0 !== zv ? zv : 1
+       return null !== (kT = Pk[(0, OT.b)(TT)]) && void 0 !== kT ? kT : 1
```

#### 2526. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18208` → after: `L18317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18317) · [Before (L18208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18208)

```diff
-       return null !== (zv = null === (Pv = Fz[(0, gv.b)(vv)]) || void 0 === Pv || null === (hv = Pv.Helmet) || void 0 === hv ? void 0 : hv.itemName) && void 0 !== zv ? zv : null
+       return null !== (kT = null === (cT = rk[(0, OT.b)(TT)]) || void 0 === cT || null === (lT = cT.Helmet) || void 0 === lT ? void 0 : lT.itemName) && void 0 !== kT ? kT : null
```

#### 2527. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18214` → after: `L18323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18323) · [Before (L18214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18214)

```diff
-       const ev = (0, Hv.g)(),
+       const KT = (0, LT.f)(),
```

#### 2528. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18223-L18225` → after: `L18332-L18334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18332-L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18332-L18334) · [Before (L18223-L18225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18223-L18225)

```diff
-       const dv = ev.Rm.Hvv(pv);
-       if (null === (null !== (Sv = null === dv || void 0 === dv ? void 0 : dv.NK) && void 0 !== Sv ? Sv : null) || !sz) return;
-       const Nv = (0, Hv.d)().getLifeformType(pv),
+       const fT = KT.oN.MkT(yT);
+       if (null === (null !== (MT = null === fT || void 0 === fT ? void 0 : fT.mJ) && void 0 !== MT ? MT : null) || !tk) return;
+       const xT = (0, LT.c)().getLifeformType(yT),
```

#### 2529. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18227-L18228` → after: `L18336-L18337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18336-L18337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18336-L18337) · [Before (L18227-L18228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18227-L18228)

```diff
-       if (!(lv instanceof Ev.d)) return;
-       const Tv = Pv ? Dv.k[Pv] : void 0;
+       if (!(IT instanceof BT.b)) return;
+       const AT = cT ? bT.p[cT] : void 0;
```

#### 2530. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18232-L18233` → after: `L18341-L18342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18341-L18342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18341-L18342) · [Before (L18232-L18233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18232-L18233)

```diff
-         const vv = Pv ? (0, Dv.h)(Pv) : null,
-           Sv = Pv ? (0, Kv.g)(Pv) : null;
+         const TT = cT ? (0, bT.m)(cT) : null,
+           MT = cT ? (0, zT.f)(cT) : null;
```

#### 2531. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18239` → after: `L18348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18348) · [Before (L18239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18239)

```diff
-       return "Player" === vv || "Player" === (0, Sz.d)(vv).meshMetadata.lifeformTypeForModelOverride
+       return "Player" === TT || "Player" === (0, Mk.b)(TT).meshMetadata.lifeformTypeForModelOverride
```

#### 2532. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18242-L18244` → after: `L18351-L18353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18351-L18353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18351-L18353) · [Before (L18242-L18244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18242-L18244)

```diff
-         sV: vv
-       } = (0, Hv.g)();
-       for (const zv of wv.c) Vz(vv, zv, null, null);
+         jH: TT
+       } = (0, LT.f)();
+       for (const kT of jT.b) Jk(TT, kT, null, null);
```

#### 2533. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18248` → after: `L18357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18357) · [Before (L18248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18248)

```diff
-   37659: (vv, zv, Pv) => {
+   37976: (TT, kT, cT) => {
```

#### 2534. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18250` → after: `L18359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18359) · [Before (L18250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18250)

```diff
-       d: () => Nv
+       c: () => xT
```

#### 2535. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18252-L18256` → after: `L18361-L18365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18361-L18365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18361-L18365) · [Before (L18252-L18256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18252-L18256)

```diff
-     var hv = Pv(36745),
-       Sv = Pv(2599),
-       ev = Pv(36884),
-       gv = Pv(36591),
-       pv = Pv(37662);
+     var lT = cT(37086),
+       MT = cT(2790),
+       KT = cT(37239),
+       OT = cT(36885),
+       yT = cT(37982);
```

#### 2536. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18270` → after: `L18379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18379) · [Before (L18270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18270)

```diff
-           if (void 0 !== Pv[dv.name]) dv.hV("aAtlasIdx1", 1), dv.hV("aArmourTint", 4), dv.hV("aEnchantmentColour", 3), dv.hV("aEnchantmentSpeed", 1), dv.lV.aAtlasIdx1 = 0, dv.lV.aArmourTint = new hv.d(1, 1, 1, 0), dv.lV.aEnchantmentColour = new hv.Color3(0, 0, 0), dv.lV.aEnchantm … [truncated]
+           if (void 0 !== cT[fT.name]) fT.lH("aAtlasIdx1", 1), fT.lH("aArmourTint", 4), fT.lH("aEnchantmentColour", 3), fT.lH("aEnchantmentSpeed", 1), fT.xH.aAtlasIdx1 = 0, fT.xH.aArmourTint = new lT.e(1, 1, 1, 0), fT.xH.aEnchantmentColour = new lT.Color3(0, 0, 0), fT.xH.aEnchantm … [truncated]
```

#### 2537. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18272-L18274` → after: `L18381-L18383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18381-L18383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18381-L18383) · [Before (L18272-L18274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18272-L18274)

```diff
-             const vv = (0, pv.m)(Sv.length);
-             for (let zv = 1; zv <= vv; zv++) dv.hV((0, pv.g)(zv), 4);
-             for (let zv = 1; zv <= vv; zv++) dv.lV[(0, pv.g)(zv)] = gv.Vector4.FromArray(Sv, 4 * (zv - 1))
+             const TT = (0, yT.h)(MT.length);
+             for (let kT = 1; kT <= TT; kT++) fT.lH((0, yT.d)(kT), 4);
+             for (let kT = 1; kT <= TT; kT++) fT.xH[(0, yT.d)(kT)] = OT.Vector4.FromArray(MT, 4 * (kT - 1))
```

#### 2538. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18276` → after: `L18385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18385) · [Before (L18276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18276)

```diff
-           dv.hV("aOpacity", 1), dv.lV.aOpacity = 1, dv.hV("aLightLevels", 4), dv.lV.aLightLevels = (0, ev.p)()
+           fT.lH("aOpacity", 1), fT.xH.aOpacity = 1, fT.lH("aLightLevels", 4), fT.xH.aLightLevels = (0, KT.m)()
```

#### 2539. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18280` → after: `L18389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18389) · [Before (L18280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18280)

```diff
-         const Pv = (0, Sv.g)().Ma.hK;
+         const cT = (0, MT.f)().gv.PJ;
```

#### 2540. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18285` → after: `L18394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18394) · [Before (L18285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18285)

```diff
-         (0, Sv.g)().Ma.hK.setGroupEnabled(vv, zv, Pv)
+         (0, MT.f)().gv.PJ.setGroupEnabled(TT, kT, cT)
```

#### 2541. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18288-L18289` → after: `L18397-L18398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18397-L18398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18397-L18398) · [Before (L18288-L18289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18288-L18289)

```diff
-         const Pv = (0, Sv.g)().Ma.hK;
-         Pv.set(vv, "aOpacity", zv), Pv.GV(vv, "aOpacity", zv)
+         const cT = (0, MT.f)().gv.PJ;
+         cT.set(TT, "aOpacity", kT), cT.mH(TT, "aOpacity", kT)
```

#### 2542. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18292-L18293` → after: `L18401-L18402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18401-L18402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18401-L18402) · [Before (L18292-L18293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18292-L18293)

```diff
-         const Pv = (0, Sv.g)().Ma.hK;
-         Pv.set(vv, "aLightLevels", zv), Pv.GV(vv, "aLightLevels", zv)
+         const cT = (0, MT.f)().gv.PJ;
+         cT.set(TT, "aLightLevels", kT), cT.mH(TT, "aLightLevels", kT)
```

#### 2543. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18296` → after: `L18405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18405) · [Before (L18296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18296)

```diff
-         const Pv = (0, Sv.g)().Ma.hK;
+         const cT = (0, MT.f)().gv.PJ;
```

#### 2544. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18302-L18303` → after: `L18411-L18412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18411-L18412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18411-L18412) · [Before (L18302-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18302-L18303)

```diff
-           } = (0, pv.j)(Number(hv));
-           this.playerAtlasVec4s[vv][Sv - 1][ev] = zv[hv], Pv.setGroup(vv, "notArmour", `aAtlasIdx${Sv}`, this.playerAtlasVec4s[vv][Sv - 1])
+           } = (0, yT.g)(Number(lT));
+           this.playerAtlasVec4s[TT][MT - 1][KT] = kT[lT], cT.setGroup(TT, "notArmour", `aAtlasIdx${MT}`, this.playerAtlasVec4s[TT][MT - 1])
```

#### 2545. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18308` → after: `L18417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18417) · [Before (L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18308)

```diff
-   37657: (vv, zv, Pv) => {
+   37969: (TT, kT, cT) => {
```

#### 2546. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18310` → after: `L18419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18419) · [Before (L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18310)

```diff
-       d: () => iv
+       b: () => NT
```

#### 2547. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18312` → after: `L18421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18421) · [Before (L18312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18312)

```diff
-     var hv = Pv(327),
+     var lT = cT(350),
```

#### 2548. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18314-L18324` → after: `L18423-L18433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18423-L18433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18423-L18433) · [Before (L18314-L18324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18314-L18324)

```diff
-       ev = Pv(2970),
-       gv = Pv(37397),
-       pv = Pv(2160),
-       dv = Pv(37659),
-       Nv = Pv(2599),
-       lv = Pv(312),
-       Tv = Pv(37670),
-       Wv = Pv(8501),
-       wv = Pv(36579),
-       av = Pv(36863),
-       sv = Pv(37395);
+       KT = cT(3121),
+       OT = cT(37725),
+       yT = cT(2260),
+       fT = cT(37976),
+       xT = cT(2790),
+       IT = cT(339),
+       AT = cT(37990),
+       CT = cT(8855),
+       jT = cT(36875),
+       vT = cT(37227),
+       tT = cT(37717);
```

#### 2549. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18326` → after: `L18435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18435) · [Before (L18326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18326)

```diff
-     class iv extends dv.d {
+     class NT extends fT.c {
```

#### 2550. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18333-L18336` → after: `L18442-L18445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18442-L18445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18442-L18445) · [Before (L18333-L18336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18333-L18336)

```diff
-         hv ??= (0, Wv.b)(Pv);
-         const ev = (0, pv.o)(Pv, hv);
-         if (!ev) return void console.error(`Error: ${hv} not a valid cosmetic of type ${Pv}`);
-         const gv = (0, Nv.g)();
+         lT ??= (0, CT.e)(cT);
+         const KT = (0, yT.j)(cT, lT);
+         if (!KT) return void console.error(`Error: ${lT} not a valid cosmetic of type ${cT}`);
+         const OT = (0, xT.f)();
```

#### 2551. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18338` → after: `L18447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18447) · [Before (L18338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18338)

```diff
-         const lv = Tv.e.indexOf(Pv);
+         const IT = AT.c.indexOf(cT);
```

#### 2552. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18341` → after: `L18450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18450) · [Before (L18341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18341)

```diff
-           const vv = null !== (sv = ev.atlasIdx) && void 0 !== sv ? sv : (0, pv.o)(Pv, `${Pv}_none`).atlasIdx;
+           const TT = null !== (tT = KT.atlasIdx) && void 0 !== tT ? tT : (0, yT.j)(cT, `${cT}_none`).atlasIdx;
```

#### 2553. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18348` → after: `L18457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18457) · [Before (L18348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18348)

```diff
-             Rm: zv
+             oN: kT
```

#### 2554. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18361-L18363` → after: `L18470-L18472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18470-L18472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18470-L18472) · [Before (L18361-L18363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18361-L18363)

```diff
-         const dv = (0, Nv.g)(),
-           Tv = dv.Rm.Hvv(vv);
-         if (!Tv) return void console.error(`Error: ${vv} not ready for updatePlayerArmour, ${Tv}`);
+         const fT = (0, xT.f)(),
+           AT = fT.oN.MkT(TT);
+         if (!AT) return void console.error(`Error: ${TT} not ready for updatePlayerArmour, ${AT}`);
```

#### 2555. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18365` → after: `L18474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18474) · [Before (L18365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18365)

```diff
-           wv = dv.Ma.hK,
+           jT = fT.gv.PJ,
```

#### 2556. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18367` → after: `L18476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18476) · [Before (L18367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18367)

```diff
-             NK: av
+             mJ: vT
```

#### 2557. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18373-L18374` → after: `L18482-L18483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18482-L18483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18482-L18483) · [Before (L18373-L18374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18373-L18374)

```diff
-             wv.setNode(av, vv, "aAtlasIdx1", ev.e[Pv]);
-             const zv = (0, sv.e)(Sv);
+             jT.setNode(vT, TT, "aAtlasIdx1", KT.f[cT]);
+             const kT = (0, tT.b)(MT);
```

#### 2558. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18376` → after: `L18485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18485) · [Before (L18376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18376)

```diff
-             const pv = null !== (Cv = gv.r[Sv]) && void 0 !== Cv ? Cv : gv.r.None;
+             const yT = null !== (hT = OT.p[MT]) && void 0 !== hT ? hT : OT.p.None;
```

#### 2559. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18378` → after: `L18487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18487) · [Before (L18378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18378)

```diff
-             const dv = null !== (iv = lv.mb[Sv]) && void 0 !== iv ? iv : lv.mb.None;
+             const fT = null !== (NT = IT.eb[MT]) && void 0 !== NT ? NT : IT.eb.None;
```

#### 2560. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18385` → after: `L18494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18494) · [Before (L18385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18385)

```diff
-         const Pv = (0, Nv.g)(),
+         const cT = (0, xT.f)(),
```

#### 2561. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18387` → after: `L18496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18496) · [Before (L18387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18387)

```diff
-             Rm: hv
+             oN: lT
```

#### 2562. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18389-L18391` → after: `L18498-L18500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18498-L18500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18498-L18500) · [Before (L18389-L18391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18389-L18391)

```diff
-           ev = vv === Pv.sV ? hv.rA(vv).iH : hv.yG(vv),
-           gv = vv === Pv.sV ? Sv().ZERO : Pv.iW,
-           pv = Pv.Ma.hK;
+           KT = TT === cT.jH ? lT.wL(TT).uR : lT.kN(TT),
+           OT = TT === cT.jH ? MT().ZERO : cT.QC,
+           yT = cT.gv.PJ;
```

#### 2563. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18396` → after: `L18505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18505) · [Before (L18396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18396)

```diff
-           ev = vv.ePv(zv, 0);
+           KT = TT.ScT(kT, 0);
```

#### 2564. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18424` → after: `L18533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18533) · [Before (L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18424)

```diff
-   37678: (vv, zv, Pv) => {
+   38e3: (TT, kT, cT) => {
```

#### 2565. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18426` → after: `L18535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18535) · [Before (L18426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18426)

```diff
-       d: () => gz
+       b: () => Ok
```

#### 2566. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18428-L18435` → after: `L18537-L18544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18537-L18544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18537-L18544) · [Before (L18428-L18435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18428-L18435)

```diff
-     var hv = Pv(37986),
-       Sv = Pv(37989),
-       ev = Pv(36284),
-       gv = Pv(37637),
-       pv = Pv(37687),
-       dv = Pv(26),
-       Nv = Pv(36720),
-       lv = Pv(36861);
+     var lT = cT(38297),
+       MT = cT(38304),
+       KT = cT(36591),
+       OT = cT(37943),
+       yT = cT(38006),
+       fT = cT(36),
+       xT = cT(37056),
+       IT = cT(37219);
```

#### 2567. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18438` → after: `L18547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18547) · [Before (L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18438)

```diff
-         this.bloxd = vv, this.eId = zv, this.lifeformType = void 0, this.vW = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = Pv, this.vW = vv.vW
+         this.bloxd = TT, this.eId = kT, this.lifeformType = void 0, this.cC = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = cT, this.cC = TT.cC
```

#### 2568. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18442` → after: `L18551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18551) · [Before (L18442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18442)

```diff
-         !this.bloxd.getEntityName(this.eId) && zv.defaultName && this.bloxd.setEntityName(this.eId, zv.defaultName), this.vW.Rm.add([vv.x, vv.y, vv.z], zv.physicsBodyDimensions.width, zv.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.vW.Rm.IK(this.eId, this.vW. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && kT.defaultName && this.bloxd.setEntityName(this.eId, kT.defaultName), this.cC.oN.add([TT.x, TT.y, TT.z], kT.physicsBodyDimensions.width, kT.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.cC.oN.dJ(this.eId, this.cC. … [truncated]
```

#### 2569. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18445-L18448` → after: `L18554-L18557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18554-L18557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18554-L18557) · [Before (L18445-L18448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18445-L18448)

```diff
-           const Pv = this.vW.Ma.hK,
-             hv = null !== (vv = null === (zv = this.vW.Rm.Nvv(this.eId)) || void 0 === zv ? void 0 : zv.NK) && void 0 !== vv ? vv : null,
-             Sv = (0, lv.j)(this.eId);
-           null === hv && console.error(`Error: ${this.eId} not ready for pickability change to ${Sv}`), Pv.setPickable(hv, Sv)
+           const cT = this.cC.gv.PJ,
+             lT = null !== (TT = null === (kT = this.cC.oN.PTT(this.eId)) || void 0 === kT ? void 0 : kT.mJ) && void 0 !== TT ? TT : null,
+             MT = (0, IT.h)(this.eId);
+           null === lT && console.error(`Error: ${this.eId} not ready for pickability change to ${MT}`), cT.setPickable(lT, MT)
```

#### 2570. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18450` → after: `L18559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18559) · [Before (L18450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18450)

```diff
-         this.canAttackSub = dv.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Pv), this.interactableSub = dv.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, Pv), this.multilineTextBoxSub = (0, Nv.q)(this.vW, this.eId), (0, gv.r)(this.lifeformType, this.vW, t … [truncated]
+         this.canAttackSub = fT.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, cT), this.interactableSub = fT.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, cT), this.multilineTextBoxSub = (0, xT.u)(this.cC, this.eId), (0, OT.s)(this.lifeformType, this.cC, t … [truncated]
```

#### 2571. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18453` → after: `L18562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18562) · [Before (L18453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18453)

```diff
-         const Pv = this.vW.Rm.svv(this.eId);
+         const cT = this.cC.oN.oTT(this.eId);
```

#### 2572. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18457-L18458` → after: `L18566-L18567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18566-L18567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18566-L18567) · [Before (L18457-L18458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18457-L18458)

```diff
-             if ("yRotation" === vv ? Pv.heading = zv : void 0 !== Pv[vv] && (Pv[vv] = zv), "armSwinging" === vv && zv) {
-               const vv = this.vW.Rm.Hvv(this.eId);
+             if ("yRotation" === TT ? cT.heading = kT : void 0 !== cT[TT] && (cT[TT] = kT), "armSwinging" === TT && kT) {
+               const TT = this.cC.oN.MkT(this.eId);
```

#### 2573. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18460` → after: `L18569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18569) · [Before (L18460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18460)

```diff
-             } else if ("xRotation" === vv || "yRotation" === vv || "zRotation" === vv)(0, Nv.t)(this.vW, this.eId, vv, zv);
+             } else if ("xRotation" === TT || "yRotation" === TT || "zRotation" === TT)(0, xT.x)(this.cC, this.eId, TT, kT);
```

#### 2574. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18463-L18464` → after: `L18572-L18573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18572-L18573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18572-L18573) · [Before (L18463-L18464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18463-L18464)

```diff
-               const vv = this.vW.Rm.Zvv(this.eId);
-               vv.networkedHeldItemName = zv, (0, pv.updateHeldItemState)(this.vW, vv)
+               const TT = this.cC.oN.kkT(this.eId);
+               TT.networkedHeldItemName = kT, (0, yT.updateHeldItemState)(this.cC, TT)
```

#### 2575. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18466-L18467` → after: `L18575-L18576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18575-L18576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18575-L18576) · [Before (L18466-L18467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18466-L18467)

```diff
-               const vv = this.vW.Rm.Zvv(this.eId);
-               vv.networkedHeldItemEnchantmentTier = zv, (0, pv.updateHeldItemState)(this.vW, vv)
+               const TT = this.cC.oN.kkT(this.eId);
+               TT.networkedHeldItemEnchantmentTier = kT, (0, yT.updateHeldItemState)(this.cC, TT)
```

#### 2576. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18473` → after: `L18582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18582) · [Before (L18473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18473)

```diff
-         this.vW.Rm.deleteEntity(this.eId), dv.j.zC(`lifeformDisposed|${(0,ev.b)(this.eId)}`), "Player" === this.lifeformType && dv.j.zC("playerNamesUpdated"), dv.j.unsubscribe(this.canAttackSub), dv.j.unsubscribe(this.interactableSub), dv.j.unsubscribe(this.multilineTextBoxSub)
+         this.cC.oN.deleteEntity(this.eId), fT.k.nt(`lifeformDisposed|${(0,KT.b)(this.eId)}`), "Player" === this.lifeformType && fT.k.nt("playerNamesUpdated"), fT.k.unsubscribe(this.canAttackSub), fT.k.unsubscribe(this.interactableSub), fT.k.unsubscribe(this.multilineTextBoxSub)
```

#### 2577. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18477-L18478` → after: `L18586-L18587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18586-L18587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18586-L18587) · [Before (L18477-L18478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18477-L18478)

```diff
-         const zv = this.vW.Rm;
-         if (zv.Lvv(this.eId)) dv.j.zC(`entityNameChanged|${this.eId}`);
+         const kT = this.cC.oN;
+         if (kT.lkT(this.eId)) fT.k.nt(`entityNameChanged|${this.eId}`);
```

#### 2578. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18481` → after: `L18590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18590) · [Before (L18481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18481)

```diff
-           zv.IK(this.eId, zv.names.entityName, {
+           kT.dJ(this.eId, kT.names.entityName, {
```

#### 2579. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18485` → after: `L18594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18594) · [Before (L18485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18485)

```diff
-         "Player" === this.lifeformType && dv.j.zC("playerNamesUpdated")
+         "Player" === this.lifeformType && fT.k.nt("playerNamesUpdated")
```

#### 2580. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18488-L18494` → after: `L18597-L18603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18597-L18603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18597-L18603) · [Before (L18488-L18494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18488-L18494)

```diff
-     var Wv, wv, av = Pv(37657),
-       sv = Pv(618),
-       Cv = Pv(36816),
-       iv = Pv(2599),
-       cv = Pv(3438),
-       Gv = Pv(3539),
-       mv = Pv(37609);
+     var CT, jT, vT = cT(37969),
+       tT = cT(608),
+       hT = cT(37176),
+       NT = cT(2790),
+       QT = cT(3644),
+       ST = cT(3732),
+       DT = cT(37909);
```

#### 2581. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18503-L18504` → after: `L18612-L18613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18612-L18613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18612-L18613) · [Before (L18503-L18504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18503-L18504)

```diff
-           (0, mv.setRigAiState)(this.vW, this.eId, null !== (Pv = sv.o[zv]) && void 0 !== Pv ? Pv : null)
-         } else "armSwinging" === vv && zv && !this.vW.Rm.Hvv(this.eId) && (0, mv.playRigAction)(this.vW, this.eId, Cv.r)
+           (0, DT.setRigAiState)(this.cC, this.eId, null !== (cT = tT.n[kT]) && void 0 !== cT ? cT : null)
+         } else "armSwinging" === TT && kT && !this.cC.oN.MkT(this.eId) && (0, DT.playRigAction)(this.cC, this.eId, hT.m)
```

#### 2582. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18508` → after: `L18617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18617) · [Before (L18508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18508)

```diff
-         return this.vW.Rm.getState(this.eId, vv.meshMetadata.type).NK
+         return this.cC.oN.getState(this.eId, TT.meshMetadata.type).mJ
```

#### 2583. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18514` → after: `L18623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18623) · [Before (L18514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18514)

```diff
-     const fv = [0, 1, 8, 255, 49, 2, "d", 86, "length", 184, "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 247, "c", 138, "f", null, 87, 157, 10, 85, "h", 120, "g", 91, 5, 8191, 88, 13, 14, !0, void 0, 145, 3, 52, 129, 148, 83, 71, 230, 4, 127, 128, 33554432, 67108864, 177, … [truncated]
+     const FT = [1, 228, 0, "h", 3, 9, "g", 5, 182, 4, 8, 255, "length", 246, 2, "d", 40, "undefined", void 0, 184, 63, 6, "fromCodePoint", 7, 12, "push", 35, "b", 205, 154, 91, 219, 8191, 88, 13, 14, 10, "e", "c", 172, "a", 192, 36, 19, 64, "f", 33, 237, 46, !0, 98, 110, 90, 141, … [truncated]
```

#### 2584. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18516-L18532` → after: `L18625-L18626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18625-L18626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18625-L18626) · [Before (L18516-L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18516-L18532)

```diff
-     function Fv(vv) {
-       return typeof Wv[vv] === fv[10] ? Wv[vv] = function(vv) {
-         var zv, Pv, hv, Sv, ev, gv, pv;
-         for (Ov(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = fv[0], ev = fv[0], gv = -fv[1]), pv = fv[0]; pv < Pv; pv++) {
-           var dv = 'z|/1568$LW9&>]l=qA"MXg#Qu.RpG2BFNCr;`)}ci:tv@Iwf^d!aP?0%eD*xH,kyOYm[h4_<{j3SZK+~E7nV(bsUJTo'.indexOf(zv[pv]);
-           if (dv !== -fv[1])
-             if (gv < fv[0]) gv = dv;
-             else {
-               Ov(gv += dv * fv[29], Sv |= gv << ev, ev += (gv & fv[31]) > fv[32] ? fv[33] : fv[34]);
-               do {
-                 Ov(hv.push(Sv & fv[3]), Sv >>= fv[2], ev -= fv[2])
-               } while (ev > fv[14]);
-               gv = -fv[1]
-             }
-         }
-         return gv > -fv[1] && hv.push((Sv | gv << ev) & fv[3]), Yv(hv)
- ... (1 more removed lines; see GitHub link above)
+     function rT(...TT) {
+       return TT[FT[12]] = FT[0], typeof oT !== FT[17] && oT ? (new oT).decode(new HT(TT[FT[2]])) : typeof eT !== FT[17] && eT ? eT.from(TT[FT[2]]).toString("utf-8") : ET(TT[FT[2]])
```

#### 2585. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18535-L18536` → after: `L18629-L18643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18629-L18643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18629-L18643) · [Before (L18535-L18536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18535-L18536)

```diff
-     function Yv(vv) {
-       return typeof Uv !== fv[10] && Uv ? (new Uv).decode(new Rv(vv)) : typeof xv !== fv[10] && xv ? xv.from(vv).toString("utf-8") : Iv(vv)
+     function PT(...TT) {
+       if (TT[FT[12]] = FT[4], TT[FT[2]] === function(TT) {
+           return typeof CT[TT] === FT[17] ? CT[TT] = function(...TT) {
+             for (mT(TT[FT[12]] = FT[0], TT[FT[0]] = ':$406[)%^z=?`YNAqVu78nfMHSykj5{e_xX}sT"9,W2d1>@U]~3BZpm*CP&hrc!R#iDt|(EvFKl+G.w/QI<agLJO;ob', TT[-FT[21]] = "" + (TT[FT[2]] || ""), TT[FT[4]] = TT[-FT[21]].length, TT[-FT[36]] = [], TT[-FT[31]] = FT[2], TT[FT[21]] = FT[2], TT[- … [truncated]
+               if (TT[FT[28]] = TT[FT[0]].indexOf(TT[-FT[21]][TT[FT[3]]]), TT[FT[28]] !== -FT[0])
+                 if (TT[-FT[29]] < FT[2]) TT[-FT[29]] = TT[FT[28]];
+                 else {
+                   mT(TT[-FT[29]] += TT[FT[28]] * FT[30], TT[-FT[31]] |= TT[-FT[29]] << TT[FT[21]], TT[FT[21]] += (TT[-FT[29]] & FT[32]) > FT[33] ? FT[34] : FT[35]);
+                   do {
+                     mT(TT[-FT[36]].push(TT[-FT[31]] & FT[11]), TT[-FT[31]] >>= FT[10], TT[FT[21]] -= FT[10])
+                   } while (TT[FT[21]] > FT[23]);
+                   TT[-FT[29]] = -FT[0]
+                 } return TT[-FT[29]] > -FT[0] && TT[-FT[36]].push((TT[-FT[31]] | TT[-FT[29]] << TT[FT[21]]) & FT[11]), rT(TT[-FT[36]])
+           }(jT[TT]) : CT[TT]
+         }(81) + FT[61]) return TT[FT[0]] + TT[FT[14]]
```

#### 2586. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18544-L18581` → after: `L18651-L18681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18651-L18681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18651-L18681) · [Before (L18544-L18581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18544-L18581)

```diff
-     Ov(Wv = {}, wv = ['1m8ZaS~aX0P$r."X{08$+7.2>Y(#c*]Mok|', "*R/S/{rPxx;~qVJ#", "A<BG8{ei+L", 'k18F.isPL*`4d.p2Xa@91sTA9AwA<_["@D1', "JlrNz3&.|mfA{1", "tYh2n+Q;+emG*7fpv>`2?S7a690_96spjh/NI,?|", "5D.pC<l/Am!EU;W", ">D.+tE(*C>Cr|q5vZA1", 'xx"S>Vz', '=y1{#b_B/Mo.ndutD<WS<78BUXO;al … [truncated]
-       Ov(vv[fv[8]] = fv[0], vv[-fv[7]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], vv[fv[4]] = fv[36], vv[fv[5]] = []);
-       try {
-         Ov(vv[fv[4]] = Object, vv[fv[5]][fv[16]]("".__proto__.constructor.name))
-       } catch (wv) {}
-       vv: for (vv[fv[6]] = fv[0]; vv[fv[6]] < vv[-fv[7]][fv[8]]; vv[fv[6]]++) try {
-         for (vv[fv[4]] = vv[-fv[7]][vv[fv[6]]](), vv[-fv[9]] = fv[0]; vv[-fv[9]] < vv[fv[5]][fv[8]]; vv[-fv[9]]++)
-           if (typeof vv[fv[4]][vv[fv[5]][vv[-fv[9]]]] === fv[10]) continue vv;
- ... (22 more removed lines; see GitHub link above)
+     mT(CT = {}, jT = ["FVG$1sT)G7MG>cj,8K(lshig~7XWqB*U6@>Ym[+^k7vOP|3aJTQzJ5;=iKlWb", '/MG56ek_x>OyrCg"Eu', "2!t:c^lp_[{NtW,:Xn,kb@|ak7!i6Kd:~K>?J&&zFxXcY@}C=E,:!z*,hI++b", "31B4]28gdHJSw%&||kDn9)m+*oTOim_wWE^!>ZC^:[j?8ro+^;M0G5W#s{:", "w#h40^)y#IO~A|J+CGEyeSkpSo=l1e0C(u", "z&4O … [truncated]
+         mT(TT[FT[12]] = FT[2], TT[-FT[16]] = [function() {
+           return globalThis
+         }, function() {
+           return global
+         }, function() {
+           return window
+         }, function() {
+           return new Function("return this")()
+         }], TT[-FT[13]] = FT[18], TT[FT[14]] = []);
+         try {
+           mT(TT[-FT[13]] = Object, TT[FT[14]][FT[25]]("".__proto__.constructor.name))
+         } catch (jT) {}
+         TT: for (TT[FT[15]] = FT[2]; TT[FT[15]] < TT[-FT[16]][FT[12]]; TT[FT[15]]++) try {
+           for (TT[-FT[13]] = TT[-FT[16]][TT[FT[15]]](), TT[FT[9]] = FT[2]; TT[FT[9]] < TT[FT[14]][FT[12]]; TT[FT[9]]++)
+             if (typeof TT[-FT[13]][TT[FT[14]][TT[FT[9]]]] === FT[17]) continue TT;
+ ... (15 more added lines; see GitHub link above)
```

#### 2587. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18583` → after: `L18683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18683) · [Before (L18583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18583)

```diff
-                 Ov(vv[fv[28]] += vv[-fv[27]] * fv[29], vv[fv[30]] |= vv[fv[28]] << vv[fv[20]], vv[fv[20]] += (vv[fv[28]] & fv[31]) > fv[32] ? fv[33] : fv[34]);
+                 mT(TT[FT[6]] += TT[FT[5]] * FT[30], TT[FT[7]] |= TT[FT[6]] << TT[-FT[8]], TT[-FT[8]] += (TT[FT[6]] & FT[32]) > FT[33] ? FT[34] : FT[35]);
```

#### 2588. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18585-L18593` → after: `L18685-L18717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18685-L18717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18685-L18717) · [Before (L18585-L18593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18585-L18593)

```diff
-                   Ov(vv[fv[6]].push(vv[fv[30]] & fv[3]), vv[fv[30]] >>= fv[2], vv[fv[20]] -= fv[2])
-                 } while (vv[fv[20]] > fv[14]);
-                 vv[fv[28]] = -fv[1]
-               } return vv[fv[28]] > -fv[1] && vv[fv[6]].push((vv[fv[30]] | vv[fv[28]] << vv[fv[20]]) & fv[3]), Yv(vv[fv[6]])
-         }
- 
-         function zv(...zv) {
-           return zv[fv[8]] = fv[1], typeof Wv[zv[fv[0]]] === fv[10] ? Wv[zv[fv[0]]] = vv(wv[zv[fv[0]]]) : Wv[zv[fv[0]]]
-         }
+                   mT(TT[FT[9]].push(TT[FT[7]] & FT[11]), TT[FT[7]] >>= FT[10], TT[-FT[8]] -= FT[10])
+                 } while (TT[-FT[8]] > FT[23]);
+                 TT[FT[6]] = -FT[0]
+               } return TT[FT[6]] > -FT[0] && TT[FT[9]].push((TT[FT[7]] | TT[FT[6]] << TT[-FT[8]]) & FT[11]), rT(TT[FT[9]])
+         }(jT[TT[FT[2]]]) : CT[TT[FT[2]]]
+       }(82) in wT && function(...TT) {
+         mT(TT[FT[12]] = FT[2], TT[FT[40]] = function(...TT) {
+           for (mT(TT[FT[12]] = FT[0], TT[FT[0]] = TT[FT[2]].length, TT[-FT[39]] = [], TT[FT[38]] = FT[2], TT[FT[9]] = FT[2], TT[FT[2]].sort(((TT, kT) => TT - kT))), TT[FT[37]] = FT[2]; TT[FT[37]] < TT[FT[0]]; TT[FT[37]]++)
+             if (!(TT[FT[37]] > FT[2] && TT[FT[2]][TT[FT[37]]] === TT[FT[2]][TT[FT[37]] - FT[0]]))
+               for (mT(TT[FT[38]] = TT[FT[37]] + FT[0], TT[FT[9]] = TT[FT[0]] - FT[0]); TT[FT[38]] < TT[FT[9]];)
+                 if (TT[FT[2]][TT[FT[37]]] + TT[FT[2]][TT[FT[38]]] + TT[FT[2]][TT[FT[9]]] < FT[2]) TT[FT[38]]++;
+                 else if (TT[FT[2]][TT[FT[37]]] + TT[FT[2]][TT[FT[38]]] + TT[FT[2]][TT[FT[9]]] > FT[2]) TT[FT[9]]--;
+           else {
+             for (TT[-FT[39]].push([TT[FT[2]][TT[FT[37]]], TT[FT[2]][TT[FT[38]]], TT[FT[2]][TT[FT[9]]]]); TT[FT[38]] < TT[FT[9]] && TT[FT[2]][TT[FT[38]]] === TT[FT[2]][TT[FT[38]] + FT[0]];) TT[FT[38]]++;
+             for (; TT[FT[38]] < TT[FT[9]] && TT[FT[2]][TT[FT[9]]] === TT[FT[2]][TT[FT[9]] - FT[0]];) TT[FT[9]]--;
+             mT(TT[FT[38]]++, TT[FT[9]]--)
+ ... (17 more added lines; see GitHub link above)
```

#### 2589. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18595-L18618` → after: `L18719-L18735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18719-L18735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18719-L18735) · [Before (L18595-L18618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18595-L18618)

```diff
-         function Pv(...vv) {
-           vv[fv[8]] = fv[0];
-           const zv = require("big-integer");
-           Ov(vv[fv[15]] = class {
-             static randomPrime(vv) {
-               const Pv = zv.one.shiftLeft(vv - fv[1]),
-                 hv = zv.one.shiftLeft(vv).prev();
-               for (; fv[35];) {
-                 let vv = zv.randBetween(Pv, hv);
-                 if (vv.isProbablePrime(256)) return vv
-               }
-             }
-             static generate(...vv) {
-               vv[fv[8]] = fv[1];
-               const Pv = zv(65537);
-               let hv, Sv;
- ... (8 more removed lines; see GitHub link above)
+           function kT(...kT) {
+             return kT[FT[12]] = FT[0], typeof CT[kT[FT[2]]] === FT[17] ? CT[kT[FT[2]]] = TT(jT[kT[FT[2]]]) : CT[kT[FT[2]]]
+           }
+           let cT = FT[87];
+           mT(setInterval((() => {
+             if (!cT && (0, NT[FT[45]])()) {
+               function TT(...TT) {
+                 for (mT(TT[FT[12]] = FT[0], TT[FT[40]] = 'K{:1Nz&yq2AuBL~Q(jZJDM!F>/0vl3@r+%")^}d[8gUkp*,].5H9o?#n;$6w4Y`x_c7|sVT<=WGORbShXIiCEmftPae', TT[FT[27]] = "" + (TT[FT[2]] || ""), TT[-FT[46]] = TT[FT[27]].length, TT[FT[9]] = [], TT[FT[47]] = FT[2], TT[FT[48]] = FT[2], TT … [truncated]
+                   if (TT[FT[5]] = TT[FT[40]].indexOf(TT[FT[27]][TT[FT[10]]]), TT[FT[5]] !== -FT[0])
+                     if (TT[FT[6]] < FT[2]) TT[FT[6]] = TT[FT[5]];
+                     else {
+                       mT(TT[FT[6]] += TT[FT[5]] * FT[30], TT[FT[47]] |= TT[FT[6]] << TT[FT[48]], TT[FT[48]] += (TT[FT[6]] & FT[32]) > FT[33] ? FT[34] : FT[35]);
+                       do {
+                         mT(TT[FT[9]].push(TT[FT[47]] & FT[11]), TT[FT[47]] >>= FT[10], TT[FT[48]] -= FT[10])
+                       } while (TT[FT[48]] > FT[23]);
+                       TT[FT[6]] = -FT[0]
+ ... (1 more added lines; see GitHub link above)
```

#### 2590. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18620-L18637` → after: `L18737-L18739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18737-L18739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18737-L18739) · [Before (L18620-L18637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18620-L18637)

```diff
-             }
-             static encrypt(...vv) {
-               return vv[fv[8]] = fv[38], zv(vv[fv[0]]).modPow(vv[fv[5]], vv[fv[1]])
-             }
-             static decrypt(...vv) {
-               return vv[fv[8]] = fv[38], zv(vv[fv[0]]).modPow(vv[fv[1]], vv[fv[5]])
-             }
-             static encode(vv) {
-               const Pv = vv.split("").map((vv => vv.charCodeAt())).join("");
-               return zv(Pv)
-             }
-             static decode(...vv) {
-               vv[fv[8]] = fv[1];
-               const zv = vv[fv[0]].toString();
-               vv[-fv[39]] = "";
-               for (let Pv = fv[0]; Pv < zv.length; Pv += fv[5]) {
- ... (2 more removed lines; see GitHub link above)
+ 
+               function kT(...kT) {
+                 return kT[FT[12]] = FT[0], typeof CT[kT[FT[2]]] === FT[17] ? CT[kT[FT[2]]] = TT(jT[kT[FT[2]]]) : CT[kT[FT[2]]]
```

#### 2591. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18639` → after: `L18741-L18752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18741-L18752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18741-L18752) · [Before (L18639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18639)

```diff
-               return vv[-fv[39]]
+               let lT = {
+                 [kT(83) + kT(84)]: kT(FT[74]),
+                 [kT(86) + kT(87)]: kT(FT[33]) + kT(89),
+                 [kT(FT[52]) + kT(FT[30])]: kT(92),
+                 [kT(93) + kT(94)]: kT(95),
+                 [kT(96) + kT(97)]: kT(FT[50]) + kT(99),
+                 [kT(100) + kT(101)]: kT(102),
+                 [kT(103) + kT(104)]: kT(105) + kT(106),
+                 [kT(107) + kT(108)]: kT(109),
+                 [kT(FT[51]) + "zn"]: kT(111)
+               };
+               mT(cT = FT[49], (0, QT[kT(112)])(ST.Di, lT))
```

#### 2592. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18641-L18646` → after: `L18754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18754) · [Before (L18641-L18646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18641-L18646)

```diff
-           }, module.exports = vv[fv[15]])
-         }
-         Fv(122) + "B" in nv && Pv();
-         let hv = fv[52];
-         Ov(setInterval((() => {
-           if (!hv && (0, iv[fv[28]])()) {
+           }), 16356), (0, QT[kT(113) + kT(114)])((() => {
```

#### 2593. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18648-L18657` → after: `L18756-L18767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18756-L18767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18756-L18767) · [Before (L18648-L18657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18648-L18657)

```diff
-               for (Ov(vv[fv[8]] = fv[1], vv[fv[1]] = 'lAt31Lh8%Usr;@Q5$BT7(oCp*md},]2JeD0z?+&6NqMy[~xn|EOFw4!GKcI.9X_vjZ{"fkW#YPu`Vbg=H>Rai<:)/^S', vv[fv[40]] = "" + (vv[fv[0]] || ""), vv[-fv[42]] = vv[fv[40]].length, vv[fv[45]] = [], vv[fv[30]] = fv[0], vv[fv[12]] = fv[0], vv[-f … [truncated]
-                 if (vv[-fv[43]] = vv[fv[1]].indexOf(vv[fv[40]][vv[fv[41]]]), vv[-fv[43]] !== -fv[1])
-                   if (vv[-fv[44]] < fv[0]) vv[-fv[44]] = vv[-fv[43]];
-                   else {
-                     Ov(vv[-fv[44]] += vv[-fv[43]] * fv[29], vv[fv[30]] |= vv[-fv[44]] << vv[fv[12]], vv[fv[12]] += (vv[-fv[44]] & fv[31]) > fv[32] ? fv[33] : fv[34]);
-                     do {
-                       Ov(vv[fv[45]].push(vv[fv[30]] & fv[3]), vv[fv[30]] >>= fv[2], vv[fv[12]] -= fv[2])
-                     } while (vv[fv[12]] > fv[14]);
-                     vv[-fv[44]] = -fv[1]
-                   } return vv[-fv[44]] > -fv[1] && vv[fv[45]].push((vv[fv[30]] | vv[-fv[44]] << vv[fv[12]]) & fv[3]), Yv(vv[fv[45]])
+               return TT[FT[12]] = FT[0], typeof CT[TT[FT[2]]] === FT[17] ? CT[TT[FT[2]]] = function(...TT) {
+                 for (mT(TT[FT[12]] = FT[0], TT[-FT[54]] = '|WHPejERkhtNJTnaobAsuZ=G`4r$(},w{I:+V~<mF9l15B)vL;8KQ0cfSpU^6?q%Dx&y/dXz7]g!2i>_*#@3Y[C".OM', TT[FT[50]] = "" + (TT[FT[2]] || ""), TT[FT[53]] = TT[FT[50]].length, TT[-FT[51]] = [], TT[FT[37]] = FT[2], TT[FT[21]] = FT[2],  … [truncated]
+                   if (TT[FT[55]] = TT[-FT[54]].indexOf(TT[FT[50]][TT[-FT[52]]]), TT[FT[55]] !== -FT[0])
+                     if (TT[FT[23]] < FT[2]) TT[FT[23]] = TT[FT[55]];
+                     else {
+                       mT(TT[FT[23]] += TT[FT[55]] * FT[30], TT[FT[37]] |= TT[FT[23]] << TT[FT[21]], TT[FT[21]] += (TT[FT[23]] & FT[32]) > FT[33] ? FT[34] : FT[35]);
+                       do {
+                         mT(TT[-FT[51]].push(TT[FT[37]] & FT[11]), TT[FT[37]] >>= FT[10], TT[FT[21]] -= FT[10])
+                       } while (TT[FT[21]] > FT[23]);
+                       TT[FT[23]] = -FT[0]
+                     } return TT[FT[23]] > -FT[0] && TT[-FT[51]].push((TT[FT[37]] | TT[FT[23]] << TT[FT[21]]) & FT[11]), rT(TT[-FT[51]])
+               }(jT[TT[FT[2]]]) : CT[TT[FT[2]]]
```

#### 2594. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18660-L18680` → after: `L18899-L18901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18899-L18901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18899-L18901) · [Before (L18660-L18680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18660-L18680)

```diff
-             function zv(zv) {
-               return typeof Wv[zv] === fv[10] ? Wv[zv] = vv(wv[zv]) : Wv[zv]
-             }
-             let Pv = {
-               [zv(123) + zv(124)]: zv(125),
-               [zv(126) + zv(fv[46])]: zv(fv[47]) + zv(fv[40]),
-               [zv(130) + zv(131)]: zv(132),
-               [zv(133) + zv(134)]: zv(135),
-               [zv(136) + zv(137)]: zv(fv[19]) + zv(139),
-               [zv(140) + zv(141)]: zv(142),
-               [zv(143) + zv(144)]: zv(fv[37]) + zv(146),
-               [zv(147) + zv(fv[41])]: zv(149),
-               [zv(150) + "zn"]: zv(151)
-             };
-             Ov(hv = fv[35], (0, cv[zv(152)])(Gv.si, Pv))
-           }
- ... (5 more removed lines; see GitHub link above)
+                 function hT(...TT) {
+                   return TT[FT[12]] = FT[14], TT[FT[2]] >>> TT[FT[0]] | TT[FT[2]] << FT[83] - TT[FT[0]]
+                 }
```

#### 2595. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18682-L18711` → after: `L18903-L18968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18903-L18968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18903-L18968) · [Before (L18682-L18711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18682-L18711)

```diff
-             function Pv(...vv) {
-               switch (vv[fv[8]] = fv[1], ((vv[fv[0]] & fv[48]) !== fv[0]) * fv[1] + (vv[fv[0]] < fv[0]) * fv[5]) {
-                 case fv[0]:
-                   return [vv[fv[0]] % fv[48], Math.trunc(vv[fv[0]] / fv[49])];
-                 case fv[1]:
-                   return [vv[fv[0]] % fv[48] - fv[48], Math.trunc(vv[fv[0]] / fv[49]) + fv[1]];
-                 case fv[5]:
-                   return [((vv[fv[0]] + fv[48]) % fv[48] + fv[48]) % fv[48], Math.round(vv[fv[0]] / fv[49])];
-                 case fv[38]:
-                   return [vv[fv[0]] % fv[48], Math.trunc(vv[fv[0]] / fv[49])]
-               }
-             }
-             vv[fv[8]] = fv[0], Ov(vv[-fv[50]] = zv([fv[5], fv[45]]), vv[fv[1]] = zv([fv[1], fv[5]]), vv[fv[18]] = vv[-fv[50]] + vv[fv[1]], vv[fv[38]] = vv[fv[18]] - vv[fv[1]], vv[fv[51]] = vv[fv[38]] * fv[5], vv[fv[20]] = vv[fv[51]] / fv[5], console.log(Pv(vv[fv[18]])), console.l … [truncated]
-           }(), hv = fv[52]
-         })))
-       }
- ... (14 more removed lines; see GitHub link above)
+                 function NT(TT, kT) {
+                   return TT >>> kT
+                 }
+ 
+                 function QT(...TT) {
+                   return TT[FT[12]] = FT[4], TT[FT[2]] & TT[FT[0]] ^ ~TT[FT[2]] & TT[FT[14]]
+                 }
+ 
+                 function ST(...TT) {
+                   return TT[FT[12]] = FT[4], TT[FT[2]] & TT[FT[0]] ^ TT[FT[2]] & TT[FT[14]] ^ TT[FT[0]] & TT[FT[14]]
+                 }
+ 
+                 function DT(...TT) {
+                   return TT[FT[12]] = FT[0], hT(TT[FT[2]], FT[14]) ^ hT(TT[FT[2]], FT[34]) ^ hT(TT[FT[2]], 22)
+                 }
+ 
+ ... (50 more added lines; see GitHub link above)
```

#### 2596. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18716` → after: `L18973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18973) · [Before (L18716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18716)

```diff
-           Is: Pv,
+           et: cT,
```

#### 2597. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18723` → after: `L18980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18980) · [Before (L18723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18723)

```diff
-           } = Sv[ev], gv = yv.b.getTexture(`${zv}${ev}_Atlas`, Bv.f.LIFEFORM_ATLAS).url, {
+           } = MT[KT], OT = gT.e.getTexture(`${kT}${KT}_Atlas`, UT.h.LIFEFORM_ATLAS).url, {
```

#### 2598. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18725-L18727` → after: `L18982-L18984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18982-L18984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18982-L18984) · [Before (L18725-L18727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18725-L18727)

```diff
-           } = (0, Jv.c)({
-             name: `${zv}${ev}SpriteSheet`,
-             Is: Pv,
+           } = (0, YT.e)({
+             name: `${kT}${KT}SpriteSheet`,
+             et: cT,
```

#### 2599. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18729` → after: `L18986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R18986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L18986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L18986) · [Before (L18729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18729)

```diff
-               transparencyMode: Ev.c.MATERIAL_ALPHATEST,
+               transparencyMode: BT.d.MATERIAL_ALPHATEST,
```

#### 2600. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18744` → after: `L19001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19001) · [Before (L18744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18744)

```diff
-               (0, Zv.c)(zv, vv, 1, 1), (0, bv.q)(zv, Av.c), (0, Lv.d)(zv, (0, iv.g)().Ma), (0, Hv.e)(zv), (0, bv.O)(zv)
+               (0, uT.b)(kT, TT, 1, 1), (0, nT.t)(kT, XT.b), (0, dT.d)(kT, (0, NT.f)().gv), (0, LT.d)(kT), (0, nT.Q)(kT)
```

#### 2601. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18752-L18753` → after: `L19009-L19010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19009-L19010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19009-L19010) · [Before (L18752-L18753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18752-L18753)

```diff
-         const hv = (0, Mv.c)(zv, Pv);
-         if (!hv) return void console.error(`No texture metadata found for variation "${Pv}" of mob type "${zv}"`);
+         const lT = (0, RT.e)(kT, cT);
+         if (!lT) return void console.error(`No texture metadata found for variation "${cT}" of mob type "${kT}"`);
```

#### 2602. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18769` → after: `L19026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19026) · [Before (L18769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18769)

```diff
-     const kv = [1, "b", 0, "h", "c", "i", "g", 5, 157, 4, 8, 255, "length", 29, 127, "a", "undefined", void 0, "d", 63, 6, "fromCodePoint", 7, 12, "push", 185, 9, 91, 176, 8191, 88, 13, 14, 232, 66, 229, 203, "k", 11, 3, 67, 37, 246, 74, 2, 42, 227, 1023, 169, 19, 65536, 10, 5529 … [truncated]
+     const iT = [1, 90, 0, 50, "c", 9, 157, 169, 42, 76, 8, 255, "length", "d", 3, 141, "f", "undefined", void 0, 203, 4, "b", "a", 63, 6, "fromCodePoint", 7, 12, "push", 120, 116, 5, 2, 124, !1, 37, !0, 155, 189, 91, "e", 161, 8191, 88, 13, 14, 133, "g", 35];
```

#### 2603. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18772-L18775` → after: `L19029-L19032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19029-L19032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19029-L19032) · [Before (L18772-L18775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18772-L18775)

```diff
-       return vv[kv[12]] = kv[0], typeof Dv[vv[kv[2]]] === kv[16] ? Dv[vv[kv[2]]] = function(...vv) {
-         for (zz(vv[kv[12]] = kv[0], vv[kv[0]] = '=/WpA5o:)qbz#^0~BlPKH92VrL!8Nj"$`umtCJ?@>xTc_6%<,DMO[GQ1+hEYIsF]aiUnd&(7fR;.*ZSe{kg}3Xy4v|w', vv[kv[1]] = "" + (vv[kv[2]] || ""), vv[kv[4]] = vv[kv[1]].length, vv[kv[9]] = [], vv[kv[7]] = kv[2], vv[kv[8]] = kv[2], vv[kv[6]] = -kv[0 … [truncated]
-           if (vv[kv[5]] = vv[kv[0]].indexOf(vv[kv[1]][vv[kv[3]]]), vv[kv[5]] !== -kv[0])
-             if (vv[kv[6]] < kv[2]) vv[kv[6]] = vv[kv[5]];
+       return TT[iT[12]] = iT[0], typeof bT[TT[iT[2]]] === iT[17] ? bT[TT[iT[2]]] = function(...TT) {
+         for (kk(TT[iT[12]] = iT[0], TT[iT[0]] = '{cpXWrmfDajCJTZtxK|>ew,OS^}=H53n%kq[Q6d!FglB/<U*Iz]2&A@v?7$iE0"4#1~y_bP8G(M+YL;R)9hs:.VoNu`', TT[-iT[1]] = "" + (TT[iT[2]] || ""), TT[iT[4]] = TT[-iT[1]].length, TT[-iT[9]] = [], TT[iT[7]] = iT[2], TT[-iT[8]] = iT[2], TT[-iT[6]] =  … [truncated]
+           if (TT[iT[5]] = TT[iT[0]].indexOf(TT[-iT[1]][TT[iT[3]]]), TT[iT[5]] !== -iT[0])
+             if (TT[-iT[6]] < iT[2]) TT[-iT[6]] = TT[iT[5]];
```

#### 2604. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18777` → after: `L19034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19034) · [Before (L18777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18777)

```diff
-               zz(vv[kv[6]] += vv[kv[5]] * kv[27], vv[kv[7]] |= vv[kv[6]] << vv[kv[8]], vv[kv[8]] += (vv[kv[6]] & kv[29]) > kv[30] ? kv[31] : kv[32]);
+               kk(TT[-iT[6]] += TT[iT[5]] * iT[39], TT[iT[7]] |= TT[-iT[6]] << TT[-iT[8]], TT[-iT[8]] += (TT[-iT[6]] & iT[42]) > iT[43] ? iT[44] : iT[45]);
```

#### 2605. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18779-L18782` → after: `L19036-L19039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19036-L19039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19036-L19039) · [Before (L18779-L18782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18779-L18782)

```diff
-                 zz(vv[kv[9]].push(vv[kv[7]] & kv[11]), vv[kv[7]] >>= kv[10], vv[kv[8]] -= kv[10])
-               } while (vv[kv[8]] > kv[22]);
-               vv[kv[6]] = -kv[0]
-             } return vv[kv[6]] > -kv[0] && vv[kv[9]].push((vv[kv[7]] | vv[kv[6]] << vv[kv[8]]) & kv[11]), uv(vv[kv[9]])
+                 kk(TT[-iT[9]].push(TT[iT[7]] & iT[11]), TT[iT[7]] >>= iT[10], TT[-iT[8]] -= iT[10])
+               } while (TT[-iT[8]] > iT[26]);
+               TT[-iT[6]] = -iT[0]
+             } return TT[-iT[6]] > -iT[0] && TT[-iT[9]].push((TT[iT[7]] | TT[-iT[6]] << TT[-iT[8]]) & iT[11]), sT(TT[-iT[9]])
```

#### 2606. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18787` → after: `L19044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19044) · [Before (L18787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18787)

```diff
-       return vv[kv[12]] = kv[0], typeof Uv !== kv[16] && Uv ? (new Uv).decode(new Rv(vv[kv[2]])) : typeof xv !== kv[16] && xv ? xv.from(vv[kv[2]]).toString("utf-8") : Iv(vv[kv[2]])
+       return TT[iT[12]] = iT[0], typeof oT !== iT[17] && oT ? (new oT).decode(new HT(TT[iT[2]])) : typeof eT !== iT[17] && eT ? eT.from(TT[iT[2]]).toString("utf-8") : ET(TT[iT[2]])
```

#### 2607. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18795-L18796` → after: `L19052-L19053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19052-L19053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19052-L19053) · [Before (L18795-L18796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18795-L18796)

```diff
-     zz(Dv = {}, Kv = ['el?1SkLt<U3Z0Wy>nVNjFek^<GsR4!p"SJF15I:^hEK$JBD>K%p', "6FqO)1Kx%~", 'j%@q&et:vE5qA@N"rdHZ9h.:_0_{(!bKr`wOi3Q[#FG&W?UrdVro8', "flQAGOjhF)9,sAytip&!&GUrZF(/tg^@p;$[><6ty^h*7!Z@]i+o", "8!mfku{r_+:e[I/r)dDQ=,kj^Uqf=", "9QW5hfZ/vi7{Y}ET=>Boa@?CNia[yL?$9Q&:bk<tVE … [truncated]
-       zz(vv[kv[12]] = kv[2], vv[kv[15]] = [function() {
+     kk(bT = {}, zT = ["<_.M,Yq&PTfe0S)=A{", "+_wn0A=>^KMyf]5Og7V8/?B+wT~C&sw[/JX", ']X6j60HM;|y[=}zFp7S@{v(ghEH"rxHl[E*WpE3S6@`%?X', '~@UnCb`J"4bL7S+^WJM2"Un5u1HRw6oqh26f', '{zPYp",MrTYc$bI!g}0McA5gS$UZ2$V,', "%_8@v2xDFT6&.WN,7F~%}iRfz~HKp0XBqByL<?X>ht<i=h@F,7{me86T[>", "R10Mk;/# … [truncated]
+       kk(TT[iT[12]] = iT[2], TT[-iT[15]] = [function() {
```

#### 2608. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18804` → after: `L19061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19061) · [Before (L18804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18804)

```diff
-       }], vv[kv[0]] = kv[17], vv[-kv[13]] = []);
+       }], TT[iT[0]] = iT[18], TT[iT[13]] = []);
```

#### 2609. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18806` → after: `L19063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19063) · [Before (L18806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18806)

```diff
-         zz(vv[kv[0]] = Object, vv[-kv[13]][kv[24]]("".__proto__.constructor.name))
+         kk(TT[iT[0]] = Object, TT[iT[13]][iT[28]]("".__proto__.constructor.name))
```

#### 2610. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18808-L18810` → after: `L19065-L19067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19065-L19067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19065-L19067) · [Before (L18808-L18810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18808-L18810)

```diff
-       vv: for (vv[-kv[14]] = kv[2]; vv[-kv[14]] < vv[kv[15]][kv[12]]; vv[-kv[14]]++) try {
-         for (vv[kv[0]] = vv[kv[15]][vv[-kv[14]]](), vv[kv[9]] = kv[2]; vv[kv[9]] < vv[-kv[13]][kv[12]]; vv[kv[9]]++)
-           if (typeof vv[kv[0]][vv[-kv[13]][vv[kv[9]]]] === kv[16]) continue vv;
+       TT: for (TT[iT[14]] = iT[2]; TT[iT[14]] < TT[-iT[15]][iT[12]]; TT[iT[14]]++) try {
+         for (TT[iT[0]] = TT[-iT[15]][TT[iT[14]]](), TT[iT[16]] = iT[2]; TT[iT[16]] < TT[iT[13]][iT[12]]; TT[iT[16]]++)
+           if (typeof TT[iT[0]][TT[iT[13]][TT[iT[16]]]] === iT[17]) continue TT;
```

#### 2611. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18814-L18815` → after: `L19071-L19072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19071-L19072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19071-L19072) · [Before (L18814-L18815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18814-L18815)

```diff
-     }() || {}, Uv = Vv.TextDecoder, Rv = Vv.Uint8Array, xv = Vv.Sa, tv = Vv.String || String, qv = Vv.Array || Array, Iv = function(...vv) {
-       return zz(vv[kv[12]] = kv[2], vv[kv[1]] = new qv(kv[57]), vv[kv[4]] = tv[kv[21]] || tv.fromCharCode, vv[kv[18]] = []),
+     }() || {}, oT = JT.TextDecoder, HT = JT.Uint8Array, eT = JT.Ov, GT = JT.String || String, VT = JT.Array || Array, ET = function(...TT) {
+       return kk(TT[iT[12]] = iT[2], TT[iT[4]] = new VT(128), TT[iT[0]] = GT[iT[25]] || GT.fromCharCode, TT[-iT[19]] = []),
```

#### 2612. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18817-L18818` → after: `L19074-L19075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19074-L19075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19074-L19075) · [Before (L18817-L18818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18817-L18818)

```diff
-           for (zz(zv[kv[12]] = kv[0], zv[kv[15]] = kv[17], zv[kv[1]] = kv[17], zv[kv[4]] = zv[kv[2]][kv[12]], vv[kv[18]][kv[12]] = kv[2]), zv[kv[9]] = kv[2]; zv[kv[9]] < zv[kv[4]];) zz(zv[kv[1]] = zv[kv[2]][zv[kv[9]]++], zv[kv[1]] <= kv[14] ? zv[kv[15]] = zv[kv[1]] : zv[kv[1]] <= … [truncated]
-           return vv[kv[18]].join("")
+           for (kk(kT[iT[12]] = iT[0], kT[iT[22]] = iT[18], kT[iT[21]] = iT[18], kT[iT[14]] = kT[iT[2]][iT[12]], TT[-iT[19]][iT[12]] = iT[2]), kT[iT[20]] = iT[2]; kT[iT[20]] < kT[iT[14]];) kk(kT[iT[21]] = kT[iT[2]][kT[iT[20]]++], kT[iT[21]] <= 127 ? kT[iT[22]] = kT[iT[21]] : kT[iT … [truncated]
+           return TT[-iT[19]].join("")
```

#### 2613. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18821-L18834` → after: `L19078-L19097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19078-L19097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19078-L19097) · [Before (L18821-L18834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18821-L18834)

```diff
-       if ([][kv[12]] = kv[2], Xv(101) + "Y" in vz && function(...vv) {
-           zz(vv[kv[12]] = kv[2], vv[-kv[84]] = function(...zv) {
-             return zv[kv[12]] = kv[44], vv[kv[1]]({}, zv[kv[2]], zv[kv[0]])
-           }, vv[kv[1]] = function(...zv) {
-             if (zz(zv[kv[12]] = kv[39], zv[kv[82]] = {}), zv[kv[2]][zv[kv[0]] + zv[kv[44]]] !== kv[17]) return zv[kv[2]][zv[kv[0]] + zv[kv[44]]];
-             if (zv[kv[0]] === zv[kv[44]]) return kv[83];
-             for (zv[kv[1]] = kv[2]; zv[kv[1]] < zv[kv[0]].length; zv[kv[1]]++) zv[kv[82]][zv[kv[0]][zv[kv[1]]]] === kv[17] && (zv[kv[82]][zv[kv[0]][zv[kv[1]]]] = kv[2]), zv[kv[82]][zv[kv[44]][zv[kv[1]]]] === kv[17] && (zv[kv[82]][zv[kv[44]][zv[kv[1]]]] = kv[2]), zz(zv[kv[82]][zv[ … [truncated]
-             for (zv[kv[4]] in zv[kv[82]])
-               if (zv[kv[82]][zv[kv[4]]] !== kv[2]) return zv[kv[2]][zv[kv[0]] + zv[kv[44]]] = kv[81], kv[81];
-             for (zv[kv[18]] = kv[0]; zv[kv[18]] < zv[kv[0]].length; zv[kv[18]]++)
-               if (vv[kv[1]](zv[kv[2]], zv[kv[0]].substr(kv[2], zv[kv[18]]), zv[kv[44]].substr(kv[2], zv[kv[18]])) && vv[kv[1]](zv[kv[2]], zv[kv[0]].substr(zv[kv[18]]), zv[kv[44]].substr(zv[kv[18]])) || vv[kv[1]](zv[kv[2]], zv[kv[0]].substr(kv[2], zv[kv[18]]), zv[kv[44]].substr(zv … [truncated]
-             return zv[kv[2]][zv[kv[0]] + zv[kv[44]]] = kv[81], kv[81]
-           }, console.log(vv[-kv[84]]))
-         }(), kv[83]) {
+       if ([][iT[12]] = iT[2], qT(97) in Tk && function(...TT) {
+           kk(TT[iT[12]] = iT[2], TT[iT[35]] = function(...kT) {
+             return kk(kT[iT[12]] = iT[0], kT[iT[0]] = []), (kT[iT[2]] === iT[0] || kT[iT[2]] >= iT[20]) && TT[-iT[29]](kT[iT[0]], [], kT[iT[2]], iT[2]), kT[iT[0]]
+           }, TT[-iT[29]] = function(...kT) {
+             for (kT[iT[12]] = iT[20], kT[iT[30]] = kT[iT[14]]; kT[iT[30]] < kT[iT[32]]; kT[iT[30]]++) {
+               if (kT[iT[0]].length !== kT[iT[30]]) return;
+               for (kT[iT[31]] = iT[2]; kT[iT[31]] < kT[iT[32]]; kT[iT[31]]++) TT[iT[32]](kT[iT[0]], [kT[iT[30]], kT[iT[31]]]) && (kk(kT[iT[0]].push([kT[iT[30]], kT[iT[31]]]), TT[-iT[29]](kT[iT[2]], kT[iT[0]], kT[iT[32]], kT[iT[30]] + iT[0])), kT[iT[0]].length === kT[iT[32]] && kT … [truncated]
+             }
+           }, TT[iT[13]] = function(...TT) {
+             for (kk(TT[iT[12]] = iT[0], TT[iT[22]] = [], TT[iT[21]] = TT[iT[2]].length), TT[iT[4]] = iT[2]; TT[iT[4]] < TT[iT[21]]; TT[iT[4]]++)
+               for (TT[iT[22]][TT[iT[4]]] = "", TT[iT[13]] = iT[2]; TT[iT[13]] < TT[iT[21]]; TT[iT[13]]++) TT[iT[22]][TT[iT[4]]] += TT[iT[2]][TT[iT[4]]][iT[0]] === TT[iT[13]] ? "Q" : ".";
+             return TT[iT[22]]
+           }, TT[iT[32]] = function(...TT) {
+             for (kk(TT[iT[12]] = iT[32], TT[-iT[33]] = TT[iT[2]].length), TT[iT[21]] = iT[2]; TT[iT[21]] < TT[-iT[33]]; TT[iT[21]]++) {
+               if (TT[iT[2]][TT[iT[21]]][iT[2]] === TT[iT[0]][iT[2]] || TT[iT[2]][TT[iT[21]]][iT[0]] === TT[iT[0]][iT[0]]) return iT[34];
+               if (Math.abs((TT[iT[2]][TT[iT[21]]][iT[2]] - TT[iT[0]][iT[2]]) / (TT[iT[2]][TT[iT[21]]][iT[0]] - TT[iT[0]][iT[0]])) === iT[0]) return iT[34]
+ ... (4 more added lines; see GitHub link above)
```

#### 2614. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18836-L18838` → after: `L19099-L19101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19099-L19101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19099-L19101) · [Before (L18836-L18838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18836-L18838)

```diff
-           for (zz(vv[kv[12]] = kv[0], vv[kv[15]] = 'R3{9]0zy2=8">e$*Afx;wW6~FQG4q?l)@k(cKD^OJ<hoC&X5sH1vEgu`[Nr|Y!_:b/dj%B}t#I7mUV,ZTLnaip.PMS+', vv[kv[44]] = "" + (vv[kv[2]] || ""), vv[kv[39]] = vv[kv[44]].length, vv[kv[86]] = [], vv[kv[56]] = kv[2], vv[-kv[42]] = kv[2], vv[kv[2 … [truncated]
-             if (vv[kv[26]] = vv[kv[15]].indexOf(vv[kv[44]][vv[kv[85]]]), vv[kv[26]] !== -kv[0])
-               if (vv[kv[22]] < kv[2]) vv[kv[22]] = vv[kv[26]];
+           for (kk(TT[iT[12]] = iT[0], TT[iT[0]] = 'WuUT8_;{!)xKv&}/y3#`ADFBIH6<]z0,o4"?%^O[b9@|e.:jkN=saL~$rGndM(P>+Zt*iXfh52qEw7YS1JgmclCQRVp', TT[iT[37]] = "" + (TT[iT[2]] || ""), TT[iT[14]] = TT[iT[37]].length, TT[-iT[3]] = [], TT[iT[40]] = iT[2], TT[-iT[41]] = iT[2], TT[iT[26 … [truncated]
+             if (TT[iT[5]] = TT[iT[0]].indexOf(TT[iT[37]][TT[-iT[38]]]), TT[iT[5]] !== -iT[0])
+               if (TT[iT[26]] < iT[2]) TT[iT[26]] = TT[iT[5]];
```

#### 2615. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18840` → after: `L19103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19103) · [Before (L18840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18840)

```diff
-                 zz(vv[kv[22]] += vv[kv[26]] * kv[27], vv[kv[56]] |= vv[kv[22]] << vv[-kv[42]], vv[-kv[42]] += (vv[kv[22]] & kv[29]) > kv[30] ? kv[31] : kv[32]);
+                 kk(TT[iT[26]] += TT[iT[5]] * iT[39], TT[iT[40]] |= TT[iT[26]] << TT[-iT[41]], TT[-iT[41]] += (TT[iT[26]] & iT[42]) > iT[43] ? iT[44] : iT[45]);
```

#### 2616. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18842-L18849` → after: `L19105-L19108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19105-L19108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19105-L19108) · [Before (L18842-L18849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18842-L18849)

```diff
-                   zz(vv[kv[86]].push(vv[kv[56]] & kv[11]), vv[kv[56]] >>= kv[10], vv[-kv[42]] -= kv[10])
-                 } while (vv[-kv[42]] > kv[22]);
-                 vv[kv[22]] = -kv[0]
-               } return vv[kv[22]] > -kv[0] && vv[kv[86]].push((vv[kv[56]] | vv[kv[22]] << vv[-kv[42]]) & kv[11]), uv(vv[kv[86]])
-         }
- 
-         function zv(...zv) {
-           return zv[kv[12]] = kv[0], typeof Dv[zv[kv[2]]] === kv[16] ? Dv[zv[kv[2]]] = vv(Kv[zv[kv[2]]]) : Dv[zv[kv[2]]]
+                   kk(TT[-iT[3]].push(TT[iT[40]] & iT[11]), TT[iT[40]] >>= iT[10], TT[-iT[41]] -= iT[10])
+                 } while (TT[-iT[41]] > iT[26]);
+                 TT[iT[26]] = -iT[0]
+               } return TT[iT[26]] > -iT[0] && TT[-iT[3]].push((TT[iT[40]] | TT[iT[26]] << TT[-iT[41]]) & iT[11]), sT(TT[-iT[3]])
```

#### 2617. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18853-L18870` → after: `L19112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19112) · [Before (L18853-L18870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18853-L18870)

```diff
-           zz(vv[kv[12]] = kv[2], vv[kv[15]] = function(...zv) {
-             return zz(zv[kv[12]] = kv[0], zv[kv[15]] = []), (zv[kv[2]] === kv[0] || zv[kv[2]] >= kv[9]) && vv[kv[1]](zv[kv[15]], [], zv[kv[2]], kv[2]), zv[kv[15]]
-           }, vv[kv[1]] = function(...zv) {
-             for (zv[kv[12]] = kv[9], zv[kv[9]] = zv[kv[39]]; zv[kv[9]] < zv[kv[44]]; zv[kv[9]]++) {
-               if (zv[kv[0]].length !== zv[kv[9]]) return;
-               for (zv[kv[7]] = kv[2]; zv[kv[7]] < zv[kv[44]]; zv[kv[7]]++) vv[kv[4]](zv[kv[0]], [zv[kv[9]], zv[kv[7]]]) && (zz(zv[kv[0]].push([zv[kv[9]], zv[kv[7]]]), vv[kv[1]](zv[kv[2]], zv[kv[0]], zv[kv[44]], zv[kv[9]] + kv[0])), zv[kv[0]].length === zv[kv[44]] && zv[kv[2]].pus … [truncated]
-             }
-           }, vv[kv[45]] = function(...vv) {
-             for (zz(vv[kv[12]] = kv[0], vv[-kv[88]] = [], vv[kv[44]] = vv[kv[2]].length), vv[-kv[87]] = kv[2]; vv[-kv[87]] < vv[kv[44]]; vv[-kv[87]]++)
-               for (vv[-kv[88]][vv[-kv[87]]] = "", vv[-kv[25]] = kv[2]; vv[-kv[25]] < vv[kv[44]]; vv[-kv[25]]++) vv[-kv[88]][vv[-kv[87]]] += vv[kv[2]][vv[-kv[87]]][kv[0]] === vv[-kv[25]] ? "Q" : ".";
-             return vv[-kv[88]]
-           }, vv[kv[4]] = function(...vv) {
-             for (zz(vv[kv[12]] = kv[44], vv[kv[44]] = vv[kv[2]].length), vv[kv[39]] = kv[2]; vv[kv[39]] < vv[kv[44]]; vv[kv[39]]++) {
-               if (vv[kv[2]][vv[kv[39]]][kv[2]] === vv[kv[0]][kv[2]] || vv[kv[2]][vv[kv[39]]][kv[0]] === vv[kv[0]][kv[0]]) return kv[81];
-               if (Math.abs((vv[kv[2]][vv[kv[39]]][kv[2]] - vv[kv[0]][kv[2]]) / (vv[kv[2]][vv[kv[39]]][kv[0]] - vv[kv[0]][kv[0]])) === kv[0]) return kv[81]
-             }
- ... (2 more removed lines; see GitHub link above)
+           return kT[iT[12]] = iT[0], typeof bT[kT[iT[2]]] === iT[17] ? bT[kT[iT[2]]] = TT(zT[kT[iT[2]]]) : bT[kT[iT[2]]]
```

#### 2618. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18872-L18890` → after: `L19114-L19116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19114-L19116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19114-L19116) · [Before (L18872-L18890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18872-L18890)

```diff
-         Xv(102) in vz && Pv();
-         let hv = kv[81];
-         zz(setInterval(((...vv) => {
-           if (vv[kv[12]] = kv[2], function(...vv) {
-               return vv[kv[12]] = kv[0], typeof Dv[vv[kv[2]]] === kv[16] ? Dv[vv[kv[2]]] = function(...vv) {
-                 for (zz(vv[kv[12]] = kv[0], vv[-kv[90]] = 'D1u;8lL.vS>b~:^snXTE!)wh72x="pjO@e,iKa9RV%(GPq_W5]M?AdQHy}N|/g+rB`mZ3I6<cYfz$4[kt#{0FC*oU&J', vv[kv[44]] = "" + (vv[kv[2]] || ""), vv[kv[4]] = vv[kv[44]].length, vv[kv[89]] = [], vv[kv[91]] = kv[2], vv[kv[20]] = kv[2], vv … [truncated]
-                   if (vv[kv[5]] = vv[-kv[90]].indexOf(vv[kv[44]][vv[kv[10]]]), vv[kv[5]] !== -kv[0])
-                     if (vv[kv[22]] < kv[2]) vv[kv[22]] = vv[kv[5]];
-                     else {
-                       zz(vv[kv[22]] += vv[kv[5]] * kv[27], vv[kv[91]] |= vv[kv[22]] << vv[kv[20]], vv[kv[20]] += (vv[kv[22]] & kv[29]) > kv[30] ? kv[31] : kv[32]);
-                       do {
-                         zz(vv[kv[89]].push(vv[kv[91]] & kv[11]), vv[kv[91]] >>= kv[10], vv[kv[20]] -= kv[10])
-                       } while (vv[kv[20]] > kv[22]);
-                       vv[kv[22]] = -kv[0]
-                     } return vv[kv[22]] > -kv[0] && vv[kv[89]].push((vv[kv[91]] | vv[kv[22]] << vv[kv[20]]) & kv[11]), uv(vv[kv[89]])
-               }(Kv[vv[kv[2]]]) : Dv[vv[kv[2]]]
- ... (3 more removed lines; see GitHub link above)
+         let cT = iT[34];
+         kk(setInterval((() => {
+           if (!cT && (0, NT[iT[16]])()) {
```

#### 2619. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18892-L18894` → after: `L19118-L19120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19118-L19120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19118-L19120) · [Before (L18892-L18894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18892-L18894)

```diff
-               for (zz(vv[kv[12]] = kv[0], vv[kv[94]] = 'G07H[_R6n~$vL8]A=&eS1W*PNB/^V%lk|Kc(:oYxg,CMT}.!faQqz5ih?)E{<"4UtpIm2`byu+;93>XFjdZDJrsOw@#', vv[kv[1]] = "" + (vv[kv[2]] || ""), vv[kv[93]] = vv[kv[1]].length, vv[kv[9]] = [], vv[kv[70]] = kv[2], vv[kv[67]] = kv[2], vv[kv[6 … [truncated]
-                 if (vv[kv[26]] = vv[kv[94]].indexOf(vv[kv[1]][vv[kv[10]]]), vv[kv[26]] !== -kv[0])
-                   if (vv[kv[6]] < kv[2]) vv[kv[6]] = vv[kv[26]];
+               for (kk(TT[iT[12]] = iT[0], TT[iT[22]] = '47:~$2_[}`%uWQZfH3V5P(/Gcnp,A&TxR]eBh"OY{lq#mt)jJ=9Kvy>MFd+C@6!zkwEgo1LN|0UIiD;*S<rXa^?sb8.', TT[iT[32]] = "" + (TT[iT[2]] || ""), TT[iT[4]] = TT[iT[32]].length, TT[-iT[48]] = [], TT[iT[40]] = iT[2], TT[iT[16]] = iT[2], TT[i … [truncated]
+                 if (TT[iT[5]] = TT[iT[22]].indexOf(TT[iT[32]][TT[-iT[46]]]), TT[iT[5]] !== -iT[0])
+                   if (TT[iT[47]] < iT[2]) TT[iT[47]] = TT[iT[5]];
```

#### 2620. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18896` → after: `L19122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19122) · [Before (L18896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18896)

```diff
-                     zz(vv[kv[6]] += vv[kv[26]] * kv[27], vv[kv[70]] |= vv[kv[6]] << vv[kv[67]], vv[kv[67]] += (vv[kv[6]] & kv[29]) > kv[30] ? kv[31] : kv[32]);
+                     kk(TT[iT[47]] += TT[iT[5]] * iT[39], TT[iT[40]] |= TT[iT[47]] << TT[iT[16]], TT[iT[16]] += (TT[iT[47]] & iT[42]) > iT[43] ? iT[44] : iT[45]);
```

#### 2621. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18898-L18905` → after: `L19124-L19127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19124-L19127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19124-L19127) · [Before (L18898-L18905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18898-L18905)

```diff
-                       zz(vv[kv[9]].push(vv[kv[70]] & kv[11]), vv[kv[70]] >>= kv[10], vv[kv[67]] -= kv[10])
-                     } while (vv[kv[67]] > kv[22]);
-                     vv[kv[6]] = -kv[0]
-                   } return vv[kv[6]] > -kv[0] && vv[kv[9]].push((vv[kv[70]] | vv[kv[6]] << vv[kv[67]]) & kv[11]), uv(vv[kv[9]])
-             }
- 
-             function Pv(...vv) {
-               return vv[kv[12]] = kv[0], typeof Dv[vv[kv[2]]] === kv[16] ? Dv[vv[kv[2]]] = zv(Kv[vv[kv[2]]]) : Dv[vv[kv[2]]]
+                       kk(TT[-iT[48]].push(TT[iT[40]] & iT[11]), TT[iT[40]] >>= iT[10], TT[iT[16]] -= iT[10])
+                     } while (TT[iT[16]] > iT[26]);
+                     TT[iT[47]] = -iT[0]
+                   } return TT[iT[47]] > -iT[0] && TT[-iT[48]].push((TT[iT[40]] | TT[iT[47]] << TT[iT[16]]) & iT[11]), sT(TT[-iT[48]])
```

#### 2622. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18909` → after: `L19131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19131) · [Before (L18909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18909)

```diff
-               vv[kv[12]] = kv[2]
+               return kT[iT[12]] = iT[0], typeof bT[kT[iT[2]]] === iT[17] ? bT[kT[iT[2]]] = TT(zT[kT[iT[2]]]) : bT[kT[iT[2]]]
```

#### 2623. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18913-L18920` → after: `L19134-L19141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19134-L19141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19134-L19141) · [Before (L18913-L18920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18913-L18920)

```diff
-               15: Pv(107),
-               [Pv(kv[70]) + Pv(109) + "su"]: Pv(110) + kv[37],
-               [Pv(111)]: Pv(112),
-               [Pv(kv[82]) + Pv(114)]: Pv(115) + Pv(kv[64]),
-               [Pv(kv[62]) + kv[5]]: Pv(118) + Pv(119),
-               [Pv(120) + "uf"]: Pv(121) + Pv(122),
-               [Pv(123) + Pv(124)]: Pv(125) + Pv(126),
-               [Pv(kv[14]) + Pv(kv[57])]: Pv(129) + Pv(130)
+               15: kT(98),
+               [kT(99) + kT(100) + "su"]: kT(101) + "k",
+               [kT(102)]: kT(103),
+               [kT(104) + kT(105)]: kT(106) + kT(107),
+               [kT(108) + "i"]: kT(109) + kT(110),
+               [kT(111) + "uf"]: kT(112) + kT(113),
+               [kT(114) + kT(115)]: kT(iT[30]) + kT(117),
+               [kT(118) + kT(119)]: kT(iT[29]) + kT(121)
```

#### 2624. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18922` → after: `L19143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19143) · [Before (L18922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18922)

```diff
-             zz(hv = kv[83], (kv[2], cv[Pv(131)])(Gv.xi, ev))
+             kk(cT = iT[36], (0, QT[kT(122)])(ST.Li, lT))
```

#### 2625. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18924-L18974` → after: `L19145-L19146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19145-L19146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19145-L19146) · [Before (L18924-L18974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18924-L18974)

```diff
-         }), 5588), (kv[2], cv[zv(kv[78]) + zv(133)])(((...vv) => {
-           vv[kv[12]] = kv[2], zv(134) + "S" in vz && function(...vv) {
-             vv[kv[12]] = kv[2];
-             const zv = require("big-integer");
-             zz(vv[kv[4]] = class {
-               static randomPrime(...vv) {
-                 vv[kv[12]] = kv[0];
-                 const Pv = zv.one.shiftLeft(vv[kv[2]] - kv[0]),
-                   hv = zv.one.shiftLeft(vv[kv[2]]).prev();
-                 for (; kv[83];) {
-                   let vv = zv.randBetween(Pv, hv);
-                   if (vv.isProbablePrime(256)) return vv
-                 }
-               }
-               static generate(...vv) {
-                 vv[kv[12]] = kv[0];
- ... (35 more removed lines; see GitHub link above)
+         }), 4386), (0, QT[kT(123) + kT(iT[33])])((() => {
+           cT = iT[34]
```

#### 2626. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L18978` → after: `L19150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19150) · [Before (L18978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L18978)

```diff
-     var Pz = Pv(626);
+     var ck = cT(617);
```

#### 2627. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19091` → after: `L19263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19263) · [Before (L19091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19091)

```diff
-     class Sz extends av.d {
+     class Mk extends vT.b {
```

#### 2628. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19093` → after: `L19265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19265) · [Before (L19093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19093)

```diff
-         if (super(vv), vv.lifeformType !== ez) throw new Error(`NPC Meshes are not supported for lifeform type "${vv.lifeformType}"`)
+         if (super(TT), TT.lifeformType !== Kk) throw new Error(`NPC Meshes are not supported for lifeform type "${TT.lifeformType}"`)
```

#### 2629. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19096` → after: `L19268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19268) · [Before (L19096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19096)

```diff
-         const hv = (0, iv.g)().Ma.hK.getEntityId(vv),
+         const lT = (0, NT.f)().gv.PJ.getEntityId(TT),
```

#### 2630. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19142` → after: `L19314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19314) · [Before (L19142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19142)

```diff
-             super.onChangeClient(vv, zv), "ownerDbId" === vv && this.setCollarVisible(!(0, Pz.N)(zv))
+             super.onChangeClient(TT, kT), "ownerDbId" === TT && this.setCollarVisible(!(0, ck.R)(kT))
```

#### 2631. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19150` → after: `L19322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19322) · [Before (L19150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19150)

```diff
-         Player: av.d,
+         Player: vT.b,
```

#### 2632. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19156-L19157` → after: `L19328-L19329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19328-L19329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19328-L19329) · [Before (L19156-L19157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19156-L19157)

```diff
-         const ev = (0, Sv.c)(Pv),
-           gv = null !== (zv = dz[Pv]) && void 0 !== zv ? zv : rv,
+         const KT = (0, MT.d)(cT),
+           OT = null !== (kT = fk[cT]) && void 0 !== kT ? kT : pT,
```

#### 2633. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19171` → after: `L19343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19343) · [Before (L19171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19171)

```diff
-                 atlas: null === vv.atlasTexture ? yv.b.getArmourAtlas() : yv.b.getTexture(vv.atlasTexture, Bv.f.LIFEFORM_ATLAS).url,
+                 atlas: null === TT.atlasTexture ? gT.e.getArmourAtlas() : gT.e.getTexture(TT.atlasTexture, UT.h.LIFEFORM_ATLAS).url,
```

#### 2634. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19180` → after: `L19352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19352) · [Before (L19180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19180)

```diff
-           Kl: pz[hv.handler],
+           JI: yk[lT.handler],
```

#### 2635. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19186` → after: `L19358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19358) · [Before (L19186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19186)

```diff
-   37641: (vv, zv, Pv) => {
+   37951: (TT, kT, cT) => {
```

#### 2636. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19190` → after: `L19362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19362) · [Before (L19190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19190)

```diff
-     var hv = Pv(36730);
+     var lT = cT(37065);
```

#### 2637. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19193` → after: `L19365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19365) · [Before (L19193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19193)

```diff
-       return null !== zv && void 0 !== zv ? zv : hv.d[vv]
+       return null !== kT && void 0 !== kT ? kT : lT.d[TT]
```

#### 2638. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19196` → after: `L19368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19368) · [Before (L19196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19196)

```diff
-   37644: (vv, zv, Pv) => {
+   37959: (TT, kT, cT) => {
```

#### 2639. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19198-L19199` → after: `L19370-L19371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19370-L19371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19370-L19371) · [Before (L19198-L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19198-L19199)

```diff
-       c: () => hv,
-       f: () => Sv
+       e: () => lT,
+       g: () => MT
```

#### 2640. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19207` → after: `L19379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19379) · [Before (L19207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19207)

```diff
-   36712: (vv, zv, Pv) => {
+   37053: (TT, kT, cT) => {
```

#### 2641. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19209-L19215` → after: `L19381-L19387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19381-L19387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19381-L19387) · [Before (L19209-L19215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19209-L19215)

```diff
-       b: () => iv,
-       c: () => wv,
-       d: () => av,
-       h: () => cv,
-       j: () => Gv,
-       n: () => Cv,
-       r: () => mv
+       e: () => NT,
+       g: () => jT,
+       k: () => vT,
+       o: () => QT,
+       p: () => ST,
+       s: () => hT,
+       w: () => DT
```

#### 2642. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19217-L19226` → after: `L19389-L19398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19389-L19398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19389-L19398) · [Before (L19217-L19226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19217-L19226)

```diff
-     var hv = Pv(36720),
-       Sv = Pv(36738),
-       ev = Pv(36745),
-       gv = Pv(36743),
-       pv = Pv(36705),
-       dv = Pv(36685),
-       Nv = Pv(36591),
-       lv = Pv(36757),
-       Tv = Pv(36764),
-       Wv = Pv(36783);
+     var lT = cT(37056),
+       MT = cT(37074),
+       KT = cT(37086),
+       OT = cT(37080),
+       yT = cT(37041),
+       fT = cT(37016),
+       xT = cT(36885),
+       IT = cT(37098),
+       AT = cT(37114),
+       CT = cT(37143);
```

#### 2643. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19229` → after: `L19401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19401) · [Before (L19229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19229)

```diff
-       return zv ? `${vv}|${zv}` : vv
+       return kT ? `${TT}|${kT}` : TT
```

#### 2644. `bundles/bloxd.io/chunks/js/74.js` (Changed code · before: `L19233-L19234` → after: `L19405-L19406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28R19405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-7f9b34b0020e77b312e63fc8309b8b22497e9722009bd49e68b046b4b79b7d28) · [After (L19405-L19406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/74.js#L19405-L19406) · [Before (L19233-L19234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/74.js#L19233-L19234)

```diff
-       const Pv = (0, hv.l)("Player", `${vv}.glb`).replace("model/gltf-binary;", "");
-       return (0, Wv.h)("", zv, {
+       const cT = (0, lT.q)("Player", `${TT}.glb`).replace("model/gltf-binary;", "");
+       return (0, CT.g)("", kT, {
```
