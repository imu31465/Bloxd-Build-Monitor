# Changed — Bundle Modifications Report (Part 134 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `134 / 140` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 133](part-133.md) · [Part 135 →](part-135.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (995 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 755. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6856-L6857` → after: `L6596-L6597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6596-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6596-L6597) · [Before (L6856-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6856-L6857)

```diff
-                   const Fk = (0, GF.i)(kk);
-                   null !== Fk && (0, RI.q)(fF.rb.Resize, 0, Fk.cssWidth, Fk.cssHeight, (0, RI.h)(Fk.renderScale))
+                   const HS = (0, EH.o)(SS);
+                   null !== HS && (0, yg.y)(pH.Gb.Resize, 0, HS.cssWidth, HS.cssHeight, (0, yg.j)(HS.renderScale))
```

#### 756. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6865` → after: `L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6605) · [Before (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6865)

```diff
-             console.warn(`${vi} the developer tools didn't load: no captures this session`, kk)
+             console.warn(`${OX} the developer tools didn't load: no captures this session`, SS)
```

#### 757. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6867` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6607) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6867)

```diff
-           const Fk = "webgpu" === Zk && null !== (IF = null === Lk || void 0 === Lk || null === (XF = Lk.adapter) || void 0 === XF ? void 0 : XF.vendor) && void 0 !== IF ? IF : null;
+           const HS = "webgpu" === kS && null !== (HH = null === IS || void 0 === IS || null === (gH = IS.adapter) || void 0 === gH ? void 0 : gH.vendor) && void 0 !== HH ? HH : null;
```

#### 758. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6871` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6611) · [Before (L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6871)

```diff
-             fallbackReason: null !== (TF = null === Lk || void 0 === Lk ? void 0 : Lk.reason) && void 0 !== TF ? TF : null,
+             fallbackReason: null !== (tH = null === IS || void 0 === IS ? void 0 : IS.reason) && void 0 !== tH ? tH : null,
```

#### 759. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6877` → after: `L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6617) · [Before (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6877)

```diff
-             (0, XX.s)(), console.error(`${vi} the quality steps didn't start`, Tk)
+             (0, gt.r)(), console.error(`${OX} the quality steps didn't start`, bS)
```

#### 760. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6884-L6886` → after: `L6624-L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6624-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6624-L6626) · [Before (L6884-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6884-L6886)

```diff
-         lF && console.warn(`${vi} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const jF = (0, dk.g)(Lk, (0, vF.l)());
-         if ((0, cT.o)("webgpuloss")) {
+         xH && console.warn(`${OX} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const kH = (0, BS.e)(IS, (0, OH.m)());
+         if ((0, Ub.q)("webgpuloss")) {
```

#### 761. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6890-L6891` → after: `L6630-L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6630-L6631) · [Before (L6890-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6890-L6891)

```diff
-             reason: null !== (xF = null === Lk || void 0 === Lk ? void 0 : Lk.reason) && void 0 !== xF ? xF : null,
-             source: null !== (PF = null === Lk || void 0 === Lk ? void 0 : Lk.source) && void 0 !== PF ? PF : null,
+             reason: null !== (CH = null === IS || void 0 === IS ? void 0 : IS.reason) && void 0 !== CH ? CH : null,
+             source: null !== (nH = null === IS || void 0 === IS ? void 0 : IS.source) && void 0 !== nH ? nH : null,
```

#### 762. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6900-L6901` → after: `L6640-L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6640-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6640-L6641) · [Before (L6900-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6900-L6901)

```diff
-         if (Cy = (0, dk.i)(sF ? Ek : null, sF && null !== (lk = null === (qk = Xy) || void 0 === qk ? void 0 : qk.pagePreviews().ke) && void 0 !== lk ? lk : null, jF, eq), la) return null;
-         if (Uk.reserveAtJoin((0, AX.h)(null !== Gk && void 0 !== Gk ? Gk : xI.h)), Ek.isStopped) return null;
+         if (yx = (0, BS.h)(DH ? dS : null, DH && null !== (NS = null === (uS = Sx) || void 0 === uS ? void 0 : uS.pagePreviews().bK) && void 0 !== NS ? NS : null, kH, fu), bq) return null;
+         if (VS.reserveAtJoin((0, Rt.l)(null !== ES && void 0 !== ES ? ES : Cg.j)), dS.isStopped) return null;
```

#### 763. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6911` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6651) · [Before (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6911)

```diff
-             if (Ek.writePendingInput(), (0, sk.g)(kk, nq), sq(!1, kk), null !== fl) try {
+             if (dS.writePendingInput(), (0, wS.f)(SS, du), Pu(!1, SS), null !== zN) try {
```

#### 764. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6917` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6657) · [Before (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6917)

```diff
-           } else Oq(Ek, Xa, "budget") && ((0, OF.f)(Ek.lastFrameKind) && Uq() && (0, sk.g)(kk, nq), sq(Xa && ka, kk), Fa.frame(Ek.lastFrameKind, Xa && Uq(), kk), (0, OF.d)(Ek.lastFrameKind) && vF.F.drew(), Yq(Ek), Uk.afterFrame(), requestAnimationFrame(zF))
+           } else Ou(dS, Sq, "budget") && ((0, cH.h)(dS.lastFrameKind) && Au() && (0, wS.f)(SS, du), Pu(Sq && mN, SS), eN.frame(dS.lastFrameKind, Sq && Au(), SS), (0, cH.c)(dS.lastFrameKind) && OH.F.drew(), su(dS), VS.afterFrame(), requestAnimationFrame(hH))
```

#### 765. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6921` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6661) · [Before (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6921)

```diff
-           if (kk.has("inputLog") && (0, ZX.g)((kk => {
+           if (SS.has("inputLog") && (0, ft.h)((SS => {
```

#### 766. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6927` → after: `L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6667) · [Before (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6927)

```diff
-               console.info(`${eX} input ${Fk} ${Ik?"down":"up"} press ${Xk} at ${performance.now().toFixed(1)}`)
+               console.info(`${Kt} input ${HS} ${gS?"down":"up"} press ${tS} at ${performance.now().toFixed(1)}`)
```

#### 767. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6950` → after: `L6690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6690) · [Before (L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6950)

```diff
-         (Xk(Ly), ey(null !== kk), null !== kk && (vT = performance.now()), Zy(kk), null === kk) ? null === (Fk = Xy) || void 0 === Fk || Fk.pagePreviews().endSession(null === (0, aF.n)()): Wy("booted")
+         (tS(Nx), fx(null !== SS), null !== SS && (db = performance.now()), ux(SS), null === SS) ? null === (HS = Sx) || void 0 === HS || HS.pagePreviews().endSession(null === (0, NH.t)()): Wx("booted")
```

#### 768. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6968` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6708) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6968)

```diff
-         console.warn(`${vi} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, kk)
+         console.warn(`${OX} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, SS)
```

#### 769. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6973` → after: `L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6713) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6973)

```diff
-         this.deps = kk, this.latest = 0, this.eq = null
+         this.deps = SS, this.latest = 0, this.Ku = null
```

#### 770. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6983` → after: `L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6723) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6983)

```diff
-         if ((null === (Xk = this.eq) || void 0 === Xk ? void 0 : Xk.module) === kk && (0, DF.ce)(this.eq.files, Fk)) return !1;
+         if ((null === (tS = this.Ku) || void 0 === tS ? void 0 : tS.module) === SS && (0, mH.Wd)(this.Ku.files, HS)) return !1;
```

#### 771. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6993` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6733) · [Before (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6993)

```diff
-           return this.eq = {
+           return this.Ku = {
```

#### 772. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6999` → after: `L6739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6739) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6999)

```diff
-                 ("error" === kk[Fk] ? console.error : console.warn)(`Animation for the texture pack: ${kk[Fk+1]}: ${kk[Fk+2]}`)
+                 ("error" === SS[HS] ? console.error : console.warn)(`Animation for the texture pack: ${SS[HS+1]}: ${SS[HS+2]}`)
```

#### 773. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7006-L7007` → after: `L6746-L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6746-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6746-L6747) · [Before (L7006-L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7006-L7007)

```diff
-           const Xk = (null !== (yk = this.deps.retryAfterMs) && void 0 !== yk ? yk : kI)[Ik];
-           return void 0 === Xk || lk instanceof FI || (0, MF.f)(kk) || setTimeout((() => {
+           const tS = (null !== (xS = this.deps.retryAfterMs) && void 0 !== xS ? xS : rH)[gS];
+           return void 0 === tS || NS instanceof Sg || (0, eH.i)(SS) || setTimeout((() => {
```

#### 774. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7014` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6754) · [Before (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7014)

```diff
-           return kk.rIk(Fk)
+           return SS.pgS(HS)
```

#### 775. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7016` → after: `L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6756) · [Before (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7016)

```diff
-           throw (0, MF.g)(kk, Ik), Ik
+           throw (0, eH.k)(SS, gS), gS
```

#### 776. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7023-L7024` → after: `L6763-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6763-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6763-L6764) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7023-L7024)

```diff
-         const Fk = this.eq;
-         if (this.eq = null, (null === Fk || void 0 === Fk ? void 0 : Fk.module) === kk && !(0, MF.f)(kk)) try {
+         const HS = this.Ku;
+         if (this.Ku = null, (null === HS || void 0 === HS ? void 0 : HS.module) === SS && !(0, eH.i)(SS)) try {
```

#### 777. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7029` → after: `L6769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6769) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7029)

```diff
-       compiler: gF.d,
+       compiler: RH.b,
```

#### 778. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7045` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6785) · [Before (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7045)

```diff
-           } = await Ik.e(272).then((() => Ik(50967)));
+           } = await gS.e(272).then((() => gS(51007)));
```

#### 779. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7068` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6808) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7068)

```diff
-       const tk = (0, OI.P)("wasm", hq);
+       const fS = (0, cg.$)("wasm", Ru);
```

#### 780. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7076` → after: `L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6816) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7076)

```diff
-           kind: "iI"
+           kind: "Hg"
```

#### 781. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7081` → after: `L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6821) · [Before (L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7081)

```diff
-         if (jk = performance.now(), !ak()) mq(null !== (wk = null === (Hk = kk.target.session) || void 0 === Hk ? void 0 : Hk.gameNameWithVariation) && void 0 !== wk ? wk : null);
+         if (aS = performance.now(), !qS()) Fu(null !== (jS = null === (GS = SS.target.session) || void 0 === GS ? void 0 : GS.gameNameWithVariation) && void 0 !== jS ? jS : null);
```

#### 782. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7094` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6834) · [Before (L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7094)

```diff
-             if (VT.c.markGameEngineConstructed(), ET) return;
+             if (hb.b.markGameEngineConstructed(), cb) return;
```

#### 783. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7096-L7097` → after: `L6836-L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6836-L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6836-L6837) · [Before (L7096-L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7096-L7097)

```diff
-             const Xk = Math.max(kk, null !== (Fk = ST) && void 0 !== Fk ? Fk : kk);
-             (0, zT.i)("ready", Math.max(0, (null !== (Ik = oT) && void 0 !== Ik ? Ik : Xk) - Xk) / 1e3)
+             const tS = Math.max(SS, null !== (HS = Jb) && void 0 !== HS ? HS : SS);
+             (0, Zb.l)("ready", Math.max(0, (null !== (gS = Ob) && void 0 !== gS ? gS : tS) - tS) / 1e3)
```

#### 784. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7099` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6839) · [Before (L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7099)

```diff
-           if (null !== oT && null !== vT ? ((0, ek.r)("wasm_loaded", oT), (0, ek.r)("wasm_core_ready", vT)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), kk.target.session && (0, hT.c)(kk.target.session.gameNameWithVariation)) null ===  … [truncated]
+           if (null !== Ob && null !== db ? ((0, KS.n)("wasm_loaded", Ob), (0, KS.n)("wasm_core_ready", db)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), SS.target.session && (0, lb.e)(SS.target.session.gameNameWithVariation)) null ===  … [truncated]
```

#### 785. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7102` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6842) · [Before (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7102)

```diff
-           kind: "iI"
+           kind: "Hg"
```

#### 786. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7117` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6857) · [Before (L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7117)

```diff
-             Zk = null !== (Fk = null === (Ik = kk.session) || void 0 === Ik ? void 0 : Ik.gameNameWithVariation) && void 0 !== Fk ? Fk : null;
+             kS = null !== (HS = null === (gS = SS.session) || void 0 === gS ? void 0 : gS.gameNameWithVariation) && void 0 !== HS ? HS : null;
```

#### 787. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7123` → after: `L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6863) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7123)

```diff
-             (0, sF.h)(tk, (0, sF.e)(Tk))
+             (0, DH.f)(fS, (0, DH.c)(bS))
```

#### 788. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7134` → after: `L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6874) · [Before (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7134)

```diff
-               if ((0, cT.o)("webgpuloss")) {
+               if ((0, Ub.q)("webgpuloss")) {
```

#### 789. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7139` → after: `L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6879) · [Before (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7139)

```diff
-               if (null !== Fk) throw new dk.d(Fk)
+               if (null !== HS) throw new BS.b(HS)
```

#### 790. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7143` → after: `L6883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6883) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7143)

```diff
-             }] = await Ka(Promise.all([(0, Vk.n)(Fk), Pa(kk), null === lk || void 0 === lk ? void 0 : lk(), qa()]), tk.signal), Xk = kk.session, Tk = Xk ? {
+             }] = await Cq(Promise.all([(0, hS.i)(HS), Gq(SS), null === NS || void 0 === NS ? void 0 : NS(), xq()]), fS.signal), tS = SS.session, bS = tS ? {
```

#### 791. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7159-L7160` → after: `L6899-L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6899-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6899-L6900) · [Before (L7159-L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7159-L7160)

```diff
-                 if (!(kk instanceof bk.b)) return kk;
-                 if ("roomError" === kk.stage && null !== vl) return xa(new bk.b(kk.message, kk.stage, kk.code, vl), kk);
+                 if (!(SS instanceof AS.d)) return SS;
+                 if ("roomError" === SS.stage && null !== ZN) return jq(new AS.d(SS.message, SS.stage, SS.code, ZN), SS);
```

#### 792. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7162` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6902) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7162)

```diff
-                 return void 0 === Fk ? kk : xa(new bk.b(kk.message, kk.stage, Fk.code, null, kk.socketOpened), kk)
+                 return void 0 === HS ? SS : jq(new AS.d(SS.message, SS.stage, HS.code, null, SS.socketOpened), SS)
```

#### 793. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7174-L7176` → after: `L6914-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6914-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6914-L6916) · [Before (L7174-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7174-L7176)

```diff
-                 game: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.gameNameWithVariation) && void 0 !== Fk ? Fk : kk.roomName,
-                 lobby: String(null !== Tk && void 0 !== Tk ? Tk : null),
-                 postCookies: null !== (Ik = kk.postCookies) && void 0 !== Ik ? Ik : null
+                 game: null !== (HS = null === tS || void 0 === tS ? void 0 : tS.gameNameWithVariation) && void 0 !== HS ? HS : SS.roomName,
+                 lobby: String(null !== bS && void 0 !== bS ? bS : null),
+                 postCookies: null !== (gS = SS.postCookies) && void 0 !== gS ? gS : null
```

#### 794. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7184` → after: `L6924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6924) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7184)

```diff
-                 game: null !== (Hk = null === (Jk = kk.session) || void 0 === Jk ? void 0 : Jk.gameNameWithVariation) && void 0 !== Hk ? Hk : "",
+                 game: null !== (GS = null === (CS = SS.session) || void 0 === CS ? void 0 : CS.gameNameWithVariation) && void 0 !== GS ? GS : "",
```

#### 795. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7186` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6926) · [Before (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7186)

```diff
-                 rejoinedAt: ak ? Zk : null,
+                 rejoinedAt: qS ? kS : null,
```

#### 796. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7228` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6968) · [Before (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7228)

```diff
-                           console.warn(`${vi} the held seat of a game left while it reconnected couldn't be released`, Tk)
+                           console.warn(`${OX} the held seat of a game left while it reconnected couldn't be released`, bS)
```

#### 797. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7233` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6973) · [Before (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7233)

```diff
-                     sE: kk => {
+                     uE: SS => {
```

#### 798. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7249-L7250` → after: `L6989-L6990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6989-L6990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6989-L6990) · [Before (L7249-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7249-L7250)

```diff
-                         console.warn(`${vi} gave up reconnecting (${Ik.reason}, ${Ik.attempts} attempts)`, Ik.lastError), (0, VI.reportReconnectGaveUp)(Ik, Ly);
-                         const ik = null !== (Xk = null === (Tk = wl) || void 0 === Tk ? void 0 : Tk.rejoin) && void 0 !== Xk ? Xk : null;
+                         console.warn(`${OX} gave up reconnecting (${gS.reason}, ${gS.attempts} attempts)`, gS.lastError), (0, wg.reportReconnectGaveUp)(gS, Nx);
+                         const XS = null !== (tS = null === (bS = kN) || void 0 === bS ? void 0 : bS.rejoin) && void 0 !== tS ? tS : null;
```

#### 799. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7269-L7271` → after: `L7009-L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7009-L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7009-L7011) · [Before (L7269-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7269-L7271)

```diff
-               }(qk, kk.endpoint), performance.mark(bi), (0, ek.r)("wasm_joined", Zk), setTimeout((() => {
-                 ll === qk && (0, ek.i)()
-               }), 0), ea(), console.info(`${vi} joined ${kk.roomName} as ${qk.seat.sessionId} at ${Math.round(performance.now())} ms`);
+               }(uS, SS.endpoint), performance.mark(YX), (0, KS.n)("wasm_joined", kS), setTimeout((() => {
+                 bN === uS && (0, KS.h)()
+               }), 0), fq(), console.info(`${OX} joined ${SS.roomName} as ${uS.seat.sessionId} at ${Math.round(performance.now())} ms`);
```

#### 800. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7292` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7032) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7292)

```diff
-           kind: "iI"
+           kind: "Hg"
```

#### 801. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7298` → after: `L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7038) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7298)

```diff
-             console.warn(`${vi} the cached traffic code could not be dropped`, kk)
+             console.warn(`${OX} the cached traffic code could not be dropped`, SS)
```

#### 802. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7302` → after: `L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7042) · [Before (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7302)

```diff
-         if (Kk instanceof dk.d) return Ik(Kk, performance.now() - jk), {
+         if (QS instanceof BS.b) return gS(QS, performance.now() - aS), {
```

#### 803. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7307` → after: `L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7047) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7307)

```diff
-         if (Kk instanceof bk.b && Kk.code === Xk.d.wasmClientNotAllowed.code && Ia) return qq("this server refused the wasm client to this account", "refused"), {
+         if (QS instanceof AS.d && QS.code === tS.c.wasmClientNotAllowed.code && rN) return xu("this server refused the wasm client to this account", "refused"), {
```

#### 804. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7312` → after: `L7052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7052) · [Before (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7312)

```diff
-         const kk = Kk instanceof bk.b && Kk.code === Xk.d.outdatedVersion.code,
+         const SS = QS instanceof AS.d && QS.code === tS.c.outdatedVersion.code,
```

#### 805. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7341` → after: `L7081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7081) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7341)

```diff
-       return kk.session ? (0, Vk.u)(qy, kk.session.gameNameWithVariation) : Promise.resolve()
+       return SS.session ? (0, hS.m)(xx, SS.session.gameNameWithVariation) : Promise.resolve()
```

#### 806. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7347` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7087) · [Before (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7347)

```diff
-           Xk((0, sF.e)(Fk))
+           tS((0, DH.c)(HS))
```

#### 807. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7368` → after: `L7108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7108) · [Before (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7368)

```diff
-       }(), null === Jy || Jy.left) || (Jy.left = !0, null === (Xk = (0, Vk.k)()) || void 0 === Xk || Xk.socketLeft(), (0, Zk.s)({
+       }(), null === Kx || Kx.left) || (Kx.left = !0, null === (tS = (0, hS.h)()) || void 0 === tS || tS.socketLeft(), (0, kS.r)({
```

#### 808. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7371` → after: `L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7111) · [Before (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7371)

```diff
-       ql && (0, sF.h)(ql, new DOMException("the join was left", "AbortError")), oa(null !== kk), null === (Fk = Cy) || void 0 === Fk || Fk.leave();
+       xN && (0, DH.f)(xN, new DOMException("the join was left", "AbortError")), hq(null !== SS), null === (HS = yx) || void 0 === HS || HS.leave();
```

#### 809. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7373` → after: `L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7113) · [Before (L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7373)

```diff
-       null !== kk && iT.b.setGame(kk.game), Va(null, null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.controller) && void 0 !== Ik ? Ik : null), null === Tk || void 0 === Tk || Tk.leave(), Sa(0), (0, xF.i)()
+       null !== SS && Xb.b.setGame(SS.game), Qq(null, null !== (gS = null === SS || void 0 === SS ? void 0 : SS.controller) && void 0 !== gS ? gS : null), null === bS || void 0 === bS || bS.leave(), wq(0), (0, CH.d)()
```

#### 810. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7386` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7126) · [Before (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7386)

```diff
-       return null !== ri && !la && null !== Fk && !Fk.isStopped && (!!ri(bk.g, 0, (0, bk.v)(kk)) && (kl = !0, 0 === kk || ry || Oq(Fk, !1, "all"), !0))
+       return null !== TX && !bq && null !== HS && !HS.isStopped && (!!TX(AS.i, 0, (0, AS.r)(SS)) && (mx = !0, 0 === SS || Tx || Ou(HS, !1, "all"), !0))
```

#### 811. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7391-L7392` → after: `L7131-L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7131-L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7131-L7132) · [Before (L7391-L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7391-L7392)

```diff
-       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, OI.g)();
-       const Ik = null !== (kk = null === (Fk = wl) || void 0 === Fk ? void 0 : Fk.overflow) && void 0 !== kk ? kk : null;
+       arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, cg.h)();
+       const gS = null !== (SS = null === (HS = kN) || void 0 === HS ? void 0 : HS.overflow) && void 0 !== SS ? SS : null;
```

#### 812. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7401` → after: `L7141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7141) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7401)

```diff
-       console.warn(`${vi} the event buffer refused records in ${Fk} frames (categories ${kk})`), la || (null !== wl ? Oa(wl, kk, Fk) : null !== ql && function(kk, Fk, Ik) {
+       console.warn(`${OX} the event buffer refused records in ${HS} frames (categories ${SS})`), bq || (null !== kN ? Oq(kN, SS, HS) : null !== xN && function(SS, HS, gS) {
```

#### 813. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7404-L7405` → after: `L7144-L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7144-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7144-L7145) · [Before (L7404-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7404-L7405)

```diff
-           return null === kk ? "drop" : kk.activated ? "keep" : 0 !== (Fk & BF.x.NetSession) ? "fail" : "drop"
-         }((null === (Xk = sl) || void 0 === Xk ? void 0 : Xk.join) === kk ? sl : null, Fk);
+           return null === SS ? "drop" : SS.activated ? "keep" : 0 !== (HS & sH.v.NetSession) ? "fail" : "drop"
+         }((null === (tS = PN) || void 0 === tS ? void 0 : tS.join) === SS ? PN : null, HS);
```

#### 814. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7409` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7149) · [Before (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7409)

```diff
-         } : "fail" === Tk && (0, sF.h)(kk, new Error("the join's net session was lost to an event overflow"))
+         } : "fail" === bS && (0, DH.f)(SS, new Error("the join's net session was lost to an event overflow"))
```

#### 815. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7422` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7162) · [Before (L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7422)

```diff
-         if (0 === (kk & BF.x.NetSession)) return "none";
+         if (0 === (SS & sH.v.NetSession)) return "none";
```

#### 816. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7428` → after: `L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7168) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7428)

```diff
-         const Fk = "rejoin" === Tk && performance.now() - Vl >= uk.e;
+         const HS = "rejoin" === bS && performance.now() - QN >= YS.d;
```

#### 817. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7454` → after: `L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7194) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7454)

```diff
-       }, Ak.d.get("gameState"))
+       }, FS.b.get("gameState"))
```

#### 818. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7468` → after: `L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7208) · [Before (L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7468)

```diff
-         Xk = null !== (Fk = kk.joinOptions.lobbyName) && void 0 !== Fk ? Fk : null;
+         tS = null !== (HS = SS.joinOptions.lobbyName) && void 0 !== HS ? HS : null;
```

#### 819. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7475` → after: `L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7215) · [Before (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7475)

```diff
-       return Ik.e(272).then((() => Ik(50967))).then((kk => {
+       return gS.e(272).then((() => gS(51007))).then((SS => {
```

#### 820. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7481` → after: `L7221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7221) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7481)

```diff
-         console.warn(`${vi} the cached traffic code could not be dropped`, kk)
+         console.warn(`${OX} the cached traffic code could not be dropped`, SS)
```

#### 821. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7499-L7500` → after: `L7239-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7239-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7239-L7240) · [Before (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7499-L7500)

```diff
-       const Lk = (0, uk.l)(Fk, (0, nX.g)(kk));
-       if (console.info(`${vi} the game's connection closed with code ${Fk} (${null!==(ik=Lk.name)&&void 0!==ik?ik:"unrecognised"})`), Fk === Xk.d.gameOrPluginKick.code || yk || (0, VI.reportDisconnect)(Lk, Ly, {
+       const IS = (0, YS.k)(HS, (0, Et.g)(SS));
+       if (console.info(`${OX} the game's connection closed with code ${HS} (${null!==(XS=IS.name)&&void 0!==XS?XS:"unrecognised"})`), HS === tS.c.gameOrPluginKick.code || xS || (0, wg.reportDisconnect)(IS, Nx, {
```

#### 822. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7506` → after: `L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7246) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7506)

```diff
-           Ik = new Error(`the game's connection closed with code ${Fk}`),
+           gS = new Error(`the game's connection closed with code ${HS}`),
```

#### 823. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7518-L7519` → after: `L7258-L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7258-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7258-L7259) · [Before (L7518-L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7518-L7519)

```diff
-       const tk = Lk.canReconnect ? lk : null,
-         Zk = null !== tk && Lk.automaticallyReconnect && performance.now() - Vl >= uk.e;
+       const fS = IS.canReconnect ? NS : null,
+         kS = null !== fS && IS.automaticallyReconnect && performance.now() - QN >= YS.d;
```

#### 824. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7538` → after: `L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7278) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7538)

```diff
-         const kk = setTimeout(yk, uk.b);
+         const SS = setTimeout(xS, YS.c);
```

#### 825. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7557` → after: `L7297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7297) · [Before (L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7557)

```diff
-           console.error(`${vi} an unwanted-leave listener threw`, ak)
+           console.error(`${OX} an unwanted-leave listener threw`, qS)
```

#### 826. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7559` → after: `L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7299) · [Before (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7559)

```diff
-           Fk && (null !== yk ? yk() : kk.requiresRefresh && (0, Yk.i)())
+           HS && (null !== xS ? xS() : SS.requiresRefresh && (0, MS.k)())
```

#### 827. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7593` → after: `L7333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7333) · [Before (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7593)

```diff
-           aux: fF.Zb.AdEnd,
+           aux: pH.pc.AdEnd,
```

#### 828. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7622` → after: `L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7362) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7622)

```diff
-       if (kk.readyState === WebSocket.CLOSING || kk.readyState === WebSocket.CLOSED) return console.warn(`${vi} a closing or closed socket can't be attached`), null;
+       if (SS.readyState === WebSocket.CLOSING || SS.readyState === WebSocket.CLOSED) return console.warn(`${OX} a closing or closed socket can't be attached`), null;
```

#### 829. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7624-L7626` → after: `L7364-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7364-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7364-L7366) · [Before (L7624-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7624-L7626)

```diff
-       if (!Tk || Tk.isStopped) return console.warn(`${vi} no core is running to attach a socket to`), kk.close(), null;
-       if (null === (0, Vk.k)()) return console.warn(`${vi} the game has not started to attach a socket to`), kk.close(), null;
-       if (By > fF.w) return console.warn(`${vi} this core has attached all the sockets it can; reload to play on`), kk.close(), null;
+       if (!bS || bS.isStopped) return console.warn(`${OX} no core is running to attach a socket to`), SS.close(), null;
+       if (null === (0, hS.h)()) return console.warn(`${OX} the game has not started to attach a socket to`), SS.close(), null;
+       if (Ux > pH.y) return console.warn(`${OX} this core has attached all the sockets it can; reload to play on`), SS.close(), null;
```

#### 830. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7630-L7631` → after: `L7370-L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7370-L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7370-L7371) · [Before (L7630-L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7630-L7631)

```diff
-       if (!yq(Tk, "open", ik, Xk ? fF.Xb.Resume : 0)) return kk.close(), null;
-       Xk || JF.e.reset(), sl = null === ql ? null : {
+       if (!tu(bS, "open", XS, tS ? pH.nc.Resume : 0)) return SS.close(), null;
+       tS || GH.d.reset(), PN = null === xN ? null : {
```

#### 831. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7636` → after: `L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7376) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7636)

```diff
-       const yk = new HI.b((() => {
+       const xS = new jg.d((() => {
```

#### 832. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7658` → after: `L7398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7398) · [Before (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7658)

```diff
-             yk.heard(), lk.token = null !== (Fk = (0, JI.d)(Ik)) && void 0 !== Fk ? Fk : lk.token,
+             xS.heard(), NS.token = null !== (HS = (0, Gg.e)(gS)) && void 0 !== HS ? HS : NS.token,
```

#### 833. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7661` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7401) · [Before (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7661)

```diff
-                   kk.rings.net.writeFrame(Fk, Ik) || kk.crash(TI.n, `a socket frame of ${Ik.byteLength} bytes did not fit the net-in ring`)
+                   SS.rings.net.writeFrame(HS, gS) || SS.crash(tg.p, `a socket frame of ${gS.byteLength} bytes did not fit the net-in ring`)
```

#### 834. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7670` → after: `L7410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7410) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7670)

```diff
-           Xk || (0, ek.r)("wasm_socket_open", performance.now());
+           tS || (0, KS.n)("wasm_socket_open", performance.now());
```

#### 835. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7680` → after: `L7420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7420) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7680)

```diff
-       return kk.addEventListener("message", ak), kk.addEventListener("open", qk), kk.addEventListener("close", Lk), Jy = lk, null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.socketAttached(ik), (0, Zk.s)({
+       return SS.addEventListener("message", qS), SS.addEventListener("open", uS), SS.addEventListener("close", IS), Kx = NS, null === (HS = (0, hS.h)()) || void 0 === HS || HS.socketAttached(XS), (0, kS.r)({
```

#### 836. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7704-L7705` → after: `L7444-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7444-L7445) · [Before (L7704-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7704-L7705)

```diff
-         token: `${Xk.roomId}:${Fk.token}`
-       }), yq(kk, "close", Fk.conn), null === (Ik = (0, Vk.k)()) || void 0 === Ik || Ik.socketDetached(Fk.conn), !0
+         token: `${tS.roomId}:${HS.token}`
+       }), tu(SS, "close", HS.conn), null === (gS = (0, hS.h)()) || void 0 === gS || gS.socketDetached(HS.conn), !0
```

#### 837. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7714` → after: `L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7454) · [Before (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7714)

```diff
-         eq: yk,
+         Ku: xS,
```

#### 838. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7719-L7720` → after: `L7459-L7460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7459-L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7459-L7460) · [Before (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7719-L7720)

```diff
-       if (!yq(kk, "close", Fk.conn, fF.E.Held)) return !0;
-       console.warn(`${vi} the game's connection ${Tk?"went silent":`dropped with code ${Ik}`}, holding it`);
+       if (!tu(SS, "close", HS.conn, pH.A.Held)) return !0;
+       console.warn(`${OX} the game's connection ${bS?"went silent":`dropped with code ${gS}`}, holding it`);
```

#### 839. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7726` → after: `L7466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7466) · [Before (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7726)

```diff
-       return (0, VI.reportDisconnect)((0, uk.l)(Ik), Ly, Lk, Tk ? "silent" : void 0), yk.heldConn = Fk.conn, yk.dropCode = Ik, yk.pendingHold = {
+       return (0, wg.reportDisconnect)((0, YS.k)(gS), Nx, IS, bS ? "silent" : void 0), xS.heldConn = HS.conn, xS.dropCode = gS, xS.pendingHold = {
```

#### 840. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7728` → after: `L7468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7468) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7728)

```diff
-         token: `${yk.roomId}:${lk}`
+         token: `${xS.roomId}:${NS}`
```

#### 841. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7736-L7737` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7476-L7477) · [Before (L7736-L7737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7736-L7737)

```diff
-       return null === Ik || null === Tk || la || kk.left || Tk.conn !== kk.conn || null === ik || "" === ik ? null : (0, Xk.i)(Fk) && Ik.resume.canHoldSeat() ? {
-         eq: Ik,
+       return null === gS || null === bS || bq || SS.left || bS.conn !== SS.conn || null === XS || "" === XS ? null : (0, tS.f)(HS) && gS.resume.canHoldSeat() ? {
+         Ku: gS,
```

#### 842. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7746` → after: `L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7486) · [Before (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7746)

```diff
-       null === (Ik = (0, Vk.k)()) || void 0 === Ik || Ik.closeGame(kk), (0, HT.b)().close(kk), Fk || (0, Zk.s)({
+       null === (gS = (0, hS.h)()) || void 0 === gS || gS.closeGame(SS), (0, Gb.e)().close(SS), HS || (0, kS.r)({
```

#### 843. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7754-L7755` → after: `L7494-L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7494-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7494-L7495) · [Before (L7754-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7754-L7755)

```diff
-       const Fk = (0, Vk.k)();
-       la || null === Fk || Fk.sE(kk) ? Pl = null : performance.now() - Fl.pause >= Yi && (Fl.pause = performance.now(), console.warn(`${vi} the cmd ring had no room for SetPaused(${kk}): written before the next frame`))
+       const HS = (0, hS.h)();
+       bq || null === HS || HS.uE(SS) ? GN = null : performance.now() - ex.pause >= BX && (ex.pause = performance.now(), console.warn(`${OX} the cmd ring had no room for SetPaused(${SS}): written before the next frame`))
```

#### 844. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7768` → after: `L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7508) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7768)

```diff
-       kk.heldConn = 0, kk.pendingHold = null, Hl === kk && (Hl = null), "left" === Fk ? kk.resume.leave() : kk.resume.dispose(), 0 === xl || (null === (Ik = Jy) || void 0 === Ik ? void 0 : Ik.conn) !== xl || "left" === Fk && (null === (Xk = ll) || void 0 === Xk ? void 0 : Xk.conn … [truncated]
+       SS.heldConn = 0, SS.pendingHold = null, aN === SS && (aN = null), "left" === HS ? SS.resume.leave() : SS.resume.dispose(), 0 === jN || (null === (gS = Kx) || void 0 === gS ? void 0 : gS.conn) !== jN || "left" === HS && (null === (tS = bN) || void 0 === tS ? void 0 : tS.conn … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7795` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7535) · [Before (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7795)

```diff
-       (null === Ik || void 0 === Ik ? void 0 : Ik.conn) === kk && (Ik.left = !0, null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.socketLeft(), (0, Zk.s)({
+       (null === gS || void 0 === gS ? void 0 : gS.conn) === SS && (gS.left = !0, null === (HS = (0, hS.h)()) || void 0 === HS || HS.socketLeft(), (0, kS.r)({
```

#### 846. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7799` → after: `L7539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7539) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7799)

```diff
-       }), bk.f) : Aa())
+       }), AS.g) : Bq())
```

#### 847. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7809` → after: `L7549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7549) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7809)

```diff
-         Tk = "open" === Fk ? ik.writeOpen(Ik, Xk) : ik.writeClose(Ik, Xk), Tk || kk.crash(TI.n, `a socket ${Fk} did not fit the net-in ring`)
+         bS = "open" === HS ? XS.writeOpen(gS, tS) : XS.writeClose(gS, tS), bS || SS.crash(tg.p, `a socket ${HS} did not fit the net-in ring`)
```

#### 848. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7816-L7817` → after: `L7556-L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7556-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7556-L7557) · [Before (L7816-L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7816-L7817)

```diff
-         const Xk = "browser" === kk && (0, eT.V)() ? "blockedAfterLoss" : "unsupported";
-         return (0, VI.reportUnsupportedFallback)(kk, Xk, Fk, Ik), void qq(`the wasm client can't run here (${Fk}; ${Xk})`, Xk)
+         const tS = "browser" === SS && (0, Kb.W)() ? "blockedAfterLoss" : "unsupported";
+         return (0, wg.reportUnsupportedFallback)(SS, tS, HS, gS), void xu(`the wasm client can't run here (${HS}; ${tS})`, tS)
```

#### 849. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7822` → after: `L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7562) · [Before (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7822)

```diff
-       return Ia && "wasm" !== (0, eF.f)(window.location.search)
+       return rN && "wasm" !== (0, aH.g)(window.location.search)
```

#### 850. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7826` → after: `L7566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7566) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7826)

```diff
-       console.warn(`${vi} ${kk}: reloading on the JS client`), null !== Fk && (0, eF.w)(Fk), (0, eF.u)(null === Fk ? "reloadOntoJs" : "decline");
+       console.warn(`${OX} ${SS}: reloading on the JS client`), null !== HS && (0, aH.x)(HS), (0, aH.u)(null === HS ? "reloadOntoJs" : "decline");
```

#### 851. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7828` → after: `L7568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7568) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7828)

```diff
-         (0, Yk.e)(eF.y)
+         (0, MS.h)(aH.E)
```

#### 852. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7830` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7570) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7830)

```diff
-       (0, VI.flushCrashReports)(Yk.c).then(Ik, Ik)
+       (0, wg.flushCrashReports)(MS.d).then(gS, gS)
```

#### 853. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7843` → after: `L7583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7583) · [Before (L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7843)

```diff
-       return null !== (kk = null === (Fk = ly) || void 0 === Fk || null === (Ik = Fk.textures) || void 0 === Ik ? void 0 : Ik.files()) && void 0 !== kk ? kk : null
+       return null !== (SS = null === (HS = bx) || void 0 === HS || null === (gS = HS.textures) || void 0 === gS ? void 0 : gS.files()) && void 0 !== SS ? SS : null
```

#### 854. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7848` → after: `L7588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7588) · [Before (L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7848)

```diff
-         null !== Fk && Promise.all([Promise.all([Ik.e(201), Ik.e(45)]).then((() => Ik(50999))), (0, eT.Q)()]).then((kk => {
+         null !== HS && Promise.all([Promise.all([gS.e(201), gS.e(45)]).then((() => gS(51043))), (0, Kb.P)()]).then((SS => {
```

#### 855. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7852-L7854` → after: `L7592-L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7592-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7592-L7594) · [Before (L7852-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7852-L7854)

```diff
-           const Tk = null === Xk || (0, XI.h)(Xk) ? "webgl" : Xk.backend;
-           Ik(Fk, TT.f, Tk, (kk => {
-             TT.f.setPageFiles(kk)
+           const bS = null === tS || (0, gg.m)(tS) ? "webgl" : tS.backend;
+           gS(HS, bb.d, bS, (SS => {
+             bb.d.setPageFiles(SS)
```

#### 856. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7857` → after: `L7597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7597) · [Before (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7857)

```diff
-           console.warn(`${vi} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Fk), kk()
+           console.warn(`${OX} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, HS), SS()
```

#### 857. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7863` → after: `L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7603) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7863)

```diff
-       console.warn(`${vi} ${kk}`, Fk)
+       console.warn(`${OX} ${SS}`, HS)
```

#### 858. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7868` → after: `L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7608) · [Before (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7868)

```diff
-         load: kk => Promise.all([Ik.e(201), Ik.e(54)]).then((() => Ik(51002))).then((Fk => {
+         load: SS => Promise.all([gS.e(201), gS.e(54)]).then((() => gS(51052))).then((HS => {
```

#### 859. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7874-L7875` → after: `L7614-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7614-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7614-L7615) · [Before (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7874-L7875)

```diff
-         store: pI.g,
-         Mj: kk => {
+         store: Lg.e,
+         tK: SS => {
```

#### 860. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7914` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7654) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7914)

```diff
-       }((kk => (0, TF.j)(kk) ? wq().request() : wq().forJoin()), nT.c, eq),
+       }((SS => (0, tH.m)(SS) ? ku().request() : ku().forJoin()), Eb.d, fu),
```

#### 861. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7950` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7690) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7950)

```diff
-             return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.reachInJoinedGame()) && void 0 !== kk ? kk : null
+             return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.reachInJoinedGame()) && void 0 !== SS ? SS : null
```

#### 862. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7952` → after: `L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7692) · [Before (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7952)

```diff
-           Nw: () => uy,
+           Wj: () => Ex,
```

#### 863. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7957` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7697) · [Before (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7957)

```diff
-             return null !== (kk = null === (Fk = Qy) || void 0 === Fk ? void 0 : Fk.takeFailedMeshJobs()) && void 0 !== kk ? kk : 0
+             return null !== (SS = null === (HS = nx) || void 0 === HS ? void 0 : HS.takeFailedMeshJobs()) && void 0 !== SS ? SS : 0
```

#### 864. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7968` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7708) · [Before (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7968)

```diff
-         console.error(`${vi} the frame telemetry didn't start`, ik)
+         console.error(`${OX} the frame telemetry didn't start`, XS)
```

#### 865. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7975` → after: `L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7715) · [Before (L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7975)

```diff
-         const ik = nl && null !== (Ik = null === (Xk = iy) || void 0 === Xk || null === (Tk = Xk.lastHeader) || void 0 === Tk ? void 0 : Tk.renderPending) && void 0 !== Ik ? Ik : 0;
+         const XS = dN && null !== (gS = null === (tS = gx) || void 0 === tS || null === (bS = tS.lastHeader) || void 0 === bS ? void 0 : bS.renderPending) && void 0 !== gS ? gS : 0;
```

#### 866. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7978` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7718) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7978)

```diff
-         (0, XX.s)(), console.error(`${vi} the quality steps stopped`, ik)
+         (0, gt.r)(), console.error(`${OX} the quality steps stopped`, XS)
```

#### 867. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7992` → after: `L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7732) · [Before (L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7992)

```diff
-       console.error(`${vi} the frame telemetry threw: it stops`, kk)
+       console.error(`${OX} the frame telemetry threw: it stops`, SS)
```

#### 868. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7997-L7998` → after: `L7737-L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7737-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7737-L7738) · [Before (L7997-L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L7997-L7998)

```diff
-       if ((0, HT.b)().fire(kk), "message" === kk.type) {
-         if (Dy++, kk.oq === fF.Mc.ERROR && null !== ql) {
+       if ((0, Gb.e)().fire(SS), "message" === SS.type) {
+         if (ox++, SS.Ju === pH.Xc.ERROR && null !== xN) {
```

#### 869. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8003` → after: `L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7743) · [Before (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8003)

```diff
-           } = (0, uk.p)((new TextDecoder).decode(kk.payload));
+           } = (0, YS.m)((new TextDecoder).decode(SS.payload));
```

#### 870. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8005` → after: `L7745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7745) · [Before (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8005)

```diff
-         } else if (kk.oq === BF.sc.ResumeComplete) {
+         } else if (SS.Ju === sH.kc.ResumeComplete) {
```

#### 871. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8011` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7751) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8011)

```diff
-       kk.phase === fF.I.Left ? My = kk.conn : kk.phase === fF.I.Activated && (null === (Fk = sl) || void 0 === Fk ? void 0 : Fk.conn) === kk.conn ? sl.activated = !0 : kk.phase === fF.I.Resumed ? function(kk) {
+       SS.phase === pH.E.Left ? lx = SS.conn : SS.phase === pH.E.Activated && (null === (HS = PN) || void 0 === HS ? void 0 : HS.conn) === SS.conn ? PN.activated = !0 : SS.phase === pH.E.Resumed ? function(SS) {
```

#### 872. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8016` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7756) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8016)

```diff
-         console.info(`${vi} the game resumed on conn ${kk}, waiting for its InitialInfo`);
+         console.info(`${OX} the game resumed on conn ${SS}, waiting for its InitialInfo`);
```

#### 873. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8021` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7761) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8021)

```diff
-         }), JF.e.apply({
+         }), GH.d.apply({
```

#### 874. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8023` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7763) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8023)

```diff
-           _shopVersion: iF.e
+           _shopVersion: bH.b
```

#### 875. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8025` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7765) · [Before (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8025)

```diff
-       }(kk.conn) : kk.phase === fF.I.Held ? function(kk) {
+       }(SS.conn) : SS.phase === pH.E.Held ? function(SS) {
```

#### 876. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8028-L8029` → after: `L7768-L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7768-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7768-L7769) · [Before (L8028-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8028-L8029)

```diff
-           Xk = null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.pendingHold) && void 0 !== Fk ? Fk : null;
-         if (null !== Ik && null !== Xk && Xk.conn === kk) return Ik.pendingHold = null, Ik.heldConn = kk, xl = 0, console.warn(`${vi} the core holds the game, reconnecting`), void Ik.resume.onDropped(Xk.token);
+           tS = null !== (HS = null === gS || void 0 === gS ? void 0 : gS.pendingHold) && void 0 !== HS ? HS : null;
+         if (null !== gS && null !== tS && tS.conn === SS) return gS.pendingHold = null, gS.heldConn = SS, jN = 0, console.warn(`${OX} the core holds the game, reconnecting`), void gS.resume.onDropped(tS.token);
```

#### 877. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8033` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7773) · [Before (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8033)

```diff
-           null === Fk || Fk.isStopped || (console.info(`${vi} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), yq(Fk, "close", kk))
+           null === HS || HS.isStopped || (console.info(`${OX} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), tu(HS, "close", SS))
```

#### 878. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8035` → after: `L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7775) · [Before (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8035)

```diff
-       }(kk.conn) : kk.phase === fF.I.Closed && (null === (Ik = Hl) || void 0 === Ik || null === (Xk = Ik.pendingHold) || void 0 === Xk ? void 0 : Xk.conn) === kk.conn && (Hl.heldConn === kk.conn ? function(kk) {
+       }(SS.conn) : SS.phase === pH.E.Closed && (null === (gS = aN) || void 0 === gS || null === (tS = gS.pendingHold) || void 0 === tS ? void 0 : tS.conn) === SS.conn && (aN.heldConn === SS.conn ? function(SS) {
```

#### 879. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8038` → after: `L7778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7778) · [Before (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8038)

```diff
-         Fq(kk, "refused"), console.info(`${vi} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
+         eq(SS, "refused"), console.info(`${OX} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
```

#### 880. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8042-L8044` → after: `L7782-L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7782-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7782-L7784) · [Before (L8042-L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8042-L8044)

```diff
-       const lk = Object.keys(fF.I).find((Fk => fF.I[Fk] === kk.phase)),
-         ak = 0 === kk.code ? "" : ` (code ${kk.code})`;
-       console.info(`${vi} conn ${kk.conn}: ${null!==lk&&void 0!==lk?lk:kk.phase}${ak}, ${Dy} raw messages so far`), (null === (Tk = ll) || void 0 === Tk ? void 0 : Tk.conn) !== kk.conn || kk.phase !== fF.I.Left && kk.phase !== fF.I.Closed || za(null), Zl !== kk.conn || kk.phase ! … [truncated]
+       const NS = Object.keys(pH.E).find((HS => pH.E[HS] === SS.phase)),
+         qS = 0 === SS.code ? "" : ` (code ${SS.code})`;
+       console.info(`${OX} conn ${SS.conn}: ${null!==NS&&void 0!==NS?NS:SS.phase}${qS}, ${ox} raw messages so far`), (null === (bS = bN) || void 0 === bS ? void 0 : bS.conn) !== SS.conn || SS.phase !== pH.E.Left && SS.phase !== pH.E.Closed || Dq(null), uN !== SS.conn || SS.phase ! … [truncated]
```

#### 881. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8048` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7788) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8048)

```diff
-         (0, dF.i)(qk, `${vi} a connection listener threw`)
+         (0, BH.j)(uS, `${OX} a connection listener threw`)
```

#### 882. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8053` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7793) · [Before (L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8053)

```diff
-       (0, eT.r)(), queueMicrotask((() => {
+       (0, Kb.t)(), queueMicrotask((() => {
```

#### 883. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8057-L8058` → after: `L7797-L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7797-L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7797-L7798) · [Before (L8057-L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8057-L8058)

```diff
-           console.warn(`${vi} stopping before the reload threw`, kk)
-         }(0, VI.flushCrashReports)(Yk.c).then(Yk.i, Yk.i)
+           console.warn(`${OX} stopping before the reload threw`, SS)
+         }(0, wg.flushCrashReports)(MS.d).then(MS.k, MS.k)
```

#### 884. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8079` → after: `L7819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7819) · [Before (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8079)

```diff
-         ik && "all" !== Xk && !document.hidden && dq("backlog", `a shown tab's net-in is ${kk.rings.net.cursor} bytes behind: one frame reads it all`);
+         XS && "all" !== tS && !document.hidden && pu("backlog", `a shown tab's net-in is ${SS.rings.net.cursor} bytes behind: one frame reads it all`);
```

#### 885. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8085` → after: `L7825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7825) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8085)

```diff
-           Ma(), dy = performance.now(), My = null, kl = !1, (0, sk.L)(), null === (ik = vy) || void 0 === ik || ik.beforeFrame(), JX(dy, kk), (0, sk.D)(dy, pq), hy = !0;
+           lq(), px = performance.now(), lx = null, mx = !1, (0, wS.M)(), null === (XS = Zx) || void 0 === XS || XS.beforeFrame(), Ct(px, SS), (0, wS.D)(px, vu), Rx = !0;
```

#### 886. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8094` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7834) · [Before (L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8094)

```diff
-           Nl.observe(null !== (yk = null === (lk = kk.lastHeader) || void 0 === lk ? void 0 : lk.chunksCancelled) && void 0 !== yk ? yk : 0);
+           VN.observe(null !== (xS = null === (NS = SS.lastHeader) || void 0 === NS ? void 0 : NS.chunksCancelled) && void 0 !== xS ? xS : 0);
```

#### 887. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8096` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7836) · [Before (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8096)

```diff
-             Zk = (0, OF.d)(tk);
+             kS = (0, cH.c)(fS);
```

#### 888. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8111` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7851) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8111)

```diff
-           null !== My && (null === jk || void 0 === jk ? void 0 : jk.conn) === My && Wq(jk, bk.i);
+           null !== lx && (null === aS || void 0 === aS ? void 0 : aS.conn) === lx && Wu(aS, AS.j);
```

#### 889. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8114-L8115` → after: `L7854-L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7854-L7855) · [Before (L8114-L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8114-L8115)

```diff
-               const Fk = 0 !== (kk.headerWord(BF.F.LoadSteps) & BF.S.JoinPreload);
-               Fk !== tl && (tl = Fk, (0, VI.setCrashAdPreload)(Fk), (0, OI.H)())
+               const HS = 0 !== (SS.headerWord(sH.H.LoadSteps) & sH.T.JoinPreload);
+               HS !== qN && (qN = HS, (0, wg.setCrashAdPreload)(HS), (0, cg.T)())
```

#### 890. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8119-L8121` → after: `L7859-L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7859-L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7859-L7861) · [Before (L8119-L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8119-L8121)

```diff
-               const ik = kk.headerWord(BF.F.LoadSteps);
-               null === Dl || Ml === ll && !Dl.frame(dy, 0 !== (ik & BF.W.TerrainDrawn)) || (Dl = null);
-               if (0 === (ik & BF.S.PlayerBound)) return;
+               const XS = SS.headerWord(sH.H.LoadSteps);
+               null === oN || lN === bN && !oN.frame(px, 0 !== (XS & sH.V.TerrainDrawn)) || (oN = null);
+               if (0 === (XS & sH.T.PlayerBound)) return;
```

#### 891. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8126-L8128` → after: `L7866-L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7866-L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7866-L7868) · [Before (L8126-L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8126-L8128)

```diff
-               const ak = null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.firstView) && void 0 !== Fk ? Fk : fF.Y.NotYet;
-               if (nl && ak === fF.Y.NotYet) return;
-               if (Al && (!0 !== (null === (Xk = (0, Vk.k)()) || void 0 === Xk ? void 0 : Xk.isSessionLive) || !lk)) return;
+               const qS = null !== (HS = null === xS || void 0 === xS ? void 0 : xS.firstView) && void 0 !== HS ? HS : pH.gb.NotYet;
+               if (dN && qS === pH.gb.NotYet) return;
+               if (BN && (!0 !== (null === (tS = (0, hS.h)()) || void 0 === tS ? void 0 : tS.isSessionLive) || !NS)) return;
```

#### 892. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8132` → after: `L7872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7872) · [Before (L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8132)

```diff
-                   ll === qk && (0, ek.m)()
+                   bN === uS && (0, KS.l)()
```

#### 893. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8143` → after: `L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7883) · [Before (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8143)

```diff
-               Al = !0, performance.mark(Ri), (0, cT.o)("render") && Promise.all([Ik.e(77), Ik.e(48)]).then((() => Ik(4676))).then((kk => {
+               BN = !0, performance.mark(AX), (0, Ub.q)("render") && Promise.all([gS.e(77), gS.e(48)]).then((() => gS(4803))).then((SS => {
```

#### 894. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8153-L8155` → after: `L7893-L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7893-L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7893-L7895) · [Before (L8153-L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8153-L8155)

```diff
-               null !== tk && (0, ek.r)("wasm_view_links", Lk, (0, lF.ib)(tk));
-               if (nl && ak !== fF.Y.Drawn) {
-                 const Fk = ak === fF.Y.HeldBackstop ? "held_draws" : "long",
+               null !== fS && (0, KS.n)("wasm_view_links", IS, (0, xH.bb)(fS));
+               if (dN && qS !== pH.gb.Drawn) {
+                 const HS = qS === pH.gb.HeldBackstop ? "held_draws" : "long",
```

#### 895. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8159` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7899) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8159)

```diff
-                 if (console.warn(`${vi} playable at ${Lk} ms on the first view's ${Fk} backstop, ${Ik}: it wasn't drawn whole in time`), (0, ek.r)("wasm_view_backstop", Lk, `${Fk}:${Ik}`), "long" === Fk) {
+                 if (console.warn(`${OX} playable at ${IS} ms on the first view's ${HS} backstop, ${gS}: it wasn't drawn whole in time`), (0, KS.n)("wasm_view_backstop", IS, `${HS}:${gS}`), "long" === HS) {
```

#### 896. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8161` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7901) · [Before (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8161)

```diff
-                   const Fk = null !== (Zk = null === (jk = wl) || void 0 === jk ? void 0 : jk.game) && void 0 !== Zk ? Zk : "";
+                   const HS = null !== (kS = null === (aS = kN) || void 0 === aS ? void 0 : aS.game) && void 0 !== kS ? kS : "";
```

#### 897. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8167` → after: `L7907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7907) · [Before (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8167)

```diff
-                     (0, VI.reportFirstViewNoTerrain)(Fk, Ik, Xk, Ly), (0, jF.v)("noTerrain")
+                     (0, wg.reportFirstViewNoTerrain)(HS, gS, tS, Nx), (0, kH.u)("noTerrain")
```

#### 898. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8170-L8173` → after: `L7910-L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7910-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7910-L7913) · [Before (L8170-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8170-L8173)

```diff
-               } else console.info(`${vi} playable at ${Lk} ms${nl?"":" (no renderer)"}`);
-               setTimeout(Rl, 0), (0, PF.e)().catch((kk => {
-                 console.error(`${vi} item sprites didn't load, so item particles show the missing texture`, kk)
-               })), hX.b.warm()
+               } else console.info(`${OX} playable at ${IS} ms${dN?"":" (no renderer)"}`);
+               setTimeout(YN, 0), (0, nH.c)().catch((SS => {
+                 console.error(`${OX} item sprites didn't load, so item particles show the missing texture`, SS)
+               })), lt.d.warm()
```

#### 899. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8175` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7915) · [Before (L8175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8175)

```diff
-           (0, TI.F)(kk, {
+           (0, tg.N)(SS, {
```

#### 900. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8182` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7922) · [Before (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8182)

```diff
-               (0, ZX.c)(Fk)
+               (0, ft.d)(HS)
```

#### 901. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8184-L8185` → after: `L7924-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7924-L7925) · [Before (L8184-L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8184-L8185)

```diff
-               if ((0, dF.f)(wk)) {
-                 kk.crashOn(TI.k, wk);
+               if ((0, BH.d)(jS)) {
+                 SS.crashOn(tg.j, jS);
```

#### 902. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8188` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7928) · [Before (L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8188)

```diff
-               console.error(`${eX} an input action listener threw`, wk)
+               console.error(`${Kt} an input action listener threw`, jS)
```

#### 903. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8191` → after: `L7931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7931) · [Before (L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8191)

```diff
-           }(kk), Tk && (0, EF.d)();
+           }(SS), bS && (0, dH.c)();
```

#### 904. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8200` → after: `L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7940) · [Before (L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8200)

```diff
-       console.error(`${vi} a frame-start listener threw`, kk)
+       console.error(`${OX} a frame-start listener threw`, SS)
```

#### 905. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8209` → after: `L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7949) · [Before (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8209)

```diff
-       console.error(`${vi} a before-frame listener threw`, kk)
+       console.error(`${OX} a before-frame listener threw`, SS)
```

#### 906. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8213-L8214` → after: `L7953-L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7953-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7953-L7954) · [Before (L8213-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8213-L8214)

```diff
-       const Fk = (0, Vk.k)(),
-         Ik = (0, Vk.y)(),
+       const HS = (0, hS.h)(),
+         gS = (0, hS.q)(),
```

#### 907. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8217` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7957) · [Before (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8217)

```diff
-         cause: (0, uI.j)(kk.headerWord(BF.F.LoadSteps), Xk),
+         cause: (0, Yg.k)(SS.headerWord(sH.H.LoadSteps), tS),
```

#### 908. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8233` → after: `L7973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7973) · [Before (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8233)

```diff
-       null === hl || rl || (rl = !0, (0, ek.r)("wasm_startup_loaded", hl));
+       null === RN || TN || (TN = !0, (0, KS.n)("wasm_startup_loaded", RN));
```

#### 909. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8235-L8236` → after: `L7975-L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7975-L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7975-L7976) · [Before (L8235-L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8235-L8236)

```diff
-       null !== ll ? Ik = -1 : !0 === (null === (Fk = sl) || void 0 === Fk ? void 0 : Fk.activated) && (Ik = ~BF.W.TerrainDrawn);
-       const Xk = kk.headerWord(BF.F.LoadSteps) & Ik & ~ml;
+       null !== bN ? gS = -1 : !0 === (null === (HS = PN) || void 0 === HS ? void 0 : HS.activated) && (gS = ~sH.V.TerrainDrawn);
+       const tS = SS.headerWord(sH.H.LoadSteps) & gS & ~FN;
```

#### 910. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8240` → after: `L7980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L7980) · [Before (L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8240)

```diff
-       for (const [ik, yk] of Object.entries(bq)) 0 !== (Xk & BF.W[ik]) && (0, ek.r)(yk, Tk)
+       for (const [XS, xS] of Object.entries(Lu)) 0 !== (tS & sH.V[XS]) && (0, KS.n)(xS, bS)
```

#### 911. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8269` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8009) · [Before (L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8269)

```diff
-       la = !0, Fa.stop(), (0, fT.e)(), gT = null, kq(), (0, sk.I)().unlockPointer(), (0, sk.F)(null), null === (kk = Ey) || void 0 === kk || kk(), Ey = null, null === (Fk = (0, Vk.y)()) || void 0 === Fk || Fk.followCursorAim(null), (0, EF.G)(), (0, Vk.i)(), qy.stop(), null === (I … [truncated]
+       bq = !0, eN.stop(), (0, sb.b)(), Tb = null, mq(), (0, wS.J)().unlockPointer(), (0, wS.H)(null), null === (SS = Jx) || void 0 === SS || SS(), Jx = null, null === (HS = (0, hS.q)()) || void 0 === HS || HS.followCursorAim(null), (0, dH.B)(), (0, hS.f)(), xx.stop(), null === (g … [truncated]
```

#### 912. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8277-L8278` → after: `L8017-L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8017-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8017-L8018) · [Before (L8277-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8277-L8278)

```diff
-         console.warn(`${vi} the sky's images didn't release`, Pk)
-       }(0, rX.f)(null), null === (Hk = Xy) || void 0 === Hk || Hk.pagePreviews().endSession(null === (0, aF.n)())
+         console.warn(`${OX} the sky's images didn't release`, PS)
+       }(0, mt.h)(null), null === (GS = Sx) || void 0 === GS || GS.pagePreviews().endSession(null === (0, NH.t)())
```

#### 913. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8283-L8286` → after: `L8023-L8026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8023-L8026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8023-L8026) · [Before (L8283-L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8283-L8286)

```diff
-       const Tk = null !== (Ik = null === (Xk = sy) || void 0 === Xk ? void 0 : Xk.details()) && void 0 !== Ik ? Ik : {},
-         ik = kk.site === Oi || kk.site === ni || kk.site === VI.RENDER_RELOAD_SITE || kk.site === Gi ? kk.error instanceof WebAssembly.RuntimeError || kk.error instanceof MF.c : !(0, XI.j)(kk.error) && (0, TI.B)(kk);
-       ik && kk.error instanceof Error && (0, aF.M)(kk.error);
-       const yk = ik || kk.site === TI.q ? (0, VI.readTrap)(kk.error) : null,
+       const bS = null !== (gS = null === (tS = Px) || void 0 === tS ? void 0 : tS.details()) && void 0 !== gS ? gS : {},
+         XS = SS.site === cX || SS.site === vX || SS.site === wg.RENDER_RELOAD_SITE || SS.site === EX ? SS.error instanceof WebAssembly.RuntimeError || SS.error instanceof eH.c : !(0, gg.p)(SS.error) && (0, tg.J)(SS);
+       XS && SS.error instanceof Error && (0, NH.W)(SS.error);
+       const xS = XS || SS.site === tg.s ? (0, wg.readTrap)(SS.error) : null,
```

#### 914. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8288-L8289` → after: `L8028-L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8028-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8028-L8029) · [Before (L8288-L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8288-L8289)

```diff
-         ak = (0, PI.m)(),
-         qk = null === Vy ? (0, AX.l)(function() {
+         qS = (0, ng.o)(),
+         uS = null === Qx ? (0, Rt.q)(function() {
```

#### 915. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8291` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8031) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8291)

```diff
-             return (0, aF.r)().buffer.byteLength
+             return (0, NH.B)().buffer.byteLength
```

#### 916. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8298` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8038) · [Before (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8298)

```diff
-       if (Lk && ((0, eF.w)("oom"), (0, eF.u)("decline"), ya = !0), fq(), (0, eT.e)()) return console.warn(`${vi} the session stopped at ${kk.site} as the page reloads`, kk.error), void((0, XI.j)(kk.error) || (null === (tk = kk.header) || void 0 === tk ? void 0 : tk.lastError) === … [truncated]
+       if (IS && ((0, aH.x)("oom"), (0, aH.u)("decline"), tq = !0), zu(), (0, Kb.c)()) return console.warn(`${OX} the session stopped at ${SS.site} as the page reloads`, SS.error), void((0, gg.p)(SS.error) || (null === (fS = SS.header) || void 0 === fS ? void 0 : fS.lastError) === … [truncated]
```

#### 917. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8310` → after: `L8050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8050) · [Before (L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8310)

```diff
-       return !(Ik - Fl[kk] < Yi) && (Fl[kk] = Ik, console.warn(`${vi} ${Fk}`), !0)
+       return !(gS - ex[SS] < BX) && (ex[SS] = gS, console.warn(`${OX} ${HS}`), !0)
```

#### 918. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8319` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8059) · [Before (L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8319)

```diff
-       ik !== Il && dq("dropped", `${ik} records dropped so far (input ${Fk.dropped}, options ${Tk}, net ${Ik.dropped}, worker ${Xk.dropped}, net-out ${Xl})`) && (Il = ik)
+       XS !== rx && pu("dropped", `${XS} records dropped so far (input ${HS.dropped}, options ${bS}, net ${gS.dropped}, worker ${tS.dropped}, net-out ${SN})`) && (rx = XS)
```

#### 919. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8326` → after: `L8066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8066) · [Before (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8326)

```diff
-       const Xk = (0, GI.t)(Ik);
+       const tS = (0, Eg.q)(gS);
```

#### 920. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8329` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8069) · [Before (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8329)

```diff
-         horizontal: Math.min(Xk.horizontal, null !== (kk = null === (Fk = sy) || void 0 === Fk ? void 0 : Fk.shedDistanceInUse()) && void 0 !== kk ? kk : 1 / 0)
+         horizontal: Math.min(tS.horizontal, null !== (SS = null === (HS = Px) || void 0 === HS ? void 0 : HS.shedDistanceInUse()) && void 0 !== SS ? SS : 1 / 0)
```

#### 921. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8336` → after: `L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8076) · [Before (L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8336)

```diff
-         samples: nl ? cl : null,
+         samples: dN ? iN : null,
```

#### 922. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8338` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8078) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8338)

```diff
-         renderDistance: null !== (Fk = null === (Ik = Aq()) || void 0 === Ik ? void 0 : Ik.horizontal) && void 0 !== Fk ? Fk : null
+         renderDistance: null !== (HS = null === (gS = Bu()) || void 0 === gS ? void 0 : gS.horizontal) && void 0 !== HS ? HS : null
```

#### 923. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8343` → after: `L8083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8083) · [Before (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8343)

```diff
-       Ll = kk, (0, OI.H)()
+       NN = SS, (0, cg.T)()
```

#### 924. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8351-L8352` → after: `L8091-L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8091-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8091-L8092) · [Before (L8351-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8351-L8352)

```diff
-         renderDistance: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.horizontal) && void 0 !== Fk ? Fk : null,
-         renderDistanceVertical: null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.vertical) && void 0 !== Ik ? Ik : null,
+         renderDistance: null !== (HS = null === tS || void 0 === tS ? void 0 : tS.horizontal) && void 0 !== HS ? HS : null,
+         renderDistanceVertical: null !== (gS = null === tS || void 0 === tS ? void 0 : tS.vertical) && void 0 !== gS ? gS : null,
```

#### 925. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8355` → after: `L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8095) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8355)

```diff
-         renderBackend: (0, eT.J)(),
+         renderBackend: (0, Kb.F)(),
```

#### 926. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8357` → after: `L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8097) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8357)

```diff
-         ...(0, nI.e)(Ll)
+         ...(0, vg.c)(NN)
```

#### 927. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8362` → after: `L8102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8102) · [Before (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8362)

```diff
-       console.info(`${vi} wasm memory at the session's end`, kk.details())
+       console.info(`${OX} wasm memory at the session's end`, SS.details())
```

#### 928. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8369` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8109) · [Before (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8369)

```diff
-         kk.crash(TI.r, Ik)
+         SS.crash(tg.v, gS)
```

#### 929. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8374` → after: `L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8114) · [Before (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8374)

```diff
-       return Ky ??= Ik.e(71).then((() => Ik(51008))).catch((kk => {
+       return Cx ??= gS.e(71).then((() => gS(51055))).catch((SS => {
```

#### 930. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8422` → after: `L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8162) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8422)

```diff
-             Xk(), await Promise.all([(0, VI.flushCrashReports)(Yk.c), null === ik || void 0 === ik ? void 0 : ik()])
+             tS(), await Promise.all([(0, wg.flushCrashReports)(MS.d), null === XS || void 0 === XS ? void 0 : XS()])
```

#### 931. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8424` → after: `L8164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8164) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8424)

```diff
-           reload: Yk.i
+           reload: MS.k
```

#### 932. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8438` → after: `L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8178) · [Before (L8438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8438)

```diff
-         } = await Ik.e(271).then((() => Ik(41067)));
+         } = await gS.e(271).then((() => gS(41075)));
```

#### 933. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8466` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8206) · [Before (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8466)

```diff
-       qL || (qL = !0, ja("play", Bk), (0, Zk.q)(new SL), lk.gameBridge.attach(pk), PL().catch((() => {})), (0, Vk.A)((kk => {
+       xI || (xI = !0, Iq("play", sS), (0, kS.n)(new wI), NS.gameBridge.attach(LS), GI().catch((() => {})), (0, hS.t)((SS => {
```

#### 934. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8476-L8478` → after: `L8216-L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8216-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8216-L8218) · [Before (L8476-L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8476-L8478)

```diff
-       booted: ik.j.INITIALISE_NOA,
-       texturesIn: ik.j.REGISTRATION,
-       modelsIn: ik.j.SETUP_LIFEFORMS
+       booted: XS.g.INITIALISE_NOA,
+       texturesIn: XS.g.REGISTRATION,
+       modelsIn: XS.g.SETUP_LIFEFORMS
```

#### 935. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8482` → after: `L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8222) · [Before (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8482)

```diff
-       ak.g.GL("matchmakeAndPlayStepCompleted", {
+       qS.k.cj("matchmakeAndPlayStepCompleted", {
```

#### 936. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8493-L8495` → after: `L8233-L8235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8233-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8233-L8235) · [Before (L8493-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8493-L8495)

```diff
-       } = (0, Zk.d)();
-       if (kk.code === Xk.d.serverUpdating.code) return (new SL).leaveLive(), void xL(Fk, Ik);
-       ak.g.GL("unwantedLeftGame", {
+       } = (0, kS.e)();
+       if (SS.code === tS.c.serverUpdating.code) return (new wI).leaveLive(), void jI(HS, gS);
+       qS.k.cj("unwantedLeftGame", {
```

#### 937. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8509` → after: `L8249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8249) · [Before (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8509)

```diff
-       } : "gameOrPluginKick" === kk.name ? kk.reason : `You have disconnected from the server.\n${kk.reason}`
+       } : "gameOrPluginKick" === SS.name ? SS.reason : `You have disconnected from the server.\n${SS.reason}`
```

#### 938. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8514` → after: `L8254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8254) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8514)

```diff
-       Xk = (0, qk.A)(kk, Fk), Promise.resolve().then((() => Ik(1475))).then((kk => {
+       tS = (0, uS.E)(SS, HS), Promise.resolve().then((() => gS(1608))).then((SS => {
```

#### 939. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8520` → after: `L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8260) · [Before (L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8520)

```diff
-         console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", kk), (0, Yk.d)(Xk)
+         console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", SS), (0, MS.e)(tS)
```

#### 940. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8525` → after: `L8265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8265) · [Before (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8525)

```diff
-       return LL ??= Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(89), Ik.e(86), Ik.e(269), Ik.e(189), Ik.e(223), Ik.e(247), Ik.e(218), Ik.e(46)]).then((() => Ik(41011))).then((kk => {
+       return NI ??= Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(89), gS.e(86), gS.e(269), gS.e(189), gS.e(223), gS.e(247), gS.e(218), gS.e(46)]).then((() => gS(41033))).then((SS => {
```

#### 941. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8532` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8272) · [Before (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8532)

```diff
-                 null === Fk || Fk.isStopped || la ? console.warn(`${vi} the play sources threw as they attached, after the client stopped`, kk) : Bq({
+                 null === HS || HS.isStopped || bq ? console.warn(`${OX} the play sources threw as they attached, after the client stopped`, SS) : Uu({
```

#### 942. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8541` → after: `L8281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8281) · [Before (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8541)

```diff
-         throw LL = null, new Vk.e(kk)
+         throw NI = null, new hS.c(SS)
```

#### 943. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8551` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8291) · [Before (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8551)

```diff
-       const lk = (0, tk.c)();
+       const NS = (0, fS.g)();
```

#### 944. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8566` → after: `L8306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8306) · [Before (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8566)

```diff
-             target: await (0, Uk.f)(kk.userContext, Fk.place, Jq(), lk),
+             target: await (0, VS.h)(SS.userContext, HS.place, Ku(), NS),
```

#### 945. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8568` → after: `L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8308) · [Before (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8568)

```diff
-             freshMs: Uk.c
+             freshMs: VS.d
```

#### 946. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8590-L8591` → after: `L8330-L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8330-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8330-L8331) · [Before (L8590-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8590-L8591)

```diff
-             (0, tk.k)((() => {
-               kk.endJoinAd() && (0, ek.n)()
+             (0, fS.r)((() => {
+               SS.endJoinAd() && (0, KS.m)()
```

#### 947. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8594` → after: `L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8334) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8594)

```diff
-           return ZL || (ZL = !0, (0, Hk.e)()), tL ? (wL(ik.j.CONNECT_TO_GAME_SERVER), wL(ik.j.SHADER_PACK), function() {
+           return uI || (uI = !0, (0, GS.c)()), qI ? (kI(XS.g.CONNECT_TO_GAME_SERVER), kI(XS.g.SHADER_PACK), function() {
```

#### 948. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8597` → after: `L8337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8337) · [Before (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8597)

```diff
-           }() && (0, wk.h)(kk.userContext, yk).catch((kk => {
+           }() && (0, jS.e)(SS.userContext, xS).catch((SS => {
```

#### 949. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8602` → after: `L8342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8342) · [Before (L8602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8602)

```diff
-               return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.couldntRunInJoinedGame()) && void 0 !== kk ? kk : null
+               return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.couldntRunInJoinedGame()) && void 0 !== SS ? SS : null
```

#### 950. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8605` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8345) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8605)

```diff
-           }(), Tk.b.value(void 0)) : zL("The server ended the game as it joined");
+           }(), bS.d.value(void 0)) : DI("The server ended the game as it joined");
```

#### 951. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8609` → after: `L8349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8349) · [Before (L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8609)

```diff
-             if ((qk.error instanceof bk.j || qk.error instanceof bk.b) && qk.error.code === Xk.d.serverUpdating.code) {
+             if ((uS.error instanceof AS.k || uS.error instanceof AS.d) && uS.error.code === tS.c.serverUpdating.code) {
```

#### 952. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8614` → after: `L8354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8354) · [Before (L8614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8614)

```diff
-               } = (0, Zk.d)();
+               } = (0, kS.e)();
```

#### 953. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8617` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8357) · [Before (L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8617)

```diff
-             return qk.error instanceof dk.d ? Tk.b.errorWithCode(qk.error.messageKey, ik.j.SHADER_PACK, {
+             return uS.error instanceof BS.b ? bS.d.errorWithCode(uS.error.messageKey, XS.g.SHADER_PACK, {
```

#### 954. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8619-L8623` → after: `L8359-L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8359-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8359-L8363) · [Before (L8619-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8619-L8623)

```diff
-             }) : Tk.b.errorWithCode(function(kk) {
-               if (kk instanceof bk.t || kk instanceof Kk.f) return kk.message;
-               if (QL(kk)) return (0, uk.n)(kk.code, kk.serverText);
-               return uk.i
-             }(qk.error), ik.j.CONNECT_TO_GAME_SERVER, {
+             }) : bS.d.errorWithCode(function(SS) {
+               if (SS instanceof AS.p || SS instanceof QS.e) return SS.message;
+               if (nI(SS)) return (0, YS.l)(SS.code, SS.serverText);
+               return YS.g
+             }(uS.error), XS.g.CONNECT_TO_GAME_SERVER, {
```

#### 955. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8626-L8628` → after: `L8366-L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8366-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8366-L8368) · [Before (L8626-L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8626-L8628)

```diff
-               gameServerUnreachable: (0, Rk.c)(qk.error),
-               joinFailure: (0, Rk.h)(qk.error),
-               rematch: (0, xk.e)(qk.error),
+               gameServerUnreachable: (0, yS.d)(uS.error),
+               joinFailure: (0, yS.i)(uS.error),
+               rematch: (0, nS.c)(uS.error),
```

#### 956. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8635` → after: `L8375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8375) · [Before (L8635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8635)

```diff
-         case "iI":
+         case "Hg":
```

#### 957. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8641` → after: `L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8381) · [Before (L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8641)

```diff
-       return kk instanceof bk.j || kk instanceof bk.b && "attach" !== kk.stage
+       return SS instanceof AS.k || SS instanceof AS.d && "attach" !== SS.stage
```

#### 958. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8645` → after: `L8385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8385) · [Before (L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8645)

```diff
-       return !(kk instanceof bk.t) && !QL(kk) && void 0 === (0, Rk.c)(kk)
+       return !(SS instanceof AS.p) && !nI(SS) && void 0 === (0, yS.d)(SS)
```

#### 959. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8649` → after: `L8389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8389) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8649)

```diff
-       return QL(kk) ? kk instanceof bk.b && (0, uk.l)(kk.code).requiresRefresh ? "medium" : "low" : sL(kk) || kk instanceof bk.t ? "medium" : "low"
+       return nI(SS) ? SS instanceof AS.d && (0, YS.k)(SS.code).requiresRefresh ? "medium" : "low" : PI(SS) || SS instanceof AS.p ? "medium" : "low"
```

#### 960. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8653` → after: `L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8393) · [Before (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8653)

```diff
-       return Tk.b.errorWithCode(kk, ik.j.CONNECT_TO_GAME_SERVER, {
+       return bS.d.errorWithCode(SS, XS.g.CONNECT_TO_GAME_SERVER, {
```

#### 961. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8655` → after: `L8395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8395) · [Before (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8655)

```diff
-         iI: !0
+         Hg: !0
```

#### 962. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8660` → after: `L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8400) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8660)

```diff
-         if ((0, Qk.c)()) {
+         if ((0, DS.e)()) {
```

#### 963. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8662-L8663` → after: `L8402-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8402-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8402-L8403) · [Before (L8662-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8662-L8663)

```diff
-           if ((0, yk.b)()) return;
-           (0, jk.b)(!0 === (null === (Fk = (0, Qk.j)()) || void 0 === Fk || null === (Ik = Fk.currentViewer) || void 0 === Ik ? void 0 : Ik.unsavedChanges), kk)
+           if ((0, xS.e)()) return;
+           (0, aS.c)(!0 === (null === (HS = (0, DS.l)()) || void 0 === HS || null === (gS = HS.currentViewer) || void 0 === gS ? void 0 : gS.unsavedChanges), SS)
```

#### 964. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8670` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8410) · [Before (L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8670)

```diff
-         tL = !1, (0, Jk.g)();
+         qI = !1, (0, CS.f)();
```

#### 965. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8673` → after: `L8413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8413) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8673)

```diff
-           null === (Fk = (0, Vk.y)()) || void 0 === Fk || Fk.clearWasmCameraScreen()
+           null === (HS = (0, hS.q)()) || void 0 === HS || HS.clearWasmCameraScreen()
```

#### 966. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8679` → after: `L8419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8419) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8679)

```diff
-         } = (0, Zk.d)();
+         } = (0, kS.e)();
```

#### 967. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8683` → after: `L8423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8423) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8683)

```diff
-           (0, Zk.s)({
+           (0, kS.r)({
```

#### 968. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8685` → after: `L8425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8425) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8685)

```diff
-           }), ak.g.GL("leaveGame", {
+           }), qS.k.cj("leaveGame", {
```

#### 969. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8687` → after: `L8427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8427) · [Before (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8687)

```diff
-           }), (0, Lk.O)()
+           }), (0, IS.Q)()
```

#### 970. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8691` → after: `L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8431) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8691)

```diff
-         return (0, Qk.c)()
+         return (0, DS.e)()
```

#### 971. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8695` → after: `L8435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8435) · [Before (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8695)

```diff
-   40937: (kk, Fk, Ik) => {
+   40947: (SS, HS, gS) => {
```

#### 972. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8697-L8700` → after: `L8437-L8440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8437-L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8437-L8440) · [Before (L8697-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8697-L8700)

```diff
-       c: () => Tk,
-       e: () => Xk,
-       g: () => lk,
-       i: () => yk
+       b: () => bS,
+       f: () => tS,
+       h: () => NS,
+       k: () => xS
```

#### 973. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8712` → after: `L8452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8452) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8712)

```diff
-       return `it sent no start within ${Math.round(kk)} ms`
+       return `it sent no start within ${Math.round(SS)} ms`
```

#### 974. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8755` → after: `L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8495) · [Before (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8755)

```diff
-   39631: (kk, Fk, Ik) => {
+   39699: (SS, HS, gS) => {
```

#### 975. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8757` → after: `L8497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8497) · [Before (L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8757)

```diff
-       c: () => lk
+       e: () => NS
```

#### 976. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8759-L8760` → after: `L8499-L8500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8499-L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8499-L8500) · [Before (L8759-L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8759-L8760)

```diff
-     var Xk = Ik(337),
-       Tk = Ik(1018);
+     var tS = gS(387),
+       bS = gS(1087);
```

#### 977. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8765-L8766` → after: `L8505-L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8505-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8505-L8506) · [Before (L8765-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8765-L8766)

```diff
-       const Fk = (0, Xk.dc)(kk);
-       return "classic" !== Fk ? ik.has(Fk) : !(0, Tk.j)(kk) && !yk.has((0, Xk.Xb)(kk))
+       const HS = (0, tS.Kb)(SS);
+       return "classic" !== HS ? XS.has(HS) : !(0, bS.m)(SS) && !xS.has((0, tS.Fb)(SS))
```

#### 978. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8769` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8509) · [Before (L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8769)

```diff
-   40843: (kk, Fk, Ik) => {
+   40869: (SS, HS, gS) => {
```

#### 979. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8797` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8537) · [Before (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8797)

```diff
-   38726: (kk, Fk, Ik) => {
+   38739: (SS, HS, gS) => {
```

#### 980. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8801` → after: `L8541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8541) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8801)

```diff
-     var Xk = Ik(2801);
+     var tS = gS(3021);
```

#### 981. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8805` → after: `L8545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8545) · [Before (L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8805)

```diff
-       const kk = () => (0, Xk.y)();
+       const SS = () => (0, tS.G)();
```

#### 982. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8807-L8809` → after: `L8547-L8549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8547-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8547-L8549) · [Before (L8807-L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8807-L8809)

```diff
-         memoryBytes: () => (0, Xk.r)().buffer.byteLength,
-         reserveUpFront: Fk => kk().tt(Fk),
-         reserveAhead: Fk => kk().Lt(Fk),
+         memoryBytes: () => (0, tS.B)().buffer.byteLength,
+         reserveUpFront: HS => SS().qf(HS),
+         reserveAhead: HS => SS().Nf(HS),
```

#### 983. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8811` → after: `L8551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8551) · [Before (L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8811)

```diff
-           kk().Zt(Fk)
+           SS().uf(HS)
```

#### 984. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8813` → after: `L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8553) · [Before (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8813)

```diff
-         lowWater: () => Tk[kk().qt()] ?? "none",
+         lowWater: () => bS[SS().xf()] ?? "none",
```

#### 985. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8815` → after: `L8555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8555) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8815)

```diff
-           const Fk = new Uint32Array((0, Xk.r)().buffer, kk, 17),
+           const HS = new Uint32Array((0, tS.B)().buffer, SS, 17),
```

#### 986. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8836-L8838` → after: `L8576-L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8576-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8576-L8578) · [Before (L8836-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8836-L8838)

```diff
-         }(kk().jt()),
-         takeBallast: () => kk().et(),
-         takePressure: () => kk().wt()
+         }(SS().ff()),
+         takeBallast: () => SS().kf(),
+         takePressure: () => SS().af()
```

#### 987. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8842` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8582) · [Before (L8842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8842)

```diff
-   5053: (kk, Fk, Ik) => {
+   5221: (SS, HS, gS) => {
```

#### 988. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8845-L8848` → after: `L8585-L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8585-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8585-L8587) · [Before (L8845-L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8845-L8848)

```diff
-       c: () => yk,
-       d: () => Xk,
-       g: () => wk,
-       k: () => tk,
+       e: () => xS,
+       h: () => tS,
+       j: () => jS,
```

#### 989. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8850-L8853` → after: `L8589-L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8589-L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8589-L8593) · [Before (L8850-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8850-L8853)

```diff
-       p: () => ik,
-       t: () => qk,
-       w: () => Lk,
-       x: () => Zk
+       n: () => bS,
+       r: () => XS,
+       u: () => uS,
+       v: () => IS,
+       y: () => kS
```

#### 990. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8872` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8612) · [Before (L8872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8872)

```diff
-         if ("string" !== typeof Xk) return `${Ik} isn't text.`;
+         if ("string" !== typeof tS) return `${gS} isn't text.`;
```

#### 991. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8881` → after: `L8621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8621) · [Before (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8881)

```diff
-           if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
+           if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
```

#### 992. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8889` → after: `L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8629) · [Before (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8889)

```diff
-             if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
+             if (HS.has(gS)) return `The pack has two files at ${gS}.`;
```

#### 993. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8892` → after: `L8632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8632) · [Before (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8892)

```diff
-           return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
+           return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
```

#### 994. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8917-L8920` → after: `L8657-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8657-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8657-L8660) · [Before (L8917-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8917-L8920)

```diff
-       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
-       if (kk.length > ak) return `A file path is over ${ak} characters.`;
-       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
-       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
+       if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
+       if (SS.length > qS) return `A file path is over ${qS} characters.`;
+       if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
+       return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
```

#### 995. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8953` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L8693) · [Before (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L8953)

```diff
-           return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
+           return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmRecorder.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmRecorder.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864)

#### 1. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5)

```diff
-   61462: (kk, Fk, Ik) => {
-     kk.exports = Ik.p + "static/media/bloxd_wasm_recorder_bg.118ede992f99db643cd2.wasm"
+   61535: (SS, HS, gS) => {
+     SS.exports = gS.p + "static/media/bloxd_wasm_recorder_bg.4315c68e1a3c83441b7f.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7)

```diff
-   61456: (kk, Fk, Ik) => {
+   61532: (SS, HS, gS) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21)

```diff
-       BTk: () => Tk,
-       Uyk: () => nk,
-       yt: () => ik,
+       VbS: () => bS,
+       JxS: () => vS,
+       bf: () => XS,
```

#### 4. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L24-L26` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26)

```diff
-       lt: () => yk,
-       WTk: () => lk,
-       uTk: () => ak
+       Xf: () => xS,
+       AbS: () => NS,
+       ObS: () => qS
```

#### 5. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35)

```diff
-         zk.fgsy(kk, 0)
+         ZS.WLS8(SS, 0)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38)

```diff
-         return 0 !== zk.qQ4m(this.__wbg_ptr)
+         return 0 !== ZS.Ph5s(this.__wbg_ptr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L41-L59` → after: `L41-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59)

```diff
-         return 0 !== zk.U0fg(this.__wbg_ptr, kk, Fk)
-       }
-       bTk(kk) {
-         return zk.NI5y(this.__wbg_ptr, kk) >>> 0
-       }
-       pTk() {
-         zk.deJz(this.__wbg_ptr)
-       }
-       GTk() {
-         return zk.hS4Q(this.__wbg_ptr) >>> 0
-       }
-       nTk() {
-         return zk.KEUx(this.__wbg_ptr)
-       }
-       CTk() {
-         return zk.ZqSH(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         return 0 !== ZS.L8dN(this.__wbg_ptr, SS, HS)
+       }
+       dbS(SS) {
+         return ZS.jK8p(this.__wbg_ptr, SS) >>> 0
+       }
+       JbS() {
+         ZS.fcX5(this.__wbg_ptr)
+       }
+       ZbS() {
+         return ZS.UeO3(this.__wbg_ptr) >>> 0
+       }
+       hbS() {
+         return ZS.wusG(this.__wbg_ptr)
+       }
+       EbS() {
+         return ZS.LSai(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62)

```diff
-         return zk.qUAt(this.__wbg_ptr, kk) >>> 0
+         return ZS.G07e(this.__wbg_ptr, SS) >>> 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65)

```diff
-         const kk = zk.YJ0r();
+         const SS = ZS.ZYpE();
```

#### 10. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L68-L75` → after: `L68-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75)

```diff
-       UTk() {
-         return zk.Qk1Y(this.__wbg_ptr) >>> 0
-       }
-       Cyk() {
-         return zk.VdKM(this.__wbg_ptr) >>> 0
-       }
-       OTk(kk, Fk, Ik) {
-         return 0 !== zk.h8cV(this.__wbg_ptr, kk, Fk, Ik)
+       vbS() {
+         return ZS.NXyw(this.__wbg_ptr) >>> 0
+       }
+       OxS() {
+         return ZS.pA9F(this.__wbg_ptr) >>> 0
+       }
+       wbS(SS, HS, gS) {
+         return 0 !== ZS.Ub3Q(this.__wbg_ptr, SS, HS, gS)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78)

```diff
-         return zk.vB1F(this.__wbg_ptr, kk) >>> 0
+         return ZS.AjQb(this.__wbg_ptr, SS) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81)

```diff
-         return zk.YVQB(this.__wbg_ptr) >>> 0
+         return ZS.rWBP(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107)

```diff
-         }(kk, zk.EOOZ, zk.jFoY),
+         }(SS, ZS.W93h, ZS.GpfK),
```

#### 14. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109)

```diff
-         Tk = zk.kHfM(Ik, Xk, Fk);
+         bS = ZS.dukg(gS, tS, HS);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L114-L122` → after: `L114-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122) · [Before (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122)

```diff
-       zk.BY5A()
-     }
- 
-     function lk() {
-       return zk.PzaC() >>> 0
-     }
- 
-     function ak() {
-       return Jk(zk.KsAP())
+       ZS.hZ8b()
+     }
+ 
+     function NS() {
+       return ZS.pCQD() >>> 0
+     }
+ 
+     function qS() {
+       return CS(ZS.orjq())
```

#### 16. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128)

```diff
-         g1Rq: {
+         LVXy: {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130)

```diff
-           YWRk: function(kk, Fk) {
+           Qv9K: function(SS, HS) {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133)

```diff
-           oQc0: function() {
+           rxNN: function() {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136)

```diff
-           CC7N: function(kk, Fk) {
+           bif2: function(SS, HS) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139)

```diff
-           OeOt: function(kk, Fk) {
+           FmXG: function(SS, HS) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142)

```diff
-           wkYC: function() {
+           San1: function() {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204)

```diff
-       return Vk = kk, zk = kk.exports, sk = Fk, jk = null, zk.jWvk(), zk
+       return hS = SS, ZS = SS.exports, wS = HS, aS = null, ZS.cEHb(), ZS
```

#### 23. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228)

```diff
-           if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
+           if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
```

#### 24. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260)

```diff
-     var Gk = Ik(2803),
-       pk = Ik(6599);
+     var ES = gS(3030),
+       LS = gS(6819);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265)

```diff
-         super((0, Gk.C)(kk, Fk), {
+         super((0, ES.E)(SS, HS), {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279)

```diff
-           return Ik = Fk ??= (0, Gk.G)(kk.url(), (0, pk.c)(kk.name)), await Ik
+           return gS = HS ??= (0, ES.F)(SS.url(), (0, LS.c)(SS.name)), await gS
```

#### 27. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281)

```diff
-           throw Fk === Ik && (Fk = null), kk.error((0, Gk.M)(Xk), Xk)
+           throw HS === gS && (HS = null), SS.error((0, ES.L)(tS), tS)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315)

```diff
-       url: () => new Ik.U(Ik(61462)),
+       url: () => new gS.U(gS(61535)),
```

#### 29. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348)

```diff
-   6599: (kk, Fk, Ik) => {
+   6819: (SS, HS, gS) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352)

```diff
-     var Xk = Ik(2803);
+     var tS = gS(3030);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L354-L365` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365) · [Before (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365)

```diff
-       bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
-       bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
-       bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
-       bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
-       bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
-       bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
-       bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
-       bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
-       bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
-       bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
-       bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
-       bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
+       bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
+       bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
+       bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
+       bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
+       bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
+       bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
+       bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
+       bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
+       bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
+       bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
+       bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
+       bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
```

#### 32. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367)

```diff
-     var ik = Ik(4692);
+     var XS = gS(4812);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373)

```diff
-         onMismatch: ik.C
+         onMismatch: XS.D
```

#### 34. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375)

```diff
-       throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
+       throw new tS.h(`${SS} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplay.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplay.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5)

```diff
-   61472: (kk, Fk, Ik) => {
-     kk.exports = Ik.p + "static/media/bloxd_wasm_replay_bg.7255a4c142c3e369df97.wasm"
+   61553: (SS, HS, gS) => {
+     SS.exports = gS.p + "static/media/bloxd_wasm_replay_bg.c1813b2bd7b433a4dae4.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L7)

```diff
-   6599: (kk, Fk, Ik) => {
+   6819: (SS, HS, gS) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L11)

```diff
-     var Xk = Ik(2803);
+     var tS = gS(3030);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24)

```diff
-       bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
-       bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
-       bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
-       bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
-       bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
-       bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
-       bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
-       bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
-       bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
-       bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
-       bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
-       bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
+       bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
+       bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
+       bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
+       bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
+       bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
+       bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
+       bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
+       bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
+       bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
+       bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
+       bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
+       bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L26)

```diff
-     var ik = Ik(4692);
+     var XS = gS(4812);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L32)

```diff
-         onMismatch: ik.C
+         onMismatch: XS.D
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L34)

```diff
-       throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
+       throw new tS.h(`${SS} has no release digest, so this build refuses it`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L37)

```diff
-   61470: (kk, Fk, Ik) => {
+   61544: (SS, HS, gS) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49)

```diff
-       YTk: () => Tk,
-       Uyk: () => Gk,
-       yt: () => ik,
+       WbS: () => bS,
+       JxS: () => ES,
+       bf: () => XS,
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L52-L54` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54)

```diff
-       lt: () => yk,
-       WTk: () => lk,
-       ATk: () => ak
+       Xf: () => xS,
+       AbS: () => NS,
+       zbS: () => qS
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L63-L66` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66)

```diff
-         Sk.THIR(kk, 0)
-       }
-       rTk(kk, Fk, Ik, Xk, Tk, ik) {
-         Sk.M4zK(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk, ik)
+         JS.HuNd(SS, 0)
+       }
+       BbS(SS, HS, gS, tS, bS, XS) {
+         JS.szDG(this.__wbg_ptr, SS, HS, gS, tS, bS, XS)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L69)

```diff
-         Sk.HyE3(this.__wbg_ptr)
+         JS.kVtB(this.__wbg_ptr)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L72-L90` → after: `L72-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90) · [Before (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90)

```diff
-         Sk.jl3F(this.__wbg_ptr, kk, Fk)
-       }
-       kik(kk, Fk) {
-         Sk.OvR7(this.__wbg_ptr, kk, Fk)
-       }
-       Iik() {
-         return Sk.Tvqz(this.__wbg_ptr) >>> 0
-       }
-       Fik() {
-         return Sk.xXah(this.__wbg_ptr) >>> 0
-       }
-       Xik() {
-         return Sk.bi1S(this.__wbg_ptr) >>> 0
-       }
-       Tik() {
-         return Sk.CMuh(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         JS.mMvx(this.__wbg_ptr, SS, HS)
+       }
+       RbS(SS, HS) {
+         JS.jV8X(this.__wbg_ptr, SS, HS)
+       }
+       obS() {
+         return JS.pw9E(this.__wbg_ptr) >>> 0
+       }
+       TbS() {
+         return JS.rjmr(this.__wbg_ptr) >>> 0
+       }
+       lbS() {
+         return JS.cW5f(this.__wbg_ptr) >>> 0
+       }
+       mbS() {
+         return JS.yAcH(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L93)

```diff
-         const kk = Sk.juNI();
+         const SS = JS.P44B();
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L97-L100` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100)

```diff
-         Sk.Iupi(this.__wbg_ptr)
-       }
-       UTk() {
-         return Sk.rvTy(this.__wbg_ptr) >>> 0
+         JS.Gfbx(this.__wbg_ptr)
+       }
+       vbS() {
+         return JS.HvPe(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L103)

```diff
-         Sk.QVRX(this.__wbg_ptr)
+         JS.bpGO(this.__wbg_ptr)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L106)

```diff
-         Sk.PMcF(this.__wbg_ptr)
+         JS.QRJ6(this.__wbg_ptr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L109-L112` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112)

```diff
-         return Sk.XeNk(this.__wbg_ptr) >>> 0
-       }
-       iik() {
-         Sk.sjOk(this.__wbg_ptr)
+         return JS.ShhX(this.__wbg_ptr) >>> 0
+       }
+       ebS() {
+         JS.cqsI(this.__wbg_ptr)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L115-L120` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120)

```diff
-         Sk.IpU7(this.__wbg_ptr, kk, Fk)
-       }
-       lik(kk) {
-         Sk.KfVQ(this.__wbg_ptr, kk)
-       }
-       DTk(kk, Fk) {
+         JS.RxCE(this.__wbg_ptr, SS, HS)
+       }
+       SXS(SS) {
+         JS.HVz8(this.__wbg_ptr, SS)
+       }
+       MbS(SS, HS) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L127)

```diff
-           }(Fk, Sk.MuxV),
+           }(HS, JS.QDoe),
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L129-L135` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135)

```diff
-         Sk.vZwq(this.__wbg_ptr, kk, Ik, Xk)
-       }
-       hTk(kk, Fk) {
-         Sk.Z4UZ(this.__wbg_ptr, kk, Fk)
-       }
-       yik(kk) {
-         Sk.K0wz(this.__wbg_ptr, kk)
+         JS.y2Pr(this.__wbg_ptr, SS, gS, tS)
+       }
+       sbS(SS, HS) {
+         JS.WmVR(this.__wbg_ptr, SS, HS)
+       }
+       rbS(SS) {
+         JS.Zo42(this.__wbg_ptr, SS)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L138)

```diff
-         return Sk.rBW8(this.__wbg_ptr, kk) >>> 0
+         return JS.iC4k(this.__wbg_ptr, SS) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L141)

```diff
-         return Sk.a1A5(this.__wbg_ptr, kk, Fk) >>> 0
+         return JS.pbUE(this.__wbg_ptr, SS, HS) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L167)

```diff
-         }(kk, Sk.MuxV, Sk.i4te),
+         }(SS, JS.QDoe, JS.PJfL),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L169)

```diff
-         Tk = Sk.lDrG(Ik, Xk, Fk);
+         bS = JS.eCGh(gS, tS, HS);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L174-L182` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182) · [Before (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182)

```diff
-       Sk.gUsI()
-     }
- 
-     function lk() {
-       return Sk.XRbf() >>> 0
-     }
- 
-     function ak() {
-       return xk(Sk.Qbhy())
+       JS.EDO9()
+     }
+ 
+     function NS() {
+       return JS.KgRb() >>> 0
+     }
+ 
+     function qS() {
+       return nS(JS.I0RY())
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L188)

```diff
-         bBny: {
+         as1A: {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L190)

```diff
-           nLog: function(kk, Fk) {
+           HLCA: function(SS, HS) {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L193)

```diff
-           Rujh: function() {
+           tTgF: function() {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L196)

```diff
-           Itzd: function(kk, Fk) {
+           TcAw: function(SS, HS) {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L199)

```diff
-           uqtI: function(kk, Fk) {
+           qOJ7: function(SS, HS) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L202)

```diff
-           YLbG: function() {
+           C0rA: function() {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L265)

```diff
-       return zk = kk, Sk = kk.exports, Vk = Fk, Zk = null, ek = null, Sk.YTrt(), Sk
+       return ZS = SS, JS = SS.exports, hS = HS, kS = null, KS = null, JS.pzcE(), JS
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L289)

```diff
-           if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
+           if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321)

```diff
-     var pk = Ik(2803),
-       uk = Ik(6599);
+     var LS = gS(3030),
+       YS = gS(6819);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L325)

```diff
-         super((0, pk.C)(kk, Fk), {
+         super((0, LS.E)(SS, HS), {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L344)

```diff
-           await Fk, Rk ??= (0, pk.G)(new Ik.U(Ik(61472)), (0, uk.c)("bloxd_wasm_replay"));
+           await HS, yS ??= (0, LS.F)(new gS.U(gS(61553)), (0, YS.c)("bloxd_wasm_replay"));
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplay.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplay.js#L348)

```diff
-             throw Rk = null, new bk((0, pk.M)(ik), ik)
+             throw yS = null, new AS((0, LS.L)(XS), XS)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (100 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4)

```diff
-   37026: (kk, Fk, Ik) => {
+   37014: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6-L7)

```diff
-       c: () => tk,
-       e: () => Zk
+       b: () => fS,
+       d: () => kS
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11)

```diff
-     var Xk = Ik(628),
-       Tk = Ik(41),
-       ik = Ik(36985);
+     var tS = gS(680),
+       bS = gS(45),
+       XS = gS(36973);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24)

```diff
-         qk = await Promise.race([(async () => await Tk.g.setItem(lk, Ik) && Tk.g.setItem(yk, ik))(), (0, Xk.U)(Lk).then((() => !1))]);
+         uS = await Promise.race([(async () => await bS.e.setItem(NS, gS) && bS.e.setItem(xS, XS))(), (0, tS.Q)(IS).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28)

```diff
-         Gj: qk
+         ia: uS
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30)

```diff
-       Tk.m.setItem(ak, tk)
+       bS.h.setItem(qS, fS)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35)

```diff
-       const Fk = Tk.m.getItem(ak);
-       null !== Fk && Tk.m.removeItem(ak);
+       const HS = bS.h.getItem(qS);
+       null !== HS && bS.h.removeItem(qS);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37)

```diff
-         Xk = await Tk.g.getItem(lk),
+         tS = await bS.e.getItem(NS),
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41)

```diff
-       if (null !== Xk && (tk || ("number" !== typeof Xk || Ik - Xk > qk)) && (Zk = Lk && tk && Fk.Gj ? await Tk.g.getItem(yk) : null, await Promise.all([Tk.g.removeItem(lk), Tk.g.removeItem(yk)])), !Lk) return null;
+       if (null !== tS && (fS || ("number" !== typeof tS || gS - tS > uS)) && (kS = IS && fS && HS.ia ? await bS.e.getItem(xS) : null, await Promise.all([bS.e.removeItem(NS), bS.e.removeItem(xS)])), !IS) return null;
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49)

```diff
-   37021: (kk, Fk, Ik) => {
+   37005: (SS, HS, gS) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L51-L53)

```diff
-       b: () => Xk,
-       f: () => ik,
-       g: () => Tk
+       d: () => tS,
+       e: () => XS,
+       f: () => bS
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65)

```diff
-   36985: (kk, Fk, Ik) => {
+   36973: (SS, HS, gS) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L68-L69)

```diff
-       e: () => qk,
-       i: () => ak
+       c: () => uS,
+       f: () => qS
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71)

```diff
-     var Xk = Ik(34);
+     var tS = gS(31);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174)

```diff
-       const Ik = null !== (Fk = kk.timeoutMs) && void 0 !== Fk ? Fk : "Error" === kk.type ? Tk : ik;
-       Xk.g.GL("showBottomMessage", {
+       const gS = null !== (HS = SS.timeoutMs) && void 0 !== HS ? HS : "Error" === SS.type ? bS : XS;
+       tS.k.cj("showBottomMessage", {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181)

```diff
-   37034: (kk, Fk, Ik) => {
+   37023: (SS, HS, gS) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184)

```diff
-       e: () => Xk,
-       i: () => Tk
+       b: () => tS,
+       f: () => bS
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237)

```diff
-   37042: (kk, Fk, Ik) => {
+   37029: (SS, HS, gS) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L239-L240` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L240) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L240)

```diff
-       b: () => qk,
-       f: () => tk,
+       d: () => uS,
+       g: () => fS,
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(34),
-       ik = Ik(37034);
+     var tS = gS(24),
+       bS = gS(31),
+       XS = gS(37023);
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252)

```diff
-         of ik.i) kk[Fk] = !0;
+         of XS.f) SS[HS] = !0;
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258)

```diff
-       Tk.g.GL("replayViewer|uiVisibilityChanged")
+       bS.k.cj("replayViewer|uiVisibilityChanged")
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269)

```diff
-       }, "nametag" === kk && Xk.d.set({
+       }, "nametag" === SS && tS.b.set({
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275)

```diff
-       lk = yk(), Xk.d.set({
+       NS = xS(), tS.b.set({
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280)

```diff
-   39257: (kk, Fk, Ik) => {
+   39263: (SS, HS, gS) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282)

```diff
-       e: () => nk
+       b: () => vS
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L284-L287` → after: `L284-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287) · [Before (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287)

```diff
-     var Xk = Ik(1682),
-       Tk = Ik(1324),
-       ik = Ik(58),
-       yk = Ik(1055),
+     var tS = gS(1860),
+       bS = gS(1435),
+       XS = gS(64),
+       xS = gS(1121),
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290)

```diff
-       ak = Ik(1406),
-       qk = Ik(95);
+       qS = gS(1528),
+       uS = gS(104);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295)

```diff
-       return "webm" === kk ? Lk : tk
+       return "webm" === SS ? IS : fS
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307)

```diff
-     var wk = Ik(1096);
+     var jS = gS(1181);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${kk}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${SS}.`
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379)

```diff
-             children: (0, wk.jsx)(ak.G, {
+             children: (0, jS.jsx)(qS.L, {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451)

```diff
-           children: [(0, wk.jsx)(ak.m, {
+           children: [(0, jS.jsx)(qS.p, {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461)

```diff
-           }), (0, wk.jsx)(ak.G, {
+           }), (0, jS.jsx)(qS.L, {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L471-L473` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473) · [Before (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473)

```diff
-     var Kk = Ik(4857),
-       Qk = Ik(37034),
-       sk = Ik(37042);
+     var QS = gS(5005),
+       DS = gS(37023),
+       wS = gS(37029);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478)

```diff
-         const kk = (0, sk.b)();
+         const SS = (0, wS.d)();
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483)

```diff
-           of Qk.i)
+           of DS.f)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512)

```diff
-     var vk = Ik(39087);
+     var OS = gS(39106);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516)

```diff
-       kk.holdInput(!1), (0, vk.f)(!1)
+       SS.holdInput(!1), (0, OS.g)(!1)
```

#### 40. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520)

```diff
-       if ((0, vk.b)() || Ek) return;
+       if ((0, OS.e)() || dS) return;
```

#### 41. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562)

```diff
-       const Lk = null !== (Fk = null === (Ik = ik.startFailure) || void 0 === Ik ? void 0 : Ik.call(ik)) && void 0 !== Fk ? Fk : null;
+       const IS = null !== (HS = null === (gS = XS.startFailure) || void 0 === gS ? void 0 : gS.call(XS)) && void 0 !== HS ? HS : null;
```

#### 42. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568)

```diff
-           return !(0, vk.b)() && ((0, vk.f)(!0), kk.holdInput(!0), !0)
+           return !(0, OS.e)() && ((0, OS.g)(!0), SS.holdInput(!0), !0)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572)

```diff
-         tk = await Sk(yk.includeUi, (() => ik.canvas()), ik.WG)
+         fS = await JS(xS.includeUi, (() => XS.canvas()), XS.YL)
```

#### 44. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585)

```diff
-         ek = ik.playbackSpeed(), ik.closeViewer(), ik.setPlaybackSpeed(1), ik.pause(), ik.seekToTick(null !== lk && void 0 !== lk ? lk : 0);
+         KS = XS.playbackSpeed(), XS.closeViewer(), XS.setPlaybackSpeed(1), XS.pause(), XS.seekToTick(null !== NS && void 0 !== NS ? NS : 0);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593)

```diff
-           return null !== Ik && void 0 !== Ik ? Ik : null
+           return null !== gS && void 0 !== gS ? gS : null
```

#### 46. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600)

```diff
-           if (!Fk) throw new Error(`No MediaRecorder mime type available for ${kk}`);
+           if (!HS) throw new Error(`No MediaRecorder mime type available for ${SS}`);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643)

```diff
-         const Lk = null !== (sk = null === (nk = ik.playbackFailure) || void 0 === nk ? void 0 : nk.call(ik)) && void 0 !== sk ? sk : null;
+         const IS = null !== (wS = null === (vS = XS.playbackFailure) || void 0 === vS ? void 0 : vS.call(XS)) && void 0 !== wS ? wS : null;
```

#### 48. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646)

```diff
-           subtitle: `${Lk} Nothing was saved.`
+           subtitle: `${IS} Nothing was saved.`
```

#### 49. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L655-L656` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656)

```diff
-           if (kk) return `${kk.replace(/\.bloxdreplay$/i,"")}.${Ik}`;
-           return `bloxd-replay-${Date.now()}.${Ik}`
+           if (SS) return `${SS.replace(/\.bloxdreplay$/i,"")}.${gS}`;
+           return `bloxd-replay-${Date.now()}.${gS}`
```

#### 50. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689)

```diff
-   4857: (kk, Fk, Ik) => {
+   5005: (SS, HS, gS) => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L696-L698` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698)

```diff
-     var Xk, Tk = Ik(4863),
-       ik = Ik(3378),
-       yk = Ik(4636);
+     var tS, bS = gS(5011),
+       XS = gS(3577),
+       xS = gS(4775);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703)

```diff
-       if (lk.ctx || !lk.usingWebAudio || "undefined" === typeof AudioContext || !(0, yk.h)()) return;
+       if (NS.ctx || !NS.usingWebAudio || "undefined" === typeof AudioContext || !(0, xS.k)()) return;
```

#### 53. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715)

```diff
-       Tk.gain.setValueAtTime(lk._muted ? 0 : null !== (kk = lk._volume) && void 0 !== kk ? kk : 1, Xk.currentTime), Tk.connect(Xk.destination), lk.ctx = Xk, lk.masterGain = Tk, null === (Fk = lk._setup) || void 0 === Fk || Fk.call(lk)
+       bS.gain.setValueAtTime(NS._muted ? 0 : null !== (SS = NS._volume) && void 0 !== SS ? SS : 1, tS.currentTime), bS.connect(tS.destination), NS.ctx = tS, NS.masterGain = bS, null === (HS = NS._setup) || void 0 === HS || HS.call(NS)
```

#### 54. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742)

```diff
-     }, (0, yk.h)() && (lk._unlockAudio = () => {
+     }, (0, xS.k)() && (NS._unlockAudio = () => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767)

```diff
-           } else "afterPaint" === Xk && (Xk = "queued", (0, ik.b)(Fk.timeStamp, (() => {
+           } else "afterPaint" === tS && (tS = "queued", (0, XS.d)(HS.timeStamp, (() => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775)

```diff
-       for (const ik of yk.b) document.addEventListener(ik, qk, {
+       for (const XS of xS.e) document.addEventListener(XS, uS, {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809)

```diff
-   42586: (kk, Fk, Ik) => {
+   42596: (SS, HS, gS) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L811-L812` → after: `L811-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812) · [Before (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812)

```diff
-       d: () => Xk,
-       h: () => Tk
+       c: () => tS,
+       f: () => bS
```

#### 59. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821)

```diff
-   60609: (kk, Fk, Ik) => {
+   60676: (SS, HS, gS) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L826-L831` → after: `L826-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831) · [Before (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831)

```diff
-     var Xk = Ik(36985),
-       Tk = Ik(37026),
-       ik = Ik(37021),
-       yk = Ik(37042),
-       lk = Ik(4797),
-       ak = Ik(42586);
+     var tS = gS(36973),
+       bS = gS(37014),
+       XS = gS(37005),
+       xS = gS(37029),
+       NS = gS(4926),
+       qS = gS(42596);
```

#### 61. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833)

```diff
-       Lk = new Set(["ke"]);
+       IS = new Set(["bK"]);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837)

```diff
-         this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = SS, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846)

```diff
-         return null !== this.lastView && this.lastView.state !== lk.kd.None
+         return null !== this.lastView && this.lastView.state !== NS.qd.None
```

#### 64. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876)

```diff
-           tk = await qk.open(kk, (() => (0, Tk.c)(kk, Fk)))
+           fS = await uS.open(SS, (() => (0, bS.b)(SS, HS)))
```

#### 65. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888)

```diff
-               case lk.ad.ModuleTrap:
+               case NS.ld.ModuleTrap:
```

#### 66. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L890)

```diff
-               case lk.ad.ModuleLoad:
+               case NS.ld.ModuleLoad:
```

#### 67. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L892)

```diff
-               case lk.ad.TooLarge:
+               case NS.ld.TooLarge:
```

#### 68. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899)

```diff
-         return this.rejectSave(new Error(Xk.b.saveClosed.text)), this.fileName = null !== (Ik = null !== (ik = Fk.fileName) && void 0 !== ik ? ik : null === (yk = Fk.fileHandle) || void 0 === yk ? void 0 : yk.name) && void 0 !== Ik ? Ik : null, this.fileHandle = null !== (ak = Fk … [truncated]
+         return this.rejectSave(new Error(tS.b.saveClosed.text)), this.fileName = null !== (gS = null !== (XS = HS.fileName) && void 0 !== XS ? XS : null === (xS = HS.fileHandle) || void 0 === xS ? void 0 : xS.name) && void 0 !== gS ? gS : null, this.fileHandle = null !== (qS = HS … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907)

```diff
-         this.holds.has("ke") || this.deps.client.play()
+         this.holds.has("bK") || this.deps.client.play()
```

#### 70. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913)

```diff
-         this.isOpen && this.pause(), this.hold("ke")
+         this.isOpen && this.pause(), this.hold("bK")
```

#### 71. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918)

```diff
-         null !== Ik && (Fk || kk < Ik.Dt) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
+         null !== gS && (HS || SS < gS.mf) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(SS, HS)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928)

```diff
-         null !== kk && kk.state !== lk.kd.None && this.setCameraMode(ak.d[(ak.d.indexOf(kk.cameraMode) + 1) % ak.d.length])
+         null !== SS && SS.state !== NS.qd.None && this.setCameraMode(qS.c[(qS.c.indexOf(SS.cameraMode) + 1) % qS.c.length])
```

#### 73. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954)

```diff
-           this.pendingSave = Ik, this.editsAtSave = this.edits, this.deps.client.save((0, ak.h)()).then((kk => {
+           this.pendingSave = gS, this.editsAtSave = this.edits, this.deps.client.save((0, qS.f)()).then((SS => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957)

```diff
-             this.pendingSave === Ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
+             this.pendingSave === gS && this.rejectSave(SS instanceof Error ? SS : new Error(String(SS)))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975)

```diff
-         this.fileHandle = kk, this.fileName = null !== (Ik = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Xk ? Xk : Fk) && void 0 !== Ik ? Ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = SS, this.fileName = null !== (gS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.name) && void 0 !== tS ? tS : HS) && void 0 !== gS ? gS : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L984-L985` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985)

```diff
-         this.lastView = Xk, this.opening && null !== Xk && Xk.state !== lk.kd.None && Xk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Xk && Xk.state === lk.kd.Cropping ? this.crop … [truncated]
-         const ik = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Ik = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : 0);
+         this.lastView = tS, this.opening && null !== tS && tS.state !== NS.qd.None && tS.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xS.g)()), this.cropAsked ? (this.cropAsked = !1, null !== tS && tS.state === NS.qd.Cropping ? this.crop … [truncated]
+         const XS = 0 === this.settleFrames && 0 === (null !== (SS = null === (HS = (gS = this.deps).meshPending) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : 0);
```

#### 77. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992)

```diff
-         (0, yk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, xS.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 78. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996)

```diff
-           case lk.ad.TooLarge:
+           case NS.ld.TooLarge:
```

#### 79. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L998-L999` → after: `L998-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999) · [Before (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999)

```diff
-           case lk.ad.Open:
-           case lk.ad.NothingStaged: {
+           case NS.ld.Open:
+           case NS.ld.NothingStaged: {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001)

```diff
-             const Fk = (0, ik.f)(kk.version) ? Xk.b.replayTooOld : Xk.b.cantOpen;
+             const HS = (0, XS.e)(SS.version) ? tS.b.replayTooOld : tS.b.cantOpen;
```

#### 81. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1005-L1006` → after: `L1005-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006)

```diff
-           case lk.ad.Crop:
-             if (kk.code === lk._c.Busy) {
+           case NS.ld.Crop:
+             if (SS.code === NS.jd.Busy) {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1016-L1019` → after: `L1016-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019) · [Before (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019)

```diff
-           case lk.ad.ModuleTrap:
-           case lk.ad.ModuleLoad:
-           case lk.ad.Port:
-             this.moduleEnded(kk.reason === lk.ad.ModuleTrap ? Xk.b.coreStopped : Xk.b.cantOpen);
+           case NS.ld.ModuleTrap:
+           case NS.ld.ModuleLoad:
+           case NS.ld.Port:
+             this.moduleEnded(SS.reason === NS.ld.ModuleTrap ? tS.b.coreStopped : tS.b.cantOpen);
```

#### 83. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021)

```diff
-           case lk.ad.NotLive:
+           case NS.ld.NotLive:
```

#### 84. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${SS.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 85. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068)

```diff
-   60606: (kk, Fk, Ik) => {
+   60670: (SS, HS, gS) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1074-L1077` → after: `L1074-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077) · [Before (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077)

```diff
-     var Xk = Ik(39257),
-       Tk = Ik(60609),
-       ik = Ik(4797),
-       yk = Ik(2341);
+     var tS = gS(39263),
+       bS = gS(60676),
+       XS = gS(4926),
+       xS = gS(2526);
```

#### 87. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084)

```diff
-       return (null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ik.kd.Cropping || kk.eq.includes("crop")
+       return (null === (HS = SS.view) || void 0 === HS ? void 0 : HS.state) === XS.qd.Cropping || SS.Ku.includes("crop")
```

#### 88. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088)

```diff
-       return (0, Xk.e)((() => function(kk) {
+       return (0, tS.b)((() => function(SS) {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091)

```diff
-           ek = null !== (Fk = null === jk || void 0 === jk ? void 0 : jk.view) && void 0 !== Fk ? Fk : null,
+           KS = null !== (HS = null === aS || void 0 === aS ? void 0 : aS.view) && void 0 !== HS ? HS : null,
```

#### 90. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1093-L1094` → after: `L1093-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094) · [Before (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094)

```diff
-         if (!jk || !ek || ek.state === ik.kd.None || 0 === ek.totalTicks || !wk || Lk(jk)) return null;
-         const Hk = null !== (Ik = kk.now) && void 0 !== Ik ? Ik : () => performance.now(),
+         if (!aS || !KS || KS.state === XS.qd.None || 0 === KS.totalTicks || !jS || IS(aS)) return null;
+         const GS = null !== (gS = SS.now) && void 0 !== gS ? gS : () => performance.now(),
```

#### 91. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098)

```diff
-             return Fk === jk && Fk.id === Jk && Fk.isOpen ? Fk : null
+             return HS === aS && HS.id === CS && HS.isOpen ? HS : null
```

#### 92. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100)

```diff
-           Pk = Math.min(null !== (Xk = null === (Tk = ek.mark) || void 0 === Tk ? void 0 : Tk.outTick) && void 0 !== Xk ? Xk : 1 / 0, ek.totalTicks - 1);
+           PS = Math.min(null !== (tS = null === (bS = KS.mark) || void 0 === bS ? void 0 : bS.outTick) && void 0 !== tS ? tS : 1 / 0, KS.totalTicks - 1);
```

#### 93. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105)

```diff
-           return (null === (kk = xk()) || void 0 === kk || null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ik.kd.Playing
+           return (null === (SS = nS()) || void 0 === SS || null === (HS = SS.view) || void 0 === HS ? void 0 : HS.state) === XS.qd.Playing
```

#### 94. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1108-L1109` → after: `L1108-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109)

```diff
-           WG: ik.zd,
-           playbackMarkInTick: null !== (tk = null === (Zk = ek.mark) || void 0 === Zk ? void 0 : Zk.inTick) && void 0 !== tk ? tk : null,
+           YL: XS.Bd,
+           playbackMarkInTick: null !== (fS = null === (kS = KS.mark) || void 0 === kS ? void 0 : kS.inTick) && void 0 !== fS ? fS : null,
```

#### 95. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116)

```diff
-             return null !== (kk = null === (Fk = xk()) || void 0 === Fk ? void 0 : Fk.fileName) && void 0 !== kk ? kk : null
+             return null !== (SS = null === (HS = nS()) || void 0 === HS ? void 0 : HS.fileName) && void 0 !== SS ? SS : null
```

#### 96. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120)

```diff
-             return null !== (kk = null === (Fk = xk()) || void 0 === Fk || null === (Ik = Fk.view) || void 0 === Ik ? void 0 : Ik.speed) && void 0 !== kk ? kk : 1
+             return null !== (SS = null === (HS = nS()) || void 0 === HS || null === (gS = HS.view) || void 0 === gS ? void 0 : gS.speed) && void 0 !== SS ? SS : 1
```

#### 97. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141)

```diff
-               null === Ik ? (clearInterval(Fk), kk()) : Ik.eq.includes("seek") || (clearInterval(Fk), setTimeout(kk, qk))
+               null === gS ? (clearInterval(HS), SS()) : gS.Ku.includes("seek") || (clearInterval(HS), setTimeout(SS, uS))
```

#### 98. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1146` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146)

```diff
-             return null !== Kk && null !== xk() && (!!sk() || !Qk && (null !== (kk = null === (Fk = xk()) || void 0 === Fk || null === (Ik = Fk.view) || void 0 === Ik ? void 0 : Ik.Dt) && void 0 !== kk ? kk : 0) < Pk && Hk() - Kk < lk)
+             return null !== QS && null !== nS() && (!!wS() || !DS && (null !== (SS = null === (HS = nS()) || void 0 === HS || null === (gS = HS.view) || void 0 === gS ? void 0 : gS.mf) && void 0 !== SS ? SS : 0) < PS && GS() - QS < NS)
```

#### 99. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160)

```diff
-             return null === Ik ? "The replay closed before the video finished." : (null !== (kk = null === (Fk = Ik.view) || void 0 === Fk ? void 0 : Fk.Dt) && void 0 !== kk ? kk : 0) >= Pk ? null : Qk ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
+             return null === gS ? "The replay closed before the video finished." : (null !== (SS = null === (HS = gS.view) || void 0 === HS ? void 0 : HS.mf) && void 0 !== SS ? SS : 0) >= PS ? null : DS ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1169)

```diff
-           holdInput: yk.e
+           holdInput: xS.f
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445)

#### 1. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L77)

```diff
-         const ek = ak ? 1 << ak : Tk,
+         const KS = qS ? 1 << qS : bS,
```

#### 2. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L85)

```diff
-         const Jk = new Ik((1 == Fk ? wk || Hk : Fk ? 0 : Hk) + 12);
+         const CS = new gS((1 == HS ? jS || GS : HS ? 0 : GS) + 12);
```
