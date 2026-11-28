# Changed — Bundle Modifications Report (Part 052 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `52 / 154` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (101 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 51. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L478-L480` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L478-L480) · [Before (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L478-L480)

```diff
-               const Od = KO && "keyboardMouse" === Wd.e.get("activeInputDevice") && !(0, Nd.D)(),
-                 md = (0, Nd.h)() ? [Vd.c] : [];
-               return ((0, Nd.h)() || Od) && (0, yd.g)(md) && dd.hasPlayer()
+               const wb = pw && "keyboardMouse" === eb.c.get("activeInputDevice") && !(0, tb.M)(),
+                 Mb = (0, tb.n)() ? [Zb.d] : [];
+               return ((0, tb.n)() || wb) && (0, Fb.h)(Mb) && bb.hasPlayer()
```

#### 52. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L484-L485` → after: `L484-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L484-L485) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L484-L485)

```diff
-                 md = (0, od.f)(),
-                 Wd = (0, Ld.q)(dd, (0, Ld.i)(md, (0, hd.h)("pause"), (0, Pd.c)().isSupported())),
+                 Mb = (0, Ub.h)(),
+                 eb = (0, Sb.z)(bb, (0, Sb.l)(Mb, (0, lb.h)("pause"), (0, Nb.c)().isSupported())),
```

#### 53. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L487)

```diff
-               return (0, Nd.h)() ? (vO = !1, (0, yd.g)() ? (QO = !1, dO.update(Fd.look, md, Wd.isHeld((0, hd.h)("use"))), pO(Wd, Fd.move, Od), void wO(Wd, Od)) : (QO || (QO = !0, Qd.lostToPadScreen(), bO()), void YO(Wd, Od))) : (vO || (yO(), vO = !0), void pO(Wd, Fd.move, Od))
+               return (0, tb.n)() ? (gw = !1, (0, Fb.h)() ? (lw = !1, Tb.update(Hb.look, Mb, eb.isHeld((0, lb.h)("use"))), Bw(eb, Hb.move, wb), void hw(eb, wb)) : (lw || (lw = !0, Ib.lostToPadScreen(), Ew()), void sw(eb, wb))) : (gw || (Cw(), gw = !0), void Bw(eb, Hb.move, wb))
```

#### 54. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L490)

```diff
-               (0, Nd.h)() && Qd.lostToPadScreen(), bO(dd)
+               (0, tb.n)() && Ib.lostToPadScreen(), Ew(bb)
```

#### 55. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L493)

```diff
-               (0, Nd.h)() && (0, yd.g)(Vd.h) && dd.hasPlayer() ? pO(Od, (0, Ld.h)(Od, (0, od.f)().swapSticks).move, performance.now(), !0) : bO()
+               (0, tb.n)() && (0, Fb.h)(Zb.i) && bb.hasPlayer() ? Bw(wb, (0, Sb.h)(wb, (0, Ub.h)().swapSticks).move, performance.now(), !0) : Ew()
```

#### 56. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L496)

```diff
-           EO = (0, Vd.g)(dd),
+           Xw = (0, Zb.h)(bb),
```

#### 57. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L498-L499` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L498-L499) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L498-L499)

```diff
-             const dd = Fd.j.subscribe(ud.c, (dd => {
-               !dd && (0, Nd.h)() && "inGame" === Wd.e.get("gameState") && Fd.j.lQ("showBottomMessage", {
+             const bb = Hb.k.subscribe(Yb.b, (bb => {
+               !bb && (0, tb.n)() && "inGame" === eb.c.get("gameState") && Hb.k.iI("showBottomMessage", {
```

#### 58. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L508)

```diff
-               Fd.j.unsubscribe(dd)
+               Hb.k.unsubscribe(bb)
```

#### 59. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L512)

```diff
-           bO(), dd.uninstall(), (0, cd.d)(!1), (0, ed.g)(!1), Fd.j.unsubscribe(gd), Fd.j.unsubscribe(FO), aO(), EO(), JO(), dO.uninstall()
+           Ew(), bb.uninstall(), (0, Qb.c)(!1), (0, ab.f)(!1), Hb.k.unsubscribe(zb), Hb.k.unsubscribe(Mw), zw(), Xw(), xw(), Tb.uninstall()
```

#### 60. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L516)

```diff
-   42518: (dd, Od, md) => {
+   42243: (bb, wb, Mb) => {
```

#### 61. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L518-L520` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L518-L520) · [Before (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L518-L520)

```diff
-       c: () => qd,
-       g: () => yd,
-       h: () => Nd
+       d: () => Cb,
+       h: () => Fb,
+       i: () => tb
```

#### 62. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L522-L530` → after: `L522-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L522-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L522-L530) · [Before (L522-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L522-L530)

```diff
-     var Wd = md(1349),
-       Fd = md(4908),
-       Rd = md(9935),
-       Xd = md(38465),
-       Kd = md(1860),
-       hd = md(1234),
-       vd = md(9341),
-       Qd = md(9848),
-       td = md(9953);
+     var eb = Mb(1373),
+       Hb = Mb(5062),
+       pb = Mb(10130),
+       Vb = Mb(38133),
+       gb = Mb(1934),
+       lb = Mb(1255),
+       Lb = Mb(9568),
+       Ib = Mb(10061),
+       Ob = Mb(10149);
```

#### 63. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L532-L534` → after: `L532-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L532-L534) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L532-L534)

```diff
-         emoteWheel: Rd.f,
-         quickChatWheel: Qd.b,
-         actionWheel: td.r
+         emoteWheel: pb.g,
+         quickChatWheel: Ib.c,
+         actionWheel: Ob.n
```

#### 64. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L538)

```diff
-       Hd = dd => (0, Wd.q)().includes(dd),
+       Eb = bb => (0, eb.u)().includes(bb),
```

#### 65. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L540` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L540) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L540)

```diff
-         const Od = [(0, vd.l)(qd, (() => dd.hasPlayer() && dd.isPlayerDead())), (0, vd.l)("sleeping", (() => Hd(Xd.g))), (0, vd.l)("turnstile", (() => Hd(hd.d))), (0, vd.l)("videoAd", Kd.f), (0, vd.l)("replay", (() => (0, Fd.g)() || dd.isReplayMode())), (0, vd.l)("freeCamera", (( … [truncated]
+         const wb = [(0, Lb.l)(Cb, (() => bb.hasPlayer() && bb.isPlayerDead())), (0, Lb.l)("sleeping", (() => Eb(Vb.e))), (0, Lb.l)("turnstile", (() => Eb(lb.f))), (0, Lb.l)("videoAd", gb.g), (0, Lb.l)("replay", (() => (0, Hb.c)() || bb.isReplayMode())), (0, Lb.l)("freeCamera", (( … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L549)

```diff
-   42510: (dd, Od, md) => {
+   42236: (bb, wb, Mb) => {
```

#### 67. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L551-L552` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L551-L552) · [Before (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L551-L552)

```diff
-       c: () => Fd,
-       g: () => hd,
+       b: () => Hb,
+       e: () => lb,
```

#### 68. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L554-L558` → after: `L554-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L554-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L554-L558) · [Before (L554-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L554-L558)

```diff
-       i: () => Qd,
-       j: () => Xd,
-       n: () => Rd,
-       o: () => vd,
-       q: () => td
+       l: () => Ib,
+       p: () => Vb,
+       s: () => pb,
+       v: () => Lb,
+       z: () => Ob
```

#### 69. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L560)

```diff
-     var Wd = md(9287);
+     var eb = Mb(9515);
```

#### 70. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L566)

```diff
-         const Fd = (0, Wd.h)(dd, Od.lookDeadzone);
+         const Hb = (0, eb.m)(bb, wb.lookDeadzone);
```

#### 71. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L585)

```diff
-             const Rd = (0, Wd.g)((0, Wd.h)(dd, Od.lookDeadzone), Od.lookCurve),
+             const pb = (0, eb.j)((0, eb.m)(bb, wb.lookDeadzone), wb.lookCurve),
```

#### 72. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L602-L603` → after: `L602-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L602-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L602-L603) · [Before (L602-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L602-L603)

```diff
-           mV: dd.yawRadPerSec * md,
-           RV: dd.pitchRadPerSec * md
+           DW: bb.yawRadPerSec * Mb,
+           cW: bb.pitchRadPerSec * Mb
```

#### 73. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L614)

```diff
-         const md = (0, Wd.h)(dd, Od),
+         const Mb = (0, eb.m)(bb, wb),
```

#### 74. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L631)

```diff
-         const Xd = md ? Rd : dd.latchedAtMs,
+         const Vb = Mb ? pb : bb.latchedAtMs,
```

#### 75. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L660)

```diff
-   42535: (dd, Od, md) => {
+   42251: (bb, wb, Mb) => {
```

#### 76. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L663)

```diff
-       e: () => Wd
+       c: () => eb
```

#### 77. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L680)

```diff
-         toggled: Fd ? !Kd : Kd
+         toggled: Hb ? !gb : gb
```

#### 78. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L683)

```diff
-         toggled: Wd || Fd ? !Kd : Kd
+         toggled: eb || Hb ? !gb : gb
```

#### 79. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L707-L708` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L707-L708) · [Before (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L707-L708)

```diff
-   42494: (dd, Od, md) => {
-     md(9989)
+   42222: (bb, wb, Mb) => {
+     Mb(10183)
```

#### 80. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L710)

```diff
-   42501: (dd, Od, md) => {
+   42230: (bb, wb, Mb) => {
```

#### 81. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L714-L725` → after: `L714-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L714-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L714-L725) · [Before (L714-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L714-L725)

```diff
-     var Wd = md(32),
-       Fd = md(9935),
-       Rd = md(9942),
-       Xd = md(9305),
-       Kd = md(9331),
-       hd = md(9311),
-       vd = md(42510),
-       Qd = md(42518),
-       td = md(9341),
-       od = md(9287),
-       Nd = md(9848),
-       qd = md(9953);
+     var eb = Mb(29),
+       Hb = Mb(10130),
+       pb = Mb(10137),
+       Vb = Mb(9525),
+       gb = Mb(9557),
+       lb = Mb(9536),
+       Lb = Mb(42236),
+       Ib = Mb(42243),
+       Ob = Mb(9568),
+       Ub = Mb(9515),
+       tb = Mb(10061),
+       Cb = Mb(10149);
```

#### 82. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L730)

```diff
-           Wd.j.lQ("emoteWheelPadAim", dd)
+           eb.k.iI("emoteWheelPadAim", bb)
```

#### 83. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L733)

```diff
-           Wd.j.lQ("requestEmoteWheelPadCommit", dd)
+           eb.k.iI("requestEmoteWheelPadCommit", bb)
```

#### 84. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L736` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L736) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L736)

```diff
-           Wd.j.lQ("requestEmoteWheelClose")
+           eb.k.iI("requestEmoteWheelClose")
```

#### 85. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L739)

```diff
-         isOpen: Nd.b,
+         isOpen: tb.c,
```

#### 86. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L742)

```diff
-           Wd.j.lQ(Nd.c, dd)
+           eb.k.iI(tb.d, bb)
```

#### 87. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L745)

```diff
-           Wd.j.lQ(Nd.h, dd)
+           eb.k.iI(tb.g, bb)
```

#### 88. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L748)

```diff
-           Wd.j.lQ(Nd.g)
+           eb.k.iI(tb.f)
```

#### 89. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L750)

```diff
-         keptOpenBy: [Qd.c]
+         keptOpenBy: [Ib.d]
```

#### 90. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L752)

```diff
-         isOpen: qd.r,
+         isOpen: Cb.n,
```

#### 91. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L755)

```diff
-           Wd.j.lQ(qd.d, dd)
+           eb.k.iI(Cb.d, bb)
```

#### 92. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L758)

```diff
-           Wd.j.lQ(qd.j, dd)
+           eb.k.iI(Cb.g, bb)
```

#### 93. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L761)

```diff
-           Wd.j.lQ(qd.g)
+           eb.k.iI(Cb.f)
```

#### 94. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L766)

```diff
-         return null !== (dd = Hd.find((dd => dd.isOpen()))) && void 0 !== dd ? dd : null
+         return null !== (bb = Eb.find((bb => bb.isOpen()))) && void 0 !== bb ? bb : null
```

#### 95. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L768-L769` → after: `L768-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L768-L769) · [Before (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L768-L769)

```diff
-       bd = dd => (0, Xd.N)(dd.openButton()),
-       Td = (dd, Od) => !(0, od.L)(dd.frame.values, Od),
+       Bb = bb => (0, Vb.O)(bb.openButton()),
+       sb = (bb, wb) => !(0, Ub.I)(bb.frame.values, wb),
```

#### 96. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L774)

```diff
-         return Kd.b.register({
+         return gb.d.register({
```

#### 97. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L781)

```diff
-               stick: (0, hd.f)().swapSticks ? "right" : "left"
+               stick: (0, lb.h)().swapSticks ? "right" : "left"
```

#### 98. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L788)

```diff
-             if (null !== (0, td.e)([...Qd.h, ...null !== (Fd = od.keptOpenBy) && void 0 !== Fd ? Fd : []])) return void od.close();
+             if (null !== (0, Ob.d)([...Ib.i, ...null !== (Hb = Ub.keptOpenBy) && void 0 !== Hb ? Hb : []])) return void Ub.close();
```

#### 99. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L790)

```diff
-               qd = (0, vd.h)(Wd.frame, (0, hd.f)().swapSticks),
+               Cb = (0, Lb.h)(eb.frame, (0, lb.h)().swapSticks),
```

#### 100. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L792)

```diff
-             dd !== od ? (dd = od, Od = !Td(Wd, Nd) || Math.hypot(Hd.x, Hd.y) >= Rd.F, md = !1) : md && (md = !1, Td(Wd, Nd) && (Od = !1)), od.aim(Hd);
+             bb !== Ub ? (bb = Ub, wb = !sb(eb, tb) || Math.hypot(Eb.x, Eb.y) >= pb.C, Mb = !1) : Mb && (Mb = !1, sb(eb, tb) && (wb = !1)), Ub.aim(Eb);
```

#### 101. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/257.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/257.js#L795)

```diff
-             return Wd.wasPressed(Yd) ? (Kd.b.consumeButton(Yd), void od.close()) : Wd.wasPressed(pd) || Wd.wasPressed(Nd) ? (Kd.b.consumeButton(pd), Kd.b.consumeButton(Nd), void od.commit(!1)) : void(Od && Td(Wd, Nd) && (Od = !1, od.commit(!0)))
+             return eb.wasPressed(hb) ? (gb.d.consumeButton(hb), void Ub.close()) : eb.wasPressed(mb) || eb.wasPressed(tb) ? (gb.d.consumeButton(mb), gb.d.consumeButton(tb), void Ub.commit(!1)) : void(wb && sb(eb, tb) && (wb = !1, Ub.commit(!0)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (127 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   40001: (dd, Od, md) => {
+   39687: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L6)

```diff
-       e: () => qd
+       c: () => Cb
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L8-L9)

```diff
-     var Wd = md(218),
-       Fd = md(39180);
+     var eb = Mb(225),
+       Hb = Mb(38873);
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L23-L24)

```diff
-         fX: .5,
-         Imd: !1
+         bg: .5,
+         qMb: !1
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L37-L38)

```diff
-         fX: .5,
-         Imd: !1
+         bg: .5,
+         qMb: !1
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L42-L43` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L42-L43) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L42-L43)

```diff
-           width: Wd.i.Hb,
-           height: Wd.i.yb
+           width: eb.e.yF,
+           height: eb.e.oF
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L46-L47)

```diff
-           width: Wd.i.Hb + .4,
-           height: Wd.i.yb + .6
+           width: eb.e.yF + .4,
+           height: eb.e.oF + .6
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L49-L52` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L49-L52) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L49-L52)

```diff
-         eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
-         rideHeight: Wd.i.yb - .3,
-         fX: .5,
-         Imd: !1
+         eyeHeight: eb.e.oF * eb.e.playerEyeToHeightRatio,
+         rideHeight: eb.e.oF - .3,
+         bg: .5,
+         qMb: !1
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L65-L66)

```diff
-         fX: .5,
-         Imd: !1
+         bg: .5,
+         qMb: !1
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L79-L80)

```diff
-         fX: .5,
-         Imd: !1
+         bg: .5,
+         qMb: !1
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L93-L94)

```diff
-         fX: .5,
-         Imd: !1
+         bg: .5,
+         qMb: !1
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L107-L108)

```diff
-         fX: .5,
-         Imd: !1
+         bg: .5,
+         qMb: !1
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L114-L115` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L114-L115) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L114-L115)

```diff
-             width: Wd.i.Hb,
-             height: Wd.i.yb
+             width: eb.e.yF,
+             height: eb.e.oF
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L118-L119)

```diff
-             width: Wd.i.Hb + .4,
-             height: Wd.i.yb + .6
+             width: eb.e.yF + .4,
+             height: eb.e.oF + .6
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L121-L124)

```diff
-           eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
-           rideHeight: Wd.i.yb - .1,
-           fX: Fd.i.fX,
-           Imd: !0
+           eyeHeight: eb.e.oF * eb.e.playerEyeToHeightRatio,
+           rideHeight: eb.e.oF - .1,
+           bg: Hb.f.bg,
+           qMb: !0
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L140-L141)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L154-L155` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L154-L155) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L154-L155)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L168-L169)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L182-L183)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L197-L198)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L211-L212)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L228-L229)

```diff
-             width: Wd.i.Hb,
-             height: Wd.i.yb
+             width: eb.e.yF,
+             height: eb.e.oF
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L232)

```diff
-             width: Wd.i.Hb + .4,
+             width: eb.e.yF + .4,
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L237-L238)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L253-L254)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L268-L269)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L283-L284)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L304-L305)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L319-L320` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L319-L320) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L319-L320)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L333-L334` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L333-L334) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L333-L334)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L338-L339)

```diff
-             width: Wd.i.Hb,
-             height: Wd.i.yb
+             width: eb.e.yF,
+             height: eb.e.oF
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L342-L343)

```diff
-             width: Wd.i.Hb + .4,
-             height: Wd.i.yb + .6
+             width: eb.e.yF + .4,
+             height: eb.e.oF + .6
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L345-L348` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L345-L348) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L345-L348)

```diff
-           eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
-           rideHeight: Wd.i.yb - .1,
-           fX: .5,
-           Imd: !1
+           eyeHeight: eb.e.oF * eb.e.playerEyeToHeightRatio,
+           rideHeight: eb.e.oF - .1,
+           bg: .5,
+           qMb: !1
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L361-L362)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L366-L367)

```diff
-             width: Wd.i.Hb,
-             height: Wd.i.yb
+             width: eb.e.yF,
+             height: eb.e.oF
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L370-L371` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L370-L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L370-L371)

```diff
-             width: Wd.i.Hb + .4,
-             height: Wd.i.yb + .6
+             width: eb.e.yF + .4,
+             height: eb.e.oF + .6
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L373-L376` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L373-L376) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L373-L376)

```diff
-           eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
-           rideHeight: Wd.i.yb - .1,
-           fX: .5,
-           Imd: !1
+           eyeHeight: eb.e.oF * eb.e.playerEyeToHeightRatio,
+           rideHeight: eb.e.oF - .1,
+           bg: .5,
+           qMb: !1
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L389-L390)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L403-L404)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L417-L418)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L431-L432` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L431-L432) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L431-L432)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L445-L446)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L459-L460)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L473-L474)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L487-L488)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L510-L511` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L510-L511) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L510-L511)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L524-L525)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L538-L539)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 49. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L552-L553` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L552-L553) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L552-L553)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 50. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L566-L567)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 51. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L581-L582)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 52. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L604-L605)

```diff
-           fX: .5,
-           Imd: !1
+           bg: .5,
+           qMb: !1
```

#### 53. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L613)

```diff
-   38603: (dd, Od, md) => {
+   38258: (bb, wb, Mb) => {
```

#### 54. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L615)

```diff
-       b: () => Wd
+       e: () => eb
```

#### 55. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L777)

```diff
-   39185: (dd, Od, md) => {
+   38882: (bb, wb, Mb) => {
```

#### 56. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L781)

```diff
-     var Wd = md(415),
+     var eb = Mb(398),
```

#### 57. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L783)

```diff
-       Rd = md(2057);
+       pb = Mb(2107);
```

#### 58. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L786)

```diff
-     const yd = ["b", 0, 1, 116, 9, "a", "i", 7, "e", 51, "d", 8, 255, "length", "c", 97, 3, 235, 194, "undefined", void 0, 150, 71, 63, 6, "fromCodePoint", 12, "push", 2, "h", 217, 91, 218, "f", 8191, 88, 13, 14, 4, 110, 192, "g", 5, 21, 193, 115, 127, 128, 126, null, 122, 123, 1 … [truncated]
+     const Fb = ["b", 0, 1, 8, "c", 41, 9, "g", "e", 86, 141, 255, "length", "d", 215, "undefined", void 0, 46, 3, 219, 203, 63, 6, "fromCodePoint", 7, 12, "push", "a", 195, 40, 156, 74, 91, 5, "f", 8191, 88, 13, 14, 4, 182, 147, 197, 2, 51, 1023, 65536, 10, 55296, 56320, "h", 100 … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L789-L791` → after: `L789-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L789-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L789-L791) · [Before (L789-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L789-L791)

```diff
-       return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-         for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = '"^u/+6,)>(=5?20cVk9HxA7_{rG&g1`bBOEzL;jfpZC*n~X[Ney3.om]I:WK%dRF!PQ|vMi#<DS8YJhU4lsT$}qwat@', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[4]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[8]] = yd[1], dd[-yd[9]] = yd[1], dd[yd[7]] = -yd … [truncated]
-           if (dd[yd[6]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[3]]]), dd[yd[6]] !== -yd[2])
+       return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = function(...bb) {
+         for (cb(bb[Fb[12]] = Fb[2], bb[-Fb[5]] = '2UiqZtAPzreTO.n7d$ua&G,v"+49=)m|k(hN#<f;6LQpJl~c5*^`18S[RMgX:0I/Wy%wF?]B@KjHx}!_Y{>D3VbCoEs', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[4]] = bb[Fb[0]].length, bb[-Fb[10]] = [], bb[Fb[8]] = Fb[1], bb[Fb[9]] = Fb[1], bb[Fb[7]] = -F … [truncated]
+           if (bb[Fb[6]] = bb[-Fb[5]].indexOf(bb[Fb[0]][bb[Fb[3]]]), bb[Fb[6]] !== -Fb[2])
```

#### 60. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L794)

```diff
-               sd(dd[yd[7]] += dd[yd[6]] * yd[31], dd[yd[8]] |= dd[yd[7]] << dd[-yd[9]], dd[-yd[9]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
+               cb(bb[Fb[7]] += bb[Fb[6]] * Fb[32], bb[Fb[8]] |= bb[Fb[7]] << bb[Fb[9]], bb[Fb[9]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
```

#### 61. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L796-L797` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L796-L797) · [Before (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L796-L797)

```diff
-                 sd(dd[yd[10]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[-yd[9]] -= yd[11])
-               } while (dd[-yd[9]] > yd[7]);
+                 cb(bb[-Fb[10]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[Fb[9]] -= Fb[3])
+               } while (bb[Fb[9]] > Fb[24]);
```

#### 62. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L799)

```diff
-             } return dd[yd[7]] > -yd[2] && dd[yd[10]].push((dd[yd[8]] | dd[yd[7]] << dd[-yd[9]]) & yd[12]), Td(dd[yd[10]])
+             } return bb[Fb[7]] > -Fb[2] && bb[-Fb[10]].push((bb[Fb[8]] | bb[Fb[7]] << bb[Fb[9]]) & Fb[11]), sb(bb[-Fb[10]])
```

#### 63. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L804` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L804) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L804)

```diff
-       return dd[yd[13]] = yd[2], typeof Qd !== yd[19] && Qd ? (new Qd).decode(new td(dd[yd[1]])) : typeof od !== yd[19] && od ? od.from(dd[yd[1]]).toString("utf-8") : Hd(dd[yd[1]])
+       return bb[Fb[12]] = Fb[2], typeof Ib !== Fb[15] && Ib ? (new Ib).decode(new Ob(bb[Fb[1]])) : typeof Ub !== Fb[15] && Ub ? Ub.from(bb[Fb[1]]).toString("utf-8") : Eb(bb[Fb[1]])
```

#### 64. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L808-L821` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L808) · [Before (L808-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L808-L821)

```diff
-       if (dd[yd[13]] = yd[16], dd[yd[1]] === function(...dd) {
-           return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-             for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = 'CBbwY8:i#o^q/=f<pK9Qx0zGa*]{R3@W+eTF~,HJU61.v|j2P([IVs$>5_?OLk}N!gMyduSh`rnt47)mAD"%cl&Z;XE', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[28]].length, dd[yd[38]] = [], dd[yd[32]] = yd[1], dd[yd[33]] = yd[1], dd[yd[3 … [truncated]
-               if (dd[yd[4]] = dd[yd[5]].indexOf(dd[yd[28]][dd[yd[29]]]), dd[yd[4]] !== -yd[2])
-                 if (dd[yd[30]] < yd[1]) dd[yd[30]] = dd[yd[4]];
-                 else {
-                   sd(dd[yd[30]] += dd[yd[4]] * yd[31], dd[yd[32]] |= dd[yd[30]] << dd[yd[33]], dd[yd[33]] += (dd[yd[30]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                   do {
-                     sd(dd[yd[38]].push(dd[yd[32]] & yd[12]), dd[yd[32]] >>= yd[11], dd[yd[33]] -= yd[11])
-                   } while (dd[yd[33]] > yd[7]);
-                   dd[yd[30]] = -yd[2]
-                 } return dd[yd[30]] > -yd[2] && dd[yd[38]].push((dd[yd[32]] | dd[yd[30]] << dd[yd[33]]) & yd[12]), Td(dd[yd[38]])
-           }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
-         }(109)) return dd[yd[2]] + dd[yd[28]]
+       if (bb[Fb[12]] = Fb[18], bb[Fb[1]] === Bb(77) + Fb[90]) return bb[Fb[2]] + bb[Fb[43]]
```

#### 65. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L825-L826` → after: `L812-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L812-L813) · [Before (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L825-L826)

```diff
-     sd(Kd = {}, hd = ["=#4e<Ye^$:I+Ks{E^1^3]ss.>P4B^", "dxH<JL.q85(`N[LjQ3b`3;C4z(QF^Lvj.#Ue(YSX6", 'N(8JB."{ZRpgw0*fnxB`"Wp?U%a|+L3EQvO,', "J5|>+]f[u(r", ')#,OWii9"Q35^NPkkXw+o;_o<kC{EeqZTDk,', ">XM+S:oz#xnkYc%zgvBmCz7LsF9s?TaE?;bD$Tsq6HHM~r(", ":03J0YHZYk1E&j?", "@PoSoo|z<W?8/y … [truncated]
-       sd(dd[yd[13]] = yd[1], dd[yd[17]] = [function() {
+     cb(gb = {}, lb = ["7/#j;H<c5%_waq", "+~Xz08r?gnjN2B@anU", '*SC1@xoYwaj8+#G=7~,|M/vNDWV:a4?ul$teCc,#y/]]V#/)1|4`"', "b57mR39)z[l$H4T", "jnZjh*!6^S[nM55hQAUm~]~OP", "s86`DBdiDO", '>`rS_?/MlT3tH4)N:Xt[VVa8bW[YZ:("{l<|T^9aRyz`ai&LaU', "tMEA&BlP57", "MvL`@h2", "[lwj<<gu8g;x<.k#$6m … [truncated]
+       cb(bb[Fb[12]] = Fb[1], bb[-Fb[14]] = [function() {
```

#### 66. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L834` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L821) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L834)

```diff
-       }], dd[yd[14]] = yd[20], dd[-yd[15]] = []);
+       }], bb[Fb[2]] = Fb[16], bb[Fb[4]] = []);
```

#### 67. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L836` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L823) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L836)

```diff
-         sd(dd[yd[14]] = Object, dd[-yd[15]][yd[27]]("".__proto__.constructor.name))
+         cb(bb[Fb[2]] = Object, bb[Fb[4]][Fb[26]]("".__proto__.constructor.name))
```

#### 68. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L838-L841` → after: `L825-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L825-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L825-L828) · [Before (L838-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L838-L841)

```diff
-       dd: for (dd[yd[16]] = yd[1]; dd[yd[16]] < dd[yd[17]][yd[13]]; dd[yd[16]]++) try {
-         for (dd[yd[14]] = dd[yd[17]][dd[yd[16]]](), dd[-yd[18]] = yd[1]; dd[-yd[18]] < dd[-yd[15]][yd[13]]; dd[-yd[18]]++)
-           if (typeof dd[yd[14]][dd[-yd[15]][dd[-yd[18]]]] === yd[19]) continue dd;
-         return dd[yd[14]]
+       bb: for (bb[Fb[13]] = Fb[1]; bb[Fb[13]] < bb[-Fb[14]][Fb[12]]; bb[Fb[13]]++) try {
+         for (bb[Fb[2]] = bb[-Fb[14]][bb[Fb[13]]](), bb[Fb[8]] = Fb[1]; bb[Fb[8]] < bb[Fb[4]][Fb[12]]; bb[Fb[8]]++)
+           if (typeof bb[Fb[2]][bb[Fb[4]][bb[Fb[8]]]] === Fb[15]) continue bb;
+         return bb[Fb[2]]
```

#### 69. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L843-L845` → after: `L830-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L830-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L830-L832) · [Before (L843-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L843-L845)

```diff
-       return dd[yd[14]] || this
-     }() || {}, Qd = vd.TextDecoder, td = vd.Uint8Array, od = vd.CQ, Nd = vd.String || String, qd = vd.Array || Array, Hd = function(...dd) {
-       return sd(dd[yd[13]] = yd[1], dd[yd[5]] = new qd(yd[47]), dd[yd[2]] = Nd[yd[25]] || Nd.fromCharCode, dd[yd[21]] = []),
+       return bb[Fb[2]] || this
+     }() || {}, Ib = Lb.TextDecoder, Ob = Lb.Uint8Array, Ub = Lb.uI, tb = Lb.String || String, Cb = Lb.Array || Array, Eb = function(...bb) {
+       return cb(bb[Fb[12]] = Fb[1], bb[Fb[27]] = new Cb(Fb[52]), bb[-Fb[28]] = tb[Fb[23]] || tb.fromCharCode, bb[Fb[17]] = []),
```

#### 70. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L847-L848` → after: `L834-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L834-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L834-L835) · [Before (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L847-L848)

```diff
-           for (sd(Od[yd[13]] = yd[2], Od[yd[2]] = yd[20], Od[-yd[22]] = yd[20], Od[yd[16]] = Od[yd[1]][yd[13]], dd[yd[21]][yd[13]] = yd[1]), Od[yd[10]] = yd[1]; Od[yd[10]] < Od[yd[16]];) sd(Od[-yd[22]] = Od[yd[1]][Od[yd[10]]++], Od[-yd[22]] <= yd[46] ? Od[yd[2]] = Od[-yd[22]] : O … [truncated]
-           return dd[yd[21]].join("")
+           for (cb(wb[Fb[12]] = Fb[2], wb[Fb[20]] = Fb[16], wb[-Fb[19]] = Fb[16], wb[Fb[18]] = wb[Fb[1]][Fb[12]], bb[Fb[17]][Fb[12]] = Fb[1]), wb[Fb[13]] = Fb[1]; wb[Fb[13]] < wb[Fb[18]];) cb(wb[-Fb[19]] = wb[Fb[1]][wb[Fb[13]]++], wb[-Fb[19]] <= Fb[103] ? wb[Fb[20]] = wb[-Fb[19]]  … [truncated]
+           return bb[Fb[17]].join("")
```

#### 71. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L850-L857` → after: `L837-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L837-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L837-L1042) · [Before (L850-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L850-L857)

```diff
-     }());
-     const gd = Fd()[bd(yd[39])](),
-       wd = Fd()[bd(yd[39])](),
-       Ed = Fd()[bd(yd[39])](),
-       Jd = Fd()[bd(yd[39])](),
-       Ud = Fd()[bd(yd[39])](),
-       xd = Fd()[bd(yd[39])](),
-       Bd = Fd()[bd(yd[39])](),
+     }()), Bb(Fb[83]) in hb && function(...bb) {
+       function wb(...bb) {
+         for (cb(bb[Fb[12]] = Fb[2], bb[Fb[2]] = 'E+^Mwz<s5bvSRW~aZB41x}HF!.eQY;i:h2g=(8t`?jL>Nq0O9PJ)o#*ml[nX7/%AT{ryC$@GVKpfD"_|IU]cku,&63d', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[29]] = bb[Fb[0]].length, bb[Fb[39]] = [], bb[Fb[33]] = Fb[1], bb[Fb[34]] = Fb[1], bb[-Fb[31]] = … [truncated]
+           if (bb[-Fb[30]] = bb[Fb[2]].indexOf(bb[Fb[0]][bb[Fb[3]]]), bb[-Fb[30]] !== -Fb[2])
+             if (bb[-Fb[31]] < Fb[1]) bb[-Fb[31]] = bb[-Fb[30]];
+             else {
+               cb(bb[-Fb[31]] += bb[-Fb[30]] * Fb[32], bb[Fb[33]] |= bb[-Fb[31]] << bb[Fb[34]], bb[Fb[34]] += (bb[-Fb[31]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+               do {
+                 cb(bb[Fb[39]].push(bb[Fb[33]] & Fb[11]), bb[Fb[33]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+               } while (bb[Fb[34]] > Fb[24]);
+               bb[-Fb[31]] = -Fb[2]
+             } return bb[-Fb[31]] > -Fb[2] && bb[Fb[39]].push((bb[Fb[33]] | bb[-Fb[31]] << bb[Fb[34]]) & Fb[11]), sb(bb[Fb[39]])
+       }
+ 
+       function Mb(...bb) {
+         return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = wb(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
+ ... (190 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L860-L863` → after: `L1045-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1045-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1045-L1048) · [Before (L860-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L860-L863)

```diff
-           return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-             for (sd(dd[yd[13]] = yd[2], dd[yd[40]] = 'AsDqnKLOGfjiZdEBTbWFcUCgXRHQSaYlNVtIPkmJ47>huo}!e|r{_2*M?]90#=@[15z6/+vx^yw~8)3&:`.%($p,";<', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[42]] = yd[1], dd[yd[33]] = yd[1], dd[yd[41 … [truncated]
-               if (dd[yd[6]] = dd[yd[40]].indexOf(dd[yd[0]][dd[yd[29]]]), dd[yd[6]] !== -yd[2])
-                 if (dd[yd[41]] < yd[1]) dd[yd[41]] = dd[yd[6]];
+           return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = function(...bb) {
+             for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = 'zx5"][4`31/*b.62KcDW,pgjt;Ysiy%TFJ:hOqGa(fkSwvU_{^=C!M$l#PQB<9d>me}@)I|~LuX&+rNR8n?oZEH0AV7', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[76]] = bb[Fb[0]].length, bb[Fb[75]] = [], bb[Fb[8]] = Fb[1], bb[Fb[34]] = Fb[1], bb[Fb[7]] … [truncated]
+               if (bb[Fb[6]] = bb[Fb[27]].indexOf(bb[Fb[0]][bb[Fb[50]]]), bb[Fb[6]] !== -Fb[2])
+                 if (bb[Fb[7]] < Fb[1]) bb[Fb[7]] = bb[Fb[6]];
```

#### 73. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L865` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1050) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L865)

```diff
-                   sd(dd[yd[41]] += dd[yd[6]] * yd[31], dd[yd[42]] |= dd[yd[41]] << dd[yd[33]], dd[yd[33]] += (dd[yd[41]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
+                   cb(bb[Fb[7]] += bb[Fb[6]] * Fb[32], bb[Fb[8]] |= bb[Fb[7]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
```

#### 74. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L867-L870` → after: `L1052-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1052-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1052-L1055) · [Before (L867-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L867-L870)

```diff
-                     sd(dd[yd[10]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[33]] -= yd[11])
-                   } while (dd[yd[33]] > yd[7]);
-                   dd[yd[41]] = -yd[2]
-                 } return dd[yd[41]] > -yd[2] && dd[yd[10]].push((dd[yd[42]] | dd[yd[41]] << dd[yd[33]]) & yd[12]), Td(dd[yd[10]])
+                     cb(bb[Fb[75]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                   } while (bb[Fb[34]] > Fb[24]);
+                   bb[Fb[7]] = -Fb[2]
+                 } return bb[Fb[7]] > -Fb[2] && bb[Fb[75]].push((bb[Fb[8]] | bb[Fb[7]] << bb[Fb[34]]) & Fb[11]), sb(bb[Fb[75]])
```

#### 75. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L873` → after: `L1058-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1058-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1058-L1066) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L873)

```diff
-         dd[yd[13]] = yd[16];
+         bb[Fb[12]] = Fb[18], wb(96) + "W" in hb && function(...bb) {
+           cb(bb[Fb[12]] = Fb[1], bb[Fb[27]] = function(...bb) {
+             for (cb(bb[Fb[12]] = Fb[2], bb[Fb[2]] = Fb[1], bb[Fb[0]] = {}, bb[-Fb[77]] = Fb[1], bb[-Fb[5]] = Fb[1], bb[Fb[33]] = Fb[1], bb[Fb[34]] = bb[Fb[1]].length), bb[-Fb[78]] = Fb[1]; bb[-Fb[78]] < bb[Fb[34]]; bb[-Fb[78]]++) {
+               for (cb(bb[Fb[0]] = {}, bb[-Fb[77]] = Fb[1], bb[-Fb[5]] = Fb[2]), bb[Fb[79]] = bb[-Fb[78]] + Fb[2]; bb[Fb[79]] < bb[Fb[34]]; bb[Fb[79]]++) bb[Fb[1]][bb[-Fb[78]]].x !== bb[Fb[1]][bb[Fb[79]]].x || bb[Fb[1]][bb[-Fb[78]]].y !== bb[Fb[1]][bb[Fb[79]]].y ? (bb[Fb[1]][bb[-F … [truncated]
+               cb(bb[-Fb[77]] += bb[-Fb[5]], bb[Fb[2]] = Math.max(bb[Fb[2]], bb[-Fb[77]]))
+             }
+             return bb[Fb[2]]
+           }, console.log(bb[Fb[27]]))
+         }();
```

#### 76. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L875` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1068) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L875)

```diff
-         return Fd()[bd(111) + bd(yd[68])](md, dd[yd[28]]), Fd()[Od(113)](dd[yd[1]], md, Fd()[Od(114)](md, dd[yd[2]]))
+         return Hb()[wb(97) + wb(Fb[86])](Mb, bb[Fb[43]]), Hb()[wb(99)](bb[Fb[1]], Mb, Hb()[wb(Fb[51])](Mb, bb[Fb[2]]))
```

#### 77. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L883-L886` → after: `L1076-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1076-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1076-L1079) · [Before (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L883-L886)

```diff
-         return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-           for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = '7u50~RFWABo#ZVh.Kdt/9va}L681]Yl2&MUg=;be?Tp@NG%($q:CO!Iz`[rf3<D_cEkP+4wJx*j)sHSXm^y{|n,"Qi>', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[14]] = dd[yd[28]].length, dd[yd[10]] = [], dd[yd[42]] = yd[1], dd[yd[24]] = yd[1], dd[-yd[44 … [truncated]
-             if (dd[-yd[43]] = dd[yd[5]].indexOf(dd[yd[28]][dd[yd[29]]]), dd[-yd[43]] !== -yd[2])
-               if (dd[-yd[44]] < yd[1]) dd[-yd[44]] = dd[-yd[43]];
+         return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = function(...bb) {
+           for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = ':z{#)y4u,(RH}&ACon2=9+@pgQYc.aW`|?_f;Zv7ljk0Sq%d]PE1<thMD5"6XxNFwbGB~UT3IsL/m*8r[KJVei^>$!O', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[18]] = bb[Fb[0]].length, bb[Fb[81]] = [], bb[-Fb[80]] = Fb[1], bb[Fb[34]] = Fb[1], bb[Fb[24] … [truncated]
+             if (bb[Fb[63]] = bb[Fb[27]].indexOf(bb[Fb[0]][bb[Fb[21]]]), bb[Fb[63]] !== -Fb[2])
+               if (bb[Fb[24]] < Fb[1]) bb[Fb[24]] = bb[Fb[63]];
```

#### 78. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L888` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1081) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L888)

```diff
-                 sd(dd[-yd[44]] += dd[-yd[43]] * yd[31], dd[yd[42]] |= dd[-yd[44]] << dd[yd[24]], dd[yd[24]] += (dd[-yd[44]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
+                 cb(bb[Fb[24]] += bb[Fb[63]] * Fb[32], bb[-Fb[80]] |= bb[Fb[24]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[24]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
```

#### 79. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L890-L893` → after: `L1083-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1083-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1083-L1086) · [Before (L890-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L890-L893)

```diff
-                   sd(dd[yd[10]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[24]] -= yd[11])
-                 } while (dd[yd[24]] > yd[7]);
-                 dd[-yd[44]] = -yd[2]
-               } return dd[-yd[44]] > -yd[2] && dd[yd[10]].push((dd[yd[42]] | dd[-yd[44]] << dd[yd[24]]) & yd[12]), Td(dd[yd[10]])
+                   cb(bb[Fb[81]].push(bb[-Fb[80]] & Fb[11]), bb[-Fb[80]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                 } while (bb[Fb[34]] > Fb[24]);
+                 bb[Fb[24]] = -Fb[2]
+               } return bb[Fb[24]] > -Fb[2] && bb[Fb[81]].push((bb[-Fb[80]] | bb[Fb[24]] << bb[Fb[34]]) & Fb[11]), sb(bb[Fb[81]])
```

#### 80. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L896-L915` → after: `L1089-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1089-L1093) · [Before (L896-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L896-L915)

```diff
-       dd[yd[13]] = yd[11];
-       const md = dd[yd[1]][Od(yd[45])][Od(yd[3]) + Od(117) + Od(118)](dd[yd[2]]);
-       dd[yd[11]] = dd[yd[1]][Od(yd[45])][Od(119) + Od(120) + Od(121) + "s"](md);
-       const Wd = dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[48]) + Od(yd[46]) + Od(yd[47]) + yd[8]) : dd[yd[11]][Od(yd[48]) + Od(yd[46]) + Od(yd[47]) + yd[8]],
-         Xd = dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[54]) + Od(yd[55]) + Od(yd[56])) : dd[yd[11]][Od(yd[54]) + Od(yd[55]) + Od(yd[56])];
-       sd(Fd()[Od(132)](gd, yd[1], yd[1], dd[yd[42]]), Fd().Hy(gd, gd, Fd()[Od(133)], dd[yd[16]].heading), Fd()[Od(134)](Bd, dd[yd[38]].Gy), Bd[yd[2]] = yd[1]);
-       const vd = dd[yd[28]][Od(135) + Od(136)]();
-       if (sd(dd[yd[11]] = dd[yd[1]][Od(yd[45])][Od(137) + Od(138) + Od(139) + Od(140)](md), dd[yd[0]] = dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[57]) + Od(yd[58])) : dd[yd[11]][Od(yd[57]) + Od(yd[58])]), !vd … [truncated]
-         function qd(...dd) {
-           for (sd(dd[yd[13]] = yd[2], dd[-yd[65]] = 'lN<Kuy+*shXeZ@gR#S81v!92FC|W/4bDH,Y7on)zU$6.iP&[m;w~>L]5_=rx}`IB^M{tjk?:("3J%0QEAGOVpTcqdaf', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[64]] = dd[yd[28]].length, dd[yd[10]] = [], dd[yd[8]] = yd[1], dd[yd[67]] = yd[1], dd[yd[7] … [truncated]
-             if (dd[yd[66]] = dd[-yd[65]].indexOf(dd[yd[28]][dd[yd[63]]]), dd[yd[66]] !== -yd[2])
-               if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[66]];
-               else {
-                 sd(dd[yd[7]] += dd[yd[66]] * yd[31], dd[yd[8]] |= dd[yd[7]] << dd[yd[67]], dd[yd[67]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                 do {
-                   sd(dd[yd[10]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[yd[67]] -= yd[11])
- ... (4 more removed lines; see GitHub link above)
+       bb[Fb[12]] = Fb[3], wb(101) + Fb[0] in hb && function() {
+         var bb = function(...bb) {
+           function Mb(...bb) {
+             return bb[Fb[12]] = Fb[2], Ib(Vb(tb(bb[Fb[1]])))
+           }
```

#### 81. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L917-L919` → after: `L1095-L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1095-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1095-L1097) · [Before (L917-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L917-L919)

```diff
-         function Hd(...dd) {
-           return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = qd(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
-         }
+           function eb(...bb) {
+             return bb[Fb[12]] = Fb[43], Ib(Lb(tb(bb[Fb[1]]), tb(bb[Fb[2]])))
+           }
```

#### 82. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L921-L925` → after: `L1099-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1099-L1101) · [Before (L921-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L921-L925)

```diff
-         function bd(...dd) {
-           sd(dd[yd[13]] = yd[1], dd[yd[68]] = function(...dd) {
-             function Od(...dd) {
-               return dd[yd[13]] = yd[28], Rd(Wd(Xd(dd[yd[1]]), Xd(dd[yd[2]])))
-             }
+           function Hb(...bb) {
+             return bb[Fb[12]] = Fb[43], Ob(Lb(tb(bb[Fb[1]]), tb(bb[Fb[2]])))
+           }
```

#### 83. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L927-L940` → after: `L1103-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1103-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1103-L1105) · [Before (L927-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L927-L940)

```diff
-             function md(...dd) {
-               return dd[yd[13]] = yd[16],
-                 function(...dd) {
-                   var Od, md, Wd, Fd;
-                   for (sd(dd[yd[13]] = yd[28], dd[yd[5]] = dd[yd[2]].length, dd[yd[16]] = Array()), dd[yd[38]] = Array(Math.ceil(dd[yd[1]].length / yd[28])), Od = yd[1]; Od < dd[yd[38]].length; Od++) dd[yd[38]][Od] = dd[yd[1]].charCodeAt(Od * yd[28]) << yd[11] | dd[yd[1]].charCod … [truncated]
-                   for (; dd[yd[38]].length > yd[1];) {
-                     for (sd(Fd = Array(), Wd = yd[1]), Od = yd[1]; Od < dd[yd[38]].length; Od++) sd(Wd = (Wd << yd[73]) + dd[yd[38]][Od], md = Math.floor(Wd / dd[yd[5]]), Wd -= md * dd[yd[5]]), (Fd.length > yd[1] || md > yd[1]) && (Fd[Fd.length] = md);
-                     sd(dd[yd[16]][dd[yd[16]].length] = Wd, dd[yd[38]] = Fd)
-                   }
-                   for (dd[yd[86]] = "", Od = dd[yd[16]].length - yd[2]; Od >= yd[1]; Od--) dd[yd[86]] += dd[yd[2]].charAt(dd[yd[16]][Od]);
-                   for (dd[yd[24]] = Math.ceil(dd[yd[1]].length * yd[11] / (Math.log(dd[yd[2]].length) / Math.log(yd[28]))), Od = dd[yd[86]].length; Od < dd[yd[24]]; Od++) dd[yd[86]] = dd[yd[2]][yd[1]] + dd[yd[86]];
-                   return dd[yd[86]]
-                 }(Wd(Xd(dd[yd[1]]), Xd(dd[yd[2]])), dd[yd[28]])
-             }
+           function pb(...bb) {
+             return bb[Fb[12]] = Fb[18], Ub(Lb(tb(bb[Fb[1]]), tb(bb[Fb[2]])), bb[Fb[43]])
+           }
```

#### 84. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L942-L961` → after: `L1107-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1107-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1107-L1109) · [Before (L942-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L942-L961)

```diff
-             function Wd(...dd) {
-               dd[yd[13]] = yd[28], dd[yd[28]] = vd(dd[yd[1]]), dd[yd[28]].length > yd[73] && (dd[yd[28]] = Ed(dd[yd[28]], dd[yd[1]].length * yd[11]));
-               var Od = Array(yd[73]),
-                 md = Array(yd[73]);
-               for (dd[yd[16]] = yd[1]; dd[yd[16]] < yd[73]; dd[yd[16]]++) sd(Od[dd[yd[16]]] = 909522486 ^ dd[yd[28]][dd[yd[16]]], md[dd[yd[16]]] = 1549556828 ^ dd[yd[28]][dd[yd[16]]]);
-               return dd[yd[38]] = Ed(Od.concat(vd(dd[yd[2]])), yd[74] + dd[yd[2]].length * yd[11]), Qd(Ed(md.concat(dd[yd[38]]), pd(function(...dd) {
-                 return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-                   for (sd(dd[yd[13]] = yd[2], dd[yd[72]] = 'OxpHPmUa$ADde@)]sB>J|KR3TIl"Xbgo6&.N4wyk/#%+M;Gj{VZYq?`h:c5fL8rFvWt2~=z9(nE71^iu!_0SC,*Q[}<', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[28]].length, dd[yd[38]] = [], dd[yd[42]] = yd[1], dd[yd[24]] = yd[1],  … [truncated]
-                     if (dd[yd[4]] = dd[yd[72]].indexOf(dd[yd[28]][dd[yd[29]]]), dd[yd[4]] !== -yd[2])
-                       if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[4]];
-                       else {
-                         sd(dd[yd[7]] += dd[yd[4]] * yd[31], dd[yd[42]] |= dd[yd[7]] << dd[yd[24]], dd[yd[24]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                         do {
-                           sd(dd[yd[38]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[24]] -= yd[11])
-                         } while (dd[yd[24]] > yd[7]);
-                         dd[yd[7]] = -yd[2]
- ... (4 more removed lines; see GitHub link above)
+           function Vb(...bb) {
+             return bb[Fb[12]] = Fb[2], Eb(Rb(Cb(bb[Fb[1]]), bb[Fb[1]].length * Fb[3]))
+           }
```

#### 85. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L964-L985` → after: `L1113-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1113-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1113-L1122) · [Before (L964-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L964-L985)

```diff
-               function Wd(...dd) {
-                 return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-                   for (sd(dd[yd[13]] = yd[2], dd[yd[2]] = '3;?`0@#z>"+%_5,)8<yx}$7.~!6Ed/lD2PLVRqpfUTQZinkCeSXogIMcWtmOJBhjN]:4*=w1sv&GAKrYuH{(9^[|abF', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[-yd[75]] = dd[yd[0]].length, dd[yd[38]] = [], dd[-yd[76]] = yd[1], dd[yd[77]] = yd[1], d … [truncated]
-                     if (dd[yd[4]] = dd[yd[2]].indexOf(dd[yd[0]][dd[yd[29]]]), dd[yd[4]] !== -yd[2])
-                       if (dd[-yd[28]] < yd[1]) dd[-yd[28]] = dd[yd[4]];
-                       else {
-                         sd(dd[-yd[28]] += dd[yd[4]] * yd[31], dd[-yd[76]] |= dd[-yd[28]] << dd[yd[77]], dd[yd[77]] += (dd[-yd[28]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                         do {
-                           sd(dd[yd[38]].push(dd[-yd[76]] & yd[12]), dd[-yd[76]] >>= yd[11], dd[yd[77]] -= yd[11])
-                         } while (dd[yd[77]] > yd[7]);
-                         dd[-yd[28]] = -yd[2]
-                       } return dd[-yd[28]] > -yd[2] && dd[yd[38]].push((dd[-yd[76]] | dd[-yd[28]] << dd[yd[77]]) & yd[12]), Td(dd[yd[38]])
-                 }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
-               }
-               Od[yd[13]] = yd[2];
-               try {
- ... (6 more removed lines; see GitHub link above)
+               for (cb(bb[Fb[12]] = Fb[2], bb[Fb[75]] = 'E&:;UXaW9G#^1DpdhSHfPy(w~}z)F`{!j5|]=o3TCveq?g"RVMZ6kt>c*0$u%.iK[B/_QIxLl4,b@+n<OArJN287msY', bb[Fb[43]] = "" + (bb[Fb[1]] || ""), bb[Fb[4]] = bb[Fb[43]].length, bb[-Fb[18]] = [], bb[Fb[8]] = Fb[1], bb[Fb[34]] = Fb[1], bb[Fb … [truncated]
+                 if (bb[Fb[63]] = bb[Fb[75]].indexOf(bb[Fb[43]][bb[Fb[3]]]), bb[Fb[63]] !== -Fb[2])
+                   if (bb[Fb[86]] < Fb[1]) bb[Fb[86]] = bb[Fb[63]];
+                   else {
+                     cb(bb[Fb[86]] += bb[Fb[63]] * Fb[32], bb[Fb[8]] |= bb[Fb[86]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[86]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                     do {
+                       cb(bb[-Fb[18]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                     } while (bb[Fb[34]] > Fb[24]);
+                     bb[Fb[86]] = -Fb[2]
+                   } return bb[Fb[86]] > -Fb[2] && bb[-Fb[18]].push((bb[Fb[8]] | bb[Fb[86]] << bb[Fb[34]]) & Fb[11]), sb(bb[-Fb[18]])
```

#### 86. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L989-L1010` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1126) · [Before (L989-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L989-L1010)

```diff
-               Od[yd[13]] = yd[2];
-               try {
-                 dd[-yd[85]]
-               } catch (md) {
-                 dd[-yd[85]] = ""
-               }
-               for (sd(Od[yd[2]] = Hd(160) + Hd(161) + Hd(162) + function(...dd) {
-                   return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-                     for (sd(dd[yd[13]] = yd[2], dd[yd[2]] = 'D}MyQLukCc@v`2lFh|HwjVP5^RG7<p{0tY&_,Br9Kqs$[T8;E]Xx3:nO~o"6S#.Ud!b*aI4WZ+mfJ=/Ni1(A?e)%>zg', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[83]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[77]] = yd[1], dd[yd[24]] = yd[1], d … [truncated]
-                       if (dd[yd[21]] = dd[yd[2]].indexOf(dd[yd[0]][dd[yd[29]]]), dd[yd[21]] !== -yd[2])
-                         if (dd[-yd[84]] < yd[1]) dd[-yd[84]] = dd[yd[21]];
-                         else {
-                           sd(dd[-yd[84]] += dd[yd[21]] * yd[31], dd[yd[77]] |= dd[-yd[84]] << dd[yd[24]], dd[yd[24]] += (dd[-yd[84]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                           do {
-                             sd(dd[yd[10]].push(dd[yd[77]] & yd[12]), dd[yd[77]] >>= yd[11], dd[yd[24]] -= yd[11])
-                           } while (dd[yd[24]] > yd[7]);
- ... (6 more removed lines; see GitHub link above)
+               return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = wb(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
```

#### 87. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1014-L1016` → after: `L1137-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1137-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1137-L1146) · [Before (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1014-L1016)

```diff
-               var Od, md;
-               for (sd(dd[yd[13]] = yd[2], dd[yd[87]] = "", dd[yd[28]] = -yd[2]); ++dd[yd[28]] < dd[yd[1]].length;) sd(Od = dd[yd[1]].charCodeAt(dd[yd[28]]), md = dd[yd[28]] + yd[2] < dd[yd[1]].length ? dd[yd[1]].charCodeAt(dd[yd[28]] + yd[2]) : yd[1]), 55296 <= Od && Od <= 56319  … [truncated]
-               return dd[yd[87]]
+               for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = 'sNd,9I:kn[57hBD0`|KE+uR8Q.WT<1pG>t3%4l{/?V6(;=v_^L*aX]J@FrUHiCYO#!$z}y"w)&x2~eojqgAfPmcbZSM', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[4]] = bb[Fb[0]].length, bb[Fb[39]] = [], bb[Fb[8]] = Fb[1], bb[Fb[34]] = Fb[1], bb[Fb[93 … [truncated]
+                 if (bb[-Fb[17]] = bb[Fb[27]].indexOf(bb[Fb[0]][bb[Fb[92]]]), bb[-Fb[17]] !== -Fb[2])
+                   if (bb[Fb[93]] < Fb[1]) bb[Fb[93]] = bb[-Fb[17]];
+                   else {
+                     cb(bb[Fb[93]] += bb[-Fb[17]] * Fb[32], bb[Fb[8]] |= bb[Fb[93]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[93]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                     do {
+                       cb(bb[Fb[39]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                     } while (bb[Fb[34]] > Fb[24]);
+                     bb[Fb[93]] = -Fb[2]
+                   } return bb[Fb[93]] > -Fb[2] && bb[Fb[39]].push((bb[Fb[8]] | bb[Fb[93]] << bb[Fb[34]]) & Fb[11]), sb(bb[Fb[39]])
```

#### 88. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1020-L1022` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1150) · [Before (L1020-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1020-L1022)

```diff
-               for (sd(dd[yd[13]] = yd[2], dd[-yd[4]] = Array(dd[yd[1]].length >> yd[28])), dd[-yd[91]] = yd[1]; dd[-yd[91]] < dd[-yd[4]].length; dd[-yd[91]]++) dd[-yd[4]][dd[-yd[91]]] = yd[1];
-               for (dd[-yd[91]] = yd[1]; dd[-yd[91]] < dd[yd[1]].length * yd[11]; dd[-yd[91]] += yd[11]) dd[-yd[4]][dd[-yd[91]] >> yd[42]] |= (dd[yd[1]].charCodeAt(dd[-yd[91]] / yd[11]) & yd[12]) << yd[93] - dd[-yd[91]] % yd[92];
-               return dd[-yd[4]]
+               return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = eb(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
```

#### 89. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1024-L1027` → after: `L1152-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1152-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1152-L1156) · [Before (L1024-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1024-L1027)

```diff
- 
-             function Qd(...dd) {
-               for (sd(dd[yd[13]] = yd[2], dd[yd[2]] = ""), dd[yd[28]] = yd[1]; dd[yd[28]] < dd[yd[1]].length * yd[92]; dd[yd[28]] += yd[11]) dd[yd[2]] += String.fromCharCode(dd[yd[1]][dd[yd[28]] >> yd[42]] >>> yd[93] - dd[yd[28]] % yd[92] & yd[12]);
-               return dd[yd[2]]
+             Mb[Fb[12]] = Fb[2];
+             try {
+               bb[Fb[27]]
+             } catch (pb) {
+               bb[Fb[27]] = Fb[1]
```

#### 90. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1031` → after: `L1164-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1164-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1164-L1173) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1031)

```diff
-               return dd[yd[13]] = yd[28], dd[yd[1]] >>> dd[yd[2]] | dd[yd[1]] << yd[92] - dd[yd[2]]
+               for (cb(bb[Fb[12]] = Fb[2], bb[-Fb[96]] = 'z3)%$"?+dG(^mHfktUTCelh46Fbq>v_WPg87~n.@,NA59LO={/Sw]XoMaj*VrJ!#<}D20iKcuYpRBEZyQ:`sx1[I&;|', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[4]] = bb[Fb[0]].length, bb[Fb[39]] = [], bb[Fb[8]] = Fb[1], bb[Fb[34]] = Fb[1], bb[-Fb[ … [truncated]
+                 if (bb[Fb[63]] = bb[-Fb[96]].indexOf(bb[Fb[0]][bb[Fb[50]]]), bb[Fb[63]] !== -Fb[2])
+                   if (bb[-Fb[51]] < Fb[1]) bb[-Fb[51]] = bb[Fb[63]];
+                   else {
+                     cb(bb[-Fb[51]] += bb[Fb[63]] * Fb[32], bb[Fb[8]] |= bb[-Fb[51]] << bb[Fb[34]], bb[Fb[34]] += (bb[-Fb[51]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                     do {
+                       cb(bb[Fb[39]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                     } while (bb[Fb[34]] > Fb[24]);
+                     bb[-Fb[51]] = -Fb[2]
+                   } return bb[-Fb[51]] > -Fb[2] && bb[Fb[39]].push((bb[Fb[8]] | bb[-Fb[51]] << bb[Fb[34]]) & Fb[11]), sb(bb[Fb[39]])
```

#### 91. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1035` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1177) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1035)

```diff
-               return dd[yd[13]] = yd[28], dd[yd[1]] >>> dd[yd[2]]
+               return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = Mb(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
```

#### 92. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1037-L1039` → after: `L1179-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1179-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1179-L1183) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1037-L1039)

```diff
- 
-             function Nd(...dd) {
-               return dd[yd[13]] = yd[16], dd[yd[1]] & dd[yd[2]] ^ ~dd[yd[1]] & dd[yd[28]]
+             wb[Fb[12]] = Fb[2];
+             try {
+               bb[Fb[2]]
+             } catch (pb) {
+               bb[Fb[2]] = ""
```

#### 93. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1042-L1043` → after: `L1190-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1190-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1190-L1195) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1042-L1043)

```diff
-             function qd(...dd) {
-               return dd[yd[13]] = yd[16], dd[yd[1]] & dd[yd[2]] ^ dd[yd[1]] & dd[yd[28]] ^ dd[yd[2]] & dd[yd[28]]
+           function Ub(...bb) {
+             var wb, Mb, eb, Hb;
+             for (cb(bb[Fb[12]] = Fb[43], bb[Fb[98]] = bb[Fb[2]].length, bb[-Fb[99]] = Array()), bb[Fb[97]] = Array(Math.ceil(bb[Fb[1]].length / Fb[43])), wb = Fb[1]; wb < bb[Fb[97]].length; wb++) bb[Fb[97]][wb] = bb[Fb[1]].charCodeAt(wb * Fb[43]) << Fb[3] | bb[Fb[1]].charCodeAt(w … [truncated]
+             for (; bb[Fb[97]].length > Fb[1];) {
+               for (cb(Hb = Array(), eb = Fb[1]), wb = Fb[1]; wb < bb[Fb[97]].length; wb++) cb(eb = (eb << Fb[88]) + bb[Fb[97]][wb], Mb = Math.floor(eb / bb[Fb[98]]), eb -= Mb * bb[Fb[98]]), (Hb.length > Fb[1] || Mb > Fb[1]) && (Hb[Hb.length] = Mb);
+               cb(bb[-Fb[99]][bb[-Fb[99]].length] = eb, bb[Fb[97]] = Hb)
```

#### 94. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1046-L1048` → after: `L1202-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1202-L1206) · [Before (L1046-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1046-L1048)

```diff
-             function bd(...dd) {
-               return dd[yd[13]] = yd[2], td(dd[yd[1]], yd[28]) ^ td(dd[yd[1]], yd[36]) ^ td(dd[yd[1]], 22)
-             }
+           function tb(...bb) {
+             var wb, Mb;
+             for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = "", bb[Fb[43]] = -Fb[2]); ++bb[Fb[43]] < bb[Fb[1]].length;) cb(wb = bb[Fb[1]].charCodeAt(bb[Fb[43]]), Mb = bb[Fb[43]] + Fb[2] < bb[Fb[1]].length ? bb[Fb[1]].charCodeAt(bb[Fb[43]] + Fb[2]) : Fb[1]), Fb[48] <= wb && wb <= Fb[101] … [truncated]
+             return bb[Fb[27]]
+           }
```

#### 95. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1050-L1052` → after: `L1208-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1208-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1208-L1212) · [Before (L1050-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1050-L1052)

```diff
-             function Yd(...dd) {
-               return dd[yd[13]] = yd[2], td(dd[yd[1]], yd[24]) ^ td(dd[yd[1]], 11) ^ td(dd[yd[1]], 25)
-             }
+           function Cb(...bb) {
+             for (cb(bb[Fb[12]] = Fb[2], bb[Fb[2]] = Array(bb[Fb[1]].length >> Fb[43])), bb[Fb[0]] = Fb[1]; bb[Fb[0]] < bb[Fb[2]].length; bb[Fb[0]]++) bb[Fb[2]][bb[Fb[0]]] = Fb[1];
+             for (bb[Fb[0]] = Fb[1]; bb[Fb[0]] < bb[Fb[1]].length * Fb[3]; bb[Fb[0]] += Fb[3]) bb[Fb[2]][bb[Fb[0]] >> Fb[33]] |= (bb[Fb[1]].charCodeAt(bb[Fb[0]] / Fb[3]) & Fb[11]) << Fb[107] - bb[Fb[0]] % Fb[105];
+             return bb[Fb[2]]
+           }
```

#### 96. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1054-L1056` → after: `L1214-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1214-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1214-L1217) · [Before (L1054-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1054-L1056)

```diff
-             function gd(...dd) {
-               return dd[yd[13]] = yd[2], td(dd[yd[1]], yd[7]) ^ td(dd[yd[1]], yd[90]) ^ od(dd[yd[1]], yd[16])
-             }
+           function Eb(...bb) {
+             for (cb(bb[Fb[12]] = Fb[2], bb[-Fb[106]] = ""), bb[Fb[43]] = Fb[1]; bb[Fb[43]] < bb[Fb[1]].length * Fb[105]; bb[Fb[43]] += Fb[3]) bb[-Fb[106]] += String.fromCharCode(bb[Fb[1]][bb[Fb[43]] >> Fb[33]] >>> Fb[107] - bb[Fb[43]] % Fb[105] & Fb[11]);
+             return bb[-Fb[106]]
+           }
```

#### 97. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1058-L1059` → after: `L1219-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1219-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1219-L1255) · [Before (L1058-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1058-L1059)

```diff
-             function wd(...dd) {
-               return dd[yd[13]] = yd[2], td(dd[yd[1]], 17) ^ td(dd[yd[1]], yd[95]) ^ od(dd[yd[1]], yd[94])
+           function Bb(...bb) {
+             return bb[Fb[12]] = Fb[43], bb[Fb[1]] >>> bb[Fb[2]] | bb[Fb[1]] << Fb[105] - bb[Fb[2]]
+           }
+ 
+           function hb(...bb) {
+             return bb[Fb[12]] = Fb[43], bb[Fb[1]] >>> bb[Fb[2]]
+           }
+ 
+           function zb(...bb) {
+             return bb[Fb[12]] = Fb[18], bb[Fb[1]] & bb[Fb[2]] ^ ~bb[Fb[1]] & bb[Fb[43]]
+           }
+ 
+           function Xb(...bb) {
+             return bb[Fb[12]] = Fb[18], bb[Fb[1]] & bb[Fb[2]] ^ bb[Fb[1]] & bb[Fb[43]] ^ bb[Fb[2]] & bb[Fb[43]]
+           }
+ 
+ ... (21 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1062-L1066` → after: `L1260-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1260-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1260-L1308) · [Before (L1062-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1062-L1066)

```diff
-             function Ed(...Od) {
-               var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Hd;
-               for (sd(Od[yd[13]] = yd[28], Od[yd[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Od[yd[0]] = new Array(yd[96])), sd(Od[yd[1]][Od[yd[2]] >> yd[42]] |= yd[47] << yd[93] - Od[yd[2]] % yd[92], Od[yd[1] … [truncated]
-                 for (sd(md = Od[yd[5]][yd[1]], Wd = Od[yd[5]][yd[2]], Fd = Od[yd[5]][yd[28]], Rd = Od[yd[5]][yd[16]], Xd = Od[yd[5]][yd[38]], Kd = Od[yd[5]][yd[42]], hd = Od[yd[5]][yd[24]], vd = Od[yd[5]][yd[7]]), td = yd[1]; td < yd[96]; td++) sd(Od[yd[0]][td] = td < yd[73] ? Od … [truncated]
-                 sd(Od[yd[5]][yd[1]] = Jd(md, Od[yd[5]][yd[1]]), Od[yd[5]][yd[2]] = Jd(Wd, Od[yd[5]][yd[2]]), Od[yd[5]][yd[28]] = Jd(Fd, Od[yd[5]][yd[28]]), Od[yd[5]][yd[16]] = Jd(Rd, Od[yd[5]][yd[16]]), Od[yd[5]][yd[38]] = Jd(Xd, Od[yd[5]][yd[38]]), Od[yd[5]][yd[42]] = Jd(Kd, Od[ … [truncated]
+           function Db(...bb) {
+             return cb(bb[Fb[12]] = Fb[43], bb[Fb[43]] = (bb[Fb[1]] & Fb[104]) + (bb[Fb[2]] & Fb[104]), bb[Fb[0]] = (bb[Fb[1]] >> Fb[88]) + (bb[Fb[2]] >> Fb[88]) + (bb[Fb[43]] >> Fb[88])), bb[Fb[0]] << Fb[88] | bb[Fb[43]] & Fb[104]
+           }
+           return cb(bb[Fb[12]] = Fb[1], bb[Fb[27]] = Fb[1], bb[Fb[2]] = ""), bb[Fb[4]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, … [truncated]
+             hex: Mb,
+             b64: Hb,
+             any: pb,
+             hex_hmac: eb,
+             b64_hmac: Hb,
+             any_hmac: pb
+           }
+         }();
+         console.log(bb)
+       }();
+       const Mb = bb[Fb[1]][wb(Fb[108])][wb(121) + wb(122) + wb(Fb[70])](bb[Fb[2]]);
+       bb[Fb[27]] = bb[Fb[1]][wb(Fb[108])][wb(Fb[81]) + wb(Fb[119]) + wb(Fb[120]) + wb(Fb[103])](Mb);
+ ... (33 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1070-L1072` → after: `L1311-L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1311-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1311-L1329) · [Before (L1070-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1070-L1072)

```diff
- 
-             function Jd(...dd) {
-               return sd(dd[yd[13]] = yd[28], dd[yd[28]] = (dd[yd[1]] & yd[97]) + (dd[yd[2]] & yd[97]), dd[-yd[98]] = (dd[yd[1]] >> yd[73]) + (dd[yd[2]] >> yd[73]) + (dd[yd[28]] >> yd[73])), dd[-yd[98]] << yd[73] | dd[yd[28]] & yd[97]
+             static generate(...bb) {
+               bb[Fb[12]] = Fb[2];
+               const Mb = wb(65537);
+               let eb, Hb;
+               bb[-Fb[127]] = Fb[16];
+               do {
+                 cb(eb = this.randomPrime(bb[Fb[1]] / Fb[43]), Hb = this.randomPrime(bb[Fb[1]] / Fb[43]), bb[-Fb[127]] = wb.lcm(eb.prev(), Hb.prev()))
+               } while (wb.gcd(Mb, bb[-Fb[127]]).notEquals(Fb[2]) || eb.minus(Hb).abs().shiftRight(bb[Fb[1]] / Fb[43] - Fb[51]).isZero());
+               return {
+                 e: Mb,
+                 n: eb.multiply(Hb),
+                 d: Mb.modInv(bb[-Fb[127]])
+               }
+             }
+             static encrypt(...bb) {
+               return bb[Fb[12]] = Fb[18], wb(bb[Fb[1]]).modPow(bb[Fb[43]], bb[Fb[2]])
+ ... (3 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1074-L1086` → after: `L1331-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1331-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1331-L1333) · [Before (L1074-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1074-L1086)

```diff
-             return sd(dd[yd[13]] = yd[1], dd[yd[78]] = yd[1], dd[-yd[85]] = ""), dd[yd[79]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
-               hex: function(...dd) {
-                 return dd[yd[13]] = yd[2], Fd(function(...dd) {
-                   return dd[yd[13]] = yd[2], Qd(Ed(vd(dd[yd[1]]), dd[yd[1]].length * yd[11]))
-                 }(Xd(dd[yd[1]])))
-               },
-               b64: Od,
-               any: md,
-               hex_hmac: function(...dd) {
-                 return dd[yd[13]] = yd[28], Fd(Wd(Xd(dd[yd[1]]), Xd(dd[yd[2]])))
-               },
-               b64_hmac: Od,
-               any_hmac: md
+             static encode(bb) {
+               const Mb = bb.split("").map((bb => bb.charCodeAt())).join("");
+               return wb(Mb)
```

#### 101. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1088` → after: `L1335-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1335-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1335-L1369) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1088)

```diff
-           }(), console.log(dd[yd[68]]))
+             static decode(...bb) {
+               bb[Fb[12]] = Fb[2];
+               const wb = bb[Fb[1]].toString();
+               bb[Fb[27]] = "";
+               for (let Mb = Fb[1]; Mb < wb.length; Mb += Fb[43]) {
+                 let eb = Number(wb.substr(Mb, Fb[43]));
+                 eb <= 30 ? (bb[Fb[27]] += String.fromCharCode(Number(wb.substr(Mb, Fb[18]))), Mb++) : bb[Fb[27]] += String.fromCharCode(eb)
+               }
+               return bb[Fb[27]]
+             }
+           }, module.exports = bb[Fb[27]])
+         }
+         wb(Fb[148]) in hb && Bb(), cb(Db(Xb, zb, Rb), Db(xb, Rb, zb), Hb()[wb(Fb[131])](jb, Rb, xb));
+         const rb = Hb()[Eb(153)](Rb),
+           Yb = Hb()[Eb(154)](zb, Rb) / bb[Fb[33]] / rb,
+           Zb = Math[Eb(Fb[130])](Yb, Fb[1]) + Fb[2];
+ ... (19 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1109` → after: `L1374-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1374-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1374-L1385) · [Before (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1109)

```diff
-             return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = Ad(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
+             return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = function(...bb) {
+               for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = 'x{4[t*D.#Ps`?kfC!B|QE=AI9Hv:jg1eh>2;^qp"z]5@,w$_)yJb7rZNl0uRWL+V<(K}iTXdc8YanFS3O/UGo%&Mm6~', bb[Fb[43]] = "" + (bb[Fb[1]] || ""), bb[Fb[18]] = bb[Fb[43]].length, bb[Fb[13]] = [], bb[Fb[8]] = Fb[1], bb[-Fb[132]] = Fb[1], bb[ … [truncated]
+                 if (bb[Fb[107]] = bb[Fb[27]].indexOf(bb[Fb[43]][bb[Fb[50]]]), bb[Fb[107]] !== -Fb[2])
+                   if (bb[Fb[7]] < Fb[1]) bb[Fb[7]] = bb[Fb[107]];
+                   else {
+                     cb(bb[Fb[7]] += bb[Fb[107]] * Fb[32], bb[Fb[8]] |= bb[Fb[7]] << bb[-Fb[132]], bb[-Fb[132]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                     do {
+                       cb(bb[Fb[13]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[-Fb[132]] -= Fb[3])
+                     } while (bb[-Fb[132]] > Fb[24]);
+                     bb[Fb[7]] = -Fb[2]
+                   } return bb[Fb[7]] > -Fb[2] && bb[Fb[13]].push((bb[Fb[8]] | bb[Fb[7]] << bb[-Fb[132]]) & Fb[11]), sb(bb[Fb[13]])
+             }(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
```

#### 103. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1111` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1387) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1111)

```diff
-           Fd()[rd(168)](gd, gd, Ed, Vd)
+           bb[Fb[12]] = Fb[1], cb(bb[Fb[27]] = Ab(161) + wb(162) + wb(163) + wb(164) + wb(165), bb[-Fb[133]] = wb(Fb[133]) + wb(167) + wb(168) + wb(169) + "?", bb[Fb[4]] = wb(170) + wb(171) + wb(172) + wb(173) + wb(174) + wb(175) + wb(Fb[72]) + Fb[146], bb[Fb[27]].match(bb[-Fb[133 … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1113` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1389) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1113)

```diff
-         sd(dd[yd[0]] = (0, Rd.w)(dd[yd[0]], 1, Math[Hd(yd[100])](yd[2], Math[Hd(169)](yd[1], -ud, yd[2] - xd / dd[yd[42]]))), Fd()[Hd(170)](gd, gd, Jd))
+         Ab(160) in hb && Wb(), bb[Fb[4]] *= bb[Fb[0]]
```

#### 105. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1115-L1120` → after: `L1391-L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1391-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1391-L1394) · [Before (L1115-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1115-L1120)

```diff
-       const Qd = Ud;
-       sd(Fd()[Od(171)](Qd, gd, Bd), Qd[yd[2]] = yd[1], dd[yd[94]] = Fd()[Od(172)](Qd)), vd || (dd[yd[94]] *= dd[yd[0]]);
-       const td = dd[yd[24]][Od(173) + Od(174) + Od(175)],
-         od = td ? Math[Od(176)](td, dd[yd[94]]) : dd[yd[94]];
-       Fd()[Od(177) + Od(178)](Qd, Qd);
-       const Nd = dd[yd[7]] !== yd[49] && void 0 !== dd[yd[7]] ? dd[yd[7]] : dd[yd[24]][Od(179) + Od(180) + Od(yd[70]) + Od(yd[85])];
+       const Ob = bb[Fb[22]][wb(177) + wb(178) + wb(179)],
+         Ub = Ob ? Math[wb(Fb[141])](Ob, bb[Fb[4]]) : bb[Fb[4]];
+       Hb()[wb(Fb[93]) + wb(Fb[40])](Ib, Ib);
+       const tb = bb[Fb[24]] !== Fb[112] && void 0 !== bb[Fb[24]] ? bb[Fb[24]] : bb[Fb[22]][wb(Fb[149]) + wb(Fb[136]) + wb(185) + wb(186)];
```

#### 106. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1123-L1125` → after: `L1397-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1397-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1397-L1399) · [Before (L1123-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1123-L1125)

```diff
-           for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = 'eJQ]<Rk(T,D~4VajLi7m$bYrFMZ1HBgX/%Sp#ENfW_!hAx2GCodcIlOzwqUPs3}t80K5@|v[;.)6{=?*&9^:"y+>`un', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[14]] = dd[yd[0]].length, dd[yd[103]] = [], dd[yd[8]] = yd[1], dd[yd[102]] = yd[1], dd[yd[41]] … [truncated]
-             if (dd[yd[48]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[101]]]), dd[yd[48]] !== -yd[2])
-               if (dd[yd[41]] < yd[1]) dd[yd[41]] = dd[yd[48]];
+           for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = '.yuxXaRrG+j=kS/&}ZO{H|co`3,ds[pPN?5iBv:]#nw)I>z"0_Y@9~UQ*hqWJgM(Af76%^2Dbe<TL84$!FCK;ltmEV1', bb[Fb[0]] = "" + (bb[Fb[1]] || ""), bb[Fb[18]] = bb[Fb[0]].length, bb[Fb[13]] = [], bb[Fb[134]] = Fb[1], bb[-Fb[135]] = Fb[1], bb[Fb[7 … [truncated]
+             if (bb[-Fb[76]] = bb[Fb[27]].indexOf(bb[Fb[0]][bb[Fb[3]]]), bb[-Fb[76]] !== -Fb[2])
+               if (bb[Fb[7]] < Fb[1]) bb[Fb[7]] = bb[-Fb[76]];
```

#### 107. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1127` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1401) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1127)

```diff
-                 sd(dd[yd[41]] += dd[yd[48]] * yd[31], dd[yd[8]] |= dd[yd[41]] << dd[yd[102]], dd[yd[102]] += (dd[yd[41]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
+                 cb(bb[Fb[7]] += bb[-Fb[76]] * Fb[32], bb[Fb[134]] |= bb[Fb[7]] << bb[-Fb[135]], bb[-Fb[135]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
```

#### 108. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1129-L1132` → after: `L1403-L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1403-L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1403-L1406) · [Before (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1129-L1132)

```diff
-                   sd(dd[yd[103]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[yd[102]] -= yd[11])
-                 } while (dd[yd[102]] > yd[7]);
-                 dd[yd[41]] = -yd[2]
-               } return dd[yd[41]] > -yd[2] && dd[yd[103]].push((dd[yd[8]] | dd[yd[41]] << dd[yd[102]]) & yd[12]), Td(dd[yd[103]])
+                   cb(bb[Fb[13]].push(bb[Fb[134]] & Fb[11]), bb[Fb[134]] >>= Fb[3], bb[-Fb[135]] -= Fb[3])
+                 } while (bb[-Fb[135]] > Fb[24]);
+                 bb[Fb[7]] = -Fb[2]
+               } return bb[Fb[7]] > -Fb[2] && bb[Fb[13]].push((bb[Fb[134]] | bb[Fb[7]] << bb[-Fb[135]]) & Fb[11]), sb(bb[Fb[13]])
```

#### 109. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1136` → after: `L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1410) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1136)

```diff
-           return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = Gd(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
+           return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = Jb(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
```

#### 110. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1138-L1163` → after: `L1412-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1412-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1412-L1444) · [Before (L1138-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1138-L1163)

```diff
-         Od(183) in Yd && (module.exports = async (dd = (...dd) => {
-           throw dd[yd[13]] = yd[1], new Error(function(...dd) {
-             if (dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19]) return Kd[dd[yd[1]]] = function(...dd) {
-               for (sd(dd[yd[13]] = yd[2], dd[yd[52]] = '8IAG2R<={T[)09ji~e_x|.w7(+yV?;>,B}$PdND*H4Xl@vLuJsCUYa]`MfS1E5g!hon#cOtQZrp6mFbKq/%k:&"zW3^', dd[yd[104]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[104]].length, dd[-yd[106]] = [], dd[yd[42]] = yd[1], dd[yd[33]] = yd[1],  … [truncated]
-                 if (dd[yd[6]] = dd[yd[52]].indexOf(dd[yd[104]][dd[yd[29]]]), dd[yd[6]] !== -yd[2])
-                   if (dd[yd[105]] < yd[1]) dd[yd[105]] = dd[yd[6]];
-                   else {
-                     sd(dd[yd[105]] += dd[yd[6]] * yd[31], dd[yd[42]] |= dd[yd[105]] << dd[yd[33]], dd[yd[33]] += (dd[yd[105]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                     do {
-                       sd(dd[-yd[106]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[33]] -= yd[11])
-                     } while (dd[yd[33]] > yd[7]);
-                     dd[yd[105]] = -yd[2]
-                   } dd[yd[105]] > -yd[2] && dd[-yd[106]].push((dd[yd[42]] | dd[yd[105]] << dd[yd[33]]) & yd[12]);
-               return Td(dd[-yd[106]])
-             }(hd[dd[yd[1]]]);
-             return Kd[dd[yd[1]]]
- ... (10 more removed lines; see GitHub link above)
+ 
+         function Nb(...bb) {
+           bb[Fb[12]] = Fb[1]
+         }
+         Sb(Fb[140]) + "R" in hb && Nb();
+         let vb = bb[Fb[43]][Sb(188) + Sb(Fb[98])] * tb;
+         if (!Lb) {
+           function Gb(...bb) {
+             for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = '<@0)7x[u$9=;3^y1]`%L,an2p5jOAo:*HNB}#|FsV"(mMtdfJhgCWRT/eDEZGw?Qqlzr6Y&+ckbKS{>!8iv_XI4.~UP', bb[Fb[43]] = "" + (bb[Fb[1]] || ""), bb[Fb[4]] = bb[Fb[43]].length, bb[Fb[39]] = [], bb[Fb[8]] = Fb[1], bb[Fb[34]] = Fb[1], bb[Fb[7] … [truncated]
+               if (bb[-Fb[137]] = bb[Fb[27]].indexOf(bb[Fb[43]][bb[-Fb[136]]]), bb[-Fb[137]] !== -Fb[2])
+                 if (bb[Fb[7]] < Fb[1]) bb[Fb[7]] = bb[-Fb[137]];
+                 else {
+                   cb(bb[Fb[7]] += bb[-Fb[137]] * Fb[32], bb[Fb[8]] |= bb[Fb[7]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                   do {
+                     cb(bb[Fb[39]].push(bb[Fb[8]] & Fb[11]), bb[Fb[8]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                   } while (bb[Fb[34]] > Fb[24]);
+ ... (17 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1165` → after: `L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1446) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1165)

```diff
-                       sd(Xd += vd * yd[31], Fd |= Xd << Rd, Rd += (Xd & yd[34]) > yd[35] ? yd[36] : yd[37]);
+                       cb(bb[Fb[24]] += bb[Fb[63]] * Fb[32], bb[Fb[33]] |= bb[Fb[24]] << bb[Fb[22]], bb[Fb[22]] += (bb[Fb[24]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
```

#### 112. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1167-L1173` → after: `L1448-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1448-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1448-L1452) · [Before (L1167-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1167-L1173)

```diff
-                         sd(Wd.push(Fd & yd[12]), Fd >>= yd[11], Rd -= yd[11])
-                       } while (Rd > yd[7]);
-                       Xd = -yd[2]
-                     }
-                 }
-                 Xd > -yd[2] && Wd.push((Fd | Xd << Rd) & yd[12]);
-                 return Td(Wd)
+                         cb(bb[Fb[39]].push(bb[Fb[33]] & Fb[11]), bb[Fb[33]] >>= Fb[3], bb[Fb[22]] -= Fb[3])
+                       } while (bb[Fb[22]] > Fb[24]);
+                       bb[Fb[24]] = -Fb[2]
+                     } bb[Fb[24]] > -Fb[2] && bb[Fb[39]].push((bb[Fb[33]] | bb[Fb[24]] << bb[Fb[22]]) & Fb[11]);
+                 return sb(bb[Fb[39]])
```

#### 113. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1176-L1194` → after: `L1455-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1455-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1455-L1475) · [Before (L1176-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1176-L1194)

```diff
-             }(185))) {
-             if (Od.size !== yd[2]) return yd[107];
-             if (!Od.has("-v")) return yd[107]
-           }
-           return await (async () => {
-             function Od(...dd) {
-               return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
-                 for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = 'v,:d6PA?W0)VaGgBY|rHc]{2fCQ`DX(E5Fliph@#1%Nn;m$kOU^uot4S=_y!"~>&qe3*Zb9IMz/LK[+}J7wR<.sTx8j', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[-yd[109]] = dd[yd[0]].length, dd[yd[111]] = [], dd[yd[8]] = yd[1], dd[yd[46]] = yd[1], dd[ … [truncated]
-                   if (dd[yd[110]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[108]]]), dd[yd[110]] !== -yd[2])
-                     if (dd[yd[45]] < yd[1]) dd[yd[45]] = dd[yd[110]];
-                     else {
-                       sd(dd[yd[45]] += dd[yd[110]] * yd[31], dd[yd[8]] |= dd[yd[45]] << dd[yd[46]], dd[yd[46]] += (dd[yd[45]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
-                       do {
-                         sd(dd[yd[111]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[yd[46]] -= yd[11])
-                       } while (dd[yd[46]] > yd[7]);
-                       dd[yd[45]] = -yd[2]
- ... (3 more removed lines; see GitHub link above)
+             }(205))
+           }) => {
+             const wb = new Set(process.argv.slice(Fb[43]));
+             if (!wb.has(function(...bb) {
+                 if (bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15]) return gb[bb[Fb[1]]] = function(...bb) {
+                   for (cb(bb[Fb[12]] = Fb[2], bb[Fb[2]] = 'qPZsk$V*>f3.}E,1KFoWjO5d!pIm:7e;~tJhzT+DHc%xC]R([`9wnu_X@gNGMBY{Srl?"Ay06U/Li|b2)4=Q8#v&<^a', bb[Fb[43]] = "" + (bb[Fb[1]] || ""), bb[-Fb[37]] = bb[Fb[43]].length, bb[Fb[39]] = [], bb[Fb[33]] = Fb[1], bb[Fb[34]] = Fb[1],  … [truncated]
+                     if (bb[Fb[63]] = bb[Fb[2]].indexOf(bb[Fb[43]][bb[Fb[3]]]), bb[Fb[63]] !== -Fb[2])
+                       if (bb[Fb[7]] < Fb[1]) bb[Fb[7]] = bb[Fb[63]];
+                       else {
+                         cb(bb[Fb[7]] += bb[Fb[63]] * Fb[32], bb[Fb[33]] |= bb[Fb[7]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                         do {
+                           cb(bb[Fb[39]].push(bb[Fb[33]] & Fb[11]), bb[Fb[33]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                         } while (bb[Fb[34]] > Fb[24]);
+                         bb[Fb[7]] = -Fb[2]
+                       } bb[Fb[7]] > -Fb[2] && bb[Fb[39]].push((bb[Fb[33]] | bb[Fb[7]] << bb[Fb[34]]) & Fb[11]);
+                   return sb(bb[Fb[39]])
+ ... (5 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1196-L1200` → after: `L1477-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1477-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1477-L1497) · [Before (L1196-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1196-L1200)

```diff
-             return void 0 === await dd() ? Od(188) + "l)" : ""
-           })(), !0
-         });
-         let Ld = dd[yd[28]][nd(189) + nd(190)] * Nd;
-         if (!vd) {
+             return await (async () => {
+               function wb(...bb) {
+                 return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = function(...bb) {
+                   for (cb(bb[Fb[12]] = Fb[2], bb[Fb[27]] = '0rEklVj}Whx)Z:K?o[|B">f5N&2,S+=D6Qn3C1HMP(c#9<q@Ows_;84IR]iaYpudJ.mzeb!F^tA~y`GXU*{LvT%7/g$', bb[-Fb[137]] = "" + (bb[Fb[1]] || ""), bb[Fb[136]] = bb[-Fb[137]].length, bb[Fb[13]] = [], bb[Fb[33]] = Fb[1], bb[Fb[34]] = Fb … [truncated]
+                     if (bb[Fb[63]] = bb[Fb[27]].indexOf(bb[-Fb[137]][bb[Fb[50]]]), bb[Fb[63]] !== -Fb[2])
+                       if (bb[Fb[7]] < Fb[1]) bb[Fb[7]] = bb[Fb[63]];
+                       else {
+                         cb(bb[Fb[7]] += bb[Fb[63]] * Fb[32], bb[Fb[33]] |= bb[Fb[7]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[7]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
+                         do {
+                           cb(bb[Fb[13]].push(bb[Fb[33]] & Fb[11]), bb[Fb[33]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                         } while (bb[Fb[34]] > Fb[24]);
+                         bb[Fb[7]] = -Fb[2]
+                       } bb[Fb[7]] > -Fb[2] && bb[Fb[13]].push((bb[Fb[33]] | bb[Fb[7]] << bb[Fb[34]]) & Fb[11]);
+                   return sb(bb[Fb[13]])
+                 }(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
+               }
+ ... (5 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1202-L1204` → after: `L1499-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1499-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1499-L1501) · [Before (L1202-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1202-L1204)

```diff
-             for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = '9YDPUSZHmr]dA0#RW_[|QL{pt!lwiTo~@v?a"cfB6h.z*x)F1`4n5%s8Nuk=E<&/7>jC(OX$G:3I2Vq}yJ+K;^gMbe,', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[84]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[8]] = yd[1], dd[-yd[64]] = yd[1], dd[yd[7]] … [truncated]
-               if (dd[yd[4]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[112]]]), dd[yd[4]] !== -yd[2])
-                 if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[4]];
+             for (cb(bb[Fb[12]] = Fb[2], bb[-Fb[75]] = '%rK5gM^0WcA:oL(an6_pTX8E2*/b#uD3)yl,h@m1~ds>7z{xB+V[$U}SQY!H|C&j=vfFqk.;iPZe94GJOI"<w`?tR]N', bb[-Fb[148]] = "" + (bb[Fb[1]] || ""), bb[Fb[4]] = bb[-Fb[148]].length, bb[Fb[13]] = [], bb[Fb[33]] = Fb[1], bb[Fb[34]] = Fb[1], bb … [truncated]
+               if (bb[Fb[63]] = bb[-Fb[75]].indexOf(bb[-Fb[148]][bb[Fb[94]]]), bb[Fb[63]] !== -Fb[2])
+                 if (bb[Fb[24]] < Fb[1]) bb[Fb[24]] = bb[Fb[63]];
```

#### 116. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1206` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1503) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1206)

```diff
-                   sd(dd[yd[7]] += dd[yd[4]] * yd[31], dd[yd[8]] |= dd[yd[7]] << dd[-yd[64]], dd[-yd[64]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
+                   cb(bb[Fb[24]] += bb[Fb[63]] * Fb[32], bb[Fb[33]] |= bb[Fb[24]] << bb[Fb[34]], bb[Fb[34]] += (bb[Fb[24]] & Fb[35]) > Fb[36] ? Fb[37] : Fb[38]);
```

#### 117. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1208-L1211` → after: `L1505-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1505-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1505-L1512) · [Before (L1208-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1208-L1211)

```diff
-                     sd(dd[yd[10]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[-yd[64]] -= yd[11])
-                   } while (dd[-yd[64]] > yd[7]);
-                   dd[yd[7]] = -yd[2]
-                 } return dd[yd[7]] > -yd[2] && dd[yd[10]].push((dd[yd[8]] | dd[yd[7]] << dd[-yd[64]]) & yd[12]), Td(dd[yd[10]])
+                     cb(bb[Fb[13]].push(bb[Fb[33]] & Fb[11]), bb[Fb[33]] >>= Fb[3], bb[Fb[34]] -= Fb[3])
+                   } while (bb[Fb[34]] > Fb[24]);
+                   bb[Fb[24]] = -Fb[2]
+                 } return bb[Fb[24]] > -Fb[2] && bb[Fb[13]].push((bb[Fb[33]] | bb[Fb[24]] << bb[Fb[34]]) & Fb[11]), sb(bb[Fb[13]])
+           }
+ 
+           function ib(...bb) {
+             return bb[Fb[12]] = Fb[2], typeof gb[bb[Fb[1]]] === Fb[15] ? gb[bb[Fb[1]]] = ab(lb[bb[Fb[1]]]) : gb[bb[Fb[1]]]
```

#### 118. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1215` → after: `L1516-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1516-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1516-L1520) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1215)

```diff
-             return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = zd(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
+             cb(bb[Fb[12]] = Fb[1], bb[Fb[4]] = function(...bb) {
+               for (cb(bb[Fb[12]] = Fb[2], bb[Fb[2]] = bb[Fb[1]].length, bb[-Fb[47]] = [], bb[-Fb[149]] = Fb[1]), bb[-Fb[150]] = Fb[1]; bb[-Fb[150]] < bb[Fb[2]]; bb[-Fb[150]]++) bb[-Fb[47]].push(bb[-Fb[150]] !== Fb[1] && bb[Fb[1]][bb[-Fb[150]]] > bb[Fb[1]][bb[-Fb[150]] - Fb[2]] ?  … [truncated]
+               for (bb[-Fb[115]] = bb[Fb[2]] - Fb[2]; bb[-Fb[115]] >= Fb[1]; bb[-Fb[115]]--) bb[-Fb[115]] !== bb[Fb[2]] - Fb[2] && bb[Fb[1]][bb[-Fb[115]]] > bb[Fb[1]][bb[-Fb[115]] + Fb[2]] && (bb[-Fb[47]][bb[-Fb[115]]] = Math.max(bb[-Fb[47]][bb[-Fb[115]]], bb[-Fb[47]][bb[-Fb[115]] … [truncated]
+               return bb[-Fb[149]]
+             }, console.log(bb[Fb[4]]))
```

#### 119. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1217` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1522) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1217)

```diff
-           Ld *= dd[yd[28]][cd(191) + cd(yd[40])]
+           ib(210) + Fb[90] in hb && ub(), vb = Qb
```

#### 120. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1219-L1220` → after: `L1524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1524) · [Before (L1219-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1219-L1220)

```diff
-         let Pd = dd[yd[28]][nd(yd[44]) + nd(yd[18]) + "ss"] * od;
-         od < .3 && (Pd *= od), Ld > Pd && (Ld = Pd), sd(Fd()[nd(195)](Qd, Qd, Ld), dd[yd[38]][nd(196) + nd(197)](Qd))
+         cb(Hb()[Sb(211)](Ib, Ib, vb), bb[Fb[39]][Sb(212) + Sb(213)](Ib))
```

#### 121. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1222` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1526) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1222)

```diff
-       dd[yd[38]][Od(198) + yd[113]] = dd[yd[28]][Od(199) + Od(yd[46]) + yd[113]] * (vd ? Wd : Xd)
+       bb[Fb[39]][wb(214) + Fb[151]] = bb[Fb[43]][wb(Fb[14]) + wb(Fb[110]) + Fb[151]] * (Lb ? eb : Vb)
```

#### 122. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1225` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1529) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1225)

```diff
-   39180: (dd, Od, md) => {
+   38873: (bb, wb, Mb) => {
```

#### 123. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1227-L1228` → after: `L1531-L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1531-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1531-L1532) · [Before (L1227-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1227-L1228)

```diff
-       e: () => hd,
-       i: () => Kd
+       d: () => lb,
+       f: () => gb
```

#### 124. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1230-L1231` → after: `L1534-L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1534-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1534-L1535) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1230-L1231)

```diff
-     var Wd = md(39185),
-       Fd = md(2057);
+     var eb = Mb(38882),
+       Hb = Mb(2107);
```

#### 125. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1235` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1539) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1235)

```diff
-         fX: 1,
+         bg: 1,
```

#### 126. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1280` → after: `L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1584) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1280)

```diff
-         Hd = td ? Nd : qd,
+         Eb = Ob ? tb : Cb,
```

#### 127. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1283-L1284` → after: `L1587-L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/258.js#L1587-L1588) · [Before (L1283-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/258.js#L1283-L1284)

```diff
-         Td = (0, Fd.w)(yd, Hd, bd);
-       vd.friction = dd.standingFriction * ((null === od ? Od.bloxd.getClientPredictedOption(md, "airMomentumConservation") : od.airMomentumConservation) ? Td : Hd), hd.ticksToReachMaxIdleFriction > 0 && hd.ticksToReachMaxIdleFriction--
+         sb = (0, Hb.y)(Fb, Eb, Bb);
+       Lb.friction = bb.standingFriction * ((null === Ub ? wb.bloxd.getClientPredictedOption(Mb, "airMomentumConservation") : Ub.airMomentumConservation) ? sb : Eb), lb.ticksToReachMaxIdleFriction > 0 && lb.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   41734: (dd, Od, md) => {
+   41475: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L12-L15` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L12-L15) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L12-L15)

```diff
-     var Wd = md(5128),
-       Fd = md(38573),
-       Rd = md(10413),
-       Xd = md(4373);
+     var eb = Mb(5306),
+       Hb = Mb(38227),
+       pb = Mb(10608),
+       Vb = Mb(4529);
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L22)

```diff
-         console.warn(`Docs gallery: no default texture for ${hd.size} names`, [...hd]), hd.clear(), vd = null
+         console.warn(`Docs gallery: no default texture for ${lb.size} names`, [...lb]), lb.clear(), Lb = null
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L36)

```diff
-       const Rd = Fd.q[dd];
+       const pb = Hb.o[bb];
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L42)

```diff
-         return "string" === typeof(Od = hd && Array.isArray(Kd) ? Kd[hd[dd]] : Kd) ? td(Od, Xd.i.BLOCK) : Od && "object" === typeof Od && "animTextures" in Od ? td((0, Wd.i)(Od), Xd.i.BLOCK) : null;
+         return "string" === typeof(wb = lb && Array.isArray(gb) ? gb[lb[bb]] : gb) ? Ob(wb, Vb.f.BLOCK) : wb && "object" === typeof wb && "animTextures" in wb ? Ob((0, eb.k)(wb), Vb.f.BLOCK) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L47-L48` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L47-L48) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L47-L48)

```diff
-         left: null !== (Od = vd(4)) && void 0 !== Od ? Od : Qd,
-         right: null !== (md = vd(0)) && void 0 !== md ? md : Qd
+         left: null !== (wb = Lb(4)) && void 0 !== wb ? wb : Ib,
+         right: null !== (Mb = Lb(0)) && void 0 !== Mb ? Mb : Ib
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L54-L55)

```diff
-       const md = Fd.q[dd];
-       return td(null !== (Od = null === md || void 0 === md ? void 0 : md.itemTexture) && void 0 !== Od ? Od : "string" === typeof(null === md || void 0 === md ? void 0 : md.textureInfo) ? md.textureInfo : dd, Xd.i.ITEM)
+       const Mb = Hb.o[bb];
+       return Ob(null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.itemTexture) && void 0 !== wb ? wb : "string" === typeof(null === Mb || void 0 === Mb ? void 0 : Mb.textureInfo) ? Mb.textureInfo : bb, Vb.f.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L60-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L60-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L60-L64)

```diff
-       return Fd.q[dd] ? null !== (Od = null === (md = od(dd)) || void 0 === md ? void 0 : md.top) && void 0 !== Od ? Od : Nd(dd) : null
-     }
- 
-     function Hd(dd) {
-       return td(dd, Xd.i.ICON)
+       return Hb.o[bb] ? null !== (wb = null === (Mb = Ub(bb)) || void 0 === Mb ? void 0 : Mb.top) && void 0 !== wb ? wb : tb(bb) : null
+     }
+ 
+     function Eb(bb) {
+       return Ob(bb, Vb.f.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L69)

```diff
-         return md(4529)(`./${dd}.png`)
+         return Mb(4686)(`./${bb}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L75)

```diff
-   38603: (dd, Od, md) => {
+   38258: (bb, wb, Mb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/259.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/259.js#L77)

```diff
-       b: () => Wd
+       e: () => eb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   38644: (dd, Od, md) => {
+   38294: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L6-L8)

```diff
-       b: () => Rd,
-       c: () => Wd,
-       f: () => Fd
+       e: () => pb,
+       g: () => eb,
+       h: () => Hb
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L15)

```diff
-   38663: (dd, Od, md) => {
+   38322: (bb, wb, Mb) => {
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L31)

```diff
-       return dd === Od ? dd : Math.random() * (Od - dd) + dd
+       return bb === wb ? bb : Math.random() * (wb - bb) + bb
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L116)

```diff
-       return Wd = Math.abs(Od - dd) <= md ? Od : dd + Math.sign(Od - dd) * md, Wd
+       return eb = Math.abs(wb - bb) <= Mb ? wb : bb + Math.sign(wb - bb) * Mb, eb
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L122)

```diff
-       return Fd = -md < Wd && Wd < md ? Od : wd(dd, Od = dd + Wd, md), Fd
+       return Hb = -Mb < eb && eb < Mb ? wb : Xb(bb, wb = bb + eb, Mb), Hb
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L135)

```diff
-       return 0 === md ? Od : xd(Od, md)
+       return 0 === Mb ? wb : rb(wb, Mb)
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L164)

```diff
-   38627: (dd, Od, md) => {
+   38281: (bb, wb, Mb) => {
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L166)

```diff
-       Matrix: () => Wd.d,
+       Matrix: () => eb.b,
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L168-L177` → after: `L168-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L168-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L168-L177) · [Before (L168-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L168-L177)

```diff
-       RegisterMathVector: () => Wd.f,
-       TmpVectors: () => Wd.h,
-       Vector2: () => Wd.i,
-       Cq: () => Wd.j,
-       Vector4: () => Wd.k
-     });
-     var Wd = md(38636);
-     (0, Wd.f)()
-   },
-   38647: (dd, Od, md) => {
+       RegisterMathVector: () => eb.g,
+       TmpVectors: () => eb.j,
+       Vector2: () => eb.m,
+       YC: () => eb.o,
+       Vector4: () => eb.q
+     });
+     var eb = Mb(38285);
+     (0, eb.g)()
+   },
+   38299: (bb, wb, Mb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L188)

```diff
-       e: () => Wd,
+       d: () => eb,
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L190)

```diff
-       i: () => Xd
+       h: () => Vb
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/260.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/260.js#L215)

```diff
-   38669: (dd, Od, md) => {
+   38333: (bb, wb, Mb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1)

```diff
- /*! For license information please see yteou.261.0b51049b.chunk.js.LICENSE.txt */
+ /*! For license information please see welxxc.261.8288cf16.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L5)

```diff
-   39827: dd => {
+   39534: bb => {
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L10-L13)

```diff
-   39812: (dd, Od, md) => {
-     var Wd = md(39820),
-       Fd = md(39823),
-       Rd = md(39827);
+   39518: (bb, wb, Mb) => {
+     var eb = Mb(39526),
+       Hb = Mb(39531),
+       pb = Mb(39534);
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L135)

```diff
-   39820: (dd, Od) => {
+   39526: (bb, wb) => {
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L189)

```diff
-   39807: (dd, Od, md) => {
+   39509: (bb, wb, Mb) => {
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L205-L207` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L205-L207) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L205-L207)

```diff
-     var Wd, Fd = md(39812),
-       Rd = md(39836),
-       Xd = md(39846);
+     var eb, Hb = Mb(39518),
+       pb = Mb(39536),
+       Vb = Mb(39548);
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L252)

```diff
-   39849: (dd, Od) => {
+   39550: (bb, wb) => {
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L291)

```diff
-   39846: (dd, Od, md) => {
+   39548: (bb, wb, Mb) => {
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L367-L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L367-L369) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L367-L369)

```diff
-     var Wd = md(39812),
-       Fd = md(39820),
-       Rd = md(39849),
+     var eb = Mb(39518),
+       Hb = Mb(39526),
+       pb = Mb(39550),
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L372-L374)

```diff
-       hd = md(39836),
-       vd = md(39853),
-       Qd = md(39856),
+       lb = Mb(39536),
+       Lb = Mb(39556),
+       Ib = Mb(39563),
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L400)

```diff
-       dd: for (var qd = Fd, Hd = Fd * td; qd < Rd; ++qd, Hd += td) {
+       bb: for (var Cb = Hb, Eb = Hb * Ob; Cb < pb; ++Cb, Eb += Ob) {
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L419)

```diff
-       dd: for (var Nd = Wd, qd = Wd * Qd; Nd < Fd; ++Nd, qd += Qd) {
+       bb: for (var tb = eb, Cb = eb * Ib; tb < Hb; ++tb, Cb += Ib) {
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L438)

```diff
-   39853: (dd, Od, md) => {
+   39556: (bb, wb, Mb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L481)

```diff
-     var Wd = md(39856)("lo<p0", ["p0"]),
+     var eb = Mb(39563)("lo<p0", ["p0"]),
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L496)

```diff
-   39856: dd => {
+   39563: bb => {
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L506)

```diff
-   39838: dd => {
+   39541: bb => {
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L595)

```diff
-   39836: (dd, Od, md) => {
+   39536: (bb, wb, Mb) => {
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L689)

```diff
-         Wd ? Jd = Xd : Ed = Xd;
+         eb ? jb = Vb : xb = Vb;
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L713)

```diff
-               dd: for (var Pd = 0; Pd < ud; ++Pd) {
+               bb: for (var Nb = 0; Nb < Yb; ++Nb) {
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L750)

```diff
-               dd: for (var ud = 0; ud < Jd; ++ud) {
+               bb: for (var Yb = 0; Yb < jb; ++Yb) {
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L773-L775` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L773-L775) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L773-L775)

```diff
-     var Wd = md(39812),
-       Fd = md(39820),
-       Rd = md(39838),
+     var eb = Mb(39518),
+       Hb = Mb(39526),
+       pb = Mb(39541),
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L796)

```diff
-   39823: dd => {
+   39531: bb => {
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L822)

```diff
-   39770: (dd, Od, md) => {
+   39471: (bb, wb, Mb) => {
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L841-L843)

```diff
-         Xd && (Rd.remove(dd), Wd.qS && (Wd.multi ? (Xd.forEach((Od => {
-           Od && Wd.qS(dd, Od)
-         })), Xd.length = 0) : Wd.qS(dd, Xd)), Kd.removals.push(Rd), vd())
+         Vb && (pb.remove(bb), eb.FW && (eb.multi ? (Vb.forEach((wb => {
+           wb && eb.FW(bb, wb)
+         })), Vb.length = 0) : eb.FW(bb, Vb)), gb.removals.push(pb), Lb())
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L874)

```diff
-       this.sH = Fd, this._systems = Rd, this._renderSystems = Xd, this.YM = function(Od) {
+       this.CE = Hb, this._systems = pb, this._renderSystems = Vb, this.o5 = function(wb) {
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L876)

```diff
-         return Array.isArray(Od) && Od.forEach((Od => dd.yG(Wd, Od))), Wd
+         return Array.isArray(wb) && wb.forEach((wb => bb.qS(eb, wb))), eb
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L881)

```diff
-       }, this.QWd = function(dd) {
+       }, this.Veb = function(bb) {
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L887)

```diff
-         if (Fd[md]) throw new Error(`Component ${md} already exists.`);
+         if (Hb[Mb]) throw new Error(`Component ${Mb} already exists.`);
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L889)

```diff
-         return Kd.name = md, Kd.multi = !!dd.multi, Kd.order = isNaN(dd.order) ? 99 : dd.order, Kd.stateConstructor = dd.stateConstructor || null, Kd.state = dd.state || {}, Kd.QE = dd.QE || null, Kd.qS = dd.qS || null, Kd.system = dd.system || null, Kd.yE = dd.yE || null, Od[md] … [truncated]
+         return gb.name = Mb, gb.multi = !!bb.multi, gb.order = isNaN(bb.order) ? 99 : bb.order, gb.stateConstructor = bb.stateConstructor || null, gb.state = bb.state || {}, gb.bR = bb.bR || null, gb.FW = bb.FW || null, gb.system = bb.system || null, gb.gR = bb.gR || null, wb[Mb] … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L892)

```diff
-         if (!Wd) throw new Error(`Unknown component: ${dd}`);
+         if (!eb) throw new Error(`Unknown component: ${bb}`);
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L896)

```diff
-         Kd.name = dd, Kd.multi = !!md.multi, Kd.order = isNaN(md.order) ? 99 : md.order, Kd.state = md.state || {}, Kd.QE = md.QE || null, Kd.qS = md.qS || null, Kd.system = md.system || null, Kd.yE = md.yE || null, Od[dd] = Kd, Fd[dd]._pendingMultiCleanup = !1, Fd[dd]._multiClea … [truncated]
+         gb.name = bb, gb.multi = !!Mb.multi, gb.order = isNaN(Mb.order) ? 99 : Mb.order, gb.state = Mb.state || {}, gb.bR = Mb.bR || null, gb.FW = Mb.FW || null, gb.system = Mb.system || null, gb.gR = Mb.gR || null, wb[bb] = gb, Hb[bb]._pendingMultiCleanup = !1, Hb[bb]._multiClea … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L900)

```diff
-         Kd.yE && vd < 0 && Xd.push(dd), !Kd.yE && vd >= 0 && Xd.splice(vd, 1), Xd.sort(((dd, md) => Od[dd].order - Od[md].order));
+         gb.gR && Lb < 0 && Vb.push(bb), !gb.gR && Lb >= 0 && Vb.splice(Lb, 1), Vb.sort(((bb, Mb) => wb[bb].order - wb[Mb].order));
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L902)

```diff
-         return this.vG(dd).forEach((dd => {
+         return this.yJ(bb).forEach((bb => {
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L904)

```diff
-           Kd.QE && Kd.QE(dd.QG, dd)
+           gb.bR && gb.bR(bb.bS, bb)
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L908)

```diff
-         if (!Wd) throw new Error(`Unknown component: ${md}`);
+         if (!eb) throw new Error(`Unknown component: ${Mb}`);
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L910)

```diff
-           dd && hd(dd.QG || dd[0].QG, md)
+           bb && lb(bb.bS || bb[0].bS, Mb)
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L915)

```diff
-       }, this.yG = function(dd, md, Wd) {
+       }, this.qS = function(bb, Mb, eb) {
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L918-L919` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L918-L919) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L918-L919)

```diff
-         if (!Kd) throw new Error(`Unknown component: ${md}.`);
-         if (Kd.hash[dd] && !Xd.multi) throw new Error(`Entity ${dd} already has component: ${md}.`);
+         if (!gb) throw new Error(`Unknown component: ${Mb}.`);
+         if (gb.hash[bb] && !Vb.multi) throw new Error(`Entity ${bb} already has component: ${Mb}.`);
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L921)

```diff
-           if (!(Rd = new Xd.stateConstructor).hasOwnProperty("QG")) throw new Error(`Component ${Xd.name} stateConstructor type does not have property __id`);
+           if (!(pb = new Vb.stateConstructor).hasOwnProperty("bS")) throw new Error(`Component ${Vb.name} stateConstructor type does not have property __id`);
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L924)

```diff
-           QG: dd,
+           bS: bb,
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L928)

```diff
-         if (Rd.QG = dd, Xd.multi) {
+         if (pb.bS = bb, Vb.multi) {
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L932-L933` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L932-L933) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L932-L933)

```diff
-         return Xd.QE && Xd.QE(dd, Rd), this
-       }, this.MOd = function(dd, Od) {
+         return Vb.bR && Vb.bR(bb, pb), this
+       }, this.eMb = function(bb, wb) {
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L935)

```diff
-         if (!md) throw new Error(`Unknown component: ${Od}.`);
+         if (!Mb) throw new Error(`Unknown component: ${wb}.`);
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L937-L938)

```diff
-       }, this.pG = function(Od, md) {
-         if (!Fd[md]) throw new Error(`Unknown component: ${md}.`);
+       }, this.nS = function(wb, Mb) {
+         if (!Hb[Mb]) throw new Error(`Unknown component: ${Mb}.`);
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L942)

```diff
-         if (!md) throw new Error(`Unknown component: ${Od}.`);
+         if (!Mb) throw new Error(`Unknown component: ${wb}.`);
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L944)

```diff
-       }, this.vG = function(dd) {
+       }, this.yJ = function(bb) {
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L946)

```diff
-         if (!Od) throw new Error(`Unknown component: ${dd}.`);
+         if (!wb) throw new Error(`Unknown component: ${bb}.`);
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L948-L949)

```diff
-       }, this.Lmd = function(dd) {
-         if (!Fd[dd]) throw new Error(`Unknown component: ${dd}.`);
+       }, this.SMb = function(bb) {
+         if (!Hb[bb]) throw new Error(`Unknown component: ${bb}.`);
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L952-L953)

```diff
-       }, this.lmd = function(dd) {
-         if (!Fd[dd]) throw new Error(`Unknown component: ${dd}.`);
+       }, this.aMb = function(bb) {
+         if (!Hb[bb]) throw new Error(`Unknown component: ${bb}.`);
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L956)

```diff
-       }, this.Et = function(md) {
+       }, this.sO = function(Mb) {
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L971)

```diff
-           Kd.yE(md, hd.list), td()
+           gb.gR(Mb, lb.list), Ob()
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L977)

```diff
-         if (!hd) throw new Error(`Unknown component: ${Wd}.`);
+         if (!lb) throw new Error(`Unknown component: ${eb}.`);
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L983)

```diff
-             Rd && (Fd[Wd] = null, Od.qS && Od.qS(dd, Rd), Kd.multiComps.push({
+             pb && (Hb[eb] = null, wb.FW && wb.FW(bb, pb), gb.multiComps.push({
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L991)

```diff
-     var Wd = md(39775)
+     var eb = Mb(39475)
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L993)

```diff
-   39775: dd => {
+   39475: bb => {
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1030)

```diff
-   39606: (dd, Od, md) => {
+   39283: (bb, wb, Mb) => {
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1121)

```diff
-         return dd ? "Symbol(src)_1." + dd : ""
+         return bb ? "Symbol(src)_1." + bb : ""
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1127)

```diff
-       XO = cd ? Ld.CQ : void 0,
+       Hw = Qb ? Sb.uI : void 0,
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1237` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1237) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1237)

```diff
-           if (Id(dd)) return Nd ? dd : {};
+           if (ib(bb)) return tb ? bb : {};
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1247)

```diff
-           if (!rd[Gd]) return Nd ? dd : {};
+           if (!Ab[Wb]) return tb ? bb : {};
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1251)

```diff
-               case pd:
+               case mb:
```

#### 62. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1253-L1254` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1253-L1254) · [Before (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1253-L1254)

```diff
-               case Xd:
-               case Kd:
+               case Vb:
+               case gb:
```

#### 63. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1256)

```diff
-               case Yd:
+               case hb:
```

#### 64. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1261-L1269` → after: `L1261-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1261-L1269) · [Before (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1261-L1269)

```diff
-               case gd:
-               case wd:
-               case Ed:
-               case Jd:
-               case Ud:
-               case xd:
-               case Bd:
-               case Sd:
-               case sd:
+               case zb:
+               case Xb:
+               case xb:
+               case jb:
+               case Kb:
+               case rb:
+               case Rb:
+               case Db:
+               case cb:
```

#### 65. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1274)

```diff
-               case Qd:
+               case Ib:
```

#### 66. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1279-L1280` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1279-L1280) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1279-L1280)

```diff
-               case td:
-               case yd:
+               case Ob:
+               case Fb:
```

#### 67. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1282)

```diff
-               case qd:
+               case Cb:
```

#### 68. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1287)

```diff
-               case Hd:
+               case Eb:
```

#### 69. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1292)

```diff
-               case bd:
+               case Bb:
```

#### 70. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1305)

```diff
-           return ZO(dd) ? Wd : function(dd, Od) {
+           return nw(bb) ? eb : function(bb, wb) {
```

#### 71. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1319)

```diff
-       return !(!dm(dd) || (Od = dd, OO && OO in Od)) && (MO(dd) || Id(dd) ? RO : Vd).test(lO(dd));
+       return !(!kw(bb) || (wb = bb, kb && kb in wb)) && (Tw(bb) || ib(bb) ? ew : Zb).test(dw(bb));
```

#### 72. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1342)

```diff
-         return "string" == Od || "number" == Od || "symbol" == Od || "boolean" == Od ? "__proto__" !== dd : null === dd
+         return "string" == wb || "number" == wb || "symbol" == wb || "boolean" == wb ? "__proto__" !== bb : null === bb
```

#### 73. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1350)

```diff
-       return nO(md) ? md : void 0
+       return Sw(Mb) ? Mb : void 0
```

#### 74. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1367)

```diff
-       return this.__data__[dd] = gO && void 0 === Od ? Wd : Od, this
+       return this.__data__[bb] = mw && void 0 === wb ? eb : wb, this
```

#### 75. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1423)

```diff
-       return !!(Od = null == Od ? Fd : Od) && ("number" == typeof dd || Ad.test(dd)) && dd > -1 && dd % 1 == 0 && dd < Od
+       return !!(wb = null == wb ? Hb : wb) && ("number" == typeof bb || fb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < wb
```

#### 76. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1450)

```diff
-         case wO:
+         case hw:
```

#### 77. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1452)

```diff
-         case aO:
+         case zw:
```

#### 78. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1454)

```diff
-         case EO:
+         case Xw:
```

#### 79. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1456)

```diff
-         case JO:
+         case xw:
```

#### 80. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1458)

```diff
-         case UO:
+         case jw:
```

#### 81. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1496)

```diff
-   39978: dd => {
+   39667: bb => {
```

#### 82. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1520-L1521` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1520-L1521) · [Before (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1520-L1521)

```diff
-   39263: (dd, Od, md) => {
-     var Wd = md(39265);
+   38961: (bb, wb, Mb) => {
+     var eb = Mb(38967);
```

#### 83. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1553)

```diff
-   39265: (dd, Od) => {
+   38967: (bb, wb) => {
```

#### 84. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1607)

```diff
-   38736: (dd, Od, md) => {
+   38401: (bb, wb, Mb) => {
```

#### 85. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1609-L1610` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1609-L1610) · [Before (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1609-L1610)

```diff
-       Color3: () => Wd.d,
-       b: () => Wd.f
+       Color3: () => eb.e,
+       c: () => eb.f
```

#### 86. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1612-L1613)

```diff
-     var Wd = md(38741);
-     (0, Wd.g)()
+     var eb = Mb(38406);
+     (0, eb.h)()
```

#### 87. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1615)

```diff
-   39297: (dd, Od, md) => {
+   38994: (bb, wb, Mb) => {
```

#### 88. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1617)

```diff
-       e: () => Fd
+       b: () => Hb
```

#### 89. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1619` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1619) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1619)

```diff
-     var Wd = md(39306);
+     var eb = Mb(39001);
```

#### 90. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1660)

```diff
-   39306: (dd, Od, md) => {
+   39001: (bb, wb, Mb) => {
```

#### 91. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1664)

```diff
-     var Wd = md(38636);
+     var eb = Mb(38285);
```

#### 92. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1667)

```diff
-         this.normal = new Wd.j(dd, Od, md), this.d = Fd
+         this.normal = new eb.o(bb, wb, Mb), this.d = Hb
```

#### 93. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1669)

```diff
-       RRd() {
+       ppb() {
```

#### 94. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1716)

```diff
-         return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
+         return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
```

#### 95. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1719)

```diff
-         return Wd.j.Dot(this.normal, dd) <= Od
+         return eb.o.Dot(this.normal, bb) <= wb
```

#### 96. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1722)

```diff
-         return Wd.j.Dot(dd, this.normal) + this.d
+         return eb.o.Dot(bb, this.normal) + this.d
```

#### 97. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1736)

```diff
-         return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
+         return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
```

#### 98. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1740)

```diff
-         return Wd.j.Dot(md, Od) + Fd
+         return eb.o.Dot(Mb, wb) + Hb
```

#### 99. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1743)

```diff
-     Fd._TmpMatrix = Wd.d.Identity()
+     Hb._TmpMatrix = eb.b.Identity()
```

#### 100. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1745)

```diff
-   38627: (dd, Od, md) => {
+   38281: (bb, wb, Mb) => {
```

#### 101. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1747` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1747) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1747)

```diff
-       Matrix: () => Wd.d,
+       Matrix: () => eb.b,
```

#### 102. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1749-L1753` → after: `L1749-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1749-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1749-L1753) · [Before (L1749-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1749-L1753)

```diff
-       RegisterMathVector: () => Wd.f,
-       TmpVectors: () => Wd.h,
-       Vector2: () => Wd.i,
-       Cq: () => Wd.j,
-       Vector4: () => Wd.k
+       RegisterMathVector: () => eb.g,
+       TmpVectors: () => eb.j,
+       Vector2: () => eb.m,
+       YC: () => eb.o,
+       Vector4: () => eb.q
```

#### 103. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1755-L1756` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1755-L1756) · [Before (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1755-L1756)

```diff
-     var Wd = md(38636);
-     (0, Wd.f)()
+     var eb = Mb(38285);
+     (0, eb.g)()
```

#### 104. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1758)

```diff
-   39642: (dd, Od, md) => {
+   39323: (bb, wb, Mb) => {
```

#### 105. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1760)

```diff
-       b: () => Wd
+       d: () => eb
```

#### 106. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1777)

```diff
-   39461: (dd, Od, md) => {
+   39148: (bb, wb, Mb) => {
```

#### 107. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1781)

```diff
-         return ("x" === dd ? Od : 3 & Od | 8).toString(16)
+         return ("x" === bb ? wb : 3 & wb | 8).toString(16)
```

#### 108. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/261.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/261.js#L1785)

```diff
-       b: () => Wd
+       c: () => eb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   42154: (dd, Od, md) => {
+   41916: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L7)

```diff
-       f: () => Kd
+       d: () => gb
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L9-L11)

```diff
-     var Wd = md(40262),
-       Fd = md(41948),
-       Rd = md(42126),
+     var eb = Mb(39971),
+       Hb = Mb(41697),
+       pb = Mb(41879),
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L19)

```diff
-         this.attached[Od] ? Wd.c.Warn("camera input of type " + Od + " already exists on camera") : (this.attached[Od] = dd, dd.camera = this.camera, dd.checkInputs && (this.checkInputs = this._addCheckInputs(dd.checkInputs.bind(dd))), this.attachedToElement && dd.attachControl(t … [truncated]
+         this.attached[wb] ? eb.b.Warn("camera input of type " + wb + " already exists on camera") : (this.attached[wb] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L45)

```diff
-           dd = !Rd.e.ForceAttachControlToAlwaysPreventDefault && dd, this.attachedToElement = !0, this.noPreventDefault = dd;
+           bb = !pb.c.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L68)

```diff
-             Wd = Fd.b.Serialize(dd);
+             eb = Hb.d.Serialize(bb);
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L81)

```diff
-                 Rd = Fd.b.Parse((() => new md), Wd, null);
+                 pb = Hb.d.Parse((() => new Mb), eb, null);
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L89)

```diff
-               const Wd = Fd.b.Parse((() => new Od), dd, null);
+               const eb = Hb.d.Parse((() => new wb), bb, null);
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L96)

```diff
-   42162: (dd, Od, md) => {
+   41920: (bb, wb, Mb) => {
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L98)

```diff
-       e: () => Wd.e
+       c: () => eb.e
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L100-L101)

```diff
-     var Wd = md(42168);
-     (0, Wd.f)()
+     var eb = Mb(41929);
+     (0, eb.h)()
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L103)

```diff
-   42168: (dd, Od, md) => {
+   41929: (bb, wb, Mb) => {
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L106)

```diff
-       f: () => od
+       h: () => Ub
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L108` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L108-L111) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L108)

```diff
-     var Wd = md(41922),
+     var eb = Mb(41675),
+       Hb = Mb(41679),
+       pb = Mb(38285),
+       Vb = Mb(38406),
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L110-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L113-L114) · [Before (L110-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L110-L114)

```diff
-       Rd = md(38636),
-       Xd = md(38741),
-       Kd = md(42172),
-       hd = md(42132),
-       vd = md(38669);
+       lb = Mb(41886),
+       Lb = Mb(38333);
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L117)

```diff
-         let Od, md, hd = Kd.c,
+         let wb, Mb, lb = gb.d,
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L124)

```diff
-             super(dd, md, Fd), this.groundColor = (0, Wd.k)(this, vd, new Xd.d(0, 0, 0)), this.direction = ((0, Wd.k)(this, Qd), (0, Wd.k)(this, td, void 0)), (0, Wd.k)(this, od), this.direction = Od || Rd.j.Up()
+             super(bb, Mb, Hb), this.groundColor = (0, eb.m)(this, Lb, new Vb.e(0, 0, 0)), this.direction = ((0, eb.m)(this, Ib), (0, eb.m)(this, Ob, void 0)), (0, eb.m)(this, Ub), this.direction = wb || pb.o.Up()
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L133)

```diff
-             return this.direction = Rd.j.Normalize(dd.subtract(Rd.j.Zero())), this.direction
+             return this.direction = pb.o.Normalize(bb.subtract(pb.o.Zero())), this.direction
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L139)

```diff
-             const md = Rd.j.Normalize(this.direction);
+             const Mb = pb.o.Normalize(this.direction);
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L143)

```diff
-             const md = Rd.j.Normalize(this.direction);
+             const Mb = pb.o.Normalize(this.direction);
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L147)

```diff
-             return this._worldMatrix || (this._worldMatrix = Rd.d.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = pb.b.Identity()), this._worldMatrix
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L150)

```diff
-             return Kd.c.LIGHTTYPEID_HEMISPHERICLIGHT
+             return gb.d.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L157)

```diff
-           Od = [(0, Fd.m)()], md = [(0, Fd.B)()], (0, Wd.h)(null, null, Od, {
+           wb = [(0, Hb.i)()], Mb = [(0, Hb.B)()], (0, eb.i)(null, null, wb, {
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L170)

```diff
-           }, vd, Qd), (0, Wd.h)(null, null, md, {
+           }, Lb, Ib), (0, eb.i)(null, null, Mb, {
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L194)

```diff
-       td || (td = !0, hd.b.AddNodeConstructor("Light_Type_3", ((dd, Od) => () => new Qd(dd, Rd.j.Zero(), Od))), (0, vd.e)("BABYLON.HemisphericLight", Qd))
+       Ob || (Ob = !0, lb.d.AddNodeConstructor("Light_Type_3", ((bb, wb) => () => new Ib(bb, pb.o.Zero(), wb))), (0, Lb.e)("BABYLON.HemisphericLight", Ib))
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L197)

```diff
-   38736: (dd, Od, md) => {
+   38401: (bb, wb, Mb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L199-L200)

```diff
-       Color3: () => Wd.d,
-       b: () => Wd.f
+       Color3: () => eb.e,
+       c: () => eb.f
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L202-L203` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L202-L203) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L202-L203)

```diff
-     var Wd = md(38741);
-     (0, Wd.g)()
+     var eb = Mb(38406);
+     (0, eb.h)()
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L205)

```diff
-   39297: (dd, Od, md) => {
+   38994: (bb, wb, Mb) => {
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L207)

```diff
-       e: () => Fd
+       b: () => Hb
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L209)

```diff
-     var Wd = md(39306);
+     var eb = Mb(39001);
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L250)

```diff
-   39306: (dd, Od, md) => {
+   39001: (bb, wb, Mb) => {
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L254)

```diff
-     var Wd = md(38636);
+     var eb = Mb(38285);
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L257)

```diff
-         this.normal = new Wd.j(dd, Od, md), this.d = Fd
+         this.normal = new eb.o(bb, wb, Mb), this.d = Hb
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L259)

```diff
-       RRd() {
+       ppb() {
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L306)

```diff
-         return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
+         return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L309)

```diff
-         return Wd.j.Dot(this.normal, dd) <= Od
+         return eb.o.Dot(this.normal, bb) <= wb
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L312)

```diff
-         return Wd.j.Dot(dd, this.normal) + this.d
+         return eb.o.Dot(bb, this.normal) + this.d
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L326)

```diff
-         return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
+         return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L330)

```diff
-         return Wd.j.Dot(md, Od) + Fd
+         return eb.o.Dot(Mb, wb) + Hb
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L333)

```diff
-     Fd._TmpMatrix = Wd.d.Identity()
+     Hb._TmpMatrix = eb.b.Identity()
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L335)

```diff
-   38627: (dd, Od, md) => {
+   38281: (bb, wb, Mb) => {
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L337)

```diff
-       Matrix: () => Wd.d,
+       Matrix: () => eb.b,
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L339-L343` → after: `L339-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L339-L343) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L339-L343)

```diff
-       RegisterMathVector: () => Wd.f,
-       TmpVectors: () => Wd.h,
-       Vector2: () => Wd.i,
-       Cq: () => Wd.j,
-       Vector4: () => Wd.k
+       RegisterMathVector: () => eb.g,
+       TmpVectors: () => eb.j,
+       Vector2: () => eb.m,
+       YC: () => eb.o,
+       Vector4: () => eb.q
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L345-L346` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L345-L346) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L345-L346)

```diff
-     var Wd = md(38636);
-     (0, Wd.f)()
+     var eb = Mb(38285);
+     (0, eb.g)()
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L348)

```diff
-   39642: (dd, Od, md) => {
+   39323: (bb, wb, Mb) => {
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L350)

```diff
-       b: () => Wd
+       d: () => eb
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L367)

```diff
-   42321: (dd, Od, md) => {
+   42074: (bb, wb, Mb) => {
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L369)

```diff
-       e: () => vd
+       b: () => Lb
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L371-L375` → after: `L371-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L371-L375) · [Before (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L371-L375)

```diff
-     var Wd = md(38636),
-       Fd = md(38741),
-       Rd = md(42330),
-       Xd = md(42339),
-       Kd = md(42358);
+     var eb = Mb(38285),
+       Hb = Mb(38406),
+       pb = Mb(42078),
+       Vb = Mb(42091),
+       gb = Mb(42107);
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L413)

```diff
-         pd = 0 === dd.sideOrientation ? 0 : dd.sideOrientation || Xd.c.DEFAULTSIDE,
+         mb = 0 === bb.sideOrientation ? 0 : bb.sideOrientation || Vb.d.DEFAULTSIDE,
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L417)

```diff
-       for (let Xd = 0; Xd < 6; Xd++) void 0 === Yd[Xd] && (Yd[Xd] = new Wd.k(0, 0, 1, 1)), gd && void 0 === gd[Xd] && (gd[Xd] = new Fd.f(1, 1, 1, 1));
+       for (let Vb = 0; Vb < 6; Vb++) void 0 === hb[Vb] && (hb[Vb] = new eb.q(0, 0, 1, 1)), zb && void 0 === zb[Vb] && (zb[Vb] = new Hb.f(1, 1, 1, 1));
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L419)

```diff
-         if (Rd.push(Yd[Wd].z, Kd.e ? 1 - Yd[Wd].w : Yd[Wd].w), Rd.push(Yd[Wd].x, Kd.e ? 1 - Yd[Wd].w : Yd[Wd].w), Rd.push(Yd[Wd].x, Kd.e ? 1 - Yd[Wd].y : Yd[Wd].y), Rd.push(Yd[Wd].z, Kd.e ? 1 - Yd[Wd].y : Yd[Wd].y), gd)
+         if (pb.push(hb[eb].z, gb.d ? 1 - hb[eb].w : hb[eb].w), pb.push(hb[eb].x, gb.d ? 1 - hb[eb].w : hb[eb].w), pb.push(hb[eb].x, gb.d ? 1 - hb[eb].y : hb[eb].y), pb.push(hb[eb].z, gb.d ? 1 - hb[eb].y : hb[eb].y), zb)
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L421-L422` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L421-L422) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L421-L422)

```diff
-       Xd.c._ComputeSides(pd, Td, Od, md, Rd, dd.frontUVs, dd.backUVs);
-       const Ed = new Xd.c;
+       Vb.d._ComputeSides(mb, sb, wb, Mb, pb, bb.frontUVs, bb.backUVs);
+       const xb = new Vb.d;
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L424)

```diff
-         const dd = pd === Xd.c.DOUBLESIDE ? wd.concat(wd) : wd;
+         const bb = mb === Vb.d.DOUBLESIDE ? Xb.concat(Xb) : Xb;
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L433-L434` → after: `L433-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L433-L434) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L433-L434)

```diff
-       const Wd = new Rd.d(dd, md);
-       Od.sideOrientation = Rd.d._GetDefaultSideOrientation(Od.sideOrientation), Wd._originalBuilderSideOrientation = Od.sideOrientation;
+       const eb = new pb.e(bb, Mb);
+       wb.sideOrientation = pb.e._GetDefaultSideOrientation(wb.sideOrientation), eb._originalBuilderSideOrientation = wb.sideOrientation;
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L438)

```diff
-     Qd || (Qd = !0, Xd.c.CreateBox = hd, Rd.d.CreateBox = function(dd, Od) {
+     Ib || (Ib = !0, Vb.d.CreateBox = lb, pb.e.CreateBox = function(bb, wb) {
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L446)

```diff
-   42384: (dd, Od, md) => {
+   42132: (bb, wb, Mb) => {
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L448)

```diff
-       e: () => td
+       d: () => Ob
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L450-L455` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L450-L455) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L450-L455)

```diff
-     var Wd = md(38636),
-       Fd = md(42330),
-       Rd = md(42339),
-       Xd = md(42393),
-       Kd = md(42075),
-       hd = md(40262);
+     var eb = Mb(38285),
+       Hb = Mb(42078),
+       pb = Mb(42091),
+       Vb = Mb(42137),
+       gb = Mb(41816),
+       lb = Mb(39971);
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L485)

```diff
-       const hd = new Rd.c;
+       const lb = new pb.d;
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L496)

```diff
-         vd = Wd.j.Zero();
+         Lb = eb.o.Zero();
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L506)

```diff
-       const bd = new Rd.c;
+       const Bb = new pb.d;
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L516)

```diff
-         const dd = Wd.getVerticesData(Kd.j.PositionKind);
+         const bb = eb.getVerticesData(gb.i.PositionKind);
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L518)

```diff
-         Rd && (Od = Wd.getVerticesData(Kd.j.ColorKind));
+         pb && (wb = eb.getVerticesData(gb.i.ColorKind));
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L525)

```diff
-         return Wd.updateVerticesData(Kd.j.PositionKind, dd, !1, !1), Rd && Od && Wd.updateVerticesData(Kd.j.ColorKind, Od, !1, !1), Wd.refreshBoundingInfo(), Wd
+         return eb.updateVerticesData(gb.i.PositionKind, bb, !1, !1), pb && wb && eb.updateVerticesData(gb.i.ColorKind, wb, !1, !1), eb.refreshBoundingInfo(), eb
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L528)

```diff
-         Qd = new Xd.e(dd, md, null, void 0, void 0, hd, Od.useVertexAlpha, Od.material);
+         Ib = new Vb.c(bb, Mb, null, void 0, void 0, lb, wb.useVertexAlpha, wb.material);
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L553)

```diff
-           const Od = Wd.j.Zero(),
+           const wb = eb.o.Zero(),
```

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L565)

```diff
-         return (Od.dashNb || Od.dashSize || Od.gapSize || Od.useVertexAlpha || Od.material) && hd.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Kd.updateMeshPositions(dd, !1), Kd
+         return (wb.dashNb || wb.dashSize || wb.gapSize || wb.useVertexAlpha || wb.material) && lb.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), gb.updateMeshPositions(bb, !1), gb
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L567-L568` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L567-L568) · [Before (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L567-L568)

```diff
-       const od = new Xd.e(dd, md, null, void 0, void 0, void 0, Od.useVertexAlpha, Od.material);
-       return Qd(Od).applyToMesh(od, Od.updatable), od._creationDataStorage = new Fd.h, od._creationDataStorage.dashSize = td, od._creationDataStorage.gapSize = vd, od
+       const Ub = new Vb.c(bb, Mb, null, void 0, void 0, void 0, wb.useVertexAlpha, wb.material);
+       return Ib(wb).applyToMesh(Ub, wb.updatable), Ub._creationDataStorage = new Hb.j, Ub._creationDataStorage.dashSize = Ob, Ub._creationDataStorage.gapSize = Lb, Ub
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L571)

```diff
-     qd || (qd = !0, Rd.c.CreateLineSystem = vd, Rd.c.CreateDashedLines = Qd, Fd.d.CreateLines = function(dd, Od) {
+     Cb || (Cb = !0, pb.d.CreateLineSystem = Lb, pb.d.CreateDashedLines = Ib, Hb.e.CreateLines = function(bb, wb) {
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L577)

```diff
-     }, Fd.d.CreateDashedLines = function(dd, Od, md, Wd, Fd) {
+     }, Hb.e.CreateDashedLines = function(bb, wb, Mb, eb, Hb) {
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L588)

```diff
-   42393: (dd, Od, md) => {
+   42137: (bb, wb, Mb) => {
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L590)

```diff
-       e: () => od,
+       c: () => Ub,
```

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L593-L600` → after: `L593-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L593-L600) · [Before (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L593-L600)

```diff
-     var Wd, Fd, Rd = md(38741),
-       Xd = md(42075),
-       Kd = md(42330),
-       hd = md(42402),
-       vd = md(42208),
-       Qd = md(42406),
-       td = md(41817);
-     class od extends Kd.d {
+     var eb, Hb, pb = Mb(38406),
+       Vb = Mb(41816),
+       gb = Mb(42078),
+       lb = Mb(42140),
+       Lb = Mb(41963),
+       Ib = Mb(42147),
+       Ob = Mb(41554);
+     class Ub extends gb.e {
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L609)

```diff
-         super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Od, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Wd, this.useVertexAlpha = Fd, this.color = new  … [truncated]
+         super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, wb, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = eb, this.useVertexAlpha = Hb, this.color = new  … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L611)

```diff
-           attributes: [Xd.j.PositionKind],
+           attributes: [Vb.i.PositionKind],
```

#### 78. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L618)

```diff
-         if (this.useVertexAlpha ? hd.defines.push("#define VERTEXALPHA") : hd.needAlphaBlending = !1, this.useVertexColor ? (hd.defines.push("#define VERTEXCOLOR"), hd.attributes.push(Xd.j.ColorKind)) : (hd.uniforms.push("color"), this._color4 = new Rd.f), Kd) this.material = Kd;
+         if (this.useVertexAlpha ? lb.defines.push("#define VERTEXALPHA") : lb.needAlphaBlending = !1, this.useVertexColor ? (lb.defines.push("#define VERTEXCOLOR"), lb.attributes.push(Vb.i.ColorKind)) : (lb.uniforms.push("color"), this._color4 = new pb.f), gb) this.material = gb;
```

#### 79. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L620-L621)

```diff
-           this.zV().Iq().isWebGPU && !od.ForceGLSL && (this._shaderLanguage = 1), hd.shaderLanguage = this._shaderLanguage, hd.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([md.e(663).then((() => md(54990))), md.e(669).then((() => md(54997)))]) : await Promise.all([md.e(645).then((() => md(55001))), md.e(651).then((() => md(55004)))])
+           this.RJ().DC().isWebGPU && !Ub.ForceGLSL && (this._shaderLanguage = 1), lb.shaderLanguage = this._shaderLanguage, lb.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([Mb.e(663).then((() => Mb(54784))), Mb.e(669).then((() => Mb(54792)))]) : await Promise.all([Mb.e(645).then((() => Mb(54798))), Mb.e(651).then((() => Mb(54802)))])
```

#### 80. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L623)

```diff
-           const dd = new Qd.q("colorShader", this.zV(), "color", hd, !1);
+           const bb = new Ib.n("colorShader", this.RJ(), "color", lb, !1);
```

#### 81. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L661)

```diff
-         const Wd = this.zV().Iq();
+         const eb = this.RJ().DC();
```

#### 82. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L673)

```diff
-           return md.source = this, new od(dd, this.zV(), md.parent, md.source, md.doNotCloneChildren)
+           return Mb.source = this, new Ub(bb, this.RJ(), Mb.parent, Mb.source, Mb.doNotCloneChildren)
```

#### 83. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L675)

```diff
-         return new od(dd, this.zV(), Od, this, md)
+         return new Ub(bb, this.RJ(), wb, this, Mb)
```

#### 84. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L679-L681` → after: `L679-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L679-L681) · [Before (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L679-L681)

```diff
-         if (this.xG) {
-           Od.xG = {};
-           for (const dd in this.xG) Od.xG[dd] = this.xG[dd]
+         if (this.hN) {
+           wb.hN = {};
+           for (const bb in this.hN) wb.hN[bb] = this.hN[bb]
```

#### 85. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L686)

```diff
-         super.serialize(dd), dd.color = this.color.RRd(), dd.alpha = this.alpha
+         super.serialize(bb), bb.color = this.color.ppb(), bb.alpha = this.alpha
```

#### 86. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L690)

```diff
-         return md.color = Rd.d.FromArray(dd.color), md.alpha = dd.alpha, md
+         return Mb.color = pb.e.FromArray(bb.color), Mb.alpha = bb.alpha, Mb
```

#### 87. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L694)

```diff
-     class Nd extends hd.c {
+     class tb extends lb.e {
```

#### 88. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L705-L706` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L705-L706) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L705-L706)

```diff
-       qd || (qd = !0, Kd.d._LinesMeshParser = (dd, Od) => od.Parse(dd, Od))
-     }(Wd = od.prototype).enableEdgesRendering ?? (Wd.enableEdgesRendering = (0, td.i)("LinesMesh", "enableEdgesRendering")), (Fd = Nd.prototype).enableEdgesRendering ?? (Fd.enableEdgesRendering = (0, td.i)("InstancedLinesMesh", "enableEdgesRendering"))
+       Cb || (Cb = !0, gb.e._LinesMeshParser = (bb, wb) => Ub.Parse(bb, wb))
+     }(eb = Ub.prototype).enableEdgesRendering ?? (eb.enableEdgesRendering = (0, Ob.h)("LinesMesh", "enableEdgesRendering")), (Hb = tb.prototype).enableEdgesRendering ?? (Hb.enableEdgesRendering = (0, Ob.h)("InstancedLinesMesh", "enableEdgesRendering"))
```

#### 89. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L708)

```diff
-   40260: (dd, Od, md) => {
+   39966: (bb, wb, Mb) => {
```

#### 90. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L710)

```diff
-       d: () => Rd
+       e: () => pb
```

#### 91. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L712)

```diff
-     var Wd = md(40262);
+     var eb = Mb(39971);
```

#### 92. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L745)

```diff
-             Wd.c.Warn(hd.message)
+             eb.b.Warn(lb.message)
```

#### 93. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L751)

```diff
-   39461: (dd, Od, md) => {
+   39148: (bb, wb, Mb) => {
```

#### 94. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L755)

```diff
-         return ("x" === dd ? Od : 3 & Od | 8).toString(16)
+         return ("x" === bb ? wb : 3 & wb | 8).toString(16)
```

#### 95. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L759)

```diff
-       b: () => Wd
+       c: () => eb
```

#### 96. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L762)

```diff
-   40262: (dd, Od, md) => {
+   39971: (bb, wb, Mb) => {
```

#### 97. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L764)

```diff
-       c: () => Wd
+       b: () => eb
```

#### 98. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L785)

```diff
-         const Od = dd => dd < 10 ? "0" + dd : "" + dd,
+         const wb = bb => bb < 10 ? "0" + bb : "" + bb,
```

#### 99. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L800)

```diff
-         const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
+         const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
```

#### 100. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L833)

```diff
-   42016: (dd, Od, md) => {
+   41759: (bb, wb, Mb) => {
```

#### 101. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L835)

```diff
-       e: () => Wd.c
+       b: () => eb.g
```

#### 102. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/262.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/262.js#L837-L838)

```diff
-     var Wd = md(42020);
-     (0, Wd.b)()
+     var eb = Mb(41764);
+     (0, eb.d)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (1438 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   54247: (dd, Od, md) => {
+   54067: (bb, wb, Mb) => {
```
