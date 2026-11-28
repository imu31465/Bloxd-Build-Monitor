# Changed — Bundle Modifications Report (Part 145 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `145 / 154` (**386** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 144](part-144.md) · [Part 146 →](part-146.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (1092 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 377. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3645-L3651` → after: `L3555-L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3555-L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3555-L3683) · [Before (L3645-L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3645-L3651)

```diff
-             pr(Sr[rr[0]] = rr[1], Sr[-rr[48]] = function(...Sr) {
-               if (pr(Sr[rr[0]] = rr[2], Sr[rr[2]] = Sr[rr[1]].length), Sr[rr[2]] < rr[3]) return rr[1];
-               if (pr(Sr[rr[38]] = Math.max(...Sr[rr[1]]), Sr[rr[6]] = Math.min(...Sr[rr[1]])), Sr[rr[38]] === Sr[rr[6]]) return rr[1];
-               for (pr(Sr[rr[18]] = Array(Sr[rr[2]] - rr[2]).fill(Number.MAX_SAFE_INTEGER), Sr[rr[11]] = Array(Sr[rr[2]] - rr[2]).fill(Number.MIN_SAFE_INTEGER), Sr[rr[44]] = Math.ceil((Sr[rr[38]] - Sr[rr[6]]) / (Sr[rr[2]] - rr[2])), Sr[rr[43]] = rr[1]), Sr[rr[19]] = rr[1]; Sr[rr[1 … [truncated]
-               for (pr(Sr[rr[46]] = Number.MIN_SAFE_INTEGER, Sr[rr[47]] = Sr[rr[6]]), Sr[rr[45]] = rr[1]; Sr[rr[45]] < Sr[rr[2]] - rr[2]; Sr[rr[45]]++) Sr[rr[18]][Sr[rr[45]]] === Number.MAX_SAFE_INTEGER && Sr[rr[11]][Sr[rr[45]]] === Number.MIN_SAFE_INTEGER || pr(Sr[rr[46]] = Math. … [truncated]
-               return Sr[rr[46]] = Math.max(Sr[rr[46]], Sr[rr[38]] - Sr[rr[47]]), Sr[rr[46]]
-             }, console.log(Sr[-rr[48]]))
+             Qd(Od[dd[9]] = dd[0], Od[dd[5]] = function(...Od) {
+               function md(...Od) {
+                 return Od[dd[9]] = dd[3], Kd(Fd(hd(Od[dd[0]]), hd(Od[dd[10]])))
+               }
+ 
+               function Wd(...Od) {
+                 return Od[dd[9]] = dd[13],
+                   function(...Od) {
+                     var md, Wd, Fd, Rd;
+                     for (Qd(Od[dd[9]] = dd[3], Od[-dd[38]] = Od[dd[10]].length, Od[dd[13]] = Array()), Od[dd[20]] = Array(Math.ceil(Od[dd[0]].length / dd[3])), md = dd[0]; md < Od[dd[20]].length; md++) Od[dd[20]][md] = Od[dd[0]].charCodeAt(md * dd[3]) << dd[26] | Od[dd[0]].charCo … [truncated]
+                     for (; Od[dd[20]].length > dd[0];) {
+                       for (Qd(Rd = Array(), Fd = dd[0]), md = dd[0]; md < Od[dd[20]].length; md++) Qd(Fd = (Fd << dd[27]) + Od[dd[20]][md], Wd = Math.floor(Fd / Od[-dd[38]]), Fd -= Wd * Od[-dd[38]]), (Rd.length > dd[0] || Wd > dd[0]) && (Rd[Rd.length] = Wd);
+                       Qd(Od[dd[13]][Od[dd[13]].length] = Fd, Od[dd[20]] = Rd)
+                     }
+                     for (Od[dd[11]] = "", md = Od[dd[13]].length - dd[10]; md >= dd[0]; md--) Od[dd[11]] += Od[dd[10]].charAt(Od[dd[13]][md]);
+                     for (Od[dd[5]] = Math.ceil(Od[dd[0]].length * dd[26] / (Math.log(Od[dd[10]].length) / Math.log(dd[3]))), md = Od[dd[11]].length; md < Od[dd[5]]; md++) Od[dd[11]] = Od[dd[10]][dd[0]] + Od[dd[11]];
+ ... (113 more added lines; see GitHub link above)
```

#### 378. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3653` → after: `L3685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3685) · [Before (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3653)

```diff
-           "KzbYEY" in Sr && Wr();
+           "kwOMuN" in Od && Fd();
```

#### 379. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3657-L3662` → after: `L3689-L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3689-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3689-L3690) · [Before (L3657-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3657-L3662)

```diff
-             } = await Promise[rr[22] + rr[11]]()[rr[23]](((...Zr) => (Zr[rr[0]] = rr[1], "Z_N075A" in Sr && function(...Sr) {
-               Sr[rr[0]] = rr[1]
-             }(), Qr(1949))));
-           await Ir(rr[57] + rr[58] + "post", ((...Qr) => (Qr[rr[0]] = rr[1], "ErvUNs" in Sr && function(...Sr) {
-             Sr[rr[0]] = rr[1]
-           }(), fr(Zr, "/images/" + ar + ".png", {
+             } = await Promise[dd[4] + dd[5]]()[dd[6]]((() => md(1947)));
+           await Kd(dd[54] + dd[55] + "post", (() => hd(Wd, "/images/" + Rd + ".png", {
```

#### 380. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3664` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3692) · [Before (L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3664)

```diff
-           }, rr[1]))), 8e3)
+           }, dd[0])), 8e3)
```

#### 381. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3666` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3694) · [Before (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3666)

```diff
-           console.error(rr[57] + rr[58] + "post failed:", jr)
+           console.error(dd[54] + dd[55] + "post failed:", Xd)
```

#### 382. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3670-L3671` → after: `L3698-L3699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3698-L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3698-L3699) · [Before (L3670-L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3670-L3671)

```diff
-     var gW = Qr(42741);
-     const CW = 1e3 * gW.b.seatReservationSeconds - 3e3;
+     var nF = md(42840);
+     const LF = 1e3 * nF.e.seatReservationSeconds - 3e3;
```

#### 383. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3676-L3677` → after: `L3704-L3705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3704-L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3704-L3705) · [Before (L3676-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3676-L3677)

```diff
-         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
-         const jr = null !== (Wr = ar.fetch) && void 0 !== Wr ? Wr : fetch;
+         this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow  … [truncated]
+         const Xd = null !== (Fd = Rd.fetch) && void 0 !== Fd ? Fd : fetch;
```

#### 384. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3699` → after: `L3727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3727) · [Before (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3699)

```diff
-         (0, dS.l)(rr);
+         (0, MO.p)(dd);
```

#### 385. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3702` → after: `L3730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3730) · [Before (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3702)

```diff
-             this.abort((0, dS.f)(rr))
+             this.abort((0, MO.e)(dd))
```

#### 386. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3711` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3739) · [Before (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3711)

```diff
-           if ((0, dS.l)(rr), !Sr) throw Wr;
+           if ((0, MO.p)(dd), !Od) throw Fd;
```

#### 387. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3716` → after: `L3744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3744) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3716)

```diff
-         if ((0, dS.l)(rr), !(this.ageMs() > CW)) return this.use = "taken", Zr;
+         if ((0, MO.p)(dd), !(this.ageMs() > LF)) return this.use = "taken", Wd;
```

#### 388. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3724` → after: `L3752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3752) · [Before (L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3724)

```diff
-           if (!(Qr instanceof SS.q) || Qr.code !== Zr.e.duplicateLobbyNameError.code || 0 === Wr) throw Qr;
+           if (!(md instanceof WO.n) || md.code !== Wd.e.duplicateLobbyNameError.code || 0 === Fd) throw md;
```

#### 389. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3736` → after: `L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3764) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3736)

```diff
-           gR: Math.round(this.ageMs())
+           XV: Math.round(this.ageMs())
```

#### 390. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3745` → after: `L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3773) · [Before (L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3745)

```diff
-         const Sr = null !== (rr = this.answeredAt) && void 0 !== rr ? rr : {
+         const Od = null !== (dd = this.answeredAt) && void 0 !== dd ? dd : {
```

#### 391. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3750` → after: `L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3778) · [Before (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3750)

```diff
-         return Math.max(0, 1e3 * gW.b.seatReservationSeconds - Qr)
+         return Math.max(0, 1e3 * nF.e.seatReservationSeconds - md)
```

#### 392. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3756` → after: `L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3784) · [Before (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3756)

```diff
-         (0, dS.h)(this.follow.controller, rr)
+         (0, MO.f)(this.follow.controller, dd)
```

#### 393. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3759` → after: `L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3787) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3759)

```diff
-     var GW = Qr(42796);
+     var zF = md(42915);
```

#### 394. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3787` → after: `L3815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3815) · [Before (L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3787)

```diff
-         if (rr === OQ.me.Retire) return void(Zr && !Zr.gone && (this.endWorker(Sr), Zr.started = !1, this.giveUp(Sr, "had its tables trap twice", "every meshing worker's tables trapped twice")));
+         if (dd === Sm.Td.Retire) return void(Wd && !Wd.gone && (this.endWorker(Od), Wd.started = !1, this.giveUp(Od, "had its tables trap twice", "every meshing worker's tables trapped twice")));
```

#### 395. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3792` → after: `L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3820) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3792)

```diff
-         rr === OQ.me.Mesh && Zr.heapRetries > 0 && (Zr.heapRetries--, jr = this.pooled(ar, !0)), jr ??= this.buffer(ar), new Uint8Array(jr, 0, ar).set(Qr), Wr.postMessage({
+         dd === Sm.Td.Mesh && Wd.heapRetries > 0 && (Wd.heapRetries--, Xd = this.pooled(Rd, !0)), Xd ??= this.buffer(Rd), new Uint8Array(Xd, 0, Rd).set(md), Fd.postMessage({
```

#### 396. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3842` → after: `L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3870) · [Before (L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3842)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${rr} did not start`, ar), void this.start(rr)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${dd} did not start`, Rd), void this.start(dd)
```

#### 397. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3861` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3889) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3861)

```diff
-           return console.warn(`[bloxd-wasm-client] meshing worker ${rr} could not be sent the module`, ar), Wr.terminate(), Sr.worker = null, void this.start(rr)
+           return console.warn(`[bloxd-wasm-client] meshing worker ${dd} could not be sent the module`, Rd), Fd.terminate(), Od.worker = null, void this.start(dd)
```

#### 398. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3863-L3864` → after: `L3891-L3892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3891-L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3891-L3892) · [Before (L3863-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3863-L3864)

```diff
-         Sr.watch = new GW.m(GW.e, (Sr => {
-           this.lose(rr, (0, GW.o)(Sr), (() => {
+         Od.watch = new zF.g(zF.b, (Od => {
+           this.lose(dd, (0, zF.j)(Od), (() => {
```

#### 399. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3873` → after: `L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3901) · [Before (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3873)

```diff
-             VW(Qr), Qr.started = !0, this.options.write(0, OQ.ke.WorkerStarted, 0, rr, 0, kW);
+             DF(md), md.started = !0, this.options.write(0, Sm.Pd.WorkerStarted, 0, dd, 0, cF);
```

#### 400. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3883` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3911) · [Before (L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3883)

```diff
-             const Zr = Sr.status === OQ.Ab.Trapped;
+             const Wd = Od.status === Sm.wb.Trapped;
```

#### 401. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3886` → after: `L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3914) · [Before (L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3886)

```diff
-               else if (Qr.startsWithoutResult = 0, Qr.trapsWithoutResult = 0, Sr.status === OQ.Ab.Refused) {
+               else if (md.startsWithoutResult = 0, md.trapsWithoutResult = 0, Od.status === Sm.wb.Refused) {
```

#### 402. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3893` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3921) · [Before (L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3893)

```diff
-                 this.countFailedJob(PQ.d.test(Qr), "light_refused_input", Qr), this.logRefusal(rr, Qr)
+                 this.countFailedJob(im.e.test(md), "light_refused_input", md), this.logRefusal(dd, md)
```

#### 403. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3895` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3923) · [Before (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3895)

```diff
-               Sr.status === OQ.Ab.HeapRefused && (Qr.heapRetries = Math.min(Qr.heapRetries + 1, 4), this.logHeapRefusal(rr))
+               Od.status === Sm.wb.HeapRefused && (md.heapRetries = Math.min(md.heapRetries + 1, 4), this.logHeapRefusal(dd))
```

#### 404. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3897` → after: `L3925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3925) · [Before (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3897)

```diff
-             if (this.options.write(Sr.jobId, OQ.ke.JobResult, Sr.status, rr, Sr.workerUs, new Uint8Array(Sr.bytes, 0, Sr.len)), this.recycle(Sr.bytes), Sr.spare && this.recycle(Sr.spare), !Zr) break;
+             if (this.options.write(Od.jobId, Sm.Pd.JobResult, Od.status, dd, Od.workerUs, new Uint8Array(Od.bytes, 0, Od.len)), this.recycle(Od.bytes), Od.spare && this.recycle(Od.spare), !Wd) break;
```

#### 405. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3899` → after: `L3927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3927) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3899)

```diff
-               this.lose(rr, `the tables trapped its wasm: ${Sr.trap}`);
+               this.lose(dd, `the tables trapped its wasm: ${Od.trap}`);
```

#### 406. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3904` → after: `L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3932) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3904)

```diff
-             Qr.gone ||= Wr, this.lose(rr, `a job trapped its wasm: ${Sr.trap}`), Wr && this.giveUp(rr, `trapped ${Qr.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
+             md.gone ||= Fd, this.lose(dd, `a job trapped its wasm: ${Od.trap}`), Fd && this.giveUp(dd, `trapped ${md.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
```

#### 407. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3919-L3920` → after: `L3947-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3947-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3947-L3948) · [Before (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3919-L3920)

```diff
-         const Zr = (null !== (Qr = this.refusals.get(Sr)) && void 0 !== Qr ? Qr : 0) + 1;
-         this.refusals.set(Sr, Zr), (0, fZ.x)(Zr) && console.warn(`[bloxd-wasm-client] meshing worker ${rr} refused a chunk (${Zr} so far for this reason): ${Sr}`)
+         const Wd = (null !== (md = this.refusals.get(Od)) && void 0 !== md ? md : 0) + 1;
+         this.refusals.set(Od, Wd), (0, tW.A)(Wd) && console.warn(`[bloxd-wasm-client] meshing worker ${dd} refused a chunk (${Wd} so far for this reason): ${Od}`)
```

#### 408. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3923` → after: `L3951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3951) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3923)

```diff
-         this.heapRefusals++, (0, fZ.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${rr} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
+         this.heapRefusals++, (0, tW.A)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${dd} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
```

#### 409. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3930` → after: `L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3958) · [Before (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3930)

```diff
-           }, console.warn(`[bloxd-wasm-client] meshing worker ${rr} ${Sr}: giving up on it`), this.slots.every((rr => rr.gone))) {
+           }, console.warn(`[bloxd-wasm-client] meshing worker ${dd} ${Od}: giving up on it`), this.slots.every((dd => dd.gone))) {
```

#### 410. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3938` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3966) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3938)

```diff
-               return `worker ${Sr} ${null!==(Qr=null===(Zr=rr.goneFor)||void 0===Zr?void 0:Zr.why)&&void 0!==Qr?Qr:"went"}`
+               return `worker ${Od} ${null!==(md=null===(Wd=dd.goneFor)||void 0===Wd?void 0:Wd.why)&&void 0!==md?md:"went"}`
```

#### 411. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3940` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3968) · [Before (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3940)

```diff
-           this.options.fail(1 === rr.size ? Qr : `no meshing worker is left (${Sr.join(", ")})`)
+           this.options.fail(1 === dd.size ? md : `no meshing worker is left (${Od.join(", ")})`)
```

#### 412. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3944` → after: `L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3972) · [Before (L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3944)

```diff
-         console.warn(`[bloxd-wasm-client] meshing worker ${rr} was lost: ${Sr}`), this.endWorker(rr), this.stopped || (Qr ? Qr() : this.options.onWorkerLost(Sr), this.tellLost(rr), this.start(rr))
+         console.warn(`[bloxd-wasm-client] meshing worker ${dd} was lost: ${Od}`), this.endWorker(dd), this.stopped || (md ? md() : this.options.onWorkerLost(Od), this.tellLost(dd), this.start(dd))
```

#### 413. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3953` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3981) · [Before (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3953)

```diff
-         Sr.started && (Sr.started = !1, this.options.write(0, OQ.ke.WorkerLost, 0, rr, 0, kW))
+         Od.started && (Od.started = !1, this.options.write(0, Sm.Pd.WorkerLost, 0, dd, 0, cF))
```

#### 414. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3957` → after: `L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR3985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L3985) · [Before (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3957)

```diff
-         return null !== (Sr = this.pooled(rr)) && void 0 !== Sr ? Sr : new ArrayBuffer(Math.max(16384, rr))
+         return null !== (Od = this.pooled(dd)) && void 0 !== Od ? Od : new ArrayBuffer(Math.max(16384, dd))
```

#### 415. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3979-L3985` → after: `L4007-L4013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4007-L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4007-L4013) · [Before (L3979-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3979-L3985)

```diff
-     var iW = Qr(38011),
-       wW = Qr(42611),
-       cW = Qr(42805),
-       FW = Qr(42810),
-       oW = (Qr(42589), Qr(37587)),
-       bW = Qr(42816),
-       JW = Qr(42694);
+     var eF = md(38102),
+       IF = md(42713),
+       lF = md(42923),
+       CF = md(42926),
+       ZF = (md(42685), md(37709)),
+       kF = md(42929),
+       fF = md(42797);
```

#### 416. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3993` → after: `L4021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4021) · [Before (L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3993)

```diff
-       const Sr = await (0, bW.i)(rr);
+       const Od = await (0, kF.g)(dd);
```

#### 417. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3999` → after: `L4027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4027) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L3999)

```diff
-         } = (0, JW.v)(Sr);
+         } = (0, fF.n)(Od);
```

#### 418. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4012` → after: `L4040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4040) · [Before (L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4012)

```diff
-         this.session = rr, this.sources = Sr, this.warn = Qr, this.load = Zr, this.nextPoll = 0, this.vU = !1, this.warned = new Set
+         this.session = dd, this.sources = Od, this.warn = md, this.load = Wd, this.nextPoll = 0, this.Aq = !1, this.warned = new Set
```

#### 419. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4023` → after: `L4051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4051) · [Before (L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4023)

```diff
-         this.vU = !0
+         this.Aq = !0
```

#### 420. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4029` → after: `L4057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4057) · [Before (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4029)

```diff
-           if (fr = await this.sources.blockImageUrl(rr), null === fr) throw new Error(`block image ${rr} has no URL`);
+           if (hd = await this.sources.blockImageUrl(dd), null === hd) throw new Error(`block image ${dd} has no URL`);
```

#### 421. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4033-L4034` → after: `L4061-L4062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4061-L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4061-L4062) · [Before (L4033-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4033-L4034)

```diff
-           const Sr = null !== (Er = fr) && void 0 !== Er ? Er : `block image ${rr}`;
-           this.warned.has(Sr) || (this.warned.add(Sr), this.warn(`sun shadow plane texture ${Sr} didn't load: its blocks cast no shadow`, pr))
+           const Od = null !== (vd = hd) && void 0 !== vd ? vd : `block image ${dd}`;
+           this.warned.has(Od) || (this.warned.add(Od), this.warn(`sun shadow plane texture ${Od} didn't load: its blocks cast no shadow`, Qd))
```

#### 422. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4036-L4047` → after: `L4064-L4075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4064-L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4064-L4075) · [Before (L4036-L4047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4036-L4047)

```diff
-         this.vU || this.session.setSunShadowTexture(rr, Sr, null !== (Qr = null === (Zr = Ir) || void 0 === Zr ? void 0 : Zr.width) && void 0 !== Qr ? Qr : 0, null !== (Wr = null === (ar = Ir) || void 0 === ar ? void 0 : ar.height) && void 0 !== Wr ? Wr : 0, null === (jr = Ir) || … [truncated]
-       }
-     }
-     var uW = Qr(37726),
-       ra = Qr(42680),
-       Sa = Qr(42820),
-       Qa = Qr(42827),
-       Za = Qr(42684),
-       Wa = Qr(42691),
-       aa = Qr(35509),
-       ja = Qr(35337),
-       Ia = Qr(42836);
+         this.Aq || this.session.setSunShadowTexture(dd, Od, null !== (md = null === (Wd = Kd) || void 0 === Wd ? void 0 : Wd.width) && void 0 !== md ? md : 0, null !== (Fd = null === (Rd = Kd) || void 0 === Rd ? void 0 : Rd.height) && void 0 !== Fd ? Fd : 0, null === (Xd = Kd) || … [truncated]
+       }
+     }
+     var mR = md(37837),
+       WR = md(42772),
+       FR = md(42938),
+       RR = md(42946),
+       XR = md(42779),
+       KR = md(42788),
+       hR = md(35587),
+       vR = md(35426),
+       QR = md(42959);
```

#### 423. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4050-L4052` → after: `L4078-L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4078-L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4078-L4080) · [Before (L4050-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4050-L4052)

```diff
-     const pa = new Set([...ja.e, "sceneDownload"]);
-     var xa = Qr(42598),
-       ma = Qr(42715);
+     const NR = new Set([...vR.b, "sceneDownload"]);
+     var qR = md(42693),
+       HR = md(42811);
```

#### 424. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4104` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4132) · [Before (L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4104)

```diff
-     var ha = Qr(42845);
+     var pR = md(42961);
```

#### 425. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4110` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4138) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4110)

```diff
-         aux: OQ.jc.AdStart | (rr ? OQ.jc.PreventMovement : 0),
+         aux: Sm.ec.AdStart | (dd ? Sm.ec.PreventMovement : 0),
```

#### 426. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4114-L4115` → after: `L4142-L4143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4142-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4142-L4143) · [Before (L4114-L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4114-L4115)

```diff
-     var ea = Qr(3995),
-       Ka = Qr(319);
+     var aR = md(3973),
+       ER = md(339);
```

#### 427. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4117` → after: `L4145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4145) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117)

```diff
-     var Ba = Qr(42853);
+     var UR = md(42963);
```

#### 428. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4137` → after: `L4165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4165) · [Before (L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4137)

```diff
-           oneShot: rr.includes(UZ.e)
+           oneShot: dd.includes(bW.h)
```

#### 429. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4147` → after: `L4175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4175) · [Before (L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4147)

```diff
-         })), this.channel = (null !== (Sr = rr.openChannel) && void 0 !== Sr ? Sr : UZ.r)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (Od = dd.openChannel) && void 0 !== Od ? Od : bW.t)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 430. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4159-L4160` → after: `L4187-L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4187-L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4187-L4188) · [Before (L4159-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4159-L4160)

```diff
-           })).catch((rr => (null !== Sr && (0, UZ.n)(Sr), Qr(rr), null)))
-         }((() => this.host.load(Sr).then((rr => (rr.setGamePackConfirm(this.confirm), this.landed = rr, rr)))), Sr ? this.host.store : null, this.host.jx), this.landRequest(this.requested), this.requested
+           })).catch((dd => (null !== Od && (0, bW.o)(Od), md(dd), null)))
+         }((() => this.host.load(Od).then((dd => (dd.setGamePackConfirm(this.confirm), this.landed = dd, dd)))), Od ? this.host.store : null, this.host.Wt), this.landRequest(this.requested), this.requested
```

#### 431. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4168` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4196) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4168)

```diff
-           return null !== (rr = this.requested) && void 0 !== rr ? rr : null
+           return null !== (dd = this.requested) && void 0 !== dd ? dd : null
```

#### 432. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4176-L4177` → after: `L4204-L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4204-L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4204-L4205) · [Before (L4176-L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4176-L4177)

```diff
-     var va = Qr(37522);
-     const Oa = 216 * va.f,
+     var BR = md(37652);
+     const SR = 216 * BR.g,
```

#### 433. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4179-L4180` → after: `L4207-L4208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4207-L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4207-L4208) · [Before (L4179-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4179-L4180)

```diff
-       la = 64 * va.f,
-       Xa = 16 * va.f;
+       uR = 64 * BR.g,
+       VR = 16 * BR.g;
```

#### 434. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4184` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4212) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4184)

```diff
-       return null !== (rr = null === (Sr = performance.memory) || void 0 === Sr ? void 0 : Sr.lY) && void 0 !== rr ? rr : null
+       return null !== (dd = null === (Od = performance.memory) || void 0 === Od ? void 0 : Od.Xp) && void 0 !== dd ? dd : null
```

#### 435. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4194` → after: `L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4222) · [Before (L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4194)

```diff
-           Wr = Math.max(null !== (Sr = this.reads.jsHeapBytes()) && void 0 !== Sr ? Sr : 0, la),
+           Fd = Math.max(null !== (Od = this.reads.jsHeapBytes()) && void 0 !== Od ? Od : 0, uR),
```

#### 436. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4220` → after: `L4248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4248) · [Before (L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4220)

```diff
-         return null === rr ? null : `estimate ${(0,va.m)(rr.totalBytes)} MiB of budget ${null===Sr?"none":(0,va.m)(Sr)}: wasm ${(0,va.m)(rr.wasmBytes)} js ${(0,va.m)(rr.jsHeapBytes)} gpu ${(0,va.m)(rr.gpuBytes)} chunks ${rr.storedChunks}`
+         return null === dd ? null : `estimate ${(0,BR.k)(dd.totalBytes)} MiB of budget ${null===Od?"none":(0,BR.k)(Od)}: wasm ${(0,BR.k)(dd.wasmBytes)} js ${(0,BR.k)(dd.jsHeapBytes)} gpu ${(0,BR.k)(dd.gpuBytes)} chunks ${dd.storedChunks}`
```

#### 437. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4229-L4230` → after: `L4257-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4257-L4258) · [Before (L4229-L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4229-L4230)

```diff
-             footprintMiB: Number((0, va.m)(rr.totalBytes)),
-             gpuMiB: Number((0, va.m)(rr.gpuBytes)),
+             footprintMiB: Number((0, BR.k)(dd.totalBytes)),
+             gpuMiB: Number((0, BR.k)(dd.gpuBytes)),
```

#### 438. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4233` → after: `L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4261) · [Before (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4233)

```diff
-           footprintBudgetMiB: null === Sr ? -1 : Number((0, va.m)(Sr))
+           footprintBudgetMiB: null === Od ? -1 : Number((0, BR.k)(Od))
```

#### 439. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4237-L4241` → after: `L4265-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4265-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4265-L4269) · [Before (L4237-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4237-L4241)

```diff
-     var qa = Qr(3909),
-       Ra = Qr(5279),
-       ga = Qr(37811),
-       Ca = Qr(39447);
-     const Ma = LQ.gb + 1,
+     var rR = md(3903),
+       GR = md(5173),
+       nR = md(37908),
+       LR = md(39502);
+     const PR = sm.ab + 1,
```

#### 440. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4245` → after: `L4273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4273) · [Before (L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4245)

```diff
-         this.log = rr, this.take = Sr, this.wI = [], this.unshown = new Map, this.latest = new Map
+         this.log = dd, this.take = Od, this.jK = [], this.unshown = new Map, this.latest = new Map
```

#### 441. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4249-L4252` → after: `L4277-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4277-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4277-L4280) · [Before (L4249-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4249-L4252)

```diff
-         Qr.length >= LQ.cb && Qr[0] > 0 && (0, qa.l)("remesh", `${Qr[0]} core records lost to a full log`);
-         const Zr = this.wI;
-         for (let Wr = LQ.cb; Wr + LQ.gb <= Qr.length; Wr += LQ.gb) {
-           for (let rr = Wr; rr < Wr + LQ.gb; rr++) Zr.push(Qr[rr]);
+         md.length >= sm.$ && md[0] > 0 && (0, rR.k)("remesh", `${md[0]} core records lost to a full log`);
+         const Wd = this.jK;
+         for (let Fd = sm.$; Fd + sm.ab <= md.length; Fd += sm.ab) {
+           for (let dd = Fd; dd < Fd + sm.ab; dd++) Wd.push(md[dd]);
```

#### 442. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4262` → after: `L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4290) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4262)

```diff
-         const Zr = this.wI,
+         const Wd = this.jK,
```

#### 443. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4265` → after: `L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4293) · [Before (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4265)

```diff
-           jr = Zr[rr + LQ.gb];
+           Xd = Wd[dd + sm.ab];
```

#### 444. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4267` → after: `L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4295) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4267)

```diff
-           case LQ.Nb.Edit:
+           case sm.Db.Edit:
```

#### 445. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4270-L4271` → after: `L4298-L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4298-L4299) · [Before (L4270-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4270-L4271)

```diff
-           case LQ.Nb.Sent:
-             this.latest.set(Wr, ar), this.log.sent(Wr, ar, Zr[rr + 5], Zr[rr + 6], Zr[rr + 7], null !== (Qr = this.unshown.get(Wr)) && void 0 !== Qr ? Qr : Ca.c, jr);
+           case sm.Db.Sent:
+             this.latest.set(Fd, Rd), this.log.sent(Fd, Rd, Wd[dd + 5], Wd[dd + 6], Wd[dd + 7], null !== (md = this.unshown.get(Fd)) && void 0 !== md ? md : LR.c, Xd);
```

#### 446. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4273` → after: `L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4301) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4273)

```diff
-           case LQ.Nb.Done: {
+           case sm.Db.Done: {
```

#### 447. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4279` → after: `L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4307) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4279)

```diff
-           case LQ.Nb.Failed: {
+           case sm.Db.Failed: {
```

#### 448. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4284` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4312) · [Before (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4284)

```diff
-           case LQ.Nb.Shown:
+           case sm.Db.Shown:
```

#### 449. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4287` → after: `L4315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4315) · [Before (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4287)

```diff
-           case LQ.Nb.Replaced:
+           case sm.Db.Replaced:
```

#### 450. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4290` → after: `L4318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4318) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4290)

```diff
-           case LQ.Nb.Emptied:
+           case sm.Db.Emptied:
```

#### 451. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4294` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4322) · [Before (L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4294)

```diff
-             console.warn(`[debug:remesh] unknown core record kind ${Zr[rr]}`)
+             console.warn(`[debug:remesh] unknown core record kind ${Wd[dd]}`)
```

#### 452. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4306-L4307` → after: `L4334-L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4334-L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4334-L4335) · [Before (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4306-L4307)

```diff
-     var Va = Qr(4434),
-       ia = Qr(41338);
+     var DR = md(4447),
+       eR = md(41343);
```

#### 453. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4313` → after: `L4341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4341) · [Before (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4313)

```diff
-         this.options = rr, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.wI = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = … [truncated]
+         this.options = dd, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.jK = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4316-L4317` → after: `L4344-L4345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4344-L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4344-L4345) · [Before (L4316-L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4316-L4317)

```diff
-         if (!(this.gone || null === this.worker && null === this.wI))
-           if (rr === OQ.me.WorldgenSeed) {
+         if (!(this.gone || null === this.worker && null === this.jK))
+           if (dd === Sm.Td.WorldgenSeed) {
```

#### 455. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4328` → after: `L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4356) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4328)

```diff
-           } else if (rr === OQ.me.Generate) {
+           } else if (dd === Sm.Td.Generate) {
```

#### 456. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4330-L4331` → after: `L4358-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4358-L4359) · [Before (L4330-L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4330-L4331)

```diff
-           const rr = new DataView(Sr.buffer, Sr.byteOffset, OQ.fe),
-             Zr = null !== (Qr = this.pool.pop()) && void 0 !== Qr ? Qr : new ArrayBuffer(8192);
+           const dd = new DataView(Od.buffer, Od.byteOffset, Sm.Kd),
+             Wd = null !== (md = this.pool.pop()) && void 0 !== md ? md : new ArrayBuffer(8192);
```

#### 457. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4346` → after: `L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4374) · [Before (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4346)

```diff
-         this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, OQ.ke.WorldgenStarted, 0, 0, Fa)))
+         this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Sm.Pd.WorldgenStarted, 0, 0, CR)))
```

#### 458. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4354` → after: `L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4382) · [Before (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4354)

```diff
-         null !== this.wI ? this.wI.push({
+         null !== this.jK ? this.jK.push({
```

#### 459. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4363` → after: `L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4391) · [Before (L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4363)

```diff
-         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.wI ??= [])
+         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.jK ??= [])
```

#### 460. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4387` → after: `L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4415) · [Before (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4387)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Wr), this.lastLoss = `it did not start (${String(Wr)})`, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Fd), this.lastLoss = `it did not start (${String(Fd)})`, void this.start()
```

#### 461. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4401` → after: `L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4429) · [Before (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4401)

```diff
-             hx: Zr.i.hx
+             Qt: Wd.i.Qt
```

#### 462. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4404` → after: `L4432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4432) · [Before (L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4404)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Wr), this.lastLoss = `it could not be sent the module (${String(Wr)})`, Qr.terminate(), this.worker = null, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Fd), this.lastLoss = `it could not be sent the module (${String(Fd)})`, md.terminate(), this.worker = null, void this.start()
```

#### 463. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4406-L4407` → after: `L4434-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4434-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4434-L4435) · [Before (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4406-L4407)

```diff
-         this.watch = new GW.m(GW.i, (rr => {
-           this.lose((0, GW.o)(rr), (() => {
+         this.watch = new zF.g(zF.e, (dd => {
+           this.lose((0, zF.j)(dd), (() => {
```

#### 464. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4416` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4444) · [Before (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4416)

```diff
-             const Sr = this.wI;
+             const Od = this.jK;
```

#### 465. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4418` → after: `L4446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4446) · [Before (L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4418)

```diff
-               this.coreWaits = !1, this.options.write(0, OQ.ke.WorldgenStarted, 0, 0, Fa);
+               this.coreWaits = !1, this.options.write(0, Sm.Pd.WorldgenStarted, 0, 0, CR);
```

#### 466. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4421` → after: `L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4449) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4421)

```diff
-             this.wI = null;
+             this.jK = null;
```

#### 467. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4437` → after: `L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4465) · [Before (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4437)

```diff
-             this.generated = !0, Sr.status !== OQ.Ab.Trapped && (this.startsWithoutResult = 0), this.options.write(Sr.ticket, OQ.ke.WorldgenResult, Sr.status, Sr.workerUs, new Uint8Array(Sr.bytes, 0, Sr.len)), this.recycle(Sr.bytes), Sr.spare && this.recycle(Sr.spare)
+             this.generated = !0, Od.status !== Sm.wb.Trapped && (this.startsWithoutResult = 0), this.options.write(Od.ticket, Sm.Pd.WorldgenResult, Od.status, Od.workerUs, new Uint8Array(Od.bytes, 0, Od.len)), this.recycle(Od.bytes), Od.spare && this.recycle(Od.spare)
```

#### 468. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4441` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4469) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4441)

```diff
-         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${rr}`), this.lastLoss = rr, this.endWorker(), this.gone || (Sr ? Sr() : this.options.onWorkerLost(rr, this.generated), this.dropHeld(), this.wI = null, this.options.write(0, OQ.ke.WorldgenLost, OQ.oe.Lost,  … [truncated]
+         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${dd}`), this.lastLoss = dd, this.endWorker(), this.gone || (Od ? Od() : this.options.onWorkerLost(dd, this.generated), this.dropHeld(), this.jK = null, this.options.write(0, Sm.Pd.WorldgenLost, Sm.Wd.Lost,  … [truncated]
```

#### 469. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4444` → after: `L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4472) · [Before (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4444)

```diff
-         this.gone = !0, this.dropHeld(), this.options.write(0, OQ.ke.WorldgenLost, OQ.oe.Gone, 0, Fa)
+         this.gone = !0, this.dropHeld(), this.options.write(0, Sm.Pd.WorldgenLost, Sm.Wd.Gone, 0, CR)
```

#### 470. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4451` → after: `L4479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4479) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4451)

```diff
-         if (null !== this.wI) {
+         if (null !== this.jK) {
```

#### 471. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4455-L4456` → after: `L4483-L4484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4483-L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4483-L4484) · [Before (L4455-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4455-L4456)

```diff
-             of this.wI) "generate" === rr.type && this.recycle(rr.bytes);
-           this.wI.length = 0
+             of this.jK) "generate" === dd.type && this.recycle(dd.bytes);
+           this.jK.length = 0
```

#### 472. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4463-L4467` → after: `L4491-L4495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4491-L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4491-L4495) · [Before (L4463-L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4463-L4467)

```diff
-     var ba = Qr(39242),
-       Ja = Qr(2429),
-       Da = Qr(42526),
-       da = Qr(42862),
-       sa = Qr(42635);
+     var kR = md(39272),
+       fR = md(2454),
+       MR = md(42628),
+       dX = md(42965),
+       OX = md(42741);
```

#### 473. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4512` → after: `L4540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4540) · [Before (L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4512)

```diff
-       const Wr = (0, XW.p)(XW.X, aj, [Zr]),
+       const Fd = (0, VF.m)(VF.O, hX, [Wd]),
```

#### 474. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4536` → after: `L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4564) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4536)

```diff
-         fr = (0, XW.p)(XW.X, Zr, [rr]);
+         hd = (0, VF.m)(VF.O, Wd, [dd]);
```

#### 475. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4538` → after: `L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4566) · [Before (L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4538)

```diff
-         const Qr = (0, XW.p)(XW.X, Wr, [fr[0]]),
+         const md = (0, VF.m)(VF.O, Fd, [hd[0]]),
```

#### 476. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4543-L4545` → after: `L4571-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4571-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4571-L4573) · [Before (L4543-L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4543-L4545)

```diff
-             Sr = (0, XW.p)(XW.X, ua, [fr[0]]),
-             Zr = null !== (0, XW.p)(XW.X, rj, [rr]) ? rr : null === Sr ? null : Sr[1],
-             Wr = null === Zr ? null : (0, XW.p)(XW.X, ar, [Zr]);
+             Od = (0, VF.m)(VF.O, mX, [hd[0]]),
+             Wd = null !== (0, VF.m)(VF.O, WX, [dd]) ? dd : null === Od ? null : Od[1],
+             Fd = null === Wd ? null : (0, VF.m)(VF.O, Rd, [Wd]);
```

#### 477. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4548` → after: `L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4576) · [Before (L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4548)

```diff
-         null !== Qr && (null === jr ? jr = Qr[0] : null === Ir && Qr[0] !== jr && (Ir = Qr[0])), fr = (0, XW.p)(XW.X, Zr, [rr])
+         null !== md && (null === Xd ? Xd = md[0] : null === Kd && md[0] !== Xd && (Kd = md[0])), hd = (0, VF.m)(VF.O, Wd, [dd])
```

#### 478. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4550` → after: `L4578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4578) · [Before (L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4550)

```diff
-       return null !== (Qr = Ir) && void 0 !== Qr ? Qr : null === jr ? "none" : "own"
+       return null !== (md = Kd) && void 0 !== md ? md : null === Xd ? "none" : "own"
```

#### 479. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4555-L4556` → after: `L4583-L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4583-L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4583-L4584) · [Before (L4555-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4555-L4556)

```diff
-       const Qr = (0, XW.p)(XW.X, Ej, [Sr]);
-       return null === Qr ? rr : rr + ":" + Qr[1] + ":" + Qr[2]
+       const md = (0, VF.m)(VF.O, oX, [Od]);
+       return null === md ? dd : dd + ":" + md[1] + ":" + md[2]
```

#### 480. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4565` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4593) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4565)

```diff
-         jr = (0, XW.p)(XW.X, Sr, [rr]);
+         Xd = (0, VF.m)(VF.O, Od, [dd]);
```

#### 481. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4567-L4569` → after: `L4595-L4597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4595-L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4595-L4597) · [Before (L4567-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4567-L4569)

```diff
-         const Ir = (0, XW.p)(XW.X, Qr, [jr[0]]),
-           fr = null === Ir ? (0, XW.p)(XW.X, ua, [jr[0]]) : null,
-           Er = null !== fr && null !== (0, XW.p)(XW.X, rj, [fr[1]]) && 0 !== Sj(fr[1], "wasm:") ? fr[1] : null;
+         const Kd = (0, VF.m)(VF.O, md, [Xd[0]]),
+           hd = null === Kd ? (0, VF.m)(VF.O, mX, [Xd[0]]) : null,
+           vd = null !== hd && null !== (0, VF.m)(VF.O, WX, [hd[1]]) && 0 !== FX(hd[1], "wasm:") ? hd[1] : null;
```

#### 482. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4596` → after: `L4624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4624) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4596)

```diff
-         jr = (0, XW.p)(XW.X, Sr, [rr])
+         Xd = (0, VF.m)(VF.O, Od, [dd])
```

#### 483. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4606` → after: `L4634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4634) · [Before (L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4606)

```diff
-       return (0, ba.g)(function(rr) {
+       return (0, kR.d)(function(dd) {
```

#### 484. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4610` → after: `L4638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4638) · [Before (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4610)

```diff
-         for (let Wr = 0; Wr <= Qr; Wr++) Sr ^= Wr === Qr ? rr.length : (0, XW.p)(XW.gb, rr, [Wr]), Sr = Sr + (Sr << 1) + (Sr << 4) + (Sr << 7) + (Sr << 8) + (Sr << 24) >>> 0;
+         for (let Fd = 0; Fd <= md; Fd++) Od ^= Fd === md ? dd.length : (0, VF.m)(VF.Y, dd, [Fd]), Od = Od + (Od << 1) + (Od << 4) + (Od << 7) + (Od << 8) + (Od << 24) >>> 0;
```

#### 485. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4639` → after: `L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4667) · [Before (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4639)

```diff
-                 case OQ.uc.StackCheck:
+                 case Sm.rc.StackCheck:
```

#### 486. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4641` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4669) · [Before (L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4641)

```diff
-                 case OQ.uc.ConfirmMesh:
+                 case Sm.rc.ConfirmMesh:
```

#### 487. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4643` → after: `L4671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4671) · [Before (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4643)

```diff
-                 case OQ.uc.IndexPassReplaced:
+                 case Sm.rc.IndexPassReplaced:
```

#### 488. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4645` → after: `L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4673) · [Before (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4645)

```diff
-                 case OQ.uc.ProductSubChanged:
+                 case Sm.rc.ProductSubChanged:
```

#### 489. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4647-L4651` → after: `L4675-L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4675-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4675-L4679) · [Before (L4647-L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4647-L4651)

```diff
-                 case OQ.uc.RenderStatus:
-                   return Sr.pp();
-                 case OQ.uc.Held:
-                   return Sr.wI();
-                 case OQ.uc.PlayerKilledSubs:
+                 case Sm.rc.RenderStatus:
+                   return Od.vQ();
+                 case Sm.rc.Held:
+                   return Od.jK();
+                 case Sm.rc.PlayerKilledSubs:
```

#### 490. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4653` → after: `L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4681) · [Before (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4653)

```diff
-                 case OQ.jb: {
+                 case Sm.gb: {
```

#### 491. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4655` → after: `L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4683) · [Before (L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4655)

```diff
-                   return null === Qr ? 0 : (0, XW.p)(XW.x, XW.ob, [Qr, new XW.c((0, XW.J)(rr()), Zr, Wr)]).written
+                   return null === md ? 0 : (0, VF.m)(VF.s, VF.db, [md, new VF.e((0, VF.z)(dd()), Wd, Fd)]).written
```

#### 492. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4662` → after: `L4690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4690) · [Before (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4662)

```diff
-             return OQ.mc
+             return Sm.jc
```

#### 493. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4669` → after: `L4697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4697) · [Before (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4669)

```diff
-         this.write = rr, this.flagsWritten = 0, this.written = (0, XW.r)(null)
+         this.write = dd, this.flagsWritten = 0, this.written = (0, VF.o)(null)
```

#### 494. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4677` → after: `L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4705) · [Before (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4677)

```diff
-         this.setFlags(Sr | OQ.g.Ready)
+         this.setFlags(Od | Sm.d.Ready)
```

#### 495. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4684` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4712) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4684)

```diff
-         0 !== Sr && this.write(OQ.j.Flags, Sr, Sr) && (this.flagsWritten |= Sr)
+         0 !== Od && this.write(Sm.f.Flags, Od, Od) && (this.flagsWritten |= Od)
```

#### 496. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4687` → after: `L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4715) · [Before (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4687)

```diff
-         return this.write(OQ.j.Flags, OQ.g.OriginStackHit, OQ.g.OriginStackHit)
+         return this.write(Sm.f.Flags, Sm.d.OriginStackHit, Sm.d.OriginStackHit)
```

#### 497. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4704` → after: `L4732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4732) · [Before (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4704)

```diff
-     const yj = [1, "length", 2, void 0, null, 3, 0, "t", "c3RhY2", "cw==", 1e5, "stack", "name", 19, "a", "c", 4, "b", 84, !0, "e", 171, 226, !1, "r", 33, 155, 44, 5, 65, 168, "string", 228, 71, 6, 238, 223, 10, "o", 199, "functi", "on", 33554432, 67108864, "d", 148, 237, 158, 24 … [truncated]
+     const JX = [1, "length", 2, void 0, null, 3, 0, "p", "c3RhY2", "cw==", "a", 1e5, "b", 4, 103, 167, "d", 93, 143, 120, "c", !1, !0, 217, 5, 57, "stack", "name", 166, 60, "s=", 228, 6, 145, 61, 24, 155, "Q", ".", 71, 33554432, 67108864, "f", "o", 7, 245, ")", 28, 232, 10, "stri … [truncated]
```

#### 498. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4716-L4721` → after: `L4744-L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4744-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4744-L4749) · [Before (L4716-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4716-L4721)

```diff
-         ar = (0, XW[yj[7]])("RXJyb3" + yj[99]),
-         jr = (0, XW[yj[7]])(yj[8] + "s="),
-         Ir = (0, XW[yj[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
-         Er = (0, XW[yj[7]])(yj[8] + "tUcmFjZUxpbWl0"),
-         pr = (0, XW[yj[7]])("bmF0aXZl"),
-         xr = [(0, XW[yj[7]])("bWFpbi5qcw=="), (0, XW[yj[7]])("aW5kZXguanM="), (0, XW[yj[7]])("dXNlcnNjcmlwdA=="), (0, XW[yj[7]])("Y29udGVudC5q" + yj[9]), (0, XW[yj[7]])("b3B0aW9ucy5q" + yj[9]), (0, XW[yj[7]])("cG9wdXAuanM="), (0, XW[yj[7]])("LnVzZXIuanM="), (0, XW[yj[7]])("Y2hyb2 … [truncated]
+         Rd = (JX[6], VF[JX[7]])("RXJyb3" + JX[79]),
+         Xd = (JX[6], VF[JX[7]])(JX[8] + JX[30]),
+         Kd = (JX[6], VF[JX[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
+         vd = (JX[6], VF[JX[7]])(JX[8] + "tUcmFjZUxpbWl0"),
+         Qd = (JX[6], VF[JX[7]])("bmF0aXZl"),
+         td = [(JX[6], VF[JX[7]])("bWFpbi5qcw=="), (JX[6], VF[JX[7]])("aW5kZXguanM="), (JX[6], VF[JX[7]])("dXNlcnNjcmlwdA=="), (JX[6], VF[JX[7]])("Y29udGVudC5q" + JX[9]), (JX[6], VF[JX[7]])("b3B0aW9ucy5q" + JX[9]), (JX[6], VF[JX[7]])("cG9wdXAuanM="), (JX[6], VF[JX[7]])("LnVzZXIuan … [truncated]
```

#### 499. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4726-L4727` → after: `L4754-L4760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4754-L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4754-L4760) · [Before (L4726-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4726-L4727)

```diff
-           Qr[Er] < yj[10] && (Qr[Er] = yj[10]);
-           const Zr = "string" === typeof(mr = (new Sr)[jr]) ? mr : `${mr}`,
+           if (md[vd] < JX[11]) {
+             function Hd(...dd) {
+               dd[JX[1]] = JX[6]
+             }
+             "z5Pqn5" in UX && Hd(), md[vd] = JX[11]
+           }
+           const Wd = "string" === typeof(od = (new Od)[Xd]) ? od : `${od}`,
```

#### 500. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4731` → after: `L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4764) · [Before (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4731)

```diff
-           typeof pr === yj[40] + yj[41] && (0, XW[yj[49]])(pr, Sr, [fr]);
+           typeof Qd === JX[73] + JX[74] && (JX[6], VF[JX[55]])(Qd, Od, [hd]);
```

#### 501. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4735-L4737` → after: `L4768-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4768-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4768-L4790) · [Before (L4735-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4735-L4737)

```diff
-             if (Nj(Zr, xr[Wr])) return {
-               [yj[11]]: Zr,
-               [yj[12]]: xr[Wr]
+             function bd(...dd) {
+               xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[0], Od[JX[0]] = []), (Od[JX[6]] === JX[0] || Od[JX[6]] >= JX[13]) && dd[JX[12]](Od[JX[0]], [], Od[JX[6]], JX[6]), Od[JX[0]]
+               }, dd[JX[12]] = function(...Od) {
+                 for (Od[JX[1]] = JX[13], Od[JX[14]] = Od[JX[5]]; Od[JX[14]] < Od[JX[2]]; Od[JX[14]]++) {
+                   if (Od[JX[0]].length !== Od[JX[14]]) return;
+                   for (Od[JX[15]] = JX[6]; Od[JX[15]] < Od[JX[2]]; Od[JX[15]]++) dd[JX[20]](Od[JX[0]], [Od[JX[14]], Od[JX[15]]]) && (xX(Od[JX[0]].push([Od[JX[14]], Od[JX[15]]]), dd[JX[12]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[14]] + JX[0])), Od[JX[0]].length === Od[JX[2]] && Od … [truncated]
+                 }
+               }, dd[JX[16]] = function(...dd) {
+                 for (xX(dd[JX[1]] = JX[0], dd[-JX[18]] = [], dd[-JX[17]] = dd[JX[6]].length), dd[JX[5]] = JX[6]; dd[JX[5]] < dd[-JX[17]]; dd[JX[5]]++)
+                   for (dd[-JX[18]][dd[JX[5]]] = "", dd[JX[19]] = JX[6]; dd[JX[19]] < dd[-JX[17]]; dd[JX[19]]++) dd[-JX[18]][dd[JX[5]]] += dd[JX[6]][dd[JX[5]]][JX[0]] === dd[JX[19]] ? JX[37] : JX[38];
+                 return dd[-JX[18]]
+               }, dd[JX[20]] = function(...dd) {
+                 for (xX(dd[JX[1]] = JX[2], dd[JX[10]] = dd[JX[6]].length), dd[JX[12]] = JX[6]; dd[JX[12]] < dd[JX[10]]; dd[JX[12]]++) {
+                   if (dd[JX[6]][dd[JX[12]]][JX[6]] === dd[JX[0]][JX[6]] || dd[JX[6]][dd[JX[12]]][JX[0]] === dd[JX[0]][JX[0]]) return JX[21];
+                   if (Math.abs((dd[JX[6]][dd[JX[12]]][JX[6]] - dd[JX[0]][JX[6]]) / (dd[JX[6]][dd[JX[12]]][JX[0]] - dd[JX[0]][JX[0]])) === JX[0]) return JX[21]
+ ... (7 more added lines; see GitHub link above)
```

#### 502. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4739-L4741` → after: `L4792-L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4792-L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4792-L4811) · [Before (L4739-L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4739-L4741)

```diff
-             if (typeof Nr === yj[31] && Nj(Nr, xr[Wr])) return {
-               [yj[11]]: Nr,
-               [yj[12]]: xr[Wr]
+             if (typeof Nd === JX[50] && yX(Nd, td[yd])) {
+               function Td() {
+                 var dd;
+                 xX(dd = function(...Od) {
+                   if (xX(Od[JX[1]] = JX[5], Od[-JX[23]] = {}), Od[JX[6]][Od[JX[0]] + Od[JX[2]]] !== JX[3]) return Od[JX[6]][Od[JX[0]] + Od[JX[2]]];
+                   if (Od[JX[0]] === Od[JX[2]]) return JX[22];
+                   for (Od[JX[13]] = JX[6]; Od[JX[13]] < Od[JX[0]].length; Od[JX[13]]++) Od[-JX[23]][Od[JX[0]][Od[JX[13]]]] === JX[3] && (Od[-JX[23]][Od[JX[0]][Od[JX[13]]]] = JX[6]), Od[-JX[23]][Od[JX[2]][Od[JX[13]]]] === JX[3] && (Od[-JX[23]][Od[JX[2]][Od[JX[13]]]] = JX[6]), xX(O … [truncated]
+                   for (Od[JX[24]] in Od[-JX[23]])
+                     if (Od[-JX[23]][Od[JX[24]]] !== JX[6]) return Od[JX[6]][Od[JX[0]] + Od[JX[2]]] = JX[21], JX[21];
+                   for (Od[-JX[25]] = JX[0]; Od[-JX[25]] < Od[JX[0]].length; Od[-JX[25]]++)
+                     if (dd(Od[JX[6]], Od[JX[0]].substr(JX[6], Od[-JX[25]]), Od[JX[2]].substr(JX[6], Od[-JX[25]])) && dd(Od[JX[6]], Od[JX[0]].substr(Od[-JX[25]]), Od[JX[2]].substr(Od[-JX[25]])) || dd(Od[JX[6]], Od[JX[0]].substr(JX[6], Od[-JX[25]]), Od[JX[2]].substr(Od[JX[2]].lengt … [truncated]
+                   return Od[JX[6]][Od[JX[0]] + Od[JX[2]]] = JX[21], JX[21]
+                 }, console.log((function(...Od) {
+                   return Od[JX[1]] = JX[2], dd({}, Od[JX[6]], Od[JX[0]])
+                 })))
+               }
+ ... (4 more added lines; see GitHub link above)
```

#### 503. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4746` → after: `L4816-L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4816-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4816-L4830) · [Before (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4746)

```diff
-         Nr = (...rr) => (rr[yj[1]] = yj[0], mr(rr[yj[6]]) !== yj[4]);
+         Nd = (...dd) => (dd[JX[1]] = JX[0], "B2PqG0" in UX && function(...dd) {
+           xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(Od, md) {
+             return dd[-JX[28]]({}, Od, md)
+           }, dd[-JX[28]] = function(Od, md, Wd) {
+             var Fd, Rd, Xd, Kd = {};
+             if (Od[md + Wd] !== JX[3]) return Od[md + Wd];
+             if (md === Wd) return JX[22];
+             for (Fd = JX[6]; Fd < md.length; Fd++) Kd[md[Fd]] === JX[3] && (Kd[md[Fd]] = JX[6]), Kd[Wd[Fd]] === JX[3] && (Kd[Wd[Fd]] = JX[6]), xX(Kd[md[Fd]]++, Kd[Wd[Fd]]--);
+             for (Rd in Kd)
+               if (Kd[Rd] !== JX[6]) return Od[md + Wd] = JX[21], JX[21];
+             for (Xd = JX[0]; Xd < md.length; Xd++)
+               if (dd[-JX[28]](Od, md.substr(JX[6], Xd), Wd.substr(JX[6], Xd)) && dd[-JX[28]](Od, md.substr(Xd), Wd.substr(Xd)) || dd[-JX[28]](Od, md.substr(JX[6], Xd), Wd.substr(Wd.length - Xd)) && dd[-JX[28]](Od, md.substr(Xd), Wd.substr(JX[6], Wd.length - Xd))) return Od[md + W … [truncated]
+             return Od[md + Wd] = JX[21], JX[21]
+           }, console.log(dd[JX[10]]))
+         }(), od(dd[JX[6]]) !== JX[4]);
```

#### 504. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4752-L4766` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4836) · [Before (L4752-L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4752-L4766)

```diff
-         rr[yj[1]] = yj[0], "LUc5lC" + yj[97] in Bj && function(...rr) {
-           Tj(rr[yj[1]] = yj[6], rr[-yj[18]] = function(...rr) {
-             for (Tj(rr[yj[1]] = yj[0], rr[yj[14]] = rr[yj[6]].length, rr[yj[17]] = [], rr[yj[15]] = yj[6], rr[yj[16]] = yj[6], rr[yj[6]].sort(((rr, Sr) => rr - Sr))), rr[yj[13]] = yj[6]; rr[yj[13]] < rr[yj[14]]; rr[yj[13]]++)
-               if (!(rr[yj[13]] > yj[6] && rr[yj[6]][rr[yj[13]]] === rr[yj[6]][rr[yj[13]] - yj[0]]))
-                 for (Tj(rr[yj[15]] = rr[yj[13]] + yj[0], rr[yj[16]] = rr[yj[14]] - yj[0]); rr[yj[15]] < rr[yj[16]];)
-                   if (rr[yj[6]][rr[yj[13]]] + rr[yj[6]][rr[yj[15]]] + rr[yj[6]][rr[yj[16]]] < yj[6]) rr[yj[15]]++;
-                   else if (rr[yj[6]][rr[yj[13]]] + rr[yj[6]][rr[yj[15]]] + rr[yj[6]][rr[yj[16]]] > yj[6]) rr[yj[16]]--;
-             else {
-               for (rr[yj[17]].push([rr[yj[6]][rr[yj[13]]], rr[yj[6]][rr[yj[15]]], rr[yj[6]][rr[yj[16]]]]); rr[yj[15]] < rr[yj[16]] && rr[yj[6]][rr[yj[15]]] === rr[yj[6]][rr[yj[15]] + yj[0]];) rr[yj[15]]++;
-               for (; rr[yj[15]] < rr[yj[16]] && rr[yj[6]][rr[yj[16]]] === rr[yj[6]][rr[yj[16]] - yj[0]];) rr[yj[16]]--;
-               Tj(rr[yj[15]]++, rr[yj[16]]--)
-             }
-             return rr[yj[17]]
-           }, console.log(rr[-yj[18]]))
-         }();
+         dd[JX[1]] = JX[0];
```

#### 505. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4770` → after: `L4840-L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4840-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4840-L4843) · [Before (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4770)

```diff
-           return yj[19]
+           function Od(...dd) {
+             dd[JX[1]] = JX[6]
+           }
+           return "nC2zpxR" in UX && Od(), JX[22]
```

#### 506. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4773` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4846) · [Before (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4773)

```diff
-       let nr = yj[23];
+       let pd = JX[21];
```

#### 507. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4775` → after: `L4848-L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4848-L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4848-L4873) · [Before (L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4775)

```diff
-           !nr && (0, XW[yj[107]])() && (nr = yj[19])
+           if ("BjHhx4N" in UX && function(...dd) {
+               xX(dd[JX[1]] = JX[6], dd[JX[34]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[5], Od[JX[5]] = {}), Od[JX[2]].length !== Od[JX[6]].length + Od[JX[0]].length ? JX[21] : dd[JX[31]](Od[JX[6]], Od[JX[0]], Od[JX[2]], JX[6], JX[6], JX[6], Od[JX[5]])
+               }, dd[JX[31]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[44], Od[-JX[33]] = JX[21]), Od[JX[24]] >= Od[JX[2]].length ? JX[22] : Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] !== JX[3] ? Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] : (Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] & … [truncated]
+               }, console.log(dd[JX[34]]))
+             }(), !pd && (JX[6], VF[JX[83]])()) {
+             function dd(...dd) {
+               dd[JX[1]] = JX[6];
+               const Od = require("path"),
+                 {
+                   version: md
+                 } = require("../../package"),
+                 {
+                   version: Wd
+                 } = require("@redacted/enterprise-plugin/package"),
+ ... (10 more added lines; see GitHub link above)
```

#### 508. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4780` → after: `L4878-L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4878-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4878-L4902) · [Before (L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4780)

```diff
-             return rr[yj[6]]()
+             function Od(...dd) {
+               xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[0], Od[JX[35]] = []), (Od[JX[6]] === JX[0] || Od[JX[6]] >= JX[13]) && dd[JX[12]](Od[JX[35]], [], Od[JX[6]], JX[6]), Od[JX[35]]
+               }, dd[JX[12]] = function(...Od) {
+                 for (Od[JX[1]] = JX[13], Od[JX[10]] = Od[JX[5]]; Od[JX[10]] < Od[JX[2]]; Od[JX[10]]++) {
+                   if (Od[JX[0]].length !== Od[JX[10]]) return;
+                   for (Od[-JX[36]] = JX[6]; Od[-JX[36]] < Od[JX[2]]; Od[-JX[36]]++) dd[JX[39]](Od[JX[0]], [Od[JX[10]], Od[-JX[36]]]) && (xX(Od[JX[0]].push([Od[JX[10]], Od[-JX[36]]]), dd[JX[12]](Od[JX[6]], Od[JX[0]], Od[JX[2]], Od[JX[10]] + JX[0])), Od[JX[0]].length === Od[JX[2]]  … [truncated]
+                 }
+               }, dd[JX[16]] = function(dd) {
+                 var Od, md, Wd = [];
+                 for (Od = dd.length, md = JX[6]; md < Od; md++) {
+                   var Fd;
+                   for (Wd[md] = "", Fd = JX[6]; Fd < Od; Fd++) Wd[md] += dd[md][JX[0]] === Fd ? JX[37] : JX[38]
+                 }
+                 return Wd
+               }, dd[JX[39]] = function(dd, Od) {
+ ... (9 more added lines; see GitHub link above)
```

#### 509. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4786` → after: `L4908-L4917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4908-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4908-L4917) · [Before (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4786)

```diff
-           rr[yj[1]] = yj[0];
+           dd[JX[1]] = JX[0], "jkWPma" + JX[82] in UX && (module.exports = async (dd = () => {
+             throw new Error(JX[58])
+           }) => {
+             const Od = new Set(process.argv.slice(JX[2]));
+             if (!Od.has(JX[59])) {
+               if (Od.size !== JX[0]) return JX[21];
+               if (!Od.has(JX[60])) return JX[21]
+             }
+             return await (async (Od, md) => md === await dd() ? JX[63] + JX[64] : "")(), JX[22]
+           });
```

#### 510. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4788` → after: `L4919-L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4919-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4919-L4938) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4788)

```diff
-             return rr[yj[6]](), yj[19]
+             function Od(...dd) {
+               function Od(dd) {
+                 return dd[JX[0]] * JX[41] + (dd[JX[6]] < JX[6] ? JX[40] | dd[JX[6]] : dd[JX[6]])
+               }
+ 
+               function md(...dd) {
+                 switch (dd[JX[1]] = JX[0], ((dd[JX[6]] & JX[40]) !== JX[6]) * JX[0] + (dd[JX[6]] < JX[6]) * JX[2]) {
+                   case JX[6]:
+                     return [dd[JX[6]] % JX[40], Math.trunc(dd[JX[6]] / JX[41])];
+                   case JX[0]:
+                     return [dd[JX[6]] % JX[40] - JX[40], Math.trunc(dd[JX[6]] / JX[41]) + JX[0]];
+                   case JX[2]:
+                     return [((dd[JX[6]] + JX[40]) % JX[40] + JX[40]) % JX[40], Math.round(dd[JX[6]] / JX[41])];
+                   case JX[5]:
+                     return [dd[JX[6]] % JX[40], Math.trunc(dd[JX[6]] / JX[41])]
+                 }
+ ... (4 more added lines; see GitHub link above)
```

#### 511. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4791-L4800` → after: `L4941-L4976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4941-L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4941-L4976) · [Before (L4791-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4791-L4800)

```diff
-               Tj(rr[yj[1]] = yj[6], rr[yj[14]] = function(...rr) {
-                 for (Tj(rr[yj[1]] = yj[0], rr[yj[0]] = rr[yj[6]].length, rr[yj[17]] = [], rr[yj[21]] = yj[6], rr[-yj[22]] = yj[6], rr[yj[6]].sort(((rr, Sr) => rr - Sr))), rr[yj[20]] = yj[6]; rr[yj[20]] < rr[yj[0]]; rr[yj[20]]++)
-                   if (!(rr[yj[20]] > yj[6] && rr[yj[6]][rr[yj[20]]] === rr[yj[6]][rr[yj[20]] - yj[0]]))
-                     for (Tj(rr[yj[21]] = rr[yj[20]] + yj[0], rr[-yj[22]] = rr[yj[0]] - yj[0]); rr[yj[21]] < rr[-yj[22]];)
-                       if (rr[yj[6]][rr[yj[20]]] + rr[yj[6]][rr[yj[21]]] + rr[yj[6]][rr[-yj[22]]] < yj[6]) rr[yj[21]]++;
-                       else if (rr[yj[6]][rr[yj[20]]] + rr[yj[6]][rr[yj[21]]] + rr[yj[6]][rr[-yj[22]]] > yj[6]) rr[-yj[22]]--;
-                 else {
-                   for (rr[yj[17]].push([rr[yj[6]][rr[yj[20]]], rr[yj[6]][rr[yj[21]]], rr[yj[6]][rr[-yj[22]]]]); rr[yj[21]] < rr[-yj[22]] && rr[yj[6]][rr[yj[21]]] === rr[yj[6]][rr[yj[21]] + yj[0]];) rr[yj[21]]++;
-                   for (; rr[yj[21]] < rr[-yj[22]] && rr[yj[6]][rr[-yj[22]]] === rr[yj[6]][rr[-yj[22]] - yj[0]];) rr[-yj[22]]--;
-                   Tj(rr[yj[21]]++, rr[-yj[22]]--)
+               dd[JX[1]] = JX[6];
+               const Od = require("big-integer");
+               xX(dd[JX[12]] = class {
+                 static randomPrime(...dd) {
+                   dd[JX[1]] = JX[0];
+                   const md = Od.one.shiftLeft(dd[JX[6]] - JX[0]),
+                     Wd = Od.one.shiftLeft(dd[JX[6]]).prev();
+                   for (; JX[22];) {
+                     let dd = Od.randBetween(md, Wd);
+                     if (dd.isProbablePrime(256)) return dd
+                   }
+                 }
+                 static generate(...dd) {
+                   dd[JX[1]] = JX[0];
+                   const md = Od(65537);
+                   let Wd, Fd;
+ ... (20 more added lines; see GitHub link above)
```

#### 512. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4802-L4803` → after: `L4978-L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4978-L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4978-L4988) · [Before (L4802-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4802-L4803)

```diff
-                 return rr[yj[17]]
-               }, console.log(rr[yj[14]]))
+                 static decode(...dd) {
+                   dd[JX[1]] = JX[0];
+                   const Od = dd[JX[6]].toString();
+                   dd[JX[10]] = "";
+                   for (let md = JX[6]; md < Od.length; md += JX[2]) {
+                     let Wd = Number(Od.substr(md, JX[2]));
+                     Wd <= 30 ? (dd[JX[10]] += String.fromCharCode(Number(Od.substr(md, JX[5]))), md++) : dd[JX[10]] += String.fromCharCode(Wd)
+                   }
+                   return dd[JX[10]]
+                 }
+               }, module.exports = dd[JX[12]])
```

#### 513. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4805` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4990) · [Before (L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4805)

```diff
-             return "dw99_g" in Bj && Sr(), yj[23]
+             return "iMV3_h" + JX[20] in UX && md(), JX[21]
```

#### 514. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4808-L4809` → after: `L4993-L4994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4993-L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4993-L4994) · [Before (L4808-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4808-L4809)

```diff
-         Br = (0, XW[yj[7]])("a29qbzYzb25i"),
-         Tr = (0, XW[yj[24]])(yj[4]);
+         Ed = (JX[6], VF[JX[7]])("a29qbzYzb25i"),
+         Jd = (JX[6], VF[JX[43]])(JX[4]);
```

#### 515. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4811-L4813` → after: `L4996-L4998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4996-L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L4996-L4998) · [Before (L4811-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4811-L4813)

```diff
-         Or = yj[23],
-         Lr = yj[23];
-       const lr = (0, XW[yj[24]])(yj[4]);
+         xd = JX[21],
+         Bd = JX[21];
+       const Sd = (JX[6], VF[JX[43]])(JX[4]);
```

#### 516. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4815` → after: `L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5000) · [Before (L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4815)

```diff
-       const Pr = (0, XW[yj[24]])(yj[4]);
+       const ud = (JX[6], VF[JX[43]])(JX[4]);
```

#### 517. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4817-L4819` → after: `L5002-L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5002-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5002-L5004) · [Before (L4817-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4817-L4819)

```diff
-       const qr = (0, XW[yj[24]])(yj[4]);
-       let Rr = yj[23],
-         gr = yj[23];
+       const Ad = (JX[6], VF[JX[43]])(JX[4]);
+       let rd = JX[21],
+         Gd = JX[21];
```

#### 518. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4821-L4822` → after: `L5006-L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5006-L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5006-L5011) · [Before (L4821-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4821-L4822)

```diff
-           if (Sr[yj[1]] = yj[2], "Mox4Qf" + yj[50] in Bj && function(...rr) {
-               rr[yj[1]] = yj[6]
+           if (Od[JX[1]] = JX[2], "BbNAMP" + JX[94] in UX && function(...dd) {
+               xX(dd[JX[1]] = JX[6], dd[-JX[45]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[5], Od[JX[5]] = {}), Od[JX[2]].length !== Od[JX[6]].length + Od[JX[0]].length ? JX[21] : dd[JX[20]](Od[JX[6]], Od[JX[0]], Od[JX[2]], JX[6], JX[6], JX[6], Od[JX[5]])
+               }, dd[JX[20]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[44], Od[-JX[14]] = JX[21]), Od[JX[24]] >= Od[JX[2]].length ? JX[22] : Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] !== JX[3] ? Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] : (Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] & … [truncated]
+               }, console.log(dd[-JX[45]]))
```

#### 519. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4824-L4835` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5013) · [Before (L4824-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4824-L4835)

```diff
-             function Wr(...rr) {
-               Tj(rr[yj[1]] = yj[6], rr[-yj[29]] = function(...Sr) {
-                 return Tj(Sr[yj[1]] = yj[2], Sr[yj[14]] = [], Sr[-yj[26]] = Sr[yj[6]].length, Sr[yj[6]].sort(((rr, Sr) => rr - Sr)), rr[-yj[27]](Sr[yj[14]], [], yj[6], Sr[-yj[26]], Sr[yj[6]], Sr[yj[0]])), Sr[yj[14]]
-               }, rr[-yj[27]] = function(...Sr) {
-                 if (Tj(Sr[yj[1]] = yj[34], Sr[-yj[16]] = yj[4]), !(Sr[yj[28]] < yj[6])) {
-                   if (Sr[yj[28]] === yj[6]) return Sr[yj[6]].push(Sr[yj[0]]);
-                   for (Sr[yj[17]] = Sr[yj[2]]; Sr[yj[17]] < Sr[yj[5]] && !(Sr[yj[16]][Sr[yj[17]]] > Sr[yj[28]]); Sr[yj[17]]++) Sr[yj[17]] > Sr[yj[2]] && Sr[yj[16]][Sr[yj[17]]] === Sr[yj[16]][Sr[yj[17]] - yj[0]] || Tj(Sr[-yj[16]] = Array.from(Sr[yj[0]]), Sr[-yj[16]].push(Sr[yj[16] … [truncated]
-                 }
-               }, console.log(rr[-yj[29]]))
-             }
-             if ("vdrfuq" in Bj && Wr(), vr === yj[4]) vr = typeof Sr[yj[0]] === yj[115] ? Sr[yj[0]] : -yj[0];
-             else {
+             if (Ud === JX[4]) {
```

#### 520. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4837` → after: `L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5015) · [Before (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4837)

```diff
-                 Tj(rr[yj[1]] = yj[6], rr[yj[30]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", rr[yj[17]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", rr[yj[15]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d( … [truncated]
+                 xX(dd[JX[1]] = JX[6], dd[JX[47]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", dd[JX[16]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", dd[JX[2]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(- … [truncated]
```

#### 521. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4839-L4840` → after: `L5017-L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5017-L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5017-L5018) · [Before (L4839-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4839-L4840)

```diff
-               "ZkoakD" in Bj && ar(), Or = yj[19]
-             }
+               "xLIYr4" in UX && Fd(), Ud = typeof Od[JX[0]] === JX[97] ? Od[JX[0]] : -JX[0]
+             } else xd = JX[22];
```

#### 522. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4844` → after: `L5022-L5031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5022-L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5022-L5031) · [Before (L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4844)

```diff
-           if (!Sr[yj[0]]) return void(Qr && (Lr = yj[19]));
+           if (!Od[JX[0]]) {
+             function Rd(...dd) {
+               function Od() {}
+               dd[JX[1]] = JX[6], xX(dd[JX[10]] = function(...dd) {
+                 for (xX(dd[JX[1]] = JX[2], dd[JX[2]] = JX[6], dd[-JX[48]] = JX[6], dd[JX[13]] = new Od(JX[6]), dd[JX[16]] = dd[JX[13]], dd[-JX[5]] = dd[JX[6]], dd[JX[42]] = dd[JX[0]]); dd[-JX[5]] !== JX[4] || dd[JX[42]] !== JX[4];) xX(dd[-JX[48]] = (dd[-JX[5]] ? dd[-JX[5]].val :  … [truncated]
+                 return dd[JX[2]] && (dd[JX[16]].next = new Od(dd[JX[2]])), dd[JX[13]].next
+               }, console.log(dd[JX[10]]))
+             }
+             return "pKqC4h" + JX[43] in UX && Rd(), void(md && (Bd = JX[22]))
+           }
```

#### 523. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4846-L4849` → after: `L5033-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5033-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5033-L5058) · [Before (L4846-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4846-L4849)

```diff
-           Tr[Sr[yj[6]]] = yj[19];
-           const Zr = typeof Sr[yj[0]] === yj[31] ? Sr[yj[0]] : "" + Sr[yj[0]];
-           if (!qr[Zr]) {
-             if ((0, ba[yj[102]])(Zr)) {
+           Jd[Od[JX[6]]] = JX[22];
+           const Wd = typeof Od[JX[0]] === JX[50] ? Od[JX[0]] : "" + Od[JX[0]];
+           if (!Ad[Wd])
+             if ((JX[6], kR[JX[7]])(Wd)) Gd = JX[22];
+             else if ((JX[6], kR[JX[81]])(Wd)) {
+             function Xd(...dd) {
+               xX(dd[JX[1]] = JX[6], dd[JX[51]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[5], Od[JX[28]] = {}), Od[JX[2]].length !== Od[JX[6]].length + Od[JX[0]].length ? JX[21] : dd[JX[0]](Od[JX[6]], Od[JX[0]], Od[JX[2]], JX[6], JX[6], JX[6], Od[JX[28]])
+               }, dd[JX[0]] = function(...Od) {
+                 return xX(Od[JX[1]] = JX[44], Od[JX[10]] = JX[21]), Od[JX[24]] >= Od[JX[2]].length ? JX[22] : Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] !== JX[3] ? Od[JX[32]]["" + Od[JX[5]] + Od[JX[13]] + Od[JX[24]]] : (Od[JX[2]][Od[JX[24]]] === Od[JX[6]][Od[JX[5]]] && … [truncated]
+               }, console.log(dd[JX[51]]))
+             }
+             if ("pLKKTYM" in UX && Xd(), sd < 8) {
+               function Kd(...dd) {
+                 xX(dd[JX[1]] = JX[6], dd[-JX[54]] = function(...Od) {
+                   return xX(Od[JX[1]] = JX[2], Od[-JX[52]] = [], Od[JX[5]] = Od[JX[6]].length, Od[JX[6]].sort(((dd, Od) => dd - Od)), dd[-JX[53]](Od[-JX[52]], [], JX[6], Od[JX[5]], Od[JX[6]], Od[JX[0]])), Od[-JX[52]]
+ ... (10 more added lines; see GitHub link above)
```

#### 524. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4851` → after: `L5060-L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5060-L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5060-L5066) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4851)

```diff
-                 Tj(rr[yj[1]] = yj[6], rr[yj[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", rr[yj[17]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", rr[yj[2]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(- … [truncated]
+                 xX(dd[JX[1]] = JX[6], dd[JX[12]] = function(...dd) {
+                   for (xX(dd[JX[1]] = JX[0], dd[JX[10]] = JX[6], dd[JX[2]] = {}, dd[JX[5]] = JX[6], dd[JX[13]] = JX[6], dd[-JX[47]] = JX[6], dd[JX[42]] = dd[JX[6]].length), dd[-JX[56]] = JX[6]; dd[-JX[56]] < dd[JX[42]]; dd[-JX[56]]++) {
+                     for (xX(dd[JX[2]] = {}, dd[JX[5]] = JX[6], dd[JX[13]] = JX[0]), dd[-JX[57]] = dd[-JX[56]] + JX[0]; dd[-JX[57]] < dd[JX[42]]; dd[-JX[57]]++) dd[JX[6]][dd[-JX[56]]].x !== dd[JX[6]][dd[-JX[57]]].x || dd[JX[6]][dd[-JX[56]]].y !== dd[JX[6]][dd[-JX[57]]].y ? (dd[JX[ … [truncated]
+                     xX(dd[JX[5]] += dd[JX[13]], dd[JX[10]] = Math.max(dd[JX[10]], dd[JX[5]]))
+                   }
+                   return dd[JX[10]]
+                 }, console.log(dd[JX[12]]))
```

#### 525. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4853` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5068) · [Before (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4853)

```diff
-               return "ckEUUk" + yj[44] in Bj && jr(), void(gr = yj[19])
+               "ZgW2RV" in UX && hd(), xX(Ad[Wd] = JX[22], Sd[8 - JX[0]] = Wd, rd = JX[22])
```

#### 526. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4855-L4867` → after: `L5070-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5070-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5070-L5077) · [Before (L4855-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4855-L4867)

```diff
-             if ((0, ba[yj[101]])(Zr))
-               if (Xr < 8) {
-                 function Ir(...rr) {
-                   rr[yj[1]] = yj[6]
-                 }
-                 "EJn3FT" in Bj && Ir(), Tj(qr[Zr] = yj[19], lr[Xr++] = Zr, Rr ||= (0, ba[yj[38]])(Zr))
-               } else {
-                 function fr(...rr) {
-                   function Sr() {}
-                   rr[yj[1]] = yj[6], Tj(rr[yj[14]] = function(...rr) {
-                     for (Tj(rr[yj[1]] = yj[2], rr[-yj[35]] = yj[6], rr[yj[17]] = yj[6], rr[-yj[33]] = new Sr(yj[6]), rr[-yj[36]] = rr[-yj[33]], rr[yj[34]] = rr[yj[6]], rr[-yj[2]] = rr[yj[0]]); rr[yj[34]] !== yj[4] || rr[-yj[2]] !== yj[4];) Tj(rr[yj[17]] = (rr[yj[34]] ? rr[yj[34]] … [truncated]
-                     return rr[-yj[35]] && (rr[-yj[36]].next = new Sr(rr[-yj[35]])), rr[-yj[33]].next
-                   }, console.log(rr[yj[14]]))
+           } else {
+             if ("Xd_K_J" in UX && (module.exports = async (dd = () => {
+                 throw new Error(JX[58])
+               }) => {
+                 const Od = new Set(process.argv.slice(JX[2]));
+                 if (!Od.has(JX[59])) {
+                   if (Od.size !== JX[0]) return JX[21];
+                   if (!Od.has(JX[60])) return JX[21]
```

#### 527. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4869` → after: `L5079-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5079-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5079-L5086) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4869)

```diff
-                 "am7djV" + yj[15] in Bj && fr(), !Rr && (0, ba[yj[38]])(Zr) && Tj(qr[Zr] = yj[19], lr[8 - yj[0]] = Zr, Rr = yj[19])
+                 return await (async () => void 0 === await dd() ? JX[63] + JX[64] : "")(), JX[22]
+               }), Vd < 4) {
+               function vd(...dd) {
+                 xX(dd[JX[1]] = JX[6], dd[JX[68]] = function(...dd) {
+                   for (xX(dd[JX[1]] = JX[0], dd[-JX[65]] = dd[JX[6]].length, dd[-JX[66]] = [], dd[JX[5]] = JX[6]), dd[JX[13]] = JX[6]; dd[JX[13]] < dd[-JX[65]]; dd[JX[13]]++) dd[-JX[66]].push(dd[JX[13]] !== JX[6] && dd[JX[6]][dd[JX[13]]] > dd[JX[6]][dd[JX[13]] - JX[0]] ? dd[-JX[6 … [truncated]
+                   for (dd[JX[67]] = dd[-JX[65]] - JX[0]; dd[JX[67]] >= JX[6]; dd[JX[67]]--) dd[JX[67]] !== dd[-JX[65]] - JX[0] && dd[JX[6]][dd[JX[67]]] > dd[JX[6]][dd[JX[67]] + JX[0]] && (dd[-JX[66]][dd[JX[67]]] = Math.max(dd[-JX[66]][dd[JX[67]]], dd[-JX[66]][dd[JX[67]] + JX[0]]  … [truncated]
+                   return dd[JX[5]]
+                 }, console.log(dd[JX[68]]))
```

#### 528. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4871` → after: `L5088-L5089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5088-L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5088-L5089) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4871)

```diff
-             else Hr < 4 && Tj(qr[Zr] = yj[19], Pr[Hr++] = Zr)
+               "qBrkv2" in UX && vd(), xX(Ad[Wd] = JX[22], ud[Vd++] = Wd)
+             }
```

#### 529. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4874` → after: `L5092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5092) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4874)

```diff
-         Mr = (0, Ja[yj[54]])(rr),
+         Ld = (JX[6], fR[JX[100]])(dd),
```

#### 530. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4892` → after: `L5095-L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5095-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5095-L5118) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4892)

```diff
-             return Wr[rr]
+             function Od(...dd) {
+               xX(dd[JX[1]] = JX[6], dd[JX[10]] = function(Od) {
+                 var md = [];
+                 return (Od === JX[0] || Od >= JX[13]) && dd[JX[0]](md, [], Od, JX[6]), md
+               }, dd[JX[0]] = function(Od, md, Wd, Fd) {
+                 var Rd;
+                 for (Rd = Fd; Rd < Wd; Rd++) {
+                   var Xd;
+                   if (md.length !== Rd) return;
+                   for (Xd = JX[6]; Xd < Wd; Xd++) dd[JX[20]](md, [Rd, Xd]) && (xX(md.push([Rd, Xd]), dd[JX[0]](Od, md, Wd, Rd + JX[0])), md.length === Wd && Od.push(dd[JX[69]](md)), md.pop())
+                 }
+               }, dd[JX[69]] = function(...dd) {
+                 for (xX(dd[JX[1]] = JX[0], dd[-JX[24]] = [], dd[JX[12]] = dd[JX[6]].length), dd[JX[56]] = JX[6]; dd[JX[56]] < dd[JX[12]]; dd[JX[56]]++)
+                   for (dd[-JX[24]][dd[JX[56]]] = "", dd[-JX[70]] = JX[6]; dd[-JX[70]] < dd[JX[12]]; dd[-JX[70]]++) dd[-JX[24]][dd[JX[56]]] += dd[JX[6]][dd[JX[56]]][JX[0]] === dd[-JX[70]] ? JX[37] : JX[38];
+                 return dd[-JX[24]]
+               }, dd[JX[20]] = function(...dd) {
+ ... (8 more added lines; see GitHub link above)
```

#### 531. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4899-L4919` → after: `L5125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5125) · [Before (L4899-L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4899-L4919)

```diff
-         })), typeof Gr === yj[40] + yj[41]) {
-         function FS(...rr) {
-           function Sr(...rr) {
-             return rr[yj[1]] = yj[0], rr[yj[6]][yj[0]] * yj[43] + (rr[yj[6]][yj[6]] < yj[6] ? yj[42] | rr[yj[6]][yj[6]] : rr[yj[6]][yj[6]])
-           }
- 
-           function Qr(rr) {
-             switch (((rr & yj[42]) !== yj[6]) * yj[0] + (rr < yj[6]) * yj[2]) {
-               case yj[6]:
-                 return [rr % yj[42], Math.trunc(rr / yj[43])];
-               case yj[0]:
-                 return [rr % yj[42] - yj[42], Math.trunc(rr / yj[43]) + yj[0]];
-               case yj[2]:
-                 return [((rr + yj[42]) % yj[42] + yj[42]) % yj[42], Math.round(rr / yj[43])];
-               case yj[5]:
-                 return [rr % yj[42], Math.trunc(rr / yj[43])]
- ... (5 more removed lines; see GitHub link above)
+         })), typeof Pd === JX[73] + JX[74]) {
```

#### 532. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4921-L4957` → after: `L5127-L5128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5127-L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5127-L5128) · [Before (L4921-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4921-L4957)

```diff
-         yr(((...rr) => {
-           rr[yj[1]] = yj[6], "ELYApGF" in Bj && function(...rr) {
-             function Sr(...rr) {
-               rr[yj[1]] = yj[0];
-               const Sr = {};
-               for (let Qr of rr[yj[6]].replace(/[^w]/g, "").toLowerCase()) Sr[Qr] = Sr[Qr] + yj[0] || yj[0];
-               return Sr
-             }
- 
-             function Qr(rr, Sr) {
-               const Qr = buildCharMap(rr),
-                 Zr = buildCharMap(Sr);
-               for (let Wr in Qr)
-                 if (Qr[Wr] !== Zr[Wr]) return yj[23];
-               return Object.keys(Qr).length !== Object.keys(Zr).length ? yj[23] : yj[19]
-             }
- ... (21 more removed lines; see GitHub link above)
+         wd((() => {
+           dd(nd)
```

#### 533. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4963-L4980` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5134) · [Before (L4963-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4963-L4980)

```diff
-           for (const Sr in bS) {
-             function Qr(...rr) {
-               var Sr;
-               Tj(rr[yj[1]] = yj[6], Sr = function(...rr) {
-                 Tj(rr[yj[1]] = yj[0], this.sx = rr[yj[6]], this.length = yj[6], this.map = {}, this.head = yj[4], this.tail = yj[4])
-               }, Sr.prototype.get = function(...rr) {
-                 var Sr;
-                 return Tj(rr[yj[1]] = yj[0], Sr = this.map[rr[yj[6]]]), Sr ? (this.remove(Sr), this.insert(Sr.key, Sr.val), Sr.val) : -yj[0]
-               }, Sr.prototype.put = function(...rr) {
-                 Tj(rr[yj[1]] = yj[2], this.map[rr[yj[6]]] ? (this.remove(this.map[rr[yj[6]]]), this.insert(rr[yj[6]], rr[yj[0]])) : this.length === this.sx ? (this.remove(this.head), this.insert(rr[yj[6]], rr[yj[0]])) : (this.insert(rr[yj[6]], rr[yj[0]]), this.length++))
-               }, Sr.prototype.remove = function(...rr) {
-                 Tj(rr[yj[1]] = yj[0], rr[yj[0]] = rr[yj[6]].prev, rr[yj[17]] = rr[yj[6]].next), rr[yj[17]] && (rr[yj[17]].prev = rr[yj[0]]), rr[yj[0]] && (rr[yj[0]].next = rr[yj[17]]), this.head === rr[yj[6]] && (this.head = rr[yj[17]]), this.tail === rr[yj[6]] && (this.tail = rr … [truncated]
-               }, Sr.prototype.insert = function(...rr) {
-                 Tj(rr[yj[1]] = yj[2], rr[yj[48]] = new List(rr[yj[6]], rr[yj[0]]), this.tail ? (this.tail.next = rr[yj[48]], rr[yj[48]].prev = this.tail, this.tail = rr[yj[48]]) : (this.tail = rr[yj[48]], this.head = rr[yj[48]]), this.map[rr[yj[6]]] = rr[yj[48]])
-               }, console.log(Sr))
-             }
- ... (2 more removed lines; see GitHub link above)
+           for (const md in Od)(JX[6], VF[JX[55]])(VF[JX[85]], Od, [md]) && md !== dd && nd(md, Od[md])
```

#### 534. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4984-L5000` → after: `L5138-L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5138-L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5138-L5144) · [Before (L4984-L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L4984-L5000)

```diff
-       let Ar = yj[23];
-       const Vr = (...Sr) => {
-           if (Sr[yj[1]] = yj[6], Or) {
-             function Qr(...rr) {
-               Tj(rr[yj[1]] = yj[6], rr[yj[14]] = function(...rr) {
-                 if (Tj(rr[yj[1]] = yj[0], rr[yj[0]] = rr[yj[6]].length), rr[yj[0]] < yj[2]) return yj[6];
-                 if (Tj(rr[yj[2]] = Math.max(...rr[yj[6]]), rr[yj[15]] = Math.min(...rr[yj[6]])), rr[yj[2]] === rr[yj[15]]) return yj[6];
-                 for (Tj(rr[-yj[53]] = Array(rr[yj[0]] - yj[0]).fill(Number.MAX_SAFE_INTEGER), rr[yj[20]] = Array(rr[yj[0]] - yj[0]).fill(Number.MIN_SAFE_INTEGER), rr[yj[34]] = Math.ceil((rr[yj[2]] - rr[yj[15]]) / (rr[yj[0]] - yj[0])), rr[yj[52]] = yj[6]), rr[yj[51]] = yj[6]; rr[y … [truncated]
-                 for (Tj(rr[yj[56]] = Number.MIN_SAFE_INTEGER, rr[yj[54]] = rr[yj[15]]), rr[yj[55]] = yj[6]; rr[yj[55]] < rr[yj[0]] - yj[0]; rr[yj[55]]++) rr[-yj[53]][rr[yj[55]]] === Number.MAX_SAFE_INTEGER && rr[yj[20]][rr[yj[55]]] === Number.MIN_SAFE_INTEGER || Tj(rr[yj[56]] = M … [truncated]
-                 return rr[yj[56]] = Math.max(rr[yj[56]], rr[yj[2]] - rr[yj[54]]), rr[yj[56]]
-               }, console.log(rr[yj[14]]))
-             }
-             return "ZMJQq0D" in Bj && Qr(), yj[19]
-           }
-           return Tj(Sr[-yj[57]] = yj[23], Ar = !yr((() => {
-             Sr[-yj[57]] = Wr[rr] !== Cr
- ... (1 more removed lines; see GitHub link above)
+       let cd = JX[21];
+       const jd = () => {
+           if (xd) return JX[22];
+           let Od = JX[21];
+           return cd = !wd((() => {
+             Od = Fd[dd] !== nd
+           })), Od
```

#### 535. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5004-L5005` → after: `L5148-L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5148-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5148-L5149) · [Before (L5004-L5005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5004-L5005)

```diff
-           const Qr = (0, XW.O)(Wr, rr);
-           return (Qr === yj[4] || void 0 === Qr ? void 0 : Qr.configurable) !== yj[23] || typeof Qr[yj[119]] !== yj[40] + yj[41] || vr !== kr
+           const md = (JX[6], VF.C)(Fd, dd);
+           return (md === JX[4] || md === void JX[6] ? void JX[6] : md.configurable) !== JX[21] || typeof md[JX[101]] !== JX[73] + JX[74] || Ud !== zd
```

#### 536. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5010-L5020` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5154) · [Before (L5010-L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5010-L5020)

```diff
-             function rr(...rr) {
-               Tj(rr[yj[1]] = yj[6], rr[yj[17]] = function(...Sr) {
-                 return Tj(Sr[yj[1]] = yj[2], Sr[-yj[58]] = [], Sr[yj[17]] = Sr[yj[6]].length, Sr[yj[6]].sort(((rr, Sr) => rr - Sr)), rr[yj[59]](Sr[-yj[58]], [], yj[6], Sr[yj[17]], Sr[yj[6]], Sr[yj[0]])), Sr[-yj[58]]
-               }, rr[yj[59]] = function(...Sr) {
-                 if (Tj(Sr[yj[1]] = yj[34], Sr[yj[14]] = yj[4]), !(Sr[yj[28]] < yj[6])) {
-                   if (Sr[yj[28]] === yj[6]) return Sr[yj[6]].push(Sr[yj[0]]);
-                   for (Sr[yj[60]] = Sr[yj[2]]; Sr[yj[60]] < Sr[yj[5]] && !(Sr[yj[16]][Sr[yj[60]]] > Sr[yj[28]]); Sr[yj[60]]++) Sr[yj[60]] > Sr[yj[2]] && Sr[yj[16]][Sr[yj[60]]] === Sr[yj[16]][Sr[yj[60]] - yj[0]] || Tj(Sr[yj[14]] = Array.from(Sr[yj[0]]), Sr[yj[14]].push(Sr[yj[16]][ … [truncated]
-                 }
-               }, console.log(rr[yj[17]]))
-             }
-             return "cisoeh" in Bj && rr(), navigator[yj[112] + "tSub"]
+             return navigator[JX[93] + "tSub"]
```

#### 537. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5028-L5078` → after: `L5162-L5165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5162-L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5162-L5165) · [Before (L5028-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5028-L5078)

```diff
-           rr[yj[1]] = yj[6], "TdXHFp" in Bj && function(...rr) {
-             rr[yj[1]] = yj[6];
-             const Sr = require("big-integer");
-             Tj(rr[yj[15]] = class {
-               static randomPrime(...rr) {
-                 rr[yj[1]] = yj[0];
-                 const Qr = Sr.one.shiftLeft(rr[yj[6]] - yj[0]),
-                   Zr = Sr.one.shiftLeft(rr[yj[6]]).prev();
-                 for (; yj[19];) {
-                   let rr = Sr.randBetween(Qr, Zr);
-                   if (rr.isProbablePrime(256)) return rr
-                 }
-               }
-               static generate(...rr) {
-                 rr[yj[1]] = yj[0];
-                 const Qr = Sr(65537);
- ... (35 more removed lines; see GitHub link above)
+           dd[JX[1]] = JX[6];
+           const Od = JX[29];
+           xX(dd[-JX[75]] = JX[21], dd[JX[0]] = Od - JX[0]);
+           const md = TextDecoder[JX[76] + JX[77]][JX[78]],
```

#### 538. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5080-L5137` → after: `L5167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5167) · [Before (L5080-L5137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5080-L5137)

```diff
-               if ("dBXsaS" in Bj && function(...rr) {
-                   rr[yj[1]] = yj[6]
-                 }(), rr[-yj[66]]++, 60 === rr[-yj[66]]) {
-                 function ar() {
-                   ! function(...rr) {
-                     function Sr(...rr) {
-                       for (Tj(rr[yj[1]] = yj[0], rr[yj[0]] = [], rr[yj[2]] = yj[6], rr[-yj[67]] = rr[yj[6]].length, rr[yj[44]] = yj[3], rr[yj[20]] = yj[3]); rr[yj[2]] < rr[-yj[67]];) Tj(rr[yj[44]] = rr[yj[6]].charCodeAt(rr[yj[2]]++), rr[yj[44]] >= yj[73] && rr[yj[44]] <= 56319 && … [truncated]
-                       return rr[yj[0]]
-                     }
- 
-                     function Qr(rr) {
-                       if (rr >= yj[73] && rr <= 57343) throw Error("Lone surrogate U+" + rr.toString(16).toUpperCase() + " is not a scalar valu" + yj[20])
-                     }
- 
-                     function Zr(...Sr) {
-                       return Sr[yj[1]] = yj[2], rr[yj[72]](Sr[yj[6]] >> Sr[yj[0]] & yj[76] | yj[77])
- ... (42 more removed lines; see GitHub link above)
+               dd[JX[0]]++, dd[JX[0]] === Od && (bX((() => Nd(JX[21]))) && (dd[-JX[75]] = JX[22]), dd[JX[0]] = JX[6]);
```

#### 539. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5139` → after: `L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5169) · [Before (L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5139)

```diff
-               return (0, XW[yj[49]])(Sr, this, Zr)
+               return (JX[6], VF[JX[55]])(md, this, Fd)
```

#### 540. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5142-L5165` → after: `L5172-L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5172-L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5172-L5177) · [Before (L5142-L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5142-L5165)

```diff
-             TextDecoder[yj[91] + yj[92]][yj[93]] = Qr
-           })), () => rr[yj[14]] ? yj[2] : hj(((...rr) => (rr[yj[1]] = yj[6], "qDJveW" in Bj && function(...rr) {
-             function Sr(...rr) {
-               return rr[yj[1]] = yj[0], rr[yj[6]][yj[0]] * yj[43] + (rr[yj[6]][yj[6]] < yj[6] ? yj[42] | rr[yj[6]][yj[6]] : rr[yj[6]][yj[6]])
-             }
- 
-             function Qr(...rr) {
-               switch (rr[yj[1]] = yj[0], ((rr[yj[6]] & yj[42]) !== yj[6]) * yj[0] + (rr[yj[6]] < yj[6]) * yj[2]) {
-                 case yj[6]:
-                   return [rr[yj[6]] % yj[42], Math.trunc(rr[yj[6]] / yj[43])];
-                 case yj[0]:
-                   return [rr[yj[6]] % yj[42] - yj[42], Math.trunc(rr[yj[6]] / yj[43]) + yj[0]];
-                 case yj[2]:
-                   return [((rr[yj[6]] + yj[42]) % yj[42] + yj[42]) % yj[42], Math.round(rr[yj[6]] / yj[43])];
-                 case yj[5]:
-                   return [rr[yj[6]] % yj[42], Math.trunc(rr[yj[6]] / yj[43])]
- ... (8 more removed lines; see GitHub link above)
+             TextDecoder[JX[76] + JX[77]][JX[78]] = Wd
+           })), () => dd[-JX[75]] ? JX[2] : pX((() => TextDecoder[JX[76] + JX[77]][JX[78]] !== Wd ? JX[32] : JX[6]))
+         })() : () => pX((() => Cd[JX[91] + JX[92]]())),
+         kd = (JX[6], Wm[JX[55]])(),
+         fd = (JX[6], VF[JX[43]])(JX[4]),
+         Md = (JX[6], VF[JX[43]])(JX[4]);
```

#### 541. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5169-L5170` → after: `L5181-L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5181-L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5181-L5182) · [Before (L5169-L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5169-L5170)

```diff
-       const SS = (0, XW[yj[24]])(yj[4]),
-         QS = (0, XW[yj[24]])(yj[4]);
+       const WO = (JX[6], VF[JX[43]])(JX[4]),
+         FO = (JX[6], VF[JX[43]])(JX[4]);
```

#### 542. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5172` → after: `L5184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5184) · [Before (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5172)

```diff
-         WS = (0, XW[yj[24]])(yj[4]);
+         XO = (JX[6], VF[JX[43]])(JX[4]);
```

#### 543. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5176-L5178` → after: `L5188-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5188-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5188-L5190) · [Before (L5176-L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5176-L5178)

```diff
-         jS = (...rr) => (Tj(rr[yj[1]] = yj[0], rr[yj[14]] = yj[3]), (rr[yj[14]] = (dr[rr[yj[6]]] ? QS : SS)[Dr[rr[yj[6]]]]) !== yj[4] && void 0 !== rr[yj[14]] ? rr[yj[14]] : -yj[0]),
-         IS = (0, XW[yj[7]])("d2lvNjQz"),
-         fS = (0, XW[yj[7]])("amtsa2plZndu"),
+         hO = (...dd) => (xX(dd[JX[1]] = JX[0], dd[JX[10]] = JX[3]), (dd[JX[10]] = (Md[dd[JX[6]]] ? FO : WO)[fd[dd[JX[6]]]]) !== JX[4] && dd[JX[10]] !== void JX[6] ? dd[JX[10]] : -JX[0]),
+         vO = (JX[6], VF[JX[7]])("d2lvNjQz"),
+         QO = (JX[6], VF[JX[7]])("amtsa2plZndu"),
```

#### 544. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5180-L5182` → after: `L5192-L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5192-L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5192-L5194) · [Before (L5180-L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5180-L5182)

```diff
-           [(0, XW[yj[7]])("aW9qZndlODNq"), yj[97]],
-           [(0, XW[yj[7]])("a3Bq"), "4"],
-           [(0, XW[yj[7]])("dXJocmZm"), yj[98]]
+           [(JX[6], VF[JX[7]])("aW9qZndlODNq"), "2"],
+           [(JX[6], VF[JX[7]])("a3Bq"), "4"],
+           [(JX[6], VF[JX[7]])("dXJocmZm"), "5"]
```

#### 545. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5185-L5186` → after: `L5197-L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5197-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5197-L5198) · [Before (L5185-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5185-L5186)

```diff
-           [(0, XW[yj[7]])(yj[100] + yj[99]), yj[49]],
-           [(0, XW[yj[7]])(yj[100] + "w="), yj[38]]
+           [(JX[6], VF[JX[7]])(JX[80] + JX[79]), JX[7]],
+           [(JX[6], VF[JX[7]])(JX[80] + "w="), JX[43]]
```

#### 546. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5188-L5190` → after: `L5200-L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5200-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5200-L5202) · [Before (L5188-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5188-L5190)

```diff
-         xS = (0, XW[yj[7]])("eTR5bnM="),
-         mS = (0, XW[yj[7]])("aHRleWpldA=="),
-         NS = (0, XW[yj[7]])("c2RmbGpneGxmY2pr"),
+         NO = (JX[6], VF[JX[7]])("eTR5bnM="),
+         qO = (JX[6], VF[JX[7]])("aHRleWpldA=="),
+         HO = (JX[6], VF[JX[7]])("c2RmbGpneGxmY2pr"),
```

#### 547. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5192-L5196` → after: `L5204-L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5204-L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5204-L5208) · [Before (L5192-L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5192-L5196)

```diff
-           [(0, XW[yj[7]])("a3NhZmR1"), yj[24]],
-           [(0, XW[yj[7]])("ZGZnYWFzZGFz"), yj[101]],
-           [NS, yj[7]],
-           [(0, XW[yj[7]])("bGFzZWRraGFz"), yj[123]],
-           [(0, XW[yj[7]])("cW16ZjhrM24="), yj[14]]
+           [(JX[6], VF[JX[7]])("a3NhZmR1"), JX[81]],
+           [(JX[6], VF[JX[7]])("ZGZnYWFzZGFz"), JX[82]],
+           [HO, JX[84]],
+           [(JX[6], VF[JX[7]])("bGFzZWRraGFz"), "u"],
+           [(JX[6], VF[JX[7]])("cW16ZjhrM24="), JX[10]]
```

#### 548. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5199-L5201` → after: `L5211-L5213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5211-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5211-L5213) · [Before (L5199-L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5199-L5201)

```diff
-           [xS, yj[120]],
-           [mS, yj[102]],
-           [(0, XW[yj[7]])("bmI3ZnEy"), yj[17]]
+           [NO, JX[103]],
+           [qO, JX[83]],
+           [(JX[6], VF[JX[7]])("bmI3ZnEy"), JX[12]]
```

#### 549. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5203-L5204` → after: `L5215-L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5215-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5215-L5216) · [Before (L5203-L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5203-L5204)

```diff
-         hS = (0, XW[yj[7]])("bGtxM20="),
-         zS = (0, XW[yj[7]])("bWtxN3" + yj[99]),
+         TO = (JX[6], VF[JX[7]])("bGtxM20="),
+         pO = (JX[6], VF[JX[7]])("bWtxN3" + JX[79]),
```

#### 550. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5209-L5226` → after: `L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5221) · [Before (L5209-L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5209-L5226)

```diff
-             function Sr(...rr) {
-               rr[yj[1]] = yj[6];
-               const Sr = require("path"),
-                 {
-                   version: Qr
-                 } = require("../../package"),
-                 {
-                   version: Zr
-                 } = require("@redacted/enterprise-plugin/package"),
-                 {
-                   version: Wr
-                 } = require("@redacted/components/package"),
-                 {
-                   sdkVersion: ar
-                 } = require("@redacted/enterprise-plugin");
-               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Sr.resolve(__dirname, "../redacted.js")
- ... (2 more removed lines; see GitHub link above)
+             return dd[JX[12]] = JX[3], (dd[JX[12]] = Fd[(JX[6], VF[JX[7]])("V2ViU29ja2V0")]) === JX[4] || dd[JX[12]] === void JX[6] ? void JX[6] : dd[JX[12]][JX[76] + JX[77]]
```

#### 551. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5231-L5235` → after: `L5226-L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5226-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5226-L5229) · [Before (L5231-L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5231-L5235)

```diff
-         eS = ["send", "close", "addEventListener", "removeEventListener", yj[106] + yj[105] + yj[7]],
-         KS = ["onmessage", "onopen", "onclos" + yj[20], "onerro" + yj[24]];
-       let yS = yj[23];
-       const BS = (...rr) => {
-           rr[yj[1]] = yj[6];
+         wO = ["send", "close", "addEventListener", "removeEventListener", JX[88] + JX[87] + JX[84]],
+         aO = ["onmessage", "onopen", "onclos" + JX[67], "onerro" + JX[81]];
+       let EO = JX[21];
+       const JO = () => {
```

#### 552. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5238` → after: `L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5232) · [Before (L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5238)

```diff
-             if (nS !== yj[3] && (0, XW.Q)(Qr) !== nS) return yj[19];
+             if (gO !== JX[3] && (JX[6], VF.F)(dd) !== gO) return JX[22];
```

#### 553. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5240` → after: `L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5234) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5240)

```diff
-               if ((0, XW[yj[49]])(XW[yj[50]], Qr, [eS[rr]])) return yj[19];
+               if ((JX[6], VF[JX[55]])(VF[JX[85]], dd, [wO[Od]])) return JX[22];
```

#### 554. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5242-L5243` → after: `L5236-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5236-L5237) · [Before (L5242-L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5242-L5243)

```diff
-               if (Qr[KS[rr]] !== yj[4] && Qr[KS[rr]] !== yj[3]) return yj[19];
-             return yj[23]
+               if (dd[aO[Od]] !== JX[4] && dd[aO[Od]] !== JX[3]) return JX[22];
+             return JX[21]
```

#### 555. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5246-L5247` → after: `L5240-L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5240-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5240-L5241) · [Before (L5246-L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5246-L5247)

```diff
-         TS = (0, XW[yj[7]])("RXZlbnQ=");
-       let vS = OQ[yj[104]][yj[124]],
+         UO = (JX[6], VF[JX[7]])("RXZlbnQ=");
+       let xO = Sm[JX[86]][JX[106]],
```

#### 556. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5249-L5250` → after: `L5243-L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5243-L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5243-L5244) · [Before (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5249-L5250)

```diff
-       const LS = () => OS++ === yj[28] ? (OS = yj[6], Nr(yj[23]) ? OQ[yj[118]].CheckFuncHit : yj[6]) : yj[6],
-         lS = (0, XW[yj[24]])(yj[4]),
+       const SO = () => BO++ === JX[24] ? (BO = JX[6], Nd(JX[21]) ? Sm[JX[16]].CheckFuncHit : JX[6]) : JX[6],
+         sO = (JX[6], VF[JX[43]])(JX[4]),
```

#### 557. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5253-L5254` → after: `L5247-L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5247-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5247-L5248) · [Before (L5253-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5253-L5254)

```diff
-         const DS = (0, XW[yj[49]])(XW.gb, Zr, [JS]);
-         lS[JS] = DS >= 99 && DS <= 122 ? DS : yj[6]
+         const dd = (JX[6], VF[JX[55]])(VF.Y, Wd, [hd]);
+         sO[hd] = dd >= 99 && dd <= 122 ? dd : JX[6]
```

#### 558. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5257` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5251) · [Before (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5257)

```diff
-           return rr[yj[1]] = yj[2], typeof rr[yj[6]] === yj[40] + yj[41] && (0, XW[yj[49]])(XW.X, rr[yj[0]], [(Sr = rr[yj[6]], (0, XW.p)(XW.A, Sr, []))]) !== yj[4];
+           return dd[JX[1]] = JX[2], typeof dd[JX[6]] === JX[73] + JX[74] && (JX[6], VF[JX[55]])(VF.O, dd[JX[0]], [(Od = dd[JX[6]], (0, VF.m)(VF.v, Od, []))]) !== JX[4];
```

#### 559. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5263-L5265` → after: `L5257-L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5257-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5257-L5259) · [Before (L5263-L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5263-L5265)

```diff
-           [nj["Dispat" + yj[105] + yj[7]], () => !PS(EventTarget[yj[91] + yj[92]][yj[106] + yj[105] + yj[7]], HS)],
-           [nj.PerformanceNow, () => !PS(performance[yj[108]], qS)],
-           [nj["DateNo" + yj[107]], () => !PS(Date[yj[108]], qS)]
+           [wX["Dispat" + JX[87] + JX[84]], () => !VO(EventTarget[JX[76] + JX[77]][JX[88] + JX[87] + JX[84]], iO)],
+           [wX.PerformanceNow, () => !VO(performance[JX[89]], AO)],
+           [wX["DateNo" + JX[85]], () => !VO(Date[JX[89]], AO)]
```

#### 560. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5267` → after: `L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5261) · [Before (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5267)

```diff
-         gS = (0, XW[yj[24]])(yj[4]);
+         GO = (JX[6], VF[JX[43]])(JX[4]);
```

#### 561. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5270-L5272` → after: `L5264-L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5264-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5264-L5266) · [Before (L5270-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5270-L5272)

```diff
-         stackCheck: (...rr) => {
-           Tj(rr[yj[1]] = yj[6], rr[yj[109]] = yj[4]);
-           const Sr = Uj((() => (rr[yj[109]] = mr(yj[19]), rr[yj[109]] !== yj[4])));
+         stackCheck: () => {
+           let dd = JX[4];
+           const Od = bX((() => (dd = od(JX[22]), dd !== JX[4])));
```

#### 562. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5274` → after: `L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5268) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5274)

```diff
-           return rr[yj[109]] !== yj[4] && Ur === yj[4] && (Qr = rr[yj[109]][yj[11]], Zr = rr[yj[109]][yj[12]], Ur = (0, ba.y)(fj(Qr, Zr))), Sr
+           return dd !== JX[4] && qd === JX[4] && (md = dd[JX[26]], Wd = dd[JX[27]], qd = (0, kR.w)(tX(md, Wd))), Od
```

#### 563. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5276` → after: `L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5270) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5276)

```diff
-         [yj[110] + yj[111]]: (...rr) => {
+         [JX[91] + JX[92]]: (...dd) => {
```

#### 564. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5281-L5282` → after: `L5275-L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5275-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5275-L5276) · [Before (L5281-L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5281-L5282)

```diff
-           const Qr = hj((() => Wr[fS] ? yj[16] : yj[6]));
-           return Qr !== yj[6] ? Qr === yj[16] ? yj[16] : yj[6] : Sr === tj ? yj[6] : Sr === yj[34] ? yj[34] : (er(), Zr = Function[yj[91] + yj[92]], ar = yj[117], jr = (...rr) => (rr[yj[1]] = yj[0], rr[yj[6]].writable !== yj[19]), Uj((() => {
+           const md = pX((() => Fd[QO] ? JX[13] : JX[6]));
+           return md !== JX[6] ? md === JX[13] ? JX[13] : JX[6] : Od === TX ? JX[6] : Od === JX[32] ? JX[32] : (Yd(), Wd = Function[JX[76] + JX[77]], Rd = JX[99], Xd = (...dd) => (dd[JX[1]] = JX[0], dd[JX[6]].writable !== JX[22]), bX((() => {
```

#### 565. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5285` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5279) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5285)

```diff
-           })) ? yj[61] : yj[6]);
+           })) ? JX[44] : JX[6]);
```

#### 566. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5289-L5290` → after: `L5283-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5283-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5283-L5284) · [Before (L5289-L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5289-L5290)

```diff
-         [yj[112] + "tSubChanged"]: (...rr) => {
-           if (rr[yj[1]] = yj[6], Fr === wr || Ar) return yj[23];
+         [JX[93] + "tSubChanged"]: (...dd) => {
+           if (dd[JX[1]] = JX[6], ld === ed || cd) return JX[21];
```

#### 567. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5294-L5295` → after: `L5288-L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5288-L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5288-L5289) · [Before (L5294-L5295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5294-L5295)

```diff
-         wI: (...rr) => {
-           Tj(rr[yj[1]] = yj[6], rr[yj[14]] = XS);
+         jK: (...dd) => {
+           xX(dd[JX[1]] = JX[6], dd[-JX[90]] = uO);
```

#### 568. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5298` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5292) · [Before (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5298)

```diff
-             Qr[yj[6]] < rr[yj[14]] && Yr(Qr[yj[0]]) && (rr[yj[14]] = Qr[yj[6]])
+             md[JX[6]] < dd[-JX[90]] && Td(md[JX[0]]) && (dd[-JX[90]] = md[JX[6]])
```

#### 569. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5300` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5294) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5300)

```diff
-           return rr[yj[14]] < XS ? lS[rr[yj[14]]] : yj[6]
+           return dd[-JX[90]] < uO ? sO[dd[-JX[90]]] : JX[6]
```

#### 570. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5302-L5305` → after: `L5296-L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5296-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5296-L5300) · [Before (L5302-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5302-L5305)

```diff
-         pp: () => Jr ? SQ.l : yj[51],
-         [yj[113] + yj[114] + "Subs"]: () => {
-           const rr = fr[yj[56]].aY[yj[113] + yj[114]];
-           return typeof rr === yj[115] && rr > yj[6] ? rr > yj[116] ? yj[116] : rr : yj[6]
+         vQ: () => kd ? Wm[JX[43]] : 8,
+         [JX[95] + JX[96] + "Subs"]: (...dd) => {
+           dd[JX[1]] = JX[6];
+           const Od = hd[JX[94]].qT[JX[95] + JX[96]];
+           return typeof Od === JX[97] && Od > JX[6] ? Od > JX[98] ? JX[98] : Od : JX[6]
```

#### 571. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5307-L5313` → after: `L5302-L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5302-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5302-L5308) · [Before (L5307-L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5307-L5313)

```diff
-         ["getCom" + yj[129]]: (...rr) => {
-           Tj(rr[yj[1]] = yj[6], rr[yj[122]] = yj[3], sr = yj[6]);
-           for (let Qr = yj[6]; Qr < Xr; Qr++) aS(lr[Qr], yj[19]);
-           for (let Qr = yj[6]; Qr < ES[yj[1]]; Qr++) Tr[ES[Qr][yj[6]]] && aS(ES[Qr][yj[0]], yj[19]);
-           const Sr = hj((() => Nj(atob[yj[117]](), pr) ? yj[6] : yj[0]));
-           Sr === yj[0] && aS(yj[118], yj[19]), er();
-           const Zr = Sr === tj ? tj : hj(((...rr) => {
+         ["getCom" + JX[111]]: (...dd) => {
+           xX(dd[JX[1]] = JX[6], dd[-JX[14]] = JX[3], dO = JX[6]);
+           for (let md = JX[6]; md < sd; md++) KO(Sd[md], JX[22]);
+           for (let md = JX[6]; md < tO[JX[1]]; md++) Jd[tO[md][JX[6]]] && KO(tO[md][JX[0]], JX[22]);
+           const Od = pX((() => yX(atob[JX[99]](), Qd) ? JX[6] : JX[0]));
+           Od === JX[0] && KO(JX[100], JX[22]), Yd();
+           const Wd = Od === TX ? TX : pX(((...dd) => {
```

#### 572. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5316` → after: `L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5311) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5316)

```diff
-             return Sr === yj[3] ? tj : Sr[yj[119]] !== yj[3] ? yj[0] : yj[6]
+             return Od === JX[3] ? TX : Od[JX[101]] !== JX[3] ? JX[0] : JX[6]
```

#### 573. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5318` → after: `L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5313) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5318)

```diff
-           Zr === yj[0] && aS(yj[95], yj[19]);
+           Wd === JX[0] && KO(JX[42], JX[22]);
```

#### 574. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5320` → after: `L5315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5315) · [Before (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5320)

```diff
-           for (let Qr = yj[6]; Qr < pS[yj[1]] && !Wr; Qr++) Tr[pS[Qr][yj[6]]] && aS(pS[Qr][yj[0]], yj[19]);
+           for (let md = JX[6]; md < oO[JX[1]] && !Fd; md++) Jd[oO[md][JX[6]]] && KO(oO[md][JX[0]], JX[22]);
```

#### 575. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5322-L5323` → after: `L5317-L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5317-L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5317-L5318) · [Before (L5322-L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5322-L5323)

```diff
-           rr[yj[17]] = yj[4], Xr === yj[6] && (Hr > yj[6] ? rr[yj[17]] = Pr[yj[6]] : gr ? rr[yj[17]] = "fp" : ar || (rr[yj[17]] = Tr[xS] ? yj[120] : Tr[mS] ? yj[102] : yj[4]));
-           for (let Qr = yj[6]; Qr < US[yj[1]] && !Wr; Qr++) Tr[US[Qr][yj[6]]] && aS(US[Qr][yj[0]], yj[19]);
+           dd[JX[102]] = JX[4], sd === JX[6] && (Vd > JX[6] ? dd[JX[102]] = ud[JX[6]] : Gd ? dd[JX[102]] = "fp" : Rd || (dd[JX[102]] = Jd[NO] ? JX[103] : Jd[qO] ? JX[83] : JX[4]));
+           for (let md = JX[6]; md < yO[JX[1]] && !Fd; md++) Jd[yO[md][JX[6]]] && KO(yO[md][JX[0]], JX[22]);
```

#### 576. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5325-L5330` → after: `L5320-L5325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5320-L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5320-L5325) · [Before (L5325-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5325-L5330)

```diff
-             Ir = (0, sa[yj[44]])(),
-             fr = Ir !== yj[4] && (0, kS[yj[107]])(Ir);
-           fr && !Wr && aS(Ir, yj[23]), ir && aS("ix", yj[23]), Lr && aS("il", yj[23]);
-           for (let Qr = yj[6]; Qr < Hr; Qr++) aS(Pr[Qr], yj[19]);
-           for (let Qr = yj[6]; Qr < tS[yj[1]]; Qr++) Tr[tS[Qr][yj[6]]] && aS(tS[Qr][yj[0]], yj[19]);
-           Tr[hS] && aS("mk:lk", yj[19]);
+             Kd = (JX[6], OX[JX[20]])(),
+             hd = Kd !== JX[4] && (JX[6], zO.n)(Kd);
+           hd && !Fd && KO(Kd, JX[21]), Dd && KO("ix", JX[21]), Bd && KO("il", JX[21]);
+           for (let md = JX[6]; md < Vd; md++) KO(ud[md], JX[22]);
+           for (let md = JX[6]; md < bO[JX[1]]; md++) Jd[bO[md][JX[6]]] && KO(bO[md][JX[0]], JX[22]);
+           Jd[TO] && KO("mk:lk", JX[22]);
```

#### 577. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5337-L5339` → after: `L5332-L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5332-L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5332-L5334) · [Before (L5337-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5337-L5339)

```diff
-           if (Er !== yj[4] && aS(Er, yj[19]), Qr !== yj[4] && Kr(Qr.emitReplaced) === yj[19] && aS("mk:em", yj[19]), yS && aS("3s", yj[23]), XW[yj[121]] && aS("3b", yj[23]), er(), nr && aS("3d", yj[23]), Wr && aS("3g", yj[23]), Ir === yj[4] || fr || aS(Ir, yj[23]), Ur !== yj[4] & … [truncated]
-             const rr = Kr(Qr[yj[110] + "mMeshHitStack"]);
-             typeof rr === yj[31] && (zr = function(rr, Sr, Qr) {
+           if (vd !== JX[4] && KO(vd, JX[22]), md !== JX[4] && gd(md.emitReplaced) === JX[22] && KO("mk:em", JX[22]), EO && KO("3s", JX[21]), VF.S && KO("3b", JX[21]), Yd(), pd && KO("3d", JX[21]), Fd && KO("3g", JX[21]), Kd === JX[4] || hd || KO(Kd, JX[21]), qd !== JX[4] && KO(qd … [truncated]
+             const dd = gd(md[JX[91] + "mMeshHitStack"]);
+             typeof dd === JX[50] && (bd = function(dd, Od, md) {
```

#### 578. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5342` → after: `L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5337) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5342)

```diff
-               return (0, ba.l)(fj(rr, Zr < Qr ? Sr[Zr] : null))
+               return (0, kR.i)(tX(dd, Wd < md ? Od[Wd] : null))
```

#### 579. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5346-L5347` → after: `L5341-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5341-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5341-L5342) · [Before (L5346-L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5346-L5347)

```diff
-           if (zr !== yj[4] && aS(zr, yj[23]), tr === yj[4] && SQ[yj[118]] !== yj[4] && Tj((mr = SQ[yj[118]], tr = (0, ba.j)(xj(mr).reader)), hr = mj(SQ[yj[118]], Kr((() => SQ[yj[15]] === yj[4] ? yj[4] : (0, XW.kb)(SQ[yj[15]]))))), tr !== yj[4] && aS(tr, yj[23]), hr !== yj[4] && a … [truncated]
-           if (rr[yj[17]] === yj[4] && dr[yj[6]] && !(0, ba[yj[38]])(Dr[yj[6]]))
+           if (bd !== JX[4] && KO(bd, JX[21]), Hd === JX[4] && Wm[JX[104]] !== JX[4] && xX((od = Wm[JX[104]], Hd = (0, kR.e)(qX(od).reader)), yd = HX(Wm[JX[104]], gd((() => Wm[JX[67]] === JX[4] ? JX[4] : (JX[6], VF.$)(Wm[JX[67]]))))), Hd !== JX[4] && KO(Hd, JX[21]), yd !== JX[4] & … [truncated]
+           if (dd[JX[102]] === JX[4] && Md[JX[6]] && !(JX[6], kR[JX[55]])(fd[JX[6]]))
```

#### 580. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5349` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5344) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5349)

```diff
-               if (dr[Qr] && (0, ba[yj[38]])(Dr[Qr])) {
+               if (Md[md] && (JX[6], kR[JX[55]])(fd[md])) {
```

#### 581. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5352` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5347) · [Before (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5352)

```diff
-                 Tj(Dr[yj[6]] = rr, dr[yj[6]] = yj[19]);
+                 xX(fd[JX[6]] = dd, Md[JX[6]] = JX[22]);
```

#### 582. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5354` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5349) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5354)

```diff
-               } if (Tj(rr[yj[15]] = yj[6], rr[yj[5]] = rr[yj[17]] === yj[4] ? yj[6] : jr), rr[yj[5]] > yj[6] && Ir !== yj[4] && fr && !Wr) {
+               } if (xX(dd[JX[16]] = JX[6], dd[JX[5]] = dd[JX[102]] === JX[4] ? JX[6] : Xd), dd[JX[5]] > JX[6] && Kd !== JX[4] && hd && !Fd) {
```

#### 583. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5356` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5351) · [Before (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5356)

```diff
-             Tj(Dr[yj[6]] = Ir, dr[yj[6]] = yj[23], rr[yj[15]] = yj[0], rr[yj[5]]++)
+             xX(fd[JX[6]] = Kd, Md[JX[6]] = JX[21], dd[JX[16]] = JX[0], dd[JX[5]]++)
```

#### 584. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5358-L5365` → after: `L5353-L5360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5353-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5353-L5360) · [Before (L5358-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5358-L5365)

```diff
-           if (rr[yj[16]] = yj[6], ur++ % yj[2] === yj[0])
-             for (let Qr = yj[0]; Qr < sr; Qr++) jS(Qr) < jS(rr[yj[16]]) && (rr[yj[16]] = Qr);
-           const Nr = Dr[rr[yj[16]]];
-           (dr[rr[yj[16]]] ? QS : SS)[Nr] = rS++;
-           const Yr = rr[yj[16]] >= rr[yj[15]] && rr[yj[16]] < rr[yj[5]];
-           if (!dr[rr[yj[16]]] || Nr === rr[yj[17]] || rr[yj[16]] === yj[6] && !Yr) return Nr === yj[7] ? (0, ba.B)(Tr[NS], ba[yj[44]]) : Nr;
-           const yr = (rr[yj[122]] = rr[yj[17]]) !== yj[4] && void 0 !== rr[yj[122]] ? rr[yj[122]] : Dr[yj[6]];
-           return yr !== ZS && Tj(ZS = yr, WS = (0, XW[yj[24]])(yj[4])), WS[Nr] ??= (0, ba[yj[123]])(Nr, yr)
+           if (dd[JX[105]] = JX[6], OO++ % JX[2] === JX[0])
+             for (let md = JX[0]; md < dO; md++) hO(md) < hO(dd[JX[105]]) && (dd[JX[105]] = md);
+           const Nd = fd[dd[JX[105]]];
+           (Md[dd[JX[105]]] ? FO : WO)[Nd] = mO++;
+           const Td = dd[JX[105]] >= dd[JX[16]] && dd[JX[105]] < dd[JX[5]];
+           if (!Md[dd[JX[105]]] || Nd === dd[JX[102]] || dd[JX[105]] === JX[6] && !Td) return Nd === JX[84] ? (JX[6], kR.z)(Jd[HO], kR[JX[20]]) : Nd;
+           const wd = (dd[-JX[14]] = dd[JX[102]]) !== JX[4] && dd[-JX[14]] !== void JX[6] ? dd[-JX[14]] : fd[JX[6]];
+           return wd !== RO && xX(RO = wd, XO = (JX[6], VF[JX[43]])(JX[4])), XO[Nd] ??= (JX[6], kR[JX[103]])(Nd, wd)
```

#### 585. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5368-L5369` → after: `L5363-L5364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5363-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5363-L5364) · [Before (L5368-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5368-L5369)

```diff
-       let GS = OQ[yj[104]][yj[124]];
-       const AS = () => vS !== OQ[yj[104]][yj[124]] ? vS : GS;
+       let PO = Sm[JX[86]][JX[106]];
+       const cO = () => xO !== Sm[JX[86]][JX[106]] ? xO : PO;
```

#### 586. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5380-L5381` → after: `L5375-L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5375-L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5375-L5376) · [Before (L5380-L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5380-L5381)

```diff
-             if (typeof Sr === yj[40] + yj[41] && !(rr[yj[6]] instanceof Sr) && !(0, XW.H)(rr[yj[6]])) return vS = OQ[yj[104]].NotEvent, yj[6];
-             if (rr[yj[6]].isTrusted === yj[23]) return yj[6];
+             if (typeof Od === JX[73] + JX[74] && !(dd[JX[6]] instanceof Od) && !(JX[6], VF.x)(dd[JX[6]])) return xO = Sm[JX[86]].NotEvent, JX[6];
+             if (dd[JX[6]].isTrusted === JX[21]) return JX[6];
```

#### 587. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5384` → after: `L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5379) · [Before (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5384)

```diff
-             return Qr < yj[37] ? (vS = OQ[yj[104]]["FewPropertie" + yj[101]], yj[6]) : LS()
+             return md < JX[49] ? (xO = Sm[JX[86]]["FewPropertie" + JX[82]], JX[6]) : SO()
```

#### 588. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5397` → after: `L5392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5392) · [Before (L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5397)

```diff
-           Tj(rr[yj[1]] = yj[2], rr[-yj[125]] = yj[3]);
+           xX(dd[JX[1]] = JX[2], dd[JX[2]] = JX[3]);
```

#### 589. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5399` → after: `L5394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5394) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5399)

```diff
-             rr[-yj[125]] = rr[yj[0]]()
+             dd[JX[2]] = dd[JX[0]]()
```

#### 590. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5401` → after: `L5396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5396) · [Before (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5401)

```diff
-           gS[CS++] = [rr[yj[6]], () => !Sr || rr[yj[0]]() !== rr[-yj[125]]]
+           GO[nO++] = [dd[JX[6]], () => !Od || dd[JX[0]]() !== dd[JX[2]]]
```

#### 591. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5403` → after: `L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5398) · [Before (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5403)

```diff
-         lx: (...rr) => {
+         Et: (...dd) => {
```

#### 592. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5410-L5411` → after: `L5405-L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5405-L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5405-L5406) · [Before (L5410-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5410-L5411)

```diff
-               const rr = Kr(Qr.RI),
-                 Wr = "v3" === rr ? yj[5] : "v5" === rr ? yj[28] : "v6" === rr ? yj[34] : yj[2];
+               const dd = gd(md.iK),
+                 Fd = "v3" === dd ? JX[5] : "v5" === dd ? JX[24] : "v6" === dd ? JX[32] : JX[2];
```

#### 593. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5413-L5414` → after: `L5408-L5409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5408-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5408-L5409) · [Before (L5413-L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5413-L5414)

```diff
-               const ar = Kr(Qr["inbuil" + yj[127] + yj[128]]);
-               typeof ar === yj[115] && ar >= yj[6] && ar <= yj[55] && (ar | yj[6]) === ar && (wS = ar), Tj(Sr = Kr(Qr.reflectApplyHit), Zr = Kr(Qr.definerHit))
+               const Rd = gd(md["inbuil" + JX[109] + JX[110]]);
+               typeof Rd === JX[97] && Rd >= JX[6] && Rd <= JX[107] && (Rd | JX[6]) === Rd && (eO = Rd), xX(Od = gd(md.reflectApplyHit), Wd = gd(md.definerHit))
```

#### 594. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5416` → after: `L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5411) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5416)

```diff
-             const Wr = rr ? yj[88] : "11" === Zr ? yj[55] : "13" === Zr ? 13 : Sr !== yj[3] && Sr !== yj[4] ? yj[2] : "10" === Zr ? yj[37] : "12" === Zr ? yj[75] : yj[6];
+             const Fd = dd ? JX[68] : "11" === Wd ? JX[107] : "13" === Wd ? 13 : Od !== JX[3] && Od !== JX[4] ? JX[2] : "10" === Wd ? JX[49] : "12" === Wd ? 12 : JX[6];
```

#### 595. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5418-L5419` → after: `L5413-L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5413-L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5413-L5414) · [Before (L5418-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5418-L5419)

```diff
-           })(Sr), VS++ % 10 === yj[6] && (BS(), Uj((() => !Nj(Wr[ar][yj[117]][yj[117]](), pr))) && (GS = GS === OQ[yj[104]][yj[126]] ? OQ[yj[104]][yj[126]] : OQ[yj[104]].Fr), Uj((() => !Nj(Wr[ar][yj[117]](), pr))) && (GS = OQ[yj[104]][yj[126]])), {
-             flags: Sr ? OQ[yj[118]].Butto : yj[6],
+           })(Od), jO++ % 10 === JX[6] && (JO(), bX((() => !yX(Fd[Rd][JX[99]][JX[99]](), Qd))) && (PO = PO === Sm[JX[86]][JX[108]] ? Sm[JX[86]][JX[108]] : Sm[JX[86]].Fr), bX((() => !yX(Fd[Rd][JX[99]](), Qd))) && (PO = Sm[JX[86]][JX[108]])), {
+             flags: Od ? Sm[JX[16]].Butto : JX[6],
```

#### 596. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5421-L5424` → after: `L5416-L5419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5416-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5416-L5419) · [Before (L5421-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5421-L5424)

```diff
-               [OQ[yj[54]].PhysicsVersion, iS],
-               [OQ[yj[54]]["Inbuil" + yj[127] + yj[128]], wS],
-               [OQ[yj[54]]["AltCom" + yj[129]], cS],
-               [OQ[yj[54]]["ProbeUsedPro" + yj[49]], AS()]
+               [Sm[JX[42]].PhysicsVersion, DO],
+               [Sm[JX[42]]["Inbuil" + JX[109] + JX[110]], eO],
+               [Sm[JX[42]]["AltCom" + JX[111]], IO],
+               [Sm[JX[42]]["ProbeUsedPro" + JX[7]], cO()]
```

#### 597. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5432` → after: `L5427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5427) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5432)

```diff
-       Lj = VQ.g,
+       sX = Dm.f,
```

#### 598. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5522` → after: `L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5517) · [Before (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5522)

```diff
-         if (this.stopped) return eQ.e;
+         if (this.stopped) return am.d;
```

#### 599. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5551` → after: `L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5546) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5551)

```diff
-               Wr = KQ(Zr > 0 ? Sr / Zr : Sr > 0 ? fr.volume : 0),
+               Fd = Em(Wd > 0 ? Od / Wd : Od > 0 ? hd.volume : 0),
```

#### 600. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5584` → after: `L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5579) · [Before (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5584)

```diff
-         client: String(PS.e)
+         client: String(VO.c)
```

#### 601. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5628` → after: `L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5623) · [Before (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5628)

```diff
-           console.error(`${vj} a startup listener threw`, Sr)
+           console.error(`${BX} a startup listener threw`, Od)
```

#### 602. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5708` → after: `L5703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5703) · [Before (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5708)

```diff
-       console.warn(`${vj} chunk cancels from the server this session: ${rr}`)
+       console.warn(`${BX} chunk cancels from the server this session: ${dd}`)
```

#### 603. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5713` → after: `L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5708) · [Before (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5713)

```diff
-       of = null,
+       lh = null,
```

#### 604. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5723` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5718) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5723)

```diff
-     const ZE = new TZ.c(new FQ.d);
+     const Fv = new xW.d(new Cm.b);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5730` → after: `L5725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5725) · [Before (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5730)

```diff
-         this.Jp = rr, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.wI = !1
+         this.lQ = dd, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.jK = !1
```

#### 606. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5739` → after: `L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5734) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5739)

```diff
-         (0, fQ.c)(rr) && (this.lossPending = !1);
+         (0, tm.d)(dd) && (this.lossPending = !1);
```

#### 607. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5741` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5736) · [Before (L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5741)

```diff
-         this.lastFrameMs = Qr, this.lossPending && Sr && (0, fQ.i)(rr) ? (null === this.undrawnSinceMs || Zr > 1e3) && (this.undrawnSinceMs = Qr) : this.undrawnSinceMs = null, this.show(this.wI || null !== this.undrawnSinceMs && Qr - this.undrawnSinceMs >= 2e3)
+         this.lastFrameMs = md, this.lossPending && Od && (0, tm.i)(dd) ? (null === this.undrawnSinceMs || Wd > 1e3) && (this.undrawnSinceMs = md) : this.undrawnSinceMs = null, this.show(this.jK || null !== this.undrawnSinceMs && md - this.undrawnSinceMs >= 2e3)
```

#### 608. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5744` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5739) · [Before (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5744)

```diff
-         this.wI = rr, this.show(rr || this.shown)
+         this.jK = dd, this.show(dd || this.shown)
```

#### 609. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5747` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5742) · [Before (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5747)

```diff
-         this.wI = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
+         this.jK = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
```

#### 610. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5750` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5745) · [Before (L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5750)

```diff
-         rr !== this.shown && (this.shown = rr, this.Jp(rr))
+         dd !== this.shown && (this.shown = dd, this.lQ(dd))
```

#### 611. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5753` → after: `L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5748) · [Before (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5753)

```diff
-       fr.i.Jp(Ur.n, rr)
+       hd.j.lQ(qd.n, dd)
```

#### 612. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5758-L5759` → after: `L5753-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5753-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5753-L5754) · [Before (L5758-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5758-L5759)

```diff
-           let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NQ.e;
-           this.Jp = rr, this.hidden = Sr, this.countdown = null, this.stuckJoins = 0, this.stuck = null
+           let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ym.i;
+           this.lQ = dd, this.hidden = Od, this.countdown = null, this.stuckJoins = 0, this.stuck = null
```

#### 613. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5762` → after: `L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5757) · [Before (L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5762)

```diff
-           this.end(), this.countdown = new NQ.b(15e3, (() => {
+           this.end(), this.countdown = new ym.c(15e3, (() => {
```

#### 614. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5774` → after: `L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5769) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5774)

```diff
-           rr !== this.stuck && (this.stuck = rr, this.Jp(rr))
+           dd !== this.stuck && (this.stuck = dd, this.lQ(dd))
```

#### 615. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5777` → after: `L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5772) · [Before (L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5777)

```diff
-         fr.i.Jp(Ur.h, rr)
+         hd.j.lQ(qd.i, dd)
```

#### 616. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5782` → after: `L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5777) · [Before (L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5782)

```diff
-           this.jx = rr, this.now = Sr, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
+           this.Wt = dd, this.now = Od, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
```

#### 617. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5799` → after: `L5794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5794) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5799)

```diff
-           return null !== Sr && rr - Sr.atMs < 3e4 ? Sr : null
+           return null !== Od && dd - Od.atMs < 3e4 ? Od : null
```

#### 618. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5809` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5804) · [Before (L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5809)

```diff
-               firstLostAtMs: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.firstLostAtMs) && void 0 !== Sr ? Sr : rr.lostAtMs,
+               firstLostAtMs: null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.firstLostAtMs) && void 0 !== Od ? Od : dd.lostAtMs,
```

#### 619. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5813` → after: `L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5808) · [Before (L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5813)

```diff
-             this.jx(`webgl_restored_${Wr}_${rr.delay}`, `WebGL2 context restored (${Wr}, wasm)`)
+             this.Wt(`webgl_restored_${Fd}_${dd.delay}`, `WebGL2 context restored (${Fd}, wasm)`)
```

#### 620. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5821` → after: `L5816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5816) · [Before (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5821)

```diff
-               Zr = null === Qr ? rr.delay : (0, EQ.k)(this.now() - Qr.firstLostAtMs),
+               Wd = null === md ? dd.delay : (0, om.g)(this.now() - md.firstLostAtMs),
```

#### 621. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5823` → after: `L5818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5818) · [Before (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5823)

```diff
-             this.jx(`webgl_rejoin_${Wr}_${Zr}`, "WebGL2 context not restored: rejoining (wasm)")
+             this.Wt(`webgl_rejoin_${Fd}_${Wd}`, "WebGL2 context not restored: rejoining (wasm)")
```

#### 622. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5831` → after: `L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5826) · [Before (L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5831)

```diff
-             delay: (0, EQ.k)(this.now() - rr),
+             delay: (0, om.g)(this.now() - dd),
```

#### 623. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5839` → after: `L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5834) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5839)

```diff
-           this.deps = rr, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
+           this.deps = dd, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
```

#### 624. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5892` → after: `L5887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5887) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5892)

```diff
-           const Sr = (0, pQ.f)(this.storage);
+           const Od = (0, Nm.e)(this.storage);
```

#### 625. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5911` → after: `L5906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5906) · [Before (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5911)

```diff
-             this.deps.jx(Zr, Wr)
+             this.deps.Wt(Wd, Fd)
```

#### 626. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5915` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5910) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5915)

```diff
-           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(pQ.b)
+           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(Nm.c)
```

#### 627. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5918` → after: `L5913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5913) · [Before (L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5918)

```diff
-           this.storage.setItem(pQ.b, rr)
+           this.storage.setItem(Nm.c, dd)
```

#### 628. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5921-L5922` → after: `L5916-L5917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5916-L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5916-L5917) · [Before (L5921-L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5921-L5922)

```diff
-         jx: pZ.reportRenderRecovery,
-         probe: () => mQ("rust_webgl1" === (0, xa.z)()),
+         Wt: NW.reportRenderRecovery,
+         probe: () => Hm("rust_webgl1" === (0, qR.E)()),
```

#### 629. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5941` → after: `L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5936) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5941)

```diff
-         renderer: nQ.c[Sr]
+         renderer: wm.e[Od]
```

#### 630. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5946` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5941) · [Before (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5946)

```diff
-       return rI ??= Promise.all([Qr.e(177), Qr.e(91), Qr.e(225), Qr.e(158), Qr.e(246), Qr.e(245), Qr.e(244), Qr.e(223), Qr.e(50), Qr.e(161), Qr.e(243), Qr.e(72)]).then((() => Qr(45305))).then((rr => (uj = rr, Object.assign(globalThis, {
+       return WK ??= Promise.all([md.e(177), md.e(91), md.e(225), md.e(158), md.e(246), md.e(245), md.e(244), md.e(223), md.e(50), md.e(161), md.e(243), md.e(72)]).then((() => md(45347))).then((dd => (mK = dd, Object.assign(globalThis, {
```

#### 631. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5954-L5955` → after: `L5949-L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5949-L5950) · [Before (L5954-L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5954-L5955)

```diff
-       return sj ??= Qr.e(70).then((() => Qr(55144))).catch((rr => {
-         throw sj = null, new cr.b(rr)
+       return OK ??= md.e(70).then((() => md(55064))).catch((dd => {
+         throw OK = null, new Id.e(dd)
```

#### 632. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5980-L5981` → after: `L5975-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5975-L5976) · [Before (L5980-L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5980-L5981)

```diff
-       dj || (dj = !0, aa.i.setHost(new KE), (0, UZ.l)(), Sa.e.setFollower(Rp), Object.assign(globalThis, {
-         bloxdPreviews: aa.i
+       dK || (dK = !0, hR.j.setHost(new wv), (0, bW.m)(), FR.g.setFollower(AQ), Object.assign(globalThis, {
+         bloxdPreviews: hR.j
```

#### 633. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5994` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5989) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5994)

```diff
-       Dj = !0, NE = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), UE = !NE, console.info(`${vj} starting`), Jj || (Jj = !0, (0, Ur._)(new hQ(bE, Qp, YE)), (0, mr.l)(new zQ), (0, Ur.Y)(new YQ((() => performance.now() - VI))), (0, Ur.T)()),  … [truncated]
+       MX = !0, qv = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Hv = !qv, console.info(`${BX} starting`), fX || (fX = !0, (0, qd.ab)(new pm(Cv, WQ, pv)), (0, od.j)(new Ym), (0, qd.$)(new gm((() => performance.now() - DK))), (0, qd.R)()), … [truncated]
```

#### 634. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5997` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5992) · [Before (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5997)

```diff
-         Sr = Kj("me9shbkddh", (() => {
+         Od = EX("xmtbivasfeq", (() => {
```

#### 635. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5999` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5994) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L5999)

```diff
-           return null !== (rr = null === (Sr = UI) || void 0 === Sr ? void 0 : Sr.ws) && void 0 !== rr ? rr : null
+           return null !== (dd = null === (Od = bK) || void 0 === Od ? void 0 : Od.ws) && void 0 !== dd ? dd : null
```

#### 636. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6002` → after: `L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L5997) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6002)

```diff
-         console.error(`${vj} probes`, Wr)
+         console.error(`${BX} probes`, Fd)
```

#### 637. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6005-L6006` → after: `L6000-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6000-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6000-L6001) · [Before (L6005-L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6005-L6006)

```diff
-         const rr = (0, eW.m)(),
-           Sr = (0, eW.g)();
+         const dd = (0, aF.i)(),
+           Od = (0, aF.e)();
```

#### 638. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6019` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6014) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6019)

```diff
-             lobby: null !== (Sr = Qr.get("lobby")) && void 0 !== Sr ? Sr : null
+             lobby: null !== (Od = md.get("lobby")) && void 0 !== Od ? Od : null
```

#### 639. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6022` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6017) · [Before (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6022)

```diff
-         if (rr) return (0, HS.l)(rr.game) && Cp().request(), void LE(rr.game, rr.lobby);
+         if (dd) return (0, iO.k)(dd.game) && GQ().request(), void Bv(dd.game, dd.lobby);
```

#### 640. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6028` → after: `L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6023) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6028)

```diff
-               await (0, cr.h)(rr), Ef = Ip(new WebSocket(Sr)), null !== Ef && Qa.b.setGame(null), vE()
+               await (0, Id.p)(dd), oh = hQ(new WebSocket(Od)), null !== oh && RR.e.setGame(null), Uv()
```

#### 641. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6030` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6025) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6030)

```diff
-               console.error(`${vj} ?ws=${Sr} did not attach`, Wr)
+               console.error(`${BX} ?ws=${Od} did not attach`, Fd)
```

#### 642. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6037-L6038` → after: `L6032-L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6032-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6032-L6033) · [Before (L6037-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6037-L6038)

```diff
-         const pr = (0, xa.M)();
-         let mr = await (0, xa.H)();
+         const Qd = (0, qR.S)();
+         let od = await (0, qR.J)();
```

#### 643. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6041` → after: `L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6036) · [Before (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6041)

```diff
-             return !(0, wS.u)((0, wS.x)(), Op, rr, wS.b) && (0, wS.q)(Op, rr, wS.b)
+             return !(0, eO.s)((0, eO.u)(), xQ, dd, eO.c) && (0, eO.p)(xQ, dd, eO.c)
```

#### 644. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6050` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6045) · [Before (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050)

```diff
-               console.warn(`${vj} ${Qr}: waiting for a WebGL context`);
+               console.warn(`${BX} ${md}: waiting for a WebGL context`);
```

#### 645. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6053` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6048) · [Before (L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6053)

```diff
-                   sleep: (rr, Sr) => (0, sS.e)(rr, Sr).catch((() => {})),
+                   sleep: (dd, Od) => (0, dm.c)(dd, Od).catch((() => {})),
```

#### 646. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6055` → after: `L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050) · [Before (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6055)

```diff
-                     const rr = await (0, xa.P)();
+                     const dd = await (0, qR.V)();
```

#### 647. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6057` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6052) · [Before (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6057)

```diff
-                       eN: rr
+                       xN: dd
```

#### 648. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6061` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6056) · [Before (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6061)

```diff
-                     const Qr = (0, TS.h)("blockedAfterLoss" === Sr ? "graphicsLost" : "noContext");
+                     const md = (0, UO.l)("blockedAfterLoss" === Od ? "graphicsLost" : "noContext");
```

#### 649. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6075` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6070) · [Before (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6075)

```diff
-                   detail: `${Qr}; ${rr}`,
+                   detail: `${md}; ${dd}`,
```

#### 650. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6082` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6077) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6082)

```diff
-                 } : ((0, xS.f)("/"), null)
+                 } : ((0, NO.i)("/"), null)
```

#### 651. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6085` → after: `L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6080) · [Before (L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6085)

```diff
-                 eN: Ir
+                 xN: Kd
```

#### 652. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6089` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6084) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6089)

```diff
-                 const rr = null !== (fr = null === Ir || void 0 === Ir ? void 0 : Ir.backend) && void 0 !== fr ? fr : "none";
+                 const dd = null !== (hd = null === Kd || void 0 === Kd ? void 0 : Kd.backend) && void 0 !== hd ? hd : "none";
```

#### 653. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6100` → after: `L6095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6095) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6100)

```diff
-                 }), null !== Ir && (0, xa.L)(Ir.backend)
+                 }), null !== Kd && (0, qR.O)(Kd.backend)
```

#### 654. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6109` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6104) · [Before (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6109)

```diff
-           mr = Sr.eN
+           od = Od.xN
```

#### 655. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6114` → after: `L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6109) · [Before (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6114)

```diff
-           console.warn(`${vj} ${Qr.detail}: picking again in ${Bp} ms`), await new Promise((rr => {
+           console.warn(`${BX} ${md.detail}: picking again in ${EQ} ms`), await new Promise((dd => {
```

#### 656. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6117` → after: `L6112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6112) · [Before (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6117)

```diff
-           const Zr = await (0, xa.P)();
+           const Wd = await (0, qR.V)();
```

#### 657. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6122-L6123` → after: `L6117-L6118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6117-L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6117-L6118) · [Before (L6122-L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6122-L6123)

```diff
-               backend: null !== (Wr = null === Zr || void 0 === Zr ? void 0 : Zr.backend) && void 0 !== Wr ? Wr : "none"
-             }), null !== Zr && (0, xa.L)(Zr.backend)
+               backend: null !== (Fd = null === Wd || void 0 === Wd ? void 0 : Wd.backend) && void 0 !== Fd ? Fd : "none"
+             }), null !== Wd && (0, qR.O)(Wd.backend)
```

#### 658. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6127` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6122) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6127)

```diff
-         if ((0, pZ.setCrashBackend)((0, VQ.p)(Nr) ? "unsupported" : null !== (Sr = null === Nr || void 0 === Nr ? void 0 : Nr.backend) && void 0 !== Sr ? Sr : "none"), (0, VQ.p)(Nr)) return function(rr) {
+         if ((0, NW.setCrashBackend)((0, Dm.p)(Nd) ? "unsupported" : null !== (Od = null === Nd || void 0 === Nd ? void 0 : Nd.backend) && void 0 !== Od ? Od : "none"), (0, Dm.p)(Nd)) return function(dd) {
```

#### 659. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6134` → after: `L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6129) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6134)

```diff
-           if (Wr && (0, iS.w)()) return (0, pZ.reportNoBackendRetry)("reload", Sr, Qr, Zr), void lp(`${Qr}, again after ${Bp} ms`);
+           if (Fd && (0, DO.r)()) return (0, NW.reportNoBackendRetry)("reload", Od, md, Wd), void SQ(`${md}, again after ${EQ} ms`);
```

#### 660. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6137` → after: `L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6132) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6137)

```diff
-             afterReload: String(iS.F)
+             afterReload: String(DO.B)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6140` → after: `L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6135) · [Before (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6140)

```diff
-         if ((0, qa.p)("render")) try {
+         if ((0, rR.o)("render")) try {
```

#### 662. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6143` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6138) · [Before (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6143)

```diff
-           } = await Promise.all([Qr.e(91), Qr.e(57)]).then((() => Qr(5481)));
+           } = await Promise.all([md.e(91), md.e(57)]).then((() => md(5410)));
```

#### 663. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6148` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6143) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6148)

```diff
-         if ((0, qa.p)("renderlite")) try {
+         if ((0, rR.o)("renderlite")) try {
```

#### 664. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6151-L6152` → after: `L6146-L6147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6146-L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6146-L6147) · [Before (L6151-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6151-L6152)

```diff
-           } = await Promise.all([Qr.e(307), Qr.e(58)]).then((() => Qr(55152)));
-           of = rr(Nr)
+           } = await Promise.all([md.e(307), md.e(58)]).then((() => md(55073)));
+           lh = dd(Nd)
```

#### 665. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6156` → after: `L6151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6151) · [Before (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6156)

```diff
-         if ((0, qa.p)("renderprobe")) try {
+         if ((0, rR.o)("renderprobe")) try {
```

#### 666. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6159` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6154) · [Before (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6159)

```diff
-           } = await Qr.e(59).then((() => Qr(55161)));
+           } = await md.e(59).then((() => md(55078)));
```

#### 667. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6164` → after: `L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6159) · [Before (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6164)

```diff
-         if ("webgl" === (null === Nr || void 0 === Nr ? void 0 : Nr.backend) && NE && "address" !== iS.B.reason) {
+         if ("webgl" === (null === Nd || void 0 === Nd ? void 0 : Nd.backend) && qv && "address" !== DO.y.reason) {
```

#### 668. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6166` → after: `L6161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6161) · [Before (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6166)

```diff
-           null !== rr && (0, cS.i)(rr)
+           null !== dd && (0, IO.j)(dd)
```

#### 669. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6168-L6173` → after: `L6163-L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6163-L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6163-L6168) · [Before (L6168-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6168-L6173)

```diff
-         const Ur = null !== (Zr = null === Nr || void 0 === Nr ? void 0 : Nr.backend) && void 0 !== Zr ? Zr : null;
-         qf.adapter = null !== (ar = null === Nr || void 0 === Nr ? void 0 : Nr.adapter) && void 0 !== ar ? ar : null, qf.boundAtMs = null, qf.indirectHangs = null, qf.restoresSkipped = null;
-         const tr = !(0, VQ.hb)();
-         null === Nr || (0, VQ.H)(Nr.reason) || console.info(`${vj} drawing with ${Nr.backend}: ${Nr.reason}`);
-         const hr = (0, xa.w)();
-         lr("previews"), xI(!0), (0, cr.n)((rr => {
+         const qd = null !== (Wd = null === Nd || void 0 === Nd ? void 0 : Nd.backend) && void 0 !== Wd ? Wd : null;
+         rh.adapter = null !== (Rd = null === Nd || void 0 === Nd ? void 0 : Nd.adapter) && void 0 !== Rd ? Rd : null, rh.boundAtMs = null, rh.indirectHangs = null, rh.restoresSkipped = null;
+         const Hd = !(0, Dm.ab)();
+         null === Nd || (0, Dm.F)(Nd.reason) || console.info(`${BX} drawing with ${Nd.backend}: ${Nd.reason}`);
+         const yd = (0, qR.C)();
+         Sd("previews"), qK(!0), (0, Id.w)((dd => {
```

#### 670. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6177` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6172) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6177)

```diff
-               gf = rr.rasterText, xf = rr.setTextLocalPlayer, rr.setTextLocalPlayer(null !== (Sr = null === (Qr = pf) || void 0 === Qr ? void 0 : Qr.info.playerDbId) && void 0 !== Sr ? Sr : null), Cf = rr.drainTextRerasters, Mf = rr.loadTextIcons, rr.warmText((() => Df)), rr.text … [truncated]
+               nh = dd.rasterText, qh = dd.setTextLocalPlayer, dd.setTextLocalPlayer(null !== (Od = null === (md = Nh) || void 0 === md ? void 0 : md.info.playerDbId) && void 0 !== Od ? Od : null), Lh = dd.drainTextRerasters, Ph = dd.loadTextIcons, dd.warmText((() => kh)), dd.text … [truncated]
```

#### 671. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6187-L6188` → after: `L6182-L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6182-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6182-L6183) · [Before (L6187-L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6187-L6188)

```diff
-         })), (0, cr.i)(aI).catch((rr => {
-           console.warn(`${vj} the game code did not load: a join asks again`, rr)
+         })), (0, Id.q)(hK).catch((dd => {
+           console.warn(`${BX} the game code did not load: a join asks again`, dd)
```

#### 672. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6190` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6185) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6190)

```diff
-         const zr = (0, xa.g)(Nr);
+         const bd = (0, qR.j)(Nd);
```

#### 673. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6195` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6190) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6195)

```diff
-             const Sr = null !== rr && void 0 !== rr ? rr : document.createElement("canvas");
+             const Od = null !== dd && void 0 !== dd ? dd : document.createElement("canvas");
```

#### 674. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6205` → after: `L6200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6200) · [Before (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6205)

```diff
-                     null === (rr = of) || void 0 === rr || rr.glContextLost(Sr, Qr, null !== (Zr = null !== (Wr = !1 === (null === (ar = SI) || void 0 === ar ? void 0 : ar.isStopped) ? SI.addDistanceInUse() : null) && void 0 !== Wr ? Wr : null === (jr = Kx()) || void 0 === jr ? v … [truncated]
+                     null === (dd = lh) || void 0 === dd || dd.glContextLost(Od, md, null !== (Wd = null !== (Fd = !1 === (null === (Rd = FK) || void 0 === Rd ? void 0 : Rd.isStopped) ? FK.addDistanceInUse() : null) && void 0 !== Fd ? Fd : null === (Xd = gt()) || void 0 === Xd ? v … [truncated]
```

#### 675. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6208-L6211` → after: `L6203-L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6203-L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6203-L6206) · [Before (L6208-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6208-L6211)

```diff
-               }(Sr), (0, Ka.n)();
-             const Qr = (0, tQ.g)(),
-               Zr = (0, tQ.k)(Qr);
-             Sr.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, ea.g)(Sr, Zr), (0, tQ.d)(Sr, Qr), Sr.width = Zr.bufferWidth, Sr.height = Zr.bufferHeight;
+               }(Od), (0, ER.l)();
+             const md = (0, Tm.f)(),
+               Wd = (0, Tm.h)(md);
+             Od.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, aR.e)(Od, Wd), (0, Tm.e)(Od, md), Od.width = Wd.bufferWidth, Od.height = Wd.bufferHeight;
```

#### 676. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6220` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6215) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6220)

```diff
-             (0, pZ.showUnsupported)((0, TS.t)("fetch"), Va.i.fetch, `the previews did not load: ${String(Wr)}`)
+             (0, NW.showUnsupported)((0, UO.u)("fetch"), DR.g.fetch, `the previews did not load: ${String(Fd)}`)
```

#### 677. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6231` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6226) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6231)

```diff
-             (0, pZ.showUnsupported)((0, TS.t)("fetch"), Va.i.fetch, `the ${null!==Ur&&void 0!==Ur?Ur:"client"} build did not load: ${String(Wr)}`)
+             (0, NW.showUnsupported)((0, UO.u)("fetch"), DR.g.fetch, `the ${null!==qd&&void 0!==qd?qd:"client"} build did not load: ${String(Fd)}`)
```

#### 678. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6234-L6235` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6229-L6230) · [Before (L6234-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6234-L6235)

```diff
-         const er = (0, xa.e)(),
-           yr = !er && !0 !== xQ.n.getItem(Oj),
+         const Yd = (0, qR.f)(),
+           wd = !Yd && !0 !== qm.o.getItem(SX),
```

#### 679. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6237` → after: `L6232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6232) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6237)

```diff
-         lr("load"), await (0, ma.e)(nr, {
+         Sd("load"), await (0, HR.d)(pd, {
```

#### 680. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6239` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6234) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6239)

```diff
-         }), Br && !(0, gS.R)() && await (0, ma.e)(nr, {
+         }), Ed && !(0, GO.P)() && await (0, HR.d)(pd, {
```

#### 681. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6244-L6245` → after: `L6239-L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6239-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6239-L6240) · [Before (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6244-L6245)

```diff
-         const Or = (0, gS.l)();
-         if (!(0, gS.R)() && ("compile" === Or || "instantiate" === Or) && (0, gS.M)()) {
+         const xd = (0, GO.m)();
+         if (!(0, GO.P)() && ("compile" === xd || "instantiate" === xd) && (0, GO.K)()) {
```

#### 682. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6247` → after: `L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6242) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6247)

```diff
-           console.warn(`${vj} the wasm client did not ${Or} here (${rr}): loading it again`);
+           console.warn(`${BX} the wasm client did not ${xd} here (${dd}): loading it again`);
```

#### 683. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6274` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6269) · [Before (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6274)

```diff
-             sleep: rr => (0, sS.e)(rr),
+             sleep: dd => (0, dm.c)(dd),
```

#### 684. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6276-L6278` → after: `L6271-L6273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6271-L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6271-L6273) · [Before (L6276-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6276-L6278)

```diff
-             retryable: gS.M,
-             stepDownMemory: () => "instantiate" !== (0, gS.l)() || !Xp() || (0, jZ.v)() ? "none" : "halve" === (0, jZ.r)() ? "halved" : "spent",
-             retry: ma.h
+             retryable: GO.K,
+             stepDownMemory: () => "instantiate" !== (0, GO.m)() || !sQ() || (0, vW.p)() ? "none" : "halve" === (0, vW.o)() ? "halved" : "spent",
+             retry: HR.e
```

#### 685. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6284` → after: `L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6279) · [Before (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6284)

```diff
-           } = Sr, Wr = Zr ? rr : (0, gS.g)();
+           } = Od, Fd = Wd ? dd : (0, GO.g)();
```

#### 686. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6296-L6300` → after: `L6291-L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6291-L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6291-L6295) · [Before (L6296-L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6296-L6300)

```diff
-         if (!(0, gS.R)()) {
-           (0, gS.P)() && "compile" !== Or && "instantiate" !== Or && xQ.n.setItem(Oj, !0);
-           const rr = (0, gS.l)();
-           if (Hr("instantiate" === rr || null === rr ? `instantiate_${Xr((0,gS.k)())}` : rr), "call" === rr) zx({
-             site: wQ.B,
+         if (!(0, GO.P)()) {
+           (0, GO.M)() && "compile" !== xd && "instantiate" !== xd && qm.o.setItem(SX, !0);
+           const dd = (0, GO.m)();
+           if (Vd("instantiate" === dd || null === dd ? `instantiate_${sd((0,GO.k)())}` : dd), "call" === dd) bt({
+             site: Im.u,
```

#### 687. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6305` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6300) · [Before (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6305)

```diff
-             const Sr = null !== rr && void 0 !== rr ? rr : "instantiate",
+             const Od = null !== dd && void 0 !== dd ? dd : "instantiate",
```

#### 688. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6307` → after: `L6302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6302) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6307)

```diff
-                 (0, pZ.showUnsupported)((0, TS.t)(Sr), Va.i[Sr], (0, gS.g)())
+                 (0, NW.showUnsupported)((0, UO.u)(Od), DR.g[Od], (0, GO.g)())
```

#### 689. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6309` → after: `L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6304) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6309)

```diff
-               Zr = "compile" === Or || "instantiate" === Or ? Or : rr;
+               Wd = "compile" === xd || "instantiate" === xd ? xd : dd;
```

#### 690. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6312` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6307) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6312)

```diff
-               if (NE && (rr && Xp() ? !vr && "spent" !== (0, jZ.r)(Date.now(), !0) : (0, iS.w)())) {
+               if (qv && (dd && sQ() ? !Ud && "spent" !== (0, vW.o)(Date.now(), !0) : (0, DO.r)())) {
```

#### 691. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6314-L6315` → after: `L6309-L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6309-L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6309-L6310) · [Before (L6314-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6314-L6315)

```diff
-                 return (0, pZ.reportLoadReload)((0, TS.t)(Zr), Va.i[Zr], Sr), lp(`the wasm client ${rr?"ran out of memory to":"did not"} ${Zr} here (${Sr})`), null
-               }(0, pZ.showUnsupported)(rr ? "memory" : (0, TS.t)(Zr), Va.i[Zr], (0, gS.g)())
+                 return (0, NW.reportLoadReload)((0, UO.u)(Wd), DR.g[Wd], Od), SQ(`the wasm client ${dd?"ran out of memory to":"did not"} ${Wd} here (${Od})`), null
+               }(0, NW.showUnsupported)(dd ? "memory" : (0, UO.u)(Wd), DR.g[Wd], (0, GO.g)())
```

#### 692. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6317` → after: `L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6312) · [Before (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6317)

```diff
-               const rr = [nr.url().href, AS.i.url().href];
+               const dd = [pd.url().href, cO.e.url().href];
```

#### 693. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6328-L6329` → after: `L6323-L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6323-L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6323-L6324) · [Before (L6328-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6328-L6329)

```diff
-         }(0, MS.O)(nr.url()) && (0, pZ.reportUnstreamedCoreLoad)();
-         const qr = (0, gS.z)();
+         }(0, LO.P)(pd.url()) && (0, NW.reportUnstreamedCoreLoad)();
+         const Ad = (0, GO.A)();
```

#### 694. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6335` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6330) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6335)

```diff
-             wasm: qr.bx()
+             wasm: Ad.Zt()
```

#### 695. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6338-L6342` → after: `L6333-L6337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6333-L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6333-L6337) · [Before (L6338-L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6338-L6342)

```diff
-             Zz: rr
-           } = nr.bindings, Sr = rr.VZr();
-           if (Sr !== OQ.C) return Hr("core_other"), zx({
-             site: wQ.c,
-             error: `core ABI ${Sr}, page ABI ${OQ.C}`,
+             Fb: dd
+           } = pd.bindings, Od = dd.gFd();
+           if (Od !== Sm.x) return Vd("core_other"), bt({
+             site: Im.d,
+             error: `core ABI ${Od}, page ABI ${Sm.x}`,
```

#### 696. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6345` → after: `L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6340) · [Before (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6345)

```diff
-           const [Qr, Zr] = (0, OQ.He)();
+           const [md, Wd] = (0, Sm.re)();
```

#### 697. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6348-L6349` → after: `L6343-L6344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6343-L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6343-L6344) · [Before (L6348-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6348-L6349)

```diff
-           return Hr(`core_${Xr(Wr)}`), zx({
-             site: wQ.c,
+           return Vd(`core_${sd(Fd)}`), bt({
+             site: Im.d,
```

#### 698. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6355` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6350) · [Before (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6355)

```diff
-         const Cr = new wQ.g(Rr, gS.s, {
+         const nd = new Im.j(rd, GO.t, {
```

#### 699. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6358` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6353) · [Before (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6358)

```diff
-             null === (Sr = of) || void 0 === Sr || Sr.crashed(rr),
+             null === (Od = lh) || void 0 === Od || Od.crashed(dd),
```

#### 700. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6360` → after: `L6355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6355) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6360)

```diff
-                 if ("webgpu" !== Sr || (0, xa.d)()) return !1;
+                 if ("webgpu" !== Od || (0, qR.b)()) return !1;
```

#### 701. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6362-L6363` → after: `L6357-L6358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6357-L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6357-L6358) · [Before (L6362-L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6362-L6363)

```diff
-                   if (rr.site === wQ.f && (0, VQ.t)(rr.error)) return "frames_refused";
-                   return rr.site === Lj && (0, VQ.x)(rr.error) ? "start_failed" : null
+                   if (dd.site === Im.g && (0, Dm.t)(dd.error)) return "frames_refused";
+                   return dd.site === sX && (0, Dm.w)(dd.error) ? "start_failed" : null
```

#### 702. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6366-L6367` → after: `L6361-L6362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6361-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6361-L6362) · [Before (L6366-L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6366-L6367)

```diff
-                 if (null !== (0, VQ.gb)(Wr, Zr, (0, iQ.b)(rr.error))) return (0, pZ.countRenderLost)(Wr, rr.error, qf), !1;
-                 return WQ.A.reloaded(null, !1), (0, pZ.reportRenderReload)("webgpu", "start_failed" === Wr ? 0 : 1, Qr, {
+                 if (null !== (0, Dm.$)(Fd, Wd, (0, em.c)(dd.error))) return (0, NW.countRenderLost)(Fd, dd.error, rh), !1;
+                 return Xm.H.reloaded(null, !1), (0, NW.reportRenderReload)("webgpu", "start_failed" === Fd ? 0 : 1, md, {
```

#### 703. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6384-L6385` → after: `L6379-L6380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6379-L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6379-L6380) · [Before (L6384-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6384-L6385)

```diff
-               return Sr === OQ.J.RenderDeviceLost
-             })) && ((0, xa.s)(), (0, aQ.g)(), fE.deviceLost(), "webgpu" === Ur && ((0, iQ.d)(Rf), WQ.A.lost())), null === (Qr = of) || void 0 === Qr || Qr.coreErrors(rr);
+               return Od === Sm.F.RenderDeviceLost
+             })) && ((0, qR.w)(), (0, Km.d)(), vv.deviceLost(), "webgpu" === qd && ((0, em.g)(Gh), Xm.H.lost())), null === (md = lh) || void 0 === md || md.coreErrors(dd);
```

#### 704. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6389` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6384) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6389)

```diff
-                 return rr === OQ.J.EnvUnknownSky ? (0, pZ.unknownSkyWords)(FS.d.get("skyBox")) : rr === OQ.J.RenderDeviceLost ? (0, pZ.deviceLossWords)(Sr, qf.boundAtMs) : null === (Qr = Rf) || void 0 === Qr ? void 0 : Qr.wZr(rr, Sr)
+                 return dd === Sm.F.EnvUnknownSky ? (0, NW.unknownSkyWords)(lO.e.get("skyBox")) : dd === Sm.F.RenderDeviceLost ? (0, NW.deviceLossWords)(Od, rh.boundAtMs) : null === (md = Gh) || void 0 === md ? void 0 : md.wFd(dd, Od)
```

#### 705. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6396` → after: `L6391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6391) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6396)

```diff
-               return Sr === OQ.J.EnvUnknownSky
+               return Od === Sm.F.EnvUnknownSky
```

#### 706. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6402-L6409` → after: `L6397-L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6397-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6397-L6404) · [Before (L6402-L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6402-L6409)

```diff
-               if ((0, xa.d)()) return;
-               const Ir = Sr === OQ.fd.WEBGPU,
-                 fr = Zr === OQ.fd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 Er = Zr === OQ.fd.RESTORE_LOST,
-                 pr = Ir && (0, WQ.p)(qf.adapter, Qr, "lost" === fr, Er),
-                 mr = (0, iQ.j)(Rf);
-               null === (jr = of) || void 0 === jr || jr.reload(Ir, Qr, fr, null === mr || void 0 === mr ? void 0 : mr.message);
-               const Nr = Ir ? (0, VQ.gb)(fr, Wr, mr) : null;
+               if ((0, qR.b)()) return;
+               const Kd = Od === Sm._c.WEBGPU,
+                 hd = Wd === Sm._c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 vd = Wd === Sm._c.RESTORE_LOST,
+                 Qd = Kd && (0, Xm.k)(rh.adapter, md, "lost" === hd, vd),
+                 od = (0, em.k)(Gh);
+               null === (Xd = lh) || void 0 === Xd || Xd.reload(Kd, md, hd, null === od || void 0 === od ? void 0 : od.message);
+               const Nd = Kd ? (0, Dm.$)(hd, Fd, od) : null;
```

#### 707. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6412-L6413` → after: `L6407-L6408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6407-L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6407-L6408) · [Before (L6412-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6412-L6413)

```diff
-                 const Sr = void 0 === mr ? "" : ` (${mr.message})`;
-                 return void rr.crash(pZ.RENDER_RELOAD_SITE, new Error(`${(0,pZ.renderReloadMessage)("webgpu",fr,Qr)} and ${Nr}${Sr}`))
+                 const Od = void 0 === od ? "" : ` (${od.message})`;
+                 return void dd.crash(NW.RENDER_RELOAD_SITE, new Error(`${(0,NW.renderReloadMessage)("webgpu",hd,md)} and ${Nd}${Od}`))
```

#### 708. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6416` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6411) · [Before (L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6416)

```diff
-               "lost" === fr && (0, xa.s)();
+               "lost" === hd && (0, qR.w)();
```

#### 709. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6418` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6413) · [Before (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6418)

```diff
-                 if (xE.gaveUp(), !(0, iS.w)()) {
+                 if (ov.gaveUp(), !(0, DO.r)()) {
```

#### 710. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6420-L6421` → after: `L6415-L6416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6415-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6415-L6416) · [Before (L6420-L6421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6420-L6421)

```diff
-                   const Sr = void 0 === mr ? "" : ` (${mr.message})`;
-                   return void rr.crash(pZ.RENDER_RELOAD_SITE, new pZ.GraphicsLostError(`${(0,pZ.renderReloadMessage)(Ur,fr,Qr)} and ${iS.i}${Sr}`))
+                   const Od = void 0 === od ? "" : ` (${od.message})`;
+                   return void dd.crash(NW.RENDER_RELOAD_SITE, new NW.GraphicsLostError(`${(0,NW.renderReloadMessage)(qd,hd,md)} and ${DO.f}${Od}`))
```

#### 711. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6423` → after: `L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6418) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6423)

```diff
-                 console.warn(`${vj} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
+                 console.warn(`${BX} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6432-L6433` → after: `L6427-L6428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6427-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6427-L6428) · [Before (L6432-L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6432-L6433)

```diff
-               }), (0, xa.l)();
-               const tr = (0, xr.d)();
+               }), (0, qR.r)();
+               const Hd = (0, td.f)();
```

#### 713. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6439` → after: `L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6434) · [Before (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6439)

```diff
-               const nr = (0, xr.n)((() => {
+               const pd = (0, td.p)((() => {
```

#### 714. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6449` → after: `L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6444) · [Before (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6449)

```diff
-             rr.kind === OQ.$.SkyImages ? null === (Sr = XI) || void 0 === Sr || Sr.onEvent(rr.payload) : rr.kind === OQ.$.EnvLighting && (PI = 1 === rr.payload[0])
+             dd.kind === Sm.Z.SkyImages ? null === (Od = VK) || void 0 === Od || Od.onEvent(dd.payload) : dd.kind === Sm.Z.EnvLighting && (iK = 1 === dd.payload[0])
```

#### 715. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6471` → after: `L6466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6466) · [Before (L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6471)

```diff
-                   !1 !== Sr || rr.isStopped ? !0 === Sr && console.info(`${vj} terrain textures handed over again after the renderer lost them`) : console.warn(`${vj} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== Od || dd.isStopped ? !0 === Od && console.info(`${BX} terrain textures handed over again after the renderer lost them`) : console.warn(`${BX} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 716. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6483` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6478) · [Before (L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6483)

```diff
-               if (rr.forEachNetOut(Nx), Ex(rr), (0, wQ.S)(rr, {
+               if (dd.forEachNetOut(Nt), vt(dd), (0, Im.J)(dd, {
```

#### 717. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6494-L6495` → after: `L6489-L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6489-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6489-L6490) · [Before (L6494-L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6494-L6495)

```diff
-         if (SI = Cr, null === (jr = UQ.d.wasmNetReady) || void 0 === jr || jr.call(UQ.d, (() => Cr.isStopped ? 0 : Cr.netKeptFrames)), null !== rr) {
-           Cr.setAntiCheatProbes(zj(gS.s, rr.checks)), rr.watchHeld(nj.CoreFrame, (() => Cr.frame)), rr.watchHeld(nj.GlueFrame, (() => Rr.frame));
+         if (FK = nd, null === (Xd = bm.e.wasmNetReady) || void 0 === Xd || Xd.call(bm.e, (() => nd.isStopped ? 0 : nd.netKeptFrames)), null !== dd) {
+           nd.setAntiCheatProbes(YX(GO.t, dd.checks)), dd.watchHeld(wX.CoreFrame, (() => nd.frame)), dd.watchHeld(wX.GlueFrame, (() => rd.frame));
```

#### 718. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6499-L6501` → after: `L6494-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6494-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6494-L6496) · [Before (L6499-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6499-L6501)

```diff
-             Qr.lx(rr.lx());
-             const Wr = (0, XW.$)((() => {
-               Qr.lx(rr.lx())
+             md.Et(dd.Et());
+             const Fd = (0, VF.V)((() => {
+               md.Et(dd.Et())
```

#### 719. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6503` → after: `L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6498) · [Before (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6503)

```diff
-             let ar = 6 * (0, XW.U)() | 0;
+             let Rd = 6 * (0, VF.J)() | 0;
```

#### 720. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6507` → after: `L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6502) · [Before (L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6507)

```diff
-             (0, da.f)(jr);
+             (0, dX.j)(Xd);
```

#### 721. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6512` → after: `L6507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6507) · [Before (L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6512)

```diff
-             return (0, Da.l)(Ir), {
+             return (0, MR.h)(Kd), {
```

#### 722. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6519` → after: `L6514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6514) · [Before (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6519)

```diff
-                 Qr.value(OQ.j.ProbeUsedProp, rr.usedProp()), 0 !== Zr && Qr.setFlags(Zr)
+                 md.value(Sm.f.ProbeUsedProp, dd.usedProp()), 0 !== Wd && md.setFlags(Wd)
```

#### 723. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6522` → after: `L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6517) · [Before (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6522)

```diff
-                 (0, XW.cb)(Wr), (0, da.c)(jr), (0, Da.h)(Ir)
+                 (0, VF.X)(Fd), (0, dX.f)(Xd), (0, MR.f)(Kd)
```

#### 724. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6528` → after: `L6523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6523) · [Before (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6528)

```diff
-               Zr = Cr.rings.input.writeRecord(OQ.xb.AntiCheat, rr, Sr, Qr, 0)
+               Wd = nd.rings.input.writeRecord(Sm.vb.AntiCheat, dd, Od, md, 0)
```

#### 725. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6533` → after: `L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6528) · [Before (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6533)

```diff
-         oj = (rr, Sr, Qr) => Cr.rings.cmd.writeCmd(rr, Sr, Qr), bj = rr => Cr.rings.cmd.growForCmd(rr), dI = !1, Hp(), (0, cr.o)(Cr, {
+         ZX = (dd, Od, md) => nd.rings.cmd.writeCmd(dd, Od, md), kX = dd => nd.rings.cmd.growForCmd(dd), dh = !1, VQ(), (0, Id.x)(nd, {
```

#### 726. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6535` → after: `L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6530) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6535)

```diff
-           memory: gS.s,
+           memory: GO.t,
```

#### 727. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6547` → after: `L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6542) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6547)

```diff
-           options: FS.d,
+           options: lO.e,
```

#### 728. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6560` → after: `L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6555) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6560)

```diff
-             return null !== (null !== (Sr = null === (Qr = qp()) || void 0 === Qr ? void 0 : Qr.modelUrl(rr)) && void 0 !== Sr ? Sr : null)
+             return null !== (null !== (Od = null === (md = iQ()) || void 0 === md ? void 0 : md.modelUrl(dd)) && void 0 !== Od ? Od : null)
```

#### 729. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6564` → after: `L6559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6559) · [Before (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6564)

```diff
-         }), (0, wr.K)({
+         }), (0, ed.M)({
```

#### 730. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6575` → after: `L6570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6570) · [Before (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6575)

```diff
-             (0, BS.d)()
+             (0, JO.e)()
```

#### 731. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6581` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6576) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6581)

```diff
-         }), vI = (0, wr.z)((() => {
+         }), BK = (0, ed.A)((() => {
```

#### 732. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6583-L6584` → after: `L6578-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6578-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6578-L6579) · [Before (L6583-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6583-L6584)

```diff
-           const Sr = (0, cr.f)();
-           null === (rr = (0, cr.l)()) || void 0 === rr || rr.followCursorAim(!0 === (null === Sr || void 0 === Sr ? void 0 : Sr.isSessionLive) ? Sr : null)
+           const Od = (0, Id.l)();
+           null === (dd = (0, Id.u)()) || void 0 === dd || dd.followCursorAim(!0 === (null === Od || void 0 === Od ? void 0 : Od.isSessionLive) ? Od : null)
```

#### 733. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6590-L6593` → after: `L6585-L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6585-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6585-L6588) · [Before (L6590-L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6590-L6593)

```diff
-         const Gr = (0, jZ.l)(),
-           kr = (0, jZ.f)(Cr, Gr);
-         yI = Gr.basis, (0, KZ.h)((0, tZ.b)(null === kr ? null : (0, aZ.p)(kr), (0, tZ.f)())), KI = kr;
-         const Ar = (0, GS.d)();
+         const Pd = (0, vW.j)(),
+           zd = (0, vW.e)(nd, Pd);
+         JK = Pd.basis, (0, EW.l)((0, TW.d)(null === zd ? null : (0, hW.q)(zd), (0, TW.g)())), EK = zd;
+         const cd = (0, PO.e)();
```

#### 734. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6597-L6598` → after: `L6592-L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6592-L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6592-L6593) · [Before (L6597-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6597-L6598)

```diff
-         const or = new iW.d(Ar, (() => Rr.zz()), (rr => {
-           Cr.crash(wQ.q, rr)
+         const Cd = new eF.d(cd, (() => rd.pb()), (dd => {
+           nd.crash(Im.p, dd)
```

#### 735. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6600` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6595) · [Before (L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6600)

```diff
-         nI = or, eI = or, null !== kr && or.setCeiling(Math.min((0, iW.q)(kr), Vr, (0, jZ.o)()));
+         wK = Cd, aK = Cd, null !== zd && Cd.setCeiling(Math.min((0, eF.p)(zd), jd, (0, vW.l)()));
```

#### 736. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6604` → after: `L6599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6599) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6604)

```diff
-             return null !== Sr && (null === KI || Sr < KI) && (KI = Sr, (0, KZ.h)((0, tZ.b)((0, aZ.p)(Sr), (0, tZ.f)()))), Sr
+             return null !== Od && (null === EK || Od < EK) && (EK = Od, (0, EW.l)((0, TW.d)((0, hW.q)(Od), (0, TW.g)()))), Od
```

#### 737. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6606` → after: `L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6601) · [Before (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6606)

```diff
-             1 === Sr ? (0, pZ.reportMemoryShed)(rr, Qr, jI) : console.warn(`${vj} wasm memory: shed again (${rr}): shed ${Sr}`, Qr.wasmMemoryShed)
+             1 === Od ? (0, NW.reportMemoryShed)(dd, md, vK) : console.warn(`${BX} wasm memory: shed again (${dd}): shed ${Od}`, md.wasmMemoryShed)
```

#### 738. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6608` → after: `L6603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6603) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6608)

```diff
-           const rr = (0, VQ.T)(qr);
+           const dd = (0, Dm.S)(Ad);
```

#### 739. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6610` → after: `L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6605) · [Before (L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6610)

```diff
-             storedChunks: () => Rr.FZr(),
+             storedChunks: () => rd.aFd(),
```

#### 740. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6613` → after: `L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6608) · [Before (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6613)

```diff
-               return null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.bZr()) && void 0 !== Sr ? Sr : 0
+               return null !== (Od = null === dd || void 0 === dd ? void 0 : dd.EFd()) && void 0 !== Od ? Od : 0
```

#### 741. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6616` → after: `L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6611) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6616)

```diff
-           })), (0, eZ.i)("wasm", or, (() => {
+           })), (0, aW.j)("wasm", Cd, (() => {
```

#### 742. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6623` → after: `L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6618) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6623)

```diff
-         const [br, Jr] = (0, NZ.g)();
+         const [Zd, kd] = (0, yW.d)();
```

#### 743. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6625` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6620) · [Before (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6625)

```diff
-           const Sr = (0, tZ.p)(rr, (0, tZ.f)());
+           const Od = (0, TW.k)(dd, (0, TW.g)());
```

#### 744. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6630-L6633` → after: `L6625-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6625-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6625-L6628) · [Before (L6630-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6630-L6633)

```diff
-         }), Cr.setAmbientOcclusion(!0 !== xQ.j.getItem("disableAmbientOcclusion")), Cr.setPoseLod(!0 !== xQ.j.getItem(RS.S)), Cr.setDebugLog(OQ.O.Look, !0), Cr.setDebugLog(OQ.O.CameraSet, !0), (0, ga.startLookDebug)("wasm", {
-           look: () => Cr.takeDebugLog(OQ.O.Look),
-           cameraSets: () => Cr.takeDebugLog(OQ.O.CameraSet)
-         }), (0, qa.p)("remesh") && (Cr.setDebugLog(OQ.O.Remesh, !0), Dr = () => Cr.takeDebugLog(OQ.O.Remesh), Aa = new ka((0, Ca.k)(), Dr));
+         }), nd.setAmbientOcclusion(!0 !== qm.k.getItem("disableAmbientOcclusion")), nd.setPoseLod(!0 !== qm.k.getItem(rO.N)), nd.setDebugLog(Sm.L.Look, !0), nd.setDebugLog(Sm.L.CameraSet, !0), (0, nR.startLookDebug)("wasm", {
+           look: () => nd.takeDebugLog(Sm.L.Look),
+           cameraSets: () => nd.takeDebugLog(Sm.L.CameraSet)
+         }), (0, rR.o)("remesh") && (nd.setDebugLog(Sm.L.Remesh, !0), fd = () => nd.takeDebugLog(Sm.L.Remesh), jR = new cR((0, LR.n)(), fd));
```

#### 745. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6637-L6639` → after: `L6632-L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6632-L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6632-L6634) · [Before (L6637-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6637-L6639)

```diff
-             ar = rr => xQ.j.getItem(rr);
-           Wr.sync(ar, Sr), (0, IQ.S)();
-           const jr = (0, fr.j)("customBindingsChanged", (() => {
+             Rd = dd => qm.k.getItem(dd);
+           Fd.sync(Rd, Od), (0, Qm.V)();
+           const Xd = (0, hd.l)("customBindingsChanged", (() => {
```

#### 746. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6642` → after: `L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6637) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6642)

```diff
-           (0, vZ.o)(Sr);
+           (0, BW.j)(Od);
```

#### 747. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6644` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6639) · [Before (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6644)

```diff
-             Er = (0, wr.z)((() => {
+             vd = (0, ed.A)((() => {
```

#### 748. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6646` → after: `L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6641) · [Before (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6646)

```diff
-               Ir.size > 0 && jW() && !0 === (null === (rr = (0, cr.f)()) || void 0 === rr ? void 0 : rr.localPlayerAlive()) && fr.i.Jp("usedKeyboard")
+               Kd.size > 0 && vF() && !0 === (null === (dd = (0, Id.l)()) || void 0 === dd ? void 0 : dd.localPlayerAlive()) && hd.j.lQ("usedKeyboard")
```

#### 749. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6648` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6643) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6648)

```diff
-             pr = oZ.d.heldSizer((() => (0, tQ.q)(rr))),
+             Qd = ZW.d.heldSizer((() => (0, Tm.n)(dd))),
```

#### 750. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6652` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6647) · [Before (L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6652)

```diff
-                 Wr.moves(rr) && (Ir.add(rr), jW() && fr.i.Jp("usedKeyboard"))
+                 Fd.moves(dd) && (Kd.add(dd), vF() && hd.j.lQ("usedKeyboard"))
```

#### 751. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6661` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6656) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6661)

```diff
-                 WW.e.measure(rr.getBoundingClientRect()), (0, bZ.k)()
+                 KF.k.measure(dd.getBoundingClientRect()), (0, kW.k)()
```

#### 752. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6665` → after: `L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6660) · [Before (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6665)

```diff
-                 const Qr = (0, tQ.s)(rr, Sr),
+                 const md = (0, Tm.o)(dd, Od),
```

#### 753. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6674` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6669) · [Before (L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6674)

```diff
-                 WW.e.measure(rr.getBoundingClientRect())
+                 KF.k.measure(dd.getBoundingClientRect())
```

#### 754. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6677` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6672) · [Before (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6677)

```diff
-               touchUiShown: () => mS.c.get("isTouchScreen"),
+               touchUiShown: () => qO.e.get("isTouchScreen"),
```

#### 755. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6686` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6681) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6686)

```diff
-             jr(), Er(), (0, vZ.o)(null), mr(), xr()
+             Xd(), vd(), (0, BW.j)(null), od(), td()
```

#### 756. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6691` → after: `L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6686) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6691)

```diff
-           })), !bI && (0, xW.e)(rr, Wr) && (0, xW.d)((() => {
+           })), !kK && (0, qF.f)(dd, Fd) && (0, qF.c)((() => {
```

#### 757. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6702-L6703` → after: `L6697-L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6697-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6697-L6698) · [Before (L6702-L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6702-L6703)

```diff
-         (0, gS.Y)((() => {
-           "call" === (0, gS.l)() && Cr.crash(wQ.B, (0, gS.k)())
+         (0, GO.W)((() => {
+           "call" === (0, GO.m)() && nd.crash(Im.u, (0, GO.k)())
```

#### 758. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6705` → after: `L6700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6700) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6705)

```diff
-         const ur = (0, wQ.W)(Cr.rings.worker, (() => {
+         const OO = (0, Im.N)(nd.rings.worker, (() => {
```

#### 759. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6715` → after: `L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6710) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6715)

```diff
-             module: (0, gS.u)(),
+             module: (0, GO.w)(),
```

#### 760. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6717` → after: `L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6712) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6717)

```diff
-               const Sr = (0, cr.l)();
+               const Od = (0, Id.u)();
```

#### 761. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6736` → after: `L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6731) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6736)

```diff
-                 if (!Zr || Sr) return void Qr.jx(Zr);
+                 if (!Wd || Od) return void md.Wt(Wd);
```

#### 762. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6738` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/wasmPlay.js#L6733) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/wasmPlay.js#L6738)

```diff
-                   Qr.jx(!0)
+                   md.Wt(!0)
```
