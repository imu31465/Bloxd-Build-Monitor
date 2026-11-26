# Changed — Bundle Modifications Report (Part 006 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `6 / 116` (**405** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (4047 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 281. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2431-L2433` → after: `L2786-L2788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2786-L2788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2786-L2788) · [Before (L2431-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2431-L2433)

```diff
-       const eV = Mx(VV.sK, 1) | Mx(VV.lK, 2) | Mx(VV.preventFallOffEdge, 4) | Mx(VV.alwaysApplyHorizFriction, 8) | Mx(VV.slideOnCollision, 16) | Mx(VV.rolledBackLastTick, 32) | Mx(VV.depenetrate, 64) | Mx(VV.inFluid, yx) | Mx(VV.hv, px) | Mx(VV.Lv, 512) | Mx(VV.wakeInFluid, nx),
-         xV = VV.IK;
-       return null === xV ? eV : "number" === typeof xV ? eV | Qx : null
+       const BH = oL(HH.HZ, 1) | oL(HH.pw, 2) | oL(HH.preventFallOffEdge, 4) | oL(HH.alwaysApplyHorizFriction, 8) | oL(HH.slideOnCollision, 16) | oL(HH.rolledBackLastTick, 32) | oL(HH.depenetrate, 64) | oL(HH.inFluid, tL) | oL(HH.fG, zL) | oL(HH.KG, 512) | oL(HH.wakeInFluid, EL),
+         LH = HH.uZ;
+       return null === LH ? BH : "number" === typeof LH ? BH | CL : null
```

#### 282. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2443` → after: `L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2798) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2443)

```diff
-       const nV = JV.Xv;
+       const CH = AH.MG;
```

#### 283. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2452` → after: `L2807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2807) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2452)

```diff
-       const wV = JV.ME;
+       const EH = AH.EW;
```

#### 284. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2454` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2809) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2454)

```diff
-       const ZV = JV.YH;
+       const XH = AH.bZ;
```

#### 285. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2456` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2811) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2456)

```diff
-       const vV = JV.UH;
+       const GH = AH.eZ;
```

#### 286. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2468` → after: `L2823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2823) · [Before (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2468)

```diff
-       return 65536 * (null !== (eV = VV.WH) && void 0 !== eV ? eV : 0) + xV
+       return 65536 * (null !== (BH = HH.iZ) && void 0 !== BH ? BH : 0) + LH
```

#### 287. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2472` → after: `L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2827) · [Before (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2472)

```diff
-       return Math.max(VV.ar.length, VV.ir.length)
+       return Math.max(HH.VY.length, HH.TY.length)
```

#### 288. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2511-L2513` → after: `L2866-L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2866-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2866-L2868) · [Before (L2511-L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2511-L2513)

```diff
-         const VV = this.mirror.cZ,
-           eV = VV.tr(),
-           xV = this.mirror.wasm.wasmView(Int32Array, VV.Fr(), 3 * eV);
+         const HH = this.mirror.cX,
+           BH = HH.zY(),
+           LH = this.mirror.wasm.wasmView(Int32Array, HH.CY(), 3 * BH);
```

#### 289. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2516` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2871) · [Before (L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2516)

```diff
-           const VV = `${xV[YV]},${xV[YV+1]},${xV[YV+2]}`;
+           const HH = `${LH[rH]},${LH[rH+1]},${LH[rH+2]}`;
```

#### 290. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2524-L2525` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2879-L2880) · [Before (L2524-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2524-L2525)

```diff
-       if (!eV.gH) throw new Error(`wasm physics: a pick ${xV}, and picks here run only in wasm`);
-       return VV.jsPicks++, eV.gH()
+       if (!BH.HJ) throw new Error(`wasm physics: a pick ${LH}, and picks here run only in wasm`);
+       return HH.jsPicks++, BH.HJ()
```

#### 291. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2552-L2553` → after: `L2907-L2908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2907-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2907-L2908) · [Before (L2552-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2552-L2553)

```diff
-         } = VV, pV = xV.cZ, QV = this.rounds;
-         QV.NZ();
+         } = HH, tH = LH.cX, zH = this.rounds;
+         zH.PX();
```

#### 292. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2557` → after: `L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2912) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2557)

```diff
-           const nV = pV.Pr();
+           const CH = tH.XY();
```

#### 293. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2566` → after: `L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2921) · [Before (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2566)

```diff
-           return VV.WK[0] = wV[0], VV.WK[1] = wV[1], VV.WK[2] = wV[2], VV.iK[0] = wV[3], VV.iK[1] = wV[4], VV.iK[2] = wV[5], VV.hK[0] = wV[6], VV.hK[1] = wV[7], VV.hK[2] = wV[8], !0
+           return HH.Iw[0] = EH[0], HH.Iw[1] = EH[1], HH.Iw[2] = EH[2], HH.Kw[0] = EH[3], HH.Kw[1] = EH[4], HH.Kw[2] = EH[5], HH.Jw[0] = EH[6], HH.Jw[1] = EH[7], HH.Jw[2] = EH[8], !0
```

#### 294. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2568` → after: `L2923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2923) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2568)

```diff
-         return pV.Zr(), ox
+         return tH.yG(), RL
```

#### 295. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2571` → after: `L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2926) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2571)

```diff
-         const eV = this.mirror.jZ,
+         const BH = this.mirror.YX,
```

#### 296. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2577` → after: `L2932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2932) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2577)

```diff
-           return VV ? VV(xV) && (null === (JV = eV.DH(xV)) || void 0 === JV || JV) : eV.Dr(xV)
+           return HH ? HH(LH) && (null === (AH = BH.LJ(LH)) || void 0 === AH || AH) : BH.PY(LH)
```

#### 297. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2582` → after: `L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2937) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2582)

```diff
-         }, this.mirror.cZ.Rr(JV.index, YV.kinds, YV.shapeOffsets, YV.shapes, this.mirror.unloadedId), JV.registryKey = xV, this.tables.set(VV, JV), JV.index) : -1
+         }, this.mirror.cX.vY(AH.index, rH.kinds, rH.shapeOffsets, rH.shapes, this.mirror.unloadedId), AH.registryKey = LH, this.tables.set(HH, AH), AH.index) : -1
```

#### 298. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2585` → after: `L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2940) · [Before (L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2585)

```diff
-         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.cZ.Ar(), 12), this.pickIoView.view()
+         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.cX.GY(), 12), this.pickIoView.view()
```

#### 299. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2600` → after: `L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2955) · [Before (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2600)

```diff
-         return JV[0] === eV[0] && JV[1] === eV[1] && JV[2] === eV[2] && Object.is(JV[3], xV[0]) && Object.is(JV[4], xV[1]) && Object.is(JV[5], xV[2]) || (JV[0] = eV[0], JV[1] = eV[1], JV[2] = eV[2], JV[3] = xV[0], JV[4] = xV[1], JV[5] = xV[2], VV.Mv(JV[0], JV[1], JV[2], JV[3], JV … [truncated]
+         return AH[0] === BH[0] && AH[1] === BH[1] && AH[2] === BH[2] && Object.is(AH[3], LH[0]) && Object.is(AH[4], LH[1]) && Object.is(AH[5], LH[2]) || (AH[0] = BH[0], AH[1] = BH[1], AH[2] = BH[2], AH[3] = LH[0], AH[4] = LH[1], AH[5] = LH[2], HH.xG(AH[0], AH[1], AH[2], AH[3], AH … [truncated]
```

#### 300. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2605-L2606` → after: `L2960-L2961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2960-L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2960-L2961) · [Before (L2605-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2605-L2606)

```diff
-         const yV = null !== (xV = null === (JV = eV.getDesyncedBlockCount) || void 0 === JV ? void 0 : JV.call(eV)) && void 0 !== xV ? xV : 0,
-           pV = 0 === yV ? 0 : null !== (YV = null === (UV = eV.getDesyncVersion) || void 0 === UV ? void 0 : UV.call(eV)) && void 0 !== YV ? YV : -1;
+         const hH = null !== (LH = null === (AH = BH.getDesyncedBlockCount) || void 0 === AH ? void 0 : AH.call(BH)) && void 0 !== LH ? LH : 0,
+           tH = 0 === hH ? 0 : null !== (rH = null === (SH = BH.getDesyncVersion) || void 0 === SH ? void 0 : SH.call(BH)) && void 0 !== rH ? rH : -1;
```

#### 301. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2612` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2967) · [Before (L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2612)

```diff
-           }(eV.iH, this.types) && fx(eV.eJ, this.walkRects) && fx(eV.lH, this.cantRects)) return this.valid;
+           }(BH.GJ, this.types) && wL(BH.TA, this.walkRects) && wL(BH.QJ, this.cantRects)) return this.valid;
```

#### 302. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2614-L2617` → after: `L2969-L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2969-L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L2969-L2972) · [Before (L2614-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2614-L2617)

```diff
-         for (const nV of eV.iH) "number" === typeof nV && this.types.push(nV);
-         if (mx(eV.eJ, this.walkRects), mx(eV.lH, this.cantRects), 0 === yV && 0 === this.types.length && 0 === this.walkRects.length && 0 === this.cantRects.length) return this.nonEmpty && (VV.Nv(), this.nonEmpty = !1), this.valid = !0, !0;
-         const QV = 0 === yV ? Lx : this.packDesync(eV, yV, pV);
-         return this.valid = null !== QV, QV && (VV.zv(QV, Float64Array.from(this.types), Float64Array.from(this.walkRects), Float64Array.from(this.cantRects)), this.nonEmpty = !0), this.valid
+         for (const CH of BH.GJ) "number" === typeof CH && this.types.push(CH);
+         if (ZL(BH.TA, this.walkRects), ZL(BH.QJ, this.cantRects), 0 === hH && 0 === this.types.length && 0 === this.walkRects.length && 0 === this.cantRects.length) return this.nonEmpty && (HH.WG(), this.nonEmpty = !1), this.valid = !0, !0;
+         const zH = 0 === hH ? DL : this.packDesync(BH, hH, tH);
+         return this.valid = null !== zH, zH && (HH.vG(zH, Float64Array.from(this.types), Float64Array.from(this.walkRects), Float64Array.from(this.cantRects)), this.nonEmpty = !0), this.valid
```

#### 303. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2662` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3017) · [Before (L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2662)

```diff
-         this.wasm = VV, this.jZ = eV, this.options = xV, this.label = JV, this.handling = YV, this.cZ = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.ik = !1, this.picks = new cx(this), this. … [truncated]
+         this.wasm = HH, this.YX = BH, this.options = LH, this.label = AH, this.handling = rH, this.cX = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.Mu = !1, this.picks = new jL(this), this. … [truncated]
```

#### 304. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2670` → after: `L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3025) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2670)

```diff
-           return Se(xV, JV, pV, `${YV} mirror`, "creating it", UV), null
+           return iB(LH, AH, tH, `${rH} mirror`, "creating it", SH), null
```

#### 305. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2677` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3032) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2677)

```diff
-         return !this.ik && !this.broken && this.wasm.isBloxdWasmReady()
+         return !this.Mu && !this.broken && this.wasm.isBloxdWasmReady()
```

#### 306. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2686` → after: `L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3041) · [Before (L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2686)

```diff
-         return this.usable() && !this.unsupported && Rx(this.jZ) === this.registryState
+         return this.usable() && !this.unsupported && KL(this.YX) === this.registryState
```

#### 307. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2690` → after: `L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3045) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2690)

```diff
-         const xV = this.cZ.tr();
+         const LH = this.cX.zY();
```

#### 308. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2692-L2693` → after: `L3047-L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3047-L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3047-L3048) · [Before (L2692-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2692-L2693)

```diff
-         const JV = Array.from(this.wasm.wasmView(Int32Array, this.cZ.Fr(), 3 * xV));
-         this.cZ.Zr();
+         const AH = Array.from(this.wasm.wasmView(Int32Array, this.cX.CY(), 3 * LH));
+         this.cX.yG();
```

#### 309. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2699` → after: `L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3054) · [Before (L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2699)

```diff
-             this.cZ.qr(JV[UV], JV[UV + 1], JV[UV + 2]), this.unreadable.set(`${JV[UV]},${JV[UV+1]},${JV[UV+2]}`, YV)
+             this.cX.tY(AH[SH], AH[SH + 1], AH[SH + 2]), this.unreadable.set(`${AH[SH]},${AH[SH+1]},${AH[SH+2]}`, rH)
```

#### 310. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2703-L2704` → after: `L3058-L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3058-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3058-L3059) · [Before (L2703-L2704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2703-L2704)

```diff
-         const [VV, eV, xV] = this.cZ.lv(), JV = this.unreadable.get(`${VV},${eV},${xV}`);
-         if (!JV) throw new Error(`wasm physics: a read threw in chunk ${VV},${eV},${xV}, which was never marked unreadable`);
+         const [HH, BH, LH] = this.cX.lG(), AH = this.unreadable.get(`${HH},${BH},${LH}`);
+         if (!AH) throw new Error(`wasm physics: a read threw in chunk ${HH},${BH},${LH}, which was never marked unreadable`);
```

#### 311. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2717` → after: `L3072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3072) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2717)

```diff
-         return this.picks.Pr(VV, eV)
+         return this.picks.XY(HH, BH)
```

#### 312. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2723` → after: `L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3078) · [Before (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2723)

```diff
-         this.usable() && this.cZ.zr(VV, eV, xV, JV)
+         this.usable() && this.cX.WY(HH, BH, LH, AH)
```

#### 313. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2726` → after: `L3081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3081) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2726)

```diff
-         this.usable() && this.cZ.kr(VV, eV, xV)
+         this.usable() && this.cX.LY(HH, BH, LH)
```

#### 314. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2729` → after: `L3084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3084) · [Before (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2729)

```diff
-         this.usable() && this.cZ.rr()
+         this.usable() && this.cX.BY()
```

#### 315. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2732` → after: `L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3087) · [Before (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2732)

```diff
-         const YV = this.wasm.wasmView(Uint16Array, this.cZ.nr(VV, eV, xV), qx),
+         const rH = this.wasm.wasmView(Uint16Array, this.cX.iG(HH, BH, LH), PL),
```

#### 316. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2741` → after: `L3096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3096) · [Before (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2741)

```diff
-         if (this.ik || !de(this.wasm)) return {
+         if (this.Mu || !yB(this.wasm)) return {
```

#### 317. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2747` → after: `L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3102) · [Before (L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2747)

```diff
-         const VV = this.cZ.lr();
+         const HH = this.cX.bY();
```

#### 318. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2749-L2750` → after: `L3104-L3105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3104-L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3104-L3105) · [Before (L2749-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2749-L2750)

```diff
-           resident: this.cZ.Mr(),
-           known: this.cZ.Br(),
+           resident: this.cX.QY(),
+           known: this.cX.SY(),
```

#### 319. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2759` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3114) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2759)

```diff
-         const VV = this.jZ,
+         const HH = this.YX,
```

#### 320. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2763` → after: `L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3118) · [Before (L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2763)

```diff
-         const xV = Dx(gx(VV), (eV => VV.Dr(eV)));
+         const LH = eL(cL(HH), (BH => HH.PY(BH)));
```

#### 321. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2766-L2767` → after: `L3121-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3121-L3122) · [Before (L2766-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2766-L2767)

```diff
-           for (let xV = 0; xV < eV.length; xV++) eV[xV] = VV.ir[xV] ? 1 : 0;
-           this.cZ.Wr(xV.kinds, xV.shapeOffsets, xV.shapes, eV);
+           for (let LH = 0; LH < BH.length; LH++) BH[LH] = HH.TY[LH] ? 1 : 0;
+           this.cX.xY(LH.kinds, LH.shapeOffsets, LH.shapes, BH);
```

#### 322. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2769-L2770` → after: `L3124-L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3124-L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3124-L3125) · [Before (L2769-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2769-L2770)

```diff
-           for (let xV = 0; xV < JV.length; xV++) JV[xV] = VV.ar[xV] ? 1 : 0;
-           this.cZ.hr(JV)
+           for (let LH = 0; LH < AH.length; LH++) AH[LH] = HH.VY[LH] ? 1 : 0;
+           this.cX.OY(AH)
```

#### 323. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2775` → after: `L3130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3130) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2775)

```diff
-         if (this.options.cZ) return;
+         if (this.options.cX) return;
```

#### 324. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2777` → after: `L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3132) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2777)

```diff
-         VV !== this.epoch && (this.epoch = VV, this.cZ.Gr(VV), this.cZ.evict(this.options.maxResident, Math.max(0, VV - this.options.idleSeconds)))
+         HH !== this.epoch && (this.epoch = HH, this.cX.MY(HH), this.cX.evict(this.options.maxResident, Math.max(0, HH - this.options.idleSeconds)))
```

#### 325. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2780` → after: `L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3135) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2780)

```diff
-         this.ik || (this.ik = !0, this.options.cZ || Oe(this.wasm, this.cZ))
+         this.Mu || (this.Mu = !0, this.options.cX || HL(this.wasm, this.cX))
```

#### 326. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2790` → after: `L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3145) · [Before (L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2790)

```diff
-           cZ: eV
+           cX: BH
```

#### 327. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2826` → after: `L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3181) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2826)

```diff
-         xV[JV] = eV ? xV[JV] | VV : xV[JV] & ~VV
+         LH[AH] = BH ? LH[AH] | HH : LH[AH] & ~HH
```

#### 328. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2960` → after: `L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3315) · [Before (L2960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2960)

```diff
-         dx(this.ME, VV)
+         yL(this.EW, HH)
```

#### 329. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2972` → after: `L3327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3327) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2972)

```diff
-         dx(this.YH, VV)
+         yL(this.bZ, HH)
```

#### 330. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2978` → after: `L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3333) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2978)

```diff
-         dx(this.UH, VV)
+         yL(this.eZ, HH)
```

#### 331. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2985` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3340) · [Before (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L2985)

```diff
-     var Ox = xV(40861);
+     var HA = LH(40621);
```

#### 332. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3007` → after: `L3362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3362) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3007)

```diff
-         rV[kV + 0] = JV, rV[kV + 1] = YV, rV[kV + 2] = UV, rV[kV + 3] = yV, rV[kV + 4] = -1, rV[kV + 5] = -1, rV[kV + 6] = -1, rV[kV + 7] = -1, rV[kV + 8] = 0, rV[kV + 9] = 10, rV[kV + Vx] = 0, rV[kV + Vx + 1] = 0, rV[kV + Vx + 2] = 0, rV[kV + 13] = 0, rV[kV + ex] = 17 | (QV ? 2  … [truncated]
+         YH[uH + 0] = AH, YH[uH + 1] = rH, YH[uH + 2] = SH, YH[uH + 3] = hH, YH[uH + 4] = -1, YH[uH + 5] = -1, YH[uH + 6] = -1, YH[uH + 7] = -1, YH[uH + 8] = 0, YH[uH + 9] = 10, YH[uH + BL] = 0, YH[uH + BL + 1] = 0, YH[uH + BL + 2] = 0, YH[uH + 13] = 0, YH[uH + LL] = 17 | (zH ? 2  … [truncated]
```

#### 333. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3058` → after: `L3413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3413) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3058)

```diff
-     eJ.prototype.loadFromCopy = oe.prototype.loadFromCopy, eJ.prototype.loadStateFromCopy = oe.prototype.loadStateFromCopy, eJ.prototype.setPosition = oe.prototype.setPosition, eJ.prototype.YF = oe.prototype.YF, eJ.prototype.applyForce = oe.prototype.applyForce, eJ.prototype.appl … [truncated]
+     LA.prototype.loadFromCopy = RB.prototype.loadFromCopy, LA.prototype.loadStateFromCopy = RB.prototype.loadStateFromCopy, LA.prototype.setPosition = RB.prototype.setPosition, LA.prototype.hT = RB.prototype.hT, LA.prototype.applyForce = RB.prototype.applyForce, LA.prototype.appl … [truncated]
```

#### 334. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3061` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3416) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3061)

```diff
-         this.wasm = VV, this.physics = eV, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(VV.getBloxdWasm().UV)
+         this.wasm = HH, this.physics = BH, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(HH.getBloxdWasm().LH)
```

#### 335. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3090` → after: `L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3445) · [Before (L3090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3090)

```diff
-         const VV = this.handle.xv(),
+         const HH = this.handle.dX(),
```

#### 336. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3092` → after: `L3447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3447) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3092)

```diff
-         this.f64Pages.push(new eV(Float64Array, this.handle.yv(VV), 4096)), this.f32Pages.push(new eV(Float32Array, this.handle.Uv(VV), 5376));
+         this.f64Pages.push(new BH(Float64Array, this.handle.iX(HH), 4096)), this.f32Pages.push(new BH(Float32Array, this.handle.JX(HH), 5376));
```

#### 337. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3162` → after: `L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3517) · [Before (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3162)

```diff
-         return null !== (eV = this.slotOfBody.get(VV)) && void 0 !== eV ? eV : -1
+         return null !== (BH = this.slotOfBody.get(HH)) && void 0 !== BH ? BH : -1
```

#### 338. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3175-L3176` → after: `L3530-L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3530-L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3530-L3531) · [Before (L3175-L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3175-L3176)

```diff
-         if (this.rows.invalidate(), this.isStaging.length < VV.Jv) {
-           const eV = new Uint8Array(VV.Jv);
+         if (this.rows.invalidate(), this.isStaging.length < HH.aX) {
+           const BH = new Uint8Array(HH.aX);
```

#### 339. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3185` → after: `L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3540) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3185)

```diff
-             const UV = JV.Xv;
+             const SH = AH.MG;
```

#### 340. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3196-L3198` → after: `L3551-L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3551-L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3551-L3553) · [Before (L3196-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3196-L3198)

```diff
-             const nV = JV.ME,
-               wV = JV.YH,
-               ZV = JV.UH,
+             const CH = AH.EW,
+               EH = AH.bZ,
+               XH = AH.eZ,
```

#### 341. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3203` → after: `L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3558) · [Before (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3203)

```diff
-                 eZ: kV,
+                 rE: uH,
```

#### 342. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3207` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3562) · [Before (L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3207)

```diff
-                 Sv: jV,
+                 jG: xH,
```

#### 343. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3218` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3573) · [Before (L3218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3218)

```diff
-             VV[NV + 0] = kV, VV[NV + 1] = bV, VV[NV + 2] = EV, VV[NV + 3] = BV, VV[NV + 4] = jV, VV[NV + 5] = qV, VV[NV + 6] = tV, VV[NV + 7] = FV, VV[NV + 8] = TV, VV[NV + 9] = PV, VV[NV + Vx] = rV[0], VV[NV + Vx + 1] = rV[1], VV[NV + Vx + 2] = rV[2], VV[NV + 13] = AV & Qx ? JV. … [truncated]
+             HH[bH + 0] = uH, HH[bH + 1] = QH, HH[bH + 2] = WH, HH[bH + 3] = MH, HH[bH + 4] = xH, HH[bH + 5] = vH, HH[bH + 6] = PH, HH[bH + 7] = TH, HH[bH + 8] = UH, HH[bH + 9] = VH, HH[bH + BL] = YH[0], HH[bH + BL + 1] = YH[1], HH[bH + BL + 2] = YH[2], HH[bH + 13] = OH & CL ? AH. … [truncated]
```

#### 344. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3258` → after: `L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3613) · [Before (L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3258)

```diff
-         this.physics = VV, this.kind = eV, this.wasm = xV, this.rollsBack = JV, this.hostStore = YV, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
+         this.physics = HH, this.kind = BH, this.wasm = LH, this.rollsBack = AH, this.hostStore = rH, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
```

#### 345. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3260` → after: `L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3615) · [Before (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3260)

```diff
-           return eV >= 0 ? eV : this.staging.ZN(VV)
+           return BH >= 0 ? BH : this.staging.tV(HH)
```

#### 346. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3280` → after: `L3635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3635) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3280)

```diff
-         return "string" === typeof eV ? eV : VV && !VV(eV, this.ZN, !0) ? "has a lookup context wasm can't take (a world offset or walk-through override)" : eV
+         return "string" === typeof BH ? BH : HH && !HH(BH, this.tV, !0) ? "has a lookup context wasm can't take (a world offset or walk-through override)" : BH
```

#### 347. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3296` → after: `L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3651) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3296)

```diff
-           this.current = new(this.wasm.getBloxdWasm().PhysicsEngine)(eV.Sv, eV.fluidDrag, eV.Iv, xV[0], xV[1], xV[2], eV.minBounceImpulse, Bx[this.kind]), this.options.fill(NaN), this.listView = null, this.listed = 0, this.listSynced = !1, this.rollbackSlot = -1
+           this.current = new(this.wasm.getBloxdWasm().PhysicsEngine)(BH.jG, BH.fluidDrag, BH.nG, LH[0], LH[1], LH[2], BH.minBounceImpulse, xL[this.kind]), this.options.fill(NaN), this.listView = null, this.listed = 0, this.listSynced = !1, this.rollbackSlot = -1
```

#### 348. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3301` → after: `L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3656) · [Before (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3301)

```diff
-         if (VV.gv() < eV && (VV.ov(Math.max(eV, 2 * VV.gv(), 16)), this.listView = null), !this.listView) {
+         if (HH.VG() < BH && (HH.oG(Math.max(BH, 2 * HH.VG(), 16)), this.listView = null), !this.listView) {
```

#### 349. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3303` → after: `L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3658) · [Before (L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3303)

```diff
-           this.listView = new eV(Uint32Array, VV.Dv(), VV.gv()), this.impactsView = new eV(Float64Array, VV.Rv(), 3), this.resultView = new eV(Float64Array, VV.cv(), 5)
+           this.listView = new BH(Uint32Array, HH.OG(), HH.VG()), this.impactsView = new BH(Float64Array, HH.UG(), 3), this.resultView = new BH(Float64Array, HH.IG(), 5)
```

#### 350. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3311` → after: `L3666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3666) · [Before (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3311)

```diff
-           const VV = new Uint32Array(this.store.Jv);
+           const HH = new Uint32Array(this.store.aX);
```

#### 351. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3323` → after: `L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3678) · [Before (L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3323)

```diff
-           let QV = this.ZN(pV);
+           let zH = this.tV(tH);
```

#### 352. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3336` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3691) · [Before (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3336)

```diff
-         return this.reserveList(eV, JV), this.staging.clear(), null === this.fillList(VV, !0) ? `lists a body twice, or ${QJ}` : (this.listSynced && JV === this.listed || (eV.sv(JV, xV.handle), this.listSynced = !0, this.listed = JV), this.listReleases = xV.releases, this.setRoll … [truncated]
+         return this.reserveList(BH, AH), this.staging.clear(), null === this.fillList(HH, !0) ? `lists a body twice, or ${CA}` : (this.listSynced && AH === this.listed || (BH.NG(AH, LH.handle), this.listSynced = !0, this.listed = AH), this.listReleases = LH.releases, this.setRoll … [truncated]
```

#### 353. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3342` → after: `L3697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3697) · [Before (L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3342)

```diff
-         xV < 0 && (xV = this.staging.rollbackSlot()), xV !== this.rollbackSlot && (VV.er(xV, eV.handle), this.rollbackSlot = xV)
+         LH < 0 && (LH = this.staging.rollbackSlot()), LH !== this.rollbackSlot && (HH.wG(LH, BH.handle), this.rollbackSlot = LH)
```

#### 354. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3353` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3708) · [Before (L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3353)

```diff
-         return this.reserveList(JV, eV), null === this.fillList(VV, !1) ? 2 : (JV.sv(eV, xV.handle), this.listSynced = !0, this.listed = eV, this.listReleases = xV.releases, 1)
+         return this.reserveList(AH, BH), null === this.fillList(HH, !1) ? 2 : (AH.NG(BH, LH.handle), this.listSynced = !0, this.listed = BH, this.listReleases = LH.releases, 1)
```

#### 355. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3358` → after: `L3713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3713) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3358)

```diff
-           const JV = this.ZN(VV[xV]);
+           const AH = this.tV(HH[LH]);
```

#### 356. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3373` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3728) · [Before (L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3373)

```diff
-         Object.is(eV[0], VV.Sv) && Object.is(eV[1], VV.fluidDrag) && Object.is(eV[2], VV.Iv) && Object.is(eV[3], xV[0]) && Object.is(eV[4], xV[1]) && Object.is(eV[5], xV[2]) && Object.is(eV[6], VV.minBounceImpulse) || (eV[0] = VV.Sv, eV[1] = VV.fluidDrag, eV[2] = VV.Iv, eV[3] = x … [truncated]
+         Object.is(BH[0], HH.jG) && Object.is(BH[1], HH.fluidDrag) && Object.is(BH[2], HH.nG) && Object.is(BH[3], LH[0]) && Object.is(BH[4], LH[1]) && Object.is(BH[5], LH[2]) && Object.is(BH[6], HH.minBounceImpulse) || (BH[0] = HH.jG, BH[1] = HH.fluidDrag, BH[2] = HH.nG, BH[3] = L … [truncated]
```

#### 357. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3383` → after: `L3738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3738) · [Before (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3383)

```diff
-         this.physics = VV, this.host = eV, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
+         this.physics = HH, this.host = BH, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
```

#### 358. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3394` → after: `L3749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3749) · [Before (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3394)

```diff
-         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${JV} physics ${VV}, and it runs only in wasm here`);
+         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${AH} physics ${HH}, and it runs only in wasm here`);
```

#### 359. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3396` → after: `L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3751) · [Before (L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3396)

```diff
-         Ie(VV, (() => new Error(`wasm physics: ${JV} physics ${VV}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
+         pB(HH, (() => new Error(`wasm physics: ${AH} physics ${HH}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
```

#### 360. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3398` → after: `L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3753) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3398)

```diff
-         YV - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = YV, this.stoppedMs += xV, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${VV}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
+         rH - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = rH, this.stoppedMs += LH, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${HH}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
```

#### 361. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3406` → after: `L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3761) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3406)

```diff
-         const eV = new Error(`wasm physics: ${this.host.kind} physics ${VV}, so it can't tick until the page reloads`);
+         const BH = new Error(`wasm physics: ${this.host.kind} physics ${HH}, so it can't tick until the page reloads`);
```

#### 362. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3408` → after: `L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3763) · [Before (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3408)

```diff
-         (console.error(eV), this.host.failure.lost) ? this.host.failure.lost(eV): null === (xV = (JV = this.host.failure).EZ) || void 0 === xV || xV.call(JV, eV)
+         (console.error(BH), this.host.failure.lost) ? this.host.failure.lost(BH): null === (LH = (AH = this.host.failure).XX) || void 0 === LH || LH.call(AH, BH)
```

#### 363. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3441-L3442` → after: `L3796-L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3796-L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3796-L3797) · [Before (L3441-L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3441-L3442)

```diff
-         if (!this.rollsBack) return VV.fv || VV.xH ? "was given unloaded hooks" : null;
-         return (0, me.j)(VV.fv) === this.host.kind && "cell" === (0, me.j)(VV.xH) ? null : "had an unloaded hook replaced"
+         if (!this.rollsBack) return HH.cG || HH.xZ ? "was given unloaded hooks" : null;
+         return (0, ZB.i)(HH.cG) === this.host.kind && "cell" === (0, ZB.i)(HH.xZ) ? null : "had an unloaded hook replaced"
```

#### 364. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3455` → after: `L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3810) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3455)

```diff
-           if (YV = eV, 5 === YV.Av(VV, this.bodies.bodyStore.handle)) return QJ
+           if (rH = BH, 5 === rH.QG(HH, this.bodies.bodyStore.handle)) return CA
```

#### 365. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3490` → after: `L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3845) · [Before (L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3490)

```diff
-           const UV = VV.resume(eV.cZ, xV);
+           const SH = HH.resume(BH.cX, LH);
```

#### 366. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3492` → after: `L3847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3847) · [Before (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3492)

```diff
-             if (this.host.stats.missRounds++, ++JV > 4096) return eV.cZ.Zr(), "missed chunks for 4096 rounds";
+             if (this.host.stats.missRounds++, ++AH > 4096) return BH.cX.yG(), "missed chunks for 4096 rounds";
```

#### 367. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3498` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3853) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3498)

```diff
-           if (3 === UV) throw new He(new Error(Xx(VV.Wv())));
+           if (3 === SH) throw new aB(new Error(mL(HH.TG())));
```

#### 368. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3501` → after: `L3856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3856) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3501)

```diff
-           if (pV.hv) {
+           if (tH.fG) {
```

#### 369. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3505` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3860) · [Before (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3505)

```diff
-               pV.hv(this.impacts)
+               tH.fG(this.impacts)
```

#### 370. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3515` → after: `L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3870) · [Before (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3515)

```diff
-           if (null !== QV) return `${QV} in an onCollide handler`;
+           if (null !== zH) return `${zH} in an onCollide handler`;
```

#### 371. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3543` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3898) · [Before (L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3543)

```diff
-             xV.Lv && xV.Lv()
+             LH.KG && LH.KG()
```

#### 372. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3557-L3558` → after: `L3912-L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3912-L3913) · [Before (L3557-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3557-L3558)

```diff
-         const UV = !eV.Xv;
-         return UV && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > xV.length) && (VV.Cv(this.committedCursor, this.tickLen, UV), !(this.host.prepare && !this.host.prepare(VV, JV.ZN, 0 !== YV)) && (!!JV.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
+         const SH = !BH.MG;
+         return SH && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > LH.length) && (HH.kG(this.committedCursor, this.tickLen, SH), !(this.host.prepare && !this.host.prepare(HH, AH.tV, 0 !== rH)) && (!!AH.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
```

#### 373. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3563` → after: `L3918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3918) · [Before (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3563)

```diff
-         this.iv = VV, this.physics = eV, this.options = xV, this.stats = {
+         this.bG = HH, this.physics = BH, this.options = LH, this.stats = {
```

#### 374. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3614` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3969) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3614)

```diff
-           EZ: xV.reportError,
+           XX: LH.reportError,
```

#### 375. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3627-L3628` → after: `L3982-L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L3982-L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L3982-L3983) · [Before (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3627-L3628)

```diff
-               const xV = this.iv.sF.uH(this.iv.bD);
-               VV.mv(xV ? eV(xV) : -1)
+               const LH = this.bG.pT.xJ(this.bG.lF);
+               HH.eG(LH ? BH(LH) : -1)
```

#### 376. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3675` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4030) · [Before (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3675)

```diff
-         this.driver.iZ(VV)
+         this.driver.IX(HH)
```

#### 377. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3686` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4041) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3686)

```diff
-         return yV.jH(pV, VV, eV, xV, JV, YV, UV)
+         return hH.sZ(tH, HH, BH, LH, AH, rH, SH)
```

#### 378. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3697` → after: `L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4052) · [Before (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3697)

```diff
-           return VV = eV, this.physics.rollbackBody = le(((VV, xV, JV, YV, UV, yV, pV) => eV.jH(eV.allocate(), VV, xV, JV, YV, UV, yV, pV))), eV
+           return HH = BH, this.physics.rollbackBody = FB(((HH, LH, AH, rH, SH, hH, tH) => BH.sZ(BH.allocate(), HH, LH, AH, rH, SH, hH, tH))), BH
```

#### 379. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3712` → after: `L4067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4067) · [Before (L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3712)

```diff
-           return VV ? JV && !(0, me.d)(JV) ? ax(eV, xV, "has a block test not marked markIdOnlyBlockTest") : !YV || hx(YV[0]) && hx(YV[1]) && hx(YV[2]) ? VV.Pr(eV, xV) : ax(eV, xV, "has an offset that isn't whole cells") : ax(eV, xV, "has no mirror")
+           return HH ? AH && !(0, ZB.d)(AH) ? NL(BH, LH, "has a block test not marked markIdOnlyBlockTest") : !rH || nL(rH[0]) && nL(rH[1]) && nL(rH[2]) ? HH.XY(BH, LH) : NL(BH, LH, "has an offset that isn't whole cells") : NL(BH, LH, "has no mirror")
```

#### 380. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3731` → after: `L4086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4086) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3731)

```diff
-             const xV = VV.Yr(eV.cZ, YV[0], YV[1], YV[2], UV[0], UV[1], UV[2], JV[0], JV[1], JV[2]);
+             const LH = HH.dG(BH.cX, rH[0], rH[1], rH[2], SH[0], SH[1], SH[2], AH[0], AH[1], AH[2]);
```

#### 381. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3735` → after: `L4090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4090) · [Before (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3735)

```diff
-           eV.cZ.Zr()
+           BH.cX.yG()
```

#### 382. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3743` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4098) · [Before (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3743)

```diff
-         return null !== (VV = null === (eV = this.mirror) || void 0 === eV ? void 0 : eV.residency()) && void 0 !== VV ? VV : null
+         return null !== (HH = null === (BH = this.mirror) || void 0 === BH ? void 0 : BH.residency()) && void 0 !== HH ? HH : null
```

#### 383. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3746-L3747` → after: `L4101-L4102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4101-L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4101-L4102) · [Before (L3746-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3746-L3747)

```diff
-         const eV = this.iv.Vr;
-         return this.context.setOffsets(VV, eV, eV) && this.context.uploadOverrides(VV, this.iv.cZ)
+         const BH = this.bG.DG;
+         return this.context.setOffsets(HH, BH, BH) && this.context.uploadOverrides(HH, this.bG.cX)
```

#### 384. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3756-L3757` → after: `L4111-L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4111-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4111-L4112) · [Before (L3756-L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3756-L3757)

```diff
-         const eV = this.iv.cZ.Bb.physicsWorld;
-         return eV && Px(this.options.wasm) ? (this.mirror = new ux(this.options.wasm, eV, this.iv.jZ, this.failure), this.mirror) : null
+         const BH = this.bG.cX.pu.physicsWorld;
+         return BH && OL(this.options.wasm) ? (this.mirror = new sL(this.options.wasm, BH, this.bG.YX, this.failure), this.mirror) : null
```

#### 385. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3763` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4118) · [Before (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3763)

```diff
-     var vJ = xV(39546);
+     var YA = LH(39270);
```

#### 386. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3773` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4128) · [Before (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3773)

```diff
-         takeRefusedAllocation: null !== (eV = VV.takeBloxdWasmRefusedAllocation) && void 0 !== eV ? eV : () => 0
+         takeRefusedAllocation: null !== (BH = HH.takeBloxdWasmRefusedAllocation) && void 0 !== BH ? BH : () => 0
```

#### 387. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3783-L3785` → after: `L4138-L4140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4138-L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4138-L4140) · [Before (L3783-L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3783-L3785)

```diff
-         const pV = null !== (JV = null === (YV = (UV = yV.bindings).HQ) || void 0 === YV ? void 0 : YV.call(UV)) && void 0 !== JV ? JV : [];
-         if (!(pV.length === bJ.length && bJ.every(((VV, eV) => pV[eV] === VV)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(pV).join()}] are not [${bJ.join()}]`);
-         return new EJ(yV, new yV.bindings.sx, eV, xV)
+         const tH = null !== (AH = null === (rH = (SH = hH.bindings).IS) || void 0 === rH ? void 0 : rH.call(SH)) && void 0 !== AH ? AH : [];
+         if (!(tH.length === WA.length && WA.every(((HH, BH) => tH[BH] === HH)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(tH).join()}] are not [${WA.join()}]`);
+         return new MA(hH, new hH.bindings.Or, BH, LH)
```

#### 388. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3788` → after: `L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4143) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3788)

```diff
-         this.runtime = VV, this.handle = eV, this.jZ = xV, this.reportTrap = JV, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new VV.BufferView(Uint8Array, eV.Ir(!1), kJ), this.lightU16 = new VV.BufferView(Uint16Array, eV.Ir(!0), kJ)
+         this.runtime = HH, this.handle = BH, this.YX = LH, this.reportTrap = AH, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new HH.BufferView(Uint8Array, BH.cY(!1), QA), this.lightU16 = new HH.BufferView(Uint16Array, BH.cY(!0), QA)
```

#### 389. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3791` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4146) · [Before (L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3791)

```diff
-         return this.attempt((() => (this.syncRegistry(), qJ(this.handle.Or(eV.cZ, eV.slot, VV)), this.scan(eV))))
+         return this.attempt((() => (this.syncRegistry(), PA(this.handle.qY(BH.cX, BH.slot, HH)), this.scan(BH))))
```

#### 390. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3797` → after: `L4152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4152) · [Before (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3797)

```diff
-         return this.attempt((() => (qJ(this.handle.dr(VV, eV)), eV ? this.lightU16.view().slice() : this.lightU8.view().slice())))
+         return this.attempt((() => (PA(this.handle.eY(HH, BH)), BH ? this.lightU16.view().slice() : this.lightU8.view().slice())))
```

#### 391. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3800` → after: `L4155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4155) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3800)

```diff
-         const eV = this.handle.scan(VV.cZ, VV.slot),
+         const BH = this.handle.scan(HH.cX, HH.slot),
```

#### 392. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3804-L3807` → after: `L4159-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4159-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4159-L4162) · [Before (L3804-L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3804-L3807)

```diff
-           YG: this.runtime.view(Uint16Array, this.handle.Vk(), 32).slice(),
-           yG: 1 === xV || 0 !== xV && void 0,
-           XZ: 0 !== (4 & eV),
-           JG: this.runtime.view(Uint16Array, this.handle.xk(), JV).slice()
+           Vk: this.runtime.view(Uint16Array, this.handle.gY(), 32).slice(),
+           Nk: 1 === LH || 0 !== LH && void 0,
+           TX: 0 !== (4 & BH),
+           Wk: this.runtime.view(Uint16Array, this.handle.NY(), AH).slice()
```

#### 393. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3818` → after: `L4173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4173) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3818)

```diff
-             xV = new Error(`Chunk ingest trapped in wasm (${VV})`);
+             LH = new Error(`Chunk ingest trapped in wasm (${HH})`);
```

#### 394. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3824-L3825` → after: `L4179-L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4179-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4179-L4180) · [Before (L3824-L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3824-L3825)

```diff
-         const eV = this.jZ,
-           xV = 65536 * (null !== (VV = eV.WH) && void 0 !== VV ? VV : 0) + eV.tb.length;
+         const BH = this.YX,
+           LH = 65536 * (null !== (HH = BH.iZ) && void 0 !== HH ? HH : 0) + BH.BQ.length;
```

#### 395. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3829` → after: `L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4184) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3829)

```diff
-           const eV = Math.max(VV.tb.length, VV.xG.length, VV.YM.length, VV.pM.length),
+           const BH = Math.max(HH.BQ.length, HH.Yk.length, HH.JV.length, HH.yV.length),
```

#### 396. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3832-L3833` → after: `L4187-L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4187-L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4187-L4188) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3832-L3833)

```diff
-             const eV = VV.tb[JV];
-             xV[JV] = (void 0 === eV ? 2 : eV ? 1 : 0) | (VV.xG[JV] ? 4 : 0) | (VV.YM[JV] ? 8 : 0) | (VV.pM[JV] ? 16 : 0)
+             const BH = HH.BQ[AH];
+             LH[AH] = (void 0 === BH ? 2 : BH ? 1 : 0) | (HH.Yk[AH] ? 4 : 0) | (HH.JV[AH] ? 8 : 0) | (HH.yV[AH] ? 16 : 0)
```

#### 397. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3837` → after: `L4192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4192) · [Before (L3837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3837)

```diff
-         this.handle.Jk(JV)
+         this.handle.RY(AH)
```

#### 398. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3846-L3847` → after: `L4201-L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4201-L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4201-L4202) · [Before (L3846-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3846-L3847)

```diff
-     var tJ = xV(39555);
-     const FJ = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * tJ.Y, tJ.J, tJ.F, tJ.G, tJ.C, tJ.w, tJ.M, tJ.Q, tJ.y, tJ.cb, tJ.$, tJ.jb, tJ.mb, tJ.fb, tJ.u, tJ.j, tJ.n, tJ.q, tJ.T, tJ.c, ...tJ.U],
+     var TA = LH(39277);
+     const UA = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * TA.M, TA.z, TA.v, TA.y, TA.u, TA.p, TA.B, TA.D, TA.s, TA.S, TA.O, TA.X, TA.Y, TA.U, TA.o, TA.k, TA.l, TA.m, TA.H, TA.c, ...TA.J],
```

#### 399. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3854-L3855` → after: `L4209-L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4209-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4209-L4210) · [Before (L3854-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3854-L3855)

```diff
-         const pV = null !== (JV = null === (YV = (UV = yV.bindings).PQ) || void 0 === YV ? void 0 : YV.call(UV)) && void 0 !== JV ? JV : [];
-         return pV.length === FJ.length && FJ.every(((VV, eV) => pV[eV] === VV)) ? new PJ(yV, new yV.bindings.tx, eV, xV) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(pV).join()}] are not [${FJ.join()}], so blocks are set in JS`), null)
+         const tH = null !== (AH = null === (rH = (SH = hH.bindings).PS) || void 0 === rH ? void 0 : rH.call(SH)) && void 0 !== AH ? AH : [];
+         return tH.length === UA.length && UA.every(((HH, BH) => tH[BH] === HH)) ? new OA(hH, new hH.bindings.fA, BH, LH) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(tH).join()}] are not [${UA.join()}], so blocks are set in JS`), null)
```

#### 400. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3858` → after: `L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4213) · [Before (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3858)

```diff
-         this.runtime = VV, this.handle = eV, this.jZ = xV, this.EZ = JV, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new VV.BufferView(Uint32Array, … [truncated]
+         this.runtime = HH, this.handle = BH, this.YX = LH, this.XX = AH, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new HH.BufferView(Uint32Array, … [truncated]
```

#### 401. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3861` → after: `L4216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4216) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3861)

```diff
-         let YV = (0, tJ.tb)(eV);
+         let rH = (0, TA.jb)(BH);
```

#### 402. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3867` → after: `L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4222) · [Before (L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3867)

```diff
-           yV = this.propsFor(null === xV || void 0 === xV ? void 0 : xV.isHookId), pV = null !== (QV = null === xV || void 0 === xV || null === (nV = xV.watched) || void 0 === nV ? void 0 : nV.call(xV)) && void 0 !== QV ? QV : TJ
+           hH = this.propsFor(null === LH || void 0 === LH ? void 0 : LH.isHookId), tH = null !== (zH = null === LH || void 0 === LH || null === (CH = LH.watched) || void 0 === CH ? void 0 : CH.call(LH)) && void 0 !== zH ? zH : VA
```

#### 403. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3869-L3870` → after: `L4224-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4224-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4224-L4225) · [Before (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3869-L3870)

```diff
-           if (this.startFailedAt !== this.jZ.WH) {
-             this.startFailedAt = this.jZ.WH;
+           if (this.startFailedAt !== this.YX.iZ) {
+             this.startFailedAt = this.YX.iZ;
```

#### 404. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3872` → after: `L4227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4227) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3872)

```diff
-             this.EZ(new Error(`Block edits could not start in wasm (${VV}), so batches are set in JS until that is fixed`))
+             this.XX(new Error(`Block edits could not start in wasm (${HH}), so batches are set in JS until that is fixed`))
```

#### 405. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3876-L3877` → after: `L4231-L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4231-L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4231-L4232) · [Before (L3876-L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3876-L3877)

```diff
-         const wV = tJ.M | (null !== xV && void 0 !== xV && xV.isHookId ? tJ.Q : 0);
-         if (!this.call(VV, !1, (() => (yV !== this.sentProps && (this.handle.sr(yV), this.sentProps = yV), this.handle.Sr(pV), this.handle.NZ(eV), !0)))) return YV;
+         const EH = TA.B | (null !== LH && void 0 !== LH && LH.isHookId ? TA.D : 0);
+         if (!this.call(HH, !1, (() => (hH !== this.sentProps && (this.handle.lY(hH), this.sentProps = hH), this.handle.KY(tH), this.handle.PX(BH), !0)))) return rH;
```

#### 406. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3906` → after: `L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4261) · [Before (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3906)

```diff
-         return this.runtime.isReady() && VV.Bb.physicsWorld === eV
+         return this.runtime.isReady() && HH.pu.physicsWorld === BH
```

#### 407. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3909` → after: `L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4264) · [Before (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3909)

```diff
-         return this.busy || !this.runtime.isReady() ? null : VV.Bb.physicsWorld
+         return this.busy || !this.runtime.isReady() ? null : HH.pu.physicsWorld
```

#### 408. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3918-L3919` → after: `L4273-L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4273-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4273-L4274) · [Before (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3918-L3919)

```diff
-             UV = xV ? `, its ${xV} voxel writes undone for JS to redo` : "";
-           return this.EZ(new Error(`Block edits trapped in wasm (${YV})${UV}, so blocks are set in JS from now on`)), null
+             SH = LH ? `, its ${LH} voxel writes undone for JS to redo` : "";
+           return this.XX(new Error(`Block edits trapped in wasm (${rH})${SH}, so blocks are set in JS from now on`)), null
```

#### 409. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3931` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4286) · [Before (L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3931)

```diff
-           if (void 0 === pV && (pV = VV.Bb.slotData(xV), YV.set(xV, pV)), pV) {
+           if (void 0 === tH && (tH = HH.pu.slotData(LH), rH.set(LH, tH)), tH) {
```

#### 410. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3939` → after: `L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4294) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3939)

```diff
-         const eV = this.jZ.WH,
+         const BH = this.YX.iZ,
```

#### 411. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3944` → after: `L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4299) · [Before (L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3944)

```diff
-           props: (0, tJ.qb)(this.jZ, VV)
+           props: (0, TA.cb)(this.YX, HH)
```

#### 412. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3946` → after: `L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4301) · [Before (L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3946)

```diff
-         return VV ? this.hookedProps = JV : this.plainProps = JV, JV.props
+         return HH ? this.hookedProps = AH : this.plainProps = AH, AH.props
```

#### 413. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3951` → after: `L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4306) · [Before (L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3951)

```diff
-         0 !== xV && (0, tJ.ob)(VV, {
+         0 !== LH && (0, TA.$)(HH, {
```

#### 414. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3953-L3954` → after: `L4308-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4308-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4308-L4309) · [Before (L3953-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3953-L3954)

```diff
-           words: this.runtime.view(Int32Array, eV[0], xV * tJ.Y),
-           layerIds: this.runtime.view(Uint16Array, eV[0], xV * tJ.Y * 2),
+           words: this.runtime.view(Int32Array, BH[0], LH * TA.M),
+           layerIds: this.runtime.view(Uint16Array, BH[0], LH * TA.M * 2),
```

#### 415. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3962-L3964` → after: `L4317-L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4317-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4317-L4319) · [Before (L3962-L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3962-L3964)

```diff
-     var AJ = xV(38556),
-       NJ = xV(39544),
-       XJ = xV(40315),
+     var bA = LH(38261),
+       kA = LH(39264),
+       mA = LH(40038),
```

#### 416. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3982` → after: `L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4337) · [Before (L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3982)

```diff
-       VV.pI = VV.vI = 0
+       HH.gJ = HH.RJ = 0
```

#### 417. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3989` → after: `L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4344) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3989)

```diff
-       U3: !1,
+       Qp: !1,
```

#### 418. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3991` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4346) · [Before (L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L3991)

```diff
-       B3: !1
+       kp: !1
```

#### 419. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4013` → after: `L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4368) · [Before (L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4013)

```diff
-         this.RD = null;
+         this.lN = null;
```

#### 420. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4021` → after: `L4376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4376) · [Before (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4021)

```diff
-           VV.container.lL && function(VV, eV, xV, JV) {
+           HH.container.zD && function(HH, BH, LH, AH) {
```

#### 421. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4024` → after: `L4379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4379) · [Before (L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4024)

```diff
-               UV = eV === VV.dx && xV === VV.dy && (YV - VV.ms & zJ) <= 3;
+               SH = Math.max(Math.abs(BH - HH.dx), Math.abs(LH - HH.dy)) <= .125 * Math.max(Math.abs(HH.dx), Math.abs(HH.dy)) && (rH - HH.ms & IA) <= 3;
```

#### 422. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4026` → after: `L4381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4381) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4026)

```diff
-           }(yV, xV.movementX, xV.movementY, xV.timeStamp) && (this.X3.dx -= xV.movementX, this.X3.dy -= xV.movementY, this.RD && this.RD())
+           }(hH, LH.movementX, LH.movementY, LH.timeStamp) && (this.mp.dx -= LH.movementX, this.mp.dy -= LH.movementY, this.lN && this.lN())
```

#### 423. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4032-L4036` → after: `L4387-L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4387-L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4387-L4391) · [Before (L4032-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4032-L4036)

```diff
-     var lJ = xV(39538),
-       LJ = xV(40861),
-       fJ = xV(380),
-       mJ = xV(40863),
-       KJ = xV(9829).i;
+     var FA = LH(39260),
+       DA = LH(40621),
+       wA = LH(330),
+       ZA = LH(40624),
+       dA = LH(9943).i;
```

#### 424. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4038` → after: `L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4393) · [Before (L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4038)

```diff
-       iZ(VV) {
+       IX(HH) {
```

#### 425. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4070-L4071` → after: `L4425-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4425-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4425-L4426) · [Before (L4070-L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4070-L4071)

```diff
-       if (!eV.sK || eV.eZ <= 0) {
-         var YV = eV.ME;
+       if (!BH.HZ || BH.rE <= 0) {
+         var rH = BH.EW;
```

#### 426. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4073` → after: `L4428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4428) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4073)

```diff
-         var UV = eV.YH;
+         var SH = BH.bZ;
```

#### 427. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4075` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4430) · [Before (L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4075)

```diff
-         var yV = eV.UH;
+         var hH = BH.eZ;
```

#### 428. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4078-L4079` → after: `L4433-L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4433-L4434) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4078-L4079)

```diff
-       var pV = !!VV.fv,
-         QV = (0, lJ.e)(eV);
+       var tH = !!HH.cG,
+         zH = (0, FA.c)(BH);
```

#### 429. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4081-L4082` → after: `L4436-L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4436-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4436-L4437) · [Before (L4081-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4081-L4082)

```diff
-           if (!VV.xH) return;
-           var xV = (0, lJ.i)(Ex(VV, eV), VV.xH, eV.Xv);
+           if (!HH.xZ) return;
+           var LH = (0, FA.g)(ML(HH, BH), HH.xZ, BH.MG);
```

#### 430. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4084` → after: `L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4439) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4084)

```diff
-           AY[1] = xV, eV.Xv.translate(AY), eV.nH(), eV.Lv && eV.Lv()
+           br[1] = LH, BH.MG.translate(br), BH.RZ(), BH.KG && BH.KG()
```

#### 431. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4087` → after: `L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4442) · [Before (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4087)

```diff
-           if (eV.wakeInFluid && VV.testFluid(Math.floor(eV.Xv.base[0]), Math.floor(eV.Xv.base[1]), Math.floor(eV.Xv.base[2]))) return !1;
+           if (BH.wakeInFluid && HH.testFluid(Math.floor(BH.MG.base[0]), Math.floor(BH.MG.base[1]), Math.floor(BH.MG.base[2]))) return !1;
```

#### 432. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4093` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4448) · [Before (L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4093)

```diff
-           return wY = !1, mJ(yV, eV.Xv, WY, ZY, !0), wY
+           return Xr = !1, ZA(hH, BH.MG, lr, Gr, !0), Xr
```

#### 433. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4099` → after: `L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4454) · [Before (L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4099)

```diff
-             var xV = eV.Xv,
+             var LH = BH.MG,
```

#### 434. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4112-L4116` → after: `L4467-L4471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4467-L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4467-L4471) · [Before (L4112-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4112-L4116)

```diff
-             fJ.scale(ZV, VV.gravity, -VV.Iv * wV * eV.gravityMultiplier), eV.applyForce(ZV), eV.inFluid = !0, eV.ratioInFluid = nV
-           }(VV, eV), DY(eV.YH), DY(eV.UH), DY(eV.ME), DY(eV.resting);
-         var wV = eV.ME,
-           ZV = eV.YH,
-           vV = eV.UH,
+             wA.scale(XH, HH.gravity, -HH.nG * EH * BH.gravityMultiplier), BH.applyForce(XH), BH.inFluid = !0, BH.ratioInFluid = CH
+           }(HH, BH), er(BH.bZ), er(BH.eZ), er(BH.EW), er(BH.resting);
+         var EH = BH.EW,
+           XH = BH.bZ,
+           GH = BH.eZ,
```

#### 435. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4118` → after: `L4473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4473) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4118)

```diff
-           kV = 1 / eV.eZ;
+           uH = 1 / BH.rE;
```

#### 436. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4121` → after: `L4476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4476) · [Before (L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4121)

```diff
-         uJ[0] = uJ[0] + rV[0] * bV, uJ[1] = uJ[1] + rV[1] * bV, uJ[2] = uJ[2] + rV[2] * bV, kV = 1 / eV.eZ, sJ[0] = vV[0] * kV, sJ[1] = vV[1] * kV, sJ[2] = vV[2] * kV, sJ[0] = sJ[0] + uJ[0] * xV, sJ[1] = sJ[1] + uJ[1] * xV, sJ[2] = sJ[2] + uJ[2] * xV, wV[0] = wV[0] + sJ[0], wV[1] … [truncated]
+         sA[0] = sA[0] + YH[0] * QH, sA[1] = sA[1] + YH[1] * QH, sA[2] = sA[2] + YH[2] * QH, uH = 1 / BH.rE, JA[0] = GH[0] * uH, JA[1] = GH[1] * uH, JA[2] = GH[2] * uH, JA[0] = JA[0] + sA[0] * LH, JA[1] = JA[1] + sA[1] * LH, JA[2] = JA[2] + sA[2] * LH, EH[0] = EH[0] + JA[0], EH[1] … [truncated]
```

#### 437. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4126` → after: `L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4481) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4126)

```diff
-           qV = eV.Sv >= 0 ? eV.Sv : VV.Sv,
+           vH = BH.jG >= 0 ? BH.jG : HH.jG,
```

#### 438. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4129-L4130` → after: `L4484-L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4484-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4484-L4485) · [Before (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4129-L4130)

```diff
-         eV.inFluid && (tV = eY(eV, eV.fluidDragHoriz >= 0 ? eV.fluidDragHoriz : jV), FV = eY(eV, eV.fluidDragVert >= 0 ? eV.fluidDragVert : jV)), tV = Math.max(1 - tV * xV / eV.eZ, 0), FV = Math.max(1 - FV * xV / eV.eZ, 0), xY[0] = tV, xY[1] = FV, xY[2] = tV, wV[0] = wV[0] * xY[0 … [truncated]
-           if (mJ.checkInput(eV.Xv, xV), !eV.resting[1] || xV[1] > 0) return;
+         BH.inFluid && (PH = Lr(BH, BH.fluidDragHoriz >= 0 ? BH.fluidDragHoriz : xH), TH = Lr(BH, BH.fluidDragVert >= 0 ? BH.fluidDragVert : xH)), PH = Math.max(1 - PH * LH / BH.rE, 0), TH = Math.max(1 - TH * LH / BH.rE, 0), Ar[0] = PH, Ar[1] = TH, Ar[2] = PH, EH[0] = EH[0] * Ar[0 … [truncated]
+           if (ZA.checkInput(BH.MG, LH), !BH.resting[1] || LH[1] > 0) return;
```

#### 439. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4132` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4487) · [Before (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4132)

```diff
-           gY(YV, eV.Xv);
+           cr(rH, BH.MG);
```

#### 440. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4138` → after: `L4493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4493) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4138)

```diff
-         }(VV, eV, SJ, VY), rY(VV, eV, eV.Xv, SJ, eV.resting, eV.slideOnCollision), eV.lK && function(VV, eV, xV, JV) {
+         }(HH, BH, iA, Br), ur(HH, BH, BH.MG, iA, BH.resting, BH.slideOnCollision), BH.pw && function(HH, BH, LH, AH) {
```

#### 441. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4147` → after: `L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4502) · [Before (L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4147)

```diff
-             nV = eV.Xv.base[1];
+             CH = BH.MG.base[1];
```

#### 442. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4163` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4518) · [Before (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4163)

```diff
-         for (var TV = 0; TV < 3; ++TV) eV.resting[TV] = eV.resting[TV] || VY[TV], IJ[TV] = 0, eV.resting[TV] && (dJ[TV] || (IJ[TV] = -eV.ME[TV]), eV.ME[TV] = 0);
+         for (var UH = 0; UH < 3; ++UH) BH.resting[UH] = BH.resting[UH] || Br[UH], pA[UH] = 0, BH.resting[UH] && (yA[UH] || (pA[UH] = -BH.EW[UH]), BH.EW[UH] = 0);
```

#### 443. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4165` → after: `L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4520) · [Before (L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4165)

```diff
-         PV > .001 && (fJ.scale(IJ, IJ, eV.eZ), eV.hv && eV.hv(IJ)),
+         VH > .001 && (wA.scale(pA, pA, BH.rE), BH.fG && BH.fG(pA)),
```

#### 444. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4167` → after: `L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4522) · [Before (L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4167)

```diff
-             if (!eV.Xv) return;
+             if (!BH.MG) return;
```

#### 445. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4169-L4171` → after: `L4524-L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4524-L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4524-L4526) · [Before (L4169-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4169-L4171)

```diff
-             var YV = fJ.squaredLength(eV.ME);
-             YV > 1e-5 && eV.nH();
-             VV.fv && VV.fv(eV) ? (eV.loadStateFromCopy(VV.rollbackBody), eV.rolledBackLastTick = !0) : eV.rolledBackLastTick = !1
+             var rH = wA.squaredLength(BH.EW);
+             rH > 1e-5 && BH.RZ();
+             HH.cG && HH.cG(BH) ? (BH.loadStateFromCopy(HH.rollbackBody), BH.rolledBackLastTick = !0) : BH.rolledBackLastTick = !1
```

#### 446. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4184` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4539) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4184)

```diff
-       fJ.copy(yY, xV.ME), yY[eV] = 0;
+       wA.copy(tr, LH.EW), tr[BH] = 0;
```

#### 447. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4188-L4189` → after: `L4543-L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4543-L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4543-L4544) · [Before (L4188-L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4188-L4189)

```diff
-           nV = pV > QV ? (pV - QV) / pV : 0;
-         xV.ME[(eV + 1) % 3] *= nV, xV.ME[(eV + 2) % 3] *= nV
+           CH = tH > zH ? (tH - zH) / tH : 0;
+         LH.EW[(BH + 1) % 3] *= CH, LH.EW[(BH + 2) % 3] *= CH
```

#### 448. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4236` → after: `L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4591) · [Before (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4236)

```diff
-           }(VV, eV, xV))) return gY(eV.Xv, xV), eV.resting[0] = bY[0], eV.resting[2] = bY[2], eV.Lv && eV.Lv(), !0
+           }(HH, BH, LH))) return cr(BH.MG, LH), BH.resting[0] = Wr[0], BH.resting[2] = Wr[2], BH.KG && BH.KG(), !0
```

#### 449. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4267` → after: `L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4622) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4267)

```diff
-       Sv: .1
+       jG: .1
```

#### 450. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4272-L4276` → after: `L4627-L4631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4627-L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4627-L4631) · [Before (L4272-L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4272-L4276)

```diff
-         var xV = VV.cZ,
-           JV = VV.jZ.ir,
-           YV = VV.Vr;
-         eV.xH = (0, me.i)(((VV, eV, JV) => !xV.y5(VV + YV[0], eV + YV[1], JV + YV[2])), "cell"), super(eV, ((VV, eV, JV) => xV.Jr(VV + YV[0], eV + YV[1], JV + YV[2])), ((VV, eV, UV) => {
-           var yV = xV.K3(VV + YV[0], eV + YV[1], UV + YV[2]);
+         var LH = HH.cX,
+           AH = HH.YX.TY,
+           rH = HH.DG;
+         BH.xZ = (0, ZB.h)(((HH, BH, AH) => !LH.Gy(HH + rH[0], BH + rH[1], AH + rH[2])), "cell"), super(BH, ((HH, BH, AH) => LH.ZG(HH + rH[0], BH + rH[1], AH + rH[2])), ((HH, BH, SH) => {
+           var hH = LH.Ip(HH + rH[0], BH + rH[1], SH + rH[2]);
```

#### 451. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4278` → after: `L4633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4633) · [Before (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4278)

```diff
-         })), this.wasm = null, this.Z5 = 0, this.B5 = 0
+         })), this.wasm = null, this.Qy = 0, this.Wy = 0
```

#### 452. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4282` → after: `L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4637) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4282)

```diff
-         this.wasm ? this.wasm.iZ(VV) : super.iZ(VV), this.Z5 += performance.now() - eV, this.B5++
+         this.wasm ? this.wasm.IX(HH) : super.IX(HH), this.Qy += performance.now() - BH, this.Wy++
```

#### 453. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4285` → after: `L4640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4640) · [Before (L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4285)

```diff
-         return this.wasm && this.wasm.jH(VV, eV, xV, JV, YV, UV) || super.jH(VV, eV, xV, JV, YV, UV)
+         return this.wasm && this.wasm.sZ(HH, BH, LH, AH, rH, SH) || super.sZ(HH, BH, LH, AH, rH, SH)
```

#### 454. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4288-L4289` → after: `L4643-L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4643-L4644) · [Before (L4288-L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4288-L4289)

```diff
-         var eV = super.Hv(VV);
-         return eV && this.wasm && this.wasm.sH(VV), eV
+         var BH = super.gG(HH);
+         return BH && this.wasm && this.wasm.vJ(HH), BH
```

#### 455. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4293-L4294` → after: `L4648-L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4648-L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4648-L4649) · [Before (L4293-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4293-L4294)

```diff
-           ms: this.Z5,
-           count: this.B5
+           ms: this.Qy,
+           count: this.Wy
```

#### 456. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4296` → after: `L4651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4651) · [Before (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4296)

```diff
-         return this.Z5 = 0, this.B5 = 0, VV
+         return this.Qy = 0, this.Wy = 0, HH
```

#### 457. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4299` → after: `L4654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4654) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4299)

```diff
-     var aY = xV(40861),
+     var Nr = LH(40621),
```

#### 458. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4301` → after: `L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4656) · [Before (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4301)

```diff
-       cY = xV(40863),
+       jr = LH(40624),
```

#### 459. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4303` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4658) · [Before (L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4303)

```diff
-       lY = xV(38768);
+       Fr = LH(38459);
```

#### 460. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4306` → after: `L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4661) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4306)

```diff
-       this.i5 = !1, this.o5 = !1, this.R7 = 1, this.Z8 = 0, this.W8 = 10, this.K8 = 10, this.e_ = 0, this.x_ = .2
+       this.vy = !1, this.Py = !1, this.Uy = 1, this.jy = 0, this.Fy = 10, this.I6 = 10, this.R6 = 0, this.w6 = .2
```

#### 461. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4312-L4315` → after: `L4667-L4670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4667-L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4667-L4670) · [Before (L4312-L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4312-L4315)

```diff
-         eV = Object.assign({}, new LY, eV), this.iv = VV, this.W8 = +eV.W8, this.K8 = +eV.K8, this.i5 = !!eV.i5, this.o5 = !!eV.o5, this.R7 = eV.R7, this.Z8 = eV.Z8, this.heading = 0, this.pitch = 0, this.tZ = 0, this.tE = jV().create(), this.J_ = this.iv.sF.Y_(["position"]);
-         var xV = .9 * VV.sF.U_(VV.bD).height;
-         VV.sF.WC(this.J_, "HA", {
-           zk: VV.bD,
+         BH = Object.assign({}, new Dr, BH), this.bG = HH, this.Fy = +BH.Fy, this.I6 = +BH.I6, this.vy = !!BH.vy, this.Py = !!BH.Py, this.Uy = BH.Uy, this.jy = BH.jy, this.heading = 0, this.pitch = 0, this.QX = 0, this.LW = xH().create(), this.Z6 = this.bG.pT.Q0(["position"]);
+         var LH = .9 * HH.pT.A4(HH.lF).height;
+         HH.pT.yR(this.Z6, "HV", {
+           Xu: HH.lF,
```

#### 462. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4317` → after: `L4672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4672) · [Before (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4317)

```diff
-         }), this.y_ = eV.e_, this.x_ = eV.x_, this.p_ = eV.e_, this.X3 = {
+         }), this.W4 = BH.R6, this.w6 = BH.w6, this.O4 = BH.R6, this.mp = {
```

#### 463. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4320-L4325` → after: `L4675-L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4675-L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4675-L4680) · [Before (L4320-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4320-L4325)

```diff
-         }, this.Q_ = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.n_ = new ZU(this), this.v_ = jV().uv(0, 0, 1), this.r_ = jV().uv(0, 0, 1), this.VK = !1, this.k_ = {
-           vx: 0,
-           vy: 0,
-           pI: 0,
-           vI: 0
-         }, this.b_ = NaN, this.jD = null, this.PD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.E_ = null, this.B_ = null, this.j_ = null, this.F_ = null
+         }, this.o4 = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.f4 = new GS(this), this.K4 = xH().nX(0, 0, 1), this.Z2 = xH().nX(0, 0, 1), this.dD = !1, this.B3 = {
+           zq: 0,
+           hq: 0,
+           gJ: 0,
+           RJ: 0
+         }, this.X3 = NaN, this.vN = null, this.U3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.I3 = null, this.K3 = null, this.B_ = null, this.A_ = null
```

#### 464. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4329-L4330` → after: `L4684-L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4684-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4684-L4685) · [Before (L4329-L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4329-L4330)

```diff
-         var eV = this.iv.sF.U_(this.J_);
-         jV().copy(VV, eV.P_);
+         var BH = this.bG.pT.A4(this.Z6);
+         xH().copy(HH, BH.S_);
```

#### 465. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4332` → after: `L4687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4687) · [Before (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4332)

```diff
-         return 0 === xV[0] && 0 === xV[1] && 0 === xV[2] || 0 === this.p_ || IY(this, VV, this.heading), VV
+         return 0 === LH[0] && 0 === LH[1] && 0 === LH[2] || 0 === this.O4 || pr(this, HH, this.heading), HH
```

#### 466. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4336-L4339` → after: `L4691-L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4691-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4691-L4694) · [Before (L4336-L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4336-L4339)

```diff
-         var eV = this.T_(VV);
-         if (0 === this.p_) return eV;
-         const xV = this.iv.bloxd.N_(this.iv.bD);
-         return jV().dv(eV, eV, this.v_, -this.p_ * xV)
+         var BH = this.r_(HH);
+         if (0 === this.O4) return BH;
+         const LH = this.bG.bloxd.E_(this.bG.lF);
+         return xH().nY(BH, BH, this.K4, -this.O4 * LH)
```

#### 467. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4342` → after: `L4697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4697) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4342)

```diff
-         return this.A_(VV)
+         return this.h_(HH)
```

#### 468. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4345` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4700) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4345)

```diff
-         var VV = this.T_(),
+         var HH = this.r_(),
```

#### 469. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4347` → after: `L4702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4702) · [Before (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4347)

```diff
-         return this.iv.i_(VV, eV)
+         return this.bG.M_(HH, BH)
```

#### 470. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4350` → after: `L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4705) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4350)

```diff
-         var VV = this.A_(),
+         var HH = this.h_(),
```

#### 471. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4352` → after: `L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4707) · [Before (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4352)

```diff
-         return this.iv.i_(VV, eV)
+         return this.bG.M_(HH, BH)
```

#### 472. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4355` → after: `L4710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4710) · [Before (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4355)

```diff
-         return (0, lY.e)(this.heading, this.pitch - Math.PI / 2)
+         return (0, Fr.b)(this.heading, this.pitch - Math.PI / 2)
```

#### 473. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4359` → after: `L4714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4714) · [Before (L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4359)

```diff
-         return jV().copy(this.l_, this.r_)
+         return xH().copy(this.P_, this.Z2)
```

#### 474. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4362` → after: `L4717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4717) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4362)

```diff
-         return jV().copy(this.l_, this.v_)
+         return xH().copy(this.P_, this.K4)
```

#### 475. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4365-L4366` → after: `L4720-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4720-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4720-L4721) · [Before (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4365-L4366)

```diff
-         var JV = this.PD;
-         return JV[0] = VV, JV[1] = eV, JV[2] = xV.dx, JV[3] = xV.dy, JV[7] = this.k_.vx, JV[8] = this.k_.vy, JV[9] = function(VV) {
+         var AH = this.U3;
+         return AH[0] = HH, AH[1] = BH, AH[2] = LH.dx, AH[3] = LH.dy, AH[7] = this.B3.zq, AH[8] = this.B3.hq, AH[9] = function(HH) {
```

#### 476. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4371` → after: `L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4726) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4371)

```diff
-         VV[4] = xV, VV[5] = JV, VV[6] = eV, this.jD && this.jD(VV)
+         HH[4] = LH, HH[5] = AH, HH[6] = BH, this.vN && this.vN(HH)
```

#### 477. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4376-L4377` → after: `L4731-L4732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4731-L4732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4731-L4732) · [Before (L4376-L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4376-L4377)

```diff
-           dx: this.X3.dx,
-           dy: this.X3.dy
+           dx: this.mp.dx,
+           dy: this.mp.dy
```

#### 478. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4379` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4734) · [Before (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4379)

```diff
-         this.X3.dx = this.X3.dy = 0;
+         this.mp.dx = this.mp.dy = 0;
```

#### 479. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4384-L4388` → after: `L4739-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4739-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4739-L4743) · [Before (L4384-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4384-L4388)

```diff
-           return "number" === typeof VV ? VV : performance.now()
-         }()) - this.b_, this.b_ = JV);
-         var YV = !VV && this.jD ? this.m_(JV, xV, eV) : null;
-         const UV = this.j_ ? this.j_() : 0,
-           yV = this.F_ ? this.F_() : null,
+           return "number" === typeof HH ? HH : performance.now()
+         }()) - this.X3, this.X3 = AH);
+         var rH = !HH && this.vN ? this.b_(AH, LH, BH) : null;
+         const SH = this.B_ ? this.B_() : 0,
+           hH = this.A_ ? this.A_() : null,
```

#### 480. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4390-L4394` → after: `L4745-L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4745-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4745-L4749) · [Before (L4390-L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4390-L4394)

```diff
-         var QV = this.R7;
-         if (this.iv.container.uL && (this.iv.container.lL || (QV *= this.Z8)), 0 === QV && 0 === UV && !pV) return VV || CJ(this.k_), void(YV && this.S_(YV, GJ, 0, 0));
-         if (this.VK) {
-           if (this.VK = !1, 0 === UV && !pV) return VV || CJ(this.k_), void(YV && this.S_(YV, gJ, 0, 0));
-           QV = 0, YV && this.S_(YV, gJ, 0, 0), YV = null
+         var zH = this.Uy;
+         if (this.bG.container.uD && (this.bG.container.zD || (zH *= this.jy)), 0 === zH && 0 === SH && !tH) return HH || gA(this.B3), void(rH && this.k_(rH, fA, 0, 0));
+         if (this.dD) {
+           if (this.dD = !1, 0 === SH && !tH) return HH || gA(this.B3), void(rH && this.k_(rH, cA, 0, 0));
+           zH = 0, rH && this.k_(rH, cA, 0, 0), rH = null
```

#### 481. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4401-L4406` → after: `L4756-L4761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4756-L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4756-L4761) · [Before (L4401-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4401-L4406)

```diff
-                 UV = aJ(eV.dx, JV, VV.vx, YV),
-                 yV = aJ(eV.dy, JV, VV.vy, YV);
-               return 0 !== UV && UV !== VV.pI || 0 !== yV && yV !== VV.vI ? (VV.pI = UV, VV.vI = yV, eV.dx = VV.vx * JV, eV.dy = VV.vy * JV, !0) : (VV.pI = VV.vI = 0, VV.vx = eV.dx / JV, VV.vy = eV.dy / JV, !1)
-             }(this.k_, eV, xV);
-             YV && this.S_(YV, nV ? RJ : WJ, eV.dx, eV.dy)
-           } else CJ(this.k_), YV && this.S_(YV, GJ, 0, 0);
+                 SH = NA(BH.dx, AH, HH.zq, rH),
+                 hH = NA(BH.dy, AH, HH.hq, rH);
+               return 0 !== SH && SH !== HH.gJ || 0 !== hH && hH !== HH.RJ ? (HH.gJ = SH, HH.RJ = hH, BH.dx = HH.zq * AH, BH.dy = HH.hq * AH, !0) : (HH.gJ = HH.RJ = 0, HH.zq = BH.dx / AH, HH.hq = BH.dy / AH, !1)
+             }(this.B3, BH, LH);
+             rH && this.k_(rH, CH ? KA : lA, BH.dx, BH.dy)
+           } else gA(this.B3), rH && this.k_(rH, fA, 0, 0);
```

#### 482. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4408-L4410` → after: `L4763-L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4763-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4763-L4765) · [Before (L4408-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4408-L4410)

```diff
-           ZV = eV.dx * this.W8 * QV * wV,
-           vV = eV.dy * this.K8 * QV * wV;
-         this.i5 && (ZV = -ZV), this.o5 && (vV = -vV), pV && (ZV += yV.uR, vV += yV.eD), (0 !== QV || pV) && (vV += this.n_.Q0(vV));
+           XH = BH.dx * this.Fy * zH * EH,
+           GH = BH.dy * this.I6 * zH * EH;
+         this.vy && (XH = -XH), this.Py && (GH = -GH), tH && (XH += hH.lq, GH += hH.Fq), (0 !== zH || tH) && (GH += this.f4.m_(GH));
```

#### 483. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4412` → after: `L4767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4767) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4412)

```diff
-         this.heading += ZV < 0 ? ZV + rV : ZV, this.heading > rV && (this.heading -= rV), (0 !== UV || pV) && (this.heading = ((this.heading + UV) % rV + rV) % rV), this.pitch = Math.max(-wU, Math.min(wU, this.pitch + vV)), null !== this.B_ && (this.heading = this.B_), null !== t … [truncated]
+         this.heading += XH < 0 ? XH + YH : XH, this.heading > YH && (this.heading -= YH), (0 !== SH || tH) && (this.heading = ((this.heading + SH) % YH + YH) % YH), this.pitch = Math.max(-XS, Math.min(XS, this.pitch + GH)), null !== this.K3 && (this.heading = this.K3), null !== t … [truncated]
```

#### 484. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4415-L4416` → after: `L4770-L4771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4770-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4770-L4771) · [Before (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4415-L4416)

```diff
-         jV().set(this.r_, 0, 0, 1);
-         var VV = this.r_,
+         xH().set(this.Z2, 0, 0, 1);
+         var HH = this.Z2,
```

#### 485. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4418` → after: `L4773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4773) · [Before (L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4418)

```diff
-         dY(this, this.heading, this.pitch, 0 !== this.p_, this.v_), jV().ek(VV, VV, eV, this.pitch), jV().pk(VV, VV, eV, this.heading)
+         yr(this, this.heading, this.pitch, 0 !== this.O4, this.K4), xH().JQ(HH, HH, BH, this.pitch), xH().iQ(HH, HH, BH, this.heading)
```

#### 486. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4424` → after: `L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4779) · [Before (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4424)

```diff
-           yV = this.iv.bloxd.N_(this.iv.bD),
+           hH = this.bG.bloxd.E_(this.bG.lF),
```

#### 487. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4427` → after: `L4782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4782) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4427)

```diff
-         return 0 === QV ? (jV().copy(YV, VV), 0) : (jV().dv(YV, YV, UV, -QV * yV), QV)
+         return 0 === zH ? (xH().copy(rH, HH), 0) : (xH().nY(rH, rH, SH, -zH * hH), zH)
```

#### 488. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4430` → after: `L4785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4785) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4430)

```diff
-         return jV().gr(QU, eV), uY(this, VV, QU, xV)
+         return xH().du(CS, BH), sr(this, HH, CS, LH)
```

#### 489. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4433-L4434` → after: `L4788-L4789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4788-L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4788-L4789) · [Before (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4433-L4434)

```diff
-         const eV = (this.y_ - this.p_) * this.x_;
-         Math.abs(eV) < 1e-4 ? this.p_ = this.y_ : this.p_ += eV, 0 !== eV && this.Q_ && this.Q_(this.p_, this.p_ - eV), this.n_.update(VV)
+         const BH = (this.W4 - this.O4) * this.w6;
+         Math.abs(BH) < 1e-4 ? this.O4 = this.W4 : this.O4 += BH, 0 !== BH && this.o4 && this.o4(this.O4, this.O4 - BH), this.f4.update(HH)
```

#### 490. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4437-L4439` → after: `L4792-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4792-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4792-L4794) · [Before (L4437-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4437-L4439)

```diff
-         var VV = SY(HY(this), this.iv.bloxd.N_(this.iv.bD));
-         this.p_ > VV && (this.p_ = VV);
-         var eV = this.iv.gZ.K9().I9;
+         var HH = ir(ar(this), this.bG.bloxd.E_(this.bG.lF));
+         this.O4 > HH && (this.O4 = HH);
+         var BH = this.bG.mX.N_().R_;
```

#### 491. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4450-L4452` → after: `L4805-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4805-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4805-L4807) · [Before (L4450-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4450-L4452)

```diff
-       const eV = VV.iv.bloxd.N_(VV.iv.bD);
-       var xV = Math.max(VV.y_, VV.p_) * eV + .5;
-       return uY(VV, VV.T_(), VV.f_(), xV)
+       const BH = HH.bG.bloxd.E_(HH.bG.lF);
+       var LH = Math.max(HH.W4, HH.O4) * BH + .5;
+       return sr(HH, HH.r_(), HH.U_(), LH)
```

#### 492. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4457-L4458` → after: `L4812-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4812-L4813) · [Before (L4457-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4457-L4458)

```diff
-         var YV = VV.iv.Vr;
-         JU = new(oY())([0, 0, 0], jV().clone(UU)), YU = (eV, xV, JV) => VV.iv.cZ.Jr(eV + YV[0], xV + YV[1], JV + YV[2]), jV().scale(UU, UU, -.5)
+         var rH = HH.bG.DG;
+         rS = new(Rr())([0, 0, 0], xH().clone(hS)), SS = (BH, LH, AH) => HH.bG.cX.ZG(BH + rH[0], LH + rH[1], AH + rH[2]), xH().scale(hS, hS, -.5)
```

#### 493. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4475` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4830) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4475)

```diff
-       return jV().set(YV, 0, 0, 1), jV().ek(YV, YV, UV, VV.tE[0]), jV().pk(YV, YV, UV, VV.tE[1]), jV().ck(YV, YV, UV, VV.tE[2]), jV().ek(YV, YV, UV, xV), jV().pk(YV, YV, UV, eV), JV && (jV().ek(YV, YV, UV, VV.cameraRotationOffset[0]), jV().pk(YV, YV, UV, VV.cameraRotationOffset[1 … [truncated]
+       return xH().set(rH, 0, 0, 1), xH().JQ(rH, rH, SH, HH.LW[0]), xH().iQ(rH, rH, SH, HH.LW[1]), xH().pQ(rH, rH, SH, HH.LW[2]), xH().JQ(rH, rH, SH, LH), xH().iQ(rH, rH, SH, BH), AH && (xH().JQ(rH, rH, SH, HH.cameraRotationOffset[0]), xH().iQ(rH, rH, SH, HH.cameraRotationOffset[1 … [truncated]
```

#### 494. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4479-L4481` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4834-L4836) · [Before (L4479-L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4479-L4481)

```diff
-       JU.setPosition(VV.A_()), JU.translate(UU);
-       var eV = Math.max(VV.targetY, VV.iv.gZ.K9().I9[1]) + .5,
-         xV = VV.o_();
+       rS.setPosition(HH.h_()), rS.translate(hS);
+       var BH = Math.max(HH.targetY, HH.bG.mX.N_().R_[1]) + .5,
+         LH = HH.x_();
```

#### 495. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4486-L4490` → after: `L4841-L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4841-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4841-L4845) · [Before (L4486-L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4486-L4490)

```diff
-       const eV = VV.A_(),
-         xV = (0, lY.e)(VV.heading, VV.pitch - Math.PI / 2);
-       jV().dv(eV, eV, xV, VV.iv.gZ.K9().I9[1]), JU.setPosition(eV), JU.translate(UU);
-       var JV = Math.max(VV.targetX, VV.iv.gZ.K9().I9[0]) + .5;
-       const YV = (0, lY.e)(VV.heading + Math.PI / 2, 0);
+       const BH = HH.h_(),
+         LH = (0, Fr.b)(HH.heading, HH.pitch - Math.PI / 2);
+       xH().nY(BH, BH, LH, HH.bG.mX.N_().R_[1]), rS.setPosition(BH), rS.translate(hS);
+       var AH = Math.max(HH.targetX, HH.bG.mX.N_().R_[0]) + .5;
+       const rH = (0, Fr.b)(HH.heading + Math.PI / 2, 0);
```

#### 496. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4495-L4496` → after: `L4850-L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4850-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4850-L4851) · [Before (L4495-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4495-L4496)

```diff
-       var eV = VV.iv.physics?.wasm;
-       return eV ? eV.IH(JU, yU, xU) : xU()
+       var BH = HH.bG.physics?.wasm;
+       return BH ? BH.PJ(rS, tS, AS) : AS()
```

#### 497. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4502` → after: `L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4857) · [Before (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4502)

```diff
-     var JU, YU, UU = jV().uv(.2, .2, .2),
+     var rS, SS, hS = xH().nX(.2, .2, .2),
```

#### 498. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4510` → after: `L4865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4865) · [Before (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4510)

```diff
-         this.U1 = VV, this.CZ = 0, this.E1 = 0, this.A4 = 0, this.W4 = 0, this.o4 = performance.now(), this.f4 = performance.now(), this.K4 = 0, this.O4 = 0
+         this.j_ = HH, this.fX = 0, this.n_ = 0, this.F_ = 0, this.J_ = 0, this.i_ = performance.now(), this.p_ = performance.now(), this.y_ = 0, this.B5 = 0
```

#### 499. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4513-L4515` → after: `L4868-L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4868-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4868-L4870) · [Before (L4513-L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4513-L4515)

```diff
-         const eV = this.E1 - this.A4,
-           xV = this.U1.pitch + wU;
-         this.CZ = Math.min(this.CZ + VV, eV + xV), this.o4 = performance.now()
+         const BH = this.n_ - this.F_,
+           LH = this.j_.pitch + XS;
+         this.fX = Math.min(this.fX + HH, BH + LH), this.i_ = performance.now()
```

#### 500. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4518` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4873) · [Before (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4518)

```diff
-         this.W4 = VV
+         this.J_ = HH
```

#### 501. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4521` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4876) · [Before (L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4521)

```diff
-         this.CZ = 0, this.E1 = 0, this.A4 = 0, this.K4 = 0, this.O4 = 0
+         this.fX = 0, this.n_ = 0, this.F_ = 0, this.y_ = 0, this.B5 = 0
```

#### 502. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4524-L4528` → after: `L4879-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4879-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4879-L4883) · [Before (L4524-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4524-L4528)

```diff
-         this.A4 > 0 && (this.O4 += this.A4), (this.CZ > 0 || this.E1 > 0) && VV > 0 && (this.K4 += VV);
-         let eV = this.A4;
-         this.A4 = 0;
-         if (eV < 0 && this.O4 > 0 && this.K4 > 0) {
-           eV *= 1 - Math.min(1, this.K4 / this.O4)
+         this.F_ > 0 && (this.B5 += this.F_), (this.fX > 0 || this.n_ > 0) && HH > 0 && (this.y_ += HH);
+         let BH = this.F_;
+         this.F_ = 0;
+         if (BH < 0 && this.B5 > 0 && this.y_ > 0) {
+           BH *= 1 - Math.min(1, this.y_ / this.B5)
```

#### 503. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4534-L4538` → after: `L4889-L4893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4889-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4889-L4893) · [Before (L4534-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4534-L4538)

```diff
-           xV = Math.min(eV - this.o4, 75);
-         this.CZ = Math.max(0, this.CZ - this.W4 * xV * VV);
-         const JV = Math.min(1, .009 * (eV - this.f4)),
-           YV = (this.CZ - this.E1) * JV;
-         Math.abs(YV) < 1e-6 ? this.E1 = this.CZ : (this.A4 += YV, this.E1 += YV), 0 === this.CZ && Math.abs(this.E1) < 1e-6 && (this.K4 = 0, this.O4 = 0), this.f4 = eV
+           LH = Math.min(BH - this.i_, 75);
+         this.fX = Math.max(0, this.fX - this.J_ * LH * HH);
+         const AH = Math.min(1, .009 * (BH - this.p_)),
+           rH = (this.fX - this.n_) * AH;
+         Math.abs(rH) < 1e-6 ? this.n_ = this.fX : (this.F_ += rH, this.n_ += rH), 0 === this.fX && Math.abs(this.n_) < 1e-6 && (this.y_ = 0, this.B5 = 0), this.p_ = BH
```

#### 504. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4541` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4896) · [Before (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4541)

```diff
-     var vU = xV(38653),
+     var YS = LH(38327),
```

#### 505. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4543` → after: `L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4898) · [Before (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4543)

```diff
-         Z6: ""
+         o5: ""
```

#### 506. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4547` → after: `L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4902) · [Before (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4547)

```diff
-         eV = Object.assign({}, rU, eV), this.iv = VV, this.I6 = eV.Z6;
+         BH = Object.assign({}, uS, BH), this.bG = HH, this.i5 = BH.o5;
```

#### 507. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4564` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4919) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4564)

```diff
-         this.Fb = [0, 0, 0, 0, 0, 0], this.WH = 0;
+         this.LQ = [0, 0, 0, 0, 0, 0], this.iZ = 0;
```

#### 508. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4568-L4569` → after: `L4923-L4924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4923-L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4923-L4924) · [Before (L4568-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4568-L4569)

```diff
-         this.nS = function(VV, eV) {
-           var xV = new BU(eV && eV.Cr),
+         this.VJ = function(HH, BH) {
+           var LH = new xS(BH && BH.UY),
```

#### 509. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4572-L4573` → after: `L4927-L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4927-L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4927-L4928) · [Before (L4572-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4572-L4573)

```diff
-           for (; VV > YV.length;) this.nS(YV.length, {});
-           this.WH++, YV[VV] = !!qV.solid, UV[VV] = !!qV.solid && (qV.PE ?? !0), yV[VV] = qV.PE ?? null, pV[VV] = !!qV.opaque, QV[VV] = !!qV.Cr, nV[VV] = !!qV.pVV, ZV[VV] = qV.pVV || null;
+           for (; HH > rH.length;) this.VJ(rH.length, {});
+           this.iZ++, rH[HH] = !!vH.solid, SH[HH] = !!vH.solid && (vH.hW ?? !0), hH[HH] = vH.hW ?? null, tH[HH] = !!vH.opaque, zH[HH] = !!vH.UY, CH[HH] = !!vH.I9, XH[HH] = vH.I9 || null;
```

#### 510. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4583-L4586` → after: `L4938-L4941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4938-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4938-L4941) · [Before (L4583-L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4583-L4586)

```diff
-           for (var TV = 0; TV < 6; ++TV) this.Fb[6 * VV + TV] = bU(this, JV, tV[TV], !0);
-           wV[VV] = {}, QV[VV] && (wV[VV].Iv = qV.Iv, wV[VV].QVV = qV.QVV);
-           var AV = qV.onLoad || qV.mN || qV.bM || qV.rM || qV.qN;
-           vV[VV] = AV ? new EU(qV) : null, kV[VV] = qV.Lk?.some((VV => VV >= 1)) ? qV.Lk.map((VV => Math.max(VV, 0))) : null, bV[VV] = (qV.AE ?? 0) >= 1 ? qV.AE : null, pV[VV] ? EV[VV] = 15 : (qV.fk ?? 0) >= 1 ? EV[VV] = qV.fk : EV[VV] = QV[VV] ? 3 : 1, BV[VV] = qV.uD | (pV[VV] ? … [truncated]
+           for (var UH = 0; UH < 6; ++UH) this.LQ[6 * HH + UH] = WS(this, AH, PH[UH], !0);
+           EH[HH] = {}, zH[HH] && (EH[HH].nG = vH.nG, EH[HH].K9 = vH.K9);
+           var OH = vH.onLoad || vH.cV || vH.LO || vH.HO || vH.GV;
+           GH[HH] = OH ? new MS(vH) : null, uH[HH] = vH.Uu?.some((HH => HH >= 1)) ? vH.Uu.map((HH => Math.max(HH, 0))) : null, QH[HH] = (vH.tW ?? 0) >= 1 ? vH.tW : null, tH[HH] ? WH[HH] = 15 : (vH.Vu ?? 0) >= 1 ? WH[HH] = vH.Vu : WH[HH] = zH[HH] ? 3 : 1, MH[HH] = vH.iN | (tH[HH] ? … [truncated]
```

#### 511. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4589` → after: `L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4944) · [Before (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4589)

```diff
-         }, this.nVV = function(VV, eV) {
+         }, this.N9 = function(HH, BH) {
```

#### 512. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4594` → after: `L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4949) · [Before (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4594)

```diff
-           var yV = (YV.xVV ?? []).map((VV => this.I6 + VV)),
+           var hH = (rH.Y1 ?? []).map((HH => this.i5 + HH)),
```

#### 513. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4597` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4952) · [Before (L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4597)

```diff
-           4 === QV.length && (pV = QV.pop()), !0 === YV.wVV ? qV[UV] = QV : qV[UV] = null, tV[UV] = YV.YVV, FV[UV] = {
+           4 === zH.length && (tH = zH.pop()), !0 === rH.J9 ? vH[SH] = zH : vH[SH] = null, PH[SH] = rH.R7, TH[SH] = {
```

#### 514. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4600-L4606` → after: `L4955-L4961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4955-L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4955-L4961) · [Before (L4600-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4600-L4606)

```diff
-             xVV: yV,
-             JVV: !!YV.JVV,
-             YVV: YV.YVV,
-             Rb: YV.ZVV,
-             XE: YV.XE,
-             UVV: YV.UVV,
-             yVV: YV.yVV ?? null
+             Y1: hH,
+             U1: !!rH.U1,
+             R7: rH.R7,
+             GQ: rH.W8,
+             zW: rH.zW,
+             W9: rH.W9,
+             o9: rH.o9 ?? null
```

#### 515. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4608-L4610` → after: `L4963-L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4963-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4963-L4965) · [Before (L4608-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4608-L4610)

```diff
-           const nV = xV.vVV(UV);
-           return YV.YVV >= 0 && YV.JVV && (0, vU.l)(xV, UV, xV.eb(nV)), UV
-         }, this.I3 = function(VV) {
+           const CH = LH.K8(SH);
+           return rH.R7 >= 0 && rH.U1 && (0, YS.h)(LH, SH, LH.eu(CH)), SH
+         }, this.Ay = function(HH) {
```

#### 516. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4612` → after: `L4967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4967) · [Before (L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4612)

```diff
-         }, this.Dr = function(VV) {
+         }, this.PY = function(HH) {
```

#### 517. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4614` → after: `L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4969) · [Before (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4614)

```diff
-         }, this.DH = function(VV) {
+         }, this.LJ = function(HH) {
```

#### 518. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4616` → after: `L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4971) · [Before (L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4616)

```diff
-         }, this.rVV = function(VV) {
+         }, this.Z8 = function(HH) {
```

#### 519. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4618` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4973) · [Before (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4618)

```diff
-         }, this.kVV = function(VV) {
+         }, this.HHH = function(HH) {
```

#### 520. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4620` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4975) · [Before (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4620)

```diff
-         }, this.bVV = function(VV) {
+         }, this.BHH = function(HH) {
```

#### 521. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4622` → after: `L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4977) · [Before (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4622)

```diff
-         }, this.EVV = function(VV) {
+         }, this.LHH = function(HH) {
```

#### 522. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4624-L4626` → after: `L4979-L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4979-L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4979-L4981) · [Before (L4624-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4624-L4626)

```diff
-         }, this.BVV = function(VV, eV) {
-           return this.Fb[6 * VV + eV]
-         }, this.Wb = function(VV) {
+         }, this.AHH = function(HH, BH) {
+           return this.LQ[6 * HH + BH]
+         }, this.XQ = function(HH) {
```

#### 523. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4628` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4983) · [Before (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4628)

```diff
-         }, this.jVV = function() {
+         }, this.rHH = function() {
```

#### 524. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4630-L4631` → after: `L4985-L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4985-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4985-L4986) · [Before (L4630-L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4630-L4631)

```diff
-           return FV.some((eV => eV.xVV.some((xV => xV === VV && eV.JVV))))
-         }, this.ar = YV, this.tb = pV, this.ir = QV, this.YM = nV, this.qVV = ZV, this.pM = vV, this.xG = rV, this.Pb = qV, this.Tb = tV, this.Xb = kV, this.Mb = bV, this.zb = EV, this.yb = BV, this.tVV = jV
+           return TH.some((BH => BH.Y1.some((LH => LH === HH && BH.U1))))
+         }, this.VY = rH, this.BQ = tH, this.TY = zH, this.JV = CH, this.SHH = XH, this.yV = GH, this.Yk = YH, this.rQ = vH, this.AQ = PH, this.tQ = uH, this.zQ = QH, this.CQ = WH, this.ju = MH, this.hHH = xH
```

#### 525. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4638` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4993) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4638)

```diff
-       return void 0 === YV && JV && (YV = VV.nVV(xV, {})), YV
+       return void 0 === rH && AH && (rH = HH.N9(LH, {})), rH
```

#### 526. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4642` → after: `L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L4997) · [Before (L4642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4642)

```diff
-       this.onLoad = VV.onLoad || null, this.mN = VV.mN || null, this.bM = VV.bM || null, this.rM = VV.rM || null, this.qN = VV.qN || null
+       this.onLoad = HH.onLoad || null, this.cV = HH.cV || null, this.LO = HH.LO || null, this.HO = HH.HO || null, this.GV = HH.GV || null
```

#### 527. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4647` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5002) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4647)

```diff
-       this.solid = !VV, this.PE = null, this.opaque = !VV, this.Cr = !1, this.material = null, this.pVV = null, this.Iv = 1, this.QVV = .5, this.onLoad = null, this.mN = null, this.bM = null, this.rM = null, this.qN = null, this.Lk = null, this.AE = null, this.fk = null, this.uD  … [truncated]
+       this.solid = !HH, this.hW = null, this.opaque = !HH, this.UY = !1, this.material = null, this.I9 = null, this.nG = 1, this.K9 = .5, this.onLoad = null, this.cV = null, this.LO = null, this.HO = null, this.GV = null, this.Uu = null, this.tW = null, this.Vu = null, this.iN =  … [truncated]
```

#### 528. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4651` → after: `L5006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5006) · [Before (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4651)

```diff
-       this.color = null, this.wVV = !0, this.xVV = [], this.JVV = !1, this.YVV = -1, this.UVV = null, this.yVV = null, this.ZVV = null, this.XE = null
+       this.color = null, this.J9 = !0, this.Y1 = [], this.U1 = !1, this.R7 = -1, this.W9 = null, this.o9 = null, this.W8 = null, this.zW = null
```

#### 529. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4653-L4656` → after: `L5008-L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5008-L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5008-L5011) · [Before (L4653-L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4653-L4656)

```diff
-     xV(3185);
-     var qU = xV(3189),
-       tU = xV(38991),
-       FU = xV(40867);
+     LH(3150);
+     var PS = LH(3166),
+       TS = LH(38697),
+       US = LH(40630);
```

#### 530. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4659-L4661` → after: `L5014-L5016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5014-L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5014-L5016) · [Before (L4659-L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4659-L4661)

```diff
-       this.iv = VV, this.mesh = eV;
-       var xV = eV.sk();
-       this.PVV = !0 === xV.AVV && !!VV.Xk, this.PVV && (0, tU.l)(eV), this.XVV = xV.MVV?.(eV, this.PVV ? NU : AU) ?? null, this.buffer = null, this.zVV = null, this.GVV = null, this.RVV = VV.Sb.RVV, this.jR = !1, this.gVV = null, this.DVV = null, this.iVV = 0, this.TE = null, thi … [truncated]
+       this.bG = HH, this.mesh = BH;
+       var LH = BH.Iu();
+       this.CHH = !0 === LH.EHH && !!HH.Cu, this.CHH && (0, TS.n)(BH), this.GHH = LH.YHH?.(BH, this.CHH ? kS : bS) ?? null, this.buffer = null, this.uHH = null, this.QHH = null, this.MHH = HH.oQ.MHH, this.mq = !1, this.xHH = null, this.vHH = null, this.PHH = 0, this.rW = null, thi … [truncated]
```

#### 531. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4665-L4666` → after: `L5020-L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5020-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5020-L5021) · [Before (L4665-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4665-L4666)

```diff
-           if (xV.BeV && Array.isArray(xV.BeV))
-             for (var YV = 0; YV < xV.BeV.length; YV++) xV.BeV[YV] && JV.push(xV.BeV[YV]);
+           if (LH.BBH && Array.isArray(LH.BBH))
+             for (var rH = 0; rH < LH.BBH.length; rH++) LH.BBH[rH] && AH.push(LH.BBH[rH]);
```

#### 532. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4670` → after: `L5025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5025) · [Before (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4670)

```diff
-             DU.has(UV) || ((0, tU.d)(UV, eV), DU.add(UV))
+             eS.has(SH) || ((0, TS.c)(SH, BH), eS.add(SH))
```

#### 533. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4672` → after: `L5027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5027) · [Before (L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4672)

```diff
-         }(this.mesh, VV.gZ), this.iv.gZ.bC(this.mesh), this.iv.emit("addingTerrainMesh", this.mesh)
+         }(this.mesh, HH.mX), this.bG.mX.jR(this.mesh), this.bG.emit("addingTerrainMesh", this.mesh)
```

#### 534. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4676-L4677` → after: `L5031-L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5031-L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5031-L5032) · [Before (L4676-L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4676-L4677)

```diff
-       return (null === eV || eV.data.length < 2 * VV.iVV) && (eV = {
-         data: new Uint32Array(Math.max(16, 4 * VV.iVV)),
+       return (null === BH || BH.data.length < 2 * HH.PHH) && (BH = {
+         data: new Uint32Array(Math.max(16, 4 * HH.PHH)),
```

#### 535. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4679` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5034) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4679)

```diff
-       }), eV.count = (0, FU.H)(VV.gVV, VV.DVV, VV.iVV, xV, FU.h, eV.data), eV
+       }), BH.count = (0, US.R)(HH.xHH, HH.vHH, HH.PHH, LH, US.e, BH.data), BH
```

#### 536. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4682-L4683` → after: `L5037-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5037-L5038) · [Before (L4682-L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4682-L4683)

```diff
-       this.ik || (this.RVV.IVV.delete(this), (0, FU.F)(this.mesh, null), this.jR && (0, FU.B)(this.mesh, void 0), this.jR = !1, this.mesh.VeV = 0, this.eeV(0), this.iv.emit("removingTerrainMesh", this.mesh), this.iv.gZ.xeV(this.mesh, !1), this.mesh = null, this.fVV = null, this.m … [truncated]
-     }, TU.prototype.YeV = function(VV, eV, xV, JV, YV, UV, yV) {
+       this.Mu || (this.MHH.cHH.delete(this), (0, US.Q)(this.mesh, null), this.mq && (0, US.J)(this.mesh, void 0), this.mq = !1, this.mesh.gHH = 0, this.NHH(0), this.bG.emit("removingTerrainMesh", this.mesh), this.bG.mX.RHH(this.mesh, !1), this.mesh = null, this.mHH = null, this.o … [truncated]
+     }, VS.prototype.nHH = function(HH, BH, LH, AH, rH, SH, hH) {
```

#### 537. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4685-L4687` → after: `L5040-L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5040-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5040-L5042) · [Before (L4685-L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4685-L4687)

```diff
-         if (VV.count < VV.Jv) return;
-         var eV = Math.max(8, 2 * VV.Jv);
-         VV.eeV(eV)
+         if (HH.count < HH.aX) return;
+         var BH = Math.max(8, 2 * HH.aX);
+         HH.NHH(BH)
```

#### 538. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4690` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5045) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4690)

```diff
-       this.mVV[this.count] = eV, this.fVV.set(eV, pV);
+       this.oHH[this.count] = BH, this.mHH.set(BH, tH);
```

#### 539. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4693-L4701` → after: `L5048-L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5048-L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5048-L5056) · [Before (L4693-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4693-L4701)

```diff
-       if (QV.set(UV.matrix, pV), QV[pV + 12] = nV[0] + (VV.x - yV[0] + xV), QV[pV + 13] = nV[1] + (VV.y - yV[1] + JV), QV[pV + 14] = nV[2] + (VV.z - yV[2] + YV), this.jR) {
-         var wV = (0, FU.q)(this.buffer, pV, this.bounds.min, this.bounds.max, VV.x - yV[0] + xV, VV.y - yV[1] + JV, VV.z - yV[2] + YV);
-         this.GVV[this.count] = wV ? this.RVV.ZN(VV) : 0
-       }
-       this.count++, this.Jb = !0
-     }, TU.prototype.TVV = function(VV, eV) {
-       return this.PVV ? (eV | this.iv.jZ.yb[VV] << 16) >>> 0 : eV
-     }, TU.prototype.yeV = function(VV, eV) {
-       var xV = this.fVV.get(eV);
+       if (zH.set(SH.matrix, tH), zH[tH + 12] = CH[0] + (HH.x - hH[0] + LH), zH[tH + 13] = CH[1] + (HH.y - hH[1] + AH), zH[tH + 14] = CH[2] + (HH.z - hH[2] + rH), this.mq) {
+         var EH = (0, US.w)(this.buffer, tH, this.bounds.min, this.bounds.max, HH.x - hH[0] + LH, HH.y - hH[1] + AH, HH.z - hH[2] + rH);
+         this.QHH[this.count] = EH ? this.MHH.tV(HH) : 0
+       }
+       this.count++, this.gu = !0
+     }, VS.prototype.zHH = function(HH, BH) {
+       return this.CHH ? (BH | this.bG.YX.ju[HH] << 16) >>> 0 : BH
+     }, VS.prototype.DHH = function(HH, BH) {
+       var LH = this.mHH.get(BH);
```

#### 540. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4703` → after: `L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5058) · [Before (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4703)

```diff
-       this.fVV.delete(eV);
+       this.mHH.delete(BH);
```

#### 541. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4710-L4712` → after: `L5065-L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5065-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5065-L5067) · [Before (L4710-L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4710-L4712)

```diff
-         }(this.buffer, UV, this.buffer, xV), this.zVV[JV] = this.zVV[YV], this.jR && (this.GVV[JV] = this.GVV[YV]);
-         var yV = this.mVV[YV];
-         this.fVV.set(yV, xV), this.mVV[JV] = yV
+         }(this.buffer, SH, this.buffer, LH), this.uHH[AH] = this.uHH[rH], this.mq && (this.QHH[AH] = this.QHH[rH]);
+         var hH = this.oHH[rH];
+         this.mHH.set(hH, LH), this.oHH[AH] = hH
```

#### 542. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4714` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5069) · [Before (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4714)

```diff
-       this.count--, this.Jb = !0,
+       this.count--, this.gu = !0,
```

#### 543. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4716-L4718` → after: `L5071-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5071-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5071-L5073) · [Before (L4716-L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4716-L4718)

```diff
-           if (VV.count > .4 * VV.Jv) return;
-           if (VV.Jv < 100) return;
-           VV.eeV(Math.round(VV.Jv / 2)), VV.mVV.length = Math.min(VV.mVV.length, VV.Jv)
+           if (HH.count > .4 * HH.aX) return;
+           if (HH.aX < 100) return;
+           HH.NHH(Math.round(HH.aX / 2)), HH.oHH.length = Math.min(HH.oHH.length, HH.aX)
```

#### 544. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4720` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5075) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4720)

```diff
-     }, TU.prototype.peV = function() {
+     }, VS.prototype.wHH = function() {
```

#### 545. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4722-L4724` → after: `L5077-L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5077-L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5077-L5079) · [Before (L4722-L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4722-L4724)

```diff
-       this.Jb ? (this.jR && (8 * gU(VV = this) > GU.length && (function(VV) {
-         for (var eV = VV.count, xV = VV.GVV, JV = 0; JV < eV; JV++) XU[xV[JV]]++;
-         WU = VV.RVV.keys, GU.sort(RU), WU = null;
+       this.gu ? (this.mq && (8 * cS(HH = this) > fS.length && (function(HH) {
+         for (var BH = HH.count, LH = HH.QHH, AH = 0; AH < BH; AH++) mS[LH[AH]]++;
+         lS = HH.MHH.keys, fS.sort(KS), lS = null;
```

#### 546. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4729` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5084) · [Before (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4729)

```diff
-         for (var pV = VV.buffer.slice(0, eV << 4), QV = VV.zVV.slice(0, eV), nV = xV.slice(0, eV), wV = VV.mVV.slice(0, eV), ZV = 0; ZV < eV; ZV++) {
+         for (var tH = HH.buffer.slice(0, BH << 4), zH = HH.uHH.slice(0, BH), CH = LH.slice(0, BH), EH = HH.oHH.slice(0, BH), XH = 0; XH < BH; XH++) {
```

#### 547. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4733` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5088) · [Before (L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4733)

```diff
-             VV.zVV[vV] = QV[ZV], xV[vV] = nV[ZV];
+             HH.uHH[GH] = zH[XH], LH[GH] = CH[XH];
```

#### 548. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4735` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5090) · [Before (L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4735)

```diff
-             VV.mVV[vV] = EV, VV.fVV.set(EV, kV)
+             HH.oHH[GH] = WH, HH.mHH.set(WH, uH)
```

#### 549. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4739-L4745` → after: `L5094-L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5094-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5094-L5100) · [Before (L4739-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4739-L4745)

```diff
-       }(VV), gU(VV)), (0, FU.F)(this.mesh, null), this.CVV = !1, null !== this.aVV && (this.oVV = this.aVV, this.aVV = null, (0, FU.B)(this.mesh, null)), this.cVV = !0), this.mesh.VeV = this.count, this.XVV ? (this.XVV.QeV(this.count), this.XVV.neV()) : (this.mesh.weV("matrix"),  … [truncated]
-     }, TU.prototype.ZeV = function(VV, eV, xV) {
-       if (0 !== this.iVV && ((0, FU.p)() ? (this.TE = PU(this, this.TE, VV), this.CVV = this.TE.count >= 0, (0, FU.F)(this.mesh, this.CVV ? this.TE : null)) : this.CVV && (this.CVV = !1, (0, FU.F)(this.mesh, null)), xV || this.cVV)) {
-         this.cVV = !1;
-         var JV = PU(this, this.oVV, eV),
-           YV = this.aVV;
-         JV.count < 0 ? (this.oVV = JV, null !== YV && (this.aVV = null, (0, FU.B)(this.mesh, null))) : null !== YV && function(VV, eV) {
+       }(HH), cS(HH)), (0, US.Q)(this.mesh, null), this.THH = !1, null !== this.UHH && (this.VHH = this.UHH, this.UHH = null, (0, US.J)(this.mesh, null)), this.OHH = !0), this.mesh.gHH = this.count, this.GHH ? (this.GHH.ZHH(this.count), this.GHH.dHH()) : (this.mesh.aHH("matrix"),  … [truncated]
+     }, VS.prototype.sHH = function(HH, BH, LH) {
+       if (0 !== this.PHH && ((0, US.t)() ? (this.rW = OS(this, this.rW, HH), this.THH = this.rW.count >= 0, (0, US.Q)(this.mesh, this.THH ? this.rW : null)) : this.THH && (this.THH = !1, (0, US.Q)(this.mesh, null)), LH || this.OHH)) {
+         this.OHH = !1;
+         var AH = OS(this, this.VHH, BH),
+           rH = this.UHH;
+         AH.count < 0 ? (this.VHH = AH, null !== rH && (this.UHH = null, (0, US.J)(this.mesh, null))) : null !== rH && function(HH, BH) {
```

#### 550. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4750` → after: `L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5105) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4750)

```diff
-         }(YV, JV) ? this.oVV = JV : (this.oVV = YV, this.aVV = JV, (0, FU.B)(this.mesh, JV))
+         }(rH, AH) ? this.VHH = AH : (this.VHH = rH, this.UHH = AH, (0, US.J)(this.mesh, AH))
```

#### 551. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4752` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5107) · [Before (L4752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4752)

```diff
-     }, TU.prototype.eeV = function() {
+     }, VS.prototype.NHH = function() {
```

#### 552. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4754` → after: `L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5109) · [Before (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4754)

```diff
-       if (this.Jv = VV, 0 === VV) this.buffer = null, this.zVV = null, this.GVV = null;
+       if (this.aX = HH, 0 === HH) this.buffer = null, this.uHH = null, this.QHH = null;
```

#### 553. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4756` → after: `L5111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5111) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4756)

```diff
-         var eV = new Float32Array(16 * this.Jv);
+         var BH = new Float32Array(16 * this.aX);
```

#### 554. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4760-L4763` → after: `L5115-L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5115-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5115-L5118) · [Before (L4760-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4760-L4763)

```diff
-         var YV = this.PVV ? new Uint32Array(this.Jv) : new Float32Array(this.Jv);
-         if (this.zVV) {
-           var UV = Math.min(this.zVV.length, YV.length);
-           for (JV = 0; JV < UV; JV++) YV[JV] = this.zVV[JV]
+         var rH = this.CHH ? new Uint32Array(this.aX) : new Float32Array(this.aX);
+         if (this.uHH) {
+           var SH = Math.min(this.uHH.length, rH.length);
+           for (AH = 0; AH < SH; AH++) rH[AH] = this.uHH[AH]
```

#### 555. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4765-L4767` → after: `L5120-L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5120-L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5120-L5122) · [Before (L4765-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4765-L4767)

```diff
-         if (this.zVV = YV, this.jR) {
-           var yV = new Uint16Array(this.Jv);
-           this.GVV && yV.set(this.GVV.subarray(0, Math.min(this.GVV.length, yV.length))), this.GVV = yV
+         if (this.uHH = rH, this.mq) {
+           var hH = new Uint16Array(this.aX);
+           this.QHH && hH.set(this.QHH.subarray(0, Math.min(this.QHH.length, hH.length))), this.QHH = hH
```

#### 556. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4771` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5126) · [Before (L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4771)

```diff
-       this.XVV && 0 === VV ? this.XVV.release() : this.XVV ? this.XVV.attach(this.buffer, this.zVV) : (this.mesh.beV("matrix", this.buffer, 16, pV), this.mesh.beV("aPackedLightLevels", this.zVV, 1, pV)), this.peV()
+       this.GHH && 0 === HH ? this.GHH.release() : this.GHH ? this.GHH.attach(this.buffer, this.uHH) : (this.mesh.yHH("matrix", this.buffer, 16, tH), this.mesh.yHH("aPackedLightLevels", this.uHH, 1, tH)), this.wHH()
```

#### 557. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4784-L4785` → after: `L5139-L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5139-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5139-L5140) · [Before (L4784-L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4784-L4785)

```diff
-       XU = new Uint32Array(FU.d),
-       MU = new Uint32Array(FU.d),
+       mS = new Uint32Array(US.c),
+       oS = new Uint32Array(US.c),
```

#### 558. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4796-L4803` → after: `L5151-L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5151-L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5151-L5158) · [Before (L4796-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4796-L4803)

```diff
-         xV = VV.GVV,
-         JV = VV.RVV.keys;
-       if (null === VV.gVV || VV.gVV.length < eV) {
-         var YV = Math.max(8, VV.Jv);
-         VV.gVV = new Uint16Array(YV), VV.DVV = new Uint32Array(YV)
-       }
-       var UV = VV.gVV,
-         yV = VV.DVV,
+         LH = HH.QHH,
+         AH = HH.MHH.keys;
+       if (null === HH.xHH || HH.xHH.length < BH) {
+         var rH = Math.max(8, HH.aX);
+         HH.xHH = new Uint16Array(rH), HH.vHH = new Uint32Array(rH)
+       }
+       var SH = HH.xHH,
+         hH = HH.vHH,
```

#### 559. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4810` → after: `L5165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5165) · [Before (L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4810)

```diff
-       return VV.iVV = QV, nV
+       return HH.PHH = zH, CH
```

#### 560. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4813` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5168) · [Before (L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4813)

```diff
-     var iU = xV(38667),
+     var qS = LH(38346),
```

#### 561. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4817` → after: `L5172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5172) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4817)

```diff
-         JeV: null
+         jHH: null
```

#### 562. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4821` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5176) · [Before (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4821)

```diff
-       this.JF = (0, qV.t)(VV.gZ, "objectMeshRoot");
+       this.RP = (0, vH.q)(HH.mX, "objectMeshRoot");
```

#### 563. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4825-L4827` → after: `L5180-L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5180-L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5180-L5182) · [Before (L4825-L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4825-L4827)

```diff
-           position: new SV.Ik,
-           rotation: new SV.Ik,
-           WZ: new SV.Ik
+           position: new JH.lu,
+           rotation: new JH.lu,
+           bX: new JH.lu
```

#### 564. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4830` → after: `L5185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5185) · [Before (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4830)

```diff
-       this.PeV = [], this.RVV = new FU.l;
+       this.tBH = [], this.MHH = new US.i;
```

#### 565. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4832-L4835` → after: `L5187-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5187-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5187-L5190) · [Before (L4832-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4832-L4835)

```diff
-         yV = VV.gZ.yE.sk();
-       "uk" in yV && yV.uk.add((() => {
-         for (var VV in UV) UV[VV].Jb = !0;
-         this.Yz()
+         hH = HH.mX.NQ.Iu();
+       "ou" in hH && hH.ou.add((() => {
+         for (var HH in SH) SH[HH].gu = !0;
+         this.zk()
```

#### 566. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4848` → after: `L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5203) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4848)

```diff
-           var xV = VV.jZ.qVV[eV];
+           var LH = HH.YX.SHH[BH];
```

#### 567. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4858` → after: `L5213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5213) · [Before (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4858)

```diff
-             if (!(xV = pV.get(JV))) return nV.has(eV) || (nV.add(eV), VV.hb(`Building the model of block ${eV} failed`, QV.get(JV))), null
+             if (!(LH = tH.get(AH))) return CH.has(BH) || (CH.add(BH), HH.PQ(`Building the model of block ${BH} failed`, zH.get(AH))), null
```

#### 568. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4864` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5219) · [Before (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4864)

```diff
-           return this.PeV.includes(xV) || this.PeV.push(xV), xV.metadata || (xV.metadata = {}), xV.metadata[AJ.v] = !0, UV[eV] = new TU(VV, xV)
+           return this.tBH.includes(LH) || this.tBH.push(LH), LH.metadata || (LH.metadata = {}), LH.metadata[bA.p] = !0, SH[BH] = new VS(HH, LH)
```

#### 569. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4879-L4880` → after: `L5234-L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5234-L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5234-L5235) · [Before (L4879-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4879-L4880)

```diff
-             if (QV.NeV && QV.get(rV, kV, bV) === nV) try {
-               this.XM(QV, nV, rV, kV, bV)
+             if (zH.CBH && zH.get(YH, uH, QH) === CH) try {
+               this.Hk(zH, CH, YH, uH, QH)
```

#### 570. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4884` → after: `L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5239) · [Before (L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4884)

```diff
-           yV && VV.hb("Placing the blocks of a built model failed", yV)
+           hH && HH.PQ("Placing the blocks of a built model failed", hH)
```

#### 571. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4886-L4887` → after: `L5241-L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5241-L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5241-L5242) · [Before (L4886-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4886-L4887)

```diff
-       this.Ob = function(VV) {
-         VV.NeV = new Map;
+       this.fQ = function(HH) {
+         HH.CBH = new Map;
```

#### 572. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4889-L4890` → after: `L5244-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5244-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5244-L5245) · [Before (L4889-L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4889-L4890)

```diff
-         VV.XeV = EV.length > 0 ? EV.pop() : eV * eV * eV * BV++
-       }, this.XM = function(xV, UV, yV, pV, QV) {
+         HH.EBH = WH.length > 0 ? WH.pop() : BH * BH * BH * MH++
+       }, this.Hk = function(LH, SH, hH, tH, zH) {
```

#### 573. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4893-L4894` → after: `L5248-L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5248-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5248-L5249) · [Before (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4893-L4894)

```diff
-           vV = xV.XeV + ZV,
-           rV = xV.NeV.get(ZV) || 0;
+           GH = LH.EBH + XH,
+           YH = LH.CBH.get(XH) || 0;
```

#### 574. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4896` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5251) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4896)

```diff
-           if (rV > 0) kV(rV).yeV(xV, vV);
+           if (YH > 0) uH(YH).DHH(LH, GH);
```

#### 575. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4899-L4902` → after: `L5254-L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5254-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5254-L5257) · [Before (L4899-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4899-L4902)

```diff
-             if (!bV) return wV.get(VV.jZ.qVV[UV])?.push([xV, UV, yV, pV, QV]), void xV.NeV.delete(ZV);
-             bV.YeV(xV, vV, yV, pV, QV, (eV => {
-               var xV = VV.jZ.pM[eV],
-                 UV = xV && xV.qN || null,
+             if (!QH) return EH.get(HH.YX.SHH[SH])?.push([LH, SH, hH, tH, zH]), void LH.CBH.delete(XH);
+             QH.nHH(LH, GH, hH, tH, zH, (BH => {
+               var LH = HH.YX.yV[BH],
+                 SH = LH && LH.GV || null,
```

#### 576. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4904-L4905` → after: `L5259-L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5259-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5259-L5260) · [Before (L4904-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4904-L4905)

```diff
-               if (yV && yV.JeV === UV) return yV;
-               for (var pV = VV.jZ.pM.length; YV.length < pV;) YV.push(null);
+               if (hH && hH.jHH === SH) return hH;
+               for (var tH = HH.YX.yV.length; rH.length < tH;) rH.push(null);
```

#### 577. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4907` → after: `L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5262) · [Before (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4907)

```diff
-               JV.position.FeV(.5, .5, .5), JV.WZ.HVV(1), JV.rotation.HVV(0), UV(JV, eV);
+               AH.position.SBH(.5, .5, .5), AH.bX.IHH(1), AH.rotation.IHH(0), SH(AH, BH);
```

#### 578. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4912` → after: `L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5267) · [Before (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4912)

```diff
-                 JeV: UV
+                 jHH: SH
```

#### 579. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4915-L4916` → after: `L5270-L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5270-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5270-L5271) · [Before (L4915-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4915-L4916)

```diff
-             var EV = bV.fVV.get(vV);
-             xV.Gk ? bV.zVV[EV >> 4] = bV.TVV(UV, (0, qU.z)(xV.Gk, xV.gk, ZV)) : bV.zVV[EV >> 4] = bV.TVV(UV, qU.j)
+             var WH = QH.mHH.get(GH);
+             LH.Gu ? QH.uHH[WH >> 4] = QH.zHH(SH, (0, PS.p)(LH.Gu, LH.Qu, XH)) : QH.uHH[WH >> 4] = QH.zHH(SH, PS.g)
```

#### 580. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4918` → after: `L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5273) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4918)

```diff
-           rV > 0 && !UV && xV.NeV.delete(ZV), UV > 0 && xV.NeV.set(ZV, UV)
+           YH > 0 && !SH && LH.CBH.delete(XH), SH > 0 && LH.CBH.set(XH, SH)
```

#### 581. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4920` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5275) · [Before (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4920)

```diff
-       }, this.Yz = function() {
+       }, this.zk = function() {
```

#### 582. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4923-L4933` → after: `L5278-L5288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5278-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5278-L5288) · [Before (L4923-L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4923-L4933)

```diff
-           eV.peV(), 0 === eV.count && eV.dispose(), eV.ik && delete UV[VV]
-         }
-         this.RVV.uploaded(), oU("rebuilt"), oU("end")
-       }, this.Zb = function(VV) {
-         var eV = VV.XeV;
-         for (var [JV, YV] of VV.NeV) kV(YV).yeV(VV, eV + JV);
-         EV.push(eV), VV.NeV = null, this.RVV.release(VV), xV = !0
-       }, this.iZ = function() {
-         xV && (this.Yz(), xV = !1)
-       }, this.MeV = function(VV) {
-         for (var JV in eV[0] += VV[0], eV[1] += VV[1], eV[2] += VV[2], UV) UV[JV].lVV = !1;
+           BH.wHH(), 0 === BH.count && BH.dispose(), BH.Mu && delete SH[HH]
+         }
+         this.MHH.uploaded(), RS("rebuilt"), RS("end")
+       }, this.wu = function(HH) {
+         var BH = HH.EBH;
+         for (var [AH, rH] of HH.CBH) uH(rH).DHH(HH, BH + AH);
+         WH.push(BH), HH.CBH = null, this.MHH.release(HH), LH = !0
+       }, this.IX = function() {
+         LH && (this.zk(), LH = !1)
+       }, this.XBH = function(HH) {
+         for (var AH in BH[0] += HH[0], BH[1] += HH[1], BH[2] += HH[2], SH) SH[AH].kHH = !1;
```

#### 583. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4936` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5291) · [Before (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4936)

```diff
-           if (!yV.lVV) {
+           if (!hH.kHH) {
```

#### 584. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4941` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5296) · [Before (L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4941)

```diff
-             yV.lVV = !0, yV.Jb = !0
+             hH.kHH = !0, hH.gu = !0
```

#### 585. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4945-L4950` → after: `L5300-L5305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5300-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5300-L5305) · [Before (L4945-L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4945-L4950)

```diff
-       }, this.Ib = function(VV) {
-         if (VV.NeV) {
-           var eV = VV.Gk,
-             JV = VV.gk,
-             YV = VV.XeV;
-           VV.NeV.forEach(((VV, yV) => {
+       }, this.IQ = function(HH) {
+         if (HH.CBH) {
+           var BH = HH.Gu,
+             AH = HH.Qu,
+             rH = HH.EBH;
+           HH.CBH.forEach(((HH, hH) => {
```

#### 586. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4952-L4954` → after: `L5307-L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5307-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5307-L5309) · [Before (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4952-L4954)

```diff
-               QV = pV.fVV.get(YV + yV) >> 4,
-               nV = pV.TVV(VV, eV ? (0, qU.z)(eV, JV, yV) : qU.j);
-             pV.zVV[QV] !== nV && (pV.zVV[QV] = nV, pV.hVV = !0, xV = !0)
+               zH = tH.mHH.get(rH + hH) >> 4,
+               CH = tH.zHH(HH, BH ? (0, PS.p)(BH, AH, hH) : PS.g);
+             tH.uHH[zH] !== CH && (tH.uHH[zH] = CH, tH.bHH = !0, LH = !0)
```

#### 587. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4960-L4966` → after: `L5315-L5321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5315-L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5315-L5321) · [Before (L4960-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4960-L4966)

```diff
-       cU = xV(38573),
-       hU = xV(38506),
-       lU = xV(38662);
-     var LU = xV(38968),
-       fU = xV(7201),
-       mU = xV(39948),
-       KU = xV(39950);
+       jS = LH(38269),
+       nS = LH(38202),
+       FS = LH(38339);
+     var DS = LH(38675),
+       wS = LH(7189),
+       ZS = LH(39682),
+       dS = LH(39686);
```

#### 588. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4973` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5328) · [Before (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4973)

```diff
-         this.iv = VV, this.options = eV, this.mode = "off", this.defines = new Map(fU.c.map((VV => [VV, 0])))
+         this.bG = HH, this.options = BH, this.mode = "off", this.defines = new Map(wS.d.map((HH => [HH, 0])))
```

#### 589. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4982` → after: `L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5337) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4982)

```diff
-         return fU.c.some((VV => 0 !== this.defineFor(VV)))
+         return wS.d.some((HH => 0 !== this.defineFor(HH)))
```

#### 590. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4985` → after: `L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5340) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4985)

```diff
-         return fU.c.some((VV => {
+         return wS.d.some((HH => {
```

#### 591. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4987` → after: `L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5342) · [Before (L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4987)

```diff
-           return !0 === (null === (eV = (0, mU.i)(this.defineFor(VV))) || void 0 === eV ? void 0 : eV.sceneDepth)
+           return !0 === (null === (BH = (0, ZS.c)(this.defineFor(HH))) || void 0 === BH ? void 0 : BH.sceneDepth)
```

#### 592. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4993-L4994` → after: `L5348-L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5348-L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5348-L5349) · [Before (L4993-L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L4993-L4994)

```diff
-         for (const xV of fU.c) {
-           const JV = (0, mU.i)(this.defineFor(xV));
+         for (const LH of wS.d) {
+           const AH = (0, ZS.c)(this.defineFor(LH));
```

#### 593. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5004` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5359) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5004)

```diff
-         return !(!this.options.keepCircleShadows && null !== (VV = this.iv.gZ.jb) && void 0 !== VV && VV.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
+         return !(!this.options.keepCircleShadows && null !== (HH = this.bG.mX.yu) && void 0 !== HH && HH.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
```

#### 594. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5007` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5362) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5007)

```diff
-         return this.iv.gZ.eE
+         return this.bG.mX.KQ
```

#### 595. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5012-L5014` → after: `L5367-L5369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5367-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5367-L5369) · [Before (L5012-L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5012-L5014)

```diff
-         for (const xV of fU.c) {
-           const JV = (0, mU.j)(this.options.variants, VV, xV),
-             YV = JV ? (0, mU.n)(JV) : 0;
+         for (const LH of wS.d) {
+           const AH = (0, ZS.f)(this.options.variants, HH, LH),
+             rH = AH ? (0, ZS.h)(AH) : 0;
```

#### 596. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5021` → after: `L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5376) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5021)

```diff
-         return null !== (eV = this.defines.get(VV)) && void 0 !== eV ? eV : 0
+         return null !== (BH = this.defines.get(HH)) && void 0 !== BH ? BH : 0
```

#### 597. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5027` → after: `L5382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5382) · [Before (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5027)

```diff
-         return this.iv.Vr
+         return this.bG.DG
```

#### 598. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5029` → after: `L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5384) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5029)

```diff
-       ReV() {
+       QBH() {
```

#### 599. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5031` → after: `L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5386) · [Before (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5031)

```diff
-         return null !== (VV = this.iv.gZ.ReV) && void 0 !== VV ? VV : SU
+         return null !== (HH = this.bG.mX.QBH) && void 0 !== HH ? HH : iS
```

#### 600. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5034` → after: `L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5389) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5034)

```diff
-         const VV = (0, KU.s)(this.ReV());
+         const HH = (0, dS.q)(this.QBH());
```

#### 601. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5041` → after: `L5396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5396) · [Before (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5041)

```diff
-           status: "pJ"
+           status: "xB"
```

#### 602. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5044-L5045` → after: `L5399-L5400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5399-L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5399-L5400) · [Before (L5044-L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5044-L5045)

```diff
-           gZ: xV
-         } = this.iv, JV = null === (VV = xV.jb) || void 0 === VV ? void 0 : VV.terrain;
+           mX: LH
+         } = this.bG, AH = null === (HH = LH.yu) || void 0 === HH ? void 0 : HH.terrain;
```

#### 603. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5047` → after: `L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5402) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5047)

```diff
-           materials: this.iv.geV.allMaterials.filter((VV => !(0, LU.f)(VV))),
+           materials: this.bG.WBH.allMaterials.filter((HH => !(0, DS.g)(HH))),
```

#### 604. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5049-L5050` → after: `L5404-L5405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5404-L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5404-L5405) · [Before (L5049-L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5049-L5050)

```diff
-           lighting: xV.eE,
-           dirLightCount: (0, hU.s)(xV.model.view),
+           lighting: LH.KQ,
+           dirLightCount: (0, nS.w)(LH.model.view),
```

#### 605. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5064-L5077` → after: `L5419-L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5419-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5419-L5432) · [Before (L5064-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5064-L5077)

```diff
-       DeV: !1,
-       nB: 1.8,
-       QB: .6,
-       ieV: [0, 10, 0],
-       wB: !1,
-       CeV: !0,
-       KD: 30,
-       Qm: 0,
-       ZB: 10,
-       Am: !0,
-       aeV: !0,
-       Wm: !1,
-       oeV: !1,
-       ceV: 25
+       MBH: !1,
+       iW: 1.8,
+       JW: .6,
+       xBH: [0, 10, 0],
+       pW: !1,
+       vBH: !0,
+       oN: 30,
+       mD: 0,
+       yW: 10,
+       qD: !0,
+       PBH: !0,
+       RD: !1,
+       TBH: !1,
+       UBH: 25
```

#### 606. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5084` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5439) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5084)

```diff
-           console.log(`noa-engine v${this.version}${eV}`)
+           console.log(`noa-engine v${this.version}${BH}`)
```

#### 607. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5086` → after: `L5441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5441) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5086)

```diff
-         this.DZ = !1, this.heV = VV.ceV, this.Vr = [0, 0, 0], this.leV = 0, this.OW = 0, this.LeV = "default", this.feV = 1, this.container = new Me(this, VV), this.cZ = new NJ.d(this, VV);
+         this.oX = !1, this.VBH = HH.UBH, this.DG = [0, 0, 0], this.OBH = 0, this.NK = 0, this.bBH = "default", this.kBH = 1, this.container = new oB(this, HH), this.cX = new kA.b(this, HH);
```

#### 608. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5088` → after: `L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5443) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5088)

```diff
-           this.gZ = new AJ.e(this, VV, this.container.canvas)
+           this.mX = new bA.b(this, HH, this.container.canvas)
```

#### 609. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5090-L5097` → after: `L5445-L5452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5445-L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5445-L5452) · [Before (L5090-L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5090-L5097)

```diff
-           throw this.fW(!0), this.container.jT.oZ = () => {}, yV
-         }
-         this.KD = this.container.jT.KD, this.Qm = this.container.jT.Qm, this.Xk = VV.Xk ? new IU(this, VV.Xk) : null, this.geV = new LU.b(this), this.inputs = new hJ(this, VV, this.container.element), this.jZ = new kU(this, VV, this.geV), this.cZ.vN = VV.meV ? EJ.create(VV.meV.wa … [truncated]
-           this.hb(VV.message, VV)
-         })) : null, VV.meV && (this.cZ.Bb = vJ.d.wasm(this.cZ.AZ, VV.meV.wasm, (VV => {
-           this.hb(VV.message, VV)
-         })), this.cZ.HeV = PJ.create(VV.meV.wasm, this.jZ, (VV => {
-           this.hb(VV.message, VV)
+           throw this.IK(!0), this.container.PU.KX = () => {}, hH
+         }
+         this.oN = this.container.PU.oN, this.mD = this.container.PU.mD, this.Cu = HH.Cu ? new pS(this, HH.Cu) : null, this.WBH = new DS.c(this), this.inputs = new nA(this, HH, this.container.element), this.YX = new QS(this, HH, this.WBH), this.cX.zV = HH.mBH ? MA.create(HH.mBH.wa … [truncated]
+           this.PQ(HH.message, HH)
+         })) : null, HH.mBH && (this.cX.pu = YA.e.wasm(this.cX.vX, HH.mBH.wasm, (HH => {
+           this.PQ(HH.message, HH)
+         })), this.cX.IBH = OA.create(HH.mBH.wasm, this.YX, (HH => {
+           this.PQ(HH.message, HH)
```

#### 610. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5100` → after: `L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5455) · [Before (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5100)

```diff
-         VV.DeV && (console.log = () => {}), VV.DeV && (console.log = xV), this.physics = new CY(this, VV), this.physics.wasm = VV.hk ? new ZJ(this, this.physics, VV.hk) : null, this.entities = new Ae.e(this, VV), this.sF = this.entities;
+         HH.MBH && (console.log = () => {}), HH.MBH && (console.log = LH), this.physics = new gr(this, HH), this.physics.wasm = HH.Pu ? new GA(this, this.physics, HH.Pu) : null, this.entities = new bB.c(this, HH), this.pT = this.entities;
```

#### 611. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5102-L5108` → after: `L5457-L5463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5457-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5457-L5463) · [Before (L5102-L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5102-L5108)

```diff
-         this.bD = JV.add(VV.ieV, VV.QB, VV.nB, null, null, !0, VV.CeV), JV.WC(this.bD, JV.names.collideTerrain), JV.WC(this.bD, JV.names.collideEntities);
-         var YV = JV.ueV(this.bD).body;
-         if (YV.gravityMultiplier = 2, YV.lK = VV.wB, this.camera = new KY(this, VV), this.ZB = VV.ZB, this.SeV = this.jZ.I3, this.IeV = null, this.deV = !1, this.exV = null, this.xxV = null, this.YxV = null, this.yxV = !1, VV.oeV || (this.pxV = VV => {
-             if (this.yxV) return void this.gZ.QxV(!1);
-             const eV = this.YxV;
-             eV ? this.gZ.QxV(!0, eV.position, eV.normal) : !VV || !this.mF.canChange && !this.cZ.nxV(VV.position[0], VV.position[1], VV.position[2]) && !this.cZ.nxV(VV.FE[0], VV.FE[1], VV.FE[2]) || this.entities.wxV(this.bD, "JA") && !1 === this.entities.getState(this.bD, "JA").J … [truncated]
-           }, this.on("miningTargetBlockChanged", this.pxV)), this.bloxd = void 0, this.hb = (VV, eV) => {
+         this.lF = AH.add(HH.xBH, HH.JW, HH.iW, null, null, !0, HH.vBH), AH.yR(this.lF, AH.names.collideTerrain), AH.yR(this.lF, AH.names.collideEntities);
+         var rH = AH.fBH(this.lF).body;
+         if (rH.gravityMultiplier = 2, rH.pw = HH.pW, this.camera = new dr(this, HH), this.yW = HH.yW, this.KBH = this.YX.Ay, this.cBH = null, this.eBH = !1, this.NBH = null, this.RBH = null, this.nBH = null, this.DBH = !1, HH.TBH || (this.wBH = HH => {
+             if (this.DBH) return void this.mX.ZBH(!1);
+             const BH = this.nBH;
+             BH ? this.mX.ZBH(!0, BH.position, BH.normal) : !HH || !this.wT.canChange && !this.cX.dBH(HH.position[0], HH.position[1], HH.position[2]) && !this.cX.dBH(HH.AW[0], HH.AW[1], HH.AW[2]) || this.entities.aBH(this.lF, "pU") && !1 === this.entities.getState(this.lF, "pU").p … [truncated]
+           }, this.on("miningTargetBlockChanged", this.wBH)), this.bloxd = void 0, this.PQ = (HH, BH) => {
```

#### 612. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5110-L5116` → after: `L5465-L5471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5465-L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5465-L5471) · [Before (L5110-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5110-L5116)

```diff
-           }, this.lb = () => {}, this.mF = {}, this.YL = {
-             [this.bD]: {}
-           }, this.vxV = void 0, this.rxV = null, this.kxV = null, this.sounds = {
-             bxV: null,
-             ExV: null
-           }, this.room = null, this.kR = null, this.BxV = null, this.fv = VV.fv, this.wT = new cU.b(this, this.geV, this.gZ.jb?.terrain ? null : (0, lU.e)(), VV), this.Sb = new aU(this), this.jxV = {
-             VVV: 0,
+           }, this.TQ = () => {}, this.wT = {}, this.mF = {
+             [this.lF]: {}
+           }, this.JBH = void 0, this.iBH = null, this.pBH = null, this.sounds = {
+             yBH: null,
+             HLH: null
+           }, this.room = null, this.Qq = null, this.BLH = null, this.cG = HH.cG, this.vU = new jS.c(this, this.WBH, this.mX.yu?.terrain ? null : (0, FS.c)(), HH), this.oQ = new NS(this), this.LLH = {
+             y5: 0,
```

#### 613. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5119-L5122` → after: `L5474-L5477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5474-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5474-L5477) · [Before (L5119-L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5119-L5122)

```diff
-             FE: jV().create(),
-             WK: jV().create()
-           }, this.qxV = new Float64Array(8), this.txV = {
-             VVV: 0,
+             AW: xH().create(),
+             Iw: xH().create()
+           }, this.ALH = new Float64Array(8), this.rLH = {
+             y5: 0,
```

#### 614. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5125-L5128` → after: `L5480-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5480-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5480-L5483) · [Before (L5125-L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5125-L5128)

```diff
-             FE: jV().create(),
-             WK: jV().create()
-           }, this.FxV = new Float64Array(8), this.TxV = jV().create(), this.PxV = {
-             AxV: jV().create(),
+             AW: xH().create(),
+             Iw: xH().create()
+           }, this.SLH = new Float64Array(8), this.hLH = xH().create(), this.tLH = {
+             zLH: xH().create(),
```

#### 615. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5131` → after: `L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5486) · [Before (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5131)

```diff
-             NxV: [0, 0, 0]
+             CLH: [0, 0, 0]
```

#### 616. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5133` → after: `L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5488) · [Before (L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5133)

```diff
-           this.vec3 = jV(), this.jE = ge(), JV.XxV(1).MxV = 999;
+           this.vec3 = xH(), this.HW = cB(), AH.ELH(1).XLH = 999;
```

#### 617. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5135` → after: `L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5490) · [Before (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5135)

```diff
-           UV.iv = this, UV.vec3 = jV(), UV.jE = ge(), UV.yE = this.gZ.yE
+           SH.bG = this, SH.vec3 = xH(), SH.HW = cB(), SH.NQ = this.mX.NQ
```

#### 618. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5140` → after: `L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5495) · [Before (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5140)

```diff
-           if (VV *= this.feV || 1, this.DZ) return void(this.cZ.zxV && this.cZ.iZ());
+           if (HH *= this.kBH || 1, this.oX) return void(this.cX.GLH && this.cX.IX());
```

#### 619. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5142-L5150` → after: `L5497-L5505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5497-L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5497-L5505) · [Before (L5142-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5142-L5150)

```diff
-               var eV = VV.sF.U_(VV.bD).AxV,
-                 xV = VV.heV;
-               if (jV().pr(eV) < xV * xV) return;
-               for (var JV = [], YV = 0; YV < 3; YV++) JV[YV] = Math.floor(eV[YV]), VV.Vr[YV] += JV[YV];
-               VV.gZ.MeV(JV), VV.entities.MeV(JV), VV.Sb.MeV(JV)
-             }(this), this.cZ.iZ(), Uy("world"), this.fv && this.fv(this.sF.uH(this.bD)) || !this.cZ.GxV) return void this.gZ.iZ(VV);
-           this.jK("beforePhysicsTick", VV), this.physics.iZ(VV), Uy("physics"), this.Sb.iZ(), this.gZ.iZ(VV), Uy("gZ"), this.VxV(), Uy("targets"), this.entities.iZ(VV), Uy("entities"), this.jK("iZ", VV), Uy("tick event"), Uy("end");
-           var eV = this.inputs.X3;
-           eV.WxV = eV.RxV = eV.gxV = 0
+               var BH = HH.pT.A4(HH.lF).zLH,
+                 LH = HH.VBH;
+               if (xH().bu(BH) < LH * LH) return;
+               for (var AH = [], rH = 0; rH < 3; rH++) AH[rH] = Math.floor(BH[rH]), HH.DG[rH] += AH[rH];
+               HH.mX.XBH(AH), HH.entities.XBH(AH), HH.oQ.XBH(AH)
+             }(this), this.cX.IX(), hh("world"), this.cG && this.cG(this.pT.xJ(this.lF)) || !this.cX.YLH) return void this.mX.IX(HH);
+           this.Xw("beforePhysicsTick", HH), this.physics.IX(HH), hh("physics"), this.oQ.IX(), this.mX.IX(HH), hh("mX"), this.gBH(), hh("targets"), this.entities.IX(HH), hh("entities"), this.Xw("IX", HH), hh("tick event"), hh("end");
+           var BH = this.inputs.mp;
+           BH.uLH = BH.QLH = BH.WLH = 0
```

#### 620. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5153` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5508) · [Before (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5153)

```diff
-             this.hb("Error in noa tickloop", xV)
+             this.PQ("Error in noa tickloop", LH)
```

#### 621. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5161-L5162` → after: `L5516-L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5516-L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5516-L5517) · [Before (L5161-L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5161-L5162)

```diff
-           if ((0, hU.j)(), this.OW = performance.now(), this.jK("renderTickBegin", VV), VV *= this.feV || 1, this.leV = eV, this.DZ) return void(this.cZ.zxV && this.cZ.render());
-           yy("start"), this.jK("beforeInputs", VV), this.camera.q_(), this.jK("afterInputs", VV), yy("init"), this.cZ.render(), yy("meshing"), this.camera.W9(VV), this.entities.render(VV), this.camera.o9(), Uy("entities"), this.jK("beforeRender", VV), yy("before render"), this.gZ … [truncated]
+           if ((0, nS.l)(), this.NK = performance.now(), this.Xw("renderTickBegin", HH), HH *= this.kBH || 1, this.OBH = BH, this.oX) return void(this.cX.GLH && this.cX.render());
+           th("start"), this.Xw("beforeInputs", HH), this.camera.L_(), this.Xw("afterInputs", HH), th("init"), this.cX.render(), th("meshing"), this.camera.e_(HH), this.entities.render(HH), this.camera.q_(), hh("entities"), this.Xw("beforeRender", HH), th("before render"), this.mX … [truncated]
```

#### 622. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5164` → after: `L5519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5519) · [Before (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5164)

```diff
-           this.hb("Error in noa renderloop", xV)
+           this.PQ("Error in noa renderloop", LH)
```

#### 623. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5169` → after: `L5524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5524) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5169)

```diff
-         this.DZ = !!VV, VV || (this.camera.X3.dx = this.camera.X3.dy = 0)
+         this.oX = !!HH, HH || (this.camera.mp.dx = this.camera.mp.dy = 0)
```

#### 624. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5174` → after: `L5529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5529) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5174)

```diff
-         return VV.length ? this.cZ.K3(VV[0], VV[1], VV[2]) : this.cZ.K3(VV, eV, xV)
+         return HH.length ? this.cX.Ip(HH[0], HH[1], HH[2]) : this.cX.Ip(HH, BH, LH)
```

#### 625. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5179` → after: `L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5534) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5179)

```diff
-         return xV = eV.length ? this.cZ.bS(VV, eV[0], eV[1], eV[2]) : this.cZ.bS(VV, eV, JV, YV), this.OeV(), xV
+         return LH = BH.length ? this.cX.bJ(HH, BH[0], BH[1], BH[2]) : this.cX.bJ(HH, BH, AH, rH), this.qBH(), LH
```

#### 626. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5181` → after: `L5536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5536) · [Before (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5181)

```diff
-       CxV(VV, eV) {
+       vLH(HH, BH) {
```

#### 627. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5185-L5186` → after: `L5540-L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5540-L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5540-L5541) · [Before (L5185-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5185-L5186)

```diff
-           if (this.entities.axV(eV[0], eV[1], eV[2])) return;
-           return this.cZ.bS(VV, eV[0], eV[1], eV[2]), VV
+           if (this.entities.PLH(BH[0], BH[1], BH[2])) return;
+           return this.cX.bJ(HH, BH[0], BH[1], BH[2]), HH
```

#### 628. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5188` → after: `L5543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5543) · [Before (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5188)

```diff
-         if (!this.entities.axV(eV, xV, JV)) return this.cZ.bS(VV, eV, xV, JV), VV
+         if (!this.entities.PLH(BH, LH, AH)) return this.cX.bJ(HH, BH, LH, AH), HH
```

#### 629. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5190-L5191` → after: `L5545-L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5545-L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5545-L5546) · [Before (L5190-L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5190-L5191)

```diff
-       oxV(VV, eV, xV) {
-         var JV = this.Vr;
+       TLH(HH, BH, LH) {
+         var AH = this.DG;
```

#### 630. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5203` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5558) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5203)

```diff
-         var JV = this.Vr;
+         var AH = this.DG;
```

#### 631. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5219-L5220` → after: `L5574-L5575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5574-L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5574-L5575) · [Before (L5219-L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5219-L5220)

```diff
-         var YV = this.TxV;
-         return VV && (this.oxV(VV, null, YV), VV = YV), this.mH(VV, eV, xV, JV)
+         var rH = this.hLH;
+         return HH && (this.TLH(HH, null, rH), HH = rH), this.MJ(HH, BH, LH, AH)
```

#### 632. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5227` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5582) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5227)

```diff
-           YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.PxV;
+           rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.tLH;
```

#### 633. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5229-L5230` → after: `L5584-L5585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5584-L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5584-L5585) · [Before (L5229-L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5229-L5230)

```diff
-         VV || (VV = this.camera.T_()), eV = eV || this.camera.L_(), xV = xV || -1, xV < 0 && (xV = this.ZB);
-         var UV, yV = YV.AxV,
+         HH || (HH = this.camera.r_()), BH = BH || this.camera.T_(), LH = LH || -1, LH < 0 && (LH = this.yW);
+         var SH, hH = rH.zLH,
```

#### 634. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5233` → after: `L5588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5588) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5233)

```diff
-           nV = this.Vr;
+           CH = this.DG;
```

#### 635. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5235-L5236` → after: `L5590-L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5590-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5590-L5591) · [Before (L5235-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5235-L5236)

```diff
-           var wV = null === ey.engine ? ey : Vy();
-           wV.engine = this, wV.test = JV, wV.origin = VV, wV.direction = eV, wV.maxDistance = xV, wV.offset = nV, wV.WK = yV, wV.iK = pV, wV.hK = YV.NxV;
+           var EH = null === Lh.engine ? Lh : Bh();
+           EH.engine = this, EH.test = AH, EH.origin = HH, EH.direction = BH, EH.maxDistance = LH, EH.offset = CH, EH.Iw = hH, EH.Kw = tH, EH.Jw = rH.CLH;
```

#### 636. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5238` → after: `L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5593) · [Before (L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5238)

```diff
-             UV = QV.Pr(wV)
+             SH = zH.XY(EH)
```

#### 637. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5242-L5243` → after: `L5597-L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5597-L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5597-L5598) · [Before (L5242-L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5242-L5243)

```diff
-         } else UV = xy(this, JV, VV, eV, xV, yV, pV, YV.NxV);
-         return UV ? (jV().add(YV.NxV, YV.NxV, nV), jV().dv(yV, yV, pV, .01), this.i_(yV, YV.position), YV) : null
+         } else SH = Ah(this, AH, HH, BH, LH, hH, tH, rH.CLH);
+         return SH ? (xH().add(rH.CLH, rH.CLH, CH), xH().nY(hH, hH, tH, .01), this.M_(hH, rH.position), rH) : null
```

#### 638. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5251` → after: `L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5606) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5251)

```diff
-             VVV: 0,
+             y5: 0,
```

#### 639. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5254-L5255` → after: `L5609-L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5609-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5609-L5610) · [Before (L5254-L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5254-L5255)

```diff
-             FE: [],
-             WK: []
+             AW: [],
+             Iw: []
```

#### 640. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5257` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5612) · [Before (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5257)

```diff
-           UV = this.Pr(VV, eV, xV, JV);
+           SH = this.XY(HH, BH, LH, AH);
```

#### 641. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5260` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5615) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5260)

```diff
-       VxV() {
+       gBH() {
```

#### 642. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5262-L5266` → after: `L5617-L5621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5617-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5617-L5621) · [Before (L5262-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5262-L5266)

```diff
-         this.deV = !1;
-         var eV = this.SeV || this.jZ.I3;
-         let xV = this.rxV,
-           JV = this.kxV;
-         var YV = this.mH(xV, JV, null, eV);
+         this.eBH = !1;
+         var BH = this.KBH || this.YX.Ay;
+         let LH = this.iBH,
+           AH = this.pBH;
+         var rH = this.MJ(LH, AH, null, BH);
```

#### 643. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5268-L5281` → after: `L5623-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5623-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5623-L5636) · [Before (L5268-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5268-L5281)

```diff
-           var UV = this.jxV;
-           Yy(this, YV, UV), this.IeV = UV
-         } else this.IeV = null;
-         const yV = this.cxV(),
-           pV = this.IeV;
-         if (pV && !yV(pV.VVV, pV.position[0], pV.position[1], pV.position[2]) && (YV = this.mH(xV, JV, null, yV)), YV) {
-           const VV = this.txV;
-           Yy(this, YV, VV), this.exV = VV
-         } else this.exV = null;
-         (Jy(this.qxV, this.IeV) || VV) && this.emit("targetBlockChanged", this.IeV), (Jy(this.FxV, this.exV) || VV) && this.emit("miningTargetBlockChanged", this.exV)
-       }
-       OeV() {
-         if (this.jxV.VVV = this.cZ.K3(this.jxV.position[0], this.jxV.position[1], this.jxV.position[2]), 0 === this.jxV.VVV && (this.IeV = null, this.deV = !0), this.exV) {
-           const VV = this.exV,
+           var SH = this.LLH;
+           Sh(this, rH, SH), this.cBH = SH
+         } else this.cBH = null;
+         const hH = this.ULH(),
+           tH = this.cBH;
+         if (tH && !hH(tH.y5, tH.position[0], tH.position[1], tH.position[2]) && (rH = this.MJ(LH, AH, null, hH)), rH) {
+           const HH = this.rLH;
+           Sh(this, rH, HH), this.NBH = HH
+         } else this.NBH = null;
+         (rh(this.ALH, this.cBH) || HH) && this.emit("targetBlockChanged", this.cBH), (rh(this.SLH, this.NBH) || HH) && this.emit("miningTargetBlockChanged", this.NBH)
+       }
+       qBH() {
+         if (this.LLH.y5 = this.cX.Ip(this.LLH.position[0], this.LLH.position[1], this.LLH.position[2]), 0 === this.LLH.y5 && (this.cBH = null, this.eBH = !0), this.NBH) {
+           const HH = this.NBH,
```

#### 644. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5283-L5284` → after: `L5638-L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5638-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5638-L5639) · [Before (L5283-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5283-L5284)

```diff
-           VV.VVV = this.cZ.K3(eV[0], eV[1], eV[2]);
-           this.cxV()(VV.VVV, eV[0], eV[1], eV[2]) || (this.exV = null)
+           HH.y5 = this.cX.Ip(BH[0], BH[1], BH[2]);
+           this.ULH()(HH.y5, BH[0], BH[1], BH[2]) || (this.NBH = null)
```

#### 645. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5287-L5288` → after: `L5642-L5643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5642-L5643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5642-L5643) · [Before (L5287-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5287-L5288)

```diff
-       JxV(VV) {
-         this.YxV = VV, this.pxV(this.exV)
+       jBH(HH) {
+         this.nBH = HH, this.wBH(this.NBH)
```

#### 646. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5290-L5291` → after: `L5645-L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5645-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5645-L5646) · [Before (L5290-L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5290-L5291)

```diff
-       UxV(VV) {
-         this.yxV = VV, this.pxV?.(this.exV)
+       FBH(HH) {
+         this.DBH = HH, this.wBH?.(this.NBH)
```

#### 647. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5293-L5294` → after: `L5648-L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5648-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5648-L5649) · [Before (L5293-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5293-L5294)

```diff
-       cxV() {
-         return this.xxV || this.SeV || this.jZ.I3
+       ULH() {
+         return this.RBH || this.KBH || this.YX.Ay
```

#### 648. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5306-L5309` → after: `L5661-L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5661-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5661-L5664) · [Before (L5306-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5306-L5309)

```diff
-         WK: null,
-         iK: null,
-         hK: null,
-         gH: () => xy(VV.engine, VV.test, VV.origin, VV.direction, VV.maxDistance, VV.WK, VV.iK, VV.hK)
+         Iw: null,
+         Kw: null,
+         Jw: null,
+         HJ: () => Ah(HH.engine, HH.test, HH.origin, HH.direction, HH.maxDistance, HH.Iw, HH.Kw, HH.Jw)
```

#### 649. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5316-L5317` → after: `L5671-L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5671-L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5671-L5672) · [Before (L5316-L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5316-L5317)

```diff
-       var QV = VV.cZ,
-         nV = VV.Vr,
+       var zH = HH.cX,
+         CH = HH.DG,
```

#### 650. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5319-L5320` → after: `L5674-L5675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5674-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5674-L5675) · [Before (L5319-L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5319-L5320)

```diff
-           var UV = QV.K3(xV + nV[0], JV + nV[1], YV + nV[2]);
-           return eV(UV, xV + nV[0], JV + nV[1], YV + nV[2]) && (VV.jZ.DH(UV) ?? !0)
+           var SH = zH.Ip(LH + CH[0], AH + CH[1], rH + CH[2]);
+           return BH(SH, LH + CH[0], AH + CH[1], rH + CH[2]) && (HH.YX.LJ(SH) ?? !0)
```

#### 651. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5322-L5323` → after: `L5677-L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5677-L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5677-L5678) · [Before (L5322-L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5322-L5323)

```diff
-           var YV = QV.K3(eV + nV[0], xV + nV[1], JV + nV[2]);
-           return VV.jZ.Dr(YV)
+           var rH = zH.Ip(BH + CH[0], LH + CH[1], AH + CH[2]);
+           return HH.YX.PY(rH)
```

#### 652. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5376-L5377` → after: `L5731-L5732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5731-L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5731-L5732) · [Before (L5376-L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5376-L5377)

```diff
-       } = eV, YV = 1 !== VV[0] || VV[1] !== xV[0] || VV[2] !== xV[1] || VV[3] !== xV[2] || VV[4] !== eV.VVV || VV[5] !== JV[0] || VV[6] !== JV[1] || VV[7] !== JV[2];
-       return VV[0] = 1, VV[1] = xV[0], VV[2] = xV[1], VV[3] = xV[2], VV[4] = eV.VVV, VV[5] = JV[0], VV[6] = JV[1], VV[7] = JV[2], YV
+       } = BH, rH = 1 !== HH[0] || HH[1] !== LH[0] || HH[2] !== LH[1] || HH[3] !== LH[2] || HH[4] !== BH.y5 || HH[5] !== AH[0] || HH[6] !== AH[1] || HH[7] !== AH[2];
+       return HH[0] = 1, HH[1] = LH[0], HH[2] = LH[1], HH[3] = LH[2], HH[4] = BH.y5, HH[5] = AH[0], HH[6] = AH[1], HH[7] = AH[2], rH
```

#### 653. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5381` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5736) · [Before (L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5381)

```diff
-       jV().copy(xV.position, eV.NxV), jV().copy(xV.normal, eV.normal), jV().add(xV.FE, xV.position, xV.normal), jV().copy(xV.WK, eV.position), xV.VVV = VV.cZ.K3(xV.position[0], xV.position[1], xV.position[2])
+       xH().copy(LH.position, BH.CLH), xH().copy(LH.normal, BH.normal), xH().add(LH.AW, LH.position, LH.normal), xH().copy(LH.Iw, BH.position), LH.y5 = HH.cX.Ip(LH.position[0], LH.position[1], LH.position[2])
```

#### 654. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5385-L5403` → after: `L5740-L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5740-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5740-L5758) · [Before (L5385-L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5385-L5403)

```diff
-       py = xV(3194),
-       Qy = xV(39919),
-       ny = xV(37469),
-       wy = xV(37458),
-       Zy = xV(3196),
-       vy = xV(3208),
-       ry = xV(37444),
-       ky = xV(37442),
-       by = xV(4126),
-       Ey = xV(5180),
-       By = xV(37418),
-       jy = xV(4122),
-       qy = xV(3258),
-       ty = xV(3268),
-       Fy = xV(35139),
-       Ty = xV(691),
- ... (3 more removed lines; see GitHub link above)
+       zh = LH(3168),
+       Ch = LH(39649),
+       Eh = LH(37083),
+       Xh = LH(37069),
+       Gh = LH(3171),
+       Yh = LH(3178),
+       uh = LH(37053),
+       Qh = LH(37044),
+       Wh = LH(4080),
+       Mh = LH(5143),
+       xh = LH(37018),
+       vh = LH(4074),
+       Ph = LH(3228),
+       Th = LH(1826),
+       Uh = LH(34821),
+       Vh = LH(644),
+ ... (3 more added lines; see GitHub link above)
```

#### 655. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5410` → after: `L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5765) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5410)

```diff
-           } = await Promise.all([xV.e(613), xV.e(297)]).then((() => xV(44547)));
+           } = await Promise.all([LH.e(613), LH.e(301)]).then((() => LH(45129)));
```

#### 656. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5422-L5423` → after: `L5777-L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5777-L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5777-L5778) · [Before (L5422-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5422-L5423)

```diff
-                 Aq: eV,
-                 jb: VV,
+                 vx: BH,
+                 yu: HH,
```

#### 657. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5433` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5788) · [Before (L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5433)

```diff
-                   (0, Ay.w)(VV.gpuDevice);
+                   (0, bh.y)(HH.gpuDevice);
```

#### 658. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5467-L5468` → after: `L5822-L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5822-L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5822-L5823) · [Before (L5467-L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5467-L5468)

```diff
-           yV = null !== (YV = null !== JV && void 0 !== JV ? JV : null === xV || void 0 === xV ? void 0 : xV.message) && void 0 !== YV ? YV : String(xV);
-         (0, Ny.c)("Lite pipeline failed", new Error(`${VV}${UV?` ${UV}`:""}: ${yV} [${eV}]`))
+           hH = null !== (rH = null !== AH && void 0 !== AH ? AH : null === LH || void 0 === LH ? void 0 : LH.message) && void 0 !== rH ? rH : String(LH);
+         (0, kh.d)("Lite pipeline failed", new Error(`${HH}${SH?` ${SH}`:""}: ${hH} [${BH}]`))
```

#### 659. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5472-L5486` → after: `L5827-L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5827-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5827-L5841) · [Before (L5472-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5472-L5486)

```diff
-     var Wy = xV(370),
-       Ry = xV(39943),
-       gy = xV(27),
-       Dy = xV(3155),
-       iy = xV(39952),
-       Cy = xV(355),
-       ay = xV(138),
-       oy = xV(4734),
-       cy = xV(1817),
-       hy = xV(4861),
-       ly = xV(4854),
-       Ly = xV(3091),
-       fy = xV(3233),
-       my = xV(37622),
-       Ky = xV(3097);
+     var lh = LH(314),
+       Kh = LH(39677),
+       ch = LH(15),
+       eh = LH(3119),
+       qh = LH(39689),
+       gh = LH(297),
+       Nh = LH(120),
+       Rh = LH(4712),
+       jh = LH(1757),
+       nh = LH(4806),
+       Fh = LH(4804),
+       Dh = LH(3030),
+       wh = LH(3193),
+       Zh = LH(37347),
+       dh = LH(3046);
```

#### 660. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5497` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5852) · [Before (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5497)

```diff
-               } = (0, Ty.n)(), yV = null === (VV = (0, uV.d)()) || void 0 === VV ? void 0 : VV.gZ, pV = null === yV || void 0 === yV ? void 0 : yV.engine, QV = pV ? (0, fy.d)(pV) : null, nV = (0, Cy.h)();
+               } = (0, Vh.n)(), hH = null === (HH = (0, aH.c)()) || void 0 === HH ? void 0 : HH.mX, tH = null === hH || void 0 === hH ? void 0 : hH.engine, zH = tH ? (0, wh.g)(tH) : null, CH = (0, gh.g)();
```

#### 661. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5502-L5507` → after: `L5857-L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5857-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5857-L5862) · [Before (L5502-L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5502-L5507)

```diff
-                 budgetBasis: (0, my.j)(),
-                 renderBackend: yV && pV ? (0, Ky.c)(yV) : null,
-                 antiAliasing: (0, fy.c)(Ly.e.getRendererMsaa(), !1),
-                 pixelScale: (0, fy.k)(),
-                 canvasSizeLargest: null !== (eV = null === QV || void 0 === QV ? void 0 : QV.largest) && void 0 !== eV ? eV : null,
-                 canvasSizeSmallest: null !== (xV = null === QV || void 0 === QV ? void 0 : QV.smallest) && void 0 !== xV ? xV : null,
+                 budgetBasis: (0, Zh.f)(),
+                 renderBackend: hH && tH ? (0, dh.e)(hH) : null,
+                 antiAliasing: (0, wh.c)(Dh.c.getRendererMsaa(), !1),
+                 pixelScale: (0, wh.t)(),
+                 canvasSizeLargest: null !== (BH = null === zH || void 0 === zH ? void 0 : zH.largest) && void 0 !== BH ? BH : null,
+                 canvasSizeSmallest: null !== (LH = null === zH || void 0 === zH ? void 0 : zH.smallest) && void 0 !== LH ? LH : null,
```

#### 662. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5519` → after: `L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5874) · [Before (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5519)

```diff
-       (0, hy.d)(VV, eV, xV, (0, ly.b)(JV), YV)
+       (0, nh.e)(HH, BH, LH, (0, Fh.e)(AH), rH)
```

#### 663. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5525-L5526` → after: `L5880-L5881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5880-L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5880-L5881) · [Before (L5525-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5525-L5526)

```diff
-       const eV = Be.q.getItem(sy);
-       return !("number" === typeof eV && Date.now() - eV < 3e5) && VV.canRejoin() && Be.q.setItem(sy, Date.now())
+       const BH = MB.f.getItem(Jh);
+       return !("number" === typeof BH && Date.now() - BH < 3e5) && HH.canRejoin() && MB.f.setItem(Jh, Date.now())
```

#### 664. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5529` → after: `L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5884) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5529)

```diff
-       EZ(VV, eV) {
+       XX(HH, BH) {
```

#### 665. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5546` → after: `L5901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5901) · [Before (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5546)

```diff
-         return !(0, ay.isDiscordClient)() && null !== (null !== (VV = null === (eV = (0, uV.b)().client.getConnectionInfo()) || void 0 === eV ? void 0 : eV.lobbyName) && void 0 !== VV ? VV : null)
+         return !(0, Nh.isDiscordClient)() && null !== (null !== (HH = null === (BH = (0, aH.b)().client.getConnectionInfo()) || void 0 === BH ? void 0 : BH.lobbyName) && void 0 !== HH ? HH : null)
```

#### 666. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5549` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5904) · [Before (L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5549)

```diff
-         (0, oy.g)(), (0, uV.b)().client.leaveGameUnwanted({
+         (0, Rh.e)(), (0, aH.b)().client.leaveGameUnwanted({
```

#### 667. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5560` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5915) · [Before (L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5560)

```diff
-         (0, Dy.d)(uy)
+         (0, eh.e)(sh)
```

#### 668. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5566` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5921) · [Before (L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5566)

```diff
-         const eV = (0, Cy.h)();
+         const BH = (0, gh.g)();
```

#### 669. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5570` → after: `L5925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5925) · [Before (L5570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5570)

```diff
-         return (0, cy.m)(VV)
+         return (0, jh.o)(HH)
```

#### 670. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5593` → after: `L5948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5948) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5593)

```diff
-         this.actions.EZ(`webgl_restored_${eV}_${(0,iy.l)(VV-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${eV})`), this.lostAt = null, this.restoredAt = VV, this.clearTimers()
+         this.actions.XX(`webgl_restored_${BH}_${(0,qh.j)(HH-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${BH})`), this.lostAt = null, this.restoredAt = HH, this.clearTimers()
```

#### 671. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5604-L5605` → after: `L5959-L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5959-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5959-L5960) · [Before (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5604-L5605)

```diff
-         } = (0, iy.x)("webgl_lost", this.startedAt, VV), YV = `webgl${this.webGlVersion} ${xV} up${(0,iy.g)(VV-this.startedAt)}: ${eV}`;
-         (0, Ny.c)(iy.e.WebGL2, new Error(YV)), this.actions.reportLoss(JV, `WebGL${this.webGlVersion} context lost: ${YV}`)
+         } = (0, qh.r)("webgl_lost", this.startedAt, HH), rH = `webgl${this.webGlVersion} ${LH} up${(0,qh.e)(HH-this.startedAt)}: ${BH}`;
+         (0, kh.d)(qh.d.WebGL2, new Error(rH)), this.actions.reportLoss(AH, `WebGL${this.webGlVersion} context lost: ${rH}`)
```

#### 672. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5635` → after: `L5990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5990) · [Before (L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5635)

```diff
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.EZ(`webgl_waiting_${eV}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(VV);
+         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.XX(`webgl_waiting_${BH}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(HH);
```

#### 673. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5637-L5639` → after: `L5992-L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5992-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L5992-L5994) · [Before (L5637-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5637-L5639)

```diff
-         const xV = (0, iy.l)(performance.now() - VV);
-         if (Sy(this.actions)) return this.actions.EZ(`webgl_rejoin_${eV}_${xV}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.EZ(`webgl_end_${eV}_${xV}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+         const LH = (0, qh.j)(performance.now() - HH);
+         if (ih(this.actions)) return this.actions.XX(`webgl_rejoin_${BH}_${LH}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
+         this.actions.XX(`webgl_end_${BH}_${LH}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
```

#### 674. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5647-L5649` → after: `L6002-L6004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6002-L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6002-L6004) · [Before (L5647-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5647-L5649)

```diff
-     var Vp = xV(1900),
-       ep = xV(3142),
-       xp = xV(4990);
+     var Bt = LH(1863),
+       Lt = LH(3105),
+       At = LH(4926);
```

#### 675. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5661` → after: `L6016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6016) · [Before (L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5661)

```diff
-       } = VV.jb;
+       } = HH.yu;
```

#### 676. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5663-L5664` → after: `L6018-L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6018-L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6018-L6019) · [Before (L5663-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5663-L5664)

```diff
-         (0, Ay.g)(xV) || ((0, ep.o)("webgpuloss") && (0, xp.b)((VV => {
-           VV.noteWebGpuLoss("js", !0 === JV.framesRefused ? `${JV.reason} frames refused` : JV.reason, JV.message)
+         (0, bh.i)(LH) || ((0, Lt.o)("webgpuloss") && (0, At.b)((HH => {
+           HH.noteWebGpuLoss("js", !0 === AH.framesRefused ? `${AH.reason} frames refused` : AH.reason, AH.message)
```

#### 677. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5674` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6029) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5674)

```diff
-           gy.b.turnOffWebGpuAfterDeviceLoss(void 0, !1, (0, Wy.l)(!0 === xV.framesRefused ? "frames_refused" : xV.reason, xV.message)), QV || (Yp.gaveUp = !0);
+           ch.c.turnOffWebGpuAfterDeviceLoss(void 0, !1, (0, lh.p)(!0 === LH.framesRefused ? "frames_refused" : LH.reason, LH.message)), zH || (St.gaveUp = !0);
```

#### 678. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5682` → after: `L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6037) · [Before (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5682)

```diff
-             } = (0, iy.x)(xV, JV, YV);
+             } = (0, qh.r)(LH, AH, rH);
```

#### 679. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5684` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6039) · [Before (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5684)

```diff
-               detail: `${xV} ${UV} up${(0,iy.g)(YV-JV)} ${(0,iy.m)(VV.adapterInfo)}: ${eV}`,
+               detail: `${LH} ${SH} up${(0,qh.e)(rH-AH)} ${(0,qh.l)(HH.adapterInfo)}: ${BH}`,
```

#### 680. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5688` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6043) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5688)

```diff
-           if ((0, Ny.c)(iy.e.WebGPU, ZV), Hy(ZV, wV), QV) return Yp.restores++, void
+           if ((0, kh.d)(qh.d.WebGPU, XH), ah(XH, EH), zH) return St.restores++, void
```

#### 681. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5691` → after: `L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6046) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5691)

```diff
-               "no_adapter" === (0, Ry.b)(eV) ? (console.warn("Lite could not be built again: no WebGPU adapter"), VV.EZ(`${JV}_restore_no_adapter`, "WebGPU device lost to the browser: no adapter to restore on", !0)) : eV instanceof Vp.i ? (console.warn(eV.message), VV.EZ(`${JV}_r … [truncated]
+               "no_adapter" === (0, Kh.c)(BH) ? (console.warn("Lite could not be built again: no WebGPU adapter"), HH.XX(`${AH}_restore_no_adapter`, "WebGPU device lost to the browser: no adapter to restore on", !0)) : BH instanceof Bt.e ? (console.warn(BH.message), HH.XX(`${AH}_r … [truncated]
```

#### 682. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5694` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6049) · [Before (L5694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5694)

```diff
-               (0, Vp.m)(xV(), Jp, "Lite was not built again in 15 s", (VV => {
+               (0, Bt.j)(LH(), rt, "Lite was not built again in 15 s", (HH => {
```

#### 683. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5710` → after: `L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6065) · [Before (L5710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5710)

```diff
-                   VV.EZ(`${JV}_restored_${(0,iy.l)(pV-YV)}_t${(0,iy.l)(eV-pV)}`, "WebGPU device lost to the browser: restored")
+                   HH.XX(`${AH}_restored_${(0,qh.j)(tH-rH)}_t${(0,qh.j)(BH-tH)}`, "WebGPU device lost to the browser: restored")
```

#### 684. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5718` → after: `L6073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6073) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5718)

```diff
-           (0, Dy.d)(uy)
+           (0, eh.e)(sh)
```

#### 685. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5728` → after: `L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/107.js#L6083) · [Before (L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/107.js#L5728)

```diff
-         if (!YV && !VV.replaying()) return JV || VV.EZ(`${eV}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
+         if (!rH && !HH.replaying()) return AH || HH.XX(`${BH}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
```
