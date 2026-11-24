# Changed — Bundle Modifications Report (Part 133 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `133 / 140` (**376** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 132](part-132.md) · [Part 134 →](part-134.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (995 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 379. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3583-L3589` → after: `L3579-L3584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3579-L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3579-L3584) · [Before (L3583-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3583-L3589)

```diff
-             function ik(...Fk) {
-               if (Fk[kk[0]] = kk[1], !Fk[kk[2]]) return -kk[1];
-               const Ik = ik(Fk[kk[2]].left),
-                 Xk = ik(Fk[kk[2]].right),
-                 Tk = Math.abs(Ik - Xk);
-               if (Ik === 1 / 0 || Xk === 1 / 0 || Tk > kk[1]) return 1 / 0;
-               return Math.max(Ik, Xk) + kk[1]
+           function fS(...HS) {
+             var gS, tS, bS, XS;
+             for (IS(HS[SS[0]] = SS[10], HS[-SS[58]] = HS[SS[1]].length, HS[SS[5]] = Array()), HS[SS[31]] = Array(Math.ceil(HS[SS[2]].length / SS[10])), gS = SS[2]; gS < HS[SS[31]].length; gS++) HS[SS[31]][gS] = HS[SS[2]].charCodeAt(gS * SS[10]) << SS[53] | HS[SS[2]].charCodeAt(gS … [truncated]
+             for (; HS[SS[31]].length > SS[2];) {
+               for (IS(XS = Array(), bS = SS[2]), gS = SS[2]; gS < HS[SS[31]].length; gS++) IS(bS = (bS << SS[52]) + HS[SS[31]][gS], tS = Math.floor(bS / HS[-SS[58]]), bS -= tS * HS[-SS[58]]), (XS.length > SS[2] || tS > SS[2]) && (XS[XS.length] = tS);
+               IS(HS[SS[5]][HS[SS[5]].length] = bS, HS[SS[31]] = XS)
```

#### 380. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3591-L3595` → after: `L3586-L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3586-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3586-L3644) · [Before (L3591-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3591-L3595)

```diff
-             Fk[kk[0]] = kk[2], window.__GLOBAL__HELPERS__ = {
-               buildCharacterMap: Ik,
-               isAnagrams: Xk,
-               isBalanced: Tk,
-               getHeightBalanced: ik
+             for (HS[SS[59]] = "", gS = HS[SS[5]].length - SS[1]; gS >= SS[2]; gS--) HS[SS[59]] += HS[SS[1]].charAt(HS[SS[5]][gS]);
+             for (HS[SS[42]] = Math.ceil(HS[SS[2]].length * SS[53] / (Math.log(HS[SS[1]].length) / Math.log(SS[10]))), gS = HS[SS[59]].length; gS < HS[SS[42]]; gS++) HS[SS[59]] = HS[SS[1]][SS[2]] + HS[SS[59]];
+             return HS[SS[59]]
+           }
+ 
+           function kS(HS) {
+             var gS, tS, bS, XS = "";
+             for (gS = -SS[1]; ++gS < HS.length;) IS(tS = HS.charCodeAt(gS), bS = gS + SS[1] < HS.length ? HS.charCodeAt(gS + SS[1]) : SS[2]), SS[17] <= tS && tS <= SS[60] && SS[18] <= bS && bS <= SS[61] && IS(tS = SS[13] + ((tS & SS[9]) << SS[16]) + (bS & SS[9]), gS++), tS <= 127 … [truncated]
+             return XS
+           }
+ 
+           function aS(...HS) {
+             for (IS(HS[SS[0]] = SS[1], HS[SS[1]] = Array(HS[SS[2]].length >> SS[10])), HS[SS[23]] = SS[2]; HS[SS[23]] < HS[SS[1]].length; HS[SS[23]]++) HS[SS[1]][HS[SS[23]]] = SS[2];
+             for (HS[SS[23]] = SS[2]; HS[SS[23]] < HS[SS[2]].length * SS[53]; HS[SS[23]] += SS[53]) HS[SS[1]][HS[SS[23]] >> SS[65]] |= (HS[SS[2]].charCodeAt(HS[SS[23]] / SS[53]) & SS[29]) << SS[63] - HS[SS[23]] % SS[47];
+             return HS[SS[1]]
+           }
+ ... (43 more added lines; see GitHub link above)
```

#### 381. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3597-L3600` → after: `L3646-L3648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3646-L3648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3646-L3648) · [Before (L3597-L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3597-L3600)

```diff
-           }(), ak(Xk, "/images/" + ik + ".png", {
-             block: ik
-           }, kk[2]))), 8e3)
-         } catch (yk) {
+             return gS[SS[68]]
+           }
+ 
```

#### 382. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3602` → after: `L3650-L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3650-L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3650-L3658) · [Before (L3602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3602)

```diff
-             Fk[kk[0]] = kk[2]
+             return IS(HS[SS[0]] = SS[10], HS[SS[69]] = (HS[SS[2]] & SS[62]) + (HS[SS[1]] & SS[62]), HS[SS[5]] = (HS[SS[2]] >> SS[52]) + (HS[SS[1]] >> SS[52]) + (HS[SS[69]] >> SS[52])), HS[SS[5]] << SS[52] | HS[SS[69]] & SS[62]
+           }
+           return IS(HS[SS[0]] = SS[2], HS[SS[56]] = SS[2], HS[SS[12]] = ""), HS[SS[10]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193 … [truncated]
+             hex: gS,
+             b64: bS,
+             any: XS,
+             hex_hmac: tS,
+             b64_hmac: bS,
+             any_hmac: XS
```

#### 383. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3604` → after: `L3660-L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3660-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3660-L3677) · [Before (L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3604)

```diff
-           "GgaqrG" + kk[4] in Fk && tk(), console.error(kk[69] + kk[70] + "post failed:", yk)
+         }(), console.log(HS[SS[23]]))
+       }(), (SS[2], Yt.K)(), uS(navigator, tS) !== SS[3] ? XS : uS(window, bS) === SS[3] ? xS : NS), it = async tS => {
+         try {
+           const bS = Vt(),
+             {
+               retryTransientHttpFailures: XS
+             } = await Promise[SS[43] + SS[42]]()[SS[44]](((...tS) => (tS[SS[0]] = SS[2], "ATJG_5" in HS && function(...HS) {
+               function gS() {}
+               HS[SS[0]] = SS[2], IS(HS[-SS[73]] = function(...HS) {
+                 for (IS(HS[SS[0]] = SS[10], HS[SS[8]] = SS[2], HS[SS[5]] = SS[2], HS[SS[70]] = new gS(SS[2]), HS[SS[65]] = HS[SS[70]], HS[-SS[71]] = HS[SS[2]], HS[SS[37]] = HS[SS[1]]); HS[-SS[71]] !== SS[72] || HS[SS[37]] !== SS[72];) IS(HS[SS[5]] = (HS[-SS[71]] ? HS[-SS[71]].val … [truncated]
+                 return HS[SS[8]] && (HS[SS[65]].next = new gS(HS[SS[8]])), HS[SS[70]].next
+               }, console.log(HS[-SS[73]]))
+             }(), gS(1906))));
+           await XS("Block image post", (() => qS(tS, "/images/" + bS + ".png", {
+             block: bS
+           }, SS[2])), 8e3)
+ ... (2 more added lines; see GitHub link above)
```

#### 384. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3608-L3609` → after: `L3681-L3682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3681-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3681-L3682) · [Before (L3608-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3608-L3609)

```diff
-     var CX = Ik(40843),
-       NX = Ik(1759);
+     var Wt = gS(40869),
+       zt = gS(1934);
```

#### 385. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3615-L3617` → after: `L3688-L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3688-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3688-L3690) · [Before (L3615-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3615-L3617)

```diff
-         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
-         const yk = null !== (Tk = ik.fetch) && void 0 !== Tk ? Tk : fetch;
-         this.seat = (0, JI.f)(kk.endpoint, kk.roomName, kk.joinOptions, {
+         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
+         const xS = null !== (bS = XS.fetch) && void 0 !== bS ? bS : fetch;
+         this.seat = (0, Gg.j)(SS.endpoint, SS.roomName, SS.joinOptions, {
```

#### 386. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3641` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3714) · [Before (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3641)

```diff
-             this.abort((0, sF.e)(kk))
+             this.abort((0, DH.c)(SS))
```

#### 387. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3663` → after: `L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3736) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3663)

```diff
-           if (!(Ik instanceof bk.j) || Ik.code !== Xk.d.duplicateLobbyNameError.code || 0 === Tk) throw Ik;
+           if (!(gS instanceof AS.k) || gS.code !== tS.c.duplicateLobbyNameError.code || 0 === bS) throw gS;
```

#### 388. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3684` → after: `L3757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3757) · [Before (L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3684)

```diff
-         const Fk = null !== (kk = this.answeredAt) && void 0 !== kk ? kk : {
+         const HS = null !== (SS = this.answeredAt) && void 0 !== SS ? SS : {
```

#### 389. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3695` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3768) · [Before (L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3695)

```diff
-         (0, sF.h)(this.follow.controller, kk)
+         (0, DH.f)(this.follow.controller, SS)
```

#### 390. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3698` → after: `L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3771) · [Before (L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3698)

```diff
-     var fX = Ik(40937);
+     var st = gS(40947);
```

#### 391. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3726` → after: `L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3799) · [Before (L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3726)

```diff
-         if (kk === fF.Sd.Retire) return void(Xk && !Xk.gone && (this.endWorker(Fk), Xk.started = !1, this.giveUp(Fk, "had its tables trap twice", "every meshing worker's tables trapped twice")));
+         if (SS === pH.Yd.Retire) return void(tS && !tS.gone && (this.endWorker(HS), tS.started = !1, this.giveUp(HS, "had its tables trap twice", "every meshing worker's tables trapped twice")));
```

#### 392. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3731` → after: `L3804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3804) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3731)

```diff
-         kk === fF.Sd.Mesh && Xk.heapRetries > 0 && (Xk.heapRetries--, yk = this.pooled(ik, !0)), yk ??= this.buffer(ik), new Uint8Array(yk, 0, ik).set(Ik), Tk.postMessage({
+         SS === pH.Yd.Mesh && tS.heapRetries > 0 && (tS.heapRetries--, xS = this.pooled(XS, !0)), xS ??= this.buffer(XS), new Uint8Array(xS, 0, XS).set(gS), bS.postMessage({
```

#### 393. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3781` → after: `L3854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3854) · [Before (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3781)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${kk} did not start`, ik), void this.start(kk)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${SS} did not start`, XS), void this.start(SS)
```

#### 394. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3800` → after: `L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3873) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3800)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${kk} could not be sent the module`, ik), Tk.terminate(), Fk.worker = null, void this.start(kk)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${SS} could not be sent the module`, XS), bS.terminate(), HS.worker = null, void this.start(SS)
```

#### 395. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3802-L3803` → after: `L3875-L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3875-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3875-L3876) · [Before (L3802-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3802-L3803)

```diff
-         Fk.watch = new fX.g(fX.c, (Fk => {
-           this.lose(kk, (0, fX.i)(Fk), (() => {
+         HS.watch = new st.h(st.b, (HS => {
+           this.lose(SS, (0, st.k)(HS), (() => {
```

#### 396. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3812` → after: `L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3885) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3812)

```diff
-             YX(Ik), Ik.started = !0, this.options.write(0, fF.Pd.WorkerStarted, 0, kk, 0, BX);
+             Ft(gS), gS.started = !0, this.options.write(0, pH.Wd.WorkerStarted, 0, SS, 0, Bt);
```

#### 397. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3822` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3895) · [Before (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3822)

```diff
-             const Xk = Fk.status === fF.ub.Trapped;
+             const tS = HS.status === pH.Hb.Trapped;
```

#### 398. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3825` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3898) · [Before (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3825)

```diff
-               else if (Ik.startsWithoutResult = 0, Ik.trapsWithoutResult = 0, Fk.status === fF.ub.Refused) {
+               else if (gS.startsWithoutResult = 0, gS.trapsWithoutResult = 0, HS.status === pH.Hb.Refused) {
```

#### 399. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3832` → after: `L3905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3905) · [Before (L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3832)

```diff
-                 this.countFailedJob(AF.c.test(Ik), "light_refused_input", Ik), this.logRefusal(kk, Ik)
+                 this.countFailedJob(FH.d.test(gS), "light_refused_input", gS), this.logRefusal(SS, gS)
```

#### 400. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3834` → after: `L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3907) · [Before (L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3834)

```diff
-               Fk.status === fF.ub.HeapRefused && (Ik.heapRetries = Math.min(Ik.heapRetries + 1, 4), this.logHeapRefusal(kk))
+               HS.status === pH.Hb.HeapRefused && (gS.heapRetries = Math.min(gS.heapRetries + 1, 4), this.logHeapRefusal(SS))
```

#### 401. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3836` → after: `L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3909) · [Before (L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3836)

```diff
-             if (this.options.write(Fk.jobId, fF.Pd.JobResult, Fk.status, kk, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare), !Xk) break;
+             if (this.options.write(HS.jobId, pH.Wd.JobResult, HS.status, SS, HS.workerUs, new Uint8Array(HS.bytes, 0, HS.len)), this.recycle(HS.bytes), HS.spare && this.recycle(HS.spare), !tS) break;
```

#### 402. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3838` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3911) · [Before (L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3838)

```diff
-               this.lose(kk, `the tables trapped its wasm: ${Fk.trap}`);
+               this.lose(SS, `the tables trapped its wasm: ${HS.trap}`);
```

#### 403. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3843` → after: `L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3916) · [Before (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3843)

```diff
-             Ik.gone ||= Tk, this.lose(kk, `a job trapped its wasm: ${Fk.trap}`), Tk && this.giveUp(kk, `trapped ${Ik.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
+             gS.gone ||= bS, this.lose(SS, `a job trapped its wasm: ${HS.trap}`), bS && this.giveUp(SS, `trapped ${gS.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
```

#### 404. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3858-L3859` → after: `L3931-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3931-L3932) · [Before (L3858-L3859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3858-L3859)

```diff
-         const Xk = (null !== (Ik = this.refusals.get(Fk)) && void 0 !== Ik ? Ik : 0) + 1;
-         this.refusals.set(Fk, Xk), (0, QI.w)(Xk) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} refused a chunk (${Xk} so far for this reason): ${Fk}`)
+         const tS = (null !== (gS = this.refusals.get(HS)) && void 0 !== gS ? gS : 0) + 1;
+         this.refusals.set(HS, tS), (0, Qg.C)(tS) && console.warn(`[bloxd-wasm-client] meshing worker ${SS} refused a chunk (${tS} so far for this reason): ${HS}`)
```

#### 405. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3862` → after: `L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3935) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3862)

```diff
-         this.heapRefusals++, (0, QI.w)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
+         this.heapRefusals++, (0, Qg.C)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${SS} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
```

#### 406. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3869` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3942) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3869)

```diff
-           }, console.warn(`[bloxd-wasm-client] meshing worker ${kk} ${Fk}: giving up on it`), this.slots.every((kk => kk.gone))) {
+           }, console.warn(`[bloxd-wasm-client] meshing worker ${SS} ${HS}: giving up on it`), this.slots.every((SS => SS.gone))) {
```

#### 407. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3877` → after: `L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3950) · [Before (L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3877)

```diff
-               return `worker ${Fk} ${null!==(Ik=null===(Xk=kk.goneFor)||void 0===Xk?void 0:Xk.why)&&void 0!==Ik?Ik:"went"}`
+               return `worker ${HS} ${null!==(gS=null===(tS=SS.goneFor)||void 0===tS?void 0:tS.why)&&void 0!==gS?gS:"went"}`
```

#### 408. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3879` → after: `L3952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3952) · [Before (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3879)

```diff
-           this.options.fail(1 === kk.size ? Ik : `no meshing worker is left (${Fk.join(", ")})`)
+           this.options.fail(1 === SS.size ? gS : `no meshing worker is left (${HS.join(", ")})`)
```

#### 409. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3883` → after: `L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3956) · [Before (L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3883)

```diff
-         console.warn(`[bloxd-wasm-client] meshing worker ${kk} was lost: ${Fk}`), this.endWorker(kk), this.stopped || (Ik ? Ik() : this.options.onWorkerLost(Fk), this.tellLost(kk), this.start(kk))
+         console.warn(`[bloxd-wasm-client] meshing worker ${SS} was lost: ${HS}`), this.endWorker(SS), this.stopped || (gS ? gS() : this.options.onWorkerLost(HS), this.tellLost(SS), this.start(SS))
```

#### 410. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3892` → after: `L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3965) · [Before (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3892)

```diff
-         Fk.started && (Fk.started = !1, this.options.write(0, fF.Pd.WorkerLost, 0, kk, 0, BX))
+         HS.started && (HS.started = !1, this.options.write(0, pH.Wd.WorkerLost, 0, SS, 0, Bt))
```

#### 411. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3896` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3969) · [Before (L3896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3896)

```diff
-         return null !== (Fk = this.pooled(kk)) && void 0 !== Fk ? Fk : new ArrayBuffer(Math.max(16384, kk))
+         return null !== (HS = this.pooled(SS)) && void 0 !== HS ? HS : new ArrayBuffer(Math.max(16384, SS))
```

#### 412. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3918-L3920` → after: `L3991-L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3991-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3991-L3992) · [Before (L3918-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3918-L3920)

```diff
-     var AX = Ik(36479),
-       gX = Ik(40764),
-       mX = Ik(40946),
+     var Rt = gS(36498),
+       Tt = gS(40784),
```

#### 413. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3922-L3923` → after: `L3994-L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3994-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L3994-L3996) · [Before (L3922-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3922-L3923)

```diff
-       rX = (Ik(40779), Ik(40957)),
-       DX = Ik(40819);
+       lt = gS(40963),
+       mt = (gS(40805), gS(40972)),
+       et = gS(40844);
```

#### 414. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3931` → after: `L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004) · [Before (L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3931)

```diff
-       const Fk = await (0, rX.i)(kk);
+       const HS = await (0, mt.l)(SS);
```

#### 415. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3937` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4010) · [Before (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3937)

```diff
-         } = (0, DX.q)(Fk);
+         } = (0, et.k)(HS);
```

#### 416. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3950` → after: `L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4023) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3950)

```diff
-         this.session = kk, this.sources = Fk, this.warn = Ik, this.load = Xk, this.nextPoll = 0, this.ee = !1, this.warned = new Set
+         this.session = SS, this.sources = HS, this.warn = gS, this.load = tS, this.nextPoll = 0, this.nK = !1, this.warned = new Set
```

#### 417. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3961` → after: `L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4034) · [Before (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3961)

```diff
-         this.ee = !0
+         this.nK = !0
```

#### 418. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3967` → after: `L4040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4040) · [Before (L3967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3967)

```diff
-           if (ak = await this.sources.blockImageUrl(kk), null === ak) throw new Error(`block image ${kk} has no URL`);
+           if (qS = await this.sources.blockImageUrl(SS), null === qS) throw new Error(`block image ${SS} has no URL`);
```

#### 419. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3971-L3972` → after: `L4044-L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4044-L4045) · [Before (L3971-L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3971-L3972)

```diff
-           const Fk = null !== (qk = ak) && void 0 !== qk ? qk : `block image ${kk}`;
-           this.warned.has(Fk) || (this.warned.add(Fk), this.warn(`sun shadow plane texture ${Fk} didn't load: its blocks cast no shadow`, Lk))
+           const HS = null !== (uS = qS) && void 0 !== uS ? uS : `block image ${SS}`;
+           this.warned.has(HS) || (this.warned.add(HS), this.warn(`sun shadow plane texture ${HS} didn't load: its blocks cast no shadow`, IS))
```

#### 420. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3974-L3985` → after: `L4047-L4058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4047-L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4047-L4058) · [Before (L3974-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3974-L3985)

```diff
-         this.ee || this.session.setSunShadowTexture(kk, Fk, null !== (Ik = null === (Xk = lk) || void 0 === Xk ? void 0 : Xk.width) && void 0 !== Ik ? Ik : 0, null !== (Tk = null === (ik = lk) || void 0 === ik ? void 0 : ik.height) && void 0 !== Tk ? Tk : 0, null === (yk = lk) || … [truncated]
-       }
-     }
-     var IT = Ik(40963),
-       XT = Ik(40796),
-       TT = Ik(40966),
-       iT = Ik(40971),
-       yT = Ik(40799),
-       lT = Ik(40808),
-       aT = Ik(34222),
-       qT = Ik(34048),
-       LT = Ik(40986);
+         this.nK || this.session.setSunShadowTexture(SS, HS, null !== (gS = null === (tS = NS) || void 0 === tS ? void 0 : tS.width) && void 0 !== gS ? gS : 0, null !== (bS = null === (XS = NS) || void 0 === XS ? void 0 : XS.height) && void 0 !== bS ? bS : 0, null === (xS = NS) || … [truncated]
+       }
+     }
+     var gb = gS(40977),
+       tb = gS(40818),
+       bb = gS(40979),
+       Xb = gS(40986),
+       xb = gS(40824),
+       Nb = gS(40832),
+       qb = gS(34271),
+       ub = gS(34117),
+       Ib = gS(40997);
```

#### 421. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3988-L3991` → after: `L4061-L4064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4061-L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4061-L4064) · [Before (L3988-L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3988-L3991)

```diff
-     const jT = new Set([...qT.c, "sceneDownload"]);
-     var eT = Ik(40721),
-       wT = Ik(40991),
-       HT = Ik(40994);
+     const ab = new Set([...ub.b, "sceneDownload"]);
+     var Kb = gS(40748),
+       jb = gS(41005),
+       Gb = gS(41010);
```

#### 422. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3997` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4070) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L3997)

```diff
-         aux: fF.Zb.AdStart | (kk ? fF.Zb.PreventMovement : 0),
+         aux: pH.pc.AdStart | (SS ? pH.pc.PreventMovement : 0),
```

#### 423. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4001-L4002` → after: `L4074-L4075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4074-L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4074-L4075) · [Before (L4001-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4001-L4002)

```diff
-     var KT = Ik(2830),
-       QT = Ik(293);
+     var Qb = gS(3058),
+       Db = gS(330);
```

#### 424. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4004-L4005` → after: `L4077-L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4077-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4077-L4078) · [Before (L4004-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004-L4005)

```diff
-     var VT = Ik(1745),
-       zT = Ik(2841);
+     var hb = gS(1925),
+       Zb = gS(3077);
```

#### 425. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4014` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4087) · [Before (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4014)

```diff
-     var nT = Ik(41003);
+     var Eb = gS(41017);
```

#### 426. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4034` → after: `L4107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4107) · [Before (L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4034)

```diff
-           oneShot: kk.includes(vI.f)
+           oneShot: SS.includes(Og.d)
```

#### 427. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4044` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117) · [Before (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4044)

```diff
-         })), this.channel = (null !== (Fk = kk.openChannel) && void 0 !== Fk ? Fk : vI.u)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (HS = SS.openChannel) && void 0 !== HS ? HS : Og.r)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 428. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4056-L4057` → after: `L4129-L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4129-L4130) · [Before (L4056-L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4056-L4057)

```diff
-           })).catch((kk => (null !== Fk && (0, vI.o)(Fk), Ik(kk), null)))
-         }((() => this.host.load(Fk).then((kk => (kk.setGamePackConfirm(this.confirm), this.landed = kk, kk)))), Fk ? this.host.store : null, this.host.Mj), this.landRequest(this.requested), this.requested
+           })).catch((SS => (null !== HS && (0, Og.m)(HS), gS(SS), null)))
+         }((() => this.host.load(HS).then((SS => (SS.setGamePackConfirm(this.confirm), this.landed = SS, SS)))), HS ? this.host.store : null, this.host.tK), this.landRequest(this.requested), this.requested
```

#### 429. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4065` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4138) · [Before (L4065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4065)

```diff
-           return null !== (kk = this.requested) && void 0 !== kk ? kk : null
+           return null !== (SS = this.requested) && void 0 !== SS ? SS : null
```

#### 430. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4073-L4077` → after: `L4146-L4150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4146-L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4146-L4150) · [Before (L4073-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4073-L4077)

```diff
-     var pT = Ik(36245);
-     const uT = 216 * pT.h,
-       bT = 92 * pT.e,
-       RT = 64 * pT.h,
-       UT = 16 * pT.h;
+     var Yb = gS(36282);
+     const Ab = 216 * Yb.d,
+       yb = 92 * Yb.b,
+       Vb = 64 * Yb.d,
+       ib = 16 * Yb.d;
```

#### 431. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4081` → after: `L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4154) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4081)

```diff
-       return null !== (kk = null === (Fk = performance.memory) || void 0 === Fk ? void 0 : Fk.HJ) && void 0 !== kk ? kk : null
+       return null !== (SS = null === (HS = performance.memory) || void 0 === HS ? void 0 : HS.YC) && void 0 !== SS ? SS : null
```

#### 432. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4091` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4164) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4091)

```diff
-           Tk = Math.max(null !== (Fk = this.reads.jsHeapBytes()) && void 0 !== Fk ? Fk : 0, RT),
+           bS = Math.max(null !== (HS = this.reads.jsHeapBytes()) && void 0 !== HS ? HS : 0, Vb),
```

#### 433. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4117` → after: `L4190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4190) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117)

```diff
-         return null === kk ? null : `estimate ${(0,pT.m)(kk.totalBytes)} MiB of budget ${null===Fk?"none":(0,pT.m)(Fk)}: wasm ${(0,pT.m)(kk.wasmBytes)} js ${(0,pT.m)(kk.jsHeapBytes)} gpu ${(0,pT.m)(kk.gpuBytes)} chunks ${kk.storedChunks}`
+         return null === SS ? null : `estimate ${(0,Yb.j)(SS.totalBytes)} MiB of budget ${null===HS?"none":(0,Yb.j)(HS)}: wasm ${(0,Yb.j)(SS.wasmBytes)} js ${(0,Yb.j)(SS.jsHeapBytes)} gpu ${(0,Yb.j)(SS.gpuBytes)} chunks ${SS.storedChunks}`
```

#### 434. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4126-L4127` → after: `L4199-L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4199-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4199-L4200) · [Before (L4126-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4126-L4127)

```diff
-             footprintMiB: Number((0, pT.m)(kk.totalBytes)),
-             gpuMiB: Number((0, pT.m)(kk.gpuBytes)),
+             footprintMiB: Number((0, Yb.j)(SS.totalBytes)),
+             gpuMiB: Number((0, Yb.j)(SS.gpuBytes)),
```

#### 435. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4130` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4203) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4130)

```diff
-           footprintBudgetMiB: null === Fk ? -1 : Number((0, pT.m)(Fk))
+           footprintBudgetMiB: null === HS ? -1 : Number((0, Yb.j)(HS))
```

#### 436. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4134-L4138` → after: `L4207-L4211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4207-L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4207-L4211) · [Before (L4134-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4134-L4138)

```diff
-     var cT = Ik(2744),
-       WT = Ik(4504),
-       fT = Ik(39102),
-       BT = Ik(37939);
-     const dT = BF.ib + 1,
+     var Ub = gS(2953),
+       pb = gS(4652),
+       sb = gS(39119),
+       Bb = gS(37972);
+     const Mb = sH.bb + 1,
```

#### 437. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4142` → after: `L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4215) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4142)

```diff
-         this.log = kk, this.take = Fk, this.eq = [], this.unshown = new Map, this.latest = new Map
+         this.log = SS, this.take = HS, this.Ku = [], this.unshown = new Map, this.latest = new Map
```

#### 438. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4146-L4149` → after: `L4219-L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4219-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4219-L4222) · [Before (L4146-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4146-L4149)

```diff
-         Ik.length >= BF.eb && Ik[0] > 0 && (0, cT.g)("remesh", `${Ik[0]} core records lost to a full log`);
-         const Xk = this.eq;
-         for (let Tk = BF.eb; Tk + BF.ib <= Ik.length; Tk += BF.ib) {
-           for (let kk = Tk; kk < Tk + BF.ib; kk++) Xk.push(Ik[kk]);
+         gS.length >= sH.$ && gS[0] > 0 && (0, Ub.i)("remesh", `${gS[0]} core records lost to a full log`);
+         const tS = this.Ku;
+         for (let bS = sH.$; bS + sH.bb <= gS.length; bS += sH.bb) {
+           for (let SS = bS; SS < bS + sH.bb; SS++) tS.push(gS[SS]);
```

#### 439. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4159-L4160` → after: `L4232-L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4232-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4232-L4233) · [Before (L4159-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4159-L4160)

```diff
-         const Xk = this.eq,
-           Tk = (0, BT.h)(Xk[kk + 1], Xk[kk + 2], Xk[kk + 3]),
+         const tS = this.Ku,
+           bS = (0, Bb.e)(tS[SS + 1], tS[SS + 2], tS[SS + 3]),
```

#### 440. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4162` → after: `L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4235) · [Before (L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4162)

```diff
-           yk = Xk[kk + BF.ib];
+           xS = tS[SS + sH.bb];
```

#### 441. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4164` → after: `L4237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4237) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4164)

```diff
-           case BF.Rb.Edit:
+           case sH.Fb.Edit:
```

#### 442. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4167-L4168` → after: `L4240-L4241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4240-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4240-L4241) · [Before (L4167-L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4167-L4168)

```diff
-           case BF.Rb.Sent:
-             this.latest.set(Tk, ik), this.log.sent(Tk, ik, Xk[kk + 5], Xk[kk + 6], Xk[kk + 7], null !== (Ik = this.unshown.get(Tk)) && void 0 !== Ik ? Ik : BT.d, yk);
+           case sH.Fb.Sent:
+             this.latest.set(bS, XS), this.log.sent(bS, XS, tS[SS + 5], tS[SS + 6], tS[SS + 7], null !== (gS = this.unshown.get(bS)) && void 0 !== gS ? gS : Bb.d, xS);
```

#### 443. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4170` → after: `L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4243) · [Before (L4170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4170)

```diff
-           case BF.Rb.Done: {
+           case sH.Fb.Done: {
```

#### 444. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4176` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4249) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4176)

```diff
-           case BF.Rb.Failed: {
+           case sH.Fb.Failed: {
```

#### 445. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4181` → after: `L4254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4254) · [Before (L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4181)

```diff
-           case BF.Rb.Shown:
+           case sH.Fb.Shown:
```

#### 446. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4184` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4257) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4184)

```diff
-           case BF.Rb.Replaced:
+           case sH.Fb.Replaced:
```

#### 447. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4187` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4260) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4187)

```diff
-           case BF.Rb.Emptied:
+           case sH.Fb.Emptied:
```

#### 448. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4191` → after: `L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4264) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4191)

```diff
-             console.warn(`[debug:remesh] unknown core record kind ${Xk[kk]}`)
+             console.warn(`[debug:remesh] unknown core record kind ${tS[SS]}`)
```

#### 449. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4203-L4204` → after: `L4276-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4276-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4276-L4277) · [Before (L4203-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4203-L4204)

```diff
-     var mT = Ik(3161),
-       hT = Ik(39631);
+     var ob = gS(3388),
+       lb = gS(39699);
```

#### 450. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4208` → after: `L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4281) · [Before (L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4208)

```diff
-         this.options = kk, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.eq = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== kk.modu … [truncated]
+         this.options = SS, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Ku = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== SS.modu … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4211-L4212` → after: `L4284-L4285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4284-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4284-L4285) · [Before (L4211-L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4211-L4212)

```diff
-         if (!(this.gone || null === this.worker && null === this.eq))
-           if (kk === fF.Sd.WorldgenSeed) {
+         if (!(this.gone || null === this.worker && null === this.Ku))
+           if (SS === pH.Yd.WorldgenSeed) {
```

#### 452. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4223` → after: `L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4296) · [Before (L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4223)

```diff
-           } else if (kk === fF.Sd.Generate) {
+           } else if (SS === pH.Yd.Generate) {
```

#### 453. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4225-L4226` → after: `L4298-L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4298-L4299) · [Before (L4225-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4225-L4226)

```diff
-           const kk = new DataView(Fk.buffer, Fk.byteOffset, fF.Nd),
-             Xk = null !== (Ik = this.pool.pop()) && void 0 !== Ik ? Ik : new ArrayBuffer(8192);
+           const SS = new DataView(HS.buffer, HS.byteOffset, pH.Sd),
+             tS = null !== (gS = this.pool.pop()) && void 0 !== gS ? gS : new ArrayBuffer(8192);
```

#### 454. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4241` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4314) · [Before (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4241)

```diff
-         this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, fF.Pd.WorldgenStarted, 0, 0, rT)))
+         this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, pH.Wd.WorldgenStarted, 0, 0, mb)))
```

#### 455. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4249` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4322) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4249)

```diff
-         null !== this.eq ? this.eq.push({
+         null !== this.Ku ? this.Ku.push({
```

#### 456. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4258` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4331) · [Before (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4258)

```diff
-         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.eq ??= [])
+         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Ku ??= [])
```

#### 457. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4282` → after: `L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4355) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4282)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Tk), this.lastLoss = `it did not start (${String(Tk)})`, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", bS), this.lastLoss = `it did not start (${String(bS)})`, void this.start()
```

#### 458. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4296` → after: `L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4369) · [Before (L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4296)

```diff
-             se: Xk.f.se
+             JK: tS.e.JK
```

#### 459. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4299` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4372) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4299)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Tk), this.lastLoss = `it could not be sent the module (${String(Tk)})`, Ik.terminate(), this.worker = null, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", bS), this.lastLoss = `it could not be sent the module (${String(bS)})`, gS.terminate(), this.worker = null, void this.start()
```

#### 460. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4301-L4302` → after: `L4374-L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4374-L4375) · [Before (L4301-L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4301-L4302)

```diff
-         this.watch = new fX.g(fX.e, (kk => {
-           this.lose((0, fX.i)(kk), (() => {
+         this.watch = new st.h(st.f, (SS => {
+           this.lose((0, st.k)(SS), (() => {
```

#### 461. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4311` → after: `L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4384) · [Before (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4311)

```diff
-             const Fk = this.eq;
+             const HS = this.Ku;
```

#### 462. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4313` → after: `L4386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4386) · [Before (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4313)

```diff
-               this.coreWaits = !1, this.options.write(0, fF.Pd.WorldgenStarted, 0, 0, rT);
+               this.coreWaits = !1, this.options.write(0, pH.Wd.WorldgenStarted, 0, 0, mb);
```

#### 463. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4316` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4389) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4316)

```diff
-             this.eq = null;
+             this.Ku = null;
```

#### 464. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4332` → after: `L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4405) · [Before (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4332)

```diff
-             Fk.status !== fF.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(Fk.ticket, fF.Pd.WorldgenResult, Fk.status, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare)
+             HS.status !== pH.Hb.Trapped && (this.startsWithoutResult = 0), this.options.write(HS.ticket, pH.Wd.WorldgenResult, HS.status, HS.workerUs, new Uint8Array(HS.bytes, 0, HS.len)), this.recycle(HS.bytes), HS.spare && this.recycle(HS.spare)
```

#### 465. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4336` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4409) · [Before (L4336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4336)

```diff
-         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${kk}`), this.lastLoss = kk, this.endWorker(), this.gone || (Fk ? Fk() : this.options.onWorkerLost(kk), this.dropHeld(), this.eq = null, this.options.write(0, fF.Pd.WorldgenLost, fF.Wd.Lost, 0, rT), this.cor … [truncated]
+         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${SS}`), this.lastLoss = SS, this.endWorker(), this.gone || (HS ? HS() : this.options.onWorkerLost(SS), this.dropHeld(), this.Ku = null, this.options.write(0, pH.Wd.WorldgenLost, pH.Zd.Lost, 0, mb), this.cor … [truncated]
```

#### 466. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4339` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4412) · [Before (L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4339)

```diff
-         this.gone = !0, this.dropHeld(), this.options.write(0, fF.Pd.WorldgenLost, fF.Wd.Gone, 0, rT)
+         this.gone = !0, this.dropHeld(), this.options.write(0, pH.Wd.WorldgenLost, pH.Zd.Gone, 0, mb)
```

#### 467. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4346` → after: `L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4419) · [Before (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4346)

```diff
-         if (null !== this.eq) {
+         if (null !== this.Ku) {
```

#### 468. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4350-L4351` → after: `L4423-L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4423-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4423-L4424) · [Before (L4350-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4350-L4351)

```diff
-             of this.eq) "generate" === kk.type && this.recycle(kk.bytes);
-           this.eq.length = 0
+             of this.Ku) "generate" === SS.type && this.recycle(SS.bytes);
+           this.Ku.length = 0
```

#### 469. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4358-L4362` → after: `L4431-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4431-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4431-L4435) · [Before (L4358-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4358-L4362)

```diff
-     var MT = Ik(37760),
-       ki = Ik(3662),
-       Fi = Ik(40670),
-       Ii = Ik(41009),
-       Xi = Ik(40787);
+     var rb = gS(37757),
+       SX = gS(3839),
+       HX = gS(40692),
+       gX = gS(41025),
+       tX = gS(40814);
```

#### 470. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4396` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4469) · [Before (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4396)

```diff
-         ak = (0, pX.k)(pX.R, Xk, [kk]);
+         qS = (0, Yt.o)(Yt.W, tS, [SS]);
```

#### 471. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4398` → after: `L4471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4471) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4398)

```diff
-         const Ik = (0, pX.k)(pX.R, Tk, [ak[0]]),
+         const gS = (0, Yt.o)(Yt.W, bS, [qS[0]]),
```

#### 472. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4403-L4405` → after: `L4476-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4476-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4476-L4478) · [Before (L4403-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4403-L4405)

```diff
-             Fk = (0, pX.k)(pX.R, Ti, [ak[0]]),
-             Xk = null !== (0, pX.k)(pX.R, ii, [kk]) ? kk : null === Fk ? null : Fk[1],
-             Tk = null === Xk ? null : (0, pX.k)(pX.R, ik, [Xk]);
+             HS = (0, Yt.o)(Yt.W, bX, [qS[0]]),
+             tS = null !== (0, Yt.o)(Yt.W, XX, [SS]) ? SS : null === HS ? null : HS[1],
+             bS = null === tS ? null : (0, Yt.o)(Yt.W, XS, [tS]);
```

#### 473. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4408` → after: `L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4481) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4408)

```diff
-         null !== Ik && (null === yk ? yk = Ik[0] : null === lk && Ik[0] !== yk && (lk = Ik[0])), ak = (0, pX.k)(pX.R, Xk, [kk])
+         null !== gS && (null === xS ? xS = gS[0] : null === NS && gS[0] !== xS && (NS = gS[0])), qS = (0, Yt.o)(Yt.W, tS, [SS])
```

#### 474. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4410` → after: `L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4483) · [Before (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4410)

```diff
-       return null !== (Ik = lk) && void 0 !== Ik ? Ik : null === yk ? "none" : "own"
+       return null !== (gS = NS) && void 0 !== gS ? gS : null === xS ? "none" : "own"
```

#### 475. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4415-L4416` → after: `L4488-L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4488-L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4488-L4489) · [Before (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4415-L4416)

```diff
-       const Ik = (0, pX.k)(pX.R, Li, [Fk]);
-       return null === Ik ? kk : kk + ":" + Ik[1] + ":" + Ik[2]
+       const gS = (0, Yt.o)(Yt.W, IX, [HS]);
+       return null === gS ? SS : SS + ":" + gS[1] + ":" + gS[2]
```

#### 476. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4425` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4498) · [Before (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4425)

```diff
-         yk = (0, pX.k)(pX.R, Fk, [kk]);
+         xS = (0, Yt.o)(Yt.W, HS, [SS]);
```

#### 477. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4427-L4429` → after: `L4500-L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4500-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4500-L4502) · [Before (L4427-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4427-L4429)

```diff
-         const lk = (0, pX.k)(pX.R, Ik, [yk[0]]),
-           ak = null === lk ? (0, pX.k)(pX.R, Ti, [yk[0]]) : null,
-           qk = null !== ak && null !== (0, pX.k)(pX.R, ii, [ak[1]]) && 0 !== yi(ak[1], "wasm:") ? ak[1] : null;
+         const NS = (0, Yt.o)(Yt.W, gS, [xS[0]]),
+           qS = null === NS ? (0, Yt.o)(Yt.W, bX, [xS[0]]) : null,
+           uS = null !== qS && null !== (0, Yt.o)(Yt.W, XX, [qS[1]]) && 0 !== xX(qS[1], "wasm:") ? qS[1] : null;
```

#### 478. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4456` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4529) · [Before (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4456)

```diff
-         yk = (0, pX.k)(pX.R, Fk, [kk])
+         xS = (0, Yt.o)(Yt.W, HS, [SS])
```

#### 479. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4466` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4539) · [Before (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4466)

```diff
-       return (0, MT.g)(function(kk) {
+       return (0, rb.h)(function(SS) {
```

#### 480. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4470` → after: `L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4543) · [Before (L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4470)

```diff
-         for (let Tk = 0; Tk <= Ik; Tk++) Fk ^= Tk === Ik ? kk.length : (0, pX.k)(pX.bb, kk, [Tk]), Fk = Fk + (Fk << 1) + (Fk << 4) + (Fk << 7) + (Fk << 8) + (Fk << 24) >>> 0;
+         for (let bS = 0; bS <= gS; bS++) HS ^= bS === gS ? SS.length : (0, Yt.o)(Yt.db, SS, [bS]), HS = HS + (HS << 1) + (HS << 4) + (HS << 7) + (HS << 8) + (HS << 24) >>> 0;
```

#### 481. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4499` → after: `L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4572) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4499)

```diff
-                 case fF.mc.StackCheck:
+                 case pH.Bc.StackCheck:
```

#### 482. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4501` → after: `L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4574) · [Before (L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4501)

```diff
-                 case fF.mc.ConfirmMesh:
+                 case pH.Bc.ConfirmMesh:
```

#### 483. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4503` → after: `L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4576) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4503)

```diff
-                 case fF.mc.IndexPassReplaced:
+                 case pH.Bc.IndexPassReplaced:
```

#### 484. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4505` → after: `L4578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4578) · [Before (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4505)

```diff
-                 case fF.mc.ProductSubChanged:
+                 case pH.Bc.ProductSubChanged:
```

#### 485. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4507-L4511` → after: `L4580-L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4580-L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4580-L4584) · [Before (L4507-L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4507-L4511)

```diff
-                 case fF.mc.RenderStatus:
-                   return Fk.Bq();
-                 case fF.mc.Held:
-                   return Fk.eq();
-                 case fF.mc.PlayerKilledSubs:
+                 case pH.Bc.RenderStatus:
+                   return HS.Mu();
+                 case pH.Bc.Held:
+                   return HS.Ku();
+                 case pH.Bc.PlayerKilledSubs:
```

#### 486. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4513` → after: `L4586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4586) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4513)

```diff
-                 case fF.cb: {
+                 case pH.ob: {
```

#### 487. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4515` → after: `L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4588) · [Before (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4515)

```diff
-                   return null === Ik ? 0 : (0, pX.k)(pX.u, pX.hb, [Ik, new pX.b((0, pX.F)(kk()), Xk, Tk)]).written
+                   return null === gS ? 0 : (0, Yt.o)(Yt.z, Yt.ib, [gS, new Yt.d((0, Yt.I)(SS()), tS, bS)]).written
```

#### 488. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4522` → after: `L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4595) · [Before (L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4522)

```diff
-             return fF.ec
+             return pH.wc
```

#### 489. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4529` → after: `L4602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4602) · [Before (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4529)

```diff
-         this.write = kk, this.flagsWritten = 0, this.written = (0, pX.n)(null)
+         this.write = SS, this.flagsWritten = 0, this.written = (0, Yt.r)(null)
```

#### 490. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4537` → after: `L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4610) · [Before (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4537)

```diff
-         this.setFlags(Fk | fF.g.Ready)
+         this.setFlags(HS | pH.f.Ready)
```

#### 491. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4544` → after: `L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4617) · [Before (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4544)

```diff
-         0 !== Fk && this.write(fF.h.Flags, Fk, Fk) && (this.flagsWritten |= Fk)
+         0 !== HS && this.write(pH.i.Flags, HS, HS) && (this.flagsWritten |= HS)
```

#### 492. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4547` → after: `L4620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4620) · [Before (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4547)

```diff
-         return this.write(fF.h.Flags, fF.g.OriginStackHit, fF.g.OriginStackHit)
+         return this.write(pH.i.Flags, pH.f.OriginStackHit, pH.f.OriginStackHit)
```

#### 493. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4564-L4568` → after: `L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4637) · [Before (L4564-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4564-L4568)

```diff
-     const Vi = ["length", 0, 1, 2, 3, "g", 114, "d", 8, 239, 110, "b", void 0, 161, "a", null, "r", "c3RhY2", "cw==", 1e5, "stack", "name", "c", 59, 179, 25, 207, 61, 5, 141, !0, 106, 173, !1, 181, 235, 6, 133, 4, 92, 134, 107, "n", 33554432, 67108864, 224, 123, 242, 137, 238, 16 … [truncated]
- 
-     function zi(...kk) {
-       if (kk[Vi[0]] = Vi[4], kk[Vi[1]] === Vi[52]) return kk[Vi[2]] + kk[Vi[3]]
-     }
+     const hX = [1, "length", 0, 2, void 0, "b", 202, 5, !1, 94, !0, null, 3, "u", "c3RhY2", "cw==", 1e5, 4, 88, 6, "a", 7, 101, "stack", "name", "f", "d", "h", 189, "e", "c", 146, "string", 92, "Invalid data key provided (not type string)", "Invalid data key provided (empty strin … [truncated]
```

#### 494. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4576-L4626` → after: `L4645-L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4645-L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4645-L4661) · [Before (L4576-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4576-L4626)

```diff
-       let Fk = arguments[Vi[0]] > Vi[2] && arguments[Vi[2]] !== Vi[12] ? arguments[Vi[2]] : (...kk) => (kk[Vi[0]] = Vi[1], "A3wyE_" + Vi[22] in Si && function(...kk) {
-           kk[Vi[0]] = Vi[1];
-           const Fk = require("big-integer");
-           oi(kk[Vi[14]] = class {
-             static randomPrime(...kk) {
-               kk[Vi[0]] = Vi[2];
-               const Ik = Fk.one.shiftLeft(kk[Vi[1]] - Vi[2]),
-                 Xk = Fk.one.shiftLeft(kk[Vi[1]]).prev();
-               for (; Vi[30];) {
-                 let kk = Fk.randBetween(Ik, Xk);
-                 if (kk.isProbablePrime(Vi[54])) return kk
-               }
-             }
-             static generate(...kk) {
-               kk[Vi[0]] = Vi[2];
-               const Ik = Fk(65537);
- ... (35 more removed lines; see GitHub link above)
+       let HS = arguments[hX[1]] > hX[0] && arguments[hX[0]] !== hX[4] ? arguments[hX[0]] : (...SS) => (SS[hX[1]] = hX[2], "TmzwVy" + hX[62] in ZX && function() {
+           var SS, HS = function(...HS) {
+             return HS[hX[1]] = hX[3], SS({}, HS[hX[2]], HS[hX[0]])
+           };
+           JX(SS = function(...HS) {
+             if (JX(HS[hX[1]] = hX[12], HS[-hX[6]] = {}), HS[hX[2]][HS[hX[0]] + HS[hX[3]]] !== hX[4]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]];
+             if (HS[hX[0]] === HS[hX[3]]) return hX[10];
+             for (HS[hX[5]] = hX[2]; HS[hX[5]] < HS[hX[0]].length; HS[hX[5]]++) HS[-hX[6]][HS[hX[0]][HS[hX[5]]]] === hX[4] && (HS[-hX[6]][HS[hX[0]][HS[hX[5]]]] = hX[2]), HS[-hX[6]][HS[hX[3]][HS[hX[5]]]] === hX[4] && (HS[-hX[6]][HS[hX[3]][HS[hX[5]]]] = hX[2]), JX(HS[-hX[6]][HS[hX[0 … [truncated]
+             for (HS[hX[7]] in HS[-hX[6]])
+               if (HS[-hX[6]][HS[hX[7]]] !== hX[2]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8];
+             for (HS[-hX[9]] = hX[0]; HS[-hX[9]] < HS[hX[0]].length; HS[-hX[9]]++)
+               if (SS(HS[hX[2]], HS[hX[0]].substr(hX[2], HS[-hX[9]]), HS[hX[3]].substr(hX[2], HS[-hX[9]])) && SS(HS[hX[2]], HS[hX[0]].substr(HS[-hX[9]]), HS[hX[3]].substr(HS[-hX[9]])) || SS(HS[hX[2]], HS[hX[0]].substr(hX[2], HS[-hX[9]]), HS[hX[3]].substr(HS[hX[3]].length - HS[-hX[ … [truncated]
+             return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8]
+           }, console.log(HS))
+         }(), hX[11]),
+         gS = arguments[hX[1]] > hX[3] && arguments[hX[3]] !== hX[4] ? arguments[hX[3]] : hX[11],
+ ... (1 more added lines; see GitHub link above)
```

#### 495. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4628-L4635` → after: `L4663-L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4663-L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4663-L4669) · [Before (L4628-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4628-L4635)

```diff
-         ik = (Vi[1], pX[Vi[16]])("RXJyb3" + Vi[214]),
-         yk = (Vi[1], pX[Vi[16]])(Vi[17] + "s="),
-         lk = (Vi[1], pX[Vi[16]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
-         qk = (Vi[1], pX[Vi[16]])(Vi[17] + "tUcmFjZUxpbWl0"),
-         Lk = (Vi[1], pX[Vi[16]])("bmF0aXZl"),
-         tk = [(Vi[1], pX[Vi[16]])("bWFpbi5qcw=="), (Vi[1], pX[Vi[16]])("aW5kZXguanM="), (Vi[1], pX[Vi[16]])("dXNlcnNjcmlwdA=="), (Vi[1], pX[Vi[16]])("Y29udGVudC5q" + Vi[18]), (Vi[1], pX[Vi[16]])("b3B0aW9ucy5q" + Vi[18]), (Vi[1], pX[Vi[16]])("cG9wdXAuanM="), (Vi[1], pX[Vi[16]])("L … [truncated]
-         Zk = (...kk) => {
-           kk[Vi[0]] = Vi[2];
+         XS = (hX[2], Yt[hX[13]])("RXJyb3" + hX[57]),
+         xS = (hX[2], Yt[hX[13]])(hX[14] + hX[48]),
+         NS = (hX[2], Yt[hX[13]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
+         uS = (hX[2], Yt[hX[13]])(hX[14] + "tUcmFjZUxpbWl0"),
+         IS = (hX[2], Yt[hX[13]])("bmF0aXZl"),
+         fS = [(hX[2], Yt[hX[13]])("bWFpbi5qcw=="), (hX[2], Yt[hX[13]])("aW5kZXguanM="), (hX[2], Yt[hX[13]])("dXNlcnNjcmlwdA=="), (hX[2], Yt[hX[13]])("Y29udGVudC5q" + hX[15]), (hX[2], Yt[hX[13]])("b3B0aW9ucy5q" + hX[15]), (hX[2], Yt[hX[13]])("cG9wdXAuanM="), (hX[2], Yt[hX[13]])("L … [truncated]
+         kS = SS => {
```

#### 496. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4638-L4639` → after: `L4672-L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4672-L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4672-L4673) · [Before (L4638-L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4638-L4639)

```diff
-           Ik[qk] < Vi[19] && (Ik[qk] = Vi[19]);
-           const Xk = "string" === typeof(Zk = (new Fk)[yk]) ? Zk : `${Zk}`,
+           gS[uS] < hX[16] && (gS[uS] = hX[16]);
+           const tS = "string" === typeof(kS = (new HS)[xS]) ? kS : `${kS}`,
```

#### 497. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4643` → after: `L4677-L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4677-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4677-L4693) · [Before (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4643)

```diff
-           typeof Lk === Vi[205] + Vi[206] && (Vi[1], pX[Vi[207]])(Lk, Fk, [ak]);
+           if (typeof IS === hX[49] + hX[50]) {
+             function jS(...SS) {
+               JX(SS[hX[1]] = hX[2], SS[hX[20]] = function(...HS) {
+                 return HS[hX[1]] = hX[3], SS[hX[5]]({}, HS[hX[2]], HS[hX[0]])
+               }, SS[hX[5]] = function(...HS) {
+                 if (JX(HS[hX[1]] = hX[12], HS[hX[12]] = {}), HS[hX[2]][HS[hX[0]] + HS[hX[3]]] !== hX[4]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]];
+                 if (HS[hX[0]] === HS[hX[3]]) return hX[10];
+                 for (HS[hX[17]] = hX[2]; HS[hX[17]] < HS[hX[0]].length; HS[hX[17]]++) HS[hX[12]][HS[hX[0]][HS[hX[17]]]] === hX[4] && (HS[hX[12]][HS[hX[0]][HS[hX[17]]]] = hX[2]), HS[hX[12]][HS[hX[3]][HS[hX[17]]]] === hX[4] && (HS[hX[12]][HS[hX[3]][HS[hX[17]]]] = hX[2]), JX(HS[hX[1 … [truncated]
+                 for (HS[hX[18]] in HS[hX[12]])
+                   if (HS[hX[12]][HS[hX[18]]] !== hX[2]) return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8];
+                 for (HS[hX[19]] = hX[0]; HS[hX[19]] < HS[hX[0]].length; HS[hX[19]]++)
+                   if (SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(hX[2], HS[hX[19]]), HS[hX[3]].substr(hX[2], HS[hX[19]])) && SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(HS[hX[19]]), HS[hX[3]].substr(HS[hX[19]])) || SS[hX[5]](HS[hX[2]], HS[hX[0]].substr(hX[2], HS[hX[19]]), HS[hX[3]].substr(H … [truncated]
+                 return HS[hX[2]][HS[hX[0]] + HS[hX[3]]] = hX[8], hX[8]
+               }, console.log(SS[hX[20]]))
+             }
+             "Cux9vC" in ZX && jS(), (hX[2], Yt[hX[51]])(IS, HS, [qS])
+ ... (1 more added lines; see GitHub link above)
```

#### 498. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4645-L4653` → after: `L4695-L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4695-L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4695-L4716) · [Before (L4645-L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4645-L4653)

```diff
-             ek = kk[Vi[1]] ? tk[Vi[0]] : tk[Vi[0]] - Vi[2];
-           for (let Tk = Vi[1]; Tk < ek; Tk++) {
-             if (ei(Xk, tk[Tk])) return {
-               [Vi[20]]: Xk,
-               [Vi[21]]: tk[Tk]
-             };
-             if (typeof jk === Vi[75] && ei(jk, tk[Tk])) return {
-               [Vi[20]]: jk,
-               [Vi[21]]: tk[Tk]
+             KS = SS ? fS[hX[1]] : fS[hX[1]] - hX[0];
+           for (let GS = hX[2]; GS < KS; GS++) {
+             if (KX(tS, fS[GS])) {
+               function CS() {
+                 var SS;
+                 JX(SS = function(...HS) {
+                   if (JX(HS[hX[1]] = hX[19], HS[-hX[22]] = hX[11]), !(HS[hX[7]] < hX[2])) {
+                     if (HS[hX[7]] === hX[2]) return HS[hX[2]].push(HS[hX[0]]);
+                     for (HS[hX[21]] = HS[hX[3]]; HS[hX[21]] < HS[hX[12]] && !(HS[hX[17]][HS[hX[21]]] > HS[hX[7]]); HS[hX[21]]++) HS[hX[21]] > HS[hX[3]] && HS[hX[17]][HS[hX[21]]] === HS[hX[17]][HS[hX[21]] - hX[0]] || JX(HS[-hX[22]] = Array.from(HS[hX[0]]), HS[-hX[22]].push(HS[hX[1 … [truncated]
+                   }
+                 }, console.log((function(...HS) {
+                   return JX(HS[hX[1]] = hX[3], HS[hX[20]] = [], HS[hX[5]] = HS[hX[2]].length, HS[hX[2]].sort(((SS, HS) => SS - HS)), SS(HS[hX[20]], [], hX[2], HS[hX[5]], HS[hX[2]], HS[hX[0]])), HS[hX[20]]
+                 })))
+               }
+               return "jOPRWg" in ZX && CS(), {
+                 [hX[23]]: tS,
+ ... (6 more added lines; see GitHub link above)
```

#### 499. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4656` → after: `L4719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4719) · [Before (L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4656)

```diff
-           return Vi[15]
+           return hX[11]
```

#### 500. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4658-L4664` → after: `L4721-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4721-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4721-L4733) · [Before (L4658-L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4658-L4664)

```diff
-         jk = (...kk) => (kk[Vi[0]] = Vi[2], "Q9u_FQ" in Si && function(...kk) {
-           oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", kk[Vi[11]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", kk[Vi[22]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)] … [truncated]
-         }(), Zk(kk[Vi[1]]) !== Vi[15]);
-       let ek = Vi[15],
-         wk = Vi[15],
-         Hk = Vi[15],
-         Jk = Vi[15];
+         aS = (...SS) => (SS[hX[1]] = hX[0], "DrWpmn" in ZX && function(...SS) {
+           JX(SS[hX[1]] = hX[2], SS[hX[29]] = function(...SS) {
+             for (JX(SS[hX[1]] = hX[0], SS[-hX[28]] = hX[2], SS[hX[3]] = {}, SS[hX[12]] = hX[2], SS[hX[26]] = hX[2], SS[hX[7]] = hX[2], SS[hX[25]] = SS[hX[2]].length), SS[hX[21]] = hX[2]; SS[hX[21]] < SS[hX[25]]; SS[hX[21]]++) {
+               for (JX(SS[hX[3]] = {}, SS[hX[12]] = hX[2], SS[hX[26]] = hX[0]), SS[hX[27]] = SS[hX[21]] + hX[0]; SS[hX[27]] < SS[hX[25]]; SS[hX[27]]++) SS[hX[2]][SS[hX[21]]].x !== SS[hX[2]][SS[hX[27]]].x || SS[hX[2]][SS[hX[21]]].y !== SS[hX[2]][SS[hX[27]]].y ? (SS[hX[2]][SS[hX[21] … [truncated]
+               JX(SS[hX[12]] += SS[hX[26]], SS[-hX[28]] = Math.max(SS[-hX[28]], SS[hX[12]]))
+             }
+             return SS[-hX[28]]
+           }, console.log(SS[hX[29]]))
+         }(), kS(SS[hX[2]]) !== hX[11]);
+       let KS = hX[11],
+         jS = hX[11],
+         GS = hX[11],
+         CS = hX[11];
```

#### 501. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4666` → after: `L4735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4735) · [Before (L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4666)

```diff
-         kk[Vi[0]] = Vi[2];
+         SS[hX[1]] = hX[0];
```

#### 502. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4669-L4672` → after: `L4740-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4740-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4740-L4743) · [Before (L4669-L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4669-L4672)

```diff
-             oi(kk[Vi[0]] = Vi[1], kk[Vi[29]] = function(...kk) {
-               for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[1], kk[Vi[3]] = {}, kk[-Vi[25]] = Vi[1], kk[-Vi[26]] = Vi[1], kk[Vi[28]] = Vi[1], kk[-Vi[24]] = kk[Vi[1]].length), kk[-Vi[23]] = Vi[1]; kk[-Vi[23]] < kk[-Vi[24]]; kk[-Vi[23]]++) {
-                 for (oi(kk[Vi[3]] = {}, kk[-Vi[25]] = Vi[1], kk[-Vi[26]] = Vi[2]), kk[Vi[27]] = kk[-Vi[23]] + Vi[2]; kk[Vi[27]] < kk[-Vi[24]]; kk[Vi[27]]++) kk[Vi[1]][kk[-Vi[23]]].x !== kk[Vi[1]][kk[Vi[27]]].x || kk[Vi[1]][kk[-Vi[23]]].y !== kk[Vi[1]][kk[Vi[27]]].y ? (kk[Vi[1]][k … [truncated]
-                 oi(kk[-Vi[25]] += kk[-Vi[26]], kk[Vi[14]] = Math.max(kk[Vi[14]], kk[-Vi[25]]))
+             JX(SS[hX[1]] = hX[2], SS[hX[20]] = function(...SS) {
+               for (JX(SS[hX[1]] = hX[0], SS[hX[0]] = hX[2], SS[hX[3]] = {}, SS[hX[30]] = hX[2], SS[hX[26]] = hX[2], SS[-hX[31]] = hX[2], SS[hX[25]] = SS[hX[2]].length), SS[hX[21]] = hX[2]; SS[hX[21]] < SS[hX[25]]; SS[hX[21]]++) {
+                 for (JX(SS[hX[3]] = {}, SS[hX[30]] = hX[2], SS[hX[26]] = hX[0]), SS[hX[27]] = SS[hX[21]] + hX[0]; SS[hX[27]] < SS[hX[25]]; SS[hX[27]]++) SS[hX[2]][SS[hX[21]]].x !== SS[hX[2]][SS[hX[27]]].x || SS[hX[2]][SS[hX[21]]].y !== SS[hX[2]][SS[hX[27]]].y ? (SS[hX[2]][SS[hX[2 … [truncated]
+                 JX(SS[hX[30]] += SS[hX[26]], SS[hX[0]] = Math.max(SS[hX[0]], SS[hX[30]]))
```

#### 503. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4674-L4675` → after: `L4745-L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4745-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4745-L4746) · [Before (L4674-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4674-L4675)

```diff
-               return kk[Vi[14]]
-             }, console.log(kk[Vi[29]]))
+               return SS[hX[0]]
+             }, console.log(SS[hX[20]]))
```

#### 504. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4677-L4679` → after: `L4748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4748) · [Before (L4677-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4677-L4679)

```diff
-           return "rhnCZl" in Si && Fk(), kk[Vi[1]]()
-         } catch {
-           return Vi[30]
+           return "R07kKr" in ZX && HS(), hX[10]
```

#### 505. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4682` → after: `L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4751) · [Before (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4682)

```diff
-       let Pk = Vi[33];
+       let PS = hX[8];
```

#### 506. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4684-L4700` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4753) · [Before (L4684-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4684-L4700)

```diff
-           if (!Pk && (Vi[1], pX[Vi[216]])()) {
-             function kk(...kk) {
-               oi(kk[Vi[0]] = Vi[1], kk[-Vi[35]] = function(...Fk) {
-                 return Fk[Vi[0]] = Vi[3], kk[Vi[2]]({}, Fk[Vi[1]], Fk[Vi[2]])
-               }, kk[Vi[2]] = function(...Fk) {
-                 if (oi(Fk[Vi[0]] = Vi[4], Fk[-Vi[31]] = {}), Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] !== Vi[12]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]];
-                 if (Fk[Vi[2]] === Fk[Vi[3]]) return Vi[30];
-                 for (Fk[Vi[11]] = Vi[1]; Fk[Vi[11]] < Fk[Vi[2]].length; Fk[Vi[11]]++) Fk[-Vi[31]][Fk[Vi[2]][Fk[Vi[11]]]] === Vi[12] && (Fk[-Vi[31]][Fk[Vi[2]][Fk[Vi[11]]]] = Vi[1]), Fk[-Vi[31]][Fk[Vi[3]][Fk[Vi[11]]]] === Vi[12] && (Fk[-Vi[31]][Fk[Vi[3]][Fk[Vi[11]]]] = Vi[1]), oi(F … [truncated]
-                 for (Fk[Vi[32]] in Fk[-Vi[31]])
-                   if (Fk[-Vi[31]][Fk[Vi[32]]] !== Vi[1]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33];
-                 for (Fk[-Vi[34]] = Vi[2]; Fk[-Vi[34]] < Fk[Vi[2]].length; Fk[-Vi[34]]++)
-                   if (kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[-Vi[34]]), Fk[Vi[3]].substr(Vi[1], Fk[-Vi[34]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[-Vi[34]]), Fk[Vi[3]].substr(Fk[-Vi[34]])) || kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[-Vi[34]]), Fk[Vi[3]].sub … [truncated]
-                 return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33]
-               }, console.log(kk[-Vi[35]]))
-             }
-             "FHDTWl" in Si && kk(), Pk = Vi[30]
- ... (1 more removed lines; see GitHub link above)
+           !PS && (hX[2], Yt.x)() && (PS = hX[10])
```

#### 507. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4703-L4713` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4756) · [Before (L4703-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4703-L4713)

```diff
-           kk[Vi[0]] = Vi[2], "SqphSqH" in Si && function() {
-             var kk, Fk = function(...Fk) {
-               return oi(Fk[Vi[0]] = Vi[3], Fk[Vi[14]] = [], Fk[Vi[11]] = Fk[Vi[1]].length, Fk[Vi[1]].sort(((kk, Fk) => kk - Fk)), kk(Fk[Vi[14]], [], Vi[1], Fk[Vi[11]], Fk[Vi[1]], Fk[Vi[2]])), Fk[Vi[14]]
-             };
-             oi(kk = function(...Fk) {
-               if (oi(Fk[Vi[0]] = Vi[36], Fk[Vi[36]] = Vi[15]), !(Fk[Vi[28]] < Vi[1])) {
-                 if (Fk[Vi[28]] === Vi[1]) return Fk[Vi[1]].push(Fk[Vi[2]]);
-                 for (Fk[-Vi[37]] = Fk[Vi[3]]; Fk[-Vi[37]] < Fk[Vi[4]] && !(Fk[Vi[38]][Fk[-Vi[37]]] > Fk[Vi[28]]); Fk[-Vi[37]]++) Fk[-Vi[37]] > Fk[Vi[3]] && Fk[Vi[38]][Fk[-Vi[37]]] === Fk[Vi[38]][Fk[-Vi[37]] - Vi[2]] || oi(Fk[Vi[36]] = Array.from(Fk[Vi[2]]), Fk[Vi[36]].push(Fk[Vi[ … [truncated]
-               }
-             }, console.log(Fk))
-           }();
+           SS[hX[1]] = hX[0];
```

#### 508. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4715` → after: `L4758-L4761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4758-L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4758-L4761) · [Before (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4715)

```diff
-             return kk[Vi[1]]()
+             function HS(...SS) {
+               SS[hX[1]] = hX[2]
+             }
+             return "YueJPXK" in ZX && HS(), SS[hX[2]]()
```

#### 509. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4717` → after: `L4763-L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4763-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4763-L4779) · [Before (L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4717)

```diff
-             return Vi[12]
+             function gS(...SS) {
+               var HS;
+               JX(SS[hX[1]] = hX[2], HS = function(SS) {
+                 JX(this.hf = SS, this.length = hX[2], this.map = {}, this.head = hX[11], this.tail = hX[11])
+               }, HS.prototype.get = function(SS) {
+                 var HS = this.map[SS];
+                 return HS ? (this.remove(HS), this.insert(HS.key, HS.val), HS.val) : -hX[0]
+               }, HS.prototype.put = function(...SS) {
+                 JX(SS[hX[1]] = hX[3], this.map[SS[hX[2]]] ? (this.remove(this.map[SS[hX[2]]]), this.insert(SS[hX[2]], SS[hX[0]])) : this.length === this.hf ? (this.remove(this.head), this.insert(SS[hX[2]], SS[hX[0]])) : (this.insert(SS[hX[2]], SS[hX[0]]), this.length++))
+               }, HS.prototype.remove = function(SS) {
+                 var HS, gS = SS.prev;
+                 (HS = SS.next) && (HS.prev = gS), gS && (gS.next = HS), this.head === SS && (this.head = HS), this.tail === SS && (this.tail = gS), delete this.map[SS.key]
+               }, HS.prototype.insert = function(...SS) {
+                 JX(SS[hX[1]] = hX[3], SS[hX[20]] = new List(SS[hX[2]], SS[hX[0]]), this.tail ? (this.tail.next = SS[hX[20]], SS[hX[20]].prev = this.tail, this.tail = SS[hX[20]]) : (this.tail = SS[hX[20]], this.head = SS[hX[20]]), this.map[SS[hX[2]]] = SS[hX[20]])
+               }, console.log(HS))
+             }
+ ... (1 more added lines; see GitHub link above)
```

#### 510. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4721-L4722` → after: `L4783-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4783-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4783-L4784) · [Before (L4721-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4721-L4722)

```diff
-           kk[Vi[0]] = Vi[2], "pUe5UK" in Si && function(...kk) {
-             kk[Vi[0]] = Vi[1]
+           SS[hX[1]] = hX[0], "vwnksz" in ZX && function(...SS) {
+             SS[hX[1]] = hX[2]
```

#### 511. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4745-L4780` → after: `L4788-L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4788-L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4788-L4796) · [Before (L4745-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4745-L4780)

```diff
-               function Fk(...kk) {
-                 return kk[Vi[0]] = Vi[2], kk[Vi[1]][Vi[2]] * Vi[44] + (kk[Vi[1]][Vi[1]] < Vi[1] ? Vi[43] | kk[Vi[1]][Vi[1]] : kk[Vi[1]][Vi[1]])
-               }
- 
-               function Ik(...kk) {
-                 switch (kk[Vi[0]] = Vi[2], ((kk[Vi[1]] & Vi[43]) !== Vi[1]) * Vi[2] + (kk[Vi[1]] < Vi[1]) * Vi[3]) {
-                   case Vi[1]:
-                     return [kk[Vi[1]] % Vi[43], Math.trunc(kk[Vi[1]] / Vi[44])];
-                   case Vi[2]:
-                     return [kk[Vi[1]] % Vi[43] - Vi[43], Math.trunc(kk[Vi[1]] / Vi[44]) + Vi[2]];
-                   case Vi[3]:
-                     return [((kk[Vi[1]] + Vi[43]) % Vi[43] + Vi[43]) % Vi[43], Math.round(kk[Vi[1]] / Vi[44])];
-                   case Vi[4]:
-                     return [kk[Vi[1]] % Vi[43], Math.trunc(kk[Vi[1]] / Vi[44])]
-                 }
-               }
- ... (20 more removed lines; see GitHub link above)
+               SS[hX[1]] = hX[2];
+               const HS = require("big-integer");
+               JX(SS[hX[20]] = class {
+                 static randomPrime(SS) {
+                   const gS = HS.one.shiftLeft(SS - hX[0]),
+                     tS = HS.one.shiftLeft(SS).prev();
+                   for (; hX[10];) {
+                     let SS = HS.randBetween(gS, tS);
+                     if (SS.isProbablePrime(256)) return SS
```

#### 512. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4811-L4825` → after: `L4799-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4799-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4799-L4810) · [Before (L4811-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4811-L4825)

```diff
- 
-                 function Tk(...kk) {
-                   oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = ak(kk[Vi[1]])), kk[Vi[14]].length > Vi[50] && (kk[Vi[14]] = xk(kk[Vi[14]], kk[Vi[1]].length * Vi[8]));
-                   var Fk = Array(Vi[50]),
-                     Ik = Array(Vi[50]);
-                   for (kk[-Vi[51]] = Vi[1]; kk[-Vi[51]] < Vi[50]; kk[-Vi[51]]++) oi(Fk[kk[-Vi[51]]] = kk[Vi[14]][kk[-Vi[51]]] ^ Vi[77], Ik[kk[-Vi[51]]] = kk[Vi[14]][kk[-Vi[51]]] ^ Vi[78]);
-                   return kk[Vi[38]] = xk(Fk.concat(ak(kk[Vi[2]])), Vi[53] + kk[Vi[2]].length * Vi[8]), qk(xk(Ik.concat(kk[Vi[38]]), zi(Vi[52], Vi[53], Vi[54])))
-                 }
- 
-                 function ik(...Fk) {
-                   Fk[Vi[0]] = Vi[2];
-                   try {
-                     kk[Vi[22]]
-                   } catch (Xk) {
-                     kk[Vi[22]] = Vi[1]
+                 static generate(...SS) {
+                   SS[hX[1]] = hX[0];
+                   const gS = HS(65537);
+                   let tS, bS;
+                   SS[hX[20]] = hX[4];
+                   do {
+                     JX(tS = this.randomPrime(SS[hX[2]] / hX[3]), bS = this.randomPrime(SS[hX[2]] / hX[3]), SS[hX[20]] = HS.lcm(tS.prev(), bS.prev()))
+                   } while (HS.gcd(gS, SS[hX[20]]).notEquals(hX[0]) || tS.minus(bS).abs().shiftRight(SS[hX[2]] / hX[3] - 100).isZero());
+                   return {
+                     e: gS,
+                     n: tS.multiply(bS),
+                     d: gS.modInv(SS[hX[20]])
```

#### 513. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4830-L4881` → after: `L4813-L4814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4813-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4813-L4814) · [Before (L4830-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4830-L4881)

```diff
- 
-                 function yk(...Fk) {
-                   Fk[Vi[0]] = Vi[2];
-                   try {
-                     kk[Vi[7]]
-                   } catch (Xk) {
-                     kk[Vi[7]] = ""
-                   }
-                   for (oi(Fk[Vi[14]] = Vi[87] + Vi[88] + Vi[89] + Vi[90] + Vi[91] + Vi[92] + Vi[93] + Vi[94], Fk[Vi[11]] = "", Fk[Vi[4]] = Fk[Vi[1]].length), Fk[Vi[7]] = Vi[1]; Fk[Vi[7]] < Fk[Vi[4]]; Fk[Vi[7]] += Vi[4])
-                     for (Fk[Vi[28]] = Fk[Vi[1]].charCodeAt(Fk[Vi[7]]) << Vi[50] | (Fk[Vi[7]] + Vi[2] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[2]) << Vi[8] : Vi[1]) | (Fk[Vi[7]] + Vi[3] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[3]) : Vi[1]), Fk[Vi[36]] = Vi[1]; Fk … [truncated]
-                   return Fk[Vi[11]]
-                 }
- 
-                 function lk(...kk) {
-                   var Fk, Ik;
-                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = "", kk[Vi[11]] = -Vi[2]); ++kk[Vi[11]] < kk[Vi[1]].length;) oi(Fk = kk[Vi[1]].charCodeAt(kk[Vi[11]]), Ik = kk[Vi[11]] + Vi[2] < kk[Vi[1]].length ? kk[Vi[1]].charCodeAt(kk[Vi[11]] + Vi[2]) : Vi[1]), Vi[96] <= Fk && Fk <= Vi … [truncated]
- ... (36 more removed lines; see GitHub link above)
+                 static encrypt(SS, gS, tS) {
+                   return HS(SS).modPow(tS, gS)
```

#### 514. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4883-L4885` → after: `L4816-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4816-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4816-L4817) · [Before (L4883-L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4883-L4885)

```diff
- 
-                 function Hk(...kk) {
-                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[68]) ^ Lk(kk[Vi[1]], Vi[69]) ^ tk(kk[Vi[1]], Vi[4])
+                 static decrypt(...SS) {
+                   return SS[hX[1]] = hX[12], HS(SS[hX[2]]).modPow(SS[hX[0]], SS[hX[3]])
```

#### 515. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4887-L4889` → after: `L4819-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4819-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4819-L4822) · [Before (L4887-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4887-L4889)

```diff
- 
-                 function Jk(...kk) {
-                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[111]) ^ Lk(kk[Vi[1]], Vi[71]) ^ tk(kk[Vi[1]], Vi[70])
+                 static encode(...SS) {
+                   SS[hX[1]] = hX[0];
+                   const gS = SS[hX[2]].split("").map((SS => SS.charCodeAt())).join("");
+                   return HS(gS)
```

#### 516. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4891-L4896` → after: `L4824-L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4824-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4824-L4830) · [Before (L4891-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4891-L4896)

```diff
- 
-                 function xk(...Fk) {
-                   var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
-                   for (oi(Fk[Vi[0]] = Vi[3], Fk[Vi[14]] = new Array(Vi[181], -Vi[182], Vi[183], -Vi[184], Vi[185], -Vi[186], Vi[187], Vi[188]), Fk[Vi[4]] = new Array(Vi[72])), oi(Fk[Vi[1]][Fk[Vi[2]] >> Vi[28]] |= Vi[61] << Vi[67] - Fk[Vi[2]] % Vi[65], Fk[Vi[1]][(Fk[Vi[2]] + Vi[72 … [truncated]
-                     for (oi(Ik = Fk[Vi[14]][Vi[1]], Xk = Fk[Vi[14]][Vi[2]], Tk = Fk[Vi[14]][Vi[3]], ik = Fk[Vi[14]][Vi[4]], yk = Fk[Vi[14]][Vi[38]], lk = Fk[Vi[14]][Vi[28]], ak = Fk[Vi[14]][Vi[36]], qk = Fk[Vi[14]][Vi[68]]), tk = Vi[1]; tk < Vi[72]; tk++) oi(tk < Vi[50] ? Fk[Vi[4 … [truncated]
-                     oi(Fk[Vi[14]][Vi[1]] = Pk(Ik, Fk[Vi[14]][Vi[1]]), Fk[Vi[14]][Vi[2]] = Pk(Xk, Fk[Vi[14]][Vi[2]]), Fk[Vi[14]][Vi[3]] = Pk(Tk, Fk[Vi[14]][Vi[3]]), Fk[Vi[14]][Vi[4]] = Pk(ik, Fk[Vi[14]][Vi[4]]), Fk[Vi[14]][Vi[38]] = Pk(yk, Fk[Vi[14]][Vi[38]]), Fk[Vi[14]][Vi[28]] = … [truncated]
+                 static decode(...SS) {
+                   SS[hX[1]] = hX[0];
+                   const HS = SS[hX[2]].toString();
+                   SS[hX[20]] = "";
+                   for (let gS = hX[2]; gS < HS.length; gS += hX[3]) {
+                     let tS = Number(HS.substr(gS, hX[3]));
+                     tS <= 30 ? (SS[hX[20]] += String.fromCharCode(Number(HS.substr(gS, hX[12]))), gS++) : SS[hX[20]] += String.fromCharCode(tS)
```

#### 517. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4898` → after: `L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4832) · [Before (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4898)

```diff
-                   return Fk[Vi[14]]
+                   return SS[hX[20]]
```

#### 518. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4900-L4918` → after: `L4834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4834) · [Before (L4900-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4900-L4918)

```diff
- 
-                 function Pk(...kk) {
-                   return oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[4]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[Vi[3]] >> Vi[50])), kk[Vi[4]] << Vi[50] | kk[Vi[3]] & Vi[74]
-                 }
-                 return oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[1], kk[Vi[7]] = ""), kk[Vi[73]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[ … [truncated]
-                   hex: function(...kk) {
-                     return kk[Vi[0]] = Vi[2], ik(function(...kk) {
-                       return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
-                     }(lk(kk[Vi[1]])))
-                   },
-                   b64: Fk,
-                   any: Ik,
-                   hex_hmac: function(...kk) {
-                     return kk[Vi[0]] = Vi[3], ik(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
-                   },
-                   b64_hmac: Fk,
- ... (3 more removed lines; see GitHub link above)
+               }, module.exports = SS[hX[20]])
```

#### 519. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4920-L4928` → after: `L4836-L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4836-L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4836-L4839) · [Before (L4920-L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4920-L4928)

```diff
-             if ("OPtuP7Z" in Si && lk(), Ik) {
-               function ak(...kk) {
-                 oi(kk[Vi[0]] = Vi[1], kk[Vi[11]] = function(...kk) {
-                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = kk[Vi[1]].length, kk[Vi[3]] = [], kk[Vi[22]] = Vi[1]), kk[Vi[7]] = Vi[1]; kk[Vi[7]] < kk[Vi[14]]; kk[Vi[7]]++) kk[Vi[3]].push(kk[Vi[7]] !== Vi[1] && kk[Vi[1]][kk[Vi[7]]] > kk[Vi[1]][kk[Vi[7]] - Vi[2]] ? kk[Vi[3]][kk[Vi[7]] … [truncated]
-                   for (kk[-Vi[31]] = kk[Vi[14]] - Vi[2]; kk[-Vi[31]] >= Vi[1]; kk[-Vi[31]]--) kk[-Vi[31]] !== kk[Vi[14]] - Vi[2] && kk[Vi[1]][kk[-Vi[31]]] > kk[Vi[1]][kk[-Vi[31]] + Vi[2]] && (kk[Vi[3]][kk[-Vi[31]]] = Math.max(kk[Vi[3]][kk[-Vi[31]]], kk[Vi[3]][kk[-Vi[31]] + Vi[2]] … [truncated]
-                   return kk[Vi[22]]
-                 }, console.log(kk[Vi[11]]))
-               }
-               "hM_SkO" in Si && ak(), Ek = Vi[30]
+             return "Qj5Nry" in ZX && HS(), SS[hX[2]](), hX[10]
+           } catch {
+             function gS(...SS) {
+               SS[hX[1]] = hX[2]
```

#### 520. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4930` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841) · [Before (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4930)

```diff
-             return
+             return "Y3A_gJ" in ZX && gS(), hX[8]
```

#### 521. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4932-L4962` → after: `L4843-L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4843-L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4843-L4888) · [Before (L4932-L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4932-L4962)

```diff
-           if (Fk[Vi[1]] !== Vk) return void(zk[Fk[Vi[1]]] = Fk[Vi[2]]);
-           zk[Fk[Vi[1]]] = Vi[30];
-           const Tk = typeof Fk[Vi[2]] === Vi[75] ? Fk[Vi[2]] : "" + Fk[Vi[2]];
-           if (uk[Tk]) {
-             function qk(...kk) {
-               oi(kk[Vi[0]] = Vi[1], kk[Vi[189]] = function(...kk) {
-                 function Fk(...kk) {
-                   return kk[Vi[0]] = Vi[3], yk(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
-                 }
- 
-                 function Ik(...kk) {
-                   return kk[Vi[0]] = Vi[4],
-                     function(...kk) {
-                       var Fk, Ik, Xk, Tk;
-                       for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[2]].length, kk[-Vi[23]] = Array()), kk[Vi[38]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[Vi[38]].length; Fk++) kk[Vi[38]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]].charCod … [truncated]
-                       for (; kk[Vi[38]].length > Vi[1];) {
- ... (15 more removed lines; see GitHub link above)
+         },
+         hS = (hX[2], Yt[hX[13]])("a29qbzYzb25i"),
+         ZS = (hX[2], Yt[hX[38]])(hX[11]);
+       let JS = hX[11],
+         OS = hX[8],
+         dS = hX[8];
+       const cS = (hX[2], Yt[hX[38]])(hX[11]);
+       let vS = hX[2];
+       const ES = (hX[2], Yt[hX[38]])(hX[11]);
+       let LS = hX[2];
+       const YS = (hX[2], Yt[hX[38]])(hX[11]);
+       let AS = hX[8],
+         yS = hX[8];
+       const VS = (...HS) => {
+           if (HS[hX[1]] = hX[3], "G1Ye1f6" in ZX && function() {
+               var SS, HS = function(...HS) {
+ ... (30 more added lines; see GitHub link above)
```

#### 522. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4964-L4970` → after: `L4890-L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4890-L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4890-L4898) · [Before (L4964-L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4964-L4970)

```diff
- 
-                 function ik(...Fk) {
-                   Fk[Vi[0]] = Vi[2];
-                   try {
-                     kk[Vi[14]]
-                   } catch (Xk) {
-                     kk[Vi[14]] = Vi[1]
+                 return await (async () => void 0 === await SS() ? " (local)" : "")(), hX[10]
+               }), JS = typeof HS[hX[0]] === hX[76] ? HS[hX[0]] : -hX[0]
+             } else {
+               function XS() {
+                 var SS, HS, gS;
+                 JX(SS = function(...tS) {
+                   for (tS[hX[1]] = hX[17], tS[-hX[42]] = tS[hX[12]]; tS[-hX[42]] < tS[hX[3]]; tS[-hX[42]]++) {
+                     if (tS[hX[0]].length !== tS[-hX[42]]) return;
+                     for (tS[hX[43]] = hX[2]; tS[hX[43]] < tS[hX[3]]; tS[hX[43]]++) gS(tS[hX[0]], [tS[-hX[42]], tS[hX[43]]]) && (JX(tS[hX[0]].push([tS[-hX[42]], tS[hX[43]]]), SS(tS[hX[2]], tS[hX[0]], tS[hX[3]], tS[-hX[42]] + hX[0])), tS[hX[0]].length === tS[hX[3]] && tS[hX[2]].pus … [truncated]
```

#### 523. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4972-L4981` → after: `L4900-L4904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4900-L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4900-L4904) · [Before (L4972-L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4972-L4981)

```diff
-                   for (oi(Fk[Vi[86]] = kk[Vi[14]] ? Vi[55] + Vi[80] + Vi[81] : Vi[55] + Vi[82] + Vi[83], Fk[Vi[3]] = "", Fk[-Vi[84]] = Vi[12]), Fk[Vi[85]] = Vi[1]; Fk[Vi[85]] < Fk[Vi[1]].length; Fk[Vi[85]]++) oi(Fk[-Vi[84]] = Fk[Vi[1]].charCodeAt(Fk[Vi[85]]), Fk[Vi[3]] += Fk[Vi[8 … [truncated]
-                   return Fk[Vi[3]]
-                 }
- 
-                 function yk(...Fk) {
-                   Fk[Vi[0]] = Vi[2];
-                   try {
-                     kk[Vi[2]]
-                   } catch (Xk) {
-                     kk[Vi[2]] = ""
+                 }, HS = function(SS) {
+                   var HS, gS, tS = [];
+                   for (HS = SS.length, gS = hX[2]; gS < HS; gS++) {
+                     var bS;
+                     for (tS[gS] = "", bS = hX[2]; bS < HS; bS++) tS[gS] += SS[gS][hX[0]] === bS ? hX[44] : "."
```

#### 524. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4992-L5042` → after: `L4907-L4911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4907-L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4907-L4911) · [Before (L4992-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L4992-L5042)

```diff
-                 }
- 
-                 function ak(...kk) {
-                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Array(kk[Vi[1]].length >> Vi[3])), kk[-Vi[107]] = Vi[1]; kk[-Vi[107]] < kk[Vi[14]].length; kk[-Vi[107]]++) kk[Vi[14]][kk[-Vi[107]]] = Vi[1];
-                   for (kk[-Vi[107]] = Vi[1]; kk[-Vi[107]] < kk[Vi[1]].length * Vi[8]; kk[-Vi[107]] += Vi[8]) kk[Vi[14]][kk[-Vi[107]] >> Vi[28]] |= (kk[Vi[1]].charCodeAt(kk[-Vi[107]] / Vi[8]) & Vi[63]) << Vi[67] - kk[-Vi[107]] % Vi[65];
-                   return kk[Vi[14]]
-                 }
- 
-                 function qk(kk) {
-                   var Fk, Ik = "";
-                   for (Fk = Vi[1]; Fk < kk.length * Vi[65]; Fk += Vi[8]) Ik += String.fromCharCode(kk[Fk >> Vi[28]] >>> Vi[67] - Fk % Vi[65] & Vi[63]);
-                   return Ik
-                 }
- 
-                 function Lk(kk, Fk) {
-                   return kk >>> Fk | kk << Vi[65] - Fk
- ... (35 more removed lines; see GitHub link above)
+                 }, gS = function(SS, HS) {
+                   var gS, tS = SS.length;
+                   for (gS = hX[2]; gS < tS; gS++) {
+                     if (SS[gS][hX[2]] === HS[hX[2]] || SS[gS][hX[0]] === HS[hX[0]]) return hX[8];
+                     if (Math.abs((SS[gS][hX[2]] - HS[hX[2]]) / (SS[gS][hX[0]] - HS[hX[0]])) === hX[0]) return hX[8]
```

#### 525. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5044-L5070` → after: `L4913-L4916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4913-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4913-L4916) · [Before (L5044-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5044-L5070)

```diff
-                   return Fk[Vi[116]]
-                 }
- 
-                 function Pk(...kk) {
-                   return oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[11]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[Vi[14]] >> Vi[50])), kk[Vi[11]] << Vi[50] | kk[Vi[14]] & Vi[74]
-                 }
-                 return oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = Vi[1], kk[Vi[2]] = ""), kk[Vi[22]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[ … [truncated]
-                   hex: function(kk) {
-                     return ik(function(...kk) {
-                       return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
-                     }(lk(kk)))
-                   },
-                   b64: Fk,
-                   any: Ik,
-                   hex_hmac: function(...kk) {
-                     return kk[Vi[0]] = Vi[3], ik(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
- ... (11 more removed lines; see GitHub link above)
+                   return hX[10]
+                 }, console.log((function(...HS) {
+                   return JX(HS[hX[1]] = hX[0], HS[hX[41]] = []), (HS[hX[2]] === hX[0] || HS[hX[2]] >= hX[17]) && SS(HS[hX[41]], [], HS[hX[2]], hX[2]), HS[hX[41]]
+                 })))
```

#### 526. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5072` → after: `L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4918) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5072)

```diff
-               return "KslpW3" in Si && Lk(), void(Rk = Vi[30])
+               "c_KZ6yy" in ZX && XS(), OS = hX[10]
```

#### 527. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5074-L5221` → after: `L4920-L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4920-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4920-L4932) · [Before (L5074-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5074-L5221)

```diff
-             if ((Vi[1], MT[Vi[42]])(Tk))
-               if (nk < 8) {
-                 function tk(...kk) {
-                   oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = function(...kk) {
-                     function Fk(kk, Fk) {
-                       return yk(Tk(lk(kk), lk(Fk)))
-                     }
- 
-                     function Ik(kk, Fk, Ik) {
-                       return function(...kk) {
-                         var Fk, Ik, Xk, Tk;
-                         for (oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = kk[Vi[2]].length, kk[Vi[11]] = Array()), kk[-Vi[196]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[-Vi[196]].length; Fk++) kk[-Vi[196]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]] … [truncated]
-                         for (; kk[-Vi[196]].length > Vi[1];) {
-                           for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[-Vi[196]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[-Vi[196]][Fk], Ik = Math.floor(Xk / kk[Vi[14]]), Xk -= Ik * kk[Vi[14]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
-                           oi(kk[Vi[11]][kk[Vi[11]].length] = Xk, kk[-Vi[196]] = Tk)
-                         }
- ... (132 more removed lines; see GitHub link above)
+             return
+           }
+           const gS = ZS[HS[hX[2]]];
+           if (!HS[hX[0]]) return void(gS && (dS = hX[10]));
+           if (HS[hX[2]] !== hS) {
+             function xS(...SS) {
+               function HS(SS) {
+                 if (!SS) return -hX[0];
+                 const gS = HS(SS.left),
+                   tS = HS(SS.right),
+                   bS = Math.abs(gS - tS);
+                 if (gS === 1 / 0 || tS === 1 / 0 || bS > hX[0]) return 1 / 0;
+                 return Math.max(gS, tS) + hX[0]
```

#### 528. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5223-L5227` → after: `L4934-L4950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4934-L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4934-L4950) · [Before (L5223-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5223-L5227)

```diff
-               if ("lkkLmq" + Vi[5] in Si && jk(), pk < 4) {
-                 function ek(...kk) {
-                   kk[Vi[0]] = Vi[1]
-                 }
-                 "MWXvlW" + Vi[218] in Si && ek(), oi(uk[Tk] = Vi[30], Gk[pk++] = Tk)
+               SS[hX[1]] = hX[2], window.__GLOBAL__HELPERS__ = {
+                 buildCharacterMap: function(SS) {
+                   const HS = {};
+                   for (let gS of SS.replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + hX[0] || hX[0];
+                   return HS
+                 },
+                 isAnagrams: function(SS, HS) {
+                   const gS = buildCharMap(SS),
+                     tS = buildCharMap(HS);
+                   for (let bS in gS)
+                     if (gS[bS] !== tS[bS]) return hX[8];
+                   return Object.keys(gS).length !== Object.keys(tS).length ? hX[8] : hX[10]
+                 },
+                 isBalanced: function(SS) {
+                   return HS(SS) !== 1 / 0
+                 },
+ ... (1 more added lines; see GitHub link above)
```

#### 529. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5232` → after: `L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4977) · [Before (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5232)

```diff
-         Ck = (Vi[1], ki[Vi[239]])(kk),
+         iS = (hX[2], SX.j)(SS),
```

#### 530. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5237` → after: `L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4985) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5237)

```diff
-             return Vi[12]
+             return hX[4]
```

#### 531. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5240-L5251` → after: `L4988-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4988-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L4988-L4990) · [Before (L5240-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5240-L5251)

```diff
-       if (sk(((...Fk) => {
-           Fk[Vi[0]] = Vi[1], "ob5xnP_" in Si && (module.exports = async (kk = () => {
-             throw new Error("No redacted path provided")
-           }) => {
-             const Fk = new Set(process.argv.slice(Vi[3]));
-             if (!Fk.has("--version")) {
-               if (Fk.size !== Vi[2]) return Vi[33];
-               if (!Fk.has("-v")) return Vi[33]
-             }
-             return await (async () => void 0 === await kk() ? " (local)" : "")(), Vi[30]
-           }), Tk[kk] = Uk
-         })), typeof Nk === Vi[205] + Vi[206]) {
+       if (wS((() => {
+           bS[SS] = VS
+         })), typeof WS === hX[49] + hX[50]) {
```

#### 532. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5262` → after: `L5001-L5005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5001-L5005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5001-L5005) · [Before (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5262)

```diff
-               kk[Vi[0]] = Vi[1]
+               JX(SS[hX[1]] = hX[2], SS[hX[43]] = function(...HS) {
+                 return JX(HS[hX[1]] = hX[12], HS[hX[20]] = {}), HS[hX[3]].length !== HS[hX[2]].length + HS[hX[0]].length ? hX[8] : SS[hX[5]](HS[hX[2]], HS[hX[0]], HS[hX[3]], hX[2], hX[2], hX[2], HS[hX[20]])
+               }, SS[hX[5]] = function(...HS) {
+                 return JX(HS[hX[1]] = hX[21], HS[hX[20]] = hX[8]), HS[hX[7]] >= HS[hX[3]].length ? hX[10] : HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] !== hX[4] ? HS[hX[19]]["" + HS[hX[12]] + HS[hX[17]] + HS[hX[7]]] : (HS[hX[3]][HS[hX[7]]] === HS[hX[2]][HS[hX[12]]] && H … [truncated]
+               }, console.log(SS[hX[43]]))
```

#### 533. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5264` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5007) · [Before (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5264)

```diff
-             if ("xjEU5b" + Vi[217] in Si && Xk(), (Vi[1], pX[Vi[207]])(pX[Vi[220]], Fk, [Ik]) && Ik !== kk) {
+             if ("zqZDgUE" in ZX && tS(), (hX[2], Yt[hX[51]])(Yt[hX[63]], HS, [gS]) && gS !== SS) {
```

#### 534. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5266-L5277` → after: `L5009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5009) · [Before (L5266-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5266-L5277)

```diff
-                 oi(kk[Vi[0]] = Vi[1], kk[-Vi[27]] = function(Fk, Ik) {
-                   return kk[Vi[2]]({}, Fk, Ik)
-                 }, kk[Vi[2]] = function(...Fk) {
-                   if (oi(Fk[Vi[0]] = Vi[4], Fk[Vi[14]] = {}), Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] !== Vi[12]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]];
-                   if (Fk[Vi[2]] === Fk[Vi[3]]) return Vi[30];
-                   for (Fk[-Vi[208]] = Vi[1]; Fk[-Vi[208]] < Fk[Vi[2]].length; Fk[-Vi[208]]++) Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]] === Vi[12] && (Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]] = Vi[1]), Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]] === Vi[12] && (Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]] =  … [truncated]
-                   for (Fk[Vi[28]] in Fk[Vi[14]])
-                     if (Fk[Vi[14]][Fk[Vi[28]]] !== Vi[1]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33];
-                   for (Fk[Vi[36]] = Vi[2]; Fk[Vi[36]] < Fk[Vi[2]].length; Fk[Vi[36]]++)
-                     if (kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[Vi[36]]), Fk[Vi[3]].substr(Vi[1], Fk[Vi[36]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[Vi[36]]), Fk[Vi[3]].substr(Fk[Vi[36]])) || kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[Vi[36]]), Fk[Vi[3]].substr … [truncated]
-                   return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33]
-                 }, console.log(kk[-Vi[27]]))
+                 SS[hX[1]] = hX[2]
```

#### 535. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5279` → after: `L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5011) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5279)

```diff
-               "RyHwE7" + Vi[213] in Si && Tk(), Uk(Ik, Fk[Ik])
+               "k5d_vu" in ZX && bS(), VS(gS, HS[gS])
```

#### 536. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5284-L5288` → after: `L5016-L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5016-L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5016-L5020) · [Before (L5284-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5284-L5288)

```diff
-       const ck = Ck ? Vi[3] : Vi[2];
-       let Wk = Vi[33];
-       const fk = (...Fk) => (Fk[Vi[0]] = Vi[1], vk ? Vi[30] : (oi(Fk[Vi[14]] = Vi[33], Wk = !sk((() => {
-           Fk[Vi[14]] = Tk[kk] !== Uk
-         }))), Fk[Vi[14]])),
+       const zS = iS ? hX[3] : hX[0];
+       let US = hX[8];
+       const pS = (...HS) => (HS[hX[1]] = hX[2], OS ? hX[10] : (JX(HS[hX[20]] = hX[8], US = !wS((() => {
+           HS[hX[20]] = bS[SS] !== VS
+         }))), HS[hX[20]])),
```

#### 537. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5290-L5292` → after: `L5022-L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5022-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5022-L5024) · [Before (L5290-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5290-L5292)

```diff
-           Fk[Vi[0]] = Vi[1];
-           const Ik = (Vi[1], pX.L)(Tk, kk);
-           return (Ik === Vi[15] || Ik === void Vi[1] ? void Vi[1] : Ik.configurable) !== Vi[33] || typeof Ik[Vi[233]] !== Vi[205] + Vi[206] || Sk !== ck
+           HS[hX[1]] = hX[2];
+           const gS = (hX[2], Yt.O)(bS, SS);
+           return (gS === hX[11] || gS === void hX[2] ? void hX[2] : gS.configurable) !== hX[8] || typeof gS[hX[79]] !== hX[49] + hX[50] || JS !== zS
```

#### 538. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5297` → after: `L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5029) · [Before (L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5297)

```diff
-             return navigator[Vi[227] + "tSub"]
+             return navigator[hX[73] + "tSub"]
```

#### 539. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5304-L5307` → after: `L5036-L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5036-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5036-L5040) · [Before (L5304-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5304-L5307)

```diff
-         mk = gk === Vi[15] ? ((...kk) => {
-           kk[Vi[0]] = Vi[1];
-           oi(kk[Vi[14]] = Vi[33], kk[Vi[209]] = 60 - Vi[2]);
-           const Fk = TextDecoder[Vi[210] + Vi[211]][Vi[212]],
+         TS = RS === hX[11] ? ((...SS) => {
+           SS[hX[1]] = hX[2];
+           const HS = hX[47];
+           JX(SS[-hX[53]] = hX[8], SS[hX[30]] = HS - hX[0]);
+           const gS = TextDecoder[hX[54] + hX[55]][hX[56]],
```

#### 540. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5309-L5311` → after: `L5042-L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5042-L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5042-L5044) · [Before (L5309-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5309-L5311)

```diff
-               kk[Vi[209]]++, 60 === kk[Vi[209]] && (wi((() => jk(Vi[33]))) && (kk[Vi[14]] = Vi[30]), kk[Vi[209]] = Vi[1]);
-               for (var Ik = arguments[Vi[0]], Xk = new Array(Ik), Tk = Vi[1]; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
-               return (Vi[1], pX[Vi[207]])(Fk, this, Xk)
+               SS[hX[30]]++, SS[hX[30]] === HS && (jX((() => aS(hX[8]))) && (SS[-hX[53]] = hX[10]), SS[hX[30]] = hX[2]);
+               for (var tS = arguments[hX[1]], bS = new Array(tS), XS = hX[2]; XS < tS; XS++) bS[XS] = arguments[XS];
+               return (hX[2], Yt[hX[51]])(gS, this, bS)
```

#### 541. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5314-L5328` → after: `L5047-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5047-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5047-L5061) · [Before (L5314-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5314-L5328)

```diff
-             TextDecoder[Vi[210] + Vi[211]][Vi[212]] = Ik
-           })), () => kk[Vi[14]] ? Vi[3] : Ji((() => TextDecoder[Vi[210] + Vi[211]][Vi[212]] !== Ik ? Vi[36] : Vi[1]))
-         })() : () => Ji((() => gk[Vi[225] + Vi[226]]())),
-         hk = (Vi[1], zF[Vi[203]])(),
-         rk = (Vi[1], pX[Vi[42]])(Vi[15]),
-         Dk = (Vi[1], pX[Vi[42]])(Vi[15]);
-       let Mk = Vi[1],
-         kF = Vi[1],
-         FF = Vi[1];
-       const IF = (Vi[1], pX[Vi[42]])(Vi[15]),
-         XF = (Vi[1], pX[Vi[42]])(Vi[15]);
-       let TF = Vi[15],
-         iF = (Vi[1], pX[Vi[42]])(Vi[15]);
-       const yF = (kk, Fk) => {
-           oi(rk[Mk] = kk, Dk[Mk] = Fk, Mk++)
+             TextDecoder[hX[54] + hX[55]][hX[56]] = tS
+           })), () => SS[-hX[53]] ? hX[3] : CX((() => TextDecoder[hX[54] + hX[55]][hX[56]] !== tS ? hX[19] : hX[2]))
+         })() : () => CX((() => RS[hX[71] + hX[72]]())),
+         oS = (hX[2], hH[hX[46]])(),
+         lS = (hX[2], Yt[hX[38]])(hX[11]),
+         mS = (hX[2], Yt[hX[38]])(hX[11]);
+       let eS = hX[2],
+         rS = hX[2],
+         SH = hX[2];
+       const HH = (hX[2], Yt[hX[38]])(hX[11]),
+         gH = (hX[2], Yt[hX[38]])(hX[11]);
+       let tH = hX[11],
+         bH = (hX[2], Yt[hX[38]])(hX[11]);
+       const XH = (...SS) => {
+           JX(SS[hX[1]] = hX[3], lS[eS] = SS[hX[2]], mS[eS] = SS[hX[0]], eS++)
```

#### 542. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5330-L5332` → after: `L5063-L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5063-L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5063-L5065) · [Before (L5330-L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5330-L5332)

```diff
-         lF = (...kk) => (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[12]), (kk[Vi[14]] = (Dk[kk[Vi[1]]] ? XF : IF)[rk[kk[Vi[1]]]]) !== Vi[15] && kk[Vi[14]] !== void Vi[1] ? kk[Vi[14]] : -Vi[2]),
-         aF = (Vi[1], pX[Vi[16]])("d2lvNjQz"),
-         qF = (Vi[1], pX[Vi[16]])("amtsa2plZndu"),
+         xH = (...SS) => (JX(SS[hX[1]] = hX[0], SS[hX[0]] = hX[4]), (SS[hX[0]] = (mS[SS[hX[2]]] ? gH : HH)[lS[SS[hX[2]]]]) !== hX[11] && SS[hX[0]] !== void hX[2] ? SS[hX[0]] : -hX[0]),
+         NH = (hX[2], Yt[hX[13]])("d2lvNjQz"),
+         qH = (hX[2], Yt[hX[13]])("amtsa2plZndu"),
```

#### 543. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5334-L5336` → after: `L5067-L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5067-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5067-L5069) · [Before (L5334-L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5334-L5336)

```diff
-           [(Vi[1], pX[Vi[16]])("aW9qZndlODNq"), "2"],
-           [(Vi[1], pX[Vi[16]])("a3Bq"), Vi[213]],
-           [(Vi[1], pX[Vi[16]])("dXJocmZm"), "5"]
+           [(hX[2], Yt[hX[13]])("aW9qZndlODNq"), "2"],
+           [(hX[2], Yt[hX[13]])("a3Bq"), "4"],
+           [(hX[2], Yt[hX[13]])("dXJocmZm"), "5"]
```

#### 544. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5339-L5340` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5072-L5073) · [Before (L5339-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5339-L5340)

```diff
-           [(Vi[1], pX[Vi[16]])(Vi[215] + Vi[214]), Vi[243]],
-           [(Vi[1], pX[Vi[16]])(Vi[215] + "w="), "o"]
+           [(hX[2], Yt[hX[13]])(hX[58] + hX[57]), hX[91]],
+           [(hX[2], Yt[hX[13]])(hX[58] + "w="), hX[51]]
```

#### 545. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5342-L5344` → after: `L5075-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5075-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5075-L5077) · [Before (L5342-L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5342-L5344)

```diff
-         jF = (Vi[1], pX[Vi[16]])("eTR5bnM="),
-         eF = (Vi[1], pX[Vi[16]])("aHRleWpldA=="),
-         wF = (Vi[1], pX[Vi[16]])("c2RmbGpneGxmY2pr"),
+         kH = (hX[2], Yt[hX[13]])("eTR5bnM="),
+         aH = (hX[2], Yt[hX[13]])("aHRleWpldA=="),
+         KH = (hX[2], Yt[hX[13]])("c2RmbGpneGxmY2pr"),
```

#### 546. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5346-L5350` → after: `L5079-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5079-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5079-L5083) · [Before (L5346-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5346-L5350)

```diff
-           [(Vi[1], pX[Vi[16]])("a3NhZmR1"), Vi[16]],
-           [(Vi[1], pX[Vi[16]])("ZGZnYWFzZGFz"), Vi[216]],
-           [wF, Vi[219]],
-           [(Vi[1], pX[Vi[16]])("bGFzZWRraGFz"), Vi[217]],
-           [(Vi[1], pX[Vi[16]])("cW16ZjhrM24="), Vi[14]]
+           [(hX[2], Yt[hX[13]])("a3NhZmR1"), hX[38]],
+           [(hX[2], Yt[hX[13]])("ZGZnYWFzZGFz"), hX[65]],
+           [KH, hX[61]],
+           [(hX[2], Yt[hX[13]])("bGFzZWRraGFz"), hX[13]],
+           [(hX[2], Yt[hX[13]])("cW16ZjhrM24="), hX[20]]
```

#### 547. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5353-L5355` → after: `L5086-L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5086-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5086-L5088) · [Before (L5353-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5353-L5355)

```diff
-           [jF, Vi[234]],
-           [eF, Vi[218]],
-           [(Vi[1], pX[Vi[16]])("bmI3ZnEy"), Vi[11]]
+           [kH, hX[80]],
+           [aH, hX[59]],
+           [(hX[2], Yt[hX[13]])("bmI3ZnEy"), hX[5]]
```

#### 548. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5357-L5358` → after: `L5090-L5091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5090-L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5090-L5091) · [Before (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5357-L5358)

```diff
-         xF = (Vi[1], pX[Vi[16]])("bGtxM20="),
-         PF = (Vi[1], pX[Vi[16]])("bWtxN3" + Vi[214]),
+         CH = (hX[2], Yt[hX[13]])("bGtxM20="),
+         nH = (hX[2], Yt[hX[13]])("bWtxN3" + hX[57]),
```

#### 549. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5361` → after: `L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5094) · [Before (L5361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5361)

```diff
-           kk[Vi[0]] = Vi[1];
+           SS[hX[1]] = hX[2];
```

#### 550. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5363` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5096) · [Before (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5363)

```diff
-             return kk[Vi[200]] = Vi[12], (kk[Vi[200]] = Tk[(Vi[1], pX[Vi[16]])("V2ViU29ja2V0")]) === Vi[15] || kk[Vi[200]] === void Vi[1] ? void Vi[1] : kk[Vi[200]][Vi[210] + Vi[211]]
+             return SS[hX[60]] = hX[4], (SS[hX[60]] = bS[(hX[2], Yt[hX[13]])("V2ViU29ja2V0")]) === hX[11] || SS[hX[60]] === void hX[2] ? void hX[2] : SS[hX[60]][hX[54] + hX[55]]
```

#### 551. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5365` → after: `L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5098) · [Before (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5365)

```diff
-             return Vi[12]
+             return hX[4]
```

#### 552. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5368-L5379` → after: `L5101-L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5101-L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5101-L5123) · [Before (L5368-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5368-L5379)

```diff
-         sF = ["send", "close", "addEventListener", "removeEventListener", Vi[223] + Vi[222] + Vi[219]],
-         VF = ["onmessage", "onopen", "onclos" + Vi[73], "onerro" + Vi[16]];
-       let SF = Vi[33];
-       const oF = (Vi[1], pX[Vi[16]])("RXZlbnQ=");
-       let vF = fF[Vi[221]][Vi[237]],
-         EF = Vi[1];
-       const OF = () => EF++ === Vi[28] ? (EF = Vi[1], jk(Vi[33]) ? fF[Vi[5]].CheckFuncHit : Vi[1]) : Vi[1],
-         nF = (Vi[1], pX[Vi[42]])(Vi[15]),
-         GF = Xk[Vi[0]];
-       for (let ak = Vi[1]; ak < GF; ak++) {
-         const kk = (Vi[1], pX[Vi[207]])(pX.bb, Xk, [ak]);
-         nF[ak] = kk >= Vi[195] && kk <= Vi[190] ? kk : Vi[1]
+         DH = ["send", "close", "addEventListener", "removeEventListener", hX[67] + hX[66] + hX[61]],
+         wH = ["onmessage", "onopen", "onclos" + hX[29], "onerro" + hX[38]];
+       let ZH = hX[8];
+       const JH = () => {
+           const SS = HS();
+           SS === hX[11] || ZH || (ZH = nS((() => {
+             if (QH !== hX[4] && (hX[2], Yt[hX[62]])(SS) !== QH) return hX[10];
+             for (let HS = hX[2]; HS < DH[hX[1]]; HS++)
+               if ((hX[2], Yt[hX[51]])(Yt[hX[63]], SS, [DH[HS]])) return hX[10];
+             for (let HS = hX[2]; HS < wH[hX[1]]; HS++)
+               if (SS[wH[HS]] !== hX[11] && SS[wH[HS]] !== hX[4]) return hX[10];
+             return hX[8]
+           })))
+         },
+         OH = (hX[2], Yt[hX[13]])("RXZlbnQ=");
+       let dH = pH[hX[64]][hX[82]],
+ ... (7 more added lines; see GitHub link above)
```

#### 553. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5382` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5126) · [Before (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5382)

```diff
-           return kk[Vi[0]] = Vi[3], typeof kk[Vi[1]] === Vi[205] + Vi[206] && (Vi[1], pX[Vi[207]])(pX.R, kk[Vi[2]], [(Fk = kk[Vi[1]], (0, pX.k)(pX.x, Fk, []))]) !== Vi[15];
+           return SS[hX[1]] = hX[3], typeof SS[hX[2]] === hX[49] + hX[50] && (hX[2], Yt[hX[51]])(Yt.W, SS[hX[0]], [(HS = SS[hX[2]], (0, Yt.o)(Yt.C, HS, []))]) !== hX[11];
```

#### 554. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5388-L5390` → after: `L5132-L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5132-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5132-L5134) · [Before (L5388-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5388-L5390)

```diff
-           [Ki["Dispat" + Vi[222] + Vi[219]], () => !pF(EventTarget[Vi[210] + Vi[211]][Vi[223] + Vi[222] + Vi[219]], uF)],
-           [Ki.PerformanceNow, () => !pF(performance[Vi[224]], bF)],
-           [Ki.DateNow, () => !pF(Date[Vi[224]], bF)]
+           [QX["Dispat" + hX[66] + hX[61]], () => !YH(EventTarget[hX[54] + hX[55]][hX[67] + hX[66] + hX[61]], AH)],
+           [QX.PerformanceNow, () => !YH(performance[hX[68]], yH)],
+           [QX.DateNow, () => !YH(Date[hX[68]], yH)]
```

#### 555. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5392-L5393` → after: `L5136-L5137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5136-L5137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5136-L5137) · [Before (L5392-L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5392-L5393)

```diff
-         UF = (Vi[1], pX[Vi[42]])(Vi[15]);
-       let CF = Vi[1];
+         iH = (hX[2], Yt[hX[38]])(hX[11]);
+       let WH = hX[2];
```

#### 556. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5395-L5397` → after: `L5139-L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5139-L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5139-L5141) · [Before (L5395-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5395-L5397)

```diff
-         stackCheck: () => {
-           let kk = Vi[15];
-           const Fk = wi((() => (kk = Zk(Vi[30]), kk !== Vi[15])));
+         stackCheck: (...SS) => {
+           JX(SS[hX[1]] = hX[2], SS[hX[70]] = hX[11]);
+           const HS = jX((() => (SS[hX[70]] = kS(hX[10]), SS[hX[70]] !== hX[11])));
```

#### 557. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5399` → after: `L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5143) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5399)

```diff
-           return kk !== Vi[15] && ek === Vi[15] && (Ik = kk[Vi[20]], Xk = kk[Vi[21]], ek = (0, MT.r)(qi(Ik, Xk))), Fk
+           return SS[hX[70]] !== hX[11] && KS === hX[11] && (gS = SS[hX[70]][hX[23]], tS = SS[hX[70]][hX[24]], KS = (0, rb.y)(uX(gS, tS))), HS
```

#### 558. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5401-L5402` → after: `L5145-L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5145-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5145-L5146) · [Before (L5401-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5401-L5402)

```diff
-         [Vi[225] + Vi[226]]: (...kk) => {
-           kk[Vi[0]] = Vi[1];
+         [hX[71] + hX[72]]: (...SS) => {
+           SS[hX[1]] = hX[2];
```

#### 559. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5405-L5407` → after: `L5149-L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5149-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5149-L5151) · [Before (L5405-L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5405-L5407)

```diff
-           if (zk[aF]) return Vi[4];
-           const Ik = Ji((() => Tk[qF] ? Vi[38] : Vi[1]));
-           return Ik !== Vi[1] ? Ik === Vi[38] ? Vi[38] : Vi[1] : Fk === Hi ? Vi[1] : Fk === Vi[36] ? Vi[36] : (Kk(), Xk = Function[Vi[210] + Vi[211]], ik = Vi[232], yk = (...kk) => (kk[Vi[0]] = Vi[2], kk[Vi[1]].writable !== Vi[30]), wi((() => {
+           if (ZS[NH]) return hX[12];
+           const gS = CX((() => bS[qH] ? hX[17] : hX[2]));
+           return gS !== hX[2] ? gS === hX[17] ? hX[17] : hX[2] : HS === GX ? hX[2] : HS === hX[19] ? hX[19] : (QS(), tS = Function[hX[54] + hX[55]], XS = hX[78], xS = (...SS) => (SS[hX[1]] = hX[0], SS[hX[2]].writable !== hX[10]), jX((() => {
```

#### 560. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5410` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5154) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5410)

```diff
-           })) ? Vi[68] : Vi[1]);
+           })) ? hX[21] : hX[2]);
```

#### 561. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5414-L5415` → after: `L5158-L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5158-L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5158-L5159) · [Before (L5414-L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5414-L5415)

```diff
-         [Vi[227] + "tSubChanged"]: (...kk) => {
-           if (kk[Vi[0]] = Vi[1], Ak === dk || Wk) return Vi[33];
+         [hX[73] + "tSubChanged"]: () => {
+           if (FS === BS || US) return hX[8];
```

#### 562. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5419-L5423` → after: `L5163-L5167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5163-L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5163-L5167) · [Before (L5419-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5419-L5423)

```diff
-         eq: (...kk) => {
-           oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = GF);
-           for (let Fk = Vi[1]; Fk < RF[Vi[0]] + CF; Fk++) {
-             const Ik = Fk < RF[Vi[0]] ? RF[Fk] : UF[Fk - RF[Vi[0]]];
-             Ik[Vi[1]] < kk[Vi[14]] && xk(Ik[Vi[2]]) && (kk[Vi[14]] = Ik[Vi[1]])
+         Ku: (...SS) => {
+           JX(SS[hX[1]] = hX[2], SS[-hX[69]] = LH);
+           for (let HS = hX[2]; HS < VH[hX[1]] + WH; HS++) {
+             const gS = HS < VH[hX[1]] ? VH[HS] : iH[HS - VH[hX[1]]];
+             gS[hX[2]] < SS[-hX[69]] && nS(gS[hX[0]]) && (SS[-hX[69]] = gS[hX[2]])
```

#### 563. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5425` → after: `L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5169) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5425)

```diff
-           return kk[Vi[14]] < GF ? nF[kk[Vi[14]]] : Vi[1]
+           return SS[-hX[69]] < LH ? EH[SS[-hX[69]]] : hX[2]
```

#### 564. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5427-L5430` → after: `L5171-L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5171-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5171-L5175) · [Before (L5427-L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5427-L5430)

```diff
-         Bq: () => hk ? zF[Vi[228]] : Vi[8],
-         [Vi[229] + Vi[230] + "Subs"]: () => {
-           const kk = ak[Vi[5]].mH[Vi[229] + Vi[230]];
-           return typeof kk === Vi[231] && kk > Vi[1] ? kk > Vi[74] ? Vi[74] : kk : Vi[1]
+         Mu: () => oS ? hH.n : 8,
+         [hX[74] + hX[75] + "Subs"]: (...SS) => {
+           SS[hX[1]] = hX[2];
+           const HS = qS[hX[81]].rG[hX[74] + hX[75]];
+           return typeof HS === hX[76] && HS > hX[2] ? HS > hX[77] ? hX[77] : HS : hX[2]
```

#### 565. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5432-L5439` → after: `L5177-L5185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5177-L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5177-L5185) · [Before (L5432-L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5432-L5439)

```diff
-         ["getCom" + Vi[242]]: (...kk) => {
-           oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[12], Mk = Vi[1]);
-           for (let Ik = Vi[1]; Ik < nk; Ik++) yF(Ok[Ik], Vi[30]);
-           for (let Ik = Vi[1]; Ik < LF[Vi[0]]; Ik++) zk[LF[Ik][Vi[1]]] && yF(LF[Ik][Vi[2]], Vi[30]);
-           const Fk = Ji((() => ei(atob[Vi[232]](), Lk) ? Vi[1] : Vi[2]));
-           Fk === Vi[2] && yF(Vi[5], Vi[30]), Kk();
-           const Xk = Fk === Hi ? Hi : Ji(((...kk) => {
-             kk[Vi[0]] = Vi[1];
+         ["getCom" + hX[90]]: () => {
+           var SS;
+           eS = hX[2];
+           for (let gS = hX[2]; gS < vS; gS++) XH(cS[gS], hX[10]);
+           for (let gS = hX[2]; gS < uH[hX[1]]; gS++) ZS[uH[gS][hX[2]]] && XH(uH[gS][hX[0]], hX[10]);
+           const HS = CX((() => KX(atob[hX[78]](), IS) ? hX[2] : hX[0]));
+           HS === hX[0] && XH("g", hX[10]), QS();
+           const tS = HS === GX ? GX : CX(((...SS) => {
+             SS[hX[1]] = hX[2];
```

#### 566. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5441` → after: `L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5187) · [Before (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5441)

```diff
-             return Fk === Vi[12] ? Hi : Fk[Vi[233]] !== Vi[12] ? Vi[2] : Vi[1]
+             return HS === hX[4] ? GX : HS[hX[79]] !== hX[4] ? hX[0] : hX[2]
```

#### 567. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5443` → after: `L5189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5189) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5443)

```diff
-           Xk === Vi[2] && yF(Vi[236], Vi[30]);
+           tS === hX[0] && XH(hX[25], hX[10]);
```

#### 568. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5445` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5191) · [Before (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5445)

```diff
-           for (let Ik = Vi[1]; Ik < ZF[Vi[0]] && !Tk; Ik++) zk[ZF[Ik][Vi[1]]] && yF(ZF[Ik][Vi[2]], Vi[30]);
+           for (let gS = hX[2]; gS < fH[hX[1]] && !bS; gS++) ZS[fH[gS][hX[2]]] && XH(fH[gS][hX[0]], hX[10]);
```

#### 569. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5447-L5448` → after: `L5193-L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5193-L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5193-L5195) · [Before (L5447-L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5447-L5448)

```diff
-           kk[Vi[2]] = Vi[15], nk === Vi[1] && (pk > Vi[1] ? kk[Vi[2]] = Gk[Vi[1]] : Rk ? kk[Vi[2]] = "fp" : ik || (kk[Vi[2]] = zk[jF] ? Vi[234] : zk[eF] ? Vi[218] : Vi[15]));
-           for (let Ik = Vi[1]; Ik < HF[Vi[0]] && !Tk; Ik++) zk[HF[Ik][Vi[1]]] && yF(HF[Ik][Vi[2]], Vi[30]);
+           let xS = hX[11];
+           vS === hX[2] && (LS > hX[2] ? xS = ES[hX[2]] : yS ? xS = "fp" : XS || (xS = ZS[kH] ? hX[80] : ZS[aH] ? hX[59] : hX[11]));
+           for (let gS = hX[2]; gS < jH[hX[1]] && !bS; gS++) ZS[jH[gS][hX[2]]] && XH(jH[gS][hX[0]], hX[10]);
```

#### 570. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5450-L5455` → after: `L5197-L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5197-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5197-L5202) · [Before (L5450-L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5450-L5455)

```diff
-             lk = (Vi[1], Xi[Vi[22]])(),
-             ak = lk !== Vi[15] && (Vi[1], tF[Vi[218]])(lk);
-           ak && !Tk && yF(lk, Vi[33]), Bk && yF("ix", Vi[33]), Ek && yF("il", Vi[33]);
-           for (let Ik = Vi[1]; Ik < pk; Ik++) yF(Gk[Ik], Vi[30]);
-           for (let Ik = Vi[1]; Ik < JF[Vi[0]]; Ik++) zk[JF[Ik][Vi[1]]] && yF(JF[Ik][Vi[2]], Vi[30]);
-           zk[xF] && yF("mk:lk", Vi[30]);
+             qS = (hX[2], tX[hX[5]])(),
+             uS = qS !== hX[11] && (hX[2], IH[hX[38]])(qS);
+           uS && !bS && XH(qS, hX[8]), sS && XH("ix", hX[8]), dS && XH("il", hX[8]);
+           for (let gS = hX[2]; gS < LS; gS++) XH(ES[gS], hX[10]);
+           for (let gS = hX[2]; gS < GH[hX[1]]; gS++) ZS[GH[gS][hX[2]]] && XH(GH[gS][hX[0]], hX[10]);
+           ZS[CH] && XH("mk:lk", hX[10]);
```

#### 571. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5457-L5460` → after: `L5204-L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5204-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5204-L5207) · [Before (L5457-L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5457-L5460)

```diff
-             kk[Vi[0]] = Vi[2];
-             for (let Fk = Vi[1]; Fk < KF[Vi[0]]; Fk++)
-               if (kk[Vi[1]] === KF[Fk]) return KF[Fk];
-             return Vi[15]
+             SS[hX[1]] = hX[0];
+             for (let HS = hX[2]; HS < PH[hX[1]]; HS++)
+               if (SS[hX[2]] === PH[HS]) return PH[HS];
+             return hX[11]
```

#### 572. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5462-L5464` → after: `L5209-L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5209-L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5209-L5211) · [Before (L5462-L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5462-L5464)

```diff
-           if (qk !== Vi[15] && yF(qk, Vi[30]), Ik !== Vi[15] && Qk(Ik.emitReplaced) === Vi[30] && yF("mk:em", Vi[30]), SF && yF("3s", Vi[33]), pX.V && yF("3b", Vi[33]), Kk(), Pk && yF("3d", Vi[33]), Tk && yF("3g", Vi[33]), lk === Vi[15] || ak || yF(lk, Vi[33]), ek !== Vi[15] && y … [truncated]
-             const kk = Qk(Ik[Vi[225] + "mMeshHitStac" + Vi[207]]);
-             typeof kk === Vi[75] && (Jk = function(kk, Fk, Ik) {
+           if (kS !== hX[11] && XH(kS, hX[10]), gS !== hX[11] && DS(gS.emitReplaced) === hX[10] && XH("mk:em", hX[10]), ZH && XH("3s", hX[8]), Yt.X && XH("3b", hX[8]), QS(), PS && XH("3d", hX[8]), bS && XH("3g", hX[8]), qS === hX[11] || uS || XH(qS, hX[8]), KS !== hX[11] && XH(KS, … [truncated]
+             const SS = DS(gS[hX[71] + "mMeshHitStac" + hX[81]]);
+             typeof SS === hX[32] && (CS = function(SS, HS, gS) {
```

#### 573. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5467-L5468` → after: `L5214-L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5214-L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5214-L5215) · [Before (L5467-L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5467-L5468)

```diff
-               return (0, MT.j)(qi(kk, Xk < Ik ? Fk[Xk] : null))
-             }(kk, tk, tk[Vi[0]] - Vi[2]))
+               return (0, rb.k)(uX(SS, tS < gS ? HS[tS] : null))
+             }(SS, fS, fS[hX[1]] - hX[0]))
```

#### 574. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5471-L5474` → after: `L5218-L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5218-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5218-L5221) · [Before (L5471-L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5471-L5474)

```diff
-           if (Jk !== Vi[15] && yF(Jk, Vi[33]), wk === Vi[15] && zF[Vi[235]] !== Vi[15] && oi((Zk = zF[Vi[235]], wk = (0, MT.i)(Zi(Zk).reader)), Hk = ji(zF[Vi[235]], Qk((() => zF[Vi[73]] === Vi[15] ? Vi[15] : (Vi[1], pX.db)(zF[Vi[73]]))))), wk !== Vi[15] && yF(wk, Vi[33]), Hk !==  … [truncated]
-           if (kk[Vi[2]] === Vi[15] && Dk[Vi[1]] && !(Vi[1], MT[Vi[203]])(rk[Vi[1]]))
-             for (let Ik = Vi[2]; Ik < yk; Ik++)
-               if (Dk[Ik] && (Vi[1], MT[Vi[203]])(rk[Ik])) {
+           if (CS !== hX[11] && XH(CS, hX[8]), jS === hX[11] && hH[hX[27]] !== hX[11] && JX((aS = hH[hX[27]], jS = (0, rb.j)(kX(aS).reader)), GS = aX(hH[hX[27]], DS((() => hH[hX[29]] === hX[11] ? hX[11] : (hX[2], Yt.gb)(hH[hX[29]]))))), jS !== hX[11] && XH(jS, hX[8]), GS !== hX[11 … [truncated]
+           if (xS === hX[11] && mS[hX[2]] && !(hX[2], rb[hX[46]])(lS[hX[2]]))
+             for (let gS = hX[0]; gS < NS; gS++)
+               if (mS[gS] && (hX[2], rb[hX[46]])(lS[gS])) {
```

#### 575. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5476-L5477` → after: `L5223-L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5223-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5223-L5224) · [Before (L5476-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5476-L5477)

```diff
-                 for (let Fk = Ik; Fk > Vi[1]; Fk--) oi(rk[Fk] = rk[Fk - Vi[2]], Dk[Fk] = Dk[Fk - Vi[2]]);
-                 oi(rk[Vi[1]] = kk, Dk[Vi[1]] = Vi[30]);
+                 for (let HS = gS; HS > hX[2]; HS--) JX(lS[HS] = lS[HS - hX[0]], mS[HS] = mS[HS - hX[0]]);
+                 JX(lS[hX[2]] = SS, mS[hX[2]] = hX[10]);
```

#### 576. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5479-L5481` → after: `L5226-L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5226-L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5226-L5230) · [Before (L5479-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5479-L5481)

```diff
-               } if (oi(kk[Vi[73]] = Vi[1], kk[Vi[236]] = kk[Vi[2]] === Vi[15] ? Vi[1] : yk), kk[Vi[236]] > Vi[1] && lk !== Vi[15] && ak && !Tk) {
-             for (let Fk = kk[Vi[236]]; Fk > Vi[1]; Fk--) oi(rk[Fk] = rk[Fk - Vi[2]], Dk[Fk] = Dk[Fk - Vi[2]]);
-             oi(rk[Vi[1]] = lk, Dk[Vi[1]] = Vi[33], kk[Vi[73]] = Vi[2], kk[Vi[236]]++)
+               } let nS = hX[2],
+             wS = xS === hX[11] ? hX[2] : NS;
+           if (wS > hX[2] && qS !== hX[11] && uS && !bS) {
+             for (let SS = wS; SS > hX[2]; SS--) JX(lS[SS] = lS[SS - hX[0]], mS[SS] = mS[SS - hX[0]]);
+             JX(lS[hX[2]] = qS, mS[hX[2]] = hX[8], nS = hX[0], wS++)
```

#### 577. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5483-L5490` → after: `L5232-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5232-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5232-L5240) · [Before (L5483-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5483-L5490)

```diff
-           if (kk[Vi[38]] = Vi[1], kF++ % Vi[3] === Vi[2])
-             for (let Ik = Vi[2]; Ik < Mk; Ik++) lF(Ik) < lF(kk[Vi[38]]) && (kk[Vi[38]] = Ik);
-           const jk = rk[kk[Vi[38]]];
-           (Dk[kk[Vi[38]]] ? XF : IF)[jk] = FF++;
-           const xk = kk[Vi[38]] >= kk[Vi[73]] && kk[Vi[38]] < kk[Vi[236]];
-           if (!Dk[kk[Vi[38]]] || jk === kk[Vi[2]] || kk[Vi[38]] === Vi[1] && !xk) return jk === Vi[219] ? (Vi[1], MT[Vi[219]])(zk[wF], MT[Vi[7]]) : jk;
-           const sk = (kk[Vi[22]] = kk[Vi[2]]) !== Vi[15] && kk[Vi[22]] !== void Vi[1] ? kk[Vi[22]] : rk[Vi[1]];
-           return sk !== TF && oi(TF = sk, iF = (Vi[1], pX[Vi[42]])(Vi[15])), iF[jk] ??= (Vi[1], MT[Vi[218]])(jk, sk)
+           let hS = hX[2];
+           if (rS++ % hX[3] === hX[0])
+             for (let gS = hX[0]; gS < eS; gS++) xH(gS) < xH(hS) && (hS = gS);
+           const JS = lS[hS];
+           (mS[hS] ? gH : HH)[JS] = SH++;
+           const OS = hS >= nS && hS < wS;
+           if (!mS[hS] || JS === xS || hS === hX[2] && !OS) return JS === hX[61] ? (hX[2], rb.A)(ZS[KH], rb[hX[29]]) : JS;
+           const YS = (SS = xS) !== hX[11] && SS !== void hX[2] ? SS : lS[hX[2]];
+           return YS !== tH && JX(tH = YS, bH = (hX[2], Yt[hX[38]])(hX[11])), bH[JS] ??= (hX[2], rb[hX[13]])(JS, YS)
```

#### 578. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5493-L5495` → after: `L5243-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5243-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5243-L5245) · [Before (L5493-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5493-L5495)

```diff
-       let cF = fF[Vi[221]][Vi[237]];
-       const WF = () => vF !== fF[Vi[221]][Vi[237]] ? vF : cF;
-       let BF = Vi[1],
+       let UH = pH[hX[64]][hX[82]];
+       const sH = () => dH !== pH[hX[64]][hX[82]] ? dH : UH;
+       let BH = hX[2],
```

#### 579. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5497-L5498` → after: `L5247-L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5247-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5247-L5248) · [Before (L5497-L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5497-L5498)

```diff
-         YF = Vi[1],
-         AF = Vi[1];
+         FH = hX[2],
+         RH = hX[2];
```

#### 580. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5502` → after: `L5252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5252) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5502)

```diff
-           kk[Vi[0]] = Vi[2];
+           SS[hX[1]] = hX[0];
```

#### 581. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5505-L5509` → after: `L5255-L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5255-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5255-L5259) · [Before (L5505-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5505-L5509)

```diff
-             if (typeof Fk === Vi[205] + Vi[206] && !(kk[Vi[1]] instanceof Fk) && !(Vi[1], pX.D)(kk[Vi[1]])) return vF = fF[Vi[221]].NotEvent, Vi[1];
-             if (kk[Vi[1]].isTrusted === Vi[33]) return Vi[1];
-             let Ik = Vi[1];
-             for (const Xk in kk[Vi[1]]) Ik++;
-             return Ik < Vi[70] ? (vF = fF[Vi[221]]["FewPropertie" + Vi[216]], Vi[1]) : OF()
+             if (typeof HS === hX[49] + hX[50] && !(SS[hX[2]] instanceof HS) && !(hX[2], Yt.F)(SS[hX[2]])) return dH = pH[hX[64]].NotEvent, hX[2];
+             if (SS[hX[2]].isTrusted === hX[8]) return hX[2];
+             let gS = hX[2];
+             for (const tS in SS[hX[2]]) gS++;
+             return gS < hX[85] ? (dH = pH[hX[64]]["FewPropertie" + hX[65]], hX[2]) : vH()
```

#### 582. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5511` → after: `L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5261) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5511)

```diff
-           return Vi[1]
+           return hX[2]
```

#### 583. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5517` → after: `L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5267) · [Before (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5517)

```diff
-             return Vi[1]
+             return hX[2]
```

#### 584. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5521-L5522` → after: `L5271-L5272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5271-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5271-L5272) · [Before (L5521-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5521-L5522)

```diff
-         watchHeld: (...kk) => {
-           oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = Vi[12]);
+         watchHeld: (SS, HS) => {
+           let gS;
```

#### 585. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5524` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5274) · [Before (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5524)

```diff
-             kk[Vi[3]] = kk[Vi[2]]()
+             gS = HS()
```

#### 586. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5526` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5276) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5526)

```diff
-           UF[CF++] = [kk[Vi[1]], () => !Fk || kk[Vi[2]]() !== kk[Vi[3]]]
+           iH[WH++] = [SS, () => !tS || HS() !== gS]
```

#### 587. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5528` → after: `L5278-L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5278-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5278-L5279) · [Before (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5528)

```diff
-         Dt: () => {
+         mf: (...SS) => {
+           SS[hX[1]] = hX[2];
```

#### 588. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5531-L5533` → after: `L5282-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5282-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5282-L5284) · [Before (L5531-L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5531-L5533)

```diff
-             if (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[12], kk[Vi[3]] = Vi[12]), Ik !== Vi[15]) {
-               const Fk = Qk(Ik.RL),
-                 Xk = "v3" === Fk ? Vi[4] : "v5" === Fk ? Vi[28] : "v6" === Fk ? Vi[36] : Vi[3];
+             if (JX(SS[hX[1]] = hX[0], SS[-hX[83]] = hX[4], SS[hX[5]] = hX[4]), gS !== hX[11]) {
+               const HS = DS(gS.VI),
+                 tS = "v3" === HS ? hX[12] : "v5" === HS ? hX[7] : "v6" === HS ? hX[19] : hX[3];
```

#### 589. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5535-L5536` → after: `L5286-L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5286-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5286-L5287) · [Before (L5535-L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5535-L5536)

```diff
-               const Tk = Qk(Ik["inbuil" + Vi[240] + Vi[241]]);
-               typeof Tk === Vi[231] && Tk >= Vi[1] && Tk <= Vi[110] && (Tk | Vi[1]) === Tk && (YF = Tk), oi(kk[Vi[14]] = Qk(Ik.reflectApplyHit), kk[Vi[3]] = Qk(Ik.definerHit))
+               const bS = DS(gS["inbuil" + hX[88] + hX[89]]);
+               typeof bS === hX[76] && bS >= hX[2] && bS <= hX[84] && (bS | hX[2]) === bS && (FH = bS), JX(SS[-hX[83]] = DS(gS.reflectApplyHit), SS[hX[5]] = DS(gS.definerHit))
```

#### 590. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5538-L5552` → after: `L5289-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5289-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5289-L5292) · [Before (L5538-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5538-L5552)

```diff
-             const Fk = kk[Vi[1]] ? Vi[57] : "11" === kk[Vi[3]] ? Vi[110] : "13" === kk[Vi[3]] ? Vi[108] : kk[Vi[14]] !== Vi[12] && kk[Vi[14]] !== Vi[15] ? Vi[3] : "10" === kk[Vi[3]] ? Vi[70] : "12" === kk[Vi[3]] ? Vi[62] : Vi[1];
-             Fk !== Vi[1] && (AF = Fk)
-           })(kk), BF++ % 10 === Vi[1] && (((...kk) => {
-             kk[Vi[0]] = Vi[1];
-             const Ik = Fk();
-             Ik === Vi[15] || SF || (SF = xk((() => {
-               if (QF !== Vi[12] && (Vi[1], pX.M)(Ik) !== QF) return Vi[30];
-               for (let kk = Vi[1]; kk < sF[Vi[0]]; kk++)
-                 if ((Vi[1], pX[Vi[207]])(pX[Vi[220]], Ik, [sF[kk]])) return Vi[30];
-               for (let kk = Vi[1]; kk < VF[Vi[0]]; kk++)
-                 if (Ik[VF[kk]] !== Vi[15] && Ik[VF[kk]] !== Vi[12]) return Vi[30];
-               return Vi[33]
-             })))
-           })(), wi((() => !ei(Tk[ik][Vi[232]][Vi[232]](), Lk))) && (cF = cF === fF[Vi[221]][Vi[238]] ? fF[Vi[221]][Vi[238]] : fF[Vi[221]].Fr), wi((() => !ei(Tk[ik][Vi[232]](), Lk))) && (cF = fF[Vi[221]][Vi[238]])), {
-             flags: kk ? fF[Vi[5]].Butto : Vi[1],
+             const HS = SS[hX[2]] ? 15 : "11" === SS[hX[5]] ? hX[84] : "13" === SS[hX[5]] ? 13 : SS[-hX[83]] !== hX[4] && SS[-hX[83]] !== hX[11] ? hX[3] : "10" === SS[hX[5]] ? hX[85] : "12" === SS[hX[5]] ? 12 : hX[2];
+             HS !== hX[2] && (RH = HS)
+           })(HS), BH++ % 10 === hX[2] && (JH(), jX((() => !KX(bS[XS][hX[78]][hX[78]](), IS))) && (UH = UH === pH[hX[64]][hX[86]] ? pH[hX[64]][hX[86]] : pH[hX[64]].Fr), jX((() => !KX(bS[XS][hX[78]](), IS))) && (UH = pH[hX[64]][hX[86]])), {
+             flags: HS ? pH[hX[25]].Butto : hX[2],
```

#### 591. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5554-L5557` → after: `L5294-L5297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5294-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5294-L5297) · [Before (L5554-L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5554-L5557)

```diff
-               [fF[Vi[239]].PhysicsVersion, dF],
-               [fF[Vi[239]]["Inbuil" + Vi[240] + Vi[241]], YF],
-               [fF[Vi[239]]["AltCom" + Vi[242]], AF],
-               [fF[Vi[239]]["ProbeUsedPro" + Vi[243]], WF()]
+               [pH[hX[87]].PhysicsVersion, MH],
+               [pH[hX[87]]["Inbuil" + hX[88] + hX[89]], FH],
+               [pH[hX[87]]["AltCom" + hX[90]], RH],
+               [pH[hX[87]]["ProbeUsedPro" + hX[91]], sH()]
```

#### 592. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5655` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5395) · [Before (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5655)

```diff
-         if (this.stopped) return RF.d;
+         if (this.stopped) return yH.e;
```

#### 593. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5684` → after: `L5424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5424) · [Before (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5684)

```diff
-               Tk = UF(Xk > 0 ? Fk / Xk : Fk > 0 ? ak.volume : 0),
+               bS = VH(tS > 0 ? HS / tS : HS > 0 ? qS.volume : 0),
```

#### 594. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5714` → after: `L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5454) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5714)

```diff
-     }((0, SF.b)(), !0);
+     }((0, ZH.c)(), !0);
```

#### 595. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5758` → after: `L5498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5498) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5758)

```diff
-           console.error(`${vi} a startup listener threw`, Fk)
+           console.error(`${OX} a startup listener threw`, HS)
```

#### 596. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5834` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5574) · [Before (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5834)

```diff
-       console.warn(`${vi} chunk cancels from the server this session: ${kk}`)
+       console.warn(`${OX} chunk cancels from the server this session: ${SS}`)
```

#### 597. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5852` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5592) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5852)

```diff
-         this.GL = kk, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
+         this.cj = SS, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
```

#### 598. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5858` → after: `L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5598) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5858)

```diff
-         (0, OF.d)(kk) && (this.lossPending = !1);
+         (0, cH.c)(SS) && (this.lossPending = !1);
```

#### 599. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5860` → after: `L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5600) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5860)

```diff
-         this.lastFrameMs = Ik, this.lossPending && Fk && (0, OF.f)(kk) ? (null === this.undrawnSinceMs || Xk > 1e3) && (this.undrawnSinceMs = Ik) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Ik - this.undrawnSinceMs >= 2e3)
+         this.lastFrameMs = gS, this.lossPending && HS && (0, cH.h)(SS) ? (null === this.undrawnSinceMs || tS > 1e3) && (this.undrawnSinceMs = gS) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && gS - this.undrawnSinceMs >= 2e3)
```

#### 600. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5866` → after: `L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5606) · [Before (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5866)

```diff
-         kk !== this.shown && (this.shown = kk, this.GL(kk))
+         SS !== this.shown && (this.shown = SS, this.cj(SS))
```

#### 601. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5869` → after: `L5609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5609) · [Before (L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5869)

```diff
-       ak.g.GL(ek.e, kk)
+       qS.k.cj(KS.e, SS)
```

#### 602. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5879` → after: `L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5619) · [Before (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5879)

```diff
-       return Ty ??= Promise.all([Ik.e(198), Ik.e(142), Ik.e(59)]).then((() => Ik(50939))).then((kk => (Xy = kk, Object.assign(globalThis, {
+       return Hx ??= Promise.all([gS.e(198), gS.e(142), gS.e(59)]).then((() => gS(50984))).then((SS => (Sx = SS, Object.assign(globalThis, {
```

#### 603. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5887-L5888` → after: `L5627-L5628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5627-L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5627-L5628) · [Before (L5887-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5887-L5888)

```diff
-       return Iy ??= Ik.e(57).then((() => Ik(50964))).catch((kk => {
-         throw Iy = null, new Vk.e(kk)
+       return rX ??= gS.e(57).then((() => gS(51e3))).catch((SS => {
+         throw rX = null, new hS.c(SS)
```

#### 604. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5913-L5914` → after: `L5653-L5654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5653-L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5653-L5654) · [Before (L5913-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5913-L5914)

```diff
-       Fy || (Fy = !0, aT.h.setHost(new La), (0, vI.k)(), TT.f.setFollower(jq), Object.assign(globalThis, {
-         bloxdPreviews: aT.h
+       eX || (eX = !0, qb.i.setHost(new Nq), (0, Og.l)(), bb.d.setFollower(Iu), Object.assign(globalThis, {
+         bloxdPreviews: qb.i
```

#### 605. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5927` → after: `L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5667) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5927)

```diff
-       ky = !0, Ia = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Xa = !Ia, console.info(`${vi} starting`), Mi || (Mi = !0, (0, ek.O)(new pF(Ga, ca)), (0, Zk.q)(new uF), (0, ek.N)(new bF), (0, ek.E)()), Ia && ak.g.subscribe("appManagerUpda … [truncated]
+       mX = !0, rN = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Sq = !rN, console.info(`${OX} starting`), lX || (lX = !0, (0, KS.Q)(new LH(cq, iq)), (0, kS.n)(new YH), (0, KS.M)(new AH), (0, KS.C)()), rN && qS.k.subscribe("appManagerUpda … [truncated]
```

#### 606. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5935-L5936` → after: `L5675-L5676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5675-L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5675-L5676) · [Before (L5935-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5935-L5936)

```diff
-           ia = !0, (0, OI.S)(), null === (Ik = zl) || void 0 === Ik || Ik.abort(), zl = null, iT.b.release();
-           const Tk = Ia ? null !== (Xk = kk.cancel) && void 0 !== Xk ? Xk : "general:back" : null;
+           gq = !0, (0, cg.ab)(), null === (gS = DN) || void 0 === gS || gS.abort(), DN = null, Xb.b.release();
+           const bS = rN ? null !== (tS = SS.cancel) && void 0 !== tS ? tS : "general:back" : null;
```

#### 607. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5941` → after: `L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5681) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5941)

```diff
-             kk && Fk && ya ? ((0, eF.u)("reloadOntoJs"), (0, Yk.e)(eF.y)) : kk && Fk ? (0, Yk.i)() : Ia && (0, Yk.d)("/")
+             SS && HS && tq ? ((0, aH.u)("reloadOntoJs"), (0, MS.h)(aH.E)) : SS && HS ? (0, MS.k)() : rN && (0, MS.e)("/")
```

#### 608. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5944` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5684) · [Before (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5944)

```diff
-       })), (0, gX.m)(), (0, zF.l)();
+       })), (0, Tt.i)(), (0, hH.l)();
```

#### 609. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5947` → after: `L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5687) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5947)

```diff
-         Fk = si("fw2oddwvwjo", (() => {
+         HS = wX("qd0fzongj2", (() => {
```

#### 610. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5949` → after: `L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5689) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5949)

```diff
-           return null !== (kk = null === (Fk = Jy) || void 0 === Fk ? void 0 : Fk.ws) && void 0 !== kk ? kk : null
+           return null !== (SS = null === (HS = Kx) || void 0 === HS ? void 0 : HS.ws) && void 0 !== SS ? SS : null
```

#### 611. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5952` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5692) · [Before (L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5952)

```diff
-         console.error(`${vi} probes`, Tk)
+         console.error(`${OX} probes`, bS)
```

#### 612. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5955` → after: `L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5695) · [Before (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5955)

```diff
-         const kk = (0, OX.n)(),
+         const SS = (0, vt.o)(),
```

#### 613. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5969` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5709) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5969)

```diff
-             lobby: null !== (Fk = Ik.get("lobby")) && void 0 !== Fk ? Fk : null
+             lobby: null !== (HS = gS.get("lobby")) && void 0 !== HS ? HS : null
```

#### 614. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5972` → after: `L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5712) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5972)

```diff
-         if (kk) return (0, TF.j)(kk.game) && wq().request(), void Ha(kk.game, kk.lobby);
+         if (SS) return (0, tH.m)(SS.game) && ku().request(), void aq(SS.game, SS.lobby);
```

#### 615. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5978` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5718) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5978)

```diff
-               await (0, Vk.n)(kk), Zl = Ya(new WebSocket(Fk)), null !== Zl && iT.b.setGame(null), ea()
+               await (0, hS.i)(SS), uN = sq(new WebSocket(HS)), null !== uN && Xb.b.setGame(null), fq()
```

#### 616. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5980` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5720) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5980)

```diff
-               console.error(`${vi} ?ws=${Fk} did not attach`, Tk)
+               console.error(`${OX} ?ws=${HS} did not attach`, bS)
```

#### 617. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5987-L5988` → after: `L5727-L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5727-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5727-L5728) · [Before (L5987-L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5987-L5988)

```diff
-         const Lk = await (0, eT.Q)();
-         if ((0, VI.setCrashBackend)((0, XI.h)(Lk) ? "unsupported" : null !== (Fk = null === Lk || void 0 === Lk ? void 0 : Lk.backend) && void 0 !== Fk ? Fk : "none"), (0, XI.h)(Lk)) return lq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Lk.missing.join(", ")}`, {
+         const IS = await (0, Kb.P)();
+         if ((0, wg.setCrashBackend)((0, gg.m)(IS) ? "unsupported" : null !== (HS = null === IS || void 0 === IS ? void 0 : IS.backend) && void 0 !== HS ? HS : "none"), (0, gg.m)(IS)) return bu("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${IS.missing.join(", ")}`, {
```

#### 618. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5991` → after: `L5731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5731) · [Before (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5991)

```diff
-         if ((0, cT.o)("render")) try {
+         if ((0, Ub.q)("render")) try {
```

#### 619. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5994` → after: `L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5734) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5994)

```diff
-           } = await Promise.all([Ik.e(77), Ik.e(48)]).then((() => Ik(4676)));
+           } = await Promise.all([gS.e(77), gS.e(48)]).then((() => gS(4803)));
```

#### 620. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5999` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5739) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L5999)

```diff
-         if ((0, cT.o)("renderlite")) try {
+         if ((0, Ub.q)("renderlite")) try {
```

#### 621. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6002` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5742) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6002)

```diff
-           } = await Promise.all([Ik.e(269), Ik.e(49)]).then((() => Ik(50974)));
+           } = await Promise.all([gS.e(269), gS.e(49)]).then((() => gS(51012)));
```

#### 622. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6007` → after: `L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5747) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6007)

```diff
-         if ((0, cT.o)("renderprobe")) try {
+         if ((0, Ub.q)("renderprobe")) try {
```

#### 623. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6010` → after: `L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5750) · [Before (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6010)

```diff
-           } = await Ik.e(50).then((() => Ik(50977)));
+           } = await gS.e(50).then((() => gS(51018)));
```

#### 624. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6018` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5758) · [Before (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6018)

```diff
-           null === kk || "webgl" !== Lk.backend && !(0, wF.x)(kk) || (0, HF.m)(kk, VI.reportGpuWasmPopulation), null !== kk && (0, wF.p)(kk), tk = (0, oX.c)(Lk, kk)
+           null === SS || "webgl" !== IS.backend && !(0, KH.o)(SS) || (0, jH.n)(SS, wg.reportGpuWasmPopulation), null !== SS && (0, KH.l)(SS), fS = (0, Ot.b)(IS, SS)
```

#### 625. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6020-L6026` → after: `L5760-L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5760-L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5760-L5766) · [Before (L6020-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6020-L6026)

```diff
-         if (null !== Lk && null !== tk) return (0, VI.reportGpuFallback)(tk, Lk.backend), qq(`the wasm client's renderer plays this GPU (${tk}) on ${Lk.backend} worse than the JS client`, "gpu"), null;
-         const Zk = null !== (Xk = null === Lk || void 0 === Lk ? void 0 : Lk.backend) && void 0 !== Xk ? Xk : null;
-         Gl.adapter = null !== (ik = null === Lk || void 0 === Lk ? void 0 : Lk.adapter) && void 0 !== ik ? ik : null, Gl.boundAtMs = null, Gl.indirectHangs = null, Gl.restoresSkipped = null;
-         const jk = !(0, XI.P)();
-         null !== Lk && "none" !== Lk.reason && console.info(`${vi} drawing with ${Lk.backend}: ${Lk.reason}`);
-         const ek = (0, eT.F)();
-         ey(!0), (0, Vk.A)((kk => {
+         if (null !== IS && null !== fS) return (0, wg.reportGpuFallback)(fS, IS.backend), xu(`the wasm client's renderer plays this GPU (${fS}) on ${IS.backend} worse than the JS client`, "gpu"), null;
+         const kS = null !== (tS = null === IS || void 0 === IS ? void 0 : IS.backend) && void 0 !== tS ? tS : null;
+         cN.adapter = null !== (XS = null === IS || void 0 === IS ? void 0 : IS.adapter) && void 0 !== XS ? XS : null, cN.boundAtMs = null, cN.indirectHangs = null, cN.restoresSkipped = null;
+         const aS = !(0, gg.Z)();
+         null !== IS && "none" !== IS.reason && console.info(`${OX} drawing with ${IS.backend}: ${IS.reason}`);
+         const KS = (0, Kb.B)();
+         fx(!0), (0, hS.t)((SS => {
```

#### 626. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6030` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5770) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6030)

```diff
-               ul = kk.rasterText, el = kk.setTextLocalPlayer, kk.setTextLocalPlayer(null !== (Fk = null === (Ik = jl) || void 0 === Ik ? void 0 : Ik.info.playerDbId) && void 0 !== Fk ? Fk : null), bl = kk.drainTextRerasters, Rl = kk.loadTextIcons, kk.warmText((() => Al)), kk.text … [truncated]
+               EN = SS.rasterText, fN = SS.setTextLocalPlayer, SS.setTextLocalPlayer(null !== (HS = null === (gS = IN) || void 0 === gS ? void 0 : gS.info.playerDbId) && void 0 !== HS ? HS : null), LN = SS.drainTextRerasters, YN = SS.loadTextIcons, SS.warmText((() => BN)), SS.text … [truncated]
```

#### 627. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6040-L6041` → after: `L5780-L5781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5780-L5781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5780-L5781) · [Before (L6040-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6040-L6041)

```diff
-         })), (0, Vk.r)(qy).catch((kk => {
-           console.warn(`${vi} the game code did not load: a join asks again`, kk)
+         })), (0, hS.k)(xx).catch((SS => {
+           console.warn(`${OX} the game code did not load: a join asks again`, SS)
```

#### 628. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6043` → after: `L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5783) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6043)

```diff
-         const wk = (0, eT.l)(Lk);
+         const jS = (0, Kb.n)(IS);
```

#### 629. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6045` → after: `L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5785) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6045)

```diff
-         wk.catch((() => {})), "loading" === (0, aF.w)() && OT();
+         jS.catch((() => {})), "loading" === (0, NH.F)() && vb();
```

#### 630. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6048-L6052` → after: `L5788-L5792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5788-L5792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5788-L5792) · [Before (L6048-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6048-L6052)

```diff
-             const Fk = null !== kk && void 0 !== kk ? kk : document.createElement("canvas");
-             Fk.id = "wasm-game-canvas", (0, QT.k)();
-             const Ik = (0, GF.d)(),
-               Xk = (0, GF.e)(Ik);
-             Fk.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, KT.f)(Fk, Xk), (0, GF.c)(Fk, Ik), Fk.width = Xk.bufferWidth, Fk.height = Xk.bufferHeight;
+             const HS = null !== SS && void 0 !== SS ? SS : document.createElement("canvas");
+             HS.id = "wasm-game-canvas", (0, Db.j)();
+             const gS = (0, EH.e)(),
+               tS = (0, EH.g)(gS);
+             HS.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Qb.d)(HS, tS), (0, EH.b)(HS, gS), HS.width = tS.bufferWidth, HS.height = tS.bufferHeight;
```

#### 631. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6061` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5801) · [Before (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6061)

```diff
-             (0, VI.showUnsupported)((0, sX.l)("fetch"), mT.g.fetch, `the previews did not load: ${String(Tk)}`)
+             (0, wg.showUnsupported)((0, wt.n)("fetch"), ob.e.fetch, `the previews did not load: ${String(bS)}`)
```

#### 632. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6072` → after: `L5812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5812) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6072)

```diff
-             (0, VI.showUnsupported)((0, sX.l)("fetch"), mT.g.fetch, `the ${null!==Zk&&void 0!==Zk?Zk:"client"} build did not load: ${String(Tk)}`)
+             (0, wg.showUnsupported)((0, wt.n)("fetch"), ob.e.fetch, `the ${null!==kS&&void 0!==kS?kS:"client"} build did not load: ${String(bS)}`)
```

#### 633. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6075-L6078` → after: `L5815-L5818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5815-L5818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5815-L5818) · [Before (L6075-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6075-L6078)

```diff
-         const xk = (0, eT.f)(),
-           Pk = !xk && !0 !== pI.m.getItem(Ei),
-           Kk = !xk && "loading" === (0, aF.w)();
-         await (0, wT.b)(Jk, {
+         const nS = (0, Kb.g)(),
+           PS = !nS && !0 !== Lg.h.getItem(dX),
+           QS = !nS && "loading" === (0, NH.F)();
+         await (0, jb.e)(CS, {
```

#### 634. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6080` → after: `L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5820) · [Before (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6080)

```diff
-         }), Kk && !(0, aF.K)() && await (0, wT.b)(Jk, {
+         }), QS && !(0, NH.U)() && await (0, jb.e)(CS, {
```

#### 635. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6085-L6087` → after: `L5825-L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5825-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5825-L5827) · [Before (L6085-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6085-L6087)

```diff
-         if (!(0, aF.K)()) {
-           (0, aF.I)() && pI.m.setItem(Ei, !0);
-           const kk = (0, aF.n)();
+         if (!(0, NH.U)()) {
+           (0, NH.Q)() && Lg.h.setItem(dX, !0);
+           const SS = (0, NH.t)();
```

#### 636. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6089-L6090` → after: `L5829-L5830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5829-L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5829-L5830) · [Before (L6089-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6089-L6090)

```diff
-             site: TI.q,
-             error: (0, aF.m)(),
+             site: tg.s,
+             error: (0, NH.r)(),
```

#### 637. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6094` → after: `L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5834) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6094)

```diff
-             const Fk = null !== kk && void 0 !== kk ? kk : "instantiate",
+             const HS = null !== SS && void 0 !== SS ? SS : "instantiate",
```

#### 638. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6096` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5836) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6096)

```diff
-                 (0, VI.showUnsupported)((0, sX.l)(Fk), mT.g[Fk], (0, aF.k)())
+                 (0, wg.showUnsupported)((0, wt.n)(HS), ob.e[HS], (0, NH.l)())
```

#### 639. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6100` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5840) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6100)

```diff
-                 const kk = [Jk.url().href, ZF.f.url().href];
+                 const SS = [CS.url().href, fH.h.url().href];
```

#### 640. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6103` → after: `L5843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5843) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6103)

```diff
-                   error: (0, aF.k)(),
+                   error: (0, NH.l)(),
```

#### 641. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6108-L6110` → after: `L5848-L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5848-L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5848-L5850) · [Before (L6108-L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6108-L6110)

```diff
-               const Fk = (0, aF.k)(),
-                 Ik = (0, YF.b)((0, aF.m)());
-               (0, VI.reportCountedLoadFallback)((0, sX.l)(kk), mT.g[kk], Fk, Ik), qq(`the wasm client did not ${kk} here (${Fk})`, Ik ? "oom" : null)
+               const HS = (0, NH.l)(),
+                 gS = (0, MH.e)((0, NH.r)());
+               (0, wg.reportCountedLoadFallback)((0, wt.n)(SS), ob.e[SS], HS, gS), xu(`the wasm client did not ${SS} here (${HS})`, gS ? "oom" : null)
```

#### 642. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6114-L6115` → after: `L5854-L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5854-L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5854-L5855) · [Before (L6114-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6114-L6115)

```diff
-         }(0, qF.R)(Jk.url()) && (0, VI.reportUnstreamedCoreLoad)();
-         const zk = (0, aF.y)();
+         }(0, qH.Q)(CS.url()) && (0, wg.reportUnstreamedCoreLoad)();
+         const ZS = (0, NH.G)();
```

#### 643. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6120` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5860) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6120)

```diff
-             wasm: zk.Qt()
+             wasm: ZS.Qf()
```

#### 644. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6123-L6127` → after: `L5863-L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5863-L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5863-L5867) · [Before (L6123-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6123-L6127)

```diff
-             vH: kk
-           } = Jk.bindings, Fk = kk.DIk();
-           if (Fk !== fF.A) return Bq({
-             site: TI.d,
-             error: `core ABI ${Fk}, page ABI ${fF.A}`,
+             vG: SS
+           } = CS.bindings, HS = SS.sgS();
+           if (HS !== pH.z) return Uu({
+             site: tg.c,
+             error: `core ABI ${HS}, page ABI ${pH.z}`,
```

#### 645. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6130` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5870) · [Before (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6130)

```diff
-           const [Ik, Xk] = (0, fF.le)();
+           const [gS, tS] = (0, pH.se)();
```

#### 646. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6134` → after: `L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5874) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6134)

```diff
-             site: TI.d,
+             site: tg.c,
```

#### 647. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6140` → after: `L5880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5880) · [Before (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6140)

```diff
-         const Ek = new TI.i(Sk, aF.r, {
+         const dS = new tg.i(JS, NH.B, {
```

#### 648. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6145` → after: `L5885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5885) · [Before (L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6145)

```diff
-                 if ("webgpu" !== Fk || (0, eT.e)()) return !1;
+                 if ("webgpu" !== HS || (0, Kb.c)()) return !1;
```

#### 649. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6147-L6148` → after: `L5887-L5888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5887-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5887-L5888) · [Before (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6147-L6148)

```diff
-                   if (kk.site === TI.f && (0, XI.j)(kk.error)) return "frames_refused";
-                   return kk.site === Oi && (0, XI.l)(kk.error) ? "start_failed" : null
+                   if (SS.site === tg.e && (0, gg.p)(SS.error)) return "frames_refused";
+                   return SS.site === cX && (0, gg.t)(SS.error) ? "start_failed" : null
```

#### 650. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6151` → after: `L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5891) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6151)

```diff
-                 if (null !== (0, XI.M)(Tk, Xk)) return (0, VI.countRenderLost)(Tk, kk.error, Gl), !1;
+                 if (null !== (0, gg.S)(bS, tS)) return (0, wg.countRenderLost)(bS, SS.error, cN), !1;
```

#### 651. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6169-L6170` → after: `L5909-L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5909-L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5909-L5910) · [Before (L6169-L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6169-L6170)

```diff
-               return Fk === fF.N.RenderDeviceLost
-             })) && ((0, eT.z)(), Fa.deviceLost(), "webgpu" === Zk && vF.F.lost()), null === (Ik = Bl) || void 0 === Ik || Ik.coreErrors(kk);
+               return HS === pH.K.RenderDeviceLost
+             })) && ((0, Kb.y)(), eN.deviceLost(), "webgpu" === kS && OH.F.lost()), null === (gS = UN) || void 0 === gS || gS.coreErrors(SS);
```

#### 652. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6174` → after: `L5914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5914) · [Before (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6174)

```diff
-                 return kk === fF.N.EnvUnknownSky ? (0, VI.unknownSkyWords)(JF.e.get("skyBox")) : null === (Ik = pl) || void 0 === Ik ? void 0 : Ik.MIk(kk, Fk)
+                 return SS === pH.K.EnvUnknownSky ? (0, wg.unknownSkyWords)(GH.d.get("skyBox")) : null === (gS = vN) || void 0 === gS ? void 0 : gS.BgS(SS, HS)
```

#### 653. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6181` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5921) · [Before (L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6181)

```diff
-               return Fk === fF.N.EnvUnknownSky
+               return HS === pH.K.EnvUnknownSky
```

#### 654. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6187-L6192` → after: `L5927-L5932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5927-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5927-L5932) · [Before (L6187-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6187-L6192)

```diff
-               if ((0, eT.e)()) return;
-               const lk = Fk === fF.Xc.WEBGPU,
-                 ak = Xk === fF.Xc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 qk = Xk === fF.Xc.RESTORE_LOST,
-                 Lk = lk && (0, vF.p)(Gl.adapter, Ik, "lost" === ak, qk),
-                 tk = (0, XI.N)(pl);
+               if ((0, Kb.c)()) return;
+               const NS = HS === pH.id.WEBGPU,
+                 qS = tS === pH.id.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 uS = tS === pH.id.RESTORE_LOST,
+                 IS = NS && (0, OH.t)(cN.adapter, gS, "lost" === qS, uS),
+                 fS = (0, gg.W)(vN);
```

#### 655. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6194` → after: `L5934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5934) · [Before (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6194)

```diff
-               const Zk = lk ? (0, XI.M)(ak, Tk) : null;
+               const kS = NS ? (0, gg.S)(qS, bS) : null;
```

#### 656. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6197-L6198` → after: `L5937-L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5937-L5938) · [Before (L6197-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6197-L6198)

```diff
-                 const Fk = void 0 === tk ? "" : ` (${tk.message})`;
-                 return void kk.crash(VI.RENDER_RELOAD_SITE, new Error(`${(0,VI.renderReloadMessage)("webgpu",ak,Ik)} and ${Zk}${Fk}`))
+                 const HS = void 0 === fS ? "" : ` (${fS.message})`;
+                 return void SS.crash(wg.RENDER_RELOAD_SITE, new Error(`${(0,wg.renderReloadMessage)("webgpu",qS,gS)} and ${kS}${HS}`))
```

#### 657. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6201` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5941) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6201)

```diff
-               "lost" === ak && (0, eT.z)();
+               "lost" === qS && (0, Kb.y)();
```

#### 658. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6215` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5955) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6215)

```diff
-             kk.kind === fF.X.SkyImages ? null === (Fk = py) || void 0 === Fk || Fk.onEvent(kk.payload) : kk.kind === fF.X.EnvLighting && (uy = 1 === kk.payload[0])
+             SS.kind === pH.eb.SkyImages ? null === (HS = vx) || void 0 === HS || HS.onEvent(SS.payload) : SS.kind === pH.eb.EnvLighting && (Ex = 1 === SS.payload[0])
```

#### 659. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6237` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5977) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6237)

```diff
-                   !1 !== Fk || kk.isStopped ? !0 === Fk && console.info(`${vi} terrain textures handed over again after the renderer lost them`) : console.warn(`${vi} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== HS || SS.isStopped ? !0 === HS && console.info(`${OX} terrain textures handed over again after the renderer lost them`) : console.warn(`${OX} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 660. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6249` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L5989) · [Before (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6249)

```diff
-               if (kk.forEachNetOut(cq), Rq(kk), (0, TI.F)(kk, {
+               if (SS.forEachNetOut(iu), Yu(SS), (0, tg.N)(SS, {
```

#### 661. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6261` → after: `L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6001) · [Before (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6261)

```diff
-           Ek.setAntiCheatProbes(xi(aF.r, kk.checks)), kk.watchHeld(Ki.CoreFrame, (() => Ek.frame)), kk.watchHeld(Ki.GlueFrame, (() => Sk.frame));
+           dS.setAntiCheatProbes(nX(NH.B, SS.checks)), SS.watchHeld(QX.CoreFrame, (() => dS.frame)), SS.watchHeld(QX.GlueFrame, (() => JS.frame));
```

#### 662. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6265` → after: `L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6005) · [Before (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6265)

```diff
-             Ik.Dt(kk.Dt());
+             gS.mf(SS.mf());
```

#### 663. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6267` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6007) · [Before (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6267)

```diff
-               Ik.Dt(kk.Dt())
+               gS.mf(SS.mf())
```

#### 664. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6269` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6009) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6269)

```diff
-             let ik = 6 * (0, pX.O)() | 0;
+             let XS = 6 * (0, Yt.Q)() | 0;
```

#### 665. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6278` → after: `L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6018) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6278)

```diff
-             return (0, Fi.e)(lk), {
+             return (0, HX.i)(NS), {
```

#### 666. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6285` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6025) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6285)

```diff
-                 Ik.value(fF.h.ProbeUsedProp, kk.usedProp()), 0 !== Xk && Ik.setFlags(Xk)
+                 gS.value(pH.i.ProbeUsedProp, SS.usedProp()), 0 !== tS && gS.setFlags(tS)
```

#### 667. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6288` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6028) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6288)

```diff
-                 (0, pX.Z)(Tk), (0, Ii.g)(yk), (0, Fi.c)(lk)
+                 (0, Yt.$)(bS), (0, gX.e)(xS), (0, HX.e)(NS)
```

#### 668. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6294` → after: `L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6034) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6294)

```diff
-               Xk = Ek.rings.input.writeRecord(fF.rb.AntiCheat, kk, Fk, Ik, 0)
+               tS = dS.rings.input.writeRecord(pH.Gb.AntiCheat, SS, HS, gS, 0)
```

#### 669. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6299` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6039) · [Before (L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6299)

```diff
-         ri = (kk, Fk, Ik) => Ek.rings.cmd.writeCmd(kk, Fk, Ik), Di = kk => Ek.rings.cmd.growForCmd(kk), kl = !1, tq(), (0, Vk.C)(Ek, {
+         TX = (SS, HS, gS) => dS.rings.cmd.writeCmd(SS, HS, gS), oX = SS => dS.rings.cmd.growForCmd(SS), mx = !1, qu(), (0, hS.x)(dS, {
```

#### 670. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6301` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6041) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6301)

```diff
-           memory: aF.r,
+           memory: NH.B,
```

#### 671. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6310` → after: `L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6310)

```diff
-           options: JF.e,
+           options: GH.d,
```

#### 672. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6323` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6063) · [Before (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6323)

```diff
-             return null !== (null !== (Fk = null === (Ik = Zq()) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null)
+             return null !== (null !== (HS = null === (gS = uu()) || void 0 === gS ? void 0 : gS.modelUrl(SS)) && void 0 !== HS ? HS : null)
```

#### 673. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6327` → after: `L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6067) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6327)

```diff
-         }), (0, sk.F)({
+         }), (0, wS.H)({
```

#### 674. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6338` → after: `L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6078) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6338)

```diff
-             (0, bI.d)()
+             (0, Ag.c)()
```

#### 675. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6344` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6084) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6344)

```diff
-         }), Ey = (0, sk.y)((() => {
+         }), Jx = (0, wS.w)((() => {
```

#### 676. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6346-L6347` → after: `L6086-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6086-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6086-L6087) · [Before (L6346-L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6346-L6347)

```diff
-           const Fk = (0, Vk.k)();
-           null === (kk = (0, Vk.y)()) || void 0 === kk || kk.followCursorAim(!0 === (null === Fk || void 0 === Fk ? void 0 : Fk.isSessionLive) ? Fk : null)
+           const HS = (0, hS.h)();
+           null === (SS = (0, hS.q)()) || void 0 === SS || SS.followCursorAim(!0 === (null === HS || void 0 === HS ? void 0 : HS.isSessionLive) ? HS : null)
```

#### 677. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6353-L6355` → after: `L6093-L6095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6093-L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6093-L6095) · [Before (L6353-L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6353-L6355)

```diff
-         const nk = (0, PI.i)(),
-           Gk = (0, PI.g)(Ek, nk);
-         Sy = nk.basis, (0, GI.n)(null === Gk ? null : (0, xI.r)(Gk)), zy = Gk;
+         const vS = (0, ng.m)(),
+           ES = (0, ng.e)(dS, vS);
+         wx = vS.basis, (0, Eg.j)(null === ES ? null : (0, Cg.s)(ES)), Dx = ES;
```

#### 678. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6360-L6361` → after: `L6100-L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6100-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6100-L6101) · [Before (L6360-L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6360-L6361)

```diff
-         const Uk = new AX.b(pk, (() => Sk.fH()), (kk => {
-           Ek.crash(TI.l, kk)
+         const VS = new Rt.d(LS, (() => JS.MG()), (SS => {
+           dS.crash(tg.k, SS)
```

#### 679. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6363` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6103) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6363)

```diff
-         sy = Uk, Vy = Uk, null !== Gk && Uk.setCeiling(Math.min((0, AX.i)(Gk), uk, (0, PI.m)()));
+         Px = VS, Qx = VS, null !== ES && VS.setCeiling(Math.min((0, Rt.n)(ES), YS, (0, ng.o)()));
```

#### 680. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6367` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6107) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6367)

```diff
-             return null !== Fk && (null === zy || Fk < zy) && (zy = Fk, (0, GI.n)((0, xI.r)(Fk))), Fk
+             return null !== HS && (null === Dx || HS < Dx) && (Dx = HS, (0, Eg.j)((0, Cg.s)(HS))), HS
```

#### 681. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6369` → after: `L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6109) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6369)

```diff
-             1 === Fk ? (0, VI.reportMemoryShed)(kk, Ik, Ly) : console.warn(`${vi} wasm memory: shed again (${kk}): shed ${Fk}`, Ik.wasmMemoryShed)
+             1 === HS ? (0, wg.reportMemoryShed)(SS, gS, Nx) : console.warn(`${OX} wasm memory: shed again (${SS}): shed ${HS}`, gS.wasmMemoryShed)
```

#### 682. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6371` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6111) · [Before (L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6371)

```diff
-           const kk = (0, XI.B)(zk);
+           const SS = (0, gg.M)(ZS);
```

#### 683. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6373` → after: `L6113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6113) · [Before (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6373)

```diff
-             storedChunks: () => Sk.kXk(),
+             storedChunks: () => JS.MgS(),
```

#### 684. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6376` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6116) · [Before (L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6376)

```diff
-               return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.FXk()) && void 0 !== Fk ? Fk : 0
+               return null !== (HS = null === SS || void 0 === SS ? void 0 : SS.FgS()) && void 0 !== HS ? HS : 0
```

#### 685. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6384-L6385` → after: `L6124-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6124-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6124-L6125) · [Before (L6384-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6384-L6385)

```diff
-         const [Ck, Nk] = (0, oI.e)();
-         Yl = (0, EI.c)((kk => Ek.setChunkAddDistance(kk.horizontal, kk.vertical)), {
+         const [iS, WS] = (0, Jg.g)();
+         sN = (0, dg.e)((SS => dS.setChunkAddDistance(SS.horizontal, SS.vertical)), {
```

#### 686. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6388-L6390` → after: `L6128-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6128-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6128-L6130) · [Before (L6388-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6388-L6390)

```diff
-         }), Ek.setAmbientOcclusion(!0 !== pI.j.getItem("disableAmbientOcclusion")), Ek.setPoseLod(!0 !== pI.j.getItem(yF.Q)), (0, cT.o)("look") && (Ek.setDebugLog(fF.P.Look, !0), Ek.setDebugLog(fF.P.CameraSet, !0), (0, fT.j)("wasm", {
-           look: () => Ek.takeDebugLog(fF.P.Look),
-           cameraSets: () => Ek.takeDebugLog(fF.P.CameraSet)
+         }), dS.setAmbientOcclusion(!0 !== Lg.g.getItem("disableAmbientOcclusion")), dS.setPoseLod(!0 !== Lg.g.getItem(XH.Q)), (0, Ub.q)("look") && (dS.setDebugLog(pH.R.Look, !0), dS.setDebugLog(pH.R.CameraSet, !0), (0, sb.e)("wasm", {
+           look: () => dS.takeDebugLog(pH.R.Look),
+           cameraSets: () => dS.takeDebugLog(pH.R.CameraSet)
```

#### 687. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6392` → after: `L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6132) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6392)

```diff
-         (0, cT.o)("remesh") && (Ek.setDebugLog(fF.P.Remesh, !0), ck = () => Ek.takeDebugLog(fF.P.Remesh), gT = new AT((0, BT.n)(), ck));
+         (0, Ub.q)("remesh") && (dS.setDebugLog(pH.R.Remesh, !0), zS = () => dS.takeDebugLog(pH.R.Remesh), Tb = new Rb((0, Bb.l)(), zS));
```

#### 688. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6396-L6398` → after: `L6136-L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6136-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6136-L6138) · [Before (L6396-L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6396-L6398)

```diff
-             ik = kk => pI.j.getItem(kk);
-           Tk.sync(ik, Fk), (0, EF._)();
-           const yk = (0, ak.i)("customBindingsChanged", (() => {
+             XS = SS => Lg.g.getItem(SS);
+           bS.sync(XS, HS), (0, dH.O)();
+           const xS = (0, qS.m)("customBindingsChanged", (() => {
```

#### 689. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6401` → after: `L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6141) · [Before (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6401)

```diff
-           (0, RI.k)(Fk);
+           (0, yg.n)(HS);
```

#### 690. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6403` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6143) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6403)

```diff
-             qk = (0, sk.y)((() => {
+             uS = (0, wS.w)((() => {
```

#### 691. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6405` → after: `L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6145) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6405)

```diff
-               lk.size > 0 && wX() && !0 === (null === (kk = (0, Vk.k)()) || void 0 === kk ? void 0 : kk.localPlayerAlive()) && ak.g.GL("usedKeyboard")
+               NS.size > 0 && jt() && !0 === (null === (SS = (0, hS.h)()) || void 0 === SS ? void 0 : SS.localPlayerAlive()) && qS.k.cj("usedKeyboard")
```

#### 692. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6407` → after: `L6147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6147) · [Before (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6407)

```diff
-             Lk = IX.c.heldSizer((() => (0, GF.i)(kk))),
+             IS = Ht.d.heldSizer((() => (0, EH.o)(SS))),
```

#### 693. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6411` → after: `L6151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6151) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6411)

```diff
-                 Tk.moves(kk) && (lk.add(kk), wX() && ak.g.GL("usedKeyboard"))
+                 bS.moves(SS) && (NS.add(SS), jt() && qS.k.cj("usedKeyboard"))
```

#### 694. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6420` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6160) · [Before (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6420)

```diff
-                 jX.l.measure(kk.getBoundingClientRect()), (0, XX.l)()
+                 kt.m.measure(SS.getBoundingClientRect()), (0, gt.k)()
```

#### 695. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6424-L6425` → after: `L6164-L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6164-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6164-L6165) · [Before (L6424-L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6424-L6425)

```diff
-                 const Ik = (0, GF.l)(kk, Fk),
-                   Xk = IX.c.onRelease(Fk);
+                 const gS = (0, EH.q)(SS, HS),
+                   tS = Ht.d.onRelease(HS);
```

#### 696. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6431` → after: `L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6171) · [Before (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6431)

```diff
-                 jX.l.measure(kk.getBoundingClientRect())
+                 kt.m.measure(SS.getBoundingClientRect())
```

#### 697. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6434` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6174) · [Before (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6434)

```diff
-               touchUiShown: () => Ak.d.get("isTouchScreen"),
+               touchUiShown: () => FS.b.get("isTouchScreen"),
```

#### 698. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6441` → after: `L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6181) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6441)

```diff
-             Zk = (0, LI.e)(Fk);
+             kS = (0, ug.b)(HS);
```

#### 699. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6443` → after: `L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6183) · [Before (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6443)

```diff
-             yk(), qk(), (0, RI.k)(null), Zk(), tk()
+             xS(), uS(), (0, yg.n)(null), kS(), fS()
```

#### 700. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6448` → after: `L6188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6188) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6448)

```diff
-           })), !ry && (0, KX.e)(kk, Tk) && (0, KX.b)((() => {
+           })), !Tx && (0, Qt.g)(SS, bS) && (0, Qt.e)((() => {
```

#### 701. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6459-L6460` → after: `L6199-L6200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6199-L6200) · [Before (L6459-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6459-L6460)

```diff
-         (0, aF.N)((() => {
-           "call" === (0, aF.n)() && Ek.crash(TI.q, (0, aF.m)())
+         (0, NH.Y)((() => {
+           "call" === (0, NH.t)() && dS.crash(tg.s, (0, NH.r)())
```

#### 702. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6462` → after: `L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6202) · [Before (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6462)

```diff
-         const Bk = (0, TI.I)(Ek.rings.worker, (() => {
+         const sS = (0, tg.R)(dS.rings.worker, (() => {
```

#### 703. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6472` → after: `L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6212) · [Before (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6472)

```diff
-             module: (0, aF.u)(),
+             module: (0, NH.E)(),
```

#### 704. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6474` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6214) · [Before (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6474)

```diff
-               const Fk = (0, Vk.y)();
+               const HS = (0, hS.q)();
```

#### 705. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6491` → after: `L6231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6231) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6491)

```diff
-               (0, VI.reportWorkerLost)(TI.x, kk, Ly)
+               (0, wg.reportWorkerLost)(tg.G, SS, Nx)
```

#### 706. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6494` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6234) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6494)

```diff
-               (0, VI.reportWorkerStartTimeout)(TI.x, kk, Ly)
+               (0, wg.reportWorkerStartTimeout)(tg.G, SS, Nx)
```

#### 707. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6509` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6249) · [Before (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6509)

```diff
-                 kk.rings.worker.writeWorkerRecord(Ik, Xk, Tk, 0, ik, yk) || kk.crash(TI.x, `a world-gen record of kind ${Xk} did not fit the worker-in ring`)
+                 SS.rings.worker.writeWorkerRecord(gS, tS, bS, 0, XS, xS) || SS.crash(tg.G, `a world-gen record of kind ${tS} did not fit the worker-in ring`)
```

#### 708. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6515` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6255) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6515)

```diff
-             module: (0, aF.u)(),
+             module: (0, NH.E)(),
```

#### 709. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6519` → after: `L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6259) · [Before (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6519)

```diff
-               }, Fk] = await Promise.all([Ik.e(40).then((() => Ik(51017))), Promise.resolve().then((() => Ik(95))).then((kk => {
+               }, HS] = await Promise.all([gS.e(40).then((() => gS(51061))), Promise.resolve().then((() => gS(104))).then((SS => {
```

#### 710. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6527` → after: `L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6267) · [Before (L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6527)

```diff
-                 count: (0, VF.d)(navigator.hardwareConcurrency, Fk),
+                 count: (0, wH.b)(navigator.hardwareConcurrency, HS),
```

#### 711. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6532-L6533` → after: `L6272-L6273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6272-L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6272-L6273) · [Before (L6532-L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6532-L6533)

```diff
-               (0, XX.j)(), Dq(kk, (() => {
-                 kk.rings.worker.writeWorkerRecord(Ik, Xk, Tk, ik, yk, lk) || kk.crash(TI.m, `a meshing record of kind ${Xk} did not fit the worker-in ring`)
+               (0, gt.g)(), ou(SS, (() => {
+                 SS.rings.worker.writeWorkerRecord(gS, tS, bS, XS, xS, NS) || SS.crash(tg.l, `a meshing record of kind ${tS} did not fit the worker-in ring`)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6537` → after: `L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6277) · [Before (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6537)

```diff
-               (0, VI.reportWorkerLost)(TI.m, kk, Ly)
+               (0, wg.reportWorkerLost)(tg.l, SS, Nx)
```

#### 713. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6543` → after: `L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6283) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6543)

```diff
-               (0, VI.reportWorkerStartTimeout)(TI.m, kk, Ly)
+               (0, wg.reportWorkerStartTimeout)(tg.l, SS, Nx)
```

#### 714. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6555` → after: `L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6295) · [Before (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6555)

```diff
-                 kk.crash(TI.m, void 0 === Ik ? Fk : new Error(Fk, {
+                 SS.crash(tg.l, void 0 === gS ? HS : new Error(HS, {
```

#### 715. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6560` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6300) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6560)

```diff
-                 site: TI.m,
+                 site: tg.l,
```

#### 716. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6566` → after: `L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6306) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6566)

```diff
-         const gk = (0, yT.j)(QF.clientSideServerUrls.staticUrl, {
+         const RS = (0, xb.m)(QH.clientSideServerUrls.staticUrl, {
```

#### 717. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6577` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6317) · [Before (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6577)

```diff
-               return null !== (Fk = null === (Ik = Zq()) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null
+               return null !== (HS = null === (gS = uu()) || void 0 === gS ? void 0 : gS.modelUrl(SS)) && void 0 !== HS ? HS : null
```

#### 718. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6583` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6323) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6583)

```diff
-               return null !== (Xk = null === (Tk = Fk()) || void 0 === Tk ? void 0 : Tk.drawnUrl(Ik)) && void 0 !== Xk ? Xk : kk.url(Ik)
+               return null !== (tS = null === (bS = HS()) || void 0 === bS ? void 0 : bS.drawnUrl(gS)) && void 0 !== tS ? tS : SS.url(gS)
```

#### 719. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6585` → after: `L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6325) · [Before (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6585)

```diff
-             return (0, TT.m)((0, mX.o)(Xk), Ik)
+             return (0, bb.h)((0, ot.m)(tS), gS)
```

#### 720. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6588` → after: `L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6328) · [Before (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6588)

```diff
-             console.warn(`${vi} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
+             console.warn(`${OX} image ${SS.key.kind}:${SS.key.index}:${SS.key.word} failed`, SS.error)
```

#### 721. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6591` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6331) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6591)

```diff
-           void 0 === Fk ? console.warn(`${vi} ${kk}`) : eq(kk, Fk)
+           void 0 === HS ? console.warn(`${OX} ${SS}`) : fu(SS, HS)
```

#### 722. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6593` → after: `L6333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6333) · [Before (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6593)

```diff
-         const rk = new XT.h(gk, function(kk, Fk) {
+         const lS = new tb.k(RS, function(SS, HS) {
```

#### 723. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6628` → after: `L6368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6368) · [Before (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6628)

```diff
-             lk = Ik.e(42).then((() => Ik(51022))).then((kk => {
+             NS = gS.e(42).then((() => gS(51070))).then((SS => {
```

#### 724. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6641-L6642` → after: `L6381-L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6381-L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6381-L6382) · [Before (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6641-L6642)

```diff
-             return null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.build(kk, Fk)) && void 0 !== Xk ? Xk : (0, lT.q)(kk, "the model workers did not load")
-           })).then((kk => null !== ik && (0, lT.k)(kk) ? ik.then((() => kk)) : kk))
+             return null !== (tS = null === gS || void 0 === gS ? void 0 : gS.build(SS, HS)) && void 0 !== tS ? tS : (0, Nb.m)(SS, "the model workers did not load")
+           })).then((SS => null !== XS && (0, Nb.g)(SS) ? XS.then((() => SS)) : SS))
```

#### 725. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6659` → after: `L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6399) · [Before (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6659)

```diff
-             console.warn(`${vi} the texture pack's model file ${kk} failed: the shipped one loads`, Fk)
+             console.warn(`${OX} the texture pack's model file ${SS} failed: the shipped one loads`, HS)
```

#### 726. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6663` → after: `L6403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6403) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6663)

```diff
-         const Dk = new DX.g(Ek);
+         const mS = new et.e(dS);
```

#### 727. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6672` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6412) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6672)

```diff
-             site: TI.v,
+             site: tg.D,
```

#### 728. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6679` → after: `L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6419) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6679)

```diff
-           null !== kk && (kk || Ek.isStopped || console.warn(`${vi} the core refused the terrain textures: terrain draws untextured`), fy(Ek))
+           null !== SS && (SS || dS.isStopped || console.warn(`${OX} the core refused the terrain textures: terrain draws untextured`), zx(dS))
```

#### 729. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6682` → after: `L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6422) · [Before (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6682)

```diff
-           console.warn(`${vi} ${kk}`, ...void 0 === Fk ? [] : [Fk])
+           console.warn(`${OX} ${SS}`, ...void 0 === HS ? [] : [HS])
```

#### 730. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6696` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6436) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6696)

```diff
-             null !== qk && Promise.all([Ik.e(201), Ik.e(45)]).then((() => Ik(50985))).then((Ik => {
+             null !== uS && Promise.all([gS.e(201), gS.e(45)]).then((() => gS(51025))).then((gS => {
```

#### 731. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6710` → after: `L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6450) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6710)

```diff
-                   (0, TT.i)(Tk), yk.feed((() => async function(kk) {
+                   (0, bb.f)(bS), xS.feed((() => async function(SS) {
```

#### 732. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6713-L6714` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6453-L6454) · [Before (L6713-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6713-L6714)

```diff
-                   }(jk.assets))), (0, IT.m)(jk.files()), ik.refresh().then((kk => {
-                     null !== kk && console.info(`${vi} texture pack models: ${kk.resent} of ${kk.delivered} files written again, ${kk.refetched} refetched`)
+                   }(aS.assets))), (0, gb.h)(aS.files()), XS.refresh().then((SS => {
+                     null !== SS && console.info(`${OX} texture pack models: ${SS.resent} of ${SS.delivered} files written again, ${SS.refetched} refetched`)
```

#### 733. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6723` → after: `L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6463) · [Before (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6723)

```diff
-                     const Xk = null === kk.gameSource && (0, zI.i)(kk.pack);
+                     const tS = null === SS.gameSource && (0, hg.g)(SS.pack);
```

#### 734. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6725` → after: `L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6465) · [Before (L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6725)

```diff
-                     const Tk = (0, sI.g)(Fk.error),
+                     const bS = (0, Dg.k)(HS.error),
```

#### 735. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6727` → after: `L6467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6467) · [Before (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6727)

```diff
-                     ak.g.GL(sI.c, {
+                     qS.k.cj(Dg.c, {
```

#### 736. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6735` → after: `L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6475) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6735)

```diff
-                       Fk && kk && console.info(`${vi} the texture pack's animations are in (${Object.keys(kk).length} files)`)
+                       HS && SS && console.info(`${OX} the texture pack's animations are in (${Object.keys(SS).length} files)`)
```

#### 737. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6743` → after: `L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6483) · [Before (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6743)

```diff
-                 maxTextureSize: () => Promise.resolve((0, XI.S)(document.createElement("canvas")))
+                 maxTextureSize: () => Promise.resolve((0, gg._)(document.createElement("canvas")))
```

#### 738. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6747` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6487) · [Before (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6747)

```diff
-               console.warn(`${vi} the texture pack's terrain didn't load: the built atlas stays`, kk)
+               console.warn(`${OX} the texture pack's terrain didn't load: the built atlas stays`, SS)
```

#### 739. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6755` → after: `L6495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6495) · [Before (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6755)

```diff
-             (KF ??= Ik.e(53).then((() => Ik(51028))).then((kk => {
+             (PH ??= gS.e(53).then((() => gS(51075))).then((SS => {
```

#### 740. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6763` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6503) · [Before (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6763)

```diff
-               Ek.setTextureLayers(kk) || Ek.isStopped || (console.warn(`${vi} the core refused the texture names: textured Boxes draw textureNotFound`), kF())
+               dS.setTextureLayers(SS) || dS.isStopped || (console.warn(`${OX} the core refused the texture names: textured Boxes draw textureNotFound`), rS())
```

#### 741. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6771` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6511) · [Before (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6771)

```diff
-                 console.warn(`${vi} the texture names didn't load, so textured Boxes draw textureNotFound`, Fk), kF()
+                 console.warn(`${OX} the texture names didn't load, so textured Boxes draw textureNotFound`, HS), rS()
```

#### 742. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6781-L6782` → after: `L6521-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6521-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6521-L6522) · [Before (L6781-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6781-L6782)

```diff
-             const ak = (0, XI.B)(Ik);
-             if (null === ak) return kk.crash(Oi, new Error(`this ${Xk} build has no openRenderer`)), !1;
+             const qS = (0, gg.M)(gS);
+             if (null === qS) return SS.crash(cX, new Error(`this ${tS} build has no openRenderer`)), !1;
```

#### 743. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6787-L6788` → after: `L6527-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6527-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6527-L6528) · [Before (L6787-L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6787-L6788)

```diff
-               const Tk = null !== (Lk = null === (tk = Xy) || void 0 === tk ? void 0 : tk.pagePreviews()) && void 0 !== Lk ? Lk : null,
-                 lk = null !== (Zk = null === (jk = Xy) || void 0 === jk ? void 0 : jk.previewModule(Ik)) && void 0 !== Zk ? Zk : null;
+               const bS = null !== (IS = null === (fS = Sx) || void 0 === fS ? void 0 : fS.pagePreviews()) && void 0 !== IS ? IS : null,
+                 NS = null !== (kS = null === (aS = Sx) || void 0 === aS ? void 0 : aS.previewModule(gS)) && void 0 !== kS ? kS : null;
```

#### 744. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6790-L6792` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6530-L6532) · [Before (L6790-L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6790-L6792)

```diff
-                 null === Tk || void 0 === Tk || Tk.endSession(!1), qk = (0, GF.d)().sampleCount, await (0, XI.e)(Fk, ak, yk, Lq, qk, await ik);
-                 const kk = (0, XI.g)(Ik);
-                 null === kk && console.warn(`${vi} this ${Xk} build has no image registry: sky and model images won't show`), (0, rX.f)(kk)
+                 null === bS || void 0 === bS || bS.endSession(!1), uS = (0, EH.e)().sampleCount, await (0, gg.f)(HS, qS, xS, Nu, uS, await XS);
+                 const SS = (0, gg.l)(gS);
+                 null === SS && console.warn(`${OX} this ${tS} build has no image registry: sky and model images won't show`), (0, mt.h)(SS)
```

#### 745. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6794-L6795` → after: `L6534-L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6534-L6535) · [Before (L6794-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6794-L6795)

```diff
-                 (0, eT.e)() && await (0, Yk.k)();
-                 const Ik = (0, eT.N)();
+                 (0, Kb.c)() && await (0, MS.l)();
+                 const gS = (0, Kb.J)();
```

#### 746. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6797-L6798` → after: `L6537-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6537-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6537-L6538) · [Before (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6797-L6798)

```diff
-                   const Fk = (0, XI.N)(ak);
-                   return kk.crash(VI.RENDER_RELOAD_SITE, new Error(`${Ik}${void 0===Fk?"":` (${Fk.message})`}`)), !1
+                   const HS = (0, gg.W)(qS);
+                   return SS.crash(wg.RENDER_RELOAD_SITE, new Error(`${gS}${void 0===HS?"":` (${HS.message})`}`)), !1
```

#### 747. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6800` → after: `L6540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6540) · [Before (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6800)

```diff
-                 qk = await Tk.bindSession(lk, Fk, (async kk => (0, XI.n)(ak, Oi, yk, kk, Lq, await ik)))
+                 uS = await bS.bindSession(NS, HS, (async SS => (0, gg.w)(qS, cX, xS, SS, Nu, await XS)))
```

#### 748. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6817` → after: `L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6557) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6817)

```diff
-                   return null !== (kk = Tk.call(Ik)) && void 0 !== kk ? kk : null
+                   return null !== (SS = bS.call(gS)) && void 0 !== SS ? SS : null
```

#### 749. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6823` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6563) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6823)

```diff
-             return Gl.boundAtMs = null !== (lk = (0, eT.O)()) && void 0 !== lk ? lk : ek, Gl.indirectHangs = (0, eT.C)(), Gl.restoresSkipped = (0, eT.P)(), console.info(`${vi} ${Xk} renderer bound at ${Math.round(ek)} ms`), !kk.isStopped
+             return cN.boundAtMs = null !== (NS = (0, Kb.M)()) && void 0 !== NS ? NS : KS, cN.indirectHangs = (0, Kb.A)(), cN.restoresSkipped = (0, Kb.N)(), console.info(`${OX} ${tS} renderer bound at ${Math.round(KS)} ms`), !SS.isStopped
```

#### 750. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6827` → after: `L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6567) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6827)

```diff
-           (0, tF.L)(Zk);
+           (0, IH.O)(kS);
```

#### 751. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6829` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6569) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6829)

```diff
-           Ik.e(194).then((() => Ik(34044))).then((Fk => {
+           gS.e(194).then((() => gS(34113))).then((HS => {
```

#### 752. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6842` → after: `L6582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6582) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6842)

```diff
-                   "screenshot" === Fk && null === ik ? await (0, LT.f)(kk, Xk, Tk) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === HS && null === XS ? await (0, Ib.g)(SS, tS, bS) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 753. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6845` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6585) · [Before (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6845)

```diff
-                 capturePhoto: (Fk, Ik, Xk) => (0, LT.c)(kk, Fk, Ik, Xk)
+                 capturePhoto: (HS, gS, tS) => (0, Ib.d)(SS, HS, gS, tS)
```

#### 754. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6853` → after: `L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/wasmPlay.js#L6593) · [Before (L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/wasmPlay.js#L6853)

```diff
-                   (0, RI.q)(fF.rb.Resize, 0, kk / Ik, Fk / Ik, (0, RI.h)(Ik))
+                   (0, yg.y)(pH.Gb.Resize, 0, SS / gS, HS / gS, (0, yg.j)(gS))
```
