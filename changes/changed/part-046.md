# Changed — Bundle Modifications Report (Part 046 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `46 / 141` (**422** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 045](part-045.md) · [Part 047 →](part-047.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 594. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3713-L3714` → after: `L3531-L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3531-L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3531-L3551) · [Before (L3713-L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3713-L3714)

```diff
-             function cT(...TT) {
-               return TT[xU[13]] = xU[2], kT(TT[xU[1]], 17) ^ kT(TT[xU[1]], xU[97]) ^ jT(TT[xU[1]], xU[96])
+                         function NB(...BB) {
+                           return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = IB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
+                         }
+                         throw Error(NB(qj[115]))
+                       }
+                     }
+                     if ((jB[qj[17]] & qj[120]) == qj[69] && (Hj(jB[-qj[113]] = dB(), jB[qj[15]] = dB(), jB[qj[14]] = dB(), jB[qj[29]] = (jB[qj[17]] & qj[6]) << qj[55] | jB[-qj[113]] << qj[22] | jB[qj[15]] << qj[8] | jB[qj[14]]), jB[qj[29]] >= qj[44] && jB[qj[29]] <= qj[121])) ret … [truncated]
+                     throw Error(aB(124))
+                   }
+                   Hj(BB[qj[12]] = qj[0], BB[qj[17]] = String.fromCharCode), Hj(BB[qj[9]] = qj[18], BB[qj[14]] = qj[18], BB[qj[19]] = qj[18]), Hj(BB[qj[2]].version = aB(125), BB[qj[2]].encode = function(...BB) {
+                     for (Hj(BB[qj[12]] = qj[0], BB[qj[75]] = jB(BB[qj[2]]), BB[-qj[112]] = BB[qj[75]].length, BB[qj[14]] = -qj[0], BB[qj[31]] = qj[18], BB[qj[41]] = ""); ++BB[qj[14]] < BB[-qj[112]];) Hj(BB[qj[31]] = BB[qj[75]][BB[qj[14]]], BB[qj[41]] += nB(BB[qj[31]]));
+                     return BB[qj[41]]
+                   }, BB[qj[2]].decode = function(...zB) {
+                     for (Hj(zB[qj[12]] = qj[0], BB[qj[9]] = jB(zB[qj[2]]), BB[qj[14]] = BB[qj[9]].length, BB[qj[19]] = qj[2], zB[qj[0]] = [], zB[qj[13]] = qj[18]);
+                       (zB[qj[13]] = IB()) !== qj[73];) zB[qj[0]].push(zB[qj[13]]);
+                     return function(...jB) {
+ ... (5 more added lines; see GitHub link above)
```

#### 595. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3717-L3724` → after: `L3570-L3572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3570-L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3570-L3572) · [Before (L3717-L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3717-L3724)

```diff
-             function vT(...UT) {
-               var mT, WT, zT, MT, gT, nT, HT, kT, jT, vT, qT, iT;
-               for (yU(UT[xU[13]] = xU[0], UT[xU[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), UT[-xU[99]] = new Array(xU[98])), yU(UT[xU[1]][UT[xU[2]] >> xU[32]] |= xU[84] << xU[95] - UT[xU[2]] % xU[94], UT[xU[1 … [truncated]
-                 for (yU(mT = UT[xU[5]][xU[1]], WT = UT[xU[5]][xU[2]], zT = UT[xU[5]][xU[0]], MT = UT[xU[5]][xU[4]], gT = UT[xU[5]][xU[29]], nT = UT[xU[5]][xU[32]], HT = UT[xU[5]][xU[23]], kT = UT[xU[5]][xU[25]]), vT = xU[1]; vT < xU[98]; vT++) yU(vT < xU[71] ? UT[-xU[99]][vT] = U … [truncated]
-                 yU(UT[xU[5]][xU[1]] = fT(mT, UT[xU[5]][xU[1]]), UT[xU[5]][xU[2]] = fT(WT, UT[xU[5]][xU[2]]), UT[xU[5]][xU[0]] = fT(zT, UT[xU[5]][xU[0]]), UT[xU[5]][xU[4]] = fT(MT, UT[xU[5]][xU[4]]), UT[xU[5]][xU[29]] = fT(gT, UT[xU[5]][xU[29]]), UT[xU[5]][xU[32]] = fT(nT, UT[xU[5 … [truncated]
-               }
-               return UT[xU[5]]
-             }
+         function mB(...BB) {
+           return BB[qj[12]] = qj[0], typeof kj[BB[qj[2]]] === qj[16] ? kj[BB[qj[2]]] = JB(Gj[BB[qj[2]]]) : kj[BB[qj[2]]]
+         }
```

#### 596. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3726-L3743` → after: `L3574-L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3574-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3574-L3575) · [Before (L3726-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3726-L3743)

```diff
-             function fT(...TT) {
-               return yU(TT[xU[13]] = xU[0], TT[xU[0]] = (TT[xU[1]] & xU[100]) + (TT[xU[2]] & xU[100]), TT[xU[53]] = (TT[xU[1]] >> xU[71]) + (TT[xU[2]] >> xU[71]) + (TT[xU[0]] >> xU[71])), TT[xU[53]] << xU[71] | TT[xU[0]] & xU[100]
-             }
-             return yU(TT[xU[13]] = xU[1], TT[-xU[75]] = xU[1], TT[xU[2]] = ""), TT[xU[54]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079 … [truncated]
-               hex: function(...TT) {
-                 return TT[xU[13]] = xU[2], zT(function(...TT) {
-                   return TT[xU[13]] = xU[2], HT(vT(nT(TT[xU[1]]), TT[xU[1]].length * xU[11]))
-                 }(gT(TT[xU[1]])))
-               },
-               b64: UT,
-               any: mT,
-               hex_hmac: function(...TT) {
-                 return TT[xU[13]] = xU[0], zT(WT(gT(TT[xU[1]]), gT(TT[xU[2]])))
-               },
-               b64_hmac: UT,
-               any_hmac: mT
- ... (2 more removed lines; see GitHub link above)
+         function yB(...BB) {
+           BB[qj[12]] = qj[2]
```

#### 597. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3745` → after: `L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3577) · [Before (L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3745)

```diff
-         UT(111) + "P" in aU && eT(), (xU[1], lT[xU[53]])("5 ")
+         mB(106) + "r" in oj && yB(), (0, pB[qj[19]])("5 ")
```

#### 598. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3747` → after: `L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3579) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3747)

```diff
-     }, ZT.j.subscribe("customBindingsChanged", (() => {
+     }, mB.n.subscribe("customBindingsChanged", (() => {
```

#### 599. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3756` → after: `L3588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3588) · [Before (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3756)

```diff
-     ZT.j.subscribe("displaymodeFullscreenChange", (TT => {
+     mB.n.subscribe("displaymodeFullscreenChange", (BB => {
```

#### 600. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3758` → after: `L3590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3590) · [Before (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3758)

```diff
-     })), ZT.j.subscribe("pointerLockUpdate", (TT => {
+     })), mB.n.subscribe("pointerLockUpdate", (BB => {
```

#### 601. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3760` → after: `L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3592) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3760)

```diff
-     })), ZT.j.subscribe("freeCursorUpdate", (TT => {
+     })), mB.n.subscribe("freeCursorUpdate", (BB => {
```

#### 602. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3764` → after: `L3596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3596) · [Before (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3764)

```diff
-         window.removeEventListener("wheel", PU), yT.isIframed && !(0, gT.p)() && (QU || sU) && window.addEventListener("wheel", PU, {
+         window.removeEventListener("wheel", Xj), FB.isIframed && !(0, IB.l)() && (Yj || Vj) && window.addEventListener("wheel", Xj, {
```

#### 603. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3778` → after: `L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3610) · [Before (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3778)

```diff
-       ZT.j.EZ("QTEMouseState", {
+       mB.n.Ly("QTEMouseState", {
```

#### 604. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3785-L3786` → after: `L3617-L3618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3617-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3617-L3618) · [Before (L3785-L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3785-L3786)

```diff
-       const lT = (0, dT.h)();
-       lT.xTT = null !== (UT = function(TT, UT) {
+       const pB = (0, fB.g)();
+       pB.mBB = null !== (jB = function(BB, jB) {
```

#### 605. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3791` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3623) · [Before (L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3791)

```diff
-         const MT = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.oR) && void 0 !== mT ? mT : null;
+         const dB = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.JR) && void 0 !== zB ? zB : null;
```

#### 606. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3793-L3794` → after: `L3625-L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3625-L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3625-L3626) · [Before (L3793-L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3793-L3794)

```diff
-         const gT = null !== (WT = null === UT || void 0 === UT ? void 0 : UT.position) && void 0 !== WT ? WT : null;
-         if (zT.playerCanChangePos(TT.VV, gT[0], gT[1], gT[2])) return null;
+         const IB = null !== (QB = null === jB || void 0 === jB ? void 0 : jB.position) && void 0 !== QB ? QB : null;
+         if (nB.playerCanChangePos(BB.zV, IB[0], IB[1], IB[2])) return null;
```

#### 607. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3802-L3810` → after: `L3634-L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3634-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3634-L3642) · [Before (L3802-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3802-L3810)

```diff
-         TT.KTT && (HT = [...TT.KTT], TT.jD(HT, HT));
-         const kT = (HT ? TT.camera.hN : 0) + zT.getBlockReach(TT.VV);
-         return TT.pickBlock(HT, TT.STT, kT, ((UT, mT, WT, MT) => 0 !== UT && ("Board" !== zT.getMetaInfo(UT).rootName || zT.playerCanChangePos(TT.VV, mT, WT, MT) || nT(mT, WT, MT))))
-       }(lT, lT.xTT)) && void 0 !== UT ? UT : lT.xTT;
-       const LT = null !== (mT = null === (zT = lT.xTT) || void 0 === zT ? void 0 : zT.position) && void 0 !== mT ? mT : null,
-         BT = null !== (MT = lT.STT) && void 0 !== MT ? MT : lT.camera.qD(),
-         cT = dT.j.localPlayerPickActionHelper.getPickEntityResult(BT),
-         vT = null !== (gT = lT.xTT) && void 0 !== gT && gT.oR ? (0, PT.e)(lT.xTT.oR) : "Air",
-         fT = TT === pT.b.UpFirePrimary || TT === pT.b.UpFireSecondary,
+         BB.YBB && (uB = [...BB.YBB], BB.WK(uB, uB));
+         const UB = (uB ? BB.camera.Xw : 0) + nB.getBlockReach(BB.zV);
+         return BB.pickBlock(uB, BB.VBB, UB, ((jB, zB, QB, dB) => 0 !== jB && ("Board" !== nB.getMetaInfo(jB).rootName || nB.playerCanChangePos(BB.zV, zB, QB, dB) || NB(zB, QB, dB))))
+       }(pB, pB.mBB)) && void 0 !== jB ? jB : pB.mBB;
+       const rB = null !== (zB = null === (nB = pB.mBB) || void 0 === nB ? void 0 : nB.position) && void 0 !== zB ? zB : null,
+         JB = null !== (dB = pB.VBB) && void 0 !== dB ? dB : pB.camera.nC(),
+         yB = fB.i.localPlayerPickActionHelper.getPickEntityResult(JB),
+         kB = null !== (IB = pB.mBB) && void 0 !== IB && IB.JR ? (0, AB.g)(pB.mBB.JR) : "Air",
+         GB = BB === sB.c.UpFirePrimary || BB === sB.c.UpFireSecondary,
```

#### 608. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3812` → after: `L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3644) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3812)

```diff
-         iT = fT ? TT === pT.b.UpFireSecondary : TT === pT.b.DownFireSecondary,
+         gB = GB ? BB === sB.c.UpFireSecondary : BB === sB.c.DownFireSecondary,
```

#### 609. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3814-L3815` → after: `L3646-L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3646-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3646-L3647) · [Before (L3814-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3814-L3815)

```diff
-       ZT.j.EZ("mouseState", {
-         uj: TT,
+       mB.n.Ly("mouseState", {
+         ea: BB,
```

#### 610. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3817-L3822` → after: `L3649-L3654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3649-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3649-L3654) · [Before (L3817-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3817-L3822)

```diff
-       }), (0, WT.sendColyMessage)(jT._g, {
-         uj: TT,
-         Cj: bT,
-         AM: LT,
-         RM: cT
-       }, !0), (0, dT.d)().client.triggerGameCallback(qT, lT.VV, iT, null !== (nT = null === LT || void 0 === LT ? void 0 : LT[0]) && void 0 !== nT ? nT : null, null !== (HT = null === LT || void 0 === LT ? void 0 : LT[1]) && void 0 !== HT ? HT : null, null !== (kT = null === LT | … [truncated]
+       }), (0, QB.sendColyMessage)(aB.Qh, {
+         ea: BB,
+         la: tB,
+         rI: rB,
+         sI: yB
+       }, !0), (0, fB.c)().client.triggerGameCallback(LB, pB.zV, gB, null !== (NB = null === rB || void 0 === rB ? void 0 : rB[0]) && void 0 !== NB ? NB : null, null !== (uB = null === rB || void 0 === rB ? void 0 : rB[1]) && void 0 !== uB ? uB : null, null !== (UB = null === rB | … [truncated]
```

#### 611. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3827-L3829` → after: `L3659-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3659-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3659-L3661) · [Before (L3827-L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3827-L3829)

```diff
-       (0, sT.e)(TT, (() => {
-         const TT = (0, dT.h)();
-         return (0, QT.E)(TT) || !1 !== TT.kY.canCustomiseChar
+       (0, XB.b)(BB, (() => {
+         const BB = (0, fB.g)();
+         return (0, hB.I)(BB) || !1 !== BB.wG.canCustomiseChar
```

#### 612. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3833` → after: `L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3665) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3833)

```diff
-   39238: (TT, UT, mT) => {
+   39187: (BB, jB, zB) => {
```

#### 613. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3836` → after: `L3668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3668) · [Before (L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3836)

```diff
-       e: () => gT
+       g: () => IB
```

#### 614. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3838` → after: `L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3670) · [Before (L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3838)

```diff
-     var WT = mT(38555);
+     var QB = zB(38520);
```

#### 615. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3846` → after: `L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3678) · [Before (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3846)

```diff
-       zT = TT, TT ? WT.e.setMultiplierType("emoteWheel", 0) : WT.e.removeMultiplier("emoteWheel")
+       nB = BB, BB ? QB.f.setMultiplierType("emoteWheel", 0) : QB.f.removeMultiplier("emoteWheel")
```

#### 616. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3849` → after: `L3681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3681) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3849)

```diff
-   39247: (TT, UT, mT) => {
+   39193: (BB, jB, zB) => {
```

#### 617. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3851` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3683) · [Before (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3851)

```diff
-       return Boolean(TT.kY.useInventory && TT.kY.useFullInventory && TT.pY.XUT(TT.VV))
+       return Boolean(BB.wG.useInventory && BB.wG.useFullInventory && BB.vG.GjB(BB.zV))
```

#### 618. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3857` → after: `L3689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3689) · [Before (L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3857)

```diff
-   39122: (TT, UT, mT) => {
+   39102: (BB, jB, zB) => {
```

#### 619. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3859-L3860` → after: `L3691-L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3691-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3691-L3692) · [Before (L3859-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3859-L3860)

```diff
-       e: () => MT,
-       g: () => zT
+       d: () => dB,
+       e: () => nB
```

#### 620. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3862` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3694) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3862)

```diff
-     var WT = mT(37253);
+     var QB = zB(37239);
```

#### 621. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3879-L3880` → after: `L3711-L3712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3711-L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3711-L3712) · [Before (L3879-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3879-L3880)

```diff
-             rW: UT,
-             KW: mT
+             wQ: jB,
+             xQ: zB
```

#### 622. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3883` → after: `L3715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3715) · [Before (L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3883)

```diff
-         nT = null === gT ? mT : null,
+         NB = null === IB ? zB : null,
```

#### 623. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3885-L3888` → after: `L3717-L3720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3717-L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3717-L3720) · [Before (L3885-L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3885-L3888)

```diff
-           rW: HT = null,
-           KW: kT = 0
-         } = null !== gT && void 0 !== gT ? gT : {};
-       TT.animateEntity(UT, WT.g.Custom, nT, zT, MT, HT, kT)
+           wQ: uB = null,
+           xQ: UB = 0
+         } = null !== IB && void 0 !== IB ? IB : {};
+       BB.animateEntity(jB, QB.f.Custom, NB, nB, dB, uB, UB)
```

#### 624. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3891` → after: `L3723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3723) · [Before (L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3891)

```diff
-   39240: (TT, UT, mT) => {
+   39191: (BB, jB, zB) => {
```

#### 625. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3895-L3897` → after: `L3727-L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3727-L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3727-L3729) · [Before (L3895-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3895-L3897)

```diff
-     var WT = mT(38511),
-       zT = mT(366),
-       MT = mT(2875);
+     var QB = zB(38470),
+       nB = zB(376),
+       dB = zB(2863);
```

#### 626. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3901-L3904` → after: `L3733-L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3733-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3733-L3736) · [Before (L3901-L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3901-L3904)

```diff
-       const gT = (0, MT.h)(),
-         nT = null !== (TT = null === (UT = gT.pY.tUT(gT.VV)) || void 0 === UT ? void 0 : UT.selectedItem) && void 0 !== TT ? TT : null,
-         HT = nT ? (0, MT.d)().getItemStat(gT.VV, nT.name, "attackCooldownMs") : null,
-         kT = (0, zT.zd)(HT, null === nT || void 0 === nT || null === (mT = nT.attributes.customAttributes) || void 0 === mT || null === (WT = mT.enchantments) || void 0 === WT ? void 0 : WT["Attack Speed"]);
+       const IB = (0, dB.g)(),
+         NB = null !== (BB = null === (jB = IB.vG.mjB(IB.zV)) || void 0 === jB ? void 0 : jB.selectedItem) && void 0 !== BB ? BB : null,
+         uB = NB ? (0, dB.c)().getItemStat(IB.zV, NB.name, "attackCooldownMs") : null,
+         UB = (0, nB.jd)(uB, null === NB || void 0 === NB || null === (zB = NB.attributes.customAttributes) || void 0 === zB || null === (QB = zB.enchantments) || void 0 === QB ? void 0 : QB["Attack Speed"]);
```

#### 627. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3925-L3926` → after: `L3757-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3757-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3757-L3758) · [Before (L3925-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3925-L3926)

```diff
-     var HT = mT(39238),
-       kT = mT(1388);
+     var uB = zB(39187),
+       UB = zB(1316);
```

#### 628. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3935` → after: `L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3767) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3935)

```diff
-             if (UT.noteTry(TT, mT), this.tries = UT, (0, kT.u)() && !(0, HT.d)()) {
+             if (jB.noteTry(BB, zB), this.tries = jB, (0, UB.y)() && !(0, uB.d)()) {
```

#### 629. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3937-L3939` → after: `L3769-L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3769-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3769-L3771) · [Before (L3937-L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3937-L3939)

```diff
-               (0, WT.e)();
-               const TT = (0, MT.h)();
-               null === (zT = TT.pY.AUT(TT.VV)) || void 0 === zT || null === (nT = zT.AY) || void 0 === nT || nT.repeatAttack()
+               (0, QB.i)();
+               const BB = (0, dB.g)();
+               null === (nB = BB.vG.XjB(BB.zV)) || void 0 === nB || null === (NB = nB.kS) || void 0 === NB || NB.repeatAttack()
```

#### 630. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3964` → after: `L3796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3796) · [Before (L3964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3964)

```diff
-   39129: (TT, UT, mT) => {
+   39111: (BB, jB, zB) => {
```

#### 631. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3967-L3968` → after: `L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3799) · [Before (L3967-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3967-L3968)

```diff
-       g: () => jT,
-       i: () => pT,
+       h: () => aB,
```

#### 632. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3970-L3971` → after: `L3801-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3801-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3801-L3803) · [Before (L3970-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3970-L3971)

```diff
-       l: () => ZT,
-       p: () => lT
+       o: () => rB,
+       q: () => mB,
+       r: () => pB
```

#### 633. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3973-L3976` → after: `L3805-L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3805-L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3805-L3808) · [Before (L3973-L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3973-L3976)

```diff
-     var WT = mT(39137),
-       zT = mT(37337),
-       MT = mT(3781),
-       gT = mT(2054),
+     var QB = zB(39117),
+       nB = zB(37340),
+       dB = zB(3798),
+       IB = zB(1991),
```

#### 634. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3978-L3979` → after: `L3810-L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3810-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3810-L3811) · [Before (L3978-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3978-L3979)

```diff
-       HT = mT(2875);
-     const kT = new WT.e;
+       uB = zB(2863);
+     const UB = new QB.c;
```

#### 635. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3992` → after: `L3824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3824) · [Before (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3992)

```diff
-         void 0 !== UT && gT.d.delete(UT)
+         void 0 !== jB && IB.b.delete(jB)
```

#### 636. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3994` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3826) · [Before (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L3994)

```diff
-       lT(), nT.j.EZ("playerRosterChanged", kT.ids())
+       pB(), NB.n.Ly("playerRosterChanged", UB.ids())
```

#### 637. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4000-L4001` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3832-L3833) · [Before (L4000-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4000-L4001)

```diff
-       const zT = (0, HT.h)();
-       return null === (mT = zT.sV[zT.VV]) || void 0 === mT || null === (WT = mT[TT]) || void 0 === WT ? void 0 : WT[UT]
+       const nB = (0, uB.g)();
+       return null === (zB = nB.RY[nB.zV]) || void 0 === zB || null === (QB = zB[BB]) || void 0 === QB ? void 0 : QB[jB]
```

#### 638. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4014` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3846) · [Before (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4014)

```diff
-         of mT) void 0 === MT || cT(zT) || gT.d.delete(MT);
+         of zB) void 0 === dB || yB(nB) || IB.b.delete(dB);
```

#### 639. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4022-L4023` → after: `L3854-L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3854-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3854-L3855) · [Before (L4022-L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4022-L4023)

```diff
-           for (const TT in gT)(0, zT.n)(MT, TT, gT[TT]);
-       (UT.length > 0 || mT.length > 0) && nT.j.EZ("playerRosterChanged", kT.ids())
+           for (const BB in IB)(0, nB.k)(dB, BB, IB[BB]);
+       (jB.length > 0 || zB.length > 0) && NB.n.Ly("playerRosterChanged", UB.ids())
```

#### 640. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4029-L4030` → after: `L3861-L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3861-L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3861-L3862) · [Before (L4029-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4029-L4030)

```diff
-         (0, zT.h)(TT);
-         for (const mT in UT)(0, zT.d)(TT, mT, UT[mT])
+         (0, nB.d)(BB);
+         for (const zB in jB)(0, nB.b)(BB, zB, jB[zB])
```

#### 641. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4035` → after: `L3867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3867) · [Before (L4035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4035)

```diff
-       return TT === (0, HT.h)().rTT || (0, HT.d)().client.hasEntity(TT)
+       return BB === (0, uB.g)().FBB || (0, uB.c)().client.hasEntity(BB)
```

#### 642. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4038` → after: `L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3870) · [Before (L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4038)

```diff
-   38226: (TT, UT, mT) => {
+   38162: (BB, jB, zB) => {
```

#### 643. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4040-L4044` → after: `L3872-L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3872-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3872-L3876) · [Before (L4040-L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4040-L4044)

```diff
-       c: () => xT,
-       f: () => OT,
-       g: () => YT,
-       j: () => JT,
-       l: () => dT
+       d: () => qB,
+       h: () => SB,
+       i: () => EB,
+       k: () => iB,
+       n: () => fB
```

#### 644. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4046-L4048` → after: `L3878-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3878-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3878-L3880) · [Before (L4046-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4046-L4048)

```diff
-     var WT = mT(37185),
-       zT = mT(38229),
-       MT = mT(375),
+     var QB = zB(37166),
+       nB = zB(38170),
+       dB = zB(386),
```

#### 645. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4050-L4055` → after: `L3882-L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3882-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3882-L3887) · [Before (L4050-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4050-L4055)

```diff
-       nT = mT(3508);
-     const HT = new WT.JB,
-       kT = new WT.JB,
-       jT = new WT.JB,
-       lT = new WT.JB,
-       LT = new WT.JB,
+       NB = zB(3510);
+     const uB = new QB.KJ,
+       UB = new QB.KJ,
+       aB = new QB.KJ,
+       pB = new QB.KJ,
+       rB = new QB.KJ,
```

#### 646. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4061-L4062` → after: `L3893-L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3893-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3893-L3894) · [Before (L4061-L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4061-L4062)

```diff
-       ZT = new WT.JB(1, 0, 0),
-       cT = new WT.JB(0, 1, 0),
+       mB = new QB.KJ(1, 0, 0),
+       yB = new QB.KJ(0, 1, 0),
```

#### 647. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4066-L4067` → after: `L3898-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3898-L3899) · [Before (L4066-L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4066-L4067)

```diff
-       iT = new WT.JB,
-       bT = new zT.d(0, 0, 0, 0);
+       gB = new QB.KJ,
+       tB = new nB.e(0, 0, 0, 0);
```

#### 648. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4077` → after: `L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3909) · [Before (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4077)

```diff
-         return Math.abs(mT) <= nT.d && Math.abs(WT) <= (0, nT.i)() ? {
+         return Math.abs(zB) <= NB.e && Math.abs(QB) <= (0, NB.k)() ? {
```

#### 649. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4082` → after: `L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3914) · [Before (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4082)

```diff
-       jT.J9(UT[0], UT[1], UT[2]),
+       aB.U3(jB[0], jB[1], jB[2]),
```

#### 650. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4084-L4086` → after: `L3916-L3918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3916-L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3916-L3918) · [Before (L4084-L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4084-L4086)

```diff
-           const UT = TT.GB.rmT(),
-             mT = UT ? WT.Matrix.FromArrayToRef(UT.worldMatrix, 0, qT) : TT.GB.KF().activeCamera.getWorldMatrix();
-           WT.JB.TransformNormalToRef(ZT, mT, lT), lT.normalize(), WT.JB.TransformNormalToRef(cT, mT, LT), LT.normalize()
+           const jB = BB.pm.ozB(),
+             zB = jB ? QB.Matrix.FromArrayToRef(jB.worldMatrix, 0, LB) : BB.pm.aY().activeCamera.getWorldMatrix();
+           QB.KJ.TransformNormalToRef(mB, zB, pB), pB.normalize(), QB.KJ.TransformNormalToRef(yB, zB, rB), rB.normalize()
```

#### 651. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4088-L4089` → after: `L3920-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3920-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3920-L3921) · [Before (L4088-L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4088-L4089)

```diff
-       const gT = WT.JB.Dot(jT, lT);
-       let HT = -WT.JB.Dot(jT, LT);
+       const IB = QB.KJ.Dot(aB, pB);
+       let uB = -QB.KJ.Dot(aB, rB);
```

#### 652. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4091` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3923) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4091)

```diff
-       const kT = null !== (mT = null === (zT = TT.GB.rmT()) || void 0 === zT ? void 0 : zT.projectionMatrix) && void 0 !== mT ? mT : TT.GB.KF().activeCamera.getProjectionMatrix().m;
+       const UB = null !== (zB = null === (nB = BB.pm.ozB()) || void 0 === nB ? void 0 : nB.projectionMatrix) && void 0 !== zB ? zB : BB.pm.aY().activeCamera.getProjectionMatrix().m;
```

#### 653. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4096-L4097` → after: `L3928-L3929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3928-L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3928-L3929) · [Before (L4096-L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4096-L4097)

```diff
-       const mT = TT.GB.KF(),
-         zT = mT.eB(),
+       const zB = BB.pm.aY(),
+         nB = zB.wJ(),
```

#### 654. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4101-L4103` → after: `L3933-L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3933-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3933-L3935) · [Before (L4101-L4103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4101-L4103)

```diff
-       const nT = TT.GB.rmT(),
-         jT = nT ? iT.J9(nT.eye[0], nT.eye[1], nT.eye[2]) : TT.GB.camera.globalPosition;
-       HT.J9(jT.x + 10 * UT[0], jT.y + 10 * UT[1], jT.z + 10 * UT[2]);
+       const NB = BB.pm.ozB(),
+         aB = NB ? gB.U3(NB.eye[0], NB.eye[1], NB.eye[2]) : BB.pm.camera.globalPosition;
+       uB.U3(aB.x + 10 * jB[0], aB.y + 10 * jB[1], aB.z + 10 * jB[2]);
```

#### 655. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4105` → after: `L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3937) · [Before (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4105)

```diff
-       return WT.JB.ProjectToRef(HT, vT, lT, bT, kT), kT.z < 0 || kT.z > 1 ? null : (BT.x = kT.x / MT * 100, BT.y = kT.y / gT * 100, BT)
+       return QB.KJ.ProjectToRef(uB, kB, pB, tB, UB), UB.z < 0 || UB.z > 1 ? null : (JB.x = UB.x / dB * 100, JB.y = UB.y / IB * 100, JB)
```

#### 656. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4122` → after: `L3954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3954) · [Before (L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4122)

```diff
-       return 1 / (null !== (UT = null === (mT = TT.GB.rmT()) || void 0 === mT ? void 0 : mT.projectionMatrix[0]) && void 0 !== UT ? UT : TT.GB.KF().activeCamera.getProjectionMatrix().m[0])
+       return 1 / (null !== (jB = null === (zB = BB.pm.ozB()) || void 0 === zB ? void 0 : zB.projectionMatrix[0]) && void 0 !== jB ? jB : BB.pm.aY().activeCamera.getProjectionMatrix().m[0])
```

#### 657. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4126-L4128` → after: `L3958-L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3958-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3958-L3960) · [Before (L4126-L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4126-L4128)

```diff
-       const WT = TT.GB.rmT(),
-         zT = WT ? WT.worldMatrix : TT.GB.KF().activeCamera.getWorldMatrix().m,
-         MT = TT.ZL;
+       const QB = BB.pm.ozB(),
+         nB = QB ? QB.worldMatrix : BB.pm.aY().activeCamera.getWorldMatrix().m,
+         dB = BB.qr;
```

#### 658. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4134-L4136` → after: `L3966-L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3966-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3966-L3968) · [Before (L4134-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4134-L4136)

```diff
-       const mT = TT.ZL,
-         WT = TT.GB.rmT(),
-         zT = WT ? iT.J9(WT.eye[0], WT.eye[1], WT.eye[2]) : TT.GB.camera.globalPosition;
+       const zB = BB.qr,
+         QB = BB.pm.ozB(),
+         nB = QB ? gB.U3(QB.eye[0], QB.eye[1], QB.eye[2]) : BB.pm.camera.globalPosition;
```

#### 659. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4141` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3973) · [Before (L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4141)

```diff
-       return (0, nT.g)(TT, UT, nT.d, (0, nT.i)())
+       return (0, NB.g)(BB, jB, NB.e, (0, NB.k)())
```

#### 660. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4144` → after: `L3976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3976) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4144)

```diff
-   39106: (TT, UT, mT) => {
+   39078: (BB, jB, zB) => {
```

#### 661. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4146` → after: `L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3978) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4146)

```diff
-       d: () => LT
+       c: () => rB
```

#### 662. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4148-L4149` → after: `L3980-L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3980-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3980-L3981) · [Before (L4148-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4148-L4149)

```diff
-     var WT = mT(208),
-       zT = mT(375),
+     var QB = zB(214),
+       nB = zB(386),
```

#### 663. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4151-L4154` → after: `L3983-L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L3983-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L3983-L3986) · [Before (L4151-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4151-L4154)

```diff
-       gT = mT(36851),
-       nT = mT(36855),
-       HT = mT(2875);
-     const kT = WT.f.Fc * WT.f.playerEyeToHeightRatio,
+       IB = zB(36828),
+       NB = zB(36830),
+       uB = zB(2863);
+     const UB = QB.e.Bk * QB.e.playerEyeToHeightRatio,
```

#### 664. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4183-L4185` → after: `L4015-L4017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4015-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4015-L4017) · [Before (L4183-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4183-L4185)

```diff
-           const WT = (0, nT.d)(UT.soundName);
-           if (!WT) return console.error(`AudioEntityManager: no sound found for "${UT.soundName}", dropping audio entity ${TT}`), void this.remove(TT);
-           const zT = gT.c.play(WT, UT.volume, mT, UT.maxHearDist, UT.refDistance, !0);
+           const QB = (0, NB.f)(jB.soundName);
+           if (!QB) return console.error(`AudioEntityManager: no sound found for "${jB.soundName}", dropping audio entity ${BB}`), void this.remove(BB);
+           const nB = IB.e.play(QB, jB.volume, zB, jB.maxHearDist, jB.refDistance, !0);
```

#### 665. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4192` → after: `L4024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4024) · [Before (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4192)

```diff
-           const TT = (0, HT.h)();
+           const BB = (0, uB.g)();
```

#### 666. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4194` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4026) · [Before (L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4194)

```diff
-           const UT = TT.pY.Aq(TT.VV);
+           const jB = BB.vG.iG(BB.zV);
```

#### 667. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4197-L4198` → after: `L4029-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4029-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4029-L4030) · [Before (L4197-L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4197-L4198)

```diff
-               if (!TT.pY.uTT(mT, "position")) continue;
-               const zT = TT.pY.Aq(mT),
+               if (!BB.vG.HBB(zB, "position")) continue;
+               const nB = BB.vG.iG(zB),
```

#### 668. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4209` → after: `L4041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4041) · [Before (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4209)

```diff
-   39167: (TT, UT, mT) => {
+   39142: (BB, jB, zB) => {
```

#### 669. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4212` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4044) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4212)

```diff
-       i: () => zT
+       f: () => nB
```

#### 670. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4221` → after: `L4053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4053) · [Before (L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4221)

```diff
-       "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([mT.e(109), mT.e(110), mT.e(105), mT.e(107), mT.e(218)]).then((() => mT(41871))).then((mT => {
+       "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([zB.e(109), zB.e(110), zB.e(105), zB.e(107), zB.e(218)]).then((() => zB(41825))).then((zB => {
```

#### 671. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4227-L4228` → after: `L4059-L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4059-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4059-L4060) · [Before (L4227-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4227-L4228)

```diff
-         console.error(`Game message ${TT} failed`, UT)
-       })) : WT.j.EZ("showPetUi", UT) : WT.j.EZ("refetchCode")
+         console.error(`Game message ${BB} failed`, jB)
+       })) : QB.n.Ly("showPetUi", jB) : QB.n.Ly("refetchCode")
```

#### 672. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4231` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4063) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4231)

```diff
-   39150: (TT, UT, mT) => {
+   39126: (BB, jB, zB) => {
```

#### 673. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4235-L4241` → after: `L4067-L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4067-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4067-L4073) · [Before (L4235-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4235-L4241)

```diff
-     var WT = mT(1321),
-       zT = mT(1437),
-       MT = mT(25),
-       gT = mT(1416),
-       nT = mT(1429),
-       HT = mT(1633),
-       kT = mT(36539);
+     var QB = zB(1263),
+       nB = zB(1359),
+       dB = zB(28),
+       IB = zB(1343),
+       NB = zB(1357),
+       uB = zB(1543),
+       UB = zB(36538);
```

#### 674. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4245-L4246` → after: `L4077-L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4077-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4077-L4078) · [Before (L4245-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4245-L4246)

```diff
-         Fz: UT,
-         Pz: mT
+         xn: jB,
+         Kn: zB
```

#### 675. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4248-L4250` → after: `L4080-L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4080-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4080-L4082) · [Before (L4248-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4248-L4250)

```diff
-       const jT = null !== UT && void 0 !== UT ? UT : (0, nT.c)().gameNameWithVariation;
-       (0, WT.O)(jT) && ((0, kT.m)(), (0, gT.cb)((() => {
-         console.log("Received matchmaking order from game server to game", UT), (0, MT.e)("inGameReplay"), (0, HT.navigatePreserveSearch)((0, zT.d)(jT, null !== mT && void 0 !== mT ? mT : void 0))
+       const aB = null !== jB && void 0 !== jB ? jB : (0, NB.d)().gameNameWithVariation;
+       (0, QB.C)(aB) && ((0, UB.i)(), (0, IB.W)((() => {
+         console.log("Received matchmaking order from game server to game", jB), (0, dB.i)("inGameReplay"), (0, uB.navigatePreserveSearch)((0, nB.e)(aB, null !== zB && void 0 !== zB ? zB : void 0))
```

#### 676. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4254` → after: `L4086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4086) · [Before (L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4254)

```diff
-   39146: (TT, UT, mT) => {
+   39121: (BB, jB, zB) => {
```

#### 677. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4257-L4258` → after: `L4089-L4090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4089-L4090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4089-L4090) · [Before (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4257-L4258)

```diff
-       c: () => gT,
-       g: () => nT,
+       d: () => IB,
+       f: () => NB,
```

#### 678. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4262` → after: `L4094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4094) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4262)

```diff
-       zT = mT(1457);
+       nB = zB(1381);
```

#### 679. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4266` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4098) · [Before (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4266)

```diff
-       WT.j.EZ("newUiRequest", {
+       QB.n.Ly("newUiRequest", {
```

#### 680. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4273` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4105) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4273)

```diff
-       WT.j.EZ("removeUiRequest", TT, !0);
+       QB.n.Ly("removeUiRequest", BB, !0);
```

#### 681. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4279` → after: `L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4111) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4279)

```diff
-       WT.j.EZ("clearUiRequests");
+       QB.n.Ly("clearUiRequests");
```

#### 682. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4297` → after: `L4129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4129) · [Before (L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4297)

```diff
-   39137: (TT, UT, mT) => {
+   39117: (BB, jB, zB) => {
```

#### 683. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4299` → after: `L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4131) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4299)

```diff
-       e: () => WT
+       c: () => QB
```

#### 684. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4311-L4312` → after: `L4143-L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4143-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4143-L4144) · [Before (L4311-L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4311-L4312)

```diff
-         for (const WT of TT.sT) {
-           let TT = this.members.get(WT.FT);
+         for (const QB of BB.ZB) {
+           let BB = this.members.get(QB.AB);
```

#### 685. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4316-L4317` → after: `L4148-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4148-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4148-L4149) · [Before (L4316-L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4316-L4317)

```diff
-             }, this.members.set(WT.FT, TT), UT.added.push(WT.FT)), null !== WT.PT && (TT.name = WT.PT), null !== WT.VT || WT.uT.length > 0) {
-             const mT = null === WT.VT ? {} : JSON.parse(WT.VT);
+             }, this.members.set(QB.AB, BB), jB.added.push(QB.AB)), null !== QB.TB && (BB.name = QB.TB), null !== QB.PB || QB.WB.length > 0) {
+             const zB = null === QB.PB ? {} : JSON.parse(QB.PB);
```

#### 686. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4319` → after: `L4151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4151) · [Before (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4319)

```diff
-             for (const UT of WT.uT) delete TT.settings[UT], mT[UT] = void 0;
+             for (const jB of QB.WB) delete BB.settings[jB], zB[jB] = void 0;
```

#### 687. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4321` → after: `L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4153) · [Before (L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4321)

```diff
-               playerId: WT.FT,
+               playerId: QB.AB,
```

#### 688. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4326` → after: `L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4158) · [Before (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4326)

```diff
-         for (const WT of TT.CT) {
+         for (const QB of BB.eB) {
```

#### 689. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4331` → after: `L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4163) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4331)

```diff
-             name: null !== (mT = TT.name) && void 0 !== mT ? mT : void 0
+             name: null !== (zB = BB.name) && void 0 !== zB ? zB : void 0
```

#### 690. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4344` → after: `L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4176) · [Before (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4344)

```diff
-         return null !== (UT = null === (mT = this.members.get(TT)) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : void 0
+         return null !== (jB = null === (zB = this.members.get(BB)) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : void 0
```

#### 691. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4359` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4191) · [Before (L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4359)

```diff
-   39172: (TT, UT, mT) => {
+   39146: (BB, jB, zB) => {
```

#### 692. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4361-L4362` → after: `L4193-L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4193-L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/248.js#L4193-L4194) · [Before (L4361-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/248.js#L4361-L4362)

```diff
-       c: () => WT,
-       g: () => zT
+       b: () => QB,
+       c: () => nB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L4)

```diff
-   41239: (TT, UT, mT) => {
+   41182: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L6-L7)

```diff
-       b: () => gT,
-       e: () => jT,
+       c: () => IB,
+       f: () => aB,
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L10-L11)

```diff
-     var WT, zT = mT(37226),
-       MT = mT(37188);
+     var QB, nB = zB(37208),
+       dB = zB(37171);
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L67)

```diff
-         this.centerPoint = new MT.o((zT * (UT.y - mT.y) - gT * (TT.y - UT.y)) / HT, ((TT.x - UT.x) * gT - (UT.x - mT.x) * zT) / HT), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = nT.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         this.centerPoint = new dB.i((nB * (jB.y - zB.y) - IB * (BB.y - jB.y)) / uB, ((BB.x - jB.x) * IB - (jB.x - zB.x) * nB) / uB), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = NB.BetweenTwoPoints(this.centerPoint, this.startPoint);
```

#### 5. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L71)

```diff
-         jT - kT > 180 && (jT -= 360), jT - kT < -180 && (jT += 360), lT - jT > 180 && (lT -= 360), lT - jT < -180 && (lT += 360), this.orientation = jT - kT < 0 ? 0 : 1, this.angle = nT.FromDegrees(0 === this.orientation ? kT - lT : lT - kT)
+         aB - UB > 180 && (aB -= 360), aB - UB < -180 && (aB += 360), pB - aB > 180 && (pB -= 360), pB - aB < -180 && (pB += 360), this.orientation = aB - UB < 0 ? 0 : 1, this.angle = NB.FromDegrees(0 === this.orientation ? UB - pB : pB - UB)
```

#### 6. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L76)

```diff
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new MT.o(TT, UT))
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new dB.i(BB, jB))
```

#### 7. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L80)

```diff
-         const mT = new MT.o(TT, UT),
+         const zB = new dB.i(BB, jB),
```

#### 8. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L88-L89` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L88-L89) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L88-L89)

```diff
-           nT = new MT.o(TT, UT),
-           kT = new MT.o(mT, WT),
+           NB = new dB.i(BB, jB),
+           UB = new dB.i(zB, QB),
```

#### 9. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L172)

```diff
-         if (TT < 0 || TT > 1) return MT.o.Zero();
+         if (BB < 0 || BB > 1) return dB.i.Zero();
```

#### 10. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L183)

```diff
-             return new MT.o(zT.x + TT.x * WT, zT.y + TT.y * WT)
+             return new dB.i(nB.x + BB.x * QB, nB.y + BB.y * QB)
```

#### 11. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L187)

```diff
-         return MT.o.Zero()
+         return dB.i.Zero()
```

#### 12. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L195)

```diff
-         WT = WT > 2 ? WT : 3;
+         QB = QB > 2 ? QB : 3;
```

#### 13. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L198)

```diff
-         for (let nT = 0; nT <= WT; nT++) zT.push(new MT.p(gT(nT / WT, TT.x, UT.x, mT.x), gT(nT / WT, TT.y, UT.y, mT.y), gT(nT / WT, TT.z, UT.z, mT.z)));
+         for (let NB = 0; NB <= QB; NB++) nB.push(new dB.m(IB(NB / QB, BB.x, jB.x, zB.x), IB(NB / QB, BB.y, jB.y, zB.y), IB(NB / QB, BB.z, jB.z, zB.z)));
```

#### 14. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L202)

```diff
-         zT = zT > 3 ? zT : 4;
+         nB = nB > 3 ? nB : 4;
```

#### 15. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L205)

```diff
-         for (let HT = 0; HT <= zT; HT++) gT.push(new MT.p(nT(HT / zT, TT.x, UT.x, mT.x, WT.x), nT(HT / zT, TT.y, UT.y, mT.y, WT.y), nT(HT / zT, TT.z, UT.z, mT.z, WT.z)));
+         for (let uB = 0; uB <= nB; uB++) IB.push(new dB.m(NB(uB / nB, BB.x, jB.x, zB.x, QB.x), NB(uB / nB, BB.y, jB.y, zB.y, QB.y), NB(uB / nB, BB.z, jB.z, zB.z, QB.z)));
```

#### 16. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L211)

```diff
-         for (let HT = 0; HT <= zT; HT++) gT.push(MT.p.Hermite(TT, UT, mT, WT, HT * nT));
+         for (let uB = 0; uB <= nB; uB++) IB.push(dB.m.Hermite(BB, jB, zB, QB, uB * NB));
```

#### 17. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L222)

```diff
-             for (let HT = 0; HT < UT; HT++) WT.push(MT.p.CatmullRom(TT[nT % mT], TT[(nT + 1) % mT], TT[(nT + 2) % mT], TT[(nT + 3) % mT], gT)), gT += zT
+             for (let uB = 0; uB < jB; uB++) QB.push(dB.m.CatmullRom(BB[NB % zB], BB[(NB + 1) % zB], BB[(NB + 2) % zB], BB[(NB + 3) % zB], IB)), IB += nB
```

#### 18. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L231-L233` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L231-L233) · [Before (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L231-L233)

```diff
-             for (let TT = 0; TT < UT; TT++) WT.push(MT.p.CatmullRom(mT[nT], mT[nT + 1], mT[nT + 2], mT[nT + 3], gT)), gT += zT
-           }
-           nT--, WT.push(MT.p.CatmullRom(mT[nT], mT[nT + 1], mT[nT + 2], mT[nT + 3], gT))
+             for (let BB = 0; BB < jB; BB++) QB.push(dB.m.CatmullRom(zB[NB], zB[NB + 1], zB[NB + 2], zB[NB + 3], IB)), IB += nB
+           }
+           NB--, QB.push(dB.m.CatmullRom(zB[NB], zB[NB + 1], zB[NB + 2], zB[NB + 3], IB))
```

#### 19. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L245)

```diff
-           LT = MT.p.Cross(HT, kT),
+           rB = dB.m.Cross(uB, UB),
```

#### 20. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L253-L255` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L253-L255) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L253-L255)

```diff
-           qT = -.5 * ZT * MT.p.Dot(HT, lT) / vT,
-           iT = -.5 * cT * MT.p.Dot(HT, kT) / vT,
-           bT = -.5 * BT * MT.p.Dot(kT, lT) / vT,
+           LB = -.5 * mB * dB.m.Dot(uB, pB) / kB,
+           gB = -.5 * yB * dB.m.Dot(uB, UB) / kB,
+           tB = -.5 * JB * dB.m.Dot(UB, pB) / kB,
```

#### 21. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L258)

```diff
-           YT = MT.p.Cross(LT, eT).normalize();
+           EB = dB.m.Cross(rB, MB).normalize();
```

#### 22. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L296)

```diff
-   38793: (TT, UT, mT) => {
+   38780: (BB, jB, zB) => {
```

#### 23. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L298)

```diff
-       c: () => MT
+       e: () => dB
```

#### 24. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L300)

```diff
-     var WT = mT(38800);
+     var QB = zB(38783);
```

#### 25. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L333)

```diff
-             WT.b.Warn(HT.message)
+             QB.c.Warn(uB.message)
```

#### 26. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L339)

```diff
-   38800: (TT, UT, mT) => {
+   38783: (BB, jB, zB) => {
```

#### 27. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L341)

```diff
-       b: () => WT
+       c: () => QB
```

#### 28. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L362)

```diff
-         const UT = TT => TT < 10 ? "0" + TT : "" + TT,
+         const jB = BB => BB < 10 ? "0" + BB : "" + BB,
```

#### 29. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/249.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/249.js#L377)

```diff
-         const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
+         const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (116 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L4)

```diff
-   41341: (TT, UT, mT) => {
+   38915: (BB, jB, zB) => {
+     var QB = {
+       "./cape_cow_cream.png": 27911,
+       "./cape_cow_normal.png": 27918,
+       "./cape_creator_level1.png": 27925,
+       "./cape_creator_level2.png": 27928,
+       "./cape_creator_level3.png": 27931,
+       "./cape_none.png": 27940,
+       "./cape_pig.png": 27943,
+       "./cape_sheep.png": 27952,
+       "./cape_super.png": 27960,
+       "./cape_super_inverted.png": 27966,
+       "./cape_youtuber.png": 27973
+     };
+ 
+     function nB(BB) {
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L26` → after: `L39-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L39-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L39-L57) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L8-L26)

```diff
-     var WT = mT(38231),
-       zT = mT(2875),
-       MT = mT(641),
-       gT = mT(37266),
-       nT = mT(2355),
-       HT = mT(37253),
-       kT = mT(39907),
-       jT = mT(40192),
-       lT = mT(41236),
-       LT = mT(37185),
-       pT = mT(40362),
-       BT = mT(37364),
-       ZT = mT(40379),
-       cT = mT(41284),
-       vT = mT(37176),
-       fT = mT(1321),
- ... (3 more removed lines; see GitHub link above)
+     var QB = zB(38177),
+       nB = zB(2863),
+       dB = zB(635),
+       IB = zB(37252),
+       NB = zB(2304),
+       uB = zB(37239),
+       UB = zB(39895),
+       aB = zB(40154),
+       pB = zB(41176),
+       rB = zB(37166),
+       sB = zB(40335),
+       JB = zB(37372),
+       mB = zB(40350),
+       yB = zB(41227),
+       kB = zB(37158),
+       GB = zB(1263),
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L54` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L85) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L54)

```diff
-         this.XZ = TT, this.thinInstMgr = UT, this.zV = mT, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+         this.ny = BB, this.thinInstMgr = jB, this.mY = zB, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L57` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L88) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L57)

```diff
-         const WT = (0, iT.e)(TT, UT);
+         const QB = (0, gB.f)(BB, jB);
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L60` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L91) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L60)

```diff
-             const WT = await (0, iT.i)(TT, this.XZ),
+             const QB = await (0, gB.h)(BB, this.ny),
```

#### 6. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L63-L64` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L94-L95) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L63-L64)

```diff
-             const MT = (0, iT.c)(null !== UT && void 0 !== UT ? UT : TT, this.XZ);
-             (0, iT.l)(WT, MT, {
+             const dB = (0, gB.c)(null !== jB && void 0 !== jB ? jB : BB, this.ny);
+             (0, gB.i)(QB, dB, {
```

#### 7. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L67` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L98) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L67)

```diff
-                 (0, iT.n)(TT), this.XZ.fWT(TT, !1), TT.isVisible = !1
+                 (0, gB.k)(BB), this.ny.IQB(BB, !1), BB.isVisible = !1
```

#### 8. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L71` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L102) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L71)

```diff
-             const gT = void 0 === mT ? null : (0, bT.h)(mT, (TT => {
+             const IB = void 0 === zB ? null : (0, tB.f)(zB, (BB => {
```

#### 9. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L73` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L104) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L73)

```diff
-               return null !== (UT = null === (mT = zT.get(TT)) || void 0 === mT ? void 0 : mT.rotationQuaternion) && void 0 !== UT ? UT : null
+               return null !== (jB = null === (zB = nB.get(BB)) || void 0 === zB ? void 0 : zB.rotationQuaternion) && void 0 !== jB ? jB : null
```

#### 10. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L80` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L111) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L80)

```diff
-             throw delete this.modelCache[WT], console.error(`Failed to load preview attachment ${WT}:`, zT), zT
+             throw delete this.modelCache[QB], console.error(`Failed to load preview attachment ${QB}:`, nB), nB
```

#### 11. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L88` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L119) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L88)

```diff
-           zV: zT
+           mY: nB
```

#### 12. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L99` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L130) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L99)

```diff
-             null !== kT && (0, fT.ub)(this.shownBones, kT), YT(nT, !1);
+             null !== UB && (0, GB.Z)(this.shownBones, UB), EB(NB, !1);
```

#### 13. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L116` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L147) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L116)

```diff
-               console.error(`Preview attachment node ${nT.modelNode} not found in ${nT.modelGlb}`);
+               console.error(`Preview attachment node ${NB.modelNode} not found in ${NB.modelGlb}`);
```

#### 14. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L119` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L150) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L119)

```diff
-             YT(MT, !0), (0, iT.s)(MT, nT.overlayColour);
+             EB(dB, !0), (0, gB.p)(dB, NB.overlayColour);
```

#### 15. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L132-L133` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L163-L164) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L132-L133)

```diff
-     var xT = mT(37270),
-       dT = (mT(41265), mT(40611), mT(41267), mT(34315));
+     var qB = zB(37263),
+       fB = (zB(41208), zB(40584), zB(41215), zB(34289));
```

#### 16. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L160` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L191) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L160)

```diff
-                 const UT = new ZT.StandardMaterial(`${TT.name}_depthOnly`, TT.KF());
+                 const jB = new mB.StandardMaterial(`${BB.name}_depthOnly`, BB.aY());
```

#### 17. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L179-L180` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L210-L211) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L179-L180)

```diff
-           const gT = (0, zT.h)();
-           gT.MI(!1), WT.c.Player.meshApi.updatePlayerCosmetic(gT.VV, QT, TT, UT, !0), "cape" === TT && (UT === MT.e ? XT.Qy(!1) : (XT.Qy(!0), XT.material.diffuseTexture = new cT.e(mT(38918)(`./cape_${UT}.png`), XT.KF(), {
+           const IB = (0, nB.g)();
+           IB.nD(!1), QB.e.Player.meshApi.updatePlayerCosmetic(IB.zV, hB, BB, jB, !0), "cape" === BB && (jB === dB.d ? YB.mH(!1) : (YB.mH(!0), YB.material.diffuseTexture = new yB.d(zB(38915)(`./cape_${jB}.png`), YB.aY(), {
```

#### 18. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L182` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L213) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L182)

```diff
-             samplingMode: cT.e.NEAREST_NEAREST_MIPLINEAR
+             samplingMode: yB.d.NEAREST_NEAREST_MIPLINEAR
```

#### 19. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L189-L191` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L220-L222) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L189-L191)

```diff
-         if (!TT) return void sT.stopAnimation(HT.g.Emote);
-         const UT = (0, gT.f)((0, nT.h)(TT).animation);
-         sT.startAnimation(UT, HT.g.Emote, 0, nT.c)
+         if (!BB) return void XB.stopAnimation(uB.f.Emote);
+         const jB = (0, IB.e)((0, NB.f)(BB).animation);
+         XB.startAnimation(jB, uB.f.Emote, 0, NB.b)
```

#### 20. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L213` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L244) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L213)

```diff
-         tT.inertialAlphaOffset = 0, tT.inertialBetaOffset = 0, tT.inertialRadiusOffset = 0, GT(dT.d[this.framing])
+         HB.inertialAlphaOffset = 0, HB.inertialBetaOffset = 0, HB.inertialRadiusOffset = 0, xB(fB.c[this.framing])
```

#### 21. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L238-L240` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L269-L271) · [Before (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L238-L240)

```diff
-         const TT = (0, zT.h)();
-         wT.pWT = TT.GB.engine.pWT, aT = new jT.b(wT), aT.clearColor = new BT.e(0, 0, 0, 0), aT.ambientColor = new BT.Color3(1, 1, 1), tT = new lT.d("ac", 0, 0, 1, LT.JB.Zero(), aT), tT.attachControl(VT, !0), tT.panningSensibility = 0, PT = (0, WT.v)("Player", aT, !0).then((UT =>  … [truncated]
-           yT = UT.meshApi, XT = UT.capeMesh, IT = TT.GB.mV;
+         const BB = (0, nB.g)();
+         oB.jQB = BB.pm.engine.jQB, DB = new aB.d(oB), DB.clearColor = new JB.c(0, 0, 0, 0), DB.ambientColor = new JB.Color3(1, 1, 1), HB = new pB.c("xy", 0, 0, 1, rB.KJ.Zero(), DB), HB.attachControl(TB, !0), HB.panningSensibility = 0, AB = (0, QB.y)("Player", DB, !0).then((jB =>  … [truncated]
+           FB = jB.meshApi, YB = jB.capeMesh, VB = BB.pm.JY;
```

#### 22. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L242` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L273) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L242)

```diff
-           QT = (0, WT.k)("Player", mT, !0, !0), IT.setPosition(QT, 0, -8.33, 0);
+           hB = (0, QB.l)("Player", zB, !0, !0), VB.setPosition(hB, 0, -8.33, 0);
```

#### 23. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L244` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L275) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L244)

```diff
-           IT.attachTransformNode(XT, QT, zT), IT.set(QT, "aOpacity", 1), IT.KV(QT, "aOpacity", 1), FT = new JT(aT, IT, QT), sT = new vT.AnimatorState, sT.Rl = TT, sT.thinInstMgr = IT, sT.zV = QT, sT.PmT = IT.BWT(QT, 0), sT.modelLifeformType = "Player", sT.nodeNameAliases = (0, xT … [truncated]
+           VB.attachTransformNode(YB, hB, nB), VB.set(hB, "aOpacity", 1), VB.sV(hB, "aOpacity", 1), ZB = new iB(DB, VB, hB), XB = new kB.AnimatorState, XB.ur = BB, XB.thinInstMgr = VB, XB.mY = hB, XB.EzB = VB.zQB(hB, 0), XB.modelLifeformType = "Player", XB.nodeNameAliases = (0, qB … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L253` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L284) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L253)

```diff
-           const jT = new ZT.StandardMaterial("capeMaterial", XT.KF());
+           const aB = new mB.StandardMaterial("capeMaterial", YB.aY());
```

#### 25. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L257` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L288) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L257)

```diff
-           const cT = new pT.b("light", new LT.JB(-.1, 1, -.3), aT);
+           const yB = new sB.e("light", new rB.KJ(-.1, 1, -.3), DB);
```

#### 26. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L263` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L294) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L263)

```diff
-   38914: (TT, UT, mT) => {
+   38906: (BB, jB, zB) => {
```

#### 27. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L267-L271` → after: `L298-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L298-L302) · [Before (L267-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L267-L271)

```diff
-     var WT = mT(37281),
-       zT = mT(37292),
-       MT = mT(37549),
-       gT = mT(37298),
-       nT = mT(37288);
+     var QB = zB(37279),
+       nB = zB(37286),
+       dB = zB(37547),
+       IB = zB(37291),
+       NB = zB(37283);
```

#### 28. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L274` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L305) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L274)

```diff
-       return `\n\t\t\t\t${(0,nT.r)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,NB.w)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 29. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L276` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L307) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L276)

```diff
-         (0, nT.w)(TT, "float", "s", "sin(ang)")
+         (0, NB.A)(BB, "float", "s", "sin(ang)")
```

#### 30. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L279` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L310) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L279)

```diff
-         (0, nT.w)(TT, "float", "c", "cos(ang)")
+         (0, NB.A)(BB, "float", "c", "cos(ang)")
```

#### 31. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L282` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L313) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L282)

```diff
-         (0, nT.k)(TT, "mat2", "c", "s", "-s", "c")
+         (0, NB.m)(BB, "mat2", "c", "s", "-s", "c")
```

#### 32. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L288-L289` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L319-L320) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L288-L289)

```diff
-       let mT = (0, nT.zb)(TT, "skele" + (UT - 1));
-       for (let zT = UT - 2; zT >= 0; zT--) mT = (0, nT.pb)(TT, `boneIdx == ${zT}`, (0, nT.zb)(TT, `skele${zT}`), mT);
+       let zB = (0, NB.Ab)(BB, "skele" + (jB - 1));
+       for (let nB = jB - 2; nB >= 0; nB--) zB = (0, NB.sb)(BB, `boneIdx == ${nB}`, (0, NB.Ab)(BB, `skele${nB}`), zB);
```

#### 33. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L291` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L322) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L291)

```diff
-       return `\n\t\t\t\t${(0,nT.w)(TT,"int","boneIdx",(0,nT.wb)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,nT.w)(TT,"vec3","bone",mT)}\n\t\t\t\t${(0,nT.w)(TT,"vec2","pivot",(0,nT.k)(TT,"vec2","0.0",`${(0,nT.Eb)(TT,"position")}.z`))}\n\t\t\t\t${(0,nT.$)(TT)?`positi … [truncated]
+       return `\n\t\t\t\t${(0,NB.A)(BB,"int","boneIdx",(0,NB.wb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,NB.A)(BB,"vec3","bone",zB)}\n\t\t\t\t${(0,NB.A)(BB,"vec2","pivot",(0,NB.m)(BB,"vec2","0.0",`${(0,NB.Gb)(BB,"position")}.z`))}\n\t\t\t\t${(0,NB.ab)(BB)?`posit … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L295` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L326) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L295)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,nT.k)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,NB.m)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 35. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L301` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L332) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L301)

```diff
-         MmT(TT, UT) {
+         ljB(BB, jB) {
```

#### 36. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L311-L312` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L342-L343) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L311-L312)

```diff
-           BLOXD_CAPE_BONES: `${TT}`,
-           BLOXD_CAPE_MAX_Y: (0, zT.nb)(UT)
+           BLOXD_CAPE_BONES: `${BB}`,
+           BLOXD_CAPE_MAX_Y: (0, nB.jb)(jB)
```

#### 37. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L315` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L346) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L315)

```diff
-           return (0, MT.c)(function(TT) {
+           return (0, dB.b)(function(BB) {
```

#### 38. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L318` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L349) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L318)

```diff
-               name: `skele${mT}`,
+               name: `skele${zB}`,
```

#### 39. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L325` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L356) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L325)

```diff
-           for (let UT = 0; UT < this.skeleLen; UT++) TT.updateVector3(`skele${UT}`, lT.MmT(this.skele, 3 * UT))
+           for (let jB = 0; jB < this.skeleLen; jB++) BB.updateVector3(`skele${jB}`, pB.ljB(this.skele, 3 * jB))
```

#### 40. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L340` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L371) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L340)

```diff
-   38807: (TT, UT, mT) => {
+   38794: (BB, jB, zB) => {
```

#### 41. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L343` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L374) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L343)

```diff
-       e: () => lT
+       h: () => pB
```

#### 42. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L345-L348` → after: `L376-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L376-L379) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L345-L348)

```diff
-     var WT = mT(37281),
-       zT = mT(37549),
-       MT = mT(37288),
-       gT = mT(37298);
+     var QB = zB(37279),
+       nB = zB(37547),
+       dB = zB(37283),
+       IB = zB(37291);
```

#### 43. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L364` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L395) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L364)

```diff
-         getUniforms: TT => (0, zT.c)(HT, "fragment", TT),
+         getUniforms: BB => (0, nB.b)(uB, "fragment", BB),
```

#### 44. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L371-L374` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L402-L405) · [Before (L371-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L371-L374)

```diff
-           const mT = (0, MT.D)(UT, `vec4 ${kT}(sampler2D s, vec2 uv, float bias)`, `fn ${kT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             WT = (0, MT.D)(UT, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             zT = `${(0,MT.R)(UT,"vDiffuseUV")} + uvOffset`,
-             gT = (0, MT.D)(UT, `${kT}(diffuseSampler, ${zT}, ${(0,MT.zb)(UT,nT)})`, `${kT}(diffuseSampler, diffuseSamplerSampler, ${zT}, ${(0,MT.zb)(UT,nT)})`);
+           const zB = (0, dB.K)(jB, `vec4 ${UB}(sampler2D s, vec2 uv, float bias)`, `fn ${UB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             QB = (0, dB.K)(jB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             nB = `${(0,dB.T)(jB,"vDiffuseUV")} + uvOffset`,
+             IB = (0, dB.K)(jB, `${UB}(diffuseSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`, `${UB}(diffuseSampler, diffuseSamplerSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`);
```

#### 45. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L376-L377` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L407-L408) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L376-L377)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${mT} {\n\t\t\t\t\t${(0,MT.w)(UT,"vec4","texel",WT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,MT … [truncated]
-             [(0, MT.z)(UT)]: `baseColor = ${gT};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${zB} {\n\t\t\t\t\t${(0,dB.A)(jB,"vec4","texel",QB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,dB … [truncated]
+             [(0, dB.E)(jB)]: `baseColor = ${IB};`
```

#### 46. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L383` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L414) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L383)

```diff
-   41267: (TT, UT, mT) => {
+   41215: (BB, jB, zB) => {
```

#### 47. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L390-L396` → after: `L421-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L421-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L421-L427) · [Before (L390-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L390-L396)

```diff
-     var WT = mT(41269),
-       zT = mT(38142);
-     class MT extends((0, WT.h)(zT.c)) {}(0, WT.i)(zT.c, MT);
-     var gT = mT(37273);
-     class nT extends((0, WT.h)(gT.e)) {}(0, WT.i)(gT.e, nT);
-     var HT = mT(37976);
-     class kT extends((0, WT.h)(HT.c)) {}(0, WT.i)(HT.c, kT);
+     var QB = zB(41218),
+       nB = zB(38096);
+     class dB extends((0, QB.i)(nB.e)) {}(0, QB.j)(nB.e, dB);
+     var IB = zB(37271);
+     class NB extends((0, QB.i)(IB.f)) {}(0, QB.j)(IB.f, NB);
+     var uB = zB(37936);
+     class UB extends((0, QB.i)(uB.d)) {}(0, QB.j)(uB.d, UB);
```

#### 48. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L398-L400` → after: `L429-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L429-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L429-L431) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L398-L400)

```diff
-       lT = mT(40379),
-       LT = mT(37531);
-     class pT extends((0, WT.h)(LT.h)) {
+       pB = zB(40350),
+       rB = zB(37528);
+     class sB extends((0, QB.i)(rB.d)) {
```

#### 49. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L405` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L436) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L405)

```diff
-         (0, jT.g)(this._material), super.dispose(TT)
+         (0, aB.f)(this._material), super.dispose(BB)
```

#### 50. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L407` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L438) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L407)

```diff
-     }(0, WT.i)(LT.h, pT), (0, LT.l)({
+     }(0, QB.j)(rB.d, sB), (0, rB.h)({
```

#### 51. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L411-L415` → after: `L442-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L442-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L442-L446) · [Before (L411-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L411-L415)

```diff
-     var BT = mT(38807);
-     class ZT extends((0, WT.h)(BT.e)) {}(0, WT.i)(BT.e, ZT);
-     var cT = mT(38914),
-       vT = mT(37376),
-       fT = mT(38266),
+     var JB = zB(38794);
+     class mB extends((0, QB.i)(JB.h)) {}(0, QB.j)(JB.h, mB);
+     var yB = zB(38906),
+       kB = zB(37386),
+       GB = zB(38204),
```

#### 52. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L417-L420` → after: `L448-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L448-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L448-L451) · [Before (L417-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L417-L420)

```diff
-     class iT extends((0, WT.h)(cT.d)) {}(0, WT.i)(cT.d, iT);
-     class bT extends((0, WT.h)(vT.c)) {}(0, WT.i)(vT.c, bT);
-     class OT extends((0, WT.h)(fT.i)) {}(0, WT.i)(fT.i, OT);
-     class eT extends((0, WT.h)(qT.c)) {}(0, WT.i)(qT.c, eT)
+     class gB extends((0, QB.i)(yB.d)) {}(0, QB.j)(yB.d, gB);
+     class tB extends((0, QB.i)(kB.b)) {}(0, QB.j)(kB.b, tB);
+     class SB extends((0, QB.i)(GB.k)) {}(0, QB.j)(GB.k, SB);
+     class MB extends((0, QB.i)(LB.d)) {}(0, QB.j)(LB.d, MB)
```

#### 53. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L422` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L453) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L422)

```diff
-   41269: (TT, UT, mT) => {
+   41218: (BB, jB, zB) => {
```

#### 54. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L425-L426` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L456-L457) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L425-L426)

```diff
-       h: () => fT,
-       i: () => ET
+       i: () => GB,
+       j: () => CB
```

#### 55. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L428-L436` → after: `L459-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L459-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L459-L467) · [Before (L428-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L428-L436)

```diff
-     var WT = mT(40379),
-       zT = mT(41277),
-       MT = mT(41334),
-       gT = mT(41284),
-       nT = mT(37947),
-       HT = mT(37959),
-       kT = mT(37965),
-       jT = mT(37972),
-       lT = mT(37312),
+     var QB = zB(40350),
+       nB = zB(41220),
+       dB = zB(41266),
+       IB = zB(41227),
+       NB = zB(37908),
+       uB = zB(37915),
+       UB = zB(37924),
+       aB = zB(37926),
+       pB = zB(37315),
```

#### 56. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L438-L441` → after: `L469-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L469-L472) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L438-L441)

```diff
-       pT = mT(41286),
-       BT = mT(37298),
-       ZT = mT(37302),
-       cT = mT(37288);
+       sB = zB(41231),
+       JB = zB(37291),
+       mB = zB(37300),
+       yB = zB(37283);
```

#### 57. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L447` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L478) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L447)

```diff
-         hp: TT
+         kJ: BB
```

#### 58. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L452` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L483) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L452)

```diff
-       const UT = class extends pT.d {
+       const jB = class extends sB.b {
```

#### 59. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L454-L455` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L485-L486) · [Before (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L454-L455)

```diff
-             const WT = (0, ZT.R)(UT),
-               zT = WT && (0, ZT.s)(WT, TT.name);
+             const QB = (0, mB.eb)(jB),
+               nB = QB && (0, mB.w)(QB, BB.name);
```

#### 60. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L457` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L488) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L457)

```diff
-             super(UT, TT.name, TT.priority, zT ? zT.defines : TT.defines(...gT), !1), this.featureState = void 0, this.featureState = mT, this._pluginManager._addPlugin(this), this._enable(!0), (0, ZT.t)(this._material, TT, this.featureState, this._pluginDefineNames)
+             super(jB, BB.name, BB.priority, nB ? nB.defines : BB.defines(...IB), !1), this.featureState = void 0, this.featureState = zB, this._pluginManager._addPlugin(this), this._enable(!0), (0, mB.z)(this._material, BB, this.featureState, this._pluginDefineNames)
```

#### 61. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L463` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L494) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L463)

```diff
-             return TT === cT.e.GLSL || TT === cT.e.WGSL
+             return BB === yB.c.GLSL || BB === yB.c.WGSL
```

#### 62. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L467` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L498) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L467)

```diff
-       for (const [WT, zT] of Object.entries(BT.c)) {
+       for (const [QB, nB] of Object.entries(JB.d)) {
```

#### 63. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L480-L483` → after: `L511-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L511-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L511-L514) · [Before (L480-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L480-L483)

```diff
-     class qT extends(fT(nT.b)) {}
-     var iT = mT(39907),
-       bT = mT(41291),
-       OT = mT(41300);
+     class LB extends(GB(NB.d)) {}
+     var gB = zB(39895),
+       tB = zB(41240),
+       SB = zB(41248);
```

#### 64. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L494` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L525) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L494)

```diff
-             pixels: gT && gT.byteLength === WT * WT * MT * 4 ? gT : null !== (zT = YT.get(TT.getInternalTexture())) && void 0 !== zT ? zT : TT._readPixelsSync(),
+             pixels: IB && IB.byteLength === QB * QB * dB * 4 ? IB : null !== (nB = EB.get(BB.getInternalTexture())) && void 0 !== nB ? nB : BB._readPixelsSync(),
```

#### 65. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L497` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L528) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L497)

```diff
-         })), MT = mT.eB().getCaps().texture2DArrayMaxLayerCount, nT = (0, OT.e)(zT, WT, MT).map((TT => {
+         })), dB = zB.wJ().getCaps().texture2DArrayMaxLayerCount, NB = (0, SB.d)(nB, QB, dB).map((BB => {
```

#### 66. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L503` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L534) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L503)

```diff
-             atlas: new bT.e(UT, WT, WT, zT, iT.b.TEXTUREFORMAT_RGBA, mT, !0, !1, gT.e.NEAREST_NEAREST_MIPLINEAR),
+             atlas: new tB.e(jB, QB, QB, nB, gB.b.TEXTUREFORMAT_RGBA, zB, !0, !1, IB.d.NEAREST_NEAREST_MIPLINEAR),
```

#### 67. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L510` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L541) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L510)

```diff
-             const mT = UT.createRawTexture(new Uint8Array(4), 1, 1, iT.b.TEXTUREFORMAT_RGBA, !1, !1, gT.e.NEAREST_SAMPLINGMODE);
+             const zB = jB.createRawTexture(new Uint8Array(4), 1, 1, gB.b.TEXTUREFORMAT_RGBA, !1, !1, IB.d.NEAREST_SAMPLINGMODE);
```

#### 68. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L512` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L543) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L512)

```diff
-           }(WT, mT.eB()), YT.set(WT, zT[UT].pixels))
+           }(QB, zB.wJ()), EB.set(QB, nB[jB].pixels))
```

#### 69. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L517-L518` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L548-L549) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L517-L518)

```diff
-     var JT = mT(37974);
-     class xT extends(fT(HT.i)) {
+     var iB = zB(37934);
+     class qB extends(GB(uB.h)) {
```

#### 70. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L523` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L554) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L523)

```diff
-               console.error(`Failed to build the texture arrays, at atlas ${UT}`, TT)
+               console.error(`Failed to build the texture arrays, at atlas ${jB}`, BB)
```

#### 71. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L526` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L557) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L526)

```diff
-         })), (0, JT.n)(UT, TT.shaderLanguage)
+         })), (0, iB.i)(jB, BB.shaderLanguage)
```

#### 72. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L537-L538` → after: `L568-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L568-L569) · [Before (L537-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L537-L538)

```diff
-         const gT = await eT(this.mirrors, mT.sources, this._material.KF());
-         (0, JT.d)(this._material, mT, gT, WT, MT)
+         const IB = await MB(this.mirrors, zB.sources, this._material.aY());
+         (0, iB.e)(this._material, zB, IB, QB, dB)
```

#### 73. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L541-L550` → after: `L572-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L572-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L572-L581) · [Before (L541-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L541-L550)

```diff
-     var dT = mT(41309),
-       wT = mT(40432),
-       tT = mT(37185),
-       aT = mT(41318),
-       yT = mT(40546),
-       XT = mT(40418),
-       IT = mT(41256),
-       QT = mT(37708),
-       sT = mT(41327);
-     class FT extends dT.e {
+     var fB = zB(41251),
+       oB = zB(40404),
+       HB = zB(37166),
+       DB = zB(41254),
+       FB = zB(40519),
+       YB = zB(40388),
+       VB = zB(41200),
+       hB = zB(37687),
+       XB = zB(41260);
+     class ZB extends fB.b {
```

#### 74. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L560-L565` → after: `L591-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L591-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L591-L596) · [Before (L560-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L560-L565)

```diff
-       Mesh: aT.d,
-       TransformNode: IT.d,
-       HB: dT.e,
-       VertexBuffer: dT.i,
-       BoundingInfo: wT.e,
-       JB: tT.JB,
+       Mesh: DB.e,
+       TransformNode: VB.e,
+       oJ: fB.b,
+       VertexBuffer: fB.d,
+       BoundingInfo: oB.c,
+       KJ: HB.KJ,
```

#### 75. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L567-L570` → after: `L598-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L598-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L598-L601) · [Before (L567-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L567-L570)

```diff
-       SubMesh: XT.e,
-       VertexData: yT.d,
-       MirroredGeometry: sT.b,
-       meshFromArrays: sT.f,
+       SubMesh: YB.d,
+       VertexData: FB.e,
+       MirroredGeometry: XB.d,
+       meshFromArrays: XB.g,
```

#### 76. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L575` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L606) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L575)

```diff
-     class uT extends(fT(jT.k)) {
+     class PB extends(GB(aB.j)) {
```

#### 77. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L581-L582` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L612-L613) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L581-L582)

```diff
-           const WT = (0, ZT.R)(TT);
-           WT && (WT.disableLighting = !0, (0, ZT.Q)(WT))
+           const QB = (0, mB.eb)(BB);
+           QB && (QB.disableLighting = !0, (0, mB.ab)(QB))
```

#### 78. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L586` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L617) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L586)

```diff
-         (0, VT.g)(this._material), super.dispose(TT)
+         (0, TB.f)(this._material), super.dispose(BB)
```

#### 79. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L598` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L629) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L598)

```diff
-     }(0, jT.g)({
+     }(0, aB.h)({
```

#### 80. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L601-L604` → after: `L632-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L632-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L632-L635) · [Before (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L601-L604)

```diff
-     var rT = mT(37397),
-       KT = mT(37721);
-     const ST = new RegExp(`^#define ${kT.c}\\s*$`, "m");
-     class GT extends(fT(kT.h)) {
+     var eB = zB(37408),
+       lB = zB(37696);
+     const wB = new RegExp(`^#define ${UB.e}\\s*$`, "m");
+     class xB extends(GB(UB.i)) {
```

#### 81. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L606` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L637) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L606)

```diff
-         super(TT, UT), this.kB = !1, UT.ditherOnlyWhileFading && (KT.f.add(TT), this.prewarmDitherTwins(TT))
+         super(BB, jB), this.HJ = !1, jB.ditherOnlyWhileFading && (lB.g.add(BB), this.prewarmDitherTwins(BB))
```

#### 82. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L618` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L649) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L618)

```diff
-           MT && !ST.test(WT.defines) && TT.KF().onAfterRenderObservable.addOnce((() => {
+           dB && !wB.test(QB.defines) && BB.aY().onAfterRenderObservable.addOnce((() => {
```

#### 83. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L624-L625` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L655-L656) · [Before (L624-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L624-L625)

```diff
-         if (this.kB || TT.bJ()) return !1;
-         const UT = new XT.e(0, 0, 0, 0, 0, TT, void 0, !1, !1);
+         if (this.HJ || BB.aE()) return !1;
+         const jB = new YB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
```

#### 84. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L635` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L666) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L635)

```diff
-         this.kB = !0, super.dispose(TT)
+         this.HJ = !0, super.dispose(BB)
```

#### 85. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L643` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L674) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L643)

```diff
-     ET(nT.b, qT), ET(HT.i, xT), ET(kT.h, GT), ET(jT.k, uT), (0, lT.d)({
+     CB(NB.d, LB), CB(uB.h, qB), CB(UB.i, xB), CB(aB.j, PB), (0, pB.d)({
```

#### 86. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L646` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L677) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L646)

```diff
-         return (0, rT.o)(TT, mT), mT.detailMap._pluginDefineNames
+         return (0, eB.k)(BB, zB), zB.detailMap._pluginDefineNames
```

#### 87. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L649` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L680) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L649)

```diff
-         (0, rT._)(TT.mirror, UT, mT)
+         (0, eB.J)(BB.mirror, jB, zB)
```

#### 88. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L653` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L684) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L653)

```diff
-         if (!WT) throw new Error(`${UT.feature.name} has no plugin class (registerPluginClass)`);
+         if (!QB) throw new Error(`${jB.feature.name} has no plugin class (registerPluginClass)`);
```

#### 89. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L666-L667` → after: `L697-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L697-L698) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L666-L667)

```diff
-           const mT = new gT.e(WT, UT, zT, MT, nT);
-           return Object.assign(mT, kT), void(0, LT.N)(TT, mT)
+           const zB = new IB.d(QB, jB, nB, dB, NB);
+           return Object.assign(zB, UB), void(0, rB.M)(BB, zB)
```

#### 90. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L672` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L703) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L672)

```diff
-               UT(new Error(`${HT.context}: ${(null===mT||void 0===mT?void 0:mT.message)||TT||"Failed to load texture"}`))
+               jB(new Error(`${uB.context}: ${(null===zB||void 0===zB?void 0:zB.message)||BB||"Failed to load texture"}`))
```

#### 91. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L689-L690` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L720-L721) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L689-L690)

```diff
-           vT = new gT.e(null, UT, cT);
-         rT.q.set(vT, lT), Object.assign(vT, kT), vT.updateURL(WT, BT);
+           kB = new IB.d(null, jB, yB);
+         eB.l.set(kB, pB), Object.assign(kB, UB), kB.updateURL(QB, JB);
```

#### 92. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L692` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L723) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L692)

```diff
-         fT && (fT.label = ZT), TT.uvSet = vT.coordinatesIndex, TT.matrix.set((0, rT.Q)(vT)), (0, LT.N)(TT, vT)
+         GB && (GB.label = mB), BB.uvSet = kB.coordinatesIndex, BB.matrix.set((0, eB.C)(kB)), (0, rB.M)(BB, kB)
```

#### 93. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L703-L706` → after: `L734-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L734-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L734-L737) · [Before (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L703-L706)

```diff
-         } = TT.sampler, jT = kT === (0, LT.G)(nT) ? null : () => {
-           (0, rT.M)(lT, kT)
-         }, lT = new zT.d(WT, UT, null, nT, MT, jT, null, (0, LT.C)(HT));
-         lT.coordinatesMode = gT.e.SKYBOX_MODE, (0, LT.N)(TT, lT)
+         } = BB.sampler, aB = UB === (0, rB.D)(NB) ? null : () => {
+           (0, eB.y)(pB, UB)
+         }, pB = new nB.c(QB, jB, null, NB, dB, aB, null, (0, rB.C)(uB));
+         pB.coordinatesMode = IB.d.SKYBOX_MODE, (0, rB.M)(BB, pB)
```

#### 94. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L715` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L746) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L715)

```diff
-           wrap: jT = gT.e.CLAMP_ADDRESSMODE
+           wrap: aB = IB.d.CLAMP_ADDRESSMODE
```

#### 95. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L717` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L748) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L717)

```diff
-         const lT = new MT.b(UT, {
+         const pB = new dB.d(jB, {
```

#### 96. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L722-L723` → after: `L753-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L753-L754) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L722-L723)

```diff
-         const LT = (0, rT.A)(lT);
-         return (0, rT.E)(LT, lT), LT
+         const rB = (0, eB.t)(pB);
+         return (0, eB.u)(rB, pB), rB
```

#### 97. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L727` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L758) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L727)

```diff
-   41327: (TT, UT, mT) => {
+   41260: (BB, jB, zB) => {
```

#### 98. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L729-L730` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L760-L761) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L729-L730)

```diff
-       b: () => jT,
-       f: () => lT,
+       d: () => aB,
+       g: () => pB,
```

#### 99. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L733-L740` → after: `L764-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L764-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L764-L771) · [Before (L733-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L733-L740)

```diff
-     var WT = mT(41309),
-       zT = mT(40171),
-       MT = mT(40432),
-       gT = mT(40550),
-       nT = mT(41318),
-       HT = mT(40546),
-       kT = mT(37584);
-     class jT extends gT.e {
+     var QB = zB(41251),
+       nB = zB(40125),
+       dB = zB(40404),
+       IB = zB(40525),
+       NB = zB(41254),
+       uB = zB(40519),
+       UB = zB(37578);
+     class aB extends IB.c {
```

#### 100. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L748` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L779) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L748)

```diff
-         (0, kT.m)(TT), this.model = TT, null === (UT = this.onLinked) || void 0 === UT || UT.call(this, TT)
+         (0, UB.o)(BB), this.model = BB, null === (jB = this.onLinked) || void 0 === jB || jB.call(this, BB)
```

#### 101. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L775` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L806) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L775)

```diff
-         this.link(new kT.f(TT, UT, this.getTotalVertices(), new Float64Array(mT.cWT()), new Float64Array(WT.cWT())))
+         this.link(new UB.h(BB, jB, this.getTotalVertices(), new Float64Array(zB.nQB()), new Float64Array(QB.nQB())))
```

#### 102. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L779-L780` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L810-L811) · [Before (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L779-L780)

```diff
-         const UT = new jT(TT, this.KF()),
-           mT = this.vWT(void 0, !0);
+         const jB = new aB(BB, this.aY()),
+           zB = this.dQB(void 0, !0);
```

#### 103. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L795-L796` → after: `L826-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L826-L827) · [Before (L795-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L795-L796)

```diff
-           const LT = TT.getIsInstanced() ? (mT instanceof Array ? 4 * mT.length : mT.byteLength) / jT : this.getTotalVertices(),
-             pT = (0, zT.v)(mT, nT, HT, kT, jT, LT, !0),
+           const rB = BB.getIsInstanced() ? (zB instanceof Array ? 4 * zB.length : zB.byteLength) / aB : this.getTotalVertices(),
+             sB = (0, nB.t)(zB, NB, uB, UB, aB, rB, !0),
```

#### 104. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L805` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L836) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L805)

```diff
-           UT.setVerticesBuffer(new WT.i(this.eB(), pT, MT, BT), LT)
+           jB.setVerticesBuffer(new QB.d(this.wJ(), sB, dB, JB), rB)
```

#### 105. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L807` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L838) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L807)

```diff
-         return UT._updatable = gT, UT._boundingInfo = new MT.e(this.extend.minimum, this.extend.maximum), UT.relink(), UT
+         return jB._updatable = IB, jB._boundingInfo = new dB.c(this.extend.minimum, this.extend.maximum), jB.relink(), jB
```

#### 106. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L810-L812` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L841-L843) · [Before (L810-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L810-L812)

```diff
-         const HT = TT[0].KF(),
-           kT = new nT.d(TT[0].name + "_merged", HT),
-           lT = new jT(gT.e.RandomId(), HT, void 0, !1, kT);
+         const uB = BB[0].aY(),
+           UB = new NB.e(BB[0].name + "_merged", uB),
+           pB = new aB(IB.c.RandomId(), uB, void 0, !1, UB);
```

#### 107. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L814` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L845) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L814)

```diff
-           if (!nT.d.MergeMeshes(TT, UT, mT, kT, zT, MT)) return kT.dispose(), null
+           if (!NB.e.MergeMeshes(BB, jB, zB, UB, nB, dB)) return UB.dispose(), null
```

#### 108. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L831` → after: `L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L862) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L831)

```diff
-         this.model && ((0, kT.s)(this.model), this.model = null)
+         this.model && ((0, UB.z)(this.model), this.model = null)
```

#### 109. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L836-L837` → after: `L867-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L867-L868) · [Before (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L836-L837)

```diff
-       let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new nT.d(TT, mT);
-       const zT = (0, kT.k)(UT),
+       let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NB.e(BB, zB);
+       const nB = (0, UB.m)(jB),
```

#### 110. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L845-L847` → after: `L876-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L876-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L876-L878) · [Before (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L845-L847)

```diff
-         ZT = new HT.d;
-       ZT.positions = MT, ZT.normals = null !== lT && void 0 !== lT ? lT : null, ZT.uvs = null !== LT && void 0 !== LT ? LT : null, ZT.indices = pT;
-       const cT = new jT(gT.e.RandomId(), mT, ZT, !1, WT);
+         mB = new uB.e;
+       mB.positions = dB, mB.normals = null !== pB && void 0 !== pB ? pB : null, mB.uvs = null !== rB && void 0 !== rB ? rB : null, mB.indices = sB;
+       const yB = new aB(IB.c.RandomId(), zB, mB, !1, QB);
```

#### 111. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L858` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L889) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L858)

```diff
-       const zT = new nT.d(TT, mT),
+       const nB = new NB.e(BB, zB),
```

#### 112. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L865` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L896) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L865)

```diff
-       return Object.assign(new HT.d, {
+       return Object.assign(new uB.e, {
```

#### 113. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L873` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L904) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L873)

```diff
-   41300: (TT, UT, mT) => {
+   41248: (BB, jB, zB) => {
```

#### 114. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L899` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L930) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L899)

```diff
-       e: () => WT,
+       d: () => QB,
```

#### 115. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L906` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L937) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L906)

```diff
-       const gT = null !== (WT = zT.get(TT)) && void 0 !== WT ? WT : new Map;
+       const IB = null !== (QB = nB.get(BB)) && void 0 !== QB ? QB : new Map;
```

#### 116. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L908` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/250.js#L939) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/250.js#L908)

```diff
-       const nT = null !== (MT = gT.get(UT[0])) && void 0 !== MT ? MT : [];
+       const NB = null !== (dB = IB.get(jB[0])) && void 0 !== dB ? dB : [];
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (116 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L4)

```diff
-   41227: (TT, UT, mT) => {
+   41173: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L10-L29` → after: `L10-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L10-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L10-L29) · [Before (L10-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L10-L29)

```diff
-     var WT = mT(39907),
-       zT = mT(40192),
-       MT = mT(41236),
-       gT = mT(37364),
-       nT = mT(37185),
-       HT = mT(40362),
-       kT = mT(41256),
-       jT = mT(38598),
-       lT = mT(37270),
-       LT = mT(37253),
-       pT = mT(37176),
-       BT = mT(38508),
-       ZT = mT(38499),
-       cT = mT(38231),
-       vT = mT(38286),
-       fT = mT(38254),
- ... (4 more removed lines; see GitHub link above)
+     var QB = zB(39895),
+       nB = zB(40154),
+       dB = zB(41176),
+       IB = zB(37372),
+       NB = zB(37166),
+       uB = zB(40335),
+       UB = zB(41200),
+       aB = zB(38554),
+       pB = zB(37263),
+       rB = zB(37239),
+       sB = zB(37158),
+       JB = zB(38463),
+       mB = zB(38455),
+       yB = zB(38177),
+       kB = zB(38227),
+       GB = zB(38197),
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L46-L50` → after: `L46-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L46-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L46-L50) · [Before (L46-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L46-L50)

```diff
-       UT.pWT = (0, iT.h)().GB.engine.pWT;
-       const mT = new zT.b(UT);
-       mT.clearColor = new gT.e(0, 0, 0, 0), mT.ambientColor = new gT.Color3(1, 1, 1);
-       const kT = new MT.d("ac", Math.PI / 2, Math.PI / 2, OT, nT.JB.Zero(), mT),
-         jT = new HT.b("light", new nT.JB(-.1, 1, -.3), mT);
+       jB.jQB = (0, gB.g)().pm.engine.jQB;
+       const zB = new nB.d(jB);
+       zB.clearColor = new IB.c(0, 0, 0, 0), zB.ambientColor = new IB.Color3(1, 1, 1);
+       const UB = new dB.c("xy", Math.PI / 2, Math.PI / 2, SB, NB.KJ.Zero(), zB),
+         aB = new uB.e("light", new NB.KJ(-.1, 1, -.3), zB);
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L53)

```diff
-         XZ: mT,
+         ny: zB,
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L60)

```diff
-       return wT[TT] ??= (0, cT.v)(TT, aT().XZ, !0).catch((UT => {
+       return oB[BB] ??= (0, yB.y)(BB, DB().ny, !0).catch((jB => {
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L67)

```diff
-       return UT || (UT = qT.y[TT].loadModel(aT().XZ, !1).then((TT => (TT.Qy(!1), TT)), (UT => {
+       return jB || (jB = LB.t[BB].loadModel(DB().ny, !1).then((BB => (BB.mH(!1), BB)), (jB => {
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L79-L81` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L79-L81) · [Before (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L79-L81)

```diff
-       const JT = null !== (UT = null === HT || void 0 === HT ? void 0 : HT.size) && void 0 !== UT ? UT : 1,
-         xT = null !== (mT = null === HT || void 0 === HT ? void 0 : HT.cosmetics) && void 0 !== mT ? mT : [],
-         dT = null !== (WT = null === HT || void 0 === HT ? void 0 : HT.AY) && void 0 !== WT ? WT : null;
+       const iB = null !== (jB = null === uB || void 0 === uB ? void 0 : uB.size) && void 0 !== jB ? jB : 1,
+         qB = null !== (zB = null === uB || void 0 === uB ? void 0 : uB.cosmetics) && void 0 !== zB ? zB : [],
+         fB = null !== (QB = null === uB || void 0 === uB ? void 0 : uB.kS) && void 0 !== QB ? QB : null;
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L87)

```diff
-         XZ: sT
+         ny: XB
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L91)

```diff
-       })), PT = null === dT ? null : XT(dT).catch((TT => (console.error(`Mob preview: could not load ${dT}`, TT), null)));
+       })), AB = null === fB ? null : YB(fB).catch((BB => (console.error(`Mob preview: could not load ${fB}`, BB), null)));
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L96)

```diff
-         const XT = (0, iT.h)().GB.mV,
+         const YB = (0, gB.g)().pm.JY,
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L99)

```diff
-           } = (0, jT.d)(zT),
+           } = (0, aB.c)(nB),
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L101)

```diff
-         if (tT = (0, cT.k)(zT, sT * JT, !0, !0), XT.setPosition(tT, OT, -QT.height * sT / 2, 0), XT.setRotationEulerY(tT, YT), HT.meshApi instanceof fT.e && xT.length > 0)
+         if (HB = (0, yB.l)(nB, XB * iB, !0, !0), YB.setPosition(HB, SB, -hB.height * XB / 2, 0), YB.setRotationEulerY(HB, EB), uB.meshApi instanceof GB.d && qB.length > 0)
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L103)

```diff
-         else HT.meshApi.updateVariation(tT, zT, null !== MT && void 0 !== MT ? MT : "default");
+         else uB.meshApi.updateVariation(HB, nB, null !== dB && void 0 !== dB ? dB : "default");
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L106-L109` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L106-L109) · [Before (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L106-L109)

```diff
-           const MT = qT.y[TT],
-             gT = (0, BT.l)();
-           (0, BT.g)(MT, null === (zT = (0, vT.d)(mT).meshMetadata.heldItemPositionParams) || void 0 === zT ? void 0 : zT.itemOffset, gT);
-           const HT = bT.c * gT.gp.y,
+           const dB = LB.t[BB],
+             IB = (0, JB.k)();
+           (0, JB.f)(dB, null === (nB = (0, kB.b)(zB).meshMetadata.heldItemPositionParams) || void 0 === nB ? void 0 : nB.itemOffset, IB);
+           const uB = tB.c * IB.pp.y,
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L111-L113` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L111-L113) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L111-L113)

```diff
-             lT = new kT.d(`${UT.name}Hand`, aT().XZ);
-           lT.position.Gw((0, ZT.b)(gT.position, jT, HT, MT.heldModelOffsetY())), lT.rotationQuaternion = jT, lT.gp.set(gT.gp.x, HT, gT.gp.z), UT.clone(`${UT.name}Held`, lT).Qy(!0);
-           const LT = (0, iT.h)().GB.mV;
+             pB = new UB.e(`${jB.name}Hand`, DB().ny);
+           pB.position.jH((0, mB.c)(IB.position, aB, uB, dB.heldModelOffsetY())), pB.rotationQuaternion = aB, pB.pp.set(IB.pp.x, uB, IB.pp.z), jB.clone(`${jB.name}Held`, pB).mH(!0);
+           const rB = (0, gB.g)().pm.JY;
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L116-L117)

```diff
-         const FT = null !== (UT = (0, vT.d)(zT).meshMetadata.lifeformTypeForModelOverride) && void 0 !== UT ? UT : zT;
-         IT = new pT.AnimatorState, IT.thinInstMgr = XT, IT.zV = tT, IT.PmT = XT.BWT(tT, 0), IT.modelLifeformType = FT, IT.nodeNameAliases = null !== (mT = null === (WT = (0, lT.b)(FT)) || void 0 === WT ? void 0 : WT.nodeNameAliases) && void 0 !== mT ? mT : null, IT.startAnimation … [truncated]
+         const ZB = null !== (jB = (0, kB.b)(nB).meshMetadata.lifeformTypeForModelOverride) && void 0 !== jB ? jB : nB;
+         VB = new sB.AnimatorState, VB.thinInstMgr = YB, VB.mY = HB, VB.EzB = YB.zQB(HB, 0), VB.modelLifeformType = ZB, VB.nodeNameAliases = null !== (zB = null === (QB = (0, pB.c)(ZB)) || void 0 === QB ? void 0 : QB.nodeNameAliases) && void 0 !== zB ? zB : null, VB.startAnimation … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L119)

```diff
-         console.error(`Mob preview: could not load ${zT}`, TT)
+         console.error(`Mob preview: could not load ${nB}`, BB)
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L121)

```diff
-         wT = !0, sT.onBeforeRenderObservable.remove(FT), null !== tT && (0, iT.h)().GB.mV.delete(tT)
+         oB = !0, XB.onBeforeRenderObservable.remove(ZB), null !== HB && (0, gB.g)().pm.JY.delete(HB)
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L140-L141)

```diff
-       const HT = (0, iT.h)(),
-         kT = HT.GB.mV,
+       const uB = (0, gB.g)(),
+         UB = uB.pm.JY,
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L147)

```diff
-         gT = (0, cT.k)(UT, JT, !0, !0), kT.setPosition(gT, 0, -JT, 0), TT.meshApi.updateVariation(gT, UT, mT);
+         IB = (0, yB.l)(jB, iB, !0, !0), UB.setPosition(IB, 0, -iB, 0), BB.meshApi.updateVariation(IB, jB, zB);
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L157)

```diff
-         console.error(`Pet preview: could not load ${UT}`, TT)
+         console.error(`Pet preview: could not load ${jB}`, BB)
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L167)

```diff
-           XZ: WT,
+           ny: QB,
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L212)

```diff
-             AY: mT
+             kS: zB
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L222)

```diff
-           const MT = null !== (zT = this.placed[WT]) && void 0 !== zT ? zT : null;
+           const dB = null !== (nB = this.placed[QB]) && void 0 !== nB ? nB : null;
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L226)

```diff
-           return null !== MT && MT.figure === mT && MT.x === gT ? MT : (null === MT || void 0 === MT || MT.remove(), {
+           return null !== dB && dB.figure === zB && dB.x === IB ? dB : (null === dB || void 0 === dB || dB.remove(), {
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L249)

```diff
-   38914: (TT, UT, mT) => {
+   38906: (BB, jB, zB) => {
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L253-L257` → after: `L253-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L253-L257) · [Before (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L253-L257)

```diff
-     var WT = mT(37281),
-       zT = mT(37292),
-       MT = mT(37549),
-       gT = mT(37298),
-       nT = mT(37288);
+     var QB = zB(37279),
+       nB = zB(37286),
+       dB = zB(37547),
+       IB = zB(37291),
+       NB = zB(37283);
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L260)

```diff
-       return `\n\t\t\t\t${(0,nT.r)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,NB.w)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L262)

```diff
-         (0, nT.w)(TT, "float", "s", "sin(ang)")
+         (0, NB.A)(BB, "float", "s", "sin(ang)")
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L265)

```diff
-         (0, nT.w)(TT, "float", "c", "cos(ang)")
+         (0, NB.A)(BB, "float", "c", "cos(ang)")
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L268)

```diff
-         (0, nT.k)(TT, "mat2", "c", "s", "-s", "c")
+         (0, NB.m)(BB, "mat2", "c", "s", "-s", "c")
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L274-L275` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L274-L275) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L274-L275)

```diff
-       let mT = (0, nT.zb)(TT, "skele" + (UT - 1));
-       for (let zT = UT - 2; zT >= 0; zT--) mT = (0, nT.pb)(TT, `boneIdx == ${zT}`, (0, nT.zb)(TT, `skele${zT}`), mT);
+       let zB = (0, NB.Ab)(BB, "skele" + (jB - 1));
+       for (let nB = jB - 2; nB >= 0; nB--) zB = (0, NB.sb)(BB, `boneIdx == ${nB}`, (0, NB.Ab)(BB, `skele${nB}`), zB);
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L277)

```diff
-       return `\n\t\t\t\t${(0,nT.w)(TT,"int","boneIdx",(0,nT.wb)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,nT.w)(TT,"vec3","bone",mT)}\n\t\t\t\t${(0,nT.w)(TT,"vec2","pivot",(0,nT.k)(TT,"vec2","0.0",`${(0,nT.Eb)(TT,"position")}.z`))}\n\t\t\t\t${(0,nT.$)(TT)?`positi … [truncated]
+       return `\n\t\t\t\t${(0,NB.A)(BB,"int","boneIdx",(0,NB.wb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,NB.A)(BB,"vec3","bone",zB)}\n\t\t\t\t${(0,NB.A)(BB,"vec2","pivot",(0,NB.m)(BB,"vec2","0.0",`${(0,NB.Gb)(BB,"position")}.z`))}\n\t\t\t\t${(0,NB.ab)(BB)?`posit … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L281)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,nT.k)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,NB.m)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L287)

```diff
-         MmT(TT, UT) {
+         ljB(BB, jB) {
```

#### 36. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L297-L298` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L297-L298) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L297-L298)

```diff
-           BLOXD_CAPE_BONES: `${TT}`,
-           BLOXD_CAPE_MAX_Y: (0, zT.nb)(UT)
+           BLOXD_CAPE_BONES: `${BB}`,
+           BLOXD_CAPE_MAX_Y: (0, nB.jb)(jB)
```

#### 37. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L301)

```diff
-           return (0, MT.c)(function(TT) {
+           return (0, dB.b)(function(BB) {
```

#### 38. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L304)

```diff
-               name: `skele${mT}`,
+               name: `skele${zB}`,
```

#### 39. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L311)

```diff
-           for (let UT = 0; UT < this.skeleLen; UT++) TT.updateVector3(`skele${UT}`, lT.MmT(this.skele, 3 * UT))
+           for (let jB = 0; jB < this.skeleLen; jB++) BB.updateVector3(`skele${jB}`, pB.ljB(this.skele, 3 * jB))
```

#### 40. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L326)

```diff
-   38807: (TT, UT, mT) => {
+   38794: (BB, jB, zB) => {
```

#### 41. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L329)

```diff
-       e: () => lT
+       h: () => pB
```

#### 42. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L331-L334` → after: `L331-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L331-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L331-L334) · [Before (L331-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L331-L334)

```diff
-     var WT = mT(37281),
-       zT = mT(37549),
-       MT = mT(37288),
-       gT = mT(37298);
+     var QB = zB(37279),
+       nB = zB(37547),
+       dB = zB(37283),
+       IB = zB(37291);
```

#### 43. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L350)

```diff
-         getUniforms: TT => (0, zT.c)(HT, "fragment", TT),
+         getUniforms: BB => (0, nB.b)(uB, "fragment", BB),
```

#### 44. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L357-L360` → after: `L357-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L357-L360) · [Before (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L357-L360)

```diff
-           const mT = (0, MT.D)(UT, `vec4 ${kT}(sampler2D s, vec2 uv, float bias)`, `fn ${kT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             WT = (0, MT.D)(UT, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             zT = `${(0,MT.R)(UT,"vDiffuseUV")} + uvOffset`,
-             gT = (0, MT.D)(UT, `${kT}(diffuseSampler, ${zT}, ${(0,MT.zb)(UT,nT)})`, `${kT}(diffuseSampler, diffuseSamplerSampler, ${zT}, ${(0,MT.zb)(UT,nT)})`);
+           const zB = (0, dB.K)(jB, `vec4 ${UB}(sampler2D s, vec2 uv, float bias)`, `fn ${UB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             QB = (0, dB.K)(jB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             nB = `${(0,dB.T)(jB,"vDiffuseUV")} + uvOffset`,
+             IB = (0, dB.K)(jB, `${UB}(diffuseSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`, `${UB}(diffuseSampler, diffuseSamplerSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`);
```

#### 45. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L362-L363` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L362-L363) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L362-L363)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${mT} {\n\t\t\t\t\t${(0,MT.w)(UT,"vec4","texel",WT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,MT … [truncated]
-             [(0, MT.z)(UT)]: `baseColor = ${gT};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${zB} {\n\t\t\t\t\t${(0,dB.A)(jB,"vec4","texel",QB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,dB … [truncated]
+             [(0, dB.E)(jB)]: `baseColor = ${IB};`
```

#### 46. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L369)

```diff
-   41267: (TT, UT, mT) => {
+   41215: (BB, jB, zB) => {
```

#### 47. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L376-L382` → after: `L376-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L376-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L376-L382) · [Before (L376-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L376-L382)

```diff
-     var WT = mT(41269),
-       zT = mT(38142);
-     class MT extends((0, WT.h)(zT.c)) {}(0, WT.i)(zT.c, MT);
-     var gT = mT(37273);
-     class nT extends((0, WT.h)(gT.e)) {}(0, WT.i)(gT.e, nT);
-     var HT = mT(37976);
-     class kT extends((0, WT.h)(HT.c)) {}(0, WT.i)(HT.c, kT);
+     var QB = zB(41218),
+       nB = zB(38096);
+     class dB extends((0, QB.i)(nB.e)) {}(0, QB.j)(nB.e, dB);
+     var IB = zB(37271);
+     class NB extends((0, QB.i)(IB.f)) {}(0, QB.j)(IB.f, NB);
+     var uB = zB(37936);
+     class UB extends((0, QB.i)(uB.d)) {}(0, QB.j)(uB.d, UB);
```

#### 48. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L384-L386` → after: `L384-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L384-L386) · [Before (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L384-L386)

```diff
-       lT = mT(40379),
-       LT = mT(37531);
-     class pT extends((0, WT.h)(LT.h)) {
+       pB = zB(40350),
+       rB = zB(37528);
+     class sB extends((0, QB.i)(rB.d)) {
```

#### 49. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L391)

```diff
-         (0, jT.g)(this._material), super.dispose(TT)
+         (0, aB.f)(this._material), super.dispose(BB)
```

#### 50. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L393)

```diff
-     }(0, WT.i)(LT.h, pT), (0, LT.l)({
+     }(0, QB.j)(rB.d, sB), (0, rB.h)({
```

#### 51. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L397-L401` → after: `L397-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L397-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L397-L401) · [Before (L397-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L397-L401)

```diff
-     var BT = mT(38807);
-     class ZT extends((0, WT.h)(BT.e)) {}(0, WT.i)(BT.e, ZT);
-     var cT = mT(38914),
-       vT = mT(37376),
-       fT = mT(38266),
+     var JB = zB(38794);
+     class mB extends((0, QB.i)(JB.h)) {}(0, QB.j)(JB.h, mB);
+     var yB = zB(38906),
+       kB = zB(37386),
+       GB = zB(38204),
```

#### 52. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L403-L406` → after: `L403-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L403-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L403-L406) · [Before (L403-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L403-L406)

```diff
-     class iT extends((0, WT.h)(cT.d)) {}(0, WT.i)(cT.d, iT);
-     class bT extends((0, WT.h)(vT.c)) {}(0, WT.i)(vT.c, bT);
-     class OT extends((0, WT.h)(fT.i)) {}(0, WT.i)(fT.i, OT);
-     class eT extends((0, WT.h)(qT.c)) {}(0, WT.i)(qT.c, eT)
+     class gB extends((0, QB.i)(yB.d)) {}(0, QB.j)(yB.d, gB);
+     class tB extends((0, QB.i)(kB.b)) {}(0, QB.j)(kB.b, tB);
+     class SB extends((0, QB.i)(GB.k)) {}(0, QB.j)(GB.k, SB);
+     class MB extends((0, QB.i)(LB.d)) {}(0, QB.j)(LB.d, MB)
```

#### 53. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L408)

```diff
-   41269: (TT, UT, mT) => {
+   41218: (BB, jB, zB) => {
```

#### 54. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L411-L412` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L411-L412) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L411-L412)

```diff
-       h: () => fT,
-       i: () => ET
+       i: () => GB,
+       j: () => CB
```

#### 55. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L414-L422` → after: `L414-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L414-L422) · [Before (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L414-L422)

```diff
-     var WT = mT(40379),
-       zT = mT(41277),
-       MT = mT(41334),
-       gT = mT(41284),
-       nT = mT(37947),
-       HT = mT(37959),
-       kT = mT(37965),
-       jT = mT(37972),
-       lT = mT(37312),
+     var QB = zB(40350),
+       nB = zB(41220),
+       dB = zB(41266),
+       IB = zB(41227),
+       NB = zB(37908),
+       uB = zB(37915),
+       UB = zB(37924),
+       aB = zB(37926),
+       pB = zB(37315),
```

#### 56. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L424-L427` → after: `L424-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L424-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L424-L427) · [Before (L424-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L424-L427)

```diff
-       pT = mT(41286),
-       BT = mT(37298),
-       ZT = mT(37302),
-       cT = mT(37288);
+       sB = zB(41231),
+       JB = zB(37291),
+       mB = zB(37300),
+       yB = zB(37283);
```

#### 57. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L433)

```diff
-         hp: TT
+         kJ: BB
```

#### 58. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L438)

```diff
-       const UT = class extends pT.d {
+       const jB = class extends sB.b {
```

#### 59. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L440-L441)

```diff
-             const WT = (0, ZT.R)(UT),
-               zT = WT && (0, ZT.s)(WT, TT.name);
+             const QB = (0, mB.eb)(jB),
+               nB = QB && (0, mB.w)(QB, BB.name);
```

#### 60. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L443)

```diff
-             super(UT, TT.name, TT.priority, zT ? zT.defines : TT.defines(...gT), !1), this.featureState = void 0, this.featureState = mT, this._pluginManager._addPlugin(this), this._enable(!0), (0, ZT.t)(this._material, TT, this.featureState, this._pluginDefineNames)
+             super(jB, BB.name, BB.priority, nB ? nB.defines : BB.defines(...IB), !1), this.featureState = void 0, this.featureState = zB, this._pluginManager._addPlugin(this), this._enable(!0), (0, mB.z)(this._material, BB, this.featureState, this._pluginDefineNames)
```

#### 61. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L449)

```diff
-             return TT === cT.e.GLSL || TT === cT.e.WGSL
+             return BB === yB.c.GLSL || BB === yB.c.WGSL
```

#### 62. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L453)

```diff
-       for (const [WT, zT] of Object.entries(BT.c)) {
+       for (const [QB, nB] of Object.entries(JB.d)) {
```

#### 63. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L466-L469` → after: `L466-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L466-L469) · [Before (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L466-L469)

```diff
-     class qT extends(fT(nT.b)) {}
-     var iT = mT(39907),
-       bT = mT(41291),
-       OT = mT(41300);
+     class LB extends(GB(NB.d)) {}
+     var gB = zB(39895),
+       tB = zB(41240),
+       SB = zB(41248);
```

#### 64. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L480)

```diff
-             pixels: gT && gT.byteLength === WT * WT * MT * 4 ? gT : null !== (zT = YT.get(TT.getInternalTexture())) && void 0 !== zT ? zT : TT._readPixelsSync(),
+             pixels: IB && IB.byteLength === QB * QB * dB * 4 ? IB : null !== (nB = EB.get(BB.getInternalTexture())) && void 0 !== nB ? nB : BB._readPixelsSync(),
```

#### 65. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L483)

```diff
-         })), MT = mT.eB().getCaps().texture2DArrayMaxLayerCount, nT = (0, OT.e)(zT, WT, MT).map((TT => {
+         })), dB = zB.wJ().getCaps().texture2DArrayMaxLayerCount, NB = (0, SB.d)(nB, QB, dB).map((BB => {
```

#### 66. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L489` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L489) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L489)

```diff
-             atlas: new bT.e(UT, WT, WT, zT, iT.b.TEXTUREFORMAT_RGBA, mT, !0, !1, gT.e.NEAREST_NEAREST_MIPLINEAR),
+             atlas: new tB.e(jB, QB, QB, nB, gB.b.TEXTUREFORMAT_RGBA, zB, !0, !1, IB.d.NEAREST_NEAREST_MIPLINEAR),
```

#### 67. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L496)

```diff
-             const mT = UT.createRawTexture(new Uint8Array(4), 1, 1, iT.b.TEXTUREFORMAT_RGBA, !1, !1, gT.e.NEAREST_SAMPLINGMODE);
+             const zB = jB.createRawTexture(new Uint8Array(4), 1, 1, gB.b.TEXTUREFORMAT_RGBA, !1, !1, IB.d.NEAREST_SAMPLINGMODE);
```

#### 68. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L498)

```diff
-           }(WT, mT.eB()), YT.set(WT, zT[UT].pixels))
+           }(QB, zB.wJ()), EB.set(QB, nB[jB].pixels))
```

#### 69. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L503-L504` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L503-L504) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L503-L504)

```diff
-     var JT = mT(37974);
-     class xT extends(fT(HT.i)) {
+     var iB = zB(37934);
+     class qB extends(GB(uB.h)) {
```

#### 70. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L509)

```diff
-               console.error(`Failed to build the texture arrays, at atlas ${UT}`, TT)
+               console.error(`Failed to build the texture arrays, at atlas ${jB}`, BB)
```

#### 71. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L512)

```diff
-         })), (0, JT.n)(UT, TT.shaderLanguage)
+         })), (0, iB.i)(jB, BB.shaderLanguage)
```

#### 72. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L523-L524)

```diff
-         const gT = await eT(this.mirrors, mT.sources, this._material.KF());
-         (0, JT.d)(this._material, mT, gT, WT, MT)
+         const IB = await MB(this.mirrors, zB.sources, this._material.aY());
+         (0, iB.e)(this._material, zB, IB, QB, dB)
```

#### 73. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L527-L536` → after: `L527-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L527-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L527-L536) · [Before (L527-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L527-L536)

```diff
-     var dT = mT(41309),
-       wT = mT(40432),
-       tT = mT(37185),
-       aT = mT(41318),
-       yT = mT(40546),
-       XT = mT(40418),
-       IT = mT(41256),
-       QT = mT(37708),
-       sT = mT(41327);
-     class FT extends dT.e {
+     var fB = zB(41251),
+       oB = zB(40404),
+       HB = zB(37166),
+       DB = zB(41254),
+       FB = zB(40519),
+       YB = zB(40388),
+       VB = zB(41200),
+       hB = zB(37687),
+       XB = zB(41260);
+     class ZB extends fB.b {
```

#### 74. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L546-L551` → after: `L546-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L546-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L546-L551) · [Before (L546-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L546-L551)

```diff
-       Mesh: aT.d,
-       TransformNode: IT.d,
-       HB: dT.e,
-       VertexBuffer: dT.i,
-       BoundingInfo: wT.e,
-       JB: tT.JB,
+       Mesh: DB.e,
+       TransformNode: VB.e,
+       oJ: fB.b,
+       VertexBuffer: fB.d,
+       BoundingInfo: oB.c,
+       KJ: HB.KJ,
```

#### 75. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L553-L556` → after: `L553-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L553-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L553-L556) · [Before (L553-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L553-L556)

```diff
-       SubMesh: XT.e,
-       VertexData: yT.d,
-       MirroredGeometry: sT.b,
-       meshFromArrays: sT.f,
+       SubMesh: YB.d,
+       VertexData: FB.e,
+       MirroredGeometry: XB.d,
+       meshFromArrays: XB.g,
```

#### 76. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L561)

```diff
-     class uT extends(fT(jT.k)) {
+     class PB extends(GB(aB.j)) {
```

#### 77. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L567-L568` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L567-L568) · [Before (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L567-L568)

```diff
-           const WT = (0, ZT.R)(TT);
-           WT && (WT.disableLighting = !0, (0, ZT.Q)(WT))
+           const QB = (0, mB.eb)(BB);
+           QB && (QB.disableLighting = !0, (0, mB.ab)(QB))
```

#### 78. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L572)

```diff
-         (0, VT.g)(this._material), super.dispose(TT)
+         (0, TB.f)(this._material), super.dispose(BB)
```

#### 79. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L584)

```diff
-     }(0, jT.g)({
+     }(0, aB.h)({
```

#### 80. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L587-L590` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L587-L590) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L587-L590)

```diff
-     var rT = mT(37397),
-       KT = mT(37721);
-     const ST = new RegExp(`^#define ${kT.c}\\s*$`, "m");
-     class GT extends(fT(kT.h)) {
+     var eB = zB(37408),
+       lB = zB(37696);
+     const wB = new RegExp(`^#define ${UB.e}\\s*$`, "m");
+     class xB extends(GB(UB.i)) {
```

#### 81. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L592)

```diff
-         super(TT, UT), this.kB = !1, UT.ditherOnlyWhileFading && (KT.f.add(TT), this.prewarmDitherTwins(TT))
+         super(BB, jB), this.HJ = !1, jB.ditherOnlyWhileFading && (lB.g.add(BB), this.prewarmDitherTwins(BB))
```

#### 82. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L604)

```diff
-           MT && !ST.test(WT.defines) && TT.KF().onAfterRenderObservable.addOnce((() => {
+           dB && !wB.test(QB.defines) && BB.aY().onAfterRenderObservable.addOnce((() => {
```

#### 83. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L610-L611` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L610-L611) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L610-L611)

```diff
-         if (this.kB || TT.bJ()) return !1;
-         const UT = new XT.e(0, 0, 0, 0, 0, TT, void 0, !1, !1);
+         if (this.HJ || BB.aE()) return !1;
+         const jB = new YB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
```

#### 84. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L621)

```diff
-         this.kB = !0, super.dispose(TT)
+         this.HJ = !0, super.dispose(BB)
```

#### 85. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L629)

```diff
-     ET(nT.b, qT), ET(HT.i, xT), ET(kT.h, GT), ET(jT.k, uT), (0, lT.d)({
+     CB(NB.d, LB), CB(uB.h, qB), CB(UB.i, xB), CB(aB.j, PB), (0, pB.d)({
```

#### 86. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L632` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L632) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L632)

```diff
-         return (0, rT.o)(TT, mT), mT.detailMap._pluginDefineNames
+         return (0, eB.k)(BB, zB), zB.detailMap._pluginDefineNames
```

#### 87. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L635` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L635) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L635)

```diff
-         (0, rT._)(TT.mirror, UT, mT)
+         (0, eB.J)(BB.mirror, jB, zB)
```

#### 88. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L639)

```diff
-         if (!WT) throw new Error(`${UT.feature.name} has no plugin class (registerPluginClass)`);
+         if (!QB) throw new Error(`${jB.feature.name} has no plugin class (registerPluginClass)`);
```

#### 89. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L652-L653)

```diff
-           const mT = new gT.e(WT, UT, zT, MT, nT);
-           return Object.assign(mT, kT), void(0, LT.N)(TT, mT)
+           const zB = new IB.d(QB, jB, nB, dB, NB);
+           return Object.assign(zB, UB), void(0, rB.M)(BB, zB)
```

#### 90. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L658)

```diff
-               UT(new Error(`${HT.context}: ${(null===mT||void 0===mT?void 0:mT.message)||TT||"Failed to load texture"}`))
+               jB(new Error(`${uB.context}: ${(null===zB||void 0===zB?void 0:zB.message)||BB||"Failed to load texture"}`))
```

#### 91. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L675-L676` → after: `L675-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L675-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L675-L676) · [Before (L675-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L675-L676)

```diff
-           vT = new gT.e(null, UT, cT);
-         rT.q.set(vT, lT), Object.assign(vT, kT), vT.updateURL(WT, BT);
+           kB = new IB.d(null, jB, yB);
+         eB.l.set(kB, pB), Object.assign(kB, UB), kB.updateURL(QB, JB);
```

#### 92. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L678` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L678) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L678)

```diff
-         fT && (fT.label = ZT), TT.uvSet = vT.coordinatesIndex, TT.matrix.set((0, rT.Q)(vT)), (0, LT.N)(TT, vT)
+         GB && (GB.label = mB), BB.uvSet = kB.coordinatesIndex, BB.matrix.set((0, eB.C)(kB)), (0, rB.M)(BB, kB)
```

#### 93. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L689-L692` → after: `L689-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L689-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L689-L692) · [Before (L689-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L689-L692)

```diff
-         } = TT.sampler, jT = kT === (0, LT.G)(nT) ? null : () => {
-           (0, rT.M)(lT, kT)
-         }, lT = new zT.d(WT, UT, null, nT, MT, jT, null, (0, LT.C)(HT));
-         lT.coordinatesMode = gT.e.SKYBOX_MODE, (0, LT.N)(TT, lT)
+         } = BB.sampler, aB = UB === (0, rB.D)(NB) ? null : () => {
+           (0, eB.y)(pB, UB)
+         }, pB = new nB.c(QB, jB, null, NB, dB, aB, null, (0, rB.C)(uB));
+         pB.coordinatesMode = IB.d.SKYBOX_MODE, (0, rB.M)(BB, pB)
```

#### 94. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L701)

```diff
-           wrap: jT = gT.e.CLAMP_ADDRESSMODE
+           wrap: aB = IB.d.CLAMP_ADDRESSMODE
```

#### 95. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L703)

```diff
-         const lT = new MT.b(UT, {
+         const pB = new dB.d(jB, {
```

#### 96. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L708-L709` → after: `L708-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L708-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L708-L709) · [Before (L708-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L708-L709)

```diff
-         const LT = (0, rT.A)(lT);
-         return (0, rT.E)(LT, lT), LT
+         const rB = (0, eB.t)(pB);
+         return (0, eB.u)(rB, pB), rB
```

#### 97. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L713)

```diff
-   41327: (TT, UT, mT) => {
+   41260: (BB, jB, zB) => {
```

#### 98. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L715-L716` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L715-L716) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L715-L716)

```diff
-       b: () => jT,
-       f: () => lT,
+       d: () => aB,
+       g: () => pB,
```

#### 99. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L719-L726` → after: `L719-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L719-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L719-L726) · [Before (L719-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L719-L726)

```diff
-     var WT = mT(41309),
-       zT = mT(40171),
-       MT = mT(40432),
-       gT = mT(40550),
-       nT = mT(41318),
-       HT = mT(40546),
-       kT = mT(37584);
-     class jT extends gT.e {
+     var QB = zB(41251),
+       nB = zB(40125),
+       dB = zB(40404),
+       IB = zB(40525),
+       NB = zB(41254),
+       uB = zB(40519),
+       UB = zB(37578);
+     class aB extends IB.c {
```

#### 100. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L734` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L734) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L734)

```diff
-         (0, kT.m)(TT), this.model = TT, null === (UT = this.onLinked) || void 0 === UT || UT.call(this, TT)
+         (0, UB.o)(BB), this.model = BB, null === (jB = this.onLinked) || void 0 === jB || jB.call(this, BB)
```

#### 101. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L761)

```diff
-         this.link(new kT.f(TT, UT, this.getTotalVertices(), new Float64Array(mT.cWT()), new Float64Array(WT.cWT())))
+         this.link(new UB.h(BB, jB, this.getTotalVertices(), new Float64Array(zB.nQB()), new Float64Array(QB.nQB())))
```

#### 102. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L765-L766` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L765-L766) · [Before (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L765-L766)

```diff
-         const UT = new jT(TT, this.KF()),
-           mT = this.vWT(void 0, !0);
+         const jB = new aB(BB, this.aY()),
+           zB = this.dQB(void 0, !0);
```

#### 103. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L781-L782` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L781-L782) · [Before (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L781-L782)

```diff
-           const LT = TT.getIsInstanced() ? (mT instanceof Array ? 4 * mT.length : mT.byteLength) / jT : this.getTotalVertices(),
-             pT = (0, zT.v)(mT, nT, HT, kT, jT, LT, !0),
+           const rB = BB.getIsInstanced() ? (zB instanceof Array ? 4 * zB.length : zB.byteLength) / aB : this.getTotalVertices(),
+             sB = (0, nB.t)(zB, NB, uB, UB, aB, rB, !0),
```

#### 104. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L791)

```diff
-           UT.setVerticesBuffer(new WT.i(this.eB(), pT, MT, BT), LT)
+           jB.setVerticesBuffer(new QB.d(this.wJ(), sB, dB, JB), rB)
```

#### 105. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L793` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L793) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L793)

```diff
-         return UT._updatable = gT, UT._boundingInfo = new MT.e(this.extend.minimum, this.extend.maximum), UT.relink(), UT
+         return jB._updatable = IB, jB._boundingInfo = new dB.c(this.extend.minimum, this.extend.maximum), jB.relink(), jB
```

#### 106. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L796-L798` → after: `L796-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L796-L798) · [Before (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L796-L798)

```diff
-         const HT = TT[0].KF(),
-           kT = new nT.d(TT[0].name + "_merged", HT),
-           lT = new jT(gT.e.RandomId(), HT, void 0, !1, kT);
+         const uB = BB[0].aY(),
+           UB = new NB.e(BB[0].name + "_merged", uB),
+           pB = new aB(IB.c.RandomId(), uB, void 0, !1, UB);
```

#### 107. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L800)

```diff
-           if (!nT.d.MergeMeshes(TT, UT, mT, kT, zT, MT)) return kT.dispose(), null
+           if (!NB.e.MergeMeshes(BB, jB, zB, UB, nB, dB)) return UB.dispose(), null
```

#### 108. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L817)

```diff
-         this.model && ((0, kT.s)(this.model), this.model = null)
+         this.model && ((0, UB.z)(this.model), this.model = null)
```

#### 109. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L822-L823` → after: `L822-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L822-L823) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L822-L823)

```diff
-       let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new nT.d(TT, mT);
-       const zT = (0, kT.k)(UT),
+       let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NB.e(BB, zB);
+       const nB = (0, UB.m)(jB),
```

#### 110. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L831-L833` → after: `L831-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L831-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L831-L833) · [Before (L831-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L831-L833)

```diff
-         ZT = new HT.d;
-       ZT.positions = MT, ZT.normals = null !== lT && void 0 !== lT ? lT : null, ZT.uvs = null !== LT && void 0 !== LT ? LT : null, ZT.indices = pT;
-       const cT = new jT(gT.e.RandomId(), mT, ZT, !1, WT);
+         mB = new uB.e;
+       mB.positions = dB, mB.normals = null !== pB && void 0 !== pB ? pB : null, mB.uvs = null !== rB && void 0 !== rB ? rB : null, mB.indices = sB;
+       const yB = new aB(IB.c.RandomId(), zB, mB, !1, QB);
```

#### 111. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L844)

```diff
-       const zT = new nT.d(TT, mT),
+       const nB = new NB.e(BB, zB),
```

#### 112. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L851)

```diff
-       return Object.assign(new HT.d, {
+       return Object.assign(new uB.e, {
```

#### 113. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L859)

```diff
-   41300: (TT, UT, mT) => {
+   41248: (BB, jB, zB) => {
```

#### 114. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L885` → after: `L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L885) · [Before (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L885)

```diff
-       e: () => WT,
+       d: () => QB,
```

#### 115. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L892)

```diff
-       const gT = null !== (WT = zT.get(TT)) && void 0 !== WT ? WT : new Map;
+       const IB = null !== (QB = nB.get(BB)) && void 0 !== QB ? QB : new Map;
```

#### 116. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/251.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/251.js#L894)

```diff
-       const nT = null !== (MT = gT.get(UT[0])) && void 0 !== MT ? MT : [];
+       const NB = null !== (dB = IB.get(jB[0])) && void 0 !== dB ? dB : [];
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L4-L6)

```diff
-   41169: (TT, UT, mT) => {
-     mT.d(UT, {
-       c: () => MT,
+   41123: (BB, jB, zB) => {
+     zB.d(jB, {
+       e: () => dB,
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L9)

```diff
-     var WT = mT(2057);
+     var QB = zB(1995);
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L17)

```diff
-       zT && (zT = !1, (0, WT.c)())
+       nB && (nB = !1, (0, QB.e)())
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L20-L22` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L20-L21) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L20-L22)

```diff
-   41163: (TT, UT, mT) => {
-     mT.d(UT, {
-       b: () => gT,
+   41117: (BB, jB, zB) => {
+     zB.d(jB, {
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L24-L31` → after: `L23-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L23-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L23-L31) · [Before (L24-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L24-L31)

```diff
-       f: () => nT
-     });
-     var WT = mT(40709),
-       zT = mT(40724);
- 
-     function MT(TT) {
-       if (TT.queries.drawCensus() < WT.Bb.BYTES) return null;
-       const UT = TT.memoryData(TT.scratch(), WT.Bb.BYTES, 4, "the draw census");
+       e: () => dB,
+       h: () => NB
+     });
+     var QB = zB(40682),
+       nB = zB(40695);
+ 
+     function dB(BB) {
+       if (BB.queries.drawCensus() < QB.Kb.BYTES) return null;
+       const jB = BB.memoryData(BB.scratch(), QB.Kb.BYTES, 4, "the draw census");
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L33-L46` → after: `L33-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L33-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L33-L46) · [Before (L33-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L33-L46)

```diff
-         terrainOpaque: WT.Bb.terrainOpaque(UT, 0),
-         terrainTransparent: WT.Bb.terrainTransparent(UT, 0),
-         terrainPack: WT.Bb.terrainPack(UT, 0),
-         earthSky: WT.Bb.earthSky(UT, 0),
-         skyMeshes: WT.Bb.skyMeshes(UT, 0),
-         regular: WT.Bb.regular(UT, 0),
-         thin: WT.Bb.thin(UT, 0),
-         line: WT.Bb.line(UT, 0),
-         text: WT.Bb.text(UT, 0),
-         particles: WT.Bb.particles(UT, 0),
-         terrainParts: WT.Bb.terrainParts(UT, 0),
-         terrainCompiling: WT.Bb.terrainCompiling(UT, 0),
-         ringCopiesMax: WT.Bb.ringCopiesMax(UT, 0),
-         ringBusyWrites: WT.Bb.ringBusyWrites(UT, 0)
+         terrainOpaque: QB.Kb.terrainOpaque(jB, 0),
+         terrainTransparent: QB.Kb.terrainTransparent(jB, 0),
+         terrainPack: QB.Kb.terrainPack(jB, 0),
+         earthSky: QB.Kb.earthSky(jB, 0),
+         skyMeshes: QB.Kb.skyMeshes(jB, 0),
+         regular: QB.Kb.regular(jB, 0),
+         thin: QB.Kb.thin(jB, 0),
+         line: QB.Kb.line(jB, 0),
+         text: QB.Kb.text(jB, 0),
+         particles: QB.Kb.particles(jB, 0),
+         terrainParts: QB.Kb.terrainParts(jB, 0),
+         terrainCompiling: QB.Kb.terrainCompiling(jB, 0),
+         ringCopiesMax: QB.Kb.ringCopiesMax(jB, 0),
+         ringBusyWrites: QB.Kb.ringBusyWrites(jB, 0)
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L66)

```diff
-       const TT = (0, zT.i)();
+       const BB = (0, nB.g)();
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L84)

```diff
-           value: `${gT(UT)}`
+           value: `${IB(jB)}`
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L87)

```diff
-           value: `${mT} opaque / ${WT} transparent (${zT} shader pack)`
+           value: `${zB} opaque / ${QB} transparent (${nB} shader pack)`
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L90)

```diff
-           value: `${kT} / ${jT}`
+           value: `${UB} / ${aB}`
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L93)

```diff
-           value: `${LT} / ${lT}`
+           value: `${rB} / ${pB}`
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L96)

```diff
-           value: `${nT+HT} / ${pT}`
+           value: `${NB+uB} / ${sB}`
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L101-L113` → after: `L101-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L101-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L101-L113) · [Before (L101-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L101-L113)

```diff
-   41153: (TT, UT, mT) => {
-     mT.d(UT, {
-       d: () => BT,
-       f: () => LT,
-       i: () => pT
-     });
-     var WT = mT(2060),
-       zT = mT(1392),
-       MT = mT(40724),
-       gT = mT(40752),
-       nT = mT(40756),
-       HT = mT(40780);
-     const kT = new zT.d;
+   41096: (BB, jB, zB) => {
+     zB.d(jB, {
+       e: () => JB,
+       i: () => rB,
+       k: () => sB
+     });
+     var QB = zB(2002),
+       nB = zB(1319),
+       dB = zB(40695),
+       IB = zB(40709),
+       NB = zB(40713),
+       uB = zB(40725);
+     const UB = new nB.c;
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L117)

```diff
-       const UT = (0, MT.i)();
+       const jB = (0, dB.g)();
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L122)

```diff
-       jT || (jT = !0, (0, HT.m)(gT.m, (TT => {
+       aB || (aB = !0, (0, uB.l)(IB.j, (BB => {
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L124-L125)

```diff
-         const WT = (0, nT.h)(gT.m, TT);
-         if (!(0, nT.d)(WT)) return;
+         const QB = (0, NB.d)(IB.j, BB);
+         if (!(0, NB.c)(QB)) return;
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L127-L131` → after: `L127-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L127-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L127-L131) · [Before (L127-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L127-L131)

```diff
-         lT(zT.XT) && pT(zT.IT, {
-           icon: zT.VU,
-           level: zT.CU,
-           displayName: null !== (UT = zT.QT) && void 0 !== UT ? UT : null,
-           durationMs: null !== (mT = zT.uU) && void 0 !== mT ? mT : null
+         pB(nB.VB) && sB(nB.hB, {
+           icon: nB.ej,
+           level: nB.wj,
+           displayName: null !== (jB = nB.XB) && void 0 !== jB ? jB : null,
+           durationMs: null !== (zB = nB.lj) && void 0 !== zB ? zB : null
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L133-L135` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L133-L135) · [Before (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L133-L135)

```diff
-       })), (0, HT.m)(gT.U, (TT => {
-         const UT = (0, nT.h)(gT.U, TT);
-         if (!(0, nT.d)(UT)) return;
+       })), (0, uB.l)(IB.M, (BB => {
+         const jB = (0, NB.d)(IB.M, BB);
+         if (!(0, NB.c)(jB)) return;
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L137-L139` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L137-L139) · [Before (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L137-L139)

```diff
-         lT(mT.XT) && WT.b.remove(mT.IT)
-       })), (0, HT.h)((() => {
-         WT.b.clear()
+         pB(zB.VB) && QB.c.remove(zB.hB)
+       })), (0, uB.e)((() => {
+         QB.c.clear()
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L144)

```diff
-       WT.b.update(TT, UT), kT.forEach((UT => {
+       QB.c.update(BB, jB), UB.forEach((jB => {
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L154-L163` → after: `L154-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L154-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L154-L163) · [Before (L154-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L154-L163)

```diff
-   41156: (TT, UT, mT) => {
-     mT.d(UT, {
-       e: () => jT
-     });
-     var WT = mT(4904),
-       zT = mT(4895),
-       MT = mT(40765),
-       gT = mT(40780);
-     const nT = new Set(WT.K),
-       HT = WT.K.map((TT => (new TextEncoder).encode(TT))),
+   41099: (BB, jB, zB) => {
+     zB.d(jB, {
+       c: () => aB
+     });
+     var QB = zB(4893),
+       nB = zB(4887),
+       dB = zB(40718),
+       IB = zB(40725);
+     const NB = new Set(QB.E),
+       uB = QB.E.map((BB => (new TextEncoder).encode(BB))),
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L169-L170` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L169-L170) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L169-L170)

```diff
-     }(0, gT.m)(WT.$b.NewOtherEntitySettings, (TT => {
-       TT.payloadKind === zT.lc.Msgpack && HT.some((UT => function(TT, UT) {
+     }(0, IB.l)(QB.Wb.NewOtherEntitySettings, (BB => {
+       BB.payloadKind === nB.fc.Msgpack && uB.some((jB => function(BB, jB) {
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L190)

```diff
-     })), (0, gT.h)((() => {
+     })), (0, IB.e)((() => {
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L194-L195` → after: `L194-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L194-L196) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L194-L195)

```diff
-   41145: (TT, UT, mT) => {
-     mT.d(UT, {
+   41090: (BB, jB, zB) => {
+     zB.d(jB, {
+       d: () => sB,
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L197-L206` → after: `L198-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L198-L206) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L197-L206)

```diff
-       h: () => kT,
-       k: () => lT
-     });
-     var WT = mT(39137),
-       zT = mT(2054),
-       MT = mT(1392),
-       gT = mT(40752),
-       nT = mT(40756),
-       HT = mT(40780);
-     const kT = new WT.e;
+       i: () => pB
+     });
+     var QB = zB(39117),
+       nB = zB(1991),
+       dB = zB(1319),
+       IB = zB(40709),
+       NB = zB(40713),
+       uB = zB(40725);
+     const UB = new QB.c;
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L212)

```diff
-     const LT = new MT.d;
+     const rB = new dB.c;
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L220-L221)

```diff
-     }(0, HT.m)(gT.bb, (TT => {
-       const UT = (0, nT.h)(gT.bb, TT);
+     }(0, uB.l)(IB.X, (BB => {
+       const jB = (0, NB.d)(IB.X, BB);
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L223)

```diff
-       const mT = UT.sT.some((TT => {
+       const zB = jB.ZB.some((BB => {
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L225-L226)

```diff
-             FT: UT,
-             PT: mT
+             AB: jB,
+             TB: zB
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L246)

```diff
-         zT.d.replaceAll(TT)
+         nB.b.replaceAll(BB)
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L252-L253` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L252-L253) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L252-L253)

```diff
-     })), (0, HT.m)(gT.Q, (TT => {
-       const UT = (0, nT.h)(gT.Q, TT);
+     })), (0, uB.l)(IB.I, (BB => {
+       const jB = (0, NB.d)(IB.I, BB);
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L256-L258` → after: `L256-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L256-L258) · [Before (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L256-L258)

```diff
-             dM: TT,
-             wM: mT,
-             tM: WT
+             Pd: BB,
+             Wd: zB,
+             ld: QB
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L269-L270` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L269-L270) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L269-L270)

```diff
-     })), (0, HT.h)((() => {
-       kT.clear(), jT = {}, zT.d.clear(), BT({
+     })), (0, uB.e)((() => {
+       UB.clear(), aB = {}, nB.b.clear(), JB({
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L273)

```diff
-     })), (0, HT.l)((() => {
+     })), (0, uB.h)((() => {
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L279-L281` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L279-L280) · [Before (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L279-L281)

```diff
-   41160: (TT, UT, mT) => {
-     mT.d(UT, {
-       b: () => dT,
+   41108: (BB, jB, zB) => {
+     zB.d(jB, {
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L283-L296` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L282-L296) · [Before (L283-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L283-L296)

```diff
-       f: () => yT,
-       i: () => XT
-     });
-     var WT = mT(1367),
-       zT = mT(643),
-       MT = mT(102),
-       gT = mT(4904),
-       nT = mT(40709),
-       HT = mT(40743),
-       kT = mT(40724),
-       jT = mT(41156),
-       lT = mT(41145),
-       LT = mT(40756),
-       pT = mT(40780);
+       e: () => yB,
+       g: () => FB,
+       j: () => YB
+     });
+     var QB = zB(1297),
+       nB = zB(644),
+       dB = zB(106),
+       IB = zB(4893),
+       NB = zB(40682),
+       uB = zB(40705),
+       UB = zB(40695),
+       aB = zB(41099),
+       pB = zB(41090),
+       rB = zB(40713),
+       sB = zB(40725);
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L341)

```diff
-       return lT.h.has(TT) ? null === (mT = lT.h.getSettings(TT)) || void 0 === mT ? void 0 : mT[UT] : (0, jT.e)(TT, UT)
+       return pB.e.has(BB) ? null === (zB = pB.e.getSettings(BB)) || void 0 === zB ? void 0 : zB[jB] : (0, aB.c)(BB, jB)
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L357)

```diff
-           lifeformType: null === TT && null !== ZT && void 0 !== ZT ? ZT : null,
+           lifeformType: null === BB && null !== mB && void 0 !== mB ? mB : null,
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L364)

```diff
-         iT = null === (UT = (0, kT.i)()) || void 0 === UT ? void 0 : UT.api,
+         gB = null === (jB = (0, UB.g)()) || void 0 === jB ? void 0 : jB.api,
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L366-L367)

```diff
-         OT = null !== (mT = lT.h.getName(cT)) && void 0 !== mT ? mT : null,
-         eT = null !== (gT = qT(cT, "hideNameSeed")) && void 0 !== gT ? gT : null;
+         SB = null !== (zB = pB.e.getName(yB)) && void 0 !== zB ? zB : null,
+         MB = null !== (IB = LB(yB, "hideNameSeed")) && void 0 !== IB ? IB : null;
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L372)

```diff
-         "Player" !== TT && (YT = (0, HT.j)(iT, +cT) || null), JT = zT.j.includes(TT) ? TT : null
+         "Player" !== BB && (EB = (0, uB.g)(gB, +yB) || null), iB = nB.i.includes(BB) ? BB : null
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L377-L378` → after: `L377-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L377-L378) · [Before (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L377-L378)

```diff
-         lifeformType: null === YT && null !== (nT = null !== (jT = JT) && void 0 !== jT ? jT : ZT) && void 0 !== nT ? nT : null,
-         colour: BT || qT(cT, "killfeedColour") || (bT ? vT : fT),
+         lifeformType: null === EB && null !== (NB = null !== (aB = iB) && void 0 !== aB ? aB : mB) && void 0 !== NB ? NB : null,
+         colour: JB || LB(yB, "killfeedColour") || (tB ? kB : GB),
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L394-L400` → after: `L394-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L394-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L394-L400) · [Before (L394-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L394-L400)

```diff
-       JT || (JT = !0, (0, pT.m)(gT.$b.PlayerKilled, (TT => {
-         const UT = (0, LT.k)(TT);
-         (0, LT.d)(UT) && xT((() => BT(UT)))
-       })), (0, pT.m)(gT.$b.CustomKillfeed, (TT => {
-         const UT = (0, LT.k)(TT);
-         (0, LT.d)(UT) && (0, LT.d)(UT.killer) && (0, LT.d)(UT.victim) && xT((() => ZT(UT)))
-       })), (0, pT.h)((() => {
+       iB || (iB = !0, (0, sB.l)(IB.Wb.PlayerKilled, (BB => {
+         const jB = (0, rB.e)(BB);
+         (0, rB.c)(jB) && qB((() => JB(jB)))
+       })), (0, sB.l)(IB.Wb.CustomKillfeed, (BB => {
+         const jB = (0, rB.e)(BB);
+         (0, rB.c)(jB) && (0, rB.c)(jB.killer) && (0, rB.c)(jB.victim) && qB((() => mB(jB)))
+       })), (0, sB.e)((() => {
```

#### 44. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L430)

```diff
-           const TT = (0, kT.i)();
+           const BB = (0, UB.g)();
```

#### 45. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L433)

```diff
-           for (let mT = 0; mT < 3; mT++) tT[mT] = nT.x.localPos(UT, 0, mT);
+           for (let zB = 0; zB < 3; zB++) HB[zB] = NB.w.localPos(jB, 0, zB);
```

#### 46. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L437-L439` → after: `L437-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L437-L439) · [Before (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L437-L439)

```diff
-           const TT = (0, kT.i)();
-           if (null === TT || nT.x.targetBlockId(TT.api.apiView, 0) === nT.Wc) return null;
-           for (let UT = 0; UT < 3; UT++) aT[UT] = nT.x.targetBlock(TT.api.apiView, 0, UT);
+           const BB = (0, UB.g)();
+           if (null === BB || NB.w.targetBlockId(BB.api.apiView, 0) === NB.ld) return null;
+           for (let jB = 0; jB < 3; jB++) DB[jB] = NB.w.targetBlock(BB.api.apiView, 0, jB);
```

#### 47. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L444-L446` → after: `L444-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L444-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L444-L446) · [Before (L444-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L444-L446)

```diff
-   39137: (TT, UT, mT) => {
-     mT.d(UT, {
-       e: () => WT
+   39117: (BB, jB, zB) => {
+     zB.d(jB, {
+       c: () => QB
```

#### 48. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L458-L459` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L458-L459) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L458-L459)

```diff
-         for (const WT of TT.sT) {
-           let TT = this.members.get(WT.FT);
+         for (const QB of BB.ZB) {
+           let BB = this.members.get(QB.AB);
```

#### 49. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L463-L464` → after: `L463-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L463-L464) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L463-L464)

```diff
-             }, this.members.set(WT.FT, TT), UT.added.push(WT.FT)), null !== WT.PT && (TT.name = WT.PT), null !== WT.VT || WT.uT.length > 0) {
-             const mT = null === WT.VT ? {} : JSON.parse(WT.VT);
+             }, this.members.set(QB.AB, BB), jB.added.push(QB.AB)), null !== QB.TB && (BB.name = QB.TB), null !== QB.PB || QB.WB.length > 0) {
+             const zB = null === QB.PB ? {} : JSON.parse(QB.PB);
```

#### 50. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L466)

```diff
-             for (const UT of WT.uT) delete TT.settings[UT], mT[UT] = void 0;
+             for (const jB of QB.WB) delete BB.settings[jB], zB[jB] = void 0;
```

#### 51. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L468)

```diff
-               playerId: WT.FT,
+               playerId: QB.AB,
```

#### 52. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L473` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L473) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L473)

```diff
-         for (const WT of TT.CT) {
+         for (const QB of BB.eB) {
```

#### 53. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L478)

```diff
-             name: null !== (mT = TT.name) && void 0 !== mT ? mT : void 0
+             name: null !== (zB = BB.name) && void 0 !== zB ? zB : void 0
```

#### 54. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/252.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/252.js#L491)

```diff
-         return null !== (UT = null === (mT = this.members.get(TT)) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : void 0
+         return null !== (jB = null === (zB = this.members.get(BB)) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : void 0
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/253.js#L4)

```diff
-   39890: (TT, UT, mT) => {
+   39882: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/253.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/253.js#L8-L10)

```diff
-     var WT = mT(4959),
-       zT = mT(36855),
-       MT = mT(1302);
+     var QB = zB(4950),
+       nB = zB(36830),
+       dB = zB(1244);
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/253.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/253.js#L18)

```diff
-         src: [`${MT.clientSideServerUrls.staticUrl}/sounds/music/${TT}.mp3`],
+         src: [`${dB.clientSideServerUrls.staticUrl}/sounds/music/${BB}.mp3`],
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L24-L27` → after: `L24-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/253.js#L24-L27) · [Before (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/253.js#L24-L27)

```diff
-         jT = (0, zT.i)(TT);
-         const UT = (0, zT.h)(jT),
-           mT = null !== (pT = UT.sprite[TT]) && void 0 !== pT ? pT : null;
-         if (!mT) throw new Error(`Docs sound ${TT} is not in sprite sheet ${jT}`);
+         aB = (0, nB.k)(BB);
+         const jB = (0, nB.g)(aB),
+           zB = null !== (sB = jB.sprite[BB]) && void 0 !== sB ? sB : null;
+         if (!zB) throw new Error(`Docs sound ${BB} is not in sprite sheet ${aB}`);
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/253.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/253.js#L47)

```diff
-           console.error(`Could not play docs sound ${TT}`, mT), vT(!0)
+           console.error(`Could not play docs sound ${BB}`, zB), kB(!0)
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/253.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/253.js#L64)

```diff
-         Aq: () => {
+         iG: () => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/254.js#L4)

```diff
-   39900: (TT, UT, mT) => {
+   39889: (BB, jB, zB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L29` → after: `L8-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/254.js#L8-L29) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/254.js#L8-L29)

```diff
-     mT(6530);
-     var WT = mT(63),
-       zT = mT(39907),
-       MT = mT(40192),
-       gT = mT(40316),
-       nT = mT(40362),
-       HT = mT(40379),
-       kT = mT(37364),
-       jT = mT(37185),
-       lT = mT(40526),
-       LT = mT(40574),
-       pT = (mT(40611), mT(1321)),
-       BT = mT(208),
-       ZT = mT(1288),
-       cT = mT(25),
-       vT = mT(2856),
- ... (6 more removed lines; see GitHub link above)
+     zB(6420);
+     var QB = zB(62),
+       nB = zB(39895),
+       dB = zB(40154),
+       IB = zB(40287),
+       NB = zB(40335),
+       uB = zB(40350),
+       UB = zB(37372),
+       aB = zB(37166),
+       pB = zB(40496),
+       rB = zB(40557),
+       sB = (zB(40584), zB(1263)),
+       JB = zB(214),
+       mB = zB(1240),
+       yB = zB(28),
+       kB = zB(2853),
+ ... (6 more added lines; see GitHub link above)
```
