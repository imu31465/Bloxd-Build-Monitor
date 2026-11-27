# Changed — Bundle Modifications Report (Part 045 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `45 / 153` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 044](part-044.md) · [Part 046 →](part-046.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (103 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 101. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L768` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/251.js#L768) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/251.js#L768)

```diff
-             if (null !== (0, PB.e)([...MB.k, ...null !== (DB = zB.keptOpenBy) && void 0 !== DB ? DB : []])) return void zB.close();
+             if (null !== (0, Re.c)([...oe.h, ...null !== (be = ke.keptOpenBy) && void 0 !== be ? be : []])) return void ke.close();
```

#### 102. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/251.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/251.js#L770)

```diff
-               pB = (0, JB.h)(YB.frame, (0, yB.k)().swapSticks),
+               fe = (0, Je.l)(ye.frame, (0, Fe.h)().swapSticks),
```

#### 103. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L772-L775` → after: `L772-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L772-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/251.js#L772-L775) · [Before (L772-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/251.js#L772-L775)

```diff
-             BB !== zB ? (BB = zB, OB = !RB(YB, lB) || Math.hypot(qB.x, qB.y) >= QB.B, GB = !1) : GB && (GB = !1, RB(YB, lB) && (OB = !1)), zB.aim(qB);
-             const WB = (0, oB.h)("menuConfirm"),
-               AB = (0, oB.h)("menuBack");
-             return YB.wasPressed(AB) ? (jB.c.consumeButton(AB), void zB.close()) : YB.wasPressed(WB) || YB.wasPressed(lB) ? (jB.c.consumeButton(WB), jB.c.consumeButton(lB), void zB.commit(!1)) : void(OB && RB(YB, lB) && (OB = !1, zB.commit(!0)))
+             ee !== ke ? (ee = ke, ie = !ze(ye, qe) || Math.hypot(Te.x, Te.y) >= Me.A, He = !1) : He && (He = !1, ze(ye, qe) && (ie = !1)), ke.aim(Te);
+             const Be = (0, Ke.j)("menuConfirm"),
+               Ee = (0, Ke.j)("menuBack");
+             return ye.wasPressed(Ee) ? (Ue.d.consumeButton(Ee), void ke.close()) : ye.wasPressed(Be) || ye.wasPressed(qe) ? (Ue.d.consumeButton(Be), Ue.d.consumeButton(qe), void ke.commit(!1)) : void(ie && ze(ye, qe) && (ie = !1, ke.commit(!0)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (118 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   39127: (BB, OB, GB) => {
+   39259: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L6)

```diff
-       b: () => pB
+       d: () => fe
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L8-L9)

```diff
-     var YB = GB(192),
-       DB = GB(38313);
+     var ye = He(186),
+       be = He(38476);
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L23-L24)

```diff
-         Wy: .5,
-         eGB: !1
+         XF: .5,
+         Rye: !1
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L37-L38)

```diff
-         Wy: .5,
-         eGB: !1
+         XF: .5,
+         Rye: !1
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L42-L43` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L42-L43) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L42-L43)

```diff
-           width: YB.f.sZ,
-           height: YB.f.xZ
+           width: ye.g.KX,
+           height: ye.g.UX
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L46-L47)

```diff
-           width: YB.f.sZ + .4,
-           height: YB.f.xZ + .6
+           width: ye.g.KX + .4,
+           height: ye.g.UX + .6
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L49-L52` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L49-L52) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L49-L52)

```diff
-         eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
-         rideHeight: YB.f.xZ - .3,
-         Wy: .5,
-         eGB: !1
+         eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
+         rideHeight: ye.g.UX - .3,
+         XF: .5,
+         Rye: !1
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L65-L66)

```diff
-         Wy: .5,
-         eGB: !1
+         XF: .5,
+         Rye: !1
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L79-L80)

```diff
-         Wy: .5,
-         eGB: !1
+         XF: .5,
+         Rye: !1
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L93-L94)

```diff
-         Wy: .5,
-         eGB: !1
+         XF: .5,
+         Rye: !1
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L107-L108)

```diff
-         Wy: .5,
-         eGB: !1
+         XF: .5,
+         Rye: !1
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L114-L115` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L114-L115) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L114-L115)

```diff
-             width: YB.f.sZ,
-             height: YB.f.xZ
+             width: ye.g.KX,
+             height: ye.g.UX
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L118-L119)

```diff
-             width: YB.f.sZ + .4,
-             height: YB.f.xZ + .6
+             width: ye.g.KX + .4,
+             height: ye.g.UX + .6
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L121-L124)

```diff
-           eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
-           rideHeight: YB.f.xZ - .1,
-           Wy: DB.f.Wy,
-           eGB: !0
+           eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
+           rideHeight: ye.g.UX - .1,
+           XF: be.e.XF,
+           Rye: !0
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L140-L141)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L154-L155` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L154-L155) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L154-L155)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L168-L169)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L182-L183)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L197-L198)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L211-L212)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L228-L229)

```diff
-             width: YB.f.sZ,
-             height: YB.f.xZ
+             width: ye.g.KX,
+             height: ye.g.UX
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L232)

```diff
-             width: YB.f.sZ + .4,
+             width: ye.g.KX + .4,
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L237-L238)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L253-L254)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L268-L269)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L283-L284)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L304-L305)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L319-L320` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L319-L320) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L319-L320)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L333-L334` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L333-L334) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L333-L334)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L338-L339)

```diff
-             width: YB.f.sZ,
-             height: YB.f.xZ
+             width: ye.g.KX,
+             height: ye.g.UX
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L342-L343)

```diff
-             width: YB.f.sZ + .4,
-             height: YB.f.xZ + .6
+             width: ye.g.KX + .4,
+             height: ye.g.UX + .6
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L345-L348` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L345-L348) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L345-L348)

```diff
-           eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
-           rideHeight: YB.f.xZ - .1,
-           Wy: .5,
-           eGB: !1
+           eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
+           rideHeight: ye.g.UX - .1,
+           XF: .5,
+           Rye: !1
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L361-L362)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L366-L367)

```diff
-             width: YB.f.sZ,
-             height: YB.f.xZ
+             width: ye.g.KX,
+             height: ye.g.UX
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L370-L371` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L370-L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L370-L371)

```diff
-             width: YB.f.sZ + .4,
-             height: YB.f.xZ + .6
+             width: ye.g.KX + .4,
+             height: ye.g.UX + .6
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L373-L376` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L373-L376) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L373-L376)

```diff
-           eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
-           rideHeight: YB.f.xZ - .1,
-           Wy: .5,
-           eGB: !1
+           eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
+           rideHeight: ye.g.UX - .1,
+           XF: .5,
+           Rye: !1
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L389-L390)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L403-L404)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L417-L418)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L431-L432` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L431-L432) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L431-L432)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L445-L446)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L459-L460)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 44. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L473-L474)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 45. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L487-L488)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 46. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L510-L511` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L510-L511) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L510-L511)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 47. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L524-L525)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 48. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L538-L539)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 49. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L552-L553` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L552-L553) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L552-L553)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 50. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L566-L567)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 51. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L581-L582)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 52. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L604-L605)

```diff
-           Wy: .5,
-           eGB: !1
+           XF: .5,
+           Rye: !1
```

#### 53. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L613)

```diff
-   37753: (BB, OB, GB) => {
+   37893: (ee, ie, He) => {
```

#### 54. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L615)

```diff
-       c: () => YB
+       d: () => ye
```

#### 55. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L777)

```diff
-   38319: (BB, OB, GB) => {
+   38478: (ee, ie, He) => {
```

#### 56. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L781)

```diff
-     var YB = GB(363),
+     var ye = He(352),
```

#### 57. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L783)

```diff
-       QB = GB(1998);
+       Me = He(1952);
```

#### 58. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L786)

```diff
-     const ZB = [113, 0, 1, "h", 3, "a", 114, 7, 196, 6, 4, 8, 255, "length", 2, 56, "undefined", void 0, 79, "c", 223, 63, "fromCodePoint", 12, "push", 162, 91, 8191, 88, 13, 14, 125, 5, 93, 99, 9, "g", "e", "d", 38, 21, 1023, 48, 153, 65536, 27, 16, 10, 55296, 56320, "b", 53, 23 … [truncated]
+     const pe = [2, 0, 1, 150, 133, "a", 224, 7, 5, 103, "d", 8, 255, "length", 223, 112, 249, "undefined", void 0, "b", "c", 63, 6, "fromCodePoint", 12, "push", 85, 68, 9, 148, 91, 179, 55, 8191, 88, 13, 14, 4, 3, "h", 21, "i", "g", 62, 198, 106, 117, 155, 186, !1, 105, 125, "f", … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L788-L792` → after: `L788-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L788-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L788-L792) · [Before (L788-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L788-L792)

```diff
-     function NB(...BB) {
-       return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
-         for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '^<fLFW(/uvcUIm}dB]~a9P?q4|En%#=Hb.tVwDgSXsR;+7@"AJ[C:6jro>hxNO,&$Z21_!Q85T30G*)ylkpiK`YM{ze', BB[-ZB[0]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[-ZB[0]].length, BB[ZB[10]] = [], BB[ZB[8]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] = -Z … [truncated]
-           if (BB[-ZB[6]] = BB[ZB[5]].indexOf(BB[-ZB[0]][BB[ZB[3]]]), BB[-ZB[6]] !== -ZB[2])
-             if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[-ZB[6]];
+     function Xe(ee) {
+       return typeof Ue[ee] === pe[17] ? Ue[ee] = function(...ee) {
+         for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'auDmHP:FEhqtg4+2NsRj|XfOr6e<?$}`iW5!o8=c#T*b,AIB1@xGkLCQ93~M^/zZ.[>vU")&KyS(n;J0l_%w{YV7pd]', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[4]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[8]] = pe[1], ee[-pe[9]] = pe[1], ee[pe[7]] = -p … [truncated]
+           if (ee[pe[6]] = ee[pe[5]].indexOf(ee[pe[0]][ee[-pe[3]]]), ee[pe[6]] !== -pe[2])
+             if (ee[pe[7]] < pe[1]) ee[pe[7]] = ee[pe[6]];
```

#### 60. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L794)

```diff
-               KB(BB[ZB[7]] += BB[-ZB[6]] * ZB[26], BB[ZB[8]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
+               De(ee[pe[7]] += ee[pe[6]] * pe[30], ee[pe[8]] |= ee[pe[7]] << ee[-pe[9]], ee[-pe[9]] += (ee[pe[7]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
```

#### 61. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L796-L797` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L796-L797) · [Before (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L796-L797)

```diff
-                 KB(BB[ZB[10]].push(BB[ZB[8]] & ZB[12]), BB[ZB[8]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
-               } while (BB[ZB[9]] > ZB[7]);
+                 De(ee[pe[10]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[-pe[9]] -= pe[11])
+               } while (ee[-pe[9]] > pe[7]);
```

#### 62. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L799-L800` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L799-L800) · [Before (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L799-L800)

```diff
-             } return BB[ZB[7]] > -ZB[2] && BB[ZB[10]].push((BB[ZB[8]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[10]])
-       }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
+             } return ee[pe[7]] > -pe[2] && ee[pe[10]].push((ee[pe[8]] | ee[pe[7]] << ee[-pe[9]]) & pe[12]), ze(ee[pe[10]])
+       }(Fe[ee]) : Ue[ee]
```

#### 63. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L804` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L804) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L804)

```diff
-       return BB[ZB[13]] = ZB[2], typeof MB !== ZB[16] && MB ? (new MB).decode(new PB(BB[ZB[1]])) : typeof zB !== ZB[16] && zB ? zB.from(BB[ZB[1]]).toString("utf-8") : qB(BB[ZB[1]])
+       return ee[pe[13]] = pe[2], typeof oe !== pe[17] && oe ? (new oe).decode(new Re(ee[pe[1]])) : typeof ke !== pe[17] && ke ? ke.from(ee[pe[1]]).toString("utf-8") : Te(ee[pe[1]])
```

#### 64. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L808-L809` → after: `L808-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L808-L809) · [Before (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L808-L809)

```diff
-     KB(jB = {}, yB = ["cqyFZKXIlIJUSgFgK%.=#", "L&zbU[C0tjUCrQ}", "AtrJ&*%~l6h/OweRt_.5htPVwj9D9iOqyC/=bx*>T]JGFdt]8jL[9", "1Aeb:C^h]IwtPNjt5Znc", "7EyGa!*#)6@27AM#,tEbnV^", "cFJjU!Yt~I8TBdNq;;zj/,OVA&hlBiI", "D8abhK~w*~hl=pAXw8?TF3)@]d$&*A#q1qB=hh=39$3b<", "<N;bb)6mkNtP7A=]REPH> … [truncated]
-       KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = [function() {
+     De(Ue = {}, Fe = [">U;`9ca", "W:w;r3:oF", 'r$z?!y04Tz.t#mV!^U)k^KC#aRp_(+G?:i"e.ca', "dA0Cq1a", '~OxG("s!F.&)(<]?bsTGs=z:52j0w=9!', "=e)kJ16T<s?0rK=R?boqDL:*LjGRu", "L35i5Y)~94", ";:5KA92L$M[6:8O!c:6<5#oRT[oFC/Q!(9(L1Ga", "Bb7@%AtZ<s2O{2P=rCHFZ0BY[h/l)4l52ZKCLK1}~z%)K&l5Igm", … [truncated]
+       De(ee[pe[13]] = pe[1], ee[-pe[0]] = [function() {
```

#### 65. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L817)

```diff
-       }], BB[ZB[2]] = ZB[17], BB[ZB[14]] = []);
+       }], ee[pe[2]] = pe[18], ee[-pe[14]] = []);
```

#### 66. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L819)

```diff
-         KB(BB[ZB[2]] = Object, BB[ZB[14]][ZB[24]]("".__proto__.constructor.name))
+         De(ee[pe[2]] = Object, ee[-pe[14]][pe[25]]("".__proto__.constructor.name))
```

#### 67. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L821-L823` → after: `L821-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L821-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L821-L823) · [Before (L821-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L821-L823)

```diff
-       BB: for (BB[-ZB[15]] = ZB[1]; BB[-ZB[15]] < BB[ZB[5]][ZB[13]]; BB[-ZB[15]]++) try {
-         for (BB[ZB[2]] = BB[ZB[5]][BB[-ZB[15]]](), BB[ZB[10]] = ZB[1]; BB[ZB[10]] < BB[ZB[14]][ZB[13]]; BB[ZB[10]]++)
-           if (typeof BB[ZB[2]][BB[ZB[14]][BB[ZB[10]]]] === ZB[16]) continue BB;
+       ee: for (ee[-pe[15]] = pe[1]; ee[-pe[15]] < ee[-pe[0]][pe[13]]; ee[-pe[15]]++) try {
+         for (ee[pe[2]] = ee[-pe[0]][ee[-pe[15]]](), ee[pe[16]] = pe[1]; ee[pe[16]] < ee[-pe[14]][pe[13]]; ee[pe[16]]++)
+           if (typeof ee[pe[2]][ee[-pe[14]][ee[pe[16]]]] === pe[17]) continue ee;
```

#### 68. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L827-L828)

```diff
-     }() || {}, MB = JB.TextDecoder, PB = JB.Uint8Array, zB = JB.BP, lB = JB.String || String, pB = JB.Array || Array, qB = function(...BB) {
-       return KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = new pB(ZB[54]), BB[ZB[25]] = lB[ZB[22]] || lB.fromCharCode, BB[ZB[18]] = []),
+     }() || {}, oe = Je.TextDecoder, Re = Je.Uint8Array, ke = Je.bR, qe = Je.String || String, fe = Je.Array || Array, Te = function(...ee) {
+       return De(ee[pe[13]] = pe[1], ee[pe[5]] = new fe(pe[58]), ee[pe[19]] = qe[pe[23]] || qe.fromCharCode, ee[pe[0]] = []),
```

#### 69. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L830-L831` → after: `L830-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L830-L831) · [Before (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L830-L831)

```diff
-           for (KB(OB[ZB[13]] = ZB[2], OB[ZB[2]] = ZB[17], OB[ZB[20]] = ZB[17], OB[ZB[19]] = OB[ZB[1]][ZB[13]], BB[ZB[18]][ZB[13]] = ZB[1]), OB[ZB[10]] = ZB[1]; OB[ZB[10]] < OB[ZB[19]];) KB(OB[ZB[20]] = OB[ZB[1]][OB[ZB[10]]++], OB[ZB[20]] <= ZB[59] ? OB[ZB[2]] = OB[ZB[20]] : OB[ZB … [truncated]
-           return BB[ZB[18]].join("")
+           for (De(ie[pe[13]] = pe[2], ie[pe[2]] = pe[18], ie[pe[19]] = pe[18], ie[pe[20]] = ie[pe[1]][pe[13]], ee[pe[0]][pe[13]] = pe[1]), ie[pe[10]] = pe[1]; ie[pe[10]] < ie[pe[20]];) De(ie[pe[19]] = ie[pe[1]][ie[pe[10]]++], ie[pe[19]] <= pe[57] ? ie[pe[2]] = ie[pe[19]] : ie[pe[ … [truncated]
+           return ee[pe[0]].join("")
```

#### 70. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L834-L840` → after: `L834-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L834-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L834-L840) · [Before (L834-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L834-L840)

```diff
-     const AB = DB()[NB(ZB[33])](),
-       VB = DB()[NB(ZB[33])](),
-       SB = DB()[NB(ZB[33])](),
-       nB = DB()[NB(ZB[33])](),
-       UB = DB()[NB(ZB[33])](),
-       fB = DB()[NB(ZB[33])](),
-       kB = DB()[NB(ZB[33])](),
+     const Ee = be()[Xe(pe[45])](),
+       ge = be()[Xe(pe[45])](),
+       Oe = be()[Xe(pe[45])](),
+       de = be()[Xe(pe[45])](),
+       We = be()[Xe(pe[45])](),
+       te = be()[Xe(pe[45])](),
+       Ze = be()[Xe(pe[45])](),
```

#### 71. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L843-L846` → after: `L843-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L843-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L843-L846) · [Before (L843-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L843-L846)

```diff
-           return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
-             for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = ':,y05|1[eIJ^SCgLFMBOZuHqV~P8?jN.vEb6]&U!Alm_/oQ;37=ci<`x"atGsrfn}$@2%K)Tp(hY>kD+RwW{Xd#*z94', BB[ZB[34]] = "" + (BB[ZB[1]] || ""), BB[ZB[21]] = BB[ZB[34]].length, BB[ZB[38]] = [], BB[ZB[37]] = ZB[1], BB[ZB[29]] = ZB[1], BB[ZB[3 … [truncated]
-               if (BB[ZB[35]] = BB[ZB[5]].indexOf(BB[ZB[34]][BB[ZB[11]]]), BB[ZB[35]] !== -ZB[2])
-                 if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[35]];
+           return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = function(...ee) {
+             for (De(ee[pe[13]] = pe[2], ee[-pe[47]] = 'bH@uo,_dZCv#VRnL&Ds>.G9?KQ1z0Yp`/:JjFagT(|5;i<N7B%~=4m2"I*Ek6+Pfx$USX)OWrl3[MAqct^}e!8]ywh{', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[46]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[8]] = pe[1], ee[pe[22]] = pe[1], ee[pe[7 … [truncated]
+               if (ee[pe[41]] = ee[-pe[47]].indexOf(ee[pe[0]][ee[pe[11]]]), ee[pe[41]] !== -pe[2])
+                 if (ee[pe[7]] < pe[1]) ee[pe[7]] = ee[pe[41]];
```

#### 72. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L848)

```diff
-                   KB(BB[ZB[36]] += BB[ZB[35]] * ZB[26], BB[ZB[37]] |= BB[ZB[36]] << BB[ZB[29]], BB[ZB[29]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
+                   De(ee[pe[7]] += ee[pe[41]] * pe[30], ee[pe[8]] |= ee[pe[7]] << ee[pe[22]], ee[pe[22]] += (ee[pe[7]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
```

#### 73. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L850-L853` → after: `L850-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L850-L853) · [Before (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L850-L853)

```diff
-                     KB(BB[ZB[38]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[ZB[29]] -= ZB[11])
-                   } while (BB[ZB[29]] > ZB[7]);
-                   BB[ZB[36]] = -ZB[2]
-                 } return BB[ZB[36]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[37]] | BB[ZB[36]] << BB[ZB[29]]) & ZB[12]), RB(BB[ZB[38]])
+                     De(ee[pe[10]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[pe[22]] -= pe[11])
+                   } while (ee[pe[22]] > pe[7]);
+                   ee[pe[7]] = -pe[2]
+                 } return ee[pe[7]] > -pe[2] && ee[pe[10]].push((ee[pe[8]] | ee[pe[7]] << ee[pe[22]]) & pe[12]), ze(ee[pe[10]])
```

#### 74. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L856-L869` → after: `L856-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L856-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L856-L862) · [Before (L856-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L856-L869)

```diff
-         BB[ZB[13]] = ZB[4], NB(ZB[60]) + "O" in WB && function(...BB) {
-           function OB(BB) {
-             var OB, GB, YB, DB, QB, oB, jB, yB = 'w!;51~{03x}l+E,tHDSm7kFsN4`][#cQ8gWXdhJ^TRK@)i?.zV=ZUuYP*yaq2o>fLeO(/j&9$rIG%pCv:_B<"AM6|bn';
-             for (KB(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = ZB[1], QB = ZB[1], oB = -ZB[2]), jB = ZB[1]; jB < GB; jB++) {
-               var JB = yB.indexOf(OB[jB]);
-               if (JB !== -ZB[2])
-                 if (oB < ZB[1]) oB = JB;
-                 else {
-                   KB(oB += JB * ZB[26], DB |= oB << QB, QB += (oB & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-                   do {
-                     KB(YB.push(DB & ZB[12]), DB >>= ZB[11], QB -= ZB[11])
-                   } while (QB > ZB[7]);
-                   oB = -ZB[2]
-                 }
+         ee[pe[13]] = pe[38], Xe(pe[103]) + "X" in Be && function(...ee) {
+           De(ee[pe[13]] = pe[1], ee[pe[5]] = function(...ie) {
+             return De(ie[pe[13]] = pe[2], ie[pe[2]] = []), (ie[pe[1]] === pe[2] || ie[pe[1]] >= pe[37]) && ee[pe[19]](ie[pe[2]], [], ie[pe[1]], pe[1]), ie[pe[2]]
+           }, ee[pe[19]] = function(...ie) {
+             for (ie[pe[13]] = pe[37], ie[pe[5]] = ie[pe[38]]; ie[pe[5]] < ie[pe[0]]; ie[pe[5]]++) {
+               if (ie[pe[2]].length !== ie[pe[5]]) return;
+               for (ie[pe[19]] = pe[1]; ie[pe[19]] < ie[pe[0]]; ie[pe[19]]++) ee[pe[48]](ie[pe[2]], [ie[pe[5]], ie[pe[19]]]) && (De(ie[pe[2]].push([ie[pe[5]], ie[pe[19]]]), ee[pe[19]](ie[pe[1]], ie[pe[2]], ie[pe[0]], ie[pe[5]] + pe[2])), ie[pe[2]].length === ie[pe[0]] && ie[pe[1]] … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L871-L1038` → after: `L864-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L864-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L864-L874) · [Before (L871-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L871-L1038)

```diff
-             return oB > -ZB[2] && YB.push((DB | oB << QB) & ZB[12]), RB(YB)
-           }
- 
-           function GB(...BB) {
-             return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = OB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
-           }
-           BB[ZB[13]] = ZB[1],
-             function(...BB) {
-               function OB(...BB) {
-                 for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = [], BB[ZB[14]] = ZB[1], BB[ZB[4]] = BB[ZB[1]].length, BB[-ZB[39]] = ZB[17], BB[ZB[40]] = ZB[17]); BB[ZB[14]] < BB[ZB[4]];) KB(BB[-ZB[39]] = BB[ZB[1]].charCodeAt(BB[ZB[14]]++), BB[-ZB[39]] >= ZB[48] && BB[-ZB[39]] <= ZB[121]  … [truncated]
-                 return BB[ZB[2]]
-               }
- 
-               function GB(...OB) {
-                 for (KB(OB[ZB[13]] = ZB[2], OB[-ZB[43]] = OB[ZB[1]].length, OB[ZB[42]] = -ZB[2], OB[ZB[19]] = ZB[17], OB[-ZB[45]] = ""); ++OB[ZB[42]] < OB[-ZB[43]];) OB[ZB[19]] = OB[ZB[1]][OB[ZB[42]]], OB[ZB[19]] > ZB[124] && KB(OB[ZB[19]] -= ZB[44], OB[-ZB[45]] += BB[ZB[46]](OB[ … [truncated]
-                 return OB[-ZB[45]]
- ... (152 more removed lines; see GitHub link above)
+           }, ee[pe[10]] = function(...ee) {
+             for (De(ee[pe[13]] = pe[2], ee[pe[5]] = [], ee[pe[0]] = ee[pe[1]].length), ee[pe[38]] = pe[1]; ee[pe[38]] < ee[pe[0]]; ee[pe[38]]++)
+               for (ee[pe[5]][ee[pe[38]]] = "", ee[pe[37]] = pe[1]; ee[pe[37]] < ee[pe[0]]; ee[pe[37]]++) ee[pe[5]][ee[pe[38]]] += ee[pe[1]][ee[pe[38]]][pe[2]] === ee[pe[37]] ? pe[85] : pe[86];
+             return ee[pe[5]]
+           }, ee[pe[48]] = function(...ee) {
+             for (De(ee[pe[13]] = pe[0], ee[pe[0]] = ee[pe[1]].length), ee[pe[19]] = pe[1]; ee[pe[19]] < ee[pe[0]]; ee[pe[19]]++) {
+               if (ee[pe[1]][ee[pe[19]]][pe[1]] === ee[pe[2]][pe[1]] || ee[pe[1]][ee[pe[19]]][pe[2]] === ee[pe[2]][pe[2]]) return pe[49];
+               if (Math.abs((ee[pe[1]][ee[pe[19]]][pe[1]] - ee[pe[2]][pe[1]]) / (ee[pe[1]][ee[pe[19]]][pe[2]] - ee[pe[2]][pe[2]])) === pe[2]) return pe[49]
+             }
+             return pe[78]
+           }, console.log(ee[pe[5]]))
```

#### 76. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1041` → after: `L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L877) · [Before (L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1041)

```diff
-         return DB()[OB(111) + OB(112)](GB, BB[ZB[14]]), DB()[OB(ZB[0])](BB[ZB[1]], GB, DB()[OB(ZB[6])](GB, BB[ZB[2]]))
+         return be()[Xe(108) + ie(109)](He, ee[pe[0]]), be()[ie(110)](ee[pe[1]], He, be()[ie(111)](He, ee[pe[2]]))
```

#### 77. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1049-L1052` → after: `L885-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L885-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L885-L888) · [Before (L1049-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1049-L1052)

```diff
-         return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
-           for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = 'UtszD54&qrO8bGX!SWflPZ)>#Ljw(CmR_<v=26"i^u3y:coeJVx;pI~K0[gh|,?7Fak{}d$9n`M*N%QB.]1AHE+T/@Y', BB[ZB[86]] = "" + (BB[ZB[1]] || ""), BB[-ZB[87]] = BB[ZB[86]].length, BB[ZB[89]] = [], BB[ZB[88]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[7] … [truncated]
-             if (BB[ZB[69]] = BB[ZB[5]].indexOf(BB[ZB[86]][BB[ZB[3]]]), BB[ZB[69]] !== -ZB[2])
-               if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
+         return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = function(...ee) {
+           for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'uSTXphbPcMglfLHEARerNnamKG>[z(s9iVjt51<do6`~3k=v&BZQ%]I;C$8O_.{yY!F}2/#*7UD+xwW4Jq",)0:?|^@', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[50]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[51]] = pe[1], ee[pe[52]] = pe[1], ee[pe[42]] … [truncated]
+             if (ee[pe[28]] = ee[pe[5]].indexOf(ee[pe[0]][ee[pe[11]]]), ee[pe[28]] !== -pe[2])
+               if (ee[pe[42]] < pe[1]) ee[pe[42]] = ee[pe[28]];
```

#### 78. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1054` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L890) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1054)

```diff
-                 KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[88]] |= BB[ZB[7]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
+                 De(ee[pe[42]] += ee[pe[28]] * pe[30], ee[pe[51]] |= ee[pe[42]] << ee[pe[52]], ee[pe[52]] += (ee[pe[42]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
```

#### 79. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1056-L1059` → after: `L892-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L892-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L892-L895) · [Before (L1056-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1056-L1059)

```diff
-                   KB(BB[ZB[89]].push(BB[ZB[88]] & ZB[12]), BB[ZB[88]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
-                 } while (BB[ZB[63]] > ZB[7]);
-                 BB[ZB[7]] = -ZB[2]
-               } return BB[ZB[7]] > -ZB[2] && BB[ZB[89]].push((BB[ZB[88]] | BB[ZB[7]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[89]])
+                   De(ee[pe[10]].push(ee[pe[51]] & pe[12]), ee[pe[51]] >>= pe[11], ee[pe[52]] -= pe[11])
+                 } while (ee[pe[52]] > pe[7]);
+                 ee[pe[42]] = -pe[2]
+               } return ee[pe[42]] > -pe[2] && ee[pe[10]].push((ee[pe[51]] | ee[pe[42]] << ee[pe[52]]) & pe[12]), ze(ee[pe[10]])
```

#### 80. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1062-L1081` → after: `L898-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L898-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L898-L911) · [Before (L1062-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1062-L1081)

```diff
-       BB[ZB[13]] = ZB[11], OB(ZB[135]) + ZB[63] in WB && function(...BB) {
-         KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = function(...BB) {
-           for (KB(BB[ZB[13]] = ZB[2], BB[ZB[91]] = ZB[1], BB[ZB[14]] = {}, BB[ZB[19]] = ZB[1], BB[ZB[38]] = ZB[1], BB[ZB[32]] = ZB[1], BB[-ZB[90]] = BB[ZB[1]].length), BB[ZB[36]] = ZB[1]; BB[ZB[36]] < BB[-ZB[90]]; BB[ZB[36]]++) {
-             for (KB(BB[ZB[14]] = {}, BB[ZB[19]] = ZB[1], BB[ZB[38]] = ZB[2]), BB[ZB[3]] = BB[ZB[36]] + ZB[2]; BB[ZB[3]] < BB[-ZB[90]]; BB[ZB[3]]++) BB[ZB[1]][BB[ZB[36]]].x !== BB[ZB[1]][BB[ZB[3]]].x || BB[ZB[1]][BB[ZB[36]]].y !== BB[ZB[1]][BB[ZB[3]]].y ? (BB[ZB[1]][BB[ZB[36]]].y  … [truncated]
-             KB(BB[ZB[19]] += BB[ZB[38]], BB[ZB[91]] = Math.max(BB[ZB[91]], BB[ZB[19]]))
-           }
-           return BB[ZB[91]]
-         }, console.log(BB[ZB[5]]))
-       }();
-       const GB = BB[ZB[1]][OB(ZB[92])][OB(117) + OB(118) + OB(119)](BB[ZB[2]]);
-       BB[ZB[11]] = BB[ZB[1]][OB(ZB[92])][OB(120) + OB(121) + OB(122) + "s"](GB);
-       const YB = BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(ZB[59]) + OB(ZB[54]) + OB(ZB[93]) + ZB[37]) : BB[ZB[11]][OB(ZB[59]) + OB(ZB[54]) + OB(ZB[93]) + ZB[37]],
-         oB = BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(ZB[98]) + OB(ZB[99]) + OB(ZB[100])) : BB[ZB[11]][OB(ZB[98]) + OB(ZB[99]) + OB(ZB[100])];
-       KB(DB()[OB(133)](AB, ZB[1], ZB[1], BB[ZB[32]]), DB().sq(AB, AB, DB()[OB(134)], BB[ZB[4]].heading), DB()[OB(135)](kB, BB[ZB[10]].lZ), kB[ZB[2]] = ZB[1]);
-       const JB = BB[ZB[14]][OB(ZB[85]) + OB(137)]();
-       if (KB(BB[ZB[11]] = BB[ZB[1]][OB(ZB[92])][OB(138) + OB(139) + OB(140) + OB(141)](GB), BB[ZB[107]] = BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(ZB[101]) + OB(ZB[102])) : BB[ZB[11]][OB(ZB[101]) + OB(ZB[102])] … [truncated]
- ... (4 more removed lines; see GitHub link above)
+       ee[pe[13]] = pe[11];
+       const He = ee[pe[1]][ie(pe[15])][ie(113) + ie(114) + ie(115)](ee[pe[2]]);
+       ee[pe[5]] = ee[pe[1]][ie(pe[15])][ie(pe[72]) + ie(pe[46]) + ie(118) + "s"](He);
+       const ye = ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(pe[62]) + ie(pe[63]) + ie(pe[64]) + ie(pe[65])](ee[pe[2]], ie(pe[53]) + ie(pe[54]) + ie(pe[51]) + pe[55]) : ee[pe[5]][ie(pe[53]) + ie(pe[54]) + ie(pe[51]) + pe[55]],
+         Ke = ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(126) + ie(pe[57]) + ie(pe[58])](ee[pe[2]], ie(pe[59]) + ie(pe[60]) + ie(pe[61])) : ee[pe[5]][ie(pe[59]) + ie(pe[60]) + ie(pe[61])];
+       De(be()[ie(132)](Ee, pe[1], pe[1], ee[pe[8]]), be().sq(Ee, Ee, be()[ie(pe[4])], ee[pe[38]].heading), be()[ie(134)](Ze, ee[pe[37]].Op), Ze[pe[2]] = pe[1]);
+       const Je = ee[pe[0]][ie(135) + ie(136)]();
+       if (De(ee[pe[5]] = ee[pe[1]][ie(pe[15])][ie(137) + ie(138) + ie(139) + ie(140)](He), ee[pe[28]] = ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(pe[62]) + ie(pe[63]) + ie(pe[64]) + ie(pe[65])](ee[pe[2]], ie(pe[66]) + ie(pe[67])) : ee[pe[5]][ie(pe[66]) + ie(pe[67])]), !Je & … [truncated]
+         function fe(ee) {
+           var ie, He, ye, be, Me, Ke, Ue;
+           for (De(ie = "" + (ee || ""), He = ie.length, ye = [], be = pe[1], Me = pe[1], Ke = -pe[2]), Ue = pe[1]; Ue < He; Ue++) {
+             var Fe = '~uv8`),eqY"h!nl:ib93KAw%po=VC$X5/I&GJgFWT.[#PQaEmjrZc>|1*+z6@]MU0<O4^SL{Dx7yd_(B2kHfst;?R}N'.indexOf(ie[Ue]);
+             if (Fe !== -pe[2])
+               if (Ke < pe[1]) Ke = Fe;
```

#### 81. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1083` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L913) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1083)

```diff
-                 KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[80]] |= BB[ZB[7]] << BB[-ZB[87]], BB[-ZB[87]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
+                 De(Ke += Fe * pe[30], be |= Ke << Me, Me += (Ke & pe[33]) > pe[34] ? pe[35] : pe[36]);
```

#### 82. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1085-L1088` → after: `L915-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L915-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L915-L920) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1085-L1088)

```diff
-                   KB(BB[ZB[38]].push(BB[ZB[80]] & ZB[12]), BB[ZB[80]] >>= ZB[11], BB[-ZB[87]] -= ZB[11])
-                 } while (BB[-ZB[87]] > ZB[7]);
-                 BB[ZB[7]] = -ZB[2]
-               } return BB[ZB[7]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[80]] | BB[ZB[7]] << BB[-ZB[87]]) & ZB[12]), RB(BB[ZB[38]])
+                   De(ye.push(be & pe[12]), be >>= pe[11], Me -= pe[11])
+                 } while (Me > pe[7]);
+                 Ke = -pe[2]
+               }
+           }
+           return Ke > -pe[2] && ye.push((be | Ke << Me) & pe[12]), ze(ye)
```

#### 83. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1092` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L924) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1092)

```diff
-           return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = pB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
+           return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = fe(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
```

#### 84. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1095-L1100` → after: `L927-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L927-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L927-L934) · [Before (L1095-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1095-L1100)

```diff
-         function NB(...BB) {
-           function OB() {}
-           BB[ZB[13]] = ZB[1], KB(BB[ZB[105]] = function(...BB) {
-             for (KB(BB[ZB[13]] = ZB[14], BB[ZB[86]] = ZB[1], BB[ZB[50]] = ZB[1], BB[ZB[104]] = new OB(ZB[1]), BB[-ZB[103]] = BB[ZB[104]], BB[ZB[37]] = BB[ZB[1]], BB[ZB[63]] = BB[ZB[2]]); BB[ZB[37]] !== ZB[94] || BB[ZB[63]] !== ZB[94];) KB(BB[ZB[50]] = (BB[ZB[37]] ? BB[ZB[37]].val … [truncated]
-             return BB[ZB[86]] && (BB[-ZB[103]].next = new OB(BB[ZB[86]])), BB[ZB[104]].next
-           }, console.log(BB[ZB[105]]))
+         function Xe() {
+           console.log((function(...ee) {
+             for (De(ee[pe[13]] = pe[2], ee[pe[5]] = pe[1], ee[pe[19]] = {}, ee[-pe[72]] = pe[1], ee[pe[10]] = pe[1], ee[pe[8]] = pe[1], ee[pe[46]] = ee[pe[1]].length), ee[pe[7]] = pe[1]; ee[pe[7]] < ee[pe[46]]; ee[pe[7]]++) {
+               for (De(ee[pe[19]] = {}, ee[-pe[72]] = pe[1], ee[pe[10]] = pe[2]), ee[pe[11]] = ee[pe[7]] + pe[2]; ee[pe[11]] < ee[pe[46]]; ee[pe[11]]++) ee[pe[1]][ee[pe[7]]].x !== ee[pe[1]][ee[pe[11]]].x || ee[pe[1]][ee[pe[7]]].y !== ee[pe[1]][ee[pe[11]]].y ? (ee[pe[1]][ee[pe[7]]] … [truncated]
+               De(ee[-pe[72]] += ee[pe[10]], ee[pe[5]] = Math.max(ee[pe[5]], ee[-pe[72]]))
+             }
+             return ee[pe[5]]
+           }))
```

#### 85. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1102-L1106` → after: `L936-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L936-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L936-L940) · [Before (L1102-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1102-L1106)

```diff
-         qB(151) + "C" in WB && NB(), KB(dB(VB, AB, kB), dB(SB, kB, AB), DB()[qB(152)](nB, kB, SB));
-         const fB = DB()[qB(ZB[43])](kB),
-           uB = DB()[qB(154)](AB, kB) / BB[ZB[32]] / fB,
-           mB = Math[qB(ZB[108])](uB, ZB[1]) + ZB[2];
-         if (BB[ZB[32]] * BB[ZB[32]] < DB()[ZB[106]](SB)) {
+         Te(147) + pe[52] in Be && Xe(), De(we(ge, Ee, Ze), we(Oe, Ze, Ee), be()[Te(pe[29])](de, Ze, Oe));
+         const te = be()[Te(pe[88])](Ze),
+           Pe = be()[Te(pe[3])](Ee, Ze) / ee[pe[8]] / te,
+           Ae = Math[Te(pe[79])](Pe, pe[1]) + pe[2];
+         if (ee[pe[8]] * ee[pe[8]] < be()[pe[73]](Oe)) {
```

#### 86. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1108-L1112` → after: `L942-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L942-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L942-L963) · [Before (L1108-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1108-L1112)

```diff
-             KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = function(BB) {
-               var OB, GB, YB, DB, QB = BB.length;
-               for (KB(OB = [], GB = ZB[1]), YB = ZB[1]; YB < QB; YB++) OB.push(YB !== ZB[1] && BB[YB] > BB[YB - ZB[2]] ? OB[YB - ZB[2]] + ZB[2] : ZB[2]);
-               for (DB = QB - ZB[2]; DB >= ZB[1]; DB--) DB !== QB - ZB[2] && BB[DB] > BB[DB + ZB[2]] && (OB[DB] = Math.max(OB[DB], OB[DB + ZB[2]] + ZB[2])), GB += OB[DB];
-               return GB
+             for (De(ee[pe[13]] = pe[2], ee[pe[74]] = 'S4hDRIkng:<u/>rvH}Q9K~0Z%PX*olU8OW=N7,ac2p#@$yFBYe5zbJ`_L!+w3Am;6j{TxECd1?]Vs[.)&tiM|Gfq("^', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[pe[38]] = ee[pe[0]].length, ee[pe[37]] = [], ee[pe[8]] = pe[1], ee[pe[52]] = pe[1], ee[pe[75] … [truncated]
+               if (ee[pe[41]] = ee[pe[74]].indexOf(ee[pe[0]][ee[pe[11]]]), ee[pe[41]] !== -pe[2])
+                 if (ee[pe[75]] < pe[1]) ee[pe[75]] = ee[pe[41]];
+                 else {
+                   De(ee[pe[75]] += ee[pe[41]] * pe[30], ee[pe[8]] |= ee[pe[75]] << ee[pe[52]], ee[pe[52]] += (ee[pe[75]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
+                   do {
+                     De(ee[pe[37]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[pe[52]] -= pe[11])
+                   } while (ee[pe[52]] > pe[7]);
+                   ee[pe[75]] = -pe[2]
+                 } return ee[pe[75]] > -pe[2] && ee[pe[37]].push((ee[pe[8]] | ee[pe[75]] << ee[pe[52]]) & pe[12]), ze(ee[pe[37]])
+           }
+ 
+           function Ve(...ee) {
+             return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = Ye(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
+           }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1115` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L966) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1115)

```diff
-           qB(ZB[139]) in WB && IB(), DB()[qB(ZB[70])](AB, AB, SB, mB)
+           Ve(152) + "r" in Be && ae(), be()[Ve(pe[75])](Ee, Ee, Oe, Ae)
```

#### 88. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1117` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L968) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1117)

```diff
-         KB(BB[ZB[107]] = (0, QB.v)(BB[ZB[107]], 1, Math[qB(ZB[108])](ZB[2], Math[qB(ZB[113])](ZB[1], -uB, ZB[2] - fB / BB[ZB[32]]))), DB()[qB(ZB[104])](AB, AB, nB))
+         De(ee[pe[28]] = (pe[1], Me.v)(ee[pe[28]], 1, Math[Te(pe[79])](pe[2], Math[Te(154)](pe[1], -Pe, pe[2] - te / ee[pe[8]]))), be()[Te(pe[47])](Ee, Ee, de))
```

#### 89. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1120-L1136` → after: `L971-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L971-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L971-L975) · [Before (L1120-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1120-L1136)

```diff
-       if (KB(DB()[OB(ZB[89])](MB, AB, kB), MB[ZB[2]] = ZB[1], BB[ZB[19]] = DB()[OB(161)](MB)), !JB) {
-         function FB(...BB) {
-           for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = '*;y2190.5/|{!3@m#e=o[]EA?Fi+4Z_fp(~&u)bnc6adsKG>h$xVUT<P,vgNBM7YlkDwStQ"zI8OLHR%CJ^Xqjr:}W`', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[ZB[50]].length, BB[-ZB[110]] = [], BB[ZB[32]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] … [truncated]
-             if (BB[ZB[69]] = BB[ZB[2]].indexOf(BB[ZB[50]][BB[ZB[109]]]), BB[ZB[69]] !== -ZB[2])
-               if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
-               else {
-                 KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[32]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-                 do {
-                   KB(BB[-ZB[110]].push(BB[ZB[32]] & ZB[12]), BB[ZB[32]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
-                 } while (BB[ZB[9]] > ZB[7]);
-                 BB[ZB[7]] = -ZB[2]
-               } return BB[ZB[7]] > -ZB[2] && BB[-ZB[110]].push((BB[ZB[32]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[-ZB[110]])
-         }
- 
-         function iB(...BB) {
-           return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = FB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
- ... (1 more removed lines; see GitHub link above)
+       if (De(be()[ie(156)](oe, Ee, Ze), oe[pe[2]] = pe[1], ee[pe[82]] = be()[ie(157)](oe)), !Je) {
+         function ce() {
+           function ee(...ee) {
+             return ee[pe[13]] = pe[2], ee[pe[1]][pe[2]] * pe[81] + (ee[pe[1]][pe[1]] < pe[1] ? pe[80] | ee[pe[1]][pe[1]] : ee[pe[1]][pe[1]])
+           }
```

#### 90. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1138-L1144` → after: `L977-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L977-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L977-L986) · [Before (L1138-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1138-L1144)

```diff
-         function LB(...BB) {
-           KB(BB[ZB[13]] = ZB[1], BB[-ZB[112]] = function(...OB) {
-             return KB(OB[ZB[13]] = ZB[14], OB[ZB[14]] = [], OB[ZB[35]] = OB[ZB[1]].length, OB[ZB[1]].sort(((BB, OB) => BB - OB)), BB[ZB[2]](OB[ZB[14]], [], ZB[1], OB[ZB[35]], OB[ZB[1]], OB[ZB[2]])), OB[ZB[14]]
-           }, BB[ZB[2]] = function(...OB) {
-             if (KB(OB[ZB[13]] = ZB[9], OB[-ZB[111]] = ZB[94]), !(OB[ZB[32]] < ZB[1])) {
-               if (OB[ZB[32]] === ZB[1]) return OB[ZB[1]].push(OB[ZB[2]]);
-               for (OB[ZB[7]] = OB[ZB[14]]; OB[ZB[7]] < OB[ZB[4]] && !(OB[ZB[10]][OB[ZB[7]]] > OB[ZB[32]]); OB[ZB[7]]++) OB[ZB[7]] > OB[ZB[14]] && OB[ZB[10]][OB[ZB[7]]] === OB[ZB[10]][OB[ZB[7]] - ZB[2]] || KB(OB[-ZB[111]] = Array.from(OB[ZB[2]]), OB[-ZB[111]].push(OB[ZB[10]][OB[ZB … [truncated]
+           function ie(...ee) {
+             switch (ee[pe[13]] = pe[2], ((ee[pe[1]] & pe[80]) !== pe[1]) * pe[2] + (ee[pe[1]] < pe[1]) * pe[0]) {
+               case pe[1]:
+                 return [ee[pe[1]] % pe[80], Math.trunc(ee[pe[1]] / pe[81])];
+               case pe[2]:
+                 return [ee[pe[1]] % pe[80] - pe[80], Math.trunc(ee[pe[1]] / pe[81]) + pe[2]];
+               case pe[0]:
+                 return [((ee[pe[1]] + pe[80]) % pe[80] + pe[80]) % pe[80], Math.round(ee[pe[1]] / pe[81])];
+               case pe[38]:
+                 return [ee[pe[1]] % pe[80], Math.trunc(ee[pe[1]] / pe[81])]
```

#### 91. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1146` → after: `L988-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L988-L995) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1146)

```diff
-           }, console.log(BB[-ZB[112]]))
+           }
+           let He = ee([pe[0], pe[37]]),
+             ye = ee([pe[2], pe[0]]),
+             be = He + ye,
+             Me = be - ye,
+             Ke = Me * pe[0],
+             Ue = Ke / pe[0];
+           De(console.log(ie(be)), console.log(ie(Me)), console.log(ie(Ke)), console.log(ie(Ue)))
```

#### 92. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1148` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L997) · [Before (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1148)

```diff
-         iB(ZB[25]) in WB && LB(), BB[ZB[19]] *= BB[ZB[107]]
+         ie(158) + "9" in Be && ce(), ee[pe[82]] *= ee[pe[28]]
```

#### 93. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1150-L1153` → after: `L999-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L999-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L999-L1002) · [Before (L1150-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1150-L1153)

```diff
-       const PB = BB[ZB[9]][OB(ZB[75]) + OB(164) + OB(165)],
-         zB = PB ? Math[OB(166)](PB, BB[ZB[19]]) : BB[ZB[19]];
-       DB()[OB(167) + OB(168)](MB, MB);
-       const lB = BB[ZB[7]] !== ZB[94] && void 0 !== BB[ZB[7]] ? BB[ZB[7]] : BB[ZB[9]][OB(169) + OB(170) + OB(171) + OB(172)];
+       const Re = ee[pe[22]][ie(159) + ie(160) + ie(161)],
+         ke = Re ? Math[ie(162)](Re, ee[pe[82]]) : ee[pe[82]];
+       be()[ie(163) + ie(164)](oe, oe);
+       const qe = ee[pe[7]] !== pe[56] && ee[pe[7]] !== void pe[1] ? ee[pe[7]] : ee[pe[22]][ie(165) + ie(166) + ie(167) + ie(168)];
```

#### 94. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1155-L1158` → after: `L1004-L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1004-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1004-L1009) · [Before (L1155-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1155-L1158)

```diff
-         function gB(...BB) {
-           for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '(rltWdH472eiD:CQ#v/ofz3h*B51pqX}xIVU8Os|yRmkA6M$E[)+,9T&]a~Z;u?"JNbP<cL0%g`!=Fw^G.@>n{SKjY_', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[-ZB[113]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[-ZB[42]] = ZB[1], BB[ZB[63]] = ZB[1], BB[-ZB … [truncated]
-             if (BB[ZB[69]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[11]]]), BB[ZB[69]] !== -ZB[2])
-               if (BB[-ZB[114]] < ZB[1]) BB[-ZB[114]] = BB[ZB[69]];
+         function xe(ee) {
+           var ie, He, ye, be, Me, Ke, Ue;
+           for (De(ie = "" + (ee || ""), He = ie.length, ye = [], be = pe[1], Me = pe[1], Ke = -pe[2]), Ue = pe[1]; Ue < He; Ue++) {
+             var Fe = 'a$G)"Fz(IrSTPH4pu%8EXd3hmyR*.=K?nJ:9~_0DC7U{]6eNtLs,x1&OMoj|Z#fYB;!2g+>kbA@Q/cV[ivlwq<5}`^W'.indexOf(ie[Ue]);
+             if (Fe !== -pe[2])
+               if (Ke < pe[1]) Ke = Fe;
```

#### 95. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1160` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1011) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1160)

```diff
-                 KB(BB[-ZB[114]] += BB[ZB[69]] * ZB[26], BB[-ZB[42]] |= BB[-ZB[114]] << BB[ZB[63]], BB[ZB[63]] += (BB[-ZB[114]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
+                 De(Ke += Fe * pe[30], be |= Ke << Me, Me += (Ke & pe[33]) > pe[34] ? pe[35] : pe[36]);
```

#### 96. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1162-L1165` → after: `L1013-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1013-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1013-L1018) · [Before (L1162-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1162-L1165)

```diff
-                   KB(BB[ZB[38]].push(BB[-ZB[42]] & ZB[12]), BB[-ZB[42]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
-                 } while (BB[ZB[63]] > ZB[7]);
-                 BB[-ZB[114]] = -ZB[2]
-               } return BB[-ZB[114]] > -ZB[2] && BB[ZB[38]].push((BB[-ZB[42]] | BB[-ZB[114]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[38]])
+                   De(ye.push(be & pe[12]), be >>= pe[11], Me -= pe[11])
+                 } while (Me > pe[7]);
+                 Ke = -pe[2]
+               }
+           }
+           return Ke > -pe[2] && ye.push((be | Ke << Me) & pe[12]), ze(ye)
```

#### 97. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1169` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1022) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1169)

```diff
-           return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = gB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
+           return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = xe(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
```

#### 98. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1174-L1185` → after: `L1049-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1049-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1049-L1058) · [Before (L1174-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1174-L1185)

```diff
-             return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
-               for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '~HOsr5Xxd.i(P[F;=cyQ$!Bj,GS]aLVftvT1Rn{e}pzblJu?<Mm0Z>U3hA@7/I^6o&82Wk#D+9K)EN%|:w*4_"YgCq`', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[-ZB[116]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[-ZB[81]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ … [truncated]
-                 if (BB[ZB[117]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[115]]]), BB[ZB[117]] !== -ZB[2])
-                   if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[117]];
-                   else {
-                     KB(BB[ZB[36]] += BB[ZB[117]] * ZB[26], BB[-ZB[81]] |= BB[ZB[36]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-                     do {
-                       KB(BB[ZB[38]].push(BB[-ZB[81]] & ZB[12]), BB[-ZB[81]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
-                     } while (BB[ZB[9]] > ZB[7]);
-                     BB[ZB[36]] = -ZB[2]
-                   } return BB[ZB[36]] > -ZB[2] && BB[ZB[38]].push((BB[-ZB[81]] | BB[ZB[36]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[38]])
-             }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
+             for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'LM:x0P@)Y{2wVyIFAQ}=5R4ou(B9_NS"Z*p7n]/lvd^;jmOt,%`HGzcC<6q~!fg$bsa>U.eJk[#hrD1WXiTE?K|3+8&', ee[-pe[88]] = "" + (ee[pe[1]] || ""), ee[pe[89]] = ee[-pe[88]].length, ee[-pe[91]] = [], ee[pe[90]] = pe[1], ee[pe[22]] = pe[1], ee[- … [truncated]
+               if (ee[pe[41]] = ee[pe[5]].indexOf(ee[-pe[88]][ee[pe[39]]]), ee[pe[41]] !== -pe[2])
+                 if (ee[-pe[31]] < pe[1]) ee[-pe[31]] = ee[pe[41]];
+                 else {
+                   De(ee[-pe[31]] += ee[pe[41]] * pe[30], ee[pe[90]] |= ee[-pe[31]] << ee[pe[22]], ee[pe[22]] += (ee[-pe[31]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
+                   do {
+                     De(ee[-pe[91]].push(ee[pe[90]] & pe[12]), ee[pe[90]] >>= pe[11], ee[pe[22]] -= pe[11])
+                   } while (ee[pe[22]] > pe[7]);
+                   ee[-pe[31]] = -pe[2]
+                 } return ee[-pe[31]] > -pe[2] && ee[-pe[91]].push((ee[pe[90]] | ee[-pe[31]] << ee[pe[22]]) & pe[12]), ze(ee[-pe[91]])
```

#### 99. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1194-L1283` → after: `L1061-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1061-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1061-L1063) · [Before (L1194-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1194-L1283)

```diff
-               function GB(...BB) {
-                 if (BB[ZB[13]] = ZB[2], BB[ZB[1]] >= ZB[48] && BB[ZB[1]] <= ZB[125]) {
-                   function OB(...BB) {
-                     for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = 'aRoGSkFbDAmUfpCWQEMIqlniVHdtTKOLeJcXNghjBPu2YZ(s)8:#[%0{&v`|9+~.;w17*/x?<>}6"$y_5z]^4,=3@!r', BB[ZB[68]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[68]].length, BB[ZB[26]] = [], BB[-ZB[8]] = ZB[1], BB[ZB[63]] = ZB[1], … [truncated]
-                       if (BB[ZB[69]] = BB[ZB[2]].indexOf(BB[ZB[68]][BB[ZB[11]]]), BB[ZB[69]] !== -ZB[2])
-                         if (BB[ZB[73]] < ZB[1]) BB[ZB[73]] = BB[ZB[69]];
-                         else {
-                           KB(BB[ZB[73]] += BB[ZB[69]] * ZB[26], BB[-ZB[8]] |= BB[ZB[73]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[73]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-                           do {
-                             KB(BB[ZB[26]].push(BB[-ZB[8]] & ZB[12]), BB[-ZB[8]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
-                           } while (BB[ZB[63]] > ZB[7]);
-                           BB[ZB[73]] = -ZB[2]
-                         } return BB[ZB[73]] > -ZB[2] && BB[ZB[26]].push((BB[-ZB[8]] | BB[ZB[73]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[26]])
-                   }
- 
-                   function GB(...BB) {
- ... (74 more removed lines; see GitHub link above)
+           function le(ee) {
+             return typeof Ue[ee] === pe[17] ? Ue[ee] = me(Fe[ee]) : Ue[ee]
+           }
```

#### 100. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1285-L1331` → after: `L1065-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1065-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1065-L1068) · [Before (L1285-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1285-L1331)

```diff
-                     function JB(...BB) {
-                       return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = oB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
-                     }
-                     throw Error(JB(184))
-                   }
-                 }
-                 if ((OB[-ZB[58]] & ZB[140]) == ZB[82] && (KB(OB[ZB[50]] = QB(), OB[ZB[19]] = QB(), OB[ZB[38]] = QB(), OB[ZB[37]] = (OB[-ZB[58]] & ZB[7]) << ZB[57] | OB[ZB[50]] << ZB[23] | OB[ZB[19]] << ZB[9] | OB[ZB[38]]), OB[ZB[37]] >= ZB[44] && OB[ZB[37]] <= ZB[141])) return OB … [truncated]
-                 throw Error(function(...BB) {
-                   return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
-                     for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = 'pAa6u8w]@Vv9.B5HxC;nh?}7zs(&my_^oDIeWMRlP"tX%!0+1q=4[N|)TEG~`U$/JQ>k*jKc2Y<FbZ#3gdrL,{f:OiS', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[10]] = [], BB[ZB[37]] = ZB[1], BB[-ZB[134]] = ZB[1 … [truncated]
-                       if (BB[ZB[35]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[35]] !== -ZB[2])
-                         if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[35]];
-                         else {
-                           KB(BB[ZB[36]] += BB[ZB[35]] * ZB[26], BB[ZB[37]] |= BB[ZB[36]] << BB[-ZB[134]], BB[-ZB[134]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-                           do {
-                             KB(BB[ZB[10]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[-ZB[134]] -= ZB[11])
- ... (31 more removed lines; see GitHub link above)
+           function Se(...ee) {
+             ee[pe[13]] = pe[1]
+           }
+           ie(172) + "p" in Be && Se(), ve *= ee[pe[0]][le(pe[96]) + le(181)]
```

#### 101. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1333-L1335` → after: `L1070-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1070-L1071) · [Before (L1333-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1333-L1335)

```diff
-         rB(ZB[133]) in WB && XB();
-         let wB = BB[ZB[14]][rB(189) + rB(190)] * lB;
-         if (!JB) {
+         let ue = ee[pe[0]][Le(182) + Le(pe[100]) + "ss"] * ke;
+         if (ke < .3) {
```

#### 102. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1337-L1339` → after: `L1073-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1073-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1073-L1075) · [Before (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1337-L1339)

```diff
-             for (KB(BB[ZB[13]] = ZB[2], BB[-ZB[42]] = 'rLesYAaBConHVMplgJifRIDdFKSQkN$P8=X;EjhWGqUO*):5T>Zm~c_t2}?.|z49v(u%y!{30@<#&b"],1[`^+xw76/', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[143]] = [], BB[ZB[32]] = ZB[1], BB[ZB[63]] = ZB[1], BB[- … [truncated]
-               if (BB[ZB[35]] = BB[-ZB[42]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[35]] !== -ZB[2])
-                 if (BB[-ZB[142]] < ZB[1]) BB[-ZB[142]] = BB[ZB[35]];
+             for (De(ee[pe[13]] = pe[2], ee[pe[5]] = ';.x[)9/#_w~Mb@JAeH:IV=rGBL`kD}s4|]+pQl*5YNXF8yovjuOqWa%d,S72&R{0^nT3<fKPCEg!$h>tUZz?(1i6m"c', ee[pe[19]] = "" + (ee[pe[1]] || ""), ee[pe[38]] = ee[pe[19]].length, ee[pe[10]] = [], ee[-pe[102]] = pe[1], ee[pe[52]] = pe[1], ee[pe … [truncated]
+               if (ee[pe[28]] = ee[pe[5]].indexOf(ee[pe[19]][ee[pe[11]]]), ee[pe[28]] !== -pe[2])
+                 if (ee[pe[42]] < pe[1]) ee[pe[42]] = ee[pe[28]];
```

#### 103. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1341` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1077) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1341)

```diff
-                   KB(BB[-ZB[142]] += BB[ZB[35]] * ZB[26], BB[ZB[32]] |= BB[-ZB[142]] << BB[ZB[63]], BB[ZB[63]] += (BB[-ZB[142]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
+                   De(ee[pe[42]] += ee[pe[28]] * pe[30], ee[-pe[102]] |= ee[pe[42]] << ee[pe[52]], ee[pe[52]] += (ee[pe[42]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
```

#### 104. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1343-L1346` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1079-L1082) · [Before (L1343-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1343-L1346)

```diff
-                     KB(BB[ZB[143]].push(BB[ZB[32]] & ZB[12]), BB[ZB[32]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
-                   } while (BB[ZB[63]] > ZB[7]);
-                   BB[-ZB[142]] = -ZB[2]
-                 } return BB[-ZB[142]] > -ZB[2] && BB[ZB[143]].push((BB[ZB[32]] | BB[-ZB[142]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[143]])
+                     De(ee[pe[10]].push(ee[-pe[102]] & pe[12]), ee[-pe[102]] >>= pe[11], ee[pe[52]] -= pe[11])
+                   } while (ee[pe[52]] > pe[7]);
+                   ee[pe[42]] = -pe[2]
+                 } return ee[pe[42]] > -pe[2] && ee[pe[10]].push((ee[-pe[102]] | ee[pe[42]] << ee[pe[52]]) & pe[12]), ze(ee[pe[10]])
```

#### 105. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1349-L1350` → after: `L1085-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1085-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1085-L1086) · [Before (L1349-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1349-L1350)

```diff
-           function hB(BB) {
-             return typeof jB[BB] === ZB[16] ? jB[BB] = cB(yB[BB]) : jB[BB]
+           function je(...ee) {
+             return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = ne(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
```

#### 106. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1354-L1370` → after: `L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1090) · [Before (L1354-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1354-L1370)

```diff
-             function OB(...BB) {
-               return BB[ZB[13]] = ZB[2], BB[ZB[1]][ZB[2]] * ZB[145] + (BB[ZB[1]][ZB[1]] < ZB[1] ? ZB[144] | BB[ZB[1]][ZB[1]] : BB[ZB[1]][ZB[1]])
-             }
- 
-             function GB(...BB) {
-               switch (BB[ZB[13]] = ZB[2], ((BB[ZB[1]] & ZB[144]) !== ZB[1]) * ZB[2] + (BB[ZB[1]] < ZB[1]) * ZB[14]) {
-                 case ZB[1]:
-                   return [BB[ZB[1]] % ZB[144], Math.trunc(BB[ZB[1]] / ZB[145])];
-                 case ZB[2]:
-                   return [BB[ZB[1]] % ZB[144] - ZB[144], Math.trunc(BB[ZB[1]] / ZB[145]) + ZB[2]];
-                 case ZB[14]:
-                   return [((BB[ZB[1]] + ZB[144]) % ZB[144] + ZB[144]) % ZB[144], Math.round(BB[ZB[1]] / ZB[145])];
-                 case ZB[4]:
-                   return [BB[ZB[1]] % ZB[144], Math.trunc(BB[ZB[1]] / ZB[145])]
-               }
-             }
- ... (1 more removed lines; see GitHub link above)
+             ee[pe[13]] = pe[1]
```

#### 107. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1372` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1092) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1372)

```diff
-           hB(191) in WB && aB(), wB *= BB[ZB[14]][hB(ZB[67]) + hB(193)]
+           je(184) + "I" in Be && se(), ue *= ke
```

#### 108. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1374-L1375` → after: `L1094-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1094-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1094-L1111) · [Before (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1374-L1375)

```diff
-         let EB = BB[ZB[14]][rB(ZB[132]) + rB(195) + "ss"] * zB;
-         if (zB < .3 && (EB *= zB), wB > EB) {
+         if (ve > ue) {
+           function Ie(...ee) {
+             for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'f"ReyQx$!A51#%^w)FiHdYEnBlXVpSr=&}0|7ZtbmjDhqUC2G8k<9O+aWPIgTvsc(*zKNLoJ~/?36.4,:>@];`{_[uM', ee[pe[19]] = "" + (ee[pe[1]] || ""), ee[pe[104]] = ee[pe[19]].length, ee[pe[10]] = [], ee[pe[103]] = pe[1], ee[pe[22]] = pe[1], ee[pe … [truncated]
+               if (ee[pe[64]] = ee[pe[5]].indexOf(ee[pe[19]][ee[pe[39]]]), ee[pe[64]] !== -pe[2])
+                 if (ee[pe[105]] < pe[1]) ee[pe[105]] = ee[pe[64]];
+                 else {
+                   De(ee[pe[105]] += ee[pe[64]] * pe[30], ee[pe[103]] |= ee[pe[105]] << ee[pe[22]], ee[pe[22]] += (ee[pe[105]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
+                   do {
+                     De(ee[pe[10]].push(ee[pe[103]] & pe[12]), ee[pe[103]] >>= pe[11], ee[pe[22]] -= pe[11])
+                   } while (ee[pe[22]] > pe[7]);
+                   ee[pe[105]] = -pe[2]
+                 } return ee[pe[105]] > -pe[2] && ee[pe[10]].push((ee[pe[103]] | ee[pe[105]] << ee[pe[22]]) & pe[12]), ze(ee[pe[10]])
+           }
+ 
+           function he(...ee) {
+             return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = Ie(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
+ ... (2 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1377-L1381` → after: `L1113-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1113-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1113-L1124) · [Before (L1377-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1377-L1381)

```diff
-             function OB() {}
-             BB[ZB[13]] = ZB[1], KB(BB[ZB[38]] = function(...BB) {
-               for (KB(BB[ZB[13]] = ZB[14], BB[ZB[5]] = ZB[1], BB[-ZB[104]] = ZB[1], BB[ZB[19]] = new OB(ZB[1]), BB[ZB[38]] = BB[ZB[19]], BB[ZB[9]] = BB[ZB[1]], BB[ZB[7]] = BB[ZB[2]]); BB[ZB[9]] !== ZB[94] || BB[ZB[7]] !== ZB[94];) KB(BB[-ZB[104]] = (BB[ZB[9]] ? BB[ZB[9]].val : ZB … [truncated]
-               return BB[ZB[5]] && (BB[ZB[38]].next = new OB(BB[ZB[5]])), BB[ZB[19]].next
-             }, console.log(BB[ZB[38]]))
+             De(ee[pe[13]] = pe[1], ee[pe[106]] = function(...ie) {
+               return ie[pe[13]] = pe[0], ee[pe[19]]({}, ie[pe[1]], ie[pe[2]])
+             }, ee[pe[19]] = function(...ie) {
+               if (De(ie[pe[13]] = pe[38], ie[pe[38]] = {}), ie[pe[1]][ie[pe[2]] + ie[pe[0]]] !== pe[18]) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]];
+               if (ie[pe[2]] === ie[pe[0]]) return pe[78];
+               for (ie[pe[19]] = pe[1]; ie[pe[19]] < ie[pe[2]].length; ie[pe[19]]++) ie[pe[38]][ie[pe[2]][ie[pe[19]]]] === pe[18] && (ie[pe[38]][ie[pe[2]][ie[pe[19]]]] = pe[1]), ie[pe[38]][ie[pe[0]][ie[pe[19]]]] === pe[18] && (ie[pe[38]][ie[pe[0]][ie[pe[19]]]] = pe[1]), De(ie[pe[3 … [truncated]
+               for (ie[pe[67]] in ie[pe[38]])
+                 if (ie[pe[38]][ie[pe[67]]] !== pe[1]) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[49], pe[49];
+               for (ie[pe[22]] = pe[2]; ie[pe[22]] < ie[pe[2]].length; ie[pe[22]]++)
+                 if (ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(pe[1], ie[pe[22]]), ie[pe[0]].substr(pe[1], ie[pe[22]])) && ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(ie[pe[22]]), ie[pe[0]].substr(ie[pe[22]])) || ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(pe[1], ie[pe[22]]), ie[pe[0]].substr( … [truncated]
+               return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[49], pe[49]
+             }, console.log(ee[pe[106]]))
```

#### 110. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1383` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1126) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1383)

```diff
-           rB(ZB[8]) + "P" in WB && eB(), wB = EB
+           he(185) + pe[52] in Be && Ne(), ve = ue
```

#### 111. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1385` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1128) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1385)

```diff
-         KB(DB()[rB(197)](MB, MB, wB), BB[ZB[10]][rB(ZB[143]) + rB(199)](MB))
+         De(be()[Le(pe[48])](oe, oe, ve), ee[pe[37]][Le(187) + Le(188)](oe))
```

#### 112. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1387` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1130) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1387)

```diff
-       BB[ZB[10]][OB(200) + ZB[147]] = BB[ZB[14]][OB(201) + OB(ZB[54]) + ZB[147]] * (JB ? YB : oB)
+       ee[pe[37]][ie(189) + pe[107]] = ee[pe[0]][ie(pe[98]) + ie(pe[54]) + pe[107]] * (Je ? ye : Ke)
```

#### 113. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1390` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1133) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1390)

```diff
-   38313: (BB, OB, GB) => {
+   38476: (ee, ie, He) => {
```

#### 114. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1392-L1393` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1135-L1136) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1392-L1393)

```diff
-       c: () => yB,
-       f: () => jB
+       d: () => Fe,
+       e: () => Ue
```

#### 115. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1395-L1396` → after: `L1138-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1138-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1138-L1139) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1395-L1396)

```diff
-     var YB = GB(38319),
-       DB = GB(1998);
+     var ye = He(38478),
+       be = He(1952);
```

#### 116. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1400` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1143) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1400)

```diff
-         Wy: 1,
+         XF: 1,
```

#### 117. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1445` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1188) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1445)

```diff
-         qB = PB ? lB : pB,
+         Te = Re ? qe : fe,
```

#### 118. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1449` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/252.js#L1192) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/252.js#L1449)

```diff
-       JB.friction = BB.standingFriction * ((null === zB ? OB.bloxd.getClientPredictedOption(GB, "airMomentumConservation") : zB.airMomentumConservation) ? RB : qB), yB.ticksToReachMaxIdleFriction > 0 && yB.ticksToReachMaxIdleFriction--
+       Je.friction = ee.standingFriction * ((null === ke ? ie.bloxd.getClientPredictedOption(He, "airMomentumConservation") : ke.airMomentumConservation) ? ze : Te), Fe.ticksToReachMaxIdleFriction > 0 && Fe.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L4)

```diff
-   40803: (BB, OB, GB) => {
+   40888: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L12-L15` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L12-L15) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L12-L15)

```diff
-     var YB = GB(4886),
-       DB = GB(37723),
-       QB = GB(9921),
-       oB = GB(3580);
+     var ye = He(4861),
+       be = He(37853),
+       Me = He(9952),
+       Ke = He(3473);
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L22)

```diff
-         console.warn(`Docs gallery: no default texture for ${yB.size} names`, [...yB]), yB.clear(), JB = null
+         console.warn(`Docs gallery: no default texture for ${Fe.size} names`, [...Fe]), Fe.clear(), Je = null
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L36)

```diff
-       const QB = DB.p[BB];
+       const Me = be.o[ee];
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L42)

```diff
-         return "string" === typeof(OB = yB && Array.isArray(jB) ? jB[yB[BB]] : jB) ? PB(OB, oB.h.BLOCK) : OB && "object" === typeof OB && "animTextures" in OB ? PB((0, YB.m)(OB), oB.h.BLOCK) : null;
+         return "string" === typeof(ie = Fe && Array.isArray(Ue) ? Ue[Fe[ee]] : Ue) ? Re(ie, Ke.j.BLOCK) : ie && "object" === typeof ie && "animTextures" in ie ? Re((0, ye.l)(ie), Ke.j.BLOCK) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L47-L48` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L47-L48) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L47-L48)

```diff
-         left: null !== (OB = JB(4)) && void 0 !== OB ? OB : MB,
-         right: null !== (GB = JB(0)) && void 0 !== GB ? GB : MB
+         left: null !== (ie = Je(4)) && void 0 !== ie ? ie : oe,
+         right: null !== (He = Je(0)) && void 0 !== He ? He : oe
```

#### 7. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L54-L55)

```diff
-       const GB = DB.p[BB];
-       return PB(null !== (OB = null === GB || void 0 === GB ? void 0 : GB.itemTexture) && void 0 !== OB ? OB : "string" === typeof(null === GB || void 0 === GB ? void 0 : GB.textureInfo) ? GB.textureInfo : BB, oB.h.ITEM)
+       const He = be.o[ee];
+       return Re(null !== (ie = null === He || void 0 === He ? void 0 : He.itemTexture) && void 0 !== ie ? ie : "string" === typeof(null === He || void 0 === He ? void 0 : He.textureInfo) ? He.textureInfo : ee, Ke.j.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L60-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L60-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L60-L64)

```diff
-       return DB.p[BB] ? null !== (OB = null === (GB = zB(BB)) || void 0 === GB ? void 0 : GB.top) && void 0 !== OB ? OB : lB(BB) : null
-     }
- 
-     function qB(BB) {
-       return PB(BB, oB.h.ICON)
+       return be.o[ee] ? null !== (ie = null === (He = ke(ee)) || void 0 === He ? void 0 : He.top) && void 0 !== ie ? ie : qe(ee) : null
+     }
+ 
+     function Te(ee) {
+       return Re(ee, Ke.j.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L69)

```diff
-         return GB(3730)(`./${BB}.png`)
+         return He(3636)(`./${ee}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L75)

```diff
-   37753: (BB, OB, GB) => {
+   37893: (ee, ie, He) => {
```

#### 11. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/253.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/253.js#L77)

```diff
-       c: () => YB
+       d: () => ye
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L4)

```diff
-   37782: (BB, OB, GB) => {
+   37920: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L7-L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L7-L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L7-L8)

```diff
-       c: () => YB,
-       d: () => DB
+       d: () => ye,
+       h: () => be
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L15)

```diff
-   37807: (BB, OB, GB) => {
+   37938: (ee, ie, He) => {
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L31)

```diff
-       return BB === OB ? BB : Math.random() * (OB - BB) + BB
+       return ee === ie ? ee : Math.random() * (ie - ee) + ee
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L116)

```diff
-       return YB = Math.abs(OB - BB) <= GB ? OB : BB + Math.sign(OB - BB) * GB, YB
+       return ye = Math.abs(ie - ee) <= He ? ie : ee + Math.sign(ie - ee) * He, ye
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L122)

```diff
-       return DB = -GB < YB && YB < GB ? OB : SB(BB, OB = BB + YB, GB), DB
+       return be = -He < ye && ye < He ? ie : Oe(ee, ie = ee + ye, He), be
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L135)

```diff
-       return 0 === GB ? OB : kB(OB, GB)
+       return 0 === He ? ie : Ze(ie, He)
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L164)

```diff
-   37771: (BB, OB, GB) => {
+   37913: (ee, ie, He) => {
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L166)

```diff
-       Matrix: () => YB.d,
+       Matrix: () => ye.b,
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L168-L177` → after: `L168-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L168-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L168-L177) · [Before (L168-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L168-L177)

```diff
-       RegisterMathVector: () => YB.j,
-       TmpVectors: () => YB.k,
-       Vector2: () => YB.o,
-       Xp: () => YB.r,
-       Vector4: () => YB.t
-     });
-     var YB = GB(37778);
-     (0, YB.j)()
-   },
-   37785: (BB, OB, GB) => {
+       RegisterMathVector: () => ye.h,
+       TmpVectors: () => ye.j,
+       Vector2: () => ye.n,
+       rf: () => ye.p,
+       Vector4: () => ye.s
+     });
+     var ye = He(37917);
+     (0, ye.h)()
+   },
+   37925: (ee, ie, He) => {
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L188-L190)

```diff
-       e: () => YB,
-       i: () => DB,
-       l: () => oB
+       c: () => ye,
+       g: () => be,
+       j: () => Ke
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L215)

```diff
-   37823: (BB, OB, GB) => {
+   37949: (ee, ie, He) => {
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/254.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/254.js#L218)

```diff
-       f: () => DB
+       e: () => be
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1)

```diff
- /*! For license information please see gw4e3a.255.68409c84.chunk.js.LICENSE.txt */
+ /*! For license information please see u88b9b.255.027c5759.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L5)

```diff
-   38964: BB => {
+   39102: ee => {
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L10-L13)

```diff
-   38946: (BB, OB, GB) => {
-     var YB = GB(38954),
-       DB = GB(38958),
-       QB = GB(38964);
+   39087: (ee, ie, He) => {
+     var ye = He(39089),
+       be = He(39095),
+       Me = He(39102);
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L135)

```diff
-   38954: (BB, OB) => {
+   39089: (ee, ie) => {
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L189)

```diff
-   38942: (BB, OB, GB) => {
+   39079: (ee, ie, He) => {
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L205-L207` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L205-L207) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L205-L207)

```diff
-     var YB, DB = GB(38946),
-       QB = GB(38972),
-       oB = GB(38980);
+     var ye, be = He(39087),
+       Me = He(39104),
+       Ke = He(39112);
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L252)

```diff
-   38988: (BB, OB) => {
+   39120: (ee, ie) => {
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L291)

```diff
-   38980: (BB, OB, GB) => {
+   39112: (ee, ie, He) => {
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L367-L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L367-L369) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L367-L369)

```diff
-     var YB = GB(38946),
-       DB = GB(38954),
-       QB = GB(38988),
+     var ye = He(39087),
+       be = He(39089),
+       Me = He(39120),
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L372-L374)

```diff
-       yB = GB(38972),
-       JB = GB(38996),
-       MB = GB(39e3),
+       Fe = He(39104),
+       Je = He(39123),
+       oe = He(39130),
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L400)

```diff
-       BB: for (var pB = DB, qB = DB * PB; pB < QB; ++pB, qB += PB) {
+       ee: for (var fe = be, Te = be * Re; fe < Me; ++fe, Te += Re) {
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L419)

```diff
-       BB: for (var lB = YB, pB = YB * MB; lB < DB; ++lB, pB += MB) {
+       ee: for (var qe = ye, fe = ye * oe; qe < be; ++qe, fe += oe) {
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L438)

```diff
-   38996: (BB, OB, GB) => {
+   39123: (ee, ie, He) => {
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L481)

```diff
-     var YB = GB(39e3)("lo<p0", ["p0"]),
+     var ye = He(39130)("lo<p0", ["p0"]),
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L496)

```diff
-   39e3: BB => {
+   39130: ee => {
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L506)

```diff
-   38975: BB => {
+   39106: ee => {
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L595)

```diff
-   38972: (BB, OB, GB) => {
+   39104: (ee, ie, He) => {
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L689)

```diff
-         YB ? UB = oB : nB = oB;
+         ye ? We = Ke : de = Ke;
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L713)

```diff
-               BB: for (var XB = 0; XB < mB; ++XB) {
+               ee: for (var Ce = 0; Ce < Ae; ++Ce) {
```

#### 20. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L750)

```diff
-               BB: for (var mB = 0; mB < UB; ++mB) {
+               ee: for (var Ae = 0; Ae < We; ++Ae) {
```

#### 21. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L773-L775` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L773-L775) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L773-L775)

```diff
-     var YB = GB(38946),
-       DB = GB(38954),
-       QB = GB(38975),
+     var ye = He(39087),
+       be = He(39089),
+       Me = He(39106),
```

#### 22. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L796)

```diff
-   38958: BB => {
+   39095: ee => {
```

#### 23. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L822)

```diff
-   38909: (BB, OB, GB) => {
+   39049: (ee, ie, He) => {
```

#### 24. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L841-L843)

```diff
-         oB && (QB.remove(BB), YB.Qm && (YB.multi ? (oB.forEach((OB => {
-           OB && YB.Qm(BB, OB)
-         })), oB.length = 0) : YB.Qm(BB, oB)), jB.removals.push(QB), JB())
+         Ke && (Me.remove(ee), ye.JV && (ye.multi ? (Ke.forEach((ie => {
+           ie && ye.JV(ee, ie)
+         })), Ke.length = 0) : ye.JV(ee, Ke)), Ue.removals.push(Me), Je())
```

#### 25. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L874)

```diff
-       this.Vq = DB, this._systems = QB, this._renderSystems = oB, this.A4 = function(OB) {
+       this.aT = be, this._systems = Me, this._renderSystems = Ke, this.b_ = function(ie) {
```

#### 26. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L876)

```diff
-         return Array.isArray(OB) && OB.forEach((OB => BB.RL(YB, OB))), YB
+         return Array.isArray(ie) && ie.forEach((ie => ee.uL(ye, ie))), ye
```

#### 27. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L881)

```diff
-       }, this.jYB = function(BB) {
+       }, this.Pye = function(ee) {
```

#### 28. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L887)

```diff
-         if (DB[GB]) throw new Error(`Component ${GB} already exists.`);
+         if (be[He]) throw new Error(`Component ${He} already exists.`);
```

#### 29. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L889)

```diff
-         return jB.name = GB, jB.multi = !!BB.multi, jB.order = isNaN(BB.order) ? 99 : BB.order, jB.stateConstructor = BB.stateConstructor || null, jB.state = BB.state || {}, jB.OW = BB.OW || null, jB.Qm = BB.Qm || null, jB.system = BB.system || null, jB.oW = BB.oW || null, OB[GB] … [truncated]
+         return Ue.name = He, Ue.multi = !!ee.multi, Ue.order = isNaN(ee.order) ? 99 : ee.order, Ue.stateConstructor = ee.stateConstructor || null, Ue.state = ee.state || {}, Ue.lE = ee.lE || null, Ue.JV = ee.JV || null, Ue.system = ee.system || null, Ue.QE = ee.QE || null, ie[He] … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L892)

```diff
-         if (!YB) throw new Error(`Unknown component: ${BB}`);
+         if (!ye) throw new Error(`Unknown component: ${ee}`);
```

#### 31. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L896)

```diff
-         jB.name = BB, jB.multi = !!GB.multi, jB.order = isNaN(GB.order) ? 99 : GB.order, jB.state = GB.state || {}, jB.OW = GB.OW || null, jB.Qm = GB.Qm || null, jB.system = GB.system || null, jB.oW = GB.oW || null, OB[BB] = jB, DB[BB]._pendingMultiCleanup = !1, DB[BB]._multiClea … [truncated]
+         Ue.name = ee, Ue.multi = !!He.multi, Ue.order = isNaN(He.order) ? 99 : He.order, Ue.state = He.state || {}, Ue.lE = He.lE || null, Ue.JV = He.JV || null, Ue.system = He.system || null, Ue.QE = He.QE || null, ie[ee] = Ue, be[ee]._pendingMultiCleanup = !1, be[ee]._multiClea … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L900)

```diff
-         jB.oW && JB < 0 && oB.push(BB), !jB.oW && JB >= 0 && oB.splice(JB, 1), oB.sort(((BB, GB) => OB[BB].order - OB[GB].order));
+         Ue.QE && Je < 0 && Ke.push(ee), !Ue.QE && Je >= 0 && Ke.splice(Je, 1), Ke.sort(((ee, He) => ie[ee].order - ie[He].order));
```

#### 33. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L902)

```diff
-         return this.lL(BB).forEach((BB => {
+         return this.YL(ee).forEach((ee => {
```

#### 34. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L904)

```diff
-           jB.OW && jB.OW(BB.qL, BB)
+           Ue.lE && Ue.lE(ee.cL, ee)
```

#### 35. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L908)

```diff
-         if (!YB) throw new Error(`Unknown component: ${GB}`);
+         if (!ye) throw new Error(`Unknown component: ${He}`);
```

#### 36. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L910)

```diff
-           BB && yB(BB.qL || BB[0].qL, GB)
+           ee && Fe(ee.cL || ee[0].cL, He)
```

#### 37. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L915)

```diff
-       }, this.RL = function(BB, GB, YB) {
+       }, this.uL = function(ee, He, ye) {
```

#### 38. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L918-L919` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L918-L919) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L918-L919)

```diff
-         if (!jB) throw new Error(`Unknown component: ${GB}.`);
-         if (jB.hash[BB] && !oB.multi) throw new Error(`Entity ${BB} already has component: ${GB}.`);
+         if (!Ue) throw new Error(`Unknown component: ${He}.`);
+         if (Ue.hash[ee] && !Ke.multi) throw new Error(`Entity ${ee} already has component: ${He}.`);
```

#### 39. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L921)

```diff
-           if (!(QB = new oB.stateConstructor).hasOwnProperty("qL")) throw new Error(`Component ${oB.name} stateConstructor type does not have property __id`);
+           if (!(Me = new Ke.stateConstructor).hasOwnProperty("cL")) throw new Error(`Component ${Ke.name} stateConstructor type does not have property __id`);
```

#### 40. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L924)

```diff
-           qL: BB,
+           cL: ee,
```

#### 41. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L928)

```diff
-         if (QB.qL = BB, oB.multi) {
+         if (Me.cL = ee, Ke.multi) {
```

#### 42. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L932-L933` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L932-L933) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L932-L933)

```diff
-         return oB.OW && oB.OW(BB, QB), this
-       }, this.YGB = function(BB, OB) {
+         return Ke.lE && Ke.lE(ee, Me), this
+       }, this.gHe = function(ee, ie) {
```

#### 43. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L935)

```diff
-         if (!GB) throw new Error(`Unknown component: ${OB}.`);
+         if (!He) throw new Error(`Unknown component: ${ie}.`);
```

#### 44. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L937-L938)

```diff
-       }, this.dL = function(OB, GB) {
-         if (!DB[GB]) throw new Error(`Unknown component: ${GB}.`);
+       }, this.lL = function(ie, He) {
+         if (!be[He]) throw new Error(`Unknown component: ${He}.`);
```

#### 45. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L942)

```diff
-         if (!GB) throw new Error(`Unknown component: ${OB}.`);
+         if (!He) throw new Error(`Unknown component: ${ie}.`);
```

#### 46. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L944)

```diff
-       }, this.lL = function(BB) {
+       }, this.YL = function(ee) {
```

#### 47. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L946)

```diff
-         if (!OB) throw new Error(`Unknown component: ${BB}.`);
+         if (!ie) throw new Error(`Unknown component: ${ee}.`);
```

#### 48. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L948-L949)

```diff
-       }, this.wGB = function(BB) {
-         if (!DB[BB]) throw new Error(`Unknown component: ${BB}.`);
+       }, this.Kye = function(ee) {
+         if (!be[ee]) throw new Error(`Unknown component: ${ee}.`);
```

#### 49. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L952-L953)

```diff
-       }, this.TGB = function(BB) {
-         if (!DB[BB]) throw new Error(`Unknown component: ${BB}.`);
+       }, this.kye = function(ee) {
+         if (!be[ee]) throw new Error(`Unknown component: ${ee}.`);
```

#### 50. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L956)

```diff
-       }, this.kP = function(GB) {
+       }, this.YR = function(He) {
```

#### 51. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L971)

```diff
-           jB.oW(GB, yB.list), PB()
+           Ue.QE(He, Fe.list), Re()
```

#### 52. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L977)

```diff
-         if (!yB) throw new Error(`Unknown component: ${YB}.`);
+         if (!Fe) throw new Error(`Unknown component: ${ye}.`);
```

#### 53. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L983)

```diff
-             QB && (DB[YB] = null, OB.Qm && OB.Qm(BB, QB), jB.multiComps.push({
+             Me && (be[ye] = null, ie.JV && ie.JV(ee, Me), Ue.multiComps.push({
```

#### 54. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L991)

```diff
-     var YB = GB(38916)
+     var ye = He(39053)
```

#### 55. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L993)

```diff
-   38916: BB => {
+   39053: ee => {
```

#### 56. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1030)

```diff
-   38722: (BB, OB, GB) => {
+   38886: (ee, ie, He) => {
```

#### 57. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1121)

```diff
-         return BB ? "Symbol(src)_1." + BB : ""
+         return ee ? "Symbol(src)_1." + ee : ""
```

#### 58. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1127)

```diff
-       DO = EB ? rB.BP : void 0,
+       bi = ue ? Le.bR : void 0,
```

#### 59. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1237` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1237) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1237)

```diff
-           if (eB(BB)) return lB ? BB : {};
+           if (ne(ee)) return qe ? ee : {};
```

#### 60. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1247)

```diff
-           if (!iB[LB]) return lB ? BB : {};
+           if (!ae[ce]) return qe ? ee : {};
```

#### 61. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1251)

```diff
-               case WB:
+               case Be:
```

#### 62. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1253-L1254` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1253-L1254) · [Before (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1253-L1254)

```diff
-               case oB:
-               case jB:
+               case Ke:
+               case Ue:
```

#### 63. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1256)

```diff
-               case AB:
+               case Ee:
```

#### 64. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1261-L1269` → after: `L1261-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1261-L1269) · [Before (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1261-L1269)

```diff
-               case VB:
-               case SB:
-               case nB:
-               case UB:
-               case fB:
-               case kB:
-               case dB:
-               case KB:
-               case uB:
+               case ge:
+               case Oe:
+               case de:
+               case We:
+               case te:
+               case Ze:
+               case we:
+               case De:
+               case Pe:
```

#### 65. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1274)

```diff
-               case MB:
+               case oe:
```

#### 66. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1279-L1280` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1279-L1280) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1279-L1280)

```diff
-               case PB:
-               case ZB:
+               case Re:
+               case pe:
```

#### 67. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1282)

```diff
-               case pB:
+               case fe:
```

#### 68. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1287)

```diff
-               case qB:
+               case Te:
```

#### 69. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1292)

```diff
-               case NB:
+               case Xe:
```

#### 70. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1305)

```diff
-           return CO(BB) ? YB : function(BB, OB) {
+           return Ni(ee) ? ye : function(ee, ie) {
```

#### 71. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1319)

```diff
-       return !(!xO(BB) || (OB = BB, tB && tB in OB)) && (sO(BB) || eB(BB) ? YO : IB).test(TO(BB));
+       return !(!eH(ee) || (ie = ee, Qe && Qe in ie)) && (Qi(ee) || ne(ee) ? yi : Ye).test(si(ee));
```

#### 72. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1342)

```diff
-         return "string" == OB || "number" == OB || "symbol" == OB || "boolean" == OB ? "__proto__" !== BB : null === BB
+         return "string" == ie || "number" == ie || "symbol" == ie || "boolean" == ie ? "__proto__" !== ee : null === ee
```

#### 73. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1350)

```diff
-       return gO(GB) ? GB : void 0
+       return Li(He) ? He : void 0
```

#### 74. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1367)

```diff
-       return this.__data__[BB] = WO && void 0 === OB ? YB : OB, this
+       return this.__data__[ee] = Ei && void 0 === ie ? ye : ie, this
```

#### 75. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1423)

```diff
-       return !!(OB = null == OB ? DB : OB) && ("number" == typeof BB || FB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < OB
+       return !!(ie = null == ie ? be : ie) && ("number" == typeof ee || Ve.test(ee)) && ee > -1 && ee % 1 == 0 && ee < ie
```

#### 76. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1450)

```diff
-         case AO:
+         case gi:
```

#### 77. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1452)

```diff
-         case VO:
+         case Oi:
```

#### 78. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1454)

```diff
-         case SO:
+         case di:
```

#### 79. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1456)

```diff
-         case nO:
+         case Wi:
```

#### 80. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1458)

```diff
-         case UO:
+         case ti:
```

#### 81. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1496)

```diff
-   39106: BB => {
+   39240: ee => {
```

#### 82. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1520-L1521` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1520-L1521) · [Before (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1520-L1521)

```diff
-   38383: (BB, OB, GB) => {
-     var YB = GB(38392);
+   38543: (ee, ie, He) => {
+     var ye = He(38552);
```

#### 83. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1553)

```diff
-   38392: (BB, OB) => {
+   38552: (ee, ie) => {
```

#### 84. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1607)

```diff
-   37885: (BB, OB, GB) => {
+   38020: (ee, ie, He) => {
```

#### 85. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1612-L1613)

```diff
-     var YB = GB(37894);
-     (0, YB.k)()
+     var ye = He(38022);
+     (0, ye.h)()
```

#### 86. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1615)

```diff
-   38424: (BB, OB, GB) => {
+   38581: (ee, ie, He) => {
```

#### 87. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1617)

```diff
-       b: () => DB
+       e: () => be
```

#### 88. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1619` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1619) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1619)

```diff
-     var YB = GB(38432);
+     var ye = He(38590);
```

#### 89. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1660)

```diff
-   38432: (BB, OB, GB) => {
+   38590: (ee, ie, He) => {
```

#### 90. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1664)

```diff
-     var YB = GB(37778);
+     var ye = He(37917);
```

#### 91. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1667)

```diff
-         this.normal = new YB.r(BB, OB, GB), this.d = DB
+         this.normal = new ye.p(ee, ie, He), this.d = be
```

#### 92. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1669)

```diff
-       dDB() {
+       Qbe() {
```

#### 93. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1716)

```diff
-         return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
+         return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
```

#### 94. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1719)

```diff
-         return YB.r.Dot(this.normal, BB) <= OB
+         return ye.p.Dot(this.normal, ee) <= ie
```

#### 95. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1722)

```diff
-         return YB.r.Dot(BB, this.normal) + this.d
+         return ye.p.Dot(ee, this.normal) + this.d
```

#### 96. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1736)

```diff
-         return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
+         return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
```

#### 97. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1740)

```diff
-         return YB.r.Dot(GB, OB) + DB
+         return ye.p.Dot(He, ie) + be
```

#### 98. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1743)

```diff
-     DB._TmpMatrix = YB.d.Identity()
+     be._TmpMatrix = ye.b.Identity()
```

#### 99. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1745)

```diff
-   37771: (BB, OB, GB) => {
+   37913: (ee, ie, He) => {
```

#### 100. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1747` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1747) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1747)

```diff
-       Matrix: () => YB.d,
+       Matrix: () => ye.b,
```

#### 101. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1749-L1753` → after: `L1749-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1749-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1749-L1753) · [Before (L1749-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1749-L1753)

```diff
-       RegisterMathVector: () => YB.j,
-       TmpVectors: () => YB.k,
-       Vector2: () => YB.o,
-       Xp: () => YB.r,
-       Vector4: () => YB.t
+       RegisterMathVector: () => ye.h,
+       TmpVectors: () => ye.j,
+       Vector2: () => ye.n,
+       rf: () => ye.p,
+       Vector4: () => ye.s
```

#### 102. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1755-L1756` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1755-L1756) · [Before (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1755-L1756)

```diff
-     var YB = GB(37778);
-     (0, YB.j)()
+     var ye = He(37917);
+     (0, ye.h)()
```

#### 103. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1758)

```diff
-   38769: (BB, OB, GB) => {
+   38919: (ee, ie, He) => {
```

#### 104. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1760)

```diff
-       c: () => YB
+       d: () => ye
```

#### 105. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1777)

```diff
-   38589: (BB, OB, GB) => {
+   38745: (ee, ie, He) => {
```

#### 106. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1781)

```diff
-         return ("x" === BB ? OB : 3 & OB | 8).toString(16)
+         return ("x" === ee ? ie : 3 & ie | 8).toString(16)
```

#### 107. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/255.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/255.js#L1785)

```diff
-       e: () => YB
+       d: () => ye
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   41237: (BB, OB, GB) => {
+   41350: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L7)

```diff
-       e: () => jB
+       f: () => Ue
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L9-L11)

```diff
-     var YB = GB(39366),
-       DB = GB(41022),
-       QB = GB(41217),
+     var ye = He(39467),
+       be = He(41141),
+       Me = He(41320),
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L19)

```diff
-         this.attached[OB] ? YB.b.Warn("camera input of type " + OB + " already exists on camera") : (this.attached[OB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(t … [truncated]
+         this.attached[ie] ? ye.e.Warn("camera input of type " + ie + " already exists on camera") : (this.attached[ie] = ee, ee.camera = this.camera, ee.checkInputs && (this.checkInputs = this._addCheckInputs(ee.checkInputs.bind(ee))), this.attachedToElement && ee.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L45)

```diff
-           BB = !QB.e.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
+           ee = !Me.d.ForceAttachControlToAlwaysPreventDefault && ee, this.attachedToElement = !0, this.noPreventDefault = ee;
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L68)

```diff
-             YB = DB.d.Serialize(BB);
+             ye = be.c.Serialize(ee);
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L81)

```diff
-                 QB = DB.d.Parse((() => new GB), YB, null);
+                 Me = be.c.Parse((() => new He), ye, null);
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L89)

```diff
-               const YB = DB.d.Parse((() => new OB), BB, null);
+               const ye = be.c.Parse((() => new ie), ee, null);
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L96)

```diff
-   41246: (BB, OB, GB) => {
+   41357: (ee, ie, He) => {
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L98)

```diff
-       d: () => YB.c
+       c: () => ye.d
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L100-L101)

```diff
-     var YB = GB(41248);
-     (0, YB.d)()
+     var ye = He(41366);
+     (0, ye.f)()
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L103)

```diff
-   41248: (BB, OB, GB) => {
+   41366: (ee, ie, He) => {
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L105-L106)

```diff
-       c: () => MB,
-       d: () => zB
+       d: () => oe,
+       f: () => ke
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L108-L114` → after: `L108-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L108-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L108-L114) · [Before (L108-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L108-L114)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37778),
-       oB = GB(37894),
-       jB = GB(41250),
-       yB = GB(41220),
-       JB = GB(37823);
+     var ye = He(41113),
+       be = He(41121),
+       Me = He(37917),
+       Ke = He(38022),
+       Ue = He(41374),
+       Fe = He(41323),
+       Je = He(37949);
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L117)

```diff
-         let OB, GB, yB = jB.d,
+         let ie, He, Fe = Ue.e,
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L124)

```diff
-             super(BB, GB, DB), this.groundColor = (0, YB.j)(this, JB, new oB.c(0, 0, 0)), this.direction = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, void 0)), (0, YB.j)(this, zB), this.direction = OB || QB.r.Up()
+             super(ee, He, be), this.groundColor = (0, ye.l)(this, Je, new Ke.c(0, 0, 0)), this.direction = ((0, ye.l)(this, oe), (0, ye.l)(this, Re, void 0)), (0, ye.l)(this, ke), this.direction = ie || Me.p.Up()
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L133)

```diff
-             return this.direction = QB.r.Normalize(BB.subtract(QB.r.Zero())), this.direction
+             return this.direction = Me.p.Normalize(ee.subtract(Me.p.Zero())), this.direction
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L139)

```diff
-             const GB = QB.r.Normalize(this.direction);
+             const He = Me.p.Normalize(this.direction);
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L143)

```diff
-             const GB = QB.r.Normalize(this.direction);
+             const He = Me.p.Normalize(this.direction);
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L147)

```diff
-             return this._worldMatrix || (this._worldMatrix = QB.d.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = Me.b.Identity()), this._worldMatrix
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L150)

```diff
-             return jB.d.LIGHTTYPEID_HEMISPHERICLIGHT
+             return Ue.e.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L157)

```diff
-           OB = [(0, DB.n)()], GB = [(0, DB.H)()], (0, YB.h)(null, null, OB, {
+           ie = [(0, be.p)()], He = [(0, be.P)()], (0, ye.i)(null, null, ie, {
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L170)

```diff
-           }, JB, MB), (0, YB.h)(null, null, GB, {
+           }, Je, oe), (0, ye.i)(null, null, He, {
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L194)

```diff
-       PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_3", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.HemisphericLight", MB))
+       Re || (Re = !0, Fe.d.AddNodeConstructor("Light_Type_3", ((ee, ie) => () => new oe(ee, Me.p.Zero(), ie))), (0, Je.e)("BABYLON.HemisphericLight", oe))
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L197)

```diff
-   37885: (BB, OB, GB) => {
+   38020: (ee, ie, He) => {
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L202-L203` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L202-L203) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L202-L203)

```diff
-     var YB = GB(37894);
-     (0, YB.k)()
+     var ye = He(38022);
+     (0, ye.h)()
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L205)

```diff
-   38424: (BB, OB, GB) => {
+   38581: (ee, ie, He) => {
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L207)

```diff
-       b: () => DB
+       e: () => be
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L209)

```diff
-     var YB = GB(38432);
+     var ye = He(38590);
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L250)

```diff
-   38432: (BB, OB, GB) => {
+   38590: (ee, ie, He) => {
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L254)

```diff
-     var YB = GB(37778);
+     var ye = He(37917);
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L257)

```diff
-         this.normal = new YB.r(BB, OB, GB), this.d = DB
+         this.normal = new ye.p(ee, ie, He), this.d = be
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L259)

```diff
-       dDB() {
+       Qbe() {
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L306)

```diff
-         return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
+         return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L309)

```diff
-         return YB.r.Dot(this.normal, BB) <= OB
+         return ye.p.Dot(this.normal, ee) <= ie
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L312)

```diff
-         return YB.r.Dot(BB, this.normal) + this.d
+         return ye.p.Dot(ee, this.normal) + this.d
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L326)

```diff
-         return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
+         return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L330)

```diff
-         return YB.r.Dot(GB, OB) + DB
+         return ye.p.Dot(He, ie) + be
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L333)

```diff
-     DB._TmpMatrix = YB.d.Identity()
+     be._TmpMatrix = ye.b.Identity()
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L335)

```diff
-   37771: (BB, OB, GB) => {
+   37913: (ee, ie, He) => {
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L337)

```diff
-       Matrix: () => YB.d,
+       Matrix: () => ye.b,
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L339-L343` → after: `L339-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L339-L343) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L339-L343)

```diff
-       RegisterMathVector: () => YB.j,
-       TmpVectors: () => YB.k,
-       Vector2: () => YB.o,
-       Xp: () => YB.r,
-       Vector4: () => YB.t
+       RegisterMathVector: () => ye.h,
+       TmpVectors: () => ye.j,
+       Vector2: () => ye.n,
+       rf: () => ye.p,
+       Vector4: () => ye.s
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L345-L346` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L345-L346) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L345-L346)

```diff
-     var YB = GB(37778);
-     (0, YB.j)()
+     var ye = He(37917);
+     (0, ye.h)()
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L348)

```diff
-   38769: (BB, OB, GB) => {
+   38919: (ee, ie, He) => {
```

#### 45. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L350)

```diff
-       c: () => YB
+       d: () => ye
```

#### 46. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L367)

```diff
-   41406: (BB, OB, GB) => {
+   41520: (ee, ie, He) => {
```

#### 47. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L369)

```diff
-       d: () => JB
+       e: () => Je
```

#### 48. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L371-L375` → after: `L371-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L371-L375) · [Before (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L371-L375)

```diff
-     var YB = GB(37778),
-       DB = GB(37894),
-       QB = GB(41411),
-       oB = GB(41423),
-       jB = GB(41436);
+     var ye = He(37917),
+       be = He(38022),
+       Me = He(41524),
+       Ke = He(41535),
+       Ue = He(41550);
```

#### 49. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L417)

```diff
-       for (let oB = 0; oB < 6; oB++) void 0 === AB[oB] && (AB[oB] = new YB.t(0, 0, 1, 1)), VB && void 0 === VB[oB] && (VB[oB] = new DB.g(1, 1, 1, 1));
+       for (let Ke = 0; Ke < 6; Ke++) void 0 === Ee[Ke] && (Ee[Ke] = new ye.s(0, 0, 1, 1)), ge && void 0 === ge[Ke] && (ge[Ke] = new be.g(1, 1, 1, 1));
```

#### 50. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L419)

```diff
-         if (QB.push(AB[YB].z, jB.e ? 1 - AB[YB].w : AB[YB].w), QB.push(AB[YB].x, jB.e ? 1 - AB[YB].w : AB[YB].w), QB.push(AB[YB].x, jB.e ? 1 - AB[YB].y : AB[YB].y), QB.push(AB[YB].z, jB.e ? 1 - AB[YB].y : AB[YB].y), VB)
+         if (Me.push(Ee[ye].z, Ue.c ? 1 - Ee[ye].w : Ee[ye].w), Me.push(Ee[ye].x, Ue.c ? 1 - Ee[ye].w : Ee[ye].w), Me.push(Ee[ye].x, Ue.c ? 1 - Ee[ye].y : Ee[ye].y), Me.push(Ee[ye].z, Ue.c ? 1 - Ee[ye].y : Ee[ye].y), ge)
```

#### 51. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L433-L434` → after: `L433-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L433-L434) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L433-L434)

```diff
-       const YB = new QB.c(BB, GB);
-       OB.sideOrientation = QB.c._GetDefaultSideOrientation(OB.sideOrientation), YB._originalBuilderSideOrientation = OB.sideOrientation;
+       const ye = new Me.b(ee, He);
+       ie.sideOrientation = Me.b._GetDefaultSideOrientation(ie.sideOrientation), ye._originalBuilderSideOrientation = ie.sideOrientation;
```

#### 52. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L438)

```diff
-     MB || (MB = !0, oB.e.CreateBox = yB, QB.c.CreateBox = function(BB, OB) {
+     oe || (oe = !0, Ke.e.CreateBox = Fe, Me.b.CreateBox = function(ee, ie) {
```

#### 53. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L446)

```diff
-   41452: (BB, OB, GB) => {
+   41573: (ee, ie, He) => {
```

#### 54. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L448)

```diff
-       d: () => PB
+       c: () => Re
```

#### 55. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L450-L455` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L450-L455) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L450-L455)

```diff
-     var YB = GB(37778),
-       DB = GB(41411),
-       QB = GB(41423),
-       oB = GB(41457),
-       jB = GB(41150),
-       yB = GB(39366);
+     var ye = He(37917),
+       be = He(41524),
+       Me = He(41535),
+       Ke = He(41575),
+       Ue = He(41247),
+       Fe = He(39467);
```

#### 56. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L496)

```diff
-         JB = YB.r.Zero();
+         Je = ye.p.Zero();
```

#### 57. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L553)

```diff
-           const OB = YB.r.Zero(),
+           const ie = ye.p.Zero(),
```

#### 58. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L565)

```diff
-         return (OB.dashNb || OB.dashSize || OB.gapSize || OB.useVertexAlpha || OB.material) && yB.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), jB.updateMeshPositions(BB, !1), jB
+         return (ie.dashNb || ie.dashSize || ie.gapSize || ie.useVertexAlpha || ie.material) && Fe.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Ue.updateMeshPositions(ee, !1), Ue
```

#### 59. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L568)

```diff
-       return MB(OB).applyToMesh(zB, OB.updatable), zB._creationDataStorage = new DB.j, zB._creationDataStorage.dashSize = PB, zB._creationDataStorage.gapSize = JB, zB
+       return oe(ie).applyToMesh(ke, ie.updatable), ke._creationDataStorage = new be.f, ke._creationDataStorage.dashSize = Re, ke._creationDataStorage.gapSize = Je, ke
```

#### 60. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L571)

```diff
-     pB || (pB = !0, QB.e.CreateLineSystem = JB, QB.e.CreateDashedLines = MB, DB.c.CreateLines = function(BB, OB) {
+     fe || (fe = !0, Me.e.CreateLineSystem = Je, Me.e.CreateDashedLines = oe, be.b.CreateLines = function(ee, ie) {
```

#### 61. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L577)

```diff
-     }, DB.c.CreateDashedLines = function(BB, OB, GB, YB, DB) {
+     }, be.b.CreateDashedLines = function(ee, ie, He, ye, be) {
```

#### 62. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L588)

```diff
-   41457: (BB, OB, GB) => {
+   41575: (ee, ie, He) => {
```

#### 63. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L591)

```diff
-       c: () => qB
+       d: () => Te
```

#### 64. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L593-L600` → after: `L593-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L593-L600) · [Before (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L593-L600)

```diff
-     var YB, DB, QB = GB(37894),
-       oB = GB(41150),
-       jB = GB(41411),
-       yB = GB(41462),
-       JB = GB(41283),
-       MB = GB(41468),
-       PB = GB(40890);
-     class zB extends jB.c {
+     var ye, be, Me = He(38022),
+       Ke = He(41247),
+       Ue = He(41524),
+       Fe = He(41581),
+       Je = He(41414),
+       oe = He(41585),
+       Re = He(40985);
+     class ke extends Ue.b {
```

#### 65. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L620-L621)

```diff
-           this.JF().Lp().isWebGPU && !zB.ForceGLSL && (this._shaderLanguage = 1), yB.shaderLanguage = this._shaderLanguage, yB.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([GB.e(653).then((() => GB(45702))), GB.e(659).then((() => GB(45705)))]) : await Promise.all([GB.e(635).then((() => GB(45713))), GB.e(641).then((() => GB(45721)))])
+           this.Xx().Nf().isWebGPU && !ke.ForceGLSL && (this._shaderLanguage = 1), Fe.shaderLanguage = this._shaderLanguage, Fe.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([He.e(653).then((() => He(45770))), He.e(659).then((() => He(45772)))]) : await Promise.all([He.e(635).then((() => He(45780))), He.e(641).then((() => He(45785)))])
```

#### 66. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L623)

```diff
-           const BB = new MB.k("colorShader", this.JF(), "color", yB, !1);
+           const ee = new oe.o("colorShader", this.Xx(), "color", Fe, !1);
```

#### 67. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L640)

```diff
-         this._setMaterial(BB), this.material && (this.material.fillMode = JB.b.LineListDrawMode, this.material.disableLighting = !0)
+         this._setMaterial(ee), this.material && (this.material.fillMode = Je.e.LineListDrawMode, this.material.disableLighting = !0)
```

#### 68. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L661-L662` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L661-L662) · [Before (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L661-L662)

```diff
-         const YB = this.JF().Lp();
-         return this._unIndexed ? YB.drawArraysType(JB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, GB) : YB.drawElementsType(JB.b.LineListDrawMode, BB.indexStart, BB.indexCount, GB), this
+         const ye = this.Xx().Nf();
+         return this._unIndexed ? ye.drawArraysType(Je.e.LineListDrawMode, ee.verticesStart, ee.verticesCount, He) : ye.drawElementsType(Je.e.LineListDrawMode, ee.indexStart, ee.indexCount, He), this
```

#### 69. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L673)

```diff
-           return GB.source = this, new zB(BB, this.JF(), GB.parent, GB.source, GB.doNotCloneChildren)
+           return He.source = this, new ke(ee, this.Xx(), He.parent, He.source, He.doNotCloneChildren)
```

#### 70. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L675` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L675) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L675)

```diff
-         return new zB(BB, this.JF(), OB, this, GB)
+         return new ke(ee, this.Xx(), ie, this, He)
```

#### 71. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L679-L681` → after: `L679-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L679-L681) · [Before (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L679-L681)

```diff
-         if (this.yX) {
-           OB.yX = {};
-           for (const BB in this.yX) OB.yX[BB] = this.yX[BB]
+         if (this.pC) {
+           ie.pC = {};
+           for (const ee in this.pC) ie.pC[ee] = this.pC[ee]
```

#### 72. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L686)

```diff
-         super.serialize(BB), BB.color = this.color.dDB(), BB.alpha = this.alpha
+         super.serialize(ee), ee.color = this.color.Qbe(), ee.alpha = this.alpha
```

#### 73. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L694)

```diff
-     class lB extends yB.b {
+     class qe extends Fe.c {
```

#### 74. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L705-L706` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L705-L706) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L705-L706)

```diff
-       pB || (pB = !0, jB.c._LinesMeshParser = (BB, OB) => zB.Parse(BB, OB))
-     }(YB = zB.prototype).enableEdgesRendering ?? (YB.enableEdgesRendering = (0, PB.g)("LinesMesh", "enableEdgesRendering")), (DB = lB.prototype).enableEdgesRendering ?? (DB.enableEdgesRendering = (0, PB.g)("InstancedLinesMesh", "enableEdgesRendering"))
+       fe || (fe = !0, Ue.b._LinesMeshParser = (ee, ie) => ke.Parse(ee, ie))
+     }(ye = ke.prototype).enableEdgesRendering ?? (ye.enableEdgesRendering = (0, Re.h)("LinesMesh", "enableEdgesRendering")), (be = qe.prototype).enableEdgesRendering ?? (be.enableEdgesRendering = (0, Re.h)("InstancedLinesMesh", "enableEdgesRendering"))
```

#### 75. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L708)

```diff
-   39358: (BB, OB, GB) => {
+   39463: (ee, ie, He) => {
```

#### 76. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L712)

```diff
-     var YB = GB(39366);
+     var ye = He(39467);
```

#### 77. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L745)

```diff
-             YB.b.Warn(yB.message)
+             ye.e.Warn(Fe.message)
```

#### 78. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L751)

```diff
-   38589: (BB, OB, GB) => {
+   38745: (ee, ie, He) => {
```

#### 79. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L755)

```diff
-         return ("x" === BB ? OB : 3 & OB | 8).toString(16)
+         return ("x" === ee ? ie : 3 & ie | 8).toString(16)
```

#### 80. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L759)

```diff
-       e: () => YB
+       d: () => ye
```

#### 81. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L762)

```diff
-   39366: (BB, OB, GB) => {
+   39467: (ee, ie, He) => {
```

#### 82. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L764)

```diff
-       b: () => YB
+       e: () => ye
```

#### 83. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L785)

```diff
-         const OB = BB => BB < 10 ? "0" + BB : "" + BB,
+         const ie = ee => ee < 10 ? "0" + ee : "" + ee,
```

#### 84. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L800)

```diff
-         const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
+         const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
```

#### 85. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L833)

```diff
-   41089: (BB, OB, GB) => {
+   41195: (ee, ie, He) => {
```

#### 86. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L835)

```diff
-       b: () => YB.e
+       b: () => ye.f
```

#### 87. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/256.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/256.js#L837-L838)

```diff
-     var YB = GB(41091);
-     (0, YB.b)()
+     var ye = He(41199);
+     (0, ye.d)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (1247 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   44978: (BB, OB, GB) => {
+   45036: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L6)

```diff
-       c: () => oB
+       d: () => Ke
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L8-L9)

```diff
-     var YB = GB(44909),
-       DB = GB(40992);
+     var ye = He(44963),
+       be = He(41111);
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L13)

```diff
-       QB || (QB = !0, DB.d.prototype._sphericalPolynomialTargetSize = 0, DB.d.prototype.forceSphericalPolynomialsRecompute = function() {
+       Me || (Me = !0, be.c.prototype._sphericalPolynomialTargetSize = 0, be.c.prototype.forceSphericalPolynomialsRecompute = function() {
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L15)

```diff
-       }, Object.defineProperty(DB.d.prototype, "sphericalPolynomial", {
+       }, Object.defineProperty(be.c.prototype, "sphericalPolynomial", {
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L19)

```diff
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = YB.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = ye.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L33)

```diff
-   37885: (BB, OB, GB) => {
+   38020: (ee, ie, He) => {
```

#### 8. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L38-L39` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L38-L39) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L38-L39)

```diff
-     var YB = GB(37894);
-     (0, YB.k)()
+     var ye = He(38022);
+     (0, ye.h)()
```

#### 9. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L41)

```diff
-   38424: (BB, OB, GB) => {
+   38581: (ee, ie, He) => {
```

#### 10. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L43)

```diff
-       b: () => DB
+       e: () => be
```

#### 11. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L45)

```diff
-     var YB = GB(38432);
+     var ye = He(38590);
```

#### 12. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L86)

```diff
-   38432: (BB, OB, GB) => {
+   38590: (ee, ie, He) => {
```

#### 13. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L90)

```diff
-     var YB = GB(37778);
+     var ye = He(37917);
```

#### 14. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L93)

```diff
-         this.normal = new YB.r(BB, OB, GB), this.d = DB
+         this.normal = new ye.p(ee, ie, He), this.d = be
```

#### 15. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L95)

```diff
-       dDB() {
+       Qbe() {
```

#### 16. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L142)

```diff
-         return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
+         return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
```

#### 17. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L145)

```diff
-         return YB.r.Dot(this.normal, BB) <= OB
+         return ye.p.Dot(this.normal, ee) <= ie
```

#### 18. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L148)

```diff
-         return YB.r.Dot(BB, this.normal) + this.d
+         return ye.p.Dot(ee, this.normal) + this.d
```

#### 19. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L162)

```diff
-         return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
+         return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
```

#### 20. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L166)

```diff
-         return YB.r.Dot(GB, OB) + DB
+         return ye.p.Dot(He, ie) + be
```

#### 21. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L169)

```diff
-     DB._TmpMatrix = YB.d.Identity()
+     be._TmpMatrix = ye.b.Identity()
```

#### 22. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L171)

```diff
-   37771: (BB, OB, GB) => {
+   37913: (ee, ie, He) => {
```

#### 23. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L173)

```diff
-       Matrix: () => YB.d,
+       Matrix: () => ye.b,
```

#### 24. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L175-L179` → after: `L175-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L175-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L175-L179) · [Before (L175-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L175-L179)

```diff
-       RegisterMathVector: () => YB.j,
-       TmpVectors: () => YB.k,
-       Vector2: () => YB.o,
-       Xp: () => YB.r,
-       Vector4: () => YB.t
+       RegisterMathVector: () => ye.h,
+       TmpVectors: () => ye.j,
+       Vector2: () => ye.n,
+       rf: () => ye.p,
+       Vector4: () => ye.s
```

#### 25. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L181-L182` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L181-L182) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L181-L182)

```diff
-     var YB = GB(37778);
-     (0, YB.j)()
+     var ye = He(37917);
+     (0, ye.h)()
```

#### 26. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L184)

```diff
-   38769: (BB, OB, GB) => {
+   38919: (ee, ie, He) => {
```

#### 27. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L186)

```diff
-       c: () => YB
+       d: () => ye
```

#### 28. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L203)

```diff
-   44909: (BB, OB, GB) => {
+   44963: (ee, ie, He) => {
```

#### 29. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L205)

```diff
-       c: () => JB
+       b: () => Je
```

#### 30. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L207-L211` → after: `L207-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L207-L211) · [Before (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L207-L211)

```diff
-     var YB = GB(37778),
-       DB = GB(37807),
-       QB = GB(40985),
-       oB = GB(37782),
-       jB = GB(37894);
+     var ye = He(37917),
+       be = He(37938),
+       Me = He(41104),
+       Ke = He(37920),
+       Ue = He(38022);
```

#### 31. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L223)

```diff
-         BB.JF()?.Lp().flushFramebuffer();
+         ee.Xx()?.Nf().flushFramebuffer();
```

#### 32. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L266)

```diff
-         const DB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
+         const be = ee instanceof Float32Array ? ee : Float32Array.from(ee),
```

#### 33. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L325)

```diff
-               isNaN(NB) && (NB = 0), isNaN(RB) && (RB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (NB /= 255, RB /= 255, WB /= 255), BB.gammaSpace && (NB = Math.pow((0, DB.Clamp)(NB), oB.d), RB = Math.pow((0, DB.Clamp)(RB), oB.d), WB = Math.pow((0, DB.Clamp)(WB), oB.d));
+               isNaN(Xe) && (Xe = 0), isNaN(ze) && (ze = 0), isNaN(Be) && (Be = 0), 0 === ee.type && (Xe /= 255, ze /= 255, Be /= 255), ee.gammaSpace && (Xe = Math.pow((0, be.Clamp)(Xe), Ke.h), ze = Math.pow((0, be.Clamp)(ze), Ke.h), Be = Math.pow((0, be.Clamp)(Be), Ke.h));
```

#### 34. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L341)

```diff
-         return YB.scaleInPlace(lB), YB.convertIncidentRadianceToIrradiance(), YB.convertIrradianceToLambertianRadiance(), QB.f.FromHarmonics(YB)
+         return ye.scaleInPlace(qe), ye.convertIncidentRadianceToIrradiance(), ye.convertIrradianceToLambertianRadiance(), Me.e.FromHarmonics(ye)
```

#### 35. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L344)

```diff
-     JB._FileFaces = [new yB("right", new YB.r(1, 0, 0), new YB.r(0, 0, -1), new YB.r(0, -1, 0)), new yB("left", new YB.r(-1, 0, 0), new YB.r(0, 0, 1), new YB.r(0, -1, 0)), new yB("up", new YB.r(0, 1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, 1)), new yB("down", new YB.r(0, -1, 0), ne … [truncated]
+     Je._FileFaces = [new Fe("right", new ye.p(1, 0, 0), new ye.p(0, 0, -1), new ye.p(0, -1, 0)), new Fe("left", new ye.p(-1, 0, 0), new ye.p(0, 0, 1), new ye.p(0, -1, 0)), new Fe("up", new ye.p(0, 1, 0), new ye.p(1, 0, 0), new ye.p(0, 0, 1)), new Fe("down", new ye.p(0, -1, 0), ne … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L346)

```diff
-   44762: (BB, OB, GB) => {
+   44824: (ee, ie, He) => {
```

#### 37. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L348-L349)

```diff
-       b: () => YB.g,
-       d: () => YB.n
+       e: () => ye.i,
+       i: () => ye.r
```

#### 38. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L351-L352` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L351-L352) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L351-L352)

```diff
-     var YB = GB(41035);
-     (0, YB.p)()
+     var ye = He(41159);
+     (0, ye.u)()
```

#### 39. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L354)

```diff
-   38589: (BB, OB, GB) => {
+   38745: (ee, ie, He) => {
```

#### 40. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L358)

```diff
-         return ("x" === BB ? OB : 3 & OB | 8).toString(16)
+         return ("x" === ee ? ie : 3 & ie | 8).toString(16)
```

#### 41. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L362)

```diff
-       e: () => YB
+       d: () => ye
```

#### 42. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L365)

```diff
-   44941: (BB, OB, GB) => {
+   45011: (ee, ie, He) => {
```

#### 43. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L367)

```diff
-       c: () => QB
+       e: () => Me
```

#### 44. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L369-L370)

```diff
-     var YB = GB(44931),
-       DB = GB(44947);
+     var ye = He(44998),
+       be = He(45015);
```

#### 45. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L375)

```diff
-         const DB = OB.Lp(),
+         const be = ie.Nf(),
```

#### 46. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L383)

```diff
-           OB.isReady = !1, QB ? await GB.e(651).then((() => GB(63997))) : await GB.e(633).then((() => GB(64005)));
+           ie.isReady = !1, Me ? await He.e(651).then((() => He(63934))) : await He.e(633).then((() => He(63943)));
```

#### 47. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L398)

```diff
-               }, BB.JF()?.postProcessManager.directRender([jB], yB, !0), DB.restoreDefaultFramebuffer(), DB._releaseTexture(OB), jB && jB.dispose(), yB._swapAndDie(OB), OB.isReady = !0
+               }, ee.Xx()?.postProcessManager.directRender([Ue], Fe, !0), be.restoreDefaultFramebuffer(), be._releaseTexture(ie), Ue && Ue.dispose(), Fe._swapAndDie(ie), ie.isReady = !0
```

#### 48. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L406)

```diff
-         return OB.Lp().isWebGPU ? await GB.e(652).then((() => GB(64017))) : await GB.e(634).then((() => GB(64015))), await (0, DB.d)("rgbdEncode", BB, OB, YB, 1, 5)
+         return ie.Nf().isWebGPU ? await He.e(652).then((() => He(63962))) : await He.e(634).then((() => He(63955))), await (0, be.d)("rgbdEncode", ee, ie, ye, 1, 5)
```

#### 49. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L410)

```diff
-   63864: (BB, OB, GB) => {
+   63809: (ee, ie, He) => {
```

#### 50. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L412-L414` → after: `L412-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L412-L414) · [Before (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L412-L414)

```diff
-       AsyncLoop: () => YB.b,
-       RegisterTools: () => YB.f,
-       Tools: () => YB.j,
+       AsyncLoop: () => ye.c,
+       RegisterTools: () => ye.g,
+       Tools: () => ye.h,
```

#### 51. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L417-L418)

```diff
-     var YB = GB(41097);
-     (0, YB.f)()
+     var ye = He(41203);
+     (0, ye.g)()
```

#### 52. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L420)

```diff
-   44999: (BB, OB, GB) => {
+   45055: (ee, ie, He) => {
```

#### 53. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L486)

```diff
-   63902: (BB, OB, GB) => {
+   63844: (ee, ie, He) => {
```

#### 54. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L615-L617` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L615-L617) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L615-L617)

```diff
-     var YB = GB(37771),
-       DB = GB(63864),
-       QB = GB(41283);
+     var ye = He(37913),
+       be = He(63809),
+       Me = He(41414);
```

#### 55. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L626-L627` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L626-L627) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L626-L627)

```diff
-             PB = GB.name || `mesh${MB}}`;
-           jB.push(`o ${PB}`);
+             Re = He.name || `mesh${oe}}`;
+           Ue.push(`o ${Re}`);
```

#### 56. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L645)

```diff
-             NB = lB.KDB();
+             Xe = qe.eMe();
```

#### 57. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L652)

```diff
-           const AB = BB[0].JF().useRightHandedSystem ? 1 : -1;
+           const Ee = ee[0].Xx().useRightHandedSystem ? 1 : -1;
```

#### 58. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L659-L660` → after: `L659-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L659-L660) · [Before (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L659-L660)

```diff
-             SB = (GB.material || GB.JF().defaultMaterial)._getEffectiveOrientation(GB),
-             [nB, UB] = SB === QB.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
+             Oe = (He.material || He.Xx().defaultMaterial)._getEffectiveOrientation(He),
+             [de, We] = Oe === Me.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
```

#### 59. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L665-L666` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L665-L666) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L665-L666)

```diff
-               DB = null != ZB ? GB : VB,
-               QB = null != qB ? OB : VB;
+               be = null != pe ? He : ge,
+               Me = null != Te ? ie : ge;
```

#### 60. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L683` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L683) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L683)

```diff
-       yB = GB(44762);
+       Fe = He(44824);
```

#### 61. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L695)

```diff
-               type: (0, yB.b)(BB)
+               type: (0, Fe.e)(ee)
```

#### 62. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L701-L708` → after: `L701-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L701-L708) · [Before (L701-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L701-L708)

```diff
-     var MB = GB(42160),
-       PB = GB(42111),
-       zB = GB(44751),
-       lB = GB(42118),
-       pB = GB(40825),
-       qB = GB(37796),
-       ZB = GB(37885),
-       NB = GB(37807);
+     var oe = He(42233),
+       Re = He(42177),
+       ke = He(44815),
+       qe = He(42193),
+       fe = He(40913),
+       Te = He(37929),
+       pe = He(38020),
+       Xe = He(37938);
```

#### 63. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L717-L721` → after: `L717-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L717-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L717-L721) · [Before (L717-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L717-L721)

```diff
-     var AB = GB(44947),
-       VB = GB(42133),
-       SB = GB(44718),
-       nB = GB(44726),
-       UB = GB(44969);
+     var Ee = He(45015),
+       ge = He(42217),
+       Oe = He(44783),
+       de = He(44789),
+       We = He(45032);
```

#### 64. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L723-L728` → after: `L723-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L723-L728) · [Before (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L723-L728)

```diff
-     var fB = GB(40998),
-       kB = GB(41004),
-       dB = GB(39366),
-       KB = GB(41112),
-       uB = GB(41470),
-       mB = GB(44941);
+     var te = He(41113),
+       Ze = He(41121),
+       we = He(39467),
+       De = He(41216),
+       Pe = He(41593),
+       Ae = He(45011);
```

#### 65. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L738-L740` → after: `L738-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L738-L740) · [Before (L738-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L738-L740)

```diff
-           const jB = BB.Lp().getLoadedTexturesCache(),
-             yB = jB.indexOf(oB.getInternalTexture()); - 1 !== yB && jB.splice(yB, 1), oB.isRGBD = !0, oB.wrapU = uB.e.CLAMP_ADDRESSMODE, oB.wrapV = uB.e.CLAMP_ADDRESSMODE, BB[GB] = oB, BB.useDelayedTextureLoading = DB, mB.c.ExpandRGBDTexture(oB);
-           const JB = BB.Lp().ip.add((() => {
+           const Ue = ee.Nf().getLoadedTexturesCache(),
+             Fe = Ue.indexOf(Ke.getInternalTexture()); - 1 !== Fe && Ue.splice(Fe, 1), Ke.isRGBD = !0, Ke.wrapU = Pe.e.CLAMP_ADDRESSMODE, Ke.wrapV = Pe.e.CLAMP_ADDRESSMODE, ee[He] = Ke, ee.useDelayedTextureLoading = be, Ae.e.ExpandRGBDTexture(Ke);
+           const Je = ee.Nf().hf.add((() => {
```

#### 66. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L743)

```diff
-               oB.isReady() && (BB.onBeforeRenderObservable.remove(OB), mB.c.ExpandRGBDTexture(oB))
+               Ke.isReady() && (ee.onBeforeRenderObservable.remove(ie), Ae.e.ExpandRGBDTexture(Ke))
```

#### 67. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L746-L747` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L746-L747) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L746-L747)

```diff
-           BB.lF.add((() => {
-             BB.Lp().ip.remove(JB)
+           ee.Bx.add((() => {
+             ee.Nf().hf.remove(Je)
```

#### 68. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L755-L760` → after: `L755-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L755-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L755-L760) · [Before (L755-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L755-L760)

```diff
-     var rB = GB(41091),
-       XB = GB(37778),
-       wB = GB(41150),
-       EB = GB(41275),
-       cB = GB(41361);
-     class hB extends EB.c {
+     var Le = He(41199),
+       Ce = He(37917),
+       ve = He(41247),
+       ue = He(41406),
+       me = He(41490);
+     class le extends ue.e {
```

#### 69. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L767)

```diff
-       let MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB = cB.c,
+       let oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be = me.b,
```

#### 70. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L791)

```diff
-           (0, fB.d)(this, OB, BB, "f")
+           (0, te.f)(this, ie, ee, "f")
```

#### 71. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L797)

```diff
-           (0, fB.d)(this, GB, BB, "f")
+           (0, te.f)(this, He, ee, "f")
```

#### 72. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L803)

```diff
-           (0, fB.d)(this, YB, BB, "f")
+           (0, te.f)(this, ye, ee, "f")
```

#### 73. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L809)

```diff
-           (0, fB.d)(this, DB, BB, "f")
+           (0, te.f)(this, be, ee, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L815)

```diff
-           (0, fB.d)(this, QB, BB, "f")
+           (0, te.f)(this, Me, ee, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L821)

```diff
-           (0, fB.d)(this, oB, BB, "f")
+           (0, te.f)(this, Ke, ee, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L827)

```diff
-           (0, fB.d)(this, jB, BB, "f")
+           (0, te.f)(this, Ue, ee, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L833)

```diff
-           (0, fB.d)(this, yB, BB, "f")
+           (0, te.f)(this, Fe, ee, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L839)

```diff
-           (0, fB.d)(this, JB, BB, "f")
+           (0, te.f)(this, Je, ee, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L849)

```diff
-           super(MB, "PBRBRDF", 90, new hB, PB), this._useEnergyConservation = BB.DEFAULT_USE_ENERGY_CONSERVATION, OB.set(this, (0, fB.j)(this, AB, BB.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, fB.j)(this, VB), BB.DEFAULT_USE_SMITH_VISIBILIT … [truncated]
+           super(oe, "PBRBRDF", 90, new le, Re), this._useEnergyConservation = ee.DEFAULT_USE_ENERGY_CONSERVATION, ie.set(this, (0, te.l)(this, Ee, ee.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, te.l)(this, ge), ee.DEFAULT_USE_SMITH_VISIBILIT … [truncated]
```

#### 80. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L859)

```diff
-         MB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], PB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], zB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], lB = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsMiscDirty")], pB = [(0, kB.L)(), ( … [truncated]
+         oe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Re = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], ke = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], qe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], fe = [(0, Ze.R)(), ( … [truncated]
```

#### 81. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L872)

```diff
-         }, AB, VB), (0, fB.h)(BB, null, PB, {
+         }, Ee, ge), (0, te.i)(ee, null, Re, {
```

#### 82. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L885` → after: `L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/257.js#L885) · [Before (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/257.js#L885)

```diff
-         }, SB, nB), (0, fB.h)(BB, null, zB, {
+         }, Oe, de), (0, te.i)(ee, null, ke, {
```
