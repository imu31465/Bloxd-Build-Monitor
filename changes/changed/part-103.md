# Changed — Bundle Modifications Report (Part 103 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `103 / 115` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 102](part-102.md) · [Part 104 →](part-104.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (937 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 282. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2915` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2931) · [Before (L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2915)

```diff
-       return UU.length > pU.Ld.MaxOpts ? (zU(new Error(`${XU}'s particle opts are over ${pU.Ld.MaxOpts} bytes of JSON`)), null) : UU
+       return HH.length > uH.Id.MaxOpts ? (LH(new Error(`${BH}'s particle opts are over ${uH.Id.MaxOpts} bytes of JSON`)), null) : HH
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2939-L2940` → after: `L2955-L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2955-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2955-L2956) · [Before (L2939-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2939-L2940)

```diff
-           yU = null !== (zU = XU.half) && void 0 !== zU ? zU : rz;
-         if (!cU || this.live >= pU.Ld.MaxLiveKeys || this.nextKey > pU.Ld.MaxKey || !nz(XU.pos, yU)) return xz;
+           rH = null !== (LH = BH.half) && void 0 !== LH ? LH : cL;
+         if (!AH || this.live >= uH.Id.MaxLiveKeys || this.nextKey > uH.Id.MaxKey || !DL(BH.pos, rH)) return dL;
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2946` → after: `L2962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2962) · [Before (L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2946)

```diff
-               xY: UU.xY,
+               aX: HH.aX,
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2954-L2956` → after: `L2970-L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2970-L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2970-L2972) · [Before (L2954-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2954-L2956)

```diff
-               gravity: null !== (XU = UU.gravity) && void 0 !== XU ? XU : rz,
-               dir1: null !== (zU = UU.dir1) && void 0 !== zU ? zU : Sz,
-               dir2: null !== (cU = UU.dir2) && void 0 !== cU ? cU : Sz,
+               gravity: null !== (BH = HH.gravity) && void 0 !== BH ? BH : cL,
+               dir1: null !== (LH = HH.dir1) && void 0 !== LH ? LH : KL,
+               dir2: null !== (AH = HH.dir2) && void 0 !== AH ? AH : KL,
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2962` → after: `L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2978) · [Before (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2962)

```diff
-         return AU && (0, pU.nf)(cU, 0, QU, 0, pU.Ld.PresetNone, 0, Hz, Mz, AU) ? (this.nextKey++, this.live++, this.started = !0, new jz(this, this.session, QU, UU, yU)) : xz
+         return hH && (0, uH.vf)(AH, 0, SH, 0, uH.Id.PresetNone, 0, NL, RL, hH) ? (this.nextKey++, this.live++, this.started = !0, new sL(this, this.session, SH, HH, rH)) : dL
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2974` → after: `L2990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2990) · [Before (L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2974)

```diff
-         yU && (0, pU.kf)(XU, 0, 0, pU.Ld.PresetNone, pU.Ld.HasBox, 0, Hz, Mz, yU)
+         rH && (0, uH.rf)(BH, 0, 0, uH.Id.PresetNone, uH.Id.HasBox, 0, NL, RL, rH)
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2978-L2979` → after: `L2994-L2995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2994-L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2994-L2995) · [Before (L2978-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2978-L2979)

```diff
-           yU = Math.min(Math.floor(zU), pU.Ld.MaxBurst);
-         if (!cU || !Object.hasOwn(pU.ic, UU) || !(yU > 0)) return;
+           rH = Math.min(Math.floor(LH), uH.Id.MaxBurst);
+         if (!AH || !Object.hasOwn(uH.jc, HH) || !(rH > 0)) return;
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2982` → after: `L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2998) · [Before (L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2982)

```diff
-         Number.isFinite(Hz[0] + Hz[1] + Hz[2]) && (0, pU.kf)(cU, 0, 0, pU.ic[UU], pU.Ld.HasBox, yU, Hz, Mz, uz)
+         Number.isFinite(NL[0] + NL[1] + NL[2]) && (0, uH.rf)(AH, 0, 0, uH.jc[HH], uH.Id.HasBox, rH, NL, RL, eL)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2987` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3003) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2987)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !UU || (0, pU.qf)(UU, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !HH || (0, uH.yf)(HH, 0)
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2994` → after: `L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3010) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2994)

```diff
-         zU && (0, pU.uf)(zU, 0, XU) && this.live--
+         LH && (0, uH.Cf)(LH, 0, BH) && this.live--
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3011` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3027) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3011)

```diff
-           nz(UU, this.half) && (0, pU.vf)(zU, 0, this.key, pU.Ld.HasBox, Hz, Mz, uz)
+           DL(HH, this.half) && (0, uH.Df)(LH, 0, this.key, uH.Id.HasBox, NL, RL, eL)
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3017` → after: `L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3033) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3017)

```diff
-         XU && zU !== this.rate && (0, pU.vf)(XU, 0, this.key, 0, rz, rz, Vz(zU)) && (this.rate = zU, this.emitted ||= zU > 0)
+         BH && LH !== this.rate && (0, uH.Df)(BH, 0, this.key, 0, cL, cL, nL(LH)) && (this.rate = LH, this.emitted ||= LH > 0)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3021-L3022` → after: `L3037-L3038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3037-L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3037-L3038) · [Before (L3021-L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3021-L3022)

```diff
-           zU = Math.min(Math.floor(UU), pU.Ld.MaxBurst);
-         XU && zU > 0 && (0, pU.kf)(XU, 0, this.key, pU.Ld.PresetNone, 0, zU, rz, rz, uz) && (this.emitted = !0)
+           LH = Math.min(Math.floor(HH), uH.Id.MaxBurst);
+         BH && LH > 0 && (0, uH.rf)(BH, 0, this.key, uH.Id.PresetNone, 0, LH, cL, cL, eL) && (this.emitted = !0)
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3026` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3042) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3026)

```diff
-           yU = Math.min(Math.floor(zU), pU.Ld.MaxPoints, Math.floor(XU.length / 4));
+           rH = Math.min(Math.floor(LH), uH.Id.MaxPoints, Math.floor(BH.length / 4));
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3028-L3029` → after: `L3044-L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3044-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3044-L3045) · [Before (L3028-L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3028-L3029)

```diff
-         const QU = new Uint8Array(XU.buffer, XU.byteOffset, yU * pU.Ld.PointBytes);
-         (0, pU.mf)(cU, 0, this.key, yU, UU, QU) && (this.emitted = !0)
+         const SH = new Uint8Array(BH.buffer, BH.byteOffset, rH * uH.Id.PointBytes);
+         (0, uH.sf)(AH, 0, this.key, rH, HH, SH) && (this.emitted = !0)
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3038` → after: `L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3054) · [Before (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3038)

```diff
-         (0, pU.vf)(zU, 0, this.key, 0, rz, rz, cU)
+         (0, uH.Df)(LH, 0, this.key, 0, cL, cL, AH)
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3042` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3058) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3042)

```diff
-         this.stopped = !0, UU && (this.emitted ? (this.rate > 0 && (0, pU.vf)(UU, 0, this.key, 0, rz, rz, Vz(0)), setTimeout((() => {
+         this.stopped = !0, HH && (this.emitted ? (this.rate > 0 && (0, uH.Df)(HH, 0, this.key, 0, cL, cL, nL(0)), setTimeout((() => {
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3053` → after: `L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3069) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3053)

```diff
-     const Kz = KX.q,
+     const JL = JB.s,
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3064` → after: `L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3080) · [Before (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3064)

```diff
-         if (UU !== pU.ad && !ZU(cU[QU])) {
+         if (HH !== uH.bd && !TH(AH[SH])) {
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3079` → after: `L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3095) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3079)

```diff
-       return UU.length >= XU ? UU : new Int32Array(Math.max(XU, 2 * UU.length))
+       return HH.length >= BH ? HH : new Int32Array(Math.max(BH, 2 * HH.length))
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3091-L3093` → after: `L3107-L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3107-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3107-L3109) · [Before (L3091-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3091-L3093)

```diff
-         for (let UU = 0; UU + pU.Yb.BYTES <= FU;) {
-           const XU = pU.Yb.len(oU, UU);
-           cU(pU.Yb.serverId(oU, UU), Xc(oU, UU, XU)), UU += pU.Yb.BYTES + (0, NU.De)(XU)
+         for (let HH = 0; HH + uH.$b.BYTES <= tH;) {
+           const BH = uH.$b.len(zH, HH);
+           AH(uH.$b.serverId(zH, HH), BA(zH, HH, BH)), HH += uH.$b.BYTES + (0, GH.te)(BH)
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3101` → after: `L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3117) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3101)

```diff
-       const AU = pU.Yb.kind(UU, XU),
+       const hH = uH.$b.kind(HH, BH),
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3104-L3108` → after: `L3120-L3124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3120-L3124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3120-L3124) · [Before (L3104-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3104-L3108)

```diff
-       const oU = pU.Yb.variation(UU, XU),
-         DU = pU.Yb.pose(UU, XU),
-         EU = pU.Yb.meta(UU, XU),
-         YU = pU.Yb.mesh(UU, XU),
-         NU = 0 !== (pU.Yb.flags(UU, XU) & pU.Vb.HasOpts),
+       const zH = uH.$b.variation(HH, BH),
+         CH = uH.$b.pose(HH, BH),
+         EH = uH.$b.meta(HH, BH),
+         XH = uH.$b.mesh(HH, BH),
+         GH = 0 !== (uH.$b.flags(HH, BH) & uH._b.HasOpts),
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3112-L3116` → after: `L3128-L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3128-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3128-L3132) · [Before (L3112-L3116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3112-L3116)

```diff
-         variation: oU === pU.gd ? void 0 : null !== (cU = null !== (yU = null === IU || void 0 === IU ? void 0 : IU[oU]) && void 0 !== yU ? yU : null === IU || void 0 === IU ? void 0 : IU[0]) && void 0 !== cU ? cU : "default",
-         pose: DU === pU.qc ? void 0 : null !== (QU = pU.Kb[DU]) && void 0 !== QU ? QU : pU.Kb[0],
-         metaInfo: EU === pU.qc ? void 0 : pU.Sc[EU],
-         meshKind: YU === pU.qc ? void 0 : pU.Rc[YU],
-         meshOpts: NU ? bz.decode(new Uint8Array(UU.buffer, UU.byteOffset + XU + pU.Yb.BYTES, zU)) : void 0
+         variation: zH === uH.gd ? void 0 : null !== (AH = null !== (rH = null === YH || void 0 === YH ? void 0 : YH[zH]) && void 0 !== rH ? rH : null === YH || void 0 === YH ? void 0 : YH[0]) && void 0 !== AH ? AH : "default",
+         pose: CH === uH.qc ? void 0 : null !== (SH = uH.Mb[CH]) && void 0 !== SH ? SH : uH.Mb[0],
+         metaInfo: EH === uH.qc ? void 0 : uH.Vc[EH],
+         meshKind: XH === uH.qc ? void 0 : uH.Uc[XH],
+         meshOpts: GH ? iL.decode(new Uint8Array(HH.buffer, HH.byteOffset + BH + uH.$b.BYTES, LH)) : void 0
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3123` → after: `L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3139) · [Before (L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3123)

```diff
-         this.deps = UU, this.wanted = 0, this.uD = !1, this.refused = !1
+         this.deps = HH, this.wanted = 0, this.LX = !1, this.refused = !1
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3126` → after: `L3142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3142) · [Before (L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3126)

```diff
-         return this.uD
+         return this.LX
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3129` → after: `L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3145) · [Before (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3129)

```diff
-         this.wanted = XU ? this.wanted | UU : this.wanted & ~UU;
+         this.wanted = BH ? this.wanted | HH : this.wanted & ~HH;
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3131` → after: `L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3147) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3131)

```diff
-         if (zU === this.uD) return;
+         if (LH === this.LX) return;
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3133` → after: `L3149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3149) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3133)

```diff
-         null !== cU ? (0, pU.lg)(cU, 0, zU ? 1 : 0) ? (this.uD = zU, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.uD = !1
+         null !== AH ? (0, uH.Cg)(AH, 0, LH ? 1 : 0) ? (this.LX = LH, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.LX = !1
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3142` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3158) · [Before (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3142)

```diff
-         return this.complete || this.fill(), null !== (XU = this.entries.get("string" === typeof UU ? UU : String(UU))) && void 0 !== XU ? XU : null
+         return this.complete || this.fill(), null !== (BH = this.entries.get("string" === typeof HH ? HH : String(HH))) && void 0 !== BH ? BH : null
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3201` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3217) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3201)

```diff
-     var Ac = zU(5326);
+     var hA = LH(5268);
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3204-L3205` → after: `L3220-L3221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3220-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3220-L3221) · [Before (L3204-L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3204-L3205)

```diff
-       if ("message" !== UU.type || UU.TE !== Ac.oc.NewClientOptions || UU.payloadKind !== NU.jc.Msgpack) return null;
-       const XU = (0, HU.d)(UU.payload);
+       if ("message" !== HH.type || HH.kt !== hA.nc.NewClientOptions || HH.payloadKind !== GH.jc.Msgpack) return null;
+       const BH = (0, RH.e)(HH.payload);
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3209-L3210` → after: `L3225-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3225-L3226) · [Before (L3209-L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3209-L3210)

```diff
-     var oc = zU(1258),
-       Dc = zU(37354);
+     var zA = LH(1182),
+       CA = LH(37504);
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3215-L3217` → after: `L3231-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3231-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3231-L3233) · [Before (L3215-L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3215-L3217)

```diff
-         case pU.ke.ToggleMenu: {
-           const UU = pU.L[XU];
-           AU.k.UY("toggleMenu", void 0 === UU ? "inventory" : `inventory|${UU}`);
+         case uH.oe.ToggleMenu: {
+           const HH = uH.K[BH];
+           hH.k.AX("toggleMenu", void 0 === HH ? "inventory" : `inventory|${HH}`);
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3220-L3221` → after: `L3236-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3236-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3236-L3237) · [Before (L3220-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3220-L3221)

```diff
-         case pU.ke.EditBoard:
-           AU.k.UY("EditBoard", {
+         case uH.oe.EditBoard:
+           hH.k.AX("EditBoard", {
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3225-L3227` → after: `L3241-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3241-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3241-L3243) · [Before (L3225-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3225-L3227)

```diff
-         case pU.ke.EditCodeBlock:
-         case pU.ke.ViewCodeBlock:
-           AU.k.UY("EditCodeBlock", {
+         case uH.oe.EditCodeBlock:
+         case uH.oe.ViewCodeBlock:
+           hH.k.AX("EditCodeBlock", {
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3229` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3245) · [Before (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3229)

```diff
-             canChangePos: UU === pU.ke.EditCodeBlock
+             canChangePos: HH === uH.oe.EditCodeBlock
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3232-L3233` → after: `L3248-L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3248-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3248-L3249) · [Before (L3232-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3232-L3233)

```diff
-         case pU.ke.EditCustomLobbyBlock:
-           AU.k.UY("EditCustomLobbyBlock", {
+         case uH.oe.EditCustomLobbyBlock:
+           hH.k.AX("EditCustomLobbyBlock", {
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3237-L3238` → after: `L3253-L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3253-L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3253-L3254) · [Before (L3237-L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3237-L3238)

```diff
-         case pU.ke.OpenIronChest:
-           AU.k.UY("OpenIronChest", {
+         case uH.oe.OpenIronChest:
+           hH.k.AX("OpenIronChest", {
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3242-L3243` → after: `L3258-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3258-L3259) · [Before (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3242-L3243)

```diff
-         case pU.ke.EditNameTag:
-           AU.k.UY("EditNameTag", null !== (oU = null === (DU = yU.uD()) || void 0 === DU || null === (EU = DU.attributes.customAttributes) || void 0 === EU ? void 0 : EU.text) && void 0 !== oU ? oU : "");
+         case uH.oe.EditNameTag:
+           hH.k.AX("EditNameTag", null !== (zH = null === (CH = rH.LX()) || void 0 === CH || null === (EH = CH.attributes.customAttributes) || void 0 === EH ? void 0 : EH.text) && void 0 !== zH ? zH : "");
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3245-L3248` → after: `L3261-L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3261-L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3261-L3264) · [Before (L3245-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3245-L3248)

```diff
-         case pU.ke.EditBook: {
-           var YU, NU, aU;
-           const UU = null === (YU = yU.uD()) || void 0 === YU ? void 0 : YU.attributes;
-           AU.k.UY("EditBook", {
+         case uH.oe.EditBook: {
+           var XH, GH, QH;
+           const HH = null === (XH = rH.LX()) || void 0 === XH ? void 0 : XH.attributes;
+           hH.k.AX("EditBook", {
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3250` → after: `L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3266) · [Before (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3250)

```diff
-             title: null !== (aU = null === UU || void 0 === UU ? void 0 : UU.customDisplayName) && void 0 !== aU ? aU : "Title",
+             title: null !== (QH = null === HH || void 0 === HH ? void 0 : HH.customDisplayName) && void 0 !== QH ? QH : "Title",
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3255` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3271) · [Before (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3255)

```diff
-         case pU.ke.CantChangeBlock:
+         case uH.oe.CantChangeBlock:
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3259-L3260` → after: `L3275-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3275-L3276) · [Before (L3259-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3259-L3260)

```diff
-               yU = UU ? zU : cU;
-             (XU.getClientOption("canChange") || yU || "You cannot modify this block" !== zU) && AU.k.UY("showBottomMessage", {
+               rH = HH ? LH : AH;
+             (BH.getClientOption("canChange") || rH || "You cannot modify this block" !== LH) && hH.k.AX("showBottomMessage", {
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3266-L3267` → after: `L3282-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3282-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3282-L3283) · [Before (L3266-L3267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3266-L3267)

```diff
-         case pU.ke.MiddleBarStart:
-           AU.k.UY("middleScreenBarInitiate", {
+         case uH.oe.MiddleBarStart:
+           hH.k.AX("middleScreenBarInitiate", {
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3269` → after: `L3285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3285) · [Before (L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3269)

```diff
-             vc: 1 === zU[0],
+             NS: 1 === LH[0],
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3273-L3274` → after: `L3289-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290) · [Before (L3273-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3273-L3274)

```diff
-         case pU.ke.MiddleBarStop:
-           AU.k.UY("middleScreenBarRemove");
+         case uH.oe.MiddleBarStop:
+           hH.k.AX("middleScreenBarRemove");
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3276-L3278` → after: `L3292-L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3292-L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3292-L3294) · [Before (L3276-L3278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3276-L3278)

```diff
-         case pU.ke.Hitmarker:
-           AU.k.UY("localGunHitmarker", {
-             yX: 1 === XU
+         case uH.oe.Hitmarker:
+           hH.k.AX("localGunHitmarker", {
+             aA: 1 === BH
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3281-L3282` → after: `L3297-L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3297-L3298) · [Before (L3281-L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3281-L3282)

```diff
-         case pU.ke.ShotsLeft:
-           AU.k.UY("localPlayerNewShotsLeft", cU);
+         case uH.oe.ShotsLeft:
+           hH.k.AX("localPlayerNewShotsLeft", AH);
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3284-L3285` → after: `L3300-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3300-L3301) · [Before (L3284-L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3284-L3285)

```diff
-         case pU.ke.AimingOverlay:
-           AU.k.UY("aimingOverlay", 3 === (3 & XU) ? "sniper" : "none");
+         case uH.oe.AimingOverlay:
+           hH.k.AX("aimingOverlay", 3 === (3 & BH) ? "sniper" : "none");
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3287-L3288` → after: `L3303-L3304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3303-L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3303-L3304) · [Before (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3287-L3288)

```diff
-         case pU.ke.BottomMessage:
-           AU.k.UY("showBottomMessage", JSON.parse(FU()));
+         case uH.oe.BottomMessage:
+           hH.k.AX("showBottomMessage", JSON.parse(tH()));
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3290-L3291` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3306-L3307) · [Before (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3290-L3291)

```diff
-         case pU.ke.Crosshair:
-           yU.inaccuracy = (0, MU.f)(cU), (0, Dc.c)().crosshairAccuracy(yU.inaccuracy);
+         case uH.oe.Crosshair:
+           rH.inaccuracy = (0, jH.f)(AH), (0, CA.e)().crosshairAccuracy(rH.inaccuracy);
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3293` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3309) · [Before (L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3293)

```diff
-         case pU.ke.ChargeStage:
+         case uH.oe.ChargeStage:
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3295-L3296` → after: `L3311-L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3311-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3311-L3312) · [Before (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3295-L3296)

```diff
-         case pU.ke.EmoteWheelClose:
-           AU.k.UY("requestEmoteWheelClose");
+         case uH.oe.EmoteWheelClose:
+           hH.k.AX("requestEmoteWheelClose");
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3298-L3299` → after: `L3314-L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3314-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3314-L3315) · [Before (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3298-L3299)

```diff
-         case pU.ke.BlockMined:
-           AU.k.UY("localBlockMined");
+         case uH.oe.BlockMined:
+           hH.k.AX("localBlockMined");
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3302` → after: `L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3318) · [Before (L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3302)

```diff
-           throw new IU.c(`UiEvent of no kind: what ${UU}`)
+           throw new YH.d(`UiEvent of no kind: what ${HH}`)
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3305-L3310` → after: `L3321-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3321-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3321-L3326) · [Before (L3305-L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3305-L3310)

```diff
-     var Yc = zU(38743),
-       Nc = zU(34875),
-       Ic = zU(2044),
-       pc = zU(37535),
-       ac = zU(34884),
-       tc = zU(5312);
+     var XA = LH(38871),
+       GA = LH(34996),
+       YA = LH(2045),
+       uA = LH(37659),
+       QA = LH(35006),
+       WA = LH(5255);
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3334` → after: `L3350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3350) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3334)

```diff
-       const QU = () => (zU = (0, Ic.q)(zU, XU()), zU);
+       const SH = () => (LH = (0, YA.r)(LH, BH()), LH);
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3342` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3358) · [Before (L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3342)

```diff
-           return null !== cU && AU.push((0, Ic.s)((UU => {
+           return null !== AH && hH.push((0, YA.v)((HH => {
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3365` → after: `L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3381) · [Before (L3365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3365)

```diff
-         attributes: (0, Yc.e)("Gun" === (0, ac.itemTypeOf)(XU) ? {
+         attributes: (0, XA.d)("Gun" === (0, QA.itemTypeOf)(BH) ? {
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3387` → after: `L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3403) · [Before (L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3387)

```diff
-             displayName: null !== (cU = EU.attributes.customDisplayName) && void 0 !== cU ? cU : XU.getDisplayName(YU),
+             displayName: null !== (AH = EH.attributes.customDisplayName) && void 0 !== AH ? AH : BH.getDisplayName(XH),
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3389` → after: `L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3405) · [Before (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3389)

```diff
-             clipSize: null !== (yU = null !== (QU = null === (AU = EU.attributes.customAttributes) || void 0 === AU || null === (FU = AU.gunStats) || void 0 === FU ? void 0 : FU.clipSize) && void 0 !== QU ? QU : null === (oU = XU.getGunStats(YU)) || void 0 === oU ? void 0 : oU.cl … [truncated]
+             clipSize: null !== (rH = null !== (SH = null === (hH = EH.attributes.customAttributes) || void 0 === hH || null === (tH = hH.gunStats) || void 0 === tH ? void 0 : tH.clipSize) && void 0 !== SH ? SH : null === (zH = BH.getGunStats(XH)) || void 0 === zH ? void 0 : zH.cl … [truncated]
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3418` → after: `L3434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3434) · [Before (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3418)

```diff
-               const oU = UU.craftingView(zU.station, FU, null !== (QU = null === (AU = zU.recipe) || void 0 === AU ? void 0 : AU.YA) && void 0 !== QU ? QU : 0);
+               const zH = HH.craftingView(LH.station, tH, null !== (SH = null === (hH = LH.recipe) || void 0 === hH ? void 0 : hH.wC) && void 0 !== SH ? SH : 0);
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3424` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3440) · [Before (L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3424)

```diff
-                 let cU = pU.mb.BYTES;
+                 let AH = uH.ob.BYTES;
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3426-L3427` → after: `L3442-L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3442-L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3442-L3443) · [Before (L3426-L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3426-L3427)

```diff
-                 for (let EU = pU.mb.recipes(UU, 0); EU > 0; EU--) {
-                   const zU = pU.eb.flags(UU, cU),
+                 for (let EH = uH.ob.recipes(HH, 0); EH > 0; EH--) {
+                   const LH = uH.gb.flags(HH, AH),
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3429-L3430` → after: `L3445-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3445-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3445-L3446) · [Before (L3429-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3429-L3430)

```diff
-                       name: XU.nameOfId(pU.eb.item(UU, cU)),
-                       YA: pU.eb.recipe(UU, cU),
+                       name: BH.nameOfId(uH.gb.item(HH, AH)),
+                       wC: uH.gb.recipe(HH, AH),
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3432-L3434` → after: `L3448-L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3448-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3448-L3450) · [Before (L3432-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3432-L3434)

```diff
-                       produces: pU.eb.produces(UU, cU),
-                       haveIngredients: 0 !== (zU & pU.db.HaveIngredients),
-                       listed: 0 !== (zU & pU.db.Listed)
+                       produces: uH.gb.produces(HH, AH),
+                       haveIngredients: 0 !== (LH & uH.cb.HaveIngredients),
+                       listed: 0 !== (LH & uH.cb.Listed)
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3436-L3438` → after: `L3452-L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3452-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3452-L3454) · [Before (L3436-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3436-L3438)

```diff
-                   let AU = pU.eb.requires(UU, cU);
-                   for (cU += pU.eb.BYTES; AU > 0; AU--) {
-                     const zU = pU.ib.items(UU, cU);
+                   let hH = uH.gb.requires(HH, AH);
+                   for (AH += uH.gb.BYTES; hH > 0; hH--) {
+                     const LH = uH.jb.items(HH, AH);
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3440-L3442` → after: `L3456-L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3456-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3456-L3458) · [Before (L3440-L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3440-L3442)

```diff
-                       items: Cc(UU, cU + pU.ib.BYTES, zU, XU),
-                       amt: pU.ib.amount(UU, cU)
-                     }), cU += pU.ib.BYTES + 2 * zU
+                       items: oA(HH, AH + uH.jb.BYTES, LH, BH),
+                       amt: uH.jb.amount(HH, AH)
+                     }), AH += uH.jb.BYTES + 2 * LH
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3446-L3447` → after: `L3462-L3463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3462-L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3462-L3463) · [Before (L3446-L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3446-L3447)

```diff
-                 const QU = pU.mb.flags(UU, 0);
-                 if (null === zU.recipe || 0 === (QU & pU.jb.Detail)) return {
+                 const SH = uH.ob.flags(HH, 0);
+                 if (null === LH.recipe || 0 === (SH & uH.nb.Detail)) return {
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3454` → after: `L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3470) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3454)

```diff
-                 for (let EU = pU.mb.ingredients(UU, 0); EU > 0; EU--) {
+                 for (let EH = uH.ob.ingredients(HH, 0); EH > 0; EH--) {
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3459` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3475) · [Before (L3459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3459)

```diff
-                   const oU = yU === pU.H ? null : Cc(UU, cU, yU, XU);
+                   const zH = rH === uH.I ? null : oA(HH, AH, rH, BH);
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3466` → after: `L3482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3482) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3466)

```diff
-                   YA: DU
+                   wC: CH
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3473-L3475` → after: `L3489-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3489-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3489-L3491) · [Before (L3473-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3473-L3475)

```diff
-                     YA: DU,
-                     craftAllTimes: pU.mb.craftAllTimes(UU, 0),
-                     roomForOne: 0 !== (QU & pU.jb.RoomForOne),
+                     wC: CH,
+                     craftAllTimes: uH.ob.craftAllTimes(HH, 0),
+                     roomForOne: 0 !== (SH & uH.nb.RoomForOne),
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3498` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3514) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3498)

```diff
-             for (let XU = 0; XU < pU.yd; XU++) cU.push(Rc(UU.slot(XU)));
+             for (let BH = 0; BH < uH.vd; BH++) AH.push(UA(HH.slot(BH)));
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3508-L3509` → after: `L3524-L3525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3524-L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3524-L3525) · [Before (L3508-L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3508-L3509)

```diff
-             if (zU > pU.yd) {
-               for (let XU = pU.yd; XU < zU; XU++) FU.push(Rc(UU.slot(XU)));
+             if (LH > uH.vd) {
+               for (let BH = uH.vd; BH < LH; BH++) tH.push(UA(HH.slot(BH)));
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3512-L3513` → after: `L3528-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3528-L3529) · [Before (L3512-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3512-L3513)

```diff
-                 pos: [...UU.jU],
-                 numSlots: zU - pU.yd,
+                 pos: [...HH.OL],
+                 numSlots: LH - uH.vd,
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3525` → after: `L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3541) · [Before (L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3525)

```diff
-           }), (0, Ic.o)("creative")),
+           }), (0, YA.l)("creative")),
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3535` → after: `L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3551) · [Before (L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3535)

```diff
-           }), (0, Ic.m)("DisplayName", "GunStats")),
+           }), (0, YA.h)("DisplayName", "GunStats")),
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3540` → after: `L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3556) · [Before (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3540)

```diff
-             const cU = null === (XU = UU.uD()) || void 0 === XU ? void 0 : XU.typeObj,
+             const AH = null === (BH = HH.LX()) || void 0 === BH ? void 0 : BH.typeObj,
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3549` → after: `L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3565) · [Before (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3549)

```diff
-             return (0, tc.t)((() => {
+             return (0, WA.v)((() => {
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3556-L3563` → after: `L3572-L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3572-L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3572-L3579) · [Before (L3556-L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3556-L3563)

```diff
-           hotbarSlotRequested: (0, Ic.e)("setSelectedInventorySlotI"),
-           hotbarScrolled: (0, Ic.e)("ScrollInventorySlot"),
-           numberKeyPressed: (0, Ic.e)("numkeyPressed"),
-           inventoryDropRequested: (0, Ic.e)("DropInvenItem"),
-           chestToggled: (0, Ic.e)("chestToggleFromServer"),
-           chestRefreshed: (0, Ic.e)("chestRefreshedFromServer", ec),
-           inventorySynced: (0, Ic.e)("syncedInvenFromServer", ec),
-           enchantingTableOpened: (0, Ic.e)("enchantingTable", (UU => {
+           hotbarSlotRequested: (0, YA.b)("setSelectedInventorySlotI"),
+           hotbarScrolled: (0, YA.b)("ScrollInventorySlot"),
+           numberKeyPressed: (0, YA.b)("numkeyPressed"),
+           inventoryDropRequested: (0, YA.b)("DropInvenItem"),
+           chestToggled: (0, YA.b)("chestToggleFromServer"),
+           chestRefreshed: (0, YA.b)("chestRefreshedFromServer", mA),
+           inventorySynced: (0, YA.b)("syncedInvenFromServer", mA),
+           enchantingTableOpened: (0, YA.b)("enchantingTable", (HH => {
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3566` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3582) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3566)

```diff
-               yF: cU
+               ph: AH
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3611` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3627) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3611)

```diff
-             UU.closeChest(), UU.flush(cU), AU.k.UY("chestClosedByPlayer")
+             HH.closeChest(), HH.flush(AH), hH.k.AX("chestClosedByPlayer")
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3619` → after: `L3635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3635) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3619)

```diff
-               YA: cU,
+               wC: AH,
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3649` → after: `L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3665) · [Before (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3649)

```diff
-               if (!yU || !XU.getClientOption("canCraft") || !(0, Nc.s)(cU) || (0, Nc.q)(yU.attributes)) return Lc;
+               if (!rH || !BH.getClientOption("canCraft") || !(0, GA.q)(AH) || (0, GA.o)(rH.attributes)) return kA;
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3653` → after: `L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3669) · [Before (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3653)

```diff
-               for (let FU = 0; FU < pc.f; FU++) {
+               for (let tH = 0; tH < uA.d; tH++) {
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3661` → after: `L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3677) · [Before (L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3661)

```diff
-                 } = (0, Nc.g)(cU, FU);
+                 } = (0, GA.f)(AH, tH);
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3696` → after: `L3712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3712) · [Before (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3696)

```diff
-           O4: 0,
+           y5: 0,
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3699` → after: `L3715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3715) · [Before (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3699)

```diff
-           yt: [0, 0, 0]
+           AW: [0, 0, 0]
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3706` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3722) · [Before (L3706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3706)

```diff
-       gXU() {
+       cBH() {
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3715-L3716` → after: `L3731-L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3731-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3731-L3732) · [Before (L3715-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3715-L3716)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (pU.w.playerFlags(UU, 0) & pU.Od.Breaking) && pU.w.breakingProgress(UU, 0) >= 0, this.isBreaking)
-           for (let XU = 0; XU < 3; XU++) this.breaking[XU] = pU.w.breakingPos(UU, 0, XU)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (uH.y.playerFlags(HH, 0) & uH.Md.Breaking) && uH.y.breakingProgress(HH, 0) >= 0, this.isBreaking)
+           for (let BH = 0; BH < 3; BH++) this.breaking[BH] = uH.y.breakingPos(HH, 0, BH)
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3720` → after: `L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3736) · [Before (L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3720)

```diff
-           XU = pU.w.targetBlockId(UU, 0);
+           BH = uH.y.targetBlockId(HH, 0);
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3723-L3724` → after: `L3739-L3740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3739-L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3739-L3740) · [Before (L3723-L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3723-L3724)

```diff
-           zU.O4 = XU;
-           for (let XU = 0; XU < 3; XU++) zU.position[XU] = pU.w.targetBlock(UU, 0, XU), zU.normal[XU] = pU.w.targetNormal(UU, 0, XU), zU.yt[XU] = pU.w.targetAdjacent(UU, 0, XU)
+           LH.y5 = BH;
+           for (let BH = 0; BH < 3; BH++) LH.position[BH] = uH.y.targetBlock(HH, 0, BH), LH.normal[BH] = uH.y.targetNormal(HH, 0, BH), LH.AW[BH] = uH.y.targetAdjacent(HH, 0, BH)
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3732-L3735` → after: `L3748-L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3748-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3748-L3751) · [Before (L3732-L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3732-L3735)

```diff
-     var qc = zU(41692),
-       Oc = zU(41676),
-       Sc = zU(37083),
-       rc = zU(37532);
+     var fA = LH(41949),
+       lA = LH(41933),
+       KA = LH(37250),
+       cA = LH(37656);
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3740` → after: `L3756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3756) · [Before (L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3740)

```diff
-         this.game = new rc.g, this.client = new rc.g, this.uD = 0, this.movesFly = null
+         this.game = new cA.d, this.client = new cA.d, this.LX = 0, this.movesFly = null
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3754` → after: `L3770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3770) · [Before (L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3754)

```diff
-         this.game = new rc.g, this.movesFly = null
+         this.game = new cA.d, this.movesFly = null
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3760` → after: `L3776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3776) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3760)

```diff
-         return (this.game._getTotalBooleanVal() ? uc : 0) | (this.client._getTotalBooleanVal() ? fc : 0)
+         return (this.game._getTotalBooleanVal() ? eA : 0) | (this.client._getTotalBooleanVal() ? qA : 0)
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3767-L3769` → after: `L3783-L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3783-L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3783-L3785) · [Before (L3767-L3769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3767-L3769)

```diff
-         if (XU === this.uD && null === zU) return !0;
-         let cU = pU.$b.Keep;
-         return null !== zU && (cU = zU ? pU.$b.On : pU.$b.Off), !(!UU || !(0, pU.Ie)(UU, 0, cU, XU, zU ? 1 : 0)) && (this.uD = XU, this.movesFly = null, !0)
+         if (BH === this.LX && null === LH) return !0;
+         let AH = uH.bc.Keep;
+         return null !== LH && (AH = LH ? uH.bc.On : uH.bc.Off), !(!HH || !(0, uH.Ne)(HH, 0, AH, BH, LH ? 1 : 0)) && (this.LX = BH, this.movesFly = null, !0)
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3776` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3792) · [Before (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3776)

```diff
-           x: FU.d,
+           x: tH.b,
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3784` → after: `L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3800) · [Before (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3784)

```diff
-           XU = pU.w.viewProj;
+           BH = uH.y.viewProj;
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3792` → after: `L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3808) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3792)

```diff
-         for (let zU = 0; zU < 3; zU++) XU[zU] = pU.w.eye(UU, 0, zU);
+         for (let LH = 0; LH < 3; LH++) BH[LH] = uH.y.eye(HH, 0, LH);
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3797` → after: `L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3813) · [Before (L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3797)

```diff
-           XU = pU.w.viewProj,
+           BH = uH.y.viewProj,
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3808` → after: `L3824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3824) · [Before (L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3808)

```diff
-         return pU.w.heading(this.api.apiView, 0)
+         return uH.y.heading(this.api.apiView, 0)
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3811` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3827) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3811)

```diff
-         return pU.w.pitch(this.api.apiView, 0)
+         return uH.y.pitch(this.api.apiView, 0)
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3814` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3830) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3814)

```diff
-         return pU.w.tanHalfFovX(this.api.apiView, 0)
+         return uH.y.tanHalfFovX(this.api.apiView, 0)
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3817` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3833) · [Before (L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3817)

```diff
-         return pU.w.tanHalfFovY(this.api.apiView, 0)
+         return uH.y.tanHalfFovY(this.api.apiView, 0)
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3837-L3839` → after: `L3853-L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3853-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3853-L3855) · [Before (L3837-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3837-L3839)

```diff
-           FU = pU.w.viewProj,
-           oU = QU > 0 ? XU / QU : 0,
-           DU = QU > 0 ? -zU / QU : 0,
+           tH = uH.y.viewProj,
+           zH = SH > 0 ? BH / SH : 0,
+           CH = SH > 0 ? -LH / SH : 0,
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3867-L3870` → after: `L3883-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3883-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3883-L3886) · [Before (L3867-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3867-L3870)

```diff
-           zU = UU[0] - pU.w.origin(XU, 0, 0),
-           cU = UU[1] - pU.w.origin(XU, 0, 1),
-           yU = UU[2] - pU.w.origin(XU, 0, 2),
-           QU = pU.w.viewProj;
+           LH = HH[0] - uH.y.origin(BH, 0, 0),
+           AH = HH[1] - uH.y.origin(BH, 0, 1),
+           rH = HH[2] - uH.y.origin(BH, 0, 2),
+           SH = uH.y.viewProj;
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3874` → after: `L3890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3890) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3874)

```diff
-         return (0, FU.f)(UU, XU, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, tH.e)(HH, BH, this.screenBandPct.x, this.screenBandPct.y)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3877` → after: `L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3893) · [Before (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3877)

```diff
-     var Mc = zU(5336);
+     var RA = LH(5279);
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3879` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3895) · [Before (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3879)

```diff
-       Vc = new Uint8Array(pU.R * pU.O);
+       nA = new Uint8Array(uH.P * uH.O);
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3882` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3898) · [Before (L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3882)

```diff
-         this.buttons = [], this.uD = !0
+         this.buttons = [], this.LX = !0
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3885` → after: `L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3901) · [Before (L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3885)

```diff
-         this.buttons = UU, this.uD = !1
+         this.buttons = HH, this.LX = !1
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3888` → after: `L3904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3904) · [Before (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3888)

```diff
-         this.uD = 0 === this.buttons.length
+         this.LX = 0 === this.buttons.length
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3891-L3893` → after: `L3907-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3907-L3909) · [Before (L3891-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3891-L3893)

```diff
-         if (this.uD) return;
-         const XU = new Uint8Array(pU.R),
-           zU = new Uint8Array(pU.R);
+         if (this.LX) return;
+         const BH = new Uint8Array(uH.P),
+           LH = new Uint8Array(uH.P);
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3901` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3917) · [Before (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3901)

```diff
-           if (cU === pU.R) break;
+           if (AH === uH.P) break;
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3908` → after: `L3924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3924) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3908)

```diff
-           XU[cU] = "number" === typeof oU ? oU : 0, zU[cU] = FU, cU++, yU += FU
+           BH[AH] = "number" === typeof zH ? zH : 0, LH[AH] = tH, AH++, rH += tH
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3910` → after: `L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3926) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3910)

```diff
-         this.uD = (0, pU.se)(UU, 0, cU, XU, zU, Vc.subarray(0, yU))
+         this.LX = (0, uH.xe)(HH, 0, AH, BH, LH, nA.subarray(0, rH))
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3917` → after: `L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3933) · [Before (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3917)

```diff
-         return (0, cz.e)(), (0, pU.xf)(UU, XU, zU, cU)
+         return (0, AL.b)(), (0, uH.Gf)(HH, BH, LH, AH)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3920` → after: `L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3936) · [Before (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3920)

```diff
-     var mc = zU(40081);
+     var wA = LH(40193);
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3926-L3928` → after: `L3942-L3944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3942-L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3942-L3944) · [Before (L3926-L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3926-L3928)

```diff
-         off: pU.Rd.Off,
-         key: pU.Rd.Key,
-         touch: pU.Rd.Touch
+         off: uH.Qd.Off,
+         key: uH.Qd.Key,
+         touch: uH.Qd.Touch
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3933` → after: `L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3949) · [Before (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3933)

```diff
-         this.options = UU, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+         this.options = HH, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3936` → after: `L3952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3952) · [Before (L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3936)

```diff
-         }, this.api = UU.api, this.tables = UU.tables, this.onError = null !== (XU = UU.onError) && void 0 !== XU ? XU : UU => {
+         }, this.api = HH.api, this.tables = HH.tables, this.onError = null !== (BH = HH.onError) && void 0 !== BH ? BH : HH => {
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3993` → after: `L4013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4013) · [Before (L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3993)

```diff
-         return this.itemSources ??= dc(this.items, this.tables, (() => this.localPlayerAlive()), this.oY), this.itemSources
+         return this.itemSources ??= bA(this.items, this.tables, (() => this.localPlayerAlive()), this.XX), this.itemSources
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4009` → after: `L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4029) · [Before (L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4009)

```diff
-         return null !== XU && (zU = XU, cU = 0, yU = UU[0], QU = UU[1], AU = UU[2], (0, cz.e)(), (0, pU.xe)(zU, cU, yU, QU, AU));
+         return null !== BH && (LH = BH, AH = 0, rH = HH[0], SH = HH[1], hH = HH[2], (0, AL.b)(), (0, uH.Ee)(LH, AH, rH, SH, hH));
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4017` → after: `L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4037) · [Before (L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4017)

```diff
-         return null === XU ? (this.pendingZoom = UU, !1) : (this.pendingZoom = null, (0, pU.hg)(XU, 0, UU, 1))
+         return null === BH ? (this.pendingZoom = HH, !1) : (this.pendingZoom = null, (0, uH.vg)(BH, 0, HH, 1))
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4021` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4041) · [Before (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4021)

```diff
-         return null !== XU && (0, pU.ag)(XU, 0, UU ? 1 : 0)
+         return null !== BH && (0, uH.og)(BH, 0, HH ? 1 : 0)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4025` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4045) · [Before (L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4025)

```diff
-         return null !== UU && (XU = UU, zU = 0, (0, cz.e)(), (0, pU.Jf)(XU, zU));
+         return null !== HH && (BH = HH, LH = 0, (0, AL.b)(), (0, uH.Sf)(BH, LH));
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4037` → after: `L4057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4057) · [Before (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4037)

```diff
-         return null !== AU && (0, pU.hf)(AU, 0, UU, XU, zU, cU, yU, QU)
+         return null !== hH && (0, uH.of)(hH, 0, HH, BH, LH, AH, rH, SH)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4041` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4061) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4041)

```diff
-         return null !== XU && (0, pU.kg)(XU, 0, null !== UU && void 0 !== UU ? UU : 1 / 0)
+         return null !== BH && (0, uH.Bg)(BH, 0, null !== HH && void 0 !== HH ? HH : 1 / 0)
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4046` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4066) · [Before (L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4046)

```diff
-         return null !== cU && yz(cU, zU ? NU.ud : 0, UU, (0, HU.e)(XU))
+         return null !== AH && rL(AH, LH ? GH.nd : 0, HH, (0, RH.g)(BH))
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4067` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4087) · [Before (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4067)

```diff
-         this.overflowGen = pU.w.eventOverflowGen(zU, 0), this.resyncOwed = 0 !== pU.w.eventOverflowMask(zU, 0), UU.setGameHost(this), UU.setEventWalker((UU => {
+         this.overflowGen = uH.y.eventOverflowGen(LH, 0), this.resyncOwed = 0 !== uH.y.eventOverflowMask(LH, 0), HH.setGameHost(this), HH.setEventWalker((HH => {
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4075` → after: `L4095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4095) · [Before (L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4075)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : Tc(pU.w.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : pA(uH.y.promptEntity(this.api.apiView, 0))
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4078` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4098) · [Before (L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4078)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? pU.zc.None : pU.w.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? uH.Ac.None : uH.y.interactLabel(this.api.apiView, 0)
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4081` → after: `L4101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4101) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4081)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : pU.w.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : uH.y.interactIcon(this.api.apiView, 0)
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4091` → after: `L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4111) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4091)

```diff
-         "connection" === UU.type ? UU.phase === NU.E.Activated && UU.conn !== this.activeConn && UU.conn > this.closedThrough ? (this.endSession(), this.activeConn = UU.conn, this.endGameGrants(), this.dropGameCamera()) : UU.phase !== NU.E.Left && UU.phase !== NU.E.Closed || UU.c … [truncated]
+         "connection" === HH.type ? HH.phase === GH.C.Activated && HH.conn !== this.activeConn && HH.conn > this.closedThrough ? (this.endSession(), this.activeConn = HH.conn, this.endGameGrants(), this.dropGameCamera()) : HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.c … [truncated]
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4108-L4109` → after: `L4128-L4129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4128-L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4128-L4129) · [Before (L4108-L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4108-L4109)

```diff
-             if ("message" !== UU.type || UU.TE !== Ac.oc.GameCodeMessage || UU.payloadKind !== NU.jc.Msgpack) return null;
-             const XU = (0, HU.d)(UU.payload);
+             if ("message" !== HH.type || HH.kt !== hA.nc.GameCodeMessage || HH.payloadKind !== GH.jc.Msgpack) return null;
+             const BH = (0, RH.e)(HH.payload);
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4121-L4122` → after: `L4141-L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4141-L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4141-L4142) · [Before (L4121-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4121-L4122)

```diff
-           if ((0, qU.h)(UU)) return void this.guard((() => {
-             (0, qU.d)(UU, zU)
+           if ((0, fH.f)(HH)) return void this.guard((() => {
+             (0, fH.c)(HH, LH)
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4152` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4172) · [Before (L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4152)

```diff
-         this.highlightOwed = null === XU ? !(0, pU.Ue)(UU, 0, jc, jc, 0) : !(0, pU.Ue)(UU, 0, XU.pos, XU.normal, 1)
+         this.highlightOwed = null === BH ? !(0, uH._e)(HH, 0, sA, sA, 0) : !(0, uH._e)(HH, 0, BH.pos, BH.normal, 1)
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4165` → after: `L4185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4185) · [Before (L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4165)

```diff
-           yU = UU.gameNameWithVariation, QU = null !== (oU = (0, eU.Nb)(yU)) && void 0 !== oU ? oU : void 0, AU = (0, CU.s)(UU.lobbyName), FU = (0, CU.G)(UU.lobbyName)
+           rH = HH.gameNameWithVariation, SH = null !== (zH = (0, mH.Ob)(rH)) && void 0 !== zH ? zH : void 0, hH = (0, oH.v)(HH.lobbyName), tH = (0, oH.N)(HH.lobbyName)
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4176` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4196) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4176)

```diff
-           EU = null !== (NU = null === (IU = this.options.gameFactory((0, eU.Tb)(yU))) || void 0 === IU ? void 0 : IU(FU, AU, QU, DU)) && void 0 !== NU ? NU : {}
+           EH = null !== (GH = null === (YH = this.options.gameFactory((0, mH.Wb)(rH))) || void 0 === YH ? void 0 : YH(tH, hH, SH, CH)) && void 0 !== GH ? GH : {}
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4178` → after: `L4198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4198) · [Before (L4178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4178)

```diff
-           this.oY(kU)
+           this.XX(xH)
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4184` → after: `L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4204) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4184)

```diff
-           this.oY(kU)
+           this.XX(xH)
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4187` → after: `L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4207) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4187)

```diff
-         this.owners = tU, this.tickers = tU.filter((UU => void 0 !== UU.LY)), this.renderers = tU.filter((UU => void 0 !== UU.onAfterRender)), this.receivers = tU.filter((UU => void 0 !== UU.onReceivedMessageFromServer)), this.writeAltVeto(tU), this.writeHooks(tU), this.writePubl … [truncated]
+         this.owners = WH, this.tickers = WH.filter((HH => void 0 !== HH.IX)), this.renderers = WH.filter((HH => void 0 !== HH.onAfterRender)), this.receivers = WH.filter((HH => void 0 !== HH.onReceivedMessageFromServer)), this.writeAltVeto(WH), this.writeHooks(WH), this.writePubl … [truncated]
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4213` → after: `L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4233) · [Before (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4213)

```diff
-           this.round(this.tickers, hc), (0, tc.b)(performance.now() - UU)
+           this.round(this.tickers, yA), (0, WA.c)(performance.now() - HH)
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4223-L4225` → after: `L4243-L4245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4243-L4245) · [Before (L4223-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4223-L4225)

```diff
-           cU = pU.w.frameMs(zU, 0);
-         Sc.q.frame(cU, pU.w.heading(zU, 0), pU.w.pitch(zU, 0), Sc.l[UU]);
-         const yU = (0, tc.h)(UU, cU);
+           AH = uH.y.frameMs(LH, 0);
+         KA.f.frame(AH, uH.y.heading(LH, 0), uH.y.pitch(LH, 0), KA.d[HH]);
+         const rH = (0, WA.g)(HH, AH);
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4229` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4249) · [Before (L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4229)

```diff
-             (0, Dc.c)().turnDamageIndicators(UU.cameraHeading)
+             (0, CA.e)().turnDamageIndicators(HH.cameraHeading)
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4240` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4260) · [Before (L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4240)

```diff
-           this.oY(AU)
+           this.XX(hH)
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4242` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4262) · [Before (L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4242)

```diff
-         this.showZoom(), this.items.flush(this.oY), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.XX), this.writePromptWatch(), this.writeCustomButtons();
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4244` → after: `L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4264) · [Before (L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4244)

```diff
-         this.ticks = 0, (0, tc.f)(QU, UU, yU, this.oY)
+         this.ticks = 0, (0, WA.e)(SH, HH, rH, this.XX)
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4251` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4271) · [Before (L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4251)

```diff
-           XU = pU.w.eventOverflowGen(UU, 0),
+           BH = uH.y.eventOverflowGen(HH, 0),
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4255` → after: `L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4275) · [Before (L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4255)

```diff
-         const cU = pU.w.eventOverflowMask(UU, 0),
+         const AH = uH.y.eventOverflowMask(HH, 0),
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4257` → after: `L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4277) · [Before (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4257)

```diff
-         0 === cU || null === yU || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, pU.Fe)(yU, 0, cU);
+         0 === AH || null === rH || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, uH.Je)(rH, 0, AH);
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4267` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4287) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4267)

```diff
-           return this.oY(DU), pU.qb.None
+           return this.XX(CH), uH.qb.None
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4269` → after: `L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4289) · [Before (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4269)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return UU === pU.oc.AltVeto ? pU.j.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return HH === uH.oc.AltVeto ? uH.m.Allow : 0;
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4300` → after: `L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4320) · [Before (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4300)

```diff
-             return "preventAction" === tU ? pU.j.Prevent : "preventPlacement" === tU ? pU.j.PreventPlacement : pU.j.Allow
+             return "preventAction" === WH ? uH.m.Prevent : "preventPlacement" === WH ? uH.m.PreventPlacement : uH.m.Allow
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4304-L4305` → after: `L4324-L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4324-L4325) · [Before (L4304-L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4304-L4305)

```diff
-               EU = 0 !== (UU & pU._.Alt),
-               YU = 0 !== (UU & pU._.HasPos),
+               EH = 0 !== (HH & uH.W.Alt),
+               XH = 0 !== (HH & uH.W.HasPos),
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4309` → after: `L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4329) · [Before (L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4309)

```diff
-               kU = 0 !== (UU & pU._.Up),
+               xH = 0 !== (HH & uH.W.Up),
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4311` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4331) · [Before (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4311)

```diff
-             if (0 === (UU & pU._.AttackOnly) && this.first((UU => {
+             if (0 === (HH & uH.W.AttackOnly) && this.first((HH => {
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4340` → after: `L4360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4360) · [Before (L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4340)

```diff
-             return this.onError(new Error(`Unknown game call kind ${UU}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${HH}`)), 0
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4344` → after: `L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4364) · [Before (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4344)

```diff
-         const FU = yU === pU.Vc ? null : lc.decode(this.api.eventBytes(QU, Math.min(yU, AU)));
+         const tH = rH === uH.Xc ? null : ZA.decode(this.api.eventBytes(SH, Math.min(rH, hH)));
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4346-L4348` → after: `L4366-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4366-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4366-L4368) · [Before (L4346-L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4346-L4348)

```diff
-           wc: [UU, XU, zU],
-           qc: cU,
-           Oc: FU
+           sA: [HH, BH, LH],
+           JA: AH,
+           iA: tH
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4356` → after: `L4376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4376) · [Before (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4356)

```diff
-         })), this.UY("blockChangeRefused", null), this.UY("EditBoard", {
+         })), this.AX("blockChangeRefused", null), this.AX("EditBoard", {
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4358` → after: `L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4378) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4358)

```diff
-         }), this.UY("EditCodeBlock", {
+         }), this.AX("EditCodeBlock", {
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4364` → after: `L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4384) · [Before (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4364)

```diff
-         UU === pU.Cc.ChestOpened ? this.items.chestOpened(zU, cU, yU) : UU !== pU.Cc.Synced && UU !== pU.Cc.ChestClosed && UU !== pU.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         HH === uH.Gc.ChestOpened ? this.items.chestOpened(LH, AH, rH) : HH !== uH.Gc.Synced && HH !== uH.Gc.ChestClosed && HH !== uH.Gc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4367-L4368` → after: `L4387-L4388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4387-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4387-L4388) · [Before (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4367-L4368)

```diff
-               case pU.Cc.Synced:
-                 AU.k.UY("syncedInvenFromServer");
+               case uH.Gc.Synced:
+                 hH.k.AX("syncedInvenFromServer");
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4370-L4372` → after: `L4390-L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4390-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4390-L4392) · [Before (L4370-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4370-L4372)

```diff
-               case pU.Cc.ChestOpened:
-               case pU.Cc.ChestClosed:
-                 AU.k.UY("chestToggleFromServer", UU === pU.Cc.ChestOpened, !0);
+               case uH.Gc.ChestOpened:
+               case uH.Gc.ChestClosed:
+                 hH.k.AX("chestToggleFromServer", HH === uH.Gc.ChestOpened, !0);
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4374-L4375` → after: `L4394-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4394-L4395) · [Before (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4374-L4375)

```diff
-               case pU.Cc.ChestRefreshed:
-                 AU.k.UY("chestRefreshedFromServer");
+               case uH.Gc.ChestRefreshed:
+                 hH.k.AX("chestRefreshedFromServer");
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4377-L4379` → after: `L4397-L4399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4397-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4397-L4399) · [Before (L4377-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4377-L4379)

```diff
-               case pU.Cc.EnchantingTable:
-                 AU.k.UY("enchantingTable", {
-                   yF: cU,
+               case uH.Gc.EnchantingTable:
+                 hH.k.AX("enchantingTable", {
+                   ph: AH,
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4383-L4384` → after: `L4403-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4403-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4403-L4404) · [Before (L4383-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4383-L4384)

```diff
-               case pU.Cc.HotbarRequest:
-                 AU.k.UY("setSelectedInventorySlotI", XU, !0);
+               case uH.Gc.HotbarRequest:
+                 hH.k.AX("setSelectedInventorySlotI", BH, !0);
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4386-L4387` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4406-L4407) · [Before (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4386-L4387)

```diff
-               case pU.Cc.Scrolled:
-                 AU.k.UY("ScrollInventorySlot", XU);
+               case uH.Gc.Scrolled:
+                 hH.k.AX("ScrollInventorySlot", BH);
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4389-L4390` → after: `L4409-L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4409-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4409-L4410) · [Before (L4389-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4389-L4390)

```diff
-               case pU.Cc.NumberKey:
-                 AU.k.UY("numkeyPressed", XU + 1);
+               case uH.Gc.NumberKey:
+                 hH.k.AX("numkeyPressed", BH + 1);
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4392-L4393` → after: `L4412-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4412-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4412-L4413) · [Before (L4392-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4392-L4393)

```diff
-               case pU.Cc.DropRequested:
-                 AU.k.UY("DropInvenItem", 0 !== XU);
+               case uH.Gc.DropRequested:
+                 hH.k.AX("DropInvenItem", 0 !== BH);
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4396` → after: `L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4416) · [Before (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4396)

```diff
-                 throw new IU.c(`InventoryEvent of no kind: what ${UU}`)
+                 throw new YH.d(`InventoryEvent of no kind: what ${HH}`)
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4405` → after: `L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4425) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4405)

```diff
-         this.UY("shotPlayer", {
+         this.AX("shotPlayer", {
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4413-L4415` → after: `L4433-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4433-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4433-L4435) · [Before (L4413-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4413-L4415)

```diff
-         this.UY("closeShopOnDamaged", null), this.guard((() => {
-           AU.k.UY("damagedByOtherPlayer", {
-             fQ: null,
+         this.AX("closeShopOnDamaged", null), this.guard((() => {
+           hH.k.AX("damagedByOtherPlayer", {
+             DS: null,
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4417` → after: `L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4437) · [Before (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4417)

```diff
-             vU: UU
+             xA: HH
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4423-L4424` → after: `L4443-L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4443-L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4443-L4444) · [Before (L4423-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4423-L4424)

```diff
-           AU.k.UY("yourAttackHit", {
-             yX: cU,
+           hH.k.AX("yourAttackHit", {
+             aA: AH,
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4431` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4451) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4431)

```diff
-         this.localPhysicsType = UU, this.UY("PlayerPhysicsTypeUpdate", UU)
+         this.localPhysicsType = HH, this.AX("PlayerPhysicsTypeUpdate", HH)
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4435` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4455) · [Before (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4435)

```diff
-           UU === NU.Jd.UPDATE ? (0, SU.j)(XU, {
+           HH === GH.Ad.UPDATE ? (0, KH.e)(BH, {
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4440` → after: `L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4460) · [Before (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4440)

```diff
-           }) : OU.b.remove(XU)
+           }) : lH.c.remove(BH)
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4447` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4467) · [Before (L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4447)

```diff
-         this.UY("showBottomMessage", {
+         this.AX("showBottomMessage", {
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4454` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4474) · [Before (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4454)

```diff
-         this.UY("showBottomMessage", mc.b)
+         this.AX("showBottomMessage", wA.d)
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4458` → after: `L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4478) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4458)

```diff
-         !this.zoomUnshown || UU && this.zoomHeld || (this.zoomUnshown = !1, this.UY("cameraZoomSet", this.zoom)), this.zoomHeld = UU
+         !this.zoomUnshown || HH && this.zoomHeld || (this.zoomUnshown = !1, this.AX("cameraZoomSet", this.zoom)), this.zoomHeld = HH
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4463-L4467` → after: `L4483-L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4483-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4483-L4487) · [Before (L4463-L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4463-L4467)

```diff
-             fQ: XU,
-             iQ: zU
-           } = (0, qc.d)(Oc.w, UU);
-           AU.k.UY("damagedByOtherPlayer", {
-             fQ: XU,
+             DS: BH,
+             wS: LH
+           } = (0, fA.d)(lA.q, HH);
+           hH.k.AX("damagedByOtherPlayer", {
+             DS: BH,
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4488` → after: `L4508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4508) · [Before (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4488)

```diff
-                   mode: pU.le.All,
+                   mode: uH.pe.All,
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4492-L4493` → after: `L4512-L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4512-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4512-L4513) · [Before (L4492-L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4492-L4493)

```diff
-               } return cU ? zU.size > pU.Oc ? {
-               mode: pU.le.All,
+               } return AH ? LH.size > uH.Rc ? {
+               mode: uH.pe.All,
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4496` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4516) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4496)

```diff
-               mode: pU.le.Filter,
+               mode: uH.pe.Filter,
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4499` → after: `L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4519) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4499)

```diff
-               mode: pU.le.Off,
+               mode: uH.pe.Off,
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4505` → after: `L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4525) · [Before (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4505)

```diff
-             mode: pU.le.All,
+             mode: uH.pe.All,
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4509` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4529) · [Before (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4509)

```diff
-         if (zU.mode === pU.le.Off && !this.vetoSet) return;
+         if (LH.mode === uH.pe.Off && !this.vetoSet) return;
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4511` → after: `L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4531) · [Before (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4511)

```diff
-         (0, pU.Qf)(XU, 0, zU.mode, zU.roots.length, cU) ? this.vetoSet = zU.mode !== pU.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, uH.Xf)(BH, 0, LH.mode, LH.roots.length, AH) ? this.vetoSet = LH.mode !== uH.pe.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4527` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4547) · [Before (L4527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4527)

```diff
-         (0 !== zU || this.hooksSet) && ((0, pU.Zf)(XU, 0, zU) ? this.hooksSet = 0 !== zU : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== LH || this.hooksSet) && ((0, uH.fg)(BH, 0, LH) ? this.hooksSet = 0 !== LH : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4536` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4556) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4536)

```diff
-         XU !== this.promptWatchSent && UU && !this.stopped() && (0, pU.mg)(UU, 0, Kc[XU]) && (this.promptWatchSent = XU)
+         BH !== this.promptWatchSent && HH && !this.stopped() && (0, uH.Dg)(HH, 0, JA[BH]) && (this.promptWatchSent = BH)
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4540` → after: `L4560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4560) · [Before (L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4540)

```diff
-         XU && UU !== this.writtenPublicLobby && ((0, pU.eg)(XU, 0, UU ? 1 : 0) ? this.writtenPublicLobby = UU : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         BH && HH !== this.writtenPublicLobby && ((0, uH.sg)(BH, 0, HH ? 1 : 0) ? this.writtenPublicLobby = HH : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4544` → after: `L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4564) · [Before (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4544)

```diff
-         XU && ((0, pU._f)(XU, 0, null === UU ? 0 : 1, null === UU ? Jc : xc.encode(UU)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         BH && ((0, uH.jg)(BH, 0, null === HH ? 0 : 1, null === HH ? aA : dA.encode(HH)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4554` → after: `L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4574) · [Before (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4554)

```diff
-             this.oY(zU)
+             this.XX(LH)
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4560` → after: `L4580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4580) · [Before (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4560)

```diff
-           AU.k.UY(UU, XU)
+           hH.k.AX(HH, BH)
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4567` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4587) · [Before (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4567)

```diff
-           this.oY(UU)
+           this.XX(HH)
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4574` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4594) · [Before (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4574)

```diff
-           this.oY(UU)
+           this.XX(HH)
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4609` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4629) · [Before (L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4609)

```diff
-         void 0 !== XU && this.oY(XU)
+         void 0 !== BH && this.XX(BH)
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4619` → after: `L4639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4639) · [Before (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4619)

```diff
-             zU ? this.onError(yU) : this.oY(yU)
+             LH ? this.onError(rH) : this.XX(rH)
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4627` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4647) · [Before (L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4627)

```diff
-           this.oY(XU)
+           this.XX(BH)
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4633` → after: `L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4653) · [Before (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4633)

```diff
-       return UU === pU.Zc ? null : String(UU)
+       return HH === uH.$c ? null : String(HH)
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4637` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4657) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4637)

```diff
-       UU.LY(NU.yd)
+       HH.IX(GH.td)
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4661-L4664` → after: `L4681-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4681-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4681-L4684) · [Before (L4661-L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4661-L4664)

```diff
-     var zy = zU(37148),
-       cy = zU(5378),
-       yy = zU(37480),
-       Qy = zU(37507);
+     var Lr = LH(37326),
+       Ar = LH(5335),
+       rr = LH(37617),
+       Sr = LH(37650);
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4668` → after: `L4688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4688) · [Before (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4668)

```diff
-           src: [...(0, yy.y)(UU).src],
+           src: [...(0, rr.v)(HH).src],
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4673` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4693) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4673)

```diff
-       return XU.load = () => (XU._preload = !0, (0, Qy.e)(UU), zU()), XU
+       return BH.load = () => (BH._preload = !0, (0, Sr.i)(HH), LH()), BH
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4701-L4702` → after: `L4721-L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4721-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4721-L4722) · [Before (L4701-L4702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4701-L4702)

```diff
-     var Ey = zU(37281),
-       Yy = zU(40063);
+     var Er = LH(37442),
+       Xr = LH(40176);
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4711` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4731) · [Before (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4711)

```diff
-       return Iy ??= new Yy.c(new Ey.i(py)), Iy
+       return Yr ??= new Xr.e(new Er.e(ur)), Yr
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4720` → after: `L4740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4740) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4720)

```diff
-       cU.e.get("scriptedCameraFacing") !== UU && cU.e.set({
+       AH.c.get("scriptedCameraFacing") !== HH && AH.c.set({
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4724-L4728` → after: `L4744-L4748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4744-L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4744-L4748) · [Before (L4724-L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4724-L4728)

```diff
-     var ky = zU(9894),
-       Gy = zU(9834),
-       By = zU(40101),
-       Zy = zU(42138),
-       Ry = zU(3660);
+     var xr = LH(10030),
+       vr = LH(9979),
+       Pr = LH(40210),
+       Tr = LH(42352),
+       Ur = LH(3639);
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4736` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4756) · [Before (L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4736)

```diff
-       return 0 !== ((null !== (zU = UU.itemFlags[XU]) && void 0 !== zU ? zU : 0) & pU.Gc.Stackable)
+       return 0 !== ((null !== (LH = HH.itemFlags[BH]) && void 0 !== LH ? LH : 0) & uH.Ic.Stackable)
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4750` → after: `L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4770) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4750)

```diff
-           return zU === pU.Kc ? void 0 : zU
+           return LH === uH.Oc ? void 0 : LH
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4754` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4774) · [Before (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4754)

```diff
-           const cU = null !== (zU = UU.itemHarvests[XU]) && void 0 !== zU ? zU : 0;
+           const AH = null !== (LH = HH.itemHarvests[BH]) && void 0 !== LH ? LH : 0;
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4759-L4760` → after: `L4779-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4779-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4779-L4780) · [Before (L4759-L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4759-L4760)

```diff
-           const yU = null !== (zU = UU.itemLevels[XU]) && void 0 !== zU ? zU : pU.Kc;
-           return yU !== pU.Kc ? yU : null !== (cU = (0, ac.harvestsNullLevelOf)(XU)) && void 0 !== cU ? cU : void 0
+           const rH = null !== (LH = HH.itemLevels[BH]) && void 0 !== LH ? LH : uH.Oc;
+           return rH !== uH.Oc ? rH : null !== (AH = (0, QA.harvestsNullLevelOf)(BH)) && void 0 !== AH ? AH : void 0
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4781` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4801) · [Before (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4781)

```diff
-           if (void 0 === XU) throw new Error(`No item is named ${UU}, an item's root`);
+           if (void 0 === BH) throw new Error(`No item is named ${HH}, an item's root`);
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4792-L4798` → after: `L4812-L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4812-L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4812-L4818) · [Before (L4792-L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4792-L4798)

```diff
-           blockFlags: ey(yU, pU.D.BYTES, pU.D.flags),
-           blockHarvestTypes: ey(yU, pU.D.BYTES, pU.D.harvestType),
-           blockHarvestLevels: ey(yU, pU.D.BYTES, pU.D.harvestLevel),
-           blockAttachedTops: Cy(yU, pU.D.BYTES, pU.D.attachedTop),
-           itemFlags: ey(QU, pU.Ic.BYTES, pU.Ic.flags),
-           itemHarvests: ey(QU, pU.Ic.BYTES, pU.Ic.harvests),
-           itemLevels: ey(QU, pU.Ic.BYTES, pU.Ic.level)
+           blockFlags: mr(rH, uH.G.BYTES, uH.G.flags),
+           blockHarvestTypes: mr(rH, uH.G.BYTES, uH.G.harvestType),
+           blockHarvestLevels: mr(rH, uH.G.BYTES, uH.G.harvestLevel),
+           blockAttachedTops: or(rH, uH.G.BYTES, uH.G.attachedTop),
+           itemFlags: mr(SH, uH.Kc.BYTES, uH.Kc.flags),
+           itemHarvests: mr(SH, uH.Kc.BYTES, uH.Kc.harvests),
+           itemLevels: mr(SH, uH.Kc.BYTES, uH.Kc.level)
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4802-L4804` → after: `L4822-L4824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4822-L4824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4822-L4824) · [Before (L4802-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4802-L4804)

```diff
-         if ("number" === typeof UU) return void 0 === (0, Ry.f)(UU) ? void 0 : UU;
-         const XU = (0, Ry.c)(UU);
-         return void 0 === XU && dy.test(UU) ? void 0 === (0, Ry.f)(+UU) ? void 0 : +UU : XU
+         if ("number" === typeof HH) return void 0 === (0, Ur.h)(HH) ? void 0 : HH;
+         const BH = (0, Ur.e)(HH);
+         return void 0 === BH && br.test(HH) ? void 0 === (0, Ur.h)(+HH) ? void 0 : +HH : BH
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4807` → after: `L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4827) · [Before (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4807)

```diff
-         if (!UU || UU === ky.c) return ky.f;
+         if (!HH || HH === xr.e) return xr.f;
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4809` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4829) · [Before (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4809)

```diff
-         if (void 0 === XU) throw new Error(`Item ${UU} not found in registry`);
+         if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4813` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4833) · [Before (L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4813)

```diff
-         return 0 !== UU && void 0 !== (0, Ry.f)(UU) ? this.metaOf(UU).rootId : UU
+         return 0 !== HH && void 0 !== (0, Ur.h)(HH) ? this.metaOf(HH).rootId : HH
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4816` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4836) · [Before (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4816)

```diff
-         return this.metas[UU] ??= (0, Gy.l)((0, Ry.f)(UU), UU, this.rootIdOf, (0, ac.rootMetaDescOf)(UU))
+         return this.metas[HH] ??= (0, vr.k)((0, Ur.h)(HH), HH, this.rootIdOf, (0, QA.rootMetaDescOf)(HH))
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4819` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4839) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4819)

```diff
-         if (!UU || UU === ky.c) return 0;
+         if (!HH || HH === xr.e) return 0;
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4821` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4841) · [Before (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4821)

```diff
-         if (void 0 === XU) throw new Error(`Invalid block name. You sent ${UU}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4825` → after: `L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4845) · [Before (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4825)

```diff
-         if (!UU || UU === ky.c) return ky.c;
+         if (!HH || HH === xr.e) return xr.e;
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4827-L4828` → after: `L4847-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4847-L4848) · [Before (L4827-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4827-L4828)

```diff
-         if (void 0 === XU) throw new Error(`Item ${UU} not found in registry`);
-         return (0, Ry.f)(XU)
+         if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
+         return (0, Ur.h)(BH)
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4832` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4852) · [Before (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4832)

```diff
-         if (UU === ky.c) return 0;
+         if (HH === xr.e) return 0;
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4836-L4837` → after: `L4856-L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4856-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4856-L4857) · [Before (L4836-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4836-L4837)

```diff
-             cU = XU > 0 ? (0, Ry.c)(UU.slice(0, XU)) : void 0;
-           zU = void 0 !== cU && this.isBlockId(cU) && (0, ac.rootMetaDescOf)(cU) === UU ? cU : void 0
+             AH = BH > 0 ? (0, Ur.e)(HH.slice(0, BH)) : void 0;
+           LH = void 0 !== AH && this.isBlockId(AH) && (0, QA.rootMetaDescOf)(AH) === HH ? AH : void 0
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4840` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4860) · [Before (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4840)

```diff
-         if (!XU) throw new Error(`Invalid block name. You sent ${UU}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4847` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4867) · [Before (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4847)

```diff
-         return 0 !== UU && (0, Ry.f)(UU) || ky.c
+         return 0 !== HH && (0, Ur.h)(HH) || xr.e
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4855` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4875) · [Before (L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4855)

```diff
-           name: (0, Ry.f)(XU),
+           name: (0, Ur.h)(BH),
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4865` → after: `L4885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4885) · [Before (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4865)

```diff
-         if (By.b.has(XU)) {
+         if (Pr.c.has(BH)) {
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4867` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4887) · [Before (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4867)

```diff
-             cU = this.options.get((0, By.e)(zU, XU));
+             AH = this.options.get((0, Pr.d)(LH, BH));
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4881-L4882` → after: `L4901-L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4901-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4901-L4902) · [Before (L4881-L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4881-L4882)

```diff
-           throw new Error(`ClientApi.${UU} is not available yet in the wasm client (${XU})`)
-         }(`getItemStat("${UU}")`, `a table of the stat: the wasm client answers ${Object.keys(Ly).join(", ")}`), XU
+           throw new Error(`ClientApi.${HH} is not available yet in the wasm client (${BH})`)
+         }(`getItemStat("${HH}")`, `a table of the stat: the wasm client answers ${Object.keys(kr).join(", ")}`), BH
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4887` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4907) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4887)

```diff
-         return null !== yU && void 0 !== yU || "displayName" !== XU ? yU : this.getItemName(UU)
+         return null !== rH && void 0 !== rH || "displayName" !== BH ? rH : this.getItemName(HH)
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4893` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4913) · [Before (L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4893)

```diff
-         return this.getClientOption(`${UU}GunStats`)
+         return this.getClientOption(`${HH}GunStats`)
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4900` → after: `L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4920) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4900)

```diff
-         return 0 !== ((null !== (XU = this.props.blockFlags[UU]) && void 0 !== XU ? XU : 0) & pU.A.Solid)
+         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Solid)
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4907` → after: `L4927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4927) · [Before (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4907)

```diff
-         return 0 !== ((null !== (XU = this.props.blockFlags[UU]) && void 0 !== XU ? XU : 0) & pU.A.Fluid)
+         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Fluid)
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4911` → after: `L4931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4931) · [Before (L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4911)

```diff
-         return 0 !== ((null !== (XU = this.props.blockFlags[UU]) && void 0 !== XU ? XU : 0) & pU.A.PlaceOver)
+         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.PlaceOver)
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4915` → after: `L4935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4935) · [Before (L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4915)

```diff
-         return null !== (XU = this.props.blockAttachedTops[UU]) && void 0 !== XU ? XU : 0
+         return null !== (BH = this.props.blockAttachedTops[HH]) && void 0 !== BH ? BH : 0
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4932-L4934` → after: `L4952-L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4952-L4954) · [Before (L4932-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4932-L4934)

```diff
-               for (let UU = 0; UU + pU.ae.BYTES <= QU; UU += pU.ae.BYTES) FU.push(Object.freeze({
-                 item: XU.nameOfId(pU.ae.item(AU, UU)),
-                 amt: pU.ae.amount(AU, UU)
+               for (let HH = 0; HH + uH.de.BYTES <= SH; HH += uH.de.BYTES) tH.push(Object.freeze({
+                 item: BH.nameOfId(uH.de.item(hH, HH)),
+                 amt: uH.de.amount(hH, HH)
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4954-L4960` → after: `L4974-L4980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4974-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4974-L4980) · [Before (L4954-L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4954-L4960)

```diff
-     var Sy = zU(41863),
-       ry = zU(37685),
-       uy = zU(37669),
-       fy = zU(37674),
-       iy = zU(37211),
-       Hy = zU(41742),
-       My = zU(53645);
+     var Kr = LH(42092),
+       cr = LH(37821),
+       er = LH(37807),
+       qr = LH(37809),
+       gr = LH(37373),
+       Nr = LH(42002),
+       Rr = LH(54466);
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4968` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4988) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4968)

```diff
-       return XU.byteLength < NU.Cc ? XU : XU.subarray(0, NU.Cc - 1)
+       return BH.byteLength < GH.Dc ? BH : BH.subarray(0, GH.Dc - 1)
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4976` → after: `L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4996) · [Before (L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4976)

```diff
-         this.keyframesVersion = vy, this.reloadFrom = null !== (UU = null === (XU = this.view()) || void 0 === XU ? void 0 : XU.version) && void 0 !== UU ? UU : vy
+         this.keyframesVersion = jr, this.reloadFrom = null !== (HH = null === (BH = this.view()) || void 0 === BH ? void 0 : BH.version) && void 0 !== HH ? HH : jr
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4979` → after: `L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4999) · [Before (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4979)

```diff
-         const XU = 1 === this.deps.core.PQU(UU);
+         const BH = 1 === this.deps.core.RSH(HH);
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5000` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5020) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5000)

```diff
-         this.deps.replay.setCameraMode(My.d.indexOf(UU))
+         this.deps.replay.setCameraMode(Rr.b.indexOf(HH))
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5004` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5024) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5004)

```diff
-         const XU = pU.w.replayViewPtr(this.deps.apiView(), 0);
+         const BH = uH.y.replayViewPtr(this.deps.apiView(), 0);
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5006-L5007` → after: `L5026-L5027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5026-L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5026-L5027) · [Before (L5006-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5006-L5007)

```diff
-         const zU = new DataView(this.deps.buffer(), XU, pU.Ud.BYTES),
-           cU = pU.Ud.version(zU, 0),
+         const LH = new DataView(this.deps.buffer(), BH, uH.Xd.BYTES),
+           AH = uH.Xd.version(LH, 0),
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5010` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5030) · [Before (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5010)

```diff
-         const QU = pU.Ud.markIn(zU, 0),
+         const SH = uH.Xd.markIn(LH, 0),
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5013-L5018` → after: `L5033-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5033-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5033-L5038) · [Before (L5013-L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5013-L5018)

```diff
-             state: pU.Ud.state(zU, 0),
-             cameraMode: null !== (UU = My.d[pU.Ud.cameraMode(zU, 0)]) && void 0 !== UU ? UU : "recording",
-             LY: pU.Ud.LY(zU, 0),
-             totalTicks: pU.Ud.totalTicks(zU, 0),
-             speed: pU.Ud.speed(zU, 0),
-             mark: QU === pU.Sd ? null : {
+             state: uH.Xd.state(LH, 0),
+             cameraMode: null !== (HH = Rr.b[uH.Xd.cameraMode(LH, 0)]) && void 0 !== HH ? HH : "recording",
+             IX: uH.Xd.IX(LH, 0),
+             totalTicks: uH.Xd.totalTicks(LH, 0),
+             speed: uH.Xd.speed(LH, 0),
+             mark: SH === uH.Td ? null : {
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5020` → after: `L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5040) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5020)

```diff
-               outTick: pU.Ud.markOut(zU, 0)
+               outTick: uH.Xd.markOut(LH, 0)
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5022` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5042) · [Before (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5022)

```diff
-             editVersion: pU.Ud.editVersion(zU, 0)
+             editVersion: uH.Xd.editVersion(LH, 0)
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5030` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5050) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5030)

```diff
-         const XU = this.reloadFrom === vy && UU.state !== NU.od.Cropping && UU.state !== NU.od.None,
+         const BH = this.reloadFrom === jr && HH.state !== GH.hd.Cropping && HH.state !== GH.hd.None,
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5035` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5055) · [Before (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5035)

```diff
-         } = this.deps, yU = cU.WQU(), QU = cU.Kt(), AU = [];
+         } = this.deps, rH = AH.jSH(), SH = AH.DW(), hH = [];
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5037` → after: `L5057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5057) · [Before (L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5037)

```diff
-           const UU = new DataView(this.deps.buffer(), QU, yU * NU.sc);
+           const HH = new DataView(this.deps.buffer(), SH, rH * GH.qc);
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5039` → after: `L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5059) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5039)

```diff
-             const zU = XU * NU.sc,
+             const LH = BH * GH.qc,
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5042-L5043` → after: `L5062-L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5062-L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5062-L5063) · [Before (L5042-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5042-L5043)

```diff
-               LY: UU.getUint32(zU + NU.Bc, !0),
-               position: [cU(NU.Ac), cU(NU.Ac + 8), cU(NU.Ac + 16)],
+               IX: HH.getUint32(LH + GH.zc, !0),
+               position: [AH(GH.wc), AH(GH.wc + 8), AH(GH.wc + 16)],
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5045` → after: `L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5065) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5045)

```diff
-               easing: [cU(NU.wc), cU(NU.wc + 8), cU(NU.wc + 16), cU(NU.wc + 24)]
+               easing: [AH(GH.vc), AH(GH.vc + 8), AH(GH.vc + 16), AH(GH.vc + 24)]
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5053` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5073) · [Before (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5053)

```diff
-           XU = [pU.w.eye(UU, 0, 0), pU.w.eye(UU, 0, 1), pU.w.eye(UU, 0, 2)];
+           BH = [uH.y.eye(HH, 0, 0), uH.y.eye(HH, 0, 1), uH.y.eye(HH, 0, 2)];
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5057` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5077) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5057)

```diff
-         }(pU.w.heading(UU, 0), pU.w.pitch(UU, 0)))
+         }(uH.y.heading(HH, 0), uH.y.pitch(HH, 0)))
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5060` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5080) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5060)

```diff
-         return this.deps.replay.setKeyframe(UU.LY, Float64Array.from([...UU.position, ...UU.direction, ...UU.easing]))
+         return this.deps.replay.setKeyframe(HH.IX, Float64Array.from([...HH.position, ...HH.direction, ...HH.easing]))
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5070` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5090) · [Before (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5070)

```diff
-         return this.deps.replay.setMark(null !== (XU = null === UU || void 0 === UU ? void 0 : UU.inTick) && void 0 !== XU ? XU : -1, null !== (zU = null === UU || void 0 === UU ? void 0 : UU.outTick) && void 0 !== zU ? zU : -1)
+         return this.deps.replay.setMark(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.inTick) && void 0 !== BH ? BH : -1, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.outTick) && void 0 !== LH ? LH : -1)
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5087` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5107) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5087)

```diff
-         return null !== zU && (0, pU.Cf)(zU, 0, UU, null === XU ? Vy : sy.encode(XU))
+         return null !== LH && (0, uH.Mf)(LH, 0, HH, null === BH ? nr : Fr.encode(BH))
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5092` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5112) · [Before (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5092)

```diff
-         return null !== yU && (0, pU.yf)(yU, 0, XU, zU, QU, sy.encode(UU))
+         return null !== rH && (0, uH.If)(rH, 0, BH, LH, SH, Fr.encode(HH))
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5096` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5116) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5096)

```diff
-         return null !== yU && (0, pU.Gf)(yU, 0, UU, XU, Math.max(0, zU), sy.encode(cU))
+         return null !== rH && (0, uH.Of)(rH, 0, HH, BH, Math.max(0, LH), Fr.encode(AH))
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5104` → after: `L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5124) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5104)

```diff
-                 return UU + Ac.zb + (null !== (zU = null === XU || void 0 === XU ? void 0 : XU.byteLength) && void 0 !== zU ? zU : 0)
+                 return HH + hA.Db + (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.byteLength) && void 0 !== LH ? LH : 0)
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5111` → after: `L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5131) · [Before (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5111)

```diff
-               cU.setUint16(yU, null !== (QU = null === AU || void 0 === AU ? void 0 : AU.byteLength) && void 0 !== QU ? QU : NU.Cc, !0), yU += Ac.zb, null !== AU && (zU.set(AU, yU), yU += AU.byteLength)
+               AH.setUint16(rH, null !== (SH = null === hH || void 0 === hH ? void 0 : hH.byteLength) && void 0 !== SH ? SH : GH.Dc, !0), rH += hA.Db, null !== hH && (LH.set(hH, rH), rH += hH.byteLength)
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5115` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5135) · [Before (L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5115)

```diff
-         return null !== QU && (0, pU.Af)(QU, 0, null !== (cU = UU.id) && void 0 !== cU ? cU : pU.ad, null !== (yU = XU.id) && void 0 !== yU ? yU : pU.ad, AU)
+         return null !== SH && (0, uH.Jf)(SH, 0, null !== (AH = HH.id) && void 0 !== AH ? AH : uH.bd, null !== (rH = BH.id) && void 0 !== rH ? rH : uH.bd, hH)
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5126` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5146) · [Before (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5126)

```diff
-         this.deps.core.dQU()
+         this.deps.core.nSH()
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5139` → after: `L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5159) · [Before (L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5139)

```diff
-         this.deps = UU, this.state = pc.e, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (XU = UU.now) && void 0 !== XU ? XU : () => performance.now()
+         this.deps = HH, this.state = uA.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (BH = HH.now) && void 0 !== BH ? BH : () => performance.now()
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5150` → after: `L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5170) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5150)

```diff
-         this.live && (this.viewerShown(!0 === (null === (XU = (zU = this.deps).viewerOpen) || void 0 === XU ? void 0 : XU.call(zU))), this.deps.client.recorderSession(UU, (0, My.f)()))
+         this.live && (this.viewerShown(!0 === (null === (BH = (LH = this.deps).viewerOpen) || void 0 === BH ? void 0 : BH.call(LH))), this.deps.client.recorderSession(HH, (0, Rr.d)()))
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5157` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5177) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5157)

```diff
-         this.live && (this.state.recording || !0 !== (null === (UU = (XU = this.deps).viewerOpen) || void 0 === UU ? void 0 : UU.call(XU))) ? this.deps.client.recorderControl(NU.Xc.ToggleRecording) : this.deps.notify(fy.e.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (HH = (BH = this.deps).viewerOpen) || void 0 === HH ? void 0 : HH.call(BH))) ? this.deps.client.recorderControl(GH.Sc.ToggleRecording) : this.deps.notify(qr.e.closeViewerFirst)
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5160` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5180) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5160)

```diff
-         this.live ? this.deps.client.recorderControl(NU.Xc.SaveClip) : this.deps.notify(fy.e.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(GH.Sc.SaveClip) : this.deps.notify(qr.e.clippingNotOn)
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5163` → after: `L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5183) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5163)

```diff
-         this.live && this.deps.client.recorderControl(UU ? NU.Xc.ViewerOpened : NU.Xc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(HH ? GH.Sc.ViewerOpened : GH.Sc.ViewerClosed)
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5200` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5220) · [Before (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5200)

```diff
-           case NU.Tc.RecordingStarted:
+           case GH.Qc.RecordingStarted:
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5207-L5208` → after: `L5227-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5227-L5228) · [Before (L5207-L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5207-L5208)

```diff
-           case NU.Tc.RecordingStopped:
-             this.stopRecording(), cU(yU.recordingStopped), this.saveState(NU.ed.Recording, "saving");
+           case GH.Qc.RecordingStopped:
+             this.stopRecording(), AH(rH.recordingStopped), this.saveState(GH.cd.Recording, "saving");
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5210` → after: `L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5230) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5210)

```diff
-           case NU.Tc.RecordingDiscarded:
+           case GH.Qc.RecordingDiscarded:
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5213` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5233) · [Before (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5213)

```diff
-           case NU.Tc.RecordingTurnedOff:
+           case GH.Qc.RecordingTurnedOff:
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5216` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5236) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5216)

```diff
-           case NU.Tc.LimitReached:
+           case GH.Qc.LimitReached:
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5219-L5220` → after: `L5239-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5239-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5239-L5240) · [Before (L5219-L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5219-L5220)

```diff
-           case NU.Tc.ClipSaved:
-             this.saveState(NU.ed.Clip, "saving");
+           case GH.Qc.ClipSaved:
+             this.saveState(GH.cd.Clip, "saving");
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5222` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5242) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5222)

```diff
-           case NU.Tc.ClipEmpty:
+           case GH.Qc.ClipEmpty:
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5225` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5245) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5225)

```diff
-           case NU.Tc.ClippingNotOn:
+           case GH.Qc.ClippingNotOn:
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5228` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5248) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5228)

```diff
-           case NU.Tc.Disallowed:
+           case GH.Qc.Disallowed:
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5231` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5251) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5231)

```diff
-           case NU.Tc.ClippingOn:
+           case GH.Qc.ClippingOn:
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5238` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5258) · [Before (L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5238)

```diff
-           case NU.Tc.ClippingOff:
+           case GH.Qc.ClippingOff:
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5245` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5265) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5245)

```diff
-           case NU.Tc.ClipSettingsChanged:
+           case GH.Qc.ClipSettingsChanged:
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5251` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5271) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5251)

```diff
-           case NU.Tc.SaveBusy:
+           case GH.Qc.SaveBusy:
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5254` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5274) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5254)

```diff
-           case NU.Tc.CloseViewerFirst:
+           case GH.Qc.CloseViewerFirst:
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5259` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5279) · [Before (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5259)

```diff
-         this.deps.download(XU), this.saveState(UU, "done"), this.deps.notify(UU === NU.ed.Clip ? fy.e.clipSaved : fy.e.recordingSaved)
+         this.deps.download(BH), this.saveState(HH, "done"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipSaved : qr.e.recordingSaved)
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5262` → after: `L5282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5282) · [Before (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5262)

```diff
-         this.saveState(UU, "failed"), this.deps.notify(UU === NU.ed.Clip ? fy.e.clipFailed : fy.e.recordingFailed)
+         this.saveState(HH, "failed"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipFailed : qr.e.recordingFailed)
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5265` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5285) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5265)

```diff
-         this.recordingSince = null, this.clipTickPending = !1, this.set(pc.e)
+         this.recordingSince = null, this.clipTickPending = !1, this.set(uA.c)
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5287` → after: `L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5307) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5287)

```diff
-         if (XU + Ac.zb > zU) return null;
+         if (BH + hA.Db > LH) return null;
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5289` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5309) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5289)

```diff
-         if (XU += Ac.zb, cU !== NU.Cc) {
+         if (BH += hA.Db, AH !== GH.Dc) {
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5294` → after: `L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5314) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5294)

```diff
-       return XU === zU ? yU : null
+       return BH === LH ? rH : null
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5311` → after: `L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5331) · [Before (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5311)

```diff
-               case NU.id.Cleared:
+               case GH.ed.Cleared:
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5313` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5333) · [Before (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5313)

```diff
-               case NU.id.Text:
+               case GH.ed.Text:
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5315` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5335) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5315)

```diff
-               case NU.id.Int:
+               case GH.ed.Int:
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5317` → after: `L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5337) · [Before (L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5317)

```diff
-               case NU.id.Double:
+               case GH.ed.Double:
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5332` → after: `L5352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5352) · [Before (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5332)

```diff
-               case NU.md.FlyingText: {
+               case GH.gd.FlyingText: {
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5336-L5337` → after: `L5356-L5357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5356-L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5356-L5357) · [Before (L5336-L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5336-L5337)

```diff
-                   mX: zU,
-                   nX: cU,
+                   ar: LH,
+                   dr: AH,
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5342` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5362) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5342)

```diff
-               case NU.md.PlayerKilled: {
+               case GH.gd.PlayerKilled: {
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5352` → after: `L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5372) · [Before (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5352)

```diff
-               case NU.md.Killfeed: {
+               case GH.gd.Killfeed: {
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5394` → after: `L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5414) · [Before (L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5394)

```diff
-       return (UU, XU, QU, AU) => !(UU < NU.W.ReplayFailed || UU > NU.W.RecorderEvent) && (zU = XU, cU = !0, (0, pU.pe)(UU, XU, QU, AU, yU) && cU)
+       return (HH, BH, SH, hH) => !(HH < GH.X.ReplayFailed || HH > GH.X.RecorderEvent) && (LH = BH, AH = !0, (0, uH.we)(HH, BH, SH, hH, rH) && AH)
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5410` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5430) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5410)

```diff
-               if (yU + NU.V > zU.byteLength) throw new Error(`the recorder module's events end mid-head at ${yU}`);
+               if (rH + GH.U > LH.byteLength) throw new Error(`the recorder module's events end mid-head at ${rH}`);
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5414-L5416` → after: `L5434-L5436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5434-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5434-L5436) · [Before (L5414-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5414-L5416)

```diff
-                 FU = yU + NU.V;
-               if (FU + AU > zU.byteLength || !XU(QU, cU, FU, AU)) throw new Error(`the recorder module wrote a malformed event ${QU} (${AU} bytes) at ${yU}`);
-               yU = FU + (0, NU.De)(AU)
+                 tH = rH + GH.U;
+               if (tH + hH > LH.byteLength || !BH(SH, AH, tH, hH)) throw new Error(`the recorder module wrote a malformed event ${SH} (${hH} bytes) at ${rH}`);
+               rH = tH + (0, GH.te)(hH)
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5434` → after: `L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5454) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5434)

```diff
-         const zU = null !== (XU = this.parts.get(UU.save)) && void 0 !== XU ? XU : [];
+         const LH = null !== (BH = this.parts.get(HH.save)) && void 0 !== BH ? BH : [];
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5458` → after: `L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5478) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5458)

```diff
-       return zU.e(72).then((() => zU(63283)))
+       return LH.e(72).then((() => LH(64081)))
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5483` → after: `L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5503) · [Before (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5483)

```diff
-             XU === NU.ed.Edited ? null === (cU = this.viewer) || void 0 === cU || cU.saveDone(zU) : this.recorder.fileReady(XU, zU)
+             BH === GH.cd.Edited ? null === (AH = this.viewer) || void 0 === AH || AH.saveDone(LH) : this.recorder.fileReady(BH, LH)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5515` → after: `L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5535) · [Before (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5515)

```diff
-               case NU.Tc.FileDiscarded:
+               case GH.Qc.FileDiscarded:
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5518` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5538) · [Before (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5518)

```diff
-               case NU.Tc.SaveFailed:
+               case GH.Qc.SaveFailed:
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5521` → after: `L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5541) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5521)

```diff
-               case NU.Tc.SaveBusy:
+               case GH.Qc.SaveBusy:
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5544` → after: `L5564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5564) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5544)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (UU = this.deps.loadViewer) && void 0 !== UU ? UU : hy)().catch((UU => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (HH = this.deps.loadViewer) && void 0 !== HH ? HH : yr)().catch((HH => {
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5562` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5582) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5562)

```diff
-           UU > 0 && this.recorder.LY()
+           HH > 0 && this.recorder.IX()
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5574` → after: `L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5594) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5574)

```diff
-         UU === NU.ed.Edited ? null === (XU = this.viewer) || void 0 === XU || XU.saveFailed(!1) : this.recorder.failed(UU)
+         HH === GH.cd.Edited ? null === (BH = this.viewer) || void 0 === BH || BH.saveFailed(!1) : this.recorder.failed(HH)
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5577-L5580` → after: `L5597-L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5597-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5597-L5600) · [Before (L5577-L5580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5577-L5580)

```diff
-     var XQ = zU(41680),
-       zQ = zU(41695),
-       cQ = zU(5329),
-       yQ = zU(42018);
+     var BS = LH(41940),
+       LS = LH(41954),
+       AS = LH(5275),
+       rS = LH(42240);
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5587` → after: `L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5607) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5587)

```diff
-         const zU = (0, MU.v)(0, performance.now()),
+         const LH = (0, jH.u)(0, performance.now()),
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5589-L5590` → after: `L5609-L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5609-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5609-L5610) · [Before (L5589-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5589-L5590)

```diff
-         (0, yQ.g)((() => {
-           (0, MU.C)(NU.tb.MouseDown, 0, 0, 0, zU), (0, MU.C)(NU.tb.MouseMove, 0, UU * cU, XU * cU, 0), (0, MU.C)(NU.tb.MouseUp, 0, 0, 0, zU)
+         (0, rS.h)((() => {
+           (0, jH.A)(GH.tb.MouseDown, 0, 0, 0, LH), (0, jH.A)(GH.tb.MouseMove, 0, HH * AH, BH * AH, 0), (0, jH.A)(GH.tb.MouseUp, 0, 0, 0, LH)
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5595` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5615) · [Before (L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5595)

```diff
-         this.analogue[0] = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.x) && void 0 !== XU ? XU : 0, this.analogue[1] = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.y) && void 0 !== zU ? zU : 0, this.send()
+         this.analogue[0] = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.x) && void 0 !== BH ? BH : 0, this.analogue[1] = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.y) && void 0 !== LH ? LH : 0, this.send()
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5598-L5599` → after: `L5618-L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5618-L5619) · [Before (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5598-L5599)

```diff
-         const zU = "freeCamUp" === UU ? pU.bc.Up : pU.bc.Down;
-         this.keys = XU ? this.keys | zU : this.keys & ~zU, this.send()
+         const LH = "freeCamUp" === HH ? uH.ec.Up : uH.ec.Down;
+         this.keys = BH ? this.keys | LH : this.keys & ~LH, this.send()
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5606` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5606)

```diff
-         this.unsent = null !== UU && !(0, pU.Ke)(UU, 0, this.analogue, this.keys)
+         this.unsent = null !== HH && !(0, uH.Qe)(HH, 0, this.analogue, this.keys)
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5609-L5615` → after: `L5629-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5629-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5629-L5635) · [Before (L5609-L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5609-L5615)

```diff
-     var AQ = zU(3958),
-       FQ = zU(781),
-       oQ = zU(287),
-       DQ = zU(97),
-       EQ = zU(34791),
-       YQ = zU(762),
-       NQ = zU(37311);
+     var hS = LH(3950),
+       tS = LH(725),
+       zS = LH(257),
+       CS = LH(81),
+       ES = LH(34908),
+       XS = LH(703),
+       GS = LH(37467);
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5618-L5619` → after: `L5638-L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5638-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5638-L5639) · [Before (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5618-L5619)

```diff
-       const UU = cU.e.get("clientEscMenuOptions"),
-         XU = (0, FQ.s)(UU);
+       const HH = AH.c.get("clientEscMenuOptions"),
+         BH = (0, tS.q)(HH);
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5621` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5641) · [Before (L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5621)

```diff
-         mouse: (0, DQ.isMobile)() ? XU : UU.mouseSensitivity,
+         mouse: (0, CS.isMobile)() ? BH : HH.mouseSensitivity,
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5628-L5629` → after: `L5648-L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5648-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5648-L5649) · [Before (L5628-L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5628-L5629)

```diff
-       const UU = cU.e.get("clientEscMenuOptions"),
-         XU = cU.e.get("isTouchScreen") ? (0, FQ.s)(UU) : UU.mouseSensitivity,
+       const HH = AH.c.get("clientEscMenuOptions"),
+         BH = AH.c.get("isTouchScreen") ? (0, tS.q)(HH) : HH.mouseSensitivity,
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5631` → after: `L5651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5651) · [Before (L5631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5631)

```diff
-       return zU > 0 ? XU / zU : 1
+       return LH > 0 ? BH / LH : 1
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5636` → after: `L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5656) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5636)

```diff
-         UU.setSoundPrefs(cU.e.get("soundVolume"), cU.e.get("soundOnFromAd"))
+         HH.setSoundPrefs(AH.c.get("soundVolume"), AH.c.get("soundOnFromAd"))
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5645` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5665) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5645)

```diff
-         } = cU.e.get("clientEscMenuOptions"), FU = {
+         } = AH.c.get("clientEscMenuOptions"), tH = {
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5650` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5670) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5650)

```diff
-           cellLight: (0, AQ.j)("cellLight") ? (0, AQ.j)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, hS.n)("cellLight") ? (0, hS.n)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5652` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5672) · [Before (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5652)

```diff
-         zU && (0, NU.le)(zU) === (0, NU.le)(FU) && zU.fogChunks === QU || (zU = FU, UU.setEnvPrefs(zU))
+         LH && (0, GH.ae)(LH) === (0, GH.ae)(tH) && LH.fogChunks === SH || (LH = tH, HH.setEnvPrefs(LH))
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5657` → after: `L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5677) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5657)

```diff
-           const UU = cU.e.get("clientEscMenuOptions");
+           const HH = AH.c.get("clientEscMenuOptions");
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5659` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5679) · [Before (L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5659)

```diff
-             nametagsHidden: cU.e.get("areNametagsHidden"),
+             nametagsHidden: AH.c.get("areNametagsHidden"),
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5663` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5683) · [Before (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5663)

```diff
-             ezTowering: UU.ezTowering ? (0, oQ.f)() : null,
+             ezTowering: HH.ezTowering ? (0, zS.i)() : null,
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5668-L5669` → after: `L5688-L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5688-L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5688-L5689) · [Before (L5668-L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5668-L5669)

```diff
-             edgeGuardLong: (0, YQ.d)(),
-             nametagCutDistance: (0, EQ.h)()
+             edgeGuardLong: (0, XS.b)(),
+             nametagCutDistance: (0, ES.i)()
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5672` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5692) · [Before (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5672)

```diff
-         (0, eU.oe)(QU, XU) || (QU = XU, UU.setUiPrefs(XU))
+         (0, mH.ne)(SH, BH) || (SH = BH, HH.setUiPrefs(BH))
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5677` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5697) · [Before (L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5677)

```diff
-         (0, eU.oe)(oU, XU) || (oU = XU, UU.setLookPrefs(XU))
+         (0, mH.ne)(zH, BH) || (zH = BH, HH.setLookPrefs(BH))
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5680` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5700) · [Before (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5680)

```diff
-       const EU = [(0, AU.n)("appManagerUpdated|soundVolume", XU), (0, AU.n)("appManagerUpdated|soundOnFromAd", XU), (0, AU.n)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const EH = [(0, hH.m)("appManagerUpdated|soundVolume", BH), (0, hH.m)("appManagerUpdated|soundOnFromAd", BH), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5682` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5702) · [Before (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5682)

```diff
-       })), (0, AU.n)(NQ.c, FU), (0, AU.n)("appManagerUpdated|enabledDebugFeatures", yU), (0, AU.n)("appManagerUpdated|areNametagsHidden", FU), (0, AU.n)("appManagerUpdated|showDistantNametags", FU)];
+       })), (0, hH.m)(GS.d, tH), (0, hH.m)("appManagerUpdated|enabledDebugFeatures", rH), (0, hH.m)("appManagerUpdated|areNametagsHidden", tH), (0, hH.m)("appManagerUpdated|showDistantNametags", tH)];
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5687-L5692` → after: `L5707-L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5707-L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5707-L5712) · [Before (L5687-L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5687-L5692)

```diff
-     var tQ = zU(41990),
-       gQ = zU(41999);
-     var kQ = (0, gQ.e)("lend"),
-       GQ = (0, gQ.e)("starting"),
-       BQ = (0, gQ.e)("generation"),
-       ZQ = (0, gQ.e)("end");
+     var WS = LH(42216),
+       MS = LH(42222);
+     var xS = (0, MS.c)("lend"),
+       vS = (0, MS.c)("starting"),
+       PS = (0, MS.c)("generation"),
+       TS = (0, MS.c)("end");
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5709` → after: `L5729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5729) · [Before (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5709)

```diff
-         return null !== (0, tQ.d)(this, kQ)[kQ] || (0, tQ.d)(this, GQ)[GQ]
+         return null !== (0, WS.e)(this, xS)[xS] || (0, WS.e)(this, vS)[vS]
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5713-L5714` → after: `L5733-L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5733-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5733-L5734) · [Before (L5713-L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5713-L5714)

```diff
-         const XU = (0, tQ.d)(this, BQ)[BQ];
-         (0, tQ.d)(this, GQ)[GQ] = !0;
+         const BH = (0, WS.e)(this, PS)[PS];
+         (0, WS.e)(this, vS)[vS] = !0;
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5718` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5738) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5718)

```diff
-           (0, tQ.d)(this, GQ)[GQ] = !1
+           (0, WS.e)(this, vS)[vS] = !1
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5720` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5740) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5720)

```diff
-         if (XU !== (0, tQ.d)(this, BQ)[BQ]) return "refused";
+         if (BH !== (0, WS.e)(this, PS)[PS]) return "refused";
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5729-L5730` → after: `L5749-L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5749-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5749-L5750) · [Before (L5729-L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5729-L5730)

```diff
-           0 !== FU ? (new Uint8Array(XU.buffer, FU, AU.length).set(AU), UU.LQU(zU.headLen, cU, yU) && (QU = "sealing")) : QU = "tooLarge"
-         }), !0), "sealing" !== QU ? (zU.end(), QU) : ((0, tQ.d)(this, kQ)[kQ] = zU, "sealing")
+           0 !== tH ? (new Uint8Array(BH.buffer, tH, hH.length).set(hH), HH.FSH(LH.headLen, AH, rH) && (SH = "sealing")) : SH = "tooLarge"
+         }), !0), "sealing" !== SH ? (LH.end(), SH) : ((0, WS.e)(this, xS)[xS] = LH, "sealing")
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5733` → after: `L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5753) · [Before (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5733)

```diff
-         const UU = (0, tQ.d)(this, kQ)[kQ];
+         const HH = (0, WS.e)(this, xS)[xS];
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5738-L5740` → after: `L5758-L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5758-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5758-L5760) · [Before (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5738-L5740)

```diff
-             XU = UU.eQU(), XU > 0 && (zU = UU.CQU())
-           }))) return (0, tQ.d)(this, ZQ)[ZQ](UU, "stopped");
-         if (XU < 0) return (0, tQ.d)(this, ZQ)[ZQ](UU, "read");
+             BH = HH.DSH(), BH > 0 && (LH = HH.wSH())
+           }))) return (0, WS.e)(this, TS)[TS](HH, "stopped");
+         if (BH < 0) return (0, WS.e)(this, TS)[TS](HH, "read");
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5750` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5770) · [Before (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5750)

```diff
-           UU.wQU()
+           HH.ZSH()
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5752` → after: `L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5772) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5752)

```diff
-         const AU = (0, tQ.d)(this, ZQ)[ZQ](UU, QU ? "givenUp" : "stopped");
+         const hH = (0, WS.e)(this, TS)[TS](HH, SH ? "givenUp" : "stopped");
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5756-L5757` → after: `L5776-L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5776-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5776-L5777) · [Before (L5756-L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5756-L5757)

```diff
-         (0, tQ.d)(this, BQ)[BQ]++;
-         const UU = (0, tQ.d)(this, kQ)[kQ];
+         (0, WS.e)(this, PS)[PS]++;
+         const HH = (0, WS.e)(this, xS)[xS];
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5759-L5760` → after: `L5779-L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5779-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5779-L5780) · [Before (L5759-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5759-L5760)

```diff
-           UU.wQU()
-         })), (0, tQ.d)(this, ZQ)[ZQ](UU, "stopped"))
+           HH.ZSH()
+         })), (0, WS.e)(this, TS)[TS](HH, "stopped"))
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5765` → after: `L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5785) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5765)

```diff
-       return (0, tQ.d)(this, kQ)[kQ] = null, UU.end(), XU
+       return (0, WS.e)(this, xS)[xS] = null, HH.end(), BH
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5786` → after: `L5806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5806) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5786)

```diff
-         if (UU.busy() || !dQ(UU.memoryBytes(), UU.clipSeconds())) return "cY";
+         if (HH.busy() || !bS(HH.memoryBytes(), HH.clipSeconds())) return "hX";
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5794` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5814) · [Before (L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5794)

```diff
-         if (!zU) return UU.trapped() ? "trapped" : UU.kp() ? "kp" : "failed";
+         if (!LH) return HH.trapped() ? "trapped" : HH.Mu() ? "Mu" : "failed";
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5802-L5842` → after: `L5822-L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5822-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5822-L5862) · [Before (L5802-L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5802-L5842)

```diff
-       qQ = new Set([NU.Xc.ToggleRecording, NU.Xc.SaveClip]);
-     var OQ = (0, gQ.e)("bindings"),
-       SQ = (0, gQ.e)("module"),
-       rQ = (0, gQ.e)("memory"),
-       uQ = (0, gQ.e)("trapped"),
-       fQ = (0, gQ.e)("kp"),
-       iQ = (0, gQ.e)("recycleDue"),
-       HQ = (0, gQ.e)("loading"),
-       MQ = (0, gQ.e)("generation"),
-       vQ = (0, gQ.e)("viewDrawn"),
-       VQ = (0, gQ.e)("clip"),
-       sQ = (0, gQ.e)("session"),
-       nQ = (0, gQ.e)("control"),
-       mQ = (0, gQ.e)("deferred"),
-       lQ = (0, gQ.e)("coreU8"),
-       xQ = (0, gQ.e)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       fS = new Set([GH.Sc.ToggleRecording, GH.Sc.SaveClip]);
+     var lS = (0, MS.c)("bindings"),
+       KS = (0, MS.c)("module"),
+       cS = (0, MS.c)("memory"),
+       eS = (0, MS.c)("trapped"),
+       qS = (0, MS.c)("Mu"),
+       gS = (0, MS.c)("recycleDue"),
+       NS = (0, MS.c)("loading"),
+       RS = (0, MS.c)("generation"),
+       jS = (0, MS.c)("viewDrawn"),
+       nS = (0, MS.c)("clip"),
+       FS = (0, MS.c)("session"),
+       DS = (0, MS.c)("control"),
+       wS = (0, MS.c)("deferred"),
+       ZS = (0, MS.c)("coreU8"),
+       dS = (0, MS.c)("coreU32"),
+ ... (25 more added lines; see GitHub link above)
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5942-L5943` → after: `L5962-L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5962-L5963) · [Before (L5942-L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5942-L5943)

```diff
-         }), (0, tQ.d)(this, jQ)[jQ] = new RQ({
-           ensureLoaded: () => (0, tQ.d)(this, XA)[XA](),
+         }), (0, WS.e)(this, sS)[sS] = new US({
+           ensureLoaded: () => (0, WS.e)(this, Bh)[Bh](),
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5945-L5946` → after: `L5965-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5965-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5965-L5966) · [Before (L5945-L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5945-L5946)

```diff
-             XU && (0, tQ.d)(this, bQ)[bQ]("an edited save's stage");
-             const zU = (0, tQ.d)(this, tA)[tA](((XU, zU) => (UU(XU, zU), !0)));
+             BH && (0, WS.e)(this, iS)[iS]("an edited save's stage");
+             const LH = (0, WS.e)(this, Wh)[Wh](((BH, LH) => (HH(BH, LH), !0)));
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5954` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5974) · [Before (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5954)

```diff
-         return null !== (0, tQ.d)(this, SQ)[SQ]
+         return null !== (0, WS.e)(this, KS)[KS]
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5957` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5977) · [Before (L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5957)

```diff
-         return (0, tQ.d)(this, uQ)[uQ]
+         return (0, WS.e)(this, eS)[eS]
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5960` → after: `L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5980) · [Before (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5960)

```diff
-         return null !== (0, tQ.d)(this, HQ)[HQ]
+         return null !== (0, WS.e)(this, NS)[NS]
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5963` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5983) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5963)

```diff
-         (0, tQ.d)(this, fQ)[fQ] || (0, tQ.d)(this, uQ)[uQ] || (0, tQ.d)(this, SQ)[SQ] || (0, tQ.d)(this, HQ)[HQ] || this.deps.prefetch()
+         (0, WS.e)(this, qS)[qS] || (0, WS.e)(this, eS)[eS] || (0, WS.e)(this, KS)[KS] || (0, WS.e)(this, NS)[NS] || this.deps.prefetch()
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5966` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5986) · [Before (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5966)

```diff
-         (0, tQ.d)(this, vQ)[vQ] = !0, (0, tQ.d)(this, TQ)[TQ]() && (0, tQ.d)(this, UA)[UA]()
+         (0, WS.e)(this, jS)[jS] = !0, (0, WS.e)(this, pS)[pS]() && (0, WS.e)(this, Hh)[Hh]()
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5969` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5989) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5969)

```diff
-         (0, tQ.d)(this, VQ)[VQ] = {
+         (0, WS.e)(this, nS)[nS] = {
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5972` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5992) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5972)

```diff
-         }, (0, tQ.d)(this, DA)[DA](NU.Rc.Prefs, WQ(UU, XU)), UU && (0, tQ.d)(this, vQ)[vQ] && (0, tQ.d)(this, UA)[UA]()
+         }, (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS(HH, BH)), HH && (0, WS.e)(this, jS)[jS] && (0, WS.e)(this, Hh)[Hh]()
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5979` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5999) · [Before (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5979)

```diff
-           if (!(0, tQ.d)(this, uQ)[uQ]) return (0, tQ.d)(this, SQ)[SQ] ? void(0, tQ.d)(this, DA)[DA](NU.Rc.Control, XU) : ((0, tQ.d)(this, nQ)[nQ] = XU, void(0, tQ.d)(this, UA)[UA]());
+           if (!(0, WS.e)(this, eS)[eS]) return (0, WS.e)(this, KS)[KS] ? void(0, WS.e)(this, Ch)[Ch](GH.Mc.Control, BH) : ((0, WS.e)(this, DS)[DS] = BH, void(0, WS.e)(this, Hh)[Hh]());
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5981` → after: `L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6001) · [Before (L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5981)

```diff
-         } else(0, tQ.d)(this, fQ)[fQ] || this.deps.coreCommand(NU.Rc.Control, XU)
+         } else(0, WS.e)(this, qS)[qS] || this.deps.coreCommand(GH.Mc.Control, BH)
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5984` → after: `L6004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6004) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5984)

```diff
-         (0, tQ.d)(this, sQ)[sQ] = UU, (0, tQ.d)(this, KQ)[KQ](UU)
+         (0, WS.e)(this, FS)[FS] = HH, (0, WS.e)(this, JS)[JS](HH)
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5987` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6007) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5987)

```diff
-         (0, tQ.d)(this, DA)[DA](NU.Rc.FilePartDone, function(UU, XU) {
+         (0, WS.e)(this, Ch)[Ch](GH.Mc.FilePartDone, function(HH, BH) {
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5994` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6014) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5994)

```diff
-         return (0, tQ.d)(this, DA)[DA](NU.Rc.FileDone, function(UU) {
+         return (0, WS.e)(this, Ch)[Ch](GH.Mc.FileDone, function(HH) {
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5997` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6017) · [Before (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5997)

```diff
-         }(UU)), (0, tQ.d)(this, cA)[cA]()
+         }(HH)), (0, WS.e)(this, Ah)[Ah]()
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6000` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6020) · [Before (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6000)

```diff
-         return (0, tQ.d)(this, bQ)[bQ]("saveEdited"), (0, tQ.d)(this, jQ)[jQ].start(UU)
+         return (0, WS.e)(this, iS)[iS]("saveEdited"), (0, WS.e)(this, sS)[sS].start(HH)
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6003-L6009` → after: `L6023-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6023-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6023-L6029) · [Before (L6003-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6003-L6009)

```diff
-         if (!(0, tQ.d)(this, SQ)[SQ]) return;
-         "read" === (0, tQ.d)(this, jQ)[jQ].beforeRecorderStep() && (0, tQ.d)(this, cA)[cA]();
-         const UU = (0, tQ.d)(this, iQ)[iQ];
-         (0, tQ.d)(this, iQ)[iQ] = null;
-         const XU = (0, tQ.d)(this, SQ)[SQ],
-           zU = (0, tQ.d)(this, rQ)[rQ];
-         if (!XU || !zU) return void(null === UU || void 0 === UU || UU.resolve((0, tQ.d)(this, uQ)[uQ] ? "trapped" : "cY"));
+         if (!(0, WS.e)(this, KS)[KS]) return;
+         "read" === (0, WS.e)(this, sS)[sS].beforeRecorderStep() && (0, WS.e)(this, Ah)[Ah]();
+         const HH = (0, WS.e)(this, gS)[gS];
+         (0, WS.e)(this, gS)[gS] = null;
+         const BH = (0, WS.e)(this, KS)[KS],
+           LH = (0, WS.e)(this, cS)[cS];
+         if (!BH || !LH) return void(null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX"));
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6012` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6032) · [Before (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6012)

```diff
-         } = this.deps, yU = cU.SQU(2);
+         } = this.deps, rH = AH.sSH(2);
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6017-L6018` → after: `L6037-L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6037-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6037-L6038) · [Before (L6017-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6017-L6018)

```diff
-           const UU = (0, tQ.d)(this, IA)[IA]();
-           DU = null !== (YU = UU[yU >>> 2]) && void 0 !== YU ? YU : 0, EU = null !== (NU = UU[1 + (yU >>> 2)]) && void 0 !== NU ? NU : 0
+           const HH = (0, WS.e)(this, Yh)[Yh]();
+           CH = null !== (XH = HH[rH >>> 2]) && void 0 !== XH ? XH : 0, EH = null !== (GH = HH[1 + (rH >>> 2)]) && void 0 !== GH ? GH : 0
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6023` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6043) · [Before (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6023)

```diff
-             0 !== UU && (0, tQ.d)(this, pA)[pA](zU).set((0, tQ.d)(this, NA)[NA]().subarray(DU, DU + EU), UU)
+             0 !== HH && (0, WS.e)(this, uh)[uh](LH).set((0, WS.e)(this, Gh)[Gh]().subarray(CH, CH + EH), HH)
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6025` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6045) · [Before (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6025)

```diff
-           QU = XU.step(), AU = XU.rQU(), FU = XU.uQU(), oU = XU.fQU()
+           SH = BH.step(), hH = BH.JSH(), tH = BH.iSH(), zH = BH.pSH()
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6027` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6047) · [Before (L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6027)

```diff
-           if (!(0, tQ.d)(this, kA)[kA](IU)) throw null === UU || void 0 === UU || UU.resolve("cY"), IU;
+           if (!(0, WS.e)(this, xh)[xh](YH)) throw null === HH || void 0 === HH || HH.resolve("hX"), YH;
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6031-L6032` → after: `L6051-L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6051-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6051-L6052) · [Before (L6031-L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6031-L6032)

```diff
-           const UU = cU.iQU(2, QU);
-           0 !== UU && (0, tQ.d)(this, NA)[NA]().set((0, tQ.d)(this, pA)[pA](zU).subarray(AU, AU + QU), UU)
+           const HH = AH.ySH(2, SH);
+           0 !== HH && (0, WS.e)(this, Gh)[Gh]().set((0, WS.e)(this, uh)[uh](LH).subarray(hH, hH + SH), HH)
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6035` → after: `L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6055) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6035)

```diff
-           (0, tQ.d)(this, mQ)[mQ] = [];
+           (0, WS.e)(this, wS)[wS] = [];
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6039` → after: `L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6059) · [Before (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6039)

```diff
-             throw null === UU || void 0 === UU || UU.resolve("cY"), IU
+             throw null === HH || void 0 === HH || HH.resolve("hX"), YH
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6041-L6043` → after: `L6061-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6061-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6061-L6063) · [Before (L6041-L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6041-L6043)

```diff
-             const UU = (0, tQ.d)(this, mQ)[mQ];
-             (0, tQ.d)(this, mQ)[mQ] = null;
-             for (const [XU, zU] of UU)(0, tQ.d)(this, DA)[DA](XU, zU)
+             const HH = (0, WS.e)(this, wS)[wS];
+             (0, WS.e)(this, wS)[wS] = null;
+             for (const [BH, LH] of HH)(0, WS.e)(this, Ch)[Ch](BH, LH)
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6046-L6047` → after: `L6066-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6066-L6067) · [Before (L6046-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6046-L6047)

```diff
-         if (!(0, tQ.d)(this, TQ)[TQ]() && !(0, tQ.d)(this, hQ)[hQ]()) return (0, tQ.d)(this, EA)[EA](), void(null === UU || void 0 === UU || UU.resolve("cY"));
-         null === UU || void 0 === UU || UU.resolve((0, tQ.d)(this, oA)[oA]())
+         if (!(0, WS.e)(this, pS)[pS]() && !(0, WS.e)(this, yS)[yS]()) return (0, WS.e)(this, Eh)[Eh](), void(null === HH || void 0 === HH || HH.resolve("hX"));
+         null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, zh)[zh]())
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6050` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6070) · [Before (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6050)

```diff
-         (0, tQ.d)(this, fQ)[fQ] = !0, (0, tQ.d)(this, EA)[EA]()
+         (0, WS.e)(this, qS)[qS] = !0, (0, WS.e)(this, Eh)[Eh]()
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6055` → after: `L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6075) · [Before (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6055)

```diff
-       (0, tQ.d)(this, DA)[DA](NU.Rc.Session, function(UU) {
+       (0, WS.e)(this, Ch)[Ch](GH.Mc.Session, function(HH) {
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6077` → after: `L6097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6097) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6077)

```diff
-       return null !== (UU = null === (XU = (0, tQ.d)(this, VQ)[VQ]) || void 0 === XU ? void 0 : XU.on) && void 0 !== UU && UU
+       return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.on) && void 0 !== HH && HH
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6081` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6101) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6081)

```diff
-       const UU = (0, tQ.d)(this, SQ)[SQ];
+       const HH = (0, WS.e)(this, KS)[KS];
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6086` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6106) · [Before (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6086)

```diff
-         if (!(0, tQ.d)(this, kA)[kA](zU)) throw zU
+         if (!(0, WS.e)(this, xh)[xh](LH)) throw LH
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6088` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6108) · [Before (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6088)

```diff
-       return XU || (0, tQ.d)(this, jQ)[jQ].active
+       return BH || (0, WS.e)(this, sS)[sS].active
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6091` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6111) · [Before (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6091)

```diff
-       !(0, tQ.d)(this, fQ)[fQ] && this.deps.allowed() ? await (0, tQ.d)(this, XA)[XA]() : (0, tQ.d)(this, nQ)[nQ] = null
+       !(0, WS.e)(this, qS)[qS] && this.deps.allowed() ? await (0, WS.e)(this, Bh)[Bh]() : (0, WS.e)(this, DS)[DS] = null
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6095` → after: `L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6115) · [Before (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6095)

```diff
-       return (0, tQ.d)(this, uQ)[uQ] || (0, tQ.d)(this, fQ)[fQ] ? Promise.resolve(!1) : (0, tQ.d)(this, SQ)[SQ] ? Promise.resolve(!0) : ((0, tQ.d)(this, HQ)[HQ] ??= (0, tQ.d)(this, zA)[zA](), (0, tQ.d)(this, HQ)[HQ])
+       return (0, WS.e)(this, eS)[eS] || (0, WS.e)(this, qS)[qS] ? Promise.resolve(!1) : (0, WS.e)(this, KS)[KS] ? Promise.resolve(!0) : ((0, WS.e)(this, NS)[NS] ??= (0, WS.e)(this, Lh)[Lh](), (0, WS.e)(this, NS)[NS])
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6100` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6120) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6100)

```diff
-         return UU = await (0, tQ.d)(this, QA)[QA](), UU
+         return HH = await (0, WS.e)(this, Sh)[Sh](), HH
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6102` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6122) · [Before (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6102)

```diff
-         UU || ((0, tQ.d)(this, nQ)[nQ] = null), (0, tQ.d)(this, HQ)[HQ] = null
+         HH || ((0, WS.e)(this, DS)[DS] = null), (0, WS.e)(this, NS)[NS] = null
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6107-L6108` → after: `L6127-L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6127-L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6127-L6128) · [Before (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6107-L6108)

```diff
-       if (!(0, tQ.d)(this, SQ)[SQ]) return Promise.resolve((0, tQ.d)(this, uQ)[uQ] ? "trapped" : "cY");
-       if (!(0, tQ.d)(this, iQ)[iQ]) {
+       if (!(0, WS.e)(this, KS)[KS]) return Promise.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX");
+       if (!(0, WS.e)(this, gS)[gS]) {
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6113` → after: `L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6133) · [Before (L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6113)

```diff
-         (0, tQ.d)(this, iQ)[iQ] = {
+         (0, WS.e)(this, gS)[gS] = {
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6118` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6138) · [Before (L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6118)

```diff
-       return (0, tQ.d)(this, iQ)[iQ].promise
+       return (0, WS.e)(this, gS)[gS].promise
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6122-L6123` → after: `L6142-L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6142-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6142-L6143) · [Before (L6122-L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6122-L6123)

```diff
-       const XU = (0, tQ.d)(this, iQ)[iQ];
-       (0, tQ.d)(this, iQ)[iQ] = null, null === XU || void 0 === XU || XU.resolve(UU)
+       const BH = (0, WS.e)(this, gS)[gS];
+       (0, WS.e)(this, gS)[gS] = null, null === BH || void 0 === BH || BH.resolve(HH)
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6126` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6146) · [Before (L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6126)

```diff
-       let UU = (0, tQ.d)(this, OQ)[OQ];
+       let HH = (0, WS.e)(this, lS)[lS];
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6128` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6148) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6128)

```diff
-         const XU = (0, tQ.d)(this, MQ)[MQ];
+         const BH = (0, WS.e)(this, RS)[RS];
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6132` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6152) · [Before (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6132)

```diff
-           return XU === (0, tQ.d)(this, MQ)[MQ] && await (0, tQ.d)(this, aA)[aA](zU), !1
+           return BH === (0, WS.e)(this, RS)[RS] && await (0, WS.e)(this, Qh)[Qh](LH), !1
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6134` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6154) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6134)

```diff
-         if (XU !== (0, tQ.d)(this, MQ)[MQ]) return this.deps.unload(), !1;
+         if (BH !== (0, WS.e)(this, RS)[RS]) return this.deps.unload(), !1;
```
