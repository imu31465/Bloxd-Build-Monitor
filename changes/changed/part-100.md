# Changed — Bundle Modifications Report (Part 100 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `100 / 154` (**405** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 099](part-099.md) · [Part 101 →](part-101.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4830 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 3008. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22498-L22526` → after: `L22281-L22299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22281-L22299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22281-L22299) · [Before (L22498-L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22498-L22526)

```diff
-             Wd(om[34]) in qm && Rd();
-             let Xd = {
-               [Wd(om[47])]: Wd(105) + Wd(106),
-               [Wd(om[27])]: Wd(108) + Wd(109),
-               [Wd(110)]: Wd(111) + Wd(112)
-             };
-             Hm(md = om[42], (0, Fd[Wd(113)])(bd.hi, Xd))
-           }
-         }), 12491), (0, Fd[Od(om[81]) + Od(om[49])])(((...dd) => {
-           dd[om[13]] = om[1],
-             function(...dd) {
-               return dd[om[13]] = om[2], typeof mm[dd[om[1]]] === om[14] ? mm[dd[om[1]]] = function(...dd) {
-                 for (Hm(dd[om[13]] = om[2], dd[om[5]] = '7kdrJKALCtINSVcf/hT}_Q;e`ov%x>mXi39E+y6{HB#uRn"F0Pw<!MaD=bq1|UGg,$s4z]W5Z:*l8@2)(O~j[?pY&^.', dd[om[0]] = "" + (dd[om[1]] || ""), dd[om[18]] = dd[om[0]].length, dd[om[16]] = [], dd[om[37]] = om[1], dd[om[32]] = om[1], dd[om … [truncated]
-                   if (dd[om[6]] = dd[om[5]].indexOf(dd[om[0]][dd[om[11]]]), dd[om[6]] !== -om[2])
-                     if (dd[om[29]] < om[1]) dd[om[29]] = dd[om[6]];
-                     else {
- ... (13 more removed lines; see GitHub link above)
+           }), 11714), (0, Hb[wb(130) + wb(131)])(((...bb) => {
+             bb[IM[12]] = IM[1], wb(132) + "U" in UM && function(...bb) {
+               tM(bb[IM[12]] = IM[1], bb[IM[22]] = function(...bb) {
+                 for (tM(bb[IM[12]] = IM[0], bb[IM[0]] = bb[IM[1]].length, bb[IM[21]] = [], bb[IM[3]] = IM[1], bb[IM[66]] = IM[1], bb[IM[1]].sort(((bb, wb) => bb - wb))), bb[IM[55]] = IM[1]; bb[IM[55]] < bb[IM[0]]; bb[IM[55]]++)
+                   if (!(bb[IM[55]] > IM[1] && bb[IM[1]][bb[IM[55]]] === bb[IM[1]][bb[IM[55]] - IM[0]]))
+                     for (tM(bb[IM[3]] = bb[IM[55]] + IM[0], bb[IM[66]] = bb[IM[0]] - IM[0]); bb[IM[3]] < bb[IM[66]];)
+                       if (bb[IM[1]][bb[IM[55]]] + bb[IM[1]][bb[IM[3]]] + bb[IM[1]][bb[IM[66]]] < IM[1]) bb[IM[3]]++;
+                       else if (bb[IM[1]][bb[IM[55]]] + bb[IM[1]][bb[IM[3]]] + bb[IM[1]][bb[IM[66]]] > IM[1]) bb[IM[66]]--;
+                 else {
+                   for (bb[IM[21]].push([bb[IM[1]][bb[IM[55]]], bb[IM[1]][bb[IM[3]]], bb[IM[1]][bb[IM[66]]]]); bb[IM[3]] < bb[IM[66]] && bb[IM[1]][bb[IM[3]]] === bb[IM[1]][bb[IM[3]] + IM[0]];) bb[IM[3]]++;
+                   for (; bb[IM[3]] < bb[IM[66]] && bb[IM[1]][bb[IM[66]]] === bb[IM[1]][bb[IM[66]] - IM[0]];) bb[IM[66]]--;
+                   tM(bb[IM[3]]++, bb[IM[66]]--)
+                 }
+                 return bb[IM[21]]
+               }, console.log(bb[IM[22]]))
+             }(), eb = IM[74]
+ ... (3 more added lines; see GitHub link above)
```

#### 3009. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22528` → after: `L22301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22301) · [Before (L22528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22528)

```diff
-   38852: (dd, Od, md) => {
+   38523: (bb, wb, Mb) => {
```

#### 3010. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22530` → after: `L22303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22303) · [Before (L22530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22530)

```diff
-       c: () => vd,
+       b: () => Lb,
```

#### 3011. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22533-L22537` → after: `L22306-L22310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22306-L22310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22306-L22310) · [Before (L22533-L22537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22533-L22537)

```diff
-     var Wd = md(38750),
-       Fd = md(38752),
-       Rd = md(38856),
-       Xd = md(38758),
-       Kd = md(38779);
+     var eb = Mb(38414),
+       Hb = Mb(38419),
+       pb = Mb(38526),
+       Vb = Mb(38432),
+       gb = Mb(38449);
```

#### 3012. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22543` → after: `L22316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22316) · [Before (L22543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22543)

```diff
-         ...(0, Wd.b)("DITHER"),
+         ...(0, eb.e)("DITHER"),
```

#### 3013. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22550-L22551` → after: `L22323-L22324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22323-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22323-L22324) · [Before (L22550-L22551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22550-L22551)

```diff
-         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.f)(Od,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,Rd.Y)(Od,"vertex")}\n\t\t\t\t`,
-         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,Fd.wb)(Od,"aOpacity")};\n\t\t\t\t`
+         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Hb.d)(wb,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,pb.ab)(wb,"vertex")}\n\t\t\t\t`,
+         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,Hb.zb)(wb,"aOpacity")};\n\t\t\t\t`
```

#### 3014. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22553-L22555` → after: `L22326-L22328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22326-L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22326-L22328) · [Before (L22553-L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22553-L22555)

```diff
-         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Rd.Y)(Od,"fragment")}\n\n\t\t\t\t\t${(0,Rd.r)(Od)}\n\t\t\t\t`,
-         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,Fd.z)(Od,"float","ditherThresh",`bayerDither(${(0,Fd.K)(Od)}.xy)`)}\n\n\t\t\t\t\t${(0,Fd.z)(Od,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
-         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,Fd.z)(Od,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
+         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,pb.ab)(wb,"fragment")}\n\n\t\t\t\t\t${(0,pb.s)(wb)}\n\t\t\t\t`,
+         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,Hb.u)(wb,"float","ditherThresh",`bayerDither(${(0,Hb.L)(wb)}.xy)`)}\n\n\t\t\t\t\t${(0,Hb.u)(wb,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
+         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,Hb.u)(wb,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
```

#### 3015. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22563` → after: `L22336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22336) · [Before (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22563)

```diff
-     }(0, Xd.m)(hd)
+     }(0, Vb.j)(lb)
```

#### 3016. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22565` → after: `L22338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22338) · [Before (L22565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22565)

```diff
-   38746: (dd, Od, md) => {
+   38411: (bb, wb, Mb) => {
```

#### 3017. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22567` → after: `L22340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22340) · [Before (L22567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22567)

```diff
-       b: () => Kd
+       e: () => gb
```

#### 3018. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22569-L22572` → after: `L22342-L22345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22342-L22345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22342-L22345) · [Before (L22569-L22572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22569-L22572)

```diff
-     var Wd = md(38750),
-       Fd = md(38752),
-       Rd = md(38756),
-       Xd = md(38758);
+     var eb = Mb(38414),
+       Hb = Mb(38419),
+       pb = Mb(38424),
+       Vb = Mb(38432);
```

#### 3019. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22577` → after: `L22350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22350) · [Before (L22577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22577)

```diff
-       defines: () => (0, Wd.b)("HUE_TINT"),
+       defines: () => (0, eb.e)("HUE_TINT"),
```

#### 3020. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22583-L22584` → after: `L22356-L22357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22356-L22357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22356-L22357) · [Before (L22583-L22584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22583-L22584)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.f)(Od,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,Fd.qb)(Od,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Fd.Ab)(Od,"vHueColour")} = ${(0,Fd.wb)(Od,"aHueColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Hb.d)(wb,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,Hb.vb)(wb,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Hb.Db)(wb,"vHueColour")} = ${(0,Hb.zb)(wb,"aHueColour")};\n\t\t\t\t`
```

#### 3021. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22587` → after: `L22360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22360) · [Before (L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22587)

```diff
-           const dd = (0, Fd.O)(Od, "vHueColour");
+           const bb = (0, Hb.R)(wb, "vHueColour");
```

#### 3022. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22589` → after: `L22362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22362) · [Before (L22589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22589)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.qb)(Od,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,Rd.b)(Od,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Fd.t)(Od,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Hb.vb)(wb,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,pb.b)(wb,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,Hb.r)(wb,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
```

#### 3023. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22591` → after: `L22364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22364) · [Before (L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22591)

```diff
-               (0, Fd.z)(Od, "float", "hueDelta", "targetHue - hue")
+               (0, Hb.u)(wb, "float", "hueDelta", "targetHue - hue")
```

#### 3024. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22594` → after: `L22367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22367) · [Before (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22594)

```diff
-               (0, Fd.z)(Od, "float", "hueDist", "abs(hueDelta)")
+               (0, Hb.u)(wb, "float", "hueDist", "abs(hueDelta)")
```

#### 3025. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22597` → after: `L22370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22370) · [Before (L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22597)

```diff
-               (0, Fd.z)(Od, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
+               (0, Hb.u)(wb, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
```

#### 3026. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22600` → after: `L22373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22373) · [Before (L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22600)

```diff
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${dd}.a > 0.5) {\n\t\t\t\t\t\t${(0,Fd.z)(Od,"vec3","overlayHSV",`hueTintRgb2hsv(${dd}.rgb)`)}\n\t\t\t\t\t\t${(0,Fd.z)(Od,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,Fd.z)(Od,"float","greyValue","g … [truncated]
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${bb}.a > 0.5) {\n\t\t\t\t\t\t${(0,Hb.u)(wb,"vec3","overlayHSV",`hueTintRgb2hsv(${bb}.rgb)`)}\n\t\t\t\t\t\t${(0,Hb.u)(wb,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,Hb.u)(wb,"float","greyValue","g … [truncated]
```

#### 3027. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22606` → after: `L22379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22379) · [Before (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22606)

```diff
-     (0, Xd.m)(Kd)
+     (0, Vb.j)(gb)
```

#### 3028. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22608` → after: `L22381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22381) · [Before (L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22608)

```diff
-   39676: (dd, Od, md) => {
+   39362: (bb, wb, Mb) => {
```

#### 3029. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22610` → after: `L22383-L22384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22383-L22384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22383-L22384) · [Before (L22610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22610)

```diff
-       d: () => qd,
+       b: () => Cb,
+       e: () => Ib,
```

#### 3030. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22612-L22613` → after: `L22386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22386) · [Before (L22612-L22613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22612-L22613)

```diff
-       h: () => hd,
-       i: () => vd,
+       j: () => Lb,
```

#### 3031. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22616-L22620` → after: `L22389-L22393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22389-L22393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22389-L22393) · [Before (L22616-L22620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22616-L22620)

```diff
-     var Wd = md(38750),
-       Fd = md(38845),
-       Rd = md(38752),
-       Xd = md(38758),
-       Kd = md(38779);
+     var eb = Mb(38414),
+       Hb = Mb(38516),
+       pb = Mb(38419),
+       Vb = Mb(38432),
+       gb = Mb(38449);
```

#### 3032. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22635` → after: `L22408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22408) · [Before (L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22635)

```diff
-       return `aAtlasIdx${dd}`
+       return `aAtlasIdx${bb}`
```

#### 3033. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22639` → after: `L22412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22412) · [Before (L22639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22639)

```diff
-       return `vAtlasIdx${dd}`
+       return `vAtlasIdx${bb}`
```

#### 3034. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22650-L22651` → after: `L22423-L22424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22423-L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22423-L22424) · [Before (L22650-L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22650-L22651)

```diff
-           ...(0, Wd.b)("LIFEFORM"),
-           BLOXD_LIFEFORM_LAYERS: `${dd}`
+           ...(0, eb.e)("LIFEFORM"),
+           BLOXD_LIFEFORM_LAYERS: `${bb}`
```

#### 3035. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22666` → after: `L22439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22439) · [Before (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22666)

```diff
-             for (let Fd = 1; Fd <= vd(this.numLayers); Fd++) dd += `${(0,Rd.f)(Od,Qd(Fd),"vec4","mediump")}\n`, md += `${(0,Rd.qb)(Od,td(Fd),"vec4","mediump")}\n`, Wd += `${(0,Rd.Ab)(Od,td(Fd))} = ${(0,Rd.wb)(Od,Qd(Fd))};\n`;
+             for (let Hb = 1; Hb <= Lb(this.numLayers); Hb++) bb += `${(0,pb.d)(wb,Ib(Hb),"vec4","mediump")}\n`, Mb += `${(0,pb.vb)(wb,Ob(Hb),"vec4","mediump")}\n`, eb += `${(0,pb.Db)(wb,Ob(Hb))} = ${(0,pb.zb)(wb,Ib(Hb))};\n`;
```

#### 3036. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22668-L22669` → after: `L22441-L22442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22441-L22442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22441-L22442) · [Before (L22668-L22669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22668-L22669)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${dd}\n\n\t\t\t\t\t${md}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${Wd}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${bb}\n\n\t\t\t\t\t${Mb}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${eb}\n\t\t\t\t`
```

#### 3037. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22674-L22676` → after: `L22447-L22449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22447-L22449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22447-L22449) · [Before (L22674-L22676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22674-L22676)

```diff
-             for (let Kd = 1; Kd <= vd(this.numLayers); Kd++) dd += `${(0,Rd.qb)(Od,td(Kd),"vec4","mediump")}\n`;
-             const md = (0, Rd.ob)(Od, "uLifeformAtlasSize"),
-               Wd = (0, Rd.O)(Od, "vMainUV1");
+             for (let gb = 1; gb <= Lb(this.numLayers); gb++) bb += `${(0,pb.vb)(wb,Ob(gb),"vec4","mediump")}\n`;
+             const Mb = (0, pb.sb)(wb, "uLifeformAtlasSize"),
+               eb = (0, pb.R)(wb, "vMainUV1");
```

#### 3038. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22682-L22683` → after: `L22455-L22456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22455-L22456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22455-L22456) · [Before (L22682-L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22682-L22683)

```diff
-               } = hd(Kd), vd = "xyzw" [Xd], Qd = `atlasIdx${Kd}`;
-               Fd += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,Rd.z)(Od,"float",Qd,`${(0,Rd.O)(Od,td(dd))}.${vd}`)}\n\t\t\t\t\t${(0,Rd.z)(Od,"float",`colIdx${Kd}`,(0,Rd.Z)(Od,Qd,`${md}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colum … [truncated]
+               } = lb(gb), Lb = "xyzw" [Vb], Ib = `atlasIdx${gb}`;
+               Hb += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,pb.u)(wb,"float",Ib,`${(0,pb.R)(wb,Ob(bb))}.${Lb}`)}\n\t\t\t\t\t${(0,pb.u)(wb,"float",`colIdx${gb}`,(0,pb._)(wb,Ib,`${Mb}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colum … [truncated]
```

#### 3039. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22685-L22686` → after: `L22458-L22459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22458-L22459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22458-L22459) · [Before (L22685-L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22685-L22686)

```diff
-             let Xd = `\n\t\t\t\t${(0,Rd.z)(Od,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,Rd._)(Od,"outCol","outCol.a")}\n\t\t\t`;
-             for (let Kd = this.numLayers - 1; Kd >= 1; Kd--) Xd += `\n\t\t\t\t\t${(0,Rd.db)(Od,"outCol",`mix(outCol.rgb, col${Kd}.rgb, col${Kd}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${Kd}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${Kd}.a + outC … [truncated]
+             let Vb = `\n\t\t\t\t${(0,pb.u)(wb,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,pb.ab)(wb,"outCol","outCol.a")}\n\t\t\t`;
+             for (let gb = this.numLayers - 1; gb >= 1; gb--) Vb += `\n\t\t\t\t\t${(0,pb.db)(wb,"outCol",`mix(outCol.rgb, col${gb}.rgb, col${gb}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${gb}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${gb}.a + outC … [truncated]
```

#### 3040. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22688-L22689` → after: `L22461-L22462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22461-L22462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22461-L22462) · [Before (L22688-L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22688-L22689)

```diff
-               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${dd}\n\t\t\t\t`,
-               [(0, Rd.A)(Od)]: `\n\t\t\t\t\t${Fd}\n\t\t\t\t\t${Xd}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,Rd.l)(Od,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
+               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${bb}\n\t\t\t\t`,
+               [(0, pb.y)(wb)]: `\n\t\t\t\t\t${Hb}\n\t\t\t\t\t${Vb}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,pb.j)(wb,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
```

#### 3041. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22694-L22695` → after: `L22467-L22468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22467-L22468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22467-L22468) · [Before (L22694-L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22694-L22695)

```diff
-         Jq() {
-           const dd = Rd.e.WGSL,
+         LC() {
+           const bb = pb.b.WGSL,
```

#### 3042. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22702` → after: `L22475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22475) · [Before (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22702)

```diff
-             Od.push(`${(0,Rd.O)(dd,td(Wd))}.${"xyzw"[Fd]}`)
+             wb.push(`${(0,pb.R)(bb,Ob(eb))}.${"xyzw"[Hb]}`)
```

#### 3043. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22706` → after: `L22479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22479) · [Before (L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22706)

```diff
-               cells: (0, Rd.ob)(dd, "uLifeformAtlasSize"),
+               cells: (0, pb.sb)(bb, "uLifeformAtlasSize"),
```

#### 3044. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22708` → after: `L22481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22481) · [Before (L22708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22708)

```diff
-               uv: (0, Rd.O)(dd, "vMainUV1")
+               uv: (0, pb.R)(bb, "vMainUV1")
```

#### 3045. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22720` → after: `L22493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22493) · [Before (L22720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22720)

```diff
-     }(0, Xd.m)(Nd)
+     }(0, Vb.j)(tb)
```

#### 3046. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22722` → after: `L22495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22495) · [Before (L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22722)

```diff
-   38860: (dd, Od, md) => {
+   38535: (bb, wb, Mb) => {
```

#### 3047. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22726-L22728` → after: `L22499-L22501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22499-L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22499-L22501) · [Before (L22726-L22728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22726-L22728)

```diff
-     var Wd = md(38750),
-       Fd = md(38752),
-       Rd = md(38758);
+     var eb = Mb(38414),
+       Hb = Mb(38419),
+       pb = Mb(38432);
```

#### 3048. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22733` → after: `L22506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22506) · [Before (L22733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22733)

```diff
-       defines: () => (0, Wd.b)("OVERLAY"),
+       defines: () => (0, eb.e)("OVERLAY"),
```

#### 3049. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22739-L22740` → after: `L22512-L22513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22512-L22513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22512-L22513) · [Before (L22739-L22740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22739-L22740)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.f)(Od,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,Fd.qb)(Od,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Fd.Ab)(Od,"vOverlayColour")} = ${(0,Fd.wb)(Od,"aOverlayColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,Hb.d)(wb,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,Hb.vb)(wb,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,Hb.Db)(wb,"vOverlayColour")} = ${(0,Hb.zb)(wb,"aOverlayColour")};\n\t\t\t\t`
```

#### 3050. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22743` → after: `L22516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22516) · [Before (L22743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22743)

```diff
-           const dd = (0, Fd.O)(Od, "vOverlayColour");
+           const bb = (0, Hb.R)(wb, "vOverlayColour");
```

#### 3051. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22745-L22746` → after: `L22518-L22519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22518-L22519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22518-L22519) · [Before (L22745-L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22745-L22746)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Fd.qb)(Od,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,Fd.db)(Od,"baseColor",`mix(baseColor.rgb, ${dd}.rgb, ${dd}.a)`)}\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Hb.vb)(wb,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,Hb.db)(wb,"baseColor",`mix(baseColor.rgb, ${bb}.rgb, ${bb}.a)`)}\n\t\t\t\t`
```

#### 3052. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22751` → after: `L22524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22524) · [Before (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22751)

```diff
-       Jq() {
+       LC() {
```

#### 3053. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22756-L22757` → after: `L22529-L22530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22529-L22530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22529-L22530) · [Before (L22756-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22756-L22757)

```diff
-             code: Xd.getCustomCode("fragment", Fd.e.WGSL)[dd],
-             colour: (0, Fd.O)(Fd.e.WGSL, "vOverlayColour")
+             code: Vb.getCustomCode("fragment", Hb.b.WGSL)[bb],
+             colour: (0, Hb.R)(Hb.b.WGSL, "vOverlayColour")
```

#### 3054. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22762` → after: `L22535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22535) · [Before (L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22762)

```diff
-     (0, Rd.m)(Xd)
+     (0, pb.j)(Vb)
```

#### 3055. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22764` → after: `L22537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22537) · [Before (L22764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22764)

```diff
-   38766: (dd, Od, md) => {
+   38440: (bb, wb, Mb) => {
```

#### 3056. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22767` → after: `L22540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22540) · [Before (L22767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22767)

```diff
-       f: () => Kd
+       e: () => gb
```

#### 3057. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22769-L22771` → after: `L22542-L22544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22542-L22544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22542-L22544) · [Before (L22769-L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22769-L22771)

```diff
-     var Wd = md(38779),
-       Fd = md(38799),
-       Rd = md(38770);
+     var eb = Mb(38449),
+       Hb = Mb(38473),
+       pb = Mb(38445);
```

#### 3058. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22774` → after: `L22547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22547) · [Before (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22774)

```diff
-       const Od = (0, Wd.x)(dd.name, dd.MH),
+       const wb = (0, eb.u)(bb.name, bb.JE),
```

#### 3059. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22778-L22779` → after: `L22551-L22552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22551-L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22551-L22552) · [Before (L22778-L22779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22778-L22779)

```diff
-         (0, Fd.Y)(md, dd.sets), null === (Wd = dd.features) || void 0 === Wd || Wd.call(dd, Od)
-       })), dd.freeze && dd.unrendered ? (0, Rd.f)(md) : dd.freeze && (0, Fd.o)(md), {
+         (0, Hb.bb)(Mb, bb.sets), null === (eb = bb.features) || void 0 === eb || eb.call(bb, wb)
+       })), bb.freeze && bb.unrendered ? (0, pb.e)(Mb) : bb.freeze && (0, Hb.m)(Mb), {
```

#### 3060. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22787` → after: `L22560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22560) · [Before (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22787)

```diff
-         (0, Fd.Y)(dd, Od)
+         (0, Hb.bb)(bb, wb)
```

#### 3061. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22792` → after: `L22565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22565) · [Before (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22792)

```diff
-       Od ? (0, Rd.c)(dd, md) : md()
+       wb ? (0, pb.d)(bb, Mb) : Mb()
```

#### 3062. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22795` → after: `L22568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22568) · [Before (L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22795)

```diff
-   39249: (dd, Od, md) => {
+   38945: (bb, wb, Mb) => {
```

#### 3063. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22797-L22798` → after: `L22570-L22571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22570-L22571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22570-L22571) · [Before (L22797-L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22797-L22798)

```diff
-       b: () => vd,
-       d: () => od
+       c: () => Lb,
+       e: () => Ub
```

#### 3064. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22808` → after: `L22581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22581) · [Before (L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22808)

```diff
-       return Kd ? Wd : hd ? Fd : null
+       return gb ? eb : lb ? Hb : null
```

#### 3065. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22835` → after: `L22608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22608) · [Before (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22835)

```diff
-         values: [dd.kY, dd.IWd, Wd, Wd.pack, md, md.send, Fd, Fd.send, Rd],
+         values: [bb.vx, bb.Peb, eb, eb.pack, Mb, Mb.send, Hb, Hb.send, pb],
```

#### 3066. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22867` → after: `L22640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22640) · [Before (L22867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22867)

```diff
-   39966: (dd, Od, md) => {
+   39645: (bb, wb, Mb) => {
```

#### 3067. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22870` → after: `L22643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22643) · [Before (L22870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22870)

```diff
-       g: () => Kd,
+       h: () => gb,
```

#### 3068. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22873-L22874` → after: `L22646-L22647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22646-L22647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22646-L22647) · [Before (L22873-L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22873-L22874)

```diff
-     var Wd = md(38006),
-       Fd = md(2402);
+     var eb = Mb(37695),
+       Hb = Mb(2451);
```

#### 3069. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22876` → after: `L22649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22649) · [Before (L22876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22876)

```diff
-     const Xd = new Wd.h((function() {
+     const Vb = new eb.f((function() {
```

#### 3070. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22878-L22879` → after: `L22651-L22652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22651-L22652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22651-L22652) · [Before (L22878-L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22878-L22879)

```diff
-           Od = (0, Fd.c)().camera;
-         Od.Dk = dd, Od.Zk = dd
+           wb = (0, Hb.h)().camera;
+         wb.B5 = bb, wb.Y5 = bb
```

#### 3071. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22888` → after: `L22661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22661) · [Before (L22888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22888)

```diff
-   39405: (dd, Od, md) => {
+   39090: (bb, wb, Mb) => {
```

#### 3072. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22890` → after: `L22663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22663) · [Before (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22890)

```diff
-       c: () => Fd
+       b: () => Hb
```

#### 3073. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22892` → after: `L22665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22665) · [Before (L22892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22892)

```diff
-     var Wd = md(39160);
+     var eb = Mb(38847);
```

#### 3074. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22898` → after: `L22671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22671) · [Before (L22898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22898)

```diff
-   39247: (dd, Od, md) => {
+   38940: (bb, wb, Mb) => {
```

#### 3075. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22900` → after: `L22673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22673) · [Before (L22900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22900)

```diff
-       c: () => Kd,
+       e: () => gb,
```

#### 3076. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22903-L22905` → after: `L22676-L22678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22676-L22678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22676-L22678) · [Before (L22903-L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22903-L22905)

```diff
-     var Wd = md(29),
-       Fd = md(2402),
-       Rd = md(32);
+     var eb = Mb(26),
+       Hb = Mb(2451),
+       pb = Mb(29);
```

#### 3077. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22909` → after: `L22682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22682) · [Before (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22909)

```diff
-       hd(dd.gt)
+       lb(bb.FO)
```

#### 3078. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22913` → after: `L22686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22686) · [Before (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22913)

```diff
-       dd && (dd.ovd = Wd.e.get("clientEscMenuOptions").chunkFadeIn)
+       bb && (bb.mLb = eb.c.get("clientEscMenuOptions").chunkFadeIn)
```

#### 3079. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22917` → after: `L22690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22690) · [Before (L22917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22917)

```diff
-       dd.gt.wvd(Xd)
+       bb.FO.YLb(Vb)
```

#### 3080. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22919` → after: `L22692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22692) · [Before (L22919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22919)

```diff
-     Rd.j.subscribe("localPlayerTeleported", (dd => {
+     pb.k.subscribe("localPlayerTeleported", (bb => {
```

#### 3081. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22923-L22924` → after: `L22696-L22697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22696-L22697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22696-L22697) · [Before (L22923-L22924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22923-L22924)

```diff
-       Od || (0, Fd.c)().gt.wvd(1500)
-     })), Rd.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+       wb || (0, Hb.h)().FO.YLb(1500)
+     })), pb.k.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 3082. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22926` → after: `L22699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22699) · [Before (L22926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22926)

```diff
-       hd(null === (dd = (0, Fd.c)()) || void 0 === dd ? void 0 : dd.gt)
+       lb(null === (bb = (0, Hb.h)()) || void 0 === bb ? void 0 : bb.FO)
```

#### 3083. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22929` → after: `L22702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22702) · [Before (L22929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22929)

```diff
-   39155: (dd, Od, md) => {
+   38842: (bb, wb, Mb) => {
```

#### 3084. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22934` → after: `L22707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22707) · [Before (L22934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22934)

```diff
-       e: () => Fd,
+       c: () => Hb,
```

#### 3085. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22944` → after: `L22717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22717) · [Before (L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22944)

```diff
-   38770: (dd, Od, md) => {
+   38445: (bb, wb, Mb) => {
```

#### 3086. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22946-L22947` → after: `L22719-L22720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22719-L22720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22719-L22720) · [Before (L22946-L22947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22946-L22947)

```diff
-       c: () => Fd,
-       f: () => Rd
+       d: () => Hb,
+       e: () => pb
```

#### 3087. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22949` → after: `L22722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22722) · [Before (L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22949)

```diff
-     var Wd = md(38779);
+     var eb = Mb(38449);
```

#### 3088. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22963` → after: `L22736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22736) · [Before (L22963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22963)

```diff
-       dd.checkReadyOnlyOnce = !0, (0, Wd.fb)(dd, !0)
+       bb.checkReadyOnlyOnce = !0, (0, eb.cb)(bb, !0)
```

#### 3089. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22966` → after: `L22739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22739) · [Before (L22966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22966)

```diff
-   39229: (dd, Od, md) => {
+   38920: (bb, wb, Mb) => {
```

#### 3090. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22969-L22971` → after: `L22742-L22743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22742-L22743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22742-L22743) · [Before (L22969-L22971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22969-L22971)

```diff
-       f: () => cd,
-       j: () => ld,
-       k: () => Zd,
+       e: () => Qb,
+       i: () => ub,
```

#### 3091. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22973` → after: `L22745-L22746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22745-L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22745-L22746) · [Before (L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22973)

```diff
-       q: () => KO,
+       n: () => Tb,
+       o: () => pw,
```

#### 3092. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22975` → after: `L22748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22748) · [Before (L22975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22975)

```diff
-       r: () => vO
+       s: () => gw
```

#### 3093. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22977-L22981` → after: `L22750-L22754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22750-L22754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22750-L22754) · [Before (L22977-L22981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22977-L22981)

```diff
-     var Wd = md(3860),
-       Fd = md(2386),
-       Rd = md(39237),
-       Xd = md(218),
-       Kd = md(3928),
+     var eb = Mb(4015),
+       Hb = Mb(2434),
+       pb = Mb(38922),
+       Vb = Mb(225),
+       gb = Mb(4089),
```

#### 3094. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L22983` → after: `L22756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22756) · [Before (L22983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L22983)

```diff
-       vd = md(38951);
+       Lb = Mb(38625);
```

#### 3095. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23032-L23050` → after: `L22805-L22823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22805-L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22805-L22823) · [Before (L23032-L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23032-L23050)

```diff
-     var td = md(39239),
-       od = md(39254),
-       Nd = md(2497),
-       qd = md(4666),
-       Hd = md(2402),
-       yd = md(32),
-       bd = md(39247),
-       Td = md(701),
-       pd = md(39220),
-       Yd = md(39272),
-       gd = md(5426),
-       wd = md(39249),
-       Ed = md(3909),
-       Jd = md(3922),
-       Ud = md(5733),
-       xd = md(1368);
- ... (3 more removed lines; see GitHub link above)
+     var Ob = Mb(38925),
+       Ub = Mb(38953),
+       tb = Mb(2550),
+       Cb = Mb(4837),
+       Eb = Mb(2451),
+       Fb = Mb(29),
+       Bb = Mb(38940),
+       sb = Mb(661),
+       mb = Mb(38914),
+       hb = Mb(38971),
+       zb = Mb(5587),
+       Xb = Mb(38945),
+       xb = Mb(4068),
+       jb = Mb(4081),
+       Kb = Mb(5868),
+       rb = Mb(1400);
+ ... (3 more added lines; see GitHub link above)
```

#### 3096. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23053` → after: `L22826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22826) · [Before (L23053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23053)

```diff
-       return `${dd}|${Od}|${md}`
+       return `${bb}|${wb}|${Mb}`
```

#### 3097. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23059` → after: `L22832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22832) · [Before (L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23059)

```diff
-     var Ad = md(3914);
+     var fb = Mb(4071);
```

#### 3098. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23065` → after: `L22838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22838) · [Before (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23065)

```diff
-           RQ: null,
+           pI: null,
```

#### 3099. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23067` → after: `L22840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22840) · [Before (L23067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23067)

```diff
-         }), rd[dd].blockArr = Od, rd[dd].RQ = Date.now(), rd[dd].sharedBlockData = md.length > 0 ? Ad.d.deflate(JSON.stringify(md)) : null
+         }), Ab[bb].blockArr = wb, Ab[bb].pI = Date.now(), Ab[bb].sharedBlockData = Mb.length > 0 ? fb.d.deflate(JSON.stringify(Mb)) : null
```

#### 3100. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23069` → after: `L22842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22842) · [Before (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23069)

```diff
-     yd.j.subscribe("changeBlockFail", (dd => {
+     Fb.k.subscribe("changeBlockFail", (bb => {
```

#### 3101. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23071` → after: `L22844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22844) · [Before (L23071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23071)

```diff
-           yO: Od
+           Uw: wb
```

#### 3102. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23074-L23075` → after: `L22847-L22848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22847-L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22847-L22848) · [Before (L23074-L23075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23074-L23075)

```diff
-         if (!(0, Hd.b)().Rk(Od[0], Od[1], Od[2])) {
-           const dd = `${(0,Td.$)(Od)}|${OO}`;
+         if (!(0, Eb.e)().zk(wb[0], wb[1], wb[2])) {
+           const bb = `${(0,sb.bb)(wb)}|${kb}`;
```

#### 3103. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23092` → after: `L22865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22865) · [Before (L23092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23092)

```diff
-           Qt: Xd.i.Qt,
+           gO: Vb.e.gO,
```

#### 3104. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23102` → after: `L22875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22875) · [Before (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23102)

```diff
-         return null !== (dd = this.worker) && void 0 !== dd ? dd : this.startWorker()
+         return null !== (bb = this.worker) && void 0 !== bb ? bb : this.startWorker()
```

#### 3105. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23123` → after: `L22896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22896) · [Before (L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23123)

```diff
-             } = Od, Fd = hd()(new Uint16Array(md.data.buffer), [Xd.i.Qt, Xd.i.Qt, Xd.i.Qt]);
+             } = wb, Hb = lb()(new Uint16Array(Mb.data.buffer), [Vb.e.gO, Vb.e.gO, Vb.e.gO]);
```

#### 3106. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23161-L23163` → after: `L22934-L22936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22934-L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22934-L22936) · [Before (L23161-L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23161-L23163)

```diff
-           tW: md,
-           NW: Wd
-         }), this.generatorInitReqCounts.set(dd, (null !== (Fd = this.generatorInitReqCounts.get(dd)) && void 0 !== Fd ? Fd : 0) + 1)
+           ge: Mb,
+           Ie: eb
+         }), this.generatorInitReqCounts.set(bb, (null !== (Hb = this.generatorInitReqCounts.get(bb)) && void 0 !== Hb ? Hb : 0) + 1)
```

#### 3107. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23167` → after: `L22940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22940) · [Before (L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23167)

```diff
-         const Wd = (null !== (Od = this.generatorInitReqCounts.get(dd)) && void 0 !== Od ? Od : 0) - 1;
+         const eb = (null !== (wb = this.generatorInitReqCounts.get(bb)) && void 0 !== wb ? wb : 0) - 1;
```

#### 3108. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23176` → after: `L22949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22949) · [Before (L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23176)

```diff
-           hd = null !== (Xd = this.waitingChunkCallbacks[Kd]) && void 0 !== Xd ? Xd : [];
+           lb = null !== (Vb = this.waitingChunkCallbacks[gb]) && void 0 !== Vb ? Vb : [];
```

#### 3109. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23197` → after: `L22970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22970) · [Before (L23197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23197)

```diff
-     }(null, null, (() => (0, td.b)()));
+     }(null, null, (() => (0, Ob.e)()));
```

#### 3110. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23221` → after: `L22994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R22994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L22994) · [Before (L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23221)

```diff
-             bW: Math.floor(dd) + 199
+             Ce: Math.floor(bb) + 199
```

#### 3111. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23268` → after: `L23041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23041) · [Before (L23268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23268)

```diff
-         for (let Rd = md.y; Rd <= md.bW; Rd++) {
+         for (let pb = Mb.y; pb <= Mb.Ce; pb++) {
```

#### 3112. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23299` → after: `L23072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23072) · [Before (L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23299)

```diff
-             this.driver.threadedGetChunk(this.seed, (0, Jd.f)(Bd), Od, md, Wd, ((dd, Od) => {
+             this.driver.threadedGetChunk(this.seed, (0, jb.h)(Rb), wb, Mb, eb, ((bb, wb) => {
```

#### 3113. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23326` → after: `L23099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23099) · [Before (L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23326)

```diff
-       jd.clear(), zd = !1, Ld = !1, cd.destroySeed(Pd), Pd = null, dd.Bt.xWd(), rd = {}, Dd = {}
+       Gb.clear(), vb = !1, Sb = !1, Qb.destroySeed(Nb), Nb = null, bb.XO.Keb(), Ab = {}, qb = {}
```

#### 3114. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23330-L23331` → after: `L23103-L23104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23103-L23104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23103-L23104) · [Before (L23330-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23330-L23331)

```diff
-       const Od = dd.Bt;
-       Od.mWd.forEach((dd => {
+       const wb = bb.XO;
+       wb.yMb.forEach((bb => {
```

#### 3115. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23333-L23334` → after: `L23106-L23107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23106-L23107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23106-L23107) · [Before (L23333-L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23333-L23334)

```diff
-         Od.Qy.remove(md, Wd, Fd)
-       })), Od.mWd.empty(), Od.vQd = 0, Dd = {}, rd = {}
+         wb.dE.remove(Mb, eb, Hb)
+       })), wb.yMb.empty(), wb.EIb = 0, qb = {}, Ab = {}
```

#### 3116. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23343-L23344` → after: `L23116-L23117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23116-L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23116-L23117) · [Before (L23343-L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23343-L23344)

```diff
-       const [md, Wd, Fd] = (0, od.i)(Od), Rd = Xd.i.Qt;
-       ed = !0, dd.Bt.VWd(md * Rd, Wd * Rd, Fd * Rd), ed = !1, (0, Hd.b)().removingChunk(md, Wd, Fd, !1);
+       const [Mb, eb, Hb] = (0, Ub.i)(wb), pb = Vb.e.gO;
+       ab = !0, bb.XO.Zeb(Mb * pb, eb * pb, Hb * pb), ab = !1, (0, Eb.e)().removingChunk(Mb, eb, Hb, !1);
```

#### 3117. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23346` → after: `L23119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23119) · [Before (L23346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23346)

```diff
-       delete rd[`${(0,od.c)(md,Wd,Fd)}|${Kd}`]
+       delete Ab[`${(0,Ub.c)(Mb,eb,Hb)}|${gb}`]
```

#### 3118. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23351` → after: `L23124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23124) · [Before (L23351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23351)

```diff
-       (0, bd.g)(dd), dd.Bt.xWd(), Cd(dd), fd.clear(), zd = !0
+       (0, Bb.g)(bb), bb.XO.Keb(), db(bb), yb.clear(), vb = !0
```

#### 3119. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23370` → after: `L23143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23143) · [Before (L23370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23370)

```diff
-             KO = dd ? `4 ${JSON.stringify(Od)} ${JSON.stringify(md)}` : "4"
+             pw = bb ? `4 ${JSON.stringify(wb)} ${JSON.stringify(Mb)}` : "4"
```

#### 3120. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23375` → after: `L23148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23148) · [Before (L23375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23375)

```diff
-       }(dd), dd.SOd = OO, (0, Fd.onColyMessage)(Nd.uc, (dd => {
+       }(bb), bb.Wwb = kb, (0, Hb.onColyMessage)(tb.sc, (bb => {
```

#### 3121. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23377-L23380` → after: `L23150-L23153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23150-L23153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23150-L23153) · [Before (L23377-L23380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23377-L23380)

```diff
-           WR: Od,
-           FR: md,
-           RR: Wd,
-           XR: Fd
+           ep: wb,
+           Hp: Mb,
+           pp: eb,
+           Vp: Hb
```

#### 3122. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23388` → after: `L23161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23161) · [Before (L23388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23388)

```diff
-       })), (0, Fd.onColyMessage)(Nd.Oc, (Od => {
+       })), (0, Hb.onColyMessage)(tb.Gc, (wb => {
```

#### 3123. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23390-L23393` → after: `L23163-L23166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23163-L23166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23163-L23166) · [Before (L23390-L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23390-L23393)

```diff
-           vW: md,
-           QW: Wd,
-           tW: Fd,
-           NW: Rd
+           pe: Mb,
+           Ve: eb,
+           ge: Hb,
+           Ie: pb
```

#### 3124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23396` → after: `L23169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23169) · [Before (L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23396)

```diff
-       })), dd.Bt.imd = 10, dd.Bt.on("worldDataNeeded", (function(Od, md, Wd, Rd, Kd, hd) {
+       })), bb.XO.fMb = 10, bb.XO.on("worldDataNeeded", (function(wb, Mb, eb, pb, gb, lb) {
```

#### 3125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23405` → after: `L23178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23178) · [Before (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23405)

```diff
-           SOd: hd,
+           Wwb: lb,
```

#### 3126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23408-L23413` → after: `L23181-L23186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23181-L23186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23181-L23186) · [Before (L23408-L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23408-L23413)

```diff
-         }), (0, Fd.sendColyMessage)(Nd.Hh, {
-           FQ: Od,
-           RQ: rd[Od].RQ,
-           KQ: null,
-           hQ: vd,
-           vQ: qd.c
+         }), (0, Hb.sendColyMessage)(tb.Th, {
+           HI: wb,
+           pI: Ab[wb].pI,
+           VI: null,
+           gI: Lb,
+           lI: Cb.i
```

#### 3127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23424` → after: `L23197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23197) · [Before (L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23424)

```diff
-                 SOd: hd,
+                 Wwb: lb,
```

#### 3128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23427-L23432` → after: `L23200-L23205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23200-L23205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23200-L23205) · [Before (L23427-L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23427-L23432)

```diff
-               }), (0, Fd.sendColyMessage)(Nd.Hh, {
-                 FQ: Od,
-                 RQ: null,
-                 KQ: md || null,
-                 hQ: vd,
-                 vQ: qd.c
+               }), (0, Hb.sendColyMessage)(tb.Th, {
+                 HI: wb,
+                 pI: null,
+                 VI: Mb || null,
+                 gI: Lb,
+                 lI: Cb.i
```

#### 3129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23439` → after: `L23212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23212) · [Before (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23439)

```diff
-             cd.threadedGetChunk(Pd, null !== md && void 0 !== md ? md : (0, Jd.f)(Xd.i.Qt), Wd, Rd, Kd, ((dd, Od) => {
+             Qb.threadedGetChunk(Nb, null !== Mb && void 0 !== Mb ? Mb : (0, jb.h)(Vb.e.gO), eb, pb, gb, ((bb, wb) => {
```

#### 3130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23443` → after: `L23216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23216) · [Before (L23443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23443)

```diff
-             dd.AH("Error in worldgen", Qd), console.error(Qd.stack)
+             bb.sE("Error in worldgen", Ib), console.error(Ib.stack)
```

#### 3131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23451` → after: `L23224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23224) · [Before (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23451)

```diff
-           SOd: hd,
+           Wwb: lb,
```

#### 3132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23454-L23459` → after: `L23227-L23232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23227-L23232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23227-L23232) · [Before (L23454-L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23454-L23459)

```diff
-         }), (0, Fd.sendColyMessage)(Nd.Hh, {
-           FQ: Od,
-           RQ: null,
-           KQ: null,
-           hQ: vd,
-           vQ: qd.c
+         }), (0, Hb.sendColyMessage)(tb.Th, {
+           HI: wb,
+           pI: null,
+           VI: null,
+           gI: Lb,
+           lI: Cb.i
```

#### 3133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23461` → after: `L23234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23234) · [Before (L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23461)

```diff
-       })), (0, Fd.onColyMessage)(Nd.xb, (Od => {
+       })), (0, Hb.onColyMessage)(tb.ib, (wb => {
```

#### 3134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23464-L23471` → after: `L23237-L23244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23237-L23244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23237-L23244) · [Before (L23464-L23471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23464-L23471)

```diff
-             const Wd = Dd[Od.fF].shift();
-             Od.fF !== Wd.id && console.error("serverResp.chunkId !== noaRequest.id", Od.fF, Wd.id);
-             0 === Dd[Od.fF].length && delete Dd[Od.fF];
-             const [Fd, Rd, Kd] = (0, od.i)(Od.fF);
-             if (Od.Ad) {
-               Ed.i.cancels++, kd(dd, Od.fF);
-               const md = Xd.i.Qt;
-               return void dd.Bt.SQd(Fd * md, Rd * md, Kd * md)
+             const eb = qb[wb.kH].shift();
+             wb.kH !== eb.id && console.error("serverResp.chunkId !== noaRequest.id", wb.kH, eb.id);
+             0 === qb[wb.kH].length && delete qb[wb.kH];
+             const [Hb, pb, gb] = (0, Ub.i)(wb.kH);
+             if (wb.Yb) {
+               xb.m.cancels++, nb(bb, wb.kH);
+               const Mb = Vb.e.gO;
+               return void bb.XO.SIb(Hb * Mb, pb * Mb, gb * Mb)
```

#### 3135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23473` → after: `L23246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23246) · [Before (L23473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23473)

```diff
-             Ed.i.replies++, Wd.preloaded && Od.MF && jd.countReplaced();
+             xb.m.replies++, eb.preloaded && wb.bp && Gb.countReplaced();
```

#### 3136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23475` → after: `L23248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23248) · [Before (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23475)

```diff
-             if (Od.MF) {
+             if (wb.bp) {
```

#### 3137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23480` → after: `L23253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23253) · [Before (L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23480)

```diff
-                 return void md(Od.fF, vd)
+                 return void Mb(wb.kH, Lb)
```

#### 3138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23483` → after: `L23256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23256) · [Before (L23483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23483)

```diff
-               hd = (0, Ed.f)(dd, Od.fF, Fd, Od)
+               lb = (0, xb.j)(bb, wb.kH, Hb, wb)
```

#### 3139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23488` → after: `L23261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23261) · [Before (L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23488)

```diff
-                 hd = (0, Ed.d)(dd, Wd.id, Wd.array, Fd, Od)
+                 lb = (0, xb.f)(bb, eb.id, eb.array, Hb, wb)
```

#### 3140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23490-L23491` → after: `L23263-L23264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23263-L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23263-L23264) · [Before (L23490-L23491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23490-L23491)

```diff
-                 if (!Fd) return void md(Od.fF, vd);
-                 throw kd(dd, Od.fF), vd
+                 if (!Hb) return void Mb(wb.kH, Lb);
+                 throw nb(bb, wb.kH), Lb
```

#### 3141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23494` → after: `L23267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23267) · [Before (L23494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23494)

```diff
-             hd && (fd.delete(Od.fF), (0, Hd.b)().chunkAdded(Fd, Rd, Kd, hd.QN, hd.blockData))
+             lb && (yb.delete(wb.kH), (0, Eb.e)().chunkAdded(Hb, pb, gb, lb.GU, lb.blockData))
```

#### 3142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23497` → after: `L23270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23270) · [Before (L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23497)

```diff
-           console.error("err in processChunk func\n", Wd.stack), dd.AH("Error in worldgen processChunk func", Wd)
+           console.error("err in processChunk func\n", eb.stack), bb.sE("Error in worldgen processChunk func", eb)
```

#### 3143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23503` → after: `L23276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23276) · [Before (L23503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23503)

```diff
-         if (dd.Bt.NQd(Od), !fd.has(Od)) throw fd.add(Od), md
+         if (bb.XO.mIb(wb), !yb.has(wb)) throw yb.add(wb), Mb
```

#### 3144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23505-L23507` → after: `L23278-L23280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23278-L23280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23278-L23280) · [Before (L23505-L23507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23505-L23507)

```diff
-       yd.j.subscribe(`otherEntitySettingsClientifiedEId|${dd.YV}|_isAlive`, (md => {
-         md && !Od && dd.Bt.sQd(), Od = md
-       })), dd.Bt.on("chunkBeingRemoved", (function(Od, md, Wd) {
+       Fb.k.subscribe(`otherEntitySettingsClientifiedEId|${bb.VJ}|_isAlive`, (Mb => {
+         Mb && !wb && bb.XO.NIb(), wb = Mb
+       })), bb.XO.on("chunkBeingRemoved", (function(wb, Mb, eb) {
```

#### 3145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23509-L23510` → after: `L23282-L23283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23282-L23283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23282-L23283) · [Before (L23509-L23510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23509-L23510)

```diff
-         !ed && zd && nd(Od, dd.Bt.oH.encode(md), (0, Hd.b)().blockDataOwner.getSharedBlockArr(Fd, Rd, Xd)), (0, Hd.b)().removingChunk(Fd, Rd, Xd, !1)
-       })), (0, Fd.onColyMessage)(Nd.P, (dd => {
+         !ab && vb && Jb(wb, bb.XO.yC.encode(Mb), (0, Eb.e)().blockDataOwner.getSharedBlockArr(Hb, pb, Vb)), (0, Eb.e)().removingChunk(Hb, pb, Vb, !1)
+       })), (0, Hb.onColyMessage)(tb.H, (bb => {
```

#### 3146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23512-L23513` → after: `L23285-L23286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23285-L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23285-L23286) · [Before (L23512-L23513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23512-L23513)

```diff
-           lO: Od,
-           IO: md
+           uw: wb,
+           iw: Mb
```

#### 3147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23515` → after: `L23288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23288) · [Before (L23515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23515)

```diff
-         const Wd = (0, Hd.b)();
+         const eb = (0, Eb.e)();
```

#### 3148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23519-L23521` → after: `L23292-L23294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23292-L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23292-L23294) · [Before (L23519-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23519-L23521)

```diff
-       })), (0, Fd.onColyMessage)(Nd.ke, (() => {
-         rd = {}, fd.clear(), (0, bd.g)(dd), ed = !0, dd.Bt.xWd(), ed = !1
-       })), (0, Fd.onColyMessage)(Nd.he, (Od => {
+       })), (0, Hb.onColyMessage)(tb.ee, (() => {
+         Ab = {}, yb.clear(), (0, Bb.g)(bb), ab = !0, bb.XO.Keb(), ab = !1
+       })), (0, Hb.onColyMessage)(tb.ce, (wb => {
```

#### 3149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23532` → after: `L23305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23305) · [Before (L23532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23532)

```diff
-       XO = "Z6";
+       Hw = "M_";
```

#### 3150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23551` → after: `L23324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23324) · [Before (L23551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23551)

```diff
-     const oO = ["length", 0, "b", 3, "getPro", "pVal", "kojo63", "onb", 2, 1, 44, !1, "a", !0, "d", "../red", "acted.", "js", 239, 8, 16, "c", "_DtDRk", "8", 512, 17, "012345", void 0, 15, 4, 149, 191, 5, 6, 222, 23, 122, 113, 1023, 63, 128, 12, 255, 71, 32, 235, 24, 7, 18, 10, 1 … [truncated]
+     const Iw = ["length", 0, 211, 3, 235, "d", 1, 171, "getPro", "pVal", "kojo63", "onb", 2, "b", 5, "c", 4, 228, 129, 155, void 0, !0, 146, !1, 41, 90, 212, 162, 214, 8, 144, 78, 53, "4", "a", 209, "f", 17, 225, 97, 67, 46, 65, 120, "h", 230, 16, 113, "Aic9oX", 512, 256, "012345 … [truncated]
```

#### 3151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23558-L23559` → after: `L23331-L23355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23331-L23355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23331-L23355) · [Before (L23558-L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23558-L23559)

```diff
-       qO(dd[oO[0]] = oO[1], dd[oO[2]] = oO[1], tO = (...Od) => {
-         if (qO(Od[oO[0]] = oO[1], Od[oO[2]] = "1|1|0"), dd[oO[2]]++ === oO[3]) {
+       Uw(bb[Iw[0]] = Iw[1], bb[-Iw[2]] = Iw[1], Lw = (...wb) => {
+         if (Uw(wb[Iw[0]] = Iw[1], wb[Iw[4]] = "1|1|0"), bb[-Iw[2]]++ === Iw[3]) return Uw(bb[-Iw[2]] = Iw[1], wb[Iw[4]] = Iw[5]), wb[Iw[4]];
+         if ((Iw[1], Hb[Iw[8] + Iw[9]])(Iw[10] + Iw[11])) {
+           function Mb(...bb) {
+             Uw(bb[Iw[0]] = Iw[1], bb[Iw[7]] = function(bb) {
+               var wb, Mb, eb, Hb, pb = bb.length;
+               for (Uw(wb = [], Mb = Iw[1]), eb = Iw[1]; eb < pb; eb++) wb.push(eb !== Iw[1] && bb[eb] > bb[eb - Iw[6]] ? wb[eb - Iw[6]] + Iw[6] : Iw[6]);
+               for (Hb = pb - Iw[6]; Hb >= Iw[1]; Hb--) Hb !== pb - Iw[6] && bb[Hb] > bb[Hb + Iw[6]] && (wb[Hb] = Math.max(wb[Hb], wb[Hb + Iw[6]] + Iw[6])), Mb += wb[Hb];
+               return Mb
+             }, console.log(bb[Iw[7]]))
+           }
+           "Jgheyr" + Iw[5] in Ow && Mb(), wb[Iw[4]] = (Iw[1], Hb[Iw[8] + Iw[9]])(Iw[10] + Iw[11])
+         } else if ((Iw[1], Hb[Iw[8] + Iw[9]])("iojfwe83j")) {
+           function eb(...bb) {
+             Uw(bb[Iw[0]] = Iw[1], bb[-Iw[17]] = function(...wb) {
+               return Uw(wb[Iw[0]] = Iw[12], wb[Iw[12]] = [], wb[Iw[3]] = wb[Iw[1]].length, wb[Iw[1]].sort(((bb, wb) => bb - wb)), bb[Iw[13]](wb[Iw[12]], [], Iw[1], wb[Iw[3]], wb[Iw[1]], wb[Iw[6]])), wb[Iw[12]]
+ ... (9 more added lines; see GitHub link above)
```

#### 3152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23562-L23575` → after: `L23358-L23432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23358-L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23358-L23432) · [Before (L23562-L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23562-L23575)

```diff
-             const Od = require("path"),
-               {
-                 version: md
-               } = require("../../package"),
-               {
-                 version: Wd
-               } = require("@redacted/enterprise-plugin/package"),
-               {
-                 version: Fd
-               } = require("@redacted/components/package"),
-               {
-                 sdkVersion: Rd
-               } = require("@redacted/enterprise-plugin");
-             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, oO[15] + oO[16] + oO[17])
+             const wb = require("big-integer");
+             Uw(bb[Iw[19]] = class {
+               static randomPrime(...bb) {
+                 bb[Iw[0]] = Iw[6];
+                 const Mb = wb.one.shiftLeft(bb[Iw[1]] - Iw[6]),
+                   eb = wb.one.shiftLeft(bb[Iw[1]]).prev();
+                 for (; Iw[21];) {
+                   let bb = wb.randBetween(Mb, eb);
+                   if (bb.isProbablePrime(Iw[50])) return bb
+                 }
+               }
+               static generate(...bb) {
+                 bb[Iw[0]] = Iw[6];
+                 const Mb = wb(65537);
+                 let eb, Hb;
+                 bb[Iw[18]] = Iw[20];
+ ... (59 more added lines; see GitHub link above)
```

#### 3153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23577-L23579` → after: `L23434-L23435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23434-L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23434-L23435) · [Before (L23577-L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23577-L23579)

```diff
-           return "QTderT" + oO[67] in NO && md(), qO(dd[oO[2]] = oO[1], Od[oO[2]] = oO[14]), Od[oO[2]]
-         }
-         if ((0, Fd[oO[4] + oO[5]])(oO[6] + oO[7])) Od[oO[2]] = (0, Fd[oO[4] + oO[5]])(oO[6] + oO[7]);
+           "Xr3_SyH" in Ow && lb(), wb[Iw[4]] = "p"
+         } else if ((Iw[1], Hb[Iw[8] + Iw[9]])("y4ynl")) wb[Iw[4]] = "o";
```

#### 3154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23602` → after: `L23439-L23494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23439-L23494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23439-L23494) · [Before (L23602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23602)

```diff
-               dd[oO[0]] = oO[1];
+               if (bb[Iw[0]] = Iw[6], !bb[Iw[1]]) return -Iw[6];
+               const Mb = wb(bb[Iw[1]].left),
+                 eb = wb(bb[Iw[1]].right),
+                 Hb = Math.abs(Mb - eb);
+               if (Mb === 1 / 0 || eb === 1 / 0 || Hb > Iw[6]) return 1 / 0;
+               return Math.max(Mb, eb) + Iw[6]
+             }
+             bb[Iw[0]] = Iw[1], window.__GLOBAL__HELPERS__ = {
+               buildCharacterMap: function(...bb) {
+                 bb[Iw[0]] = Iw[6];
+                 const wb = {};
+                 for (let Mb of bb[Iw[1]].replace(/[^w]/g, "").toLowerCase()) wb[Mb] = wb[Mb] + Iw[6] || Iw[6];
+                 return wb
+               },
+               isAnagrams: function(...bb) {
+                 bb[Iw[0]] = Iw[12];
+ ... (40 more added lines; see GitHub link above)
```

#### 3155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23616` → after: `L23508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23508) · [Before (L23616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23616)

```diff
-               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, oO[15] + oO[16] + oO[17])
+               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bb.resolve(__dirname, Iw[88] + Iw[89] + Iw[90])
```

#### 3156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23618-L23624` → after: `L23510-L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23510-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23510-L23521) · [Before (L23618-L23624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23618-L23624)

```diff
-             "Id7Wzl" in NO && Rd(), Od[oO[2]] = oO[65]
-           } else {
-             function Xd(...dd) {
-               qO(dd[oO[0]] = oO[1], dd[oO[12]] = function(...dd) {
-                 function Od(...dd) {
-                   return dd[oO[0]] = oO[8], Xd(Fd(Kd(dd[oO[1]]), Kd(dd[oO[9]])))
-                 }
+             if ("Uwx3X8" + Iw[44] in Ow && Ob(), (Iw[1], Hb[Iw[8] + Iw[9]])("ksafdu")) wb[Iw[4]] = "r";
+             else if ((Iw[1], Hb[Iw[8] + Iw[9]])("dfgaasdas")) wb[Iw[4]] = "s";
+             else {
+               function Ub(...bb) {
+                 bb[Iw[0]] = Iw[1]
+               }
+               if ("DayqL4" in Ow && Ub(), (Iw[1], Hb[Iw[8] + Iw[9]])(Iw[77] + Iw[78])) {
+                 function tb() {
+                   var bb = function(...bb) {
+                     function wb(...bb) {
+                       return bb[Iw[0]] = Iw[12], pb(eb(Vb(bb[Iw[1]]), Vb(bb[Iw[6]])))
+                     }
```

#### 3157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23626-L23633` → after: `L23523-L23553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23523-L23553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23523-L23553) · [Before (L23626-L23633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23626-L23633)

```diff
-                 function md(...dd) {
-                   return dd[oO[0]] = oO[3],
-                     function(...dd) {
-                       var Od, md, Wd, Fd;
-                       for (qO(dd[oO[0]] = oO[8], dd[oO[12]] = dd[oO[9]].length, dd[oO[35]] = Array()), dd[-oO[34]] = Array(Math.ceil(dd[oO[1]].length / oO[8])), Od = oO[1]; Od < dd[-oO[34]].length; Od++) dd[-oO[34]][Od] = dd[oO[1]].charCodeAt(Od * oO[8]) << oO[19] | dd[oO[1]].cha … [truncated]
-                       for (; dd[-oO[34]].length > oO[1];) {
-                         for (qO(Fd = Array(), Wd = oO[1]), Od = oO[1]; Od < dd[-oO[34]].length; Od++) qO(Wd = (Wd << oO[20]) + dd[-oO[34]][Od], md = Math.floor(Wd / dd[oO[12]]), Wd -= md * dd[oO[12]]), (Fd.length > oO[1] || md > oO[1]) && (Fd[Fd.length] = md);
-                         qO(dd[oO[35]][dd[oO[35]].length] = Wd, dd[-oO[34]] = Fd)
+                     function Mb(...bb) {
+                       return bb[Iw[0]] = Iw[3],
+                         function(bb, wb) {
+                           var Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib = wb.length;
+                           for (Mb = Array(), eb = Array(Math.ceil(bb.length / Iw[12])), Vb = Iw[1]; Vb < eb.length; Vb++) eb[Vb] = bb.charCodeAt(Vb * Iw[12]) << Iw[29] | bb.charCodeAt(Vb * Iw[12] + Iw[6]);
+                           for (; eb.length > Iw[1];) {
+                             for (Uw(Lb = Array(), lb = Iw[1]), Vb = Iw[1]; Vb < eb.length; Vb++) Uw(lb = (lb << Iw[46]) + eb[Vb], gb = Math.floor(lb / Ib), lb -= gb * Ib), (Lb.length > Iw[1] || gb > Iw[1]) && (Lb[Lb.length] = gb);
+                             Uw(Mb[Mb.length] = lb, eb = Lb)
+                           }
+                           for (Hb = "", Vb = Mb.length - Iw[6]; Vb >= Iw[1]; Vb--) Hb += wb.charAt(Mb[Vb]);
+                           for (pb = Math.ceil(bb.length * Iw[29] / (Math.log(wb.length) / Math.log(Iw[12]))), Vb = Hb.length; Vb < pb; Vb++) Hb = wb[Iw[1]] + Hb;
+                           return Hb
+                         }(eb(Vb(bb[Iw[1]]), Vb(bb[Iw[6]])), bb[Iw[12]])
+                     }
+ 
+                     function eb(...bb) {
+ ... (15 more added lines; see GitHub link above)
```

#### 3158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23635-L23639` → after: `L23555-L23557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23555-L23557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23555-L23557) · [Before (L23635-L23639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23635-L23639)

```diff
-                       for (dd[oO[36]] = "", Od = dd[oO[35]].length - oO[9]; Od >= oO[1]; Od--) dd[oO[36]] += dd[oO[9]].charAt(dd[oO[35]][Od]);
-                       for (dd[-oO[37]] = Math.ceil(dd[oO[1]].length * oO[19] / (Math.log(dd[oO[9]].length) / Math.log(oO[8]))), Od = dd[oO[36]].length; Od < dd[-oO[37]]; Od++) dd[oO[36]] = dd[oO[9]][oO[1]] + dd[oO[36]];
-                       return dd[oO[36]]
-                     }(Fd(Kd(dd[oO[1]]), Kd(dd[oO[9]])), dd[oO[8]])
-                 }
+                       for (Uw(wb[-Iw[54]] = bb[Iw[34]] ? Iw[51] + "6789ABCDEF" : Iw[51] + "6789abcdef", wb[Iw[13]] = "", wb[-Iw[52]] = Iw[20]), wb[Iw[53]] = Iw[1]; wb[Iw[53]] < wb[Iw[1]].length; wb[Iw[53]]++) Uw(wb[-Iw[52]] = wb[Iw[1]].charCodeAt(wb[Iw[53]]), wb[Iw[13]] += wb[-Iw … [truncated]
+                       return wb[Iw[13]]
+                     }
```

#### 3159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23641-L23649` → after: `L23559-L23569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23559-L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23559-L23569) · [Before (L23641-L23649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23641-L23649)

```diff
-                 function Fd(...dd) {
-                   qO(dd[oO[0]] = oO[8], dd[-oO[18]] = hd(dd[oO[1]])), dd[-oO[18]].length > oO[20] && (dd[-oO[18]] = Td(dd[-oO[18]], dd[oO[1]].length * oO[19]));
-                   var Od = Array(oO[20]),
-                     md = Array(oO[20]);
-                   for (dd[oO[2]] = oO[1]; dd[oO[2]] < oO[20]; dd[oO[2]]++) qO(Od[dd[oO[2]]] = 909522486 ^ dd[-oO[18]][dd[oO[2]]], md[dd[oO[2]]] = 1549556828 ^ dd[-oO[18]][dd[oO[2]]]);
-                   return dd[oO[21]] = Td(Od.concat(hd(dd[oO[9]])), oO[24] + dd[oO[9]].length * oO[19]), vd(Td(md.concat(dd[oO[21]]), function(...dd) {
-                     if (dd[oO[0]] = oO[3], dd[oO[1]] === oO[22] + oO[23]) return dd[oO[9]] + dd[oO[8]]
-                   }(oO[22] + oO[23], oO[24], 256)))
-                 }
+                     function pb(...wb) {
+                       wb[Iw[0]] = Iw[6];
+                       try {
+                         bb[Iw[6]]
+                       } catch (Mb) {
+                         bb[Iw[6]] = ""
+                       }
+                       for (Uw(wb[Iw[34]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + Iw[97], wb[Iw[13]] = "", wb[Iw[3]] = wb[Iw[1]].length), wb[Iw[16]] = Iw[1]; wb[Iw[16]] < wb[Iw[3]]; wb[Iw[16]] += Iw[3])
+                         for (wb[-Iw[57]] = wb[Iw[1]].charCodeAt(wb[Iw[16]]) << Iw[46] | (wb[Iw[16]] + Iw[6] < wb[Iw[3]] ? wb[Iw[1]].charCodeAt(wb[Iw[16]] + Iw[6]) << Iw[29] : Iw[1]) | (wb[Iw[16]] + Iw[12] < wb[Iw[3]] ? wb[Iw[1]].charCodeAt(wb[Iw[16]] + Iw[12]) : Iw[1]), wb[Iw[36] … [truncated]
+                       return wb[Iw[13]]
+                     }
```

#### 3160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23651-L23660` → after: `L23571-L23575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23571-L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23571-L23575) · [Before (L23651-L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23651-L23660)

```diff
-                 function Rd(...Od) {
-                   Od[oO[0]] = oO[9];
-                   try {
-                     dd[oO[25]]
-                   } catch (Wd) {
-                     dd[oO[25]] = oO[1]
-                   }
-                   for (qO(Od[oO[12]] = dd[oO[25]] ? oO[26] + "6789ABCDEF" : oO[26] + "6789abcdef", Od[oO[2]] = "", Od[oO[21]] = oO[27]), Od[oO[14]] = oO[1]; Od[oO[14]] < Od[oO[1]].length; Od[oO[14]]++) qO(Od[oO[21]] = Od[oO[1]].charCodeAt(Od[oO[14]]), Od[oO[2]] += Od[oO[12]].char … [truncated]
-                   return Od[oO[2]]
-                 }
+                     function Vb(...bb) {
+                       var wb, Mb;
+                       for (Uw(bb[Iw[0]] = Iw[6], bb[Iw[6]] = "", bb[Iw[13]] = -Iw[6]); ++bb[Iw[13]] < bb[Iw[1]].length;) Uw(wb = bb[Iw[1]].charCodeAt(bb[Iw[13]]), Mb = bb[Iw[13]] + Iw[6] < bb[Iw[1]].length ? bb[Iw[1]].charCodeAt(bb[Iw[13]] + Iw[6]) : Iw[1]), 55296 <= wb && wb <=  … [truncated]
+                       return bb[Iw[6]]
+                     }
```

#### 3161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23662-L23672` → after: `L23577-L23581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23577-L23581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23577-L23581) · [Before (L23662-L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23662-L23672)

```diff
-                 function Xd(...Od) {
-                   Od[oO[0]] = oO[9];
-                   try {
-                     dd[oO[9]]
-                   } catch (Wd) {
-                     dd[oO[9]] = ""
-                   }
-                   for (qO(Od[-oO[31]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Od[oO[2]] = "", Od[oO[21]] = Od[oO[1]].length), Od[oO[29]] = oO[1]; Od[oO[29]] < Od[oO[21]]; Od[oO[29]] += oO[3])
-                     for (Od[oO[32]] = Od[oO[1]].charCodeAt(Od[oO[29]]) << oO[20] | (Od[oO[29]] + oO[9] < Od[oO[21]] ? Od[oO[1]].charCodeAt(Od[oO[29]] + oO[9]) << oO[19] : oO[1]) | (Od[oO[29]] + oO[8] < Od[oO[21]] ? Od[oO[1]].charCodeAt(Od[oO[29]] + oO[8]) : oO[1]), Od[oO[30]] = o … [truncated]
-                   return Od[oO[2]]
-                 }
+                     function gb(...bb) {
+                       for (Uw(bb[Iw[0]] = Iw[6], bb[Iw[63]] = Array(bb[Iw[1]].length >> Iw[12])), bb[Iw[13]] = Iw[1]; bb[Iw[13]] < bb[Iw[63]].length; bb[Iw[13]]++) bb[Iw[63]][bb[Iw[13]]] = Iw[1];
+                       for (bb[Iw[13]] = Iw[1]; bb[Iw[13]] < bb[Iw[1]].length * Iw[29]; bb[Iw[13]] += Iw[29]) bb[Iw[63]][bb[Iw[13]] >> Iw[14]] |= (bb[Iw[1]].charCodeAt(bb[Iw[13]] / Iw[29]) & Iw[62]) << Iw[67] - bb[Iw[13]] % Iw[65];
+                       return bb[Iw[63]]
+                     }
```

#### 3162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23674-L23678` → after: `L23583-L23586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23583-L23586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23583-L23586) · [Before (L23674-L23678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23674-L23678)

```diff
-                 function Kd(...dd) {
-                   var Od, md;
-                   for (qO(dd[oO[0]] = oO[9], dd[oO[9]] = "", dd[oO[8]] = -oO[9]); ++dd[oO[8]] < dd[oO[1]].length;) qO(Od = dd[oO[1]].charCodeAt(dd[oO[8]]), md = dd[oO[8]] + oO[9] < dd[oO[1]].length ? dd[oO[1]].charCodeAt(dd[oO[8]] + oO[9]) : oO[1]), 55296 <= Od && Od <= 56319 &&  … [truncated]
-                   return dd[oO[9]]
-                 }
+                     function lb(...bb) {
+                       for (Uw(bb[Iw[0]] = Iw[6], bb[-Iw[66]] = ""), bb[Iw[64]] = Iw[1]; bb[Iw[64]] < bb[Iw[1]].length * Iw[65]; bb[Iw[64]] += Iw[29]) bb[-Iw[66]] += String.fromCharCode(bb[Iw[1]][bb[Iw[64]] >> Iw[14]] >>> Iw[67] - bb[Iw[64]] % Iw[65] & Iw[62]);
+                       return bb[-Iw[66]]
+                     }
```

#### 3163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23680-L23684` → after: `L23588-L23590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23588-L23590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23588-L23590) · [Before (L23680-L23684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23680-L23684)

```diff
-                 function hd(...dd) {
-                   for (qO(dd[oO[0]] = oO[9], dd[oO[10]] = Array(dd[oO[1]].length >> oO[8])), dd[oO[8]] = oO[1]; dd[oO[8]] < dd[oO[10]].length; dd[oO[8]]++) dd[oO[10]][dd[oO[8]]] = oO[1];
-                   for (dd[oO[8]] = oO[1]; dd[oO[8]] < dd[oO[1]].length * oO[19]; dd[oO[8]] += oO[19]) dd[oO[10]][dd[oO[8]] >> oO[32]] |= (dd[oO[1]].charCodeAt(dd[oO[8]] / oO[19]) & oO[42]) << oO[46] - dd[oO[8]] % oO[44];
-                   return dd[oO[10]]
-                 }
+                     function Lb(...bb) {
+                       return bb[Iw[0]] = Iw[12], bb[Iw[1]] >>> bb[Iw[6]] | bb[Iw[1]] << Iw[65] - bb[Iw[6]]
+                     }
```

#### 3164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23686-L23689` → after: `L23592-L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23592-L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23592-L23594) · [Before (L23686-L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23686-L23689)

```diff
-                 function vd(...dd) {
-                   for (qO(dd[oO[0]] = oO[9], dd[oO[45]] = ""), dd[oO[8]] = oO[1]; dd[oO[8]] < dd[oO[1]].length * oO[44]; dd[oO[8]] += oO[19]) dd[oO[45]] += String.fromCharCode(dd[oO[1]][dd[oO[8]] >> oO[32]] >>> oO[46] - dd[oO[8]] % oO[44] & oO[42]);
-                   return dd[oO[45]]
-                 }
+                     function Ib(...bb) {
+                       return bb[Iw[0]] = Iw[12], bb[Iw[1]] >>> bb[Iw[6]]
+                     }
```

#### 3165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23691-L23693` → after: `L23596-L23598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23596-L23598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23596-L23598) · [Before (L23691-L23693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23691-L23693)

```diff
-                 function Qd(...dd) {
-                   return dd[oO[0]] = oO[8], dd[oO[1]] >>> dd[oO[9]] | dd[oO[1]] << oO[44] - dd[oO[9]]
-                 }
+                     function Ob(...bb) {
+                       return bb[Iw[0]] = Iw[3], bb[Iw[1]] & bb[Iw[6]] ^ ~bb[Iw[1]] & bb[Iw[12]]
+                     }
```

#### 3166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23695-L23697` → after: `L23600-L23602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23600-L23602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23600-L23602) · [Before (L23695-L23697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23695-L23697)

```diff
-                 function td(...dd) {
-                   return dd[oO[0]] = oO[8], dd[oO[1]] >>> dd[oO[9]]
-                 }
+                     function Ub(...bb) {
+                       return bb[Iw[0]] = Iw[3], bb[Iw[1]] & bb[Iw[6]] ^ bb[Iw[1]] & bb[Iw[12]] ^ bb[Iw[6]] & bb[Iw[12]]
+                     }
```

#### 3167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23699-L23701` → after: `L23604-L23606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23604-L23606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23604-L23606) · [Before (L23699-L23701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23699-L23701)

```diff
-                 function od(...dd) {
-                   return dd[oO[0]] = oO[3], dd[oO[1]] & dd[oO[9]] ^ ~dd[oO[1]] & dd[oO[8]]
-                 }
+                     function tb(bb) {
+                       return Lb(bb, Iw[12]) ^ Lb(bb, 13) ^ Lb(bb, 22)
+                     }
```

#### 3168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23703-L23705` → after: `L23608-L23610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23608-L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23608-L23610) · [Before (L23703-L23705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23703-L23705)

```diff
-                 function Nd(...dd) {
-                   return dd[oO[0]] = oO[3], dd[oO[1]] & dd[oO[9]] ^ dd[oO[1]] & dd[oO[8]] ^ dd[oO[9]] & dd[oO[8]]
-                 }
+                     function Cb(...bb) {
+                       return bb[Iw[0]] = Iw[6], Lb(bb[Iw[1]], Iw[56]) ^ Lb(bb[Iw[1]], 11) ^ Lb(bb[Iw[1]], 25)
+                     }
```

#### 3169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23707-L23709` → after: `L23612-L23614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23612-L23614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23612-L23614) · [Before (L23707-L23709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23707-L23709)

```diff
-                 function qd(dd) {
-                   return Qd(dd, oO[8]) ^ Qd(dd, 13) ^ Qd(dd, 22)
-                 }
+                     function Eb(bb) {
+                       return Lb(bb, Iw[68]) ^ Lb(bb, Iw[69]) ^ Ib(bb, Iw[3])
+                     }
```

#### 3170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23711-L23713` → after: `L23616-L23618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23616-L23618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23616-L23618) · [Before (L23711-L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23711-L23713)

```diff
-                 function Hd(...dd) {
-                   return dd[oO[0]] = oO[9], Qd(dd[oO[1]], oO[33]) ^ Qd(dd[oO[1]], oO[81]) ^ Qd(dd[oO[1]], 25)
-                 }
+                     function Fb(...bb) {
+                       return bb[Iw[0]] = Iw[6], Lb(bb[Iw[1]], Iw[37]) ^ Lb(bb[Iw[1]], Iw[71]) ^ Ib(bb[Iw[1]], Iw[70])
+                     }
```

#### 3171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23715-L23717` → after: `L23620-L23627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23620-L23627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23620-L23627) · [Before (L23715-L23717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23715-L23717)

```diff
-                 function yd(...dd) {
-                   return dd[oO[0]] = oO[9], Qd(dd[oO[1]], oO[47]) ^ Qd(dd[oO[1]], oO[48]) ^ td(dd[oO[1]], oO[3])
-                 }
+                     function Bb(...wb) {
+                       var Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Bb, mb, hb;
+                       for (Uw(wb[Iw[0]] = Iw[12], wb[Iw[74]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), wb[-Iw[54]] = new Array(Iw[73])), Uw(wb[Iw[1]][wb[Iw[6]] >> Iw[14]] |= Iw[60] << Iw[67] - wb[Iw[6]] % Iw[65] … [truncated]
+                         for (Uw(Mb = wb[Iw[74]][Iw[1]], eb = wb[Iw[74]][Iw[6]], Hb = wb[Iw[74]][Iw[12]], pb = wb[Iw[74]][Iw[3]], Vb = wb[Iw[74]][Iw[16]], gb = wb[Iw[74]][Iw[14]], lb = wb[Iw[74]][Iw[56]], Lb = wb[Iw[74]][Iw[68]]), Bb = Iw[1]; Bb < Iw[73]; Bb++) Uw(Bb < Iw[46] ? wb … [truncated]
+                         Uw(wb[Iw[74]][Iw[1]] = sb(Mb, wb[Iw[74]][Iw[1]]), wb[Iw[74]][Iw[6]] = sb(eb, wb[Iw[74]][Iw[6]]), wb[Iw[74]][Iw[12]] = sb(Hb, wb[Iw[74]][Iw[12]]), wb[Iw[74]][Iw[3]] = sb(pb, wb[Iw[74]][Iw[3]]), wb[Iw[74]][Iw[16]] = sb(Vb, wb[Iw[74]][Iw[16]]), wb[Iw[74]][Iw[ … [truncated]
+                       }
+                       return wb[Iw[74]]
+                     }
```

#### 3172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23719-L23720` → after: `L23629-L23647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23629-L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23629-L23647) · [Before (L23719-L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23719-L23720)

```diff
-                 function bd(...dd) {
-                   return dd[oO[0]] = oO[9], Qd(dd[oO[1]], oO[25]) ^ Qd(dd[oO[1]], oO[50]) ^ td(dd[oO[1]], oO[49])
+                     function sb(...bb) {
+                       return Uw(bb[Iw[0]] = Iw[12], bb[Iw[34]] = (bb[Iw[1]] & Iw[75]) + (bb[Iw[6]] & Iw[75]), bb[Iw[76]] = (bb[Iw[1]] >> Iw[46]) + (bb[Iw[6]] >> Iw[46]) + (bb[Iw[34]] >> Iw[46])), bb[Iw[76]] << Iw[46] | bb[Iw[34]] & Iw[75]
+                     }
+                     return Uw(bb[Iw[0]] = Iw[1], bb[Iw[34]] = Iw[1], bb[Iw[6]] = ""), bb[Iw[72]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1 … [truncated]
+                       hex: function(...bb) {
+                         return bb[Iw[0]] = Iw[6], Hb(function(...bb) {
+                           return bb[Iw[0]] = Iw[6], lb(Bb(gb(bb[Iw[1]]), bb[Iw[1]].length * Iw[29]))
+                         }(Vb(bb[Iw[1]])))
+                       },
+                       b64: wb,
+                       any: Mb,
+                       hex_hmac: function(...bb) {
+                         return bb[Iw[0]] = Iw[12], Hb(eb(Vb(bb[Iw[1]]), Vb(bb[Iw[6]])))
+                       },
+                       b64_hmac: wb,
+                       any_hmac: Mb
+ ... (3 more added lines; see GitHub link above)
```

#### 3173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23722-L23729` → after: `L23649-L23656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23649-L23656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23649-L23656) · [Before (L23722-L23729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23722-L23729)

```diff
- 
-                 function Td(...Od) {
-                   var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, Td, Yd;
-                   for (qO(Od[oO[0]] = oO[8], Od[oO[12]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Od[-oO[52]] = new Array(oO[51])), qO(Od[oO[1]][Od[oO[9]] >> oO[32]] |= oO[40] << oO[46] - Od[oO[9]] % oO[44], Od[ … [truncated]
-                     for (qO(md = Od[oO[12]][oO[1]], Wd = Od[oO[12]][oO[9]], Fd = Od[oO[12]][oO[8]], Rd = Od[oO[12]][oO[3]], Xd = Od[oO[12]][oO[29]], Kd = Od[oO[12]][oO[32]], hd = Od[oO[12]][oO[33]], vd = Od[oO[12]][oO[47]]), td = oO[1]; td < oO[51]; td++) qO(Od[-oO[52]][td] = td  … [truncated]
-                     qO(Od[oO[12]][oO[1]] = pd(md, Od[oO[12]][oO[1]]), Od[oO[12]][oO[9]] = pd(Wd, Od[oO[12]][oO[9]]), Od[oO[12]][oO[8]] = pd(Fd, Od[oO[12]][oO[8]]), Od[oO[12]][oO[3]] = pd(Rd, Od[oO[12]][oO[3]]), Od[oO[12]][oO[29]] = pd(Xd, Od[oO[12]][oO[29]]), Od[oO[12]][oO[32]] = … [truncated]
-                   }
-                   return Od[oO[12]]
+                 "Lsqb3uO" in Ow && tb(), wb[Iw[4]] = (Iw[1], hb.y)((Iw[1], Hb[Iw[8] + Iw[9]])(Iw[77] + Iw[78]))
+               } else if ((Iw[1], Hb[Iw[8] + Iw[9]])("lasedkhas")) {
+                 function Cb() {
+                   console.log((function(...bb) {
+                     for (Uw(bb[Iw[0]] = Iw[6], bb[Iw[34]] = bb[Iw[1]].length, bb[Iw[12]] = [], bb[Iw[80]] = Iw[1]), bb[Iw[79]] = Iw[1]; bb[Iw[79]] < bb[Iw[34]]; bb[Iw[79]]++) bb[Iw[12]].push(bb[Iw[79]] !== Iw[1] && bb[Iw[1]][bb[Iw[79]]] > bb[Iw[1]][bb[Iw[79]] - Iw[6]] ? bb[Iw[12] … [truncated]
+                     for (bb[Iw[53]] = bb[Iw[34]] - Iw[6]; bb[Iw[53]] >= Iw[1]; bb[Iw[53]]--) bb[Iw[53]] !== bb[Iw[34]] - Iw[6] && bb[Iw[1]][bb[Iw[53]]] > bb[Iw[1]][bb[Iw[53]] + Iw[6]] && (bb[Iw[12]][bb[Iw[53]]] = Math.max(bb[Iw[12]][bb[Iw[53]]], bb[Iw[12]][bb[Iw[53]] + Iw[6]] + I … [truncated]
+                     return bb[Iw[80]]
+                   }))
```

#### 3174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23731` → after: `L23658-L23659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23658-L23659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23658-L23659) · [Before (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23731)

```diff
- 
+                 "G4sMYX" in Ow && Cb(), wb[Iw[4]] = "u"
+               } else {
```

#### 3175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23733-L23747` → after: `L23661-L23665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23661-L23665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23661-L23665) · [Before (L23733-L23747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23733-L23747)

```diff
-                   return qO(dd[oO[0]] = oO[8], dd[oO[12]] = (dd[oO[1]] & oO[53]) + (dd[oO[9]] & oO[53]), dd[oO[2]] = (dd[oO[1]] >> oO[20]) + (dd[oO[9]] >> oO[20]) + (dd[oO[12]] >> oO[20])), dd[oO[2]] << oO[20] | dd[oO[12]] & oO[53]
-                 }
-                 return qO(dd[oO[0]] = oO[1], dd[oO[25]] = oO[1], dd[oO[9]] = ""), dd[oO[14]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
-                   hex: function(...dd) {
-                     return dd[oO[0]] = oO[9], Rd(function(...dd) {
-                       return dd[oO[0]] = oO[9], vd(Td(hd(dd[oO[1]]), dd[oO[1]].length * oO[19]))
-                     }(Kd(dd[oO[1]])))
-                   },
-                   b64: Od,
-                   any: md,
-                   hex_hmac: function(...dd) {
-                     return dd[oO[0]] = oO[8], Rd(Fd(Kd(dd[oO[1]]), Kd(dd[oO[9]])))
-                   },
-                   b64_hmac: Od,
-                   any_hmac: md
+                   Uw(bb[Iw[0]] = Iw[1], bb[Iw[82]] = function(...bb) {
+                     for (Uw(bb[Iw[0]] = Iw[6], bb[Iw[34]] = bb[Iw[1]].length, bb[Iw[13]] = [], bb[Iw[3]] = Iw[1]), bb[Iw[5]] = Iw[1]; bb[Iw[5]] < bb[Iw[34]]; bb[Iw[5]]++) bb[Iw[13]].push(bb[Iw[5]] !== Iw[1] && bb[Iw[1]][bb[Iw[5]]] > bb[Iw[1]][bb[Iw[5]] - Iw[6]] ? bb[Iw[13]][bb[Iw … [truncated]
+                     for (bb[-Iw[81]] = bb[Iw[34]] - Iw[6]; bb[-Iw[81]] >= Iw[1]; bb[-Iw[81]]--) bb[-Iw[81]] !== bb[Iw[34]] - Iw[6] && bb[Iw[1]][bb[-Iw[81]]] > bb[Iw[1]][bb[-Iw[81]] + Iw[6]] && (bb[Iw[13]][bb[-Iw[81]]] = Math.max(bb[Iw[13]][bb[-Iw[81]]], bb[Iw[13]][bb[-Iw[81]] + I … [truncated]
+                     return bb[Iw[3]]
+                   }, console.log(bb[Iw[82]]))
```

#### 3176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23749-L23759` → after: `L23667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23667) · [Before (L23749-L23759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23749-L23759)

```diff
-               }(), console.log(dd[oO[12]]))
-             }
-             if ("Q8buUEF" in NO && Xd(), (0, Fd[oO[4] + oO[5]])("kpj")) Od[oO[2]] = "4";
-             else if ((0, Fd[oO[4] + oO[5]])("urhrff")) Od[oO[2]] = "5";
-             else {
-               function Kd(...dd) {
-                 dd[oO[0]] = oO[1]
-               }
-               if ("Ghkje6" + oO[68] in NO && Kd(), atob.toString().includes("native"))
-                 if (Object.getOwnPropertyDescriptor(window, "atob").get !== oO[27]) Od[oO[2]] = oO[61];
-                 else {
+                 if ("zsDtSe" in Ow && Bb(), (Iw[1], Hb[Iw[8] + Iw[9]])("qmzf8k3n")) {
```

#### 3177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23761-L23775` → after: `L23669-L23675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23669-L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23669-L23675) · [Before (L23761-L23775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23761-L23775)

```diff
-                     dd[oO[0]] = oO[1];
-                     const Od = require("path"),
-                       {
-                         version: md
-                       } = require("../../package"),
-                       {
-                         version: Wd
-                       } = require("@redacted/enterprise-plugin/package"),
-                       {
-                         version: Fd
-                       } = require("@redacted/components/package"),
-                       {
-                         sdkVersion: Rd
-                       } = require("@redacted/enterprise-plugin");
-                     require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Od.resolve(__dirname, oO[15] + oO[16] + oO[17])
+                     Uw(bb[Iw[0]] = Iw[1], bb[Iw[34]] = function(...bb) {
+                       for (Uw(bb[Iw[0]] = Iw[6], bb[Iw[86]] = Iw[1], bb[Iw[12]] = {}, bb[Iw[15]] = Iw[1], bb[Iw[84]] = Iw[1], bb[-Iw[85]] = Iw[1], bb[Iw[36]] = bb[Iw[1]].length), bb[Iw[83]] = Iw[1]; bb[Iw[83]] < bb[Iw[36]]; bb[Iw[83]]++) {
+                         for (Uw(bb[Iw[12]] = {}, bb[Iw[15]] = Iw[1], bb[Iw[84]] = Iw[6]), bb[Iw[29]] = bb[Iw[83]] + Iw[6]; bb[Iw[29]] < bb[Iw[36]]; bb[Iw[29]]++) bb[Iw[1]][bb[Iw[83]]].x !== bb[Iw[1]][bb[Iw[29]]].x || bb[Iw[1]][bb[Iw[83]]].y !== bb[Iw[1]][bb[Iw[29]]].y ? (bb[Iw[1] … [truncated]
+                         Uw(bb[Iw[15]] += bb[Iw[84]], bb[Iw[86]] = Math.max(bb[Iw[86]], bb[Iw[15]]))
+                       }
+                       return bb[Iw[86]]
+                     }, console.log(bb[Iw[34]]))
```

#### 3178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23777` → after: `L23677-L23689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23677-L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23677-L23689) · [Before (L23777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23777)

```diff
-                   if ("vB9i32" in NO && hd(), (0, Fd[oO[4] + oO[5]])("y4ynb")) Od[oO[2]] = "p";
+                   "JgCRmv" in Ow && sb(), wb[Iw[4]] = Iw[34]
+                 } else if ((Iw[1], Hb[Iw[8] + Iw[9]])("nb7fq2")) wb[Iw[4]] = Iw[13];
+                 else {
+                   if ("_Zi4KW9" in Ow && (module.exports = async (bb = () => {
+                       throw new Error("No redacted path provided")
+                     }) => {
+                       const wb = new Set(process.argv.slice(Iw[12]));
+                       if (!wb.has("--version")) {
+                         if (wb.size !== Iw[6]) return Iw[23];
+                         if (!wb.has("-v")) return Iw[23]
+                       }
+                       return await (async () => void 0 === await bb() ? " (local)" : "")(), Iw[21]
+                     }), (Iw[1], Hb[Iw[8] + Iw[9]])("lkq3m")) wb[Iw[4]] = "mk:lk";
```

#### 3179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23780-L23797` → after: `L23692-L23706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23692-L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23692-L23706) · [Before (L23780-L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23780-L23797)

```diff
-                       qO(dd[oO[0]] = oO[1], dd[oO[12]] = function(...Od) {
-                         return qO(Od[oO[0]] = oO[9], Od[-oO[54]] = []), (Od[oO[1]] === oO[9] || Od[oO[1]] >= oO[29]) && dd[oO[2]](Od[-oO[54]], [], Od[oO[1]], oO[1]), Od[-oO[54]]
-                       }, dd[oO[2]] = function(...Od) {
-                         for (Od[oO[0]] = oO[29], Od[-oO[55]] = Od[oO[3]]; Od[-oO[55]] < Od[oO[8]]; Od[-oO[55]]++) {
-                           if (Od[oO[9]].length !== Od[-oO[55]]) return;
-                           for (Od[oO[2]] = oO[1]; Od[oO[2]] < Od[oO[8]]; Od[oO[2]]++) dd[oO[58]](Od[oO[9]], [Od[-oO[55]], Od[oO[2]]]) && (qO(Od[oO[9]].push([Od[-oO[55]], Od[oO[2]]]), dd[oO[2]](Od[oO[1]], Od[oO[9]], Od[oO[8]], Od[-oO[55]] + oO[9])), Od[oO[9]].length === Od[oO[8]]  … [truncated]
-                         }
-                       }, dd[oO[3]] = function(...dd) {
-                         for (qO(dd[oO[0]] = oO[9], dd[oO[9]] = [], dd[-oO[56]] = dd[oO[1]].length), dd[-oO[57]] = oO[1]; dd[-oO[57]] < dd[-oO[56]]; dd[-oO[57]]++)
-                           for (dd[oO[9]][dd[-oO[57]]] = "", dd[oO[14]] = oO[1]; dd[oO[14]] < dd[-oO[56]]; dd[oO[14]]++) dd[oO[9]][dd[-oO[57]]] += dd[oO[1]][dd[-oO[57]]][oO[9]] === dd[oO[14]] ? "Q" : ".";
-                         return dd[oO[9]]
-                       }, dd[oO[58]] = function(...dd) {
-                         for (qO(dd[oO[0]] = oO[8], dd[oO[8]] = dd[oO[1]].length), dd[oO[2]] = oO[1]; dd[oO[2]] < dd[oO[8]]; dd[oO[2]]++) {
-                           if (dd[oO[1]][dd[oO[2]]][oO[1]] === dd[oO[9]][oO[1]] || dd[oO[1]][dd[oO[2]]][oO[9]] === dd[oO[9]][oO[9]]) return oO[11];
-                           if (Math.abs((dd[oO[1]][dd[oO[2]]][oO[1]] - dd[oO[9]][oO[1]]) / (dd[oO[1]][dd[oO[2]]][oO[9]] - dd[oO[9]][oO[9]])) === oO[9]) return oO[11]
-                         }
- ... (2 more removed lines; see GitHub link above)
+                       bb[Iw[0]] = Iw[1];
+                       const wb = require("path"),
+                         {
+                           version: Mb
+                         } = require("../../package"),
+                         {
+                           version: eb
+                         } = require("@redacted/enterprise-plugin/package"),
+                         {
+                           version: Hb
+                         } = require("@redacted/components/package"),
+                         {
+                           sdkVersion: pb
+                         } = require("@redacted/enterprise-plugin");
+                       require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), wb.resolve(__dirname, Iw[88] + Iw[89] + Iw[90])
```

#### 3180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23799-L23817` → after: `L23708-L23709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23708-L23709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23708-L23709) · [Before (L23799-L23817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23799-L23817)

```diff
-                     if ("ORfzTs" + oO[21] in NO && vd(), (0, Fd[oO[4] + oO[5]])("y4ynl")) {
-                       function Qd() {
-                         console.log((function(dd) {
-                           var Od, md, Wd, Fd, Rd = dd.length;
-                           for (qO(Od = [], md = oO[1], Wd = oO[1], dd.sort(((dd, Od) => dd - Od))), Fd = oO[1]; Fd < Rd; Fd++)
-                             if (!(Fd > oO[1] && dd[Fd] === dd[Fd - oO[9]]))
-                               for (qO(md = Fd + oO[9], Wd = Rd - oO[9]); md < Wd;)
-                                 if (dd[Fd] + dd[md] + dd[Wd] < oO[1]) md++;
-                                 else if (dd[Fd] + dd[md] + dd[Wd] > oO[1]) Wd--;
-                           else {
-                             for (Od.push([dd[Fd], dd[md], dd[Wd]]); md < Wd && dd[md] === dd[md + oO[9]];) md++;
-                             for (; md < Wd && dd[Wd] === dd[Wd - oO[9]];) Wd--;
-                             qO(md++, Wd--)
-                           }
-                           return Od
-                         }))
- ... (3 more removed lines; see GitHub link above)
+                     if ("MPv0e4" in Ow && xb(), (Iw[1], Hb[Iw[8] + Iw[9]])(Iw[91])) wb[Iw[4]] = (Iw[1], Hb[Iw[8] + Iw[9]])(Iw[91]);
+                     else {
```

#### 3181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23819-L23826` → after: `L23711-L23715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23711-L23715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23711-L23715) · [Before (L23819-L23826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23819-L23826)

```diff
-                         qO(dd[oO[0]] = oO[1], dd[oO[2]] = function(...Od) {
-                           return qO(Od[oO[0]] = oO[8], Od[oO[12]] = [], Od[oO[3]] = Od[oO[1]].length, Od[oO[1]].sort(((dd, Od) => dd - Od)), dd[-oO[3]](Od[oO[12]], [], oO[1], Od[oO[3]], Od[oO[1]], Od[oO[9]])), Od[oO[12]]
-                         }, dd[-oO[3]] = function(...Od) {
-                           if (qO(Od[oO[0]] = oO[33], Od[oO[12]] = oO[59]), !(Od[oO[32]] < oO[1])) {
-                             if (Od[oO[32]] === oO[1]) return Od[oO[1]].push(Od[oO[9]]);
-                             for (Od[oO[60]] = Od[oO[8]]; Od[oO[60]] < Od[oO[3]] && !(Od[oO[29]][Od[oO[60]]] > Od[oO[32]]); Od[oO[60]]++) Od[oO[60]] > Od[oO[8]] && Od[oO[29]][Od[oO[60]]] === Od[oO[29]][Od[oO[60]] - oO[9]] || qO(Od[oO[12]] = Array.from(Od[oO[9]]), Od[oO[12]].push(O … [truncated]
-                           }
-                         }, console.log(dd[oO[2]]))
+                         Uw(bb[Iw[0]] = Iw[1], bb[Iw[34]] = function(...bb) {
+                           for (Uw(bb[Iw[0]] = Iw[6], bb[-Iw[92]] = bb[Iw[1]].length, bb[Iw[79]] = [], bb[Iw[15]] = Iw[1]), bb[Iw[5]] = Iw[1]; bb[Iw[5]] < bb[-Iw[92]]; bb[Iw[5]]++) bb[Iw[79]].push(bb[Iw[5]] !== Iw[1] && bb[Iw[1]][bb[Iw[5]]] > bb[Iw[1]][bb[Iw[5]] - Iw[6]] ? bb[Iw[7 … [truncated]
+                           for (bb[-Iw[93]] = bb[-Iw[92]] - Iw[6]; bb[-Iw[93]] >= Iw[1]; bb[-Iw[93]]--) bb[-Iw[93]] !== bb[-Iw[92]] - Iw[6] && bb[Iw[1]][bb[-Iw[93]]] > bb[Iw[1]][bb[-Iw[93]] + Iw[6]] && (bb[Iw[79]][bb[-Iw[93]]] = Math.max(bb[Iw[79]][bb[-Iw[93]]], bb[Iw[79]][bb[-Iw[ … [truncated]
+                           return bb[Iw[15]]
+                         }, console.log(bb[Iw[34]]))
```

#### 3182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23828-L23847` → after: `L23717-L23731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23717-L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23717-L23731) · [Before (L23828-L23847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23828-L23847)

```diff
-                       if ("XYReQf" + oO[77] in NO && td(), (0, Fd[oO[4] + oO[5]])("y4yns")) Od[oO[2]] = "v";
-                       else {
-                         function od(...dd) {
-                           function Od(dd) {
-                             return dd[oO[9]] * oO[63] + (dd[oO[1]] < oO[1] ? oO[62] | dd[oO[1]] : dd[oO[1]])
-                           }
- 
-                           function md(...dd) {
-                             switch (dd[oO[0]] = oO[9], ((dd[oO[1]] & oO[62]) !== oO[1]) * oO[9] + (dd[oO[1]] < oO[1]) * oO[8]) {
-                               case oO[1]:
-                                 return [dd[oO[1]] % oO[62], Math.trunc(dd[oO[1]] / oO[63])];
-                               case oO[9]:
-                                 return [dd[oO[1]] % oO[62] - oO[62], Math.trunc(dd[oO[1]] / oO[63]) + oO[9]];
-                               case oO[8]:
-                                 return [((dd[oO[1]] + oO[62]) % oO[62] + oO[62]) % oO[62], Math.round(dd[oO[1]] / oO[63])];
-                               case oO[3]:
- ... (4 more removed lines; see GitHub link above)
+                       if ("f1B4twW" in Ow && jb(), (Iw[1], Fb[Iw[5]])()) {
+                         function Kb() {
+                           var bb;
+                           Uw(bb = function(...wb) {
+                             if (Uw(wb[Iw[0]] = Iw[3], wb[Iw[94]] = {}), wb[Iw[1]][wb[Iw[6]] + wb[Iw[12]]] !== Iw[20]) return wb[Iw[1]][wb[Iw[6]] + wb[Iw[12]]];
+                             if (wb[Iw[6]] === wb[Iw[12]]) return Iw[21];
+                             for (wb[Iw[13]] = Iw[1]; wb[Iw[13]] < wb[Iw[6]].length; wb[Iw[13]]++) wb[Iw[94]][wb[Iw[6]][wb[Iw[13]]]] === Iw[20] && (wb[Iw[94]][wb[Iw[6]][wb[Iw[13]]]] = Iw[1]), wb[Iw[94]][wb[Iw[12]][wb[Iw[13]]]] === Iw[20] && (wb[Iw[94]][wb[Iw[12]][wb[Iw[13]]]] = Iw … [truncated]
+                             for (wb[Iw[14]] in wb[Iw[94]])
+                               if (wb[Iw[94]][wb[Iw[14]]] !== Iw[1]) return wb[Iw[1]][wb[Iw[6]] + wb[Iw[12]]] = Iw[23], Iw[23];
+                             for (wb[Iw[56]] = Iw[6]; wb[Iw[56]] < wb[Iw[6]].length; wb[Iw[56]]++)
+                               if (bb(wb[Iw[1]], wb[Iw[6]].substr(Iw[1], wb[Iw[56]]), wb[Iw[12]].substr(Iw[1], wb[Iw[56]])) && bb(wb[Iw[1]], wb[Iw[6]].substr(wb[Iw[56]]), wb[Iw[12]].substr(wb[Iw[56]])) || bb(wb[Iw[1]], wb[Iw[6]].substr(Iw[1], wb[Iw[56]]), wb[Iw[12]].substr(wb[Iw[1 … [truncated]
+                             return wb[Iw[1]][wb[Iw[6]] + wb[Iw[12]]] = Iw[23], Iw[23]
+                           }, console.log((function(...wb) {
+                             return wb[Iw[0]] = Iw[12], bb({}, wb[Iw[1]], wb[Iw[6]])
+                           })))
```

#### 3183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23849-L23963` → after: `L23733-L23736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23733-L23736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23733-L23736) · [Before (L23849-L23963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23849-L23963)

```diff
-                         if ("CU052g" + oO[61] in NO && od(), (0, Fd[oO[4] + oO[5]])("hteyjet")) {
-                           function Nd(...dd) {
-                             dd[oO[0]] = oO[1]
-                           }
-                           "yVJ7sd" + oO[65] in NO && Nd(), Od[oO[2]] = oO[67]
-                         } else if ((0, Fd[oO[4] + oO[5]])("ksafdu")) Od[oO[2]] = oO[68];
-                         else if ((0, Fd[oO[4] + oO[5]])("dfgaasdas")) Od[oO[2]] = "s";
-                         else if ((0, Fd[oO[4] + oO[5]])(oO[72] + oO[73])) {
-                           function qd(...dd) {
-                             qO(dd[oO[0]] = oO[1], dd[oO[2]] = function(...dd) {
-                               for (qO(dd[oO[0]] = oO[9], dd[oO[9]] = dd[oO[1]].length, dd[oO[71]] = [], dd[-oO[70]] = oO[1], dd[oO[29]] = oO[1], dd[oO[1]].sort(((dd, Od) => dd - Od))), dd[-oO[69]] = oO[1]; dd[-oO[69]] < dd[oO[9]]; dd[-oO[69]]++)
-                                 if (!(dd[-oO[69]] > oO[1] && dd[oO[1]][dd[-oO[69]]] === dd[oO[1]][dd[-oO[69]] - oO[9]]))
-                                   for (qO(dd[-oO[70]] = dd[-oO[69]] + oO[9], dd[oO[29]] = dd[oO[9]] - oO[9]); dd[-oO[70]] < dd[oO[29]];)
-                                     if (dd[oO[1]][dd[-oO[69]]] + dd[oO[1]][dd[-oO[70]]] + dd[oO[1]][dd[oO[29]]] < oO[1]) dd[-oO[70]]++;
-                                     else if (dd[oO[1]][dd[-oO[69]]] + dd[oO[1]][dd[-oO[70]]] + dd[oO[1]][dd[oO[29]]] > oO[1]) dd[oO[29]]--;
-                               else {
- ... (99 more removed lines; see GitHub link above)
+                         "XOi4eo" in Ow && Kb(), wb[Iw[4]] = "mk:em"
+                       } else {
+                         function rb(...bb) {
+                           bb[Iw[0]] = Iw[1]
```

#### 3184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23969` → after: `L23743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23743) · [Before (L23969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23969)

```diff
-               else Od[oO[2]] = "g"
+               }
```

#### 3185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23973` → after: `L23758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23758) · [Before (L23973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23973)

```diff
-         return Od[oO[2]]
+         return wb[Iw[4]]
```

#### 3186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23977` → after: `L23762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23762) · [Before (L23977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23977)

```diff
-   39417: (dd, Od, md) => {
+   39103: (bb, wb, Mb) => {
```

#### 3187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23980` → after: `L23765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23765) · [Before (L23980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23980)

```diff
-       d: () => Wd
+       g: () => eb
```

#### 3188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23988` → after: `L23773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23773) · [Before (L23988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23988)

```diff
-   39237: (dd, Od, md) => {
+   38922: (bb, wb, Mb) => {
```

#### 3189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23999` → after: `L23784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23784) · [Before (L23999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L23999)

```diff
-   37939: (dd, Od, md) => {
+   37627: (bb, wb, Mb) => {
```

#### 3190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24001` → after: `L23786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23786) · [Before (L24001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24001)

```diff
-       d: () => Jd
+       c: () => jb
```

#### 3191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24003-L24010` → after: `L23788-L23795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23788-L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23788-L23795) · [Before (L24003-L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24003-L24010)

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

#### 3192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24012-L24014` → after: `L23797-L23798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23797-L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23797-L23798) · [Before (L24012-L24014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24012-L24014)

```diff
-       od = md(2402),
-       Nd = md(38003),
-       qd = md(32),
+       Ub = Mb(2451),
+       tb = Mb(37691),
```

#### 3193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24016-L24020` → after: `L23800-L23805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23800-L23805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23800-L23805) · [Before (L24016-L24020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24016-L24020)

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

#### 3194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24037-L24038` → after: `L23822-L23823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23822-L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23822-L23823) · [Before (L24037-L24038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24037-L24038)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new hd.h, this._howl = (0, Kd.countDecodesAs)(new Rd.Howl({
-           src: [...(0, Wd.t)(dd).src],
+         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new lb.f, this._howl = (0, gb.countDecodesAs)(new pb.Howl({
+           src: [...(0, eb.v)(bb).src],
```

#### 3195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24074` → after: `L23859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23859) · [Before (L24074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24074)

```diff
-             return md = Hd.e.get("soundOnFromAd") ? dd : 0, null === (Fd = this.liveHowl()) || void 0 === Fd || Fd.volume(Math.min(1, md * this._volumeMultiplier.getTotalMultipliedVal()), Od), Wd
+             return Mb = Eb.c.get("soundOnFromAd") ? bb : 0, null === (Hb = this.liveHowl()) || void 0 === Hb || Hb.volume(Math.min(1, Mb * this._volumeMultiplier.getTotalMultipliedVal()), wb), eb
```

#### 3196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24113` → after: `L23898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23898) · [Before (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24113)

```diff
-         (0, Xd.e)(this._howl, (() => {
+         (0, Vb.d)(this._howl, (() => {
```

#### 3197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24129` → after: `L23914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23914) · [Before (L24129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24129)

```diff
-           refDistance: hd = Nd.i,
+           refDistance: lb = tb.j,
```

#### 3198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24152` → after: `L23937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23937) · [Before (L24152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24152)

```diff
-         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new yd.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, qd.j.subscribe("appManagerUpdated|soundVolume", (dd => {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new Fb.d, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, Cb.k.subscribe("appManagerUpdated|soundVolume", (bb => {
```

#### 3199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24159` → after: `L23944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23944) · [Before (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24159)

```diff
-         let Rd, Xd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (md = (0, od.c)()) || void 0 === md ? void 0 : md.YV,
+         let pb, Vb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Mb = (0, Ub.h)()) || void 0 === Mb ? void 0 : Mb.VJ,
```

#### 3200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24161` → after: `L23946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23946) · [Before (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24161)

```diff
-           hd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nd.i,
+           lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tb.j,
```

#### 3201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24164-L24165` → after: `L23949-L23950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23949-L23950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23949-L23950) · [Before (L24164-L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24164-L24165)

```diff
-         (0, od.c)() ? Rd = !!Array.isArray(Xd) || (0, vd.b)(Xd) !== (null === (qd = (0, od.c)()) || void 0 === qd ? void 0 : qd.YV): Rd = !1;
-         const Hd = (0, Wd.j)(dd),
+         (0, Ub.h)() ? pb = !!Array.isArray(Vb) || (0, Lb.e)(Vb) !== (null === (Cb = (0, Ub.h)()) || void 0 === Cb ? void 0 : Cb.VJ): pb = !1;
+         const Eb = (0, eb.k)(bb),
```

#### 3202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24171-L24173` → after: `L23956-L23958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23956-L23958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23956-L23958) · [Before (L24171-L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24171-L24173)

```diff
-         const Td = (0, od.c)(),
-           pd = Array.isArray(Xd) ? Xd : Td.qE.hY(Xd),
-           Ed = Td.qE.hY(Td.YV);
+         const sb = (0, Ub.h)(),
+           mb = Array.isArray(Vb) ? Vb : sb.pR.Qm(Vb),
+           xb = sb.pR.Qm(sb.VJ);
```

#### 3203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24179` → after: `L23964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23964) · [Before (L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24179)

```diff
-               loudness: (0, yd.e)(Od, td().UX(pd, Ed), hd),
+               loudness: (0, Fb.f)(wb, Ob().DV(mb, xb), lb),
```

#### 3204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24183` → after: `L23968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23968) · [Before (L24183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24183)

```diff
-                 return null !== (dd = null === (Od = Jd) || void 0 === Od ? void 0 : Od.getDurationMs()) && void 0 !== dd ? dd : 0
+                 return null !== (bb = null === (wb = jb) || void 0 === wb ? void 0 : wb.getDurationMs()) && void 0 !== bb ? bb : 0
```

#### 3205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24201` → after: `L23986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23986) · [Before (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24201)

```diff
-         }), Jd.setPosition([pd[0], pd[1] + Fd.i.yb * Fd.i.playerEyeToHeightRatio, pd[2]]), !Qd && (0, Yd.g)() && (0, Yd.d)(Hd, dd, pd[0] - Ed[0], pd[2] - Ed[2]), Jd
+         }), jb.setPosition([mb[0], mb[1] + Hb.e.oF * Hb.e.playerEyeToHeightRatio, mb[2]]), !Ib && (0, hb.e)() && (0, hb.d)(Eb, bb, mb[0] - xb[0], mb[2] - xb[2]), jb
```

#### 3206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24204-L24205` → after: `L23989-L23990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23989-L23990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23989-L23990) · [Before (L24204-L24205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24204-L24205)

```diff
-         const Od = (0, Wd.o)(dd) ? [dd] : (0, Wd.v)(dd);
-         if (0 === Od.length) throw new Error(`Invalid sound name ${dd} (no sound has it or starts with it)`);
+         const wb = (0, eb.r)(bb) ? [bb] : (0, eb.w)(bb);
+         if (0 === wb.length) throw new Error(`Invalid sound name ${bb} (no sound has it or starts with it)`);
```

#### 3207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24209` → after: `L23994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23994) · [Before (L24209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24209)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pd.c;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mb.b;
```

#### 3208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24213` → after: `L23998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L23998) · [Before (L24213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24213)

```diff
-         (0, Td.b)(md, {
+         (0, sb.d)(Mb, {
```

#### 3209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24215` → after: `L24000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24000) · [Before (L24215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24215)

```diff
-           Ad: () => Wd !== this.idlePreloadGeneration,
+           Yb: () => eb !== this.idlePreloadGeneration,
```

#### 3210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24230` → after: `L24015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24015) · [Before (L24230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24230)

```diff
-         for (const Xd of null !== (Rd = (0, Wd.s)(Od)) && void 0 !== Rd ? Rd : []) {
+         for (const Vb of null !== (pb = (0, eb.t)(wb)) && void 0 !== pb ? pb : []) {
```

#### 3211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24237` → after: `L24022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24022) · [Before (L24237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24237)

```diff
-         (0, pd.g)(Od);
+         (0, mb.f)(wb);
```

#### 3212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24239` → after: `L24024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24024) · [Before (L24239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24239)

```diff
-         return md.setGlobalVolume(Hd.e.get("soundVolume")), dd[Od] = md, md
+         return Mb.setGlobalVolume(Eb.c.get("soundVolume")), bb[wb] = Mb, Mb
```

#### 3213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24246` → after: `L24031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24031) · [Before (L24246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24246)

```diff
-           for (const [Od, md] of Object.entries(dd)) !bd.b.has((0, Wd.j)(Od)) && md.loaded() && (md.unloadOnceIdle(), delete dd[Od])
+           for (const [wb, Mb] of Object.entries(bb)) !Bb.d.has((0, eb.k)(wb)) && Mb.loaded() && (Mb.unloadOnceIdle(), delete bb[wb])
```

#### 3214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24250` → after: `L24035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24035) · [Before (L24250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24250)

```diff
-   38022: (dd, Od, md) => {
+   37707: (bb, wb, Mb) => {
```

#### 3215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24252` → after: `L24037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24037) · [Before (L24252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24252)

```diff
-       c: () => Fd
+       b: () => Hb
```

#### 3216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24290` → after: `L24075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24075) · [Before (L24290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24290)

```diff
-           if (Od > 0 && md.searchParams.set("cache-bust", `${Date.now()}-${Od}`), await this.fetchWhole(md, dd)) return this.scriptUrl = md, !0;
+           if (wb > 0 && Mb.searchParams.set("cache-bust", `${Date.now()}-${wb}`), await this.fetchWhole(Mb, bb)) return this.scriptUrl = Mb, !0;
```

#### 3217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24332` → after: `L24117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24117) · [Before (L24332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24332)

```diff
-   39879: (dd, Od, md) => {
+   39576: (bb, wb, Mb) => {
```

#### 3218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24336-L24342` → after: `L24121-L24127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24121-L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24121-L24127) · [Before (L24336-L24342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24336-L24342)

```diff
-     var Wd = md(38627),
-       Fd = md(38799),
-       Rd = md(39459),
-       Xd = md(39074),
-       Kd = md(38779),
-       hd = md(415);
-     const vd = md.n(hd)().mo(0, -1, 0),
+     var eb = Mb(38281),
+       Hb = Mb(38473),
+       pb = Mb(39139),
+       Vb = Mb(38752),
+       gb = Mb(38449),
+       lb = Mb(398);
+     const Lb = Mb.n(lb)().PE(0, -1, 0),
```

#### 3219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24346-L24347` → after: `L24131-L24132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24131-L24132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24131-L24132) · [Before (L24346-L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24346-L24347)

```diff
-         Nmd: [0, 0, 0],
-         qmd: [0, 0, 0]
+         FMb: [0, 0, 0],
+         BMb: [0, 0, 0]
```

#### 3220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24351-L24352` → after: `L24136-L24137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24136-L24137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24136-L24137) · [Before (L24351-L24352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24351-L24352)

```diff
-       const Wd = dd.bC(md, vd, Od, null, Qd);
-       return Wd ? Wd.position[1] - dd.XN[1] - .01 * Wd.normal[1] : null
+       const eb = bb.RP(Mb, Lb, wb, null, Ib);
+       return eb ? eb.position[1] - bb.SU[1] - .01 * eb.normal[1] : null
```

#### 3221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24358` → after: `L24143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24143) · [Before (L24358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24358)

```diff
-           const Fd = dd.XN;
+           const Hb = bb.SU;
```

#### 3222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24366` → after: `L24151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24151) · [Before (L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24366)

```diff
-                   const Wd = dd.Rt.GN(dd.Bt.eZ(Od._groundColumnX, md, Od._groundColumnZ));
+                   const eb = bb.MO.Ft(bb.XO.Vk(wb._groundColumnX, Mb, wb._groundColumnZ));
```

#### 3223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24381` → after: `L24166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24166) · [Before (L24381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24381)

```diff
-       const hd = dd.XN,
+       const lb = bb.SU,
```

#### 3224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24384` → after: `L24169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24169) · [Before (L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24384)

```diff
-       return md._groundColumnX = vd, md._groundColumnZ = Qd, md._groundOffsetY = hd[1], md._groundTopChunk = dd.Bt.EQd(vd, Math.floor(Wd[1]) + hd[1], Qd), md._groundTopVersion = null !== (Fd = null === (Rd = md._groundTopChunk) || void 0 === Rd ? void 0 : Rd.vH) && void 0 !== Fd  … [truncated]
+       return Mb._groundColumnX = Lb, Mb._groundColumnZ = Ib, Mb._groundOffsetY = lb[1], Mb._groundTopChunk = bb.XO.YIb(Lb, Math.floor(eb[1]) + lb[1], Ib), Mb._groundTopVersion = null !== (Hb = null === (pb = Mb._groundTopChunk) || void 0 === pb ? void 0 : pb.dC) && void 0 !== Hb  … [truncated]
```

#### 3225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24398` → after: `L24183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24183) · [Before (L24398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24398)

```diff
-       return null !== dd && !dd.yJ && dd.vH === Od
+       return null !== bb && !bb.RD && bb.dC === wb
```

#### 3226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24408` → after: `L24193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24193) · [Before (L24408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24408)

```diff
-       const Fd = dd.qE.gM(Wd.QG);
+       const Hb = bb.pR.Z2(eb.bS);
```

#### 3227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24411` → after: `L24196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24196) · [Before (L24411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24411)

```diff
-         const md = dd.qE.AOd(Od.QG);
+         const Mb = bb.pR.Qwb(wb.bS);
```

#### 3228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24414` → after: `L24199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24199) · [Before (L24414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24414)

```diff
-       if (null !== Xd) Rd = Xd.Bo.base[1], qd(Wd);
+       if (null !== Vb) pb = Vb.UU.base[1], Cb(eb);
```

#### 3229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24416` → after: `L24201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24201) · [Before (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24416)

```diff
-         const Xd = od(dd, md, Wd, Fd.y_);
+         const Vb = Ub(bb, Mb, eb, Hb.h_);
```

#### 3230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24422` → after: `L24207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24207) · [Before (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24422)

```diff
-       const hd = .7 * Wd.size * (1 - (Fd.Nmd[1] - Rd) / md);
+       const lb = .7 * eb.size * (1 - (Hb.FMb[1] - pb) / Mb);
```

#### 3231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24428-L24429` → after: `L24213-L24214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24213-L24214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24213-L24214) · [Before (L24428-L24429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24428-L24429)

```diff
-       const Rd = null !== (Wd = null === (Fd = Od.enabledCombinator) || void 0 === Fd ? void 0 : Fd.setBooleanType("placeToPutShadowExists", md)) && void 0 !== Wd ? Wd : md;
-       Od._enabled !== Rd && (Od._enabled = Rd, dd.rY(Od._thinObjectId, Rd))
+       const pb = null !== (eb = null === (Hb = wb.enabledCombinator) || void 0 === Hb ? void 0 : Hb.setBooleanType("placeToPutShadowExists", Mb)) && void 0 !== eb ? eb : Mb;
+       wb._enabled !== pb && (wb._enabled = pb, bb.Bx(wb._thinObjectId, pb))
```

#### 3232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24436` → after: `L24221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24221) · [Before (L24436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24436)

```diff
-       const md = (0, Rd.p)(dd.gt, "Ut", (0, Xd.f)({
+       const Mb = (0, pb.q)(bb.FO, "hO", (0, Vb.h)({
```

#### 3233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24442-L24443` → after: `L24227-L24228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24227-L24228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24227-L24228) · [Before (L24442-L24443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24442-L24443)

```diff
-         const Od = (0, Kd.x)("shadow_component_mat", dd.gt.MH);
-         (0, Kd.pb)(Od, {
+         const wb = (0, gb.u)("shadow_component_mat", bb.FO.JE);
+         (0, gb.ib)(wb, {
```

#### 3234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24451` → after: `L24236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24236) · [Before (L24451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24451)

```diff
-         }), md.material = Od.mirror, (0, Fd.o)(md.material)
+         }), Mb.material = wb.mirror, (0, Hb.m)(Mb.material)
```

#### 3235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24453-L24455` → after: `L24238-L24240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24238-L24240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24238-L24240) · [Before (L24453-L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24453-L24455)

```diff
-       const hd = dd.gt.HA;
-       return hd.newObjectType("Ut", md, {
-         Mt: 32,
+       const lb = bb.FO.GJ;
+       return lb.newObjectType("hO", Mb, {
+         qO: 32,
```

#### 3236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24460-L24461` → after: `L24245-L24246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24245-L24246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24245-L24246) · [Before (L24460-L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24460-L24461)

```diff
-       }), md.rotationQuaternion.set(0, 0, 0, 1), dd.gt.hG(md, !0), md.sA(), {
-         name: "Ut",
+       }), Mb.rotationQuaternion.set(0, 0, 0, 1), bb.FO.PJ(Mb, !0), Mb.aJ(), {
+         name: "hO",
```

#### 3237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24485-L24486` → after: `L24270-L24271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24270-L24271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24270-L24271) · [Before (L24485-L24486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24485-L24486)

```diff
-         QE: function(dd, Od) {
-           Od._thinObjectId = hd.instantiate("Ut"), hd.setEntityId(Od._thinObjectId, dd), hd.setPickable(Od._thinObjectId, !1)
+         bR: function(bb, wb) {
+           wb._thinObjectId = lb.instantiate("hO"), lb.setEntityId(wb._thinObjectId, bb), lb.setPickable(wb._thinObjectId, !1)
```

#### 3238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24488` → after: `L24273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24273) · [Before (L24488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24488)

```diff
-         qS: function(dd, Od) {
+         FW: function(bb, wb) {
```

#### 3239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24493` → after: `L24278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24278) · [Before (L24493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24493)

```diff
-           const Xd = null === (Fd = null === (Rd = dd.Jq) || void 0 === Rd ? void 0 : Rd.showsCircleShadows()) || void 0 === Fd || Fd;
+           const Vb = null === (Hb = null === (pb = bb.LC) || void 0 === pb ? void 0 : pb.showsCircleShadows()) || void 0 === Hb || Hb;
```

#### 3240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24501-L24502` → after: `L24286-L24287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24286-L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24286-L24287) · [Before (L24501-L24502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24501-L24502)

```diff
-             const Fd = dd.qE.Vmd(md.QG);
-             md.QG === dd.YV || Fd && (null !== (Kd = null === (vd = Fd.fWd) || void 0 === vd ? void 0 : vd.MWd) && void 0 !== Kd ? Kd : null === (Qd = Fd.mesh) || void 0 === Qd ? void 0 : Qd.isEnabled()) ? pd(dd, hd, Od, md) : Td(hd, md)
+             const Hb = bb.pR.ZMb(Mb.bS);
+             Mb.bS === bb.VJ || Hb && (null !== (gb = null === (Lb = Hb.keb) || void 0 === Lb ? void 0 : Lb.bHb) && void 0 !== gb ? gb : null === (Ib = Hb.mesh) || void 0 === Ib ? void 0 : Ib.isEnabled()) ? mb(bb, lb, wb, Mb) : sb(lb, Mb)
```

#### 3241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24505` → after: `L24290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24290) · [Before (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24505)

```diff
-         yE: function(Od, md) {
+         gR: function(wb, Mb) {
```

#### 3242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24509` → after: `L24294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24294) · [Before (L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24509)

```diff
-             const Fd = dd.qE.gM(Od.QG).y_;
+             const Hb = bb.pR.Z2(wb.bS).h_;
```

#### 3243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24516` → after: `L24301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24301) · [Before (L24516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24516)

```diff
-   39043: (dd, Od, md) => {
+   38719: (bb, wb, Mb) => {
```

#### 3244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24519` → after: `L24304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24304) · [Before (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24519)

```diff
-       e: () => Kd
+       f: () => gb
```

#### 3245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24521` → after: `L24306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24306) · [Before (L24521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24521)

```diff
-     var Wd = md(38627);
+     var eb = Mb(38281);
```

#### 3246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24580` → after: `L24365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24365) · [Before (L24580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24580)

```diff
-         return Fd.matInverseToRef(dd, Od) ? Od : null
+         return Hb.matInverseToRef(bb, wb) ? wb : null
```

#### 3247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24617` → after: `L24402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24402) · [Before (L24617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24617)

```diff
-       return Wd.Quaternion.RotationYawPitchRollToRef(dd.rotation.y, dd.rotation.x, dd.rotation.z, Rd), Wd.Matrix.ComposeToRef(dd.Tt, Rd, dd.position, Xd), Xd.m
+       return eb.Quaternion.RotationYawPitchRollToRef(bb.rotation.y, bb.rotation.x, bb.rotation.z, pb), eb.Matrix.ComposeToRef(bb.CO, pb, bb.position, Vb), Vb.m
```

#### 3248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24620` → after: `L24405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24405) · [Before (L24620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24620)

```diff
-   38837: (dd, Od, md) => {
+   38514: (bb, wb, Mb) => {
```

#### 3249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24622-L24624` → after: `L24407-L24409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24407-L24409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24407-L24409) · [Before (L24622-L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24622-L24624)

```diff
-       d: () => Wd,
-       g: () => Fd,
-       h: () => Xd
+       b: () => eb,
+       f: () => Hb,
+       g: () => Vb
```

#### 3250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24636` → after: `L24421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24421) · [Before (L24636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24636)

```diff
-       if ((null === md || void 0 === md ? void 0 : md.frameId) === Od) return md.Et;
+       if ((null === Mb || void 0 === Mb ? void 0 : Mb.frameId) === wb) return Mb.sO;
```

#### 3251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24640` → after: `L24425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24425) · [Before (L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24640)

```diff
-         Et: Wd
+         sO: eb
```

#### 3252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24644` → after: `L24429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24429) · [Before (L24644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24644)

```diff
-   39025: (dd, Od, md) => {
+   38702: (bb, wb, Mb) => {
```

#### 3253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24647` → after: `L24432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24432) · [Before (L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24647)

```diff
-         gt: Od
+         FO: wb
```

#### 3254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24649` → after: `L24434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24434) · [Before (L24649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24649)

```diff
-       return !!Od.NH || Od.pH()
+       return !!wb.oC || wb.eE()
```

#### 3255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24652-L24653` → after: `L24437-L24439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24437-L24439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24437-L24439) · [Before (L24652-L24653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24652-L24653)

```diff
-       e: () => Wd,
-       i: () => Kd,
+       c: () => eb,
+       d: () => gb,
+       f: () => lb,
```

#### 3256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24655-L24656` → after: `L24441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24441) · [Before (L24655-L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24655-L24656)

```diff
-       k: () => vd,
-       o: () => Rd
+       n: () => pb
```

#### 3257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24662-L24665` → after: `L24447-L24450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24447-L24450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24447-L24450) · [Before (L24662-L24665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24662-L24665)

```diff
-         Z2: Od,
-         O4: md
-       } = dd, Wd = dd.I9;
-       if (dd.UH || !Od || !md || !(Wd >= 0) || Wd !== Math.floor(Wd)) return !1;
+         A4: wb,
+         W4: Mb
+       } = bb, eb = bb.f4;
+       if (bb.IE || !wb || !Mb || !(eb >= 0) || eb !== Math.floor(eb)) return !1;
```

#### 3258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24692` → after: `L24477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24477) · [Before (L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24692)

```diff
-       const hd = dd.Ay;
+       const lb = bb.IF;
```

#### 3259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24708` → after: `L24493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24493) · [Before (L24708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24708)

```diff
-       return Wd(dd) && Od.I9 >= 0 && !Rd(Od) ? Xd(md) : md
+       return eb(bb) && wb.f4 >= 0 && !pb(wb) ? Vb(Mb) : Mb
```

#### 3260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24716-L24718` → after: `L24501-L24503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24501-L24503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24501-L24503) · [Before (L24716-L24718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24716-L24718)

```diff
-       const Wd = dd.zo.Rt.JH(Od),
-         Fd = dd._texURLtoTerrainID[Xd(Wd.N9[0])],
-         Rd = hd(dd.zo, Wd) ? void 0 === Fd ? null : dd.fq(Fd) : md;
+       const eb = bb.hU.MO.LE(wb),
+         Hb = bb._texURLtoTerrainID[Vb(eb.O4[0])],
+         pb = lb(bb.hU, eb) ? void 0 === Hb ? null : bb.AC(Hb) : Mb;
```

#### 3261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24722` → after: `L24507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24507) · [Before (L24722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24722)

```diff
-   39391: (dd, Od, md) => {
+   39072: (bb, wb, Mb) => {
```

#### 3262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24726-L24727` → after: `L24512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24512) · [Before (L24726-L24727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24726-L24727)

```diff
-       h: () => vd,
-       k: () => Qd
+       g: () => Ib
```

#### 3263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24729-L24733` → after: `L24514-L24518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24514-L24518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24514-L24518) · [Before (L24729-L24733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24729-L24733)

```diff
-     var Wd = md(38627),
-       Fd = md(39371),
-       Rd = md(38779),
-       Xd = md(38837);
-     const Kd = new Wd.Cq(0, Xd.d, 0),
+     var eb = Mb(38281),
+       Hb = Mb(39056),
+       pb = Mb(38449),
+       Vb = Mb(38514);
+     const gb = new eb.YC(0, Vb.b, 0),
```

#### 3264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24756` → after: `L24541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24541) · [Before (L24756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24756)

```diff
-       } = Fd.h, Rd = [md.call(dd, "vertex", Od), md.call(dd, "fragment", Od), Wd.call(dd, Od), (0, Fd.e)(dd).width];
+       } = Hb.i, pb = [Mb.call(bb, "vertex", wb), Mb.call(bb, "fragment", wb), eb.call(bb, wb), (0, Hb.c)(bb).width];
```

#### 3265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24776` → after: `L24561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24561) · [Before (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24776)

```diff
-       Fd && (dd.unfreeze(), (0, Rd.fb)(dd, !1)), (0, Rd.Q)(dd), Fd && requestAnimationFrame((() => {
+       Hb && (bb.unfreeze(), (0, pb.cb)(bb, !1)), (0, pb.N)(bb), Hb && requestAnimationFrame((() => {
```

#### 3266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24778` → after: `L24563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24563) · [Before (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24778)

```diff
-           dd.freeze(), (0, Rd.fb)(dd, !0)
+           bb.freeze(), (0, pb.cb)(bb, !0)
```

#### 3267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24783` → after: `L24568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24568) · [Before (L24783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24783)

```diff
-   39037: (dd, Od, md) => {
+   38714: (bb, wb, Mb) => {
```

#### 3268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24785-L24786` → after: `L24570-L24571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24570-L24571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24570-L24571) · [Before (L24785-L24786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24785-L24786)

```diff
-       c: () => Fd,
-       g: () => Rd
+       b: () => Hb,
+       f: () => pb
```

#### 3269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24799` → after: `L24584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24584) · [Before (L24799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24799)

```diff
-   38731: (dd, Od, md) => {
+   38397: (bb, wb, Mb) => {
```

#### 3270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24830` → after: `L24615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24615) · [Before (L24830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24830)

```diff
-   38993: (dd, Od, md) => {
+   38675: (bb, wb, Mb) => {
```

#### 3271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24833` → after: `L24618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24618) · [Before (L24833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24833)

```diff
-       h: () => Kd,
+       g: () => gb,
```

#### 3272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24836-L24837` → after: `L24621-L24622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24621-L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24621-L24622) · [Before (L24836-L24837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24836-L24837)

```diff
-     var Wd = md(38987),
-       Fd = md(39002);
+     var eb = Mb(38668),
+       Hb = Mb(38678);
```

#### 3273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24842-L24843` → after: `L24627-L24628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24627-L24628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24627-L24628) · [Before (L24842-L24843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24842-L24843)

```diff
-       md._noaFaceGroups = null !== Od && void 0 !== Od ? Od : null, md._noaFaceEpoch = -1, md._noaFaceMask = -1, md._noaFaceCount = -1, md._noaFaceMaterial = null;
-       const Wd = dd.ZE;
+       Mb._noaFaceGroups = null !== wb && void 0 !== wb ? wb : null, Mb._noaFaceEpoch = -1, Mb._noaFaceMask = -1, Mb._noaFaceCount = -1, Mb._noaFaceMaterial = null;
+       const eb = bb.oR;
```

#### 3274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24860` → after: `L24645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24645) · [Before (L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24860)

```diff
-       for (let Xd = 0; Xd < Wd.d; Xd++) {
+       for (let Vb = 0; Vb < eb.c; Vb++) {
```

#### 3275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24869` → after: `L24654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24654) · [Before (L24869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24869)

```diff
-         this.Qt = dd, this.engine = Od, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+         this.gO = bb, this.engine = wb, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 3276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24879` → after: `L24664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24664) · [Before (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24879)

```diff
-           Qd = Xd ? (0, Fd.e)(md, vd.getRenderWidth(), vd.getRenderHeight()) : 0;
+           Ib = Vb ? (0, Hb.c)(Mb, Lb.getRenderWidth(), Lb.getRenderHeight()) : 0;
```

#### 3277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24884` → after: `L24669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24669) · [Before (L24884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24884)

```diff
-         } = this, Nd = this.Qt / 2, qd = Nd * Math.sqrt(3), Hd = dd.data, yd = dd.length;
+         } = this, tb = this.gO / 2, Cb = tb * Math.sqrt(3), Eb = bb.data, Fb = bb.length;
```

#### 3278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24891` → after: `L24676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24676) · [Before (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24891)

```diff
-             const md = dd.ZE,
+             const Mb = bb.oR,
```

#### 3279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24894` → after: `L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24679) · [Before (L24894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24894)

```diff
-             if (Xd && Rd && (0, Wd.r)(dd.material)) {
+             if (Vb && pb && (0, eb.o)(bb.material)) {
```

#### 3280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24903` → after: `L24688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24688) · [Before (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24903)

```diff
-               vd = (0, Fd.l)(Od, Wd, Rd, Xd, (0, Fd.h)(Hd, Qd))
+               Lb = (0, Hb.l)(wb, eb, pb, Vb, (0, Hb.g)(Eb, Ib))
```

#### 3281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24908` → after: `L24693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24693) · [Before (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24908)

```diff
-                 Fd = Od[Wd.d]; - 1 !== vd && (Fd = hd(Od, vd, od), md = od[0]), dd._noaFaceCount = Fd, Rd.indexStart = 6 * md, Rd.indexCount = 6 * Fd, Rd.setBoundingInfo(dd.iG())
+                 Hb = wb[eb.c]; - 1 !== Lb && (Hb = lb(wb, Lb, Ub), Mb = Ub[0]), bb._noaFaceCount = Hb, pb.indexStart = 6 * Mb, pb.indexCount = 6 * Hb, pb.setBoundingInfo(bb.XN())
```

#### 3282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24917` → after: `L24702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24702) · [Before (L24917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24917)

```diff
-   39947: (dd, Od, md) => {
+   39630: (bb, wb, Mb) => {
```

#### 3283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24921` → after: `L24705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24705) · [Before (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24921)

```diff
-       C: () => gd,
+       F: () => Hb,
```

#### 3284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24924` → after: `L24708-L24709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24708-L24709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24708-L24709) · [Before (L24924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24924)

```diff
-       L: () => Nd,
+       K: () => zb,
+       M: () => Wb,
```

#### 3285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24928-L24930` → after: `L24713-L24717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24713-L24717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24713-L24717) · [Before (L24928-L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24928-L24930)

```diff
-       T: () => Hd,
-       X: () => Ld,
-       b: () => wd,
+       V: () => Fb,
+       W: () => Cb,
+       _: () => Eb,
+       ab: () => Sb,
+       bb: () => ib,
```

#### 3286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24936-L24937` → after: `L24721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24721) · [Before (L24936-L24937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24936-L24937)

```diff
-       g: () => Yd,
-       hb: () => Pd,
+       i: () => sb,
```

#### 3287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24939-L24941` → after: `L24723-L24725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24723-L24725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24723-L24725) · [Before (L24939-L24941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24939-L24941)

```diff
-       j: () => bd,
-       m: () => hd,
-       o: () => td,
+       jb: () => Nb,
+       l: () => mb,
+       mb: () => Qb,
```

#### 3288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24944` → after: `L24728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24728) · [Before (L24944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24944)

```diff
-       v: () => Xd,
+       u: () => lb,
```

#### 3289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24948` → after: `L24733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24733) · [Before (L24948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24948)

```diff
-     var Wd = md(3922);
+     var eb = Mb(4081);
```

#### 3290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L24970` → after: `L24755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24755) · [Before (L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L24970)

```diff
-       return dd.rq.get((Od / 9 | 0) - 1, (Od / 3 | 0) % 3 - 1, Od % 3 - 1)
+       return bb.sC.get((wb / 9 | 0) - 1, (wb / 3 | 0) % 3 - 1, wb % 3 - 1)
```

#### 3291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25028` → after: `L24813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24813) · [Before (L25028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25028)

```diff
-         if (Wd = dd.size, Wd >= md) throw new Error(`More than ${md} distinct registry values`);
+         if (eb = bb.size, eb >= Mb) throw new Error(`More than ${Mb} distinct registry values`);
```

#### 3292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25035` → after: `L24820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24820) · [Before (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25035)

```diff
-       return `${typeof dd}:${String(dd)}`
+       return `${typeof bb}:${String(bb)}`
```

#### 3293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25040` → after: `L24825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24825) · [Before (L25040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25040)

```diff
-         return Math.max(dd.PN.length, dd.HH.length, dd.PJ.length, dd.eJ.length, dd.gH.length, dd.wH.length, dd.aH.length)
+         return Math.max(bb.zt.length, bb.kC.length, bb.VY.length, bb.lY.length, bb.pE.length, bb.VE.length, bb.gE.length)
```

#### 3294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25047-L25050` → after: `L24832-L24835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24832-L24835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24832-L24835) · [Before (L25047-L25050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25047-L25050)

```diff
-         const md = dd.HH[qd],
-           Hd = dd.eJ[qd],
-           yd = `${Nd=dd.gH[qd],Nd?`[${Array.from(Nd).join()}]`:"none"}|${Dd(dd.wH[qd])}|${Dd(dd.aH[qd])}`;
-         od[qd] = jd(Wd, dd.PN[qd], 16) | jd(Fd, md, 16) << 4 | (md ? Xd : 0) | (dd.PJ[qd] ? Kd : 0) | (Hd ? hd : 0) | (Hd && (Hd.dU || Hd.MJ) ? vd : 0) | (null !== Od && void 0 !== Od && Od(qd) ? Qd : 0) | jd(Rd, yd, 65536) << td >>> 0
+         const Mb = bb.kC[Cb],
+           Eb = bb.lY[Cb],
+           Fb = `${tb=bb.pE[Cb],tb?`[${Array.from(tb).join()}]`:"none"}|${qb(bb.VE[Cb])}|${qb(bb.gE[Cb])}`;
+         Ub[Cb] = Gb(eb, bb.zt[Cb], 16) | Gb(Hb, Mb, 16) << 4 | (Mb ? Vb : 0) | (bb.VY[Cb] ? gb : 0) | (Eb ? lb : 0) | (Eb && (Eb.FY || Eb.EY) ? Lb : 0) | (null !== wb && void 0 !== wb && wb(Cb) ? Ib : 0) | Gb(pb, Fb, 65536) << Ob >>> 0
```

#### 3295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25064` → after: `L24849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24849) · [Before (L25064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25064)

```diff
-       } = Od, Qd = null === (Fd = dd.zo.gt) || void 0 === Fd ? void 0 : Fd.lH, td = [];
+       } = wb, Ib = null === (Hb = bb.hU.FO) || void 0 === Hb ? void 0 : Hb.YE, Ob = [];
```

#### 3296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25068` → after: `L24853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24853) · [Before (L25068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25068)

```diff
-           Fd = null !== (Gd = dd.sH.uH(Xd[Od], Xd[Od + 1], Xd[Od + 2])) && void 0 !== Gd ? Gd : null;
+           Hb = null !== (Wb = bb.CE.EE(Vb[wb], Vb[wb + 1], Vb[wb + 2])) && void 0 !== Wb ? Wb : null;
```

#### 3297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25073` → after: `L24858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24858) · [Before (L25073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25073)

```diff
-         Fd.CH = !1, Fd.vH += Xd[Od + xd];
+         Hb.ZE = !1, Hb.dC += Vb[wb + rb];
```

#### 3298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25075-L25076` → after: `L24860-L24861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24860-L24861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24860-L24861) · [Before (L25075-L25076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25075-L25076)

```diff
-         Rd & od && (Fd.Uq = !1), Rd & Nd && (Fd.uq = !1), Rd & qd && (Fd.bJ = !0), Rd & Hd && (Fd.BH = !0, Fd.iH = !0);
-         for (let dd = 0; dd < 3; dd++) Fd.xH[dd] += Xd[Od + Sd + dd];
+         pb & Ub && (Hb.IC = !1), pb & tb && (Hb.CC = !1), pb & Cb && (Hb.ZD = !0), pb & Eb && (Hb.UE = !0, Hb.BE = !0);
+         for (let bb = 0; bb < 3; bb++) Hb.OE[bb] += Vb[wb + Db + bb];
```

#### 3299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25082` → after: `L24867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24867) · [Before (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25082)

```diff
-           Od && (vd >>> md & 1 && (Od.CH = !1), hd >>> md & 1 && (Od.BH = !0, Od.iH = !0, Od.QH = !0))
+           wb && (Lb >>> Mb & 1 && (wb.ZE = !1), lb >>> Mb & 1 && (wb.UE = !0, wb.BE = !0, wb.PC = !0))
```

#### 3300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25086-L25088` → after: `L24871-L24873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24871-L24873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24871-L24873) · [Before (L25086-L25088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25086-L25088)

```diff
-           Yd = Fd.Wq;
-         for (let dd = Td, md = 0; 0 !== dd; dd >>>= 1, md++) 0 === (1 & dd) || 0 === (pd >>> md & 1) && Yd[md] === Kd[2 * Od + rd + md] || (Yd[md] = Wd.d);
-         Rd & yd && (Qd ? (Fd.BH = !0, Fd.QH = !0) : Fd.PH = !1), Fd.BH && (Fd.QH = !0)
+           hb = Hb.vt;
+         for (let bb = sb, Mb = 0; 0 !== bb; bb >>>= 1, Mb++) 0 === (1 & bb) || 0 === (mb >>> Mb & 1) && hb[Mb] === gb[2 * wb + Ab + Mb] || (hb[Mb] = eb.g);
+         pb & Fb && (Ib ? (Hb.UE = !0, Hb.PC = !0) : Hb.xE = !1), Hb.UE && (Hb.PC = !0)
```

#### 3301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25090` → after: `L24875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24875) · [Before (L25090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25090)

```diff
-       const nd = dd.zo.jH;
+       const Jb = bb.hU.rE;
```

#### 3302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25099-L25100` → after: `L24884-L24885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24884-L24885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24884-L24885) · [Before (L25099-L25100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25099-L25100)

```diff
-           case bd:
-             nd.WU(dd, hd[Wd + 1] >>> 16, md, Fd, Rd);
+           case Bb:
+             Jb.mY(bb, lb[eb + 1] >>> 16, Mb, Hb, pb);
```

#### 3303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25102-L25103` → after: `L24887-L24888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24887-L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24887-L24888) · [Before (L25102-L25103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25102-L25103)

```diff
-           case Td:
-             dd.aJ.add(md, Fd, Rd);
+           case sb:
+             bb.uD.add(Mb, Hb, pb);
```

#### 3304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25105-L25106` → after: `L24890-L24891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24890-L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24890-L24891) · [Before (L25105-L25106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25105-L25106)

```diff
-           case pd:
-             dd.aJ.remove(md, Fd, Rd)
+           case mb:
+             bb.uD.remove(Mb, Hb, pb)
```

#### 3305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25113-L25114` → after: `L24898-L24899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24898-L24899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24898-L24899) · [Before (L25113-L25114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25113-L25114)

```diff
-           Fd = md === wd ? Od : Ed(Od, md);
-         Fd && dd.SH(Fd, !0)
+           Hb = Mb === Xb ? wb : xb(wb, Mb);
+         Hb && bb.tE(Hb, !0)
```

#### 3306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25118` → after: `L24903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24903) · [Before (L25118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25118)

```diff
-   38940: (dd, Od, md) => {
+   38615: (bb, wb, Mb) => {
```

#### 3307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25120-L25121` → after: `L24905-L24906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24905-L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24905-L24906) · [Before (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25120-L25121)

```diff
-       c: () => Rd,
-       g: () => Fd
+       b: () => pb,
+       d: () => Hb
```

#### 3308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25126` → after: `L24911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24911) · [Before (L25126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25126)

```diff
-       return 6 === (null === dd || void 0 === dd ? void 0 : dd.length) ? dd : Wd
+       return 6 === (null === bb || void 0 === bb ? void 0 : bb.length) ? bb : eb
```

#### 3309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25141` → after: `L24926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24926) · [Before (L25141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25141)

```diff
-   38808: (dd, Od, md) => {
+   38479: (bb, wb, Mb) => {
```

#### 3310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25143-L25144` → after: `L24928-L24929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24928-L24929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24928-L24929) · [Before (L25143-L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25143-L25144)

```diff
-       e: () => Kd,
-       i: () => vd
+       c: () => gb,
+       d: () => Lb
```

#### 3311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25172` → after: `L24957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24957) · [Before (L25172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25172)

```diff
-   39013: (dd, Od, md) => {
+   38690: (bb, wb, Mb) => {
```

#### 3312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25174-L25175` → after: `L24959-L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24959-L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24959-L24960) · [Before (L25174-L25175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25174-L25175)

```diff
-       b: () => Xd,
-       d: () => Rd
+       c: () => Vb,
+       e: () => pb
```

#### 3313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25177-L25178` → after: `L24962-L24963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24962-L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24962-L24963) · [Before (L25177-L25178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25177-L25178)

```diff
-     var Wd = md(3942),
-       Fd = md(39007);
+     var eb = Mb(4111),
+       Hb = Mb(38687);
```

#### 3314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25184` → after: `L24969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R24969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L24969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L24969) · [Before (L25184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25184)

```diff
-         this.occluders = dd, this.opaque = Od, this.airStamp = md, this.air = Wd, this.version = 0, this.sweeps = 0, this.fullSweeps = 0, this.budgetMs = 1 / 0, this.records = new Map, this.changed = [], this.changedOverflow = !1, this.sweptVersion = -1, this.sweptPassable = new  … [truncated]
+         this.occluders = bb, this.opaque = wb, this.airStamp = Mb, this.air = eb, this.version = 0, this.sweeps = 0, this.fullSweeps = 0, this.budgetMs = 1 / 0, this.records = new Map, this.changed = [], this.changedOverflow = !1, this.sweptVersion = -1, this.sweptPassable = new  … [truncated]
```

#### 3315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25222-L25223` → after: `L25007-L25008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25007-L25008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25007-L25008) · [Before (L25222-L25223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25222-L25223)

```diff
-         if (!Number.isFinite(dd) || !Number.isFinite(Od) || !Number.isFinite(md) || Wd % Fd.e !== 0) return !1;
-         const hd = Wd / Fd.e,
+         if (!Number.isFinite(bb) || !Number.isFinite(wb) || !Number.isFinite(Mb) || eb % Hb.c !== 0) return !1;
+         const lb = eb / Hb.c,
```

#### 3316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25237` → after: `L25022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25022) · [Before (L25237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25237)

```diff
-           const dd = Fd.e,
+           const bb = Hb.c,
```

#### 3317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25255` → after: `L25040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25040) · [Before (L25255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25255)

```diff
-               if (this.opaque[Rd.eZ(Kd, dd, Od)]) return !1;
+               if (this.opaque[pb.Vk(gb, bb, wb)]) return !1;
```

#### 3318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25274` → after: `L25059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25059) · [Before (L25274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25274)

```diff
-         const hd = Fd.e;
+         const lb = Hb.c;
```

#### 3319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25309` → after: `L25094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25094) · [Before (L25309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25309)

```diff
-         const Rd = Fd.e,
+         const pb = Hb.c,
```

#### 3320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25426` → after: `L25211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25211) · [Before (L25426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25426)

```diff
-         return Fd < Od && Rd < md && Xd < Wd ? (Fd * md + Rd) * Wd + Xd : -1
+         return Hb < wb && pb < Mb && Vb < eb ? (Hb * Mb + pb) * eb + Vb : -1
```

#### 3321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25448` → after: `L25233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25233) · [Before (L25448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25448)

```diff
-         const qd = Fd.e,
+         const Cb = Hb.c,
```

#### 3322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25452` → after: `L25237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25237) · [Before (L25452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25452)

```diff
-           pd = vd === td ? Fd.c : Fd.c | bd;
+           mb = Lb === Ob ? Hb.b : Hb.b | Bb;
```

#### 3323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25456` → after: `L25241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25241) · [Before (L25456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25456)

```diff
-             for (let Od = 0; Od < qd; Od++, Rd++) Td[Rd] = Nd ? Nd[(0, Fd.t)(Qd, dd, Od)] : pd
+             for (let wb = 0; wb < Cb; wb++, pb++) sb[pb] = tb ? tb[(0, Hb.q)(Ib, bb, wb)] : mb
```

#### 3324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25464` → after: `L25249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25249) · [Before (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25464)

```diff
-         const dd = Fd.e,
+         const bb = Hb.c,
```

#### 3325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25487` → after: `L25272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25272) · [Before (L25487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25487)

```diff
-         const dd = Fd.e;
+         const bb = Hb.c;
```

#### 3326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25491` → after: `L25276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25276) · [Before (L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25491)

```diff
-         const dd = Fd.e,
+         const bb = Hb.c,
```

#### 3327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25507-L25509` → after: `L25292-L25294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25292-L25294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25292-L25294) · [Before (L25507-L25509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25507-L25509)

```diff
-             yd = Od > 0 ? Rd - 1 - hd : hd,
-             gd = md > 0 ? Xd - 1 - vd : vd,
-             wd = Wd > 0 ? Kd - 1 - Qd : Qd,
+             Fb = wb > 0 ? pb - 1 - lb : lb,
+             zb = Mb > 0 ? Vb - 1 - Lb : Lb,
+             Xb = eb > 0 ? gb - 1 - Ib : Ib,
```

#### 3328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25531` → after: `L25316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25316) · [Before (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25531)

```diff
-                 if (Ld + Od + dd <= 1) md = Ld + Od + dd === 0 ? td[Rd] & bd ? pd : 63 : Ld > 0 ? Yd(xd[Rd - Bd], td[Rd - Bd], ud, !0, od) : Od > 0 ? Yd(xd[Rd - Sd], td[Rd - Sd], Vd, !0, od) : Yd(xd[Rd - sd], td[Rd - sd], Ad, !0, od);
+                 if (Sb + wb + bb <= 1) Mb = Sb + wb + bb === 0 ? Ob[pb] & Bb ? mb : 63 : Sb > 0 ? hb(rb[pb - Rb], Ob[pb - Rb], Yb, !0, Ub) : wb > 0 ? hb(rb[pb - Db], Ob[pb - Db], Zb, !0, Ub) : hb(rb[pb - cb], Ob[pb - cb], fb, !0, Ub);
```

#### 3329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25537` → after: `L25322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25322) · [Before (L25537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25537)

```diff
-                       md = dd & Td || Od & bd ? pd : dd & od[Od * Fd.h + ud] ? rd : 0
+                       Mb = bb & sb || wb & Bb ? mb : bb & Ub[wb * Hb.f + Yb] ? Ab : 0
```

#### 3330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25544` → after: `L25329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25329) · [Before (L25544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25544)

```diff
-                       md |= dd & Td || Od & bd ? pd : dd & od[Od * Fd.h + Vd] ? Gd : 0
+                       Mb |= bb & sb || wb & Bb ? mb : bb & Ub[wb * Hb.f + Zb] ? Wb : 0
```

#### 3331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25551` → after: `L25336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25336) · [Before (L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25551)

```diff
-                       md |= dd & Td || Od & bd ? pd : dd & od[Od * Fd.h + Ad] ? nd : 0
+                       Mb |= bb & sb || wb & Bb ? mb : bb & Ub[wb * Hb.f + fb] ? Jb : 0
```

#### 3332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25566` → after: `L25351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25351) · [Before (L25566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25566)

```diff
-         const Xd = Fd.e,
+         const Vb = Hb.c,
```

#### 3333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25574-L25576` → after: `L25359-L25361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25359-L25361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25359-L25361) · [Before (L25574-L25576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25574-L25576)

```diff
-           yd = Math.min(Rd, Nd > 0 ? Kd - 1 - Qd : Qd),
-           bd = qd > 0 ? hd - 1 - td : td,
-           Td = Hd > 0 ? vd - 1 - od : od,
+           Fb = Math.min(pb, tb > 0 ? gb - 1 - Ib : Ib),
+           Bb = Cb > 0 ? lb - 1 - Ob : Ob,
+           sb = Eb > 0 ? Lb - 1 - Ub : Ub,
```

#### 3334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25578` → after: `L25363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25363) · [Before (L25578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25578)

```diff
-         return pd[0] = Math.floor((Nd > 0 ? Qd + Od : Qd - yd) / Xd), pd[1] = Math.floor((Nd > 0 ? Qd + yd : Qd - Od) / Xd), pd[2] = Math.floor((qd > 0 ? td + md : td - bd) / Xd), pd[3] = Math.floor((qd > 0 ? td + bd : td - md) / Xd), pd[4] = Math.floor((Hd > 0 ? od + Wd : od - T … [truncated]
+         return mb[0] = Math.floor((tb > 0 ? Ib + wb : Ib - Fb) / Vb), mb[1] = Math.floor((tb > 0 ? Ib + Fb : Ib - wb) / Vb), mb[2] = Math.floor((Cb > 0 ? Ob + Mb : Ob - Bb) / Vb), mb[3] = Math.floor((Cb > 0 ? Ob + Bb : Ob - Mb) / Vb), mb[4] = Math.floor((Eb > 0 ? Ub + eb : Ub - s … [truncated]
```

#### 3335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25586` → after: `L25371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25371) · [Before (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25586)

```diff
-         const Xd = Fd.e,
+         const Vb = Hb.c,
```

#### 3336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25608-L25610` → after: `L25393-L25395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25393-L25395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25393-L25395) · [Before (L25608-L25610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25608-L25610)

```diff
-                         const Xd = 1 & Od ? qd - Wd : Wd - qd,
-                           Kd = 2 & Od ? Hd - Fd : Fd - Hd,
-                           hd = 4 & Od ? yd - Rd : Rd - yd;
+                         const Vb = 1 & wb ? Cb - eb : eb - Cb,
+                           gb = 2 & wb ? Eb - Hb : Hb - Eb,
+                           lb = 4 & wb ? Fb - pb : pb - Fb;
```

#### 3337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25651` → after: `L25436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25436) · [Before (L25651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25651)

```diff
-         return 0 === dd ? (this.size[1] + 2) * Od : 1 === dd ? Od : 1
+         return 0 === bb ? (this.size[1] + 2) * wb : 1 === bb ? wb : 1
```

#### 3338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25662-L25663` → after: `L25447-L25448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25447-L25448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25447-L25448) · [Before (L25662-L25663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25662-L25663)

```diff
-       const Wd = dd + Fd.e - 1;
-       return (md > 0 ? Wd - Od : Od - dd) < 0 ? -1 : Math.max(0, md > 0 ? dd - Od : Od - Wd)
+       const eb = bb + Hb.c - 1;
+       return (Mb > 0 ? eb - wb : wb - bb) < 0 ? -1 : Math.max(0, Mb > 0 ? bb - wb : wb - eb)
```

#### 3339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25679` → after: `L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25464) · [Before (L25679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25679)

```diff
-       return 0 === dd ? 0 : dd & Td || Od & bd ? pd : Wd || dd & Rd[Od * Fd.h + md] ? 1 << (1 ^ md) : 0
+       return 0 === bb ? 0 : bb & sb || wb & Bb ? mb : eb || bb & pb[wb * Hb.f + Mb] ? 1 << (1 ^ Mb) : 0
```

#### 3340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25685` → after: `L25470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25470) · [Before (L25685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25685)

```diff
-       if (0 === wd.length && (gd = new Uint8Array((Fd.c + 1) * Fd.h), wd = new Uint8Array(Fd.c + 1)), !wd[dd]) {
+       if (0 === Xb.length && (zb = new Uint8Array((Hb.b + 1) * Hb.f), Xb = new Uint8Array(Hb.b + 1)), !Xb[bb]) {
```

#### 3341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25687` → after: `L25472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25472) · [Before (L25687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25687)

```diff
-         for (let Od = 0; Od < Fd.h; Od++) gd[dd * Fd.h + Od] = (0, Fd.x)(dd, Od)
+         for (let wb = 0; wb < Hb.f; wb++) zb[bb * Hb.f + wb] = (0, Hb.t)(bb, wb)
```

#### 3342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25691` → after: `L25476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25476) · [Before (L25691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25691)

```diff
-   39007: (dd, Od, md) => {
+   38687: (bb, wb, Mb) => {
```

#### 3343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25694-L25695` → after: `L25480-L25481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25480-L25481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25480-L25481) · [Before (L25694-L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25694-L25695)

```diff
-       e: () => Xd,
-       h: () => Wd,
+       f: () => eb,
+       j: () => Ub,
```

#### 3344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25699-L25700` → after: `L25484-L25485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25484-L25485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25484-L25485) · [Before (L25699-L25700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25699-L25700)

```diff
-       t: () => td,
-       x: () => Qd
+       q: () => Ob,
+       t: () => Ib
```

#### 3345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25774` → after: `L25559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25559) · [Before (L25774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25774)

```diff
-           const Fd = null === Rd ? Nd : Rd[Wd];
+           const Hb = null === pb ? tb : pb[eb];
```

#### 3346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25796` → after: `L25581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25581) · [Before (L25796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25796)

```diff
-       return Od ? hd.fill(Fd) : Hd(dd, md, Wd, Rd, hd, Xd) ? hd : null
+       return wb ? lb.fill(Hb) : Eb(bb, Mb, eb, pb, lb, Vb) ? lb : null
```

#### 3347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25890` → after: `L25675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25675) · [Before (L25890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25890)

```diff
-   39939: (dd, Od, md) => {
+   39626: (bb, wb, Mb) => {
```

#### 3348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25892` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25677) · [Before (L25892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25892)

```diff
-       d: () => Xd
+       c: () => Vb
```

#### 3349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25894` → after: `L25679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25679) · [Before (L25894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25894)

```diff
-     var Wd = md(3928),
+     var eb = Mb(4089),
```

#### 3350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25896` → after: `L25681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25681) · [Before (L25896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25896)

```diff
-       Rd = md(39263);
+       pb = Mb(38961);
```

#### 3351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25902` → after: `L25687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25687) · [Before (L25902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25902)

```diff
-         return 32 === dd && Od.isBloxdWasmReady() ? new Xd(dd, Od, Od.getBloxdWasm().OF.UN(), md) : Xd.js(dd)
+         return 32 === bb && wb.isBloxdWasmReady() ? new Vb(bb, wb, wb.getBloxdWasm().ve.Ht(), Mb) : Vb.js(bb)
```

#### 3352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25905` → after: `L25690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25690) · [Before (L25905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25905)

```diff
-         this.size = dd, this.wasm = Od, this.Wt = Wd, this.volume = void 0, this.Bt = void 0, this.jK = new Map, this.unsubscribe = [], this.volume = dd * dd * dd, this.Bt = md, Od && this.unsubscribe.push(Od.onBloxdWasmMemoryGrown((dd => {
+         this.size = bb, this.wasm = wb, this.bO = eb, this.volume = void 0, this.XO = void 0, this.dg = new Map, this.unsubscribe = [], this.volume = bb * bb * bb, this.XO = Mb, wb && this.unsubscribe.push(wb.onBloxdWasmMemoryGrown((bb => {
```

#### 3353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25912` → after: `L25697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25697) · [Before (L25912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25912)

```diff
-         return this.Bt
+         return this.XO
```

#### 3354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25914-L25915` → after: `L25699-L25700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25699-L25700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25699-L25700) · [Before (L25914-L25915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25914-L25915)

```diff
-       VQd() {
-         return this.Bt ? null : this.newArray()
+       QIb() {
+         return this.XO ? null : this.newArray()
```

#### 3355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25918` → after: `L25703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25703) · [Before (L25918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25918)

```diff
-         if (dd && (this.jK.has(dd) || !this.Bt)) return dd;
+         if (bb && (this.dg.has(bb) || !this.XO)) return bb;
```

#### 3356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25920` → after: `L25705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25705) · [Before (L25920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25920)

```diff
-           const md = Od.tN(!dd);
+           const Mb = wb.qU(!bb);
```

#### 3357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25923` → after: `L25708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25708) · [Before (L25923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25923)

```diff
-             ptr: Od.jN(md)
+             ptr: wb.jt(Mb)
```

#### 3358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25926` → after: `L25711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25711) · [Before (L25926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25926)

```diff
-         if (!Od) return null !== dd && void 0 !== dd ? dd : this.newArray();
+         if (!wb) return null !== bb && void 0 !== bb ? bb : this.newArray();
```

#### 3359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25930` → after: `L25715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25715) · [Before (L25930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25930)

```diff
-         return this.jK.set(Wd, Od), Wd
+         return this.dg.set(eb, wb), eb
```

#### 3360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25933-L25935` → after: `L25718-L25720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25718-L25720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25718-L25720) · [Before (L25933-L25935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25933-L25935)

```diff
-         const Od = this.jK.get(dd);
-         return Od && this.Bt ? {
-           Bt: this.Bt,
+         const wb = this.dg.get(bb);
+         return wb && this.XO ? {
+           XO: this.XO,
```

#### 3361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25940-L25941` → after: `L25725-L25726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25725-L25726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25725-L25726) · [Before (L25940-L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25940-L25941)

```diff
-         if (!this.Bt) return null;
-         for (const Od of this.jK.values())
+         if (!this.XO) return null;
+         for (const wb of this.dg.values())
```

#### 3362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25946` → after: `L25731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25731) · [Before (L25946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25946)

```diff
-         const Fd = this.jK.get(Wd);
+         const Hb = this.dg.get(eb);
```

#### 3363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25948` → after: `L25733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25733) · [Before (L25948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25948)

```diff
-           Wd.SN(dd, Od, md, Fd.slot)
+           eb.lt(bb, wb, Mb, Hb.slot)
```

#### 3364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25952-L25954` → after: `L25737-L25739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25737-L25739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25737-L25739) · [Before (L25952-L25954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25952-L25954)

```diff
-         const Od = this.jK.get(dd);
-         Od && (this.jK.delete(dd), dd.data = new Uint16Array(0), this.call("freeing a chunk's slot", (dd => {
-           dd.pN(Od.slot)
+         const wb = this.dg.get(bb);
+         wb && (this.dg.delete(bb), bb.data = new Uint16Array(0), this.call("freeing a chunk's slot", (bb => {
+           bb.oU(wb.slot)
```

#### 3365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25958-L25960` → after: `L25743-L25745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25743-L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25743-L25745) · [Before (L25958-L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25958-L25960)

```diff
-         const Od = this.jK.get(dd),
-           md = Od && this.call("encoding a chunk", (dd => dd.yN(Od.slot)));
-         return null !== md && void 0 !== md ? md : Rd.encode(dd.data)
+         const wb = this.dg.get(bb),
+           Mb = wb && this.call("encoding a chunk", (bb => bb.PU(wb.slot)));
+         return null !== Mb && void 0 !== Mb ? Mb : pb.encode(bb.data)
```

#### 3366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25963` → after: `L25748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25748) · [Before (L25963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25963)

```diff
-         return this.jK.size
+         return this.dg.size
```

#### 3367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25967-L25968` → after: `L25752-L25753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25752-L25753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25752-L25753) · [Before (L25967-L25968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25967-L25968)

```diff
-         const md = null !== (dd = null === (Od = this.Bt) || void 0 === Od ? void 0 : Od.YN()) && void 0 !== dd ? dd : 0;
-         if (md !== this.jK.size) throw new Error(`The chunk store holds ${md} slots for ${this.jK.size} arrays`)
+         const Mb = null !== (bb = null === (wb = this.XO) || void 0 === wb ? void 0 : wb.TU()) && void 0 !== bb ? bb : 0;
+         if (Mb !== this.dg.size) throw new Error(`The chunk store holds ${Mb} slots for ${this.dg.size} arrays`)
```

#### 3368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25974` → after: `L25759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25759) · [Before (L25974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25974)

```diff
-         if (!this.Bt) return null;
+         if (!this.XO) return null;
```

#### 3369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25976` → after: `L25761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25761) · [Before (L25976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25976)

```diff
-           return Od(this.Bt)
+           return wb(this.XO)
```

#### 3370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25980` → after: `L25765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25765) · [Before (L25980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25980)

```diff
-           return this.Wt(new Error(`The wasm chunk store failed ${dd} (${Od}), so chunks are plain arrays from now on`)), null
+           return this.bO(new Error(`The wasm chunk store failed ${bb} (${wb}), so chunks are plain arrays from now on`)), null
```

#### 3371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25986` → after: `L25771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25771) · [Before (L25986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25986)

```diff
-           }] of this.jK) Od.data = new Uint16Array(dd, md, this.volume)
+           }] of this.dg) wb.data = new Uint16Array(bb, Mb, this.volume)
```

#### 3372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25989-L25990` → after: `L25774-L25775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25774-L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25774-L25775) · [Before (L25989-L25990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25989-L25990)

```diff
-         if (!this.Bt) return;
-         this.Bt = null;
+         if (!this.XO) return;
+         this.XO = null;
```

#### 3373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25994-L25995` → after: `L25779-L25780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25779-L25780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25779-L25780) · [Before (L25994-L25995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L25994-L25995)

```diff
-           }] of this.jK) Od.data = new Uint16Array(dd, md, this.volume).slice();
-         this.jK.clear();
+           }] of this.dg) wb.data = new Uint16Array(bb, Mb, this.volume).slice();
+         this.dg.clear();
```

#### 3374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26000` → after: `L25785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25785) · [Before (L26000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26000)

```diff
-   39021: (dd, Od, md) => {
+   38698: (bb, wb, Mb) => {
```

#### 3375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26005` → after: `L25790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25790) · [Before (L26005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26005)

```diff
-       e: () => Wd
+       d: () => eb
```

#### 3376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26008` → after: `L25793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25793) · [Before (L26008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26008)

```diff
-   39902: (dd, Od, md) => {
+   39596: (bb, wb, Mb) => {
```

#### 3377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26011-L26012` → after: `L25796-L25797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25796-L25797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25796-L25797) · [Before (L26011-L26012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26011-L26012)

```diff
-       g: () => Nd,
-       j: () => od
+       h: () => tb,
+       i: () => Ub
```

#### 3378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26014-L26017` → after: `L25799-L25802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25799-L25802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25799-L25802) · [Before (L26014-L26017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26014-L26017)

```diff
-     var Wd = md(39033),
-       Fd = md(3953),
-       Rd = md(38884),
-       Xd = md(3949);
+     var eb = Mb(38707),
+       Hb = Mb(4120),
+       pb = Mb(38552),
+       Vb = Mb(4118);
```

#### 3379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26023` → after: `L25808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25808) · [Before (L26023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26023)

```diff
-         levels: (0, Fd.v)(),
+         levels: (0, Hb.y)(),
```

#### 3380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26041` → after: `L25826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25826) · [Before (L26041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26041)

```diff
-       Od.frame = (0, Rd.n)();
+       wb.frame = (0, pb.l)();
```

#### 3381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26043` → after: `L25828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25828) · [Before (L26043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26043)

```diff
-       Od.version === Fd && Od.x === md[0] && Od.y === md[1] && Od.z === md[2] || (Od.levels.set((0, Wd.i)(dd, md)), Od.x = md[0], Od.y = md[1], Od.z = md[2], Od.version = Fd)
+       wb.version === Hb && wb.x === Mb[0] && wb.y === Mb[1] && wb.z === Mb[2] || (wb.levels.set((0, eb.g)(bb, Mb)), wb.x = Mb[0], wb.y = Mb[1], wb.z = Mb[2], wb.version = Hb)
```

#### 3382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26048` → after: `L25833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25833) · [Before (L26048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26048)

```diff
-       return md.frame !== (0, Rd.n)() && td(dd, md, dd.qE.hY(Od)), md.levels
+       return Mb.frame !== (0, pb.l)() && Ob(bb, Mb, bb.pR.Qm(wb)), Mb.levels
```

#### 3383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26053` → after: `L25838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25838) · [Before (L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26053)

```diff
-       if (md.frame !== (0, Rd.n)()) {
+       if (Mb.frame !== (0, pb.l)()) {
```

#### 3384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26055-L26056` → after: `L25840-L25841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25840-L25841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25840-L25841) · [Before (L26055-L26056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26055-L26056)

```diff
-         const Fd = dd.qE.hY(Od),
-           Rd = null === (Wd = dd.qE.Vmd(Od)) || void 0 === Wd ? void 0 : Wd.offset;
+         const Hb = bb.pR.Qm(wb),
+           pb = null === (eb = bb.pR.ZMb(wb)) || void 0 === eb ? void 0 : eb.offset;
```

#### 3385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26066` → after: `L25851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25851) · [Before (L26066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26066)

```diff
-   39033: (dd, Od, md) => {
+   38707: (bb, wb, Mb) => {
```

#### 3386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26070` → after: `L25856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25856) · [Before (L26070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26070)

```diff
-       i: () => Ud,
+       k: () => Db,
```

#### 3387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26072-L26073` → after: `L25858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25858) · [Before (L26072-L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26072-L26073)

```diff
-       p: () => vd,
-       r: () => sd
+       n: () => cb
```

#### 3388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26075` → after: `L25860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25860) · [Before (L26075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26075)

```diff
-     var Wd = md(415),
+     var eb = Mb(398),
```

#### 3389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26077-L26080` → after: `L25862-L25865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25862-L25865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25862-L25865) · [Before (L26077-L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26077-L26080)

```diff
-       Rd = md(3953),
-       Xd = md(38627),
-       Kd = md(38856);
-     const hd = (0, Rd.v)().fill(1);
+       pb = Mb(4120),
+       Vb = Mb(38281),
+       gb = Mb(38526);
+     const lb = (0, pb.y)().fill(1);
```

#### 3390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26085-L26092` → after: `L25870-L25877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25870-L25877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25870-L25877) · [Before (L26085-L26092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26085-L26092)

```diff
-     const Qd = (0, Rd.y)(),
-       td = (0, Rd.y)(),
-       od = (0, Rd.y)(),
-       Nd = (0, Rd.y)(),
-       qd = (0, Rd.y)(),
-       Hd = (0, Rd.y)(),
-       yd = (0, Rd.y)(),
-       bd = (0, Rd.y)(),
+     const Ib = (0, pb.B)(),
+       Ob = (0, pb.B)(),
+       Ub = (0, pb.B)(),
+       tb = (0, pb.B)(),
+       Cb = (0, pb.B)(),
+       Eb = (0, pb.B)(),
+       Fb = (0, pb.B)(),
+       Bb = (0, pb.B)(),
```

#### 3391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26096` → after: `L25881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25881) · [Before (L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26096)

```diff
-       gd = (0, Rd.v)();
+       zb = (0, pb.y)();
```

#### 3392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26099-L26103` → after: `L25884-L25888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25884-L25888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25884-L25888) · [Before (L26099-L26103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26099-L26103)

```diff
-       const Xd = dd.EQd(Od, md, Wd);
-       if (!Xd || !Xd.Bq) return Fd[0] = 0, Fd[1] = 0, Fd[2] = 0, Fd[3] = 15, Fd;
-       const Kd = dd.tt,
-         hd = dd.pQd(Od) * Kd * Kd + dd.pQd(md) * Kd + dd.pQd(Wd);
-       return (0, Rd.G)(Xd.Bq, Xd.Vq, hd, Fd), Fd
+       const Vb = bb.YIb(wb, Mb, eb);
+       if (!Vb || !Vb.UC) return Hb[0] = 0, Hb[1] = 0, Hb[2] = 0, Hb[3] = 15, Hb;
+       const gb = bb.lO,
+         lb = bb.KIb(wb) * gb * gb + bb.KIb(Mb) * gb + bb.KIb(eb);
+       return (0, pb.M)(Vb.UC, Vb.EC, lb, Hb), Hb
```

#### 3393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26111` → after: `L25896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25896) · [Before (L26111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26111)

```diff
-       return dd <= 0 ? Od : Od <= 0 ? dd : dd + (Od - dd) * md
+       return bb <= 0 ? wb : wb <= 0 ? bb : bb + (wb - bb) * Mb
```

#### 3394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26116` → after: `L25901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25901) · [Before (L26116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26116)

```diff
-         Bt: md
+         XO: Mb
```

#### 3395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26152` → after: `L25937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25937) · [Before (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26152)

```diff
-         Bt: Rd
+         XO: pb
```

#### 3396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26158` → after: `L25943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25943) · [Before (L26158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26158)

```diff
-             gt: Xd
+             FO: Vb
```

#### 3397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26164-L26165` → after: `L25949-L25950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25949-L25950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25949-L25950) · [Before (L26164-L26165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26164-L26165)

```diff
-           let od = null !== (Wd = Xd.skyLightColourOverride) && void 0 !== Wd ? Wd : Xd.IRd,
-             Nd = null !== (Rd = Xd.ambientLightColourOverride) && void 0 !== Rd ? Rd : Xd.lRd;
+           let Ub = null !== (eb = Vb.skyLightColourOverride) && void 0 !== eb ? eb : Vb.Ppb,
+             tb = null !== (pb = Vb.ambientLightColourOverride) && void 0 !== pb ? pb : Vb.npb;
```

#### 3398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26168-L26170` → after: `L25953-L25955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25953-L25955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25953-L25955) · [Before (L26168-L26170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26168-L26170)

```diff
-           hd = Math.max(hd, qd), vd = Math.max(vd, qd), Qd = Math.max(Qd, qd), hd = (0, Kd.eb)(hd), vd = (0, Kd.eb)(vd), Qd = (0, Kd.eb)(Qd);
-           const Hd = (0, Kd.eb)(td);
-           Fd().lerp(md, Nd, od, Hd), hd = (0, Kd.p)(hd, Nd[0]), vd = (0, Kd.p)(vd, Nd[1]), Qd = (0, Kd.p)(Qd, Nd[2]), md[0] = Math.max(hd, md[0]), md[1] = Math.max(vd, md[1]), md[2] = Math.max(Qd, md[2])
+           lb = Math.max(lb, Cb), Lb = Math.max(Lb, Cb), Ib = Math.max(Ib, Cb), lb = (0, gb.ob)(lb), Lb = (0, gb.ob)(Lb), Ib = (0, gb.ob)(Ib);
+           const Eb = (0, gb.ob)(Ob);
+           Hb().lerp(Mb, tb, Ub, Eb), lb = (0, gb.q)(lb, tb[0]), Lb = (0, gb.q)(Lb, tb[1]), Ib = (0, gb.q)(Ib, tb[2]), Mb[0] = Math.max(lb, Mb[0]), Mb[1] = Math.max(Lb, Mb[1]), Mb[2] = Math.max(Ib, Mb[2])
```

#### 3399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26176` → after: `L25961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25961) · [Before (L26176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26176)

```diff
-       if (dd.gt.lH) {
+       if (bb.FO.YE) {
```

#### 3400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26199-L26200` → after: `L25984-L25985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25984-L25985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25984-L25985) · [Before (L26199-L26200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26199-L26200)

```diff
-         Xd = dd.xG.aLightLevels;
-       Xd && (0, Kd.Q)(Xd.x, Xd.y, Xd.z, Xd.w, Od) && Xd.KOd(md, Wd, Fd, Rd)
+         Vb = bb.hN.aLightLevels;
+       Vb && (0, gb.W)(Vb.x, Vb.y, Vb.z, Vb.w, wb) && Vb.twb(Mb, eb, Hb, pb)
```

#### 3401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26203` → after: `L25988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25988) · [Before (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26203)

```diff
-   38877: (dd, Od, md) => {
+   38547: (bb, wb, Mb) => {
```

#### 3402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26205-L26207` → after: `L25990-L25992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25990-L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25990-L25992) · [Before (L26205-L26207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26205-L26207)

```diff
-       b: () => Fd,
-       f: () => hd,
-       i: () => Xd,
+       d: () => Hb,
+       e: () => lb,
+       g: () => Vb,
```

#### 3403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26210` → after: `L25995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R25995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L25995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L25995) · [Before (L26210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26210)

```diff
-     var Wd = md(38779);
+     var eb = Mb(38449);
```

#### 3404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26227` → after: `L26012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26012) · [Before (L26227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26227)

```diff
-       for (const Od of Rd) Od.isFrozen && (Od.checkReadyOnlyOnce = !1, (0, Wd.fb)(Od, !1), dd.push(Od)), (0, Wd.Q)(Od);
+       for (const wb of pb) wb.isFrozen && (wb.checkReadyOnlyOnce = !1, (0, eb.cb)(wb, !1), bb.push(wb)), (0, eb.N)(wb);
```

#### 3405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26230` → after: `L26015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26015) · [Before (L26230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26230)

```diff
-           for (const Od of dd) Rd.has(Od) && (Od.checkReadyOnlyOnce = !0, (0, Wd.fb)(Od, !0))
+           for (const wb of bb) pb.has(wb) && (wb.checkReadyOnlyOnce = !0, (0, eb.cb)(wb, !0))
```

#### 3406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26235` → after: `L26020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26020) · [Before (L26235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26235)

```diff
-   38856: (dd, Od, md) => {
+   38526: (bb, wb, Mb) => {
```

#### 3407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26237-L26239` → after: `L26022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26022) · [Before (L26237-L26239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26237-L26239)

```diff
-       $: () => nd,
-       C: () => xd,
-       D: () => Ed,
+       A: () => jb,
```

#### 3408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26243-L26245` → after: `L26025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26025) · [Before (L26243-L26245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26243-L26245)

```diff
-       J: () => Pd,
-       L: () => jd,
-       M: () => Vd,
+       K: () => Nb,
```

#### 3409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26248-L26251` → after: `L26028-L26030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26028-L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26028-L26030) · [Before (L26248-L26251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26248-L26251)

```diff
-       U: () => Bd,
-       V: () => Sd,
-       Y: () => Dd,
-       Z: () => cd,
+       S: () => cb,
+       W: () => gb,
+       X: () => Rb,
```

#### 3410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26255` → after: `L26035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26035) · [Before (L26255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26255)

```diff
-       e: () => Ld,
+       d: () => Sb,
```

#### 3411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26259-L26263` → after: `L26040-L26048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26040-L26048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26040-L26048) · [Before (L26259-L26263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26259-L26263)

```diff
-       k: () => rd,
-       l: () => Nd,
-       p: () => od,
-       r: () => Id,
-       u: () => wd,
+       m: () => Ab,
+       mb: () => pb,
+       n: () => tb,
+       ob: () => lb,
+       q: () => Ub,
+       s: () => ib,
+       t: () => Xb,
+       v: () => zb,
+       x: () => rb,
```

#### 3412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L26266` → after: `L26051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R26051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L26051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/90.js#L26051) · [Before (L26266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/90.js#L26266)

```diff
-     var Wd = md(38752);
+     var eb = Mb(38419);
```
