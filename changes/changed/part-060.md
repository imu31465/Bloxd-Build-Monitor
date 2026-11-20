# Changed — Bundle Modifications Report (Part 060 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `60 / 115` (**440** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 059](part-059.md) · [Part 061 →](part-061.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/83.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/83.js` (2239 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4)

#### 1288. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13518-L13519` → after: `L13547-L13548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13547-L13548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13547-L13548) · [Before (L13518-L13519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13518-L13519)

```diff
-         x: Zc.d.clamp((lT - 25) / hK, 0, 1),
-         y: Zc.d.clamp(1 - (MT - 25) / hK, -1, 2)
+         x: Sg.c.clamp((Yq - 25) / VO, 0, 1),
+         y: Sg.c.clamp(1 - (lq - 25) / VO, -1, 2)
```

#### 1289. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13525-L13526` → after: `L13554-L13555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13554-L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13554-L13555) · [Before (L13525-L13526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13525-L13526)

```diff
-         x: (0, jK.s)(TT, cT, MT),
-         y: (0, jK.s)(kT, lT, MT)
+         x: (0, WO.u)(qq, gq, lq),
+         y: (0, WO.u)(Eq, Yq, lq)
```

#### 1290. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13582-L13584` → after: `L13611-L13613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13611-L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13611-L13613) · [Before (L13582-L13584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13582-L13584)

```diff
-           OT = Zc.d.clamp(OT, 0, 1), fT = Zc.d.clamp(fT, 0, 1);
-           const [xT, AT, CT, jT] = kT.map((TT => Zc.d.clamp(TT, 0, 1))), vT = Math.hypot(OT - xT, fT - AT), tT = Math.hypot(OT - CT, fT - jT), hT = vT <= tT ? "p1" : "p2";
-           ("p1" === hT ? vT : tT) > .12 || (KT.current = hT, yT(hT), cT.setPointerCapture(TT.pointerId), IT(TT.clientX, TT.clientY))
+           mq = Sg.c.clamp(mq, 0, 1), Aq = Sg.c.clamp(Aq, 0, 1);
+           const [cq, Bq, Wq, Nq] = Eq.map((qq => Sg.c.clamp(qq, 0, 1))), aq = Math.hypot(mq - cq, Aq - Bq), Vq = Math.hypot(mq - Wq, Aq - Nq), dq = aq <= Vq ? "p1" : "p2";
+           ("p1" === dq ? aq : Vq) > .12 || (Oq.current = dq, xq(dq), gq.setPointerCapture(qq.pointerId), uq(qq.clientX, qq.clientY))
```

#### 1291. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13611-L13612` → after: `L13640-L13641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13640-L13641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13640-L13641) · [Before (L13611-L13612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13611-L13612)

```diff
-     var FK = cT(1701),
-       rK = cT(1685);
+     var QO = gq(1668),
+       yO = gq(1646);
```

#### 1292. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13655` → after: `L13684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13684) · [Before (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13655)

```diff
-         OT instanceof Node && (null !== (MT = TT.current) && void 0 !== MT && MT.contains(OT) || null !== cT && void 0 !== cT && null !== (KT = cT.current) && void 0 !== KT && KT.contains(OT) || (0, FK.f)(OT) || kT())
+         mq instanceof Node && (null !== (lq = qq.current) && void 0 !== lq && lq.contains(mq) || null !== gq && void 0 !== gq && null !== (Oq = gq.current) && void 0 !== Oq && Oq.contains(mq) || (0, QO.j)(mq) || Eq())
```

#### 1293. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13712` → after: `L13741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13741) · [Before (L13712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13712)

```diff
-               UA: OT.UA,
+               SB: mq.SB,
```

#### 1294. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13717` → after: `L13746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13746) · [Before (L13717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13717)

```diff
-           }), [QT, DT, OT.UA, AT, IT, hT]),
+           }), [Hq, Pq, mq.SB, Bq, uq, dq]),
```

#### 1295. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13719-L13720` → after: `L13748-L13749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13748-L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13748-L13749) · [Before (L13719-L13720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13719-L13720)

```diff
-             CT(OT.UA), IT()
-           }), [OT.UA, CT, IT]),
+             Wq(mq.SB), uq()
+           }), [mq.SB, Wq, uq]),
```

#### 1296. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13733-L13734` → after: `L13762-L13763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13762-L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13762-L13763) · [Before (L13733-L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13733-L13734)

```diff
-             left: `${null!==(cT=null===tT||void 0===tT?void 0:tT.left)&&void 0!==cT?cT:wT.left}px`,
-             top: `${null!==(MT=null===tT||void 0===tT?void 0:tT.top)&&void 0!==MT?MT:wT.top}px`
+             left: `${null!==(gq=null===Vq||void 0===Vq?void 0:Vq.left)&&void 0!==gq?gq:vq.left}px`,
+             top: `${null!==(lq=null===Vq||void 0===Vq?void 0:Vq.top)&&void 0!==lq?lq:vq.top}px`
```

#### 1297. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13746` → after: `L13775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13775) · [Before (L13746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13746)

```diff
-               children: ["Tick ", yT.UA]
+               children: ["Tick ", xq.SB]
```

#### 1298. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13766` → after: `L13795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13795) · [Before (L13766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13766)

```diff
-                 return (0, xT.jsx)(bc.P, {
+                 return (0, cq.jsx)(hg.Q, {
```

#### 1299. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13782` → after: `L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13811) · [Before (L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13782)

```diff
-             children: [(0, xT.jsx)(bc.e, {
+             children: [(0, cq.jsx)(hg.g, {
```

#### 1300. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13786` → after: `L13815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13815) · [Before (L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13786)

```diff
-             }), (0, xT.jsx)(bc.m, {
+             }), (0, cq.jsx)(hg.p, {
```

#### 1301. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13790` → after: `L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13819) · [Before (L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13790)

```diff
-             }), (0, xT.jsx)(bc.I, {
+             }), (0, cq.jsx)(hg.K, {
```

#### 1302. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13825-L13826` → after: `L13854-L13855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13854-L13855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13854-L13855) · [Before (L13825-L13826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13825-L13826)

```diff
-             left: `${null!==(cT=null===hT||void 0===hT?void 0:hT.left)&&void 0!==cT?cT:NT.left}px`,
-             top: `${null!==(MT=null===hT||void 0===hT?void 0:hT.top)&&void 0!==MT?MT:NT.top}px`
+             left: `${null!==(gq=null===dq||void 0===dq?void 0:dq.left)&&void 0!==gq?gq:jq.left}px`,
+             top: `${null!==(lq=null===dq||void 0===dq?void 0:dq.top)&&void 0!==lq?lq:jq.top}px`
```

#### 1303. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13833` → after: `L13862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13862) · [Before (L13833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13833)

```diff
-             children: [(0, xT.jsx)(bc.m, {
+             children: [(0, cq.jsx)(hg.p, {
```

#### 1304. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13842` → after: `L13871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13871) · [Before (L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13842)

```diff
-             }), (0, xT.jsx)(bc.e, {
+             }), (0, cq.jsx)(hg.g, {
```

#### 1305. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13850` → after: `L13879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13879) · [Before (L13850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13850)

```diff
-             }), (0, xT.jsx)(bc.P, {
+             }), (0, cq.jsx)(hg.Q, {
```

#### 1306. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13859` → after: `L13888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13888) · [Before (L13859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13859)

```diff
-             }), (0, xT.jsx)(bc.P, {
+             }), (0, cq.jsx)(hg.Q, {
```

#### 1307. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13867` → after: `L13896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13896) · [Before (L13867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13867)

```diff
-             }), yT && (0, xT.jsx)(bc.P, {
+             }), xq && (0, cq.jsx)(hg.Q, {
```

#### 1308. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13884` → after: `L13913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13913) · [Before (L13884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13884)

```diff
-           xJ: yT,
+           bJ: xq,
```

#### 1309. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13916-L13917` → after: `L13945-L13946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R13945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L13945-L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L13945-L13946) · [Before (L13916-L13917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13916-L13917)

```diff
-           BT = (0, lT.useMemo)((() => fT.map((TT => TT.UA))), [fT]),
-           WT = null !== GT && void 0 !== GT ? GT : OT,
+           Xq = (0, Yq.useMemo)((() => Aq.map((qq => qq.SB))), [Aq]),
+           wq = null !== Tq && void 0 !== Tq ? Tq : mq,
```

#### 1310. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13977` → after: `L14006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14006) · [Before (L13977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13977)

```diff
-             return dT && null !== (TT = fT.find((TT => TT.UA === dT.UA))) && void 0 !== TT ? TT : null
+             return Jq && null !== (qq = Aq.find((qq => qq.SB === Jq.SB))) && void 0 !== qq ? qq : null
```

#### 1311. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13979` → after: `L14008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14008) · [Before (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13979)

```diff
-           Ok = (0, lT.useMemo)((() => !!Kk && fT.some((TT => TT.UA > Kk.UA))), [fT, Kk]);
+           mE = (0, Yq.useMemo)((() => !!OE && Aq.some((qq => qq.SB > OE.SB))), [Aq, OE]);
```

#### 1312. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L13995` → after: `L14024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14024) · [Before (L13995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L13995)

```diff
-               UA: TT,
+               SB: qq,
```

#### 1313. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14162-L14163` → after: `L14191-L14192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14191-L14192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14191-L14192) · [Before (L14162-L14163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14162-L14163)

```diff
-           Hk = null !== (kT = null === IT || void 0 === IT ? void 0 : IT.inTick) && void 0 !== kT ? kT : 0,
-           ek = null !== (cT = null === IT || void 0 === IT ? void 0 : IT.outTick) && void 0 !== cT ? cT : MT,
+           ZE = null !== (Eq = null === uq || void 0 === uq ? void 0 : uq.inTick) && void 0 !== Eq ? Eq : 0,
+           fE = null !== (gq = null === uq || void 0 === uq ? void 0 : uq.outTick) && void 0 !== gq ? gq : lq,
```

#### 1314. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14176` → after: `L14205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14205) · [Before (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14176)

```diff
-           Bk = null !== RT && void 0 !== RT ? RT : UT ? {
+           sE = null !== Rq && void 0 !== Rq ? Rq : Fq ? {
```

#### 1315. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14190` → after: `L14219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14219) · [Before (L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14190)

```diff
-               yT = null !== dT && dT.UA === cT;
+               xq = null !== Jq && Jq.SB === gq;
```

#### 1316. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14198` → after: `L14227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14227) · [Before (L14198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14198)

```diff
-                 left: `${lT}%`
+                 left: `${Yq}%`
```

#### 1317. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14204-L14205` → after: `L14233-L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14233-L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14233-L14234) · [Before (L14204-L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14204-L14205)

```diff
-               "aria-label": `Camera keyframe at tick ${cT}`
-             }, `cam-${kT}-${cT}`)
+               "aria-label": `Camera keyframe at tick ${gq}`
+             }, `cam-${Eq}-${gq}`)
```

#### 1318. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14254` → after: `L14283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14283) · [Before (L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14254)

```diff
-                     left: `${kT}%`
+                     left: `${Eq}%`
```

#### 1319. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14261-L14262` → after: `L14290-L14291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14290-L14291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14290-L14291) · [Before (L14261-L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14261-L14262)

```diff
-                     left: `${Gk}%`,
-                     width: `${Vk}%`
+                     left: `${ME}%`,
+                     width: `${TE}%`
```

#### 1320. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14267` → after: `L14296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14296) · [Before (L14267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14267)

```diff
-                     left: `${Uk}%`
+                     left: `${UE}%`
```

#### 1321. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14273` → after: `L14302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14302) · [Before (L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14273)

```diff
-                     left: `${Yk}%`
+                     left: `${FE}%`
```

#### 1322. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14280-L14281` → after: `L14309-L14310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14309-L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14309-L14310) · [Before (L14280-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14280-L14281)

```diff
-                   left: `${bk}%`,
-                   width: `${Math.max(zk-bk,.5)}%`
+                   left: `${nE}%`,
+                   width: `${Math.max(bE-nE,.5)}%`
```

#### 1323. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14289` → after: `L14318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14318) · [Before (L14289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14289)

```diff
-                   left: `${mk}%`
+                   left: `${hE}%`
```

#### 1324. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14330` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14359) · [Before (L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14330)

```diff
-                     left: `${kT}%`
+                     left: `${Eq}%`
```

#### 1325. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14336-L14337` → after: `L14365-L14366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14365-L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14365-L14366) · [Before (L14336-L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14336-L14337)

```diff
-                   left: `${Ek}%`,
-                   width: `${uk}%`
+                   left: `${zE}%`,
+                   width: `${pE}%`
```

#### 1326. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14342` → after: `L14371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14371) · [Before (L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14342)

```diff
-                   left: `${dk}%`
+                   left: `${LE}%`
```

#### 1327. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14344` → after: `L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14373) · [Before (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14344)

```diff
-                 "aria-label": `Play range start at tick ${Hk}`
+                 "aria-label": `Play range start at tick ${ZE}`
```

#### 1328. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14348` → after: `L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14377) · [Before (L14348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14348)

```diff
-                   left: `${Lk}%`
+                   left: `${JE}%`
```

#### 1329. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14350` → after: `L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14379) · [Before (L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14350)

```diff
-                 "aria-label": `Play range end at tick ${ek}`
+                 "aria-label": `Play range end at tick ${fE}`
```

#### 1330. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14354-L14355` → after: `L14383-L14384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14383-L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14383-L14384) · [Before (L14354-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14354-L14355)

```diff
-                   left: `${Wk}%`,
-                   width: `${pk}%`
+                   left: `${XE}%`,
+                   width: `${KE}%`
```

#### 1331. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14363` → after: `L14392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14392) · [Before (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14363)

```diff
-                   left: `${wk}%`
+                   left: `${vE}%`
```

#### 1332. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14420-L14421` → after: `L14449-L14450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14449-L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14449-L14450) · [Before (L14420-L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14420-L14421)

```diff
-     var GK = cT(36814),
-       VK = cT(36818);
+     var MO = gq(37050),
+       TO = gq(37054);
```

#### 1333. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14431` → after: `L14460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14460) · [Before (L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14431)

```diff
-           [jT, vT] = (0, lT.useState)(VK.b),
+           [Nq, aq] = (0, Yq.useState)(TO.c),
```

#### 1334. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14433-L14434` → after: `L14462-L14463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14462-L14463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14462-L14463) · [Before (L14433-L14434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14433-L14434)

```diff
-         (0, yT.g)("replayViewer|uiVisibilityChanged", (() => {
-           vT((0, VK.b)())
+         (0, xq.f)("replayViewer|uiVisibilityChanged", (() => {
+           aq((0, TO.c)())
```

#### 1335. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14437` → after: `L14466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14466) · [Before (L14437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14437)

```diff
-             (0, VK.h)(TT, kT), vT((0, VK.b)())
+             (0, TO.i)(qq, Eq), aq((0, TO.c)())
```

#### 1336. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14443-L14444` → after: `L14472-L14473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14472-L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14472-L14473) · [Before (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14443-L14444)

```diff
-               of GK.g)(0, VK.h)(kT, TT);
-             vT((0, VK.b)())
+               of MO.e)(0, TO.i)(Eq, qq);
+             aq((0, TO.c)())
```

#### 1337. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14454-L14455` → after: `L14483-L14484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14483-L14484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14483-L14484) · [Before (L14454-L14455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14454-L14455)

```diff
-             left: `${null!==(cT=null===CT||void 0===CT?void 0:CT.left)&&void 0!==cT?cT:QT.left}px`,
-             top: `${null!==(MT=null===CT||void 0===CT?void 0:CT.top)&&void 0!==MT?MT:QT.top}px`
+             left: `${null!==(gq=null===Wq||void 0===Wq?void 0:Wq.left)&&void 0!==gq?gq:Hq.left}px`,
+             top: `${null!==(lq=null===Wq||void 0===Wq?void 0:Wq.top)&&void 0!==lq?lq:Hq.top}px`
```

#### 1338. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14479` → after: `L14508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14508) · [Before (L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14479)

```diff
-             }), GK.g.map((TT => {
+             }), MO.e.map((qq => {
```

#### 1339. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14516` → after: `L14545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14545) · [Before (L14516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14516)

```diff
-             children: (0, xT.jsx)(bc.e, {
+             children: (0, cq.jsx)(hg.g, {
```

#### 1340. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14536` → after: `L14565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14565) · [Before (L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14536)

```diff
-         ty: kT
+         Fc: Eq
```

#### 1341. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14575` → after: `L14604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14604) · [Before (L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14575)

```diff
-               children: (0, xT.jsx)(ZT.e, {
+               children: (0, cq.jsx)(pq.d, {
```

#### 1342. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14584` → after: `L14613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14613) · [Before (L14584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14584)

```diff
-               children: (0, xT.jsx)(ZT.e, {
+               children: (0, cq.jsx)(pq.d, {
```

#### 1343. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14594-L14596` → after: `L14623-L14625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14623-L14625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14623-L14625) · [Before (L14594-L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14594-L14596)

```diff
-         const TT = (0, WT.m)();
-         return (0, rT.b)("replayViewerRequested", (TT => {
-           (0, WT.i)("toggle" === TT ? !(0, WT.g)() : "open" === TT)
+         const qq = (0, wq.o)();
+         return (0, tq.d)("replayViewerRequested", (qq => {
+           (0, wq.l)("toggle" === qq ? !(0, wq.i)() : "open" === qq)
```

#### 1344. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14608-L14610` → after: `L14637-L14639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14637-L14639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14637-L14639) · [Before (L14608-L14610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14608-L14610)

```diff
-           } = (0, PT.n)(["isTouchScreen"]),
-           JT = (0, rT.h)("replay"),
-           oT = (0, rT.h)("replayEdits"),
+           } = (0, rq.j)(["isTouchScreen"]),
+           iq = (0, tq.g)("replay"),
+           Zq = (0, tq.g)("replayEdits"),
```

#### 1345. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14612-L14613` → after: `L14641-L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14641-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14641-L14642) · [Before (L14612-L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14612-L14613)

```diff
-           eT = null !== (TT = null === JT || void 0 === JT ? void 0 : JT.UA) && void 0 !== TT ? TT : 0,
-           GT = null !== (kT = null === JT || void 0 === JT ? void 0 : JT.totalTicks) && void 0 !== kT ? kT : 0,
+           Mq = null !== (qq = null === iq || void 0 === iq ? void 0 : iq.SB) && void 0 !== qq ? qq : 0,
+           Tq = null !== (Eq = null === iq || void 0 === iq ? void 0 : iq.totalTicks) && void 0 !== Eq ? Eq : 0,
```

#### 1346. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14616-L14618` → after: `L14645-L14647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14645-L14647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14645-L14647) · [Before (L14616-L14618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14616-L14618)

```diff
-           XT = null !== (MT = null === JT || void 0 === JT ? void 0 : JT.speed) && void 0 !== MT ? MT : 1,
-           dT = null !== (OT = null === JT || void 0 === JT ? void 0 : JT.xJ) && void 0 !== OT ? OT : 20,
-           LT = null !== aT && void 0 !== aT ? aT : eT,
+           Lq = null !== (lq = null === iq || void 0 === iq ? void 0 : iq.speed) && void 0 !== lq ? lq : 1,
+           Jq = null !== (mq = null === iq || void 0 === iq ? void 0 : iq.bJ) && void 0 !== mq ? mq : 20,
+           kq = null !== Qq && void 0 !== Qq ? Qq : Mq,
```

#### 1347. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14620-L14623` → after: `L14649-L14652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14649-L14652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14649-L14652) · [Before (L14620-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14620-L14623)

```diff
-           gT = null !== (fT = null === JT || void 0 === JT ? void 0 : JT.cameraMode) && void 0 !== fT ? fT : "recording",
-           UT = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.cameraKeyframes) && void 0 !== IT ? IT : LK,
-           YT = null !== (AT = null === oT || void 0 === oT ? void 0 : oT.playbackMark) && void 0 !== AT ? AT : null,
-           BT = null !== (jT = null === oT || void 0 === oT ? void 0 : oT.fileName) && void 0 !== jT ? jT : null,
+           Uq = null !== (Aq = null === iq || void 0 === iq ? void 0 : iq.cameraMode) && void 0 !== Aq ? Aq : "recording",
+           Fq = null !== (uq = null === Zq || void 0 === Zq ? void 0 : Zq.cameraKeyframes) && void 0 !== uq ? uq : JO,
+           sq = null !== (Bq = null === Zq || void 0 === Zq ? void 0 : Zq.playbackMark) && void 0 !== Bq ? Bq : null,
+           Xq = null !== (Nq = null === Zq || void 0 === Zq ? void 0 : Zq.fileName) && void 0 !== Nq ? Nq : null,
```

#### 1348. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14626` → after: `L14655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14655) · [Before (L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14626)

```diff
-           iT = (0, rT.h)("replayVideoExporting"),
+           Iq = (0, tq.g)("replayVideoExporting"),
```

#### 1349. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14629` → after: `L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14658) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14629)

```diff
-         (0, kK.c)(!0, !0, "ReplayViewerOverlay"), (0, lT.useEffect)((() => {
+         (0, qO.e)(!0, !0, "ReplayViewerOverlay"), (0, Yq.useEffect)((() => {
```

#### 1350. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14634` → after: `L14663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14663) · [Before (L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14634)

```diff
-               UA: TT,
+               SB: qq,
```

#### 1351. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14696` → after: `L14725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14725) · [Before (L14696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14696)

```diff
-             QT(null), DT(1), FT(null), (0, YM.d)().open(TT, kT).catch((TT => {
+             Hq(null), Pq(1), yq(null), (0, Fl.c)().open(qq, Eq).catch((qq => {
```

#### 1352. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14727` → after: `L14756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14756) · [Before (L14727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14727)

```diff
-             (0, nM.g)() ? (0, nM.c)().then((TT => {
+             (0, wl.j)() ? (0, wl.d)().then((qq => {
```

#### 1353. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14740-L14744` → after: `L14769-L14773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14769-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14769-L14773) · [Before (L14740-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14740-L14744)

```diff
-                 files: (0, YM.d)(),
-                 pickerSupported: nM.g,
-                 chooseFile: nM.b,
-                 write: nM.j,
-                 download: WM.j,
+                 files: (0, Fl.c)(),
+                 pickerSupported: wl.j,
+                 chooseFile: wl.c,
+                 write: wl.k,
+                 download: Xl.h,
```

#### 1354. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14790` → after: `L14819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14819) · [Before (L14790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14790)

```diff
-         (0, rT.b)("replayUiActionRequested", Qk);
+         (0, tq.d)("replayUiActionRequested", HE);
```

#### 1355. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14794-L14796` → after: `L14823-L14825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14823-L14825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14823-L14825) · [Before (L14794-L14796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14794-L14796)

```diff
-           Dk = HT ? bc.e : bc.m,
-           ak = nT && !pT ? bc.m : bc.e,
-           Fk = nT && pT ? bc.m : bc.e;
+           PE = fq ? hg.g : hg.p,
+           QE = Kq && !Cq ? hg.p : hg.g,
+           yE = Kq && Cq ? hg.p : hg.g;
```

#### 1356. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14815` → after: `L14844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14844) · [Before (L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14815)

```diff
-                 mT ? bT(!1) : HT ? bT(!0) : (0, WT.c)()
+                 hq ? nq(!1) : fq ? nq(!0) : (0, wq.e)()
```

#### 1357. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14819` → after: `L14848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14848) · [Before (L14819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14819)

```diff
-               children: (0, xT.jsx)(ZT.e, {
+               children: (0, cq.jsx)(pq.d, {
```

#### 1358. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14827` → after: `L14856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14856) · [Before (L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14827)

```diff
-                 xJ: dT,
+                 bJ: Jq,
```

#### 1359. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14851` → after: `L14880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14880) · [Before (L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14851)

```diff
-                       children: [null !== BT && void 0 !== BT ? BT : "Unsaved recording", nT ? " *" : ""]
+                       children: [null !== Xq && void 0 !== Xq ? Xq : "Unsaved recording", Kq ? " *" : ""]
```

#### 1360. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14857` → after: `L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14886) · [Before (L14857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14857)

```diff
-                       children: [(0, xT.jsx)(wT.b, {
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1361. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14863` → after: `L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14892) · [Before (L14863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14863)

```diff
-                     }), (0, xT.jsxs)(bc.e, {
+                     }), (0, cq.jsxs)(hg.g, {
```

#### 1362. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14865-L14866` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14894-L14895) · [Before (L14865-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14865-L14866)

```diff
-                       onClick: WT.c,
-                       children: [(0, xT.jsx)(wT.b, {
+                       onClick: wq.e,
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1363. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14878` → after: `L14907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14907) · [Before (L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14878)

```diff
-                       children: [(0, xT.jsx)(wT.b, {
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1364. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14884` → after: `L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14913) · [Before (L14884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14884)

```diff
-                     }), (0, xT.jsxs)(bc.e, {
+                     }), (0, cq.jsxs)(hg.g, {
```

#### 1365. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14892` → after: `L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14921) · [Before (L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14892)

```diff
-                       children: [(0, xT.jsx)(wT.b, {
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1366. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14904` → after: `L14933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14933) · [Before (L14904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14904)

```diff
-                       children: [(0, xT.jsx)(wT.b, {
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1367. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14910` → after: `L14939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14939) · [Before (L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14910)

```diff
-                     }), (0, xT.jsxs)(bc.e, {
+                     }), (0, cq.jsxs)(hg.g, {
```

#### 1368. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14916` → after: `L14945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14945) · [Before (L14916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14916)

```diff
-                       children: [(0, xT.jsx)(wT.b, {
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1369. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14929` → after: `L14958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14958) · [Before (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14929)

```diff
-                       }), (0, xT.jsx)(wT.b, {
+                       }), (0, cq.jsx)(vq.c, {
```

#### 1370. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14935` → after: `L14964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14964) · [Before (L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14935)

```diff
-                       children: [(0, xT.jsx)(ET.c, {
+                       children: [(0, cq.jsx)(Sq.e, {
```

#### 1371. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14940` → after: `L14969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14969) · [Before (L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14940)

```diff
-                         children: (0, xT.jsxs)(bc.P, {
+                         children: (0, cq.jsxs)(hg.Q, {
```

#### 1372. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14947` → after: `L14976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14976) · [Before (L14947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14947)

```diff
-                           children: ["Recorded ", (0, xT.jsx)(ZT.e, {
+                           children: ["Recorded ", (0, cq.jsx)(pq.d, {
```

#### 1373. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14951` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14980) · [Before (L14951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14951)

```diff
-                       }), (0, xT.jsx)(ET.c, {
+                       }), (0, cq.jsx)(Sq.e, {
```

#### 1374. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14956` → after: `L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14985) · [Before (L14956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14956)

```diff
-                         children: (0, xT.jsxs)(bc.P, {
+                         children: (0, cq.jsxs)(hg.Q, {
```

#### 1375. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14963` → after: `L14992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14992) · [Before (L14963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14963)

```diff
-                           children: ["Free ", (0, xT.jsx)(ZT.e, {
+                           children: ["Free ", (0, cq.jsx)(pq.d, {
```

#### 1376. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14967` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L14996) · [Before (L14967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14967)

```diff
-                       }), (0, xT.jsx)(ET.c, {
+                       }), (0, cq.jsx)(Sq.e, {
```

#### 1377. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14972` → after: `L15001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15001) · [Before (L14972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14972)

```diff
-                         children: (0, xT.jsxs)(bc.P, {
+                         children: (0, cq.jsxs)(hg.Q, {
```

#### 1378. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L14979` → after: `L15008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15008) · [Before (L14979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L14979)

```diff
-                           children: ["Preview ", (0, xT.jsx)(ZT.e, {
+                           children: ["Preview ", (0, cq.jsx)(pq.d, {
```

#### 1379. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15008` → after: `L15037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15037) · [Before (L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15008)

```diff
-                     children: [(0, xT.jsxs)(bc.e, {
+                     children: [(0, cq.jsxs)(hg.g, {
```

#### 1380. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15015` → after: `L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15044) · [Before (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15015)

```diff
-                         children: [" ", (0, xT.jsx)(ZT.e, {
+                         children: [" ", (0, cq.jsx)(pq.d, {
```

#### 1381. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15018` → after: `L15047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15047) · [Before (L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15018)

```diff
-                       }), (0, xT.jsx)(wT.b, {
+                       }), (0, cq.jsx)(vq.c, {
```

#### 1382. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15022` → after: `L15051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15051) · [Before (L15022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15022)

```diff
-                     }), (0, xT.jsxs)(bc.m, {
+                     }), (0, cq.jsxs)(hg.p, {
```

#### 1383. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15029` → after: `L15058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15058) · [Before (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15029)

```diff
-                         children: [" ", uT ? (0, xT.jsx)(ZT.e, {
+                         children: [" ", Gq ? (0, cq.jsx)(pq.d, {
```

#### 1384. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15031` → after: `L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15060) · [Before (L15031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15031)

```diff
-                         }) : (0, xT.jsx)(ZT.e, {
+                         }) : (0, cq.jsx)(pq.d, {
```

#### 1385. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15034` → after: `L15063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15063) · [Before (L15034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15034)

```diff
-                       }), (0, xT.jsx)(wT.b, {
+                       }), (0, cq.jsx)(vq.c, {
```

#### 1386. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15038` → after: `L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15067) · [Before (L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15038)

```diff
-                     }), (0, xT.jsxs)(bc.e, {
+                     }), (0, cq.jsxs)(hg.g, {
```

#### 1387. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15045` → after: `L15074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15074) · [Before (L15045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15045)

```diff
-                         children: [" ", (0, xT.jsx)(ZT.e, {
+                         children: [" ", (0, cq.jsx)(pq.d, {
```

#### 1388. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15048` → after: `L15077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15077) · [Before (L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15048)

```diff
-                       }), (0, xT.jsx)(wT.b, {
+                       }), (0, cq.jsx)(vq.c, {
```

#### 1389. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15058` → after: `L15087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15087) · [Before (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15058)

```diff
-                     children: [(0, xT.jsxs)(bc.m, {
+                     children: [(0, cq.jsxs)(hg.p, {
```

#### 1390. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15064` → after: `L15093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15093) · [Before (L15064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15064)

```diff
-                       children: [(0, xT.jsx)(wT.b, {
+                       children: [(0, cq.jsx)(vq.c, {
```

#### 1391. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15072` → after: `L15101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15101) · [Before (L15072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15072)

```diff
-                     }), YT && (0, xT.jsx)(bc.P, {
+                     }), sq && (0, cq.jsx)(hg.Q, {
```

#### 1392. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15087` → after: `L15116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15116) · [Before (L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15087)

```diff
-                       children: [(0, xT.jsx)(bc.e, {
+                       children: [(0, cq.jsx)(hg.g, {
```

#### 1393. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15092` → after: `L15121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15121) · [Before (L15092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15092)

```diff
-                         disabled: !HT || (0, BM.g)(XT),
+                         disabled: !fq || (0, sl.h)(Lq),
```

#### 1394. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15099` → after: `L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15128) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15099)

```diff
-                       }), (0, xT.jsx)(bc.e, {
+                       }), (0, cq.jsx)(hg.g, {
```

#### 1395. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15104` → after: `L15133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15133) · [Before (L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15104)

```diff
-                         disabled: !HT || (0, BM.c)(XT),
+                         disabled: !fq || (0, sl.d)(Lq),
```

#### 1396. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15117` → after: `L15146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15146) · [Before (L15117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15117)

```diff
-                       children: [(0, xT.jsxs)(bc.e, {
+                       children: [(0, cq.jsxs)(hg.g, {
```

#### 1397. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15125` → after: `L15154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15154) · [Before (L15125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15125)

```diff
-                         }), (0, xT.jsx)(wT.b, {
+                         }), (0, cq.jsx)(vq.c, {
```

#### 1398. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15132` → after: `L15161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15161) · [Before (L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15132)

```diff
-                       }), (0, xT.jsxs)(bc.e, {
+                       }), (0, cq.jsxs)(hg.g, {
```

#### 1399. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15140` → after: `L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15169) · [Before (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15140)

```diff
-                         }), (0, xT.jsx)(wT.b, {
+                         }), (0, cq.jsx)(vq.c, {
```

#### 1400. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15159` → after: `L15188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15188) · [Before (L15159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15159)

```diff
-     var UK = cT(1327);
+     var UO = gq(1308);
```

#### 1401. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15163` → after: `L15192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15192) · [Before (L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15163)

```diff
-       return (0, yT.g)("replayViewer|uiVisibilityChanged", (() => {
+       return (0, xq.f)("replayViewer|uiVisibilityChanged", (() => {
```

#### 1402. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15165` → after: `L15194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15194) · [Before (L15165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15165)

```diff
-         })), (0, yT.g)("replayViewer|replayLoaded", (() => {
+         })), (0, xq.f)("replayViewer|replayLoaded", (() => {
```

#### 1403. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15169` → after: `L15198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15198) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15169)

```diff
-           if (!(0, UK.e)()) return {};
+           if (!(0, UO.i)()) return {};
```

#### 1404. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15171` → after: `L15200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15200) · [Before (L15171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15171)

```diff
-               [GK.e]: "true"
+               [MO.c]: "true"
```

#### 1405. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15173` → after: `L15202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15202) · [Before (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15173)

```diff
-             kT = (0, VK.b)();
+             Eq = (0, TO.c)();
```

#### 1406. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15178` → after: `L15207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15207) · [Before (L15178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15178)

```diff
-             of GK.g) lT && !kT[cT] && (TT[lT] = "true");
+             of MO.e) Yq && !Eq[gq] && (qq[Yq] = "true");
```

#### 1407. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15182-L15186` → after: `L15211-L15215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15211-L15215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15211-L15215) · [Before (L15182-L15186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15182-L15186)

```diff
-     var BK = cT(9354),
-       WK = cT(2101),
-       nK = cT(8771),
-       pK = cT(8762),
-       iK = cT(2114);
+     var sO = gq(9270),
+       XO = gq(2052),
+       wO = gq(8699),
+       KO = gq(8686),
+       CO = gq(2059);
```

#### 1408. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15189-L15190` → after: `L15218-L15219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15218-L15219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15218-L15219) · [Before (L15189-L15190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15189-L15190)

```diff
-       const MT = (0, ST.f)("customButtons");
-       (0, lT.useEffect)((() => MT ? (CT.gameBridge.send("bindCustomButtonKeys", MT.filter(nK.d).map((TT => {
+       const lq = (0, oq.h)("customButtons");
+       (0, Yq.useEffect)((() => lq ? (Wq.gameBridge.send("bindCustomButtonKeys", lq.filter(wO.f).map((qq => {
```

#### 1409. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15202-L15204` → after: `L15231-L15233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15231-L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15231-L15233) · [Before (L15202-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15202-L15204)

```diff
-       const KT = null !== (TT = null === MT || void 0 === MT ? void 0 : MT.filter(nK.d)) && void 0 !== TT ? TT : [],
-         OT = (0, pK.f)(),
-         yT = null !== (kT = null === (cT = (0, iK.e)()) || void 0 === cT ? void 0 : cT.hideButtonHints) && void 0 !== kT && kT,
+       const Oq = null !== (qq = null === lq || void 0 === lq ? void 0 : lq.filter(wO.f)) && void 0 !== qq ? qq : [],
+         mq = (0, KO.h)(),
+         xq = null !== (Eq = null === (gq = (0, CO.d)()) || void 0 === gq ? void 0 : gq.hideButtonHints) && void 0 !== Eq && Eq,
```

#### 1410. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15213` → after: `L15242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15242) · [Before (L15213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15213)

```diff
-             kT.style.setProperty("--custom-buttons-top", `${TT.offsetTop}px`)
+             Eq.style.setProperty("--custom-buttons-top", `${qq.offsetTop}px`)
```

#### 1411. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15227` → after: `L15256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15256) · [Before (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15227)

```diff
-             padGlyph: TT.id === fT && null !== (kT = null === (cT = (0, LT.g)()) || void 0 === cT ? void 0 : cT.getBoundButton("actionButton")) && void 0 !== kT ? kT : null
+             padGlyph: qq.id === Aq && null !== (Eq = null === (gq = (0, kq.g)()) || void 0 === gq ? void 0 : gq.getBoundButton("actionButton")) && void 0 !== Eq ? Eq : null
```

#### 1412. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15281-L15282` → after: `L15310-L15311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15310-L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15310-L15311) · [Before (L15281-L15282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15281-L15282)

```diff
-     var TO = cT(2454),
-       kO = cT(275);
+     var DO = gq(2377),
+       qm = gq(248);
```

#### 1413. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15361` → after: `L15390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15390) · [Before (L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15361)

```diff
-         const [cT] = (0, lT.useState)((() => new vT.i(kT))), [MT] = (0, lT.useState)((() => kT ? null : new lO));
+         const [gq] = (0, Yq.useState)((() => new aq.e(Eq))), [lq] = (0, Yq.useState)((() => Eq ? null : new gm));
```

#### 1414. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15364` → after: `L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15393) · [Before (L15364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15364)

```diff
-         }), [kT, cT, MT]), (0, xT.jsx)(vT.e.Provider, {
+         }), [Eq, gq, lq]), (0, cq.jsx)(aq.b.Provider, {
```

#### 1415. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15378` → after: `L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15407) · [Before (L15378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15378)

```diff
-         } = (0, PT.n)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), OT = (0, nl.d)(), yT = YK(), fT = (0, vT.m)(), IT = (0, lT.useRef)(null), AT = (0, ST.f)("showKillfeed");
+         } = (0, rq.j)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), mq = (0, wY.c)(), xq = FO(), Aq = (0, aq.j)(), uq = (0, Yq.useRef)(null), Bq = (0, oq.h)("showKillfeed");
```

#### 1416. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15380` → after: `L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15409) · [Before (L15380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15380)

```diff
-             const TT = (0, vT.m)();
+             const qq = (0, aq.j)();
```

#### 1417. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15384` → after: `L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15413) · [Before (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15384)

```diff
-             const TT = (0, ST.f)("inventoryColourOverride");
+             const qq = (0, oq.h)("inventoryColourOverride");
```

#### 1418. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15412-L15413` → after: `L15441-L15442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15441-L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15441-L15442) · [Before (L15412-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15412-L15413)

```diff
-                 children: [(0, xT.jsx)(gc.d, {}), (0, xT.jsx)(nc, {})]
-               }), (0, xT.jsx)(vT.j, {
+                 children: [(0, cq.jsx)(Rg.b, {}), (0, cq.jsx)(wg, {})]
+               }), (0, cq.jsx)(aq.g, {
```

#### 1419. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15418-L15419` → after: `L15447-L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15447-L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15447-L15448) · [Before (L15418-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15418-L15419)

```diff
-                 children: [(0, xT.jsx)(Qc, {}), (0, xT.jsx)(xl.b, {}), (0, xT.jsx)(hl, {})]
-               }), (0, xT.jsx)(vT.j, {
+                 children: [(0, cq.jsx)(jg, {}), (0, cq.jsx)(AY.d, {}), (0, cq.jsx)(VY, {})]
+               }), (0, cq.jsx)(aq.g, {
```

#### 1420. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15424` → after: `L15453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15453) · [Before (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15424)

```diff
-                 children: [(0, xT.jsx)(GM.g, {}), (0, xT.jsx)(VM.i, {})]
+                 children: [(0, cq.jsx)(Ml.f, {}), (0, cq.jsx)(Tl.g, {})]
```

#### 1421. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15426` → after: `L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15455) · [Before (L15426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15426)

```diff
-                 children: (0, xT.jsx)(Dc.k, {})
+                 children: (0, cq.jsx)(og.j, {})
```

#### 1422. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15439` → after: `L15468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15468) · [Before (L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15439)

```diff
-                   className: rl.j,
+                   className: yY.i,
```

#### 1423. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15445` → after: `L15474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15474) · [Before (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15445)

```diff
-                       children: (0, xT.jsx)(IM.b, {})
+                       children: (0, cq.jsx)(cl.d, {})
```

#### 1424. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15447-L15449` → after: `L15476-L15478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15476-L15478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15476-L15478) · [Before (L15447-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15447-L15449)

```diff
-                       children: [(0, xT.jsx)(uT, {}), (0, xT.jsx)(zl.d, {})]
-                     }), vM.featureFlags.useSocialFeatures && (0, xT.jsx)(vT.j, {
-                       children: (0, xT.jsx)(Jl.e, {
+                       children: [(0, cq.jsx)(Gq, {}), (0, cq.jsx)(nY.b, {})]
+                     }), Nl.featureFlags.useSocialFeatures && (0, cq.jsx)(aq.g, {
+                       children: (0, cq.jsx)(bY.c, {
```

#### 1425. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15452` → after: `L15481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15481) · [Before (L15452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15452)

```diff
-                     }), vM.featureFlags.useSocialFeatures && (0, xT.jsx)(vT.j, {
+                     }), Nl.featureFlags.useSocialFeatures && (0, cq.jsx)(aq.g, {
```

#### 1426. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15454` → after: `L15483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15483) · [Before (L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15454)

```diff
-                     }), AT && (0, xT.jsx)(vT.j, {
+                     }), Bq && (0, cq.jsx)(aq.g, {
```

#### 1427. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15457` → after: `L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15486) · [Before (L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15457)

```diff
-                       children: (0, xT.jsx)(BK.d, {})
+                       children: (0, cq.jsx)(sO.b, {})
```

#### 1428. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15462` → after: `L15491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15491) · [Before (L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15462)

```diff
-                       children: (0, xT.jsx)(DM.b, {})
+                       children: (0, cq.jsx)(ol.d, {})
```

#### 1429. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15478` → after: `L15507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15507) · [Before (L15478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15478)

```diff
-                 children: [(0, xT.jsx)(vT.j, {
+                 children: [(0, cq.jsx)(aq.g, {
```

#### 1430. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15506` → after: `L15535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15535) · [Before (L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15506)

```diff
-                 ref: Sk.n
+                 ref: oE.m
```

#### 1431. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15508-L15509` → after: `L15537-L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15537-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15537-L15538) · [Before (L15508-L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15508-L15509)

```diff
-             }), (0, xT.jsx)(vT.j, {
-               children: (0, xT.jsx)(UM.d, {})
+             }), (0, cq.jsx)(aq.g, {
+               children: (0, cq.jsx)(Ul.c, {})
```

#### 1432. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15513` → after: `L15542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15542) · [Before (L15513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15513)

```diff
-             }), (0, xT.jsx)(vT.j, {
+             }), (0, cq.jsx)(aq.g, {
```

#### 1433. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15522` → after: `L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15551) · [Before (L15522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15522)

```diff
-           (0, DT.j)()
+           (0, Pq.g)()
```

#### 1434. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15525` → after: `L15554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15554) · [Before (L15525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15525)

```diff
-           clearTimeout(TT), DT.k.zD(!1)
+           clearTimeout(qq), Pq.i.uH(!1)
```

#### 1435. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15530-L15533` → after: `L15559-L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15559-L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15559-L15562) · [Before (L15530-L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15530-L15533)

```diff
-         const TT = (0, yT.i)("aimingOverlay", "none");
-         (0, NT.d)();
-         const kT = (0, ST.g)("middleTextUpper"),
-           cT = (0, ST.g)("middleTextLower");
+         const qq = (0, xq.h)("aimingOverlay", "none");
+         (0, jq.b)();
+         const Eq = (0, oq.k)("middleTextUpper"),
+           gq = (0, oq.k)("middleTextLower");
```

#### 1436. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15577` → after: `L15606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15606) · [Before (L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15577)

```diff
-                   yT(kT) <= TT ? cT = kT : lT = kT
+                   xq(Eq) <= qq ? gq = Eq : Yq = Eq
```

#### 1437. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15610-L15612` → after: `L15639-L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15639-L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15639-L15641) · [Before (L15610-L15612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15610-L15612)

```diff
-         const TT = (0, yT.i)("aimingOverlay", "none");
-         (0, NT.d)();
-         const kT = (0, ST.f)("useInventory");
+         const qq = (0, xq.h)("aimingOverlay", "none");
+         (0, jq.b)();
+         const Eq = (0, oq.h)("useInventory");
```

#### 1438. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15618` → after: `L15647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15647) · [Before (L15618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15618)

```diff
-           children: [(0, xT.jsx)(IT, {}), (0, xT.jsx)(Dc.c, {}), (0, xT.jsx)(ac, {}), (0, xT.jsx)(vT.j, {
+           children: [(0, cq.jsx)(uq, {}), (0, cq.jsx)(og.c, {}), (0, cq.jsx)(Pg, {}), (0, cq.jsx)(aq.g, {
```

#### 1439. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15622` → after: `L15651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15651) · [Before (L15622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15622)

```diff
-             children: [kT ? (0, xT.jsx)(dT.c, {}) : (0, xT.jsx)(dT.g, {}), (0, xT.jsx)(RT, {})]
+             children: [Eq ? (0, cq.jsx)(Jq.c, {}) : (0, cq.jsx)(Jq.e, {}), (0, cq.jsx)(Rq, {})]
```

#### 1440. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15632` → after: `L15661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15661) · [Before (L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15632)

```diff
-         } = (0, JT.B)(), {
+         } = (0, iq.v)(), {
```

#### 1441. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15635-L15636` → after: `L15664-L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15664-L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15664-L15665) · [Before (L15635-L15636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15635-L15636)

```diff
-         } = (0, PT.n)(["clientEscMenuOptions", "isTouchScreen"]);
-         (0, NT.d)();
+         } = (0, rq.j)(["clientEscMenuOptions", "isTouchScreen"]);
+         (0, jq.b)();
```

#### 1442. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15640` → after: `L15669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15669) · [Before (L15640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15640)

```diff
-         } = (0, hT.b)(), IT = (0, ST.f)("hideCoordinates"), CT = (0, ST.f)("customVariationTitle"), {
+         } = (0, dq.c)(), uq = (0, oq.h)("hideCoordinates"), Wq = (0, oq.h)("customVariationTitle"), {
```

#### 1443. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15645` → after: `L15674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15674) · [Before (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15645)

```diff
-         } = (0, rT.h)("connectedGame"), aT = (0, AT.b)(jT, tT, !1), [FT, wT] = (0, lT.useState)(null), mT = (0, CM.k)(vT || jT || ""), bT = CT || mT || "";
+         } = (0, tq.g)("connectedGame"), Qq = (0, Bq.c)(Nq, Vq, !1), [yq, vq] = (0, Yq.useState)(null), hq = (0, Bl.k)(aq || Nq || ""), nq = Wq || hq || "";
```

#### 1444. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15647` → after: `L15676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15676) · [Before (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15647)

```diff
-           fT || Hl.d.getFavouriteLobbies(yT).then((TT => {
+           Aq || ZY.e.getFavouriteLobbies(xq).then((qq => {
```

#### 1445. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15656` → after: `L15685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15685) · [Before (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15656)

```diff
-               kT.style.setProperty("--InGameHeaderRowsHeight", `${TT.offsetHeight}px`)
+               Eq.style.setProperty("--InGameHeaderRowsHeight", `${qq.offsetHeight}px`)
```

#### 1446. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15663` → after: `L15692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15692) · [Before (L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15663)

```diff
-             className: KT()(rl.g, {
+             className: Oq()(yY.e, {
```

#### 1447. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15675-L15676` → after: `L15704-L15705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15704-L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15704-L15705) · [Before (L15675-L15676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15675-L15676)

```diff
-                   PT.e.set({
-                     openEverythingMenuName: QT.o.SETTINGS
+                   rq.b.set({
+                     openEverythingMenuName: Hq.p.SETTINGS
```

#### 1448. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15679` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15708) · [Before (L15679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15679)

```diff
-                 children: [(0, xT.jsx)(AM.d, {
+                 children: [(0, cq.jsx)(ul.e, {
```

#### 1449. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15687-L15688` → after: `L15716-L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15716-L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15716-L15717) · [Before (L15687-L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15687-L15688)

```diff
-                 children: [null === aT && (0, xT.jsx)(AM.d, {}), null !== aT && (0, xT.jsxs)(xT.Fragment, {
-                   children: [aT, bT && ` ${bT}`]
+                 children: [null === Qq && (0, cq.jsx)(ul.e, {}), null !== Qq && (0, cq.jsxs)(cq.Fragment, {
+                   children: [Qq, nq && ` ${nq}`]
```

#### 1450. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15695` → after: `L15724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15724) · [Before (L15695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15695)

```diff
-               }), (0, jM.D)(tT) && (0, xT.jsx)(ET.c, {
+               }), (0, Wl.I)(Vq) && (0, cq.jsx)(Sq.e, {
```

#### 1451. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15700` → after: `L15729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15729) · [Before (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15700)

```diff
-                   children: (0, xT.jsx)(bc.s, {
+                   children: (0, cq.jsx)(hg.x, {
```

#### 1452. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15705` → after: `L15734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15734) · [Before (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15705)

```diff
-                         FT.includes(tT) ? (Hl.d.unfavouriteLobby(yT, tT).catch((TT => {
+                         yq.includes(Vq) ? (ZY.e.unfavouriteLobby(xq, Vq).catch((qq => {
```

#### 1453. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15707` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15736) · [Before (L15707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15707)

```diff
-                         })), wT(FT.filter((TT => TT !== tT)))) : (Hl.d.favouriteLobby(yT, tT).catch((TT => {
+                         })), vq(yq.filter((qq => qq !== Vq)))) : (ZY.e.favouriteLobby(xq, Vq).catch((qq => {
```

#### 1454. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15733-L15734` → after: `L15762-L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15762-L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15762-L15763) · [Before (L15733-L15734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15733-L15734)

```diff
-         (0, NT.d)();
-         const TT = (0, ST.g)("RightInfoText"),
+         (0, jq.b)();
+         const qq = (0, oq.k)("RightInfoText"),
```

#### 1455. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15736` → after: `L15765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15765) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15736)

```diff
-         return (0, vk.j)(kT, ".RightElements"), TT.hasText ? (0, xT.jsx)("div", {
+         return (0, aE.h)(Eq, ".RightElements"), qq.hasText ? (0, cq.jsx)("div", {
```

#### 1456. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15744` → after: `L15773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15773) · [Before (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15744)

```diff
-               children: (0, xT.jsx)(fT.b, {
+               children: (0, cq.jsx)(Aq.c, {
```

#### 1457. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15752` → after: `L15781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15781) · [Before (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15752)

```diff
-   4800: (TT, kT, cT) => {
+   4656: (qq, Eq, gq) => {
```

#### 1458. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15756-L15759` → after: `L15785-L15788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15785-L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15785-L15788) · [Before (L15756-L15759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15756-L15759)

```diff
-     var lT = cT(71),
-       MT = cT(328),
-       KT = cT(1943),
-       OT = cT(1099);
+     var Yq = gq(57),
+       lq = gq(296),
+       Oq = gq(1895),
+       mq = gq(1070);
```

#### 1459. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15767-L15768` → after: `L15796-L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15796-L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15796-L15797) · [Before (L15767-L15768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15767-L15768)

```diff
-       return (0, MT.Pb)(kT).forEach(((TT, kT) => {
-         if ("string" === typeof TT || !(0, KT.e)(TT.icon)) return void(yT += "string" === typeof TT ? TT : TT.icon);
+       return (0, lq.Zb)(Eq).forEach(((qq, Eq) => {
+         if ("string" === typeof qq || !(0, Oq.i)(qq.icon)) return void(xq += "string" === typeof qq ? qq : qq.icon);
```

#### 1460. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15777` → after: `L15806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15806) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15777)

```diff
-               children: (0, OT.jsx)(KT.d, {
+               children: (0, mq.jsx)(Oq.e, {
```

#### 1461. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15789` → after: `L15818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15818) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15789)

```diff
-   36346: (TT, kT, cT) => {
+   36575: (qq, Eq, gq) => {
```

#### 1462. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15791-L15793` → after: `L15820-L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15820-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15820-L15822) · [Before (L15791-L15793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15791-L15793)

```diff
-       b: () => CT,
-       c: () => IT,
-       f: () => AT
+       e: () => Wq,
+       h: () => uq,
+       l: () => Bq
```

#### 1463. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15795-L15796` → after: `L15824-L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15824-L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15824-L15825) · [Before (L15795-L15796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15795-L15796)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 1464. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15798-L15799` → after: `L15827-L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15827-L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15827-L15828) · [Before (L15798-L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15798-L15799)

```diff
-       OT = cT(1943),
-       yT = cT(1099);
+       mq = gq(1895),
+       xq = gq(1070);
```

#### 1465. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15809` → after: `L15838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15838) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15809)

```diff
-       for (const lT of TT) "ingredient" !== lT.kind && lT.oI === kT && (cT += lT.amount);
+       for (const Yq of qq) "ingredient" !== Yq.kind && Yq.eA === Eq && (gq += Yq.amount);
```

#### 1466. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15822-L15823` → after: `L15851-L15852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15851-L15852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15851-L15852) · [Before (L15822-L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15822-L15823)

```diff
-       const IT = null !== (kT = MT.delayMs) && void 0 !== kT ? kT : 0,
-         AT = null !== (cT = MT.durationMs) && void 0 !== cT ? cT : fT,
+       const uq = null !== (Eq = lq.delayMs) && void 0 !== Eq ? Eq : 0,
+         Bq = null !== (gq = lq.durationMs) && void 0 !== gq ? gq : Aq,
```

#### 1467. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15858` → after: `L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15887) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15858)

```diff
-           "--fly-duration": `${AT}ms`
+           "--fly-duration": `${Bq}ms`
```

#### 1468. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15860` → after: `L15889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15889) · [Before (L15860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15860)

```diff
-         children: (0, yT.jsx)(OT.d, {
+         children: (0, xq.jsx)(mq.e, {
```

#### 1469. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15867` → after: `L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15896) · [Before (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15867)

```diff
-   36334: (TT, kT, cT) => {
+   36555: (qq, Eq, gq) => {
```

#### 1470. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15870` → after: `L15899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15899) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15870)

```diff
-       g: () => uT
+       e: () => Gq
```

#### 1471. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15872-L15882` → after: `L15901-L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15901-L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15901-L15911) · [Before (L15872-L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15872-L15882)

```diff
-     var lT = cT(71),
-       MT = cT(2938),
-       KT = cT(6563),
-       OT = cT(2101),
-       yT = cT(2462),
-       fT = cT(8867),
-       xT = cT(339),
-       IT = cT(36),
-       AT = cT(1461),
-       CT = cT(47),
-       jT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(2907),
+       Oq = gq(6434),
+       mq = gq(2052),
+       xq = gq(2383),
+       Aq = gq(8812),
+       cq = gq(307),
+       uq = gq(31),
+       Bq = gq(1416),
+       Wq = gq(38),
+       Nq = gq(1018),
```

#### 1472. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15884-L15889` → after: `L15913-L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15913-L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15913-L15918) · [Before (L15884-L15889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15884-L15889)

```diff
-       tT = cT(328),
-       hT = cT(36339),
-       NT = cT(1921),
-       QT = cT(1996),
-       ST = cT(8719),
-       DT = cT(1099);
+       Vq = gq(296),
+       dq = gq(36560),
+       jq = gq(1876),
+       Hq = gq(1942),
+       oq = gq(8629),
+       Pq = gq(1070);
```

#### 1473. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15896` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15925) · [Before (L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15896)

```diff
-       const OT = (0, QT.e)("hotbar", (TT => {
+       const mq = (0, Hq.f)("hotbar", (qq => {
```

#### 1474. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15898` → after: `L15927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15927) · [Before (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15898)

```diff
-           return null !== (kT = TT.items[KT]) && void 0 !== kT ? kT : null
+           return null !== (Eq = qq.items[Oq]) && void 0 !== Eq ? Eq : null
```

#### 1475. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15900` → after: `L15929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15929) · [Before (L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15900)

```diff
-         fT = (0, QT.e)("hotbar", (TT => TT.ammo)),
+         Aq = (0, Hq.f)("hotbar", (qq => qq.ammo)),
```

#### 1476. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15905-L15906` → after: `L15934-L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15934-L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15934-L15935) · [Before (L15905-L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15905-L15906)

```diff
-         FT = (0, yT.f)("maxAuraLevel"),
-         rT = (0, MT.b)(),
+         yq = (0, xq.h)("maxAuraLevel"),
+         tq = (0, lq.c)(),
```

#### 1477. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15912` → after: `L15941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15941) · [Before (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15912)

```diff
-               AT = Array.isArray(fT) ? fT : [fT],
+               Bq = Array.isArray(Aq) ? Aq : [Aq],
```

#### 1478. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15926` → after: `L15955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15955) · [Before (L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15926)

```diff
-                 const TT = null !== (MT = null === kT || void 0 === kT || null === (KT = kT[cT]) || void 0 === KT ? void 0 : KT.icon) && void 0 !== MT ? MT : `${cT} Enchantment`;
+                 const qq = null !== (lq = null === Eq || void 0 === Eq || null === (Oq = Eq[gq]) || void 0 === Oq ? void 0 : Oq.icon) && void 0 !== lq ? lq : `${gq} Enchantment`;
```

#### 1479. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15940` → after: `L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15969) · [Before (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15940)

```diff
-                 }), IT.push(null !== (yT = (0, xT.N)(lT)) && void 0 !== yT ? yT : lT.toString())
+                 }), uq.push(null !== (xq = (0, cq.X)(Yq)) && void 0 !== xq ? xq : Yq.toString())
```

#### 1480. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15943` → after: `L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15972) · [Before (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15943)

```diff
-             tT(IT), aT(null !== (cT = null === (lT = OT.attributes.customAttributes) || void 0 === lT ? void 0 : lT.enchantmentTier) && void 0 !== cT ? cT : null)
+             Vq(uq), Qq(null !== (gq = null === (Yq = mq.attributes.customAttributes) || void 0 === Yq ? void 0 : Yq.enchantmentTier) && void 0 !== gq ? gq : null)
```

#### 1481. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15957` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15986) · [Before (L15957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15957)

```diff
-           children: `${wT}|${OT.requiresAmmo?`${fT}x${OT.clipSize}`:OT.clipSize}`
+           children: `${vq}|${mq.requiresAmmo?`${Aq}x${mq.clipSize}`:mq.clipSize}`
```

#### 1482. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15959` → after: `L15988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15988) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15959)

```diff
-         bT = (0, ST.l)();
+         nq = (0, oq.j)();
```

#### 1483. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15967-L15968` → after: `L15996-L15997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L15996-L15997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L15996-L15997) · [Before (L15967-L15968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15967-L15968)

```diff
-             "--enchantmentColour": null !== (cT = xT.fb[hT]) && void 0 !== cT ? cT : xT.fb.None,
-             "--duration": hT ? (0, xT.cb)(hT) + "s" : void 0
+             "--enchantmentColour": null !== (gq = cq.Ab[dq]) && void 0 !== gq ? gq : cq.Ab.None,
+             "--duration": dq ? (0, cq.sb)(dq) + "s" : void 0
```

#### 1484. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15972` → after: `L16001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16001) · [Before (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15972)

```diff
-             children: [(0, DT.jsx)(NT.b, {
+             children: [(0, Pq.jsx)(jq.c, {
```

#### 1485. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15977` → after: `L16006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16006) · [Before (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15977)

```diff
-             children: [(0, DT.jsx)(NT.b, {
+             children: [(0, Pq.jsx)(jq.c, {
```

#### 1486. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15984-L15993` → after: `L16013-L16022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16013-L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16013-L16022) · [Before (L15984-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15984-L15993)

```diff
-     var FT = cT(36346),
-       rT = cT(31),
-       PT = cT(1953),
-       wT = cT(617),
-       mT = cT(2469),
-       bT = cT(3343),
-       zT = cT(3348);
-     var JT = cT(1122),
-       oT = cT(1117),
-       HT = cT(2526);
+     var yq = gq(36575),
+       tq = gq(24),
+       rq = gq(1904),
+       vq = gq(598),
+       hq = gq(2386),
+       nq = gq(3265),
+       bq = gq(3273);
+     var iq = gq(1095),
+       Zq = gq(1086),
+       fq = gq(2437);
```

#### 1487. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L15998` → after: `L16027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16027) · [Before (L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L15998)

```diff
-     var GT = cT(1486);
+     var Tq = gq(1440);
```

#### 1488. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16000` → after: `L16029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16029) · [Before (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16000)

```diff
-       const [TT, kT] = (0, lT.useState)(0), cT = (0, yT.f)("useFullInventory"), OT = (0, yT.f)("highlightedHotbarSlots"), {
+       const [qq, Eq] = (0, Yq.useState)(0), gq = (0, xq.h)("useFullInventory"), mq = (0, xq.h)("highlightedHotbarSlots"), {
```

#### 1489. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16003-L16004` → after: `L16032-L16033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16032-L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16032-L16033) · [Before (L16003-L16004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16003-L16004)

```diff
-       } = (0, rT.n)(["isTouchScreen", "openInGameMenuName"]), CT = null !== xT && "inventory" !== xT, jT = (0, QT.h)("fullInventory") && "inventory" === xT, tT = function() {
-         const TT = (0, JT.i)(((TT, kT) => `${TT}:${(0,oT.e)(TT,kT)?"portrait":"landscape"}`)),
+       } = (0, tq.j)(["isTouchScreen", "openInGameMenuName"]), Wq = null !== cq && "inventory" !== cq, Nq = (0, Hq.g)("fullInventory") && "inventory" === cq, Vq = function() {
+         const qq = (0, iq.n)(((qq, Eq) => `${qq}:${(0,Zq.e)(qq,Eq)?"portrait":"landscape"}`)),
```

#### 1490. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16008` → after: `L16037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16037) · [Before (L16008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16008)

```diff
-         }), [TT]), (0, AT.g)(HT.c, (() => {
+         }), [qq]), (0, Bq.f)(fq.d, (() => {
```

#### 1491. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16015-L16016` → after: `L16044-L16045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16044-L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16044-L16045) · [Before (L16015-L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16015-L16016)

```diff
-           return TT && (lT.add("TouchHotbar"), lT.toggle("TouchHotbarKeysAbove", kT), lT.toggle("TouchHotbarHasBag", cT)), (0, bT.g)(), IT.k.nt(zT.c), () => {
-             lT.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, bT.g)(), IT.k.nt(zT.c)
+           return qq && (Yq.add("TouchHotbar"), Yq.toggle("TouchHotbarKeysAbove", Eq), Yq.toggle("TouchHotbarHasBag", gq)), (0, nq.i)(), uq.i.TV(bq.e), () => {
+             Yq.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, nq.i)(), uq.i.TV(bq.e)
```

#### 1492. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16020-L16021` → after: `L16049-L16050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16049-L16050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16049-L16050) · [Before (L16020-L16021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16020-L16021)

```diff
-       const [ST, mT] = (0, KT.e)("changedHotbarUsingNumkeys", !0), GT = (0, QT.e)("hotbar", (TT => TT.selectedSlot)), VT = null !== GT && void 0 !== GT ? GT : TT, XT = (0, MT.b)(), dT = (0, lT.useRef)(null), RT = (0, AT.i)("pointerLockUpdate", Boolean(document.pointerLockElement) … [truncated]
-       (0, AT.g)("inventoryDraggedItemUpdated", (TT => {
+       const [oq, hq] = (0, Oq.b)("changedHotbarUsingNumkeys", !0), Tq = (0, Hq.f)("hotbar", (qq => qq.selectedSlot)), zq = null !== Tq && void 0 !== Tq ? Tq : qq, Lq = (0, lq.c)(), Jq = (0, Yq.useRef)(null), Rq = (0, Bq.h)("pointerLockUpdate", Boolean(document.pointerLockElement) … [truncated]
+       (0, Bq.f)("inventoryDraggedItemUpdated", (qq => {
```

#### 1493. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16023` → after: `L16052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16052) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16023)

```diff
-       })), (0, QT.b)("hotbarScrolled", (TT => {
+       })), (0, Hq.d)("hotbarScrolled", (qq => {
```

#### 1494. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16025` → after: `L16054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16054) · [Before (L16025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16025)

```diff
-       })), (0, QT.b)("hotbarSlotRequested", (TT => {
+       })), (0, Hq.d)("hotbarSlotRequested", (qq => {
```

#### 1495. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16027` → after: `L16056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16056) · [Before (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16027)

```diff
-       })), (0, QT.b)("numberKeyPressed", (() => {
+       })), (0, Hq.d)("numberKeyPressed", (() => {
```

#### 1496. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16029` → after: `L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16058) · [Before (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16029)

```diff
-       })), (0, QT.b)("hotbarDropRequested", (TT => {
+       })), (0, Hq.d)("hotbarDropRequested", (qq => {
```

#### 1497. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16033` → after: `L16062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16062) · [Before (L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16033)

```diff
-           const lT = TT && null !== (cT = kT.amount) && void 0 !== cT ? cT : 1;
+           const Yq = qq && null !== (gq = Eq.amount) && void 0 !== gq ? gq : 1;
```

#### 1498. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16045` → after: `L16074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16074) · [Before (L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16045)

```diff
-           gT((VT + TT + wT.u) % wT.u)
+           Uq((zq + qq + vq.o) % vq.o)
```

#### 1499. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16067` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16096) · [Before (L16067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16067)

```diff
-         BT = TT.draggedInfo, WT = TT.specialItemInfo, nT = TT.setHovered, pT = TT.pointerDown, iT = TT.pointerUp, YT = TT.variation, qT = null !== (sT = TT.craftFlyAnims) && void 0 !== sT ? sT : []
+         Xq = qq.draggedInfo, wq = qq.specialItemInfo, Kq = qq.setHovered, Cq = qq.pointerDown, Iq = qq.pointerUp, sq = qq.variation, eq = null !== (Dq = qq.craftFlyAnims) && void 0 !== Dq ? Dq : []
```

#### 1500. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16095` → after: `L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16124) · [Before (L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16095)

```diff
-             children: new Array(10).fill(0).map(((TT, kT) => (0, DT.jsx)(hT.d, {
+             children: new Array(10).fill(0).map(((qq, Eq) => (0, Pq.jsx)(dq.b, {
```

#### 1501. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16099` → after: `L16128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16128) · [Before (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16099)

```diff
-               craftFlyHoldbackInfo: (0, FT.f)(qT, kT),
+               craftFlyHoldbackInfo: (0, yq.l)(eq, Eq),
```

#### 1502. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16122` → after: `L16151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16151) · [Before (L16122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16122)

```diff
-                 IT.k.nt("toggleMenu", "inventory")
+                 uq.i.TV("toggleMenu", "inventory")
```

#### 1503. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16140` → after: `L16169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16169) · [Before (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16140)

```diff
-         ...GT.g,
+         ...Tq.d,
```

#### 1504. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16153` → after: `L16182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16182) · [Before (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16153)

```diff
-         const MT = (0, yT.f)("maxAuraLevel"),
+         const lq = (0, xq.h)("maxAuraLevel"),
```

#### 1505. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16164` → after: `L16193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16193) · [Before (L16164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16164)

```diff
-         }(KT, (0, fT.c)(), cT), (0, DT.jsxs)("div", {
+         }(Oq, (0, Aq.e)(), gq), (0, Pq.jsxs)("div", {
```

#### 1506. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16176` → after: `L16205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16205) · [Before (L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16176)

```diff
-             ...GT.g,
+             ...Tq.d,
```

#### 1507. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16187` → after: `L16216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16216) · [Before (L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16187)

```diff
-         const cT = (0, fT.c)();
+         const gq = (0, Aq.e)();
```

#### 1508. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16194` → after: `L16223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16223) · [Before (L16194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16194)

```diff
-           ...kT ? GT.g : {},
+           ...Eq ? Tq.d : {},
```

#### 1509. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16196` → after: `L16225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16225) · [Before (L16196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16196)

```diff
-             icon: (0, xT.Yb)(),
+             icon: (0, cq.jc)(),
```

#### 1510. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16200-L16201` → after: `L16229-L16230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16229-L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16229-L16230) · [Before (L16200-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16200-L16201)

```diff
-               cT && rT.e.set({
-                 openEverythingMenuName: tT.o.SHOP
+               gq && tq.b.set({
+                 openEverythingMenuName: Vq.p.SHOP
```

#### 1511. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16215` → after: `L16244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16244) · [Before (L16215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16215)

```diff
-       return kT.some((TT => null !== TT && xT.Uc.includes(TT.name)))
+       return Eq.some((qq => null !== qq && cq.$c.includes(qq.name)))
```

#### 1512. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16219` → after: `L16248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16248) · [Before (L16219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16219)

```diff
-       TT.creative || CT.e.getItem("LogInInventoryRedDotTutorialComplete") || (XT(TT) ? (IT.k.nt("RedDotOpenInventoryIcon", !0), IT.k.nt("TouchTutorialOpenInventoryIcon", !0)) : (IT.k.nt("RedDotOpenInventoryIcon", !1), IT.k.nt("TouchTutorialOpenInventoryIcon", !1)))
+       qq.creative || Wq.i.getItem("LogInInventoryRedDotTutorialComplete") || (Lq(qq) ? (uq.i.TV("RedDotOpenInventoryIcon", !0), uq.i.TV("TouchTutorialOpenInventoryIcon", !0)) : (uq.i.TV("RedDotOpenInventoryIcon", !1), uq.i.TV("TouchTutorialOpenInventoryIcon", !1)))
```

#### 1513. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16227` → after: `L16256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16256) · [Before (L16227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16227)

```diff
-       } = (0, rT.n)(["backpackPointerRequested"]);
+       } = (0, tq.j)(["backpackPointerRequested"]);
```

#### 1514. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16230-L16233` → after: `L16259-L16262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16259-L16262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16259-L16262) · [Before (L16230-L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16230-L16233)

```diff
-       }), []), (0, QT.b)("inventory", dT);
-       const MT = (0, mT.m)();
-       return (0, AT.g)("toggleMenu", (TT => {
-         MT.shown && (null !== TT && void 0 !== TT && TT.startsWith("inventory") && XT(PT.gameBridge.latest("inventory")) ? (CT.e.setItem("LogInInventoryRedDotTutorialComplete", !0), IT.k.nt("RedDotOpenInventoryIcon", !1), IT.k.nt("TouchTutorialOpenInventoryIcon", !1)) : "shop" == … [truncated]
+       }), []), (0, Hq.d)("inventory", Jq);
+       const lq = (0, hq.j)();
+       return (0, Bq.f)("toggleMenu", (qq => {
+         lq.shown && (null !== qq && void 0 !== qq && qq.startsWith("inventory") && Lq(rq.gameBridge.latest("inventory")) ? (Wq.i.setItem("LogInInventoryRedDotTutorialComplete", !0), uq.i.TV("RedDotOpenInventoryIcon", !1), uq.i.TV("TouchTutorialOpenInventoryIcon", !1)) : "shop" == … [truncated]
```

#### 1515. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16239` → after: `L16268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16268) · [Before (L16239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16239)

```diff
-           IT.k.nt("toggleMenu", "inventory")
+           uq.i.TV("toggleMenu", "inventory")
```

#### 1516. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16248` → after: `L16277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16277) · [Before (L16248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16248)

```diff
-           IT.k.nt("toggleMenu", "inventory")
+           uq.i.TV("toggleMenu", "inventory")
```

#### 1517. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16254` → after: `L16283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16283) · [Before (L16254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16254)

```diff
-             IT.k.nt("toggleMenu", "inventory"), TT.stopPropagation()
+             uq.i.TV("toggleMenu", "inventory"), qq.stopPropagation()
```

#### 1518. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16264` → after: `L16293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16293) · [Before (L16264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16264)

```diff
-   36339: (TT, kT, cT) => {
+   36560: (qq, Eq, gq) => {
```

#### 1519. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16266-L16267` → after: `L16295-L16296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16295-L16296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16295-L16296) · [Before (L16266-L16267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16266-L16267)

```diff
-       d: () => hT,
-       g: () => vT
+       b: () => dq,
+       c: () => aq
```

#### 1520. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16269-L16270` → after: `L16298-L16299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16298-L16299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16298-L16299) · [Before (L16269-L16270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16269-L16270)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 1521. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16272-L16279` → after: `L16301-L16308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16301-L16308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16301-L16308) · [Before (L16272-L16279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16272-L16279)

```diff
-       OT = cT(1947),
-       yT = cT(1943),
-       fT = cT(1953),
-       xT = cT(1996),
-       IT = cT(36343),
-       AT = cT(9375),
-       CT = cT(1409),
-       jT = cT(1099);
+       mq = gq(1902),
+       xq = gq(1895),
+       Aq = gq(1904),
+       cq = gq(1942),
+       uq = gq(36568),
+       Bq = gq(9297),
+       Wq = gq(1367),
+       Nq = gq(1070);
```

#### 1522. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16293` → after: `L16322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16322) · [Before (L16293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16293)

```diff
-         return (0, CT.s)() ? null : (0, jT.jsx)("div", {
+         return (0, Wq.q)() ? null : (0, Nq.jsx)("div", {
```

#### 1523. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16316` → after: `L16345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16345) · [Before (L16316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16316)

```diff
-         const zT = (0, xT.e)("inventory", (TT => MT === IT.g ? null : (0, AT.i)(TT, MT)));
+         const bq = (0, cq.f)("inventory", (qq => lq === uq.i ? null : (0, Bq.k)(qq, lq)));
```

#### 1524. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16318` → after: `L16347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16347) · [Before (L16318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16318)

```diff
-         if (MT === IT.g) ST && (JT = ST.name, HT = ST.amount, eT = ST.attributes);
+         if (lq === uq.i) oq && (iq = oq.name, fq = oq.amount, Mq = oq.attributes);
```

#### 1525. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16321` → after: `L16350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16350) · [Before (L16321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16321)

```diff
-           JT = zT.name, oT = zT.icon, HT = null !== (GT = zT.amount) && void 0 !== GT ? GT : 0, eT = zT.attributes
+           iq = bq.name, Zq = bq.icon, fq = null !== (Tq = bq.amount) && void 0 !== Tq ? Tq : 0, Mq = bq.attributes
```

#### 1526. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16324` → after: `L16353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16353) · [Before (L16324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16324)

```diff
-           ET = (0, OT.k)(eT),
+           Sq = (0, mq.i)(Mq),
```

#### 1527. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16353-L16354` → after: `L16382-L16383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16382-L16383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16382-L16383) · [Before (L16353-L16354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16353-L16354)

```diff
-           children: [XT && (0, jT.jsx)(yT.d, {
-             itemName: null !== (lT = oT) && void 0 !== lT ? lT : JT,
+           children: [Lq && (0, Nq.jsx)(xq.e, {
+             itemName: null !== (Yq = Zq) && void 0 !== Yq ? Yq : iq,
```

#### 1528. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16365` → after: `L16394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16394) · [Before (L16365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16365)

```diff
-               backgroundImage: `url(${aT})`
+               backgroundImage: `url(${Qq})`
```

#### 1529. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16371` → after: `L16400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16400) · [Before (L16371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16371)

```diff
-   9362: (TT, kT, cT) => {
+   9283: (qq, Eq, gq) => {
```

#### 1530. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16373` → after: `L16402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16402) · [Before (L16373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16373)

```diff
-       c: () => KT
+       e: () => Oq
```

#### 1531. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16375-L16376` → after: `L16404-L16405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16404-L16405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16404-L16405) · [Before (L16375-L16376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16375-L16376)

```diff
-     var lT = cT(339),
-       MT = cT(9369);
+     var Yq = gq(307),
+       lq = gq(9292);
```

#### 1532. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16380` → after: `L16409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16409) · [Before (L16380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16380)

```diff
-         OT = (0, lT.hb)(TT);
+         mq = (0, Yq.Eb)(qq);
```

#### 1533. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16384` → after: `L16413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16413) · [Before (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16384)

```diff
-         const TT = null !== (yT = null === cT || void 0 === cT || null === (fT = cT[MT]) || void 0 === fT ? void 0 : fT.icon) && void 0 !== yT ? yT : `${MT} Enchantment`;
+         const qq = null !== (xq = null === gq || void 0 === gq || null === (Aq = gq[lq]) || void 0 === Aq ? void 0 : Aq.icon) && void 0 !== xq ? xq : `${lq} Enchantment`;
```

#### 1534. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16391` → after: `L16420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16420) · [Before (L16391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16391)

```diff
-           str: `${MT} ${null!==(xT=(0,lT.N)(vT))&&void 0!==xT?xT:vT}\n`
+           str: `${lq} ${null!==(cq=(0,Yq.X)(aq))&&void 0!==cq?cq:aq}\n`
```

#### 1535. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16399-L16400` → after: `L16428-L16429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16428-L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16428-L16429) · [Before (L16399-L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16399-L16400)

```diff
-         const TT = null !== (IT = null === cT || void 0 === cT || null === (AT = cT[lT]) || void 0 === AT ? void 0 : AT.icon) && void 0 !== IT ? IT : `${lT} Enchantment`,
-           kT = null !== (CT = null === cT || void 0 === cT || null === (jT = cT[lT]) || void 0 === jT ? void 0 : jT.description) && void 0 !== CT ? CT : (0, MT.l)(lT);
+         const qq = null !== (uq = null === gq || void 0 === gq || null === (Bq = gq[Yq]) || void 0 === Bq ? void 0 : Bq.icon) && void 0 !== uq ? uq : `${Yq} Enchantment`,
+           Eq = null !== (Wq = null === gq || void 0 === gq || null === (Nq = gq[Yq]) || void 0 === Nq ? void 0 : Nq.description) && void 0 !== Wq ? Wq : (0, lq.n)(Yq);
```

#### 1536. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16421` → after: `L16450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16450) · [Before (L16421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16421)

```diff
-   36343: (TT, kT, cT) => {
+   36568: (qq, Eq, gq) => {
```

#### 1537. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16423-L16424` → after: `L16452-L16453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16452-L16453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16452-L16453) · [Before (L16423-L16424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16423-L16424)

```diff
-       d: () => lT,
-       g: () => MT
+       e: () => Yq,
+       i: () => lq
```

#### 1538. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16429` → after: `L16458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16458) · [Before (L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16429)

```diff
-   9375: (TT, kT, cT) => {
+   9297: (qq, Eq, gq) => {
```

#### 1539. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16433` → after: `L16461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16461) · [Before (L16433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16433)

```diff
-       g: () => hT,
+       h: () => Hq,
```

#### 1540. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16436-L16439` → after: `L16465-L16468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16465-L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16465-L16468) · [Before (L16436-L16439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16436-L16439)

```diff
-       o: () => IT,
-       s: () => CT,
-       v: () => tT,
-       y: () => AT
+       n: () => uq,
+       q: () => Wq,
+       t: () => Vq,
+       x: () => Bq
```

#### 1541. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16441-L16445` → after: `L16470-L16474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16470-L16474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16470-L16474) · [Before (L16441-L16445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16441-L16445)

```diff
-     var lT = cT(328),
-       MT = cT(617),
-       KT = cT(339),
-       OT = cT(4224),
-       yT = cT(9362);
+     var Yq = gq(296),
+       lq = gq(598),
+       Oq = gq(307),
+       mq = gq(4085),
+       xq = gq(9283);
```

#### 1542. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16454` → after: `L16483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16483) · [Before (L16454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16454)

```diff
-       return kT < lT.length ? null !== (KT = lT[kT]) && void 0 !== KT ? KT : null : null !== (cT = MT[kT - lT.length]) && void 0 !== cT ? cT : null
+       return Eq < Yq.length ? null !== (Oq = Yq[Eq]) && void 0 !== Oq ? Oq : null : null !== (gq = lq[Eq - Yq.length]) && void 0 !== gq ? gq : null
```

#### 1543. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16459` → after: `L16488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16488) · [Before (L16459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16459)

```diff
-       return null !== (kT = TT.amount) && void 0 !== kT ? kT : 0
+       return null !== (Eq = qq.amount) && void 0 !== Eq ? Eq : 0
```

#### 1544. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16479` → after: `L16508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16508) · [Before (L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16479)

```diff
-       return (0, MT.R)(lT) ? "string" !== typeof kT ? "" : (!jT.has(kT) && jT.size < vT && (jT.add(kT), console.warn(`No item called "${kT}", so its hover shows the name as given`)), kT) : lT
+       return (0, lq.H)(Yq) ? "string" !== typeof Eq ? "" : (!Nq.has(Eq) && Nq.size < aq && (Nq.add(Eq), console.warn(`No item called "${Eq}", so its hover shows the name as given`)), Eq) : Yq
```

#### 1545. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16485-L16486` → after: `L16514-L16515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16514-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16514-L16515) · [Before (L16485-L16486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16485-L16486)

```diff
-         PT = null !== (fT = null === (xT = kT[TT.name]) || void 0 === xT ? void 0 : xT.rootName) && void 0 !== fT ? fT : TT.name,
-         wT = null !== (IT = null !== (AT = rT.customDisplayName) && void 0 !== AT ? AT : null === (CT = kT[TT.name]) || void 0 === CT ? void 0 : CT.displayName) && void 0 !== IT ? IT : tT(kT, PT);
+         rq = null !== (Aq = null === (cq = Eq[qq.name]) || void 0 === cq ? void 0 : cq.rootName) && void 0 !== Aq ? Aq : qq.name,
+         vq = null !== (uq = null !== (Bq = tq.customDisplayName) && void 0 !== Bq ? Bq : null === (Wq = Eq[qq.name]) || void 0 === Wq ? void 0 : Wq.displayName) && void 0 !== uq ? uq : Vq(Eq, rq);
```

#### 1546. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16489-L16490` → after: `L16518-L16519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16518-L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16518-L16519) · [Before (L16489-L16490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16489-L16490)

```diff
-       bT && (mT = (0, KT.hb)(wT, {
-         colour: KT.fb[bT]
+       nq && (hq = (0, Oq.Eb)(vq, {
+         colour: Oq.Ab[nq]
```

#### 1547. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16495-L16496` → after: `L16524-L16525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16524-L16525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16524-L16525) · [Before (L16495-L16496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16495-L16496)

```diff
-         const MT = (0, lT.Pb)(TT);
-         return MT.every((TT => "string" === typeof TT)) ? TT : MT.map((TT => "string" === typeof TT ? TT : {
+         const lq = (0, Yq.Zb)(qq);
+         return lq.every((qq => "string" === typeof qq)) ? qq : lq.map((qq => "string" === typeof qq ? qq : {
```

#### 1548. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16502` → after: `L16531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16531) · [Before (L16502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16502)

```diff
-       }(rT.customDescription, rT)) && void 0 !== NT ? NT : null === (QT = kT[TT.name]) || void 0 === QT ? void 0 : QT.description) && void 0 !== hT ? hT : null === (ST = kT[PT]) || void 0 === ST ? void 0 : ST.description) && void 0 !== vT ? vT : "";
+       }(tq.customDescription, tq)) && void 0 !== jq ? jq : null === (Hq = Eq[qq.name]) || void 0 === Hq ? void 0 : Hq.description) && void 0 !== dq ? dq : null === (oq = Eq[rq]) || void 0 === oq ? void 0 : oq.description) && void 0 !== aq ? aq : "";
```

#### 1549. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16504-L16505` → after: `L16533-L16534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16533-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16533-L16534) · [Before (L16504-L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16504-L16505)

```diff
-       if (null !== (DT = rT.customAttributes) && void 0 !== DT && DT.enchantments) JT = (0, yT.c)(zT, rT.customAttributes.enchantments, rT.customAttributes.enchantmentData);
-       else if (cT[PT]) JT = (0, KT.hb)(zT), JT.push({
+       if (null !== (Pq = tq.customAttributes) && void 0 !== Pq && Pq.enchantments) iq = (0, xq.e)(bq, tq.customAttributes.enchantments, tq.customAttributes.enchantmentData);
+       else if (gq[rq]) iq = (0, Oq.Eb)(bq), iq.push({
```

#### 1550. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16519` → after: `L16548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16548) · [Before (L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16519)

```diff
-         if (JT = [], (0, MT.R)(rT.customAttributes.health) || (JT.push({
+         if (iq = [], (0, lq.H)(tq.customAttributes.health) || (iq.push({
```

#### 1551. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16530` → after: `L16559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16559) · [Before (L16530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16530)

```diff
-           }), (0, MT.R)(TT.maxHealth) || (JT.push({
+           }), (0, lq.H)(qq.maxHealth) || (iq.push({
```

#### 1552. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16534` → after: `L16563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16563) · [Before (L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16534)

```diff
-           }))), !(0, MT.R)(TT.attackDamage) && TT.attackDamage > 0 && (JT.push({
+           }))), !(0, lq.H)(qq.attackDamage) && qq.attackDamage > 0 && (iq.push({
```

#### 1553. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16545` → after: `L16574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16574) · [Before (L16545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16545)

```diff
-           })), !(0, MT.R)(TT.secondaryAttackDamage) && TT.secondaryAttackDamage > 0 && (JT.push({
+           })), !(0, lq.H)(qq.secondaryAttackDamage) && qq.secondaryAttackDamage > 0 && (iq.push({
```

#### 1554. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16556` → after: `L16585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16585) · [Before (L16556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16556)

```diff
-           })), (0, MT.R)(TT.baseRunningSpeed) || (JT.push({
+           })), (0, lq.H)(qq.baseRunningSpeed) || (iq.push({
```

#### 1555. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16576` → after: `L16605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16605) · [Before (L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16576)

```diff
-           icon: null !== (eT = null === (GT = TT.tameInfo) || void 0 === GT ? void 0 : GT.saddleItemName) && void 0 !== eT ? eT : "Saddle",
+           icon: null !== (Mq = null === (Tq = qq.tameInfo) || void 0 === Tq ? void 0 : Tq.saddleItemName) && void 0 !== Mq ? Mq : "Saddle",
```

#### 1556. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16586` → after: `L16615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16615) · [Before (L16586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16586)

```diff
-           const kT = OT.d.getIconsFromFriendshipPoints(TT.petInfo.friendshipPoints);
+           const Eq = mq.c.getIconsFromFriendshipPoints(qq.petInfo.friendshipPoints);
```

#### 1557. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16596-L16597` → after: `L16625-L16626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16625-L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16625-L16626) · [Before (L16596-L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16596-L16597)

```diff
-           const cT = OT.d.getMobHungerLevel(TT.petInfo.lastFedAt);
-           for (const TT of OT.d.hungerLevelIcons[cT]) JT.push({
+           const gq = mq.c.getMobHungerLevel(qq.petInfo.lastFedAt);
+           for (const qq of mq.c.hungerLevelIcons[gq]) iq.push({
```

#### 1558. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16606` → after: `L16635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16635) · [Before (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16606)

```diff
-             str: OT.d.hungerLevelTranslations[cT],
+             str: mq.c.hungerLevelTranslations[gq],
```

#### 1559. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16614` → after: `L16643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16643) · [Before (L16614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16614)

```diff
-           let kT = null !== (VT = TT.tameInfo.likedFoods) && void 0 !== VT ? VT : [];
+           let Eq = null !== (zq = qq.tameInfo.likedFoods) && void 0 !== zq ? zq : [];
```

#### 1560. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16621` → after: `L16650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16650) · [Before (L16621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16621)

```diff
-               color: OT.d.feedTextColours[OT.d.MobFoodType.Superliked]
+               color: mq.c.feedTextColours[mq.c.MobFoodType.Superliked]
```

#### 1561. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16641` → after: `L16670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16670) · [Before (L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16641)

```diff
-               color: OT.d.feedTextColours[OT.d.MobFoodType.Liked]
+               color: mq.c.feedTextColours[mq.c.MobFoodType.Liked]
```

#### 1562. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16658` → after: `L16687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16687) · [Before (L16658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16658)

```diff
-               color: OT.d.feedTextColours[OT.d.MobFoodType.Neutral]
+               color: mq.c.feedTextColours[mq.c.MobFoodType.Neutral]
```

#### 1563. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16663` → after: `L16692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16692) · [Before (L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16663)

```diff
-           for (const cT of null !== (ZT = TT.tameInfo.neutralFoods) && void 0 !== ZT ? ZT : []) {
+           for (const gq of null !== (pq = qq.tameInfo.neutralFoods) && void 0 !== pq ? pq : []) {
```

#### 1564. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16678` → after: `L16707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16707) · [Before (L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16678)

```diff
-               color: OT.d.feedTextColours[OT.d.MobFoodType.Disliked]
+               color: mq.c.feedTextColours[mq.c.MobFoodType.Disliked]
```

#### 1565. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16683` → after: `L16712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16712) · [Before (L16683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16683)

```diff
-           for (const cT of null !== (uT = TT.tameInfo.dislikedFoods) && void 0 !== uT ? uT : []) {
+           for (const gq of null !== (Gq = qq.tameInfo.dislikedFoods) && void 0 !== Gq ? Gq : []) {
```

#### 1566. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16693` → after: `L16722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16722) · [Before (L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16693)

```diff
-         JT.length > 0 ? (JT.shift(), JT.unshift(...(0, KT.hb)(zT))) : JT = (0, KT.hb)(zT)
+         iq.length > 0 ? (iq.shift(), iq.unshift(...(0, Oq.Eb)(bq))) : iq = (0, Oq.Eb)(bq)
```

#### 1567. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16710-L16711` → after: `L16739-L16740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16739-L16740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16739-L16740) · [Before (L16710-L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16710-L16711)

```diff
-         const TT = null !== (xT = null === (IT = MT.attributes.customAttributes) || void 0 === IT ? void 0 : IT.enchantmentTier) && void 0 !== xT ? xT : "Tier 0",
-           kT = null !== (AT = null === (CT = KT.attributes.customAttributes) || void 0 === CT ? void 0 : CT.enchantmentTier) && void 0 !== AT ? AT : "Tier 0";
+         const qq = null !== (cq = null === (uq = lq.attributes.customAttributes) || void 0 === uq ? void 0 : uq.enchantmentTier) && void 0 !== cq ? cq : "Tier 0",
+           Eq = null !== (Bq = null === (Wq = Oq.attributes.customAttributes) || void 0 === Wq ? void 0 : Wq.enchantmentTier) && void 0 !== Bq ? Bq : "Tier 0";
```

#### 1568. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16720` → after: `L16749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16749) · [Before (L16720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16720)

```diff
-         const cT = document.querySelector(`[data-inven-idx="${TT}"]`);
+         const gq = document.querySelector(`[data-inven-idx="${qq}"]`);
```

#### 1569. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16730` → after: `L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16759) · [Before (L16730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16730)

```diff
-   9250: (TT, kT, cT) => {
+   9176: (qq, Eq, gq) => {
```

#### 1570. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16732-L16734` → after: `L16761-L16763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16761-L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16761-L16763) · [Before (L16732-L16734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16732-L16734)

```diff
-       b: () => jT,
-       f: () => vT,
-       i: () => tT
+       c: () => Nq,
+       e: () => aq,
+       g: () => Vq
```

#### 1571. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16736-L16745` → after: `L16765-L16774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16765-L16774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16765-L16774) · [Before (L16736-L16745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16736-L16745)

```diff
-     var lT = cT(1470),
-       MT = cT(71),
-       KT = cT(1316),
-       OT = cT(4515),
-       yT = cT(2395),
-       fT = cT(1195),
-       xT = cT(118),
-       IT = cT(1996),
-       AT = cT(1348),
-       CT = cT(1099);
+     var Yq = gq(1422),
+       lq = gq(57),
+       Oq = gq(1298),
+       mq = gq(4359),
+       xq = gq(2325),
+       Aq = gq(1183),
+       cq = gq(96),
+       uq = gq(1942),
+       Bq = gq(1326),
+       Wq = gq(1070);
```

#### 1572. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16756` → after: `L16785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16785) · [Before (L16756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16756)

```diff
-       } = (0, IT.h)("connectedGame"), fT = (0, yT.b)(lT, MT, !1);
+       } = (0, uq.g)("connectedGame"), Aq = (0, xq.c)(Yq, lq, !1);
```

#### 1573. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16774` → after: `L16803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16803) · [Before (L16774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16774)

```diff
-             }), "Game: ", null === fT ? (0, CT.jsx)(AT.d, {}) : fT, (0, CT.jsx)("br", {}), "Lobby Name: ", KT, (0, CT.jsx)("br", {}), (0, CT.jsx)("br", {}), (0, CT.jsx)("br", {}), (0, CT.jsx)("div", {
+             }), "Game: ", null === Aq ? (0, Wq.jsx)(Bq.e, {}) : Aq, (0, Wq.jsx)("br", {}), "Lobby Name: ", Oq, (0, Wq.jsx)("br", {}), (0, Wq.jsx)("br", {}), (0, Wq.jsx)("br", {}), (0, Wq.jsx)("div", {
```

#### 1574. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16787` → after: `L16816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16816) · [Before (L16787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16787)

```diff
-       } = (0, fT.B)(), cT = null !== (TT = tT(xT.featureFlags.canUseInviteLinks)) && void 0 !== TT ? TT : "Loading Link...", [KT, OT] = (0, MT.useState)(0), [yT, IT] = (0, MT.useReducer)((TT => TT + 1), 0);
+       } = (0, Aq.v)(), gq = null !== (qq = Vq(cq.featureFlags.canUseInviteLinks)) && void 0 !== qq ? qq : "Loading Link...", [Oq, mq] = (0, lq.useState)(0), [xq, uq] = (0, lq.useReducer)((qq => qq + 1), 0);
```

#### 1575. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16800` → after: `L16829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16829) · [Before (L16800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16800)

```diff
-         }), (0, CT.jsx)(lT.e, {
+         }), (0, Wq.jsx)(Yq.g, {
```

#### 1576. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16818` → after: `L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16847) · [Before (L16818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16818)

```diff
-         return (0, KT.u)().then((TT => {
+         return (0, Oq.G)().then((qq => {
```

#### 1577. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16828` → after: `L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16857) · [Before (L16828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16828)

```diff
-   36825: (TT, kT, cT) => {
+   37060: (qq, Eq, gq) => {
```

#### 1578. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16830` → after: `L16859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16859) · [Before (L16830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16830)

```diff
-       e: () => wT
+       c: () => vq
```

#### 1579. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16832-L16845` → after: `L16861-L16864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16861-L16864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16861-L16864) · [Before (L16832-L16845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16832-L16845)

```diff
-     var lT = cT(71),
-       MT = cT(2462),
-       KT = cT(1921),
-       OT = cT(602),
-       yT = cT(36),
-       fT = cT(1046),
-       xT = cT.n(fT),
-       IT = cT(36365),
-       AT = cT(2606),
-       CT = cT(36369),
-       jT = cT(2633),
-       vT = cT(2611),
-       tT = cT(3560),
-       hT = cT(36374),
+     var Yq = gq(57),
+       lq = gq(2383),
+       Oq = gq(1876),
+       mq = gq(576),
```

#### 1580. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16847-L16853` → after: `L16866-L16882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16866-L16882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16866-L16882) · [Before (L16847-L16853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16847-L16853)

```diff
-       QT = cT(2056),
-       ST = cT(2408),
-       DT = cT(1226),
-       aT = cT(4864),
-       FT = cT(1996),
-       rT = cT(118),
-       PT = cT(1099);
+       Aq = gq(1018),
+       cq = gq.n(Aq),
+       uq = gq(36597),
+       Bq = gq(2522),
+       Wq = gq(36599),
+       Nq = gq(2548),
+       aq = gq(2530),
+       Vq = gq(3476),
+       dq = gq(36606),
+       jq = gq(24),
+       Hq = gq(2005),
+       oq = gq(2332),
+       Pq = gq(1214),
+       Qq = gq(4748),
+       yq = gq(1942),
+       tq = gq(96),
+ ... (1 more added lines; see GitHub link above)
```

#### 1581. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16855-L16858` → after: `L16884-L16887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16884-L16887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16884-L16887) · [Before (L16855-L16858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16855-L16858)

```diff
-       const TT = (0, MT.f)("lobbyLeaderboardInfo"),
-         kT = (0, FT.h)("players"),
-         cT = (0, FT.h)("lobbyLeaderboardRows"),
-         yT = (0, FT.h)("hiddenPlayerNames"),
+       const qq = (0, lq.h)("lobbyLeaderboardInfo"),
+         Eq = (0, yq.g)("players"),
+         gq = (0, yq.g)("lobbyLeaderboardRows"),
+         xq = (0, yq.g)("hiddenPlayerNames"),
```

#### 1582. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16861` → after: `L16890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16890) · [Before (L16861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16861)

```diff
-       return (0, lT.useEffect)((() => (0, QT.d)((() => {
+       return (0, Yq.useEffect)((() => (0, Hq.e)((() => {
```

#### 1583. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16888` → after: `L16917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16917) · [Before (L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16888)

```diff
-                 if ("string" == typeof MT && "string" == typeof KT ? OT = MT.localeCompare(KT) : "number" == typeof MT && "number" == typeof KT ? OT = MT - KT : "number" == typeof MT && "string" == typeof KT ? OT = 1 : "string" == typeof MT && "number" == typeof KT && (OT = -1),  … [truncated]
+                 if ("string" == typeof lq && "string" == typeof Oq ? mq = lq.localeCompare(Oq) : "number" == typeof lq && "number" == typeof Oq ? mq = lq - Oq : "number" == typeof lq && "string" == typeof Oq ? mq = 1 : "string" == typeof lq && "number" == typeof Oq && (mq = -1),  … [truncated]
```

#### 1584. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16898-L16899` → after: `L16927-L16928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16927-L16928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16927-L16928) · [Before (L16898-L16899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16898-L16899)

```diff
-               } = kT.byId[TT], yT = [], fT = null !== (tT = null === (hT = cT[TT]) || void 0 === hT || null === (NT = hT.tags) || void 0 === NT ? void 0 : NT.flatMap((TT => 0 === TT.length ? TT : [...TT, String.fromCharCode(8198)]))) && void 0 !== tT ? tT : [];
-               yT.push(...fT), yT.push(...(0, DT.y)(MT, lT, (null === KT || void 0 === KT ? void 0 : KT.nameColour) === OT.e || null === KT || void 0 === KT ? void 0 : KT.nameColour)), IT[TT] ??= {}, IT[TT].name = yT
+               } = Eq.byId[qq], xq = [], Aq = null !== (Vq = null === (dq = gq[qq]) || void 0 === dq || null === (jq = dq.tags) || void 0 === jq ? void 0 : jq.flatMap((qq => 0 === qq.length ? qq : [...qq, String.fromCharCode(8198)]))) && void 0 !== Vq ? Vq : [];
+               xq.push(...Aq), xq.push(...(0, Pq.u)(lq, Yq, (null === Oq || void 0 === Oq ? void 0 : Oq.nameColour) === mq.e || null === Oq || void 0 === Oq ? void 0 : Oq.nameColour)), uq[qq] ??= {}, uq[qq].name = xq
```

#### 1585. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16913` → after: `L16942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16942) · [Before (L16913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16913)

```diff
-                     }), " ", (0, PT.jsx)(KT.b, {
+                     }), " ", (0, rq.jsx)(Oq.c, {
```

#### 1586. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16915` → after: `L16944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16944) · [Before (L16915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16915)

```diff
-                       friendBadgeFor: (0, QT.g)(lT, yT) ? lT : void 0
+                       friendBadgeFor: (0, Hq.h)(Yq, xq) ? Yq : void 0
```

#### 1587. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16919` → after: `L16948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16948) · [Before (L16919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16919)

```diff
-                 return (0, PT.jsx)(KT.b, {
+                 return (0, rq.jsx)(Oq.c, {
```

#### 1588. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16929-L16930` → after: `L16958-L16959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16958-L16959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16958-L16959) · [Before (L16929-L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16929-L16930)

```diff
-                 header: (0, PT.jsx)(KT.b, {
-                   text: null !== (kT = lT[TT].displayName) && void 0 !== kT ? kT : ""
+                 header: (0, rq.jsx)(Oq.c, {
+                   text: null !== (Eq = Yq[qq].displayName) && void 0 !== Eq ? Eq : ""
```

#### 1589. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16937` → after: `L16966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16966) · [Before (L16937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16937)

```diff
-               children: (0, PT.jsx)(aT.d, {
+               children: (0, rq.jsx)(Qq.c, {
```

#### 1590. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16947` → after: `L16976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R16976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L16976) · [Before (L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16947)

```diff
-                     opensProfileCard: (0, CT.g)(cT, kT.byId[TT].name, yT),
+                     opensProfileCard: (0, Wq.f)(gq, Eq.byId[qq].name, xq),
```

#### 1591. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16972` → after: `L17001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17001) · [Before (L16972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16972)

```diff
-         AT.b.closeIfOwner(ST)
+         Bq.c.closeIfOwner(oq)
```

#### 1592. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16978` → after: `L17007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17007) · [Before (L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16978)

```diff
-             yT.k.nt("OpenReportMenu", {
+             xq.i.TV("OpenReportMenu", {
```

#### 1593. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16981` → after: `L17010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17010) · [Before (L16981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16981)

```diff
-               vI: null,
+               Hc: null,
```

#### 1594. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16987` → after: `L17016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17016) · [Before (L16987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16987)

```diff
-           ...(0, CT.c)(kT, cT),
+           ...(0, Wq.d)(Eq, gq),
```

#### 1595. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16991` → after: `L17020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17020) · [Before (L16991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16991)

```diff
-           moderationActions: null === cT ? [] : (0, hT.b)(cT),
+           moderationActions: null === gq ? [] : (0, dq.c)(gq),
```

#### 1596. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L16997` → after: `L17026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17026) · [Before (L16997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L16997)

```diff
-         [AT.c]: KT || void 0,
+         [Bq.d]: Oq || void 0,
```

#### 1597. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17000` → after: `L17029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17029) · [Before (L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17000)

```diff
-           AT.b.toggle(ST, {
+           Bq.c.toggle(oq, {
```

#### 1598. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17002` → after: `L17031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17031) · [Before (L17002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17002)

```diff
-             anchor: null !== (TT = ST.current.querySelector(".PlayerPfpAndName")) && void 0 !== TT ? TT : ST.current
+             anchor: null !== (qq = oq.current.querySelector(".PlayerPfpAndName")) && void 0 !== qq ? qq : oq.current
```

#### 1599. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17006` → after: `L17035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17035) · [Before (L17006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17006)

```diff
-           (0, jT.h)(ST, TT, aT(), NT.e.get("isTouchScreen"))
+           (0, Nq.c)(oq, qq, Qq(), jq.b.get("isTouchScreen"))
```

#### 1600. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17009` → after: `L17038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17038) · [Before (L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17009)

```diff
-           (0, vT.b)(TT, (() => (0, CT.c)(kT, cT).playerSocialPreview))
+           (0, aq.d)(qq, (() => (0, Wq.d)(Eq, gq).playerSocialPreview))
```

#### 1601. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17024` → after: `L17053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17053) · [Before (L17024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17024)

```diff
-         }, TT))), MT && !KT && (0, PT.jsx)(IT.c, {
+         }, qq))), lq && !Oq && (0, rq.jsx)(uq.d, {
```

#### 1602. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17031` → after: `L17060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17060) · [Before (L17031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17031)

```diff
-           }, ...null === cT || rT.featureFlags.useSocialFeatures ? [] : (0, tT.e)(null, cT)]
+           }, ...null === gq || tq.featureFlags.useSocialFeatures ? [] : (0, Vq.c)(null, gq)]
```

#### 1603. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17036` → after: `L17065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17065) · [Before (L17036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17036)

```diff
-   36374: (TT, kT, cT) => {
+   36606: (qq, Eq, gq) => {
```

#### 1604. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17038` → after: `L17067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17067) · [Before (L17038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17038)

```diff
-       b: () => IT
+       c: () => uq
```

#### 1605. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17040-L17042` → after: `L17069-L17071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17069-L17071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17069-L17071) · [Before (L17040-L17042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17040-L17042)

```diff
-     var lT = cT(1974),
-       MT = cT(2485),
-       KT = cT(36383);
+     var Yq = gq(1926),
+       lq = gq(2402),
+       Oq = gq(36612);
```

#### 1606. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17067` → after: `L17096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17096) · [Before (L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17067)

```diff
-       }(TT, await (0, KT.e)(TT), kT())
+       }(qq, await (0, Oq.g)(qq), Eq())
```

#### 1607. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17109` → after: `L17138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17138) · [Before (L17109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17109)

```diff
-           return null !== (cT = null !== (lT = TT.here.find((TT => TT.name === kT))) && void 0 !== lT ? lT : TT.away.find((TT => TT.name === kT))) && void 0 !== cT ? cT : null
+           return null !== (gq = null !== (Yq = qq.here.find((qq => qq.name === Eq))) && void 0 !== Yq ? Yq : qq.away.find((qq => qq.name === Eq))) && void 0 !== gq ? gq : null
```

#### 1608. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17132` → after: `L17161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17161) · [Before (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17132)

```diff
-           (0, MT.g)({
+           (0, lq.f)({
```

#### 1609. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17143` → after: `L17172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17172) · [Before (L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17143)

```diff
-       return xT(null !== (kT = lT.b.get("lobbyManage")) && void 0 !== kT ? kT : null, TT)
+       return cq(null !== (Eq = Yq.c.get("lobbyManage")) && void 0 !== Eq ? Eq : null, qq)
```

#### 1610. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17146` → after: `L17175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17175) · [Before (L17146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17146)

```diff
-   36383: (TT, kT, cT) => {
+   36612: (qq, Eq, gq) => {
```

#### 1611. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17148-L17149` → after: `L17177-L17178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17177-L17178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17177-L17178) · [Before (L17148-L17149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17148-L17149)

```diff
-       b: () => IT,
-       e: () => fT
+       e: () => uq,
+       g: () => Aq
```

#### 1612. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17151-L17153` → after: `L17180-L17182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17180-L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17180-L17182) · [Before (L17151-L17153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17151-L17153)

```diff
-     var lT = cT(1497),
-       MT = cT(1974),
-       KT = cT(1953);
+     var Yq = gq(1448),
+       lq = gq(1926),
+       Oq = gq(1904);
```

#### 1613. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17166` → after: `L17195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17195) · [Before (L17166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17166)

```diff
-           fT = MT.b.subscribe("lobbyManage", (TT => {
+           Aq = lq.c.subscribe("lobbyManage", (qq => {
```

#### 1614. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17169` → after: `L17198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17198) · [Before (L17169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17169)

```diff
-               return null !== (cT = null === TT || void 0 === TT ? void 0 : TT.results.find((TT => TT.requestId === kT))) && void 0 !== cT ? cT : null
+               return null !== (gq = null === qq || void 0 === qq ? void 0 : qq.results.find((qq => qq.requestId === Eq))) && void 0 !== gq ? gq : null
```

#### 1615. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17192` → after: `L17221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17221) · [Before (L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17192)

```diff
-         return this.statuses.delete(kT), this.pending.set(kT, (null !== (lT = this.pending.get(kT)) && void 0 !== lT ? lT : 0) + 1), this.sendAction(TT).then((TT => {
+         return this.statuses.delete(Eq), this.pending.set(Eq, (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 0) + 1), this.sendAction(qq).then((qq => {
```

#### 1616. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17194` → after: `L17223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17223) · [Before (L17194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17194)

```diff
-           const MT = null !== TT && void 0 !== TT ? TT : {
+           const lq = null !== qq && void 0 !== qq ? qq : {
```

#### 1617. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17199` → after: `L17228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17228) · [Before (L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17199)

```diff
-             KT = (null !== (lT = this.pending.get(kT)) && void 0 !== lT ? lT : 1) - 1;
+             Oq = (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 1) - 1;
```

#### 1618. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17222` → after: `L17251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17251) · [Before (L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17222)

```diff
-           TT = Math.min(null !== (kT = TT) && void 0 !== kT ? kT : 1 / 0, cT.until)
+           qq = Math.min(null !== (Eq = qq) && void 0 !== Eq ? Eq : 1 / 0, gq.until)
```

#### 1619. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17238` → after: `L17267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17267) · [Before (L17238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17238)

```diff
-   4730: (TT, kT, cT) => {
+   4588: (qq, Eq, gq) => {
```

#### 1620. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17240-L17241` → after: `L17269-L17270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17269-L17270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17269-L17270) · [Before (L17240-L17241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17240-L17241)

```diff
-       g: () => QT,
-       e: () => NT
+       f: () => Hq,
+       d: () => jq
```

#### 1621. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17243-L17247` → after: `L17272-L17276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17272-L17276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17272-L17276) · [Before (L17243-L17247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17243-L17247)

```diff
-     var lT = cT(71),
-       MT = cT(1461),
-       KT = cT(1921),
-       OT = cT(4739),
-       yT = cT(1099);
+     var Yq = gq(57),
+       lq = gq(1416),
+       Oq = gq(1876),
+       mq = gq(4597),
+       xq = gq(1070);
```

#### 1622. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17257` → after: `L17286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17286) · [Before (L17257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17257)

```diff
-         AT = kT.Uk,
+         Bq = Eq.zY,
```

#### 1623. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17261-L17262` → after: `L17290-L17291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17290-L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17290-L17291) · [Before (L17261-L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17261-L17262)

```diff
-         } = null !== kT && void 0 !== kT ? kT : {},
-         vT = (0, OT.g)();
+         } = null !== Eq && void 0 !== Eq ? Eq : {},
+         aq = (0, mq.f)();
```

#### 1624. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17287` → after: `L17316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17316) · [Before (L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17287)

```diff
-               "--rotation": `${jT}deg`
+               "--rotation": `${Nq}deg`
```

#### 1625. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17298` → after: `L17327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17327) · [Before (L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17298)

```diff
-             children: (0, yT.jsx)(KT.b, {
+             children: (0, xq.jsx)(Oq.c, {
```

#### 1626. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17305` → after: `L17334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17334) · [Before (L17305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17305)

```diff
-             children: (0, yT.jsx)(KT.b, {
+             children: (0, xq.jsx)(Oq.c, {
```

#### 1627. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17312` → after: `L17341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17341) · [Before (L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17312)

```diff
-     var xT = cT(1046),
+     var cq = gq(1018),
```

#### 1628. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17324` → after: `L17353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17353) · [Before (L17324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17324)

```diff
-           jT = kT.Wk,
+           Nq = Eq.GY,
```

#### 1629. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17328-L17330` → after: `L17357-L17359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17357-L17359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17357-L17359) · [Before (L17328-L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17328-L17330)

```diff
-             nk: hT
-           } = null !== kT && void 0 !== kT ? kT : {},
-           NT = (0, OT.g)();
+             LY: dq
+           } = null !== Eq && void 0 !== Eq ? Eq : {},
+           jq = (0, mq.f)();
```

#### 1630. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17337-L17338` → after: `L17366-L17367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17366-L17367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17366-L17367) · [Before (L17337-L17338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17337-L17338)

```diff
-               OT = null !== (TT = KT.timeRemaining) && void 0 !== TT ? TT : 0,
-               yT = null !== (kT = KT.Bk) && void 0 !== kT ? kT : 1,
+               mq = null !== (qq = Oq.timeRemaining) && void 0 !== qq ? qq : 0,
+               xq = null !== (Eq = Oq.pY) && void 0 !== Eq ? Eq : 1,
```

#### 1631. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17340` → after: `L17369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17369) · [Before (L17340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17340)

```diff
-             MT.current.style.strokeDashoffset = `${xT}`, cT.current && (cT.current.style.opacity = OT > 0 ? "1" : "0"), fT.current && jT && (fT.current.textContent = `${(OT/1e3).toFixed(1)}s`)
+             lq.current.style.strokeDashoffset = `${cq}`, gq.current && (gq.current.style.opacity = mq > 0 ? "1" : "0"), Aq.current && Nq && (Aq.current.textContent = `${(mq/1e3).toFixed(1)}s`)
```

#### 1632. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17353` → after: `L17382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17382) · [Before (L17353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17353)

```diff
-               "--rotation": `${tT}deg`
+               "--rotation": `${Vq}deg`
```

#### 1633. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17381` → after: `L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17410) · [Before (L17381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17381)

```diff
-               children: (0, yT.jsx)(KT.b, {
+               children: (0, xq.jsx)(Oq.c, {
```

#### 1634. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17392` → after: `L17421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17421) · [Before (L17392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17392)

```diff
-             children: [(0, yT.jsx)(KT.b, {
+             children: [(0, xq.jsx)(Oq.c, {
```

#### 1635. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17412` → after: `L17441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17441) · [Before (L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17412)

```diff
-           CT = (0, OT.g)();
+           Wq = (0, mq.f)();
```

#### 1636. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17419-L17420` → after: `L17448-L17449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17448-L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17448-L17449) · [Before (L17419-L17420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17419-L17420)

```diff
-               const TT = 100 * (kT.catchZonePosition - kT.qk / 2);
-               cT.current.style.left = `${TT}%`, cT.current.style.width = 100 * kT.qk + "%", kT.isCatching !== xT.current && (xT.current = kT.isCatching, kT.isCatching ? cT.current.classList.add("catching") : cT.current.classList.remove("catching"))
+               const qq = 100 * (Eq.catchZonePosition - Eq.kY / 2);
+               gq.current.style.left = `${qq}%`, gq.current.style.width = 100 * Eq.kY + "%", Eq.isCatching !== cq.current && (cq.current = Eq.isCatching, Eq.isCatching ? gq.current.classList.add("catching") : gq.current.classList.remove("catching"))
```

#### 1637. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17431` → after: `L17460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17460) · [Before (L17431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17431)

```diff
-             children: (0, yT.jsx)(KT.b, {
+             children: (0, xq.jsx)(Oq.c, {
```

#### 1638. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17447` → after: `L17476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17476) · [Before (L17447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17447)

```diff
-                 children: AT && (0, yT.jsx)(KT.b, {
+                 children: Bq && (0, xq.jsx)(Oq.c, {
```

#### 1639. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17460` → after: `L17489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17489) · [Before (L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17460)

```diff
-     var vT = cT(617);
+     var aq = gq(598);
```

#### 1640. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17467` → after: `L17496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17496) · [Before (L17467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17467)

```diff
-           fT = kT.Kc,
+           Aq = Eq.KY,
```

#### 1641. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17472` → after: `L17501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17501) · [Before (L17472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17472)

```diff
-           } = null !== kT && void 0 !== kT ? kT : {},
+           } = null !== Eq && void 0 !== Eq ? Eq : {},
```

#### 1642. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17475` → after: `L17504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17504) · [Before (L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17475)

```diff
-           tT = (0, OT.g)();
+           Vq = (0, mq.f)();
```

#### 1643. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17489` → after: `L17518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17518) · [Before (L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17489)

```diff
-             ...!(0, vT.R)(IT) && {
+             ...!(0, aq.H)(uq) && {
```

#### 1644. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17492-L17493` → after: `L17521-L17522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17521-L17522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17521-L17522) · [Before (L17492-L17493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17492-L17493)

```diff
-             ...!(0, vT.R)(AT) && {
-               "--rotation": `${AT}deg`
+             ...!(0, aq.H)(Bq) && {
+               "--rotation": `${Bq}deg`
```

#### 1645. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17496` → after: `L17525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17525) · [Before (L17496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17496)

```diff
-           children: [xT && (0, yT.jsx)(KT.b, {
+           children: [cq && (0, xq.jsx)(Oq.c, {
```

#### 1646. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17506-L17507` → after: `L17535-L17536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17535-L17536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17535-L17536) · [Before (L17506-L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17506-L17507)

```diff
-                 left: `${CT}%`,
-                 width: `${jT}%`
+                 left: `${Wq}%`,
+                 width: `${Nq}%`
```

#### 1647. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17515` → after: `L17544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17544) · [Before (L17515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17515)

```diff
-             children: (0, yT.jsx)(KT.b, {
+             children: (0, xq.jsx)(Oq.c, {
```

#### 1648. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17526` → after: `L17555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17555) · [Before (L17526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17526)

```diff
-           [MT, fT] = (0, lT.useState)((() => new Array(kT.yc).fill("pending"))),
+           [lq, Aq] = (0, Yq.useState)((() => new Array(Eq.IY).fill("pending"))),
```

#### 1649. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17528-L17529` → after: `L17557-L17558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17557-L17558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17557-L17558) · [Before (L17528-L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17528-L17529)

```diff
-             const TT = kT.Ic;
-             return (0, vT.R)(TT) || TT <= 0 ? [] : new Array(TT).fill("pending")
+             const qq = Eq.ql;
+             return (0, aq.H)(qq) || qq <= 0 ? [] : new Array(qq).fill("pending")
```

#### 1650. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17538` → after: `L17567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17567) · [Before (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17538)

```diff
-           NT = (0, OT.g)();
+           jq = (0, mq.f)();
```

#### 1651. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17562` → after: `L17591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17591) · [Before (L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17562)

```diff
-               for (let lT = 0; lT < kT.yc; lT++) cT[lT] = lT < kT.successes ? "success" : "pending";
+               for (let Yq = 0; Yq < Eq.IY; Yq++) gq[Yq] = Yq < Eq.successes ? "success" : "pending";
```

#### 1652. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17602` → after: `L17631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17631) · [Before (L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17602)

```diff
-               children: (0, yT.jsx)(KT.b, {
+               children: (0, xq.jsx)(Oq.c, {
```

#### 1653. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17616` → after: `L17645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17645) · [Before (L17616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17616)

```diff
-             children: (0, yT.jsx)(KT.b, {
+             children: (0, xq.jsx)(Oq.c, {
```

#### 1654. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17659` → after: `L17688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17688) · [Before (L17659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17659)

```diff
-       return (0, MT.g)("qteStateUpdated", (TT => {
+       return (0, lq.f)("qteStateUpdated", (qq => {
```

#### 1655. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17670` → after: `L17699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17699) · [Before (L17670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17670)

```diff
-   4739: (TT, kT, cT) => {
+   4597: (qq, Eq, gq) => {
```

#### 1656. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17672-L17673` → after: `L17701-L17702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17701-L17702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17701-L17702) · [Before (L17672-L17673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17672-L17673)

```diff
-       d: () => yT,
-       g: () => fT
+       b: () => xq,
+       f: () => Aq
```

#### 1657. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17675-L17677` → after: `L17704-L17706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17704-L17706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17704-L17706) · [Before (L17675-L17677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17675-L17677)

```diff
-     var lT = cT(71),
-       MT = cT(1303),
-       KT = cT(4745);
+     var Yq = gq(57),
+       lq = gq(1283),
+       Oq = gq(4606);
```

#### 1658. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17679-L17680` → after: `L17708-L17709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17708-L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17708-L17709) · [Before (L17679-L17680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17679-L17680)

```diff
-         getState: () => KT.d.getCurrentState(),
-         onFrame: MT.o
+         getState: () => Oq.b.getCurrentState(),
+         onFrame: lq.s
```

#### 1659. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17688` → after: `L17717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17717) · [Before (L17688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17688)

```diff
-   9354: (TT, kT, cT) => {
+   9270: (qq, Eq, gq) => {
```

#### 1660. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17690` → after: `L17719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17719) · [Before (L17690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17690)

```diff
-       d: () => xT
+       b: () => cq
```

#### 1661. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17692-L17693` → after: `L17721-L17722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17721-L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17721-L17722) · [Before (L17692-L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17692-L17693)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 1662. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17695-L17696` → after: `L17724-L17725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17724-L17725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17724-L17725) · [Before (L17695-L17696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17695-L17696)

```diff
-       OT = cT(1996),
-       yT = cT(1099);
+       mq = gq(1942),
+       xq = gq(1070);
```

#### 1663. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17702-L17703` → after: `L17731-L17732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17731-L17732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17731-L17732) · [Before (L17702-L17703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17702-L17703)

```diff
-         MT = `${cT.toString().padStart(2,"0")}:${lT.toString().padStart(2,"0")}`;
-       return kT > 0 ? `${kT}:${MT}` : MT
+         lq = `${gq.toString().padStart(2,"0")}:${Yq.toString().padStart(2,"0")}`;
+       return Eq > 0 ? `${Eq}:${lq}` : lq
```

#### 1664. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17712` → after: `L17741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17741) · [Before (L17712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17712)

```diff
-       } = (0, OT.h)("replayRecorder");
+       } = (0, mq.g)("replayRecorder");
```

#### 1665. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17727` → after: `L17756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17756) · [Before (L17727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17727)

```diff
-   36151: (TT, kT, cT) => {
+   36415: (qq, Eq, gq) => {
```

#### 1666. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17729-L17730` → after: `L17758-L17759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17758-L17759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17758-L17759) · [Before (L17729-L17730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17729-L17730)

```diff
-       e: () => IT,
-       f: () => CT
+       d: () => uq,
+       g: () => Wq
```

#### 1667. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17732-L17738` → after: `L17761-L17767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17761-L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17761-L17767) · [Before (L17732-L17738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17732-L17738)

```diff
-     var lT = cT(71),
-       MT = cT(1363),
-       KT = cT(1195),
-       OT = cT(1348),
-       yT = cT(3419),
-       fT = cT(4880),
-       xT = cT(1099);
+     var Yq = gq(57),
+       lq = gq(1336),
+       Oq = gq(1183),
+       mq = gq(1326),
+       xq = gq(3358),
+       Aq = gq(4764),
+       cq = gq(1070);
```

#### 1668. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17750` → after: `L17779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17779) · [Before (L17750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17750)

```diff
-       } = (0, KT.B)();
+       } = (0, Oq.v)();
```

#### 1669. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17753` → after: `L17782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17782) · [Before (L17753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17753)

```diff
-         children: [kT && (0, xT.jsx)(OT.d, {}), !kT && 0 === cT.length && (0, xT.jsx)("div", {
+         children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
```

#### 1670. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17756` → after: `L17785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17785) · [Before (L17756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17756)

```diff
-         }), !kT && cT.map((TT => (0, xT.jsx)(yT.d, {
+         }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
```

#### 1671. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17785` → after: `L17814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17814) · [Before (L17785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17785)

```diff
-       } = (0, KT.B)(), [yT, AT] = (0, lT.useState)(null);
+       } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
```

#### 1672. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17806` → after: `L17835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17835) · [Before (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17806)

```diff
-         }), null !== yT && (0, xT.jsx)(fT.g, {
+         }), null !== xq && (0, cq.jsx)(Aq.i, {
```

#### 1673. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17837` → after: `L17866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17866) · [Before (L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17837)

```diff
-   36754: (TT, kT, cT) => {
+   36974: (qq, Eq, gq) => {
```

#### 1674. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17842-L17853` → after: `L17871-L17882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17871-L17882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17871-L17882) · [Before (L17842-L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17842-L17853)

```diff
-     var lT = cT(4251),
-       MT = cT(1461),
-       KT = cT(71),
-       OT = cT(6486),
-       yT = cT(4239),
-       fT = cT(1292),
-       xT = cT(1953),
-       IT = cT(1921),
-       AT = cT(1470),
-       CT = cT(1195),
-       jT = cT(36756),
-       vT = cT(1046),
+     var Yq = gq(4111),
+       lq = gq(1416),
+       Oq = gq(57),
+       mq = gq(6348),
+       xq = gq(4098),
+       Aq = gq(1274),
+       cq = gq(1904),
+       uq = gq(1876),
+       Bq = gq(1422),
+       Wq = gq(1183),
+       Nq = gq(36979),
+       aq = gq(1018),
```

#### 1675. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17855-L17858` → after: `L17884-L17887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17884-L17887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17884-L17887) · [Before (L17855-L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17855-L17858)

```diff
-       hT = cT(1316),
-       NT = cT(1061),
-       QT = cT(1289),
-       ST = cT(1099);
+       dq = gq(1298),
+       jq = gq(1025),
+       Hq = gq(1267),
+       oq = gq(1070);
```

#### 1676. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17864` → after: `L17893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17893) · [Before (L17864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17864)

```diff
-       } = (0, CT.B)(), [kT, cT] = (0, KT.useState)(!1), [vT, aT] = (0, KT.useState)(null), [rT, PT] = (0, KT.useState)(1), [wT, mT] = (0, KT.useState)(!1), [bT, zT] = (0, KT.useState)(!1), JT = (0, KT.useRef)(0), oT = (0, KT.useRef)(!1), HT = (0, KT.useRef)(!1), eT = (0, KT.useRe … [truncated]
+       } = (0, Wq.v)(), [Eq, gq] = (0, Oq.useState)(!1), [aq, Qq] = (0, Oq.useState)(null), [tq, rq] = (0, Oq.useState)(1), [vq, hq] = (0, Oq.useState)(!1), [nq, bq] = (0, Oq.useState)(!1), iq = (0, Oq.useRef)(0), Zq = (0, Oq.useRef)(!1), fq = (0, Oq.useRef)(!1), Mq = (0, Oq.useRe … [truncated]
```

#### 1677. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17867-L17868` → after: `L17896-L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17896-L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17896-L17897) · [Before (L17867-L17868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17867-L17868)

```diff
-         const TT = null !== vT && void 0 !== vT ? vT : "Rested Speed";
-         xT.gameBridge.send("wakeUp", bT ? TT : null), GT.current = null, cT(!1), aT(null), PT(1), mT(!1), zT(!1)
+         const qq = null !== aq && void 0 !== aq ? aq : "Rested Speed";
+         cq.gameBridge.send("wakeUp", nq ? qq : null), Tq.current = null, gq(!1), Qq(null), rq(1), hq(!1), bq(!1)
```

#### 1678. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17874-L17875` → after: `L17903-L17904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17903-L17904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17903-L17904) · [Before (L17874-L17875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17874-L17875)

```diff
-       return (0, MT.g)("PlayerPhysicsTypeUpdate", (TT => {
-         TT !== GT.current && (GT.current = TT, TT === OT.v.SLEEPING ? (HT.current || (JT.current = xT.gameBridge.lookup("cameraZoom", null), HT.current = !0), oT.current = !0, xT.gameBridge.send("setCameraZoom", 3), cT(!0), PT(function() {
+       return (0, lq.f)("PlayerPhysicsTypeUpdate", (qq => {
+         qq !== Tq.current && (Tq.current = qq, qq === mq.t.SLEEPING ? (fq.current || (iq.current = cq.gameBridge.lookup("cameraZoom", null), fq.current = !0), Zq.current = !0, cq.gameBridge.send("setCameraZoom", 3), gq(!0), rq(function() {
```

#### 1679. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17877-L17879` → after: `L17906-L17908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17906-L17908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17906-L17908) · [Before (L17877-L17879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17877-L17879)

```diff
-             if (jT.c.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
-             if (jT.c.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
-             if (jT.c.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
+             if (Nq.e.leafBeds.includes(qq)) return console.log(`Found leaf bed: ${qq}`), 1;
+             if (Nq.e.woolBeds.includes(qq)) return console.log(`Found woold bed: ${qq}`), 2;
+             if (Nq.e.strongBeds.includes(qq)) return console.log(`Found strong bed ${qq}`), 3
```

#### 1680. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17884` → after: `L17913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17913) · [Before (L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17884)

```diff
-         (0, fT.o)(DT)
+         (0, Aq.j)(Pq)
```

#### 1681. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17886-L17887` → after: `L17915-L17916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17915-L17916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17915-L17916) · [Before (L17886-L17887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17886-L17887)

```diff
-         kT ? (0, fT.p)(DT) : ((0, fT.o)(DT), oT.current && (xT.gameBridge.send("setCameraZoom", JT.current), oT.current = !1))
-       }), [kT]), (0, QT.q)("overlay", eT, ET, kT), (0, ST.jsx)(lT.d, {
+         Eq ? (0, Aq.m)(Pq) : ((0, Aq.j)(Pq), Zq.current && (cq.gameBridge.send("setCameraZoom", iq.current), Zq.current = !1))
+       }), [Eq]), (0, Hq.w)("overlay", Mq, Sq, Eq), (0, oq.jsx)(Yq.c, {
```

#### 1682. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17903` → after: `L17932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17932) · [Before (L17903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17903)

```diff
-               children: yT.k.map((kT => (0, ST.jsxs)(FT, {
+               children: xq.f.map((Eq => (0, oq.jsxs)(yq, {
```

#### 1683. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17905` → after: `L17934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17934) · [Before (L17905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17905)

```diff
-                 yI: vT,
+                 Bm: aq,
```

#### 1684. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17909` → after: `L17938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17938) · [Before (L17909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17909)

```diff
-                   children: [(0, ST.jsx)(IT.b, {
+                   children: [(0, oq.jsx)(uq.c, {
```

#### 1685. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17913` → after: `L17942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17942) · [Before (L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17913)

```diff
-                   }), yT.i[kT].shortName]
+                   }), xq.c[Eq].shortName]
```

#### 1686. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17916-L17917` → after: `L17945-L17946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17945-L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17945-L17946) · [Before (L17916-L17917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17916-L17917)

```diff
-                   children: TT(yT.i[kT].description, {
-                     time: yT.i[kT].effectLevelDurations[rT] / 6e4
+                   children: qq(xq.c[Eq].description, {
+                     time: xq.c[Eq].effectLevelDurations[tq] / 6e4
```

#### 1687. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17925` → after: `L17954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17954) · [Before (L17925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17925)

```diff
-               }), (0, ST.jsxs)(AT.e, {
+               }), (0, oq.jsxs)(Bq.g, {
```

#### 1688. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17928` → after: `L17957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17957) · [Before (L17928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17928)

```diff
-                   bT ? VT() : (mT(!0), (0, hT._)((() => {
+                   nq ? zq() : (hq(!0), (0, dq.kb)((() => {
```

#### 1689. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17934` → after: `L17963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17963) · [Before (L17934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17934)

```diff
-                   children: [(0, ST.jsx)(NT.e, {
+                   children: [(0, oq.jsx)(jq.d, {
```

#### 1690. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17944` → after: `L17973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17973) · [Before (L17944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17944)

```diff
-                   children: (0, ST.jsx)(IT.b, {
+                   children: (0, oq.jsx)(uq.c, {
```

#### 1691. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17953` → after: `L17982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17982) · [Before (L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17953)

```diff
-                   children: (0, ST.jsx)(IT.b, {
+                   children: (0, oq.jsx)(uq.c, {
```

#### 1692. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17962` → after: `L17991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R17991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L17991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L17991) · [Before (L17962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17962)

```diff
-                   children: (0, ST.jsx)(IT.b, {
+                   children: (0, oq.jsx)(uq.c, {
```

#### 1693. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17978` → after: `L18007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18007) · [Before (L17978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17978)

```diff
-         yI: lT,
+         Bm: Yq,
```

#### 1694. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17981` → after: `L18010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18010) · [Before (L17981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17981)

```diff
-       return cT === lT ? (0, ST.jsx)(AT.m, {
+       return gq === Yq ? (0, oq.jsx)(Bq.p, {
```

#### 1695. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17994` → after: `L18023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18023) · [Before (L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17994)

```diff
-   36369: (TT, kT, cT) => {
+   36599: (qq, Eq, gq) => {
```

#### 1696. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17996-L17997` → after: `L18025-L18026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18025-L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18025-L18026) · [Before (L17996-L17997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17996-L17997)

```diff
-       c: () => xT,
-       g: () => fT
+       d: () => cq,
+       f: () => Aq
```

#### 1697. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L17999-L18003` → after: `L18028-L18032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18028-L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18028-L18032) · [Before (L17999-L18003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L17999-L18003)

```diff
-     var lT = cT(602),
-       MT = cT(1953),
-       KT = cT(1663),
-       OT = cT(118),
-       yT = cT(1274);
+     var Yq = gq(576),
+       lq = gq(1904),
+       Oq = gq(1628),
+       mq = gq(96),
+       xq = gq(1252);
```

#### 1698. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18006` → after: `L18035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18035) · [Before (L18006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18006)

```diff
-       return OT.featureFlags.useSocialFeatures && TT && null === (0, yT.e)(kT, cT)
+       return mq.featureFlags.useSocialFeatures && qq && null === (0, xq.d)(Eq, gq)
```

#### 1699. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18011` → after: `L18040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18040) · [Before (L18011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18011)

```diff
-       const yT = KT.b.getSocialState().friends.find((TT => TT.name.toLowerCase() === kT.toLowerCase())),
+       const xq = Oq.c.getSocialState().friends.find((qq => qq.name.toLowerCase() === Eq.toLowerCase())),
```

#### 1700. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18014` → after: `L18043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18043) · [Before (L18014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18014)

```diff
-         IT = xT && null !== (cT = fT.cosmetics) && void 0 !== cT ? cT : void 0,
+         uq = cq && null !== (gq = Aq.cosmetics) && void 0 !== gq ? gq : void 0,
```

#### 1701. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18020` → after: `L18049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18049) · [Before (L18020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18020)

```diff
-         playerSocialPreview: null !== AT && void 0 !== AT ? AT : {
+         playerSocialPreview: null !== Bq && void 0 !== Bq ? Bq : {
```

#### 1702. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18024-L18025` → after: `L18053-L18054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18053-L18054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18053-L18054) · [Before (L18024-L18025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18024-L18025)

```diff
-           cosmetics: null !== IT && void 0 !== IT ? IT : {},
-           nameColour: null !== (OT = null === IT || void 0 === IT ? void 0 : IT.nameColour) && void 0 !== OT ? OT : lT.e,
+           cosmetics: null !== uq && void 0 !== uq ? uq : {},
+           nameColour: null !== (mq = null === uq || void 0 === uq ? void 0 : uq.nameColour) && void 0 !== mq ? mq : Yq.e,
```

#### 1703. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18034` → after: `L18063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18063) · [Before (L18034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18034)

```diff
-   9359: (TT, kT, cT) => {
+   9277: (qq, Eq, gq) => {
```

#### 1704. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18038-L18039` → after: `L18067-L18068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18067-L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18067-L18068) · [Before (L18038-L18039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18038-L18039)

```diff
-     var lT = cT(4521),
-       MT = cT(4528);
+     var Yq = gq(4364),
+       lq = gq(4367);
```

#### 1705. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18050` → after: `L18079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18079) · [Before (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18050)

```diff
-       return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
+       return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
```

#### 1706. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18053` → after: `L18082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18082) · [Before (L18053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18053)

```diff
-   4864: (TT, kT, cT) => {
+   4748: (qq, Eq, gq) => {
```

#### 1707. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18055` → after: `L18084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18084) · [Before (L18055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18055)

```diff
-       d: () => yT
+       c: () => xq
```

#### 1708. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18057-L18058` → after: `L18086-L18087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18086-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18086-L18087) · [Before (L18057-L18058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18057-L18058)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
+     var Yq = gq(57),
+       lq = gq(1018),
```

#### 1709. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18060` → after: `L18089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18089) · [Before (L18060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18060)

```diff
-       OT = cT(1099);
+       mq = gq(1070);
```

#### 1710. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18086` → after: `L18115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18115) · [Before (L18086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18086)

```diff
-   36712: (TT, kT, cT) => {
+   36931: (qq, Eq, gq) => {
```

#### 1711. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18088-L18090` → after: `L18117-L18119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18117-L18119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18117-L18119) · [Before (L18088-L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18088-L18090)

```diff
-       d: () => PT,
-       g: () => FT,
-       i: () => rT,
+       c: () => rq,
+       e: () => yq,
+       h: () => tq,
```

#### 1712. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18093` → after: `L18122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18122) · [Before (L18093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18093)

```diff
-     var lT = cT(1046),
+     var Yq = gq(1018),
```

#### 1713. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18096-L18108` → after: `L18126-L18137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18126-L18137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18126-L18137) · [Before (L18096-L18108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18096-L18108)

```diff
-       OT = cT(94),
-       yT = cT(1382),
-       fT = cT(1470),
-       xT = cT(1379),
-       IT = cT(1289),
-       AT = cT(1195),
-       CT = cT(36717),
-       jT = cT(1099);
- 
-     function vT(TT) {
-       const [kT, cT] = (0, KT.useState)((() => (0, CT.n)(TT)));
-       return (0, KT.useEffect)((() => (cT((0, CT.n)(TT)), (0, CT.D)((() => {
-         cT((0, CT.n)(TT))
+       xq = gq(1343),
+       Aq = gq(1422),
+       cq = gq(1341),
+       uq = gq(1267),
+       Bq = gq(1183),
+       Wq = gq(36935),
+       Nq = gq(1070);
+ 
+     function aq(qq) {
+       const [Eq, gq] = (0, Oq.useState)((() => (0, Wq.j)(qq)));
+       return (0, Oq.useEffect)((() => (gq((0, Wq.j)(qq)), (0, Wq.L)((() => {
+         gq((0, Wq.j)(qq))
```

#### 1714. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18127` → after: `L18156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18156) · [Before (L18127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18127)

```diff
-       const cT = (0, CT.o)(TT),
+       const gq = (0, Wq.m)(qq),
```

#### 1715. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18139` → after: `L18168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18168) · [Before (L18139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18139)

```diff
-       const fT = kT && (0, CT.t)(MT, KT),
+       const Aq = Eq && (0, Wq.s)(lq, Oq),
```

#### 1716. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18141` → after: `L18170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18170) · [Before (L18141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18141)

```diff
-         AT = OT ? lT : cT;
+         Bq = mq ? Yq : gq;
```

#### 1717. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18144` → after: `L18173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18173) · [Before (L18144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18144)

```diff
-         null === yT || void 0 === yT || yT(), (0, CT.q)(MT, KT)
+         null === xq || void 0 === xq || xq(), (0, Wq.p)(lq, Oq)
```

#### 1718. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18146-L18147` → after: `L18175-L18176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18175-L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18175-L18176) · [Before (L18146-L18147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18146-L18147)

```diff
-         (0, CT.l)(MT)
-       }), (0, IT.q)("popup", null !== AT && void 0 !== AT ? AT : cT, jT, kT && null !== AT, null, fT ? void 0 : "controller:menusSkipTutorial")
+         (0, Wq.i)(lq)
+       }), (0, uq.w)("popup", null !== Bq && void 0 !== Bq ? Bq : gq, Nq, Eq && null !== Bq, null, Aq ? void 0 : "controller:menusSkipTutorial")
```

#### 1719. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18160` → after: `L18189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18189) · [Before (L18160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18160)

```diff
-       } = (0, AT.B)(), yT = NT(kT, cT);
+       } = (0, Bq.v)(), xq = jq(Eq, gq);
```

#### 1720. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18167` → after: `L18196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18196) · [Before (L18167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18167)

```diff
-           children: [(0, CT.t)(kT, cT) && (0, jT.jsx)(fT.i, {
+           children: [(0, Wq.s)(Eq, gq) && (0, Nq.jsx)(Aq.i, {
```

#### 1721. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18170` → after: `L18199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18199) · [Before (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18170)

```diff
-               null === KT || void 0 === KT || KT(), (0, CT.q)(kT, cT)
+               null === Oq || void 0 === Oq || Oq(), (0, Wq.p)(Eq, gq)
```

#### 1722. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18173` → after: `L18202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18202) · [Before (L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18173)

```diff
-           }), !MT && (0, jT.jsx)(fT.e, {
+           }), !lq && (0, Nq.jsx)(Aq.g, {
```

#### 1723. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18176` → after: `L18205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18205) · [Before (L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18176)

```diff
-               (0, CT.f)(cT)
+               (0, Wq.e)(gq)
```

#### 1724. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18183` → after: `L18212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18212) · [Before (L18183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18183)

```diff
-               (0, CT.l)(kT)
+               (0, Wq.i)(Eq)
```

#### 1725. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18252` → after: `L18281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18281) · [Before (L18252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18252)

```diff
-       } = (0, yT.e)({
+       } = (0, xq.d)({
```

#### 1726. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18302` → after: `L18331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18331) · [Before (L18302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18302)

```diff
-       }), (0, xT.e)())
+       }), (0, cq.f)())
```

#### 1727. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L18343` → after: `L18372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/83.js#L18372) · [Before (L18343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/83.js#L18343)

```diff
-       }), (0, xT.e)()) : null
+       }), (0, cq.f)()) : null
```
