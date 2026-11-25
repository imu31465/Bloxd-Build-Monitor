# Changed — Bundle Modifications Report (Part 134 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `134 / 141` (**373** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 133](part-133.md) · [Part 135 →](part-135.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (997 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 292. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2981` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L2981) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L2981)

```diff
-                 tt || (zt.delete(qt), et(ge.Fb.TouchCancel, qt, 0, 0, Vt))
+                 BB || (XB.delete(JB), IB(DI.vb.TouchCancel, JB, 0, 0, ZB))
```

#### 293. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2987-L2988` → after: `L2987-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2987-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L2987-L2988) · [Before (L2987-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L2987-L2988)

```diff
-             if (tt === ge.Fb.TouchStart && kt(Vt) && Ft.add(Vt.identifier), Ft.has(Vt.identifier)) {
-               tt !== ge.Fb.TouchEnd && tt !== ge.Fb.TouchCancel || Ft.delete(Vt.identifier);
+             if (BB === DI.vb.TouchStart && rB(ZB) && RB.add(ZB.identifier), RB.has(ZB.identifier)) {
+               BB !== DI.vb.TouchEnd && BB !== DI.vb.TouchCancel || RB.delete(ZB.identifier);
```

#### 294. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2993` → after: `L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L2993) · [Before (L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L2993)

```diff
-             tt === ge.Fb.TouchStart ? dt && zt.add(Dt) : tt !== ge.Fb.TouchMove && zt.delete(Dt)
+             BB === DI.vb.TouchStart ? vB && XB.add(oB) : BB !== DI.vb.TouchMove && XB.delete(oB)
```

#### 295. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2996` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L2996) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L2996)

```diff
-         rt = ot(ge.Fb.TouchStart);
+         eB = LB(DI.vb.TouchStart);
```

#### 296. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L2998` → after: `L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L2998) · [Before (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L2998)

```diff
-         tt.preventDefault(), (0, eO.e)() || (Vt.touchStarting(), rt(tt))
+         BB.preventDefault(), (0, BT.d)() || (ZB.touchStarting(), eB(BB))
```

#### 297. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3001` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3001) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3001)

```diff
-       }), qt(tt, "touchmove", ot(ge.Fb.TouchMove), Dt), qt(tt, "touchend", ot(ge.Fb.TouchEnd), Dt), qt(tt, "touchcancel", ot(ge.Fb.TouchCancel), Dt);
+       }), JB(BB, "touchmove", LB(DI.vb.TouchMove), oB), JB(BB, "touchend", LB(DI.vb.TouchEnd), oB), JB(BB, "touchcancel", LB(DI.vb.TouchCancel), oB);
```

#### 298. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3004` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3004) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3004)

```diff
-           mt(tt, Ut(et.pointerId), et.clientX - yt, et.clientY - Nt, (0, pV.r)(qO(et), et.timeStamp))
+           GB(BB, uB(IB.pointerId), IB.clientX - qB, IB.clientY - yB, (0, bZ.v)(TT(IB), IB.timeStamp))
```

#### 299. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3007` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3007) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3007)

```diff
-         bt = et.pointerType, "mouse" === et.pointerType && et.target !== tt && Vt.viewShown() && (0, Fe.$)()
+         WB = IB.pointerType, "mouse" === IB.pointerType && IB.target !== BB && ZB.viewShown() && (0, RI.T)()
```

#### 300. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3009` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3009) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3009)

```diff
-         "pen" === tt.pointerType && 0 === tt.button && (0, Fe.s)() && (0, gV.r)() && (tt.preventDefault(), (0, eO.e)() || (Lt.set(tt.pointerId, {
+         "pen" === BB.pointerType && 0 === BB.button && (0, RI.p)() && (0, DZ.w)() && (BB.preventDefault(), (0, BT.d)() || (PB.set(BB.pointerId, {
```

#### 301. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3013` → after: `L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3013) · [Before (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3013)

```diff
-         }), Vt.touchStarting(), At(ge.Fb.TouchStart, tt)))
+         }), ZB.touchStarting(), fB(DI.vb.TouchStart, BB)))
```

#### 302. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3017` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3017) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3017)

```diff
-         bt = tt.pointerType, Lt.has(tt.pointerId) && At(ge.Fb.TouchMove, tt), "mouse" !== tt.pointerType && Jt() && Ct(tt, 0, 0)
+         WB = BB.pointerType, PB.has(BB.pointerId) && fB(DI.vb.TouchMove, BB), "mouse" !== BB.pointerType && dB() && CB(BB, 0, 0)
```

#### 303. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3022)

```diff
-       qt(window, "pointerup", it(ge.Fb.TouchEnd), Dt), qt(window, "pointercancel", it(ge.Fb.TouchCancel), Dt);
+       JB(window, "pointerup", lB(DI.vb.TouchEnd), oB), JB(window, "pointercancel", lB(DI.vb.TouchCancel), oB);
```

#### 304. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3029` → after: `L3029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3029) · [Before (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3029)

```diff
-           null !== tt && et(ge.Fb.Resize, 0, tt.cssWidth, tt.cssHeight, (0, pV.i)(tt.renderScale)), Mt(), Vt.resized(), 0 === Yt && (Yt = requestAnimationFrame(Bt))
+           null !== BB && IB(DI.vb.Resize, 0, BB.cssWidth, BB.cssHeight, (0, bZ.m)(BB.renderScale)), UB(), ZB.resized(), 0 === AB && (AB = requestAnimationFrame(tB))
```

#### 305. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3034` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3034) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3034)

```diff
-         tt.isTrusted && (et(ge.Fb.Focus, 0, 0, 0, 0), Vt.viewShown() && (0, Fe.$)())
+         BB.isTrusted && (IB(DI.vb.Focus, 0, 0, 0, 0), ZB.viewShown() && (0, RI.T)())
```

#### 306. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3039` → after: `L3039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3039) · [Before (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3039)

```diff
-           (0, Fe.O)(!1), vt = 0
+           (0, RI.G)(!1), OB = 0
```

#### 307. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3047` → after: `L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3047) · [Before (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3047)

```diff
-         xt(), (0, Fe.o)();
+         xB(), (0, RI.l)();
```

#### 308. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3053` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3053) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3053)

```diff
-           for (const [Vt, Ot] of Lt) et(ge.Fb.TouchCancel, Ut(Vt), Ot.x, Ot.y, (0, pV.r)(0, tt));
+           for (const [ZB, TB] of PB) IB(DI.vb.TouchCancel, uB(ZB), TB.x, TB.y, (0, bZ.v)(0, BB));
```

#### 309. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3055` → after: `L3055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3055) · [Before (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3055)

```diff
-         })(Ot.timeStamp), et(ge.Fb.Blur, ge.p.KeepTouches, 0, 0, 0)), jt && Ot.isTrusted && (clearTimeout(st), st = window.setTimeout((() => {
+         })(TB.timeStamp), IB(DI.vb.Blur, DI.q.KeepTouches, 0, 0, 0)), kB && TB.isTrusted && (clearTimeout(KB), KB = window.setTimeout((() => {
```

#### 310. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3061` → after: `L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3061) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3061)

```diff
-           document.activeElement instanceof HTMLIFrameElement && (0, gV.r)() && Vt.viewShown() && tt.focus({
+           document.activeElement instanceof HTMLIFrameElement && (0, DZ.w)() && ZB.viewShown() && BB.focus({
```

#### 311. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3070` → after: `L3070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3070) · [Before (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3070)

```diff
-         jt && et.isTrusted && !document.hasFocus() && (0, gV.r)() && Vt.viewShown() && (window.focus(), tt.focus({
+         kB && IB.isTrusted && !document.hasFocus() && (0, DZ.w)() && ZB.viewShown() && (window.focus(), BB.focus({
```

#### 312. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3074` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3074) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3074)

```diff
-         document.hidden ? (et(ge.Fb.Blur, 0, 0, 0, 0), Tt()) : document.hasFocus() && et(ge.Fb.Focus, 0, 0, 0, 0)
+         document.hidden ? (IB(DI.vb.Blur, 0, 0, 0, 0), EB()) : document.hasFocus() && IB(DI.vb.Focus, 0, 0, 0, 0)
```

#### 313. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3077-L3078` → after: `L3077-L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3077-L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3077-L3078) · [Before (L3077-L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3077-L3078)

```diff
-       }), Ot.push((0, eO.k)((() => {
-         xt(), et(ge.Fb.Blur, ge.p.Release, 0, 0, 0), Vt.keysReleased(), ft(), Wt = 0, Tt(), et(ge.Fb.Joystick, 0, 0, 0, 0), document.hasFocus() && et(ge.Fb.Focus, 0, 0, 0, 0)
+       }), TB.push((0, BT.j)((() => {
+         xB(), IB(DI.vb.Blur, DI.q.Release, 0, 0, 0), ZB.keysReleased(), NB(), YB = 0, EB(), IB(DI.vb.Joystick, 0, 0, 0, 0), document.hasFocus() && IB(DI.vb.Focus, 0, 0, 0, 0)
```

#### 314. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3081` → after: `L3081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3081) · [Before (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3081)

```diff
-         te = () => nt && !(0, Fe.s)() ? ge.yc.Lockless : ge.yc.Released,
+         SB = () => VB && !(0, RI.p)() ? DI.pc.Lockless : DI.pc.Released,
```

#### 315. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3083` → after: `L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3083) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3083)

```diff
-           dt() && (ct = !1, Rt = !1), et(ge.Fb.PointerLock, dt() ? ge.yc.Locked : te(), 0, 0, 0), (0, Fe.T)(dt())
+           vB() && (pB = !1, aB = !1), IB(DI.vb.PointerLock, vB() ? DI.pc.Locked : SB(), 0, 0, 0), (0, RI.L)(vB())
```

#### 316. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3088` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3088) · [Before (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3088)

```diff
-         ct ||= Rt, Rt = !1, (0, Fe.x)()
+         pB ||= aB, aB = !1, (0, RI.v)()
```

#### 317. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3091-L3093` → after: `L3091-L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3091-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3091-L3093) · [Before (L3091-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3091-L3093)

```diff
-       }), nt && Ot.push((0, Fe.B)((() => {
-         et(ge.Fb.PointerLock, te(), 0, 0, 0)
-       }))), pt(), et(document.hasFocus() ? ge.Fb.Focus : ge.Fb.Blur, 0, 0, 0, 0), ee(), () => {
+       }), VB && TB.push((0, RI.z)((() => {
+         IB(DI.vb.PointerLock, SB(), 0, 0, 0)
+       }))), bB(), IB(document.hasFocus() ? DI.vb.Focus : DI.vb.Blur, 0, 0, 0, 0), BI(), () => {
```

#### 318. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3097-L3100` → after: `L3097-L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3097-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3097-L3100) · [Before (L3097-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3097-L3100)

```diff
-     var EO = Vt(34326),
-       fO = Vt(34317),
-       wO = Vt(2078);
-     const yO = new Map(VO.c.map(((tt, et) => [tt, et]))),
+     var zT = ZB(34126),
+       FT = ZB(34110),
+       NT = ZB(2070);
+     const gT = new Map(IT.d.map(((BB, IB) => [BB, IB]))),
```

#### 319. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3105` → after: `L3105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3105) · [Before (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3105)

```diff
-       return `${wO.b}${tt}`
+       return `${NT.c}${BB}`
```

#### 320. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3112` → after: `L3112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3112) · [Before (L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3112)

```diff
-         const tt = "string" === typeof Vt ? VO.h[Vt] : void 0;
+         const BB = "string" === typeof ZB ? IT.i[ZB] : void 0;
```

#### 321. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3120` → after: `L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3120) · [Before (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3120)

```diff
-         for (const [tt, et] of Object.entries(VO.e)) this.keys.set(tt, et);
+         for (const [BB, IB] of Object.entries(IT.f)) this.keys.set(BB, IB);
```

#### 322. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3135` → after: `L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3135) · [Before (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3135)

```diff
-             Dt = Array.isArray(qt) ? JO(qt) : VO.e[Vt];
+             oB = Array.isArray(JB) ? dT(JB) : IT.f[ZB];
```

#### 323. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3142-L3143` → after: `L3142-L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3142-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3142-L3143) · [Before (L3142-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3142-L3143)

```diff
-           Vt(ge.Fb.Binding, 0, 0, 0, Ot | ge.l.Clear << 8);
-           for (const Dt of [...et, ...null !== (qt = VO.g[tt]) && void 0 !== qt ? qt : []]) {
+           ZB(DI.vb.Binding, 0, 0, 0, TB | DI.n.Clear << 8);
+           for (const oB of [...IB, ...null !== (JB = IT.h[BB]) && void 0 !== JB ? JB : []]) {
```

#### 324. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3145` → after: `L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3145) · [Before (L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3145)

```diff
-             Vt(ge.Fb.Binding, Dt, 0, 0, Ot | ge.l.Add << 8)
+             ZB(DI.vb.Binding, oB, 0, 0, TB | DI.n.Add << 8)
```

#### 325. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3152-L3153` → after: `L3152-L3153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3152-L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3152-L3153) · [Before (L3152-L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3152-L3153)

```diff
-         for (const Ot of VO.i)
-           for (const et of null !== (tt = this.keys.get(VO.c[Ot])) && void 0 !== tt ? tt : []) {
+         for (const TB of IT.k)
+           for (const IB of null !== (BB = this.keys.get(IT.d[TB])) && void 0 !== BB ? BB : []) {
```

#### 326. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3159)

```diff
-           for (const tt of null !== (et = this.keys.get(Ot)) && void 0 !== et ? et : []) {
+           for (const BB of null !== (IB = this.keys.get(TB)) && void 0 !== IB ? IB : []) {
```

#### 327. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3169)

```diff
-             for (const et of null !== (Vt = this.keys.get(tt)) && void 0 !== Vt ? Vt : []) {
+             for (const IB of null !== (ZB = this.keys.get(BB)) && void 0 !== ZB ? ZB : []) {
```

#### 328. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3176-L3177` → after: `L3176-L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3176-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3176-L3177) · [Before (L3176-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3176-L3177)

```diff
-     var uO = Vt(4971),
-       KO = Vt(36839);
+     var QT = ZB(4978),
+       sT = ZB(36602);
```

#### 329. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3181` → after: `L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3181) · [Before (L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3181)

```diff
-       return "inGame" === ee.b.get("gameState") && !(0, xV.u)()
+       return "inGame" === BI.d.get("gameState") && !(0, xZ.p)()
```

#### 330. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3189)

```diff
-         return Vt ? `${tt} ${Vt}` : String(tt)
+         return ZB ? `${BB} ${ZB}` : String(BB)
```

#### 331. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3195` → after: `L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3195) · [Before (L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3195)

```diff
-       tt === ge.db.InputAction && Ot === ge.yb && cO.push(et.getUint32(Vt, !0))
+       BB === DI.X.InputAction && TB === DI.tb && pT.push(IB.getUint32(ZB, !0))
```

#### 332. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3197-L3199` → after: `L3197-L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3197-L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3197-L3199) · [Before (L3197-L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3197-L3199)

```diff
-     var IO = Vt(41106),
-       PO = Vt(1289),
-       ZO = Vt(37078);
+     var HT = ZB(40946),
+       MT = ZB(1254),
+       jT = ZB(36869);
```

#### 333. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3215` → after: `L3215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3215) · [Before (L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3215)

```diff
-       return (null !== (et = null === (Vt = LO[qt]) || void 0 === Vt ? void 0 : Vt[Dt]) && void 0 !== et ? et : tt).replace(/\{\{(\w+)\}\}/g, ((tt, et) => {
+       return (null !== (IB = null === (ZB = PT[JB]) || void 0 === ZB ? void 0 : ZB[oB]) && void 0 !== IB ? IB : BB).replace(/\{\{(\w+)\}\}/g, ((BB, IB) => {
```

#### 334. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3217)

```diff
-         return null !== (Vt = Ot[et]) && void 0 !== Vt ? Vt : tt
+         return null !== (ZB = TB[IB]) && void 0 !== ZB ? ZB : BB
```

#### 335. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3232` → after: `L3232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3232) · [Before (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3232)

```diff
-         tt.href = ZO.d, tt.target = "_blank", tt.rel = "noreferrer", tt.style.color = "#8ab4ff", tt.textContent = FO("wasmScreens:reportOnDiscord"), Ot.append(tt)
+         BB.href = jT.c, BB.target = "_blank", BB.rel = "noreferrer", BB.style.color = "#8ab4ff", BB.textContent = RT("wasmScreens:reportOnDiscord"), TB.append(BB)
```

#### 336. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3254-L3255` → after: `L3254-L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3254-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3254-L3255) · [Before (L3254-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3254-L3255)

```diff
-     var GO = Vt(312),
-       zO = Vt(146);
+     var mT = ZB(273),
+       XT = ZB(138);
```

#### 337. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3268` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3268) · [Before (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3268)

```diff
-           if (tt = null !== (et = qt.getContext("webgl2", Dt)) && void 0 !== et ? et : qt.getContext("webgl", Dt), !tt) return null;
+           if (BB = null !== (IB = JB.getContext("webgl2", oB)) && void 0 !== IB ? IB : JB.getContext("webgl", oB), !BB) return null;
```

#### 338. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3271-L3272` → after: `L3271-L3272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3271-L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3271-L3272) · [Before (L3271-L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3271-L3272)

```diff
-           const dt = String(null !== (Vt = tt.getParameter(mt.UNMASKED_RENDERER_WEBGL)) && void 0 !== Vt ? Vt : "");
-           return "" === dt ? "unknown" : (0, GO.h)(String(null !== (Ot = tt.getParameter(mt.UNMASKED_VENDOR_WEBGL)) && void 0 !== Ot ? Ot : ""), dt)
+           const vB = String(null !== (ZB = BB.getParameter(GB.UNMASKED_RENDERER_WEBGL)) && void 0 !== ZB ? ZB : "");
+           return "" === vB ? "unknown" : (0, mT.g)(String(null !== (TB = BB.getParameter(GB.UNMASKED_VENDOR_WEBGL)) && void 0 !== TB ? TB : ""), vB)
```

#### 339. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3288-L3289` → after: `L3288-L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3288-L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3288-L3289) · [Before (L3288-L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3288-L3289)

```diff
-           qt = null === Ot || "" === Ot.vendor ? null : (0, GO.e)(Ot.vendor, Ot.architecture);
-         return null !== qt && "other_intel" !== qt ? qt : oO.has(et) ? null : Vt()
+           JB = null === TB || "" === TB.vendor ? null : (0, mT.f)(TB.vendor, TB.architecture);
+         return null !== JB && "other_intel" !== JB ? JB : LT.has(IB) ? null : ZB()
```

#### 340. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3294-L3297` → after: `L3294-L3297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3294-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3294-L3297) · [Before (L3294-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3294-L3297)

```diff
-     var BO = Vt(3718);
-     var pO = Vt(41115),
-       xO = Vt(736),
-       TO = Vt(17);
+     var tT = ZB(3818);
+     var bT = ZB(40954),
+       xT = ZB(694),
+       ET = ZB(11);
```

#### 341. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3300` → after: `L3300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3300) · [Before (L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3300)

```diff
-       const Vt = TO.ub.encode(et);
+       const ZB = ET.mb.encode(IB);
```

#### 342. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3302` → after: `L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3302) · [Before (L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3302)

```diff
-         let Vt = et >= 0 ? 2 * et : 2 * -et - 1;
+         let ZB = IB >= 0 ? 2 * IB : 2 * -IB - 1;
```

#### 343. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3310` → after: `L3310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3310) · [Before (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3310)

```diff
-       const tt = [0, "r", void 0, 2, 74, 4, 5, "a", 1023, 1, 65536, 10, 55296, 56320, "length", 6, 12, 63, 128, "c", "b", 192, "Invalid byte index", 161, 255, 224, 31, "Invalid continuation byte", 240, 15, 3, 7, 18, !1, "resolv", "e", "then", "postCo", "okies", 16, 8, "y_40Ab", " … [truncated]
+       const BB = [0, "p", "resolv", "e", "then", "length", null, 1, 79, "a", 2, "postCo", "okies", void 0, "Block ", "image "];
```

#### 344. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3388-L3397` → after: `L3324-L3338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3324-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3324-L3338) · [Before (L3388-L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3388-L3397)

```diff
-           }] = await Promise.all([Promise[tt[34] + tt[35]]()[tt[36]](((...Ot) => (Ot[tt[14]] = tt[0], "eXMfK7" in et && (module.exports = async (et = () => {
-             throw new Error(tt[85])
-           }) => {
-             const Vt = new Set(process.argv.slice(tt[3]));
-             if (!Vt.has(tt[86])) {
-               if (Vt.size !== tt[9]) return tt[33];
-               if (!Vt.has(tt[87])) return tt[33]
-             }
-             return await (async () => void 0 === await et() ? tt[91] + tt[92] : "")(), tt[93]
-           }), Vt(1293)))), Promise[tt[34] + tt[35]]()[tt[36]]((() => Vt(1223)))]), Qt = dt.getHttpUrlFromWebSocketUrl(Ot.endpoint), lt = null === Ot[tt[37] + tt[38]] ? tt[2] : await Ot[tt[37] + tt[38]]();
+           }] = await Promise.all([Promise[BB[2] + BB[3]]()[BB[4]]((() => ZB(1258))), Promise[BB[2] + BB[3]]()[BB[4]](((...TB) => (TB[BB[5]] = BB[0], "Q6Hs0L" in IB && function(...IB) {
+             var ZB;
+             nB(IB[BB[5]] = BB[0], ZB = function(...IB) {
+               nB(IB[BB[5]] = BB[7], this.ah = IB[BB[0]], this.length = BB[0], this.map = {}, this.head = BB[6], this.tail = BB[6])
+             }, ZB.prototype.get = function(...IB) {
+               var ZB;
+               return nB(IB[BB[5]] = BB[7], ZB = this.map[IB[BB[0]]]), ZB ? (this.remove(ZB), this.insert(ZB.key, ZB.val), ZB.val) : -BB[7]
+             }, ZB.prototype.put = function(...IB) {
+               nB(IB[BB[5]] = BB[10], this.map[IB[BB[0]]] ? (this.remove(this.map[IB[BB[0]]]), this.insert(IB[BB[0]], IB[BB[7]])) : this.length === this.ah ? (this.remove(this.head), this.insert(IB[BB[0]], IB[BB[7]])) : (this.insert(IB[BB[0]], IB[BB[7]]), this.length++))
+             }, ZB.prototype.remove = function(...IB) {
+               nB(IB[BB[5]] = BB[7], IB[BB[9]] = IB[BB[0]].prev, IB[BB[8]] = IB[BB[0]].next), IB[BB[8]] && (IB[BB[8]].prev = IB[BB[9]]), IB[BB[9]] && (IB[BB[9]].next = IB[BB[8]]), this.head === IB[BB[0]] && (this.head = IB[BB[8]]), this.tail === IB[BB[0]] && (this.tail = IB[BB[9]] … [truncated]
+             }, ZB.prototype.insert = function(...IB) {
+               nB(IB[BB[5]] = BB[10], IB[BB[9]] = new List(IB[BB[0]], IB[BB[7]]), this.tail ? (this.tail.next = IB[BB[9]], IB[BB[9]].prev = this.tail, this.tail = IB[BB[9]]) : (this.tail = IB[BB[9]], this.head = IB[BB[9]]), this.map[IB[BB[0]]] = IB[BB[9]])
+             }, console.log(ZB))
+           }(), ZB(1186))))]), hB = vB.getHttpUrlFromWebSocketUrl(TB.endpoint), zB = TB[BB[11] + BB[12]] === BB[6] ? BB[13] : await TB[BB[11] + BB[12]]();
```

#### 345. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3399` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3340) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3399)

```diff
-             ["retrie" + tt[101]]: mt
+             retries: GB
```

#### 346. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3412` → after: `L3349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3349) · [Before (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3412)

```diff
-         }(Vt.game, Vt.lobby, (0, xO[tt[20]])(), Ot);
+         }(BB.game, BB.lobby, (0, xT.d)(), IB);
```

#### 347. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3414-L3418` → after: `L3351-L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3351-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3351-L3352) · [Before (L3414-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3414-L3418)

```diff
-           function Dt(...et) {
-             et[tt[14]] = tt[0]
-           }
-           "L6HGAUR" in et && Dt(), await jt(Vt, "/persisted/keep-alive", {
-             type: "mf",
+           await kB(BB, "/persisted/keep-alive", {
+             type: "UN",
```

#### 348. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3420` → after: `L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3354) · [Before (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3420)

```diff
-           }, tt[30])
+           }, 3)
```

#### 349. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3425-L3564` → after: `L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3359) · [Before (L3425-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3425-L3564)

```diff
-       const Ht = (...Vt) => (Vt[tt[14]] = tt[3], "VzuIOX" in et && function(...et) {
-         Xt(et[tt[14]] = tt[0], et[tt[20]] = function(...et) {
-           function Vt(...et) {
-             return et[tt[14]] = tt[9], jt(mt(lt(et[tt[0]])))
-           }
- 
-           function Ot(tt, et) {
-             return jt(dt(lt(tt), lt(et)))
-           }
- 
-           function qt(...et) {
-             return et[tt[14]] = tt[3], Ht(dt(lt(et[tt[0]]), lt(et[tt[9]])))
-           }
- 
-           function Dt(...et) {
-             return et[tt[14]] = tt[30], Qt(dt(lt(et[tt[0]]), lt(et[tt[9]])), et[tt[3]])
- ... (124 more removed lines; see GitHub link above)
+       const cB = (...IB) => (IB[BB[5]] = BB[10], Object.getOwnPropertyDescriptor(IB[BB[0]], IB[BB[7]]));
```

#### 350. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3569-L3627` → after: `L3364-L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3364-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3364-L3377) · [Before (L3569-L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3569-L3627)

```diff
-       nO = (...Vt) => {
-         if (Vt[tt[14]] = tt[0], "wWH2WI" in et && function() {
-             ! function(...et) {
-               function Vt(...et) {
-                 for (Xt(et[tt[14]] = tt[9], et[tt[7]] = [], et[tt[58]] = tt[0], et[tt[30]] = et[tt[0]].length, et[-tt[59]] = tt[2], et[tt[6]] = tt[2]); et[tt[58]] < et[tt[30]];) Xt(et[-tt[59]] = et[tt[0]].charCodeAt(et[tt[58]]++), et[-tt[59]] >= tt[12] && et[-tt[59]] <= tt[50] && … [truncated]
-                 return et[tt[7]]
-               }
- 
-               function Ot(...Vt) {
-                 for (Xt(Vt[tt[14]] = tt[9], Vt[tt[9]] = Vt[tt[0]].length, Vt[-tt[61]] = -tt[9], Vt[tt[62]] = tt[2], Vt[-tt[63]] = ""); ++Vt[-tt[61]] < Vt[tt[9]];) Vt[tt[62]] = Vt[tt[0]][Vt[-tt[61]]], Vt[tt[62]] > tt[52] && Xt(Vt[tt[62]] -= tt[10], Vt[-tt[63]] += et[tt[9]](Vt[tt[6 … [truncated]
-                 return Vt[-tt[63]]
-               }
- 
-               function qt(...et) {
-                 if (et[tt[14]] = tt[9], et[tt[0]] >= tt[12] && et[tt[0]] <= tt[51]) throw Error(tt[64] + tt[65] + tt[66] + et[tt[0]].toString(tt[39]).toUpperCase() + (tt[67] + tt[68] + tt[69] + tt[70]))
-               }
- ... (43 more removed lines; see GitHub link above)
+       VT = () => {
+         if ((0, ET.I)(), cB(navigator, TB) !== BB[13]) {
+           function ZB(...IB) {
+             nB(IB[BB[5]] = BB[0], IB[BB[9]] = function(IB) {
+               var ZB, TB, JB, oB, GB = IB.length;
+               for (nB(ZB = [], TB = BB[0], JB = BB[0], IB.sort(((BB, IB) => BB - IB))), oB = BB[0]; oB < GB; oB++)
+                 if (!(oB > BB[0] && IB[oB] === IB[oB - BB[7]]))
+                   for (nB(TB = oB + BB[7], JB = GB - BB[7]); TB < JB;)
+                     if (IB[oB] + IB[TB] + IB[JB] < BB[0]) TB++;
+                     else if (IB[oB] + IB[TB] + IB[JB] > BB[0]) JB--;
+               else {
+                 for (ZB.push([IB[oB], IB[TB], IB[JB]]); TB < JB && IB[TB] === IB[TB + BB[7]];) TB++;
+                 for (; TB < JB && IB[JB] === IB[JB - BB[7]];) JB--;
+                 nB(TB++, JB--)
```

#### 351. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3629-L3642` → after: `L3379-L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3379-L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3379-L3382) · [Before (L3629-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3629-L3642)

```diff
-               Xt(et[tt[14]] = tt[9], et[tt[9]] = String.fromCharCode), Xt(et[tt[48]] = tt[2], et[tt[77]] = tt[2], et[-tt[76]] = tt[2]), Xt(et[tt[0]].version = tt[82], et[tt[0]].encode = dt, et[tt[0]].decode = Qt)
-             }(typeof exports === tt[83] + tt[84] ? this.utf8 = {} : exports)
-           }(), (0, TO.O)(), Ht(navigator, Ot) !== tt[2]) return Dt;
-         if (Ht(window, qt) === tt[2]) {
-           return "LxayM79" in et && (module.exports = async (et = () => {
-             throw new Error(tt[85])
-           }) => {
-             const Vt = new Set(process.argv.slice(tt[3]));
-             if (!Vt.has(tt[86])) {
-               if (Vt.size !== tt[9]) return tt[33];
-               if (!Vt.has(tt[87])) return tt[33]
-             }
-             return await (async () => void 0 === await et() ? tt[91] + tt[92] : "")(), tt[93]
-           }), mt
+               return ZB
+             }, console.log(IB[BB[9]]))
+           }
+           return "FYZn9G" in IB && ZB(), oB
```

#### 352. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3644` → after: `L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3384) · [Before (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3644)

```diff
-         return dt
+         return cB(window, JB) === BB[13] ? GB : vB
```

#### 353. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3700-L3703` → after: `L3390-L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3390-L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3390-L3391) · [Before (L3700-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3700-L3703)

```diff
-             } = await Promise[tt[34] + tt[35]]()[tt[36]]((() => ("Fc8nWt1" in et && function(...et) {
-               Xt(et[tt[14]] = tt[0], et[tt[7]] = tt[96] + tt[97] + tt[98] + tt[99], et[tt[9]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + tt[100], et[tt[3]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-1 … [truncated]
-             }(), Vt(1877))));
-           await mt(tt[109] + tt[110] + "post", (() => jt(Ot, "/images/" + qt + ".png", {
+             } = await Promise[BB[2] + BB[3]]()[BB[4]]((() => ZB(1848)));
+           await JB(BB[14] + BB[15] + "post", (() => kB(IB, "/images/" + TB + ".png", {
```

#### 354. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3707-L3762` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3395) · [Before (L3707-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3707-L3762)

```diff
-           function Ht() {
-             ! function(et) {
-               var Vt, Ot, qt, Dt = String.fromCharCode;
- 
-               function mt(...et) {
-                 for (Xt(et[tt[14]] = tt[9], et[tt[7]] = [], et[tt[102]] = tt[0], et[tt[19]] = et[tt[0]].length, et[tt[48]] = tt[2], et[tt[6]] = tt[2]); et[tt[102]] < et[tt[19]];) Xt(et[tt[48]] = et[tt[0]].charCodeAt(et[tt[102]]++), et[tt[48]] >= tt[12] && et[tt[48]] <= tt[50] &&  … [truncated]
-                 return et[tt[7]]
-               }
- 
-               function dt(...et) {
-                 if (et[tt[14]] = tt[9], et[tt[0]] >= tt[12] && et[tt[0]] <= tt[51]) throw Error(tt[64] + tt[65] + tt[66] + et[tt[0]].toString(tt[39]).toUpperCase() + (tt[67] + tt[68] + tt[69] + tt[70]))
-               }
- 
-               function jt(et, Vt) {
-                 return Dt(et >> Vt & tt[17] | tt[18])
-               }
- ... (40 more removed lines; see GitHub link above)
+           console.error(BB[14] + BB[15] + "post failed:", JB)
```

#### 355. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3766-L3768` → after: `L3399-L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3399-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3399-L3401) · [Before (L3766-L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3766-L3768)

```diff
-     var eq = Vt(41025),
-       Vq = Vt(1908);
-     const Oq = 1e3 * eq.d.seatReservationSeconds - 3e3;
+     var BJ = ZB(40865),
+       IJ = ZB(1878);
+     const ZJ = 1e3 * BJ.b.seatReservationSeconds - 3e3;
```

#### 356. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3773-L3775` → after: `L3406-L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3406-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3406-L3408) · [Before (L3773-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3773-L3775)

```diff
-         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
-         const mt = null !== (qt = Dt.fetch) && void 0 !== qt ? qt : fetch;
-         this.seat = (0, vV.h)(tt.endpoint, tt.roomName, tt.joinOptions, {
+         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
+         const GB = null !== (JB = oB.fetch) && void 0 !== JB ? JB : fetch;
+         this.seat = (0, OZ.k)(BB.endpoint, BB.roomName, BB.joinOptions, {
```

#### 357. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3796` → after: `L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3429) · [Before (L3796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3796)

```diff
-         (0, ce.n)(tt);
+         (0, pI.o)(BB);
```

#### 358. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3799` → after: `L3432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3432) · [Before (L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3799)

```diff
-             this.abort((0, ce.f)(tt))
+             this.abort((0, pI.e)(BB))
```

#### 359. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3808` → after: `L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3441) · [Before (L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3808)

```diff
-           if ((0, ce.n)(tt), !et) throw qt;
+           if ((0, pI.o)(BB), !IB) throw JB;
```

#### 360. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3813` → after: `L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3446) · [Before (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3813)

```diff
-         if ((0, ce.n)(tt), !(this.ageMs() > Oq)) return this.use = "taken", Ot;
+         if ((0, pI.o)(BB), !(this.ageMs() > ZJ)) return this.use = "taken", TB;
```

#### 361. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3821` → after: `L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3454) · [Before (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3821)

```diff
-           if (!(Vt instanceof At.n) || Vt.code !== Ot.b.duplicateLobbyNameError.code || 0 === qt) throw Vt;
+           if (!(ZB instanceof fB.n) || ZB.code !== TB.c.duplicateLobbyNameError.code || 0 === JB) throw ZB;
```

#### 362. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3842` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3475) · [Before (L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3842)

```diff
-         const et = null !== (tt = this.answeredAt) && void 0 !== tt ? tt : {
+         const IB = null !== (BB = this.answeredAt) && void 0 !== BB ? BB : {
```

#### 363. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3847` → after: `L3480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3480) · [Before (L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3847)

```diff
-         return Math.max(0, 1e3 * eq.d.seatReservationSeconds - Vt)
+         return Math.max(0, 1e3 * BJ.b.seatReservationSeconds - ZB)
```

#### 364. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3853` → after: `L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3486) · [Before (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3853)

```diff
-         (0, ce.j)(this.follow.controller, tt)
+         (0, pI.i)(this.follow.controller, BB)
```

#### 365. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3856` → after: `L3489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3489) · [Before (L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3856)

```diff
-     var Dq = Vt(41122);
+     var JJ = ZB(40962);
```

#### 366. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3884` → after: `L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3517) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3884)

```diff
-         if (tt === ge.he.Retire) return void(Ot && !Ot.gone && (this.endWorker(et), Ot.started = !1, this.giveUp(et, "had its tables trap twice", "every meshing worker's tables trapped twice")));
+         if (BB === DI.Wd.Retire) return void(TB && !TB.gone && (this.endWorker(IB), TB.started = !1, this.giveUp(IB, "had its tables trap twice", "every meshing worker's tables trapped twice")));
```

#### 367. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3889` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3522) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3889)

```diff
-         tt === ge.he.Mesh && Ot.heapRetries > 0 && (Ot.heapRetries--, mt = this.pooled(Dt, !0)), mt ??= this.buffer(Dt), new Uint8Array(mt, 0, Dt).set(Vt), qt.postMessage({
+         BB === DI.Wd.Mesh && TB.heapRetries > 0 && (TB.heapRetries--, GB = this.pooled(oB, !0)), GB ??= this.buffer(oB), new Uint8Array(GB, 0, oB).set(ZB), JB.postMessage({
```

#### 368. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3939` → after: `L3572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3572) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3939)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${tt} did not start`, Dt), void this.start(tt)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${BB} did not start`, oB), void this.start(BB)
```

#### 369. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3958` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3591) · [Before (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3958)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${tt} could not be sent the module`, Dt), qt.terminate(), et.worker = null, void this.start(tt)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${BB} could not be sent the module`, oB), JB.terminate(), IB.worker = null, void this.start(BB)
```

#### 370. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3960-L3961` → after: `L3593-L3594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3593-L3594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3593-L3594) · [Before (L3960-L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3960-L3961)

```diff
-         et.watch = new Dq.g(Dq.c, (et => {
-           this.lose(tt, (0, Dq.h)(et), (() => {
+         IB.watch = new JJ.i(JJ.d, (IB => {
+           this.lose(BB, (0, JJ.l)(IB), (() => {
```

#### 371. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3970` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3603) · [Before (L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3970)

```diff
-             jq(Vt), Vt.started = !0, this.options.write(0, ge.de.WorkerStarted, 0, tt, 0, mq);
+             vJ(ZB), ZB.started = !0, this.options.write(0, DI.Vd.WorkerStarted, 0, BB, 0, oJ);
```

#### 372. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3980` → after: `L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3613) · [Before (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3980)

```diff
-             const Ot = et.status === ge.Ib.Trapped;
+             const TB = IB.status === DI.xb.Trapped;
```

#### 373. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3983` → after: `L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3616) · [Before (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3983)

```diff
-               else if (Vt.startsWithoutResult = 0, Vt.trapsWithoutResult = 0, et.status === ge.Ib.Refused) {
+               else if (ZB.startsWithoutResult = 0, ZB.trapsWithoutResult = 0, IB.status === DI.xb.Refused) {
```

#### 374. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3990` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3623) · [Before (L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3990)

```diff
-                 this.countFailedJob(eV.b.test(Vt), "light_refused_input", Vt), this.logRefusal(tt, Vt)
+                 this.countFailedJob(BZ.e.test(ZB), "light_refused_input", ZB), this.logRefusal(BB, ZB)
```

#### 375. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3992` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3625) · [Before (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3992)

```diff
-               et.status === ge.Ib.HeapRefused && (Vt.heapRetries = Math.min(Vt.heapRetries + 1, 4), this.logHeapRefusal(tt))
+               IB.status === DI.xb.HeapRefused && (ZB.heapRetries = Math.min(ZB.heapRetries + 1, 4), this.logHeapRefusal(BB))
```

#### 376. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3994` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3627) · [Before (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3994)

```diff
-             if (this.options.write(et.jobId, ge.de.JobResult, et.status, tt, et.workerUs, new Uint8Array(et.bytes, 0, et.len)), this.recycle(et.bytes), et.spare && this.recycle(et.spare), !Ot) break;
+             if (this.options.write(IB.jobId, DI.Vd.JobResult, IB.status, BB, IB.workerUs, new Uint8Array(IB.bytes, 0, IB.len)), this.recycle(IB.bytes), IB.spare && this.recycle(IB.spare), !TB) break;
```

#### 377. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3996` → after: `L3629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3629) · [Before (L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L3996)

```diff
-               this.lose(tt, `the tables trapped its wasm: ${et.trap}`);
+               this.lose(BB, `the tables trapped its wasm: ${IB.trap}`);
```

#### 378. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4001` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3634) · [Before (L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4001)

```diff
-             Vt.gone ||= qt, this.lose(tt, `a job trapped its wasm: ${et.trap}`), qt && this.giveUp(tt, `trapped ${Vt.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
+             ZB.gone ||= JB, this.lose(BB, `a job trapped its wasm: ${IB.trap}`), JB && this.giveUp(BB, `trapped ${ZB.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
```

#### 379. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4016-L4017` → after: `L3649-L3650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3649-L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3649-L3650) · [Before (L4016-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4016-L4017)

```diff
-         const Ot = (null !== (Vt = this.refusals.get(et)) && void 0 !== Vt ? Vt : 0) + 1;
-         this.refusals.set(et, Ot), (0, RV.E)(Ot) && console.warn(`[bloxd-wasm-client] meshing worker ${tt} refused a chunk (${Ot} so far for this reason): ${et}`)
+         const TB = (null !== (ZB = this.refusals.get(IB)) && void 0 !== ZB ? ZB : 0) + 1;
+         this.refusals.set(IB, TB), (0, aZ.G)(TB) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} refused a chunk (${TB} so far for this reason): ${IB}`)
```

#### 380. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4020` → after: `L3653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3653) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4020)

```diff
-         this.heapRefusals++, (0, RV.E)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${tt} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
+         this.heapRefusals++, (0, aZ.G)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
```

#### 381. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4027` → after: `L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3660) · [Before (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4027)

```diff
-           }, console.warn(`[bloxd-wasm-client] meshing worker ${tt} ${et}: giving up on it`), this.slots.every((tt => tt.gone))) {
+           }, console.warn(`[bloxd-wasm-client] meshing worker ${BB} ${IB}: giving up on it`), this.slots.every((BB => BB.gone))) {
```

#### 382. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4035` → after: `L3668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3668) · [Before (L4035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4035)

```diff
-               return `worker ${et} ${null!==(Vt=null===(Ot=tt.goneFor)||void 0===Ot?void 0:Ot.why)&&void 0!==Vt?Vt:"went"}`
+               return `worker ${IB} ${null!==(ZB=null===(TB=BB.goneFor)||void 0===TB?void 0:TB.why)&&void 0!==ZB?ZB:"went"}`
```

#### 383. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4037` → after: `L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3670) · [Before (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4037)

```diff
-           this.options.fail(1 === tt.size ? Vt : `no meshing worker is left (${et.join(", ")})`)
+           this.options.fail(1 === BB.size ? ZB : `no meshing worker is left (${IB.join(", ")})`)
```

#### 384. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4041` → after: `L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3674) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4041)

```diff
-         console.warn(`[bloxd-wasm-client] meshing worker ${tt} was lost: ${et}`), this.endWorker(tt), this.stopped || (Vt ? Vt() : this.options.onWorkerLost(et), this.tellLost(tt), this.start(tt))
+         console.warn(`[bloxd-wasm-client] meshing worker ${BB} was lost: ${IB}`), this.endWorker(BB), this.stopped || (ZB ? ZB() : this.options.onWorkerLost(IB), this.tellLost(BB), this.start(BB))
```

#### 385. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4050` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3683) · [Before (L4050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4050)

```diff
-         et.started && (et.started = !1, this.options.write(0, ge.de.WorkerLost, 0, tt, 0, mq))
+         IB.started && (IB.started = !1, this.options.write(0, DI.Vd.WorkerLost, 0, BB, 0, oJ))
```

#### 386. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4054` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3687) · [Before (L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4054)

```diff
-         return null !== (et = this.pooled(tt)) && void 0 !== et ? et : new ArrayBuffer(Math.max(16384, tt))
+         return null !== (IB = this.pooled(BB)) && void 0 !== IB ? IB : new ArrayBuffer(Math.max(16384, BB))
```

#### 387. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4076-L4081` → after: `L3709-L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3709-L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3709-L3714) · [Before (L4076-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4076-L4081)

```diff
-     var Hq = Vt(36729),
-       Xq = Vt(40937),
-       Qq = Vt(41127),
-       lq = Vt(41136),
-       Eq = (Vt(40960), Vt(41141)),
-       fq = Vt(41003);
+     var kJ = ZB(36509),
+       cJ = ZB(40790),
+       nJ = ZB(40965),
+       hJ = ZB(40968),
+       zJ = (ZB(40804), ZB(40971)),
+       FJ = ZB(40840);
```

#### 388. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4095` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3728) · [Before (L4095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4095)

```diff
-         } = (0, fq.n)(et);
+         } = (0, FJ.r)(IB);
```

#### 389. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4108` → after: `L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3741) · [Before (L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4108)

```diff
-         this.session = tt, this.sources = et, this.warn = Vt, this.load = Ot, this.nextPoll = 0, this.df = !1, this.warned = new Set
+         this.session = BB, this.sources = IB, this.warn = ZB, this.load = TB, this.nextPoll = 0, this.WN = !1, this.warned = new Set
```

#### 390. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4119` → after: `L3752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3752) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4119)

```diff
-         this.df = !0
+         this.WN = !0
```

#### 391. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4125` → after: `L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3758) · [Before (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4125)

```diff
-           if (jt = await this.sources.blockImageUrl(tt), null === jt) throw new Error(`block image ${tt} has no URL`);
+           if (kB = await this.sources.blockImageUrl(BB), null === kB) throw new Error(`block image ${BB} has no URL`);
```

#### 392. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4129-L4130` → after: `L3762-L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3762-L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3762-L3763) · [Before (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4129-L4130)

```diff
-           const et = null !== (Ht = jt) && void 0 !== Ht ? Ht : `block image ${tt}`;
-           this.warned.has(et) || (this.warned.add(et), this.warn(`sun shadow plane texture ${et} didn't load: its blocks cast no shadow`, Xt))
+           const IB = null !== (cB = kB) && void 0 !== cB ? cB : `block image ${BB}`;
+           this.warned.has(IB) || (this.warned.add(IB), this.warn(`sun shadow plane texture ${IB} didn't load: its blocks cast no shadow`, nB))
```

#### 393. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4132-L4143` → after: `L3765-L3776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3765-L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3765-L3776) · [Before (L4132-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4132-L4143)

```diff
-         this.df || this.session.setSunShadowTexture(tt, et, null !== (Vt = null === (Ot = dt) || void 0 === Ot ? void 0 : Ot.width) && void 0 !== Vt ? Vt : 0, null !== (qt = null === (Dt = dt) || void 0 === Dt ? void 0 : Dt.height) && void 0 !== qt ? qt : 0, null === (mt = dt) || … [truncated]
-       }
-     }
-     var aq = Vt(41146),
-       Mq = Vt(40977),
-       bq = Vt(41154),
-       Jq = Vt(41157),
-       Cq = Vt(40985),
-       uq = Vt(40987),
-       Kq = Vt(34414),
-       hq = Vt(34263),
-       vq = Vt(41162);
+         this.WN || this.session.setSunShadowTexture(BB, IB, null !== (ZB = null === (TB = vB) || void 0 === TB ? void 0 : TB.width) && void 0 !== ZB ? ZB : 0, null !== (JB = null === (oB = vB) || void 0 === oB ? void 0 : oB.height) && void 0 !== JB ? JB : 0, null === (GB = vB) || … [truncated]
+       }
+     }
+     var yJ = ZB(40974),
+       UJ = ZB(40821),
+       WJ = ZB(40976),
+       dJ = ZB(40983),
+       CJ = ZB(40829),
+       QJ = ZB(40834),
+       sJ = ZB(34235),
+       wJ = ZB(34066),
+       OJ = ZB(40999);
```

#### 394. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4147-L4149` → after: `L3780-L3782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3780-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3780-L3782) · [Before (L4147-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4147-L4149)

```diff
-     var Rq = Vt(40903),
-       Iq = Vt(41167),
-       Pq = Vt(41174);
+     var aJ = ZB(40751),
+       HJ = ZB(41008),
+       MJ = ZB(41017);
```

#### 395. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4155` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3788) · [Before (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4155)

```diff
-         aux: ge.nc.AdStart | (tt ? ge.nc.PreventMovement : 0),
+         aux: DI.dc.AdStart | (BB ? DI.dc.PreventMovement : 0),
```

#### 396. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4159-L4160` → after: `L3792-L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3792-L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3792-L3793) · [Before (L4159-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4159-L4160)

```diff
-     var kq = Vt(2984),
-       Gq = Vt(340);
+     var rJ = ZB(3071),
+       mJ = ZB(311);
```

#### 397. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4162` → after: `L3795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3795) · [Before (L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4162)

```diff
-     var oq = Vt(41180);
+     var LJ = ZB(41023);
```

#### 398. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4181-L4182` → after: `L3814-L3815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3814-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3814-L3815) · [Before (L4181-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4181-L4182)

```diff
-           own: tt.includes(kV.d),
-           oneShot: tt.includes(kV.e)
+           own: BB.includes(rZ.e),
+           oneShot: BB.includes(rZ.i)
```

#### 399. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4192` → after: `L3825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3825) · [Before (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4192)

```diff
-         })), this.channel = (null !== (et = tt.openChannel) && void 0 !== et ? et : kV.r)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (IB = BB.openChannel) && void 0 !== IB ? IB : rZ.v)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 400. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4204-L4205` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3837-L3838) · [Before (L4204-L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4204-L4205)

```diff
-           })).catch((tt => (null !== et && (0, kV.p)(et), Vt(tt), null)))
-         }((() => this.host.load(et).then((tt => (tt.setGamePackConfirm(this.confirm), this.landed = tt, tt)))), et ? this.host.store : null, this.host.iE), this.landRequest(this.requested), this.requested
+           })).catch((BB => (null !== IB && (0, rZ.q)(IB), ZB(BB), null)))
+         }((() => this.host.load(IB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), IB ? this.host.store : null, this.host.JN), this.landRequest(this.requested), this.requested
```

#### 401. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4213` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3846) · [Before (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4213)

```diff
-           return null !== (tt = this.requested) && void 0 !== tt ? tt : null
+           return null !== (BB = this.requested) && void 0 !== BB ? BB : null
```

#### 402. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4221-L4225` → after: `L3854-L3858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3854-L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3854-L3858) · [Before (L4221-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4221-L4225)

```diff
-     var Uq = Vt(36498);
-     const Aq = 216 * Uq.g,
-       iq = 92 * Uq.e,
-       Yq = 64 * Uq.g,
-       Bq = 16 * Uq.g;
+     var uJ = ZB(36294);
+     const fJ = 216 * uJ.d,
+       lJ = 92 * uJ.b,
+       AJ = 64 * uJ.d,
+       tJ = 16 * uJ.d;
```

#### 403. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4229` → after: `L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3862) · [Before (L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4229)

```diff
-       return null !== (tt = null === (et = performance.memory) || void 0 === et ? void 0 : et.zN) && void 0 !== tt ? tt : null
+       return null !== (BB = null === (IB = performance.memory) || void 0 === IB ? void 0 : IB.IU) && void 0 !== BB ? BB : null
```

#### 404. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4239` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3872) · [Before (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4239)

```diff
-           qt = Math.max(null !== (et = this.reads.jsHeapBytes()) && void 0 !== et ? et : 0, Yq),
+           JB = Math.max(null !== (IB = this.reads.jsHeapBytes()) && void 0 !== IB ? IB : 0, AJ),
```

#### 405. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4265` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3898) · [Before (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4265)

```diff
-         return null === tt ? null : `estimate ${(0,Uq.n)(tt.totalBytes)} MiB of budget ${null===et?"none":(0,Uq.n)(et)}: wasm ${(0,Uq.n)(tt.wasmBytes)} js ${(0,Uq.n)(tt.jsHeapBytes)} gpu ${(0,Uq.n)(tt.gpuBytes)} chunks ${tt.storedChunks}`
+         return null === BB ? null : `estimate ${(0,uJ.i)(BB.totalBytes)} MiB of budget ${null===IB?"none":(0,uJ.i)(IB)}: wasm ${(0,uJ.i)(BB.wasmBytes)} js ${(0,uJ.i)(BB.jsHeapBytes)} gpu ${(0,uJ.i)(BB.gpuBytes)} chunks ${BB.storedChunks}`
```

#### 406. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4274-L4275` → after: `L3907-L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3907-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3907-L3908) · [Before (L4274-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4274-L4275)

```diff
-             footprintMiB: Number((0, Uq.n)(tt.totalBytes)),
-             gpuMiB: Number((0, Uq.n)(tt.gpuBytes)),
+             footprintMiB: Number((0, uJ.i)(BB.totalBytes)),
+             gpuMiB: Number((0, uJ.i)(BB.gpuBytes)),
```

#### 407. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4278` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3911) · [Before (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4278)

```diff
-           footprintBudgetMiB: null === et ? -1 : Number((0, Uq.n)(et))
+           footprintBudgetMiB: null === IB ? -1 : Number((0, uJ.i)(IB))
```

#### 408. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4282-L4286` → after: `L3915-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3915-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3915-L3919) · [Before (L4282-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4282-L4286)

```diff
-     var Tq = Vt(2902),
-       gq = Vt(4650),
-       sq = Vt(36610),
-       nq = Vt(38200);
-     const tD = se.fb + 1,
+     var EJ = ZB(2973),
+       DJ = ZB(4701),
+       KJ = ZB(36396),
+       VJ = ZB(38004);
+     const SJ = KI.ab + 1,
```

#### 409. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4290` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3923) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4290)

```diff
-         this.log = tt, this.take = et, this.Pd = [], this.unshown = new Map, this.latest = new Map
+         this.log = BB, this.take = IB, this.sv = [], this.unshown = new Map, this.latest = new Map
```

#### 410. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4294-L4297` → after: `L3927-L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3927-L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3927-L3930) · [Before (L4294-L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4294-L4297)

```diff
-         Vt.length >= se.db && Vt[0] > 0 && (0, Tq.n)("remesh", `${Vt[0]} core records lost to a full log`);
-         const Ot = this.Pd;
-         for (let qt = se.db; qt + se.fb <= Vt.length; qt += se.fb) {
-           for (let tt = qt; tt < qt + se.fb; tt++) Ot.push(Vt[tt]);
+         ZB.length >= KI.$ && ZB[0] > 0 && (0, EJ.o)("remesh", `${ZB[0]} core records lost to a full log`);
+         const TB = this.sv;
+         for (let JB = KI.$; JB + KI.ab <= ZB.length; JB += KI.ab) {
+           for (let BB = JB; BB < JB + KI.ab; BB++) TB.push(ZB[BB]);
```

#### 411. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4307-L4308` → after: `L3940-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3940-L3941) · [Before (L4307-L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4307-L4308)

```diff
-         const Ot = this.Pd,
-           qt = (0, nq.f)(Ot[tt + 1], Ot[tt + 2], Ot[tt + 3]),
+         const TB = this.sv,
+           JB = (0, VJ.e)(TB[BB + 1], TB[BB + 2], TB[BB + 3]),
```

#### 412. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4310` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3943) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4310)

```diff
-           mt = Ot[tt + se.fb];
+           GB = TB[BB + KI.ab];
```

#### 413. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4312` → after: `L3945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3945) · [Before (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4312)

```diff
-           case se.Eb.Edit:
+           case KI.Ib.Edit:
```

#### 414. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4315-L4316` → after: `L3948-L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3948-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3948-L3949) · [Before (L4315-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4315-L4316)

```diff
-           case se.Eb.Sent:
-             this.latest.set(qt, Dt), this.log.sent(qt, Dt, Ot[tt + 5], Ot[tt + 6], Ot[tt + 7], null !== (Vt = this.unshown.get(qt)) && void 0 !== Vt ? Vt : nq.d, mt);
+           case KI.Ib.Sent:
+             this.latest.set(JB, oB), this.log.sent(JB, oB, TB[BB + 5], TB[BB + 6], TB[BB + 7], null !== (ZB = this.unshown.get(JB)) && void 0 !== ZB ? ZB : VJ.b, GB);
```

#### 415. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4318` → after: `L3951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3951) · [Before (L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4318)

```diff
-           case se.Eb.Done: {
+           case KI.Ib.Done: {
```

#### 416. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4324` → after: `L3957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3957) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4324)

```diff
-           case se.Eb.Failed: {
+           case KI.Ib.Failed: {
```

#### 417. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4329` → after: `L3962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3962) · [Before (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4329)

```diff
-           case se.Eb.Shown:
+           case KI.Ib.Shown:
```

#### 418. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4332` → after: `L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3965) · [Before (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4332)

```diff
-           case se.Eb.Replaced:
+           case KI.Ib.Replaced:
```

#### 419. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4335` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3968) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4335)

```diff
-           case se.Eb.Emptied:
+           case KI.Ib.Emptied:
```

#### 420. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4339` → after: `L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3972) · [Before (L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4339)

```diff
-             console.warn(`[debug:remesh] unknown core record kind ${Ot[tt]}`)
+             console.warn(`[debug:remesh] unknown core record kind ${TB[BB]}`)
```

#### 421. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4351-L4352` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3984-L3985) · [Before (L4351-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4351-L4352)

```diff
-     var qD = Vt(3295),
-       DD = Vt(39856);
+     var To = ZB(3396),
+       Jo = ZB(39707);
```

#### 422. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4356` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3989) · [Before (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4356)

```diff
-         this.options = tt, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Pd = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== tt.modu … [truncated]
+         this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sv = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== BB.modu … [truncated]
```

#### 423. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4359-L4360` → after: `L3992-L3993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3992-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L3992-L3993) · [Before (L4359-L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4359-L4360)

```diff
-         if (!(this.gone || null === this.worker && null === this.Pd))
-           if (tt === ge.he.WorldgenSeed) {
+         if (!(this.gone || null === this.worker && null === this.sv))
+           if (BB === DI.Wd.WorldgenSeed) {
```

#### 424. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4371` → after: `L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4371)

```diff
-           } else if (tt === ge.he.Generate) {
+           } else if (BB === DI.Wd.Generate) {
```

#### 425. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4373-L4374` → after: `L4006-L4007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4006-L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4006-L4007) · [Before (L4373-L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4373-L4374)

```diff
-           const tt = new DataView(et.buffer, et.byteOffset, ge.Zd),
-             Ot = null !== (Vt = this.pool.pop()) && void 0 !== Vt ? Vt : new ArrayBuffer(8192);
+           const BB = new DataView(IB.buffer, IB.byteOffset, DI.Sd),
+             TB = null !== (ZB = this.pool.pop()) && void 0 !== ZB ? ZB : new ArrayBuffer(8192);
```

#### 426. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4389` → after: `L4022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4022) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4389)

```diff
-         this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, ge.de.WorldgenStarted, 0, 0, mD)))
+         this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, DI.Vd.WorldgenStarted, 0, 0, oo)))
```

#### 427. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4397` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4030) · [Before (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4397)

```diff
-         null !== this.Pd ? this.Pd.push({
+         null !== this.sv ? this.sv.push({
```

#### 428. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4406` → after: `L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4039) · [Before (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4406)

```diff
-         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Pd ??= [])
+         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sv ??= [])
```

#### 429. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4430` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4063) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4430)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", qt), this.lastLoss = `it did not start (${String(qt)})`, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", JB), this.lastLoss = `it did not start (${String(JB)})`, void this.start()
```

#### 430. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4444` → after: `L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4077) · [Before (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4444)

```diff
-             ff: Ot.e.ff
+             YN: TB.f.YN
```

#### 431. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4447` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4080) · [Before (L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4447)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", qt), this.lastLoss = `it could not be sent the module (${String(qt)})`, Vt.terminate(), this.worker = null, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", JB), this.lastLoss = `it could not be sent the module (${String(JB)})`, ZB.terminate(), this.worker = null, void this.start()
```

#### 432. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4449-L4450` → after: `L4082-L4083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4082-L4083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4082-L4083) · [Before (L4449-L4450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4449-L4450)

```diff
-         this.watch = new Dq.g(Dq.d, (tt => {
-           this.lose((0, Dq.h)(tt), (() => {
+         this.watch = new JJ.i(JJ.h, (BB => {
+           this.lose((0, JJ.l)(BB), (() => {
```

#### 433. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4459` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4092) · [Before (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4459)

```diff
-             const et = this.Pd;
+             const IB = this.sv;
```

#### 434. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4461` → after: `L4094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4094) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4461)

```diff
-               this.coreWaits = !1, this.options.write(0, ge.de.WorldgenStarted, 0, 0, mD);
+               this.coreWaits = !1, this.options.write(0, DI.Vd.WorldgenStarted, 0, 0, oo);
```

#### 435. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4464` → after: `L4097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4097) · [Before (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4464)

```diff
-             this.Pd = null;
+             this.sv = null;
```

#### 436. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4480` → after: `L4113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4113) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4480)

```diff
-             et.status !== ge.Ib.Trapped && (this.startsWithoutResult = 0), this.options.write(et.ticket, ge.de.WorldgenResult, et.status, et.workerUs, new Uint8Array(et.bytes, 0, et.len)), this.recycle(et.bytes), et.spare && this.recycle(et.spare)
+             IB.status !== DI.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(IB.ticket, DI.Vd.WorldgenResult, IB.status, IB.workerUs, new Uint8Array(IB.bytes, 0, IB.len)), this.recycle(IB.bytes), IB.spare && this.recycle(IB.spare)
```

#### 437. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4484` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117) · [Before (L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4484)

```diff
-         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${tt}`), this.lastLoss = tt, this.endWorker(), this.gone || (et ? et() : this.options.onWorkerLost(tt), this.dropHeld(), this.Pd = null, this.options.write(0, ge.de.WorldgenLost, ge.je.Lost, 0, mD), this.cor … [truncated]
+         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWorker(), this.gone || (IB ? IB() : this.options.onWorkerLost(BB), this.dropHeld(), this.sv = null, this.options.write(0, DI.Vd.WorldgenLost, DI._d.Lost, 0, oo), this.cor … [truncated]
```

#### 438. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4487` → after: `L4120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4120) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4487)

```diff
-         this.gone = !0, this.dropHeld(), this.options.write(0, ge.de.WorldgenLost, ge.je.Gone, 0, mD)
+         this.gone = !0, this.dropHeld(), this.options.write(0, DI.Vd.WorldgenLost, DI._d.Gone, 0, oo)
```

#### 439. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4494` → after: `L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4127) · [Before (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4494)

```diff
-         if (null !== this.Pd) {
+         if (null !== this.sv) {
```

#### 440. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4498-L4499` → after: `L4131-L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4131-L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4131-L4132) · [Before (L4498-L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4498-L4499)

```diff
-             of this.Pd) "generate" === tt.type && this.recycle(tt.bytes);
-           this.Pd.length = 0
+             of this.sv) "generate" === BB.type && this.recycle(BB.bytes);
+           this.sv.length = 0
```

#### 441. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4506-L4510` → after: `L4139-L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4139-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4139-L4143) · [Before (L4506-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4506-L4510)

```diff
-     var jD = Vt(37985),
-       HD = Vt(3785),
-       XD = Vt(40858),
-       QD = Vt(41189),
-       lD = Vt(40971);
+     var vo = ZB(37803),
+       ko = ZB(3884),
+       co = ZB(40721),
+       no = ZB(41028),
+       ho = ZB(40816);
```

#### 442. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4555` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4188) · [Before (L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4555)

```diff
-       const qt = (0, TO.n)(TO.db, MD, [Ot]),
+       const JB = (0, ET.l)(ET.Y, Uo, [TB]),
```

#### 443. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4579` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4212) · [Before (L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4579)

```diff
-         jt = (0, TO.n)(TO.db, Ot, [tt]);
+         kB = (0, ET.l)(ET.Y, TB, [BB]);
```

#### 444. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4581` → after: `L4214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4214) · [Before (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4581)

```diff
-         const Vt = (0, TO.n)(TO.db, qt, [jt[0]]),
+         const ZB = (0, ET.l)(ET.Y, JB, [kB[0]]),
```

#### 445. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4586-L4588` → after: `L4219-L4221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4219-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4219-L4221) · [Before (L4586-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4586-L4588)

```diff
-             et = (0, TO.n)(TO.db, ED, [jt[0]]),
-             Ot = null !== (0, TO.n)(TO.db, fD, [tt]) ? tt : null === et ? null : et[1],
-             qt = null === Ot ? null : (0, TO.n)(TO.db, Dt, [Ot]);
+             IB = (0, ET.l)(ET.Y, zo, [kB[0]]),
+             TB = null !== (0, ET.l)(ET.Y, Fo, [BB]) ? BB : null === IB ? null : IB[1],
+             JB = null === TB ? null : (0, ET.l)(ET.Y, oB, [TB]);
```

#### 446. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4591` → after: `L4224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4224) · [Before (L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4591)

```diff
-         null !== Vt && (null === mt ? mt = Vt[0] : null === dt && Vt[0] !== mt && (dt = Vt[0])), jt = (0, TO.n)(TO.db, Ot, [tt])
+         null !== ZB && (null === GB ? GB = ZB[0] : null === vB && ZB[0] !== GB && (vB = ZB[0])), kB = (0, ET.l)(ET.Y, TB, [BB])
```

#### 447. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4593` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4226) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4593)

```diff
-       return null !== (Vt = dt) && void 0 !== Vt ? Vt : null === mt ? "none" : "own"
+       return null !== (ZB = vB) && void 0 !== ZB ? ZB : null === GB ? "none" : "own"
```

#### 448. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4598-L4599` → after: `L4231-L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4231-L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4231-L4232) · [Before (L4598-L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4598-L4599)

```diff
-       const Vt = (0, TO.n)(TO.db, uD, [et]);
-       return null === Vt ? tt : tt + ":" + Vt[1] + ":" + Vt[2]
+       const ZB = (0, ET.l)(ET.Y, so, [IB]);
+       return null === ZB ? BB : BB + ":" + ZB[1] + ":" + ZB[2]
```

#### 449. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4608` → after: `L4241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4241) · [Before (L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4608)

```diff
-         mt = (0, TO.n)(TO.db, et, [tt]);
+         GB = (0, ET.l)(ET.Y, IB, [BB]);
```

#### 450. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4610-L4612` → after: `L4243-L4245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4243-L4245) · [Before (L4610-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4610-L4612)

```diff
-         const dt = (0, TO.n)(TO.db, Vt, [mt[0]]),
-           jt = null === dt ? (0, TO.n)(TO.db, ED, [mt[0]]) : null,
-           Ht = null !== jt && null !== (0, TO.n)(TO.db, fD, [jt[1]]) && 0 !== wD(jt[1], "wasm:") ? jt[1] : null;
+         const vB = (0, ET.l)(ET.Y, ZB, [GB[0]]),
+           kB = null === vB ? (0, ET.l)(ET.Y, zo, [GB[0]]) : null,
+           cB = null !== kB && null !== (0, ET.l)(ET.Y, Fo, [kB[1]]) && 0 !== No(kB[1], "wasm:") ? kB[1] : null;
```

#### 451. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4639` → after: `L4272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4272) · [Before (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4639)

```diff
-         mt = (0, TO.n)(TO.db, et, [tt])
+         GB = (0, ET.l)(ET.Y, IB, [BB])
```

#### 452. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4649` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4282) · [Before (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4649)

```diff
-       return (0, jD.f)(function(tt) {
+       return (0, vo.g)(function(BB) {
```

#### 453. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4653` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4286) · [Before (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4653)

```diff
-         for (let qt = 0; qt <= Vt; qt++) et ^= qt === Vt ? tt.length : (0, TO.n)(TO.ob, tt, [qt]), et = et + (et << 1) + (et << 4) + (et << 7) + (et << 8) + (et << 24) >>> 0;
+         for (let JB = 0; JB <= ZB; JB++) IB ^= JB === ZB ? BB.length : (0, ET.l)(ET.fb, BB, [JB]), IB = IB + (IB << 1) + (IB << 4) + (IB << 7) + (IB << 8) + (IB << 24) >>> 0;
```

#### 454. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4682` → after: `L4315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4315) · [Before (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4682)

```diff
-                 case ge.Ac.StackCheck:
+                 case DI.qc.StackCheck:
```

#### 455. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4684` → after: `L4317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4317) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4684)

```diff
-                 case ge.Ac.ConfirmMesh:
+                 case DI.qc.ConfirmMesh:
```

#### 456. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4686` → after: `L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4319) · [Before (L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4686)

```diff
-                 case ge.Ac.IndexPassReplaced:
+                 case DI.qc.IndexPassReplaced:
```

#### 457. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4688` → after: `L4321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4321) · [Before (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4688)

```diff
-                 case ge.Ac.ProductSubChanged:
+                 case DI.qc.ProductSubChanged:
```

#### 458. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4690-L4694` → after: `L4323-L4327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4323-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4323-L4327) · [Before (L4690-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4690-L4694)

```diff
-                 case ge.Ac.RenderStatus:
-                   return et.Xd();
-                 case ge.Ac.Held:
-                   return et.Pd();
-                 case ge.Ac.PlayerKilledSubs:
+                 case DI.qc.RenderStatus:
+                   return IB.Zv();
+                 case DI.qc.Held:
+                   return IB.sv();
+                 case DI.qc.PlayerKilledSubs:
```

#### 459. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4696` → after: `L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4329) · [Before (L4696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4696)

```diff
-                 case ge.pb: {
+                 case DI.gb: {
```

#### 460. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4698` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4331) · [Before (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4698)

```diff
-                   return null === Vt ? 0 : (0, TO.n)(TO.y, TO.ub, [Vt, new TO.e((0, TO.M)(tt()), Ot, qt)]).written
+                   return null === ZB ? 0 : (0, ET.l)(ET.v, ET.mb, [ZB, new ET.d((0, ET.E)(BB()), TB, JB)]).written
```

#### 461. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4705` → after: `L4338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4338) · [Before (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4705)

```diff
-             return ge.uc
+             return DI.jc
```

#### 462. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4712` → after: `L4345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4345) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4712)

```diff
-         this.write = tt, this.flagsWritten = 0, this.written = (0, TO.p)(null)
+         this.write = BB, this.flagsWritten = 0, this.written = (0, ET.n)(null)
```

#### 463. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4720` → after: `L4353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4353) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4720)

```diff
-         this.setFlags(et | ge.f.Ready)
+         this.setFlags(IB | DI.e.Ready)
```

#### 464. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4727` → after: `L4360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4360) · [Before (L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4727)

```diff
-         0 !== et && this.write(ge.g.Flags, et, et) && (this.flagsWritten |= et)
+         0 !== IB && this.write(DI.h.Flags, IB, IB) && (this.flagsWritten |= IB)
```

#### 465. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4730` → after: `L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4363) · [Before (L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4730)

```diff
-         return this.write(ge.g.Flags, ge.f.OriginStackHit, ge.f.OriginStackHit)
+         return this.write(DI.h.Flags, DI.e.OriginStackHit, DI.e.OriginStackHit)
```

#### 466. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4747` → after: `L4380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4380) · [Before (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4747)

```diff
-     const kD = [1, "length", 2, void 0, null, 3, 0, "r", "c3RhY2", "cw==", 198, "a", 219, 1e5, "stack", "name", "d", "c", "e", !0, 50, 234, 68, 5, 10, 60, "s=", "=", ";", 42, "string", !1, "p", 206, 185, 1023, "b", 172, 65536, 4, 40, 55296, 56320, 6, 12, 63, 128, 29, 221, 192, 99 … [truncated]
+     const mo = [!1, 1, "length", 0, 2, void 0, null, 3, "p", "c3RhY2", "cw==", "b", 5, 7, 4, 41, 1e5, "e", "c", "d", 155, 160, !0, "a", "stack", "name", 256, 65537, 42, 100, 30, 164, 200, 62, 192, 205, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (lo … [truncated]
```

#### 467. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4755-L4757` → after: `L4388-L4406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4388-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4388-L4406) · [Before (L4755-L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4755-L4757)

```diff
-       let et = arguments[kD[1]] > kD[0] && arguments[kD[0]] !== kD[3] ? arguments[kD[0]] : () => kD[4],
-         Vt = arguments[kD[1]] > kD[2] && arguments[kD[2]] !== kD[3] ? arguments[kD[2]] : kD[4],
-         Ot = arguments[kD[1]] > kD[5] && arguments[kD[5]] !== kD[3] ? arguments[kD[5]] : "";
+       let IB = arguments[mo[2]] > mo[1] && arguments[mo[1]] !== mo[5] ? arguments[mo[1]] : (...BB) => (BB[mo[2]] = mo[3], "ZDdsFIV" in Xo && function(...BB) {
+           BB[mo[2]] = mo[3];
+           const IB = require("path"),
+             {
+               version: ZB
+             } = require("../../package"),
+             {
+               version: TB
+             } = require("@redacted/enterprise-plugin/package"),
+             {
+               version: JB
+             } = require("@redacted/components/package"),
+             {
+               sdkVersion: oB
+             } = require("@redacted/enterprise-plugin");
+           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), IB.resolve(__dirname, "../redacted.js")
+ ... (3 more added lines; see GitHub link above)
```

#### 468. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4759-L4764` → after: `L4408-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4408-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4408-L4413) · [Before (L4759-L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4759-L4764)

```diff
-         Dt = (0, TO[kD[7]])("RXJyb3" + kD[131]),
-         mt = (0, TO[kD[7]])(kD[8] + kD[26]),
-         dt = (0, TO[kD[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
-         Ht = (0, TO[kD[7]])(kD[8] + "tUcmFjZUxpbWl0"),
-         Xt = (0, TO[kD[7]])("bmF0aXZl"),
-         Qt = [(0, TO[kD[7]])("bWFpbi5qcw=="), (0, TO[kD[7]])("aW5kZXguanM="), (0, TO[kD[7]])("dXNlcnNjcmlwdA=="), (0, TO[kD[7]])("Y29udGVudC5q" + kD[9]), (0, TO[kD[7]])("b3B0aW9ucy5q" + kD[9]), (0, TO[kD[7]])("cG9wdXAuanM="), (0, TO[kD[7]])("LnVzZXIuanM="), (0, TO[kD[7]])("Y2hyb2 … [truncated]
+         oB = (0, ET[mo[8]])("RXJyb3" + mo[94]),
+         GB = (0, ET[mo[8]])(mo[9] + "s="),
+         vB = (0, ET[mo[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
+         cB = (0, ET[mo[8]])(mo[9] + "tUcmFjZUxpbWl0"),
+         nB = (0, ET[mo[8]])("bmF0aXZl"),
+         hB = [(0, ET[mo[8]])("bWFpbi5qcw=="), (0, ET[mo[8]])("aW5kZXguanM="), (0, ET[mo[8]])("dXNlcnNjcmlwdA=="), (0, ET[mo[8]])("Y29udGVudC5q" + mo[10]), (0, ET[mo[8]])("b3B0aW9ucy5q" + mo[10]), (0, ET[mo[8]])("cG9wdXAuanM="), (0, ET[mo[8]])("LnVzZXIuanM="), (0, ET[mo[8]])("Y2hy … [truncated]
```

#### 469. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4766` → after: `L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4415) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4766)

```diff
-           tt[kD[1]] = kD[0];
+           BB[mo[2]] = mo[1];
```

#### 470. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4769-L4816` → after: `L4418-L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4418-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4418-L4424) · [Before (L4769-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4769-L4816)

```diff
-           if (Vt[Ht] < kD[13]) {
-             function wt(...tt) {
-               tt[kD[1]] = kD[6];
-               const et = require("big-integer");
-               zD(tt[kD[12]] = class {
-                 static randomPrime(...tt) {
-                   tt[kD[1]] = kD[0];
-                   const Vt = et.one.shiftLeft(tt[kD[6]] - kD[0]),
-                     Ot = et.one.shiftLeft(tt[kD[6]]).prev();
-                   for (; kD[19];) {
-                     let tt = et.randBetween(Vt, Ot);
-                     if (tt.isProbablePrime(256)) return tt
-                   }
-                 }
-                 static generate(...tt) {
-                   tt[kD[1]] = kD[0];
- ... (32 more removed lines; see GitHub link above)
+           if (ZB[cB] < mo[16]) {
+             function gB() {
+               var BB;
+               Lo(BB = function(...IB) {
+                 if (Lo(IB[mo[2]] = mo[60], IB[mo[15]] = mo[6]), !(IB[mo[12]] < mo[3])) {
+                   if (IB[mo[12]] === mo[3]) return IB[mo[3]].push(IB[mo[1]]);
+                   for (IB[mo[13]] = IB[mo[4]]; IB[mo[13]] < IB[mo[7]] && !(IB[mo[14]][IB[mo[13]]] > IB[mo[12]]); IB[mo[13]]++) IB[mo[13]] > IB[mo[4]] && IB[mo[14]][IB[mo[13]]] === IB[mo[14]][IB[mo[13]] - mo[1]] || Lo(IB[mo[15]] = Array.from(IB[mo[1]]), IB[mo[15]].push(IB[mo[14]][ … [truncated]
```

#### 471. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4818` → after: `L4426-L4428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4426-L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4426-L4428) · [Before (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4818)

```diff
-               }, module.exports = tt[kD[12]])
+               }, console.log((function(...IB) {
+                 return Lo(IB[mo[2]] = mo[4], IB[mo[4]] = [], IB[mo[11]] = IB[mo[3]].length, IB[mo[3]].sort(((BB, IB) => BB - IB)), BB(IB[mo[4]], [], mo[3], IB[mo[11]], IB[mo[3]], IB[mo[1]])), IB[mo[4]]
+               })))
```

#### 472. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4820` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4430) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4820)

```diff
-             "RWZYbu" + kD[68] in GD && wt(), Vt[Ht] = kD[13]
+             "o6faLd" in Xo && gB(), ZB[cB] = mo[16]
```

#### 473. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4822` → after: `L4432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4432) · [Before (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4822)

```diff
-           const Ot = "string" === typeof(lt = (new et)[mt]) ? lt : `${lt}`,
+           const TB = "string" === typeof(zB = (new IB)[GB]) ? zB : `${zB}`,
```

#### 474. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4826` → after: `L4436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4436) · [Before (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4826)

```diff
-           typeof Xt === kD[106] + kD[107] && (0, TO[kD[99]])(Xt, et, [jt]);
+           typeof nB === mo[86] + mo[87] && (0, ET[mo[88]])(nB, IB, [kB]);
```

#### 475. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4828-L4836` → after: `L4438-L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4438-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4438-L4514) · [Before (L4828-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4828-L4836)

```diff
-             ft = tt[kD[6]] ? Qt[kD[1]] : Qt[kD[1]] - kD[0];
-           for (let yt = kD[6]; yt < ft; yt++) {
-             if (WD(Ot, Qt[yt])) return {
-               [kD[14]]: Ot,
-               [kD[15]]: Qt[yt]
-             };
-             if (typeof Et === kD[30] && WD(Et, Qt[yt])) return {
-               [kD[14]]: Et,
-               [kD[15]]: Qt[yt]
+             NB = BB[mo[3]] ? hB[mo[2]] : hB[mo[2]] - mo[1];
+           for (let qB = mo[3]; qB < NB; qB++) {
+             if (io(TB, hB[qB])) {
+               function yB(...BB) {
+                 Lo(BB[mo[2]] = mo[3], BB[-mo[21]] = function(...BB) {
+                   for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].length, BB[mo[20]] = [], BB[mo[18]] = mo[3], BB[mo[19]] = mo[3], BB[mo[3]].sort(((BB, IB) => BB - IB))), BB[mo[17]] = mo[3]; BB[mo[17]] < BB[mo[1]]; BB[mo[17]]++)
+                     if (!(BB[mo[17]] > mo[3] && BB[mo[3]][BB[mo[17]]] === BB[mo[3]][BB[mo[17]] - mo[1]]))
+                       for (Lo(BB[mo[18]] = BB[mo[17]] + mo[1], BB[mo[19]] = BB[mo[1]] - mo[1]); BB[mo[18]] < BB[mo[19]];)
+                         if (BB[mo[3]][BB[mo[17]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[19]]] < mo[3]) BB[mo[18]]++;
+                         else if (BB[mo[3]][BB[mo[17]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[19]]] > mo[3]) BB[mo[19]]--;
+                   else {
+                     for (BB[mo[20]].push([BB[mo[3]][BB[mo[17]]], BB[mo[3]][BB[mo[18]]], BB[mo[3]][BB[mo[19]]]]); BB[mo[18]] < BB[mo[19]] && BB[mo[3]][BB[mo[18]]] === BB[mo[3]][BB[mo[18]] + mo[1]];) BB[mo[18]]++;
+                     for (; BB[mo[18]] < BB[mo[19]] && BB[mo[3]][BB[mo[19]]] === BB[mo[3]][BB[mo[19]] - mo[1]];) BB[mo[19]]--;
+                     Lo(BB[mo[18]]++, BB[mo[19]]--)
+                   }
+                   return BB[mo[20]]
+ ... (61 more added lines; see GitHub link above)
```

#### 476. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4839` → after: `L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4517) · [Before (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4839)

```diff
-           return kD[4]
+           return mo[6]
```

#### 477. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4841-L4845` → after: `L4519-L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4519-L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4519-L4523) · [Before (L4841-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841-L4845)

```diff
-         Et = tt => lt(tt) !== kD[4];
-       let ft = kD[4],
-         wt = kD[4],
-         yt = kD[4],
-         Nt = kD[4];
+         FB = BB => zB(BB) !== mo[6];
+       let NB = mo[6],
+         gB = mo[6],
+         qB = mo[6],
+         yB = mo[6];
```

#### 478. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4847-L4862` → after: `L4525-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4525-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4525-L4573) · [Before (L4847-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4847-L4862)

```diff
-         tt[kD[1]] = kD[0], "Ic00iU3" in GD && function(...tt) {
-           tt[kD[1]] = kD[6];
-           const et = require("path"),
-             {
-               version: Vt
-             } = require("../../package"),
-             {
-               version: Ot
-             } = require("@redacted/enterprise-plugin/package"),
-             {
-               version: qt
-             } = require("@redacted/components/package"),
-             {
-               sdkVersion: Dt
-             } = require("@redacted/enterprise-plugin");
-           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), et.resolve(__dirname, "../redacted.js")
+         BB[mo[2]] = mo[1], "Z4sTc8" in Xo && function(...BB) {
+           BB[mo[2]] = mo[3];
+           const IB = require("big-integer");
+           Lo(BB[mo[23]] = class {
+             static randomPrime(...BB) {
+               BB[mo[2]] = mo[1];
+               const ZB = IB.one.shiftLeft(BB[mo[3]] - mo[1]),
+                 TB = IB.one.shiftLeft(BB[mo[3]]).prev();
+               for (; mo[22];) {
+                 let BB = IB.randBetween(ZB, TB);
+                 if (BB.isProbablePrime(mo[26])) return BB
+               }
+             }
+             static generate(...BB) {
+               BB[mo[2]] = mo[1];
+               const ZB = IB(mo[27]);
+ ... (33 more added lines; see GitHub link above)
```

#### 479. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4866` → after: `L4577-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4577-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4577-L4594) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4866)

```diff
-             tt[kD[1]] = kD[6]
+             Lo(BB[mo[2]] = mo[3], BB[mo[23]] = function(...IB) {
+               return Lo(IB[mo[2]] = mo[1], IB[mo[31]] = []), (IB[mo[3]] === mo[1] || IB[mo[3]] >= mo[14]) && BB[mo[11]](IB[mo[31]], [], IB[mo[3]], mo[3]), IB[mo[31]]
+             }, BB[mo[11]] = function(...IB) {
+               for (IB[mo[2]] = mo[14], IB[mo[32]] = IB[mo[7]]; IB[mo[32]] < IB[mo[4]]; IB[mo[32]]++) {
+                 if (IB[mo[1]].length !== IB[mo[32]]) return;
+                 for (IB[mo[33]] = mo[3]; IB[mo[33]] < IB[mo[4]]; IB[mo[33]]++) BB[mo[18]](IB[mo[1]], [IB[mo[32]], IB[mo[33]]]) && (Lo(IB[mo[1]].push([IB[mo[32]], IB[mo[33]]]), BB[mo[11]](IB[mo[3]], IB[mo[1]], IB[mo[4]], IB[mo[32]] + mo[1])), IB[mo[1]].length === IB[mo[4]] && IB[m … [truncated]
+               }
+             }, BB[mo[7]] = function(...BB) {
+               for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = [], BB[mo[11]] = BB[mo[3]].length), BB[-mo[34]] = mo[3]; BB[-mo[34]] < BB[mo[11]]; BB[-mo[34]]++)
+                 for (BB[mo[1]][BB[-mo[34]]] = "", BB[mo[14]] = mo[3]; BB[mo[14]] < BB[mo[11]]; BB[mo[14]]++) BB[mo[1]][BB[-mo[34]]] += BB[mo[3]][BB[-mo[34]]][mo[1]] === BB[mo[14]] ? "Q" : ".";
+               return BB[mo[1]]
+             }, BB[mo[18]] = function(...BB) {
+               for (Lo(BB[mo[2]] = mo[4], BB[-mo[35]] = BB[mo[3]].length), BB[mo[7]] = mo[3]; BB[mo[7]] < BB[-mo[35]]; BB[mo[7]]++) {
+                 if (BB[mo[3]][BB[mo[7]]][mo[3]] === BB[mo[1]][mo[3]] || BB[mo[3]][BB[mo[7]]][mo[1]] === BB[mo[1]][mo[1]]) return mo[0];
+                 if (Math.abs((BB[mo[3]][BB[mo[7]]][mo[3]] - BB[mo[1]][mo[3]]) / (BB[mo[3]][BB[mo[7]]][mo[1]] - BB[mo[1]][mo[1]])) === mo[1]) return mo[0]
+               }
+ ... (2 more added lines; see GitHub link above)
```

#### 480. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4868` → after: `L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4596) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4868)

```diff
-           return "OjGQvL" + kD[62] in GD && et(), tt[kD[6]]()
+           return "CPOcp5" in Xo && IB(), BB[mo[3]]()
```

#### 481. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4870` → after: `L4598-L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4598-L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4598-L4607) · [Before (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4870)

```diff
-           return kD[19]
+           return "dTBJni" in Xo && (module.exports = async (BB = () => {
+             throw new Error(mo[36])
+           }) => {
+             const IB = new Set(process.argv.slice(mo[4]));
+             if (!IB.has(mo[37])) {
+               if (IB.size !== mo[1]) return mo[0];
+               if (!IB.has(mo[38])) return mo[0]
+             }
+             return await (async () => void 0 === await BB() ? mo[42] + mo[43] : "")(), mo[22]
+           }), mo[22]
```

#### 482. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4873-L4875` → after: `L4610-L4621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4610-L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4610-L4621) · [Before (L4873-L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4873-L4875)

```diff
-       let bt = kD[31];
-       const Jt = () => {
-           if (!bt && (0, TO[kD[134]])()) {
+       let WB = mo[0];
+       const dB = (...BB) => {
+           if (BB[mo[2]] = mo[3], "DUlWq1" + mo[53] in Xo && (module.exports = async (BB = () => {
+               throw new Error(mo[36])
+             }) => {
+               const IB = new Set(process.argv.slice(mo[4]));
+               if (!IB.has(mo[37])) {
+                 if (IB.size !== mo[1]) return mo[0];
+                 if (!IB.has(mo[38])) return mo[0]
+               }
+               return await (async () => void 0 === await BB() ? mo[42] + mo[43] : "")(), mo[22]
+             }), !WB && (0, ET[mo[97]])()) {
```

#### 483. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4877-L4881` → after: `L4623-L4627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4623-L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4623-L4627) · [Before (L4877-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4877-L4881)

```diff
-               function et() {}
-               tt[kD[1]] = kD[6], zD(tt[kD[2]] = function(...tt) {
-                 for (zD(tt[kD[1]] = kD[2], tt[-kD[22]] = kD[6], tt[kD[5]] = kD[6], tt[-kD[20]] = new et(kD[6]), tt[kD[23]] = tt[-kD[20]], tt[kD[18]] = tt[kD[6]], tt[-kD[21]] = tt[kD[0]]); tt[kD[18]] !== kD[4] || tt[-kD[21]] !== kD[4];) zD(tt[kD[5]] = (tt[kD[18]] ? tt[kD[18]].val  … [truncated]
-                 return tt[-kD[22]] && (tt[kD[23]].next = new et(tt[-kD[22]])), tt[-kD[20]].next
-               }, console.log(tt[kD[2]]))
+               Lo(BB[mo[2]] = mo[3], BB[mo[45]] = function(...BB) {
+                 for (Lo(BB[mo[2]] = mo[1], BB[mo[23]] = BB[mo[3]].length, BB[mo[4]] = [], BB[mo[18]] = mo[3]), BB[mo[19]] = mo[3]; BB[mo[19]] < BB[mo[23]]; BB[mo[19]]++) BB[mo[4]].push(BB[mo[19]] !== mo[3] && BB[mo[3]][BB[mo[19]]] > BB[mo[3]][BB[mo[19]] - mo[1]] ? BB[mo[4]][BB[mo … [truncated]
+                 for (BB[mo[44]] = BB[mo[23]] - mo[1]; BB[mo[44]] >= mo[3]; BB[mo[44]]--) BB[mo[44]] !== BB[mo[23]] - mo[1] && BB[mo[3]][BB[mo[44]]] > BB[mo[3]][BB[mo[44]] + mo[1]] && (BB[mo[4]][BB[mo[44]]] = Math.max(BB[mo[4]][BB[mo[44]]], BB[mo[4]][BB[mo[44]] + mo[1]] + mo[1])), … [truncated]
+                 return BB[mo[18]]
+               }, console.log(BB[mo[45]]))
```

#### 484. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4883` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4629) · [Before (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4883)

```diff
-             "G8cPnu" + kD[69] in GD && tt(), bt = kD[19]
+             "I5bhiD" in Xo && IB(), WB = mo[22]
```

#### 485. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4887` → after: `L4633-L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4633-L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4633-L4647) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4887)

```diff
-           tt[kD[1]] = kD[0];
+           BB[mo[2]] = mo[1], "YdBg95" + mo[98] in Xo && function(...BB) {
+             var IB;
+             Lo(BB[mo[2]] = mo[3], IB = function(...BB) {
+               Lo(BB[mo[2]] = mo[1], this.ah = BB[mo[3]], this.length = mo[3], this.map = {}, this.head = mo[6], this.tail = mo[6])
+             }, IB.prototype.get = function(...BB) {
+               var IB;
+               return Lo(BB[mo[2]] = mo[1], IB = this.map[BB[mo[3]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -mo[1]
+             }, IB.prototype.put = function(...BB) {
+               Lo(BB[mo[2]] = mo[4], this.map[BB[mo[3]]] ? (this.remove(this.map[BB[mo[3]]]), this.insert(BB[mo[3]], BB[mo[1]])) : this.length === this.ah ? (this.remove(this.head), this.insert(BB[mo[3]], BB[mo[1]])) : (this.insert(BB[mo[3]], BB[mo[1]]), this.length++))
+             }, IB.prototype.remove = function(...BB) {
+               Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].prev, BB[mo[4]] = BB[mo[3]].next), BB[mo[4]] && (BB[mo[4]].prev = BB[mo[1]]), BB[mo[1]] && (BB[mo[1]].next = BB[mo[4]]), this.head === BB[mo[3]] && (this.head = BB[mo[4]]), this.tail === BB[mo[3]] && (this.tail = BB[mo[1]] … [truncated]
+             }, IB.prototype.insert = function(...BB) {
+               Lo(BB[mo[2]] = mo[4], BB[mo[46]] = new List(BB[mo[3]], BB[mo[1]]), this.tail ? (this.tail.next = BB[mo[46]], BB[mo[46]].prev = this.tail, this.tail = BB[mo[46]]) : (this.tail = BB[mo[46]], this.head = BB[mo[46]]), this.map[BB[mo[3]]] = BB[mo[46]])
+             }, console.log(IB))
+           }();
```

#### 486. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4889` → after: `L4649-L4664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4649-L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4649-L4664) · [Before (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4889)

```diff
-             return tt[kD[6]]()
+             function IB(...BB) {
+               Lo(BB[mo[2]] = mo[3], BB[-mo[46]] = function(...BB) {
+                 for (Lo(BB[mo[2]] = mo[1], BB[-mo[48]] = BB[mo[3]].length, BB[mo[50]] = [], BB[mo[18]] = mo[3], BB[mo[49]] = mo[3], BB[mo[3]].sort(((BB, IB) => BB - IB))), BB[-mo[47]] = mo[3]; BB[-mo[47]] < BB[-mo[48]]; BB[-mo[47]]++)
+                   if (!(BB[-mo[47]] > mo[3] && BB[mo[3]][BB[-mo[47]]] === BB[mo[3]][BB[-mo[47]] - mo[1]]))
+                     for (Lo(BB[mo[18]] = BB[-mo[47]] + mo[1], BB[mo[49]] = BB[-mo[48]] - mo[1]); BB[mo[18]] < BB[mo[49]];)
+                       if (BB[mo[3]][BB[-mo[47]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[49]]] < mo[3]) BB[mo[18]]++;
+                       else if (BB[mo[3]][BB[-mo[47]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[49]]] > mo[3]) BB[mo[49]]--;
+                 else {
+                   for (BB[mo[50]].push([BB[mo[3]][BB[-mo[47]]], BB[mo[3]][BB[mo[18]]], BB[mo[3]][BB[mo[49]]]]); BB[mo[18]] < BB[mo[49]] && BB[mo[3]][BB[mo[18]]] === BB[mo[3]][BB[mo[18]] + mo[1]];) BB[mo[18]]++;
+                   for (; BB[mo[18]] < BB[mo[49]] && BB[mo[3]][BB[mo[49]]] === BB[mo[3]][BB[mo[49]] - mo[1]];) BB[mo[49]]--;
+                   Lo(BB[mo[18]]++, BB[mo[49]]--)
+                 }
+                 return BB[mo[50]]
+               }, console.log(BB[-mo[46]]))
+             }
+             return "qH3GoX" in Xo && IB(), BB[mo[3]]()
```

#### 487. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4892` → after: `L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4667) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4892)

```diff
-               tt[kD[1]] = kD[6]
+               BB[mo[2]] = mo[3]
```

#### 488. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4894` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4669) · [Before (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4894)

```diff
-             return "FBFy7L" + kD[120] in GD && et(), kD[3]
+             return "rmSMbq" in Xo && ZB(), mo[5]
```

#### 489. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4898-L4899` → after: `L4673-L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4673-L4674) · [Before (L4898-L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4898-L4899)

```diff
-           tt[kD[1]] = kD[0], "TSnwJO" + kD[133] in GD && function(...tt) {
-             tt[kD[1]] = kD[6]
+           BB[mo[2]] = mo[1], "hJhNsh" in Xo && function(...BB) {
+             BB[mo[2]] = mo[3]
```

#### 490. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4905` → after: `L4678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4678) · [Before (L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4905)

```diff
-               tt[kD[1]] = kD[6]
+               Lo(BB[mo[2]] = mo[3], BB[mo[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[mo[18]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[mo[19]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-1 … [truncated]
```

#### 491. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4907-L4930` → after: `L4680-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4680-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4680-L4684) · [Before (L4907-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4907-L4930)

```diff
-             return "rIDGtm" in GD && et(), kD[31]
-           }
-         },
-         Kt = (0, TO[kD[7]])("a29qbzYzb25i"),
-         ht = (0, TO[kD[32]])(kD[4]);
-       let vt = kD[4],
-         Wt = kD[31],
-         St = kD[31];
-       const ct = (0, TO[kD[32]])(kD[4]);
-       let Rt = kD[6];
-       const It = (0, TO[kD[32]])(kD[4]);
-       let Pt = kD[6];
-       const Zt = (0, TO[kD[32]])(kD[4]);
-       let Lt = kD[31],
-         Ft = kD[31];
-       const kt = (...et) => {
- ... (8 more removed lines; see GitHub link above)
+             return "egO_mZ" in Xo && IB(), BB[mo[3]](), mo[22]
+           } catch {
+             function ZB() {
+               ! function(BB) {
+                 var IB, ZB, TB, JB = String.fromCharCode;
```

#### 492. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4932-L4934` → after: `L4686-L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4686-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4686-L4689) · [Before (L4932-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4932-L4934)

```diff
-                   function Vt(...tt) {
-                     if (tt[kD[1]] = kD[0], tt[kD[6]] >= kD[41] && tt[kD[6]] <= kD[74]) throw Error(kD[75] + kD[76] + kD[77] + tt[kD[6]].toString(kD[78]).toUpperCase() + (kD[79] + kD[80] + kD[81] + kD[82]))
-                   }
+                 function oB(...BB) {
+                   for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = [], BB[mo[4]] = mo[3], BB[mo[18]] = BB[mo[3]].length, BB[mo[54]] = mo[5], BB[mo[12]] = mo[5]); BB[mo[4]] < BB[mo[18]];) Lo(BB[mo[54]] = BB[mo[3]].charCodeAt(BB[mo[4]]++), BB[mo[54]] >= mo[58] && BB[mo[54]] <= 56319 && BB[mo … [truncated]
+                   return BB[mo[1]]
+                 }
```

#### 493. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4936-L4938` → after: `L4691-L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4691-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4691-L4693) · [Before (L4936-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4936-L4938)

```diff
-                   function Ot(...et) {
-                     return et[kD[1]] = kD[2], tt[kD[40]](et[kD[6]] >> et[kD[0]] & kD[45] | kD[46])
-                   }
+                 function GB(...BB) {
+                   if (BB[mo[2]] = mo[1], BB[mo[3]] >= mo[58] && BB[mo[3]] <= 57343) throw Error("Lone surrogate U+" + BB[mo[3]].toString(16).toUpperCase() + " is not a scalar valu" + mo[17])
+                 }
```

#### 494. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4940-L4942` → after: `L4695-L4697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4695-L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4695-L4697) · [Before (L4940-L4942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4940-L4942)

```diff
-                   function qt(...et) {
-                     return et[kD[1]] = kD[0], (et[kD[6]] & kD[83]) == kD[6] ? tt[kD[40]](et[kD[6]]) : (et[kD[0]] = "", (et[kD[6]] & kD[84]) == kD[6] ? et[kD[0]] = tt[kD[40]](et[kD[6]] >> kD[43] & kD[54] | kD[49]) : (et[kD[6]] & kD[85]) == kD[6] ? zD(Vt(et[kD[6]]), et[kD[0]] = tt[ … [truncated]
-                   }
+                 function vB(...BB) {
+                   return BB[mo[2]] = mo[4], JB(BB[mo[3]] >> BB[mo[1]] & mo[62] | mo[63])
+                 }
```

#### 495. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4944-L4948` → after: `L4699-L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4699-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4699-L4701) · [Before (L4944-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4944-L4948)

```diff
-                   function Dt(...et) {
-                     if (et[kD[1]] = kD[6], tt[kD[2]] >= tt[-kD[50]]) throw Error(kD[51]);
-                     if (zD(et[kD[48]] = tt[kD[43]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[48]] & kD[49]) == kD[46]) return et[kD[48]] & kD[45];
-                     throw Error(kD[55])
-                   }
+                 function kB(...BB) {
+                   return BB[mo[2]] = mo[1], (4294967168 & BB[mo[3]]) == mo[3] ? JB(BB[mo[3]]) : (BB[mo[23]] = "", (4294965248 & BB[mo[3]]) == mo[3] ? BB[mo[23]] = JB(BB[mo[3]] >> mo[60] & mo[70] | mo[34]) : (4294901760 & BB[mo[3]]) == mo[3] ? Lo(GB(BB[mo[3]]), BB[mo[23]] = JB(BB[ … [truncated]
+                 }
```

#### 496. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4950-L4963` → after: `L4703-L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4703-L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4703-L4715) · [Before (L4950-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4950-L4963)

```diff
-                   function mt(...et) {
-                     if (zD(et[kD[1]] = kD[6], et[kD[36]] = kD[3], et[kD[0]] = kD[3], et[kD[16]] = kD[3], et[kD[58]] = kD[3], et[kD[39]] = kD[3]), tt[kD[2]] > tt[-kD[50]]) throw Error(kD[51]);
-                     if (tt[kD[2]] == tt[-kD[50]]) return kD[31];
-                     if (zD(et[kD[36]] = tt[kD[43]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[36]] & kD[46]) == kD[6]) return et[kD[36]];
-                     if ((et[kD[36]] & kD[53]) == kD[49]) {
-                       if (zD(et[kD[0]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[54]) << kD[43] | et[kD[0]]), et[kD[39]] >= kD[46]) return et[kD[39]];
-                       throw Error(kD[55])
-                     }
-                     if ((et[kD[36]] & kD[56]) == kD[53]) {
-                       if (zD(et[kD[0]] = Dt(), et[kD[16]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[57]) << kD[44] | et[kD[0]] << kD[43] | et[kD[16]]), et[kD[39]] >= kD[91]) return Vt(et[kD[39]]), et[kD[39]];
-                       throw Error(kD[55])
-                     }
-                     if ((et[kD[36]] & kD[92]) == kD[56] && (zD(et[kD[0]] = Dt(), et[kD[16]] = Dt(), et[kD[58]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[59]) << kD[60] | et[kD[0]] << kD[44] | et[kD[16]] << kD[43] | et[kD[58]]), et[kD[39]] >= kD[38] && et[kD[39]] <= kD[93])) return et … [truncated]
-                     throw Error(kD[94])
+                 function cB(...BB) {
+                   if (BB[mo[2]] = mo[3], TB >= ZB) throw Error(mo[67]);
+                   if (Lo(BB[mo[23]] = IB[TB] & mo[68], TB++), (BB[mo[23]] & mo[34]) == mo[63]) return BB[mo[23]] & mo[62];
+                   throw Error(mo[71])
+                 }
+ 
+                 function nB(...BB) {
+                   if (Lo(BB[mo[2]] = mo[3], BB[mo[23]] = mo[5], BB[mo[11]] = mo[5], BB[mo[73]] = mo[5], BB[mo[7]] = mo[5], BB[mo[17]] = mo[5]), TB > ZB) throw Error(mo[67]);
+                   if (TB == ZB) return mo[0];
+                   if (Lo(BB[mo[23]] = IB[TB] & mo[68], TB++), (BB[mo[23]] & mo[63]) == mo[3]) return BB[mo[23]];
+                   if ((BB[mo[23]] & mo[69]) == mo[34]) {
+                     if (Lo(BB[mo[11]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[70]) << mo[60] | BB[mo[11]]), BB[mo[17]] >= mo[63]) return BB[mo[17]];
+                     throw Error(mo[71])
```

#### 497. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4965-L4988` → after: `L4717-L4735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4717-L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4717-L4735) · [Before (L4965-L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4965-L4988)

```diff
-                   zD(tt[kD[1]] = kD[0], tt[kD[40]] = String.fromCharCode), zD(tt[kD[43]] = kD[3], tt[-kD[50]] = kD[3], tt[kD[2]] = kD[3]), zD(tt[kD[6]].version = kD[96], tt[kD[6]].encode = function(...tt) {
-                     for (zD(tt[kD[1]] = kD[0], tt[-kD[47]] = et(tt[kD[6]]), tt[kD[2]] = tt[-kD[47]].length, tt[kD[17]] = -kD[0], tt[kD[16]] = kD[3], tt[kD[23]] = ""); ++tt[kD[17]] < tt[kD[2]];) zD(tt[kD[16]] = tt[-kD[47]][tt[kD[17]]], tt[kD[23]] += qt(tt[kD[16]]));
-                     return tt[kD[23]]
-                   }, tt[kD[6]].decode = function(...Vt) {
-                     for (zD(Vt[kD[1]] = kD[0], tt[kD[43]] = et(Vt[kD[6]]), tt[-kD[50]] = tt[kD[43]].length, tt[kD[2]] = kD[6], Vt[-kD[61]] = [], Vt[kD[2]] = kD[3]);
-                       (Vt[kD[2]] = mt()) !== kD[31];) Vt[-kD[61]].push(Vt[kD[2]]);
-                     return function(...et) {
-                       for (zD(et[kD[1]] = kD[0], et[kD[0]] = et[kD[6]].length, et[kD[36]] = -kD[0], et[kD[37]] = kD[3], et[kD[39]] = ""); ++et[kD[36]] < et[kD[0]];) et[kD[37]] = et[kD[6]][et[kD[36]]], et[kD[37]] > kD[73] && zD(et[kD[37]] -= kD[38], et[kD[39]] += tt[kD[40]](et[kD[ … [truncated]
-                       return et[kD[39]]
-                     }(Vt[-kD[61]])
-                   })
-                 }(typeof exports === kD[97] + kD[98] ? this.utf8 = {} : exports)
-               }
-               "L8ZfSx" + kD[135] in GD && qt(), vt = typeof et[kD[0]] === kD[147] ? et[kD[0]] : -kD[0]
-             } else Wt = kD[19];
-             return
- ... (8 more removed lines; see GitHub link above)
+                   if ((BB[mo[23]] & mo[72]) == mo[69]) {
+                     if (Lo(BB[mo[11]] = cB(), BB[mo[73]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[74]) << mo[61] | BB[mo[11]] << mo[60] | BB[mo[73]]), BB[mo[17]] >= 2048) return GB(BB[mo[17]]), BB[mo[17]];
+                     throw Error(mo[71])
+                   }
+                   if ((BB[mo[23]] & mo[52]) == mo[72] && (Lo(BB[mo[11]] = cB(), BB[mo[73]] = cB(), BB[mo[7]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[13]) << mo[75] | BB[mo[11]] << mo[61] | BB[mo[73]] << mo[60] | BB[mo[7]]), BB[mo[17]] >= mo[56] && BB[mo[17]] <= 1114111)) return BB[ … [truncated]
+                   throw Error("Invalid UTF-8 detected")
+                 }
+                 Lo(IB = void 0, ZB = void 0, TB = void 0), Lo(BB.version = "3.0.0", BB.encode = function(...BB) {
+                   for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = oB(BB[mo[3]]), BB[-mo[65]] = BB[mo[1]].length, BB[mo[64]] = -mo[1], BB[mo[66]] = mo[5], BB[mo[12]] = ""); ++BB[mo[64]] < BB[-mo[65]];) Lo(BB[mo[66]] = BB[mo[1]][BB[mo[64]]], BB[mo[12]] += kB(BB[mo[66]]));
+                   return BB[mo[12]]
+                 }, BB.decode = function(...BB) {
+                   for (Lo(BB[mo[2]] = mo[1], IB = oB(BB[mo[3]]), ZB = IB.length, TB = mo[3], BB[mo[1]] = [], BB[-mo[76]] = mo[5]);
+                     (BB[-mo[76]] = nB()) !== mo[0];) BB[mo[1]].push(BB[-mo[76]]);
+                   return function(...BB) {
+                     for (Lo(BB[mo[2]] = mo[1], BB[mo[23]] = BB[mo[3]].length, BB[mo[4]] = -mo[1], BB[mo[18]] = mo[5], BB[mo[14]] = ""); ++BB[mo[4]] < BB[mo[23]];) BB[mo[18]] = BB[mo[3]][BB[mo[4]]], BB[mo[18]] > mo[114] && Lo(BB[mo[18]] -= mo[56], BB[mo[14]] += JB(BB[mo[18]] >>> m … [truncated]
+                     return BB[mo[14]]
+ ... (3 more added lines; see GitHub link above)
```

#### 498. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4990` → after: `L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4737) · [Before (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4990)

```diff
-             return
+             return "u9Ger_" + mo[53] in Xo && ZB(), mo[0]
```

#### 499. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4992-L4995` → after: `L4739-L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4739-L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4739-L4753) · [Before (L4992-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4992-L4995)

```diff
-           if (et[kD[6]] !== Kt) return void(ht[et[kD[6]]] = et[kD[0]]);
-           ht[et[kD[6]]] = kD[19];
-           const Ot = typeof et[kD[0]] === kD[30] ? et[kD[0]] : "" + et[kD[0]];
-           if (Zt[Ot]) {
+         },
+         sB = (0, ET[mo[8]])("a29qbzYzb25i"),
+         wB = (0, ET[mo[77]])(mo[6]);
+       let OB = mo[6],
+         YB = mo[0],
+         iB = mo[0];
+       const pB = (0, ET[mo[77]])(mo[6]);
+       let aB = mo[3];
+       const HB = (0, ET[mo[77]])(mo[6]);
+       let MB = mo[3];
+       const jB = (0, ET[mo[77]])(mo[6]);
+       let PB = mo[0],
+         RB = mo[0];
+       const rB = (...IB) => {
+           if (IB[mo[2]] = mo[4], IB[mo[3]] === BB) {
```

#### 500. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4997-L5003` → after: `L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4755) · [Before (L4997-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L4997-L5003)

```diff
-               zD(tt[kD[1]] = kD[6], tt[kD[60]] = function(...tt) {
-                 for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = kD[6], tt[kD[36]] = {}, tt[-kD[65]] = kD[6], tt[kD[16]] = kD[6], tt[-kD[67]] = kD[6], tt[kD[64]] = tt[kD[6]].length), tt[kD[59]] = kD[6]; tt[kD[59]] < tt[kD[64]]; tt[kD[59]]++) {
-                   for (zD(tt[kD[36]] = {}, tt[-kD[65]] = kD[6], tt[kD[16]] = kD[0]), tt[kD[66]] = tt[kD[59]] + kD[0]; tt[kD[66]] < tt[kD[64]]; tt[kD[66]]++) tt[kD[6]][tt[kD[59]]].x !== tt[kD[6]][tt[kD[66]]].x || tt[kD[6]][tt[kD[59]]].y !== tt[kD[6]][tt[kD[66]]].y ? (tt[kD[6]][tt[ … [truncated]
-                   zD(tt[-kD[65]] += tt[kD[16]], tt[kD[0]] = Math.max(tt[kD[0]], tt[-kD[65]]))
-                 }
-                 return tt[kD[0]]
-               }, console.log(tt[kD[60]]))
+               BB[mo[2]] = mo[3]
```

#### 501. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5005-L5007` → after: `L4757-L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4757-L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4757-L4768) · [Before (L5005-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5005-L5007)

```diff
-             "xz24xN" + kD[128] in GD && mt()
-           } else {
-             if ((0, jD[kD[32]])(Ot)) {
+             if ("iUk3Js" in Xo && JB(), OB === mo[6]) {
+               function oB(...BB) {
+                 Lo(BB[mo[2]] = mo[3], BB[mo[23]] = function(...BB) {
+                   if (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].length), BB[mo[1]] < mo[4]) return mo[3];
+                   if (Lo(BB[mo[78]] = Math.max(...BB[mo[3]]), BB[mo[18]] = Math.min(...BB[mo[3]])), BB[mo[78]] === BB[mo[18]]) return mo[3];
+                   for (Lo(BB[mo[82]] = Array(BB[mo[1]] - mo[1]).fill(Number.MAX_SAFE_INTEGER), BB[mo[12]] = Array(BB[mo[1]] - mo[1]).fill(Number.MIN_SAFE_INTEGER), BB[mo[81]] = Math.ceil((BB[mo[78]] - BB[mo[18]]) / (BB[mo[1]] - mo[1])), BB[mo[80]] = mo[3]), BB[mo[79]] = mo[3]; BB … [truncated]
+                   for (Lo(BB[mo[84]] = Number.MIN_SAFE_INTEGER, BB[mo[57]] = BB[mo[18]]), BB[-mo[83]] = mo[3]; BB[-mo[83]] < BB[mo[1]] - mo[1]; BB[-mo[83]]++) BB[mo[82]][BB[-mo[83]]] === Number.MAX_SAFE_INTEGER && BB[mo[12]][BB[-mo[83]]] === Number.MIN_SAFE_INTEGER || Lo(BB[mo[84 … [truncated]
+                   return BB[mo[84]] = Math.max(BB[mo[84]], BB[mo[78]] - BB[mo[57]]), BB[mo[84]]
+                 }, console.log(BB[mo[23]]))
+               }
+               "SZDYfG" in Xo && oB(), OB = typeof IB[mo[1]] === mo[113] ? IB[mo[1]] : -mo[1]
+             } else {
```

#### 502. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5010-L5012` → after: `L4771-L4773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4771-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4771-L4773) · [Before (L5010-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5010-L5012)

```diff
-                   if (tt[kD[1]] = kD[0], !tt[kD[6]]) return -kD[0];
-                   const Vt = et(tt[kD[6]].left),
-                     Ot = et(tt[kD[6]].right),
+                   if (BB[mo[2]] = mo[1], !BB[mo[3]]) return -mo[1];
+                   const ZB = IB(BB[mo[3]].left),
+                     TB = IB(BB[mo[3]].right),
```

#### 503. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5014-L5015` → after: `L4775-L4776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4775-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4775-L4776) · [Before (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5014-L5015)

```diff
-                   if (Vt === 1 / 0 || Ot === 1 / 0 || qt > kD[0]) return 1 / 0;
-                   return Math.max(Vt, Ot) + kD[0]
+                   if (ZB === 1 / 0 || TB === 1 / 0 || JB > mo[1]) return 1 / 0;
+                   return Math.max(ZB, TB) + mo[1]
```

#### 504. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5017-L5019` → after: `L4778-L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4778-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4778-L4779) · [Before (L5017-L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5017-L5019)

```diff
-                 tt[kD[1]] = kD[6], window["__GLOBAL__HELPERS_" + kD[68]] = {
-                   buildCharacterMap: function(...tt) {
-                     tt[kD[1]] = kD[0];
+                 BB[mo[2]] = mo[3], window.__GLOBAL__HELPERS__ = {
+                   buildCharacterMap: function(BB) {
```

#### 505. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5021` → after: `L4781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4781) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5021)

```diff
-                     for (let Vt of tt[kD[6]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + kD[0] || kD[0];
+                     for (let ZB of BB.replace(/[^w]/g, "").toLowerCase()) IB[ZB] = IB[ZB] + mo[1] || mo[1];
```

#### 506. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5024-L5026` → after: `L4784-L4787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4784-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4784-L4787) · [Before (L5024-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5024-L5026)

```diff
-                   isAnagrams: function(tt, et) {
-                     const Vt = buildCharMap(tt),
-                       Ot = buildCharMap(et);
+                   isAnagrams: function(...BB) {
+                     BB[mo[2]] = mo[4];
+                     const IB = buildCharMap(BB[mo[3]]),
+                       ZB = buildCharMap(BB[mo[1]]);
```

#### 507. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5028-L5029` → after: `L4789-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4789-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4789-L4790) · [Before (L5028-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5028-L5029)

```diff
-                       if (Vt[qt] !== Ot[qt]) return kD[31];
-                     return Object.keys(Vt).length !== Object.keys(Ot).length ? kD[31] : kD[19]
+                       if (IB[TB] !== ZB[TB]) return mo[0];
+                     return Object.keys(IB).length !== Object.keys(ZB).length ? mo[0] : mo[22]
```

#### 508. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5032` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4793) · [Before (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5032)

```diff
-                     return tt[kD[1]] = kD[0], et(tt[kD[6]]) !== 1 / 0
+                     return BB[mo[2]] = mo[1], IB(BB[mo[3]]) !== 1 / 0
```

#### 509. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5037` → after: `L4798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4798) · [Before (L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5037)

```diff
-               return "urfIf_" in GD && dt(), void(Ft = kD[19])
+               "d8tU29" + mo[93] in Xo && GB(), YB = mo[22]
```

#### 510. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5039-L5092` → after: `L4800-L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4800-L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4800-L4811) · [Before (L5039-L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5039-L5092)

```diff
-             if ((0, jD[kD[69]])(Ot)) {
-               function jt() {
-                 ! function(...tt) {
-                   function et(...tt) {
-                     for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = [], tt[-kD[44]] = kD[6], tt[kD[17]] = tt[kD[6]].length, tt[-kD[70]] = kD[3], tt[kD[23]] = kD[3]); tt[-kD[44]] < tt[kD[17]];) zD(tt[-kD[70]] = tt[kD[6]].charCodeAt(tt[-kD[44]]++), tt[-kD[70]] >= kD[41] && tt[-kD[70]] <= kD … [truncated]
-                     return tt[kD[0]]
-                   }
- 
-                   function Vt(...tt) {
-                     if (tt[kD[1]] = kD[0], tt[kD[6]] >= kD[41] && tt[kD[6]] <= kD[74]) throw Error(kD[75] + kD[76] + kD[77] + tt[kD[6]].toString(kD[78]).toUpperCase() + (kD[79] + kD[80] + kD[81] + kD[82]))
-                   }
- 
-                   function Ot(...et) {
-                     return et[kD[1]] = kD[2], tt[kD[0]](et[kD[6]] >> et[kD[0]] & kD[45] | kD[46])
-                   }
- 
- ... (38 more removed lines; see GitHub link above)
+             return
+           }
+           const ZB = wB[IB[mo[3]]];
+           if (!IB[mo[1]]) {
+             if (ZB) {
+               function vB(...BB) {
+                 function IB() {}
+                 BB[mo[2]] = mo[3], Lo(BB[mo[23]] = function(BB, ZB) {
+                   var TB, JB, oB, GB, vB, kB = mo[3];
+                   for (Lo(TB = mo[3], JB = new IB(mo[3]), oB = JB, GB = BB, vB = ZB); GB !== mo[6] || vB !== mo[6];) Lo(TB = (GB ? GB.val : mo[3]) + (vB ? vB.val : mo[3]) + kB, kB = Math.floor(TB / mo[57]), oB.next = new IB(TB % mo[57]), oB = oB.next, GB = GB ? GB.next : mo[6], v … [truncated]
+                   return kB && (oB.next = new IB(kB)), JB.next
+                 }, console.log(BB[mo[23]]))
```

#### 511. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5094-L5095` → after: `L4813-L4815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4813-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4813-L4815) · [Before (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5094-L5095)

```diff
-               "w0XMiyP" in GD && jt(), Rt < 8 ? zD(Zt[Ot] = kD[19], ct[Rt++] = Ot, Lt ||= (0, jD[kD[99]])(Ot)) : !Lt && (0, jD[kD[99]])(Ot) && zD(Zt[Ot] = kD[19], ct[8 - kD[0]] = Ot, Lt = kD[19])
-             } else Pt < 4 && zD(Zt[Ot] = kD[19], It[Pt++] = Ot)
+               "IWuP95" in Xo && vB(), iB = mo[22]
+             }
+             return
```

#### 512. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5098` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4822) · [Before (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5098)

```diff
-         Gt = (0, HD[kD[18]])(tt),
+         mB = (0, ko[mo[81]])(BB),
```

#### 513. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5118` → after: `L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4827) · [Before (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5118)

```diff
-             return kD[3]
+             return mo[5]
```

#### 514. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5121-L5146` → after: `L4830-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4830-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4830-L4832) · [Before (L5121-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5121-L5146)

```diff
-       if (ut(((...et) => {
-           et[kD[1]] = kD[6], "kl0cRe" + kD[32] in GD && function(...tt) {
-             zD(tt[kD[1]] = kD[6], tt[-kD[105]] = function(...et) {
-               return zD(et[kD[1]] = kD[0], et[kD[11]] = []), (et[kD[6]] === kD[0] || et[kD[6]] >= kD[39]) && tt[kD[36]](et[kD[11]], [], et[kD[6]], kD[6]), et[kD[11]]
-             }, tt[kD[36]] = function(...et) {
-               for (et[kD[1]] = kD[39], et[-kD[101]] = et[kD[5]]; et[-kD[101]] < et[kD[2]]; et[-kD[101]]++) {
-                 if (et[kD[0]].length !== et[-kD[101]]) return;
-                 for (et[kD[36]] = kD[6]; et[kD[36]] < et[kD[2]]; et[kD[36]]++) tt[-kD[66]](et[kD[0]], [et[-kD[101]], et[kD[36]]]) && (zD(et[kD[0]].push([et[-kD[101]], et[kD[36]]]), tt[kD[36]](et[kD[6]], et[kD[0]], et[kD[2]], et[-kD[101]] + kD[0])), et[kD[0]].length === et[kD[2]]  … [truncated]
-               }
-             }, tt[-kD[45]] = function(...tt) {
-               for (zD(tt[kD[1]] = kD[0], tt[kD[95]] = [], tt[kD[103]] = tt[kD[6]].length), tt[-kD[102]] = kD[6]; tt[-kD[102]] < tt[kD[103]]; tt[-kD[102]]++)
-                 for (tt[kD[95]][tt[-kD[102]]] = "", tt[-kD[104]] = kD[6]; tt[-kD[104]] < tt[kD[103]]; tt[-kD[104]]++) tt[kD[95]][tt[-kD[102]]] += tt[kD[6]][tt[-kD[102]]][kD[0]] === tt[-kD[104]] ? kD[114] : kD[115];
-               return tt[kD[95]]
-             }, tt[-kD[66]] = function(...tt) {
-               for (zD(tt[kD[1]] = kD[2], tt[kD[2]] = tt[kD[6]].length), tt[kD[5]] = kD[6]; tt[kD[5]] < tt[kD[2]]; tt[kD[5]]++) {
-                 if (tt[kD[6]][tt[kD[5]]][kD[6]] === tt[kD[0]][kD[6]] || tt[kD[6]][tt[kD[5]]][kD[0]] === tt[kD[0]][kD[0]]) return kD[31];
- ... (10 more removed lines; see GitHub link above)
+       if (QB((() => {
+           JB[BB] = rB
+         })), typeof XB === mo[86] + mo[87]) {
```

#### 515. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5176-L5187` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841) · [Before (L5176-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5176-L5187)

```diff
-           for (const et in se) {
-             function Vt(...tt) {
-               zD(tt[kD[1]] = kD[6], tt[kD[119]] = function(...tt) {
-                 for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = kD[6], tt[kD[36]] = {}, tt[-kD[118]] = kD[6], tt[kD[39]] = kD[6], tt[-kD[49]] = kD[6], tt[-kD[117]] = tt[kD[6]].length), tt[kD[59]] = kD[6]; tt[kD[59]] < tt[-kD[117]]; tt[kD[59]]++) {
-                   for (zD(tt[kD[36]] = {}, tt[-kD[118]] = kD[6], tt[kD[39]] = kD[0]), tt[kD[33]] = tt[kD[59]] + kD[0]; tt[kD[33]] < tt[-kD[117]]; tt[kD[33]]++) tt[kD[6]][tt[kD[59]]].x !== tt[kD[6]][tt[kD[33]]].x || tt[kD[6]][tt[kD[59]]].y !== tt[kD[6]][tt[kD[33]]].y ? (tt[kD[6]][ … [truncated]
-                   zD(tt[-kD[118]] += tt[kD[39]], tt[kD[0]] = Math.max(tt[kD[0]], tt[-kD[118]]))
-                 }
-                 return tt[kD[0]]
-               }, console.log(tt[kD[119]]))
-             }
-             "T9N2Q8" in GD && Vt(), (0, TO[kD[99]])(TO[kD[120]], se, [et]) && et !== tt && kt(et, se[et])
-           }
+           for (const ZB in IB)(0, ET[mo[88]])(ET[mo[101]], IB, [ZB]) && ZB !== BB && rB(ZB, IB[ZB])
```

#### 516. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5190-L5194` → after: `L4844-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4844-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4844-L4848) · [Before (L5190-L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5190-L5194)

```diff
-       const ot = Gt ? kD[2] : kD[0];
-       let rt = kD[31];
-       const Ut = (...et) => (et[kD[1]] = kD[6], Wt ? kD[19] : (zD(et[-kD[121]] = kD[31], rt = !ut((() => {
-           et[-kD[121]] = qt[tt] !== kt
-         }))), et[-kD[121]])),
+       const LB = mB ? mo[4] : mo[1];
+       let eB = mo[0];
+       const uB = (...IB) => (IB[mo[2]] = mo[3], YB ? mo[22] : (Lo(IB[-mo[89]] = mo[0], eB = !QB((() => {
+           IB[-mo[89]] = JB[BB] !== rB
+         }))), IB[-mo[89]])),
```

#### 517. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5196-L5198` → after: `L4850-L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4850-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4850-L4852) · [Before (L5196-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5196-L5198)

```diff
-           et[kD[1]] = kD[6];
-           const Vt = (0, TO[kD[114]])(qt, tt);
-           return (Vt === kD[4] || void 0 === Vt ? void 0 : Vt.configurable) !== kD[31] || typeof Vt[kD[149]] !== kD[106] + kD[107] || vt !== ot
+           IB[mo[2]] = mo[3];
+           const ZB = (0, ET.M)(JB, BB);
+           return (ZB === mo[6] || void 0 === ZB ? void 0 : ZB.configurable) !== mo[0] || typeof ZB[mo[116]] !== mo[86] + mo[87] || OB !== LB
```

#### 518. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5203` → after: `L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4857) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5203)

```diff
-             return navigator[kD[144] + "tSub"]
+             return navigator[mo[110] + "tSub"]
```

#### 519. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5210-L5214` → after: `L4864-L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4864-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4864-L4867) · [Before (L5210-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5210-L5214)

```diff
-         xt = pt === kD[4] ? ((...tt) => {
-           tt[kD[1]] = kD[6];
-           const et = kD[25];
-           zD(tt[kD[11]] = kD[31], tt[-kD[122]] = et - kD[0]);
-           const Vt = TextDecoder[kD[123] + kD[124]][kD[125]],
+         xB = bB === mo[6] ? ((...BB) => {
+           BB[mo[2]] = mo[3];
+           Lo(BB[mo[23]] = mo[0], BB[mo[1]] = 60 - mo[1]);
+           const IB = TextDecoder[mo[90] + mo[91]][mo[92]],
```

#### 520. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5216-L5232` → after: `L4869-L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4869-L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4869-L4871) · [Before (L5216-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5216-L5232)

```diff
-               "s9tBU8H" in GD && function(...tt) {
-                 var et;
-                 zD(tt[kD[1]] = kD[6], et = function(...tt) {
-                   zD(tt[kD[1]] = kD[0], this.uQ = tt[kD[6]], this.length = kD[6], this.map = {}, this.head = kD[4], this.tail = kD[4])
-                 }, et.prototype.get = function(...tt) {
-                   var et;
-                   return zD(tt[kD[1]] = kD[0], et = this.map[tt[kD[6]]]), et ? (this.remove(et), this.insert(et.key, et.val), et.val) : -kD[0]
-                 }, et.prototype.put = function(...tt) {
-                   zD(tt[kD[1]] = kD[2], this.map[tt[kD[6]]] ? (this.remove(this.map[tt[kD[6]]]), this.insert(tt[kD[6]], tt[kD[0]])) : this.length === this.uQ ? (this.remove(this.head), this.insert(tt[kD[6]], tt[kD[0]])) : (this.insert(tt[kD[6]], tt[kD[0]]), this.length++))
-                 }, et.prototype.remove = function(...tt) {
-                   zD(tt[kD[1]] = kD[0], tt[kD[11]] = tt[kD[6]].prev, tt[kD[36]] = tt[kD[6]].next), tt[kD[36]] && (tt[kD[36]].prev = tt[kD[11]]), tt[kD[11]] && (tt[kD[11]].next = tt[kD[36]]), this.head === tt[kD[6]] && (this.head = tt[kD[36]]), this.tail === tt[kD[6]] && (this.tai … [truncated]
-                 }, et.prototype.insert = function(...tt) {
-                   zD(tt[kD[1]] = kD[2], tt[kD[2]] = new List(tt[kD[6]], tt[kD[0]]), this.tail ? (this.tail.next = tt[kD[2]], tt[kD[2]].prev = this.tail, this.tail = tt[kD[2]]) : (this.tail = tt[kD[2]], this.head = tt[kD[2]]), this.map[tt[kD[6]]] = tt[kD[2]])
-                 }, console.log(et))
-               }(), tt[-kD[122]]++, tt[-kD[122]] === et && (SD((() => Et(kD[31]))) && (tt[kD[11]] = kD[19]), tt[-kD[122]] = kD[6]);
-               for (var Ot = arguments[kD[1]], qt = new Array(Ot), Dt = kD[6]; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
- ... (1 more removed lines; see GitHub link above)
+               BB[mo[1]]++, 60 === BB[mo[1]] && (po((() => FB(mo[0]))) && (BB[mo[23]] = mo[22]), BB[mo[1]] = mo[3]);
+               for (var ZB = arguments[mo[2]], TB = new Array(ZB), JB = mo[3]; JB < ZB; JB++) TB[JB] = arguments[JB];
+               return (0, ET[mo[88]])(IB, this, TB)
```

#### 521. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5235-L5248` → after: `L4874-L4884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4874-L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4874-L4884) · [Before (L5235-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5235-L5248)

```diff
-             TextDecoder[kD[123] + kD[124]][kD[125]] = Ot
-           })), () => ("lfA819" in GD && function(...tt) {
-             function et() {}
-             tt[kD[1]] = kD[6], zD(tt[-kD[57]] = function(...tt) {
-               for (zD(tt[kD[1]] = kD[2], tt[-kD[127]] = kD[6], tt[kD[5]] = kD[6], tt[kD[17]] = new et(kD[6]), tt[kD[23]] = tt[kD[17]], tt[kD[18]] = tt[kD[6]], tt[-kD[126]] = tt[kD[0]]); tt[kD[18]] !== kD[4] || tt[-kD[126]] !== kD[4];) zD(tt[kD[5]] = (tt[kD[18]] ? tt[kD[18]].val : … [truncated]
-               return tt[-kD[127]] && (tt[kD[23]].next = new et(tt[-kD[127]])), tt[kD[17]].next
-             }, console.log(tt[-kD[57]]))
-           }(), tt[kD[11]] ? kD[2] : RD((() => TextDecoder[kD[123] + kD[124]][kD[125]] !== Ot ? kD[43] : kD[6])))
-         })() : () => RD(((...tt) => (tt[kD[1]] = kD[6], "KRK_2Q" + kD[128] in GD && function(...tt) {
-           zD(tt[kD[1]] = kD[6], tt[kD[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", tt[-kD[130]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + kD[129], tt[kD[17]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]- … [truncated]
-         }(), pt[kD[142] + kD[143]]()))),
-         Tt = (0, Ie.h)(),
-         gt = (0, TO[kD[32]])(kD[4]),
-         st = (0, TO[kD[32]])(kD[4]);
+             TextDecoder[mo[90] + mo[91]][mo[92]] = ZB
+           })), () => BB[mo[23]] ? mo[4] : Ho((() => TextDecoder[mo[90] + mo[91]][mo[92]] !== ZB ? mo[60] : mo[3]))
+         })() : () => Ho((() => bB[mo[108] + mo[109]]())),
+         EB = (0, HI[mo[79]])(),
+         DB = (0, ET[mo[77]])(mo[6]),
+         KB = (0, ET[mo[77]])(mo[6]);
+       let VB = mo[3],
+         SB = mo[3],
+         BI = mo[3];
+       const II = (0, ET[mo[77]])(mo[6]),
+         ZI = (0, ET[mo[77]])(mo[6]);
```

#### 522. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5250-L5255` → after: `L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4886) · [Before (L5250-L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5250-L5255)

```diff
-         te = kD[6],
-         ee = kD[6];
-       const Ve = (0, TO[kD[32]])(kD[4]),
-         Oe = (0, TO[kD[32]])(kD[4]);
-       let qe = kD[4],
-         De = (0, TO[kD[32]])(kD[4]);
+         JI = (0, ET[mo[77]])(mo[6]);
```

#### 523. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5257` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4888) · [Before (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5257)

```diff
-           zD(tt[kD[1]] = kD[2], gt[nt] = tt[kD[6]], st[nt] = tt[kD[0]], nt++)
+           Lo(BB[mo[2]] = mo[4], DB[VB] = BB[mo[3]], KB[VB] = BB[mo[1]], VB++)
```

#### 524. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5259-L5261` → after: `L4890-L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4890-L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4890-L4892) · [Before (L5259-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5259-L5261)

```diff
-         de = (...tt) => (zD(tt[kD[1]] = kD[0], tt[kD[11]] = kD[3]), (tt[kD[11]] = (st[tt[kD[6]]] ? Oe : Ve)[gt[tt[kD[6]]]]) !== kD[4] && void 0 !== tt[kD[11]] ? tt[kD[11]] : -kD[0]),
-         je = (0, TO[kD[7]])("d2lvNjQz"),
-         He = (0, TO[kD[7]])("amtsa2plZndu"),
+         GI = (...BB) => (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = mo[5]), (BB[mo[1]] = (KB[BB[mo[3]]] ? ZI : II)[DB[BB[mo[3]]]]) !== mo[6] && void 0 !== BB[mo[1]] ? BB[mo[1]] : -mo[1]),
+         vI = (0, ET[mo[8]])("d2lvNjQz"),
+         kI = (0, ET[mo[8]])("amtsa2plZndu"),
```

#### 525. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5263-L5265` → after: `L4894-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4894-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4894-L4896) · [Before (L5263-L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5263-L5265)

```diff
-           [(0, TO[kD[7]])("aW9qZndlODNq"), kD[62]],
-           [(0, TO[kD[7]])("a3Bq"), "4"],
-           [(0, TO[kD[7]])("dXJocmZm"), "5"]
+           [(0, ET[mo[8]])("aW9qZndlODNq"), "2"],
+           [(0, ET[mo[8]])("a3Bq"), mo[93]],
+           [(0, ET[mo[8]])("dXJocmZm"), "5"]
```

#### 526. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5268-L5269` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4899-L4900) · [Before (L5268-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5268-L5269)

```diff
-           [(0, TO[kD[7]])(kD[132] + kD[131]), kD[32]],
-           [(0, TO[kD[7]])(kD[132] + "w="), kD[133]]
+           [(0, ET[mo[8]])(mo[95] + mo[94]), mo[8]],
+           [(0, ET[mo[8]])(mo[95] + "w="), mo[85]]
```

#### 527. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5271-L5273` → after: `L4902-L4904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4902-L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4902-L4904) · [Before (L5271-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5271-L5273)

```diff
-         le = (0, TO[kD[7]])("eTR5bnM="),
-         Ee = (0, TO[kD[7]])("aHRleWpldA=="),
-         fe = (0, TO[kD[7]])("c2RmbGpneGxmY2pr"),
+         hI = (0, ET[mo[8]])("eTR5bnM="),
+         zI = (0, ET[mo[8]])("aHRleWpldA=="),
+         FI = (0, ET[mo[8]])("c2RmbGpneGxmY2pr"),
```

#### 528. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5275-L5279` → after: `L4906-L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4906-L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4906-L4910) · [Before (L5275-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5275-L5279)

```diff
-           [(0, TO[kD[7]])("a3NhZmR1"), kD[7]],
-           [(0, TO[kD[7]])("ZGZnYWFzZGFz"), kD[69]],
-           [fe, kD[136]],
-           [(0, TO[kD[7]])("bGFzZWRraGFz"), kD[134]],
-           [(0, TO[kD[7]])("cW16ZjhrM24="), kD[11]]
+           [(0, ET[mo[8]])("a3NhZmR1"), mo[96]],
+           [(0, ET[mo[8]])("ZGZnYWFzZGFz"), mo[103]],
+           [FI, mo[97]],
+           [(0, ET[mo[8]])("bGFzZWRraGFz"), mo[120]],
+           [(0, ET[mo[8]])("cW16ZjhrM24="), mo[23]]
```

#### 529. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5282-L5284` → after: `L4913-L4915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4913-L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4913-L4915) · [Before (L5282-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5282-L5284)

```diff
-           [le, kD[150]],
-           [Ee, kD[135]],
-           [(0, TO[kD[7]])("bmI3ZnEy"), kD[36]]
+           [hI, mo[98]],
+           [zI, mo[99]],
+           [(0, ET[mo[8]])("bmI3ZnEy"), mo[11]]
```

#### 530. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5286-L5287` → after: `L4917-L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4917-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4917-L4918) · [Before (L5286-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5286-L5287)

```diff
-         Ne = (0, TO[kD[7]])("bGtxM20="),
-         ae = (0, TO[kD[7]])("bWtxN3" + kD[131]),
+         qI = (0, ET[mo[8]])("bGtxM20="),
+         yI = (0, ET[mo[8]])("bWtxN3" + mo[94]),
```

#### 531. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5289` → after: `L4920-L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4920-L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4920-L4921) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5289)

```diff
-         Je = (() => {
+         dI = ((...BB) => {
+           BB[mo[2]] = mo[3];
```

#### 532. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5291-L5292` → after: `L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4923) · [Before (L5291-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5291-L5292)

```diff
-             var tt;
-             return (tt = qt[(0, TO[kD[7]])("V2ViU29ja2V0")]) === kD[4] || void 0 === tt ? void 0 : tt[kD[123] + kD[124]]
+             return BB[-mo[100]] = mo[5], (BB[-mo[100]] = JB[(0, ET[mo[8]])("V2ViU29ja2V0")]) === mo[6] || void 0 === BB[-mo[100]] ? void 0 : BB[-mo[100]][mo[90] + mo[91]]
```

#### 533. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5294` → after: `L4925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4925) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5294)

```diff
-             return kD[3]
+             return mo[5]
```

#### 534. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5297-L5299` → after: `L4928-L4930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4928-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4928-L4930) · [Before (L5297-L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5297-L5299)

```diff
-         Ce = ["send", "close", "addEventListener", "removeEventListener", kD[139] + kD[138] + kD[136]],
-         ue = ["onmessage", "onopen", "onclos" + kD[18], "onerro" + kD[7]];
-       let Ke = kD[31];
+         CI = ["send", "close", "addEventListener", "removeEventListener", mo[105] + mo[104] + mo[97]],
+         QI = ["onmessage", "onopen", "onclos" + mo[17], "onerro" + mo[96]];
+       let sI = mo[0];
```

#### 535. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5301` → after: `L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4932) · [Before (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5301)

```diff
-           tt[kD[1]] = kD[6];
+           BB[mo[2]] = mo[3];
```

#### 536. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5303-L5309` → after: `L4934-L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4934-L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4934-L4940) · [Before (L5303-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5303-L5309)

```diff
-           Vt === kD[4] || Ke || (Ke = Mt((() => {
-             if (Je !== kD[3] && (0, TO.U)(Vt) !== Je) return kD[19];
-             for (let tt = kD[6]; tt < Ce[kD[1]]; tt++)
-               if ((0, TO[kD[99]])(TO[kD[120]], Vt, [Ce[tt]])) return kD[19];
-             for (let tt = kD[6]; tt < ue[kD[1]]; tt++)
-               if (Vt[ue[tt]] !== kD[4] && Vt[ue[tt]] !== kD[3]) return kD[19];
-             return kD[31]
+           ZB === mo[6] || sI || (sI = UB((() => {
+             if (dI !== mo[5] && (0, ET.O)(ZB) !== dI) return mo[22];
+             for (let BB = mo[3]; BB < CI[mo[2]]; BB++)
+               if ((0, ET[mo[88]])(ET[mo[101]], ZB, [CI[BB]])) return mo[22];
+             for (let BB = mo[3]; BB < QI[mo[2]]; BB++)
+               if (ZB[QI[BB]] !== mo[6] && ZB[QI[BB]] !== mo[5]) return mo[22];
+             return mo[0]
```

#### 537. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5312-L5320` → after: `L4943-L4951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4943-L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4943-L4951) · [Before (L5312-L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5312-L5320)

```diff
-         ve = (0, TO[kD[7]])("RXZlbnQ=");
-       let We = ge[kD[137]][kD[153]],
-         Se = kD[6];
-       const ce = () => Se++ === kD[23] ? (Se = kD[6], Et(kD[31]) ? ge[kD[64]].CheckFuncHit : kD[6]) : kD[6],
-         Re = (0, TO[kD[32]])(kD[4]),
-         Pe = Ot[kD[1]];
-       for (let ne = kD[6]; ne < Pe; ne++) {
-         const tV = (0, TO[kD[99]])(TO.ob, Ot, [ne]);
-         Re[ne] = tV >= kD[50] && tV <= 122 ? tV : kD[6]
+         OI = (0, ET[mo[8]])("RXZlbnQ=");
+       let YI = DI[mo[102]][mo[121]],
+         iI = mo[3];
+       const pI = () => iI++ === mo[12] ? (iI = mo[3], FB(mo[0]) ? DI[mo[17]].CheckFuncHit : mo[3]) : mo[3],
+         aI = (0, ET[mo[77]])(mo[6]),
+         MI = TB[mo[2]];
+       for (let kB = mo[3]; kB < MI; kB++) {
+         const BB = (0, ET[mo[88]])(ET.fb, TB, [kB]);
+         aI[kB] = BB >= 99 && BB <= 122 ? BB : mo[3]
```

#### 538. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5323` → after: `L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4954) · [Before (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5323)

```diff
-           return tt[kD[1]] = kD[2], typeof tt[kD[6]] === kD[106] + kD[107] && (0, TO[kD[99]])(TO.db, tt[kD[0]], [(et = tt[kD[6]], (0, TO.n)(TO.A, et, []))]) !== kD[4];
+           return BB[mo[2]] = mo[4], typeof BB[mo[3]] === mo[86] + mo[87] && (0, ET[mo[88]])(ET.Y, BB[mo[1]], [(IB = BB[mo[3]], (0, ET.l)(ET.y, IB, []))]) !== mo[6];
```

#### 539. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5329-L5331` → after: `L4960-L4962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4960-L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4960-L4962) · [Before (L5329-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5329-L5331)

```diff
-           [ZD["Dispat" + kD[138] + kD[136]], () => !Ze(EventTarget[kD[123] + kD[124]][kD[139] + kD[138] + kD[136]], Le)],
-           [ZD.PerformanceNow, () => !Ze(performance[kD[140]], Fe)],
-           [ZD.DateNow, () => !Ze(Date[kD[140]], Fe)]
+           [Po["Dispat" + mo[104] + mo[97]], () => !jI(EventTarget[mo[90] + mo[91]][mo[105] + mo[104] + mo[97]], PI)],
+           [Po.PerformanceNow, () => !jI(performance[mo[106]], RI)],
+           [Po.DateNow, () => !jI(Date[mo[106]], RI)]
```

#### 540. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5333-L5334` → after: `L4964-L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4964-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4964-L4965) · [Before (L5333-L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5333-L5334)

```diff
-         Ge = (0, TO[kD[32]])(kD[4]);
-       let ze = kD[6];
+         mI = (0, ET[mo[77]])(mo[6]);
+       let XI = mo[3];
```

#### 541. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5337-L5338` → after: `L4968-L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4968-L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4968-L4969) · [Before (L5337-L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5337-L5338)

```diff
-           zD(tt[kD[1]] = kD[6], tt[kD[141]] = kD[4]);
-           const et = SD((() => (tt[kD[141]] = lt(kD[19]), tt[kD[141]] !== kD[4])));
+           Lo(BB[mo[2]] = mo[3], BB[mo[11]] = mo[6]);
+           const IB = po((() => (BB[mo[11]] = zB(mo[22]), BB[mo[11]] !== mo[6])));
```

#### 542. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5340` → after: `L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4971) · [Before (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5340)

```diff
-           return tt[kD[141]] !== kD[4] && ft === kD[4] && (Vt = tt[kD[141]][kD[14]], Ot = tt[kD[141]][kD[15]], ft = (0, jD.w)(CD(Vt, Ot))), et
+           return BB[mo[11]] !== mo[6] && NB === mo[6] && (ZB = BB[mo[11]][mo[24]], TB = BB[mo[11]][mo[25]], NB = (0, vo.v)(Qo(ZB, TB))), IB
```

#### 543. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5342-L5343` → after: `L4973-L4974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4973-L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4973-L4974) · [Before (L5342-L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5342-L5343)

```diff
-         [kD[142] + kD[143]]: (...tt) => {
-           tt[kD[1]] = kD[6];
+         [mo[108] + mo[109]]: (...BB) => {
+           BB[mo[2]] = mo[3];
```

#### 544. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5345-L5348` → after: `L4976-L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4976-L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4976-L4979) · [Before (L5345-L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5345-L5348)

```diff
-           if (et === kD[2]) return kD[2];
-           if (ht[je]) return kD[5];
-           const Vt = RD((() => qt[He] ? kD[39] : kD[6]));
-           return Vt !== kD[6] ? Vt === kD[39] ? kD[39] : kD[6] : et === cD ? kD[6] : et === kD[43] ? kD[43] : (Jt(), Ot = Function[kD[123] + kD[124]], Dt = kD[148], mt = (...tt) => (tt[kD[1]] = kD[0], tt[kD[6]].writable !== kD[19]), SD((() => {
+           if (IB === mo[4]) return mo[4];
+           if (wB[vI]) return mo[7];
+           const ZB = Ho((() => JB[kI] ? mo[14] : mo[3]));
+           return ZB !== mo[3] ? ZB === mo[14] ? mo[14] : mo[3] : IB === ao ? mo[3] : IB === mo[60] ? mo[60] : (dB(), TB = Function[mo[90] + mo[91]], oB = mo[115], GB = (...BB) => (BB[mo[2]] = mo[1], BB[mo[3]].writable !== mo[22]), po((() => {
```

#### 545. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5351` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4982) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5351)

```diff
-           })) ? kD[59] : kD[6]);
+           })) ? mo[13] : mo[3]);
```

#### 546. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5355-L5356` → after: `L4986-L4987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4986-L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4986-L4987) · [Before (L5355-L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5355-L5356)

```diff
-         [kD[144] + "tSubChanged"]: (...tt) => {
-           if (tt[kD[1]] = kD[6], Bt === it || rt) return kD[31];
+         [mo[110] + "tSubChanged"]: (...BB) => {
+           if (BB[mo[2]] = mo[3], tB === lB || eB) return mo[0];
```

#### 547. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5360-L5364` → after: `L4991-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4991-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4991-L4995) · [Before (L5360-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5360-L5364)

```diff
-         Pd: (...tt) => {
-           zD(tt[kD[1]] = kD[6], tt[kD[36]] = Pe);
-           for (let et = kD[6]; et < ke[kD[1]] + ze; et++) {
-             const Vt = et < ke[kD[1]] ? ke[et] : Ge[et - ke[kD[1]]];
-             Vt[kD[6]] < tt[kD[36]] && Mt(Vt[kD[0]]) && (tt[kD[36]] = Vt[kD[6]])
+         sv: (...BB) => {
+           Lo(BB[mo[2]] = mo[3], BB[-mo[107]] = MI);
+           for (let IB = mo[3]; IB < rI[mo[2]] + XI; IB++) {
+             const ZB = IB < rI[mo[2]] ? rI[IB] : mI[IB - rI[mo[2]]];
+             ZB[mo[3]] < BB[-mo[107]] && UB(ZB[mo[1]]) && (BB[-mo[107]] = ZB[mo[3]])
```

#### 548. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5366` → after: `L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4997) · [Before (L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5366)

```diff
-           return tt[kD[36]] < Pe ? Re[tt[kD[36]]] : kD[6]
+           return BB[-mo[107]] < MI ? aI[BB[-mo[107]]] : mo[3]
```

#### 549. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5368-L5372` → after: `L4999-L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4999-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4999-L5003) · [Before (L5368-L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5368-L5372)

```diff
-         Xd: () => Tt ? Ie.i : kD[66],
-         [kD[145] + kD[146] + "Subs"]: (...tt) => {
-           tt[kD[1]] = kD[6];
-           const et = jt.j.XN[kD[145] + kD[146]];
-           return typeof et === kD[147] && et > kD[6] ? et > kD[73] ? kD[73] : et : kD[6]
+         Zv: () => EB ? HI[mo[118]] : 8,
+         [mo[111] + mo[112] + "Subs"]: (...BB) => {
+           BB[mo[2]] = mo[3];
+           const IB = kB[mo[88]].vy[mo[111] + mo[112]];
+           return typeof IB === mo[113] && IB > mo[3] ? IB > mo[114] ? mo[114] : IB : mo[3]
```

#### 550. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5374-L5381` → after: `L5005-L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5005-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5005-L5012) · [Before (L5374-L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5374-L5381)

```diff
-         ["getCom" + kD[160]]: (...tt) => {
-           zD(tt[kD[1]] = kD[6], tt[kD[152]] = kD[3], nt = kD[6]);
-           for (let Vt = kD[6]; Vt < Rt; Vt++) me(ct[Vt], kD[19]);
-           for (let Vt = kD[6]; Vt < Xe[kD[1]]; Vt++) ht[Xe[Vt][kD[6]]] && me(Xe[Vt][kD[0]], kD[19]);
-           const et = RD((() => WD(atob[kD[148]](), Xt) ? kD[6] : kD[0]));
-           et === kD[0] && me(kD[151], kD[19]), Jt();
-           const Ot = et === cD ? cD : RD(((...tt) => {
-             tt[kD[1]] = kD[6];
+         ["getCom" + mo[127]]: (...BB) => {
+           Lo(BB[mo[2]] = mo[3], BB[mo[23]] = mo[5], VB = mo[3]);
+           for (let ZB = mo[3]; ZB < aB; ZB++) oI(pB[ZB], mo[22]);
+           for (let ZB = mo[3]; ZB < cI[mo[2]]; ZB++) wB[cI[ZB][mo[3]]] && oI(cI[ZB][mo[1]], mo[22]);
+           const IB = Ho((() => io(atob[mo[115]](), nB) ? mo[3] : mo[1]));
+           IB === mo[1] && oI(mo[80], mo[22]), dB();
+           const TB = IB === ao ? ao : Ho(((...BB) => {
+             BB[mo[2]] = mo[3];
```

#### 551. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5383` → after: `L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5014) · [Before (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5383)

```diff
-             return et === kD[3] ? cD : et[kD[149]] !== kD[3] ? kD[0] : kD[6]
+             return IB === mo[5] ? ao : IB[mo[116]] !== mo[5] ? mo[1] : mo[3]
```

#### 552. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5385` → after: `L5016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5016) · [Before (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5385)

```diff
-           Ot === kD[0] && me(kD[64], kD[19]);
+           TB === mo[1] && oI(mo[81], mo[22]);
```

#### 553. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5387` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5018) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5387)

```diff
-           for (let Vt = kD[6]; Vt < Qe[kD[1]] && !qt; Vt++) ht[Qe[Vt][kD[6]]] && me(Qe[Vt][kD[0]], kD[19]);
+           for (let ZB = mo[3]; ZB < nI[mo[2]] && !JB; ZB++) wB[nI[ZB][mo[3]]] && oI(nI[ZB][mo[1]], mo[22]);
```

#### 554. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5389-L5390` → after: `L5020-L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5020-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5020-L5021) · [Before (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5389-L5390)

```diff
-           tt[kD[18]] = kD[4], Rt === kD[6] && (Pt > kD[6] ? tt[kD[18]] = It[kD[6]] : Ft ? tt[kD[18]] = "fp" : Dt || (tt[kD[18]] = ht[le] ? kD[150] : ht[Ee] ? kD[135] : kD[4]));
-           for (let Vt = kD[6]; Vt < we[kD[1]] && !qt; Vt++) ht[we[Vt][kD[6]]] && me(we[Vt][kD[0]], kD[19]);
+           BB[-mo[117]] = mo[6], aB === mo[3] && (MB > mo[3] ? BB[-mo[117]] = HB[mo[3]] : RB ? BB[-mo[117]] = "fp" : oB || (BB[-mo[117]] = wB[hI] ? mo[98] : wB[zI] ? mo[99] : mo[6]));
+           for (let ZB = mo[3]; ZB < NI[mo[2]] && !JB; ZB++) wB[NI[ZB][mo[3]]] && oI(NI[ZB][mo[1]], mo[22]);
```

#### 555. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5392-L5397` → after: `L5023-L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5023-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5023-L5028) · [Before (L5392-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5392-L5397)

```diff
-             dt = (0, lD[kD[16]])(),
-             jt = dt !== kD[4] && (0, Me[kD[32]])(dt);
-           jt && !qt && me(dt, kD[31]), At && me("ix", kD[31]), St && me("il", kD[31]);
-           for (let Vt = kD[6]; Vt < Pt; Vt++) me(It[Vt], kD[19]);
-           for (let Vt = kD[6]; Vt < ye[kD[1]]; Vt++) ht[ye[Vt][kD[6]]] && me(ye[Vt][kD[0]], kD[19]);
-           ht[Ne] && me("mk:lk", kD[19]);
+             vB = (0, ho[mo[17]])(),
+             kB = vB !== mo[6] && (0, UI[mo[103]])(vB);
+           kB && !JB && oI(vB, mo[0]), fB && oI("ix", mo[0]), iB && oI("il", mo[0]);
+           for (let ZB = mo[3]; ZB < MB; ZB++) oI(HB[ZB], mo[22]);
+           for (let ZB = mo[3]; ZB < gI[mo[2]]; ZB++) wB[gI[ZB][mo[3]]] && oI(gI[ZB][mo[1]], mo[22]);
+           wB[qI] && oI("mk:lk", mo[22]);
```

#### 556. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5399-L5402` → after: `L5030-L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5030-L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5030-L5033) · [Before (L5399-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5399-L5402)

```diff
-             tt[kD[1]] = kD[0];
-             for (let et = kD[6]; et < be[kD[1]]; et++)
-               if (tt[kD[6]] === be[et]) return be[et];
-             return kD[4]
+             BB[mo[2]] = mo[1];
+             for (let IB = mo[3]; IB < WI[mo[2]]; IB++)
+               if (BB[mo[3]] === WI[IB]) return WI[IB];
+             return mo[6]
```

#### 557. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5404-L5406` → after: `L5035-L5037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5035-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5035-L5037) · [Before (L5404-L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5404-L5406)

```diff
-           if (Ht !== kD[4] && me(Ht, kD[19]), Vt !== kD[4] && Ct(Vt.emitReplaced) === kD[19] && me("mk:em", kD[19]), Ke && me("3s", kD[31]), TO.gb && me("3b", kD[31]), Jt(), bt && me("3d", kD[31]), qt && me("3g", kD[31]), dt === kD[4] || jt || me(dt, kD[31]), ft !== kD[4] && me(f … [truncated]
-             const tt = Ct(Vt[kD[142] + "mMeshHitStack"]);
-             typeof tt === kD[30] && (Nt = function(tt, et, Vt) {
+           if (cB !== mo[6] && oI(cB, mo[22]), ZB !== mo[6] && CB(ZB.emitReplaced) === mo[22] && oI("mk:em", mo[22]), sI && oI("3s", mo[0]), ET.Z && oI("3b", mo[0]), dB(), WB && oI("3d", mo[0]), JB && oI("3g", mo[0]), vB === mo[6] || kB || oI(vB, mo[0]), NB !== mo[6] && oI(NB, mo[ … [truncated]
+             const BB = CB(ZB[mo[108] + "mMeshHitStac" + mo[118]]);
+             typeof BB === mo[51] && (yB = function(BB, IB, ZB) {
```

#### 558. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5409-L5410` → after: `L5040-L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5040-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5040-L5041) · [Before (L5409-L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5409-L5410)

```diff
-               return (0, jD.m)(CD(tt, Ot < Vt ? et[Ot] : null))
-             }(tt, Qt, Qt[kD[1]] - kD[0]))
+               return (0, vo.n)(Qo(BB, TB < ZB ? IB[TB] : null))
+             }(BB, hB, hB[mo[2]] - mo[1]))
```

#### 559. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5413-L5416` → after: `L5044-L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5044-L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5044-L5047) · [Before (L5413-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5413-L5416)

```diff
-           if (Nt !== kD[4] && me(Nt, kD[31]), wt === kD[4] && Ie[kD[64]] !== kD[4] && zD((lt = Ie[kD[64]], wt = (0, jD.i)(hD(lt).reader)), yt = vD(Ie[kD[64]], Ct((() => Ie[kD[18]] === kD[4] ? kD[4] : (0, TO.qb)(Ie[kD[18]]))))), wt !== kD[4] && me(wt, kD[31]), yt !== kD[4] && me(y … [truncated]
-           if (tt[kD[18]] === kD[4] && st[kD[6]] && !(0, jD[kD[99]])(gt[kD[6]]))
-             for (let Vt = kD[0]; Vt < mt; Vt++)
-               if (st[Vt] && (0, jD[kD[99]])(gt[Vt])) {
+           if (yB !== mo[6] && oI(yB, mo[0]), gB === mo[6] && HI[mo[81]] !== mo[6] && Lo((zB = HI[mo[81]], gB = (0, vo.k)(Oo(zB).reader)), qB = Yo(HI[mo[81]], CB((() => HI[mo[19]] === mo[6] ? mo[6] : (0, ET.jb)(HI[mo[19]]))))), gB !== mo[6] && oI(gB, mo[0]), qB !== mo[6] && oI(qB, … [truncated]
+           if (BB[-mo[117]] === mo[6] && KB[mo[3]] && !(0, vo[mo[85]])(DB[mo[3]]))
+             for (let ZB = mo[1]; ZB < GB; ZB++)
+               if (KB[ZB] && (0, vo[mo[85]])(DB[ZB])) {
```

#### 560. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5418-L5419` → after: `L5049-L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5049-L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5049-L5050) · [Before (L5418-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5418-L5419)

```diff
-                 for (let et = Vt; et > kD[6]; et--) zD(gt[et] = gt[et - kD[0]], st[et] = st[et - kD[0]]);
-                 zD(gt[kD[6]] = tt, st[kD[6]] = kD[19]);
+                 for (let IB = ZB; IB > mo[3]; IB--) Lo(DB[IB] = DB[IB - mo[1]], KB[IB] = KB[IB - mo[1]]);
+                 Lo(DB[mo[3]] = BB, KB[mo[3]] = mo[22]);
```

#### 561. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5421-L5423` → after: `L5052-L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5052-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5052-L5054) · [Before (L5421-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5421-L5423)

```diff
-               } if (zD(tt[-kD[103]] = kD[6], tt[kD[151]] = tt[kD[18]] === kD[4] ? kD[6] : mt), tt[kD[151]] > kD[6] && dt !== kD[4] && jt && !qt) {
-             for (let et = tt[kD[151]]; et > kD[6]; et--) zD(gt[et] = gt[et - kD[0]], st[et] = st[et - kD[0]]);
-             zD(gt[kD[6]] = dt, st[kD[6]] = kD[31], tt[-kD[103]] = kD[0], tt[kD[151]]++)
+               } if (Lo(BB[-mo[119]] = mo[3], BB[mo[7]] = BB[-mo[117]] === mo[6] ? mo[3] : GB), BB[mo[7]] > mo[3] && vB !== mo[6] && kB && !JB) {
+             for (let IB = BB[mo[7]]; IB > mo[3]; IB--) Lo(DB[IB] = DB[IB - mo[1]], KB[IB] = KB[IB - mo[1]]);
+             Lo(DB[mo[3]] = vB, KB[mo[3]] = mo[0], BB[-mo[119]] = mo[1], BB[mo[7]]++)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5425-L5432` → after: `L5056-L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5056-L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5056-L5063) · [Before (L5425-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5425-L5432)

```diff
-           if (tt[kD[39]] = kD[6], te++ % kD[2] === kD[0])
-             for (let Vt = kD[0]; Vt < nt; Vt++) de(Vt) < de(tt[kD[39]]) && (tt[kD[39]] = Vt);
-           const Et = gt[tt[kD[39]]];
-           (st[tt[kD[39]]] ? Oe : Ve)[Et] = ee++;
-           const Mt = tt[kD[39]] >= tt[-kD[103]] && tt[kD[39]] < tt[kD[151]];
-           if (!st[tt[kD[39]]] || Et === tt[kD[18]] || tt[kD[39]] === kD[6] && !Mt) return Et === kD[136] ? (0, jD.y)(ht[fe], jD[kD[16]]) : Et;
-           const ut = (tt[kD[152]] = tt[kD[18]]) !== kD[4] && void 0 !== tt[kD[152]] ? tt[kD[152]] : gt[kD[6]];
-           return ut !== qe && zD(qe = ut, De = (0, TO[kD[32]])(kD[4])), De[Et] ??= (0, jD[kD[150]])(Et, ut)
+           if (BB[mo[17]] = mo[3], SB++ % mo[4] === mo[1])
+             for (let ZB = mo[1]; ZB < VB; ZB++) GI(ZB) < GI(BB[mo[17]]) && (BB[mo[17]] = ZB);
+           const FB = DB[BB[mo[17]]];
+           (KB[BB[mo[17]]] ? ZI : II)[FB] = BI++;
+           const UB = BB[mo[17]] >= BB[-mo[119]] && BB[mo[17]] < BB[mo[7]];
+           if (!KB[BB[mo[17]]] || FB === BB[-mo[117]] || BB[mo[17]] === mo[3] && !UB) return FB === mo[97] ? (0, vo.x)(wB[FI], vo[mo[17]]) : FB;
+           const QB = (BB[mo[23]] = BB[-mo[117]]) !== mo[6] && void 0 !== BB[mo[23]] ? BB[mo[23]] : DB[mo[3]];
+           return QB !== TI && Lo(TI = QB, JI = (0, ET[mo[77]])(mo[6])), JI[FB] ??= (0, vo[mo[120]])(FB, QB)
```

#### 563. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5435-L5440` → after: `L5066-L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5066-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5066-L5071) · [Before (L5435-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5435-L5440)

```diff
-       let re = ge[kD[137]][kD[153]];
-       const Ue = () => We !== ge[kD[137]][kD[153]] ? We : re;
-       let Ae = kD[6],
-         ie = kD[2],
-         Ye = kD[6],
-         Be = kD[6];
+       let eI = DI[mo[102]][mo[121]];
+       const uI = () => YI !== DI[mo[102]][mo[121]] ? YI : eI;
+       let fI = mo[3],
+         lI = mo[4],
+         AI = mo[3],
+         tI = mo[3];
```

#### 564. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5444` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5075) · [Before (L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5444)

```diff
-           tt[kD[1]] = kD[0];
+           BB[mo[2]] = mo[1];
```

#### 565. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5447-L5451` → after: `L5078-L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5078-L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5078-L5082) · [Before (L5447-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5447-L5451)

```diff
-             if (typeof et === kD[106] + kD[107] && !(tt[kD[6]] instanceof et) && !(0, TO.I)(tt[kD[6]])) return We = ge[kD[137]].NotEvent, kD[6];
-             if (tt[kD[6]].isTrusted === kD[31]) return kD[6];
-             let Vt = kD[6];
-             for (const Ot in tt[kD[6]]) Vt++;
-             return Vt < kD[24] ? (We = ge[kD[137]]["FewPropertie" + kD[69]], kD[6]) : ce()
+             if (typeof IB === mo[86] + mo[87] && !(BB[mo[3]] instanceof IB) && !(0, ET.B)(BB[mo[3]])) return YI = DI[mo[102]].NotEvent, mo[3];
+             if (BB[mo[3]].isTrusted === mo[0]) return mo[3];
+             let ZB = mo[3];
+             for (const TB in BB[mo[3]]) ZB++;
+             return ZB < mo[57] ? (YI = DI[mo[102]]["FewPropertie" + mo[103]], mo[3]) : pI()
```

#### 566. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5453` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5084) · [Before (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5453)

```diff
-           return kD[6]
+           return mo[3]
```

#### 567. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5459` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5090) · [Before (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5459)

```diff
-             return kD[6]
+             return mo[3]
```

#### 568. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5464` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5095) · [Before (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5464)

```diff
-           zD(tt[kD[1]] = kD[2], tt[-kD[156]] = kD[3]);
+           Lo(BB[mo[2]] = mo[4], BB[mo[23]] = mo[5]);
```

#### 569. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5466` → after: `L5097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5097) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5466)

```diff
-             tt[-kD[156]] = tt[kD[0]]()
+             BB[mo[23]] = BB[mo[1]]()
```

#### 570. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5468` → after: `L5099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5099) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5468)

```diff
-           Ge[ze++] = [tt[kD[6]], () => !et || tt[kD[0]]() !== tt[-kD[156]]]
+           mI[XI++] = [BB[mo[3]], () => !IB || BB[mo[1]]() !== BB[mo[23]]]
```

#### 571. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5470-L5471` → after: `L5101-L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5101-L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5101-L5102) · [Before (L5470-L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5470-L5471)

```diff
-         BQ: (...tt) => {
-           tt[kD[1]] = kD[6];
+         Iz: (...BB) => {
+           BB[mo[2]] = mo[3];
```

#### 572. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5474-L5479` → after: `L5105-L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5105-L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5105-L5110) · [Before (L5474-L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5474-L5479)

```diff
-             if (zD(tt[kD[1]] = kD[0], tt[-kD[104]] = kD[3], tt[-kD[154]] = kD[3]), Vt !== kD[4]) {
-               const et = Ct(Vt.Zm),
-                 Ot = "v3" === et ? kD[5] : "v5" === et ? kD[23] : "v6" === et ? kD[43] : kD[2];
-               Ot !== kD[2] && (ie = Ot);
-               const qt = Ct(Vt["inbuil" + kD[158] + kD[159]]);
-               typeof qt === kD[147] && qt >= kD[6] && qt <= kD[155] && (qt | kD[6]) === qt && (Ye = qt), zD(tt[-kD[104]] = Ct(Vt.reflectApplyHit), tt[-kD[154]] = Ct(Vt.definerHit))
+             if (Lo(BB[mo[2]] = mo[1], BB[-mo[122]] = mo[5], BB[mo[4]] = mo[5]), ZB !== mo[6]) {
+               const IB = CB(ZB.YG),
+                 TB = "v3" === IB ? mo[7] : "v5" === IB ? mo[12] : "v6" === IB ? mo[60] : mo[4];
+               TB !== mo[4] && (lI = TB);
+               const JB = CB(ZB["inbuil" + mo[125] + mo[126]]);
+               typeof JB === mo[113] && JB >= mo[3] && JB <= mo[123] && (JB | mo[3]) === JB && (AI = JB), Lo(BB[-mo[122]] = CB(ZB.reflectApplyHit), BB[mo[4]] = CB(ZB.definerHit))
```

#### 573. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5481-L5484` → after: `L5112-L5115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5112-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5112-L5115) · [Before (L5481-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5481-L5484)

```diff
-             const et = tt[kD[6]] ? kD[57] : "11" === tt[-kD[154]] ? kD[155] : "13" === tt[-kD[154]] ? 13 : tt[-kD[104]] !== kD[3] && tt[-kD[104]] !== kD[4] ? kD[2] : "10" === tt[-kD[154]] ? kD[24] : "12" === tt[-kD[154]] ? kD[44] : kD[6];
-             et !== kD[6] && (Be = et)
-           })(et), Ae++ % 10 === kD[6] && (he(), SD((() => !WD(qt[Dt][kD[148]][kD[148]](), Xt))) && (re = re === ge[kD[137]][kD[157]] ? ge[kD[137]][kD[157]] : ge[kD[137]].Fr), SD((() => !WD(qt[Dt][kD[148]](), Xt))) && (re = ge[kD[137]][kD[157]])), {
-             flags: et ? ge[kD[64]].Butto : kD[6],
+             const IB = BB[mo[3]] ? mo[74] : "11" === BB[mo[4]] ? mo[123] : "13" === BB[mo[4]] ? 13 : BB[-mo[122]] !== mo[5] && BB[-mo[122]] !== mo[6] ? mo[4] : "10" === BB[mo[4]] ? mo[57] : "12" === BB[mo[4]] ? mo[61] : mo[3];
+             IB !== mo[3] && (tI = IB)
+           })(IB), fI++ % 10 === mo[3] && (wI(), po((() => !io(JB[oB][mo[115]][mo[115]](), nB))) && (eI = eI === DI[mo[102]][mo[124]] ? DI[mo[102]][mo[124]] : DI[mo[102]].Fr), po((() => !io(JB[oB][mo[115]](), nB))) && (eI = DI[mo[102]][mo[124]])), {
+             flags: IB ? DI[mo[17]].Butto : mo[3],
```

#### 574. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5486-L5489` → after: `L5117-L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5117-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5117-L5120) · [Before (L5486-L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5486-L5489)

```diff
-               [ge[kD[151]].PhysicsVersion, ie],
-               [ge[kD[151]]["Inbuil" + kD[158] + kD[159]], Ye],
-               [ge[kD[151]]["AltCom" + kD[160]], Be],
-               [ge[kD[151]]["ProbeUsedPro" + kD[32]], Ue()]
+               [DI[mo[79]].PhysicsVersion, lI],
+               [DI[mo[79]]["Inbuil" + mo[125] + mo[126]], AI],
+               [DI[mo[79]]["AltCom" + mo[127]], tI],
+               [DI[mo[79]]["ProbeUsedPro" + mo[8]], uI()]
```

#### 575. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5497` → after: `L5128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5128) · [Before (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5497)

```diff
-       UD = QV.d,
+       fo = nZ.f,
```

#### 576. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5587` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5218) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5587)

```diff
-         if (this.stopped) return ie.c;
+         if (this.stopped) return lI.d;
```

#### 577. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5616` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5247) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5616)

```diff
-               qt = Ye(Ot > 0 ? et / Ot : et > 0 ? jt.volume : 0),
+               JB = AI(TB > 0 ? IB / TB : IB > 0 ? kB.volume : 0),
```

#### 578. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5646` → after: `L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5277) · [Before (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5646)

```diff
-     }((0, Pe.d)(), !0);
+     }((0, MI.b)(), !0);
```

#### 579. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5649` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5280) · [Before (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5649)

```diff
-         client: String(Qe.d)
+         client: String(nI.b)
```

#### 580. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5690` → after: `L5321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5321) · [Before (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5690)

```diff
-           console.error(`${oD} a startup listener threw`, et)
+           console.error(`${eo} a startup listener threw`, IB)
```

#### 581. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5770` → after: `L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5401) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5770)

```diff
-       console.warn(`${oD} chunk cancels from the server this session: ${tt}`)
+       console.warn(`${eo} chunk cancels from the server this session: ${BB}`)
```

#### 582. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5789` → after: `L5420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5420) · [Before (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5789)

```diff
-           this.sw = tt, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
+           this.Gq = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
```

#### 583. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5795` → after: `L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5426) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5795)

```diff
-           (0, ke.d)(tt) && (this.lossPending = !1);
+           (0, rI.e)(BB) && (this.lossPending = !1);
```

#### 584. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5797` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5428) · [Before (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5797)

```diff
-           this.lastFrameMs = Vt, this.lossPending && et && (0, ke.f)(tt) ? (null === this.undrawnSinceMs || Ot > 1e3) && (this.undrawnSinceMs = Vt) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Vt - this.undrawnSinceMs >= 2e3)
+           this.lastFrameMs = ZB, this.lossPending && IB && (0, rI.j)(BB) ? (null === this.undrawnSinceMs || TB > 1e3) && (this.undrawnSinceMs = ZB) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ZB - this.undrawnSinceMs >= 2e3)
```

#### 585. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5803` → after: `L5434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5434) · [Before (L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5803)

```diff
-           tt !== this.shown && (this.shown = tt, this.sw(tt))
+           BB !== this.shown && (this.shown = BB, this.Gq(BB))
```

#### 586. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5806` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5437) · [Before (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5806)

```diff
-         jt.j.sw(ft.d, tt)
+         kB.l.Gq(NB.d, BB)
```

#### 587. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5811` → after: `L5442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5442) · [Before (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5811)

```diff
-           this.iE = tt, this.now = et, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
+           this.JN = BB, this.now = IB, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
```

#### 588. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5821` → after: `L5452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5452) · [Before (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5821)

```diff
-           (0, ke.f)(tt) && et && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
+           (0, rI.j)(BB) && IB && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
```

#### 589. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5830` → after: `L5461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5461) · [Before (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5830)

```diff
-             this.iE(`webgl_restored_${et}_${tt.delay}`, `WebGL2 context restored (${et}, wasm)`)
+             this.JN(`webgl_restored_${IB}_${BB.delay}`, `WebGL2 context restored (${IB}, wasm)`)
```

#### 590. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5837` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5468) · [Before (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5837)

```diff
-             this.iE(`webgl_rejoin_${et}_${tt.delay}`, "WebGL2 context not restored: rejoining (wasm)")
+             this.JN(`webgl_rejoin_${IB}_${BB.delay}`, "WebGL2 context not restored: rejoining (wasm)")
```

#### 591. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5842` → after: `L5473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5473) · [Before (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5842)

```diff
-           const tt = (0, Ge.j)(this.now() - this.lostAtMs);
+           const BB = (0, mI.l)(this.now() - this.lostAtMs);
```

#### 592. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5857` → after: `L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5488) · [Before (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5857)

```diff
-       return fm ??= Promise.all([Vt.e(201), Vt.e(144), Vt.e(60)]).then((() => Vt(51261))).then((tt => (Em = tt, Object.assign(globalThis, {
+       return gG ??= Promise.all([ZB.e(201), ZB.e(144), ZB.e(60)]).then((() => ZB(51044))).then((BB => (NG = BB, Object.assign(globalThis, {
```

#### 593. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5865` → after: `L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5496) · [Before (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5865)

```diff
-       return lm ??= Vt.e(58).then((() => Vt(51280))).catch((tt => {
+       return FG ??= ZB.e(58).then((() => ZB(51063))).catch((BB => {
```

#### 594. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5891-L5892` → after: `L5522-L5523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5522-L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5522-L5523) · [Before (L5891-L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5891-L5892)

```diff
-       Qm || (Qm = !0, Kq.h.setHost(new cj), (0, kV.o)(), bq.c.setFollower(FH), Object.assign(globalThis, {
-         bloxdPreviews: Kq.h
+       zG || (zG = !0, sJ.e.setHost(new pk), (0, rZ.p)(), WJ.f.setFollower(Rc), Object.assign(globalThis, {
+         bloxdPreviews: sJ.e
```

#### 595. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5905` → after: `L5536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5536) · [Before (L5905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5905)

```diff
-       Xm = !0, Jj = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Cj = !Jj, console.info(`${oD} starting`), Hm || (Hm = !0, (0, ft.S)(new re(sj, mH)), (0, lt.m)(new Ue), (0, ft.P)(new Ae), (0, ft.E)()), Jj && jt.j.subscribe("appManagerUpda … [truncated]
+       hG = !0, dk = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Ck = !dk, console.info(`${eo} starting`), nG || (nG = !0, (0, NB.M)(new eI(Kk, oc)), (0, zB.j)(new uI), (0, NB.I)(new fI), (0, NB.y)()), dk && kB.l.subscribe("appManagerUpda … [truncated]
```

#### 596. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5913-L5914` → after: `L5544-L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5544-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5544-L5545) · [Before (L5913-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5913-L5914)

```diff
-           Kj = !0, (0, zV.N)(), null === (Vt = rd) || void 0 === Vt || Vt.abort(), rd = null, Jq.b.release();
-           const qt = Jj ? null !== (Ot = tt.cancel) && void 0 !== Ot ? Ot : "general:back" : null;
+           sk = !0, (0, XZ.J)(), null === (ZB = ev) || void 0 === ZB || ZB.abort(), ev = null, dJ.b.release();
+           const JB = dk ? null !== (TB = BB.cancel) && void 0 !== TB ? TB : "general:back" : null;
```

#### 597. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5919` → after: `L5550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5550) · [Before (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5919)

```diff
-             tt && et && hj ? ((0, Ce.E)("reloadOntoJs"), (0, te.f)(Ce.N)) : tt && et ? (0, te.h)() : Jj && (0, te.e)("/")
+             BB && IB && wk ? ((0, CI.u)("reloadOntoJs"), (0, SB.l)(CI.D)) : BB && IB ? (0, SB.p)() : dk && (0, SB.h)("/")
```

#### 598. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5922` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5553) · [Before (L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5922)

```diff
-       })), (0, Xq.l)(), (0, Ie.h)();
+       })), (0, cJ.n)(), (0, HI.h)();
```

#### 599. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5925` → after: `L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5556) · [Before (L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5925)

```diff
-         et = FD("rxi78i5buro", (() => {
+         IB = ro("4ec561fy2fr", (() => {
```

#### 600. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5927` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5558) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5927)

```diff
-           return null !== (tt = null === (et = Sm) || void 0 === et ? void 0 : et.ws) && void 0 !== tt ? tt : null
+           return null !== (BB = null === (IB = pG) || void 0 === IB ? void 0 : IB.ws) && void 0 !== BB ? BB : null
```

#### 601. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5930` → after: `L5561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5561) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5930)

```diff
-         console.error(`${oD} probes`, qt)
+         console.error(`${eo} probes`, JB)
```

#### 602. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5933-L5934` → after: `L5564-L5565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5564-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5564-L5565) · [Before (L5933-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5933-L5934)

```diff
-         const tt = (0, BO.o)(),
-           et = (0, BO.j)();
+         const BB = (0, tT.n)(),
+           IB = (0, tT.i)();
```

#### 603. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5947` → after: `L5578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5578) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5947)

```diff
-             lobby: null !== (et = Vt.get("lobby")) && void 0 !== et ? et : null
+             lobby: null !== (IB = ZB.get("lobby")) && void 0 !== IB ? IB : null
```

#### 604. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5950` → after: `L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5581) · [Before (L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5950)

```diff
-         if (tt) return (0, le.k)(tt.game) && GH().request(), void Fj(tt.game, tt.lobby);
+         if (BB) return (0, hI.i)(BB.game) && mc().request(), void Rk(BB.game, BB.lobby);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5958` → after: `L5589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5589) · [Before (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5958)

```diff
-               console.error(`${oD} ?ws=${et} did not attach`, qt)
+               console.error(`${eo} ?ws=${IB} did not attach`, JB)
```

#### 606. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5965` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5596) · [Before (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5965)

```diff
-         const Xt = (0, Rq.V)(),
+         const nB = (0, aJ.$)(),
```

#### 607. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5967` → after: `L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5598) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5967)

```diff
-             const Vt = (0, QV.l)(tt) ? SH(tt, et) : null;
+             const ZB = (0, nZ.o)(BB) ? ic(BB, IB) : null;
```

#### 608. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5969` → after: `L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5600) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5969)

```diff
-             console.warn(`${oD} ${Vt.detail}: picking again in ${WH} ms`), await new Promise((tt => {
+             console.warn(`${eo} ${ZB.detail}: picking again in ${Yc} ms`), await new Promise((BB => {
```

#### 609. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5972-L5973` → after: `L5603-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5603-L5604) · [Before (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5972-L5973)

```diff
-             const Ot = await (0, Rq.Y)();
-             if (!(0, QV.l)(Ot)) {
+             const TB = await (0, aJ.ab)();
+             if (!(0, nZ.o)(TB)) {
```

#### 610. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5977-L5978` → after: `L5608-L5609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5608-L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5608-L5609) · [Before (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5977-L5978)

```diff
-                 backend: null !== (qt = null === Ot || void 0 === Ot ? void 0 : Ot.backend) && void 0 !== qt ? qt : "none"
-               }), null !== Ot && (0, Rq.S)(Ot.backend)
+                 backend: null !== (JB = null === TB || void 0 === TB ? void 0 : TB.backend) && void 0 !== JB ? JB : "none"
+               }), null !== TB && (0, aJ.X)(TB.backend)
```

#### 611. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5981-L5982` → after: `L5612-L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5612-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5612-L5613) · [Before (L5981-L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5981-L5982)

```diff
-           }(await (0, Rq.Q)(), Xt);
-         if ((0, PV.setCrashBackend)((0, QV.l)(Qt) ? "unsupported" : null !== (et = null === Qt || void 0 === Qt ? void 0 : Qt.backend) && void 0 !== et ? et : "none"), (0, QV.l)(Qt)) return function(tt) {
+           }(await (0, aJ.T)(), nB);
+         if ((0, MZ.setCrashBackend)((0, nZ.o)(hB) ? "unsupported" : null !== (IB = null === hB || void 0 === hB ? void 0 : hB.backend) && void 0 !== IB ? IB : "none"), (0, nZ.o)(hB)) return function(BB) {
```

#### 612. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5989` → after: `L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5620) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5989)

```diff
-           if (qt && (0, Ce.r)()) return (0, PV.reportNoBackendRetry)("reload", et, Vt, Ot), void cH(`${Vt}, again after ${WH} ms`);
+           if (JB && (0, CI.k)()) return (0, MZ.reportNoBackendRetry)("reload", IB, ZB, TB), void pc(`${ZB}, again after ${Yc} ms`);
```

#### 613. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5992` → after: `L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5623) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5992)

```diff
-             afterReload: String(Ce.A)
+             afterReload: String(CI.t)
```

#### 614. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5995` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5626) · [Before (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5995)

```diff
-         if ((0, Tq.v)("render")) try {
+         if ((0, EJ.t)("render")) try {
```

#### 615. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5998` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5629) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L5998)

```diff
-           } = await Promise.all([Vt.e(78), Vt.e(49)]).then((() => Vt(4833)));
+           } = await Promise.all([ZB.e(78), ZB.e(49)]).then((() => ZB(4862)));
```

#### 616. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6003` → after: `L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5634) · [Before (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6003)

```diff
-         if ((0, Tq.v)("renderlite")) try {
+         if ((0, EJ.t)("renderlite")) try {
```

#### 617. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6006` → after: `L5637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5637) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6006)

```diff
-           } = await Promise.all([Vt.e(273), Vt.e(50)]).then((() => Vt(51287)));
+           } = await Promise.all([ZB.e(273), ZB.e(50)]).then((() => ZB(51069)));
```

#### 618. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6011` → after: `L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5642) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6011)

```diff
-         if ((0, Tq.v)("renderprobe")) try {
+         if ((0, EJ.t)("renderprobe")) try {
```

#### 619. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6014` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5645) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6014)

```diff
-           } = await Vt.e(51).then((() => Vt(51293)));
+           } = await ZB.e(51).then((() => ZB(51071)));
```

#### 620. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6019` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5650) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6019)

```diff
-         if ("webgl" === (null === Qt || void 0 === Qt ? void 0 : Qt.backend) && Jj && "wasm" !== (0, Ce.i)(window.location.search)) {
+         if ("webgl" === (null === hB || void 0 === hB ? void 0 : hB.backend) && dk && "wasm" !== (0, CI.d)(window.location.search)) {
```

#### 621. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6021` → after: `L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5652) · [Before (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6021)

```diff
-           null !== tt && (0, ue.i)(tt)
+           null !== BB && (0, QI.g)(BB)
```

#### 622. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6023-L6028` → after: `L5654-L5659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5654-L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5654-L5659) · [Before (L6023-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6023-L6028)

```diff
-         const lt = null !== (Ot = null === Qt || void 0 === Qt ? void 0 : Qt.backend) && void 0 !== Ot ? Ot : null;
-         Td.adapter = null !== (Dt = null === Qt || void 0 === Qt ? void 0 : Qt.adapter) && void 0 !== Dt ? Dt : null, Td.boundAtMs = null, Td.indirectHangs = null, Td.restoresSkipped = null;
-         const Et = !(0, QV.bb)();
-         null === Qt || (0, QV.B)(Qt.reason) || console.info(`${oD} drawing with ${Qt.backend}: ${Qt.reason}`);
-         const ft = (0, Rq.F)();
-         Km(!0), (0, Pt.r)((tt => {
+         const zB = null !== (TB = null === hB || void 0 === hB ? void 0 : hB.backend) && void 0 !== TB ? TB : null;
+         xv.adapter = null !== (oB = null === hB || void 0 === hB ? void 0 : hB.adapter) && void 0 !== oB ? oB : null, xv.boundAtMs = null, xv.indirectHangs = null, xv.restoresSkipped = null;
+         const FB = !(0, nZ.db)();
+         null === hB || (0, nZ.D)(hB.reason) || console.info(`${eo} drawing with ${hB.backend}: ${hB.reason}`);
+         const NB = (0, aJ.E)();
+         OG(!0), (0, MB.t)((BB => {
```

#### 623. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6032` → after: `L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5663) · [Before (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6032)

```diff
-               sd = tt.rasterText, vd = tt.setTextLocalPlayer, tt.setTextLocalPlayer(null !== (et = null === (Vt = hd) || void 0 === Vt ? void 0 : Vt.info.playerDbId) && void 0 !== et ? et : null), nd = tt.drainTextRerasters, tj = tt.loadTextIcons, tt.warmText((() => Xj)), tt.text … [truncated]
+               Dv = BB.rasterText, Ov = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (IB = null === (ZB = wv) || void 0 === ZB ? void 0 : ZB.info.playerDbId) && void 0 !== IB ? IB : null), Kv = BB.drainTextRerasters, Vv = BB.loadTextIcons, BB.warmText((() => ck)), BB.text … [truncated]
```

#### 624. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6043` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5674) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6043)

```diff
-           console.warn(`${oD} the game code did not load: a join asks again`, tt)
+           console.warn(`${eo} the game code did not load: a join asks again`, BB)
```

#### 625. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6045` → after: `L5676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5676) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6045)

```diff
-         const wt = (0, Rq.l)(Qt);
+         const gB = (0, aJ.j)(hB);
```

#### 626. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6047` → after: `L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5678) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6047)

```diff
-         wt.catch((() => {})), "loading" === (0, ye.D)() && Ct();
+         gB.catch((() => {})), "loading" === (0, gI.u)() && CB();
```

#### 627. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6050-L6054` → after: `L5681-L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5681-L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5681-L5685) · [Before (L6050-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050-L6054)

```diff
-             const et = null !== tt && void 0 !== tt ? tt : document.createElement("canvas");
-             et.id = "wasm-game-canvas", bj.watch(et, (() => null !== Md && mX())), (0, Gq.k)();
-             const Vt = (0, oe.g)(),
-               Ot = (0, oe.j)(Vt);
-             et.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, kq.c)(et, Ot), (0, oe.c)(et, Vt), et.width = Ot.bufferWidth, et.height = Ot.bufferHeight;
+             const IB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
+             IB.id = "wasm-game-canvas", Wk.watch(IB, (() => null !== Uv && Gn())), (0, mJ.i)();
+             const ZB = (0, LI.c)(),
+               TB = (0, LI.f)(ZB);
+             IB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, rJ.f)(IB, TB), (0, LI.b)(IB, ZB), IB.width = TB.bufferWidth, IB.height = TB.bufferHeight;
```

#### 628. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6063` → after: `L5694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5694) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6063)

```diff
-             (0, PV.showUnsupported)((0, ZO.q)("fetch"), qD.h.fetch, `the previews did not load: ${String(qt)}`)
+             (0, MZ.showUnsupported)((0, jT.n)("fetch"), To.h.fetch, `the previews did not load: ${String(JB)}`)
```

#### 629. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6074` → after: `L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5705) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6074)

```diff
-             (0, PV.showUnsupported)((0, ZO.q)("fetch"), qD.h.fetch, `the ${null!==lt&&void 0!==lt?lt:"client"} build did not load: ${String(qt)}`)
+             (0, MZ.showUnsupported)((0, jT.n)("fetch"), To.h.fetch, `the ${null!==zB&&void 0!==zB?zB:"client"} build did not load: ${String(JB)}`)
```

#### 630. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6077-L6080` → after: `L5708-L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5708-L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5708-L5711) · [Before (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6077-L6080)

```diff
-         const bt = (0, Rq.g)(),
-           Jt = !bt && !0 !== AV.h.getItem(rD),
-           ut = !bt && "loading" === (0, ye.D)();
-         await (0, Iq.e)(Nt, {
+         const WB = (0, aJ.f)(),
+           dB = !WB && !0 !== fZ.n.getItem(uo),
+           QB = !WB && "loading" === (0, gI.u)();
+         await (0, HJ.b)(yB, {
```

#### 631. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6082` → after: `L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5713) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6082)

```diff
-         }), ut && !(0, ye.W)() && await (0, Iq.e)(Nt, {
+         }), QB && !(0, gI.M)() && await (0, HJ.b)(yB, {
```

#### 632. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6087-L6089` → after: `L5718-L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5718-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5718-L5720) · [Before (L6087-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6087-L6089)

```diff
-         if (!(0, ye.W)()) {
-           (0, ye.T)() && AV.h.setItem(rD, !0);
-           const tt = (0, ye.s)();
+         if (!(0, gI.M)()) {
+           (0, gI.K)() && fZ.n.setItem(uo, !0);
+           const BB = (0, gI.m)();
```

#### 633. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6091-L6092` → after: `L5722-L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5722-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5722-L5723) · [Before (L6091-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6091-L6092)

```diff
-             site: EV.w,
-             error: (0, ye.q)(),
+             site: zZ.s,
+             error: (0, gI.j)(),
```

#### 634. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6096` → after: `L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5727) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6096)

```diff
-             const et = null !== tt && void 0 !== tt ? tt : "instantiate",
+             const IB = null !== BB && void 0 !== BB ? BB : "instantiate",
```

#### 635. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6098` → after: `L5729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5729) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6098)

```diff
-                 (0, PV.showUnsupported)((0, ZO.q)(et), qD.h[et], (0, ye.k)())
+                 (0, MZ.showUnsupported)((0, jT.n)(IB), To.h[IB], (0, gI.g)())
```

#### 636. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6102` → after: `L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5733) · [Before (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6102)

```diff
-                 const tt = [Nt.url().href, be.d.url().href];
+                 const BB = [yB.url().href, WI.h.url().href];
```

#### 637. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6105` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5736) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6105)

```diff
-                   error: (0, ye.k)(),
+                   error: (0, gI.g)(),
```

#### 638. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6110-L6113` → after: `L5741-L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5741-L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5741-L5744) · [Before (L6110-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6110-L6113)

```diff
-               const et = (0, ye.k)(),
-                 Vt = (0, tV.e)((0, ye.q)());
-               if (Vt && (0, Ce.r)()) return (0, PV.reportCountedLoadFallback)((0, ZO.q)(tt), qD.h[tt], et, "wasmReload"), cH(`the wasm client ran out of memory to ${tt} here (${et})`), null;
-               (0, PV.reportCountedLoadFallback)((0, ZO.q)(tt), qD.h[tt], et, Vt ? "declined" : "pageAlone"), IH(`the wasm client did not ${tt} here (${et})`, Vt ? "oom" : null)
+               const IB = (0, gI.g)(),
+                 ZB = (0, SI.c)((0, gI.j)());
+               if (ZB && (0, CI.k)()) return (0, MZ.reportCountedLoadFallback)((0, jT.n)(BB), To.h[BB], IB, "wasmReload"), pc(`the wasm client ran out of memory to ${BB} here (${IB})`), null;
+               (0, MZ.reportCountedLoadFallback)((0, jT.n)(BB), To.h[BB], IB, ZB ? "declined" : "pageAlone"), Hc(`the wasm client did not ${BB} here (${IB})`, ZB ? "oom" : null)
```

#### 639. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6117-L6118` → after: `L5748-L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5748-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5748-L5749) · [Before (L6117-L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6117-L6118)

```diff
-         }(0, Ne.M)(Nt.url()) && (0, PV.reportUnstreamedCoreLoad)();
-         const ht = (0, ye.F)();
+         }(0, qI.S)(yB.url()) && (0, MZ.reportUnstreamedCoreLoad)();
+         const wB = (0, gI.x)();
```

#### 640. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6123` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5754) · [Before (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6123)

```diff
-             wasm: ht.bQ()
+             wasm: wB.Yh()
```

#### 641. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6126-L6130` → after: `L5757-L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5757-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5757-L5761) · [Before (L6126-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6126-L6130)

```diff
-             Py: tt
-           } = Nt.bindings, et = tt.ROt();
-           if (et !== ge.z) return lX({
-             site: EV.c,
-             error: `core ABI ${et}, page ABI ${ge.z}`,
+             Hq: BB
+           } = yB.bindings, IB = BB.sTB();
+           if (IB !== DI.B) return zn({
+             site: zZ.b,
+             error: `core ABI ${IB}, page ABI ${DI.B}`,
```

#### 642. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6133` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5764) · [Before (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6133)

```diff
-           const [Vt, Ot] = (0, ge.De)();
+           const [ZB, TB] = (0, DI.ue)();
```

#### 643. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6137` → after: `L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5768) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6137)

```diff
-             site: EV.c,
+             site: zZ.b,
```

#### 644. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6143` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5774) · [Before (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6143)

```diff
-         const St = new EV.f(vt, ye.z, {
+         const iB = new zZ.h(OB, gI.r, {
```

#### 645. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6150-L6151` → after: `L5781-L5782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5781-L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5781-L5782) · [Before (L6150-L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6150-L6151)

```diff
-                   if (tt.site === EV.e && (0, QV.o)(tt.error)) return "frames_refused";
-                   return tt.site === UD && (0, QV.r)(tt.error) ? "start_failed" : null
+                   if (BB.site === zZ.d && (0, nZ.p)(BB.error)) return "frames_refused";
+                   return BB.site === fo && (0, nZ.t)(BB.error) ? "start_failed" : null
```

#### 646. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6155` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5786) · [Before (L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6155)

```diff
-                 return Le.D.reloaded(null, !1), (0, PV.reportRenderReload)("webgpu", "start_failed" === qt ? 0 : 1, Vt, {
+                 return PI.H.reloaded(null, !1), (0, MZ.reportRenderReload)("webgpu", "start_failed" === JB ? 0 : 1, ZB, {
```

#### 647. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6172-L6173` → after: `L5803-L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5803-L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5803-L5804) · [Before (L6172-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6172-L6173)

```diff
-               return et === ge.M.RenderDeviceLost
-             })) && ((0, Rq.A)(), Mj.deviceLost(), "webgpu" === lt && ((0, lV.d)(gd), Le.D.lost())), null === (Vt = dj) || void 0 === Vt || Vt.coreErrors(tt);
+               return IB === DI.K.RenderDeviceLost
+             })) && ((0, aJ.x)(), Uk.deviceLost(), "webgpu" === zB && ((0, hZ.e)(Ev), PI.H.lost())), null === (ZB = Gk) || void 0 === ZB || ZB.coreErrors(BB);
```

#### 648. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6177` → after: `L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5808) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6177)

```diff
-                 return tt === ge.M.EnvUnknownSky ? (0, PV.unknownSkyWords)(Ke.b.get("skyBox")) : tt === ge.M.RenderDeviceLost ? (0, PV.deviceLossWords)(et, Td.boundAtMs) : null === (Vt = gd) || void 0 === Vt ? void 0 : Vt.IOt(tt, et)
+                 return BB === DI.K.EnvUnknownSky ? (0, MZ.unknownSkyWords)(sI.c.get("skyBox")) : BB === DI.K.RenderDeviceLost ? (0, MZ.deviceLossWords)(IB, xv.boundAtMs) : null === (ZB = Ev) || void 0 === ZB ? void 0 : ZB.wTB(BB, IB)
```

#### 649. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6184` → after: `L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5815) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6184)

```diff
-               return et === ge.M.EnvUnknownSky
+               return IB === DI.K.EnvUnknownSky
```

#### 650. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6191-L6195` → after: `L5822-L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5822-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5822-L5826) · [Before (L6191-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6191-L6195)

```diff
-               const dt = et === ge.hd.WEBGPU,
-                 jt = Ot === ge.hd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 Ht = Ot === ge.hd.RESTORE_LOST,
-                 Xt = dt && (0, Le.l)(Td.adapter, Vt, "lost" === jt, Ht),
-                 Qt = (0, lV.l)(gd);
+               const vB = IB === DI.ed.WEBGPU,
+                 kB = TB === DI.ed.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 cB = TB === DI.ed.RESTORE_LOST,
+                 nB = vB && (0, PI.q)(xv.adapter, ZB, "lost" === kB, cB),
+                 hB = (0, hZ.i)(Ev);
```

#### 651. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6200-L6201` → after: `L5831-L5832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5831-L5832) · [Before (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6200-L6201)

```diff
-                 const et = void 0 === Qt ? "" : ` (${Qt.message})`;
-                 return void tt.crash(PV.RENDER_RELOAD_SITE, new Error(`${(0,PV.renderReloadMessage)("webgpu",jt,Vt)} and ${lt}${et}`))
+                 const IB = void 0 === hB ? "" : ` (${hB.message})`;
+                 return void BB.crash(MZ.RENDER_RELOAD_SITE, new Error(`${(0,MZ.renderReloadMessage)("webgpu",kB,ZB)} and ${zB}${IB}`))
```

#### 652. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6204-L6205` → after: `L5835-L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5835-L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5835-L5836) · [Before (L6204-L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6204-L6205)

```diff
-               "lost" === jt && (0, Rq.A)();
-               dt || ((0, Ce.w)(), bj.gaveUp());
+               "lost" === kB && (0, aJ.x)();
+               vB || ((0, CI.q)(), Wk.gaveUp());
```

#### 653. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6219` → after: `L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5850) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6219)

```diff
-             tt.kind === ge.db.SkyImages ? null === (et = im) || void 0 === et || et.onEvent(tt.payload) : tt.kind === ge.db.EnvLighting && (Ym = 1 === tt.payload[0])
+             BB.kind === DI.X.SkyImages ? null === (IB = AG) || void 0 === IB || IB.onEvent(BB.payload) : BB.kind === DI.X.EnvLighting && (tG = 1 === BB.payload[0])
```

#### 654. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6241` → after: `L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5872) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6241)

```diff
-                   !1 !== et || tt.isStopped ? !0 === et && console.info(`${oD} terrain textures handed over again after the renderer lost them`) : console.warn(`${oD} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== IB || BB.isStopped ? !0 === IB && console.info(`${eo} terrain textures handed over again after the renderer lost them`) : console.warn(`${eo} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 655. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6253` → after: `L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5884) · [Before (L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6253)

```diff
-               if (tt.forEachNetOut(HX), DX(tt), (0, EV.L)(tt, {
+               if (BB.forEachNetOut(cn), Jn(BB), (0, zZ.O)(BB, {
```

#### 656. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6264-L6265` → after: `L5895-L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5895-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5895-L5896) · [Before (L6264-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6264-L6265)

```diff
-         if (wm = St, null === (mt = ze.d.wasmNetReady) || void 0 === mt || mt.call(ze.d, (() => St.isStopped ? 0 : St.netKeptFrames)), null !== tt) {
-           St.setAntiCheatProbes(ID(ye.z, tt.checks)), tt.watchHeld(ZD.CoreFrame, (() => St.frame)), tt.watchHeld(ZD.GlueFrame, (() => vt.frame));
+         if (qG = iB, null === (GB = XI.c.wasmNetReady) || void 0 === GB || GB.call(XI.c, (() => iB.isStopped ? 0 : iB.netKeptFrames)), null !== BB) {
+           iB.setAntiCheatProbes(Mo(gI.r, BB.checks)), BB.watchHeld(Po.CoreFrame, (() => iB.frame)), BB.watchHeld(Po.GlueFrame, (() => OB.frame));
```

#### 657. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6269-L6271` → after: `L5900-L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5900-L5902) · [Before (L6269-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6269-L6271)

```diff
-             Vt.BQ(tt.BQ());
-             const qt = (0, TO.jb)((() => {
-               Vt.BQ(tt.BQ())
+             ZB.Iz(BB.Iz());
+             const JB = (0, ET.ab)((() => {
+               ZB.Iz(BB.Iz())
```

#### 658. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6273` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5904) · [Before (L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6273)

```diff
-             let Dt = 6 * (0, TO.X)() | 0;
+             let oB = 6 * (0, ET.S)() | 0;
```

#### 659. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6277` → after: `L5908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5908) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6277)

```diff
-             (0, QD.l)(mt);
+             (0, no.h)(GB);
```

#### 660. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6289` → after: `L5920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5920) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6289)

```diff
-                 Vt.value(ge.g.ProbeUsedProp, tt.usedProp()), 0 !== Ot && Vt.setFlags(Ot)
+                 ZB.value(DI.h.ProbeUsedProp, BB.usedProp()), 0 !== TB && ZB.setFlags(TB)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6292` → after: `L5923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5923) · [Before (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6292)

```diff
-                 (0, TO.kb)(qt), (0, QD.h)(mt), (0, XD.i)(dt)
+                 (0, ET.bb)(JB), (0, no.f)(GB), (0, co.g)(vB)
```

#### 662. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6298` → after: `L5929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5929) · [Before (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6298)

```diff
-               Ot = St.rings.input.writeRecord(ge.Fb.AntiCheat, tt, et, Vt, 0)
+               TB = iB.rings.input.writeRecord(DI.vb.AntiCheat, BB, IB, ZB, 0)
```

#### 663. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6303` → after: `L5934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5934) · [Before (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6303)

```diff
-         dm = (tt, et, Vt) => St.rings.cmd.writeCmd(tt, et, Vt), jm = tt => St.rings.cmd.growForCmd(tt), Qd = !1, ZH(), (0, Pt.u)(St, {
+         kG = (BB, IB, ZB) => iB.rings.cmd.writeCmd(BB, IB, ZB), cG = BB => iB.rings.cmd.growForCmd(BB), hv = !1, jc(), (0, MB.v)(iB, {
```

#### 664. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6305` → after: `L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5936) · [Before (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmPlay.js#L6305)

```diff
-           memory: ye.z,
+           memory: gI.r,
```
