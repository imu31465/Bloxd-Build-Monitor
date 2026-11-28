# Changed — Bundle Modifications Report (Part 144 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `144 / 154` (**412** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 143](part-143.md) · [Part 145 →](part-145.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e)

#### 10. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L290)

```diff
-       } = md, Xd = () => (0, vd.i)(Od.endpoint, Od.roomName, Od.joinOptions, md), {
+       } = Mb, Vb = () => (0, Lb.g)(wb.endpoint, wb.roomName, wb.joinOptions, Mb), {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L292-L293` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L292-L293) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L292-L293)

```diff
-       } = md, hd = Kd ? null !== (Wd = await Kd.take(Rd)) && void 0 !== Wd ? Wd : await Kd.reserveInstead(Xd, Rd) : await Xd();
-       return (0, Fd.p)(Rd), yd(dd, Od.endpoint, hd, md, !1)
+       } = Mb, lb = gb ? null !== (eb = await gb.take(pb)) && void 0 !== eb ? eb : await gb.reserveInstead(Vb, pb) : await Vb();
+       return (0, Hb.r)(pb), Fb(bb, wb.endpoint, lb, Mb, !1)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L298)

```diff
-       return (0, Fd.p)(Rd.signal), yd(dd, Od, Xd, Rd, !0)
+       return (0, Hb.r)(pb.signal), Fb(bb, wb, Vb, pb, !0)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L302)

```diff
-       const Wd = (0, vd.j)(dd, Od);
+       const eb = (0, Lb.i)(bb, wb);
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L309)

```diff
-       return (null !== (Wd = dd.setTimer) && void 0 !== Wd ? Wd : (dd, Od) => {
+       return (null !== (eb = bb.setTimer) && void 0 !== eb ? eb : (bb, wb) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L329)

```diff
-         pd = !0, null === (Od = yd) || void 0 === Od || Od.reject(new hd.e("the room socket closed before the resume", "closed", dd.code))
+         mb = !0, null === (wb = Fb) || void 0 === wb || wb.reject(new lb.b("the room socket closed before the resume", "closed", bb.code))
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L334-L336` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L334-L336) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L334-L336)

```diff
-           if (dd === (Xd ? Kd.C.Resumed : Kd.C.Activated)) Td = !0, null === (md = yd) || void 0 === md || md.resolve();
-           else if (!Xd || dd !== Kd.C.ResumeRefused && dd !== Kd.C.Activated)
-             if (dd === Kd.C.Error) {
+           if (bb === (Vb ? gb.B.Resumed : gb.B.Activated)) sb = !0, null === (Mb = Fb) || void 0 === Mb || Mb.resolve();
+           else if (!Vb || bb !== gb.B.ResumeRefused && bb !== gb.B.Activated)
+             if (bb === gb.B.Error) {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L338)

```diff
-               null === (Wd = yd) || void 0 === Wd || Wd.reject(new hd.e(`the room refused the join (code ${Od})`, "roomError", Od))
+               null === (eb = Fb) || void 0 === eb || eb.reject(new lb.b(`the room refused the join (code ${wb})`, "roomError", wb))
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L341)

```diff
-               null === (Fd = yd) || void 0 === Fd || Fd.reject(new hd.e("the room socket closed before the join", "closed", Od, null, od))
+               null === (Hb = Fb) || void 0 === Hb || Hb.reject(new lb.b("the room socket closed before the join", "closed", wb, null, Ub))
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L345)

```diff
-             null === (Rd = yd) || void 0 === Rd || Rd.reject(new hd.o("the core refused the resume: it held no game"))
+             null === (pb = Fb) || void 0 === pb || pb.reject(new lb.n("the core refused the resume: it held no game"))
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L352)

```diff
-       if (null === Ed) throw wd(), new hd.e("the core could not take the room socket", "attach");
+       if (null === xb) throw Xb(), new lb.b("the core could not take the room socket", "attach");
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L355)

```diff
-       const Ud = Xd ? null : new Rd.e((() => {
+       const Kb = Vb ? null : new pb.b((() => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L357)

```diff
-         null === (Od = dd.flushNet) || void 0 === Od || Od.call(dd), null === (md = yd) || void 0 === md || md.reject(new Rd.i(od ? "socket" : "socket_unopened"))
+         null === (wb = bb.flushNet) || void 0 === wb || wb.call(bb), null === (Mb = Fb) || void 0 === Mb || Mb.reject(new pb.e(Ub ? "socket" : "socket_unopened"))
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L367-L368)

```diff
-         if (xd = !0, wd(), Xd && (td.removeEventListener("close", Yd), !Td && !(null !== vd && void 0 !== vd && vd.aborted && (0, Fd.e)(vd) instanceof hd.p))) return void(pd || dd.closeSocket(Ed));
-         Td && dd.leaveRoom(Ed) || dd.sendRaw(Ed, hd.m) ? Hd(Wd, (() => {
+         if (rb = !0, Xb(), Vb && (Ob.removeEventListener("close", hb), !sb && !(null !== Lb && void 0 !== Lb && Lb.aborted && (0, Hb.h)(Lb) instanceof lb.q))) return void(mb || bb.closeSocket(xb));
+         sb && bb.leaveRoom(xb) || bb.sendRaw(xb, lb.g) ? Eb(eb, (() => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L370)

```diff
-         }), hd.h) : dd.closeSocket(Ed)
+         }), lb.d) : bb.closeSocket(xb)
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L377)

```diff
-             md((0, Fd.e)(vd))
+             Mb((0, Hb.h)(Lb))
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L414)

```diff
-           }), hd.h);
+           }), lb.d);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5eR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-b3f15f6b184e5bb7dbf0f16e9a54644e1e80cf95c24522b2ff50521505271e5e) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientJoin.js#L416)

```diff
-             Fd.send(hd.m)
+             Hb.send(lb.g)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L4)

```diff
-   37991: (dd, Od, md) => {
+   37685: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L9)

```diff
-       if (!Od.ok) throw new Error(`Fetching ${dd} failed: HTTP ${Od.status}`);
+       if (!wb.ok) throw new Error(`Fetching ${bb} failed: HTTP ${wb.status}`);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L14)

```diff
-       c: () => Wd
+       b: () => eb
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L17)

```diff
-   42638: (dd, Od, md) => {
+   42346: (bb, wb, Mb) => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L24-L33` → after: `L24-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L24-L33) · [Before (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L24-L33)

```diff
-     var Wd = md(2421),
-       Fd = md(37688),
-       Rd = md(42640),
-       Xd = md(1368),
-       Kd = md(42658),
-       hd = (md(42685), md(37991)),
-       vd = md(2330),
-       Qd = md(42693),
-       td = md(42811),
-       od = md(37851);
+     var eb = Mb(2463),
+       Hb = Mb(37435),
+       pb = Mb(42353),
+       Vb = Mb(1400),
+       gb = Mb(42375),
+       lb = (Mb(42406), Mb(37685)),
+       Lb = Mb(2372),
+       Ib = Mb(42422),
+       Ob = Mb(42528),
+       Ub = Mb(37544);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L46-L47)

```diff
-         if ((0, Kd.p)(dd)) return (0, Qd.O)("none"), void Yd("none");
-         (0, Qd.O)(dd.backend);
+         if ((0, gb.q)(bb)) return (0, Ib.N)("none"), void hb("none");
+         (0, Ib.N)(bb.backend);
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L50-L51)

```diff
-         const md = "unloaded" === (0, Wd.y)();
-         if (md && (0, Qd.n)(), !await (0, td.d)(Od)) return void console.warn(`${Nd} the join's early wasm load failed: the boot loads the client itself`);
+         const Mb = "unloaded" === (0, eb.v)();
+         if (Mb && (0, Ib.m)(), !await (0, Ob.c)(wb)) return void console.warn(`${tb} the join's early wasm load failed: the boot loads the client itself`);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L53)

```diff
-         const Rd = (0, Fd.j)(Od.name);
+         const pb = (0, Hb.m)(wb.name);
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L59)

```diff
-         }) : console.warn(`${Nd} the join's wasm load left no record of how it compiled ${Od.name}`)
+         }) : console.warn(`${tb} the join's wasm load left no record of how it compiled ${wb.name}`)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L61)

```diff
-         console.warn(`${Nd} the join's early wasm load did not start: the boot loads the client itself`, dd)
+         console.warn(`${tb} the join's early wasm load did not start: the boot loads the client itself`, bb)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L78)

```diff
-         const md = null !== (Od = dd.joinStarted) && void 0 !== Od ? Od : () => !1;
+         const Mb = null !== (wb = bb.joinStarted) && void 0 !== wb ? wb : () => !1;
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L87-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L87-L88) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L87-L88)

```diff
-         const Od = await (0, Qd.h)();
-         null === Od || dd() || "unloaded" !== (0, Wd.y)() || (Td = Od.name, await (0, Fd.b)([Od, Rd.e], "low"))
+         const wb = await (0, Ib.i)();
+         null === wb || bb() || "unloaded" !== (0, eb.v)() || (sb = wb.name, await (0, Hb.d)([wb, pb.h], "low"))
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L90)

```diff
-         console.warn(`${Nd} the compile ahead of the join did not start: the join loads the client itself`, dd)
+         console.warn(`${tb} the compile ahead of the join did not start: the join loads the client itself`, bb)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L105-L106)

```diff
-               const dd = await fetch((0, vd.d)("static/js/yteou.wasmJoinFiles.json"), {
-                 ...vd.b,
+               const bb = await fetch((0, Lb.e)("static/js/welxxc.wasmJoinFiles.json"), {
+                 ...Lb.d,
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L109)

```diff
-               if (dd.ok && /\bno-store\b/.test(null !== (md = dd.headers.get("Cache-Control")) && void 0 !== md ? md : "")) return !1;
+               if (bb.ok && /\bno-store\b/.test(null !== (Mb = bb.headers.get("Cache-Control")) && void 0 !== Mb ? Mb : "")) return !1;
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L112)

```diff
-               return console.warn(`${Nd} the join's chunk list did not load: the join downloads its chunks itself`, Fd), !dd()
+               return console.warn(`${tb} the join's chunk list did not load: the join downloads its chunks itself`, Hb), !bb()
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L117-L119` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L117-L119) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L117-L119)

```diff
-               const dd = (0, vd.d)(Rd);
-               Wd ? Jd(dd) : (0, hd.c)(dd).catch((Od => {
-                 console.warn(`${Nd} prefetching ${dd} failed`, Od)
+               const bb = (0, Lb.e)(pb);
+               eb ? jb(bb) : (0, lb.b)(bb).catch((wb => {
+                 console.warn(`${tb} prefetching ${bb} failed`, wb)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L124-L125)

```diff
-         const md = [(0, hd.c)((0, od.d)())];
-         (0, od.b)(Od) && md.push((0, hd.c)((0, od.f)()));
+         const Mb = [(0, lb.b)((0, Ub.e)())];
+         (0, Ub.b)(wb) && Mb.push((0, lb.b)((0, Ub.f)()));
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cddcec2bafa41ebefc5f5115cc36b99608f22ed7e81b8282d2c0c351a930a933) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientLoad.js#L128)

```diff
-         console.warn(`${Nd} the prefetch failed: the join downloads the client itself`, dd)
+         console.warn(`${tb} the prefetch failed: the join downloads the client itself`, bb)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (143 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L4)

```diff
-   40756: (dd, Od, md) => {
+   40504: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L14)

```diff
-           Mt: Od.Mt,
+           qO: wb.qO,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L35)

```diff
-   40721: (dd, Od, md) => {
+   40463: (bb, wb, Mb) => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L40)

```diff
-       k: () => Xd
+       l: () => Vb
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L42)

```diff
-     var Wd = md(231);
+     var eb = Mb(236);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L51)

```diff
-       return null !== (Od = (0, Wd.b)(Xd, dd)) && void 0 !== Od ? Od : null
+       return null !== (wb = (0, eb.c)(Vb, bb)) && void 0 !== wb ? wb : null
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L56)

```diff
-       return null !== (Od = (0, Wd.b)(Kd, dd)) && void 0 !== Od ? Od : null
+       return null !== (wb = (0, eb.c)(gb, bb)) && void 0 !== wb ? wb : null
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L59)

```diff
-   40230: (dd, Od, md) => {
+   39927: (bb, wb, Mb) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L61-L62` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L61-L62) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L61-L62)

```diff
-       d: () => Fd,
-       h: () => Rd
+       c: () => Hb,
+       d: () => pb
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L72)

```diff
-       return null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : null
+       return null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : null
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L75)

```diff
-   43152: (dd, Od, md) => {
+   42862: (bb, wb, Mb) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L95)

```diff
-       b: () => Wd
+       e: () => eb
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L98)

```diff
-   37713: (dd, Od, md) => {
+   37449: (bb, wb, Mb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L100)

```diff
-       c: () => Rd
+       b: () => pb
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L106)

```diff
-       let [Rd, Xd] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [dd, Od], Kd = Math.min(Number.isFinite(md) && md > 0 ? md : 1, Fd);
+       let [pb, Vb] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, wb], gb = Math.min(Number.isFinite(Mb) && Mb > 0 ? Mb : 1, Hb);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L111)

```diff
-   35566: (dd, Od, md) => {
+   35358: (bb, wb, Mb) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L113-L114)

```diff
-       d: () => Wd,
-       g: () => Qd
+       b: () => eb,
+       f: () => Ib
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L161)

```diff
-           const Wd = Od.deltaY * (Od.deltaMode === WheelEvent.DOM_DELTA_LINE ? hd : Od.deltaMode === WheelEvent.DOM_DELTA_PAGE ? vd : 1),
+           const eb = wb.deltaY * (wb.deltaMode === WheelEvent.DOM_DELTA_LINE ? lb : wb.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Lb : 1),
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L175)

```diff
-   45347: (dd, Od, md) => {
+   45163: (bb, wb, Mb) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L182-L183)

```diff
-     var Wd = md(2425),
-       Fd = md(708);
+     var eb = Mb(2471),
+       Hb = Mb(667);
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L189)

```diff
-         client: String(Fd.c)
+         client: String(Hb.e)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L193)

```diff
-         Od.wasm = null !== (md = null === dd || void 0 === dd ? void 0 : dd.Zt()) && void 0 !== md ? md : Od.wasm
+         wb.wasm = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.vO()) && void 0 !== Mb ? Mb : wb.wasm
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L202)

```diff
-         } = await Promise.resolve().then((() => md(3914)));
+         } = await Promise.resolve().then((() => Mb(4071)));
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L210)

```diff
-       Promise.resolve().then((() => md(42709))).then((md => {
+       Promise.resolve().then((() => Mb(42434))).then((Mb => {
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L216)

```diff
-         console.warn(`${Rd} ${dd} didn't load, and the report couldn't be sent`, Wd.error, Od)
+         console.warn(`${pb} ${bb} didn't load, and the report couldn't be sent`, eb.error, wb)
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L256)

```diff
-             const md = dd.xFd(Od);
+             const Mb = bb.DHb(wb);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L275)

```diff
-         fetch: async () => Kd(await (0, Wd.J)(Nd(), {
+         fetch: async () => gb(await (0, eb.C)(tb(), {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L288)

```diff
-       return md(45350)
+       return Mb(45171)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L290-L315` → after: `L290-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L290-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L290-L315) · [Before (L290-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L290-L315)

```diff
-     var qd = md(2421),
-       Hd = md(1253),
-       yd = md(382),
-       bd = md(373),
-       Td = md(732),
-       pd = md(5568),
-       Yd = md(42658),
-       gd = md(42677),
-       wd = md(42923),
-       Ed = (md(42685), md(37709)),
-       Jd = md(42772),
-       Ud = md(42779),
-       xd = md(42788),
-       Bd = md(42663),
-       Sd = md(42938),
-       sd = md(42946),
- ... (10 more removed lines; see GitHub link above)
+     var Cb = Mb(2463),
+       Eb = Mb(1271),
+       Fb = Mb(364),
+       Bb = Mb(361),
+       sb = Mb(698),
+       mb = Mb(5678),
+       hb = Mb(42375),
+       zb = Mb(42401),
+       Xb = Mb(42622),
+       xb = (Mb(42406), Mb(37446)),
+       jb = Mb(42493),
+       Kb = Mb(42502),
+       rb = Mb(42509),
+       Rb = Mb(42387),
+       Db = Mb(42635),
+       cb = Mb(42640),
+ ... (10 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L330-L332` → after: `L330-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L330-L332) · [Before (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L330-L332)

```diff
-         md = (0, Yd.S)(dd),
-         Wd = (0, Yd.l)(dd);
-       return null !== md && null !== Wd && "function" === typeof Od.BFd && "function" === typeof Od.SFd && "function" === typeof Od.sFd && "function" === typeof Od.qV ? Od : null
+         Mb = (0, hb.O)(bb),
+         eb = (0, hb.m)(bb);
+       return null !== Mb && null !== eb && "function" === typeof wb.cHb && "function" === typeof wb.YHb && "function" === typeof wb.ZHb && "function" === typeof wb.bJ ? wb : null
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L336)

```diff
-       return md(45358)
+       return Mb(45179)
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L341)

```diff
-       "lost" === dd && (0, ud.w)();
+       "lost" === bb && (0, Yb.v)();
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L343)

```diff
-       if (null === Kd || (0, Yd.p)(Kd) || (0, ud.b)()) return;
+       if (null === gb || (0, hb.q)(gb) || (0, Yb.e)()) return;
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L346-L348` → after: `L346-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L346-L348) · [Before (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L346-L348)

```diff
-       const vd = hd && (0, bd.k)(Kd.adapter, null !== Wd && void 0 !== Wd ? Wd : null, "lost" === dd, Rd),
-         Qd = null !== (Fd = "lost" === dd ? (0, gd.k)((0, qd.P)() ? (0, Yd.S)((0, qd.A)()) : null) : void 0) && void 0 !== Fd ? Fd : Od,
-         td = hd ? (0, Yd.$)(dd, void 0, (0, gd.c)(Qd)) : (0, Td.r)() ? null : Td.f;
+       const Lb = lb && (0, Bb.o)(gb.adapter, null !== eb && void 0 !== eb ? eb : null, "lost" === bb, pb),
+         Ib = null !== (Hb = "lost" === bb ? (0, zb.l)((0, Cb.H)() ? (0, hb.O)((0, Cb.w)()) : null) : void 0) && void 0 !== Hb ? Hb : wb,
+         Ob = lb ? (0, hb.db)(bb, void 0, (0, zb.d)(Ib)) : (0, sb.u)() ? null : sb.f;
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L350)

```diff
-         (0, ud.r)();
+         (0, Yb.q)();
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L357)

```diff
-             const vd = (0, qd.P)(),
+             const Lb = (0, Cb.H)(),
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L361-L362)

```diff
-               } = await Promise.resolve().then((() => md(42709)));
-             td(dd.backend, Fd, Xd(vd ? (0, qd.A)() : null), {
+               } = await Promise.resolve().then((() => Mb(42434)));
+             Ob(bb.backend, Hb, Vb(Lb ? (0, Cb.w)() : null), {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L369)

```diff
-           }(Kd, dd, Qd, null !== Wd && void 0 !== Wd ? Wd : "start_failed" === dd ? 0 : 1, {
+           }(gb, bb, Ib, null !== eb && void 0 !== eb ? eb : "start_failed" === bb ? 0 : 1, {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L374-L375` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L374-L375) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L374-L375)

```diff
-           console.warn(`${jd} ${Kd.backend} failed at home (${dd}), and its report couldn't be sent`, Nd)
-         }(0, Ad.k)()
+           console.warn(`${Gb} ${gb.backend} failed at home (${bb}), and its report couldn't be sent`, tb)
+         }(0, fb.g)()
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L379-L380` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L379-L380) · [Before (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L379-L380)

```diff
-           Wd = `${hd?"WebGPU":"WebGL"} failed at home (${dd}${void 0===Od.error?"":`: ${Od.error instanceof Error?Od.error.message:(0,Pd.h)(Od.error)}`}) and ${td}`;
-         console.warn(`${jd} ${Wd}: the previews stop`, null !== (od = Od.error) && void 0 !== od ? od : ""), (0, ud.s)({
+           eb = `${lb?"WebGPU":"WebGL"} failed at home (${bb}${void 0===wb.error?"":`: ${wb.error instanceof Error?wb.error.message:(0,Nb.j)(wb.error)}`}) and ${Ob}`;
+         console.warn(`${Gb} ${eb}: the previews stop`, null !== (Ub = wb.error) && void 0 !== Ub ? Ub : ""), (0, Yb.r)({
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L387)

```diff
-           } = await Promise.resolve().then((() => md(42709)));
+           } = await Promise.resolve().then((() => Mb(42434)));
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L390)

```diff
-           console.warn(`${jd} ${Kd.backend} failed at home (${dd}), and its count couldn't be sent`, Hd)
+           console.warn(`${Gb} ${gb.backend} failed at home (${bb}), and its count couldn't be sent`, Eb)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L403-L404)

```diff
-           boundAtMs: "start_failed" === Od ? null : (0, ud.H)(),
-           indirectHangs: (0, ud.z)(),
+           boundAtMs: "start_failed" === wb ? null : (0, Yb.G)(),
+           indirectHangs: (0, Yb.x)(),
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L410)

```diff
-       if (!(0, qd.P)()) {
+       if (!(0, Cb.H)()) {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L415)

```diff
-         if (null === Od || (0, Yd.p)(Od)) return null;
+         if (null === wb || (0, hb.q)(wb)) return null;
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L419)

```diff
-           })), await (0, Vd.d)(md), !(0, qd.P)()) return null
+           })), await (0, Zb.c)(Mb), !(0, Cb.H)()) return null
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L421)

```diff
-       return OO((0, qd.A)())
+       return kb((0, Cb.w)())
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L430)

```diff
-               return null !== (Od = this.models.drawnUrl(dd)) && void 0 !== Od ? Od : Rd.images.glbUrl(dd)
+               return null !== (wb = this.models.drawnUrl(bb)) && void 0 !== wb ? wb : pb.images.glbUrl(bb)
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L434-L435)

```diff
-         this.images = new wd.e(Xd, (dd => {
-           console.warn(`${jd} image ${dd.key.kind}:${dd.key.index}:${dd.key.word} failed`, dd.error)
+         this.images = new Xb.g(Vb, (bb => {
+           console.warn(`${Gb} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L439-L440)

```diff
-         }), dd.startModels(), this.models = new Jd.h(Rd.files, ((Od, md) => dd.buildModel(Od, md)), (dd => {
-           console.warn(`${jd} model file ${dd.file} (${dd.url}) failed`, dd.error)
+         }), bb.startModels(), this.models = new jb.i(pb.files, ((wb, Mb) => bb.buildModel(wb, Mb)), (bb => {
+           console.warn(`${Gb} model file ${bb.file} (${bb.url}) failed`, bb.error)
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L452)

```diff
-             const dd = new DataView(md.buffer, md.byteOffset, xd.d),
+             const bb = new DataView(Mb.buffer, Mb.byteOffset, rb.b),
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L454-L455` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L454-L455) · [Before (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L454-L455)

```diff
-               Fd = dd.getUint32(xd.h, !0),
-               Rd = this.page.hostCall(dO, (() => this.host.uFd(this.id, Wd, Od, md.subarray(xd.d))));
+               Hb = bb.getUint32(rb.f, !0),
+               pb = this.page.hostCall(Tb, (() => this.host.fHb(this.id, eb, wb, Mb.subarray(rb.b))));
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L458-L459` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L458-L459) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L458-L459)

```diff
-           return dd === wd.b && (this.page.hostCall(void 0, (() => {
-             this.host.VFd(this.id, md)
+           return bb === Xb.d && (this.page.hostCall(void 0, (() => {
+             this.host.AHb(this.id, Mb)
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L471)

```diff
-         const [Wd, Fd] = (0, cd.c)(dd, Od, this.page.dpr(), md);
+         const [eb, Hb] = (0, Qb.b)(bb, wb, this.page.dpr(), Mb);
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L477)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.iFd(this.id, dd, Od, md, Wd))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.WHb(this.id, bb, wb, Mb, eb))))
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L480)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.AFd(this.id, dd, Od, md, Wd))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.JHb(this.id, bb, wb, Mb, eb))))
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L483)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.rFd(this.id, dd, Od, md))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.SHb(this.id, bb, wb, Mb))))
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L492)

```diff
-         const Fd = null !== (Od = null === md || void 0 === md ? void 0 : md.model) && void 0 !== Od ? Od : -1,
+         const Hb = null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.model) && void 0 !== wb ? wb : -1,
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L497)

```diff
-           this.host.GFd(this.id, Fd, Rd, null !== (dd = null === md || void 0 === md ? void 0 : md.flyClip) && void 0 !== dd ? dd : "", null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.opts) && void 0 !== Od ? Od : "", Xd)
+           this.host.NHb(this.id, Hb, pb, null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.flyClip) && void 0 !== bb ? bb : "", null !== (wb = null === eb || void 0 === eb ? void 0 : eb.opts) && void 0 !== wb ? wb : "", Vb)
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L502)

```diff
-           this.host.nFd(this.id, dd, Od, md)
+           this.host.vHb(this.id, bb, wb, Mb)
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L506)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.LFd(this.id, dd, Od, md, Wd))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.QHb(this.id, bb, wb, Mb, eb))))
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L527)

```diff
-           this.host.PFd(this.id, Od, md, Wd)
+           this.host.GHb(this.id, wb, Mb, eb)
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L541)

```diff
-           const md = Od === fd ? [] : [Od === Md ? dd : (dd | Jd.e) >>> 0];
+           const Mb = wb === yb ? [] : [wb === ob ? bb : (bb | jb.f) >>> 0];
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L549)

```diff
-           const dd = this.host.zFd(this.id);
+           const bb = this.host.qHb(this.id);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L551)

```diff
-           const md = this.host.cFd(this.id);
+           const Mb = this.host.aHb(this.id);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L567)

```diff
-           Od.length > 0 && this.images.onEvent(Od), this.page.isTrapped || dd.sFd(this.id)
+           wb.length > 0 && this.images.onEvent(wb), this.page.isTrapped || bb.ZHb(this.id)
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L583` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L583) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L583)

```diff
-             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${jd} a model worker was lost: ${dd}`))
+             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Gb} a model worker was lost: ${bb}`))
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L586)

```diff
-         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Jq = {
+         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.LC = {
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L595-L596` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L595-L596) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L595-L596)

```diff
-               if (!this.stopIfTrapped(md) && (this.stop(), (0, Yd.t)(md))) return void this.deps.onRenderFailed("frames_refused", md);
-               console.warn(`${jd} the previews stopped: their frame threw`, md)
+               if (!this.stopIfTrapped(Mb) && (this.stop(), (0, hb.s)(Mb))) return void this.deps.onRenderFailed("frames_refused", Mb);
+               console.warn(`${Gb} the previews stopped: their frame threw`, Mb)
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L626-L627` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L626-L627) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L626-L627)

```diff
-           if (!Rd.jFd()) {
-             const Od = (0, Gd.f)().sampleCount,
+           if (!pb.iHb()) {
+             const wb = (0, Wb.e)().sampleCount,
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L630-L631` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L630-L631) · [Before (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L630-L631)

```diff
-             if (!Rd.DFd(Xd)) throw new Error("the page has a renderer already");
-             (0, ud.t)(performance.now()), this.samples = Od, (0, nd.f)((0, Yd.l)(dd))
+             if (!pb.uHb(Vb)) throw new Error("the page has a renderer already");
+             (0, Yb.t)(performance.now()), this.samples = wb, (0, Jb.g)((0, hb.m)(bb))
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L643-L644` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L643-L644) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L643-L644)

```diff
-           console.warn(`${jd} an ended session's renderer didn't free`, Rd)
-         } else Od.DFd(md) && ((0, ud.t)(performance.now()), this.samples = Wd, (0, nd.f)(this.registryOf(dd)))
+           console.warn(`${Gb} an ended session's renderer didn't free`, pb)
+         } else wb.uHb(Mb) && ((0, Yb.t)(performance.now()), this.samples = eb, (0, Jb.g)(this.registryOf(bb)))
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L666-L667` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L666-L667) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L666-L667)

```diff
-             return void console.warn(`${jd} the session's core kept the page's renderer`, Fd)
-           }!0 === (null === (Od = this.host) || void 0 === Od ? void 0 : Od.attached()) && console.warn(`${jd} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (md = this.host) || void 0 === md ? void 0 : md.jFd()) … [truncated]
+             return void console.warn(`${Gb} the session's core kept the page's renderer`, Hb)
+           }!0 === (null === (wb = this.host) || void 0 === wb ? void 0 : wb.attached()) && console.warn(`${Gb} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Mb = this.host) || void 0 === Mb ? void 0 : Mb.iHb()) … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L684)

```diff
-           [hd, vd] = (0, cd.c)(Od, md, this.deps.dpr(), Wd);
+           [lb, Lb] = (0, Qb.b)(wb, Mb, this.deps.dpr(), eb);
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L686-L687)

```diff
-         if (!this.guarded((() => (Rd.SFd(Xd, Kd), Fd.open(Xd, hd, vd, dd))))) throw this.hostCall(void 0, (() => {
-           Rd.sFd(Xd)
+         if (!this.guarded((() => (pb.YHb(Vb, gb), Hb.open(Vb, lb, Lb, bb))))) throw this.hostCall(void 0, (() => {
+           pb.ZHb(Vb)
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L704)

```diff
-         return this.prefetchedOr(dd, Wd.J)
+         return this.prefetchedOr(bb, eb.C)
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L746)

```diff
-         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${jd} the model workers didn't start: models won't draw in the previews`, dd))
+         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Gb} the model workers didn't start: models won't draw in the previews`, bb))
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L756` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L756) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L756)

```diff
-         return this.module = dd, null === this.host && (this.host = this.guarded((() => new dd.BFd)), this.tellInGame(), this.handOverShaderPack()), this.host
+         return this.module = bb, null === this.host && (this.host = this.guarded((() => new bb.cHb)), this.tellInGame(), this.handOverShaderPack()), this.host
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L763)

```diff
-           dd.eFd(this.deps.game.inGame())
+           bb.dHb(this.deps.game.inGame())
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L772)

```diff
-           dd.UFd(...Od) || console.warn(`${jd} the host refused the shader pack: previews draw without it at home`)
+           bb.RHb(...wb) || console.warn(`${Gb} the host refused the shader pack: previews draw without it at home`)
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L779)

```diff
-           this.stop(), console.warn(`${jd} the previews stopped: ${dd} threw`, md)
+           this.stop(), console.warn(`${Gb} the previews stopped: ${bb} threw`, Mb)
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L786)

```diff
-           Od.wasm = null === md ? Od.wasm : this.hostCall(Od.wasm, (() => md.Zt()))
+           wb.wasm = null === Mb ? wb.wasm : this.hostCall(wb.wasm, (() => Mb.vO()))
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L799)

```diff
-             Fd = dd.IFd(Wd)
+             Hb = bb.PHb(eb)
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L816` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L816) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L816)

```diff
-         return null !== dd && this.guarded((() => dd.jFd())) ? dd : (this.opening ??= this.openAtHome().finally((() => {
+         return null !== bb && this.guarded((() => bb.iHb())) ? bb : (this.opening ??= this.openAtHome().finally((() => {
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L822)

```diff
-         const Od = null !== (dd = this.module) && void 0 !== dd ? dd : await this.loadModule();
+         const wb = null !== (bb = this.module) && void 0 !== bb ? bb : await this.loadModule();
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L825` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L825) · [Before (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L825)

```diff
-           Wd = () => this.guarded((() => md.jFd()));
+           eb = () => this.guarded((() => Mb.iHb()));
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L827)

```diff
-         if (null !== (0, ud.G)() || (0, ud.b)()) return null;
+         if (null !== (0, Yb.E)() || (0, Yb.e)()) return null;
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L832)

```diff
-         const Xd = (0, Gd.f)().sampleCount;
+         const Vb = (0, Wb.e)().sampleCount;
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L835)

```diff
-           Kd = await (0, Yd.z)(Od, "previewRenderer", Fd, Xd, Ld.g, Rd)
+           gb = await (0, hb.x)(wb, "previewRenderer", Hb, Vb, Sb.g, pb)
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L837)

```diff
-           throw hd instanceof Bd.e ? this.stopForTrap(hd) : (0, Yd.w)(hd) && await this.deps.onRenderFailed("start_failed", hd), hd
+           throw lb instanceof Rb.d ? this.stopForTrap(lb) : (0, hb.v)(lb) && await this.deps.onRenderFailed("start_failed", lb), lb
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L839)

```diff
-         return this.guarded((() => md.DFd(Kd))) ? ((0, ud.t)(performance.now()), this.samples = Xd, this.pageCanvas = Fd, (0, nd.f)(this.registryOf(Od)), md) : Wd() ? md : null
+         return this.guarded((() => Mb.uHb(gb))) ? ((0, Yb.t)(performance.now()), this.samples = Vb, this.pageCanvas = Hb, (0, Jb.g)(this.registryOf(wb)), Mb) : eb() ? Mb : null
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L847)

```diff
-         this.module.qV(this.deps.heldLow());
+         this.module.bJ(this.deps.heldLow());
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L859-L860` → after: `L859-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L859-L860) · [Before (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L859-L860)

```diff
-             const Od = dd.lFd();
-             for (let dd = 0; dd + 1 < Od.length; dd += 2) Od[dd] === pd.F.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Od[dd], Od[dd + 1])
+             const wb = bb.nHb();
+             for (let bb = 0; bb + 1 < wb.length; bb += 2) wb[bb] === mb.I.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(wb[bb], wb[bb + 1])
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L863-L864` → after: `L863-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L863-L864) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L863-L864)

```diff
-             if (Rd === Zd) return this.stop(), void this.deps.onFatal(dd.ZFd(), dd.kFd());
-             if (Rd === kd) return this.stop(), void console.warn(`${jd} the previews stopped: the page's renderer went with its session`);
+             if (pb === Pb) return this.stop(), void this.deps.onFatal(bb.oHb(), bb.THb());
+             if (pb === nb) return this.stop(), void console.warn(`${Gb} the previews stopped: the page's renderer went with its session`);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L867)

```diff
-             const Od = dd.CFd();
+             const wb = bb.yHb();
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L869-L870` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L869-L870) · [Before (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L869-L870)

```diff
-             const md = Od[2] === pd._c.PIPELINE_FAILED ? "pipeline_failed" : "lost";
-             this.deps.onRenderFailed(md, void 0, Od[1], Od[2] === pd._c.RESTORE_LOST)
+             const Mb = wb[2] === mb.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
+             this.deps.onRenderFailed(Mb, void 0, wb[1], wb[2] === mb.Vc.RESTORE_LOST)
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L878)

```diff
-         return !this.isStopped && !(0, ud.b)() && null === (0, ud.G)()
+         return !this.isStopped && !(0, Yb.e)() && null === (0, Yb.E)()
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L881)

```diff
-         return null !== this.module && ((0, Bd.h)(this.module) || "failed" === (0, qd.y)())
+         return null !== this.module && ((0, Rb.i)(this.module) || "failed" === (0, Cb.v)())
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L902)

```diff
-           fFd: (Od, md) => {
+           kHb: (wb, Mb) => {
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L904)

```diff
-               dd.fFd(Od, md)
+               bb.kHb(wb, Mb)
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L907)

```diff
-           MFd: Od => {
+           bpb: wb => {
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L909` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L909) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L909)

```diff
-               dd.MFd(Od)
+               bb.bpb(wb)
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L912-L913` → after: `L912-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L912-L913) · [Before (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L912-L913)

```diff
-           ...void 0 === dd.dRd ? {} : {
-             dRd: (Od, md) => {
+           ...void 0 === bb.wpb ? {} : {
+             wpb: (wb, Mb) => {
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L916` → after: `L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L916) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L916)

```diff
-                 null === (Wd = dd.dRd) || void 0 === Wd || Wd.call(dd, Od, md)
+                 null === (eb = bb.wpb) || void 0 === eb || eb.call(bb, wb, Mb)
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L920-L921` → after: `L920-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L920-L921) · [Before (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L920-L921)

```diff
-           ...void 0 === dd.ORd ? {} : {
-             ORd: Od => {
+           ...void 0 === bb.Mpb ? {} : {
+             Mpb: wb => {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L924)

```diff
-                 null === (md = dd.ORd) || void 0 === md || md.call(dd, Od)
+                 null === (Mb = bb.Mpb) || void 0 === Mb || Mb.call(bb, wb)
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L931)

```diff
-         return !!this.isTrapped && (this.stopped || (this.stop(), (0, nd.f)(null)), !0)
+         return !!this.isTrapped && (this.stopped || (this.stop(), (0, Jb.g)(null)), !0)
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L934)

```diff
-         return !(null === this.module || !(0, Bd.k)(this.module, dd)) && (this.stopForTrap(dd), !0)
+         return !(null === this.module || !(0, Rb.j)(this.module, bb)) && (this.stopForTrap(bb), !0)
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L937)

```diff
-         this.stop(), (0, nd.f)(null), (0, zd.e)("previews", dd)
+         this.stop(), (0, Jb.g)(null), (0, vb.c)("previews", bb)
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L944-L945` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L944-L945) · [Before (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L944-L945)

```diff
-         const md = `${dd}:${Od}`;
-         this.loggedErrors.has(md) || (this.loggedErrors.add(md), console.warn(`${jd} error ${dd} (detail ${Od})`))
+         const Mb = `${bb}:${wb}`;
+         this.loggedErrors.has(Mb) || (this.loggedErrors.add(Mb), console.warn(`${Gb} error ${bb} (detail ${wb})`))
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L952)

```diff
-         const dd = (0, Ud.o)(Hd.clientSideServerUrls.staticUrl, {
+         const bb = (0, Kb.n)(Eb.clientSideServerUrls.staticUrl, {
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L955)

```diff
-             return null !== (Od = null === (md = Sd.g.current) || void 0 === md ? void 0 : md.modelUrl(dd)) && void 0 !== Od ? Od : null
+             return null !== (wb = null === (Mb = Db.i.current) || void 0 === Mb ? void 0 : Mb.modelUrl(bb)) && void 0 !== wb ? wb : null
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L963)

```diff
-             } = await md.e(51).then((() => md(55136))), {
+             } = await Mb.e(51).then((() => Mb(54941))), {
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L968-L969` → after: `L968-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L968-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L968-L969) · [Before (L968-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L968-L969)

```diff
-           fetchAnimations: async () => Kd(await (0, Wd.J)(mO())),
-           playerFile: async () => (await (0, Ud.n)()).PLAYER_FILE,
+           fetchAnimations: async () => gb(await (0, eb.C)(bw())),
+           playerFile: async () => (await (0, Kb.j)()).PLAYER_FILE,
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L976)

```diff
-           openExtras: ud.C,
+           openExtras: Yb.B,
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L978-L981` → after: `L978-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L978-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L978-L981) · [Before (L978-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L978-L981)

```diff
-           images: (0, Sd.l)((0, wd.n)(dd.url), (() => Sd.g.current)),
-           pack: Sd.g,
-           game: sd.e,
-           fetchModel: dd => (0, Ud.i)(dd),
+           images: (0, Db.n)((0, Xb.n)(bb.url), (() => Db.i.current)),
+           pack: Db.i,
+           game: cb.d,
+           fetchModel: bb => (0, Kb.g)(bb),
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L991)

```diff
-             console.error(`${jd} the previews stopped: renderer error ${dd} (detail ${Od})`)
+             console.error(`${Gb} the previews stopped: renderer error ${bb} (detail ${wb})`)
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L994` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L994) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L994)

```diff
-             (0, ud.E)() === rd.e.webgpu && ((0, gd.g)((0, qd.P)() ? (0, Yd.S)((0, qd.A)()) : null), bd.H.lost())
+             (0, Yb.D)() === Ab.b.webgpu && ((0, zb.f)((0, Cb.H)() ? (0, hb.O)((0, Cb.w)()) : null), Bb.C.lost())
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L997)

```diff
-             bd.H.drew(), (0, Ed.l)()
+             Bb.C.drew(), (0, xb.n)()
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1000` → after: `L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1000) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1000)

```diff
-           heldLow: Ed.p
+           heldLow: xb.o
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1004-L1006` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1004-L1006) · [Before (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1004-L1006)

```diff
-     var QO = md(693),
-       tO = md(40230),
-       oO = md(4509);
+     var lw = Mb(648),
+       Lw = Mb(39927),
+       Iw = Mb(4659);
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1027-L1029` → after: `L1027-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1027-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1027-L1029) · [Before (L1027-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1027-L1029)

```diff
-     var qO = md(40756),
-       HO = md(40721),
-       yO = md(45365);
+     var Uw = Mb(40504),
+       tw = Mb(40463),
+       Cw = Mb(45181);
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1050)

```diff
-       if (void 0 === md) return console.warn(`[bloxd-previews] pet model ${dd.model} isn't a Player attachment model`), null;
+       if (void 0 === Mb) return console.warn(`[bloxd-previews] pet model ${bb.model} isn't a Player attachment model`), null;
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1066)

```diff
-         flyClip: null !== (Od = null === hd || void 0 === hd ? void 0 : hd.fly) && void 0 !== Od ? Od : null
+         flyClip: null !== (wb = null === lb || void 0 === lb ? void 0 : lb.fly) && void 0 !== wb ? wb : null
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1081-L1083` → after: `L1081-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1081-L1083) · [Before (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1081-L1083)

```diff
-     var YO = md(35566),
-       gO = md(37829),
-       wO = md(43152);
+     var sw = Mb(35358),
+       mw = Mb(37528),
+       hw = Mb(42862);
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1088)

```diff
-       return QO.h.indexOf(dd)
+       return lw.j.indexOf(bb)
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1093` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1093) · [Before (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1093)

```diff
-       const Od = (0, tO.h)(dd),
+       const wb = (0, Lw.d)(bb),
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1095)

```diff
-       return -1 !== md ? md : (UO.has(dd) || (UO.add(dd), console.warn(`${aO} an animation the previews' table lacks: the mob idles instead`)), -1)
+       return -1 !== Mb ? Mb : (jw.has(bb) || (jw.add(bb), console.warn(`${zw} an animation the previews' table lacks: the mob idles instead`)), -1)
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1100)

```diff
-       return null !== (Od = NO[dd]) && void 0 !== Od ? Od : -1
+       return null !== (wb = Ow[bb]) && void 0 !== wb ? wb : -1
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1130` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1130) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1130)

```diff
-         this.preview = dd, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new bO, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0 … [truncated]
+         this.preview = bb, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new Ew, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0 … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1132` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1132) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1132)

```diff
-           captureFrame: Od => (0, wO.b)((() => dd.isClosed ? null : dd.canvas), Ed.c, Od),
+           captureFrame: wb => (0, hw.e)((() => bb.isClosed ? null : bb.canvas), xb.e, wb),
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1134)

```diff
-             console.warn(`${aO} isolateHead: noa's character preview only`)
+             console.warn(`${zw} isolateHead: noa's character preview only`)
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1137` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1137) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1137)

```diff
-             console.warn(`${aO} isolatePet: noa's character preview only`)
+             console.warn(`${zw} isolatePet: noa's character preview only`)
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1140` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1140) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1140)

```diff
-           if (dd.isStopped) throw new Error(`${aO} the previews stopped before the character drew`);
+           if (bb.isStopped) throw new Error(`${zw} the previews stopped before the character drew`);
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1156` → after: `L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1156) · [Before (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1156)

```diff
-         gO.j.untilLoadedFor(dd.name).then((() => {
+         mw.k.untilLoadedFor(bb.name).then((() => {
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1176` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1176) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1176)

```diff
-           radius: null !== Wd && void 0 !== Wd ? Wd : Fd.radius
+           radius: null !== eb && void 0 !== eb ? eb : Hb.radius
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1201)

```diff
-       dd.setMob(JO(md), null !== Wd && void 0 !== Wd ? Wd : "", 1, xO(Fd))
+       bb.setMob(xw(Mb), null !== eb && void 0 !== eb ? eb : "", 1, Kw(Hb))
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1229)

```diff
-           console.error(`${aO} couldn't open a lineup figure`, dd)
+           console.error(`${zw} couldn't open a lineup figure`, bb)
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1250)

```diff
-           const dd = null === md.WE ? 0 : null !== (Fd = (0, oO.d)(md.WE)) && void 0 !== Fd ? Fd : 0;
+           const bb = null === Mb.NK ? 0 : null !== (Hb = (0, Iw.c)(Mb.NK)) && void 0 !== Hb ? Hb : 0;
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1265)

```diff
-         Kd.top = -(null !== (dd = md.lift) && void 0 !== dd ? dd : 0) * Wd[1] + "px", Kd.left = `${Rd}px`, Kd.width = `${Xd}px`, Kd.zIndex = this.order, Kd.visibility = this.shown && this.loaded ? "visible" : "hidden"
+         gb.top = -(null !== (bb = Mb.lift) && void 0 !== bb ? bb : 0) * eb[1] + "px", gb.left = `${pb}px`, gb.width = `${Vb}px`, gb.zIndex = this.order, gb.visibility = this.shown && this.loaded ? "visible" : "hidden"
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1317)

```diff
-             return (xO(Od) === NO.gunAimed ? Wd : Fd) * md
+             return (Kw(wb) === Ow.gunAimed ? eb : Hb) * Mb
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1352)

```diff
-   45350: (dd, Od, md) => {
+   45171: (bb, wb, Mb) => {
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1355` → after: `L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5bR1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-7e5f403f0b9ecf8acc2a70d887fd9d7c3e5e653e9774a6d5ed9dbb7ef707bf5b) · [After (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1355) · [Before (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientPreviews.js#L1355)

```diff
-   45358: (dd, Od, md) => {
+   45179: (bb, wb, Mb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L4)

```diff
-   38521: (dd, Od, md) => {
+   38190: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L6)

```diff
-       e: () => td,
+       d: () => Ob,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L9-L11)

```diff
-     var Wd = md(701),
-       Fd = md(46),
-       Rd = md(38483);
+     var eb = Mb(661),
+       Hb = Mb(43),
+       pb = Mb(38155);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L24)

```diff
-         vd = await Promise.race([(async () => await Fd.h.setItem(Kd, md) && Fd.h.setItem(Xd, Rd))(), (0, Wd.S)(Qd).then((() => !1))]);
+         Lb = await Promise.race([(async () => await Hb.h.setItem(gb, Mb) && Hb.h.setItem(Vb, pb))(), (0, eb.R)(Ib).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L28)

```diff
-         kQ: vd
+         nI: Lb
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L30)

```diff
-       Fd.o.setItem(hd, td)
+       Hb.j.setItem(lb, Ob)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L34-L35)

```diff
-       const Od = Fd.o.getItem(hd);
-       null !== Od && Fd.o.removeItem(hd);
+       const wb = Hb.j.getItem(lb);
+       null !== wb && Hb.j.removeItem(lb);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L41-L42)

```diff
-       if (null !== Wd && (td || ("number" !== typeof Wd || md - Wd > vd)) && (od = Qd && td && Od.kQ ? await Fd.h.getItem(Xd) : null, await Promise.all([Fd.h.removeItem(Kd), Fd.h.removeItem(Xd)])), !Qd) return null;
-       if ((null === (dd = od) || void 0 === dd ? void 0 : dd.at) !== Od.at) throw new Error(Rd.c.replayNotKept.text);
+       if (null !== eb && (Ob || ("number" !== typeof eb || Mb - eb > Lb)) && (Ub = Ib && Ob && wb.nI ? await Hb.h.getItem(Vb) : null, await Promise.all([Hb.h.removeItem(gb), Hb.h.removeItem(Vb)])), !Ib) return null;
+       if ((null === (bb = Ub) || void 0 === bb ? void 0 : bb.at) !== wb.at) throw new Error(pb.b.replayNotKept.text);
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L49)

```diff
-   38517: (dd, Od, md) => {
+   38185: (bb, wb, Mb) => {
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L51-L53)

```diff
-       c: () => Wd,
-       f: () => Rd,
-       g: () => Fd
+       d: () => eb,
+       e: () => pb,
+       i: () => Hb
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L65)

```diff
-   38529: (dd, Od, md) => {
+   38197: (bb, wb, Mb) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L67-L68` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L67-L68) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L67-L68)

```diff
-       c: () => Wd,
-       d: () => Fd
+       b: () => eb,
+       e: () => Hb
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L121)

```diff
-   38538: (dd, Od, md) => {
+   38203: (bb, wb, Mb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L124-L125)

```diff
-       g: () => td,
-       k: () => Qd
+       h: () => Ob,
+       i: () => Ib
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L127-L129` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L127-L129) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L127-L129)

```diff
-     var Wd = md(29),
-       Fd = md(32),
-       Rd = md(38529);
+     var eb = Mb(26),
+       Hb = Mb(29),
+       pb = Mb(38197);
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L136)

```diff
-         of Rd.d) dd[Od] = !0;
+         of pb.e) bb[wb] = !0;
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L142)

```diff
-       Fd.j.lQ("replayViewer|uiVisibilityChanged")
+       Hb.k.iI("replayViewer|uiVisibilityChanged")
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L153)

```diff
-       }, "nametag" === dd && Wd.e.set({
+       }, "nametag" === bb && eb.c.set({
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L159)

```diff
-       Kd = Xd(), Wd.e.set({
+       gb = Vb(), eb.c.set({
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L164)

```diff
-   64753: (dd, Od, md) => {
+   64396: (bb, wb, Mb) => {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L169-L174` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L169-L174) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L169-L174)

```diff
-     var Wd = md(38483),
-       Fd = md(38521),
-       Rd = md(38517),
-       Xd = md(38538),
-       Kd = md(5568),
-       hd = md(55017);
+     var eb = Mb(38155),
+       Hb = Mb(38190),
+       pb = Mb(38185),
+       Vb = Mb(38203),
+       gb = Mb(5678),
+       lb = Mb(54816);
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L176)

```diff
-       Qd = new Set(["Jq"]);
+       Ib = new Set(["LC"]);
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L180)

```diff
-         this.deps = dd, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L189)

```diff
-         return null !== this.lastView && this.lastView.state !== Kd.ld.None
+         return null !== this.lastView && this.lastView.state !== gb.md.None
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L201)

```diff
-         return this.cropping ? Wd.c.cropBusy.text : null
+         return this.cropping ? eb.b.cropBusy.text : null
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L212)

```diff
-           if (!vd.setPlayback(!0)) throw new Error(Wd.c.cantOpen.text);
+           if (!Lb.setPlayback(!0)) throw new Error(eb.b.cantOpen.text);
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L219)

```diff
-           td = await vd.open(dd, (() => (0, Fd.e)(dd, Od)))
+           Ob = await Lb.open(bb, (() => (0, Hb.d)(bb, wb)))
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L223)

```diff
-         if (Qd !== this.epoch && "reloading" !== td) throw new Error(Wd.c.coreStopped.text);
+         if (Ib !== this.epoch && "reloading" !== Ob) throw new Error(eb.b.coreStopped.text);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L231-L236` → after: `L231-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L231-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L231-L236) · [Before (L231-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L231-L236)

```diff
-               case Kd.fd.ModuleTrap:
-                 return Wd.c.coreStopped;
-               case Kd.fd.ModuleLoad:
-                 return Wd.c.viewerLoadFailed;
-               case Kd.fd.TooLarge:
-                 return Wd.c.cantOpen
+               case gb.ad.ModuleTrap:
+                 return eb.b.coreStopped;
+               case gb.ad.ModuleLoad:
+                 return eb.b.viewerLoadFailed;
+               case gb.ad.TooLarge:
+                 return eb.b.cantOpen
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L242)

```diff
-         return this.rejectSave(new Error(Wd.c.saveClosed.text)), this.fileName = null !== (md = null !== (Rd = Od.fileName) && void 0 !== Rd ? Rd : null === (Xd = Od.fileHandle) || void 0 === Xd ? void 0 : Xd.name) && void 0 !== md ? md : null, this.fileHandle = null !== (hd = Od … [truncated]
+         return this.rejectSave(new Error(eb.b.saveClosed.text)), this.fileName = null !== (Mb = null !== (pb = wb.fileName) && void 0 !== pb ? pb : null === (Vb = wb.fileHandle) || void 0 === Vb ? void 0 : Vb.name) && void 0 !== Mb ? Mb : null, this.fileHandle = null !== (lb = wb … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L250)

```diff
-         this.holds.has("Jq") || this.deps.client.play()
+         this.holds.has("LC") || this.deps.client.play()
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L256)

```diff
-         this.isOpen && this.pause(), this.hold("Jq")
+         this.isOpen && this.pause(), this.hold("LC")
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L261)

```diff
-         null !== md && (Od || dd < md.Et) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(dd, Od)
+         null !== Mb && (wb || bb < Mb.sO) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, wb)
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L271)

```diff
-         null !== dd && dd.state !== Kd.ld.None && this.setCameraMode(hd.d[(hd.d.indexOf(dd.cameraMode) + 1) % hd.d.length])
+         null !== bb && bb.state !== gb.md.None && this.setCameraMode(lb.c[(lb.c.indexOf(bb.cameraMode) + 1) % lb.c.length])
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L289)

```diff
-         return !(Od <= dd) && (null !== this.pendingSave ? (this.deps.notify(Wd.c.saveBusy), !1) : !!this.deps.client.crop(dd, Od) && (this.cropAsked = !0, this.hold("crop"), !0))
+         return !(wb <= bb) && (null !== this.pendingSave ? (this.deps.notify(eb.b.saveBusy), !1) : !!this.deps.client.crop(bb, wb) && (this.cropAsked = !0, this.hold("crop"), !0))
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L292)

```diff
-         return null !== this.pendingSave ? Promise.reject(new Error(Wd.c.saveBusy.text)) : new Promise(((dd, Od) => {
+         return null !== this.pendingSave ? Promise.reject(new Error(eb.b.saveBusy.text)) : new Promise(((bb, wb) => {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L300)

```diff
-             this.pendingSave === md && this.rejectSave(dd instanceof Error ? dd : new Error(String(dd)))
+             this.pendingSave === Mb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L318)

```diff
-         this.fileHandle = dd, this.fileName = null !== (md = null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.name) && void 0 !== Wd ? Wd : Od) && void 0 !== md ? md : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = bb, this.fileName = null !== (Mb = null !== (eb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== eb ? eb : wb) && void 0 !== Mb ? Mb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L321)

```diff
-         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Wd.c.coreStopped.text)), this.rejectSave(new Error(Wd.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
+         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(eb.b.coreStopped.text)), this.rejectSave(new Error(eb.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L327-L328` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L327-L328) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L327-L328)

```diff
-         this.lastView = Wd, this.opening && null !== Wd && Wd.state !== Kd.ld.None && Wd.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Xd.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Wd && Wd.state === Kd.ld.Cropping ? this.crop … [truncated]
-         const Rd = 0 === this.settleFrames && 0 === (null !== (dd = null === (Od = (md = this.deps).meshPending) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : 0);
+         this.lastView = eb, this.opening && null !== eb && eb.state !== gb.md.None && eb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Vb.h)()), this.cropAsked ? (this.cropAsked = !1, null !== eb && eb.state === gb.md.Cropping ? this.crop … [truncated]
+         const pb = 0 === this.settleFrames && 0 === (null !== (bb = null === (wb = (Mb = this.deps).meshPending) || void 0 === wb ? void 0 : wb.call(Mb)) && void 0 !== bb ? bb : 0);
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L335)

```diff
-         (0, Xd.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, Vb.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L339)

```diff
-           case Kd.fd.TooLarge:
+           case gb.ad.TooLarge:
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L341-L342)

```diff
-           case Kd.fd.Open:
-           case Kd.fd.NothingStaged: {
+           case gb.ad.Open:
+           case gb.ad.NothingStaged: {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L344)

```diff
-             const Od = (0, Rd.f)(dd.version) ? Wd.c.replayTooOld : Wd.c.cantOpen;
+             const wb = (0, pb.e)(bb.version) ? eb.b.replayTooOld : eb.b.cantOpen;
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L348-L349)

```diff
-           case Kd.fd.Crop:
-             if (dd.code === Kd.bd.Busy) {
+           case gb.ad.Crop:
+             if (bb.code === gb.Zc.Busy) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L357)

```diff
-             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Wd.c.cropFailed);
+             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(eb.b.cropFailed);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L359-L362` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L359-L362) · [Before (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L359-L362)

```diff
-           case Kd.fd.ModuleTrap:
-           case Kd.fd.ModuleLoad:
-           case Kd.fd.Port:
-             this.moduleEnded(dd.reason === Kd.fd.ModuleTrap ? Wd.c.coreStopped : Wd.c.cantOpen);
+           case gb.ad.ModuleTrap:
+           case gb.ad.ModuleLoad:
+           case gb.ad.Port:
+             this.moduleEnded(bb.reason === gb.ad.ModuleTrap ? eb.b.coreStopped : eb.b.cantOpen);
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L364)

```diff
-           case Kd.fd.NotLive:
+           case gb.ad.NotLive:
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L368)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${bb.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L380)

```diff
-         this.rejectSave(new Error(dd ? Wd.c.saveBusy.text : "The replay couldn't be saved"))
+         this.rejectSave(new Error(bb ? eb.b.saveBusy.text : "The replay couldn't be saved"))
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-aac2cac69f3b0321b0466aec6c2e42f30f3611b6227e8e851d709c92852173d7) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientReplayViewer.js#L386)

```diff
-         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Wd.c.cropBusy.text)) : this.deps.notify(Wd.c.cropBusy)
+         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(eb.b.cropBusy.text)) : this.deps.notify(eb.b.cropBusy)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L4)

```diff
-   43159: (dd, Od, md) => {
+   42864: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L13-L16` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L13-L16)

```diff
-     var Wd = md(37846),
-       Fd = md(2100),
-       Rd = md(2319),
-       Xd = md(4385);
+     var eb = Mb(37539),
+       Hb = Mb(2150),
+       pb = Mb(2364),
+       Vb = Mb(4539);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L19)

```diff
-       (0, Rd.l)((() => {
+       (0, pb.s)((() => {
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L25)

```diff
-       const md = (0, Rd.k)();
+       const Mb = (0, pb.p)();
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L35)

```diff
-       return `${md.p}${dd}${encodeURIComponent(Od)}.png`
+       return `${Mb.p}${bb}${encodeURIComponent(wb)}.png`
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L41-L43` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L41-L43) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L41-L43)

```diff
-       return (0, Wd.b)(dd) ? null !== (Od = function(dd) {
-         return hd(dd, Xd.c.ITEM)
-       }(dd)) && void 0 !== Od ? Od : vd(md, dd) : null
+       return (0, eb.d)(bb) ? null !== (wb = function(bb) {
+         return lb(bb, Vb.d.ITEM)
+       }(bb)) && void 0 !== wb ? wb : Lb(Mb, bb) : null
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L48)

```diff
-         return md(43163)(`./${dd}.png`)
+         return Mb(42867)(`./${bb}.png`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L55)

```diff
-       return md(43685)
+       return Mb(43419)
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L62-L63` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L62-L63)

```diff
-         return hd(dd, Xd.c.BLOCK)
-       }(dd)) && void 0 !== Od ? Od : vd(md, dd)
+         return lb(bb, Vb.d.BLOCK)
+       }(bb)) && void 0 !== wb ? wb : Lb(Mb, bb)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L68)

```diff
-         return md(43693)(`./${dd}.png`)
+         return Mb(43425)(`./${bb}.png`)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L74)

```diff
-   43163: (dd, Od, md) => {
+   42867: (bb, wb, Mb) => {
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L76-L171` → after: `L76-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L76-L171) · [Before (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L76-L171)

```diff
-       "./Air Walk.png": 43168,
-       "./Antlers Bonus.png": 43172,
-       "./Arrow Damage Enchantment.png": 43174,
-       "./Arrow Speed Enchantment.png": 43181,
-       "./Attack Speed Enchantment.png": 43187,
-       "./Blindness.png": 43192,
-       "./Boating.png": 43198,
-       "./Bounciness.png": 43205,
-       "./Brain Rot.png": 43214,
-       "./Break Speed Enchantment.png": 43216,
-       "./Bunny Hop.png": 43224,
-       "./Critical Damage Enchantment.png": 43228,
-       "./Cross.png": 43237,
-       "./Damage Enchantment.png": 43243,
-       "./Damage Reduction.png": 43249,
-       "./Damage.png": 43258,
- ... (80 more removed lines; see GitHub link above)
+       "./Air Walk.png": 42873,
+       "./Antlers Bonus.png": 42878,
+       "./Arrow Damage Enchantment.png": 42886,
+       "./Arrow Speed Enchantment.png": 42894,
+       "./Attack Speed Enchantment.png": 42898,
+       "./Blindness.png": 42907,
+       "./Boating.png": 42912,
+       "./Bounciness.png": 42919,
+       "./Brain Rot.png": 42922,
+       "./Break Speed Enchantment.png": 42924,
+       "./Bunny Hop.png": 42932,
+       "./Critical Damage Enchantment.png": 42941,
+       "./Cross.png": 42945,
+       "./Damage Enchantment.png": 42949,
+       "./Damage Reduction.png": 42956,
+       "./Damage.png": 42961,
+ ... (80 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L188-L190)

```diff
-     }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 43163
-   },
-   43693: (dd, Od, md) => {
+     }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 42867
+   },
+   43425: (bb, wb, Mb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L192-L205` → after: `L192-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L192-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L192-L205) · [Before (L192-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L192-L205)

```diff
-       "./arrow.png": 43699,
-       "./bubble.png": 43705,
-       "./critical_hit.png": 43712,
-       "./drift.png": 43720,
-       "./effect_5.png": 43723,
-       "./fishingFishSilhouette.png": 43732,
-       "./generic_2.png": 43738,
-       "./glint.png": 43744,
-       "./heart.png": 43747,
-       "./scary_face.png": 43751,
-       "./snowflake.png": 43757,
-       "./soul_0.png": 43760,
-       "./square_particle.png": 43767,
-       "./z-particle.png": 43769
+       "./arrow.png": 43427,
+       "./bubble.png": 43434,
+       "./critical_hit.png": 43436,
+       "./drift.png": 43445,
+       "./effect_5.png": 43448,
+       "./fishingFishSilhouette.png": 43453,
+       "./generic_2.png": 43462,
+       "./glint.png": 43465,
+       "./heart.png": 43473,
+       "./scary_face.png": 43482,
+       "./snowflake.png": 43485,
+       "./soul_0.png": 43494,
+       "./square_particle.png": 43500,
+       "./z-particle.png": 43504
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L222-L224` → after: `L222-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L222-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L222-L224) · [Before (L222-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L222-L224)

```diff
-     }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 43693
-   },
-   43168: (dd, Od, md) => {
+     }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 43425
+   },
+   42873: (bb, wb, Mb) => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L227)

```diff
-   43172: (dd, Od, md) => {
+   42878: (bb, wb, Mb) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L230)

```diff
-   43174: (dd, Od, md) => {
+   42886: (bb, wb, Mb) => {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L234-L273` → after: `L381-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L381-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L381-L429) · [Before (L234-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L234-L273)

```diff
-     dd.exports = md.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
-   },
-   43187: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
-   },
-   43192: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
-   },
-   43198: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
-   },
-   43205: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
-   },
-   43214: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
- ... (24 more removed lines; see GitHub link above)
+     bb.exports = Mb.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
+   },
+   43186: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
+   },
+   43189: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
+   },
+   43193: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
+   },
+   43199: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
+   },
+   43202: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
+ ... (33 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L276-L285` → after: `L432-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L432-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L432-L435) · [Before (L276-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L276-L285)

```diff
-     dd.exports = md.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
-   },
-   43269: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
-   },
-   43277: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
-   },
-   43279: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
+     bb.exports = Mb.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
+   },
+   43274: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L288-L291` → after: `L438-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L438-L441) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L288-L291)

```diff
-     dd.exports = md.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
-   },
-   43289: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
+     bb.exports = Mb.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
+   },
+   43286: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L294-L312` → after: `L444-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L444-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L444-L462) · [Before (L294-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L294-L312)

```diff
-     dd.exports = md.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
-   },
-   43299: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
-   },
-   43302: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
-   },
-   43307: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
-   },
-   43316: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
-   },
-   43322: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
- ... (3 more removed lines; see GitHub link above)
+     bb.exports = Mb.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
+   },
+   43301: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
+   },
+   43304: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
+   },
+   43311: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
+   },
+   43313: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
+   },
+   43315: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
+ ... (3 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L315` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L465) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L315)

```diff
-     dd.exports = md.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
+     bb.exports = Mb.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L318-L327` → after: `L468-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L468-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L468-L477) · [Before (L318-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L318-L327)

```diff
-     dd.exports = md.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
-   },
-   43331: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
-   },
-   43337: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Frozen.83e94281a770969902d6.png"
-   },
-   43345: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
+     bb.exports = Mb.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
+   },
+   43333: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
+   },
+   43340: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Slowness.0d456812d4290180d6d3.png"
+   },
+   43348: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L330-L336` → after: `L480-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L480-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L480-L483) · [Before (L330-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L330-L336)

```diff
-     dd.exports = md.p + "static/media/Gliding.4fd01858ea61b5229451.png"
-   },
-   43358: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
-   },
-   43362: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Haste.205c848b0798acf1b67b.png"
+     bb.exports = Mb.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
+   },
+   43359: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L339-L363` → after: `L486-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L486-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L486-L504) · [Before (L339-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L339-L363)

```diff
-     dd.exports = md.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
-   },
-   43369: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
-   },
-   43373: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
-   },
-   43376: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
-   },
-   43385: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/Health.cfa3a685af898f2c717f.png"
-   },
-   43391: (dd, Od, md) => {
-     dd.exports = md.p + "static/media/HealthShield.c30608f8335b027ed219.png"
- ... (9 more removed lines; see GitHub link above)
+     bb.exports = Mb.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
+   },
+   43374: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
+   },
+   43383: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
+   },
+   43390: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
+   },
+   43393: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
+   },
+   43401: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientTextIcons.js` (Changed code · before: `L366` → after: `L507-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-81175a4d699b3d4b366f66cb64c980e6cef7b384fce12f6e3877f23fe2c29989) · [After (L507-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L507-L552) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmClientTextIcons.js#L366)

```diff
-     dd.exports = md.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
+     bb.exports = Mb.p + "static/media/Weakness.234bdb740d34da3f932f.png"
+   },
+   43415: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
+   },
+   43427: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/arrow.ffce0168131507e37783.png"
+   },
+   43434: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/bubble.a0edea14e8be26e3947a.png"
+   },
+   43436: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
+   },
+   43445: (bb, wb, Mb) => {
+     bb.exports = Mb.p + "static/media/drift.400e35d1039dd77946d5.png"
+ ... (30 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (178 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db)

#### 1. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L4)

```diff
-   38243: (dd, Od, md) => {
+   37898: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L7-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L9) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L7-L9)

```diff
-       h: () => bd,
-       i: () => od,
-       k: () => td
+       g: () => Ob
```

#### 3. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L11-L18)

```diff
-     var Wd = md(35535),
-       Fd = md(3428),
-       Rd = md(3432),
-       Xd = md(9850),
-       Kd = md(1566),
-       hd = md(66),
-       vd = md(86),
-       Qd = md(1341);
+     var eb = Mb(35320),
+       Hb = Mb(3531),
+       pb = Mb(3538),
+       Vb = Mb(10064),
+       gb = Mb(1611),
+       lb = Mb(64),
+       Lb = Mb(81),
+       Ib = Mb(1364);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L22-L23)

```diff
-       return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
-         children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
+       return (0, gb.h)(Hb.e, (0, Hb.x)()), (0, Ib.jsx)(Ib.Fragment, {
+         children: null === (bb = (0, Hb.x)()) || void 0 === bb ? void 0 : bb.content
```

#### 5. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L32-L33)

```diff
-       (0, Kd.i)(Fd.d, (0, Fd.n)());
-       const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
+       (0, gb.h)(Hb.e, (0, Hb.x)());
+       const Lb = null === (wb = (0, Hb.x)()) || void 0 === wb ? void 0 : wb.menu;
```

#### 6. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L36-L37)

```diff
-         md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
-       }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
+         Mb || (null === Lb || void 0 === Lb || null === (bb = Lb.onClose) || void 0 === bb || bb.call(Lb), (0, pb.l)())
+       }), [Mb, Lb]), (0, lb.useEffect)((() => Mb ? (0, Vb.g)(pb.u, pb.g) : void 0), [Mb]), (0, Ib.jsx)(eb.c, {
```

#### 7. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L63)

```diff
-         id: `clientGameHud-${Od}`,
+         id: `clientGameHud-${wb}`,
```

#### 8. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L77)

```diff
-         return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
+         return null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null
```

#### 9. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L82)

```diff
-           Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
+           Hb(null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L90)

```diff
-   38264: (dd, Od, md) => {
+   37930: (bb, wb, Mb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L92-L93` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L92-L93) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L92-L93)

```diff
-       e: () => Hd,
-       f: () => wd
+       d: () => Eb,
+       e: () => Xb
```

#### 12. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L95-L107` → after: `L95-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L95-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L95-L107) · [Before (L95-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L95-L107)

```diff
-     md(35513);
-     var Wd = md(66),
-       Fd = md(1566),
-       Rd = md(2092),
-       Xd = md(2125),
-       Kd = md(29),
-       hd = md(3403),
-       vd = md(38273),
-       Qd = md(38280),
-       td = md(35499),
-       od = md(35511),
-       Nd = md(35524),
-       qd = md(1341);
+     Mb(35298);
+     var eb = Mb(64),
+       Hb = Mb(1611),
+       pb = Mb(2142),
+       Vb = Mb(2183),
+       gb = Mb(26),
+       lb = Mb(3503),
+       Lb = Mb(37933),
+       Ib = Mb(37936),
+       Ob = Mb(35289),
+       Ub = Mb(35294),
+       tb = Mb(35309),
+       Cb = Mb(1364);
```

#### 13. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L116-L117)

```diff
-       } = (0, Kd.p)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), Td = (0, hd.j)("gunshotOrigin"), pd = (0, Wd.useRef)(null), Yd = (0, Wd.useRef)(!1), [gd, Ed] = (0, Wd.useState)(yd);
-       (0, Fd.f)("cameraZoomSet", Ed), (0, Wd.useEffect)((() => {
+       } = (0, gb.o)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride", "crosshairGameView"]), sb = (0, lb.k)("gunshotOrigin"), mb = (0, eb.useRef)(null), hb = (0, eb.useRef)(!1), [zb, xb] = (0, eb.useState)(Fb);
+       (0, Hb.e)("cameraZoomSet", xb), (0, eb.useEffect)((() => {
```

#### 14. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L122)

```diff
-         Bd = (0, Nd.g)(),
+         Rb = (0, tb.f)(),
```

#### 15. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L126)

```diff
-       (0, Wd.useEffect)((() => (0, Qd.h)("crosshairAccuracy", wd)), []), (0, Fd.f)("mouseState", (dd => {
+       (0, eb.useEffect)((() => (0, Ib.e)("crosshairAccuracy", Xb)), []), (0, Hb.e)("mouseState", (bb => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L130)

```diff
-         Yd.current = Od, pd.current && (pd.current.style.transform = (0, od.g)(Od, Sd.current.growOnClick)), "shapes" === Sd.current.style && ud(Od)
+         hb.current = wb, mb.current && (mb.current.style.transform = (0, Ub.c)(wb, Db.current.growOnClick)), "shapes" === Db.current.style && Yb(wb)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L132-L133` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L132-L133) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L132-L133)

```diff
-       const Vd = (0, td.f)(Od, md.touchActionButtons);
-       return (null !== (dd = (0, vd.c)(bd, Hd)) && void 0 !== dd ? dd : (0, vd.j)(Jd, gd > 1, Vd, Td)) ? "movement" === Rd || "cursor" === Rd ? null : (0, qd.jsxs)(qd.Fragment, {
+       const Zb = (0, Ob.i)(wb, Mb.touchActionButtons);
+       return (null !== (bb = (0, Lb.b)(Bb, Eb)) && void 0 !== bb ? bb : (0, Lb.i)(jb, zb > 1, Zb, sb)) ? "movement" === pb || "cursor" === pb ? null : (0, Cb.jsxs)(Cb.Fragment, {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L135)

```diff
-           custom: Bd.forGuns && "shapes" === Bd.style ? Bd : null,
+           custom: Rb.forGuns && "shapes" === Rb.style ? Rb : null,
```

#### 19. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L137)

```diff
-         }), !xd && (0, qd.jsx)(od.d, {
+         }), !rb && (0, Cb.jsx)(Ub.b, {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L141)

```diff
-           pressed: "shapes" === Bd.style ? sd : Yd.current
+           pressed: "shapes" === Rb.style ? cb : hb.current
```

#### 21. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L172)

```diff
-       return ((0, vd.g)(dd) - (0, vd.g)(0)) * window.innerHeight / 100
+       return ((0, Lb.f)(bb) - (0, Lb.f)(0)) * window.innerHeight / 100
```

#### 22. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L178-L179` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L178-L179) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L178-L179)

```diff
-         const Od = `${(0,vd.g)(dd)}vh`;
-         bd[0].current.style.transform = `translateX(calc(0px - ${Od}))`, bd[1].current.style.transform = `translateX(calc(0px + ${Od}))`, bd[2].current.style.transform = `translateY(calc(0px - ${Od}))`, bd[3].current.style.transform = `translateY(calc(0px + ${Od}))`
+         const wb = `${(0,Lb.f)(bb)}vh`;
+         Bb[0].current.style.transform = `translateX(calc(0px - ${wb}))`, Bb[1].current.style.transform = `translateX(calc(0px + ${wb}))`, Bb[2].current.style.transform = `translateY(calc(0px - ${wb}))`, Bb[3].current.style.transform = `translateY(calc(0px + ${wb}))`
```

#### 23. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L181)

```diff
-       Td.current && (Td.current.style.filter = `blur(${Math.round(dd/10)}px)`)
+       sb.current && (sb.current.style.filter = `blur(${Math.round(bb/10)}px)`)
```

#### 24. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L189)

```diff
-       const Rd = (0, Fd.i)("aimingOverlay", "none"),
+       const pb = (0, Hb.h)("aimingOverlay", "none"),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L218)

```diff
-           children: [Od && (0, qd.jsx)(od.d, {
+           children: [wb && (0, Cb.jsx)(Ub.b, {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L265)

```diff
-   35535: (dd, Od, md) => {
+   35320: (bb, wb, Mb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L267)

```diff
-       b: () => Rd
+       c: () => pb
```

#### 28. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L269-L270` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L269-L270) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L269-L270)

```diff
-     var Wd = md(5197),
-       Fd = md(5206);
+     var eb = Mb(5387),
+       Hb = Mb(5395);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L281)

```diff
-       return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
+       return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
```

#### 30. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L284)

```diff
-   35511: (dd, Od, md) => {
+   35294: (bb, wb, Mb) => {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L286-L287` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L286-L287) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L286-L287)

```diff
-       d: () => Hd,
-       g: () => qd
+       b: () => Eb,
+       c: () => Cb
```

#### 32. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L289-L290)

```diff
-     md(35513);
-     var Wd = md(1155),
+     Mb(35298);
+     var eb = Mb(1159),
```

#### 33. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L292-L293` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L292-L293) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L292-L293)

```diff
-       Rd = md(66),
-       Xd = md(35508);
+       pb = Mb(64),
+       Vb = Mb(35291);
```

#### 34. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L371)

```diff
-         outlines: hd > 0 ? Nd : [],
+         outlines: lb > 0 ? tb : [],
```

#### 35. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L395)

```diff
-     var od = md(1341);
+     var Ub = Mb(1364);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L399)

```diff
-       return dd && Od ? `scale(${Nd})` : "scale(1)"
+       return bb && wb ? `scale(${tb})` : "scale(1)"
```

#### 37. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L413)

```diff
-       if (dd.color !== Xd.d.color && (md.color = (0, Xd.j)(dd.color)), dd.opacity !== Xd.d.opacity && (md.opacity = dd.opacity / 100), dd.outline !== Xd.d.outline || dd.outlineColor !== Xd.d.outlineColor) {
+       if (bb.color !== Vb.e.color && (Mb.color = (0, Vb.h)(bb.color)), bb.opacity !== Vb.e.opacity && (Mb.opacity = bb.opacity / 100), bb.outline !== Vb.e.outline || bb.outlineColor !== Vb.e.outlineColor) {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L415-L416` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L415-L416) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L415-L416)

```diff
-           Wd = (0, Xd.j)(dd.outlineColor);
-         md.textShadow = Od > 0 ? `-${Od}px 0 ${Wd}, 0 ${Od}px ${Wd}, ${Od}px 0 ${Wd}, 0 -${Od}px ${Wd}` : "none"
+           eb = (0, Vb.h)(bb.outlineColor);
+         Mb.textShadow = wb > 0 ? `-${wb}px 0 ${eb}, 0 ${wb}px ${eb}, ${wb}px 0 ${eb}, 0 -${wb}px ${eb}` : "none"
```

#### 39. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L418)

```diff
-       if (dd.size !== Xd.d.size) {
+       if (bb.size !== Vb.e.size) {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L420)

```diff
-         md.fontSize = Od ? `calc(max(1.3rem, 18px) * ${Wd})` : `calc(1.3rem * ${Wd})`, md.marginTop = `-${yd}em`, md.transformOrigin = `50% calc(50% + ${yd}em)`
+         Mb.fontSize = wb ? `calc(max(1.3rem, 18px) * ${eb})` : `calc(1.3rem * ${eb})`, Mb.marginTop = `-${Fb}em`, Mb.transformOrigin = `50% calc(50% + ${Fb}em)`
```

#### 41. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L470)

```diff
-         background: dd.filled ? md : void 0
+         background: bb.filled ? Mb : void 0
```

#### 42. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L525)

```diff
-               md((Od => Od.dpr === Wd && Od.box.left === dd.left && Od.box.top === dd.top && Od.box.width === dd.width && Od.box.height === dd.height ? Od : {
+               Mb((wb => wb.dpr === eb && wb.box.left === bb.left && wb.box.top === bb.top && wb.box.width === bb.width && wb.box.height === bb.height ? wb : {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L544` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L544) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L544)

```diff
-       const bd = hd(Od, Hd, Kd && Od.growOnClick ? Nd : 1),
+       const Bb = lb(wb, Eb, gb && wb.growOnClick ? tb : 1),
```

#### 44. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L553-L554)

```diff
-         pd = (0, Xd.j)(Od.color),
-         wd = (0, Xd.j)(Od.outlineColor),
+         mb = (0, Vb.h)(wb.color),
+         Xb = (0, Vb.h)(wb.outlineColor),
```

#### 45. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L572)

```diff
-       const xd = null !== vd && void 0 !== vd ? vd : Ud.current;
+       const rb = null !== Lb && void 0 !== Lb ? Lb : Kb.current;
```

#### 46. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L596)

```diff
-             }, `o${Od}`))), bd.ring && (0, od.jsx)("div", {
+             }, `o${wb}`))), Bb.ring && (0, Ub.jsx)("div", {
```

#### 47. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L603)

```diff
-             }, `f${Od}`)))]
+             }, `f${wb}`)))]
```

#### 48. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L609)

```diff
-   35521: (dd, Od, md) => {
+   35305: (bb, wb, Mb) => {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L611)

```diff
-       c: () => Qd,
+       d: () => Ib,
```

#### 50. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L613)

```diff
-       h: () => Hd
+       g: () => Eb
```

#### 51. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L615)

```diff
-     var Wd = md(35508);
+     var eb = Mb(35291);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L659)

```diff
-         } = Wd.b[Fd];
+         } = eb.c[Hb];
```

#### 53. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L672)

```diff
-       for (const Od of dd.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${vd}})`, "gi"))) {
+       for (const wb of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Lb}})`, "gi"))) {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L683)

```diff
-           ...Wd.d,
+           ...eb.e,
```

#### 55. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L695)

```diff
-         } = Wd.b[Rd];
+         } = eb.c[pb];
```

#### 56. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L701)

```diff
-   35508: (dd, Od, md) => {
+   35291: (bb, wb, Mb) => {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L703-L704` → after: `L703-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L703-L704) · [Before (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L703-L704)

```diff
-       b: () => Wd,
-       d: () => Fd,
+       c: () => eb,
+       e: () => Hb,
```

#### 58. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L706` → after: `L706-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L706-L707) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L706)

```diff
-       j: () => vd,
+       h: () => Lb,
+       k: () => lb,
```

#### 59. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L708-L710` → after: `L709-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L709-L710) · [Before (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L708-L710)

```diff
-       o: () => Qd,
-       q: () => Kd,
-       u: () => Xd
+       p: () => gb,
+       q: () => Vb
```

#### 60. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L798)

```diff
-       const hd = (null !== (md = String(Kd).split(".")[1]) && void 0 !== md ? md : "").length,
+       const lb = (null !== (Mb = String(gb).split(".")[1]) && void 0 !== Mb ? Mb : "").length,
```

#### 61. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L821)

```diff
-       return `#${dd.toString(16).padStart(6,"0")}`
+       return `#${bb.toString(16).padStart(6,"0")}`
```

#### 62. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L829)

```diff
-   35524: (dd, Od, md) => {
+   35309: (bb, wb, Mb) => {
```

#### 63. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L831-L832` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L831-L832) · [Before (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L831-L832)

```diff
-       c: () => td,
-       g: () => od
+       d: () => Ob,
+       f: () => Ub
```

#### 64. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L834-L837` → after: `L834-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L834-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L834-L837) · [Before (L834-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L834-L837)

```diff
-     var Wd = md(66),
-       Fd = md(46),
-       Rd = md(35521),
-       Xd = md(35508);
+     var eb = Mb(64),
+       Hb = Mb(43),
+       pb = Mb(35305),
+       Vb = Mb(35291);
```

#### 65. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L845-L846` → after: `L845-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L845-L846) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L845-L846)

```diff
-         const Od = Fd.k.getItem(Kd);
-         hd = null !== (dd = "string" === typeof Od ? (0, Rd.e)(Od) : null) && void 0 !== dd ? dd : Xd.d
+         const wb = Hb.i.getItem(gb);
+         lb = null !== (bb = "string" === typeof wb ? (0, pb.e)(wb) : null) && void 0 !== bb ? bb : Vb.e
```

#### 66. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L852)

```diff
-       hd = dd, (0, Xd.n)(dd) ? Fd.k.removeItem(Kd) : Fd.k.setItem(Kd, (0, Rd.h)(dd));
+       lb = bb, (0, Vb.k)(bb) ? Hb.i.removeItem(gb) : Hb.i.setItem(gb, (0, pb.g)(bb));
```

#### 67. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L869)

```diff
-   10106: (dd, Od, md) => {
+   10292: (bb, wb, Mb) => {
```

#### 68. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L871-L872` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L871-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L871-L872)

```diff
-       d: () => Fd,
-       f: () => Xd
+       b: () => Hb,
+       e: () => Vb
```

#### 69. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L874)

```diff
-     var Wd = md(210);
+     var eb = Mb(214);
```

#### 70. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L884)

```diff
-         return Wd.V.flatMap((dd => {
+         return eb.R.flatMap((bb => {
```

#### 71. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L886` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L886) · [Before (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L886)

```diff
-           const md = null !== (Od = this.marks.get(dd)) && void 0 !== Od ? Od : Rd.marks.get(dd);
+           const Mb = null !== (wb = this.marks.get(bb)) && void 0 !== wb ? wb : pb.marks.get(bb);
```

#### 72. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L899)

```diff
-   38273: (dd, Od, md) => {
+   37933: (bb, wb, Mb) => {
```

#### 73. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L912-L914` → after: `L912-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L912-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L912-L914) · [Before (L912-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L912-L914)

```diff
-       c: () => Rd,
-       g: () => Fd,
-       j: () => Wd
+       b: () => pb,
+       f: () => Hb,
+       i: () => eb
```

#### 74. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L917)

```diff
-   38280: (dd, Od, md) => {
+   37936: (bb, wb, Mb) => {
```

#### 75. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L919-L920` → after: `L919-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L919-L920) · [Before (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L919-L920)

```diff
-       d: () => Kd,
-       h: () => Xd
+       b: () => gb,
+       e: () => Vb
```

#### 76. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L961)

```diff
-   35499: (dd, Od, md) => {
+   35289: (bb, wb, Mb) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L963-L964` → after: `L963-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L963-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L963-L964) · [Before (L963-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L963-L964)

```diff
-       b: () => Rd,
-       f: () => Fd
+       e: () => pb,
+       i: () => Hb
```

#### 78. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L966)

```diff
-     var Wd = md(29);
+     var eb = Mb(26);
```

#### 79. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L973)

```diff
-       return Fd(Wd.e.get("isTouchScreen"), Wd.e.get("clientEscMenuOptions").touchActionButtons)
+       return Hb(eb.c.get("isTouchScreen"), eb.c.get("clientEscMenuOptions").touchActionButtons)
```

#### 80. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L976)

```diff
-   9850: (dd, Od, md) => {
+   10064: (bb, wb, Mb) => {
```

#### 81. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L978-L979` → after: `L978-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L978-L979) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L978-L979)

```diff
-       b: () => Rd,
-       d: () => Fd
+       d: () => pb,
+       g: () => Hb
```

#### 82. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L996)

```diff
-   37958: (dd, Od, md) => {
+   37646: (bb, wb, Mb) => {
```

#### 83. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L998-L1000` → after: `L998-L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L998-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L998-L1000) · [Before (L998-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L998-L1000)

```diff
-       b: () => Rd,
-       d: () => hd,
-       e: () => Xd
+       e: () => pb,
+       g: () => lb,
+       i: () => Vb
```

#### 84. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1002-L1003` → after: `L1002-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1002-L1003) · [Before (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1002-L1003)

```diff
-     var Wd = md(701),
-       Fd = md(2402);
+     var eb = Mb(661),
+       Hb = Mb(2451);
```

#### 85. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1006)

```diff
-       return dd === (0, Fd.c)().bV ? (0, Fd.c)().YV : dd
+       return bb === (0, Hb.h)().HJ ? (0, Hb.h)().VJ : bb
```

#### 86. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1010` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1010) · [Before (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1010)

```diff
-       return !(0, Wd.O)(dd) && Rd(dd) === (0, Fd.c)().YV
+       return !(0, eb.K)(bb) && pb(bb) === (0, Hb.h)().VJ
```

#### 87. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1015)

```diff
-       return (0, Fd.c)().physics[Kd][1]
+       return (0, Hb.h)().physics[gb][1]
```

#### 88. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1018)

```diff
-   38063: (dd, Od, md) => {
+   37737: (bb, wb, Mb) => {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1021)

```diff
-       LobbyLeaderboard: () => xd.c,
+       LobbyLeaderboard: () => rb.b,
```

#### 90. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1025)

```diff
-       matchmakeForAhead: () => Kd.f,
+       matchmakeForAhead: () => gb.c,
```

#### 91. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1028-L1034` → after: `L1028-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1028-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1028-L1034) · [Before (L1028-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1028-L1034)

```diff
-     var Wd = md(1304),
-       Fd = md(180),
-       Rd = md(29),
-       Xd = md(38068),
-       Kd = md(38071),
-       hd = md(2116),
-       vd = md(38112);
+     var eb = Mb(1319),
+       Hb = Mb(192),
+       pb = Mb(26),
+       Vb = Mb(37742),
+       gb = Mb(37744),
+       lb = Mb(2167),
+       Lb = Mb(37776);
```

#### 92. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1037)

```diff
-       return !1 !== hd.e.get("canCustomiseChar")
+       return !1 !== lb.c.get("canCustomiseChar")
```

#### 93. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1040-L1046` → after: `L1040-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1040-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1040-L1046) · [Before (L1040-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1040-L1046)

```diff
-     var od = md(1415),
-       Nd = md(5341),
-       qd = md(1306),
-       Hd = md(285),
-       yd = md(4820),
-       bd = md(5336),
-       Td = md(10097);
+     var Ub = Mb(1447),
+       tb = Mb(5514),
+       Cb = Mb(1321),
+       Eb = Mb(294),
+       Fb = Mb(4967),
+       Bb = Mb(5511),
+       sb = Mb(10286);
```

#### 94. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1051)

```diff
-         return !0 !== (null === dd || void 0 === dd ? void 0 : dd.saveData) && !/2g$/.test(null !== (Od = null === dd || void 0 === dd ? void 0 : dd.effectiveType) && void 0 !== Od ? Od : "")
+         return !0 !== (null === bb || void 0 === bb ? void 0 : bb.saveData) && !/2g$/.test(null !== (wb = null === bb || void 0 === bb ? void 0 : bb.effectiveType) && void 0 !== wb ? wb : "")
```

#### 95. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1058)

```diff
-         language: qd.f.get().getCurrentLanguageCode()
+         language: Cb.g.get().getCurrentLanguageCode()
```

#### 96. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1064` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1064) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1064)

```diff
-         (0, Nd.y)(dd)
+         (0, tb.q)(bb)
```

#### 97. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1073-L1076` → after: `L1073-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1073-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1073-L1076) · [Before (L1073-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1073-L1076)

```diff
-     var Ed = md(4664),
-       Jd = md(843);
-     var Ud = md(38128),
-       xd = md(38540);
+     var xb = Mb(4835),
+       jb = Mb(829);
+     var Kb = Mb(37788),
+       rb = Mb(38207);
```

#### 98. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1079` → after: `L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1079) · [Before (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1079)

```diff
-       return md.e(252).then((() => md(45327)))
+       return Mb.e(252).then((() => Mb(45145)))
```

#### 99. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1083` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1083) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1083)

```diff
-       return md.e(611).then((() => md(45334)))
+       return Mb.e(611).then((() => Mb(45153)))
```

#### 100. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1087` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1087) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1087)

```diff
-         if ((0, Nd.e)()) {
+         if ((0, tb.f)()) {
```

#### 101. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1089)

```diff
-             await (0, Nd.u)("wasm loads ahead");
+             await (0, tb.p)("wasm loads ahead");
```

#### 102. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1091)

```diff
-             await Promise.race([dd.startLoadAheadOfJoin(Yd()), gd()]), await (0, Nd.u)("wasm previews");
+             await Promise.race([bb.startLoadAheadOfJoin(hb()), zb()]), await (0, tb.p)("wasm previews");
```

#### 103. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1094-L1095` → after: `L1094-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1094-L1095) · [Before (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1094-L1095)

```diff
-             } = await Promise.all([md.e(177), md.e(91), md.e(225), md.e(158), md.e(246), md.e(245), md.e(244), md.e(223), md.e(50), md.e(161), md.e(243), md.e(72)]).then((() => md(45347)));
-             Od().prefetch((0, Nd.e)() ? Nd.u : void 0)
+             } = await Promise.all([Mb.e(177), Mb.e(91), Mb.e(225), Mb.e(158), Mb.e(246), Mb.e(245), Mb.e(244), Mb.e(223), Mb.e(50), Mb.e(161), Mb.e(243), Mb.e(72)]).then((() => Mb(45163)));
+             wb().prefetch((0, tb.f)() ? tb.p : void 0)
```

#### 104. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1104)

```diff
-       (0, vd.d)(dd, Qd)
+       (0, Lb.c)(bb, Ib)
```

#### 105. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1109` → after: `L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1109) · [Before (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1109)

```diff
-         (0, Hd.e)((() => {
+         (0, Eb.b)((() => {
```

#### 106. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1111)

```diff
-         })), await Od, (0, Hd.e)(wd)
+         })), await wb, (0, Eb.b)(Xb)
```

#### 107. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1116)

```diff
-     const ud = Rd.e.get("router");
+     const Yb = pb.c.get("router");
```

#### 108. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1118)

```diff
-       if ((0, Jd.e)(Od.state.location.pathname)) return void(0, Td.loadWasmPlay)().catch((() => {}));
+       if ((0, jb.c)(wb.state.location.pathname)) return void(0, sb.loadWasmPlay)().catch((() => {}));
```

#### 109. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1120)

```diff
-         (0, Jd.e)(Wd.location.pathname) && (md(), (0, Ed.e)().then((() => {
+         (0, jb.c)(eb.location.pathname) && (Mb(), (0, xb.e)().then((() => {
```

#### 110. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1124-L1125` → after: `L1124-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1124-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1124-L1125) · [Before (L1124-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1124-L1125)

```diff
-     }(ud), (0, Xd.d)();
-     const Vd = (0, Kd.d)((async function(dd, Od) {
+     }(Yb), (0, Vb.b)();
+     const Zb = (0, gb.b)((async function(bb, wb) {
```

#### 111. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1138` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1138) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1138)

```diff
-         return console.error("The wasm client did not load:", td), (0, od.l)({
+         return console.error("The wasm client did not load:", Ob), (0, Ub.n)({
```

#### 112. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1140` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1140) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1140)

```diff
-         }), Wd.e.errorWithCode(String(td), Fd.l.CONNECT_TO_GAME_SERVER, {
+         }), eb.d.errorWithCode(String(Ob), Hb.i.CONNECT_TO_GAME_SERVER, {
```

#### 113. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1143` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1143) · [Before (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1143)

```diff
-           Ad: Od.aborted
+           Yb: wb.aborted
```

#### 114. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1158` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1158) · [Before (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1158)

```diff
-   10097: (dd, Od, md) => {
+   10286: (bb, wb, Mb) => {
```

#### 115. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1165-L1171` → after: `L1165-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1165-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1165-L1171) · [Before (L1165-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1165-L1171)

```diff
-     var Wd = md(4365),
-       Fd = md(3206),
-       Rd = md(2319),
-       Xd = md(5318),
-       Kd = md(4734),
-       hd = md(5336),
-       vd = md(10106);
+     var eb = Mb(4522),
+       Hb = Mb(3287),
+       pb = Mb(2364),
+       Vb = Mb(5498),
+       gb = Mb(4896),
+       lb = Mb(5511),
+       Lb = Mb(10292);
```

#### 116. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1175` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1175) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1175)

```diff
-       return Promise.all([md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(161), md.e(256), md.e(71)]).then((() => md(42638)))
+       return Promise.all([Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(161), Mb.e(256), Mb.e(71)]).then((() => Mb(42346)))
```

#### 117. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1179` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1179) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1179)

```diff
-       return Promise.all([md.e(88), md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(223), md.e(161), md.e(251), md.e(243), md.e(103), md.e(247), md.e(256), md.e(76)]).then((() => md(42818)))
+       return Promise.all([Mb.e(88), Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(223), Mb.e(161), Mb.e(251), Mb.e(243), Mb.e(103), Mb.e(247), Mb.e(256), Mb.e(76)]).then((() => Mb(42531)))
```

#### 118. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1183)

```diff
-       Promise.all([md.e(85), md.e(89), md.e(86), md.e(87), md.e(88), md.e(105), md.e(102), md.e(307), md.e(127), md.e(281), md.e(255), md.e(247), md.e(55)]).then((() => md(42968))).catch((() => {}))
+       Promise.all([Mb.e(85), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(105), Mb.e(102), Mb.e(307), Mb.e(127), Mb.e(281), Mb.e(255), Mb.e(247), Mb.e(55)]).then((() => Mb(42677))).catch((() => {}))
```

#### 119. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1187` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1187) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1187)

```diff
-       return Xd.b.cancelDownloadForJoin(), (0, Kd.c)(), (0, Fd.f)(), (0, hd.e)(), (0, Rd.g)(), Nd(), td().then((dd => {
+       return Vb.b.cancelDownloadForJoin(), (0, gb.e)(), (0, Hb.f)(), (0, lb.f)(), (0, pb.j)(), tb(), Ob().then((bb => {
```

#### 120. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1192-L1193` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1192-L1193) · [Before (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1192-L1193)

```diff
-       }), (() => {})), Qd ??= od().then((dd => ((0, vd.f)("phase_chunk"), dd.startWasmPlay(), (0, vd.f)("phase_start"), dd.followPageUiPack((dd => {
-         Wd.c.showGamePack(dd)
+       }), (() => {})), Ib ??= Ub().then((bb => ((0, Lb.e)("phase_chunk"), bb.startWasmPlay(), (0, Lb.e)("phase_start"), bb.followPageUiPack((bb => {
+         eb.d.showGamePack(bb)
```

#### 121. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1200-L1201` → after: `L1200-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1200-L1201) · [Before (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1200-L1201)

```diff
-       return Nd(), md.e(132).then((() => md(42999))).catch((() => {})), od().then((() => {
-         (0, vd.f)("phase_chunk")
+       return tb(), Mb.e(132).then((() => Mb(42721))).catch((() => {})), Ub().then((() => {
+         (0, Lb.e)("phase_chunk")
```

#### 122. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1211` → after: `L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1211) · [Before (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1211)

```diff
-   37939: (dd, Od, md) => {
+   37627: (bb, wb, Mb) => {
```

#### 123. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1213)

```diff
-       d: () => Jd
+       c: () => jb
```

#### 124. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1215-L1222` → after: `L1215-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1215-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1215-L1222) · [Before (L1215-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1215-L1222)

```diff
-     var Wd = md(37942),
-       Fd = md(218),
-       Rd = md(5641),
-       Xd = md(37948),
-       Kd = md(37955),
-       hd = md(38006),
-       vd = md(37958),
-       Qd = md(415),
+     var eb = Mb(37630),
+       Hb = Mb(225),
+       pb = Mb(5766),
+       Vb = Mb(37634),
+       gb = Mb(37641),
+       lb = Mb(37695),
+       Lb = Mb(37646),
+       Ib = Mb(398),
```

#### 125. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1224-L1226` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1224-L1225) · [Before (L1224-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1224-L1226)

```diff
-       od = md(2402),
-       Nd = md(38003),
-       qd = md(32),
+       Ub = Mb(2451),
+       tb = Mb(37691),
```

#### 126. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1228-L1232` → after: `L1227-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1227-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1227-L1232) · [Before (L1228-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1228-L1232)

```diff
-       yd = md(37965),
-       bd = md(37974),
-       Td = md(37982),
-       pd = md(37989),
-       Yd = md(37996);
+       Eb = Mb(26),
+       Fb = Mb(37653),
+       Bb = Mb(37659),
+       sb = Mb(37668),
+       mb = Mb(37677),
+       hb = Mb(37687);
```

#### 127. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1249-L1250` → after: `L1249-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1249-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1249-L1250) · [Before (L1249-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1249-L1250)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new hd.h, this._howl = (0, Kd.countDecodesAs)(new Rd.Howl({
-           src: [...(0, Wd.t)(dd).src],
+         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new lb.f, this._howl = (0, gb.countDecodesAs)(new pb.Howl({
+           src: [...(0, eb.v)(bb).src],
```

#### 128. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1286` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1286) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1286)

```diff
-             return md = Hd.e.get("soundOnFromAd") ? dd : 0, null === (Fd = this.liveHowl()) || void 0 === Fd || Fd.volume(Math.min(1, md * this._volumeMultiplier.getTotalMultipliedVal()), Od), Wd
+             return Mb = Eb.c.get("soundOnFromAd") ? bb : 0, null === (Hb = this.liveHowl()) || void 0 === Hb || Hb.volume(Math.min(1, Mb * this._volumeMultiplier.getTotalMultipliedVal()), wb), eb
```

#### 129. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1325)

```diff
-         (0, Xd.e)(this._howl, (() => {
+         (0, Vb.d)(this._howl, (() => {
```

#### 130. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1341)

```diff
-           refDistance: hd = Nd.i,
+           refDistance: lb = tb.j,
```

#### 131. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1364` → after: `L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1364) · [Before (L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1364)

```diff
-         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new yd.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, qd.j.subscribe("appManagerUpdated|soundVolume", (dd => {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new Fb.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Cb.k.subscribe("appManagerUpdated|soundVolume", (bb => {
```

#### 132. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1371)

```diff
-         let Rd, Xd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (md = (0, od.c)()) || void 0 === md ? void 0 : md.YV,
+         let pb, Vb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Mb = (0, Ub.h)()) || void 0 === Mb ? void 0 : Mb.VJ,
```

#### 133. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1373)

```diff
-           hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nd.i,
+           lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tb.j,
```

#### 134. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1376-L1377` → after: `L1376-L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1376-L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1376-L1377) · [Before (L1376-L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1376-L1377)

```diff
-         (0, od.c)() ? Rd = !!Array.isArray(Xd) || (0, vd.b)(Xd) !== (null === (qd = (0, od.c)()) || void 0 === qd ? void 0 : qd.YV): Rd = !1;
-         const Hd = (0, Wd.j)(dd),
+         (0, Ub.h)() ? pb = !!Array.isArray(Vb) || (0, Lb.e)(Vb) !== (null === (Cb = (0, Ub.h)()) || void 0 === Cb ? void 0 : Cb.VJ): pb = !1;
+         const Eb = (0, eb.k)(bb),
```

#### 135. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1383-L1385` → after: `L1383-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1383-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1383-L1385) · [Before (L1383-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1383-L1385)

```diff
-         const Td = (0, od.c)(),
-           pd = Array.isArray(Xd) ? Xd : Td.qE.hY(Xd),
-           Ed = Td.qE.hY(Td.YV);
+         const sb = (0, Ub.h)(),
+           mb = Array.isArray(Vb) ? Vb : sb.pR.Qm(Vb),
+           xb = sb.pR.Qm(sb.VJ);
```

#### 136. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1391` → after: `L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1391) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1391)

```diff
-               loudness: (0, yd.e)(Od, td().UX(pd, Ed), hd),
+               loudness: (0, Fb.f)(wb, Ob().DV(mb, xb), lb),
```

#### 137. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1395)

```diff
-                 return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.getDurationMs()) && void 0 !== dd ? dd : 0
+                 return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.getDurationMs()) && void 0 !== bb ? bb : 0
```

#### 138. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1413)

```diff
-         }), Jd.setPosition([pd[0], pd[1] + Fd.i.yb * Fd.i.playerEyeToHeightRatio, pd[2]]), !Qd && (0, Yd.g)() && (0, Yd.d)(Hd, dd, pd[0] - Ed[0], pd[2] - Ed[2]), Jd
+         }), jb.setPosition([mb[0], mb[1] + Hb.e.oF * Hb.e.playerEyeToHeightRatio, mb[2]]), !Ib && (0, hb.e)() && (0, hb.d)(Eb, bb, mb[0] - xb[0], mb[2] - xb[2]), jb
```

#### 139. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1416-L1417` → after: `L1416-L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1416-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1416-L1417) · [Before (L1416-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1416-L1417)

```diff
-         const Od = (0, Wd.o)(dd) ? [dd] : (0, Wd.v)(dd);
-         if (0 === Od.length) throw new Error(`Invalid sound name ${dd} (no sound has it or starts with it)`);
+         const wb = (0, eb.r)(bb) ? [bb] : (0, eb.w)(bb);
+         if (0 === wb.length) throw new Error(`Invalid sound name ${bb} (no sound has it or starts with it)`);
```

#### 140. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1421)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.c;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mb.b;
```

#### 141. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1425)

```diff
-         (0, Td.b)(md, {
+         (0, sb.d)(Mb, {
```

#### 142. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1427` → after: `L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1427) · [Before (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1427)

```diff
-           Ad: () => Wd !== this.idlePreloadGeneration,
+           Yb: () => eb !== this.idlePreloadGeneration,
```

#### 143. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1442` → after: `L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1442) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1442)

```diff
-         for (const Xd of null !== (Rd = (0, Wd.s)(Od)) && void 0 !== Rd ? Rd : []) {
+         for (const Vb of null !== (pb = (0, eb.t)(wb)) && void 0 !== pb ? pb : []) {
```

#### 144. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1449)

```diff
-         (0, pd.g)(Od);
+         (0, mb.f)(wb);
```

#### 145. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1451)

```diff
-         return md.setGlobalVolume(Hd.e.get("soundVolume")), dd[Od] = md, md
+         return Mb.setGlobalVolume(Eb.c.get("soundVolume")), bb[wb] = Mb, Mb
```

#### 146. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1458)

```diff
-           for (const [Od, md] of Object.entries(dd)) !bd.b.has((0, Wd.j)(Od)) && md.loaded() && (md.unloadOnceIdle(), delete dd[Od])
+           for (const [wb, Mb] of Object.entries(bb)) !Bb.d.has((0, eb.k)(wb)) && Mb.loaded() && (Mb.unloadOnceIdle(), delete bb[wb])
```

#### 147. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1462)

```diff
-   37755: (dd, Od, md) => {
+   37471: (bb, wb, Mb) => {
```

#### 148. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1466-L1467` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1466-L1467) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1466-L1467)

```diff
-       i: () => Sd,
-       m: () => sd
+       h: () => Db,
+       j: () => cb
```

#### 149. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1469-L1486` → after: `L1469-L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1469-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1469-L1486) · [Before (L1469-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1469-L1486)

```diff
-     var Wd = md(37763),
-       Fd = md(7874),
-       Rd = md(7953),
-       Xd = md(37765),
-       Kd = md(37772),
-       hd = md(37775),
-       vd = md(8286),
-       Qd = md(8407),
-       td = md(37784),
-       od = md(8587),
-       Nd = md(7723),
-       qd = md(8838),
-       Hd = md(37787),
-       yd = md(37789),
-       bd = md(8874),
-       Td = md(37796),
- ... (2 more removed lines; see GitHub link above)
+     var eb = Mb(37475),
+       Hb = Mb(8107),
+       pb = Mb(8175),
+       Vb = Mb(37478),
+       gb = Mb(37480),
+       lb = Mb(37486),
+       Lb = Mb(8465),
+       Ib = Mb(8583),
+       Ob = Mb(37490),
+       Ub = Mb(8793),
+       tb = Mb(7982),
+       Cb = Mb(9065),
+       Eb = Mb(37496),
+       Fb = Mb(37503),
+       Bb = Mb(9091),
+       sb = Mb(37507),
+ ... (2 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1488-L1492` → after: `L1488-L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1488-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1488-L1492) · [Before (L1488-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1488-L1492)

```diff
-         redTeam: Rd.e,
-         blueTeam: yd.d,
-         greenTeam: pd.f,
-         yellowTeam: bd.c,
-         cyanTeam: hd.e,
+         redTeam: pb.c,
+         blueTeam: Fb.h,
+         greenTeam: mb.e,
+         yellowTeam: Bb.d,
+         cyanTeam: lb.g,
```

#### 151. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1494-L1498` → after: `L1494-L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1494-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1494-L1498) · [Before (L1494-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1494-L1498)

```diff
-         pinkTeam: Qd.e,
-         grayTeam: td.f,
-         blackTeam: Hd.d,
-         orangeTeam: Td.f,
-         lilacTeam: Xd.h,
+         pinkTeam: Ib.g,
+         grayTeam: Ob.d,
+         blackTeam: Eb.e,
+         orangeTeam: sb.h,
+         lilacTeam: Vb.d,
```

#### 152. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1500-L1501` → after: `L1500-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1500-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1500-L1501) · [Before (L1500-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1500-L1501)

```diff
-         magentaTeam: Kd.h,
-         brownTeam: Wd.g,
+         magentaTeam: gb.f,
+         brownTeam: eb.f,
```

#### 153. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1503-L1504` → after: `L1503-L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1503-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1503-L1504) · [Before (L1503-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1503-L1504)

```diff
-         lightGrayTeam: vd.g,
-         lightBlueTeam: qd.e
+         lightGrayTeam: Lb.e,
+         lightBlueTeam: Cb.d
```

#### 154. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1509` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1509) · [Before (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1509)

```diff
-       return `team-${dd.iconName}`
+       return `team-${bb.iconName}`
```

#### 155. `bundles/bloxd.io/chunks/js/wasmMatchmaking.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81dbR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-787fe7d0f5e4635459abe693aae2740434b466e8ed172491002d4a75a95f81db) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/wasmMatchmaking.js#L1514)

```diff
-         Od = Yd.E[ud];
+         wb = hb.O[Yb];
```
